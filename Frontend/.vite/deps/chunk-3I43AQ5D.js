// node_modules/min-dom/dist/index.esm.js
function _mergeNamespaces(n, m) {
  m.forEach(function(e) {
    e && typeof e !== "string" && !Array.isArray(e) && Object.keys(e).forEach(function(k) {
      if (k !== "default" && !(k in n)) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  });
  return Object.freeze(n);
}
function attr(el, name, val) {
  if (arguments.length == 2) {
    return el.getAttribute(name);
  }
  if (val === null) {
    return el.removeAttribute(name);
  }
  el.setAttribute(name, val);
  return el;
}
var toString = Object.prototype.toString;
function classes(el) {
  return new ClassList(el);
}
function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error("A DOM element reference is required");
  }
  this.el = el;
  this.list = el.classList;
}
ClassList.prototype.add = function(name) {
  this.list.add(name);
  return this;
};
ClassList.prototype.remove = function(name) {
  if ("[object RegExp]" == toString.call(name)) {
    return this.removeMatching(name);
  }
  this.list.remove(name);
  return this;
};
ClassList.prototype.removeMatching = function(re) {
  const arr = this.array();
  for (let i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};
ClassList.prototype.toggle = function(name, force) {
  if ("undefined" !== typeof force) {
    if (force !== this.list.toggle(name, force)) {
      this.list.toggle(name);
    }
  } else {
    this.list.toggle(name);
  }
  return this;
};
ClassList.prototype.array = function() {
  return Array.from(this.list);
};
ClassList.prototype.has = ClassList.prototype.contains = function(name) {
  return this.list.contains(name);
};
var componentEvent = {};
var bind$1;
var unbind$1;
var prefix;
function detect() {
  bind$1 = window.addEventListener ? "addEventListener" : "attachEvent";
  unbind$1 = window.removeEventListener ? "removeEventListener" : "detachEvent";
  prefix = bind$1 !== "addEventListener" ? "on" : "";
}
var bind_1 = componentEvent.bind = function(el, type, fn, capture) {
  if (!bind$1) detect();
  el[bind$1](prefix + type, fn, capture || false);
  return fn;
};
var unbind_1 = componentEvent.unbind = function(el, type, fn, capture) {
  if (!unbind$1) detect();
  el[unbind$1](prefix + type, fn, capture || false);
  return fn;
};
var event = _mergeNamespaces({
  __proto__: null,
  bind: bind_1,
  unbind: unbind_1,
  "default": componentEvent
}, [componentEvent]);
var innerHTMLBug = false;
var bugTestDiv;
if (typeof document !== "undefined") {
  bugTestDiv = document.createElement("div");
  bugTestDiv.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
  innerHTMLBug = !bugTestDiv.getElementsByTagName("link").length;
  bugTestDiv = void 0;
}
var map = {
  legend: [1, "<fieldset>", "</fieldset>"],
  tr: [2, "<table><tbody>", "</tbody></table>"],
  col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
  // for script/link/style tags to work in IE6-8, you have to wrap
  // in a div with a non-whitespace character in front, ha!
  _default: innerHTMLBug ? [1, "X<div>", "</div>"] : [0, "", ""]
};
map.td = map.th = [3, "<table><tbody><tr>", "</tr></tbody></table>"];
map.option = map.optgroup = [1, '<select multiple="multiple">', "</select>"];
map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, "<table>", "</table>"];
map.polyline = map.ellipse = map.polygon = map.circle = map.text = map.line = map.path = map.rect = map.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">', "</svg>"];
function query(selector, el) {
  el = el || document;
  return el.querySelector(selector);
}
function all(selector, el) {
  el = el || document;
  return el.querySelectorAll(selector);
}

