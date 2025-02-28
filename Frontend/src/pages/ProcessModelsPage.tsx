import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Paper,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Tooltip,
  Chip,
  Menu,
  MenuItem,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  Alert,
  Snackbar,
  Grid,
  Card,
  CardContent,
  CardActions,
  ListItemIcon,
  ListItemText,
  CircularProgress,
  Divider,
  Collapse,
  CardActionArea,
  FormControlLabel,
  Switch,
  DialogActions,
  DialogContentText,
  FormGroup,
  OutlinedInput,
  List,
  ListItem,
} from '@mui/material';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  FilterList as FilterIcon,
  Search as SearchIcon,
  ContentCopy as DuplicateIcon,
  Archive as ArchiveIcon,
  MoreVert as MoreVertIcon,
  Close as CloseIcon,
  Business as BusinessIcon,
  AutoAwesome as AutoAwesomeIcon,
  Code as CodeIcon,
  DataObject as DataObjectIcon,
  ArrowDropDown as ArrowDropDownIcon,
  Flag as FlagIcon,
  AccessTime as AccessTimeIcon,
  Tag as TagIcon,
  Language as LanguageIcon,
  Public as GlobalIcon,
  Group as TeamIcon,
  Assessment as MetricsIcon,
  CheckCircle as ValidationIcon,
  Link as IntegrationIcon,
  Lock as PermissionsIcon,
  Timeline as StepsIcon,
  Visibility as ViewsIcon,
  Edit as EditIcon,
} from '@mui/icons-material';
import api from '../services/api';
import { 
  ProcessModel, 
  BPMNDiagram, 
  convertToBPMNDiagram,
  ProcessMetadata
} from '../types/process';
import { workflowService } from '../services/workflow';
import { 
  companyTemplateService, 
  CompanyProfile, 
  ProcessTemplate,
  DiagramData 
} from '../services/companyTemplates';
import { useAuth } from '../contexts/AuthContext';
import { CompanyProfileDialog } from '../components/CompanyProfileDialog';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { HoverCard, StyledCardContent } from '../components/StyledComponents';
import { DiagramPreview } from '../components/DiagramPreview';
import { BPMNEditor } from '../components/BPMNEditor';
import { getProcessSpecificMetadata } from '../components/MetadataPanel';

interface FilterOptions {
  status: 'all' | 'active' | 'archived';
  sortBy: 'name' | 'date' | 'status' | 'complexity' | 'priority';
  sortOrder: 'asc' | 'desc';
  search: string;
  tags: string[];
  dateRange: {
    start: string | null;
    end: string | null;
  };
  complexity: string[];
  priority: string[];
  category: string[];
  regions: string[];
}

const COUNTRY_OPTIONS: Record<string, string> = {
  'global': '🌐 Global',
  'multi': '🌍 Multi-Region',
  'US': '🇺🇸 United States',
  'GB': '🇬🇧 United Kingdom',
  'DE': '🇩🇪 Germany',
  'FR': '🇫🇷 France',
  'IT': '🇮🇹 Italy',
  'ES': '🇪🇸 Spain',
  'PT': '🇵🇹 Portugal',
  'NL': '🇳🇱 Netherlands',
  'BE': '🇧🇪 Belgium',
  'CH': '🇨🇭 Switzerland',
  'AT': '🇦🇹 Austria',
  'SE': '🇸🇪 Sweden',
  'DK': '🇩🇰 Denmark',
  'NO': '🇳🇴 Norway',
  'FI': '🇫🇮 Finland'
};

const defaultCompanyProfile: CompanyProfile = {
  name: 'Complete Process Landscape',
  industry: 'Technology',
  size: 'enterprise',
  departments: [
    'Executive',
    'Sales',
    'Marketing',
    'Operations',
    'Finance',
    'Human Resources',
    'IT',
    'Customer Service',
    'Research & Development',
    'Legal',
    'Quality Assurance',
    'Production',
    'Supply Chain',
    'Procurement'
  ],
  processCategories: {
    management: [
      'Strategic Planning',
      'Performance Management',
      'Risk Management',
      'Compliance Management',
      'Project Portfolio Management',
      'Change Management',
      'Quality Management',
      'Innovation Management'
    ],
    core: [
      'Product Development',
      'Sales Process',
      'Marketing Campaign Management',
      'Customer Onboarding',
      'Service Delivery',
      'Customer Support',
      'Order Processing',
      'Production Planning',
      'Manufacturing Process',
      'Supply Chain Management',
      'Procurement Process',
      'Inventory Management'
    ],
    support: [
      'HR Recruitment',
      'Employee Onboarding',
      'Training and Development',
      'Performance Review',
      'IT Service Management',
      'Financial Planning',
      'Budgeting Process',
      'Accounts Payable',
      'Accounts Receivable',
      'Legal Contract Management',
      'Facility Management',
      'Document Management'
    ],
    compliance: [
      'ISO 9001 Quality Management',
      'ISO 27001 Information Security',
      'GDPR Compliance',
      'Internal Audit',
      'External Audit',
      'Risk Assessment'
    ]
  },
  hasManufacturing: true,
  hasRetail: true,
  hasEcommerce: true,
  hasServiceDelivery: true,
  hasResearchDevelopment: true,
  regulatoryCompliance: ['ISO 9001', 'ISO 27001', 'GDPR'],
  internationalOperations: true,
  customFields: {},
  processes: [] // Required for template generation
};

const convertBPMNToProcessModel = (diagram: BPMNDiagram): ProcessModel => {
  return {
    id: diagram.id?.toString() || crypto.randomUUID(),
    name: diagram.name,
    description: diagram.description,
    diagram_data: diagram.diagram_data,
    xml_content: diagram.xml_content,
    status: diagram.status || 'active',
    createdAt: diagram.created_at || new Date().toISOString(),
    updatedAt: diagram.updated_at || new Date().toISOString(),
    metadata: diagram.metadata
  };
};

const convertTemplateToProcessModel = (template: ProcessTemplate): ProcessModel => {
  return {
    id: template.id || crypto.randomUUID(),
    name: template.name,
    description: template.description,
    diagram_data: template.diagram_data,
    xml_content: template.xml_content,
    status: 'active',
    createdAt: template.createdAt || new Date().toISOString(),
    updatedAt: template.updatedAt || new Date().toISOString(),
    metadata: {
      category: template.category,
      department: template.department,
      priority: template.priority,
      complexity: template.complexity
    }
  };
};

interface ProcessMetadataDialogProps {
  open: boolean;
  onClose: () => void;
  process: ProcessModel;
  onSave: (updatedProcess: ProcessModel) => void;
}

