import React, { useEffect, useState } from 'react';
import BpmnJS from 'bpmn-js/dist/bpmn-modeler.production.min.js';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import 'diagram-js-minimap/assets/diagram-js-minimap.css';
import { Box, CircularProgress, Snackbar, Alert, Typography, List, ListItem, ListItemText, ListItemIcon, Tabs, Tab, IconButton, Button, Menu, MenuItem, Collapse, Divider, Tooltip, Paper } from '@mui/material';
import { AccountTree, Close as CloseIcon, Add as AddIcon, Print as PrintIcon, Save as SaveIcon, Upload as UploadIcon, Publish as PublishIcon, Psychology as PsychologyIcon, PlayArrow as PlayArrowIcon, Image as ImageIcon, PictureAsPdf as PdfIcon, Code as CodeIcon, ZoomIn as ZoomInIcon, ZoomOut as ZoomOutIcon, Fullscreen as FullscreenIcon, FullscreenExit as FullscreenExitIcon, FitScreen as FitScreenIcon, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { ResizableBox } from 'react-resizable';
import type { ResizeCallbackData } from 'react-resizable';
import 'react-resizable/css/styles.css';
import api from '../services/api';
import { workflowService } from '../services/workflow';
import { SmartProcess } from './SmartProcess';
import MetadataPanel from './MetadataPanel';
import minimapModule from 'diagram-js-minimap';
// Uncomment the grid module import
import gridModule from 'diagram-js-grid';
import { ProcessModel } from '../types/process';
// Import ProcessMetadata as ImportedProcessMetadata to avoid naming conflicts
import { ProcessMetadata as ImportedProcessMetadata } from '../types/process';
import { getProcessSpecificMetadata } from './MetadataPanel';

interface SimulationResults {
  metrics: {
    successRate: number;
    averageProcessingTime: number;
    resourceUtilization: Record<string, number>;
  };
  steps: Array<{
    elementName: string;
    duration: number;
    status: string;
    resources: string[];
  }>;
  bottlenecks: Array<{
    elementId: string;
    elementName: string;
    waitTime: number;
    reason: string;
  }>;
}

interface BPMNEditorProps {
  diagramId?: number;
  diagramName?: string;
  onSave?: (diagram: DiagramData) => void;
  onElementSelect?: (element: BPMNElement) => void;
  onModelerInit?: (modeler: BpmnJS) => void;
}

interface ProcessNode {
  id: string;
  name: string;
  children?: ProcessNode[];
}

interface ProcessTab {
  id: number;
  name: string;
  description?: string;
  status?: 'active' | 'archived' | 'draft' | 'under_review' | 'imported';
  created_at?: string;
  updated_at?: string;
  created_by?: string;
  diagram_data?: DiagramData;
  metadata?: ProcessMetadata;
}

interface InteractionEvent {
  elementType: string;
  elementId?: string;
  action: string;
  success: boolean;
  error?: string;
}

interface ProcessDetails {
  id: string;
  name: string;
  xml_content: string;
  metadata?: {
    description?: string;
    owner?: string;
    version?: string;
    status?: string;
  };
}

interface BPMNElement {
  id: string;
  type: string;
  businessObject?: any;
}

interface ProcessUpdates {
  name?: string;
  description?: string;
  metadata?: Record<string, any>;
}

interface DiagramData {
  name: string;
  diagram_data: {
    nodes: any[];
    edges: any[];
    type?: string;
    version?: string;
    properties?: Record<string, any>;
  };
  xml_content?: string;
}

const mockProcessLandscape: ProcessNode[] = [
  {
    id: '1',
    name: 'Core Business Processes',
    children: [
      { id: '1.1', name: 'Sales and Marketing',
        children: [
          { id: '1.1.1', name: 'Lead Generation Process' },
          { id: '1.1.2', name: 'Sales Pipeline Management' },
          { id: '1.1.3', name: 'Marketing Campaign Management' },
          { id: '1.1.4', name: 'Customer Acquisition' },
          { id: '1.1.5', name: 'Contract Management' }
        ]
      },
      { id: '1.2', name: 'Operations',
        children: [
          { id: '1.2.1', name: 'Order Processing' },
          { id: '1.2.2', name: 'Production Planning' },
          { id: '1.2.3', name: 'Quality Control' },
          { id: '1.2.4', name: 'Inventory Management' },
          { id: '1.2.5', name: 'Supply Chain Management' }
        ]
      },
      { id: '1.3', name: 'Customer Service',
        children: [
          { id: '1.3.1', name: 'Customer Onboarding' },
          { id: '1.3.2', name: 'Support Ticket Management' },
          { id: '1.3.3', name: 'Customer Feedback Process' },
          { id: '1.3.4', name: 'Service Level Management' }
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'Support Processes',
    children: [
      { id: '2.1', name: 'Human Resources',
        children: [
          { id: '2.1.1', name: 'Recruitment Process' },
          { id: '2.1.2', name: 'Employee Onboarding' },
          { id: '2.1.3', name: 'Performance Review' },
          { id: '2.1.4', name: 'Training Management' },
          { id: '2.1.5', name: 'Leave Management' }
        ]
      },
      { id: '2.2', name: 'Finance',
        children: [
          { id: '2.2.1', name: 'Accounts Payable' },
          { id: '2.2.2', name: 'Accounts Receivable' },
          { id: '2.2.3', name: 'Expense Management' },
          { id: '2.2.4', name: 'Budget Planning' },
          { id: '2.2.5', name: 'Financial Reporting' }
        ]
      },
      { id: '2.3', name: 'IT Services',
        children: [
          { id: '2.3.1', name: 'Incident Management' },
          { id: '2.3.2', name: 'Change Management' },
          { id: '2.3.3', name: 'Asset Management' },
          { id: '2.3.4', name: 'Service Request Management' },
          { id: '2.3.5', name: 'System Maintenance' }
        ]
      }
    ]
  },
  {
    id: '3',
    name: 'Management Processes',
    children: [
      { id: '3.1', name: 'Strategic Planning',
        children: [
          { id: '3.1.1', name: 'Goal Setting and Review' },
          { id: '3.1.2', name: 'Business Planning' },
          { id: '3.1.3', name: 'Risk Management' },
          { id: '3.1.4', name: 'Performance Monitoring' }
        ]
      },
      { id: '3.2', name: 'Compliance',
        children: [
          { id: '3.2.1', name: 'Audit Management' },
          { id: '3.2.2', name: 'Policy Management' },
          { id: '3.2.3', name: 'Regulatory Compliance' },
          { id: '3.2.4', name: 'Quality Management' }
        ]
      },
      { id: '3.3', name: 'Innovation',
        children: [
          { id: '3.3.1', name: 'Research and Development' },
          { id: '3.3.2', name: 'Product Development' },
          { id: '3.3.3', name: 'Process Improvement' },
          { id: '3.3.4', name: 'Innovation Management' }
        ]
      }
    ]
  }
];

const emptyXML = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
                  xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
                  xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
                  xmlns:di="http://www.omg.org/spec/DD/20100524/DI"
                  id="Definitions_1"
                  targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_1" isExecutable="false">
    <bpmn:startEvent id="StartEvent_1" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNShape id="StartEvent_1_di" bpmnElement="StartEvent_1">
        <dc:Bounds x="156" y="81" width="36" height="36" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;

const DEBUG = import.meta.env.MODE === 'development';

// Add BPMN.io grid styles and dots pattern
const gridStyles = `
.djs-grid {
  background: white;
  background-image: 
    linear-gradient(90deg, rgba(200, 200, 200, 0.2) 1px, transparent 1px),
    linear-gradient(rgba(200, 200, 200, 0.2) 1px, transparent 1px);
  background-size: 10px 10px;
}

.djs-dots {
  background: white;
  background-image: radial-gradient(rgba(200, 200, 200, 0.3) 1px, transparent 1px);
  background-size: 10px 10px;
}
`;

// Add custom styles for minimap positioning
const minimapStyles = `
.djs-minimap {
  position: absolute !important;
  left: 20px !important;
  bottom: 20px !important;
  top: auto !important;
  right: auto !important;
}
`;

// First, update the fullscreen styles to be minimal
const fullscreenStyles = `
.fullscreen-editor {
  width: 100vw !important;
  height: 100vh !important;
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  z-index: 9999 !important;
  background-color: #ffffff !important;
}
`;

// Add custom styles for sidebars
const sidebarStyles = `
.sidebar-resizable {
  position: relative;
  background-color: #fff;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  transition: width 0.3s ease;
}

.sidebar-resizable.right {
  border-right: none;
  border-left: 1px solid rgba(0, 0, 0, 0.12);
}

.sidebar-resizable.sidebar-collapsed {
  width: 50px !important;
}

.sidebar-content {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.sidebar-toggle {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 40px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 0 4px 4px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  right: -20px;
}

.sidebar-resizable.right .sidebar-toggle {
  right: auto;
  left: -20px;
  border-radius: 4px 0 0 4px;
}

.sidebar-resizable.sidebar-collapsed .sidebar-content {
  display: none;
}
`;

// Add the styles to the document
const styleSheet = document.createElement('style');
styleSheet.textContent = gridStyles + minimapStyles + fullscreenStyles + sidebarStyles;
document.head.appendChild(styleSheet);

// Define ProcessMetadata for local use to match our needs
interface ProcessMetadata {
  category?: string;
  department?: string;
  priority?: 'low' | 'medium' | 'high';
  complexity?: 'low' | 'medium' | 'high';
  status?: 'draft' | 'active' | 'under_review' | 'archived' | 'imported';
  version?: string;
  processOwner?: string;
  processManager?: string;
  processModeller?: string;
  lastUpdated?: string;
  nextReviewDate?: string;
  automationLevel?: number;
  complianceRelevant?: boolean;
  tags?: string[];
  activities?: string[];
  kpis?: string[];
  participants?: string[];
  inputs?: string[];
  outputs?: string[];
  [key: string]: any; // Allow additional properties
}

// Define an interface for the expected ProcessTab in MetadataPanel
interface MetadataPanelProcessTab {
  id: number;
  name: string;
  description?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
  created_by?: string;
  process_owner?: string;
  process_manager?: string;
  department?: string;
  version?: string;
  review_date?: string;
  kpis?: string;
  metadata?: ImportedProcessMetadata;
}

export function BPMNEditor({ diagramId, diagramName, onSave, onElementSelect, onModelerInit }: BPMNEditorProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [modeler, setModeler] = useState<BpmnJS | null>(null);
  const [selectedElement, setSelectedElement] = useState<BPMNElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState<{
    message: string;
    type: 'success' | 'error' | 'warning';
  } | null>(null);
  const [selectedProcess, setSelectedProcess] = useState<string | null>(null);
  const [tabs, setTabs] = useState<ProcessTab[]>([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [autoSaveInterval, setAutoSaveInterval] = useState<NodeJS.Timeout | null>(null);
  const [fileMenu, setFileMenu] = useState<null | HTMLElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [canvasStyle, setCanvasStyle] = useState<'default' | 'grid' | 'dots'>('default');
  const [interactionLog, setInteractionLog] = useState<InteractionEvent[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['1', '2']);
  const [processDetails, setProcessDetails] = useState<ProcessDetails | null>(null);
  const [currentXml, setCurrentXml] = useState<string>('');
  const [simulationResults, setSimulationResults] = useState<SimulationResults | null>(null);
  const [deploymentStatus, setDeploymentStatus] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentZoom, setCurrentZoom] = useState(1);
  const [metadataView, setMetadataView] = useState<'process' | 'element'>('process');

  // Add new state for sidebar visibility and sizes
  const [leftSidebarCollapsed, setLeftSidebarCollapsed] = useState(() => 
    localStorage.getItem('bpmn-editor-left-sidebar-collapsed') === 'true'
  );
  const [rightSidebarCollapsed, setRightSidebarCollapsed] = useState(() => 
    localStorage.getItem('bpmn-editor-right-sidebar-collapsed') === 'true'
  );
  const [leftSidebarWidth, setLeftSidebarWidth] = useState(() => 
    parseInt(localStorage.getItem('bpmn-editor-left-sidebar-width') || '300')
  );
  const [rightSidebarWidth, setRightSidebarWidth] = useState(() => 
    parseInt(localStorage.getItem('bpmn-editor-right-sidebar-width') || '350')
  );

  // Add this near other state declarations
  const [rightSidebarTab, setRightSidebarTab] = useState<'metadata' | 'ai'>('metadata');

  // Save sidebar states to localStorage
  useEffect(() => {
    localStorage.setItem('bpmn-editor-left-sidebar-collapsed', leftSidebarCollapsed.toString());
    localStorage.setItem('bpmn-editor-right-sidebar-collapsed', rightSidebarCollapsed.toString());
    localStorage.setItem('bpmn-editor-left-sidebar-width', leftSidebarWidth.toString());
    localStorage.setItem('bpmn-editor-right-sidebar-width', rightSidebarWidth.toString());
  }, [leftSidebarCollapsed, rightSidebarCollapsed, leftSidebarWidth, rightSidebarWidth]);

  const logInteraction = (event: InteractionEvent) => {
    setInteractionLog(prev => [...prev, event]);
  };

  const loadDiagram = async (id: number) => {
    if (!modeler) return;
    setLoading(true);

    try {
      let xml: string;
      if (id < 0) { // New diagram (negative ID)
        try {
          // Try to get the starter template from the API
          const starterTemplate = await api.diagrams.getStarterTemplate();
          if (starterTemplate && starterTemplate.xml) {
            xml = starterTemplate.xml;
          } else {
            console.warn('Starter template not available, using empty template');
            xml = emptyXML; // Fallback to empty template if API fails
          }
        } catch (error) {
          console.error('Error fetching starter template:', error);
          setNotification({
            message: 'Could not load starter template, using basic template instead',
            type: 'warning'
          });
          xml = emptyXML; // Fallback to empty template if API fails
        }
      } else {
        try {
          const response = await api.diagrams.getXML(id);
          if (!response) {
            throw new Error('Failed to load diagram XML');
          }
          xml = response.xml;
        } catch (error) {
          console.error('Error fetching diagram XML:', error);
          setNotification({
            message: 'Error loading diagram XML, using basic template instead',
            type: 'error'
          });
          xml = emptyXML; // Fallback to empty template if fetch fails
        }
      }

      try {
        await modeler.importXML(xml);
        const canvas = modeler.get('canvas');
        canvas.zoom('fit-viewport');

        // Add a small delay to ensure the viewport is ready
        setTimeout(() => {
          const viewport = canvas._container.querySelector('.viewport');
          if (viewport instanceof HTMLElement) {
            applyCanvasStyle(viewport, canvasStyle);
          }
        }, 100);
      } catch (importError) {
        console.error('Error importing XML:', importError);
        setNotification({
          message: 'Error importing diagram XML, the format may be invalid',
          type: 'error'
        });
        
        // Try to import empty XML as a fallback
        try {
          await modeler.importXML(emptyXML);
        } catch (fallbackError) {
          console.error('Critical error: Could not load empty diagram:', fallbackError);
        }
      }

      setLoading(false);
    } catch (error) {
      console.error('Error loading diagram:', error);
      setNotification({
        message: 'Error loading diagram',
        type: 'error'
      });
      setLoading(false);
    }
  };

  const applyCanvasStyle = (viewport: HTMLElement | null, style: 'default' | 'grid' | 'dots') => {
    if (!viewport) return;

    // Remove existing styles
    viewport.classList.remove('djs-grid', 'djs-dots');

    // Apply new style
    switch (style) {
      case 'grid':
        viewport.classList.add('djs-grid');
        break;
      case 'dots':
        viewport.classList.add('djs-dots');
        break;
      default:
        // Default style - no additional classes needed
        break;
    }
  };

  // Update the initialization effect
  useEffect(() => {
    if (!containerRef.current) return;

    const bpmnModeler: BpmnJS = new BpmnJS({
      container: containerRef.current,
      keyboard: {
        bindTo: document
      },
      additionalModules: [
        minimapModule,
        gridModule
      ]
    });

    // Add grid configuration after initialization
    const gridConfig = {
      visible: canvasStyle === 'grid',
      snapToGrid: true,
      gridSpacing: 10
    };

    // Get the grid instance and configure it
    try {
      const grid = bpmnModeler.get('grid');
      if (grid) {
        // Configure grid properties
        grid.setVisible(gridConfig.visible);
        if (typeof grid.setSnap === 'function') {
          grid.setSnap(gridConfig.snapToGrid);
        }
      }
    } catch (error) {
      console.warn('Grid module not available:', error);
      // Apply CSS-based grid as a fallback
      const viewport = containerRef.current.querySelector('.djs-container .viewport') as HTMLElement;
      applyCanvasStyle(viewport, canvasStyle);
    }

    const eventBus = bpmnModeler.get('eventBus');

    // Handle canvas initialization
    const handleCanvasInit = () => {
      const canvas = bpmnModeler.get('canvas');
      if (!canvas || !canvas._container) return;

      const viewport = canvas._container.querySelector('.viewport');
      if (viewport instanceof HTMLElement) {
        applyCanvasStyle(viewport, canvasStyle);
      }
    };

    // Listen for canvas initialization
    eventBus.on('canvas.init', handleCanvasInit);
    eventBus.on('import.done', handleCanvasInit);
    
    // Also listen for canvas.viewbox.changed to reapply styles
    eventBus.on('canvas.viewbox.changed', handleCanvasInit);

    bpmnModeler.on('element.click', (event: any) => {
      setSelectedElement(event.element);
      if (onElementSelect) {
        onElementSelect(event.element);
      }
    });

    bpmnModeler.on('canvas.click', () => {
      setMetadataView('process');
      setSelectedElement(null);
    });

    setModeler(bpmnModeler);
    if (onModelerInit) {
      onModelerInit(bpmnModeler);
    }

    return () => {
      eventBus.off('canvas.init', handleCanvasInit);
      eventBus.off('import.done', handleCanvasInit);
      eventBus.off('canvas.viewbox.changed', handleCanvasInit);
      bpmnModeler.destroy();
    };
  }, [onElementSelect, onModelerInit, canvasStyle]);

  useEffect(() => {
    if (diagramId && diagramName) {
      // Initialize with a single tab for the opened diagram
      setTabs([{
        id: diagramId,
        name: diagramName,
      }]);
      setActiveTabIndex(0);
    }
  }, [diagramId, diagramName]);

  useEffect(() => {
    if (modeler && tabs.length > 0) {
      loadDiagram(tabs[activeTabIndex].id);
    }
  }, [modeler, tabs, activeTabIndex]);

  const handleNewTab = async () => {
    // Generate a unique negative ID for new tabs
    const newId = Math.min(...tabs.map(tab => tab.id), 0) - 1;
    const newTab: ProcessTab = {
      id: newId,
      name: 'New Process',
    };
    setTabs([...tabs, newTab]);
    setActiveTabIndex(tabs.length);

    // Initialize with empty diagram
    if (modeler) {
      try {
        await modeler.importXML(emptyXML);
        const canvas = modeler.get('canvas');
        canvas.zoom('fit-viewport');
      } catch (error) {
        console.error('Error initializing new diagram:', error);
        setNotification({
          message: 'Error creating new diagram',
          type: 'error'
        });
      }
    }
  };

  const handleTabChange = (_: React.SyntheticEvent<Element, Event>, newValue: number) => {
    setActiveTabIndex(newValue);
  };

  const handleTabClose = (event: React.MouseEvent, index: number) => {
    event.stopPropagation();
    if (tabs.length > 1) {
      const newTabs = tabs.filter((_, i) => i !== index);
      setTabs(newTabs);
      if (activeTabIndex >= index) {
        setActiveTabIndex(Math.max(0, activeTabIndex - 1));
      }
    }
  };

  const handleSave = async () => {
    if (!modeler || !onSave) {
      logInteraction({
        elementType: 'SaveButton',
        action: 'save',
        success: false,
        error: !modeler ? 'Modeler not initialized' : 'onSave prop not provided'
      });
      return;
    }

    try {
      const { xml } = await modeler.saveXML({ format: true });
      const elementRegistry = modeler.get('elementRegistry');
      
      const elements = elementRegistry.getAll();
      
      const diagramData: DiagramData = {
        name: diagramName || 'New Process',
        diagram_data: {
          nodes: elements
            .filter((el: any) => el.type !== 'bpmn:SequenceFlow')
            .map((el: any) => ({
              id: el.id,
              type: el.type.replace('bpmn:', ''),
              position: el.x ? { x: el.x, y: el.y } : undefined,
              data: {
                label: el.businessObject.name || '',
                type: el.type.replace('bpmn:', ''),
              },
            })),
          edges: elements
            .filter((el: any) => el.type === 'bpmn:SequenceFlow')
            .map((el: any) => ({
              id: el.id,
              source: el.source.id,
              target: el.target.id,
              type: 'sequenceFlow',
            })),
        },
        xml_content: xml,
      };

      await onSave(diagramData);
      setNotification({
        message: 'Diagram saved successfully',
        type: 'success'
      });
      logInteraction({
        elementType: 'SaveButton',
        action: 'save',
        success: true
      });
    } catch (error) {
      logInteraction({
        elementType: 'SaveButton',
        action: 'save',
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
      console.error('Error saving diagram:', error);
      setNotification({
        message: 'Error saving diagram',
        type: 'error'
      });
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
    logInteraction({
      elementType: 'Category',
      elementId: categoryId,
      action: 'toggle',
      success: true
    });
  };

  const handleProcessSelect = async (processId: string) => {
    setSelectedProcess(processId);
    setLoading(true);
    
    try {
      // Get mock metadata for the process
      const processName = mockProcessLandscape
        .flatMap(cat => cat.children || [])
      // In a real application, this would be an API call
      // For now, we'll simulate loading process data
      const mockProcess: ProcessDetails = {
        id: processId,
        name: mockProcessLandscape
          .flatMap(cat => cat.children || [])
          .find(proc => proc.id === processId)?.name || 'Unknown Process',
        xml_content: emptyXML, // In real app, this would come from the API
        metadata: {
          description: `Process ${processId} description`,
          owner: 'John Doe',
          version: '1.0',
          status: 'active'
        }
      };

      setProcessDetails(mockProcess);
      
      // Create a new tab for the process
      if (!tabs.find(tab => tab.id === Number(processId))) {
        const status = mockProcess.metadata?.status;
        // Validate status is one of the allowed values
        const validStatus = status === 'active' || 
                            status === 'archived' || 
                            status === 'draft' || 
                            status === 'under_review' || 
                            status === 'imported' ? 
                            status : 'draft';
        
        const newTab: ProcessTab = {
          id: Number(processId),
          name: mockProcess.name,
          description: mockProcess.metadata?.description,
          status: validStatus,
        };
        
        setTabs(prev => [...prev, newTab]);
        setActiveTabIndex(tabs.length);
      }

      // Load the process diagram
      if (modeler) {
        await modeler.importXML(mockProcess.xml_content);
        const canvas = modeler.get('canvas');
        canvas.zoom('fit-viewport');
      }

      logInteraction({
        elementType: 'ProcessItem',
        elementId: processId,
        action: 'select',
        success: true
      });
    } catch (error) {
      console.error('Error loading process:', error);
      setError('Error loading process');
      logInteraction({
        elementType: 'ProcessItem',
        elementId: processId,
        action: 'select',
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setLoading(false);
    }
  };

  // Auto-save setup
  useEffect(() => {
    if (onSave) {
      const interval = setInterval(() => {
        handleSave();
      }, 300000); // Auto-save every 5 minutes
      setAutoSaveInterval(interval);
    }

    return () => {
      if (autoSaveInterval) {
        clearInterval(autoSaveInterval);
      }
    };
  }, [onSave]);

  const handleExport = async (format: 'bpmn' | 'svg' | 'png' | 'jpeg' | 'pdf') => {
    if (!modeler) {
      logInteraction({
        elementType: 'ExportButton',
        action: 'export',
        success: false,
        error: 'Modeler not initialized'
      });
      return;
    }
    
    try {
      let data: string | Blob;
      let extension: string;

      switch (format) {
        case 'bpmn':
          const { xml } = await modeler.saveXML({ format: true });
          data = new Blob([xml], { type: 'application/xml' });
          extension = 'bpmn';
          break;

        case 'svg':
          const { svg } = await (modeler as any).saveSVG();
          data = new Blob([svg], { type: 'image/svg+xml' });
          extension = 'svg';
          break;

        case 'png':
        case 'jpeg':
          // Create a canvas element
          const tempCanvas = document.createElement('canvas');
          const ctx = tempCanvas.getContext('2d');
          if (!ctx) throw new Error('Could not get canvas context');

          // Create a temporary SVG image
          const svgData = await (modeler as any).saveSVG();
          const img = new Image();
          const svgBlob = new Blob([svgData.svg], { type: 'image/svg+xml' });
          const url = URL.createObjectURL(svgBlob);

          // Convert SVG to PNG/JPEG
          await new Promise((resolve, reject) => {
            img.onload = () => {
              tempCanvas.width = img.width;
              tempCanvas.height = img.height;
              ctx.drawImage(img, 0, 0);
              resolve(null);
            };
            img.onerror = reject;
            img.src = url;
          });

          data = await new Promise<Blob>((resolve) => {
            tempCanvas.toBlob(
              (blob) => resolve(blob!),
              format === 'png' ? 'image/png' : 'image/jpeg',
              0.95
            );
          });

          URL.revokeObjectURL(url);
          extension = format;
          break;

        case 'pdf':
          // Create PDF using SVG
          const { svg: pdfSvg } = await (modeler as any).saveSVG();
          const pdf = new Blob([pdfSvg], { type: 'application/pdf' });
          data = pdf;
          extension = 'pdf';
          break;

        default:
          throw new Error('Unsupported format');
      }

      // Download the file
      const downloadUrl = window.URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = downloadUrl;
      const currentTab = tabs[activeTabIndex];
      a.download = `${currentTab?.name || 'process'}.${extension}`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(downloadUrl);
      document.body.removeChild(a);

      logInteraction({
        elementType: 'ExportButton',
        action: `export-${format}`,
        success: true
      });

      setNotification({
        message: `Diagram exported as ${format.toUpperCase()} successfully`,
        type: 'success'
      });
    } catch (error) {
      logInteraction({
        elementType: 'ExportButton',
        action: `export-${format}`,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
      console.error('Error exporting diagram:', error);
      setNotification({
        message: `Error exporting diagram as ${format.toUpperCase()}`,
        type: 'error'
      });
    }
  };

  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.bpmn,.xml';
    input.multiple = false;
    
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file && modeler) {
        try {
          const reader = new FileReader();
          reader.onload = async (e) => {
            const xml = e.target?.result as string;
            await modeler.importXML(xml);
            
            const newTab: ProcessTab = {
              id: Date.now(),
              name: file.name.replace(/\.(bpmn|xml)$/, ''),
              status: 'imported' as const
            };
            
            setTabs(prev => [...prev, newTab]);
            setActiveTabIndex(tabs.length);
            
            const canvas = modeler.get('canvas');
            canvas.zoom('fit-viewport');

            setNotification({
              message: 'BPMN file imported successfully',
              type: 'success'
            });

            logInteraction({
              elementType: 'ImportButton',
              elementId: newTab.id.toString(),
              action: 'import',
              success: true
            });
          };
          reader.readAsText(file);
        } catch (error) {
          logInteraction({
            elementType: 'ImportButton',
            action: 'import',
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
          });
          console.error('Error importing diagram:', error);
          setNotification({
            message: 'Error importing BPMN file',
            type: 'error'
          });
        }
      }
    };
    input.click();
  };

  const handlePrint = async () => {
    if (!modeler) return;
    
    try {
      // Create a temporary SVG using the canvas
      const canvas = modeler.get('canvas');
      const viewbox = canvas.viewbox();
      
      // Create a temporary SVG element
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', viewbox.width.toString());
      svg.setAttribute('height', viewbox.height.toString());
      
      // Copy the diagram content
      const viewport = canvas.getDefaultLayer();
      const clone = viewport.cloneNode(true);
      svg.appendChild(clone);
      
      // Create a data URL
      const svgData = new XMLSerializer().serializeToString(svg);
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Print Process Diagram</title>
              <style>
                body { margin: 0; }
                svg { width: 100%; height: 100vh; }
              </style>
            </head>
            <body>
              ${svgData}
              <script>
                window.onload = function() { window.print(); window.close(); };
              </script>
            </body>
          </html>
        `);
        printWindow.document.close();
      }
    } catch (error) {
      console.error('Error printing diagram:', error);
      setNotification({
        message: 'Error printing diagram',
        type: 'error'
      });
    }
  };

  const handleFileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setFileMenu(event.currentTarget);
  };

  const handleFileMenuClose = () => {
    setFileMenu(null);
  };

  useEffect(() => {
    if (modeler) {
      // Save current XML whenever diagram changes
      const saveCurrentXml = async () => {
        try {
          const { xml } = await modeler.saveXML({ format: true });
          setCurrentXml(xml);
        } catch (error) {
          // Ignore the error when no definitions are loaded yet
          console.debug('Waiting for diagram to be loaded...');
        }
      };

      // Save XML after diagram changes
      const eventBus = modeler.get('eventBus');
      eventBus.on('import.done', saveCurrentXml);
      eventBus.on('elements.changed', saveCurrentXml);
      
      return () => {
        eventBus.off('import.done', saveCurrentXml);
        eventBus.off('elements.changed', saveCurrentXml);
      };
    }
  }, [modeler]);

  const handleElementAdd = async (suggestion: any) => {
    if (!modeler) return;

    const modeling = modeler.get('modeling');
    const elementFactory = modeler.get('elementFactory');
    const canvas = modeler.get('canvas');

    // Create the suggested element
    const element = elementFactory.createShape({
      type: suggestion.elementType,
      businessObject: {
        name: suggestion.elementName,
      },
    });

    // Add the element at the suggested position
    modeling.createShape(element, suggestion.position, canvas.getRootElement());
  };

  const handleSimulateProcess = async () => {
    if (!diagramId) return;

    try {
      setLoading(true);
      const results = await workflowService.simulateProcess(diagramId?.toString() || '', {
        // Add simulation parameters
        duration: '1h',
        instances: 100,
        resources: ['user1', 'user2'],
      });
      setSimulationResults(results);
      
      // Show simulation results in a notification
      setNotification({
        message: 'Process simulation completed successfully',
        type: 'success',
      });
    } catch (error) {
      console.error('Error simulating process:', error);
      setNotification({
        message: 'Error simulating process',
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeployProcess = async () => {
    if (!diagramId) return;

    try {
      setLoading(true);
      await workflowService.deployProcess(diagramId?.toString() || '', {
        // Add deployment parameters
        version: '1.0',
        environment: 'production',
      });
      setDeploymentStatus('deployed');
      
      setNotification({
        message: 'Process deployed successfully',
        type: 'success',
      });
    } catch (error) {
      console.error('Error deploying process:', error);
      setNotification({
        message: 'Error deploying process',
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateXml = async (newXml: string) => {
    if (!modeler) return;

    try {
      await modeler.importXML(newXml);
      const canvas = modeler.get('canvas');
      canvas.zoom('fit-viewport');
      
      setNotification({
        message: 'Process updated successfully',
        type: 'success',
      });
    } catch (error) {
      console.error('Error updating process:', error);
      setNotification({
        message: 'Error updating process',
        type: 'error',
      });
    }
  };

  const handleProcessUpdate = async (processId: string | number, updates: ProcessUpdates) => {
    try {
      // Update the tab name if it was changed
      if (updates.name) {
        setTabs(prevTabs => 
          prevTabs.map((tab, index) => 
            index === activeTabIndex ? { ...tab, name: updates.name! } : tab
          )
        );
      }

      // If this is a new process (id === -1), create it
      if (processId === -1 && modeler) {
        const { xml } = await modeler.saveXML({ format: true });
        const elementRegistry = modeler.get('elementRegistry');
        const elements = elementRegistry.getAll();
        
        const diagramData: DiagramData = {
          name: updates.name || 'New Process',
          diagram_data: {
            nodes: elements
              .filter((el: any) => el.type !== 'bpmn:SequenceFlow')
              .map((el: any) => ({
                id: el.id,
                type: el.type.replace('bpmn:', ''),
                position: el.x ? { x: el.x, y: el.y } : undefined,
                data: {
                  label: el.businessObject.name || '',
                  type: el.type.replace('bpmn:', ''),
                },
              })),
            edges: elements
              .filter((el: any) => el.type === 'bpmn:SequenceFlow')
              .map((el: any) => ({
                id: el.id,
                source: el.source.id,
                target: el.target.id,
                type: 'sequenceFlow',
              })),
          },
          xml_content: xml
        };
        
        if (onSave) {
          await onSave(diagramData);
        }
      }

      setNotification({
        message: 'Process updated successfully',
        type: 'success'
      });
    } catch (error) {
      console.error('Error updating process:', error);
      setNotification({
        message: 'Error updating process',
        type: 'error'
      });
    }
  };

  const renderProcessLandscape = () => (
    <List>
      {mockProcessLandscape.map((category) => (
        <React.Fragment key={category.id}>
          <ListItem
            button
            onClick={() => handleCategoryClick(category.id)}
            sx={{ bgcolor: 'background.default' }}
          >
            <ListItemIcon>
              <AccountTree />
            </ListItemIcon>
            <ListItemText 
              primary={category.name}
              primaryTypographyProps={{ fontWeight: 'bold' }}
            />
          </ListItem>
          <Collapse in={expandedCategories.includes(category.id)}>
            <List component="div" disablePadding>
              {category.children?.map((process) => (
                <ListItem
                  key={process.id}
                  button
                  selected={selectedProcess === process.id}
                  onClick={() => handleProcessSelect(process.id)}
                  sx={{ 
                    pl: 4,
                    '&.Mui-selected': {
                      bgcolor: 'primary.light',
                      '&:hover': {
                        bgcolor: 'primary.light',
                      },
                    },
                  }}
                >
                  <ListItemText 
                    primary={process.name}
                    secondary={processDetails?.metadata?.status}
                  />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );

  // Create an adapter function to convert our ProcessTab to MetadataPanel's expected type
  const adaptProcessTabForMetadataPanel = (tab: ProcessTab | undefined): any => {
    if (!tab) return undefined;
    
    // Return a properly adapted object that matches MetadataPanelProcessTab
    return {
      id: tab.id,
      name: tab.name,
      description: tab.description,
      status: tab.status,
      created_at: tab.created_at,
      updated_at: tab.updated_at,
      created_by: tab.created_by,
      metadata: tab.metadata ? {
        category: tab.metadata.category || 'Other',
        status: (tab.status || 'draft') as any
      } : undefined
    };
  };

  // Change the renderProcessMetadata function to handle the proper ProcessTab type
  const renderProcessMetadata = (currentIndex: number): ProcessTab | undefined => {
    if (currentIndex < 0 || !tabs[currentIndex]) return undefined;
    
    const tab = tabs[currentIndex];
    const isNewTab = !tab.metadata;
    
    // For existing metadata, or creating new metadata
    const metadata = isNewTab 
      ? getProcessSpecificMetadata(tab.name || 'New Process')
      : tab.metadata;
    
    return {
      ...tab,
      metadata: {
        ...(metadata || {}),
        // Ensure essential properties are defined
        category: metadata?.category || 'Other',
        department: metadata?.department || 'Other',
        priority: (metadata?.priority || 'medium') as 'low' | 'medium' | 'high',
        complexity: (metadata?.complexity || 'medium') as 'low' | 'medium' | 'high',
        status: tab.status || 'draft'
      } as ProcessMetadata
    };
  };

  // Add zoom control handlers
  const handleZoomIn = () => {
    if (!modeler) return;
    const canvas = modeler.get('canvas');
    const newZoom = Math.min(3, currentZoom + 0.1);
    canvas.zoom(newZoom);
    setCurrentZoom(newZoom);
  };

  const handleZoomOut = () => {
    if (!modeler) return;
    const canvas = modeler.get('canvas');
    const newZoom = Math.max(0.2, currentZoom - 0.1);
    canvas.zoom(newZoom);
    setCurrentZoom(newZoom);
  };

  const handleFitViewport = () => {
    if (!modeler) return;
    const canvas = modeler.get('canvas');
    canvas.zoom('fit-viewport', 'auto');
    // Update current zoom after fit
    setCurrentZoom(canvas.zoom());
  };

  // Update the toggleFullscreen function to use our container
  const toggleFullscreen = () => {
    const editorContainer = containerRef.current?.closest('.bpmn-editor-container');
    if (!editorContainer) return;

    if (!document.fullscreenElement) {
      // Enter fullscreen
      if (editorContainer.requestFullscreen) {
        editorContainer.requestFullscreen();
      } else if ((editorContainer as any).webkitRequestFullscreen) {
        (editorContainer as any).webkitRequestFullscreen();
      } else if ((editorContainer as any).msRequestFullscreen) {
        (editorContainer as any).msRequestFullscreen();
      }
      editorContainer.classList.add('fullscreen-editor');
      setIsFullscreen(true);
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen();
      }
      editorContainer.classList.remove('fullscreen-editor');
      setIsFullscreen(false);
    }
  };

  // Update the fullscreen change event listener
  useEffect(() => {
    const editorContainer = containerRef.current?.closest('.bpmn-editor-container');
    if (!editorContainer) return;

    const handleFullscreenChange = () => {
      const isInFullscreen = !!document.fullscreenElement;
      setIsFullscreen(isInFullscreen);
      if (!isInFullscreen) {
        editorContainer.classList.remove('fullscreen-editor');
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  // Initialize minimap
  useEffect(() => {
    if (modeler) {
      const minimapModule = modeler.get('minimap');
      if (minimapModule) {
        minimapModule.open();
      }
    }
  }, [modeler]);

  useEffect(() => {
    // Add both minimap and fullscreen styles to document head
    const styleSheet = document.createElement('style');
    styleSheet.textContent = gridStyles + minimapStyles + fullscreenStyles + sidebarStyles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  // Update MetadataPanel render to include view toggle
  const renderMetadataPanel = () => (
    <Box sx={{ position: 'relative' }}>
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button
          size="small"
          onClick={() => setMetadataView(metadataView === 'process' ? 'element' : 'process')}
        >
          {metadataView === 'process' ? 'Show Element Properties' : 'Show Process Properties'}
        </Button>
      </Box>
      <MetadataPanel 
        selectedElement={metadataView === 'element' ? selectedElement : null}
        selectedProcess={metadataView === 'process' ? renderProcessMetadata(activeTabIndex) as any : undefined}
        onProcessUpdate={handleProcessUpdate}
      />
    </Box>
  );

  return (
    <Box 
      className="bpmn-editor-container"
      sx={{ 
        display: 'flex', 
        height: '100%', 
        width: '100%',
        overflow: 'hidden',
        bgcolor: 'background.default'
      }}
    >
      {/* Left Sidebar */}
      <ResizableBox
        width={leftSidebarWidth}
        height={window.innerHeight}
        minConstraints={[200, window.innerHeight]}
        maxConstraints={[500, window.innerHeight]}
        axis="x"
        handle={<div className="custom-handle" style={{ 
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '5px',
          cursor: 'col-resize',
          background: 'rgba(0,0,0,0.1)',
        }}/>}
        onResize={(e, data) => {
          setLeftSidebarWidth(data.size.width);
        }}
      >
        <Box className="sidebar-content" sx={{ height: '100%', overflow: 'auto' }}>
          {renderProcessLandscape()}
        </Box>
        <div 
          className="sidebar-toggle"
          onClick={() => setLeftSidebarCollapsed(!leftSidebarCollapsed)}
        >
          {leftSidebarCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </div>
      </ResizableBox>

      {/* Main Content */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Main Toolbar */}
        <Box sx={{ 
          borderBottom: 1, 
          borderColor: 'divider',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Top Row - Main Controls */}
          <Box sx={{ 
            p: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            borderBottom: 1,
            borderColor: 'divider'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Button
                onClick={handleFileMenuOpen}
                variant="outlined"
                size="small"
              >
                File
              </Button>

              <Divider orientation="vertical" flexItem />

              {/* Zoom Controls */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Tooltip title="Zoom Out">
                  <IconButton size="small" onClick={handleZoomOut}>
                    <ZoomOutIcon />
                  </IconButton>
                </Tooltip>
                
                <Typography variant="body2" sx={{ minWidth: 40, textAlign: 'center' }}>
                  {Math.round(currentZoom * 100)}%
                </Typography>
                
                <Tooltip title="Zoom In">
                  <IconButton size="small" onClick={handleZoomIn}>
                    <ZoomInIcon />
                  </IconButton>
                </Tooltip>
                
                <Tooltip title="Fit to Viewport">
                  <IconButton size="small" onClick={handleFitViewport}>
                    <FitScreenIcon />
                  </IconButton>
                </Tooltip>
              </Box>

              <Divider orientation="vertical" flexItem />

              <Tooltip title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}>
                <IconButton size="small" onClick={toggleFullscreen}>
                  {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          {/* Bottom Row - Process Tabs */}
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1 }}>
            {tabs.length > 0 && (
              <Tabs
                value={activeTabIndex}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                sx={{ flex: 1 }}
              >
                {tabs.map((tab, index) => (
                  <Tab
                    key={tab.id}
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <span>{tab.name}</span>
                        {tabs.length > 1 && (
                          <Box
                            component="span"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleTabClose(e, index);
                            }}
                            sx={{ 
                              display: 'inline-flex',
                              alignItems: 'center',
                              ml: 1,
                              p: 0.5,
                              cursor: 'pointer',
                              '&:hover': {
                                bgcolor: 'action.hover',
                                borderRadius: '50%'
                              }
                            }}
                          >
                            <CloseIcon fontSize="small" />
                          </Box>
                        )}
                      </Box>
                    }
                  />
                ))}
              </Tabs>
            )}
            <IconButton
              size="small"
              onClick={handleNewTab}
              title="New Tab"
              sx={{ ml: 1, mr: 1 }}
            >
              <AddIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Menus */}
        <Menu
          anchorEl={fileMenu}
          open={Boolean(fileMenu)}
          onClose={handleFileMenuClose}
        >
          <MenuItem onClick={() => { handleNewTab(); handleFileMenuClose(); }}>
            <AddIcon sx={{ mr: 1 }} /> New
          </MenuItem>
          <MenuItem onClick={() => { handleImport(); handleFileMenuClose(); }}>
            <UploadIcon sx={{ mr: 1 }} /> Import BPMN
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => { handleExport('bpmn'); handleFileMenuClose(); }}>
            <CodeIcon sx={{ mr: 1 }} /> Export as BPMN
          </MenuItem>
          <MenuItem onClick={() => { handleExport('svg'); handleFileMenuClose(); }}>
            <ImageIcon sx={{ mr: 1 }} /> Export as SVG
          </MenuItem>
          <MenuItem onClick={() => { handleExport('png'); handleFileMenuClose(); }}>
            <ImageIcon sx={{ mr: 1 }} /> Export as PNG
          </MenuItem>
          <MenuItem onClick={() => { handleExport('jpeg'); handleFileMenuClose(); }}>
            <ImageIcon sx={{ mr: 1 }} /> Export as JPEG
          </MenuItem>
          <MenuItem onClick={() => { handleExport('pdf'); handleFileMenuClose(); }}>
            <PdfIcon sx={{ mr: 1 }} /> Export as PDF
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => { handleSave(); handleFileMenuClose(); }}>
            <SaveIcon sx={{ mr: 1 }} /> Save
          </MenuItem>
          <MenuItem onClick={() => { handlePrint(); handleFileMenuClose(); }}>
            <PrintIcon sx={{ mr: 1 }} /> Print
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => { handleSimulateProcess(); handleFileMenuClose(); }}>
            <PlayArrowIcon sx={{ mr: 1 }} /> Simulate
          </MenuItem>
          <MenuItem onClick={() => { handleDeployProcess(); handleFileMenuClose(); }}>
            <PublishIcon sx={{ mr: 1 }} /> Deploy {deploymentStatus ? `(${deploymentStatus})` : ''}
          </MenuItem>
        </Menu>

        {/* Canvas */}
        <Box ref={containerRef} sx={{ flex: 1, position: 'relative' }}>
          {loading && (
            <Box sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'rgba(255,255,255,0.8)',
              zIndex: 1
            }}>
              <CircularProgress />
            </Box>
          )}
        </Box>
      </Box>

      {/* Right Sidebar */}
      <ResizableBox
        width={rightSidebarWidth}
        height={window.innerHeight}
        minConstraints={[200, window.innerHeight]}
        maxConstraints={[500, window.innerHeight]}
        axis="x"
        handle={<div className="custom-handle" style={{ 
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '5px',
          cursor: 'col-resize',
          background: 'rgba(0,0,0,0.1)',
        }}/>}
        onResize={(e, data) => {
          setRightSidebarWidth(data.size.width);
        }}
      >
        <Box className="sidebar-content" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Tabs */}
          <Tabs
            value={rightSidebarTab}
            onChange={(_, newValue) => setRightSidebarTab(newValue)}
            sx={{ 
              borderBottom: 1, 
              borderColor: 'divider',
              minHeight: 48,
              bgcolor: 'background.paper',
              '& .MuiTab-root': {
                minHeight: 48,
                textTransform: 'none',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'text.secondary',
                '&.Mui-selected': {
                  color: 'primary.main',
                  fontWeight: 600,
                },
              },
              '& .MuiTabs-indicator': {
                height: 3,
              },
            }}
          >
            <Tab 
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AccountTree fontSize="small" />
                  Properties
                </Box>
              }
              value="metadata"
            />
            <Tab 
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PsychologyIcon fontSize="small" />
                  AI Assistant
                </Box>
              }
              value="ai"
            />
          </Tabs>

          {/* Tab Panels */}
          <Box sx={{ 
            flex: 1, 
            overflow: 'auto', 
            display: 'flex', 
            flexDirection: 'column',
            bgcolor: 'background.paper',
          }}>
            {rightSidebarTab === 'metadata' && (
              <Box sx={{ 
                flex: 1, 
                overflow: 'auto', 
                p: 2,
                borderLeft: 1,
                borderColor: 'divider',
              }}>
                {renderMetadataPanel()}
              </Box>
            )}
            {rightSidebarTab === 'ai' && (
              <Box sx={{ 
                flex: 1, 
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'background.paper',
              }}>
                <SmartProcess
                  currentXml={currentXml}
                  selectedElementId={selectedElement?.id || null}
                  onElementAdd={handleElementAdd}
                  onUpdateXml={handleUpdateXml}
                />
              </Box>
            )}
          </Box>
        </Box>
        <div 
          className="sidebar-toggle"
          onClick={() => setRightSidebarCollapsed(!rightSidebarCollapsed)}
        >
          {rightSidebarCollapsed ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </div>
      </ResizableBox>

      {/* Notification Snackbar */}
      {(notification || simulationResults) && (
        <Snackbar
          open={true}
          autoHideDuration={6000}
          onClose={() => {
            setNotification(null);
            setSimulationResults(null);
          }}
        >
          <Alert
            onClose={() => {
              setNotification(null);
              setSimulationResults(null);
            }}
            severity={notification?.type || 'info'}
            sx={{ width: '100%' }}
          >
            {notification?.message || `Simulation completed: ${simulationResults?.metrics?.successRate}% success rate`}
          </Alert>
        </Snackbar>
      )}

      {error && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#f44336',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '4px',
          zIndex: 1000
        }}>
          {error}
        </div>
      )}

      {DEBUG && (
        <Box
          sx={{
            position: 'fixed',
            bottom: 0,
            right: 0,
            width: 300,
            maxHeight: 200,
            overflow: 'auto',
            bgcolor: 'background.paper',
            boxShadow: 3,
            p: 1,
            zIndex: 9999,
            display: 'none',
          }}
        >
          <Typography variant="subtitle2">Interaction Log:</Typography>
          <List dense>
            {interactionLog.map((event, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={`${event.elementType} - ${event.action}`}
                  secondary={event.error || (event.success ? 'Success' : 'Failed')}
                  sx={{ '& .MuiListItemText-secondary': { 
                    color: event.success ? 'success.main' : 'error.main' 
                  }}}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
} 