// node_modules/tiny-svg/dist/index.esm.js
function ensureImported(element, target) {
  if (element.ownerDocument !== target.ownerDocument) {
    try {
      return target.ownerDocument.importNode(element, true);
    } catch (e) {
    }
  }
  return element;
}
function appendTo(element, target) {
  return target.appendChild(ensureImported(element, target));
}
function append(target, node) {
  appendTo(node, target);
  return target;
}
var LENGTH_ATTR = 2;
var CSS_PROPERTIES = {
  "alignment-baseline": 1,
  "baseline-shift": 1,
  "clip": 1,
  "clip-path": 1,
  "clip-rule": 1,
  "color": 1,
  "color-interpolation": 1,
  "color-interpolation-filters": 1,
  "color-profile": 1,
  "color-rendering": 1,
  "cursor": 1,
  "direction": 1,
  "display": 1,
  "dominant-baseline": 1,
  "enable-background": 1,
  "fill": 1,
  "fill-opacity": 1,
  "fill-rule": 1,
  "filter": 1,
  "flood-color": 1,
  "flood-opacity": 1,
  "font": 1,
  "font-family": 1,
  "font-size": LENGTH_ATTR,
  "font-size-adjust": 1,
  "font-stretch": 1,
  "font-style": 1,
  "font-variant": 1,
  "font-weight": 1,
  "glyph-orientation-horizontal": 1,
  "glyph-orientation-vertical": 1,
  "image-rendering": 1,
  "kerning": 1,
  "letter-spacing": 1,
  "lighting-color": 1,
  "marker": 1,
  "marker-end": 1,
  "marker-mid": 1,
  "marker-start": 1,
  "mask": 1,
  "opacity": 1,
  "overflow": 1,
  "pointer-events": 1,
  "shape-rendering": 1,
  "stop-color": 1,
  "stop-opacity": 1,
  "stroke": 1,
  "stroke-dasharray": 1,
  "stroke-dashoffset": 1,
  "stroke-linecap": 1,
  "stroke-linejoin": 1,
  "stroke-miterlimit": 1,
  "stroke-opacity": 1,
  "stroke-width": LENGTH_ATTR,
  "text-anchor": 1,
  "text-decoration": 1,
  "text-rendering": 1,
  "unicode-bidi": 1,
  "visibility": 1,
  "word-spacing": 1,
  "writing-mode": 1
};
function getAttribute(node, name) {
  if (CSS_PROPERTIES[name]) {
    return node.style[name];
  } else {
    return node.getAttributeNS(null, name);
  }
}
function setAttribute(node, name, value) {
  var hyphenated = name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  var type = CSS_PROPERTIES[hyphenated];
  if (type) {
    if (type === LENGTH_ATTR && typeof value === "number") {
      value = String(value) + "px";
    }
    node.style[hyphenated] = value;
  } else {
    node.setAttributeNS(null, name, value);
  }
}
function setAttributes(node, attrs) {
  var names = Object.keys(attrs), i, name;
  for (i = 0, name; name = names[i]; i++) {
    setAttribute(node, name, attrs[name]);
  }
}
function attr2(node, name, value) {
  if (typeof name === "string") {
    if (value !== void 0) {
      setAttribute(node, name, value);
    } else {
      return getAttribute(node, name);
    }
  } else {
    setAttributes(node, name);
  }
  return node;
}
var toString2 = Object.prototype.toString;
function classes2(el) {
  return new ClassList2(el);
}
function ClassList2(el) {
  if (!el || !el.nodeType) {
    throw new Error("A DOM element reference is required");
  }
  this.el = el;
  this.list = el.classList;
}
ClassList2.prototype.add = function(name) {
  this.list.add(name);
  return this;
};
ClassList2.prototype.remove = function(name) {
  if ("[object RegExp]" == toString2.call(name)) {
    return this.removeMatching(name);
  }
  this.list.remove(name);
  return this;
};
ClassList2.prototype.removeMatching = function(re) {
  const arr = this.array();
  for (let i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};
ClassList2.prototype.toggle = function(name, force) {
  if ("undefined" !== typeof force) {
    if (force !== this.list.toggle(name, force)) {
      this.list.toggle(name);
    }
  } else {
    this.list.toggle(name);
  }
  return this;
};
ClassList2.prototype.array = function() {
  return Array.from(this.list);
};
ClassList2.prototype.has = ClassList2.prototype.contains = function(name) {
  return this.list.contains(name);
};
function clear(element) {
  var child;
  while (child = element.firstChild) {
    element.removeChild(child);
  }
  return element;
}
function clone(element) {
  return element.cloneNode(true);
}
var ns = {
  svg: "http://www.w3.org/2000/svg"
};
var SVG_START = '<svg xmlns="' + ns.svg + '"';
function parse(svg) {
  var unwrap = false;
  if (svg.substring(0, 4) === "<svg") {
    if (svg.indexOf(ns.svg) === -1) {
      svg = SVG_START + svg.substring(4);
    }
  } else {
    svg = SVG_START + ">" + svg + "</svg>";
    unwrap = true;
  }
  var parsed = parseDocument(svg);
  if (!unwrap) {
    return parsed;
  }
  var fragment = document.createDocumentFragment();
  var parent = parsed.firstChild;
  while (parent.firstChild) {
    fragment.appendChild(parent.firstChild);
  }
  return fragment;
}
function parseDocument(svg) {
  var parser;
  parser = new DOMParser();
  parser.async = false;
  return parser.parseFromString(svg, "text/xml");
}
function create(name, attrs) {
  var element;
  name = name.trim();
  if (name.charAt(0) === "<") {
    element = parse(name).firstChild;
    element = document.importNode(element, true);
  } else {
    element = document.createElementNS(ns.svg, name);
  }
  if (attrs) {
    attr2(element, attrs);
  }
  return element;
}
function remove(element) {
  var parent = element.parentNode;
  if (parent) {
    parent.removeChild(element);
  }
  return element;
}

// node_modules/min-dash/dist/index.esm.js
var nativeToString = Object.prototype.toString;
var nativeHasOwnProperty = Object.prototype.hasOwnProperty;
function isUndefined(obj) {
  return obj === void 0;
}
function isNil(obj) {
  return obj == null;
}
function isArray(obj) {
  return nativeToString.call(obj) === "[object Array]";
}
function isObject(obj) {
  return nativeToString.call(obj) === "[object Object]";
}
function isNumber(obj) {
  return nativeToString.call(obj) === "[object Number]";
}
function has(target, key) {
  return !isNil(target) && nativeHasOwnProperty.call(target, key);
}
function forEach(collection, iterator) {
  let val, result;
  if (isUndefined(collection)) {
    return;
  }
  const convertKey = isArray(collection) ? toNum : identity;
  for (let key in collection) {
    if (has(collection, key)) {
      val = collection[key];
      result = iterator(val, convertKey(key));
      if (result === false) {
        return val;
      }
    }
  }
}
function reduce(collection, iterator, result) {
  forEach(collection, function(value, idx) {
    result = iterator(result, value, idx);
  });
  return result;
}
function every(collection, matcher) {
  return !!reduce(collection, function(matches, val, key) {
    return matches && matcher(val, key);
  }, true);
}
function identity(arg) {
  return arg;
}
function toNum(arg) {
  return Number(arg);
}
function assign(target, ...others) {
  return Object.assign(target, ...others);
}

export {
  attr,
  classes,
  event,
  query,
  all,
  append,
  attr2,
  classes2,
  clear,
  clone,
  create,
  remove,
  isObject,
  isNumber,
  has,
  every,
  assign
};
//# sourceMappingURL=chunk-3I43AQ5D.js.map