const ProcessMetadataDialog: React.FC<ProcessMetadataDialogProps> = ({
  open,
  onClose,
  process,
  onSave
}) => {
  // Initialize metadata with mock data and existing metadata
  const mockMetadata = getProcessSpecificMetadata(process.name);
  const [metadata, setMetadata] = useState<ProcessMetadata>({
    ...mockMetadata,  // Base mock data
    ...process.metadata,  // Server data takes precedence
    category: process.metadata?.category || mockMetadata.category || 'Other',
    department: process.metadata?.department || mockMetadata.department || 'General',
    priority: process.metadata?.priority || mockMetadata.priority || 'medium',
    complexity: process.metadata?.complexity || mockMetadata.complexity || 'medium',
    activities: process.metadata?.activities || mockMetadata.activities || [],
    kpis: process.metadata?.kpis || mockMetadata.kpis || [],
    participants: process.metadata?.participants || mockMetadata.participants || [],
    inputs: process.metadata?.inputs || mockMetadata.inputs || [],
    outputs: process.metadata?.outputs || mockMetadata.outputs || []
  });

  // Update metadata when process changes
  useEffect(() => {
    const mockMetadata = getProcessSpecificMetadata(process.name);
    setMetadata({
      ...mockMetadata,  // Base mock data
      ...process.metadata,  // Server data takes precedence
      category: process.metadata?.category || mockMetadata.category || 'Other',
      department: process.metadata?.department || mockMetadata.department || 'General',
      priority: process.metadata?.priority || mockMetadata.priority || 'medium',
      complexity: process.metadata?.complexity || mockMetadata.complexity || 'medium',
      activities: process.metadata?.activities || mockMetadata.activities || [],
      kpis: process.metadata?.kpis || mockMetadata.kpis || [],
      participants: process.metadata?.participants || mockMetadata.participants || [],
      inputs: process.metadata?.inputs || mockMetadata.inputs || [],
      outputs: process.metadata?.outputs || mockMetadata.outputs || []
    });
  }, [process]);

  const handleComplexityChange = (e: SelectChangeEvent<string>) => {
    const value = e.target.value as 'low' | 'medium' | 'high';
    setMetadata({ ...metadata, complexity: value });
  };

  const handlePriorityChange = (e: SelectChangeEvent<string>) => {
    const value = e.target.value as 'low' | 'medium' | 'high';
    setMetadata({ ...metadata, priority: value });
  };

  const handleRoleChange = (role: 'processOwner' | 'processManager' | 'processModeller', value: string) => {
    const currentDate = new Date().toISOString();
    const updates = { ...metadata };
    
    // Update the current role
    updates[role] = value;
    
    // Initialize role history if it doesn't exist
    if (!updates.roleHistory) {
      updates.roleHistory = {
        processOwners: [],
        processManagers: [],
        processModellers: []
      };
    }
    
    // Get the history array for the specific role
    const historyKey = `${role}s` as keyof typeof updates.roleHistory;
    const history = updates.roleHistory[historyKey];
    
    // Close the previous entry if it exists
    if (history.length > 0) {
      const lastEntry = history[history.length - 1];
      if (!lastEntry.to) {
        lastEntry.to = currentDate;
      }
    }
    
    // Add new entry
    if (value) {
      history.push({
        name: value,
        from: currentDate
      });
    }
    
    setMetadata(updates);
  };

  const handleSave = () => {
    const updatedProcess = {
      ...process,
      metadata: metadata
    };
    onSave(updatedProcess);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Edit Process Metadata</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 2 }}>
          Edit the metadata for this process model.
        </DialogContentText>
        
        <Grid container spacing={3} sx={{ mt: 1 }}>
          {/* Basic Information */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>Basic Information</Typography>
            <FormGroup>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Category</InputLabel>
                    <OutlinedInput
                      value={metadata.category || ''}
                      label="Category"
                      onChange={(e) => setMetadata({ ...metadata, category: e.target.value })}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Department</InputLabel>
                    <OutlinedInput
                      value={metadata.department || ''}
                      label="Department"
                      onChange={(e) => setMetadata({ ...metadata, department: e.target.value })}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </FormGroup>
          </Grid>

          {/* Process Details */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>Process Details</Typography>
            <FormGroup>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Complexity</InputLabel>
                    <Select
                      value={metadata.complexity || 'medium'}
                      label="Complexity"
                      onChange={handleComplexityChange}
                    >
                      <MenuItem value="low">Low</MenuItem>
                      <MenuItem value="medium">Medium</MenuItem>
                      <MenuItem value="high">High</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Priority</InputLabel>
                    <Select
                      value={metadata.priority || 'medium'}
                      label="Priority"
                      onChange={handlePriorityChange}
                    >
                      <MenuItem value="low">Low</MenuItem>
                      <MenuItem value="medium">Medium</MenuItem>
                      <MenuItem value="high">High</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Process Owner</InputLabel>
                    <OutlinedInput
                      value={metadata.processOwner || ''}
                      label="Process Owner"
                      onChange={(e) => handleRoleChange('processOwner', e.target.value)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Process Manager</InputLabel>
                    <OutlinedInput
                      value={metadata.processManager || ''}
                      label="Process Manager"
                      onChange={(e) => handleRoleChange('processManager', e.target.value)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Process Modeller</InputLabel>
                    <OutlinedInput
                      value={metadata.processModeller || ''}
                      label="Process Modeller"
                      onChange={(e) => handleRoleChange('processModeller', e.target.value)}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </FormGroup>
          </Grid>

          {/* Role History */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>Role History</Typography>
            <Box sx={{ maxHeight: 300, overflow: 'auto' }}>
              <Typography variant="subtitle2" gutterBottom>Process Owners</Typography>
              <List dense>
                {metadata.roleHistory?.processOwners?.map((owner, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={owner.name}
                      secondary={`From: ${new Date(owner.from).toLocaleDateString()} ${owner.to ? `To: ${new Date(owner.to).toLocaleDateString()}` : '(Current)'}`}
                    />
                  </ListItem>
                ))}
              </List>
              <Typography variant="subtitle2" gutterBottom>Process Managers</Typography>
              <List dense>
                {metadata.roleHistory?.processManagers?.map((manager, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={manager.name}
                      secondary={`From: ${new Date(manager.from).toLocaleDateString()} ${manager.to ? `To: ${new Date(manager.to).toLocaleDateString()}` : '(Current)'}`}
                    />
                  </ListItem>
                ))}
              </List>
              <Typography variant="subtitle2" gutterBottom>Process Modellers</Typography>
              <List dense>
                {metadata.roleHistory?.processModellers?.map((modeller, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={modeller.name}
                      secondary={`From: ${new Date(modeller.from).toLocaleDateString()} ${modeller.to ? `To: ${new Date(modeller.to).toLocaleDateString()}` : '(Current)'}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>

          {/* Regions */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>Region Settings</Typography>
            <FormControl fullWidth size="small">
              <InputLabel>Regions</InputLabel>
              <Select
                multiple
                value={metadata.regions || []}
                label="Regions"
                onChange={(e) => setMetadata({ ...metadata, regions: e.target.value as string[] })}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {(selected as string[]).map((value) => (
                      <Chip 
                        key={value} 
                        label={COUNTRY_OPTIONS[value] || value} 
                        size="small" 
                      />
                    ))}
                  </Box>
                )}
              >
                <MenuItem value="global">
                  <ListItemIcon>{COUNTRY_OPTIONS['global'].split(' ')[0]}</ListItemIcon>
                  <ListItemText>Global</ListItemText>
                </MenuItem>
                <MenuItem value="multi">
                  <ListItemIcon>{COUNTRY_OPTIONS['multi'].split(' ')[0]}</ListItemIcon>
                  <ListItemText>Multi-Region</ListItemText>
                </MenuItem>
                <Divider />
                {Object.entries(COUNTRY_OPTIONS).map(([code, label]) => {
                  if (code !== 'global' && code !== 'multi') {
                    return (
                      <MenuItem key={code} value={code}>
                        <ListItemIcon>{label.split(' ')[0]}</ListItemIcon>
                        <ListItemText>{label.split(' ').slice(1).join(' ')}</ListItemText>
                      </MenuItem>
                    );
                  }
                  return null;
                })}
              </Select>
            </FormControl>
          </Grid>

          {/* Process Metrics */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>Process Metrics</Typography>
            <FormGroup>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Number of Steps</InputLabel>
                    <OutlinedInput
                      type="number"
                      value={metadata.steps || 0}
                      label="Number of Steps"
                      onChange={(e) => setMetadata({ ...metadata, steps: parseInt(e.target.value) || 0 })}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Success Rate (%)</InputLabel>
                    <OutlinedInput
                      type="number"
                      value={metadata.successRate || 0}
                      label="Success Rate (%)"
                      onChange={(e) => setMetadata({ ...metadata, successRate: parseInt(e.target.value) || 0 })}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </FormGroup>
          </Grid>

          {/* Required Roles and Integrations */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>Roles and Integrations</Typography>
            <FormGroup>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Required Roles</InputLabel>
                    <Select
                      multiple
                      value={metadata.requiredRoles || []}
                      label="Required Roles"
                      onChange={(e) => setMetadata({ ...metadata, requiredRoles: e.target.value as string[] })}
                      renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {(selected as string[]).map((value) => (
                            <Chip key={value} label={value} size="small" />
                          ))}
                        </Box>
                      )}
                    >
                      <MenuItem value="Process Owner">Process Owner</MenuItem>
                      <MenuItem value="Process Manager">Process Manager</MenuItem>
                      <MenuItem value="Process Participant">Process Participant</MenuItem>
                      <MenuItem value="Process Auditor">Process Auditor</MenuItem>
                      <MenuItem value="System Administrator">System Administrator</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Integrations</InputLabel>
                    <Select
                      multiple
                      value={metadata.integrations || []}
                      label="Integrations"
                      onChange={(e) => setMetadata({ ...metadata, integrations: e.target.value as string[] })}
                      renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {(selected as string[]).map((value) => (
                            <Chip key={value} label={value} size="small" />
                          ))}
                        </Box>
                      )}
                    >
                      <MenuItem value="ERP">ERP System</MenuItem>
                      <MenuItem value="CRM">CRM System</MenuItem>
                      <MenuItem value="HR">HR System</MenuItem>
                      <MenuItem value="Finance">Finance System</MenuItem>
                      <MenuItem value="Document Management">Document Management</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </FormGroup>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained">Save Changes</Button>
      </DialogActions>
    </Dialog>
  );
};

export function ProcessModelsPage() {
  const { user } = useAuth();
  const [processes, setProcesses] = useState<ProcessModel[]>([]);
  const [diagrams, setDiagrams] = useState<BPMNDiagram[]>([]);
  const [filteredDiagrams, setFilteredDiagrams] = useState<BPMNDiagram[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    status: 'all',
    sortBy: 'date',
    sortOrder: 'desc',
    search: '',
    tags: [],
    dateRange: {
      start: null,
      end: null,
    },
    complexity: [],
    priority: [],
    category: [],
    regions: [],
  });
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedMenuDiagram, setSelectedMenuDiagram] = useState<BPMNDiagram | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [currentDiagram, setCurrentDiagram] = useState<BPMNDiagram | null>(null);
  const [diagramPreviews, setDiagramPreviews] = useState<Record<string, string>>({});
  const [error, setError] = useState<string | null>(null);
  const [generatingTemplates, setGeneratingTemplates] = useState(false);
  const [showCompanyProfileDialog, setShowCompanyProfileDialog] = useState(false);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);
  const [templateMenuAnchorEl, setTemplateMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [isLivePreview, setIsLivePreview] = useState(false);
  const [metadataDialogOpen, setMetadataDialogOpen] = useState(false);
  const [selectedProcess, setSelectedProcess] = useState<ProcessModel | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const isAdmin = user?.role === 'admin';

  useEffect(() => {
    loadProcesses();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [diagrams, searchQuery, filterOptions]);

  const loadProcesses = async () => {
    try {
      setLoading(true);
      const fetchedDiagrams = await workflowService.getProcesses();
      
      // Transform backend BPMNDiagram data to our frontend ProcessModel type
      const validProcesses = fetchedDiagrams
        .filter(d => d !== null)
        .map(diagram => {
          const processModel = convertBPMNToProcessModel(diagram);
          // Get and merge mock metadata based on process name
          const mockMetadata = getProcessSpecificMetadata(processModel.name);
          return {
            ...processModel,
            metadata: {
              ...mockMetadata,  // Base mock data
              ...processModel.metadata,  // Server data takes precedence
              category: processModel.metadata?.category || mockMetadata.category || 'Other',
              department: processModel.metadata?.department || mockMetadata.department || 'General',
              priority: processModel.metadata?.priority || mockMetadata.priority || 'medium',
              complexity: processModel.metadata?.complexity || mockMetadata.complexity || 'medium',
              activities: processModel.metadata?.activities || mockMetadata.activities || [],
              kpis: processModel.metadata?.kpis || mockMetadata.kpis || [],
              participants: processModel.metadata?.participants || mockMetadata.participants || [],
              inputs: processModel.metadata?.inputs || mockMetadata.inputs || [],
              outputs: processModel.metadata?.outputs || mockMetadata.outputs || []
            }
          };
        });
      
      setProcesses(validProcesses);
      
      // Convert ProcessModel to BPMNDiagram format for the editor
      const convertedDiagrams = validProcesses.map(process => {
        const bpmnDiagram = convertToBPMNDiagram(process);
        // Ensure metadata is preserved in the BPMNDiagram
        bpmnDiagram.metadata = process.metadata;
        return bpmnDiagram;
      });
      setDiagrams(convertedDiagrams);
      
      // Load XML for previews
      const previews: Record<string, string> = {};
      for (const diagram of convertedDiagrams) {
        if (diagram.id) {
          try {
            // First try to use existing XML content
            if (diagram.xml_content) {
              previews[diagram.id] = diagram.xml_content;
            } else {
              // If no XML content exists, fetch it from the server
              const response = await api.diagrams.getXML(diagram.id);
              if (response?.xml) {
                previews[diagram.id] = response.xml;
                // Update the diagram with the fetched XML
                diagram.xml_content = response.xml;
              }
            }
          } catch (error) {
            console.error(`Error loading preview for diagram ${diagram.id}:`, error);
          }
        }
      }
      
      // Update states with the loaded XML content
      setDiagramPreviews(previews);
      setDiagrams([...convertedDiagrams]); // Update diagrams with loaded XML
      setError(null);
    } catch (err) {
      setError('Failed to load processes');
      console.error('Error loading processes:', err);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...diagrams];

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(diagram => {
        const nameMatch = diagram.name.toLowerCase().includes(query);
        const descriptionMatch = diagram.description?.toLowerCase().includes(query) || false;
        const statusMatch = diagram.status?.toLowerCase().includes(query) || false;
        const tagsMatch = diagram.metadata?.tags?.some((tag: string) => 
          tag.toLowerCase().includes(query)
        ) || false;
        const metadataMatch = diagram.metadata ? 
          Object.values(diagram.metadata).some(value => 
            value && value.toString().toLowerCase().includes(query)
          ) : false;
        
        return nameMatch || descriptionMatch || statusMatch || tagsMatch || metadataMatch;
      });
    }

    // Apply status filter
    if (filterOptions.status !== 'all') {
      filtered = filtered.filter(diagram => diagram.status === filterOptions.status);
    }

    // Apply tag filters
    if (filterOptions.tags.length > 0) {
      filtered = filtered.filter(diagram => {
        const diagramTags = diagram.metadata?.tags || [];
        return filterOptions.tags.every(tag => diagramTags.includes(tag));
      });
    }

    // Apply date range filter
    if (filterOptions.dateRange.start || filterOptions.dateRange.end) {
      filtered = filtered.filter(diagram => {
        const diagramDate = new Date(diagram.updated_at || diagram.created_at || '').getTime();
        const startDate = filterOptions.dateRange.start ? new Date(filterOptions.dateRange.start).getTime() : null;
        const endDate = filterOptions.dateRange.end ? new Date(filterOptions.dateRange.end).getTime() : null;

        if (startDate && endDate) {
          return diagramDate >= startDate && diagramDate <= endDate;
        } else if (startDate) {
          return diagramDate >= startDate;
        } else if (endDate) {
          return diagramDate <= endDate;
        }
        return true;
      });
    }

    // Apply complexity filter
    if (filterOptions.complexity.length > 0) {
      filtered = filtered.filter(diagram => 
        filterOptions.complexity.includes(diagram.metadata?.complexity || 'medium')
      );
    }

    // Apply priority filter
    if (filterOptions.priority.length > 0) {
      filtered = filtered.filter(diagram => 
        filterOptions.priority.includes(diagram.metadata?.priority || 'medium')
      );
    }

    // Apply category filter
    if (filterOptions.category.length > 0) {
      filtered = filtered.filter(diagram => 
        filterOptions.category.includes(diagram.metadata?.category || 'uncategorized')
      );
    }

    // Apply region filter
    if (filterOptions.regions.length > 0) {
      filtered = filtered.filter(diagram => {
        const diagramRegions = diagram.metadata?.regions || [];
        
        // If 'global' is selected, include processes marked as global
        if (filterOptions.regions.includes('global') && diagramRegions.length === 0) {
          return true;
        }
        
        // If 'multi' is selected, include processes with multiple regions
        if (filterOptions.regions.includes('multi') && diagramRegions.length > 1) {
          return true;
        }
        
        // Check for specific country matches
        return filterOptions.regions.some(region => 
          region !== 'global' && region !== 'multi' && diagramRegions.includes(region)
        );
      });
    }

    // Apply sorting
    filtered.sort((a, b) => {
      const order = filterOptions.sortOrder === 'asc' ? 1 : -1;
      
      switch (filterOptions.sortBy) {
        case 'name':
          return order * a.name.localeCompare(b.name);
        case 'date':
          const aDate = new Date(a.updated_at || a.created_at || '').getTime();
          const bDate = new Date(b.updated_at || b.created_at || '').getTime();
          return order * (bDate - aDate);
        case 'status':
          const aStatus = a.status || 'active';
          const bStatus = b.status || 'active';
          return order * aStatus.localeCompare(bStatus);
        case 'complexity':
          const aComplexity = a.metadata?.complexity || 'medium';
          const bComplexity = b.metadata?.complexity || 'medium';
          return order * aComplexity.localeCompare(bComplexity);
        case 'priority':
          const aPriority = a.metadata?.priority || 'medium';
          const bPriority = b.metadata?.priority || 'medium';
          return order * aPriority.localeCompare(bPriority);
        default:
          return 0;
      }
    });

    setFilteredDiagrams(filtered);
  };

  const handleProcessClick = (process: ProcessModel | BPMNDiagram) => {
    const diagram = 'createdAt' in process ? convertToBPMNDiagram(process) : process;
    
    // Get mock metadata based on the process name
    const mockMetadata = getProcessSpecificMetadata(diagram.name);
    
    // Ensure metadata is properly set in the diagram
    const updatedDiagram: BPMNDiagram = {
      ...diagram,
      metadata: {
        ...mockMetadata,  // Base mock data
        ...diagram.metadata,  // Server data takes precedence
        category: diagram.metadata?.category || mockMetadata.category || 'Other',
        department: diagram.metadata?.department || mockMetadata.department || 'General',
        priority: diagram.metadata?.priority || mockMetadata.priority || 'medium',
        complexity: diagram.metadata?.complexity || mockMetadata.complexity || 'medium',
        activities: diagram.metadata?.activities || mockMetadata.activities || [],
        kpis: diagram.metadata?.kpis || mockMetadata.kpis || [],
        participants: diagram.metadata?.participants || mockMetadata.participants || [],
        inputs: diagram.metadata?.inputs || mockMetadata.inputs || [],
        outputs: diagram.metadata?.outputs || mockMetadata.outputs || []
      }
    };
    
    setCurrentDiagram(updatedDiagram);
    
    // Convert the diagram back to ProcessModel for metadata display
    const processModel: ProcessModel = {
      id: updatedDiagram.id?.toString() || '',
      name: updatedDiagram.name,
      description: updatedDiagram.description || '',
      diagram_data: updatedDiagram.diagram_data,
      xml_content: updatedDiagram.xml_content || '',
      status: updatedDiagram.status || 'active',
      createdAt: updatedDiagram.created_at || new Date().toISOString(),
      updatedAt: updatedDiagram.updated_at || new Date().toISOString(),
      metadata: updatedDiagram.metadata
    };
    
    setSelectedProcess(processModel);
    setIsEditorOpen(true);
  };

  const handleCreateProcess = () => {
    const now = new Date().toISOString();
    const diagramData: DiagramData = {
      nodes: [],
      edges: [],
      type: 'bpmn',
      version: '2.0',
      properties: {
        processType: 'uncategorized',
        department: 'general'
      }
    };

    const mockMetadata = getProcessSpecificMetadata('Sales Pipeline Management');
    
    const processTemplate: ProcessTemplate = {
      name: 'New Process',
      description: '',
      category: mockMetadata.category || 'core',
      department: mockMetadata.department || 'Sales',
      priority: mockMetadata.priority || 'medium',
      complexity: mockMetadata.complexity || 'medium',
      metadata: mockMetadata,
      status: 'active',
      diagram_data: diagramData,
      xml_content: '<?xml version="1.0" encoding="UTF-8"?><bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"></bpmn:definitions>',
      createdAt: now,
      updatedAt: now
    };

    workflowService.createProcess(processTemplate)
      .then(process => {
        if (process) {
          loadProcesses();
          const processModel: ProcessModel = {
            ...process,
            id: process.id || crypto.randomUUID(),
            createdAt: process.createdAt || now,
            updatedAt: process.updatedAt || now
          };
          const bpmnDiagram: BPMNDiagram = convertToBPMNDiagram(processModel);
          handleProcessClick(bpmnDiagram);
        }
      })
      .catch(error => {
        console.error('Error creating process:', error);
        showSnackbar('Failed to create process', 'error');
      });
  };

  const handleDeleteDiagram = async (id?: number) => {
    if (id) {
      try {
        await api.diagrams.delete(id);
        setDiagrams(prevDiagrams => prevDiagrams.filter(d => d.id !== id));
        handleMenuClose();
        showSnackbar('Process model deleted successfully', 'success');
      } catch (error) {
        showSnackbar('Failed to delete process model', 'error');
      }
    }
  };

  const handleFilterChange = (event: SelectChangeEvent<string | string[]>) => {
    const { name, value } = event.target;
    setFilterOptions(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRemoveFilter = (filterType: keyof FilterOptions, value: string) => {
    setFilterOptions(prev => ({
      ...prev,
      [filterType]: Array.isArray(prev[filterType]) 
        ? (prev[filterType] as string[]).filter((v: string) => v !== value)
        : prev[filterType]
    }));
  };

  const handleRemoveDateFilter = (type: 'start' | 'end') => {
    setFilterOptions(prev => ({
      ...prev,
      dateRange: {
        ...prev.dateRange,
        [type]: null
      }
    }));
  };

  const showSnackbar = (message: string, severity: 'success' | 'error') => {
    setNotification({
      type: severity,
      message,
    });
  };

  const getStatusChipColor = (status?: string) => {
    switch (status) {
      case 'active':
        return 'success';
      case 'archived':
        return 'default';
      default:
        return 'primary';
    }
  };

  const handleSaveDiagram = async (updatedDiagram: BPMNDiagram) => {
    try {
      if (currentDiagram?.id) {
        await api.diagrams.update(currentDiagram.id, updatedDiagram);
        await loadProcesses();
        showSnackbar('Process model saved successfully', 'success');
      }
    } catch (error) {
      console.error('Error saving diagram:', error);
      showSnackbar('Failed to save process model', 'error');
    }
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, item: ProcessModel | BPMNDiagram) => {
    event.stopPropagation();
    setMenuAnchorEl(event.currentTarget);
    if ('createdAt' in item) {
      // Item is a ProcessModel
      const diagram = convertToBPMNDiagram(item);
      setSelectedMenuDiagram(diagram);
    } else {
      // Item is already a BPMNDiagram
      setSelectedMenuDiagram(item);
    }
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
    setSelectedMenuDiagram(null);
  };

  const handleOpenProcess = (processId: string) => {
    const process = processes.find(p => p.id === processId);
    if (process) {
      const diagram = convertToBPMNDiagram(process);
      setCurrentDiagram(diagram);
      setIsEditorOpen(true);
    }
  };

  const handleDeleteAllProcesses = async () => {
    if (!isAdmin) {
      setError('Only administrators can perform this action');
      return;
    }

    try {
      setLoading(true);
      await workflowService.deleteAllProcesses();
      await loadProcesses();
      setError(null);
      showSnackbar('All processes deleted successfully', 'success');
    } catch (err) {
      setError('Failed to delete processes');
      console.error('Error deleting processes:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateTemplates = async (profile: CompanyProfile) => {
    setIsLoading(true);
    try {
      console.log('Generating templates for profile:', profile);
      
      // Attempt to generate templates using the service
      const templates = await companyTemplateService.generateProcessLandscape(profile);
      
      if (!templates || templates.length === 0) {
        throw new Error('No templates were generated');
      }
      
      console.log(`Generated ${templates.length} templates`);
      
      // Create processes from templates
      const createdProcesses = [];
      for (const template of templates) {
        try {
          // Use the template data to create a new process
          const newProcess = await workflowService.createProcess({
            name: template.name,
            description: template.description || `${template.name} process`,
            category: template.category || 'process',
            department: template.department || 'general',
            priority: template.priority || 'medium',
            complexity: template.complexity || 'medium',
            status: 'active'
          });
          
          createdProcesses.push(newProcess);
        } catch (createError) {
          console.error(`Failed to create process from template ${template.name}:`, createError);
        }
      }
      
      setIsLoading(false);
      
      if (createdProcesses.length > 0) {
        showSnackbar(`Successfully created ${createdProcesses.length} processes from templates`, 'success');
        // Refresh the process list
        loadProcesses();
      } else {
        showSnackbar('No processes were created from templates', 'warning');
      }
    } catch (error) {
      console.error('Failed to generate templates:', error);
      setIsLoading(false);
      showSnackbar(`Failed to generate templates: ${error instanceof Error ? error.message : 'Unknown error'}`, 'error');
    }
  };

  const handleGenerateCompleteLandscape = async () => {
    try {
      setLoading(true);
      setError(null);

      const companyProfile: CompanyProfile = {
        ...defaultCompanyProfile,
        name: 'Complete Process Landscape'
      };

      await handleGenerateTemplates(companyProfile);
    } catch (error) {
      console.error('Error generating complete landscape:', error);
      showSnackbar('Failed to generate complete process landscape', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDuplicateDiagram = async (diagram: BPMNDiagram) => {
    if (!diagram.id) {
      showSnackbar('Invalid diagram data', 'error');
      return;
    }
    try {
      const response = await api.diagrams.getXML(diagram.id);
      if (!response?.xml) {
        throw new Error('Failed to get diagram XML');
      }
      const now = new Date().toISOString();
      const newDiagram = await api.diagrams.create({
        name: `${diagram.name} (Copy)`,
        description: diagram.description || '',
        diagram_data: diagram.diagram_data || { nodes: [], edges: [] },
        xml_content: response.xml,
        status: 'active',
        created_at: now,
        updated_at: now,
        metadata: diagram.metadata
      });
      if (newDiagram) {
        setDiagrams(prevDiagrams => [...prevDiagrams.filter(d => d !== null), newDiagram]);
        showSnackbar('Process model duplicated successfully', 'success');
      }
    } catch (error) {
      showSnackbar('Failed to duplicate process model', 'error');
    }
  };

  const handleArchiveDiagram = async (diagram: BPMNDiagram) => {
    if (!diagram.id) return;
    try {
      const now = new Date().toISOString();
      const updatedDiagram = await api.diagrams.update(diagram.id, {
        ...diagram,
        status: diagram.status === 'active' ? 'archived' : 'active',
        updated_at: now
      });
      if (updatedDiagram) {
        setDiagrams(prevDiagrams => 
          prevDiagrams
            .map(d => d?.id === diagram.id ? updatedDiagram : d)
            .filter((d): d is BPMNDiagram => d !== null)
        );
        showSnackbar(`Process model ${diagram.status === 'active' ? 'archived' : 'activated'} successfully`, 'success');
      }
    } catch (error) {
      showSnackbar('Failed to update process model status', 'error');
    }
  };

  const handleExportDiagram = async (diagram: BPMNDiagram, format: 'xml' | 'json') => {
    const diagramId = diagram.id;
    if (!diagramId) {
      showSnackbar('Invalid diagram data', 'error');
      return;
    }
    try {
      const blob = await api.diagrams.export(diagramId, format);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${diagram.name}.${format}`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      showSnackbar('Failed to export process model', 'error');
    }
  };

  const handleTemplateMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setTemplateMenuAnchorEl(event.currentTarget);
  };

  const handleTemplateMenuClose = () => {
    setTemplateMenuAnchorEl(null);
  };

  const handleCreateFromTemplate = async (template: ProcessTemplate) => {
    try {
      const diagramData: DiagramData = {
        nodes: template.diagram_data.nodes,
        edges: template.diagram_data.edges,
        type: 'bpmn',
        version: template.diagram_data.version || '2.0',
        properties: template.diagram_data.properties
      };

      const processTemplate: ProcessTemplate = {
        ...template,
        diagram_data: diagramData
      };

      const process = await workflowService.createProcess(processTemplate);
      if (process) {
        loadProcesses();
        showSnackbar('Process created successfully', 'success');
      } else {
        showSnackbar('Failed to create process', 'error');
      }
    } catch (error) {
      console.error('Error creating process:', error);
      showSnackbar('Failed to create process', 'error');
    }
  };

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      'Management': '💼',
      'Core': '⭐',
      'Support': '🔧',
      'Compliance': '📋',
      'Finance': '💰',
      'Operations': '🏭',
      'HR': '👥',
      'IT': '💻',
      'Legal': '⚖️',
      'Customer Service': '🎯',
      'Project Management': '📊',
      'Marketing': '📢',
      'Innovation': '💡',
      'Sustainability': '🌱'
    };
    return icons[category] || '📝';
  };

  const getComplexityIndicator = (complexity: string) => {
    switch (complexity?.toLowerCase()) {
      case 'high':
        return '⚡⚡⚡';
      case 'medium':
        return '⚡⚡';
      case 'low':
        return '⚡';
      default:
        return '⚡';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority?.toLowerCase()) {
      case 'high':
        return 'error';
      case 'medium':
        return 'warning';
      case 'low':
        return 'success';
      default:
        return 'default';
    }
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getRegionIndicator = (regions?: string[]) => {
    if (!regions || regions.length === 0) return '🌐'; // Global default
    if (regions.length > 1) return '🌍'; // Multiple regions
    
    // ISO country code to flag emoji (add more as needed)
    const countryFlags: Record<string, string> = {
      'US': '🇺🇸',
      'GB': '🇬🇧',
      'DE': '🇩🇪',
      'FR': '🇫🇷',
      'IT': '🇮🇹',
      'ES': '🇪🇸',
      'PT': '🇵🇹',
      'NL': '🇳🇱',
      'BE': '🇧🇪',
      'CH': '🇨🇭',
      'AT': '🇦🇹',
      'SE': '🇸🇪',
      'DK': '🇩🇰',
      'NO': '🇳🇴',
      'FI': '🇫🇮',
      'PL': '🇵🇱',
      'CZ': '🇨🇿',
      'HU': '🇭🇺',
      'RO': '🇷🇴',
      'BG': '🇧🇬',
      'GR': '🇬🇷',
      'TR': '🇹🇷',
      'RU': '🇷🇺',
      'CN': '🇨🇳',
      'JP': '🇯🇵',
      'KR': '🇰🇷',
      'IN': '🇮🇳',
      'BR': '🇧🇷',
      'MX': '🇲🇽',
      'CA': '🇨🇦',
      'AU': '🇦🇺',
      'NZ': '🇳🇿',
      'ZA': '🇿🇦',
      'AE': '🇦🇪',
      'SA': '🇸🇦',
      'IL': '🇮🇱',
      'SG': '🇸🇬',
      'MY': '🇲🇾',
      'ID': '🇮🇩',
      'TH': '🇹🇭',
      'VN': '🇻🇳',
      'PH': '🇵🇭'
    };

    return countryFlags[regions[0]] || '🏳️';
  };

  const getValidationStatus = (status?: string) => {
    switch (status?.toLowerCase()) {
      case 'valid':
        return { icon: <ValidationIcon color="success" />, label: 'Valid' };
      case 'invalid':
        return { icon: <ValidationIcon color="error" />, label: 'Invalid' };
      case 'warning':
        return { icon: <ValidationIcon color="warning" />, label: 'Warnings' };
      default:
        return { icon: <ValidationIcon color="disabled" />, label: 'Not Validated' };
    }
  };

  const formatMetric = (value: number) => {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
    return value.toString();
  };

  const renderProcessCard = (process: ProcessModel) => {
    const category = process.metadata?.category || 'Uncategorized';
    const complexity = process.metadata?.complexity || 'medium';
    const priority = process.metadata?.priority || 'medium';
    const department = process.metadata?.department || 'General';
    const lastModified = process.updatedAt || process.createdAt;
    const regions = process.metadata?.regions || [];
    const steps = process.metadata?.steps || 0;
    const views = process.metadata?.views || 0;
    const successRate = process.metadata?.successRate || 0;
    const avgCompletionTime = process.metadata?.avgCompletionTime || 0;
    const validationStatus = process.metadata?.validationStatus;
    const requiredRoles = process.metadata?.requiredRoles || [];
    const integrations = process.metadata?.integrations || [];
    const owner = process.metadata?.processOwner;

    return (
      <Grid item xs={12} sm={6} md={4} lg={3} key={process.id}>
        <HoverCard>
          <CardActionArea onClick={() => handleOpenProcess(process.id)}>
            <Box sx={{ position: 'relative', height: 200 }}>
              <DiagramPreview
                diagramId={process.id}
                width={400}
                height={200}
                style={{ width: '100%', height: '100%' }}
                isLivePreview={isLivePreview}
                refreshInterval={5000}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  display: 'flex',
                  gap: 0.5,
                  alignItems: 'center'
                }}
              >
                <Tooltip title={regions.length > 1 ? `Multi-Region (${regions.join(', ')})` : regions.length === 1 ? regions[0] : 'Global'}>
                  <Chip
                    size="small"
                    icon={regions.length > 1 ? <LanguageIcon /> : <GlobalIcon />}
                    label={getRegionIndicator(regions)}
                    variant="outlined"
                  />
                </Tooltip>
                <Chip
                  size="small"
                  label={process.status}
                  color={getStatusChipColor(process.status)}
                />
              </Box>
            </Box>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Typography variant="h6" noWrap sx={{ flex: 1 }}>
                  {getCategoryIcon(category)} {process.name}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" noWrap>
                {process.description}
              </Typography>
              
              {/* Process Metadata Row 1 */}
              <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                <Tooltip title="Complexity">
                  <Chip
                    size="small"
                    label={getComplexityIndicator(complexity)}
                    variant="outlined"
                  />
                </Tooltip>
                <Tooltip title="Priority">
                  <Chip
                    size="small"
                    icon={<FlagIcon />}
                    label={priority}
                    color={getPriorityColor(priority)}
                    variant="outlined"
                  />
                </Tooltip>
                <Tooltip title="Department">
                  <Chip
                    size="small"
                    icon={<BusinessIcon />}
                    label={department}
                    variant="outlined"
                  />
                </Tooltip>
              </Box>

              {/* Process Metrics Row */}
              <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                <Tooltip title="Number of Steps">
                  <Chip
                    size="small"
                    icon={<StepsIcon />}
                    label={`${steps} steps`}
                    variant="outlined"
                  />
                </Tooltip>
                <Tooltip title="Views">
                  <Chip
                    size="small"
                    icon={<ViewsIcon />}
                    label={formatMetric(views)}
                    variant="outlined"
                  />
                </Tooltip>
                {successRate > 0 && (
                  <Tooltip title="Success Rate">
                    <Chip
                      size="small"
                      icon={<MetricsIcon />}
                      label={`${successRate}%`}
                      color={successRate >= 90 ? 'success' : successRate >= 70 ? 'warning' : 'error'}
                      variant="outlined"
                    />
                  </Tooltip>
                )}
              </Box>

              {/* Process Details Row */}
              <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {validationStatus && (
                  <Tooltip title={`Validation: ${getValidationStatus(validationStatus).label}`}>
                    <Chip
                      size="small"
                      icon={getValidationStatus(validationStatus).icon}
                      label={getValidationStatus(validationStatus).label}
                      variant="outlined"
                    />
                  </Tooltip>
                )}
                {requiredRoles.length > 0 && (
                  <Tooltip title={`Required Roles: ${requiredRoles.join(', ')}`}>
                    <Chip
                      size="small"
                      icon={<PermissionsIcon />}
                      label={`${requiredRoles.length} roles`}
                      variant="outlined"
                    />
                  </Tooltip>
                )}
                {integrations.length > 0 && (
                  <Tooltip title={`Integrations: ${integrations.join(', ')}`}>
                    <Chip
                      size="small"
                      icon={<IntegrationIcon />}
                      label={`${integrations.length} integrations`}
                      variant="outlined"
                    />
                  </Tooltip>
                )}
              </Box>

              {/* Process Ownership & Timing Row */}
              <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                {owner && (
                  <Tooltip title="Process Owner">
                    <Chip
                      size="small"
                      icon={<TeamIcon />}
                      label={owner}
                      variant="outlined"
                    />
                  </Tooltip>
                )}
                <Box sx={{ flex: 1 }} />
                <AccessTimeIcon sx={{ fontSize: 'small', color: 'text.secondary' }} />
                <Typography variant="caption" color="text.secondary">
                  Last modified: {formatDate(lastModified)}
                </Typography>
              </Box>

              {/* Version Information */}
              {process.metadata?.version && (
                <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <TagIcon sx={{ fontSize: 'small', color: 'text.secondary' }} />
                  <Typography variant="caption" color="text.secondary">
                    Version {process.metadata.version}
                  </Typography>
                </Box>
              )}
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Tooltip title="Edit in BPMN Editor">
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  handleProcessClick(process);
                }}
                color="primary"
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
            <IconButton
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                handleMenuOpen(e, process);
              }}
            >
              <MoreVertIcon />
            </IconButton>
          </CardActions>
        </HoverCard>
      </Grid>
    );
  };

  const handleEditMetadata = (process: ProcessModel) => {
    setSelectedProcess(process);
    setMetadataDialogOpen(true);
  };

  const handleSaveMetadata = async (updatedProcess: ProcessModel) => {
    try {
      if (!updatedProcess.id) return;
      
      // Get the base mock data for this process type
      const mockMetadata = getProcessSpecificMetadata(updatedProcess.name);
      
      // Create a new diagram with the updated metadata
      const bpmnDiagram: BPMNDiagram = {
        id: parseInt(updatedProcess.id),
        name: updatedProcess.name,
        description: updatedProcess.description,
        diagram_data: updatedProcess.diagram_data,
        xml_content: updatedProcess.xml_content,
        status: updatedProcess.status,
        metadata: {
          ...mockMetadata,  // Base mock data
          ...updatedProcess.metadata,  // User updates take precedence
          category: updatedProcess.metadata?.category || mockMetadata.category || 'Other',
          department: updatedProcess.metadata?.department || mockMetadata.department || 'General',
          priority: updatedProcess.metadata?.priority || mockMetadata.priority || 'medium',
          complexity: updatedProcess.metadata?.complexity || mockMetadata.complexity || 'medium',
          activities: updatedProcess.metadata?.activities || mockMetadata.activities || [],
          kpis: updatedProcess.metadata?.kpis || mockMetadata.kpis || [],
          participants: updatedProcess.metadata?.participants || mockMetadata.participants || [],
          inputs: updatedProcess.metadata?.inputs || mockMetadata.inputs || [],
          outputs: updatedProcess.metadata?.outputs || mockMetadata.outputs || []
        },
        created_at: updatedProcess.createdAt,
        updated_at: new Date().toISOString()
      };

      await api.diagrams.update(parseInt(updatedProcess.id), bpmnDiagram);
      await loadProcesses();
      showSnackbar('Process metadata updated successfully', 'success');
    } catch (error) {
      console.error('Error updating process metadata:', error);
      showSnackbar('Failed to update process metadata', 'error');
    }
  };

  if (loading && processes.length === 0) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      overflow: 'hidden',
      p: 3,
    }}>
      {/* Header */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>Process Models</Typography>
        
        {/* Search and Filter Toolbar */}
        <Box sx={{ 
          display: 'flex', 
          gap: 2, 
          mb: 2,
          alignItems: 'flex-start',
          flexWrap: 'wrap'
        }}>
          <Box sx={{ flex: 1, minWidth: 300 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search processes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Status</InputLabel>
              <Select
                value={filterOptions.status}
                label="Status"
                onChange={(e) => handleFilterChange(e as SelectChangeEvent<string>)}
                name="status"
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="archived">Archived</MenuItem>
              </Select>
            </FormControl>

            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Sort By</InputLabel>
              <Select
                value={filterOptions.sortBy}
                label="Sort By"
                onChange={(e) => handleFilterChange(e as SelectChangeEvent<string>)}
                name="sortBy"
              >
                <MenuItem value="name">Name</MenuItem>
                <MenuItem value="date">Date</MenuItem>
                <MenuItem value="status">Status</MenuItem>
                <MenuItem value="complexity">Complexity</MenuItem>
                <MenuItem value="priority">Priority</MenuItem>
              </Select>
            </FormControl>

            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Order</InputLabel>
              <Select
                value={filterOptions.sortOrder}
                label="Order"
                onChange={(e) => handleFilterChange(e as SelectChangeEvent<string>)}
                name="sortOrder"
              >
                <MenuItem value="asc">Ascending</MenuItem>
                <MenuItem value="desc">Descending</MenuItem>
              </Select>
            </FormControl>

            <Tooltip title="Advanced Filters">
              <IconButton 
                size="small"
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                color={showAdvancedFilters ? "primary" : "default"}
              >
                <FilterIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Clear Filters">
              <IconButton 
                size="small"
                onClick={() => {
                  setSearchQuery('');
                  setFilterOptions({
                    status: 'all',
                    sortBy: 'date',
                    sortOrder: 'desc',
                    search: '',
                    tags: [],
                    dateRange: {
                      start: null,
                      end: null,
                    },
                    complexity: [],
                    priority: [],
                    category: [],
                    regions: [],
                  });
                }}
              >
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        {/* Advanced Filters */}
        <Collapse in={showAdvancedFilters}>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <FormControl fullWidth size="small">
                  <InputLabel>Category</InputLabel>
                  <Select
                    multiple
                    value={filterOptions.category}
                    label="Category"
                    onChange={(e) => handleFilterChange(e as SelectChangeEvent<string[]>)}
                    name="category"
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} size="small" />
                        ))}
                      </Box>
                    )}
                  >
                    <MenuItem value="management">Management</MenuItem>
                    <MenuItem value="core">Core</MenuItem>
                    <MenuItem value="support">Support</MenuItem>
                    <MenuItem value="compliance">Compliance</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <FormControl fullWidth size="small">
                  <InputLabel>Complexity</InputLabel>
                  <Select
                    multiple
                    value={filterOptions.complexity}
                    label="Complexity"
                    onChange={(e) => handleFilterChange(e as SelectChangeEvent<string[]>)}
                    name="complexity"
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} size="small" />
                        ))}
                      </Box>
                    )}
                  >
                    <MenuItem value="low">Low</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="high">High</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <FormControl fullWidth size="small">
                  <InputLabel>Priority</InputLabel>
                  <Select
                    multiple
                    value={filterOptions.priority}
                    label="Priority"
                    onChange={(e) => handleFilterChange(e as SelectChangeEvent<string[]>)}
                    name="priority"
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} size="small" />
                        ))}
                      </Box>
                    )}
                  >
                    <MenuItem value="low">Low</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="high">High</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      label="From"
                      value={filterOptions.dateRange.start ? new Date(filterOptions.dateRange.start) : null}
                      onChange={(newValue: Date | null) => {
                        setFilterOptions(prev => ({
                          ...prev,
                          dateRange: {
                            ...prev.dateRange,
                            start: newValue ? newValue.toISOString() : null
                          }
                        }));
                      }}
                      slotProps={{
                        textField: {
                          size: 'small',
                          fullWidth: true
                        }
                      }}
                    />
                    <DesktopDatePicker
                      label="To"
                      value={filterOptions.dateRange.end ? new Date(filterOptions.dateRange.end) : null}
                      onChange={(newValue: Date | null) => {
                        setFilterOptions(prev => ({
                          ...prev,
                          dateRange: {
                            ...prev.dateRange,
                            end: newValue ? newValue.toISOString() : null
                          }
                        }));
                      }}
                      slotProps={{
                        textField: {
                          size: 'small',
                          fullWidth: true
                        }
                      }}
                    />
                  </LocalizationProvider>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <FormControl fullWidth size="small">
                  <InputLabel>Region</InputLabel>
                  <Select
                    multiple
                    value={filterOptions.regions}
                    label="Region"
                    onChange={(e) => handleFilterChange(e as SelectChangeEvent<string[]>)}
                    name="regions"
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip 
                            key={value} 
                            label={COUNTRY_OPTIONS[value] || value} 
                            size="small" 
                          />
                        ))}
                      </Box>
                    )}
                  >
                    <MenuItem value="global">
                      <ListItemIcon>{COUNTRY_OPTIONS['global'].split(' ')[0]}</ListItemIcon>
                      <ListItemText>Global</ListItemText>
                    </MenuItem>
                    <MenuItem value="multi">
                      <ListItemIcon>{COUNTRY_OPTIONS['multi'].split(' ')[0]}</ListItemIcon>
                      <ListItemText>Multi-Region</ListItemText>
                    </MenuItem>
                    <Divider />
                    {Object.entries(COUNTRY_OPTIONS).map(([code, label]) => {
                      if (code !== 'global' && code !== 'multi') {
                        return (
                          <MenuItem key={code} value={code}>
                            <ListItemIcon>{label.split(' ')[0]}</ListItemIcon>
                            <ListItemText>{label.split(' ').slice(1).join(' ')}</ListItemText>
                          </MenuItem>
                        );
                      }
                      return null;
                    })}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Collapse>

        {/* Active Filters Display */}
        {(filterOptions.tags.length > 0 || 
          filterOptions.complexity.length > 0 || 
          filterOptions.priority.length > 0 || 
          filterOptions.category.length > 0 ||
          filterOptions.dateRange.start ||
          filterOptions.dateRange.end) && (
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
            <Typography variant="body2" sx={{ mr: 1 }}>Active Filters:</Typography>
            {filterOptions.tags.map((tag: string) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                onDelete={() => handleRemoveFilter('tags', tag)}
              />
            ))}
            {filterOptions.complexity.map(complexity => (
              <Chip
                key={complexity}
                label={`Complexity: ${complexity}`}
                size="small"
                onDelete={() => handleRemoveFilter('complexity', complexity)}
              />
            ))}
            {filterOptions.priority.map(priority => (
              <Chip
                key={priority}
                label={`Priority: ${priority}`}
                size="small"
                onDelete={() => handleRemoveFilter('priority', priority)}
              />
            ))}
            {filterOptions.category.map(category => (
              <Chip
                key={category}
                label={`Category: ${category}`}
                size="small"
                onDelete={() => handleRemoveFilter('category', category)}
              />
            ))}
            {filterOptions.dateRange.start && (
              <Chip
                label={`From: ${new Date(filterOptions.dateRange.start).toLocaleDateString()}`}
                size="small"
                onDelete={() => handleRemoveDateFilter('start')}
              />
            )}
            {filterOptions.dateRange.end && (
              <Chip
                label={`To: ${new Date(filterOptions.dateRange.end).toLocaleDateString()}`}
                size="small"
                onDelete={() => handleRemoveDateFilter('end')}
              />
            )}
            {filterOptions.regions.map(region => (
              <Chip
                key={region}
                label={`Region: ${COUNTRY_OPTIONS[region] || region}`}
                size="small"
                onDelete={() => handleRemoveFilter('regions', region)}
              />
            ))}
          </Box>
        )}

        {/* Existing action buttons */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: 2
        }}>
          <FormControlLabel
            control={
              <Switch
                checked={isLivePreview}
                onChange={(e) => setIsLivePreview(e.target.checked)}
                name="livePreview"
              />
            }
            label="Live Preview"
          />
          <Button
            variant="outlined"
            startIcon={<AutoAwesomeIcon />}
            onClick={handleTemplateMenuOpen}
            endIcon={<ArrowDropDownIcon />}
          >
            Generate Templates
          </Button>
          <Menu
            anchorEl={templateMenuAnchorEl}
            open={Boolean(templateMenuAnchorEl)}
            onClose={handleTemplateMenuClose}
          >
            <MenuItem onClick={() => {
              handleGenerateCompleteLandscape();
              handleTemplateMenuClose();
            }}>
              <ListItemIcon><BusinessIcon /></ListItemIcon>
              <ListItemText>Complete Process Landscape</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => {
              setShowCompanyProfileDialog(true);
              handleTemplateMenuClose();
            }}>
              <ListItemIcon><AutoAwesomeIcon /></ListItemIcon>
              <ListItemText>Custom Process Landscape</ListItemText>
            </MenuItem>
          </Menu>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleCreateProcess}
          >
            Create Process
          </Button>
          {user?.permissions.canDeleteAllProcesses && (
            <Button
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={handleDeleteAllProcesses}
            >
              Delete All
            </Button>
          )}
        </Box>
      </Box>

      {/* Process Grid */}
      <Box sx={{ flex: 1, overflowY: 'auto', minHeight: 0 }}>
        <Grid container spacing={3}>
          {filteredDiagrams.map(diagram => renderProcessCard(convertBPMNToProcessModel(diagram)))}
        </Grid>
      </Box>

      {/* Context Menu */}
      <Menu
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => {
          const process = convertBPMNToProcessModel(selectedMenuDiagram!);
          handleEditMetadata(process);
          handleMenuClose();
        }}>
          <ListItemIcon><EditIcon /></ListItemIcon>
          <ListItemText>Edit Metadata</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleDuplicateDiagram(selectedMenuDiagram!)}>
          <ListItemIcon><DuplicateIcon /></ListItemIcon>
          <ListItemText>Duplicate</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleArchiveDiagram(selectedMenuDiagram!)}>
          <ListItemIcon><ArchiveIcon /></ListItemIcon>
          <ListItemText>Archive</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => handleExportDiagram(selectedMenuDiagram!, 'xml')}>
          <ListItemIcon><CodeIcon /></ListItemIcon>
          <ListItemText>Export as BPMN</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleExportDiagram(selectedMenuDiagram!, 'json')}>
          <ListItemIcon><DataObjectIcon /></ListItemIcon>
          <ListItemText>Export as JSON</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem 
          onClick={() => handleDeleteDiagram(selectedMenuDiagram!.id)}
          sx={{ color: 'error.main' }}
        >
          <ListItemIcon><DeleteIcon color="error" /></ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>

      {/* Company Profile Dialog */}
      {showCompanyProfileDialog && (
        <CompanyProfileDialog
          open={showCompanyProfileDialog}
          onClose={() => setShowCompanyProfileDialog(false)}
          onSubmit={handleGenerateTemplates}
          loading={isLoading}
        />
      )}

      {/* Notifications */}
      <Snackbar
        open={!!notification || !!error}
        autoHideDuration={6000}
        onClose={() => {
          setNotification(null);
          setError(null);
        }}
      >
        <Alert 
          onClose={() => {
            setNotification(null);
            setError(null);
          }} 
          severity={error ? 'error' : notification?.type || 'info'}
        >
          {error || notification?.message}
        </Alert>
      </Snackbar>

      {/* Add the BPMN Editor Dialog */}
      <Dialog
        open={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        maxWidth="xl"
        fullWidth
        fullScreen
      >
        <DialogTitle>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">
              {currentDiagram?.name}
            </Typography>
            <IconButton onClick={() => setIsEditorOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent sx={{ p: 0 }}>
          {currentDiagram && (
            <Box sx={{ height: 'calc(100vh - 100px)' }}>
              <BPMNEditor
                diagramId={currentDiagram.id}
                diagramName={currentDiagram.name}
                onSave={handleSaveDiagram}
              />
            </Box>
          )}
        </DialogContent>
      </Dialog>

      {/* Process Metadata Dialog */}
      {selectedProcess && (
        <ProcessMetadataDialog
          open={metadataDialogOpen}
          onClose={() => setMetadataDialogOpen(false)}
          process={selectedProcess}
          onSave={handleSaveMetadata}
        />
      )}
    </Box>
  );
} 