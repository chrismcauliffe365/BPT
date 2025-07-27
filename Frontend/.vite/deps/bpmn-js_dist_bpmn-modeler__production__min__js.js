import {
  __commonJS
} from "./chunk-V4OQ3NZ2.js";

// node_modules/bpmn-js/dist/bpmn-modeler.production.min.js
var require_bpmn_modeler_production_min = __commonJS({
  "node_modules/bpmn-js/dist/bpmn-modeler.production.min.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).BpmnJS = t();
    }(exports, function() {
      "use strict";
      function e(e2, t2) {
        t2 && (e2.super_ = t2, e2.prototype = Object.create(t2.prototype, { constructor: { value: e2, enumerable: false, writable: true, configurable: true } }));
      }
      var t = function(e2, t2) {
        return e2(t2 = { exports: {} }, t2.exports), t2.exports;
      }(function(e2) {
        var t2 = e2.exports = function(e3, n2) {
          if (n2 || (n2 = 16), void 0 === e3 && (e3 = 128), e3 <= 0) return "0";
          for (var i2 = Math.log(Math.pow(2, e3)) / Math.log(n2), r2 = 2; i2 === 1 / 0; r2 *= 2) i2 = Math.log(Math.pow(2, e3 / r2)) / Math.log(n2) * r2;
          var o2 = i2 - Math.floor(i2), a2 = "";
          for (r2 = 0; r2 < Math.floor(i2); r2++) {
            a2 = Math.floor(Math.random() * n2).toString(n2) + a2;
          }
          if (o2) {
            var s2 = Math.pow(n2, o2);
            a2 = Math.floor(Math.random() * s2).toString(n2) + a2;
          }
          var c2 = parseInt(a2, n2);
          return c2 !== 1 / 0 && c2 >= Math.pow(2, e3) ? t2(e3, n2) : a2;
        };
        t2.rack = function(e3, n2, i2) {
          var r2 = function(r3) {
            var a2 = 0;
            do {
              if (a2++ > 10) {
                if (!i2) throw new Error("too many ID collisions, use more bits");
                e3 += i2;
              }
              var s2 = t2(e3, n2);
            } while (Object.hasOwnProperty.call(o2, s2));
            return o2[s2] = r3, s2;
          }, o2 = r2.hats = {};
          return r2.get = function(e4) {
            return r2.hats[e4];
          }, r2.set = function(e4, t3) {
            return r2.hats[e4] = t3, r2;
          }, r2.bits = e3 || 128, r2.base = n2 || 16, r2;
        };
      });
      function n(e2) {
        if (!(this instanceof n)) return new n(e2);
        e2 = e2 || [128, 36, 1], this._seed = e2.length ? t.rack(e2[0], e2[1], e2[2]) : e2;
      }
      function i(e2) {
        return Array.prototype.concat.apply([], e2);
      }
      n.prototype.next = function(e2) {
        return this._seed(e2 || true);
      }, n.prototype.nextPrefixed = function(e2, t2) {
        var n2;
        do {
          n2 = e2 + this.next(true);
        } while (this.assigned(n2));
        return this.claim(n2, t2), n2;
      }, n.prototype.claim = function(e2, t2) {
        this._seed.set(e2, t2 || true);
      }, n.prototype.assigned = function(e2) {
        return this._seed.get(e2) || false;
      }, n.prototype.unclaim = function(e2) {
        delete this._seed.hats[e2];
      }, n.prototype.clear = function() {
        var e2, t2 = this._seed.hats;
        for (e2 in t2) this.unclaim(e2);
      };
      const r = Object.prototype.toString, o = Object.prototype.hasOwnProperty;
      function a(e2) {
        return void 0 === e2;
      }
      function s(e2) {
        return void 0 !== e2;
      }
      function c(e2) {
        return null == e2;
      }
      function p(e2) {
        return "[object Array]" === r.call(e2);
      }
      function l(e2) {
        return "[object Object]" === r.call(e2);
      }
      function u(e2) {
        return "[object Number]" === r.call(e2);
      }
      function h(e2) {
        const t2 = r.call(e2);
        return "[object Function]" === t2 || "[object AsyncFunction]" === t2 || "[object GeneratorFunction]" === t2 || "[object AsyncGeneratorFunction]" === t2 || "[object Proxy]" === t2;
      }
      function d(e2) {
        return "[object String]" === r.call(e2);
      }
      function f(e2, t2) {
        return o.call(e2, t2);
      }
      function m(e2, t2) {
        const n2 = D(t2);
        let i2;
        return g(e2, function(e3, t3) {
          if (n2(e3, t3)) return i2 = e3, false;
        }), i2;
      }
      function v(e2, t2) {
        const n2 = D(t2);
        let i2 = p(e2) ? -1 : void 0;
        return g(e2, function(e3, t3) {
          if (n2(e3, t3)) return i2 = t3, false;
        }), i2;
      }
      function y(e2, t2) {
        const n2 = D(t2);
        let i2 = [];
        return g(e2, function(e3, t3) {
          n2(e3, t3) && i2.push(e3);
        }), i2;
      }
      function g(e2, t2) {
        let n2, i2;
        if (a(e2)) return;
        const r2 = p(e2) ? N : B;
        for (let o2 in e2) if (f(e2, o2) && (n2 = e2[o2], i2 = t2(n2, r2(o2)), false === i2)) return n2;
      }
      function b(e2, t2) {
        if (a(e2)) return [];
        !function(e3) {
          if (!p(e3)) throw new Error("must supply array");
        }(e2);
        const n2 = D(t2);
        return e2.filter(function(e3, t3) {
          return !n2(e3, t3);
        });
      }
      function x(e2, t2, n2) {
        return g(e2, function(e3, i2) {
          n2 = t2(n2, e3, i2);
        }), n2;
      }
      function _(e2, t2) {
        return !!x(e2, function(e3, n2, i2) {
          return e3 && t2(n2, i2);
        }, true);
      }
      function w(e2, t2) {
        return !!m(e2, t2);
      }
      function E(e2, t2) {
        let n2 = [];
        return g(e2, function(e3, i2) {
          n2.push(t2(e3, i2));
        }), n2;
      }
      function S(e2) {
        return e2 && Object.keys(e2) || [];
      }
      function C(e2) {
        return E(e2, (e3) => e3);
      }
      function R(e2, t2, n2 = {}) {
        return t2 = M(t2), g(e2, function(e3) {
          let i2 = t2(e3) || "_", r2 = n2[i2];
          r2 || (r2 = n2[i2] = []), r2.push(e3);
        }), n2;
      }
      function P(e2, ...t2) {
        e2 = M(e2);
        let n2 = {};
        return g(t2, (t3) => R(t3, e2, n2)), E(n2, function(e3, t3) {
          return e3[0];
        });
      }
      const T = P;
      function k(e2, t2) {
        t2 = M(t2);
        let n2 = [];
        return g(e2, function(e3, i2) {
          let r2 = t2(e3, i2), o2 = { d: r2, v: e3 };
          for (var a2 = 0; a2 < n2.length; a2++) {
            let { d: e4 } = n2[a2];
            if (r2 < e4) return void n2.splice(a2, 0, o2);
          }
          n2.push(o2);
        }), E(n2, (e3) => e3.v);
      }
      function A(e2) {
        return function(t2) {
          return _(e2, function(e3, n2) {
            return t2[n2] === e3;
          });
        };
      }
      function M(e2) {
        return h(e2) ? e2 : (t2) => t2[e2];
      }
      function D(e2) {
        return h(e2) ? e2 : (t2) => t2 === e2;
      }
      function B(e2) {
        return e2;
      }
      function N(e2) {
        return Number(e2);
      }
      function O(e2, t2) {
        let n2, i2, r2, o2;
        function a2(n3) {
          let a3 = Date.now(), p3 = n3 ? 0 : o2 + t2 - a3;
          if (p3 > 0) return s2(p3);
          e2.apply(r2, i2), c2();
        }
        function s2(e3) {
          n2 = setTimeout(a2, e3);
        }
        function c2() {
          n2 && clearTimeout(n2), n2 = o2 = i2 = r2 = void 0;
        }
        function p2(...e3) {
          o2 = Date.now(), i2 = e3, r2 = this, n2 || s2(t2);
        }
        return p2.flush = function() {
          n2 && a2(true), c2();
        }, p2.cancel = c2, p2;
      }
      function j(e2, t2) {
        return e2.bind(t2);
      }
      function L(e2, ...t2) {
        return Object.assign(e2, ...t2);
      }
      function I(e2, t2) {
        let n2 = {}, i2 = Object(e2);
        return g(t2, function(t3) {
          t3 in i2 && (n2[t3] = e2[t3]);
        }), n2;
      }
      function $(e2, t2) {
        let n2 = {};
        return g(Object(e2), function(e3, i2) {
          -1 === t2.indexOf(i2) && (n2[i2] = e3);
        }), n2;
      }
      function F(e2, t2) {
        return t2.forEach(function(t3) {
          t3 && "string" != typeof t3 && !Array.isArray(t3) && Object.keys(t3).forEach(function(n2) {
            if ("default" !== n2 && !(n2 in e2)) {
              var i2 = Object.getOwnPropertyDescriptor(t3, n2);
              Object.defineProperty(e2, n2, i2.get ? i2 : { enumerable: true, get: function() {
                return t3[n2];
              } });
            }
          });
        }), Object.freeze(e2);
      }
      const z = Object.prototype.toString, H = Object.prototype.hasOwnProperty;
      function G(e2, t2) {
        return H.call(e2, t2);
      }
      function V(e2, t2) {
        let n2, i2;
        if (void 0 === e2) return;
        const r2 = function(e3) {
          return "[object Array]" === z.call(e3);
        }(e2) ? U : W;
        for (let o2 in e2) if (G(e2, o2) && (n2 = e2[o2], i2 = t2(n2, r2(o2)), false === i2)) return n2;
      }
      function W(e2) {
        return e2;
      }
      function U(e2) {
        return Number(e2);
      }
      function q(e2, ...t2) {
        const n2 = e2.style;
        return V(t2, function(e3) {
          e3 && V(e3, function(e4, t3) {
            n2[t3] = e4;
          });
        }), e2;
      }
      function K(e2, t2, n2) {
        return 2 == arguments.length ? e2.getAttribute(t2) : null === n2 ? e2.removeAttribute(t2) : (e2.setAttribute(t2, n2), e2);
      }
      const Y = Object.prototype.toString;
      function X(e2) {
        return new Z(e2);
      }
      function Z(e2) {
        if (!e2 || !e2.nodeType) throw new Error("A DOM element reference is required");
        this.el = e2, this.list = e2.classList;
      }
      function Q(e2) {
        for (var t2; e2.childNodes.length; ) t2 = e2.childNodes[0], e2.removeChild(t2);
        return e2;
      }
      function J(e2, t2) {
        return e2 && "function" == typeof e2.matches && e2.matches(t2);
      }
      function ee(e2, t2, n2) {
        for (var i2 = n2 ? e2 : e2.parentNode; i2 && i2.nodeType !== document.DOCUMENT_NODE && i2.nodeType !== document.DOCUMENT_FRAGMENT_NODE; ) {
          if (J(i2, t2)) return i2;
          i2 = i2.parentNode;
        }
        return J(i2, t2) ? i2 : null;
      }
      Z.prototype.add = function(e2) {
        return this.list.add(e2), this;
      }, Z.prototype.remove = function(e2) {
        return "[object RegExp]" == Y.call(e2) ? this.removeMatching(e2) : (this.list.remove(e2), this);
      }, Z.prototype.removeMatching = function(e2) {
        const t2 = this.array();
        for (let n2 = 0; n2 < t2.length; n2++) e2.test(t2[n2]) && this.remove(t2[n2]);
        return this;
      }, Z.prototype.toggle = function(e2, t2) {
        return void 0 !== t2 ? t2 !== this.list.toggle(e2, t2) && this.list.toggle(e2) : this.list.toggle(e2), this;
      }, Z.prototype.array = function() {
        return Array.from(this.list);
      }, Z.prototype.has = Z.prototype.contains = function(e2) {
        return this.list.contains(e2);
      };
      var te, ne, ie, re = {};
      function oe() {
        te = window.addEventListener ? "addEventListener" : "attachEvent", ne = window.removeEventListener ? "removeEventListener" : "detachEvent", ie = "addEventListener" !== te ? "on" : "";
      }
      var ae = F({ __proto__: null, bind: re.bind = function(e2, t2, n2, i2) {
        return te || oe(), e2[te](ie + t2, n2, i2 || false), n2;
      }, unbind: re.unbind = function(e2, t2, n2, i2) {
        return ne || oe(), e2[ne](ie + t2, n2, i2 || false), n2;
      }, default: re }, [re]), se = ["focus", "blur"];
      var ce, pe = { bind: function(e2, t2, n2, i2, r2) {
        return -1 !== se.indexOf(n2) && (r2 = true), ae.bind(e2, n2, function(n3) {
          var r3 = n3.target || n3.srcElement;
          n3.delegateTarget = ee(r3, t2, true), n3.delegateTarget && i2.call(e2, n3);
        }, r2);
      }, unbind: function(e2, t2, n2, i2) {
        return -1 !== se.indexOf(t2) && (i2 = true), ae.unbind(e2, t2, n2, i2);
      } }, le = function(e2, t2) {
        if ("string" != typeof e2) throw new TypeError("String expected");
        t2 || (t2 = document);
        var n2 = /<([\w:]+)/.exec(e2);
        if (!n2) return t2.createTextNode(e2);
        e2 = e2.replace(/^\s+|\s+$/g, "");
        var i2 = n2[1];
        if ("body" == i2) {
          return (r2 = t2.createElement("html")).innerHTML = e2, r2.removeChild(r2.lastChild);
        }
        var r2, o2 = Object.prototype.hasOwnProperty.call(he, i2) ? he[i2] : he._default, a2 = o2[0], s2 = o2[1], c2 = o2[2];
        (r2 = t2.createElement("div")).innerHTML = s2 + e2 + c2;
        for (; a2--; ) r2 = r2.lastChild;
        if (r2.firstChild == r2.lastChild) return r2.removeChild(r2.firstChild);
        var p2 = t2.createDocumentFragment();
        for (; r2.firstChild; ) p2.appendChild(r2.removeChild(r2.firstChild));
        return p2;
      }, ue = false;
      "undefined" != typeof document && ((ce = document.createElement("div")).innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>', ue = !ce.getElementsByTagName("link").length, ce = void 0);
      var he = { legend: [1, "<fieldset>", "</fieldset>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], _default: ue ? [1, "X<div>", "</div>"] : [0, "", ""] };
      he.td = he.th = [3, "<table><tbody><tr>", "</tr></tbody></table>"], he.option = he.optgroup = [1, '<select multiple="multiple">', "</select>"], he.thead = he.tbody = he.colgroup = he.caption = he.tfoot = [1, "<table>", "</table>"], he.polyline = he.ellipse = he.polygon = he.circle = he.text = he.line = he.path = he.rect = he.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">', "</svg>"];
      var de = le;
      function fe(e2, t2) {
        return (t2 = t2 || document).querySelector(e2);
      }
      function me(e2, t2) {
        return (t2 = t2 || document).querySelectorAll(e2);
      }
      function ve(e2) {
        e2.parentNode && e2.parentNode.removeChild(e2);
      }
      function ye(e2, t2) {
        return t2.appendChild(function(e3, t3) {
          if (e3.ownerDocument !== t3.ownerDocument) try {
            return t3.ownerDocument.importNode(e3, true);
          } catch (e4) {
          }
          return e3;
        }(e2, t2));
      }
      function ge(e2, t2) {
        return ye(t2, e2), e2;
      }
      var be = 2, xe = { "alignment-baseline": 1, "baseline-shift": 1, clip: 1, "clip-path": 1, "clip-rule": 1, color: 1, "color-interpolation": 1, "color-interpolation-filters": 1, "color-profile": 1, "color-rendering": 1, cursor: 1, direction: 1, display: 1, "dominant-baseline": 1, "enable-background": 1, fill: 1, "fill-opacity": 1, "fill-rule": 1, filter: 1, "flood-color": 1, "flood-opacity": 1, font: 1, "font-family": 1, "font-size": be, "font-size-adjust": 1, "font-stretch": 1, "font-style": 1, "font-variant": 1, "font-weight": 1, "glyph-orientation-horizontal": 1, "glyph-orientation-vertical": 1, "image-rendering": 1, kerning: 1, "letter-spacing": 1, "lighting-color": 1, marker: 1, "marker-end": 1, "marker-mid": 1, "marker-start": 1, mask: 1, opacity: 1, overflow: 1, "pointer-events": 1, "shape-rendering": 1, "stop-color": 1, "stop-opacity": 1, stroke: 1, "stroke-dasharray": 1, "stroke-dashoffset": 1, "stroke-linecap": 1, "stroke-linejoin": 1, "stroke-miterlimit": 1, "stroke-opacity": 1, "stroke-width": be, "text-anchor": 1, "text-decoration": 1, "text-rendering": 1, "unicode-bidi": 1, visibility: 1, "word-spacing": 1, "writing-mode": 1 };
      function _e(e2, t2, n2) {
        var i2 = t2.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), r2 = xe[i2];
        r2 ? (r2 === be && "number" == typeof n2 && (n2 = String(n2) + "px"), e2.style[i2] = n2) : e2.setAttributeNS(null, t2, n2);
      }
      function we(e2, t2, n2) {
        if ("string" == typeof t2) {
          if (void 0 === n2) return function(e3, t3) {
            return xe[t3] ? e3.style[t3] : e3.getAttributeNS(null, t3);
          }(e2, t2);
          _e(e2, t2, n2);
        } else !function(e3, t3) {
          var n3, i2, r2 = Object.keys(t3);
          for (n3 = 0; i2 = r2[n3]; n3++) _e(e3, i2, t3[i2]);
        }(e2, t2);
        return e2;
      }
      const Ee = Object.prototype.toString;
      function Se(e2) {
        return new Ce(e2);
      }
      function Ce(e2) {
        if (!e2 || !e2.nodeType) throw new Error("A DOM element reference is required");
        this.el = e2, this.list = e2.classList;
      }
      function Re(e2) {
        var t2 = e2.parentNode;
        return t2 && t2.removeChild(e2), e2;
      }
      function Pe(e2) {
        for (var t2; t2 = e2.firstChild; ) Re(t2);
        return e2;
      }
      function Te(e2) {
        return e2.cloneNode(true);
      }
      Ce.prototype.add = function(e2) {
        return this.list.add(e2), this;
      }, Ce.prototype.remove = function(e2) {
        return "[object RegExp]" == Ee.call(e2) ? this.removeMatching(e2) : (this.list.remove(e2), this);
      }, Ce.prototype.removeMatching = function(e2) {
        const t2 = this.array();
        for (let n2 = 0; n2 < t2.length; n2++) e2.test(t2[n2]) && this.remove(t2[n2]);
        return this;
      }, Ce.prototype.toggle = function(e2, t2) {
        return void 0 !== t2 ? t2 !== this.list.toggle(e2, t2) && this.list.toggle(e2) : this.list.toggle(e2), this;
      }, Ce.prototype.array = function() {
        return Array.from(this.list);
      }, Ce.prototype.has = Ce.prototype.contains = function(e2) {
        return this.list.contains(e2);
      };
      var ke = { svg: "http://www.w3.org/2000/svg" }, Ae = '<svg xmlns="' + ke.svg + '"';
      function Me(e2) {
        var t2 = false;
        "<svg" === e2.substring(0, 4) ? -1 === e2.indexOf(ke.svg) && (e2 = Ae + e2.substring(4)) : (e2 = Ae + ">" + e2 + "</svg>", t2 = true);
        var n2 = function(e3) {
          var t3;
          return (t3 = new DOMParser()).async = false, t3.parseFromString(e3, "text/xml");
        }(e2);
        if (!t2) return n2;
        for (var i2 = document.createDocumentFragment(), r2 = n2.firstChild; r2.firstChild; ) i2.appendChild(r2.firstChild);
        return i2;
      }
      function De(e2, t2) {
        var n2;
        return "<" === e2.charAt(0) ? (n2 = Me(e2).firstChild, n2 = document.importNode(n2, true)) : n2 = document.createElementNS(ke.svg, e2), t2 && we(n2, t2), n2;
      }
      var Be = null;
      function Ne() {
        return null === Be && (Be = De("svg")), Be;
      }
      function Oe(e2, t2) {
        var n2, i2, r2 = Object.keys(t2);
        for (n2 = 0; i2 = r2[n2]; n2++) e2[i2] = t2[i2];
        return e2;
      }
      function je(e2) {
        return e2 ? Ne().createSVGTransformFromMatrix(e2) : Ne().createSVGTransform();
      }
      var Le = /([&<>]{1})/g, Ie = /([\n\r"]{1})/g, $e = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "'" };
      function Fe(e2, t2) {
        return e2.replace(t2, function(e3, t3) {
          return $e[t3] || t3;
        });
      }
      function ze(e2, t2) {
        var n2, i2, r2, o2, a2;
        switch (e2.nodeType) {
          case 3:
            t2.push(Fe(e2.textContent, Le));
            break;
          case 1:
            if (t2.push("<", e2.tagName), e2.hasAttributes()) for (n2 = 0, i2 = (r2 = e2.attributes).length; n2 < i2; ++n2) o2 = r2.item(n2), t2.push(" ", o2.name, '="', Fe(o2.value, Ie), '"');
            if (e2.hasChildNodes()) {
              for (t2.push(">"), n2 = 0, i2 = (a2 = e2.childNodes).length; n2 < i2; ++n2) ze(a2.item(n2), t2);
              t2.push("</", e2.tagName, ">");
            } else t2.push("/>");
            break;
          case 8:
            t2.push("<!--", Fe(e2.nodeValue, Le), "-->");
            break;
          case 4:
            t2.push("<![CDATA[", e2.nodeValue, "]]>");
            break;
          default:
            throw new Error("unable to handle node " + e2.nodeType);
        }
        return t2;
      }
      function He(e2, t2) {
        var n2 = Me(t2);
        if (Pe(e2), t2) {
          (function(e3) {
            return "#document-fragment" === e3.nodeName;
          })(n2) || (n2 = n2.documentElement);
          for (var i2, r2 = (i2 = n2.childNodes, Array.prototype.slice.call(i2)), o2 = 0; o2 < r2.length; o2++) ye(r2[o2], e2);
        }
      }
      function Ge(e2, t2) {
        if (void 0 !== t2) {
          try {
            He(e2, t2);
          } catch (e3) {
            throw new Error("error parsing SVG: " + e3.message);
          }
          return e2;
        }
        return function(e3) {
          for (var t3 = e3.firstChild, n2 = []; t3; ) ze(t3, n2), t3 = t3.nextSibling;
          return n2.join("");
        }(e2);
      }
      function Ve(e2, t2) {
        return t2 instanceof SVGMatrix ? e2.createSVGTransformFromMatrix(t2) : t2;
      }
      function We(e2, t2) {
        var n2 = e2.transform.baseVal;
        return t2 && (Array.isArray(t2) || (t2 = [t2]), function(e3, t3) {
          var n3, i2;
          for (e3.clear(), n3 = 0; i2 = t3[n3]; n3++) e3.appendItem(Ve(e3, i2));
        }(n2, t2)), n2.consolidate();
      }
      const Ue = /^class[ {]/;
      function qe(e2) {
        return Array.isArray(e2);
      }
      function Ke(e2, t2) {
        return Object.prototype.hasOwnProperty.call(e2, t2);
      }
      function Ye(...e2) {
        1 === e2.length && qe(e2[0]) && (e2 = e2[0]);
        const t2 = (e2 = [...e2]).pop();
        return t2.$inject = e2, t2;
      }
      const Xe = /constructor\s*[^(]*\(\s*([^)]*)\)/m, Ze = /^(?:async\s+)?(?:function\s*[^(]*)?(?:\(\s*([^)]*)\)|(\w+))/m, Qe = /\/\*([^*]*)\*\//m;
      function Je(e2) {
        if ("function" != typeof e2) throw new Error(`Cannot annotate "${e2}". Expected a function!`);
        const t2 = e2.toString().match(function(e3) {
          return Ue.test(e3.toString());
        }(e2) ? Xe : Ze);
        if (!t2) return [];
        const n2 = t2[1] || t2[2];
        return n2 && n2.split(",").map((e3) => {
          const t3 = e3.match(Qe);
          return (t3 && t3[1] || e3).trim();
        }) || [];
      }
      function et(e2, t2) {
        t2 = t2 || { get: function(e3, t3) {
          if (n2.push(e3), false === t3) return null;
          throw a2(`No provider for "${e3}"!`);
        } };
        const n2 = [], i2 = this._providers = Object.create(t2._providers || null), r2 = this._instances = /* @__PURE__ */ Object.create(null), o2 = r2.injector = this, a2 = function(e3) {
          const t3 = n2.join(" -> ");
          return n2.length = 0, new Error(t3 ? `${e3} (Resolving: ${t3})` : e3);
        };
        function s2(e3, o3) {
          if (!i2[e3] && -1 !== e3.indexOf(".")) {
            const t3 = e3.split(".");
            let n3 = s2(t3.shift());
            for (; t3.length; ) n3 = n3[t3.shift()];
            return n3;
          }
          if (Ke(r2, e3)) return r2[e3];
          if (Ke(i2, e3)) {
            if (-1 !== n2.indexOf(e3)) throw n2.push(e3), a2("Cannot resolve circular dependency!");
            return n2.push(e3), r2[e3] = i2[e3][0](i2[e3][1]), n2.pop(), r2[e3];
          }
          return t2.get(e3, o3);
        }
        function c2(e3, t3) {
          if (void 0 === t3 && (t3 = {}), "function" != typeof e3) {
            if (!qe(e3)) throw a2(`Cannot invoke "${e3}". Expected a function!`);
            e3 = Ye(e3.slice());
          }
          return { fn: e3, dependencies: (e3.$inject || Je(e3)).map((e4) => Ke(t3, e4) ? t3[e4] : s2(e4)) };
        }
        function p2(e3) {
          const { fn: t3, dependencies: n3 } = c2(e3);
          return new (Function.prototype.bind.apply(t3, [null].concat(n3)))();
        }
        function l2(e3, t3, n3) {
          const { fn: i3, dependencies: r3 } = c2(e3, n3);
          return i3.apply(t3, r3);
        }
        function u2(e3) {
          return Ye((t3) => e3.get(t3));
        }
        function h2(e3, t3) {
          if (t3 && t3.length) {
            const n3 = /* @__PURE__ */ Object.create(null), r3 = /* @__PURE__ */ Object.create(null), o3 = [], a3 = [], s3 = [];
            let c3, p3, l3, h3;
            for (let e4 in i2) c3 = i2[e4], -1 !== t3.indexOf(e4) && ("private" === c3[2] ? (p3 = o3.indexOf(c3[3]), -1 === p3 ? (l3 = c3[3].createChild([], t3), h3 = u2(l3), o3.push(c3[3]), a3.push(l3), s3.push(h3), n3[e4] = [h3, e4, "private", l3]) : n3[e4] = [s3[p3], e4, "private", a3[p3]]) : n3[e4] = [c3[2], c3[1]], r3[e4] = true), "factory" !== c3[2] && "type" !== c3[2] || !c3[1].$scope || t3.forEach((t4) => {
              -1 !== c3[1].$scope.indexOf(t4) && (n3[e4] = [c3[2], c3[1]], r3[t4] = true);
            });
            t3.forEach((e4) => {
              if (!r3[e4]) throw new Error('No provider for "' + e4 + '". Cannot use provider from the parent!');
            }), e3.unshift(n3);
          }
          return new et(e3, o2);
        }
        const d2 = { factory: l2, type: p2, value: function(e3) {
          return e3;
        } };
        function f2(e3, t3) {
          const n3 = e3.__init__ || [];
          return function() {
            n3.forEach((e4) => {
              "string" == typeof e4 ? t3.get(e4) : t3.invoke(e4);
            });
          };
        }
        function m2(e3) {
          const t3 = e3.__exports__;
          if (t3) {
            const n3 = e3.__modules__, r3 = Object.keys(e3).reduce((t4, n4) => ("__exports__" !== n4 && "__modules__" !== n4 && "__init__" !== n4 && "__depends__" !== n4 && (t4[n4] = e3[n4]), t4), /* @__PURE__ */ Object.create(null)), o3 = h2((n3 || []).concat(r3)), a3 = Ye(function(e4) {
              return o3.get(e4);
            });
            t3.forEach(function(e4) {
              i2[e4] = [a3, e4, "private", o3];
            });
            const s3 = (e3.__init__ || []).slice();
            return s3.unshift(function() {
              o3.init();
            }), f2(e3 = Object.assign({}, e3, { __init__: s3 }), o3);
          }
          return Object.keys(e3).forEach(function(t4) {
            if ("__init__" === t4 || "__depends__" === t4) return;
            if ("private" === e3[t4][2]) return void (i2[t4] = e3[t4]);
            const n3 = e3[t4][0], r3 = e3[t4][1];
            i2[t4] = [d2[n3], tt(n3, r3), n3];
          }), f2(e3, o2);
        }
        function v2(e3, t3) {
          return -1 !== e3.indexOf(t3) || -1 !== (e3 = (t3.__depends__ || []).reduce(v2, e3)).indexOf(t3) ? e3 : e3.concat(t3);
        }
        this.get = s2, this.invoke = l2, this.instantiate = p2, this.createChild = h2, this.init = function(e3) {
          const t3 = e3.reduce(v2, []).map(m2);
          let n3 = false;
          return function() {
            n3 || (n3 = true, t3.forEach((e4) => e4()));
          };
        }(e2);
      }
      function tt(e2, t2) {
        return "value" !== e2 && qe(t2) && (t2 = Ye(t2.slice())), t2;
      }
      var nt = 1e3;
      function it(e2, t2) {
        var n2 = this;
        t2 = t2 || nt, e2.on(["render.shape", "render.connection"], t2, function(e3, t3) {
          var i2 = e3.type, r2 = t3.element, o2 = t3.gfx, a2 = t3.attrs;
          if (n2.canRender(r2)) return "render.shape" === i2 ? n2.drawShape(o2, r2, a2) : n2.drawConnection(o2, r2, a2);
        }), e2.on(["render.getShapePath", "render.getConnectionPath"], t2, function(e3, t3) {
          if (n2.canRender(t3)) return "render.getShapePath" === e3.type ? n2.getShapePath(t3) : n2.getConnectionPath(t3);
        });
      }
      function rt(e2) {
        return e2.flat().join(",").replace(/,?([A-z]),?/g, "$1");
      }
      function ot(e2) {
        return ["L", e2.x, e2.y];
      }
      function at(e2, t2) {
        const n2 = e2.length, i2 = [(r2 = e2[0], ["M", r2.x, r2.y])];
        var r2, o2, a2, s2;
        for (let r3 = 1; r3 < n2; r3++) {
          const n3 = e2[r3 - 1], c2 = e2[r3], p2 = e2[r3 + 1];
          if (!p2 || !t2) {
            i2.push(ot(c2));
            continue;
          }
          const l2 = Math.min(t2, ct(c2.x - n3.x, c2.y - n3.y), ct(p2.x - c2.x, p2.y - c2.y));
          if (!l2) {
            i2.push(ot(c2));
            continue;
          }
          const u2 = st(c2, n3, l2), h2 = st(c2, n3, 0.5 * l2), d2 = st(c2, p2, l2), f2 = st(c2, p2, 0.5 * l2);
          i2.push(ot(u2)), i2.push((a2 = f2, s2 = d2, ["C", (o2 = h2).x, o2.y, a2.x, a2.y, s2.x, s2.y]));
        }
        return i2;
      }
      function st(e2, t2, n2) {
        const i2 = t2.x - e2.x, r2 = t2.y - e2.y, o2 = n2 / ct(i2, r2);
        return { x: e2.x + i2 * o2, y: e2.y + r2 * o2 };
      }
      function ct(e2, t2) {
        return Math.sqrt(Math.pow(e2, 2) + Math.pow(t2, 2));
      }
      function pt(e2, t2, n2) {
        u(t2) && (n2 = t2, t2 = null), t2 || (t2 = {});
        const i2 = De("path", t2);
        return u(n2) && (i2.dataset.cornerRadius = String(n2)), lt(i2, e2);
      }
      function lt(e2, t2) {
        return we(e2, { d: rt(at(t2, parseInt(e2.dataset.cornerRadius, 10) || 0)) }), e2;
      }
      function ut(e2) {
        return y(e2, function(t2) {
          return !m(e2, function(e3) {
            return e3 !== t2 && ht(t2, e3);
          });
        });
      }
      function ht(e2, t2) {
        if (t2) {
          if (e2 === t2) return t2;
          if (e2.parent) return ht(e2.parent, t2);
        }
      }
      function dt(e2, t2, n2) {
        var i2 = !n2 || -1 === e2.indexOf(t2);
        return i2 && e2.push(t2), i2;
      }
      function ft(e2, t2, n2) {
        n2 = n2 || 0, p(e2) || (e2 = [e2]), g(e2, function(e3, i2) {
          var r2 = t2(e3, i2, n2);
          p(r2) && r2.length && ft(r2, t2, n2 + 1);
        });
      }
      function mt(e2, t2) {
        return function(e3, t3, n2) {
          var i2 = [], r2 = [];
          return ft(e3, function(e4, o2, a2) {
            dt(i2, e4, t3);
            var s2 = e4.children;
            if ((-1 === n2 || a2 < n2) && s2 && dt(r2, s2, t3)) return s2;
          }), i2;
        }(e2, !t2, -1);
      }
      function vt(e2, t2) {
        var n2, i2, r2, o2;
        return t2 = !!t2, p(e2) || (e2 = [e2]), g(e2, function(e3) {
          var a2 = e3;
          e3.waypoints && !t2 && (a2 = vt(e3.waypoints, true));
          var s2 = a2.x, c2 = a2.y, p2 = a2.height || 0, l2 = a2.width || 0;
          (s2 < n2 || void 0 === n2) && (n2 = s2), (c2 < i2 || void 0 === i2) && (i2 = c2), (s2 + l2 > r2 || void 0 === r2) && (r2 = s2 + l2), (c2 + p2 > o2 || void 0 === o2) && (o2 = c2 + p2);
        }), { x: n2, y: i2, height: o2 - i2, width: r2 - n2 };
      }
      function yt(e2) {
        return "waypoints" in e2 ? "connection" : "x" in e2 ? "shape" : "root";
      }
      function gt(e2) {
        return !(!e2 || !e2.isFrame);
      }
      function bt(e2, t2) {
        return L({}, e2 || {}, t2 || {});
      }
      it.prototype.canRender = function(e2) {
      }, it.prototype.drawShape = function(e2, t2) {
      }, it.prototype.drawConnection = function(e2, t2) {
      }, it.prototype.getShapePath = function(e2) {
      }, it.prototype.getConnectionPath = function(e2) {
      };
      function xt(e2, t2) {
        it.call(this, e2, 1), this.CONNECTION_STYLE = t2.style(["no-fill"], { strokeWidth: 5, stroke: "fuchsia" }), this.SHAPE_STYLE = t2.style({ fill: "white", stroke: "fuchsia", strokeWidth: 2 }), this.FRAME_STYLE = t2.style(["no-fill"], { stroke: "fuchsia", strokeDasharray: 4, strokeWidth: 2 });
      }
      e(xt, it), xt.prototype.canRender = function() {
        return true;
      }, xt.prototype.drawShape = function(e2, t2, n2) {
        var i2 = De("rect");
        return we(i2, { x: 0, y: 0, width: t2.width || 0, height: t2.height || 0 }), gt(t2) ? we(i2, L({}, this.FRAME_STYLE, n2 || {})) : we(i2, L({}, this.SHAPE_STYLE, n2 || {})), ge(e2, i2), i2;
      }, xt.prototype.drawConnection = function(e2, t2, n2) {
        var i2 = pt(t2.waypoints, L({}, this.CONNECTION_STYLE, n2 || {}));
        return ge(e2, i2), i2;
      }, xt.prototype.getShapePath = function(e2) {
        var t2 = e2.x, n2 = e2.y, i2 = e2.width;
        return rt([["M", t2, n2], ["l", i2, 0], ["l", 0, e2.height], ["l", -i2, 0], ["z"]]);
      }, xt.prototype.getConnectionPath = function(e2) {
        var t2, n2, i2 = e2.waypoints, r2 = [];
        for (t2 = 0; n2 = i2[t2]; t2++) n2 = n2.original || n2, r2.push([0 === t2 ? "M" : "L", n2.x, n2.y]);
        return rt(r2);
      }, xt.$inject = ["eventBus", "styles"];
      var _t = { __init__: ["defaultRenderer"], defaultRenderer: ["type", xt], styles: ["type", function() {
        var e2 = { "no-fill": { fill: "none" }, "no-border": { strokeOpacity: 0 }, "no-events": { pointerEvents: "none" } }, t2 = this;
        this.cls = function(e3, t3, n2) {
          return L(this.style(t3, n2), { class: e3 });
        }, this.style = function(t3, n2) {
          p(t3) || n2 || (n2 = t3, t3 = []);
          var i2 = x(t3, function(t4, n3) {
            return L(t4, e2[n3] || {});
          }, {});
          return n2 ? L(i2, n2) : i2;
        }, this.computeStyle = function(e3, n2, i2) {
          return p(n2) || (i2 = n2, n2 = []), t2.style(n2 || [], L({}, i2, e3 || {}));
        };
      }] };
      function wt(e2, t2) {
        if (!e2 || !t2) return -1;
        var n2 = e2.indexOf(t2);
        return -1 !== n2 && e2.splice(n2, 1), n2;
      }
      function Et(e2, t2, n2) {
        if (e2 && t2) {
          "number" != typeof n2 && (n2 = -1);
          var i2 = e2.indexOf(t2);
          if (-1 !== i2) {
            if (i2 === n2) return;
            if (-1 === n2) return;
            e2.splice(i2, 1);
          }
          -1 !== n2 ? e2.splice(n2, 0, t2) : e2.push(t2);
        }
      }
      function St(e2, t2) {
        return e2 && t2 ? e2.indexOf(t2) : -1;
      }
      function Ct(e2, t2) {
        return e2 && t2 ? Math.sqrt(Math.pow(e2.x - t2.x, 2) + Math.pow(e2.y - t2.y, 2)) : -1;
      }
      function Rt(e2, t2, n2, i2) {
        if (void 0 === i2 && (i2 = 5), !e2 || !t2 || !n2) return false;
        var r2 = (t2.x - e2.x) * (n2.y - e2.y) - (t2.y - e2.y) * (n2.x - e2.x), o2 = Ct(e2, t2);
        return Math.abs(r2 / o2) <= i2;
      }
      var Pt = 2;
      function Tt(e2, t2) {
        var n2 = Array.from(arguments).flat();
        const i2 = { x: "v", y: "h" };
        for (const [e3, t3] of Object.entries(i2)) if (kt(e3, n2)) return t3;
        return false;
      }
      function kt(e2, t2) {
        const n2 = t2[0];
        return _(t2, function(t3) {
          return Math.abs(n2[e2] - t3[e2]) <= Pt;
        });
      }
      function At(e2, t2, n2) {
        return n2 = n2 || 0, e2.x > t2.x - n2 && e2.y > t2.y - n2 && e2.x < t2.x + t2.width + n2 && e2.y < t2.y + t2.height + n2;
      }
      function Mt(e2, t2) {
        return { x: Math.round(e2.x + (t2.x - e2.x) / 2), y: Math.round(e2.y + (t2.y - e2.y) / 2) };
      }
      function Dt(e2) {
        return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
      }
      var Bt = /,?([a-z]),?/gi, Nt = parseFloat, Ot = Math, jt = Ot.PI, Lt = Ot.min, It = Ot.max, $t = Ot.pow, Ft = Ot.abs, zt = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[-+]?\d+)?[\s]*,?[\s]*)+)/gi, Ht = /(-?\d*\.?\d*(?:e[-+]?\d+)?)[\s]*,?[\s]*/gi, Gt = Array.isArray || function(e2) {
        return e2 instanceof Array;
      };
      function Vt(e2, t2) {
        return Object.prototype.hasOwnProperty.call(e2, t2);
      }
      function Wt(e2) {
        if ("function" == typeof e2 || Object(e2) !== e2) return e2;
        var t2 = new e2.constructor();
        for (var n2 in e2) Vt(e2, n2) && (t2[n2] = Wt(e2[n2]));
        return t2;
      }
      function Ut(e2) {
        var t2 = Ut.ps = Ut.ps || {};
        return t2[e2] ? t2[e2].sleep = 100 : t2[e2] = { sleep: 100 }, setTimeout(function() {
          for (var n2 in t2) Vt(t2, n2) && n2 != e2 && (t2[n2].sleep--, !t2[n2].sleep && delete t2[n2]);
        }), t2[e2];
      }
      function qt(e2, t2, n2, i2) {
        return 1 === arguments.length && (t2 = e2.y, n2 = e2.width, i2 = e2.height, e2 = e2.x), { x: e2, y: t2, width: n2, height: i2, x2: e2 + n2, y2: t2 + i2 };
      }
      function Kt() {
        return this.join(",").replace(Bt, "$1");
      }
      function Yt(e2) {
        var t2 = Wt(e2);
        return t2.toString = Kt, t2;
      }
      function Xt(e2, t2, n2, i2, r2, o2, a2, s2, c2) {
        var p2 = 1 - c2, l2 = $t(p2, 3), u2 = $t(p2, 2), h2 = c2 * c2 * c2, d2 = l2 * t2 + 3 * u2 * c2 * i2 + 3 * p2 * c2 * c2 * o2 + h2 * s2;
        return { x: nn(l2 * e2 + 3 * u2 * c2 * n2 + 3 * p2 * c2 * c2 * r2 + h2 * a2), y: nn(d2) };
      }
      function Zt(e2) {
        var t2 = ln.apply(null, e2);
        return qt(t2.x0, t2.y0, t2.x1 - t2.x0, t2.y1 - t2.y0);
      }
      function Qt(e2, t2, n2) {
        return t2 >= e2.x && t2 <= e2.x + e2.width && n2 >= e2.y && n2 <= e2.y + e2.height;
      }
      function Jt(e2, t2, n2, i2, r2) {
        return e2 * (e2 * (-3 * t2 + 9 * n2 - 9 * i2 + 3 * r2) + 6 * t2 - 12 * n2 + 6 * i2) - 3 * t2 + 3 * n2;
      }
      function en(e2, t2, n2, i2, r2, o2, a2, s2, c2) {
        null == c2 && (c2 = 1);
        for (var p2 = (c2 = c2 > 1 ? 1 : c2 < 0 ? 0 : c2) / 2, l2 = [-0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699, 0.7699, -0.9041, 0.9041, -0.9816, 0.9816], u2 = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472], h2 = 0, d2 = 0; d2 < 12; d2++) {
          var f2 = p2 * l2[d2] + p2, m2 = Jt(f2, e2, n2, r2, a2), v2 = Jt(f2, t2, i2, o2, s2), y2 = m2 * m2 + v2 * v2;
          h2 += u2[d2] * Ot.sqrt(y2);
        }
        return p2 * h2;
      }
      function tn(e2, t2, n2, i2, r2, o2, a2, s2) {
        if (!(It(e2, n2) < Lt(r2, a2) || Lt(e2, n2) > It(r2, a2) || It(t2, i2) < Lt(o2, s2) || Lt(t2, i2) > It(o2, s2))) {
          var c2 = (e2 * i2 - t2 * n2) * (o2 - s2) - (t2 - i2) * (r2 * s2 - o2 * a2), p2 = (e2 - n2) * (o2 - s2) - (t2 - i2) * (r2 - a2);
          if (p2) {
            var l2 = nn(((e2 * i2 - t2 * n2) * (r2 - a2) - (e2 - n2) * (r2 * s2 - o2 * a2)) / p2), u2 = nn(c2 / p2), h2 = +l2.toFixed(2), d2 = +u2.toFixed(2);
            if (!(h2 < +Lt(e2, n2).toFixed(2) || h2 > +It(e2, n2).toFixed(2) || h2 < +Lt(r2, a2).toFixed(2) || h2 > +It(r2, a2).toFixed(2) || d2 < +Lt(t2, i2).toFixed(2) || d2 > +It(t2, i2).toFixed(2) || d2 < +Lt(o2, s2).toFixed(2) || d2 > +It(o2, s2).toFixed(2))) return { x: l2, y: u2 };
          }
        }
      }
      function nn(e2) {
        return Math.round(1e11 * e2) / 1e11;
      }
      function rn(e2, t2, n2) {
        if (!function(e3, t3) {
          return e3 = qt(e3), Qt(t3 = qt(t3), e3.x, e3.y) || Qt(t3, e3.x2, e3.y) || Qt(t3, e3.x, e3.y2) || Qt(t3, e3.x2, e3.y2) || Qt(e3, t3.x, t3.y) || Qt(e3, t3.x2, t3.y) || Qt(e3, t3.x, t3.y2) || Qt(e3, t3.x2, t3.y2) || (e3.x < t3.x2 && e3.x > t3.x || t3.x < e3.x2 && t3.x > e3.x) && (e3.y < t3.y2 && e3.y > t3.y || t3.y < e3.y2 && t3.y > e3.y);
        }(Zt(e2), Zt(t2))) return n2 ? 0 : [];
        for (var i2 = en.apply(0, e2), r2 = en.apply(0, t2), o2 = an(e2) ? 1 : ~~(i2 / 5) || 1, a2 = an(t2) ? 1 : ~~(r2 / 5) || 1, s2 = [], c2 = [], p2 = {}, l2 = n2 ? 0 : [], u2 = 0; u2 < o2 + 1; u2++) {
          var h2 = Xt.apply(0, e2.concat(u2 / o2));
          s2.push({ x: h2.x, y: h2.y, t: u2 / o2 });
        }
        for (u2 = 0; u2 < a2 + 1; u2++) h2 = Xt.apply(0, t2.concat(u2 / a2)), c2.push({ x: h2.x, y: h2.y, t: u2 / a2 });
        for (u2 = 0; u2 < o2; u2++) for (var d2 = 0; d2 < a2; d2++) {
          var f2, m2 = s2[u2], v2 = s2[u2 + 1], y2 = c2[d2], g2 = c2[d2 + 1], b2 = Ft(v2.x - m2.x) < 0.01 ? "y" : "x", x2 = Ft(g2.x - y2.x) < 0.01 ? "y" : "x", _2 = tn(m2.x, m2.y, v2.x, v2.y, y2.x, y2.y, g2.x, g2.y);
          if (_2) {
            if (p2[f2 = _2.x.toFixed(9) + "#" + _2.y.toFixed(9)]) continue;
            p2[f2] = true;
            var w2 = m2.t + Ft((_2[b2] - m2[b2]) / (v2[b2] - m2[b2])) * (v2.t - m2.t), E2 = y2.t + Ft((_2[x2] - y2[x2]) / (g2[x2] - y2[x2])) * (g2.t - y2.t);
            w2 >= 0 && w2 <= 1 && E2 >= 0 && E2 <= 1 && (n2 ? l2++ : l2.push({ x: _2.x, y: _2.y, t1: w2, t2: E2 }));
          }
        }
        return l2;
      }
      function on(e2) {
        var t2 = Ut(e2);
        if (t2.abs) return Yt(t2.abs);
        if (Gt(e2) && Gt(e2 && e2[0]) || (e2 = function(e3) {
          if (!e3) return null;
          var t3 = Ut(e3);
          if (t3.arr) return Wt(t3.arr);
          var n3 = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 }, i3 = [];
          return Gt(e3) && Gt(e3[0]) && (i3 = Wt(e3)), i3.length || String(e3).replace(zt, function(e4, t4, r3) {
            var o3 = [], a3 = t4.toLowerCase();
            for (r3.replace(Ht, function(e5, t5) {
              t5 && o3.push(+t5);
            }), "m" == a3 && o3.length > 2 && (i3.push([t4].concat(o3.splice(0, 2))), a3 = "l", t4 = "m" == t4 ? "l" : "L"); o3.length >= n3[a3] && (i3.push([t4].concat(o3.splice(0, n3[a3]))), n3[a3]); ) ;
          }), i3.toString = Ut.toString, t3.arr = Wt(i3), i3;
        }(e2)), !e2 || !e2.length) return [["M", 0, 0]];
        var n2, i2 = [], r2 = 0, o2 = 0, a2 = 0, s2 = 0, c2 = 0;
        "M" == e2[0][0] && (a2 = r2 = +e2[0][1], s2 = o2 = +e2[0][2], c2++, i2[0] = ["M", r2, o2]);
        for (var p2, l2, u2 = c2, h2 = e2.length; u2 < h2; u2++) {
          if (i2.push(p2 = []), (n2 = (l2 = e2[u2])[0]) != n2.toUpperCase()) switch (p2[0] = n2.toUpperCase(), p2[0]) {
            case "A":
              p2[1] = l2[1], p2[2] = l2[2], p2[3] = l2[3], p2[4] = l2[4], p2[5] = l2[5], p2[6] = +l2[6] + r2, p2[7] = +l2[7] + o2;
              break;
            case "V":
              p2[1] = +l2[1] + o2;
              break;
            case "H":
              p2[1] = +l2[1] + r2;
              break;
            case "M":
              a2 = +l2[1] + r2, s2 = +l2[2] + o2;
            default:
              for (var d2 = 1, f2 = l2.length; d2 < f2; d2++) p2[d2] = +l2[d2] + (d2 % 2 ? r2 : o2);
          }
          else for (var m2 = 0, v2 = l2.length; m2 < v2; m2++) p2[m2] = l2[m2];
          switch (n2 = n2.toUpperCase(), p2[0]) {
            case "Z":
              r2 = +a2, o2 = +s2;
              break;
            case "H":
              r2 = p2[1];
              break;
            case "V":
              o2 = p2[1];
              break;
            case "M":
              a2 = p2[p2.length - 2], s2 = p2[p2.length - 1];
            default:
              r2 = p2[p2.length - 2], o2 = p2[p2.length - 1];
          }
        }
        return i2.toString = Kt, t2.abs = Yt(i2), i2;
      }
      function an(e2) {
        return e2[0] === e2[2] && e2[1] === e2[3] && e2[4] === e2[6] && e2[5] === e2[7];
      }
      function sn(e2, t2, n2, i2) {
        return [e2, t2, n2, i2, n2, i2];
      }
      function cn(e2, t2, n2, i2, r2, o2) {
        var a2 = 1 / 3, s2 = 2 / 3;
        return [a2 * e2 + s2 * n2, a2 * t2 + s2 * i2, a2 * r2 + s2 * n2, a2 * o2 + s2 * i2, r2, o2];
      }
      function pn(e2, t2, n2, i2, r2, o2, a2, s2, c2, p2) {
        var l2, u2 = 120 * jt / 180, h2 = jt / 180 * (+r2 || 0), d2 = [], f2 = /* @__PURE__ */ function(e3) {
          return function t3() {
            var n3 = Array.prototype.slice.call(arguments, 0), i3 = n3.join("␀"), r3 = t3.cache = t3.cache || {}, o3 = t3.count = t3.count || [];
            return Vt(r3, i3) ? (function(e4, t4) {
              for (var n4 = 0, i4 = e4.length; n4 < i4; n4++) if (e4[n4] === t4) return e4.push(e4.splice(n4, 1)[0]);
            }(o3, i3), r3[i3]) : (o3.length >= 1e3 && delete r3[o3.shift()], o3.push(i3), r3[i3] = e3.apply(0, n3), r3[i3]);
          };
        }(function(e3, t3, n3) {
          return { x: e3 * Ot.cos(n3) - t3 * Ot.sin(n3), y: e3 * Ot.sin(n3) + t3 * Ot.cos(n3) };
        });
        if (p2) E2 = p2[0], S2 = p2[1], _2 = p2[2], w2 = p2[3];
        else {
          e2 = (l2 = f2(e2, t2, -h2)).x, t2 = l2.y;
          var m2 = (e2 - (s2 = (l2 = f2(s2, c2, -h2)).x)) / 2, v2 = (t2 - (c2 = l2.y)) / 2, y2 = m2 * m2 / (n2 * n2) + v2 * v2 / (i2 * i2);
          y2 > 1 && (n2 *= y2 = Ot.sqrt(y2), i2 *= y2);
          var g2 = n2 * n2, b2 = i2 * i2, x2 = (o2 == a2 ? -1 : 1) * Ot.sqrt(Ft((g2 * b2 - g2 * v2 * v2 - b2 * m2 * m2) / (g2 * v2 * v2 + b2 * m2 * m2))), _2 = x2 * n2 * v2 / i2 + (e2 + s2) / 2, w2 = x2 * -i2 * m2 / n2 + (t2 + c2) / 2, E2 = Ot.asin(((t2 - w2) / i2).toFixed(9)), S2 = Ot.asin(((c2 - w2) / i2).toFixed(9));
          (E2 = e2 < _2 ? jt - E2 : E2) < 0 && (E2 = 2 * jt + E2), (S2 = s2 < _2 ? jt - S2 : S2) < 0 && (S2 = 2 * jt + S2), a2 && E2 > S2 && (E2 -= 2 * jt), !a2 && S2 > E2 && (S2 -= 2 * jt);
        }
        var C2 = S2 - E2;
        if (Ft(C2) > u2) {
          var R2 = S2, P2 = s2, T2 = c2;
          S2 = E2 + u2 * (a2 && S2 > E2 ? 1 : -1), d2 = pn(s2 = _2 + n2 * Ot.cos(S2), c2 = w2 + i2 * Ot.sin(S2), n2, i2, r2, 0, a2, P2, T2, [S2, R2, _2, w2]);
        }
        C2 = S2 - E2;
        var k2 = Ot.cos(E2), A2 = Ot.sin(E2), M2 = Ot.cos(S2), D2 = Ot.sin(S2), B2 = Ot.tan(C2 / 4), N2 = 4 / 3 * n2 * B2, O2 = 4 / 3 * i2 * B2, j2 = [e2, t2], L2 = [e2 + N2 * A2, t2 - O2 * k2], I2 = [s2 + N2 * D2, c2 - O2 * M2], $2 = [s2, c2];
        if (L2[0] = 2 * j2[0] - L2[0], L2[1] = 2 * j2[1] - L2[1], p2) return [L2, I2, $2].concat(d2);
        for (var F2 = [], z2 = 0, H2 = (d2 = [L2, I2, $2].concat(d2).join().split(",")).length; z2 < H2; z2++) F2[z2] = z2 % 2 ? f2(d2[z2 - 1], d2[z2], h2).y : f2(d2[z2], d2[z2 + 1], h2).x;
        return F2;
      }
      function ln(e2, t2, n2, i2, r2, o2, a2, s2) {
        for (var c2, p2, l2, u2, h2, d2, f2, m2, v2 = [], y2 = [[], []], g2 = 0; g2 < 2; ++g2) if (0 == g2 ? (p2 = 6 * e2 - 12 * n2 + 6 * r2, c2 = -3 * e2 + 9 * n2 - 9 * r2 + 3 * a2, l2 = 3 * n2 - 3 * e2) : (p2 = 6 * t2 - 12 * i2 + 6 * o2, c2 = -3 * t2 + 9 * i2 - 9 * o2 + 3 * s2, l2 = 3 * i2 - 3 * t2), Ft(c2) < 1e-12) {
          if (Ft(p2) < 1e-12) continue;
          0 < (u2 = -l2 / p2) && u2 < 1 && v2.push(u2);
        } else f2 = p2 * p2 - 4 * l2 * c2, m2 = Ot.sqrt(f2), f2 < 0 || (0 < (h2 = (-p2 + m2) / (2 * c2)) && h2 < 1 && v2.push(h2), 0 < (d2 = (-p2 - m2) / (2 * c2)) && d2 < 1 && v2.push(d2));
        for (var b2, x2 = v2.length, _2 = x2; x2--; ) b2 = 1 - (u2 = v2[x2]), y2[0][x2] = b2 * b2 * b2 * e2 + 3 * b2 * b2 * u2 * n2 + 3 * b2 * u2 * u2 * r2 + u2 * u2 * u2 * a2, y2[1][x2] = b2 * b2 * b2 * t2 + 3 * b2 * b2 * u2 * i2 + 3 * b2 * u2 * u2 * o2 + u2 * u2 * u2 * s2;
        return y2[0][_2] = e2, y2[1][_2] = t2, y2[0][_2 + 1] = a2, y2[1][_2 + 1] = s2, y2[0].length = y2[1].length = _2 + 2, { x0: Lt.apply(0, y2[0]), y0: Lt.apply(0, y2[1]), x1: It.apply(0, y2[0]), y1: It.apply(0, y2[1]) };
      }
      function un(e2) {
        var t2 = Ut(e2);
        if (t2.curve) return Yt(t2.curve);
        for (var n2 = on(e2), i2 = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, r2 = function(e3, t3, n3) {
          var i3, r3;
          if (!e3) return ["C", t3.x, t3.y, t3.x, t3.y, t3.x, t3.y];
          switch (!(e3[0] in { T: 1, Q: 1 }) && (t3.qx = t3.qy = null), e3[0]) {
            case "M":
              t3.X = e3[1], t3.Y = e3[2];
              break;
            case "A":
              e3 = ["C"].concat(pn.apply(0, [t3.x, t3.y].concat(e3.slice(1))));
              break;
            case "S":
              "C" == n3 || "S" == n3 ? (i3 = 2 * t3.x - t3.bx, r3 = 2 * t3.y - t3.by) : (i3 = t3.x, r3 = t3.y), e3 = ["C", i3, r3].concat(e3.slice(1));
              break;
            case "T":
              "Q" == n3 || "T" == n3 ? (t3.qx = 2 * t3.x - t3.qx, t3.qy = 2 * t3.y - t3.qy) : (t3.qx = t3.x, t3.qy = t3.y), e3 = ["C"].concat(cn(t3.x, t3.y, t3.qx, t3.qy, e3[1], e3[2]));
              break;
            case "Q":
              t3.qx = e3[1], t3.qy = e3[2], e3 = ["C"].concat(cn(t3.x, t3.y, e3[1], e3[2], e3[3], e3[4]));
              break;
            case "L":
              e3 = ["C"].concat(sn(t3.x, t3.y, e3[1], e3[2]));
              break;
            case "H":
              e3 = ["C"].concat(sn(t3.x, t3.y, e3[1], t3.y));
              break;
            case "V":
              e3 = ["C"].concat(sn(t3.x, t3.y, t3.x, e3[1]));
              break;
            case "Z":
              e3 = ["C"].concat(sn(t3.x, t3.y, t3.X, t3.Y));
          }
          return e3;
        }, o2 = function(e3, t3) {
          if (e3[t3].length > 7) {
            e3[t3].shift();
            for (var i3 = e3[t3]; i3.length; ) a2[t3] = "A", e3.splice(t3++, 0, ["C"].concat(i3.splice(0, 6)));
            e3.splice(t3, 1), l2 = n2.length;
          }
        }, a2 = [], s2 = "", c2 = "", p2 = 0, l2 = n2.length; p2 < l2; p2++) {
          n2[p2] && (s2 = n2[p2][0]), "C" != s2 && (a2[p2] = s2, p2 && (c2 = a2[p2 - 1])), n2[p2] = r2(n2[p2], i2, c2), "A" != a2[p2] && "C" == s2 && (a2[p2] = "C"), o2(n2, p2);
          var u2 = n2[p2], h2 = u2.length;
          i2.x = u2[h2 - 2], i2.y = u2[h2 - 1], i2.bx = Nt(u2[h2 - 4]) || i2.x, i2.by = Nt(u2[h2 - 3]) || i2.y;
        }
        return t2.curve = Yt(n2), n2;
      }
      var hn = function(e2, t2, n2) {
        e2 = un(e2), t2 = un(t2);
        for (var i2, r2, o2, a2, s2, c2, p2, l2, u2, h2, d2 = n2 ? 0 : [], f2 = 0, m2 = e2.length; f2 < m2; f2++) {
          var v2 = e2[f2];
          if ("M" == v2[0]) i2 = s2 = v2[1], r2 = c2 = v2[2];
          else {
            "C" == v2[0] ? (u2 = [i2, r2].concat(v2.slice(1)), i2 = u2[6], r2 = u2[7]) : (u2 = [i2, r2, i2, r2, s2, c2, s2, c2], i2 = s2, r2 = c2);
            for (var y2 = 0, g2 = t2.length; y2 < g2; y2++) {
              var b2 = t2[y2];
              if ("M" == b2[0]) o2 = p2 = b2[1], a2 = l2 = b2[2];
              else {
                "C" == b2[0] ? (h2 = [o2, a2].concat(b2.slice(1)), o2 = h2[6], a2 = h2[7]) : (h2 = [o2, a2, o2, a2, p2, l2, p2, l2], o2 = p2, a2 = l2);
                var x2 = rn(u2, h2, n2);
                if (n2) d2 += x2;
                else {
                  for (var _2 = 0, w2 = x2.length; _2 < w2; _2++) x2[_2].segment1 = f2, x2[_2].segment2 = y2, x2[_2].bez1 = u2, x2[_2].bez2 = h2;
                  d2 = d2.concat(x2);
                }
              }
            }
          }
        }
        return d2;
      }, dn = Dt(hn);
      function fn(e2) {
        return l(e2) && f(e2, "waypoints");
      }
      function mn(e2) {
        return l(e2) && f(e2, "labelTarget");
      }
      function vn(e2) {
        return { x: Math.round(e2.x), y: Math.round(e2.y), width: Math.round(e2.width), height: Math.round(e2.height) };
      }
      function yn(e2) {
        return { x: Math.round(e2.x), y: Math.round(e2.y) };
      }
      function gn(e2) {
        return { top: e2.y, right: e2.x + (e2.width || 0), bottom: e2.y + (e2.height || 0), left: e2.x };
      }
      function bn(e2) {
        return { x: e2.left, y: e2.top, width: e2.right - e2.left, height: e2.bottom - e2.top };
      }
      function xn(e2) {
        for (var t2 = e2.waypoints, n2 = t2.reduce(function(e3, n3, i3) {
          var r3 = t2[i3 - 1];
          if (r3) {
            var o3 = e3[e3.length - 1], a3 = o3 && o3.endLength || 0, s3 = function(e4, t3) {
              return Math.sqrt(Math.pow(e4.x - t3.x, 2) + Math.pow(e4.y - t3.y, 2));
            }(r3, n3);
            e3.push({ start: r3, end: n3, startLength: a3, endLength: a3 + s3, length: s3 });
          }
          return e3;
        }, []), i2 = n2.reduce(function(e3, t3) {
          return e3 + t3.length;
        }, 0), r2 = i2 / 2, o2 = 0, a2 = n2[o2]; a2.endLength < r2; ) a2 = n2[++o2];
        var s2 = (r2 - a2.startLength) / a2.length;
        return { x: a2.start.x + (a2.end.x - a2.start.x) * s2, y: a2.start.y + (a2.end.y - a2.start.y) * s2 };
      }
      function _n(e2) {
        return fn(e2) ? xn(e2) : yn({ x: (t2 = e2).x + (t2.width || 0) / 2, y: t2.y + (t2.height || 0) / 2 });
        var t2;
      }
      function wn(e2, t2, n2) {
        l(n2 = n2 || 0) || (n2 = { x: n2, y: n2 });
        var i2 = gn(e2), r2 = gn(t2), o2 = i2.bottom + n2.y <= r2.top, a2 = i2.left - n2.x >= r2.right, s2 = i2.top - n2.y >= r2.bottom, c2 = o2 ? "top" : s2 ? "bottom" : null, p2 = i2.right + n2.x <= r2.left ? "left" : a2 ? "right" : null;
        return p2 && c2 ? c2 + "-" + p2 : p2 || c2 || "intersect";
      }
      function En(e2, t2, n2) {
        var i2 = function(e3, t3) {
          return dn(e3, t3);
        }(e2, t2);
        return 1 === i2.length || 2 === i2.length && Ct(i2[0], i2[1]) < 1 ? yn(i2[0]) : i2.length > 1 ? (i2 = k(i2, function(e3) {
          var t3 = Math.floor(100 * e3.t2) || 1;
          return t3 = ((t3 = 100 - t3) < 10 ? "0" : "") + t3, e3.segment2 + "#" + t3;
        }), yn(i2[n2 ? 0 : i2.length - 1])) : null;
      }
      function Sn(e2, t2) {
        return Math.round(e2 * t2) / t2;
      }
      function Cn(e2) {
        return u(e2) ? e2 + "px" : e2;
      }
      function Rn(e2, t2, n2) {
        const i2 = De("g");
        Se(i2).add(t2);
        const r2 = void 0 !== n2 ? n2 : e2.childNodes.length - 1;
        return e2.insertBefore(i2, e2.childNodes[r2] || null), i2;
      }
      const Pn = { shape: ["x", "y", "width", "height"], connection: ["waypoints"] };
      function Tn(e2, t2, n2, i2) {
        this._eventBus = t2, this._elementRegistry = i2, this._graphicsFactory = n2, this._rootsIdx = 0, this._layers = {}, this._planes = [], this._rootElement = null, this._init(e2 || {});
      }
      function kn(e2, t2) {
        const n2 = "matrix(" + t2.a + "," + t2.b + "," + t2.c + "," + t2.d + "," + t2.e + "," + t2.f + ")";
        e2.setAttribute("transform", n2);
      }
      Tn.$inject = ["config.canvas", "eventBus", "graphicsFactory", "elementRegistry"], Tn.prototype._init = function(e2) {
        const t2 = this._eventBus, n2 = this._container = function(e3) {
          const t3 = (e3 = L({}, { width: "100%", height: "100%" }, e3)).container || document.body, n3 = document.createElement("div");
          return n3.setAttribute("class", "djs-container djs-parent"), q(n3, { position: "relative", overflow: "hidden", width: Cn(e3.width), height: Cn(e3.height) }), t3.appendChild(n3), n3;
        }(e2), i2 = this._svg = De("svg");
        we(i2, { width: "100%", height: "100%" }), ge(n2, i2);
        const r2 = this._viewport = Rn(i2, "viewport");
        false !== e2.deferUpdate && (this._viewboxChanged = O(j(this._viewboxChanged, this), 300)), t2.on("diagram.init", () => {
          t2.fire("canvas.init", { svg: i2, viewport: r2 });
        }), t2.on(["shape.added", "connection.added", "shape.removed", "connection.removed", "elements.changed", "root.set"], () => {
          delete this._cachedViewbox;
        }), t2.on("diagram.destroy", 500, this._destroy, this), t2.on("diagram.clear", 500, this._clear, this);
      }, Tn.prototype._destroy = function() {
        this._eventBus.fire("canvas.destroy", { svg: this._svg, viewport: this._viewport });
        const e2 = this._container.parentNode;
        e2 && e2.removeChild(this._container), delete this._svg, delete this._container, delete this._layers, delete this._planes, delete this._rootElement, delete this._viewport;
      }, Tn.prototype._clear = function() {
        this._elementRegistry.getAll().forEach((e2) => {
          const t2 = yt(e2);
          "root" === t2 ? this.removeRootElement(e2) : this._removeElement(e2, t2);
        }), this._planes = [], this._rootElement = null, delete this._cachedViewbox;
      }, Tn.prototype.getDefaultLayer = function() {
        return this.getLayer("base", 0);
      }, Tn.prototype.getLayer = function(e2, t2) {
        if (!e2) throw new Error("must specify a name");
        let n2 = this._layers[e2];
        if (n2 || (n2 = this._layers[e2] = this._createLayer(e2, t2)), void 0 !== t2 && n2.index !== t2) throw new Error("layer <" + e2 + "> already created at index <" + t2 + ">");
        return n2.group;
      }, Tn.prototype._getChildIndex = function(e2) {
        return x(this._layers, function(t2, n2) {
          return n2.visible && e2 >= n2.index && t2++, t2;
        }, 0);
      }, Tn.prototype._createLayer = function(e2, t2) {
        void 0 === t2 && (t2 = 1);
        const n2 = this._getChildIndex(t2);
        return { group: Rn(this._viewport, "layer-" + e2, n2), index: t2, visible: true };
      }, Tn.prototype.showLayer = function(e2) {
        if (!e2) throw new Error("must specify a name");
        const t2 = this._layers[e2];
        if (!t2) throw new Error("layer <" + e2 + "> does not exist");
        const n2 = this._viewport, i2 = t2.group, r2 = t2.index;
        if (t2.visible) return i2;
        const o2 = this._getChildIndex(r2);
        return n2.insertBefore(i2, n2.childNodes[o2] || null), t2.visible = true, i2;
      }, Tn.prototype.hideLayer = function(e2) {
        if (!e2) throw new Error("must specify a name");
        const t2 = this._layers[e2];
        if (!t2) throw new Error("layer <" + e2 + "> does not exist");
        const n2 = t2.group;
        return t2.visible ? (Re(n2), t2.visible = false, n2) : n2;
      }, Tn.prototype._removeLayer = function(e2) {
        const t2 = this._layers[e2];
        t2 && (delete this._layers[e2], Re(t2.group));
      }, Tn.prototype.getActiveLayer = function() {
        const e2 = this._findPlaneForRoot(this.getRootElement());
        return e2 ? e2.layer : null;
      }, Tn.prototype.findRoot = function(e2) {
        if ("string" == typeof e2 && (e2 = this._elementRegistry.get(e2)), !e2) return;
        const t2 = this._findPlaneForRoot(function(e3) {
          for (; e3.parent; ) e3 = e3.parent;
          return e3;
        }(e2)) || {};
        return t2.rootElement;
      }, Tn.prototype.getRootElements = function() {
        return this._planes.map(function(e2) {
          return e2.rootElement;
        });
      }, Tn.prototype._findPlaneForRoot = function(e2) {
        return m(this._planes, function(t2) {
          return t2.rootElement === e2;
        });
      }, Tn.prototype.getContainer = function() {
        return this._container;
      }, Tn.prototype._updateMarker = function(e2, t2, n2) {
        let i2;
        e2.id || (e2 = this._elementRegistry.get(e2)), i2 = this._elementRegistry._elements[e2.id], i2 && (g([i2.gfx, i2.secondaryGfx], function(e3) {
          e3 && (n2 ? Se(e3).add(t2) : Se(e3).remove(t2));
        }), this._eventBus.fire("element.marker.update", { element: e2, gfx: i2.gfx, marker: t2, add: !!n2 }));
      }, Tn.prototype.addMarker = function(e2, t2) {
        this._updateMarker(e2, t2, true);
      }, Tn.prototype.removeMarker = function(e2, t2) {
        this._updateMarker(e2, t2, false);
      }, Tn.prototype.hasMarker = function(e2, t2) {
        e2.id || (e2 = this._elementRegistry.get(e2));
        return Se(this.getGraphics(e2)).has(t2);
      }, Tn.prototype.toggleMarker = function(e2, t2) {
        this.hasMarker(e2, t2) ? this.removeMarker(e2, t2) : this.addMarker(e2, t2);
      }, Tn.prototype.getRootElement = function() {
        const e2 = this._rootElement;
        return e2 || this._planes.length ? e2 : this.setRootElement(this.addRootElement(null));
      }, Tn.prototype.addRootElement = function(e2) {
        const t2 = this._rootsIdx++;
        e2 || (e2 = { id: "__implicitroot_" + t2, children: [], isImplicit: true });
        const n2 = e2.layer = "root-" + t2;
        this._ensureValid("root", e2);
        const i2 = this.getLayer(n2, 0);
        return this.hideLayer(n2), this._addRoot(e2, i2), this._planes.push({ rootElement: e2, layer: i2 }), e2;
      }, Tn.prototype.removeRootElement = function(e2) {
        "string" == typeof e2 && (e2 = this._elementRegistry.get(e2));
        if (this._findPlaneForRoot(e2)) return this._removeRoot(e2), this._removeLayer(e2.layer), this._planes = this._planes.filter(function(t2) {
          return t2.rootElement !== e2;
        }), this._rootElement === e2 && (this._rootElement = null), e2;
      }, Tn.prototype.setRootElement = function(e2) {
        if (e2 === this._rootElement) return;
        let t2;
        if (!e2) throw new Error("rootElement required");
        return t2 = this._findPlaneForRoot(e2), t2 || (e2 = this.addRootElement(e2)), this._setRoot(e2), e2;
      }, Tn.prototype._removeRoot = function(e2) {
        const t2 = this._elementRegistry, n2 = this._eventBus;
        n2.fire("root.remove", { element: e2 }), n2.fire("root.removed", { element: e2 }), t2.remove(e2);
      }, Tn.prototype._addRoot = function(e2, t2) {
        const n2 = this._elementRegistry, i2 = this._eventBus;
        i2.fire("root.add", { element: e2 }), n2.add(e2, t2), i2.fire("root.added", { element: e2, gfx: t2 });
      }, Tn.prototype._setRoot = function(e2, t2) {
        const n2 = this._rootElement;
        n2 && (this._elementRegistry.updateGraphics(n2, null, true), this.hideLayer(n2.layer)), e2 && (t2 || (t2 = this._findPlaneForRoot(e2).layer), this._elementRegistry.updateGraphics(e2, this._svg, true), this.showLayer(e2.layer)), this._rootElement = e2, this._eventBus.fire("root.set", { element: e2 });
      }, Tn.prototype._ensureValid = function(e2, t2) {
        if (!t2.id) throw new Error("element must have an id");
        if (this._elementRegistry.get(t2.id)) throw new Error("element <" + t2.id + "> already exists");
        const n2 = Pn[e2], i2 = _(n2, function(e3) {
          return void 0 !== t2[e3];
        });
        if (!i2) throw new Error("must supply { " + n2.join(", ") + " } with " + e2);
      }, Tn.prototype._setParent = function(e2, t2, n2) {
        Et(t2.children, e2, n2), e2.parent = t2;
      }, Tn.prototype._addElement = function(e2, t2, n2, i2) {
        n2 = n2 || this.getRootElement();
        const r2 = this._eventBus, o2 = this._graphicsFactory;
        this._ensureValid(e2, t2), r2.fire(e2 + ".add", { element: t2, parent: n2 }), this._setParent(t2, n2, i2);
        const a2 = o2.create(e2, t2, i2);
        return this._elementRegistry.add(t2, a2), o2.update(e2, t2, a2), r2.fire(e2 + ".added", { element: t2, gfx: a2 }), t2;
      }, Tn.prototype.addShape = function(e2, t2, n2) {
        return this._addElement("shape", e2, t2, n2);
      }, Tn.prototype.addConnection = function(e2, t2, n2) {
        return this._addElement("connection", e2, t2, n2);
      }, Tn.prototype._removeElement = function(e2, t2) {
        const n2 = this._elementRegistry, i2 = this._graphicsFactory, r2 = this._eventBus;
        if (e2 = n2.get(e2.id || e2)) return r2.fire(t2 + ".remove", { element: e2 }), i2.remove(e2), wt(e2.parent && e2.parent.children, e2), e2.parent = null, r2.fire(t2 + ".removed", { element: e2 }), n2.remove(e2), e2;
      }, Tn.prototype.removeShape = function(e2) {
        return this._removeElement(e2, "shape");
      }, Tn.prototype.removeConnection = function(e2) {
        return this._removeElement(e2, "connection");
      }, Tn.prototype.getGraphics = function(e2, t2) {
        return this._elementRegistry.getGraphics(e2, t2);
      }, Tn.prototype._changeViewbox = function(e2) {
        this._eventBus.fire("canvas.viewbox.changing"), e2.apply(this), this._cachedViewbox = null, this._viewboxChanged();
      }, Tn.prototype._viewboxChanged = function() {
        this._eventBus.fire("canvas.viewbox.changed", { viewbox: this.viewbox() });
      }, Tn.prototype.viewbox = function(e2) {
        if (void 0 === e2 && this._cachedViewbox) return this._cachedViewbox;
        const t2 = this._viewport, n2 = this.getSize();
        let i2, r2, o2, a2, s2, c2, p2;
        return e2 ? (this._changeViewbox(function() {
          s2 = Math.min(n2.width / e2.width, n2.height / e2.height);
          const i3 = this._svg.createSVGMatrix().scale(s2).translate(-e2.x, -e2.y);
          We(t2, i3);
        }), e2) : (o2 = this._rootElement ? this.getActiveLayer() : null, i2 = o2 && o2.getBBox() || {}, a2 = We(t2), r2 = a2 ? a2.matrix : function(e3, t3, n3, i3, r3, o3) {
          var a3 = Ne().createSVGMatrix();
          switch (arguments.length) {
            case 0:
              return a3;
            case 1:
              return Oe(a3, e3);
            case 6:
              return Oe(a3, { a: e3, b: t3, c: n3, d: i3, e: r3, f: o3 });
          }
        }(), s2 = Sn(r2.a, 1e3), c2 = Sn(-r2.e || 0, 1e3), p2 = Sn(-r2.f || 0, 1e3), e2 = this._cachedViewbox = { x: c2 ? c2 / s2 : 0, y: p2 ? p2 / s2 : 0, width: n2.width / s2, height: n2.height / s2, scale: s2, inner: { width: i2.width || 0, height: i2.height || 0, x: i2.x || 0, y: i2.y || 0 }, outer: n2 });
      }, Tn.prototype.scroll = function(e2) {
        const t2 = this._viewport;
        let n2 = t2.getCTM();
        return e2 && this._changeViewbox(function() {
          e2 = L({ dx: 0, dy: 0 }, e2 || {}), n2 = this._svg.createSVGMatrix().translate(e2.dx, e2.dy).multiply(n2), kn(t2, n2);
        }), { x: n2.e, y: n2.f };
      }, Tn.prototype.scrollToElement = function(e2, t2) {
        let n2 = 100;
        "string" == typeof e2 && (e2 = this._elementRegistry.get(e2));
        const i2 = this.findRoot(e2);
        i2 !== this.getRootElement() && this.setRootElement(i2), t2 || (t2 = {}), "number" == typeof t2 && (n2 = t2), t2 = { top: t2.top || n2, right: t2.right || n2, bottom: t2.bottom || n2, left: t2.left || n2 };
        const r2 = vt(e2), o2 = gn(r2), a2 = this.viewbox(), s2 = this.zoom();
        let c2, p2;
        a2.y += t2.top / s2, a2.x += t2.left / s2, a2.width -= (t2.right + t2.left) / s2, a2.height -= (t2.bottom + t2.top) / s2;
        const l2 = gn(a2);
        if (r2.width < a2.width && r2.height < a2.height) {
          const e3 = Math.max(0, o2.right - l2.right), t3 = Math.min(0, o2.left - l2.left), n3 = Math.max(0, o2.bottom - l2.bottom), i3 = Math.min(0, o2.top - l2.top);
          c2 = e3 || t3, p2 = n3 || i3;
        } else c2 = r2.x - a2.x, p2 = r2.y - a2.y;
        this.scroll({ dx: -c2 * s2, dy: -p2 * s2 });
      }, Tn.prototype.zoom = function(e2, t2) {
        if (!e2) return this.viewbox(e2).scale;
        if ("fit-viewport" === e2) return this._fitViewport(t2);
        let n2, i2;
        return this._changeViewbox(function() {
          "object" != typeof t2 && (n2 = this.viewbox().outer, t2 = { x: n2.width / 2, y: n2.height / 2 }), i2 = this._setZoom(e2, t2);
        }), Sn(i2.a, 1e3);
      }, Tn.prototype._fitViewport = function(e2) {
        const t2 = this.viewbox(), n2 = t2.outer, i2 = t2.inner;
        let r2, o2;
        return i2.x >= 0 && i2.y >= 0 && i2.x + i2.width <= n2.width && i2.y + i2.height <= n2.height && !e2 ? o2 = { x: 0, y: 0, width: Math.max(i2.width + i2.x, n2.width), height: Math.max(i2.height + i2.y, n2.height) } : (r2 = Math.min(1, n2.width / i2.width, n2.height / i2.height), o2 = { x: i2.x + (e2 ? i2.width / 2 - n2.width / r2 / 2 : 0), y: i2.y + (e2 ? i2.height / 2 - n2.height / r2 / 2 : 0), width: n2.width / r2, height: n2.height / r2 }), this.viewbox(o2), this.viewbox(false).scale;
      }, Tn.prototype._setZoom = function(e2, t2) {
        const n2 = this._svg, i2 = this._viewport, r2 = n2.createSVGMatrix(), o2 = n2.createSVGPoint();
        let a2, s2, c2, p2, l2;
        c2 = i2.getCTM();
        const u2 = c2.a;
        return t2 ? (a2 = L(o2, t2), s2 = a2.matrixTransform(c2.inverse()), p2 = r2.translate(s2.x, s2.y).scale(1 / u2 * e2).translate(-s2.x, -s2.y), l2 = c2.multiply(p2)) : l2 = r2.scale(e2), kn(this._viewport, l2), l2;
      }, Tn.prototype.getSize = function() {
        return { width: this._container.clientWidth, height: this._container.clientHeight };
      }, Tn.prototype.getAbsoluteBBox = function(e2) {
        const t2 = this.viewbox();
        let n2;
        if (e2.waypoints) {
          n2 = this.getGraphics(e2).getBBox();
        } else n2 = e2;
        return { x: n2.x * t2.scale - t2.x * t2.scale, y: n2.y * t2.scale - t2.y * t2.scale, width: n2.width * t2.scale, height: n2.height * t2.scale };
      }, Tn.prototype.resized = function() {
        delete this._cachedViewbox, this._eventBus.fire("canvas.resized");
      };
      var An = "data-element-id";
      function Mn(e2) {
        this._elements = {}, this._eventBus = e2;
      }
      Mn.$inject = ["eventBus"], Mn.prototype.add = function(e2, t2, n2) {
        var i2 = e2.id;
        this._validateId(i2), we(t2, An, i2), n2 && we(n2, An, i2), this._elements[i2] = { element: e2, gfx: t2, secondaryGfx: n2 };
      }, Mn.prototype.remove = function(e2) {
        var t2 = this._elements, n2 = e2.id || e2, i2 = n2 && t2[n2];
        i2 && (we(i2.gfx, An, ""), i2.secondaryGfx && we(i2.secondaryGfx, An, ""), delete t2[n2]);
      }, Mn.prototype.updateId = function(e2, t2) {
        this._validateId(t2), "string" == typeof e2 && (e2 = this.get(e2)), this._eventBus.fire("element.updateId", { element: e2, newId: t2 });
        var n2 = this.getGraphics(e2), i2 = this.getGraphics(e2, true);
        this.remove(e2), e2.id = t2, this.add(e2, n2, i2);
      }, Mn.prototype.updateGraphics = function(e2, t2, n2) {
        var i2 = e2.id || e2, r2 = this._elements[i2];
        return n2 ? r2.secondaryGfx = t2 : r2.gfx = t2, t2 && we(t2, An, i2), t2;
      }, Mn.prototype.get = function(e2) {
        var t2;
        t2 = "string" == typeof e2 ? e2 : e2 && we(e2, An);
        var n2 = this._elements[t2];
        return n2 && n2.element;
      }, Mn.prototype.filter = function(e2) {
        var t2 = [];
        return this.forEach(function(n2, i2) {
          e2(n2, i2) && t2.push(n2);
        }), t2;
      }, Mn.prototype.find = function(e2) {
        for (var t2 = this._elements, n2 = Object.keys(t2), i2 = 0; i2 < n2.length; i2++) {
          var r2 = t2[n2[i2]], o2 = r2.element;
          if (e2(o2, r2.gfx)) return o2;
        }
      }, Mn.prototype.getAll = function() {
        return this.filter(function(e2) {
          return e2;
        });
      }, Mn.prototype.forEach = function(e2) {
        var t2 = this._elements;
        Object.keys(t2).forEach(function(n2) {
          var i2 = t2[n2], r2 = i2.element, o2 = i2.gfx;
          return e2(r2, o2);
        });
      }, Mn.prototype.getGraphics = function(e2, t2) {
        var n2 = e2.id || e2, i2 = this._elements[n2];
        return i2 && (t2 ? i2.secondaryGfx : i2.gfx);
      }, Mn.prototype._validateId = function(e2) {
        if (!e2) throw new Error("element must have an id");
        if (this._elements[e2]) throw new Error("element with id " + e2 + " already added");
      };
      var Dn = { exports: {} }, Bn = {};
      Bn.extend = function(e2, t2, n2, i2) {
        var r2 = n2.inverse;
        return Object.defineProperty(e2, "remove", { value: function(e3) {
          var n3 = this.indexOf(e3);
          return -1 !== n3 && (this.splice(n3, 1), t2.unset(e3, r2, i2)), e3;
        } }), Object.defineProperty(e2, "contains", { value: function(e3) {
          return -1 !== this.indexOf(e3);
        } }), Object.defineProperty(e2, "add", { value: function(e3, n3) {
          var o2 = this.indexOf(e3);
          if (void 0 === n3) {
            if (-1 !== o2) return;
            n3 = this.length;
          }
          -1 !== o2 && this.splice(o2, 1), this.splice(n3, 0, e3), -1 === o2 && t2.set(e3, r2, i2);
        } }), Object.defineProperty(e2, "__refs_collection", { value: true }), e2;
      }, Bn.isExtended = function(e2) {
        return true === e2.__refs_collection;
      };
      var Nn = Bn;
      function On(e2, t2, n2) {
        var i2 = Nn.extend(n2[t2.name] || [], e2, t2, n2);
        Object.defineProperty(n2, t2.name, { enumerable: t2.enumerable, value: i2 }), i2.length && i2.forEach(function(i3) {
          e2.set(i3, t2.inverse, n2);
        });
      }
      function jn(e2, t2) {
        if (!(this instanceof jn)) return new jn(e2, t2);
        e2.inverse = t2, t2.inverse = e2, this.props = {}, this.props[e2.name] = e2, this.props[t2.name] = t2;
      }
      jn.prototype.bind = function(e2, t2) {
        if ("string" == typeof t2) {
          if (!this.props[t2]) throw new Error("no property <" + t2 + "> in ref");
          t2 = this.props[t2];
        }
        t2.collection ? On(this, t2, e2) : function(e3, t3, n2) {
          var i2 = t3.inverse, r2 = n2[t3.name];
          Object.defineProperty(n2, t3.name, { configurable: t3.configurable, enumerable: t3.enumerable, get: function() {
            return r2;
          }, set: function(t4) {
            if (t4 !== r2) {
              var o2 = r2;
              r2 = null, o2 && e3.unset(o2, i2, n2), r2 = t4, e3.set(r2, i2, n2);
            }
          } });
        }(this, t2, e2);
      }, jn.prototype.ensureRefsCollection = function(e2, t2) {
        var n2 = e2[t2.name];
        return Nn.isExtended(n2) || On(this, t2, e2), n2;
      }, jn.prototype.ensureBound = function(e2, t2) {
        (function(e3, t3) {
          return Object.prototype.hasOwnProperty.call(e3, t3.name || t3);
        })(e2, t2) || this.bind(e2, t2);
      }, jn.prototype.unset = function(e2, t2, n2) {
        e2 && (this.ensureBound(e2, t2), t2.collection ? this.ensureRefsCollection(e2, t2).remove(n2) : e2[t2.name] = void 0);
      }, jn.prototype.set = function(e2, t2, n2) {
        e2 && (this.ensureBound(e2, t2), t2.collection ? this.ensureRefsCollection(e2, t2).add(n2) : e2[t2.name] = n2);
      };
      var Ln = jn;
      Dn.exports = Ln, Dn.exports.Collection = Bn;
      var In = Dt(Dn.exports), $n = new In({ name: "children", enumerable: true, collection: true }, { name: "parent" }), Fn = new In({ name: "labels", enumerable: true, collection: true }, { name: "labelTarget" }), zn = new In({ name: "attachers", collection: true }, { name: "host" }), Hn = new In({ name: "outgoing", collection: true }, { name: "source" }), Gn = new In({ name: "incoming", collection: true }, { name: "target" });
      function Vn() {
        Object.defineProperty(this, "businessObject", { writable: true }), Object.defineProperty(this, "label", { get: function() {
          return this.labels[0];
        }, set: function(e2) {
          var t2 = this.label, n2 = this.labels;
          !e2 && t2 ? n2.remove(t2) : n2.add(e2, 0);
        } }), $n.bind(this, "parent"), Fn.bind(this, "labels"), Hn.bind(this, "outgoing"), Gn.bind(this, "incoming");
      }
      function Wn() {
        Vn.call(this), $n.bind(this, "children"), zn.bind(this, "host"), zn.bind(this, "attachers");
      }
      function Un() {
        Vn.call(this), $n.bind(this, "children");
      }
      function qn() {
        Wn.call(this), Fn.bind(this, "labelTarget");
      }
      function Kn() {
        Vn.call(this), Hn.bind(this, "source"), Gn.bind(this, "target");
      }
      e(Wn, Vn), e(Un, Wn), e(qn, Wn), e(Kn, Vn);
      var Yn = { connection: Kn, shape: Wn, label: qn, root: Un };
      function Xn() {
        this._uid = 12;
      }
      Xn.prototype.createRoot = function(e2) {
        return this.create("root", e2);
      }, Xn.prototype.createLabel = function(e2) {
        return this.create("label", e2);
      }, Xn.prototype.createShape = function(e2) {
        return this.create("shape", e2);
      }, Xn.prototype.createConnection = function(e2) {
        return this.create("connection", e2);
      }, Xn.prototype.create = function(e2, t2) {
        return (t2 = L({}, t2 || {})).id || (t2.id = e2 + "_" + this._uid++), function(e3, t3) {
          var n2 = Yn[e3];
          if (!n2) throw new Error("unknown type: <" + e3 + ">");
          return L(new n2(), t3);
        }(e2, t2);
      };
      var Zn = "__fn", Qn = Array.prototype.slice;
      function Jn() {
        this._listeners = {}, this.on("diagram.destroy", 1, this._destroy, this);
      }
      function ei() {
      }
      function ti(e2) {
        return e2.childNodes[0];
      }
      function ni(e2, t2, n2, i2, r2) {
        var o2 = je();
        o2.setTranslate(t2, n2);
        var a2 = je();
        a2.setRotate(i2 || 0, 0, 0);
        var s2 = je();
        s2.setScale(r2 || 1, r2 || 1), We(e2, [o2, a2, s2]);
      }
      function ii(e2, t2, n2) {
        var i2 = je();
        i2.setTranslate(t2, n2), We(e2, i2);
      }
      function ri(e2, t2) {
        var n2 = je();
        n2.setRotate(t2, 0, 0), We(e2, n2);
      }
      function oi(e2, t2) {
        this._eventBus = e2, this._elementRegistry = t2;
      }
      function ai(e2, t2, n2) {
        var i2 = n2 || t2.firstChild;
        e2 !== i2 && t2.insertBefore(e2, i2);
      }
      Jn.prototype.on = function(e2, t2, n2, i2) {
        if (e2 = p(e2) ? e2 : [e2], h(t2) && (i2 = n2, n2 = t2, t2 = 1e3), !u(t2)) throw new Error("priority must be a number");
        var r2 = n2;
        i2 && ((r2 = j(n2, i2))[Zn] = n2[Zn] || n2);
        var o2 = this;
        e2.forEach(function(e3) {
          o2._addListener(e3, { priority: t2, callback: r2, next: null });
        });
      }, Jn.prototype.once = function(e2, t2, n2, i2) {
        var r2 = this;
        if (h(t2) && (i2 = n2, n2 = t2, t2 = 1e3), !u(t2)) throw new Error("priority must be a number");
        function o2() {
          o2.__isTomb = true;
          var t3 = n2.apply(i2, arguments);
          return r2.off(e2, o2), t3;
        }
        o2[Zn] = n2, this.on(e2, t2, o2);
      }, Jn.prototype.off = function(e2, t2) {
        e2 = p(e2) ? e2 : [e2];
        var n2 = this;
        e2.forEach(function(e3) {
          n2._removeListener(e3, t2);
        });
      }, Jn.prototype.createEvent = function(e2) {
        var t2 = new ei();
        return t2.init(e2), t2;
      }, Jn.prototype.fire = function(e2, t2) {
        var n2, i2, r2, o2;
        if (o2 = Qn.call(arguments), "object" == typeof e2 && (e2 = (t2 = e2).type), !e2) throw new Error("no event type specified");
        if (i2 = this._listeners[e2]) {
          n2 = t2 instanceof ei ? t2 : this.createEvent(t2), o2[0] = n2;
          var a2 = n2.type;
          e2 !== a2 && (n2.type = e2);
          try {
            r2 = this._invokeListeners(n2, o2, i2);
          } finally {
            e2 !== a2 && (n2.type = a2);
          }
          return void 0 === r2 && n2.defaultPrevented && (r2 = false), r2;
        }
      }, Jn.prototype.handleError = function(e2) {
        return false === this.fire("error", { error: e2 });
      }, Jn.prototype._destroy = function() {
        this._listeners = {};
      }, Jn.prototype._invokeListeners = function(e2, t2, n2) {
        for (var i2; n2 && !e2.cancelBubble; ) i2 = this._invokeListener(e2, t2, n2), n2 = n2.next;
        return i2;
      }, Jn.prototype._invokeListener = function(e2, t2, n2) {
        var i2;
        if (n2.callback.__isTomb) return i2;
        try {
          i2 = function(e3, t3) {
            return e3.apply(null, t3);
          }(n2.callback, t2), void 0 !== i2 && (e2.returnValue = i2, e2.stopPropagation()), false === i2 && e2.preventDefault();
        } catch (e3) {
          if (!this.handleError(e3)) throw console.error("unhandled error in event listener", e3), e3;
        }
        return i2;
      }, Jn.prototype._addListener = function(e2, t2) {
        var n2, i2 = this._getListeners(e2);
        if (i2) {
          for (; i2; ) {
            if (i2.priority < t2.priority) return t2.next = i2, void (n2 ? n2.next = t2 : this._setListeners(e2, t2));
            n2 = i2, i2 = i2.next;
          }
          n2.next = t2;
        } else this._setListeners(e2, t2);
      }, Jn.prototype._getListeners = function(e2) {
        return this._listeners[e2];
      }, Jn.prototype._setListeners = function(e2, t2) {
        this._listeners[e2] = t2;
      }, Jn.prototype._removeListener = function(e2, t2) {
        var n2, i2, r2, o2 = this._getListeners(e2);
        if (t2) for (; o2; ) n2 = o2.next, (r2 = o2.callback) !== t2 && r2[Zn] !== t2 || (i2 ? i2.next = n2 : this._setListeners(e2, n2)), i2 = o2, o2 = n2;
        else this._setListeners(e2, null);
      }, ei.prototype.stopPropagation = function() {
        this.cancelBubble = true;
      }, ei.prototype.preventDefault = function() {
        this.defaultPrevented = true;
      }, ei.prototype.init = function(e2) {
        L(this, e2 || {});
      }, oi.$inject = ["eventBus", "elementRegistry"], oi.prototype._getChildrenContainer = function(e2) {
        var t2, n2 = this._elementRegistry.getGraphics(e2);
        return e2.parent ? (t2 = function(e3) {
          return e3.parentNode.childNodes[1];
        }(n2), t2 || (Se(t2 = De("g")).add("djs-children"), ge(n2.parentNode, t2))) : t2 = n2, t2;
      }, oi.prototype._clear = function(e2) {
        var t2 = ti(e2);
        return Q(t2), t2;
      }, oi.prototype._createContainer = function(e2, t2, n2, i2) {
        var r2 = De("g");
        Se(r2).add("djs-group"), void 0 !== n2 ? ai(r2, t2, t2.childNodes[n2]) : ge(t2, r2);
        var o2 = De("g");
        Se(o2).add("djs-element"), Se(o2).add("djs-" + e2), i2 && Se(o2).add("djs-frame"), ge(r2, o2);
        var a2 = De("g");
        return Se(a2).add("djs-visual"), ge(o2, a2), o2;
      }, oi.prototype.create = function(e2, t2, n2) {
        var i2 = this._getChildrenContainer(t2.parent);
        return this._createContainer(e2, i2, n2, gt(t2));
      }, oi.prototype.updateContainments = function(e2) {
        var t2, n2 = this, i2 = this._elementRegistry;
        t2 = x(e2, function(e3, t3) {
          return t3.parent && (e3[t3.parent.id] = t3.parent), e3;
        }, {}), g(t2, function(e3) {
          var t3 = e3.children;
          if (t3) {
            var r2 = n2._getChildrenContainer(e3);
            g(t3.slice().reverse(), function(e4) {
              ai(i2.getGraphics(e4).parentNode, r2);
            });
          }
        });
      }, oi.prototype.drawShape = function(e2, t2) {
        return this._eventBus.fire("render.shape", { gfx: e2, element: t2 });
      }, oi.prototype.getShapePath = function(e2) {
        return this._eventBus.fire("render.getShapePath", e2);
      }, oi.prototype.drawConnection = function(e2, t2) {
        return this._eventBus.fire("render.connection", { gfx: e2, element: t2 });
      }, oi.prototype.getConnectionPath = function(e2) {
        return this._eventBus.fire("render.getConnectionPath", e2);
      }, oi.prototype.update = function(e2, t2, n2) {
        if (t2.parent) {
          var i2 = this._clear(n2);
          if ("shape" === e2) this.drawShape(i2, t2), ii(n2, t2.x, t2.y);
          else {
            if ("connection" !== e2) throw new Error("unknown type: " + e2);
            this.drawConnection(i2, t2);
          }
          t2.hidden ? we(n2, "display", "none") : we(n2, "display", "block");
        }
      }, oi.prototype.remove = function(e2) {
        Re(this._elementRegistry.getGraphics(e2).parentNode);
      };
      var si = { __depends__: [_t], __init__: ["canvas"], canvas: ["type", Tn], elementRegistry: ["type", Mn], elementFactory: ["type", Xn], eventBus: ["type", Jn], graphicsFactory: ["type", oi] };
      function ci(e2) {
        return function(e3) {
          var t2 = new et(e3);
          return t2.init(), t2;
        }([{ config: ["value", e2 = e2 || {}] }, si].concat(e2.modules || []));
      }
      function pi(e2, t2) {
        this._injector = t2 = t2 || ci(e2), this.get = t2.get, this.invoke = t2.invoke, this.get("eventBus").fire("diagram.init");
      }
      function li() {
      }
      function ui(e2, t2) {
        this.model = e2, this.properties = t2;
      }
      pi.prototype.destroy = function() {
        this.get("eventBus").fire("diagram.destroy");
      }, pi.prototype.clear = function() {
        this.get("eventBus").fire("diagram.clear");
      }, li.prototype.get = function(e2) {
        return this.$model.properties.get(this, e2);
      }, li.prototype.set = function(e2, t2) {
        this.$model.properties.set(this, e2, t2);
      }, ui.prototype.createType = function(e2) {
        var t2 = this.model, n2 = this.properties, i2 = Object.create(li.prototype);
        g(e2.properties, function(e3) {
          e3.isMany || void 0 === e3.default || (i2[e3.name] = e3.default);
        }), n2.defineModel(i2, t2), n2.defineDescriptor(i2, e2);
        var r2 = e2.ns.name;
        function o2(e3) {
          n2.define(this, "$type", { value: r2, enumerable: true }), n2.define(this, "$attrs", { value: {} }), n2.define(this, "$parent", { writable: true }), g(e3, j(function(e4, t3) {
            this.set(t3, e4);
          }, this));
        }
        return o2.prototype = i2, o2.hasType = i2.$instanceOf = this.model.hasType, n2.defineModel(o2, t2), n2.defineDescriptor(o2, e2), o2;
      };
      var hi = { String: true, Boolean: true, Integer: true, Real: true, Element: true }, di = { String: function(e2) {
        return e2;
      }, Boolean: function(e2) {
        return "true" === e2;
      }, Integer: function(e2) {
        return parseInt(e2, 10);
      }, Real: function(e2) {
        return parseFloat(e2);
      } };
      function fi(e2, t2) {
        var n2 = di[e2];
        return n2 ? n2(t2) : t2;
      }
      function mi(e2) {
        return !!hi[e2];
      }
      function vi(e2) {
        return !!di[e2];
      }
      function yi(e2, t2) {
        var n2, i2, r2 = e2.split(/:/);
        if (1 === r2.length) n2 = e2, i2 = t2;
        else {
          if (2 !== r2.length) throw new Error("expected <prefix:localName> or <localName>, got " + e2);
          n2 = r2[1], i2 = r2[0];
        }
        return { name: e2 = (i2 ? i2 + ":" : "") + n2, prefix: i2, localName: n2 };
      }
      function gi(e2) {
        this.ns = e2, this.name = e2.name, this.allTypes = [], this.allTypesByName = {}, this.properties = [], this.propertiesByName = {};
      }
      function bi(e2, t2) {
        this.packageMap = {}, this.typeMap = {}, this.packages = [], this.properties = t2, g(e2, j(this.registerPackage, this));
      }
      function xi(e2, t2, n2) {
        var i2 = t2[n2];
        if (i2 in e2) throw new Error("package with " + n2 + " <" + i2 + "> already defined");
      }
      function _i(e2) {
        this.model = e2;
      }
      function wi(e2, t2, n2) {
        Object.defineProperty(e2, t2.name, { enumerable: !t2.isReference, writable: true, value: n2, configurable: true });
      }
      function Ei(e2) {
        this.properties = new _i(this), this.factory = new ui(this, this.properties), this.registry = new bi(e2, this.properties), this.typeCache = {};
      }
      gi.prototype.build = function() {
        return I(this, ["ns", "name", "allTypes", "allTypesByName", "properties", "propertiesByName", "bodyProperty", "idProperty"]);
      }, gi.prototype.addProperty = function(e2, t2, n2) {
        "boolean" == typeof t2 && (n2 = t2, t2 = void 0), this.addNamedProperty(e2, false !== n2);
        var i2 = this.properties;
        void 0 !== t2 ? i2.splice(t2, 0, e2) : i2.push(e2);
      }, gi.prototype.replaceProperty = function(e2, t2, n2) {
        var i2 = e2.ns, r2 = this.properties, o2 = this.propertiesByName, a2 = e2.name !== t2.name;
        if (e2.isId) {
          if (!t2.isId) throw new Error("property <" + t2.ns.name + "> must be id property to refine <" + e2.ns.name + ">");
          this.setIdProperty(t2, false);
        }
        if (e2.isBody) {
          if (!t2.isBody) throw new Error("property <" + t2.ns.name + "> must be body property to refine <" + e2.ns.name + ">");
          this.setBodyProperty(t2, false);
        }
        var s2 = r2.indexOf(e2);
        if (-1 === s2) throw new Error("property <" + i2.name + "> not found in property list");
        r2.splice(s2, 1), this.addProperty(t2, n2 ? void 0 : s2, a2), o2[i2.name] = o2[i2.localName] = t2;
      }, gi.prototype.redefineProperty = function(e2, t2, n2) {
        var i2 = e2.ns.prefix, r2 = t2.split("#"), o2 = yi(r2[0], i2), a2 = yi(r2[1], o2.prefix).name, s2 = this.propertiesByName[a2];
        if (!s2) throw new Error("refined property <" + a2 + "> not found");
        this.replaceProperty(s2, e2, n2), delete e2.redefines;
      }, gi.prototype.addNamedProperty = function(e2, t2) {
        var n2 = e2.ns, i2 = this.propertiesByName;
        t2 && (this.assertNotDefined(e2, n2.name), this.assertNotDefined(e2, n2.localName)), i2[n2.name] = i2[n2.localName] = e2;
      }, gi.prototype.removeNamedProperty = function(e2) {
        var t2 = e2.ns, n2 = this.propertiesByName;
        delete n2[t2.name], delete n2[t2.localName];
      }, gi.prototype.setBodyProperty = function(e2, t2) {
        if (t2 && this.bodyProperty) throw new Error("body property defined multiple times (<" + this.bodyProperty.ns.name + ">, <" + e2.ns.name + ">)");
        this.bodyProperty = e2;
      }, gi.prototype.setIdProperty = function(e2, t2) {
        if (t2 && this.idProperty) throw new Error("id property defined multiple times (<" + this.idProperty.ns.name + ">, <" + e2.ns.name + ">)");
        this.idProperty = e2;
      }, gi.prototype.assertNotDefined = function(e2, t2) {
        var n2 = e2.name, i2 = this.propertiesByName[n2];
        if (i2) throw new Error("property <" + n2 + "> already defined; override of <" + i2.definedBy.ns.name + "#" + i2.ns.name + "> by <" + e2.definedBy.ns.name + "#" + e2.ns.name + "> not allowed without redefines");
      }, gi.prototype.hasProperty = function(e2) {
        return this.propertiesByName[e2];
      }, gi.prototype.addTrait = function(e2, t2) {
        var n2 = this.allTypesByName, i2 = this.allTypes, r2 = e2.name;
        r2 in n2 || (g(e2.properties, j(function(n3) {
          n3 = L({}, n3, { name: n3.ns.localName, inherited: t2 }), Object.defineProperty(n3, "definedBy", { value: e2 });
          var i3 = n3.replaces, r3 = n3.redefines;
          i3 || r3 ? this.redefineProperty(n3, i3 || r3, i3) : (n3.isBody && this.setBodyProperty(n3), n3.isId && this.setIdProperty(n3), this.addProperty(n3));
        }, this)), i2.push(e2), n2[r2] = e2);
      }, bi.prototype.getPackage = function(e2) {
        return this.packageMap[e2];
      }, bi.prototype.getPackages = function() {
        return this.packages;
      }, bi.prototype.registerPackage = function(e2) {
        e2 = L({}, e2);
        var t2 = this.packageMap;
        xi(t2, e2, "prefix"), xi(t2, e2, "uri"), g(e2.types, j(function(t3) {
          this.registerType(t3, e2);
        }, this)), t2[e2.uri] = t2[e2.prefix] = e2, this.packages.push(e2);
      }, bi.prototype.registerType = function(e2, t2) {
        var n2 = yi((e2 = L({}, e2, { superClass: (e2.superClass || []).slice(), extends: (e2.extends || []).slice(), properties: (e2.properties || []).slice(), meta: L(e2.meta || {}) })).name, t2.prefix), i2 = n2.name, r2 = {};
        g(e2.properties, j(function(e3) {
          var t3 = yi(e3.name, n2.prefix), i3 = t3.name;
          mi(e3.type) || (e3.type = yi(e3.type, t3.prefix).name), L(e3, { ns: t3, name: i3 }), r2[i3] = e3;
        }, this)), L(e2, { ns: n2, name: i2, propertiesByName: r2 }), g(e2.extends, j(function(e3) {
          var t3 = this.typeMap[e3];
          t3.traits = t3.traits || [], t3.traits.push(i2);
        }, this)), this.definePackage(e2, t2), this.typeMap[i2] = e2;
      }, bi.prototype.mapTypes = function(e2, t2, n2) {
        var i2 = mi(e2.name) ? { name: e2.name } : this.typeMap[e2.name], r2 = this;
        function o2(e3) {
          return a2(e3, true);
        }
        function a2(n3, i3) {
          var o3 = yi(n3, mi(n3) ? "" : e2.prefix);
          r2.mapTypes(o3, t2, i3);
        }
        if (!i2) throw new Error("unknown type <" + e2.name + ">");
        g(i2.superClass, n2 ? o2 : a2), t2(i2, !n2), g(i2.traits, o2);
      }, bi.prototype.getEffectiveDescriptor = function(e2) {
        var t2 = yi(e2), n2 = new gi(t2);
        this.mapTypes(t2, function(e3, t3) {
          n2.addTrait(e3, t3);
        });
        var i2 = n2.build();
        return this.definePackage(i2, i2.allTypes[i2.allTypes.length - 1].$pkg), i2;
      }, bi.prototype.definePackage = function(e2, t2) {
        this.properties.define(e2, "$pkg", { value: t2 });
      }, _i.prototype.set = function(e2, t2, n2) {
        if (!d(t2) || !t2.length) throw new TypeError("property name must be a non-empty string");
        var i2 = this.model.getPropertyDescriptor(e2, t2), r2 = i2 && i2.name;
        void 0 === n2 ? i2 ? delete e2[r2] : delete e2.$attrs[t2] : i2 ? r2 in e2 ? e2[r2] = n2 : wi(e2, i2, n2) : e2.$attrs[t2] = n2;
      }, _i.prototype.get = function(e2, t2) {
        var n2 = this.model.getPropertyDescriptor(e2, t2);
        if (!n2) return e2.$attrs[t2];
        var i2 = n2.name;
        return !e2[i2] && n2.isMany && wi(e2, n2, []), e2[i2];
      }, _i.prototype.define = function(e2, t2, n2) {
        if (!n2.writable) {
          var i2 = n2.value;
          delete (n2 = L({}, n2, { get: function() {
            return i2;
          } })).value;
        }
        Object.defineProperty(e2, t2, n2);
      }, _i.prototype.defineDescriptor = function(e2, t2) {
        this.define(e2, "$descriptor", { value: t2 });
      }, _i.prototype.defineModel = function(e2, t2) {
        this.define(e2, "$model", { value: t2 });
      }, Ei.prototype.create = function(e2, t2) {
        var n2 = this.getType(e2);
        if (!n2) throw new Error("unknown type <" + e2 + ">");
        return new n2(t2);
      }, Ei.prototype.getType = function(e2) {
        var t2 = this.typeCache, n2 = d(e2) ? e2 : e2.ns.name, i2 = t2[n2];
        return i2 || (e2 = this.registry.getEffectiveDescriptor(n2), i2 = t2[n2] = this.factory.createType(e2)), i2;
      }, Ei.prototype.createAny = function(e2, t2, n2) {
        var i2 = yi(e2), r2 = { $type: e2, $instanceOf: function(e3) {
          return e3 === this.$type;
        } }, o2 = { name: e2, isGeneric: true, ns: { prefix: i2.prefix, localName: i2.localName, uri: t2 } };
        return this.properties.defineDescriptor(r2, o2), this.properties.defineModel(r2, this), this.properties.define(r2, "$parent", { enumerable: false, writable: true }), this.properties.define(r2, "$instanceOf", { enumerable: false, writable: true }), g(n2, function(e3, t3) {
          l(e3) && void 0 !== e3.value ? r2[e3.name] = e3.value : r2[t3] = e3;
        }), r2;
      }, Ei.prototype.getPackage = function(e2) {
        return this.registry.getPackage(e2);
      }, Ei.prototype.getPackages = function() {
        return this.registry.getPackages();
      }, Ei.prototype.getElementDescriptor = function(e2) {
        return e2.$descriptor;
      }, Ei.prototype.hasType = function(e2, t2) {
        return void 0 === t2 && (t2 = e2, e2 = this), t2 in e2.$model.getElementDescriptor(e2).allTypesByName;
      }, Ei.prototype.getPropertyDescriptor = function(e2, t2) {
        return this.getElementDescriptor(e2).propertiesByName[t2];
      }, Ei.prototype.getTypeDescriptor = function(e2) {
        return this.registry.typeMap[e2];
      };
      var Si = String.fromCharCode, Ci = Object.prototype.hasOwnProperty, Ri = /&#(\d+);|&#x([0-9a-f]+);|&(\w+);/gi, Pi = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' };
      function Ti(e2, t2, n2, i2) {
        return i2 ? Ci.call(Pi, i2) ? Pi[i2] : "&" + i2 + ";" : Si(t2 || parseInt(n2, 16));
      }
      function ki(e2) {
        return e2.length > 3 && -1 !== e2.indexOf("&") ? e2.replace(Ri, Ti) : e2;
      }
      Object.keys(Pi).forEach(function(e2) {
        Pi[e2.toUpperCase()] = Pi[e2];
      });
      var Ai = "xsi:type", Mi = "non-whitespace outside of root node";
      function Di(e2) {
        return new Error(e2);
      }
      function Bi(e2) {
        return "missing namespace for prefix <" + e2 + ">";
      }
      function Ni(e2) {
        return { get: e2, enumerable: true };
      }
      function Oi(e2) {
        var t2, n2 = {};
        for (t2 in e2) n2[t2] = e2[t2];
        return n2;
      }
      function ji(e2) {
        return e2 + "$uri";
      }
      function Li() {
        return { line: 0, column: 0 };
      }
      function Ii(e2) {
        throw e2;
      }
      function $i(e2) {
        if (!this) return new $i(e2);
        var t2, n2, i2, r2, o2, a2, s2, c2, p2, l2 = e2 && e2.proxy, u2 = Ii, h2 = Li, d2 = false, f2 = false, m2 = null, v2 = false;
        function y2(e3) {
          e3 instanceof Error || (e3 = Di(e3)), m2 = e3, u2(e3, h2);
        }
        function g2(e3) {
          o2 && (e3 instanceof Error || (e3 = Di(e3)), o2(e3, h2));
        }
        this.on = function(e3, p3) {
          if ("function" != typeof p3) throw Di("required args <name, cb>");
          switch (e3) {
            case "openTag":
              n2 = p3;
              break;
            case "text":
              t2 = p3;
              break;
            case "closeTag":
              i2 = p3;
              break;
            case "error":
              u2 = p3;
              break;
            case "warn":
              o2 = p3;
              break;
            case "cdata":
              r2 = p3;
              break;
            case "attention":
              c2 = p3;
              break;
            case "question":
              s2 = p3;
              break;
            case "comment":
              a2 = p3;
              break;
            default:
              throw Di("unsupported event: " + e3);
          }
          return this;
        }, this.ns = function(e3) {
          if (void 0 === e3 && (e3 = {}), "object" != typeof e3) throw Di("required args <nsMap={}>");
          var t3, n3 = {};
          for (t3 in e3) n3[t3] = e3[t3];
          return n3["http://www.w3.org/2001/XMLSchema-instance"] = "xsi", f2 = true, p2 = n3, this;
        }, this.parse = function(e3) {
          if ("string" != typeof e3) throw Di("required args <xml=string>");
          return m2 = null, function(e4) {
            var o3, u3, m3, b2, x2, _2, w2, E2, S2, C2, R2, P2 = f2 ? [] : null, T2 = f2 ? function(e5) {
              var t3, n3, i3 = {};
              for (t3 in e5) i3[n3 = e5[t3]] = n3, i3[ji(n3)] = t3;
              return i3;
            }(p2) : null, k2 = [], A2 = 0, M2 = false, D2 = false, B2 = 0, N2 = 0, O2 = "", j2 = 0;
            function L2() {
              if (null !== R2) return R2;
              var e5, t3, n3, i3, r3, o4, a3, s3, c3, l3, u4, h3 = f2 && T2.xmlns, m4 = f2 && d2 ? [] : null, v3 = j2, y3 = O2, b3 = y3.length, x3 = {}, _3 = {};
              e: for (; v3 < b3; v3++) if (c3 = false, !(32 === (l3 = y3.charCodeAt(v3)) || l3 < 14 && l3 > 8)) {
                for ((l3 < 65 || l3 > 122 || l3 > 90 && l3 < 97) && 95 !== l3 && 58 !== l3 && (g2("illegal first char attribute name"), c3 = true), u4 = v3 + 1; u4 < b3; u4++) if (!((l3 = y3.charCodeAt(u4)) > 96 && l3 < 123 || l3 > 64 && l3 < 91 || l3 > 47 && l3 < 59 || 46 === l3 || 45 === l3 || 95 === l3)) {
                  if (32 === l3 || l3 < 14 && l3 > 8) {
                    g2("missing attribute value"), v3 = u4;
                    continue e;
                  }
                  if (61 === l3) break;
                  g2("illegal attribute name char"), c3 = true;
                }
                if ("xmlns:xmlns" === (s3 = y3.substring(v3, u4)) && (g2("illegal declaration of xmlns"), c3 = true), 34 === (l3 = y3.charCodeAt(u4 + 1))) -1 === (u4 = y3.indexOf('"', v3 = u4 + 2)) && -1 !== (u4 = y3.indexOf("'", v3)) && (g2("attribute value quote missmatch"), c3 = true);
                else if (39 === l3) -1 === (u4 = y3.indexOf("'", v3 = u4 + 2)) && -1 !== (u4 = y3.indexOf('"', v3)) && (g2("attribute value quote missmatch"), c3 = true);
                else for (g2("missing attribute value quotes"), c3 = true, u4 += 1; u4 < b3 && !(32 === (l3 = y3.charCodeAt(u4 + 1)) || l3 < 14 && l3 > 8); u4++) ;
                for (-1 === u4 && (g2("missing closing quotes"), u4 = b3, c3 = true), c3 || (o4 = y3.substring(v3, u4)), v3 = u4; u4 + 1 < b3 && !(32 === (l3 = y3.charCodeAt(u4 + 1)) || l3 < 14 && l3 > 8); u4++) v3 === u4 && (g2("illegal character after attribute end"), c3 = true);
                if (v3 = u4 + 1, !c3) if (s3 in _3) g2("attribute <" + s3 + "> already defined");
                else if (_3[s3] = true, f2) if (d2) {
                  if (null !== (r3 = "xmlns" === s3 ? "xmlns" : 120 === s3.charCodeAt(0) && "xmlns:" === s3.substr(0, 6) ? s3.substr(6) : null)) {
                    if (e5 = ki(o4), t3 = ji(r3), !(a3 = p2[e5])) {
                      if ("xmlns" === r3 || t3 in T2 && T2[t3] !== e5) do {
                        a3 = "ns" + A2++;
                      } while (void 0 !== T2[a3]);
                      else a3 = r3;
                      p2[e5] = a3;
                    }
                    T2[r3] !== a3 && (i3 || (T2 = Oi(T2), i3 = true), T2[r3] = a3, "xmlns" === r3 && (T2[ji(a3)] = e5, h3 = a3), T2[t3] = e5), x3[s3] = o4;
                    continue;
                  }
                  m4.push(s3, o4);
                } else -1 !== (l3 = s3.indexOf(":")) ? (n3 = T2[s3.substring(0, l3)]) ? ((s3 = h3 === n3 ? s3.substr(l3 + 1) : n3 + s3.substr(l3)) === Ai && (-1 !== (l3 = o4.indexOf(":")) ? (n3 = o4.substring(0, l3), o4 = (n3 = T2[n3] || n3) + o4.substring(l3)) : o4 = h3 + ":" + o4), x3[s3] = o4) : g2(Bi(s3.substring(0, l3))) : x3[s3] = o4;
                else x3[s3] = o4;
              }
              if (d2) for (v3 = 0, b3 = m4.length; v3 < b3; v3++) {
                if (s3 = m4[v3++], o4 = m4[v3], -1 !== (l3 = s3.indexOf(":"))) {
                  if (!(n3 = T2[s3.substring(0, l3)])) {
                    g2(Bi(s3.substring(0, l3)));
                    continue;
                  }
                  (s3 = h3 === n3 ? s3.substr(l3 + 1) : n3 + s3.substr(l3)) === Ai && (-1 !== (l3 = o4.indexOf(":")) ? (n3 = o4.substring(0, l3), o4 = (n3 = T2[n3] || n3) + o4.substring(l3)) : o4 = h3 + ":" + o4);
                }
                x3[s3] = o4;
              }
              return R2 = x3;
            }
            function I2() {
              for (var t3, n3, i3 = /(\r\n|\r|\n)/g, r3 = 0, o4 = 0, a3 = 0, s3 = N2; B2 >= a3 && (t3 = i3.exec(e4)) && !((s3 = t3[0].length + t3.index) > B2); ) r3 += 1, a3 = s3;
              return -1 == B2 ? (o4 = s3, n3 = e4.substring(N2)) : 0 === N2 ? n3 = e4.substring(N2, B2) : (o4 = B2 - a3, n3 = -1 == N2 ? e4.substring(B2) : e4.substring(B2, N2 + 1)), { data: n3, line: r3, column: o4 };
            }
            h2 = I2, l2 && (C2 = Object.create({}, { name: Ni(function() {
              return E2;
            }), originalName: Ni(function() {
              return S2;
            }), attrs: Ni(L2), ns: Ni(function() {
              return T2;
            }) }));
            for (; -1 !== N2; ) {
              if (-1 === (B2 = 60 === e4.charCodeAt(N2) ? N2 : e4.indexOf("<", N2))) return k2.length ? y2("unexpected end of file") : 0 === N2 ? y2("missing start tag") : void (N2 < e4.length && e4.substring(N2).trim() && g2(Mi));
              if (N2 !== B2) {
                if (k2.length) {
                  if (t2 && (t2(e4.substring(N2, B2), ki, h2), v2)) return;
                } else if (e4.substring(N2, B2).trim() && (g2(Mi), v2)) return;
              }
              if (33 === (x2 = e4.charCodeAt(B2 + 1))) {
                if (91 === (b2 = e4.charCodeAt(B2 + 2)) && "CDATA[" === e4.substr(B2 + 3, 6)) {
                  if (-1 === (N2 = e4.indexOf("]]>", B2))) return y2("unclosed cdata");
                  if (r2 && (r2(e4.substring(B2 + 9, N2), h2), v2)) return;
                  N2 += 3;
                  continue;
                }
                if (45 === b2 && 45 === e4.charCodeAt(B2 + 3)) {
                  if (-1 === (N2 = e4.indexOf("-->", B2))) return y2("unclosed comment");
                  if (a2 && (a2(e4.substring(B2 + 4, N2), ki, h2), v2)) return;
                  N2 += 3;
                  continue;
                }
              }
              if (63 !== x2) {
                for (u3 = B2 + 1; ; u3++) {
                  if (_2 = e4.charCodeAt(u3), isNaN(_2)) return N2 = -1, y2("unclosed tag");
                  if (34 === _2) u3 = -1 !== (b2 = e4.indexOf('"', u3 + 1)) ? b2 : u3;
                  else if (39 === _2) u3 = -1 !== (b2 = e4.indexOf("'", u3 + 1)) ? b2 : u3;
                  else if (62 === _2) {
                    N2 = u3;
                    break;
                  }
                }
                if (33 !== x2) {
                  if (R2 = {}, 47 === x2) {
                    if (M2 = false, D2 = true, !k2.length) return y2("missing open tag");
                    if (u3 = E2 = k2.pop(), b2 = B2 + 2 + u3.length, e4.substring(B2 + 2, b2) !== u3) return y2("closing tag mismatch");
                    for (; b2 < N2; b2++) if (!(32 === (x2 = e4.charCodeAt(b2)) || x2 > 8 && x2 < 14)) return y2("close tag");
                  } else {
                    if (47 === e4.charCodeAt(N2 - 1) ? (u3 = E2 = e4.substring(B2 + 1, N2 - 1), M2 = true, D2 = true) : (u3 = E2 = e4.substring(B2 + 1, N2), M2 = true, D2 = false), !(x2 > 96 && x2 < 123 || x2 > 64 && x2 < 91 || 95 === x2 || 58 === x2)) return y2("illegal first char nodeName");
                    for (b2 = 1, m3 = u3.length; b2 < m3; b2++) if (!((x2 = u3.charCodeAt(b2)) > 96 && x2 < 123 || x2 > 64 && x2 < 91 || x2 > 47 && x2 < 59 || 45 === x2 || 95 === x2 || 46 == x2)) {
                      if (32 === x2 || x2 < 14 && x2 > 8) {
                        E2 = u3.substring(0, b2), R2 = null;
                        break;
                      }
                      return y2("invalid nodeName");
                    }
                    D2 || k2.push(E2);
                  }
                  if (f2) {
                    if (o3 = T2, M2 && (D2 || P2.push(o3), null === R2 && (d2 = -1 !== u3.indexOf("xmlns", b2)) && (j2 = b2, O2 = u3, L2(), d2 = false)), S2 = E2, -1 !== (x2 = E2.indexOf(":"))) {
                      if (!(w2 = T2[E2.substring(0, x2)])) return y2("missing namespace on <" + S2 + ">");
                      E2 = E2.substr(x2 + 1);
                    } else w2 = T2.xmlns;
                    w2 && (E2 = w2 + ":" + E2);
                  }
                  if (M2 && (j2 = b2, O2 = u3, n2 && (l2 ? n2(C2, ki, D2, h2) : n2(E2, L2, ki, D2, h2), v2))) return;
                  if (D2) {
                    if (i2 && (i2(l2 ? C2 : E2, ki, M2, h2), v2)) return;
                    f2 && (T2 = M2 ? o3 : P2.pop());
                  }
                  N2 += 1;
                } else {
                  if (c2 && (c2(e4.substring(B2, N2 + 1), ki, h2), v2)) return;
                  N2 += 1;
                }
              } else {
                if (-1 === (N2 = e4.indexOf("?>", B2))) return y2("unclosed question");
                if (s2 && (s2(e4.substring(B2, N2 + 2), h2), v2)) return;
                N2 += 2;
              }
            }
          }(e3), h2 = Li, v2 = false, m2;
        }, this.stop = function() {
          v2 = true;
        };
      }
      function Fi(e2) {
        return e2.xml && "lowerCase" === e2.xml.tagAlias;
      }
      var zi = { xsi: "http://www.w3.org/2001/XMLSchema-instance", xml: "http://www.w3.org/XML/1998/namespace" }, Hi = "xsi:type";
      function Gi(e2) {
        return e2.xml && e2.xml.serialize;
      }
      function Vi(e2) {
        return Gi(e2) === Hi;
      }
      function Wi(e2, t2) {
        return Fi(t2) ? e2.prefix + ":" + ((n2 = e2.localName).charAt(0).toUpperCase() + n2.slice(1)) : e2.name;
        var n2;
      }
      function Ui(e2) {
        return new Error(e2);
      }
      function qi(e2) {
        return e2.$descriptor;
      }
      function Ki(e2) {
        L(this, e2), this.elementsById = {}, this.references = [], this.warnings = [], this.addReference = function(e3) {
          this.references.push(e3);
        }, this.addElement = function(e3) {
          if (!e3) throw Ui("expected element");
          var t2, n2 = this.elementsById, i2 = qi(e3).idProperty;
          if (i2 && (t2 = e3.get(i2.name))) {
            if (!/^([a-z][\w-.]*:)?[a-z_][\w-.]*$/i.test(t2)) throw new Error("illegal ID <" + t2 + ">");
            if (n2[t2]) throw Ui("duplicate ID <" + t2 + ">");
            n2[t2] = e3;
          }
        }, this.addWarning = function(e3) {
          this.warnings.push(e3);
        };
      }
      function Yi() {
      }
      function Xi() {
      }
      function Zi() {
      }
      function Qi(e2, t2) {
        this.property = e2, this.context = t2;
      }
      function Ji(e2, t2) {
        this.element = t2, this.propertyDesc = e2;
      }
      function er() {
      }
      function tr(e2, t2, n2) {
        this.model = e2, this.type = e2.getType(t2), this.context = n2;
      }
      function nr(e2, t2, n2) {
        tr.call(this, e2, t2, n2);
      }
      function ir(e2, t2, n2) {
        this.model = e2, this.context = n2;
      }
      function rr(e2) {
        e2 instanceof Ei && (e2 = { model: e2 }), L(this, { lax: false }, e2);
      }
      Yi.prototype.handleEnd = function() {
      }, Yi.prototype.handleText = function() {
      }, Yi.prototype.handleNode = function() {
      }, Xi.prototype = Object.create(Yi.prototype), Xi.prototype.handleNode = function() {
        return this;
      }, Zi.prototype = Object.create(Yi.prototype), Zi.prototype.handleText = function(e2) {
        this.body = (this.body || "") + e2;
      }, Qi.prototype = Object.create(Zi.prototype), Qi.prototype.handleNode = function(e2) {
        if (this.element) throw Ui("expected no sub nodes");
        return this.element = this.createReference(e2), this;
      }, Qi.prototype.handleEnd = function() {
        this.element.id = this.body;
      }, Qi.prototype.createReference = function(e2) {
        return { property: this.property.ns.name, id: "" };
      }, Ji.prototype = Object.create(Zi.prototype), Ji.prototype.handleEnd = function() {
        var e2 = this.body || "", t2 = this.element, n2 = this.propertyDesc;
        e2 = fi(n2.type, e2), n2.isMany ? t2.get(n2.name).push(e2) : t2.set(n2.name, e2);
      }, er.prototype = Object.create(Zi.prototype), er.prototype.handleNode = function(e2) {
        var t2 = this, n2 = this.element;
        return n2 ? t2 = this.handleChild(e2) : (n2 = this.element = this.createElement(e2), this.context.addElement(n2)), t2;
      }, tr.prototype = Object.create(er.prototype), tr.prototype.addReference = function(e2) {
        this.context.addReference(e2);
      }, tr.prototype.handleText = function(e2) {
        if (!qi(this.element).bodyProperty) throw Ui("unexpected body text <" + e2 + ">");
        Zi.prototype.handleText.call(this, e2);
      }, tr.prototype.handleEnd = function() {
        var e2 = this.body, t2 = this.element, n2 = qi(t2).bodyProperty;
        n2 && void 0 !== e2 && (e2 = fi(n2.type, e2), t2.set(n2.name, e2));
      }, tr.prototype.createElement = function(e2) {
        var t2, n2 = e2.attributes, i2 = this.type, r2 = qi(i2), o2 = this.context, a2 = new i2({}), s2 = this.model;
        return g(n2, function(e3, n3) {
          var i3 = r2.propertiesByName[n3];
          i3 && i3.isReference ? i3.isMany ? g(e3.split(" "), function(e4) {
            o2.addReference({ element: a2, property: i3.ns.name, id: e4 });
          }) : o2.addReference({ element: a2, property: i3.ns.name, id: e3 }) : (i3 ? e3 = fi(i3.type, e3) : "xmlns" !== n3 && (t2 = yi(n3, r2.ns.prefix), s2.getPackage(t2.prefix) && o2.addWarning({ message: "unknown attribute <" + n3 + ">", element: a2, property: n3, value: e3 })), a2.set(n3, e3));
        }), a2;
      }, tr.prototype.getPropertyForNode = function(e2) {
        var t2, n2, i2 = yi(e2.name), r2 = this.type, o2 = this.model, a2 = qi(r2), s2 = i2.name, c2 = a2.propertiesByName[s2];
        if (c2 && !c2.isAttr) return Vi(c2) && (t2 = e2.attributes[Hi]) ? (t2 = function(e3, t3) {
          var n3 = yi(e3);
          return function(e4, t4) {
            var n4 = e4.name, i3 = e4.localName, r3 = t4.xml && t4.xml.typePrefix;
            return r3 && 0 === i3.indexOf(r3) ? e4.prefix + ":" + i3.slice(r3.length) : n4;
          }(n3, t3.getPackage(n3.prefix));
        }(t2, o2), L({}, c2, { effectiveType: qi(n2 = o2.getType(t2)).name })) : c2;
        var p2 = o2.getPackage(i2.prefix);
        if (p2) {
          if (t2 = Wi(i2, p2), n2 = o2.getType(t2), c2 = m(a2.properties, function(e3) {
            return !e3.isVirtual && !e3.isReference && !e3.isAttribute && n2.hasType(e3.type);
          }), c2) return L({}, c2, { effectiveType: qi(n2).name });
        } else if (c2 = m(a2.properties, function(e3) {
          return !e3.isReference && !e3.isAttribute && "Element" === e3.type;
        }), c2) return c2;
        throw Ui("unrecognized element <" + i2.name + ">");
      }, tr.prototype.toString = function() {
        return "ElementDescriptor[" + qi(this.type).name + "]";
      }, tr.prototype.valueHandler = function(e2, t2) {
        return new Ji(e2, t2);
      }, tr.prototype.referenceHandler = function(e2) {
        return new Qi(e2, this.context);
      }, tr.prototype.handler = function(e2) {
        return "Element" === e2 ? new ir(this.model, e2, this.context) : new tr(this.model, e2, this.context);
      }, tr.prototype.handleChild = function(e2) {
        var t2, n2, i2, r2;
        if (t2 = this.getPropertyForNode(e2), i2 = this.element, vi(n2 = t2.effectiveType || t2.type)) return this.valueHandler(t2, i2);
        var o2 = (r2 = t2.isReference ? this.referenceHandler(t2).handleNode(e2) : this.handler(n2).handleNode(e2)).element;
        return void 0 !== o2 && (t2.isMany ? i2.get(t2.name).push(o2) : i2.set(t2.name, o2), t2.isReference ? (L(o2, { element: i2 }), this.context.addReference(o2)) : o2.$parent = i2), r2;
      }, nr.prototype = Object.create(tr.prototype), nr.prototype.createElement = function(e2) {
        var t2 = e2.name, n2 = yi(t2), i2 = this.model, r2 = this.type, o2 = i2.getPackage(n2.prefix), a2 = o2 && Wi(n2, o2) || t2;
        if (!r2.hasType(a2)) throw Ui("unexpected element <" + e2.originalName + ">");
        return tr.prototype.createElement.call(this, e2);
      }, ir.prototype = Object.create(er.prototype), ir.prototype.createElement = function(e2) {
        var t2 = e2.name, n2 = yi(t2).prefix, i2 = e2.ns[n2 + "$uri"], r2 = e2.attributes;
        return this.model.createAny(t2, i2, r2);
      }, ir.prototype.handleChild = function(e2) {
        var t2 = new ir(this.model, "Element", this.context).handleNode(e2), n2 = this.element, i2 = t2.element;
        return void 0 !== i2 && ((n2.$children = n2.$children || []).push(i2), i2.$parent = n2), t2;
      }, ir.prototype.handleEnd = function() {
        this.body && (this.element.$body = this.body);
      }, rr.prototype.fromXML = function(e2, t2, n2) {
        var i2 = t2.rootHandler;
        t2 instanceof tr ? (i2 = t2, t2 = {}) : "string" == typeof t2 ? (i2 = this.handler(t2), t2 = {}) : "string" == typeof i2 && (i2 = this.handler(i2));
        var r2 = this.model, o2 = this.lax, a2 = new Ki(L({}, t2, { rootHandler: i2 })), s2 = new $i({ proxy: true }), c2 = function() {
          var e3 = [];
          return Object.defineProperty(e3, "peek", { value: function() {
            return this[this.length - 1];
          } }), e3;
        }();
        function p2(e3, t3, n3) {
          var i3 = t3(), r3 = i3.line, o3 = i3.column, s3 = i3.data;
          "<" === s3.charAt(0) && -1 !== s3.indexOf(" ") && (s3 = s3.slice(0, s3.indexOf(" ")) + ">");
          var c3 = "unparsable content " + (s3 ? s3 + " " : "") + "detected\n	line: " + r3 + "\n	column: " + o3 + "\n	nested error: " + e3.message;
          if (n3) return a2.addWarning({ message: c3, error: e3 }), true;
          throw Ui(c3);
        }
        function l2(e3, t3) {
          return p2(e3, t3, true);
        }
        i2.context = a2, c2.push(i2);
        var u2 = /^<\?xml /i, h2 = / encoding="([^"]+)"/i, d2 = /^utf-8$/i;
        function f2(e3, t3) {
          try {
            c2.peek().handleText(e3);
          } catch (e4) {
            l2(e4, t3);
          }
        }
        var m2 = r2.getPackages().reduce(function(e3, t3) {
          return e3[t3.uri] = t3.prefix, e3;
        }, { "http://www.w3.org/XML/1998/namespace": "xml" });
        return s2.ns(m2).on("openTag", function(e3, t3, n3, i3) {
          var r3 = e3.attrs || {}, a3 = Object.keys(r3).reduce(function(e4, n4) {
            var i4 = t3(r3[n4]);
            return e4[n4] = i4, e4;
          }, {});
          !function(e4, t4) {
            var n4 = c2.peek();
            try {
              c2.push(n4.handleNode(e4));
            } catch (e5) {
              p2(e5, t4, o2) && c2.push(new Xi());
            }
          }({ name: e3.name, originalName: e3.originalName, attributes: a3, ns: e3.ns }, i3);
        }).on("question", function(e3) {
          if (u2.test(e3)) {
            var t3 = h2.exec(e3), n3 = t3 && t3[1];
            n3 && !d2.test(n3) && a2.addWarning({ message: "unsupported document encoding <" + n3 + ">, falling back to UTF-8" });
          }
        }).on("closeTag", function() {
          c2.pop().handleEnd();
        }).on("cdata", f2).on("text", function(e3, t3, n3) {
          !function(e4, t4) {
            e4.trim() && f2(e4, t4);
          }(t3(e3), n3);
        }).on("error", p2).on("warn", l2), new Promise(function(t3, n3) {
          var r3;
          try {
            s2.parse(e2), function() {
              var e3, t4, n4 = a2.elementsById, i3 = a2.references;
              for (e3 = 0; t4 = i3[e3]; e3++) {
                var r4 = t4.element, o4 = n4[t4.id], s3 = qi(r4).propertiesByName[t4.property];
                if (o4 || a2.addWarning({ message: "unresolved reference <" + t4.id + ">", element: t4.element, property: t4.property, value: t4.id }), s3.isMany) {
                  var c4 = r4.get(s3.name), p4 = c4.indexOf(t4);
                  -1 === p4 && (p4 = c4.length), o4 ? c4[p4] = o4 : c4.splice(p4, 1);
                } else r4.set(s3.name, o4);
              }
            }();
          } catch (e3) {
            r3 = e3;
          }
          var o3 = i2.element;
          r3 || o3 || (r3 = Ui("failed to parse document as <" + i2.type.$descriptor.name + ">"));
          var c3 = a2.warnings, p3 = a2.references, l3 = a2.elementsById;
          return r3 ? (r3.warnings = c3, n3(r3)) : t3({ rootElement: o3, elementsById: l3, references: p3, warnings: c3 });
        });
      }, rr.prototype.handler = function(e2) {
        return new nr(this.model, e2);
      };
      var or = /<|>|'|"|&|\n\r|\n/g, ar = /<|>|&/g;
      function sr(e2) {
        var t2 = {}, n2 = {}, i2 = {}, r2 = [], o2 = [];
        this.byUri = function(t3) {
          return n2[t3] || e2 && e2.byUri(t3);
        }, this.add = function(e3, t3) {
          n2[e3.uri] = e3, t3 ? r2.push(e3) : o2.push(e3), this.mapPrefix(e3.prefix, e3.uri);
        }, this.uriByPrefix = function(e3) {
          return t2[e3 || "xmlns"];
        }, this.mapPrefix = function(e3, n3) {
          t2[e3 || "xmlns"] = n3;
        }, this.getNSKey = function(e3) {
          return void 0 !== e3.prefix ? e3.uri + "|" + e3.prefix : e3.uri;
        }, this.logUsed = function(t3) {
          var n3 = t3.uri, r3 = this.getNSKey(t3);
          i2[r3] = this.byUri(n3), e2 && e2.logUsed(t3);
        }, this.getUsed = function(e3) {
          var t3 = this;
          return [].concat(r2, o2).filter(function(e4) {
            var n3 = t3.getNSKey(e4);
            return i2[n3];
          });
        };
      }
      function cr(e2, t2) {
        return Fi(t2) ? (n2 = e2).charAt(0).toLowerCase() + n2.slice(1) : e2;
        var n2;
      }
      function pr(e2, t2) {
        e2.super_ = t2, e2.prototype = Object.create(t2.prototype, { constructor: { value: e2, enumerable: false, writable: true, configurable: true } });
      }
      function lr(e2) {
        return d(e2) ? e2 : (e2.prefix ? e2.prefix + ":" : "") + e2.localName;
      }
      var ur = { "\n": "#10", "\n\r": "#10", '"': "#34", "'": "#39", "<": "#60", ">": "#62", "&": "#38" }, hr = { "<": "lt", ">": "gt", "&": "amp" };
      function dr(e2, t2, n2) {
        return (e2 = d(e2) ? e2 : "" + e2).replace(t2, function(e3) {
          return "&" + n2[e3] + ";";
        });
      }
      function fr(e2) {
        this.tagName = e2;
      }
      function mr() {
      }
      function vr(e2) {
        this.tagName = e2;
      }
      function yr(e2, t2) {
        this.body = [], this.attrs = [], this.parent = e2, this.propertyDescriptor = t2;
      }
      function gr(e2, t2) {
        yr.call(this, e2, t2);
      }
      function br() {
        this.value = "", this.write = function(e2) {
          this.value += e2;
        };
      }
      function xr(e2, t2) {
        var n2 = [""];
        this.append = function(t3) {
          return e2.write(t3), this;
        }, this.appendNewLine = function() {
          return t2 && e2.write("\n"), this;
        }, this.appendIndent = function() {
          return t2 && e2.write(n2.join("  ")), this;
        }, this.indent = function() {
          return n2.push(""), this;
        }, this.unindent = function() {
          return n2.pop(), this;
        };
      }
      function _r(e2) {
        return e2 = L({ format: false, preamble: true }, e2 || {}), { toXML: function(t2, n2) {
          var i2 = n2 || new br(), r2 = new xr(i2, e2.format);
          if (e2.preamble && r2.append('<?xml version="1.0" encoding="UTF-8"?>\n'), new yr().build(t2).serializeTo(r2), !n2) return i2.value;
        } };
      }
      function wr(e2, t2) {
        Ei.call(this, e2, t2);
      }
      fr.prototype.build = function(e2) {
        return this.element = e2, this;
      }, fr.prototype.serializeTo = function(e2) {
        e2.appendIndent().append("<" + this.tagName + ">" + this.element.id + "</" + this.tagName + ">").appendNewLine();
      }, mr.prototype.serializeValue = mr.prototype.serializeTo = function(e2) {
        e2.append(this.escape ? dr(this.value, ar, hr) : this.value);
      }, mr.prototype.build = function(e2, t2) {
        return this.value = t2, "String" === e2.type && -1 !== t2.search(ar) && (this.escape = true), this;
      }, pr(vr, mr), vr.prototype.serializeTo = function(e2) {
        e2.appendIndent().append("<" + this.tagName + ">"), this.serializeValue(e2), e2.append("</" + this.tagName + ">").appendNewLine();
      }, yr.prototype.build = function(e2) {
        this.element = e2;
        var t2, n2, i2 = e2.$descriptor, r2 = this.propertyDescriptor, o2 = i2.isGeneric;
        return t2 = o2 ? this.parseGeneric(e2) : this.parseNsAttributes(e2), this.ns = r2 ? this.nsPropertyTagName(r2) : this.nsTagName(i2), this.tagName = this.addTagName(this.ns), o2 || (n2 = function(e3) {
          return y(e3.$descriptor.properties, function(t3) {
            var n3 = t3.name;
            if (t3.isVirtual) return false;
            if (!f(e3, n3)) return false;
            var i3 = e3[n3];
            return i3 !== t3.default && null !== i3 && (!t3.isMany || i3.length);
          });
        }(e2), this.parseAttributes(y(n2, function(e3) {
          return e3.isAttr;
        })), this.parseContainments(function(e3) {
          return y(e3, function(e4) {
            return !e4.isAttr;
          });
        }(n2))), this.parseGenericAttributes(e2, t2), this;
      }, yr.prototype.nsTagName = function(e2) {
        return function(e3, t2) {
          return t2.isGeneric ? L({ localName: t2.ns.localName }, e3) : L({ localName: cr(t2.ns.localName, t2.$pkg) }, e3);
        }(this.logNamespaceUsed(e2.ns), e2);
      }, yr.prototype.nsPropertyTagName = function(e2) {
        return function(e3, t2) {
          return L({ localName: t2.ns.localName }, e3);
        }(this.logNamespaceUsed(e2.ns), e2);
      }, yr.prototype.isLocalNs = function(e2) {
        return e2.uri === this.ns.uri;
      }, yr.prototype.nsAttributeName = function(e2) {
        var t2;
        if (t2 = d(e2) ? yi(e2) : e2.ns, e2.inherited) return { localName: t2.localName };
        var n2 = this.logNamespaceUsed(t2);
        return this.getNamespaces().logUsed(n2), this.isLocalNs(n2) ? { localName: t2.localName } : L({ localName: t2.localName }, n2);
      }, yr.prototype.parseGeneric = function(e2) {
        var t2 = this, n2 = this.body, i2 = [];
        return g(e2, function(r2, o2) {
          "$body" === o2 ? n2.push(new mr().build({ type: "String" }, r2)) : "$children" === o2 ? g(r2, function(e3) {
            n2.push(new yr(t2).build(e3));
          }) : 0 !== o2.indexOf("$") && t2.parseNsAttribute(e2, o2, r2) && i2.push({ name: o2, value: r2 });
        }), i2;
      }, yr.prototype.parseNsAttribute = function(e2, t2, n2) {
        var i2, r2 = e2.$model, o2 = yi(t2);
        if ("xmlns" === o2.prefix && (i2 = { prefix: o2.localName, uri: n2 }), o2.prefix || "xmlns" !== o2.localName || (i2 = { uri: n2 }), !i2) return { name: t2, value: n2 };
        if (r2 && r2.getPackage(n2)) this.logNamespace(i2, true, true);
        else {
          var a2 = this.logNamespaceUsed(i2, true);
          this.getNamespaces().logUsed(a2);
        }
      }, yr.prototype.parseNsAttributes = function(e2, t2) {
        var n2 = this, i2 = e2.$attrs, r2 = [];
        return g(i2, function(t3, i3) {
          var o2 = n2.parseNsAttribute(e2, i3, t3);
          o2 && r2.push(o2);
        }), r2;
      }, yr.prototype.parseGenericAttributes = function(e2, t2) {
        var n2 = this;
        g(t2, function(t3) {
          if (t3.name !== Hi) try {
            n2.addAttribute(n2.nsAttributeName(t3.name), t3.value);
          } catch (n3) {
            console.warn("missing namespace information for ", t3.name, "=", t3.value, "on", e2, n3);
          }
        });
      }, yr.prototype.parseContainments = function(e2) {
        var t2 = this, n2 = this.body, i2 = this.element;
        g(e2, function(e3) {
          var r2 = i2.get(e3.name), o2 = e3.isReference;
          if (e3.isMany || (r2 = [r2]), e3.isBody) n2.push(new mr().build(e3, r2[0]));
          else if (vi(e3.type)) g(r2, function(i3) {
            n2.push(new vr(t2.addTagName(t2.nsPropertyTagName(e3))).build(e3, i3));
          });
          else if (o2) g(r2, function(i3) {
            n2.push(new fr(t2.addTagName(t2.nsPropertyTagName(e3))).build(i3));
          });
          else {
            var a2 = Vi(e3), s2 = function(e4) {
              return "property" === Gi(e4);
            }(e3);
            g(r2, function(i3) {
              var r3;
              r3 = a2 ? new gr(t2, e3) : s2 ? new yr(t2, e3) : new yr(t2), n2.push(r3.build(i3));
            });
          }
        });
      }, yr.prototype.getNamespaces = function(e2) {
        var t2, n2 = this.namespaces, i2 = this.parent;
        return n2 || (t2 = i2 && i2.getNamespaces(), e2 || !t2 ? this.namespaces = n2 = new sr(t2) : n2 = t2), n2;
      }, yr.prototype.logNamespace = function(e2, t2, n2) {
        var i2 = this.getNamespaces(n2), r2 = e2.uri, o2 = e2.prefix;
        return i2.byUri(r2) && !n2 || i2.add(e2, t2), i2.mapPrefix(o2, r2), e2;
      }, yr.prototype.logNamespaceUsed = function(e2, t2) {
        var n2, i2, r2, o2 = this.element.$model, a2 = this.getNamespaces(t2), s2 = e2.prefix, c2 = e2.uri;
        if (!s2 && !c2) return { localName: e2.localName };
        if (r2 = zi[s2] || o2 && (o2.getPackage(s2) || {}).uri, !(c2 = c2 || r2 || a2.uriByPrefix(s2))) throw new Error("no namespace uri given for prefix <" + s2 + ">");
        if (!(e2 = a2.byUri(c2))) {
          for (n2 = s2, i2 = 1; a2.uriByPrefix(n2); ) n2 = s2 + "_" + i2++;
          e2 = this.logNamespace({ prefix: n2, uri: c2 }, r2 === c2);
        }
        return s2 && a2.mapPrefix(s2, c2), e2;
      }, yr.prototype.parseAttributes = function(e2) {
        var t2 = this, n2 = this.element;
        g(e2, function(e3) {
          var i2 = n2.get(e3.name);
          if (e3.isReference) if (e3.isMany) {
            var r2 = [];
            g(i2, function(e4) {
              r2.push(e4.id);
            }), i2 = r2.join(" ");
          } else i2 = i2.id;
          t2.addAttribute(t2.nsAttributeName(e3), i2);
        });
      }, yr.prototype.addTagName = function(e2) {
        var t2 = this.logNamespaceUsed(e2);
        return this.getNamespaces().logUsed(t2), lr(e2);
      }, yr.prototype.addAttribute = function(e2, t2) {
        var n2 = this.attrs;
        d(t2) && (t2 = dr(t2, or, ur));
        var i2 = v(n2, function(t3) {
          return t3.name.localName === e2.localName && t3.name.uri === e2.uri && t3.name.prefix === e2.prefix;
        }), r2 = { name: e2, value: t2 };
        -1 !== i2 ? n2.splice(i2, 1, r2) : n2.push(r2);
      }, yr.prototype.serializeAttributes = function(e2) {
        var t2 = this.attrs, n2 = this.namespaces;
        n2 && (t2 = function(e3) {
          return e3.getUsed().filter(function(e4) {
            return "xml" !== e4.prefix;
          }).map(function(e4) {
            return { name: "xmlns" + (e4.prefix ? ":" + e4.prefix : ""), value: e4.uri };
          });
        }(n2).concat(t2)), g(t2, function(t3) {
          e2.append(" ").append(lr(t3.name)).append('="').append(t3.value).append('"');
        });
      }, yr.prototype.serializeTo = function(e2) {
        var t2 = this.body[0], n2 = t2 && t2.constructor !== mr;
        e2.appendIndent().append("<" + this.tagName), this.serializeAttributes(e2), e2.append(t2 ? ">" : " />"), t2 && (n2 && e2.appendNewLine().indent(), g(this.body, function(t3) {
          t3.serializeTo(e2);
        }), n2 && e2.unindent().appendIndent(), e2.append("</" + this.tagName + ">")), e2.appendNewLine();
      }, pr(gr, yr), gr.prototype.parseNsAttributes = function(e2) {
        var t2 = yr.prototype.parseNsAttributes.call(this, e2), n2 = e2.$descriptor;
        if (n2.name === this.propertyDescriptor.type) return t2;
        var i2 = this.typeNs = this.nsTagName(n2);
        this.getNamespaces().logUsed(this.typeNs);
        var r2 = e2.$model.getPackage(i2.uri), o2 = r2.xml && r2.xml.typePrefix || "";
        return this.addAttribute(this.nsAttributeName(Hi), (i2.prefix ? i2.prefix + ":" : "") + o2 + n2.ns.localName), t2;
      }, gr.prototype.isLocalNs = function(e2) {
        return e2.uri === (this.typeNs || this.ns).uri;
      }, wr.prototype = Object.create(Ei.prototype), wr.prototype.fromXML = function(e2, t2, n2) {
        d(t2) || (n2 = t2, t2 = "bpmn:Definitions");
        var i2 = new rr(L({ model: this, lax: true }, n2)), r2 = i2.handler(t2);
        return i2.fromXML(e2, r2);
      }, wr.prototype.toXML = function(e2, t2) {
        var n2 = new _r(t2);
        return new Promise(function(t3, i2) {
          try {
            return t3({ xml: n2.toXML(e2) });
          } catch (e3) {
            return i2(e3);
          }
        });
      };
      var Er = { bpmn: { name: "BPMN20", uri: "http://www.omg.org/spec/BPMN/20100524/MODEL", prefix: "bpmn", associations: [], types: [{ name: "Interface", superClass: ["RootElement"], properties: [{ name: "name", isAttr: true, type: "String" }, { name: "operations", type: "Operation", isMany: true }, { name: "implementationRef", isAttr: true, type: "String" }] }, { name: "Operation", superClass: ["BaseElement"], properties: [{ name: "name", isAttr: true, type: "String" }, { name: "inMessageRef", type: "Message", isReference: true }, { name: "outMessageRef", type: "Message", isReference: true }, { name: "errorRef", type: "Error", isMany: true, isReference: true }, { name: "implementationRef", isAttr: true, type: "String" }] }, { name: "EndPoint", superClass: ["RootElement"] }, { name: "Auditing", superClass: ["BaseElement"] }, { name: "GlobalTask", superClass: ["CallableElement"], properties: [{ name: "resources", type: "ResourceRole", isMany: true }] }, { name: "Monitoring", superClass: ["BaseElement"] }, { name: "Performer", superClass: ["ResourceRole"] }, { name: "Process", superClass: ["FlowElementsContainer", "CallableElement"], properties: [{ name: "processType", type: "ProcessType", isAttr: true }, { name: "isClosed", isAttr: true, type: "Boolean" }, { name: "auditing", type: "Auditing" }, { name: "monitoring", type: "Monitoring" }, { name: "properties", type: "Property", isMany: true }, { name: "laneSets", isMany: true, replaces: "FlowElementsContainer#laneSets", type: "LaneSet" }, { name: "flowElements", isMany: true, replaces: "FlowElementsContainer#flowElements", type: "FlowElement" }, { name: "artifacts", type: "Artifact", isMany: true }, { name: "resources", type: "ResourceRole", isMany: true }, { name: "correlationSubscriptions", type: "CorrelationSubscription", isMany: true }, { name: "supports", type: "Process", isMany: true, isReference: true }, { name: "definitionalCollaborationRef", type: "Collaboration", isAttr: true, isReference: true }, { name: "isExecutable", isAttr: true, type: "Boolean" }] }, { name: "LaneSet", superClass: ["BaseElement"], properties: [{ name: "lanes", type: "Lane", isMany: true }, { name: "name", isAttr: true, type: "String" }] }, { name: "Lane", superClass: ["BaseElement"], properties: [{ name: "name", isAttr: true, type: "String" }, { name: "partitionElementRef", type: "BaseElement", isAttr: true, isReference: true }, { name: "partitionElement", type: "BaseElement" }, { name: "flowNodeRef", type: "FlowNode", isMany: true, isReference: true }, { name: "childLaneSet", type: "LaneSet", xml: { serialize: "xsi:type" } }] }, { name: "GlobalManualTask", superClass: ["GlobalTask"] }, { name: "ManualTask", superClass: ["Task"] }, { name: "UserTask", superClass: ["Task"], properties: [{ name: "renderings", type: "Rendering", isMany: true }, { name: "implementation", isAttr: true, type: "String" }] }, { name: "Rendering", superClass: ["BaseElement"] }, { name: "HumanPerformer", superClass: ["Performer"] }, { name: "PotentialOwner", superClass: ["HumanPerformer"] }, { name: "GlobalUserTask", superClass: ["GlobalTask"], properties: [{ name: "implementation", isAttr: true, type: "String" }, { name: "renderings", type: "Rendering", isMany: true }] }, { name: "Gateway", isAbstract: true, superClass: ["FlowNode"], properties: [{ name: "gatewayDirection", type: "GatewayDirection", default: "Unspecified", isAttr: true }] }, { name: "EventBasedGateway", superClass: ["Gateway"], properties: [{ name: "instantiate", default: false, isAttr: true, type: "Boolean" }, { name: "eventGatewayType", type: "EventBasedGatewayType", isAttr: true, default: "Exclusive" }] }, { name: "ComplexGateway", superClass: ["Gateway"], properties: [{ name: "activationCondition", type: "Expression", xml: { serialize: "xsi:type" } }, { name: "default", type: "SequenceFlow", isAttr: true, isReference: true }] }, { name: "ExclusiveGateway", superClass: ["Gateway"], properties: [{ name: "default", type: "SequenceFlow", isAttr: true, isReference: true }] }, { name: "InclusiveGateway", superClass: ["Gateway"], properties: [{ name: "default", type: "SequenceFlow", isAttr: true, isReference: true }] }, { name: "ParallelGateway", superClass: ["Gateway"] }, { name: "RootElement", isAbstract: true, superClass: ["BaseElement"] }, { name: "Relationship", superClass: ["BaseElement"], properties: [{ name: "type", isAttr: true, type: "String" }, { name: "direction", type: "RelationshipDirection", isAttr: true }, { name: "source", isMany: true, isReference: true, type: "Element" }, { name: "target", isMany: true, isReference: true, type: "Element" }] }, { name: "BaseElement", isAbstract: true, properties: [{ name: "id", isAttr: true, type: "String", isId: true }, { name: "documentation", type: "Documentation", isMany: true }, { name: "extensionDefinitions", type: "ExtensionDefinition", isMany: true, isReference: true }, { name: "extensionElements", type: "ExtensionElements" }] }, { name: "Extension", properties: [{ name: "mustUnderstand", default: false, isAttr: true, type: "Boolean" }, { name: "definition", type: "ExtensionDefinition", isAttr: true, isReference: true }] }, { name: "ExtensionDefinition", properties: [{ name: "name", isAttr: true, type: "String" }, { name: "extensionAttributeDefinitions", type: "ExtensionAttributeDefinition", isMany: true }] }, { name: "ExtensionAttributeDefinition", properties: [{ name: "name", isAttr: true, type: "String" }, { name: "type", isAttr: true, type: "String" }, { name: "isReference", default: false, isAttr: true, type: "Boolean" }, { name: "extensionDefinition", type: "ExtensionDefinition", isAttr: true, isReference: true }] }, { name: "ExtensionElements", properties: [{ name: "valueRef", isAttr: true, isReference: true, type: "Element" }, { name: "values", type: "Element", isMany: true }, { name: "extensionAttributeDefinition", type: "ExtensionAttributeDefinition", isAttr: true, isReference: true }] }, { name: "Documentation", superClass: ["BaseElement"], properties: [{ name: "text", type: "String", isBody: true }, { name: "textFormat", default: "text/plain", isAttr: true, type: "String" }] }, { name: "Event", isAbstract: true, superClass: ["FlowNode", "InteractionNode"], properties: [{ name: "properties", type: "Property", isMany: true }] }, { name: "IntermediateCatchEvent", superClass: ["CatchEvent"] }, { name: "IntermediateThrowEvent", superClass: ["ThrowEvent"] }, { name: "EndEvent", superClass: ["ThrowEvent"] }, { name: "StartEvent", superClass: ["CatchEvent"], properties: [{ name: "isInterrupting", default: true, isAttr: true, type: "Boolean" }] }, { name: "ThrowEvent", isAbstract: true, superClass: ["Event"], properties: [{ name: "dataInputs", type: "DataInput", isMany: true }, { name: "dataInputAssociations", type: "DataInputAssociation", isMany: true }, { name: "inputSet", type: "InputSet" }, { name: "eventDefinitions", type: "EventDefinition", isMany: true }, { name: "eventDefinitionRef", type: "EventDefinition", isMany: true, isReference: true }] }, { name: "CatchEvent", isAbstract: true, superClass: ["Event"], properties: [{ name: "parallelMultiple", isAttr: true, type: "Boolean", default: false }, { name: "dataOutputs", type: "DataOutput", isMany: true }, { name: "dataOutputAssociations", type: "DataOutputAssociation", isMany: true }, { name: "outputSet", type: "OutputSet" }, { name: "eventDefinitions", type: "EventDefinition", isMany: true }, { name: "eventDefinitionRef", type: "EventDefinition", isMany: true, isReference: true }] }, { name: "BoundaryEvent", superClass: ["CatchEvent"], properties: [{ name: "cancelActivity", default: true, isAttr: true, type: "Boolean" }, { name: "attachedToRef", type: "Activity", isAttr: true, isReference: true }] }, { name: "EventDefinition", isAbstract: true, superClass: ["RootElement"] }, { name: "CancelEventDefinition", superClass: ["EventDefinition"] }, { name: "ErrorEventDefinition", superClass: ["EventDefinition"], properties: [{ name: "errorRef", type: "Error", isAttr: true, isReference: true }] }, { name: "TerminateEventDefinition", superClass: ["EventDefinition"] }, { name: "EscalationEventDefinition", superClass: ["EventDefinition"], properties: [{ name: "escalationRef", type: "Escalation", isAttr: true, isReference: true }] }, { name: "Escalation", properties: [{ name: "structureRef", type: "ItemDefinition", isAttr: true, isReference: true }, { name: "name", isAttr: true, type: "String" }, { name: "escalationCode", isAttr: true, type: "String" }], superClass: ["RootElement"] }, { name: "CompensateEventDefinition", superClass: ["EventDefinition"], properties: [{ name: "waitForCompletion", isAttr: true, type: "Boolean", default: true }, { name: "activityRef", type: "Activity", isAttr: true, isReference: true }] }, { name: "TimerEventDefinition", superClass: ["EventDefinition"], properties: [{ name: "timeDate", type: "Expression", xml: { serialize: "xsi:type" } }, { name: "timeCycle", type: "Expression", xml: { serialize: "xsi:type" } }, { name: "timeDuration", type: "Expression", xml: { serialize: "xsi:type" } }] }, { name: "LinkEventDefinition", superClass: ["EventDefinition"], properties: [{ name: "name", isAttr: true, type: "String" }, { name: "target", type: "LinkEventDefinition", isAttr: true, isReference: true }, { name: "source", type: "LinkEventDefinition", isMany: true, isReference: true }] }, { name: "MessageEventDefinition", superClass: ["EventDefinition"], properties: [{ name: "messageRef", type: "Message", isAttr: true, isReference: true }, { name: "operationRef", type: "Operation", isAttr: true, isReference: true }] }, { name: "ConditionalEventDefinition", superClass: ["EventDefinition"], properties: [{ name: "condition", type: "Expression", xml: { serialize: "xsi:type" } }] }, { name: "SignalEventDefinition", superClass: ["EventDefinition"], properties: [{ name: "signalRef", type: "Signal", isAttr: true, isReference: true }] }, { name: "Signal", superClass: ["RootElement"], properties: [{ name: "structureRef", type: "ItemDefinition", isAttr: true, isReference: true }, { name: "name", isAttr: true, type: "String" }] }, { name: "ImplicitThrowEvent", superClass: ["ThrowEvent"] }, { name: "DataState", superClass: ["BaseElement"], properties: [{ name: "name", isAttr: true, type: "String" }] }, { name: "ItemAwareElement", superClass: ["BaseElement"], properties: [{ name: "itemSubjectRef", type: "ItemDefinition", isAttr: true, isReference: true }, { name: "dataState", type: "DataState" }] }, { name: "DataAssociation", superClass: ["BaseElement"], properties: [{ name: "sourceRef", type: "ItemAwareElement", isMany: true, isReference: true }, { name: "targetRef", type: "ItemAwareElement", isReference: true }, { name: "transformation", type: "FormalExpression", xml: { serialize: "property" } }, { name: "assignment", type: "Assignment", isMany: true }] }, { name: "DataInput", superClass: ["ItemAwareElement"], properties: [{ name: "name", isAttr: true, type: "String" }, { name: "isCollection", default: false, isAttr: true, type: "Boolean" }, { name: "inputSetRef", type: "InputSet", isMany: true, isVirtual: true, isReference: true }, { name: "inputSetWithOptional", type: "InputSet", isMany: true, isVirtual: true, isReference: true }, { name: "inputSetWithWhileExecuting", type: "InputSet", isMany: true, isVirtual: true, isReference: true }] }, { name: "DataOutput", superClass: ["ItemAwareElement"], properties: [{ name: "name", isAttr: true, type: "String" }, { name: "isCollection", default: false, isAttr: true, type: "Boolean" }, { name: "outputSetRef", type: "OutputSet", isMany: true, isVirtual: true, isReference: true }, { name: "outputSetWithOptional", type: "OutputSet", isMany: true, isVirtual: true, isReference: true }, { name: "outputSetWithWhileExecuting", type: "OutputSet", isMany: true, isVirtual: true, isReference: true }] }, { name: "InputSet", superClass: ["BaseElement"], properties: [{ name: "name", isAttr: true, type: "String" }, { name: "dataInputRefs", type: "DataInput", isMany: true, isReference: true }, { name: "optionalInputRefs", type: "DataInput", isMany: true, isReference: true }, { name: "whileExecutingInputRefs", type: "DataInput", isMany: true, isReference: true }, { name: "outputSetRefs", type: "OutputSet", isMany: true, isReference: true }] }, { name: "OutputSet", superClass: ["BaseElement"], properties: [{ name: "dataOutputRefs", type: "DataOutput", isMany: true, isReference: true }, { name: "name", isAttr: true, type: "String" }, { name: "inputSetRefs", type: "InputSet", isMany: true, isReference: true }, { name: "optionalOutputRefs", type: "DataOutput", isMany: true, isReference: true }, { name: "whileExecutingOutputRefs", type: "DataOutput", isMany: true, isReference: true }] }, { name: "Property", superClass: ["ItemAwareElement"], properties: [{ name: "name", isAttr: true, type: "String" }] }, { name: "DataInputAssociation", superClass: ["DataAssociation"] }, { name: "DataOutputAssociation", superClass: ["DataAssociation"] }, { name: "InputOutputSpecification", superClass: ["BaseElement"], properties: [{ name: "dataInputs", type: "DataInput", isMany: true }, { name: "dataOutputs", type: "DataOutput", isMany: true }, { name: "inputSets", type: "InputSet", isMany: true }, { name: "outputSets", type: "OutputSet", isMany: true }] }, { name: "DataObject", superClass: ["FlowElement", "ItemAwareElement"], properties: [{ name: "isCollection", default: false, isAttr: true, type: "Boolean" }] }, { name: "InputOutputBinding", properties: [{ name: "inputDataRef", type: "InputSet", isAttr: true, isReference: true }, { name: "outputDataRef", type: "OutputSet", isAttr: true, isReference: true }, { name: "operationRef", type: "Operation", isAttr: true, isReference: true }] }, { name: "Assignment", superClass: ["BaseElement"], properties: [{ name: "from", type: "Expression", xml: { serialize: "xsi:type" } }, { name: "to", type: "Expression", xml: { serialize: "xsi:type" } }] }, { name: "DataStore", superClass: ["RootElement", "ItemAwareElement"], properties: [{ name: "name", isAttr: true, type: "String" }, { name: "capacity", isAttr: true, type: "Integer" }, { name: "isUnlimited", default: true, isAttr: true, type: "Boolean" }] }, { name: "DataStoreReference", superClass: ["ItemAwareElement", "FlowElement"], properties: [{ name: "dataStoreRef", type: "DataStore", isAttr: true, isReference: true }] }, { name: "DataObjectReference", superClass: ["ItemAwareElement", "FlowElement"], properties: [{ name: "dataObjectRef", type: "DataObject", isAttr: true, isReference: true }] }, { name: "ConversationLink", superClass: ["BaseElement"], properties: [{ name: "sourceRef", type: "InteractionNode", isAttr: true, isReference: true }, { name: "targetRef", type: "InteractionNode", isAttr: true, isReference: true }, { name: "name", isAttr: true, type: "String" }] }, { name: "ConversationAssociation", superClass: ["BaseElement"], properties: [{ name: "innerConversationNodeRef", type: "ConversationNode", isAttr: true, isReference: true }, { name: "outerConversationNodeRef", type: "ConversationNode", isAttr: true, isReference: true }] }, { name: "CallConversation", superClass: ["ConversationNode"], properties: [{ name: "calledCollaborationRef", type: "Collaboration", isAttr: true, isReference: true }, { name: "participantAssociations", type: "ParticipantAssociation", isMany: true }] }, { name: "Conversation", superClass: ["ConversationNode"] }, { name: "SubConversation", superClass: ["ConversationNode"], properties: [{ name: "conversationNodes", type: "ConversationNode", isMany: true }] }, { name: "ConversationNode", isAbstract: true, superClass: ["InteractionNode", "BaseElement"], properties: [{ name: "name", isAttr: true, type: "String" }, { name: "participantRef", type: "Participant", isMany: true, isReference: true }, { name: "messageFlowRefs", type: "MessageFlow", isMany: true, isReference: true }, { name: "correlationKeys", type: "CorrelationKey", isMany: true }] }, { name: "GlobalConversation", superClass: ["Collaboration"] }, { name: "PartnerEntity", superClass: ["RootElement"], properties: [{ name: "name", isAttr: true, type: "String" }, { name: "participantRef", type: "Participant", isMany: true, isReference: true }] }, { name: "PartnerRole", superClass: ["RootElement"], properties: [{ name: "name", isAttr: true, type: "String" }, { name: "participantRef", type: "Participant", isMany: true, isReference: true }] }, { name: "CorrelationProperty", superClass: ["RootElement"], properties: [{ name: "correlationPropertyRetrievalExpression", type: "CorrelationPropertyRetrievalExpression", isMany: true }, { name: "name", isAttr: true, type: "String" }, { name: "type", type: "ItemDefinition", isAttr: true, isReference: true }] }, { name: "Error", superClass: ["RootElement"], properties: [{ name: "structureRef", type: "ItemDefinition", isAttr: true, isReference: true }, { name: "name", isAttr: true, type: "String" }, { name: "errorCode", isAttr: true, type: "String" }] }, { name: "CorrelationKey", superClass: ["BaseElement"], properties: [{ name: "correlationPropertyRef", type: "CorrelationProperty", isMany: true, isReference: true }, { name: "name", isAttr: true, type: "String" }] }, { name: "Expression", superClass: ["BaseElement"], isAbstract: false, properties: [{ name: "body", isBody: true, type: "String" }] }, { name: "FormalExpression", superClass: ["Expression"], properties: [{ name: "language", isAttr: true, type: "String" }, { name: "evaluatesToTypeRef", type: "ItemDefinition", isAttr: true, isReference: true }] }, { name: "Message", superClass: ["RootElement"], properties: [{ name: "name", isAttr: true, type: "String" }, { name: "itemRef", type: "ItemDefinition", isAttr: true, isReference: true }] }, { name: "ItemDefinition", superClass: ["RootElement"], properties: [{ name: "itemKind", type: "ItemKind", isAttr: true }, { name: "structureRef", isAttr: true, type: "String" }, { name: "isCollection", default: false, isAttr: true, type: "Boolean" }, { name: "import", type: "Import", isAttr: true, isReference: true }] }, { name: "FlowElement", isAbstract: true, superClass: ["BaseElement"], properties: [{ name: "name", isAttr: true, type: "String" }, { name: "auditing", type: "Auditing" }, { name: "monitoring", type: "Monitoring" }, { name: "categoryValueRef", type: "CategoryValue", isMany: true, isReference: true }] }, { name: "SequenceFlow", superClass: ["FlowElement"], properties: [{ name: "isImmediate", isAttr: true, type: "Boolean" }, { name: "conditionExpression", type: "Expression", xml: { serialize: "xsi:type" } }, { name: "sourceRef", type: "FlowNode", isAttr: true, isReference: true }, { name: "targetRef", type: "FlowNode", isAttr: true, isReference: true }] }, { name: "FlowElementsContainer", isAbstract: true, superClass: ["BaseElement"], properties: [{ name: "laneSets", type: "LaneSet", isMany: true }, { name: "flowElements", type: "FlowElement", isMany: true }] }, { name: "CallableElement", isAbstract: true, superClass: ["RootElement"], properties: [{ name: "name", isAttr: true, type: "String" }, { name: "ioSpecification", type: "InputOutputSpecification", xml: { serialize: "property" } }, { name: "supportedInterfaceRef", type: "Interface", isMany: true, isReference: true }, { name: "ioBinding", type: "InputOutputBinding", isMany: true, xml: { serialize: "property" } }] }, { name: "FlowNode", isAbstract: true, superClass: ["FlowElement"], properties: [{ name: "incoming", type: "SequenceFlow", isMany: true, isReference: true }, { name: "outgoing", type: "SequenceFlow", isMany: true, isReference: true }, { name: "lanes", type: "Lane", isMany: true, isVirtual: true, isReference: true }] }, { name: "CorrelationPropertyRetrievalExpression", superClass: ["BaseElement"], properties: [{ name: "messagePath", type: "FormalExpression" }, { name: "messageRef", type: "Message", isAttr: true, isReference: true }] }, { name: "CorrelationPropertyBinding", superClass: ["BaseElement"], properties: [{ name: "dataPath", type: "FormalExpression" }, { name: "correlationPropertyRef", type: "CorrelationProperty", isAttr: true, isReference: true }] }, { name: "Resource", superClass: ["RootElement"], properties: [{ name: "name", isAttr: true, type: "String" }, { name: "resourceParameters", type: "ResourceParameter", isMany: true }] }, { name: "ResourceParameter", superClass: ["BaseElement"], properties: [{ name: "name", isAttr: true, type: "String" }, { name: "isRequired", isAttr: true, type: "Boolean" }, { name: "type", type: "ItemDefinition", isAttr: true, isReference: true }] }, { name: "CorrelationSubscription", superClass: ["BaseElement"], properties: [{ name: "correlationKeyRef", type: "CorrelationKey", isAttr: true, isReference: true }, { name: "correlationPropertyBinding", type: "CorrelationPropertyBinding", isMany: true }] }, { name: "MessageFlow", superClass: ["BaseElement"], properties: [{ name: "name", isAttr: true, type: "String" }, { name: "sourceRef", type: "InteractionNode", isAttr: true, isReference: true }, { name: "targetRef", type: "InteractionNode", isAttr: true, isReference: true }, { name: "messageRef", type: "Message", isAttr: true, isReference: true }] }, { name: "MessageFlowAssociation", superClass: ["BaseElement"], properties: [{ name: "innerMessageFlowRef", type: "MessageFlow", isAttr: true, isReference: true }, { name: "outerMessageFlowRef", type: "MessageFlow", isAttr: true, isReference: true }] }, { name: "InteractionNode", isAbstract: true, properties: [{ name: "incomingConversationLinks", type: "ConversationLink", isMany: true, isVirtual: true, isReference: true }, { name: "outgoingConversationLinks", type: "ConversationLink", isMany: true, isVirtual: true, isReference: true }] }, { name: "Participant", superClass: ["InteractionNode", "BaseElement"], properties: [{ name: "name", isAttr: true, type: "String" }, { name: "interfaceRef", type: "Interface", isMany: true, isReference: true }, { name: "participantMultiplicity", type: "ParticipantMultiplicity" }, { name: "endPointRefs", type: "EndPoint", isMany: true, isReference: true }, { name: "processRef", type: "Process", isAttr: true, isReference: true }] }, { name: "ParticipantAssociation", superClass: ["BaseElement"], properties: [{ name: "innerParticipantRef", type: "Participant", isAttr: true, isReference: true }, { name: "outerParticipantRef", type: "Participant", isAttr: true, isReference: true }] }, { name: "ParticipantMultiplicity", properties: [{ name: "minimum", default: 0, isAttr: true, type: "Integer" }, { name: "maximum", default: 1, isAttr: true, type: "Integer" }], superClass: ["BaseElement"] }, { name: "Collaboration", superClass: ["RootElement"], properties: [{ name: "name", isAttr: true, type: "String" }, { name: "isClosed", isAttr: true, type: "Boolean" }, { name: "participants", type: "Participant", isMany: true }, { name: "messageFlows", type: "MessageFlow", isMany: true }, { name: "artifacts", type: "Artifact", isMany: true }, { name: "conversations", type: "ConversationNode", isMany: true }, { name: "conversationAssociations", type: "ConversationAssociation" }, { name: "participantAssociations", type: "ParticipantAssociation", isMany: true }, { name: "messageFlowAssociations", type: "MessageFlowAssociation", isMany: true }, { name: "correlationKeys", type: "CorrelationKey", isMany: true }, { name: "choreographyRef", type: "Choreography", isMany: true, isReference: true }, { name: "conversationLinks", type: "ConversationLink", isMany: true }] }, { name: "ChoreographyActivity", isAbstract: true, superClass: ["FlowNode"], properties: [{ name: "participantRef", type: "Participant", isMany: true, isReference: true }, { name: "initiatingParticipantRef", type: "Participant", isAttr: true, isReference: true }, { name: "correlationKeys", type: "CorrelationKey", isMany: true }, { name: "loopType", type: "ChoreographyLoopType", default: "None", isAttr: true }] }, { name: "CallChoreography", superClass: ["ChoreographyActivity"], properties: [{ name: "calledChoreographyRef", type: "Choreography", isAttr: true, isReference: true }, { name: "participantAssociations", type: "ParticipantAssociation", isMany: true }] }, { name: "SubChoreography", superClass: ["ChoreographyActivity", "FlowElementsContainer"], properties: [{ name: "artifacts", type: "Artifact", isMany: true }] }, { name: "ChoreographyTask", superClass: ["ChoreographyActivity"], properties: [{ name: "messageFlowRef", type: "MessageFlow", isMany: true, isReference: true }] }, { name: "Choreography", superClass: ["Collaboration", "FlowElementsContainer"] }, { name: "GlobalChoreographyTask", superClass: ["Choreography"], properties: [{ name: "initiatingParticipantRef", type: "Participant", isAttr: true, isReference: true }] }, { name: "TextAnnotation", superClass: ["Artifact"], properties: [{ name: "text", type: "String" }, { name: "textFormat", default: "text/plain", isAttr: true, type: "String" }] }, { name: "Group", superClass: ["Artifact"], properties: [{ name: "categoryValueRef", type: "CategoryValue", isAttr: true, isReference: true }] }, { name: "Association", superClass: ["Artifact"], properties: [{ name: "associationDirection", type: "AssociationDirection", isAttr: true }, { name: "sourceRef", type: "BaseElement", isAttr: true, isReference: true }, { name: "targetRef", type: "BaseElement", isAttr: true, isReference: true }] }, { name: "Category", superClass: ["RootElement"], properties: [{ name: "categoryValue", type: "CategoryValue", isMany: true }, { name: "name", isAttr: true, type: "String" }] }, { name: "Artifact", isAbstract: true, superClass: ["BaseElement"] }, { name: "CategoryValue", superClass: ["BaseElement"], properties: [{ name: "categorizedFlowElements", type: "FlowElement", isMany: true, isVirtual: true, isReference: true }, { name: "value", isAttr: true, type: "String" }] }, { name: "Activity", isAbstract: true, superClass: ["FlowNode"], properties: [{ name: "isForCompensation", default: false, isAttr: true, type: "Boolean" }, { name: "default", type: "SequenceFlow", isAttr: true, isReference: true }, { name: "ioSpecification", type: "InputOutputSpecification", xml: { serialize: "property" } }, { name: "boundaryEventRefs", type: "BoundaryEvent", isMany: true, isReference: true }, { name: "properties", type: "Property", isMany: true }, { name: "dataInputAssociations", type: "DataInputAssociation", isMany: true }, { name: "dataOutputAssociations", type: "DataOutputAssociation", isMany: true }, { name: "startQuantity", default: 1, isAttr: true, type: "Integer" }, { name: "resources", type: "ResourceRole", isMany: true }, { name: "completionQuantity", default: 1, isAttr: true, type: "Integer" }, { name: "loopCharacteristics", type: "LoopCharacteristics" }] }, { name: "ServiceTask", superClass: ["Task"], properties: [{ name: "implementation", isAttr: true, type: "String" }, { name: "operationRef", type: "Operation", isAttr: true, isReference: true }] }, { name: "SubProcess", superClass: ["Activity", "FlowElementsContainer", "InteractionNode"], properties: [{ name: "triggeredByEvent", default: false, isAttr: true, type: "Boolean" }, { name: "artifacts", type: "Artifact", isMany: true }] }, { name: "LoopCharacteristics", isAbstract: true, superClass: ["BaseElement"] }, { name: "MultiInstanceLoopCharacteristics", superClass: ["LoopCharacteristics"], properties: [{ name: "isSequential", default: false, isAttr: true, type: "Boolean" }, { name: "behavior", type: "MultiInstanceBehavior", default: "All", isAttr: true }, { name: "loopCardinality", type: "Expression", xml: { serialize: "xsi:type" } }, { name: "loopDataInputRef", type: "ItemAwareElement", isReference: true }, { name: "loopDataOutputRef", type: "ItemAwareElement", isReference: true }, { name: "inputDataItem", type: "DataInput", xml: { serialize: "property" } }, { name: "outputDataItem", type: "DataOutput", xml: { serialize: "property" } }, { name: "complexBehaviorDefinition", type: "ComplexBehaviorDefinition", isMany: true }, { name: "completionCondition", type: "Expression", xml: { serialize: "xsi:type" } }, { name: "oneBehaviorEventRef", type: "EventDefinition", isAttr: true, isReference: true }, { name: "noneBehaviorEventRef", type: "EventDefinition", isAttr: true, isReference: true }] }, { name: "StandardLoopCharacteristics", superClass: ["LoopCharacteristics"], properties: [{ name: "testBefore", default: false, isAttr: true, type: "Boolean" }, { name: "loopCondition", type: "Expression", xml: { serialize: "xsi:type" } }, { name: "loopMaximum", type: "Integer", isAttr: true }] }, { name: "CallActivity", superClass: ["Activity", "InteractionNode"], properties: [{ name: "calledElement", type: "String", isAttr: true }] }, { name: "Task", superClass: ["Activity", "InteractionNode"] }, { name: "SendTask", superClass: ["Task"], properties: [{ name: "implementation", isAttr: true, type: "String" }, { name: "operationRef", type: "Operation", isAttr: true, isReference: true }, { name: "messageRef", type: "Message", isAttr: true, isReference: true }] }, { name: "ReceiveTask", superClass: ["Task"], properties: [{ name: "implementation", isAttr: true, type: "String" }, { name: "instantiate", default: false, isAttr: true, type: "Boolean" }, { name: "operationRef", type: "Operation", isAttr: true, isReference: true }, { name: "messageRef", type: "Message", isAttr: true, isReference: true }] }, { name: "ScriptTask", superClass: ["Task"], properties: [{ name: "scriptFormat", isAttr: true, type: "String" }, { name: "script", type: "String" }] }, { name: "BusinessRuleTask", superClass: ["Task"], properties: [{ name: "implementation", isAttr: true, type: "String" }] }, { name: "AdHocSubProcess", superClass: ["SubProcess"], properties: [{ name: "completionCondition", type: "Expression", xml: { serialize: "xsi:type" } }, { name: "ordering", type: "AdHocOrdering", isAttr: true }, { name: "cancelRemainingInstances", default: true, isAttr: true, type: "Boolean" }] }, { name: "Transaction", superClass: ["SubProcess"], properties: [{ name: "protocol", isAttr: true, type: "String" }, { name: "method", isAttr: true, type: "String" }] }, { name: "GlobalScriptTask", superClass: ["GlobalTask"], properties: [{ name: "scriptLanguage", isAttr: true, type: "String" }, { name: "script", isAttr: true, type: "String" }] }, { name: "GlobalBusinessRuleTask", superClass: ["GlobalTask"], properties: [{ name: "implementation", isAttr: true, type: "String" }] }, { name: "ComplexBehaviorDefinition", superClass: ["BaseElement"], properties: [{ name: "condition", type: "FormalExpression" }, { name: "event", type: "ImplicitThrowEvent" }] }, { name: "ResourceRole", superClass: ["BaseElement"], properties: [{ name: "resourceRef", type: "Resource", isReference: true }, { name: "resourceParameterBindings", type: "ResourceParameterBinding", isMany: true }, { name: "resourceAssignmentExpression", type: "ResourceAssignmentExpression" }, { name: "name", isAttr: true, type: "String" }] }, { name: "ResourceParameterBinding", properties: [{ name: "expression", type: "Expression", xml: { serialize: "xsi:type" } }, { name: "parameterRef", type: "ResourceParameter", isAttr: true, isReference: true }], superClass: ["BaseElement"] }, { name: "ResourceAssignmentExpression", properties: [{ name: "expression", type: "Expression", xml: { serialize: "xsi:type" } }], superClass: ["BaseElement"] }, { name: "Import", properties: [{ name: "importType", isAttr: true, type: "String" }, { name: "location", isAttr: true, type: "String" }, { name: "namespace", isAttr: true, type: "String" }] }, { name: "Definitions", superClass: ["BaseElement"], properties: [{ name: "name", isAttr: true, type: "String" }, { name: "targetNamespace", isAttr: true, type: "String" }, { name: "expressionLanguage", default: "http://www.w3.org/1999/XPath", isAttr: true, type: "String" }, { name: "typeLanguage", default: "http://www.w3.org/2001/XMLSchema", isAttr: true, type: "String" }, { name: "imports", type: "Import", isMany: true }, { name: "extensions", type: "Extension", isMany: true }, { name: "rootElements", type: "RootElement", isMany: true }, { name: "diagrams", isMany: true, type: "bpmndi:BPMNDiagram" }, { name: "exporter", isAttr: true, type: "String" }, { name: "relationships", type: "Relationship", isMany: true }, { name: "exporterVersion", isAttr: true, type: "String" }] }], enumerations: [{ name: "ProcessType", literalValues: [{ name: "None" }, { name: "Public" }, { name: "Private" }] }, { name: "GatewayDirection", literalValues: [{ name: "Unspecified" }, { name: "Converging" }, { name: "Diverging" }, { name: "Mixed" }] }, { name: "EventBasedGatewayType", literalValues: [{ name: "Parallel" }, { name: "Exclusive" }] }, { name: "RelationshipDirection", literalValues: [{ name: "None" }, { name: "Forward" }, { name: "Backward" }, { name: "Both" }] }, { name: "ItemKind", literalValues: [{ name: "Physical" }, { name: "Information" }] }, { name: "ChoreographyLoopType", literalValues: [{ name: "None" }, { name: "Standard" }, { name: "MultiInstanceSequential" }, { name: "MultiInstanceParallel" }] }, { name: "AssociationDirection", literalValues: [{ name: "None" }, { name: "One" }, { name: "Both" }] }, { name: "MultiInstanceBehavior", literalValues: [{ name: "None" }, { name: "One" }, { name: "All" }, { name: "Complex" }] }, { name: "AdHocOrdering", literalValues: [{ name: "Parallel" }, { name: "Sequential" }] }], xml: { tagAlias: "lowerCase", typePrefix: "t" } }, bpmndi: { name: "BPMNDI", uri: "http://www.omg.org/spec/BPMN/20100524/DI", prefix: "bpmndi", types: [{ name: "BPMNDiagram", properties: [{ name: "plane", type: "BPMNPlane", redefines: "di:Diagram#rootElement" }, { name: "labelStyle", type: "BPMNLabelStyle", isMany: true }], superClass: ["di:Diagram"] }, { name: "BPMNPlane", properties: [{ name: "bpmnElement", isAttr: true, isReference: true, type: "bpmn:BaseElement", redefines: "di:DiagramElement#modelElement" }], superClass: ["di:Plane"] }, { name: "BPMNShape", properties: [{ name: "bpmnElement", isAttr: true, isReference: true, type: "bpmn:BaseElement", redefines: "di:DiagramElement#modelElement" }, { name: "isHorizontal", isAttr: true, type: "Boolean" }, { name: "isExpanded", isAttr: true, type: "Boolean" }, { name: "isMarkerVisible", isAttr: true, type: "Boolean" }, { name: "label", type: "BPMNLabel" }, { name: "isMessageVisible", isAttr: true, type: "Boolean" }, { name: "participantBandKind", type: "ParticipantBandKind", isAttr: true }, { name: "choreographyActivityShape", type: "BPMNShape", isAttr: true, isReference: true }], superClass: ["di:LabeledShape"] }, { name: "BPMNEdge", properties: [{ name: "label", type: "BPMNLabel" }, { name: "bpmnElement", isAttr: true, isReference: true, type: "bpmn:BaseElement", redefines: "di:DiagramElement#modelElement" }, { name: "sourceElement", isAttr: true, isReference: true, type: "di:DiagramElement", redefines: "di:Edge#source" }, { name: "targetElement", isAttr: true, isReference: true, type: "di:DiagramElement", redefines: "di:Edge#target" }, { name: "messageVisibleKind", type: "MessageVisibleKind", isAttr: true, default: "initiating" }], superClass: ["di:LabeledEdge"] }, { name: "BPMNLabel", properties: [{ name: "labelStyle", type: "BPMNLabelStyle", isAttr: true, isReference: true, redefines: "di:DiagramElement#style" }], superClass: ["di:Label"] }, { name: "BPMNLabelStyle", properties: [{ name: "font", type: "dc:Font" }], superClass: ["di:Style"] }], enumerations: [{ name: "ParticipantBandKind", literalValues: [{ name: "top_initiating" }, { name: "middle_initiating" }, { name: "bottom_initiating" }, { name: "top_non_initiating" }, { name: "middle_non_initiating" }, { name: "bottom_non_initiating" }] }, { name: "MessageVisibleKind", literalValues: [{ name: "initiating" }, { name: "non_initiating" }] }], associations: [] }, dc: { name: "DC", uri: "http://www.omg.org/spec/DD/20100524/DC", prefix: "dc", types: [{ name: "Boolean" }, { name: "Integer" }, { name: "Real" }, { name: "String" }, { name: "Font", properties: [{ name: "name", type: "String", isAttr: true }, { name: "size", type: "Real", isAttr: true }, { name: "isBold", type: "Boolean", isAttr: true }, { name: "isItalic", type: "Boolean", isAttr: true }, { name: "isUnderline", type: "Boolean", isAttr: true }, { name: "isStrikeThrough", type: "Boolean", isAttr: true }] }, { name: "Point", properties: [{ name: "x", type: "Real", default: "0", isAttr: true }, { name: "y", type: "Real", default: "0", isAttr: true }] }, { name: "Bounds", properties: [{ name: "x", type: "Real", default: "0", isAttr: true }, { name: "y", type: "Real", default: "0", isAttr: true }, { name: "width", type: "Real", isAttr: true }, { name: "height", type: "Real", isAttr: true }] }], associations: [] }, di: { name: "DI", uri: "http://www.omg.org/spec/DD/20100524/DI", prefix: "di", types: [{ name: "DiagramElement", isAbstract: true, properties: [{ name: "id", isAttr: true, isId: true, type: "String" }, { name: "extension", type: "Extension" }, { name: "owningDiagram", type: "Diagram", isReadOnly: true, isVirtual: true, isReference: true }, { name: "owningElement", type: "DiagramElement", isReadOnly: true, isVirtual: true, isReference: true }, { name: "modelElement", isReadOnly: true, isVirtual: true, isReference: true, type: "Element" }, { name: "style", type: "Style", isReadOnly: true, isVirtual: true, isReference: true }, { name: "ownedElement", type: "DiagramElement", isReadOnly: true, isMany: true, isVirtual: true }] }, { name: "Node", isAbstract: true, superClass: ["DiagramElement"] }, { name: "Edge", isAbstract: true, superClass: ["DiagramElement"], properties: [{ name: "source", type: "DiagramElement", isReadOnly: true, isVirtual: true, isReference: true }, { name: "target", type: "DiagramElement", isReadOnly: true, isVirtual: true, isReference: true }, { name: "waypoint", isUnique: false, isMany: true, type: "dc:Point", xml: { serialize: "xsi:type" } }] }, { name: "Diagram", isAbstract: true, properties: [{ name: "id", isAttr: true, isId: true, type: "String" }, { name: "rootElement", type: "DiagramElement", isReadOnly: true, isVirtual: true }, { name: "name", isAttr: true, type: "String" }, { name: "documentation", isAttr: true, type: "String" }, { name: "resolution", isAttr: true, type: "Real" }, { name: "ownedStyle", type: "Style", isReadOnly: true, isMany: true, isVirtual: true }] }, { name: "Shape", isAbstract: true, superClass: ["Node"], properties: [{ name: "bounds", type: "dc:Bounds" }] }, { name: "Plane", isAbstract: true, superClass: ["Node"], properties: [{ name: "planeElement", type: "DiagramElement", subsettedProperty: "DiagramElement-ownedElement", isMany: true }] }, { name: "LabeledEdge", isAbstract: true, superClass: ["Edge"], properties: [{ name: "ownedLabel", type: "Label", isReadOnly: true, subsettedProperty: "DiagramElement-ownedElement", isMany: true, isVirtual: true }] }, { name: "LabeledShape", isAbstract: true, superClass: ["Shape"], properties: [{ name: "ownedLabel", type: "Label", isReadOnly: true, subsettedProperty: "DiagramElement-ownedElement", isMany: true, isVirtual: true }] }, { name: "Label", isAbstract: true, superClass: ["Node"], properties: [{ name: "bounds", type: "dc:Bounds" }] }, { name: "Style", isAbstract: true, properties: [{ name: "id", isAttr: true, isId: true, type: "String" }] }, { name: "Extension", properties: [{ name: "values", isMany: true, type: "Element" }] }], associations: [], xml: { tagAlias: "lowerCase" } }, bioc: { name: "bpmn.io colors for BPMN", uri: "http://bpmn.io/schema/bpmn/biocolor/1.0", prefix: "bioc", types: [{ name: "ColoredShape", extends: ["bpmndi:BPMNShape"], properties: [{ name: "stroke", isAttr: true, type: "String" }, { name: "fill", isAttr: true, type: "String" }] }, { name: "ColoredEdge", extends: ["bpmndi:BPMNEdge"], properties: [{ name: "stroke", isAttr: true, type: "String" }, { name: "fill", isAttr: true, type: "String" }] }], enumerations: [], associations: [] }, color: { name: "BPMN in Color", uri: "http://www.omg.org/spec/BPMN/non-normative/color/1.0", prefix: "color", types: [{ name: "ColoredLabel", extends: ["bpmndi:BPMNLabel"], properties: [{ name: "color", isAttr: true, type: "String" }] }, { name: "ColoredShape", extends: ["bpmndi:BPMNShape"], properties: [{ name: "background-color", isAttr: true, type: "String" }, { name: "border-color", isAttr: true, type: "String" }] }, { name: "ColoredEdge", extends: ["bpmndi:BPMNEdge"], properties: [{ name: "border-color", isAttr: true, type: "String" }] }], enumerations: [], associations: [] } };
      function Sr(e2, t2) {
        return new wr(L({}, Er, e2), t2);
      }
      function Cr(e2) {
        return e2 ? "<" + e2.$type + (e2.id ? ' id="' + e2.id : "") + '" />' : "<null>";
      }
      function Rr(e2) {
        return function() {
          if (!window.Promise) throw new Error("Promises is not supported in this environment. Please polyfill Promise.");
          var t2 = arguments.length;
          if (!(t2 >= 1 && h(arguments[t2 - 1]))) return e2.apply(this, arguments);
          var n2 = arguments[t2 - 1];
          console.warn(new Error("Passing callbacks to " + e2.name + " is deprecated and will be removed in a future major release. Please switch to promises: https://bpmn.io/l/moving-to-promises.html"));
          var i2 = Array.prototype.slice.call(arguments, 0, -1);
          e2.apply(this, i2).then(function(e3) {
            var t3 = Object.keys(e3)[0];
            return n2(null, e3[t3]);
          }, function(e3) {
            return n2(e3, e3.warnings);
          });
        };
      }
      var Pr = "Tried to access di from the businessObject. The di is available through the diagram element only. For more information, see https://github.com/bpmn-io/bpmn-js/issues/1472";
      function Tr(e2) {
        f(e2, "di") || Object.defineProperty(e2, "di", { enumerable: false, get: function() {
          throw new Error(Pr);
        } });
      }
      function kr(e2, t2) {
        return e2.$instanceOf(t2);
      }
      function Ar(e2, t2) {
        var n2 = {}, i2 = [], r2 = {};
        function o2(e3, t3) {
          return function(n3) {
            e3(n3, t3);
          };
        }
        function a2(e3) {
          n2[e3.id] = e3;
        }
        function s2(n3, i3) {
          try {
            var o3 = r2[n3.id] && function(n4, i4) {
              if (n4.gfx) throw new Error(t2("already rendered {element}", { element: Cr(n4) }));
              return e2.element(n4, r2[n4.id], i4);
            }(n3, i3);
            return a2(n3), o3;
          } catch (e3) {
            c2(e3.message, { element: n3, error: e3 }), console.error(t2("failed to import {element}", { element: Cr(n3) })), console.error(e3);
          }
        }
        function c2(t3, n3) {
          e2.error(t3, n3);
        }
        var p2 = this.registerDi = function(e3) {
          var n3 = e3.bpmnElement;
          n3 ? r2[n3.id] ? c2(t2("multiple DI elements defined for {element}", { element: Cr(n3) }), { element: n3 }) : (r2[n3.id] = e3, Tr(n3)) : c2(t2("no bpmnElement referenced in {element}", { element: Cr(e3) }), { element: e3 });
        };
        function l2(e3) {
          var t3;
          t3 = e3.plane, p2(t3), g(t3.planeElement, u2);
        }
        function u2(e3) {
          p2(e3);
        }
        this.handleDefinitions = function(a3, s3) {
          var u3 = a3.diagrams;
          if (s3 && -1 === u3.indexOf(s3)) throw new Error(t2("diagram not part of bpmn:Definitions"));
          if (!s3 && u3 && u3.length && (s3 = u3[0]), !s3) throw new Error(t2("no diagram to display"));
          r2 = {}, l2(s3);
          var v3 = s3.plane;
          if (!v3) throw new Error(t2("no plane for {element}", { element: Cr(s3) }));
          var b3 = v3.bpmnElement;
          if (!b3) {
            if (b3 = function(e3) {
              return m(e3.rootElements, function(e4) {
                return kr(e4, "bpmn:Process") || kr(e4, "bpmn:Collaboration");
              });
            }(a3), !b3) throw new Error(t2("no process or collaboration to display"));
            c2(t2("correcting missing bpmnElement on {plane} to {rootElement}", { plane: Cr(v3), rootElement: Cr(b3) })), v3.bpmnElement = b3, p2(v3);
          }
          var x3, _3, E3 = function(t3, n3) {
            return e2.root(t3, r2[t3.id], n3);
          }(b3, v3);
          if (kr(b3, "bpmn:Process") || kr(b3, "bpmn:SubProcess")) d2(b3, E3);
          else {
            if (!kr(b3, "bpmn:Collaboration")) throw new Error(t2("unsupported bpmnElement for {plane}: {rootElement}", { plane: Cr(v3), rootElement: Cr(b3) }));
            _3 = E3, g((x3 = b3).participants, o2(A2, _3)), w2(x3.artifacts, _3), i2.push(function() {
              !function(e3, t3) {
                g(e3, o2(f2, t3));
              }(x3.messageFlows, _3);
            }), function(e3, t3) {
              var i3 = y(e3, function(e4) {
                return !n2[e4.id] && kr(e4, "bpmn:Process") && e4.laneSets;
              });
              i3.forEach(o2(d2, t3));
            }(a3.rootElements, E3);
          }
          h2(i2);
        };
        var h2 = this.handleDeferred = function() {
          for (; i2.length; ) i2.shift()();
        };
        function d2(e3, t3) {
          k2(e3, t3), E2(e3.ioSpecification, t3), w2(e3.artifacts, t3), a2(e3);
        }
        function f2(e3, t3) {
          s2(e3, t3);
        }
        function v2(e3, t3) {
          s2(e3, t3);
        }
        function b2(e3, t3) {
          s2(e3, t3);
        }
        function x2(e3, t3) {
          s2(e3, t3);
        }
        function _2(e3, t3) {
          s2(e3, t3);
        }
        function w2(e3, t3) {
          g(e3, function(e4) {
            kr(e4, "bpmn:Association") ? i2.push(function() {
              _2(e4, t3);
            }) : _2(e4, t3);
          });
        }
        function E2(e3, t3) {
          e3 && (g(e3.dataInputs, o2(b2, t3)), g(e3.dataOutputs, o2(x2, t3)));
        }
        var S2 = this.handleSubProcess = function(e3, t3) {
          k2(e3, t3), w2(e3.artifacts, t3);
        };
        function C2(e3, t3) {
          var n3 = s2(e3, t3);
          kr(e3, "bpmn:SubProcess") && S2(e3, n3 || t3), kr(e3, "bpmn:Activity") && E2(e3.ioSpecification, t3), i2.push(function() {
            g(e3.dataInputAssociations, o2(v2, t3)), g(e3.dataOutputAssociations, o2(v2, t3));
          });
        }
        function R2(e3, t3) {
          s2(e3, t3);
        }
        function P2(e3, t3) {
          i2.push(function() {
            var n3 = s2(e3, t3);
            e3.childLaneSet && T2(e3.childLaneSet, n3 || t3), function(e4) {
              g(e4.flowNodeRef, function(t4) {
                var n4 = t4.get("lanes");
                n4 && n4.push(e4);
              });
            }(e3);
          });
        }
        function T2(e3, t3) {
          g(e3.lanes, o2(P2, t3));
        }
        function k2(e3, n3) {
          !function(e4, n4) {
            g(e4, function(e5) {
              kr(e5, "bpmn:SequenceFlow") ? i2.push(function() {
                !function(e6, t3) {
                  s2(e6, t3);
                }(e5, n4);
              }) : kr(e5, "bpmn:BoundaryEvent") ? i2.unshift(function() {
                C2(e5, n4);
              }) : kr(e5, "bpmn:FlowNode") ? C2(e5, n4) : kr(e5, "bpmn:DataObject") || (kr(e5, "bpmn:DataStoreReference") || kr(e5, "bpmn:DataObjectReference") ? R2(e5, n4) : c2(t2("unrecognized flowElement {element} in context {context}", { element: Cr(e5), context: n4 ? Cr(n4.businessObject) : "null" }), { element: e5, context: n4 }));
            });
          }(e3.flowElements, n3), e3.laneSets && function(e4, t3) {
            g(e4, o2(T2, t3));
          }(e3.laneSets, n3);
        }
        function A2(e3, t3) {
          var n3 = s2(e3, t3), i3 = e3.processRef;
          i3 && d2(i3, n3 || t3);
        }
      }
      function Mr(e2, t2) {
        var n2 = Br(e2);
        return n2 && "function" == typeof n2.$instanceOf && n2.$instanceOf(t2);
      }
      function Dr(e2, t2) {
        return w(t2, function(t3) {
          return Mr(e2, t3);
        });
      }
      function Br(e2) {
        return e2 && e2.businessObject || e2;
      }
      function Nr(e2) {
        return e2 && e2.di;
      }
      function Or(e2, t2, n2) {
        var i2, r2, o2, a2, s2 = [];
        function c2(e3, t3) {
          var n3 = new Ar({ root: function(e4, t4) {
            return i2.add(e4, t4);
          }, element: function(e4, t4, n4) {
            return i2.add(e4, t4, n4);
          }, error: function(e4, t4) {
            s2.push({ message: e4, context: t4 });
          } }, o2);
          t3 = t3 || e3.diagrams && e3.diagrams[0];
          var r3 = function(e4, t4) {
            if (!t4) return;
            var n4, i3 = t4.plane.bpmnElement, r4 = i3;
            Mr(i3, "bpmn:Process") || Mr(i3, "bpmn:Collaboration") || (r4 = function(e5) {
              var t5 = e5;
              for (; t5; ) {
                if (Mr(t5, "bpmn:Process")) return t5;
                t5 = t5.$parent;
              }
            }(i3));
            n4 = Mr(r4, "bpmn:Collaboration") ? r4 : m(e4.rootElements, function(e5) {
              if (Mr(e5, "bpmn:Collaboration")) return m(e5.participants, function(e6) {
                return e6.processRef === r4;
              });
            });
            var o3 = [r4];
            n4 && (o3 = E(n4.participants, function(e5) {
              return e5.processRef;
            })).push(n4);
            var a3 = jr(o3), s3 = [t4], c4 = [i3];
            return g(e4.diagrams, function(e5) {
              var t5 = e5.plane.bpmnElement;
              -1 !== a3.indexOf(t5) && -1 === c4.indexOf(t5) && (s3.push(e5), c4.push(t5));
            }), s3;
          }(e3, t3);
          if (!r3) throw new Error(o2("no diagram to display"));
          g(r3, function(t4) {
            n3.handleDefinitions(e3, t4);
          });
          var c3 = t3.plane.bpmnElement.id;
          a2.setRootElement(a2.findRoot(c3 + "_plane") || a2.findRoot(c3));
        }
        return new Promise(function(p2, l2) {
          try {
            return i2 = e2.get("bpmnImporter"), r2 = e2.get("eventBus"), o2 = e2.get("translate"), a2 = e2.get("canvas"), r2.fire("import.render.start", { definitions: t2 }), c2(t2, n2), r2.fire("import.render.complete", { error: void 0, warnings: s2 }), p2({ warnings: s2 });
          } catch (e3) {
            return e3.warnings = s2, l2(e3);
          }
        });
      }
      function jr(e2) {
        var t2 = [];
        return g(e2, function(e3) {
          e3 && (t2.push(e3), t2 = t2.concat(jr(e3.flowElements)));
        }), t2;
      }
      var Lr, Ir = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.02 5.57" width="53" height="21"><path fill="currentColor" d="M1.88.92v.14c0 .41-.13.68-.4.8.33.14.46.44.46.86v.33c0 .61-.33.95-.95.95H0V0h.95c.65 0 .93.3.93.92zM.63.57v1.06h.24c.24 0 .38-.1.38-.43V.98c0-.28-.1-.4-.32-.4zm0 1.63v1.22h.36c.2 0 .32-.1.32-.39v-.35c0-.37-.12-.48-.4-.48H.63zM4.18.99v.52c0 .64-.31.98-.94.98h-.3V4h-.62V0h.92c.63 0 .94.35.94.99zM2.94.57v1.35h.3c.2 0 .3-.09.3-.37v-.6c0-.29-.1-.38-.3-.38h-.3zm2.89 2.27L6.25 0h.88v4h-.6V1.12L6.1 3.99h-.6l-.46-2.82v2.82h-.55V0h.87zM8.14 1.1V4h-.56V0h.79L9 2.4V0h.56v4h-.64zm2.49 2.29v.6h-.6v-.6zM12.12 1c0-.63.33-1 .95-1 .61 0 .95.37.95 1v2.04c0 .64-.34 1-.95 1-.62 0-.95-.37-.95-1zm.62 2.08c0 .28.13.39.33.39s.32-.1.32-.4V.98c0-.29-.12-.4-.32-.4s-.33.11-.33.4z"/><path fill="currentColor" d="M0 4.53h14.02v1.04H0zM11.08 0h.63v.62h-.63zm.63 4V1h-.63v2.98z"/></svg>', $r = { verticalAlign: "middle" }, Fr = { color: "#404040" }, zr = { zIndex: "1001", position: "fixed", top: "0", left: "0", right: "0", bottom: "0" }, Hr = { width: "100%", height: "100%", background: "rgba(40,40,40,0.2)" }, Gr = { position: "absolute", left: "50%", top: "40%", transform: "translate(-50%)", width: "260px", padding: "10px", background: "white", boxShadow: "0 1px 4px rgba(0,0,0,0.3)", fontFamily: "Helvetica, Arial, sans-serif", fontSize: "14px", display: "flex", lineHeight: "1.3" }, Vr = '<div class="bjs-powered-by-lightbox"><div class="backdrop"></div><div class="notice"><a href="https://bpmn.io" target="_blank" rel="noopener" class="link">' + Ir + '</a><span>Web-based tooling for BPMN, DMN and forms powered by <a href="https://bpmn.io" target="_blank" rel="noopener">bpmn.io</a>.</span></div></div>';
      function Wr() {
        Lr || (q(Lr = de(Vr), zr), q(fe("svg", Lr), $r), q(fe(".backdrop", Lr), Hr), q(fe(".notice", Lr), Gr), q(fe(".link", Lr), Fr, { margin: "15px 20px 15px 10px", alignSelf: "center" }), pe.bind(Lr, ".backdrop", "click", function(e2) {
          document.body.removeChild(Lr);
        })), document.body.appendChild(Lr);
      }
      function Ur(e2) {
        e2 = L({}, Kr, e2), this._moddle = this._createModdle(e2), this._container = this._createContainer(e2), /**
           * Adds the project logo to the diagram container as
           * required by the bpmn.io license.
           *
           * @see http://bpmn.io/license
           *
           * @param {Element} container
           */
        function(e3) {
          const t2 = de('<a href="http://bpmn.io" target="_blank" class="bjs-powered-by" title="Powered by bpmn.io" >' + Ir + "</a>");
          q(fe("svg", t2), $r), q(t2, Fr, { position: "absolute", bottom: "15px", right: "15px", zIndex: "100" }), e3.appendChild(t2), ae.bind(t2, "click", function(e4) {
            Wr(), e4.preventDefault();
          });
        }(this._container), this._init(this._container, this._moddle, e2);
      }
      function qr(e2, t2) {
        return e2.warnings = t2, e2;
      }
      e(Ur, pi), Ur.prototype.importXML = async function(e2, t2) {
        const n2 = this;
        let i2 = [];
        try {
          let r2;
          e2 = this._emit("import.parse.start", { xml: e2 }) || e2;
          try {
            r2 = await this._moddle.fromXML(e2, "bpmn:Definitions");
          } catch (e3) {
            throw this._emit("import.parse.complete", { error: e3 }), e3;
          }
          let o2 = r2.rootElement;
          const a2 = r2.references, s2 = r2.warnings, c2 = r2.elementsById;
          i2 = i2.concat(s2), o2 = this._emit("import.parse.complete", function(e3) {
            const t3 = n2.get("eventBus").createEvent(e3);
            return Object.defineProperty(t3, "context", { enumerable: true, get: function() {
              return console.warn(new Error("import.parse.complete <context> is deprecated and will be removed in future library versions")), { warnings: e3.warnings, references: e3.references, elementsById: e3.elementsById };
            } }), t3;
          }({ error: null, definitions: o2, elementsById: c2, references: a2, warnings: i2 })) || o2;
          const p2 = await this.importDefinitions(o2, t2);
          return i2 = i2.concat(p2.warnings), this._emit("import.done", { error: null, warnings: i2 }), { warnings: i2 };
        } catch (e3) {
          let t3 = e3;
          throw i2 = i2.concat(t3.warnings || []), qr(t3, i2), t3 = function(e4) {
            const t4 = /unparsable content <([^>]+)> detected([\s\S]*)$/.exec(e4.message);
            t4 && (e4.message = "unparsable content <" + t4[1] + "> detected; this may indicate an invalid BPMN 2.0 diagram file" + t4[2]);
            return e4;
          }(t3), this._emit("import.done", { error: t3, warnings: t3.warnings }), t3;
        }
      }, Ur.prototype.importXML = Rr(Ur.prototype.importXML), Ur.prototype.importDefinitions = async function(e2, t2) {
        this._setDefinitions(e2);
        return { warnings: (await this.open(t2)).warnings };
      }, Ur.prototype.importDefinitions = Rr(Ur.prototype.importDefinitions), Ur.prototype.open = async function(e2) {
        const t2 = this._definitions;
        let n2 = e2;
        if (!t2) {
          const e3 = new Error("no XML imported");
          throw qr(e3, []), e3;
        }
        if ("string" == typeof e2 && (n2 = function(e3, t3) {
          if (!t3) return null;
          return m(e3.diagrams, function(e4) {
            return e4.id === t3;
          }) || null;
        }(t2, e2), !n2)) {
          const t3 = new Error("BPMNDiagram <" + e2 + "> not found");
          throw qr(t3, []), t3;
        }
        try {
          this.clear();
        } catch (e3) {
          throw qr(e3, []), e3;
        }
        const { warnings: i2 } = await Or(this, t2, n2);
        return { warnings: i2 };
      }, Ur.prototype.open = Rr(Ur.prototype.open), Ur.prototype.saveXML = async function(e2) {
        e2 = e2 || {};
        let t2, n2, i2 = this._definitions;
        try {
          if (!i2) throw new Error("no definitions loaded");
          i2 = this._emit("saveXML.start", { definitions: i2 }) || i2;
          n2 = (await this._moddle.toXML(i2, e2)).xml, n2 = this._emit("saveXML.serialized", { xml: n2 }) || n2;
        } catch (e3) {
          t2 = e3;
        }
        const r2 = t2 ? { error: t2 } : { xml: n2 };
        if (this._emit("saveXML.done", r2), t2) throw t2;
        return r2;
      }, Ur.prototype.saveXML = Rr(Ur.prototype.saveXML), Ur.prototype.saveSVG = async function() {
        let e2, t2;
        this._emit("saveSVG.start");
        try {
          const t3 = this.get("canvas"), n2 = t3.getActiveLayer(), i2 = fe("defs", t3._svg), r2 = Ge(n2), o2 = i2 ? "<defs>" + Ge(i2) + "</defs>" : "", a2 = n2.getBBox();
          e2 = '<?xml version="1.0" encoding="utf-8"?>\n<!-- created with bpmn-js / http://bpmn.io -->\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + a2.width + '" height="' + a2.height + '" viewBox="' + a2.x + " " + a2.y + " " + a2.width + " " + a2.height + '" version="1.1">' + o2 + r2 + "</svg>";
        } catch (e3) {
          t2 = e3;
        }
        if (this._emit("saveSVG.done", { error: t2, svg: e2 }), t2) throw t2;
        return { svg: e2 };
      }, Ur.prototype.saveSVG = Rr(Ur.prototype.saveSVG), Ur.prototype._setDefinitions = function(e2) {
        this._definitions = e2;
      }, Ur.prototype.getModules = function() {
        return this._modules;
      }, Ur.prototype.clear = function() {
        this.getDefinitions() && pi.prototype.clear.call(this);
      }, Ur.prototype.destroy = function() {
        pi.prototype.destroy.call(this), ve(this._container);
      }, Ur.prototype.on = function(e2, t2, n2, i2) {
        return this.get("eventBus").on(e2, t2, n2, i2);
      }, Ur.prototype.off = function(e2, t2) {
        this.get("eventBus").off(e2, t2);
      }, Ur.prototype.attachTo = function(e2) {
        if (!e2) throw new Error("parentNode required");
        this.detach(), e2.get && e2.constructor.prototype.jquery && (e2 = e2.get(0)), "string" == typeof e2 && (e2 = fe(e2)), e2.appendChild(this._container), this._emit("attach", {}), this.get("canvas").resized();
      }, Ur.prototype.getDefinitions = function() {
        return this._definitions;
      }, Ur.prototype.detach = function() {
        const e2 = this._container, t2 = e2.parentNode;
        t2 && (this._emit("detach", {}), t2.removeChild(e2));
      }, Ur.prototype._init = function(e2, t2, n2) {
        const i2 = n2.modules || this.getModules(n2), r2 = n2.additionalModules || [], o2 = [].concat([{ bpmnjs: ["value", this], moddle: ["value", t2] }], i2, r2), a2 = L($(n2, ["additionalModules"]), { canvas: L({}, n2.canvas, { container: e2 }), modules: o2 });
        pi.call(this, a2), n2 && n2.container && this.attachTo(n2.container);
      }, Ur.prototype._emit = function(e2, t2) {
        return this.get("eventBus").fire(e2, t2);
      }, Ur.prototype._createContainer = function(e2) {
        const t2 = de('<div class="bjs-container"></div>');
        return q(t2, { width: Yr(e2.width), height: Yr(e2.height), position: e2.position }), t2;
      }, Ur.prototype._createModdle = function(e2) {
        return new Sr(L({}, this._moddleExtensions, e2.moddleExtensions));
      }, Ur.prototype._modules = [];
      const Kr = { width: "100%", height: "100%", position: "relative" };
      function Yr(e2) {
        return e2 + (u(e2) ? "px" : "");
      }
      function Xr(e2) {
        Ur.call(this, e2), this.on("import.parse.complete", function(e3) {
          e3.error || this._collectIds(e3.definitions, e3.elementsById);
        }, this), this.on("diagram.destroy", function() {
          this.get("moddle").ids.clear();
        }, this);
      }
      function Zr(e2, t2) {
        return !Mr(e2, "bpmn:CallActivity") && (Mr(e2, "bpmn:SubProcess") ? !(!(t2 = t2 || Nr(e2)) || !Mr(t2, "bpmndi:BPMNPlane")) || t2 && !!t2.isExpanded : !Mr(e2, "bpmn:Participant") || !!Br(e2).processRef);
      }
      function Qr(e2) {
        return e2 && !!Br(e2).triggeredByEvent;
      }
      function Jr(e2, t2) {
        return w(Br(e2).eventDefinitions, function(e3) {
          return Mr(e3, t2);
        });
      }
      e(Xr, Ur), Xr.prototype._createModdle = function(e2) {
        var t2 = Ur.prototype._createModdle.call(this, e2);
        return t2.ids = new n([32, 36, 1]), t2;
      }, Xr.prototype._collectIds = function(e2, t2) {
        var n2, i2 = e2.$model.ids;
        for (n2 in i2.clear(), t2) i2.claim(n2, t2[n2]);
      };
      var eo = { width: 90, height: 20 }, to = 15;
      function no(e2) {
        return Mr(e2, "bpmn:Event") || Mr(e2, "bpmn:Gateway") || Mr(e2, "bpmn:DataStoreReference") || Mr(e2, "bpmn:DataObjectReference") || Mr(e2, "bpmn:DataInput") || Mr(e2, "bpmn:DataOutput") || Mr(e2, "bpmn:SequenceFlow") || Mr(e2, "bpmn:MessageFlow") || Mr(e2, "bpmn:Group");
      }
      function io(e2) {
        return mn(e2.label);
      }
      function ro(e2) {
        var t2 = e2.length / 2 - 1, n2 = e2[Math.floor(t2)], i2 = e2[Math.ceil(t2 + 0.01)], r2 = function(e3) {
          var t3 = e3.length / 2 - 1, n3 = e3[Math.floor(t3)], i3 = e3[Math.ceil(t3 + 0.01)];
          return { x: n3.x + (i3.x - n3.x) / 2, y: n3.y + (i3.y - n3.y) / 2 };
        }(e2), o2 = Math.atan((i2.y - n2.y) / (i2.x - n2.x)), a2 = r2.x, s2 = r2.y;
        return Math.abs(o2) < Math.PI / 2 ? s2 -= to : a2 += to, { x: a2, y: s2 };
      }
      function oo(e2) {
        return e2.waypoints ? ro(e2.waypoints) : Mr(e2, "bpmn:Group") ? { x: e2.x + e2.width / 2, y: e2.y + eo.height / 2 } : { x: e2.x + e2.width / 2, y: e2.y + e2.height + eo.height / 2 };
      }
      function ao(e2) {
        return Mr(e2, "bpmn:FlowElement") || Mr(e2, "bpmn:Participant") || Mr(e2, "bpmn:Lane") || Mr(e2, "bpmn:SequenceFlow") || Mr(e2, "bpmn:MessageFlow") || Mr(e2, "bpmn:DataInput") || Mr(e2, "bpmn:DataOutput") ? "name" : Mr(e2, "bpmn:TextAnnotation") ? "text" : Mr(e2, "bpmn:Group") ? "categoryValueRef" : void 0;
      }
      function so(e2) {
        var t2 = e2.businessObject, n2 = ao(t2);
        if (n2) return "categoryValueRef" === n2 ? function(e3) {
          var t3 = e3.categoryValueRef;
          return t3 && t3.value || "";
        }(t2) : t2[n2] || "";
      }
      var co = "hsl(225, 10%, 15%)";
      function po(e2, t2) {
        return w(e2.eventDefinitions, function(e3) {
          return e3.$type === t2;
        });
      }
      function lo(e2, t2) {
        var n2 = Nr(e2);
        return n2.get("color:background-color") || n2.get("bioc:fill") || t2 || "white";
      }
      function uo(e2, t2) {
        var n2 = Nr(e2);
        return n2.get("color:border-color") || n2.get("bioc:stroke") || t2 || co;
      }
      function ho(e2, t2, n2) {
        var i2 = Nr(e2).get("label");
        return i2 && i2.get("color:color") || t2 || uo(e2, n2);
      }
      var fo = new n(), mo = 0.95;
      function vo(e2, t2, n2, i2, r2, o2, a2) {
        it.call(this, t2, a2);
        var s2 = e2 && e2.defaultFillColor, c2 = e2 && e2.defaultStrokeColor, p2 = e2 && e2.defaultLabelColor, u2 = fo.next(), h2 = {};
        function d2(e3) {
          return n2.computeStyle(e3, { strokeLinecap: "round", strokeLinejoin: "round", stroke: co, strokeWidth: 2, fill: "white" });
        }
        function f2(e3) {
          return n2.computeStyle(e3, ["no-fill"], { strokeLinecap: "round", strokeLinejoin: "round", stroke: co, strokeWidth: 2 });
        }
        function m2(e3, t3) {
          var { ref: n3 = { x: 0, y: 0 }, scale: i3 = 1, element: o3 } = t3, a3 = De("marker", { id: e3, viewBox: "0 0 20 20", refX: n3.x, refY: n3.y, markerWidth: 20 * i3, markerHeight: 20 * i3, orient: "auto" });
          ge(a3, o3);
          var s3 = fe("defs", r2._svg);
          s3 || (s3 = De("defs"), ge(r2._svg, s3)), ge(s3, a3), h2[e3] = a3;
        }
        function v2(e3) {
          return e3.replace(/[^0-9a-zA-Z]+/g, "_");
        }
        function y2(e3, t3, n3) {
          var i3 = e3 + "-" + v2(t3) + "-" + v2(n3) + "-" + u2;
          return h2[i3] || function(e4, t4, n4, i4) {
            if ("sequenceflow-end" === t4) {
              m2(e4, { element: De("path", { d: "M 1 5 L 11 10 L 1 15 Z", ...d2({ fill: i4, stroke: i4, strokeWidth: 1 }) }), ref: { x: 11, y: 10 }, scale: 0.5 });
            }
            if ("messageflow-start" === t4) {
              m2(e4, { element: De("circle", { cx: 6, cy: 6, r: 3.5, ...d2({ fill: n4, stroke: i4, strokeWidth: 1, strokeDasharray: [1e4, 1] }) }), ref: { x: 6, y: 6 } });
            }
            if ("messageflow-end" === t4) {
              m2(e4, { element: De("path", { d: "m 1 5 l 0 -3 l 7 3 l -7 3 z", ...d2({ fill: n4, stroke: i4, strokeWidth: 1, strokeDasharray: [1e4, 1] }) }), ref: { x: 8.5, y: 5 } });
            }
            if ("association-start" === t4) {
              m2(e4, { element: De("path", { d: "M 11 5 L 1 10 L 11 15", ...f2({ fill: "none", stroke: i4, strokeWidth: 1.5, strokeDasharray: [1e4, 1] }) }), ref: { x: 1, y: 10 }, scale: 0.5 });
            }
            if ("association-end" === t4) {
              m2(e4, { element: De("path", { d: "M 1 5 L 11 10 L 1 15", ...f2({ fill: "none", stroke: i4, strokeWidth: 1.5, strokeDasharray: [1e4, 1] }) }), ref: { x: 11, y: 10 }, scale: 0.5 });
            }
            if ("conditional-flow-marker" === t4) {
              m2(e4, { element: De("path", { d: "M 0 10 L 8 6 L 16 10 L 8 14 Z", ...d2({ fill: n4, stroke: i4 }) }), ref: { x: -1, y: 10 }, scale: 0.5 });
            }
            if ("conditional-default-flow-marker" === t4) {
              m2(e4, { element: De("path", { d: "M 6 4 L 10 16", ...d2({ stroke: i4 }) }), ref: { x: 0, y: 10 }, scale: 0.5 });
            }
          }(i3, e3, t3, n3), "url(#" + i3 + ")";
        }
        function b2(e3, t3, n3, i3, r3) {
          l(i3) && (r3 = i3, i3 = 0), i3 = i3 || 0, "none" === (r3 = d2(r3)).fill && delete r3.fillOpacity;
          var o3 = De("circle", { cx: t3 / 2, cy: n3 / 2, r: Math.round((t3 + n3) / 4 - i3), ...r3 });
          return ge(e3, o3), o3;
        }
        function x2(e3, t3, n3, i3, r3, o3) {
          l(r3) && (o3 = r3, r3 = 0), r3 = r3 || 0, o3 = d2(o3);
          var a3 = De("rect", { x: r3, y: r3, width: t3 - 2 * r3, height: n3 - 2 * r3, rx: i3, ry: i3, ...o3 });
          return ge(e3, a3), a3;
        }
        function _2(e3, t3, n3, i3) {
          var r3 = pt(t3, n3 = f2(n3), i3);
          return ge(e3, r3), r3;
        }
        function w2(e3, t3, n3) {
          return _2(e3, t3, n3, 5);
        }
        function E2(e3, t3, n3) {
          n3 = f2(n3);
          var i3 = De("path", { ...n3, d: t3 });
          return ge(e3, i3), i3;
        }
        function S2(e3, t3, n3, i3) {
          return E2(t3, n3, L({ "data-marker": e3 }, i3));
        }
        function C2(e3) {
          return M2[e3];
        }
        function R2(e3) {
          return function(t3, n3, i3) {
            return C2(e3)(t3, n3, i3);
          };
        }
        function P2(e3, t3) {
          var n3 = Br(e3), i3 = function(e4) {
            return "bpmn:IntermediateThrowEvent" === e4.$type || "bpmn:EndEvent" === e4.$type;
          }(n3);
          return n3.eventDefinitions && n3.eventDefinitions.length > 1 ? n3.parallelMultiple ? C2("bpmn:ParallelMultipleEventDefinition")(t3, e3, i3) : C2("bpmn:MultipleEventDefinition")(t3, e3, i3) : po(n3, "bpmn:MessageEventDefinition") ? C2("bpmn:MessageEventDefinition")(t3, e3, i3) : po(n3, "bpmn:TimerEventDefinition") ? C2("bpmn:TimerEventDefinition")(t3, e3, i3) : po(n3, "bpmn:ConditionalEventDefinition") ? C2("bpmn:ConditionalEventDefinition")(t3, e3) : po(n3, "bpmn:SignalEventDefinition") ? C2("bpmn:SignalEventDefinition")(t3, e3, i3) : po(n3, "bpmn:EscalationEventDefinition") ? C2("bpmn:EscalationEventDefinition")(t3, e3, i3) : po(n3, "bpmn:LinkEventDefinition") ? C2("bpmn:LinkEventDefinition")(t3, e3, i3) : po(n3, "bpmn:ErrorEventDefinition") ? C2("bpmn:ErrorEventDefinition")(t3, e3, i3) : po(n3, "bpmn:CancelEventDefinition") ? C2("bpmn:CancelEventDefinition")(t3, e3, i3) : po(n3, "bpmn:CompensateEventDefinition") ? C2("bpmn:CompensateEventDefinition")(t3, e3, i3) : po(n3, "bpmn:TerminateEventDefinition") ? C2("bpmn:TerminateEventDefinition")(t3, e3, i3) : null;
        }
        function T2(e3, t3, n3) {
          n3 = L({ size: { width: 100 } }, n3);
          var i3 = o2.createText(t3 || "", n3);
          return Se(i3).add("djs-label"), ge(e3, i3), i3;
        }
        function k2(e3, t3, n3) {
          return T2(e3, Br(t3).name, { box: t3, align: n3, padding: 7, style: { fill: ho(t3, p2, c2) } });
        }
        function A2(e3, t3, n3) {
          ni(T2(e3, t3, { box: { height: 30, width: n3.height }, align: "center-middle", style: { fill: ho(n3, p2, c2) } }), 0, -(-1 * n3.height), 270);
        }
        var M2 = this.handlers = { "bpmn:Event": function(e3, t3, n3) {
          return "fillOpacity" in n3 || (n3.fillOpacity = mo), b2(e3, t3.width, t3.height, n3);
        }, "bpmn:StartEvent": function(e3, t3, n3) {
          var i3 = { fill: lo(t3, s2), stroke: uo(t3, c2) };
          Br(t3).isInterrupting || (i3 = { strokeDasharray: "6", fill: lo(t3, s2), stroke: uo(t3, c2) });
          var r3 = C2("bpmn:Event")(e3, t3, i3);
          return n3 && false === n3.renderIcon || P2(t3, e3), r3;
        }, "bpmn:MessageEventDefinition": function(e3, t3, n3) {
          return E2(e3, i2.getScaledPath("EVENT_MESSAGE", { xScaleFactor: 0.9, yScaleFactor: 0.9, containerWidth: t3.width, containerHeight: t3.height, position: { mx: 0.235, my: 0.315 } }), { strokeWidth: 1, fill: n3 ? uo(t3, c2) : lo(t3, s2), stroke: n3 ? lo(t3, s2) : uo(t3, c2) });
        }, "bpmn:TimerEventDefinition": function(e3, t3) {
          var n3 = b2(e3, t3.width, t3.height, 0.2 * t3.height, { strokeWidth: 2, fill: lo(t3, s2), stroke: uo(t3, c2) });
          E2(e3, i2.getScaledPath("EVENT_TIMER_WH", { xScaleFactor: 0.75, yScaleFactor: 0.75, containerWidth: t3.width, containerHeight: t3.height, position: { mx: 0.5, my: 0.5 } }), { strokeWidth: 2, stroke: uo(t3, c2) });
          for (var r3 = 0; r3 < 12; r3++) {
            var o3 = i2.getScaledPath("EVENT_TIMER_LINE", { xScaleFactor: 0.75, yScaleFactor: 0.75, containerWidth: t3.width, containerHeight: t3.height, position: { mx: 0.5, my: 0.5 } }), a3 = t3.width / 2;
            E2(e3, o3, { strokeWidth: 1, transform: "rotate(" + 30 * r3 + "," + t3.height / 2 + "," + a3 + ")", stroke: uo(t3, c2) });
          }
          return n3;
        }, "bpmn:EscalationEventDefinition": function(e3, t3, n3) {
          return E2(e3, i2.getScaledPath("EVENT_ESCALATION", { xScaleFactor: 1, yScaleFactor: 1, containerWidth: t3.width, containerHeight: t3.height, position: { mx: 0.5, my: 0.2 } }), { strokeWidth: 1, fill: n3 ? uo(t3, c2) : "none", stroke: uo(t3, c2) });
        }, "bpmn:ConditionalEventDefinition": function(e3, t3) {
          return E2(e3, i2.getScaledPath("EVENT_CONDITIONAL", { xScaleFactor: 1, yScaleFactor: 1, containerWidth: t3.width, containerHeight: t3.height, position: { mx: 0.5, my: 0.222 } }), { strokeWidth: 1, stroke: uo(t3, c2) });
        }, "bpmn:LinkEventDefinition": function(e3, t3, n3) {
          return E2(e3, i2.getScaledPath("EVENT_LINK", { xScaleFactor: 1, yScaleFactor: 1, containerWidth: t3.width, containerHeight: t3.height, position: { mx: 0.57, my: 0.263 } }), { strokeWidth: 1, fill: n3 ? uo(t3, c2) : "none", stroke: uo(t3, c2) });
        }, "bpmn:ErrorEventDefinition": function(e3, t3, n3) {
          return E2(e3, i2.getScaledPath("EVENT_ERROR", { xScaleFactor: 1.1, yScaleFactor: 1.1, containerWidth: t3.width, containerHeight: t3.height, position: { mx: 0.2, my: 0.722 } }), { strokeWidth: 1, fill: n3 ? uo(t3, c2) : "none", stroke: uo(t3, c2) });
        }, "bpmn:CancelEventDefinition": function(e3, t3, n3) {
          var r3 = E2(e3, i2.getScaledPath("EVENT_CANCEL_45", { xScaleFactor: 1, yScaleFactor: 1, containerWidth: t3.width, containerHeight: t3.height, position: { mx: 0.638, my: -0.055 } }), { strokeWidth: 1, fill: n3 ? uo(t3, c2) : "none", stroke: uo(t3, c2) });
          return ri(r3, 45), r3;
        }, "bpmn:CompensateEventDefinition": function(e3, t3, n3) {
          return E2(e3, i2.getScaledPath("EVENT_COMPENSATION", { xScaleFactor: 1, yScaleFactor: 1, containerWidth: t3.width, containerHeight: t3.height, position: { mx: 0.22, my: 0.5 } }), { strokeWidth: 1, fill: n3 ? uo(t3, c2) : "none", stroke: uo(t3, c2) });
        }, "bpmn:SignalEventDefinition": function(e3, t3, n3) {
          return E2(e3, i2.getScaledPath("EVENT_SIGNAL", { xScaleFactor: 0.9, yScaleFactor: 0.9, containerWidth: t3.width, containerHeight: t3.height, position: { mx: 0.5, my: 0.2 } }), { strokeWidth: 1, fill: n3 ? uo(t3, c2) : "none", stroke: uo(t3, c2) });
        }, "bpmn:MultipleEventDefinition": function(e3, t3, n3) {
          return E2(e3, i2.getScaledPath("EVENT_MULTIPLE", { xScaleFactor: 1.1, yScaleFactor: 1.1, containerWidth: t3.width, containerHeight: t3.height, position: { mx: 0.222, my: 0.36 } }), { strokeWidth: 1, fill: n3 ? uo(t3, c2) : "none" });
        }, "bpmn:ParallelMultipleEventDefinition": function(e3, t3) {
          return E2(e3, i2.getScaledPath("EVENT_PARALLEL_MULTIPLE", { xScaleFactor: 1.2, yScaleFactor: 1.2, containerWidth: t3.width, containerHeight: t3.height, position: { mx: 0.458, my: 0.194 } }), { strokeWidth: 1, fill: uo(t3, c2), stroke: uo(t3, c2) });
        }, "bpmn:EndEvent": function(e3, t3, n3) {
          var i3 = C2("bpmn:Event")(e3, t3, { strokeWidth: 4, fill: lo(t3, s2), stroke: uo(t3, c2) });
          return n3 && false === n3.renderIcon || P2(t3, e3), i3;
        }, "bpmn:TerminateEventDefinition": function(e3, t3) {
          return b2(e3, t3.width, t3.height, 8, { strokeWidth: 4, fill: uo(t3, c2), stroke: uo(t3, c2) });
        }, "bpmn:IntermediateEvent": function(e3, t3, n3) {
          var i3 = C2("bpmn:Event")(e3, t3, { strokeWidth: 1.5, fill: lo(t3, s2), stroke: uo(t3, c2) });
          return b2(e3, t3.width, t3.height, 3, { strokeWidth: 1.5, fill: lo(t3, "none"), stroke: uo(t3, c2) }), n3 && false === n3.renderIcon || P2(t3, e3), i3;
        }, "bpmn:IntermediateCatchEvent": R2("bpmn:IntermediateEvent"), "bpmn:IntermediateThrowEvent": R2("bpmn:IntermediateEvent"), "bpmn:Activity": function(e3, t3, n3) {
          return "fillOpacity" in (n3 = n3 || {}) || (n3.fillOpacity = mo), x2(e3, t3.width, t3.height, 10, n3);
        }, "bpmn:Task": function(e3, t3) {
          var n3 = { fill: lo(t3, s2), stroke: uo(t3, c2) }, i3 = C2("bpmn:Activity")(e3, t3, n3);
          return k2(e3, t3, "center-middle"), D2(e3, t3), i3;
        }, "bpmn:ServiceTask": function(e3, t3) {
          var n3 = C2("bpmn:Task")(e3, t3);
          return E2(e3, i2.getScaledPath("TASK_TYPE_SERVICE", { abspos: { x: 12, y: 18 } }), { strokeWidth: 1, fill: lo(t3, s2), stroke: uo(t3, c2) }), E2(e3, i2.getScaledPath("TASK_TYPE_SERVICE_FILL", { abspos: { x: 17.2, y: 18 } }), { strokeWidth: 0, fill: lo(t3, s2) }), E2(e3, i2.getScaledPath("TASK_TYPE_SERVICE", { abspos: { x: 17, y: 22 } }), { strokeWidth: 1, fill: lo(t3, s2), stroke: uo(t3, c2) }), n3;
        }, "bpmn:UserTask": function(e3, t3) {
          var n3 = C2("bpmn:Task")(e3, t3);
          return E2(e3, i2.getScaledPath("TASK_TYPE_USER_1", { abspos: { x: 15, y: 12 } }), { strokeWidth: 0.5, fill: lo(t3, s2), stroke: uo(t3, c2) }), E2(e3, i2.getScaledPath("TASK_TYPE_USER_2", { abspos: { x: 15, y: 12 } }), { strokeWidth: 0.5, fill: lo(t3, s2), stroke: uo(t3, c2) }), E2(e3, i2.getScaledPath("TASK_TYPE_USER_3", { abspos: { x: 15, y: 12 } }), { strokeWidth: 0.5, fill: uo(t3, c2), stroke: uo(t3, c2) }), n3;
        }, "bpmn:ManualTask": function(e3, t3) {
          var n3 = C2("bpmn:Task")(e3, t3);
          return E2(e3, i2.getScaledPath("TASK_TYPE_MANUAL", { abspos: { x: 17, y: 15 } }), { strokeWidth: 0.5, fill: lo(t3, s2), stroke: uo(t3, c2) }), n3;
        }, "bpmn:SendTask": function(e3, t3) {
          var n3 = C2("bpmn:Task")(e3, t3);
          return E2(e3, i2.getScaledPath("TASK_TYPE_SEND", { xScaleFactor: 1, yScaleFactor: 1, containerWidth: 21, containerHeight: 14, position: { mx: 0.285, my: 0.357 } }), { strokeWidth: 1, fill: uo(t3, c2), stroke: lo(t3, s2) }), n3;
        }, "bpmn:ReceiveTask": function(e3, t3) {
          var n3, r3 = Br(t3), o3 = C2("bpmn:Task")(e3, t3);
          return r3.instantiate ? (b2(e3, 28, 28, 4.4, { strokeWidth: 1 }), n3 = i2.getScaledPath("TASK_TYPE_INSTANTIATING_SEND", { abspos: { x: 7.77, y: 9.52 } })) : n3 = i2.getScaledPath("TASK_TYPE_SEND", { xScaleFactor: 0.9, yScaleFactor: 0.9, containerWidth: 21, containerHeight: 14, position: { mx: 0.3, my: 0.4 } }), E2(e3, n3, { strokeWidth: 1, fill: lo(t3, s2), stroke: uo(t3, c2) }), o3;
        }, "bpmn:ScriptTask": function(e3, t3) {
          var n3 = C2("bpmn:Task")(e3, t3);
          return E2(e3, i2.getScaledPath("TASK_TYPE_SCRIPT", { abspos: { x: 15, y: 20 } }), { strokeWidth: 1, stroke: uo(t3, c2) }), n3;
        }, "bpmn:BusinessRuleTask": function(e3, t3) {
          var n3 = C2("bpmn:Task")(e3, t3);
          return we(E2(e3, i2.getScaledPath("TASK_TYPE_BUSINESS_RULE_HEADER", { abspos: { x: 8, y: 8 } })), { strokeWidth: 1, fill: lo(t3, "#aaaaaa"), stroke: uo(t3, c2) }), we(E2(e3, i2.getScaledPath("TASK_TYPE_BUSINESS_RULE_MAIN", { abspos: { x: 8, y: 8 } })), { strokeWidth: 1, stroke: uo(t3, c2) }), n3;
        }, "bpmn:SubProcess": function(e3, t3, n3) {
          n3 = { fill: lo(t3, s2), stroke: uo(t3, c2), ...n3 };
          var i3 = C2("bpmn:Activity")(e3, t3, n3), r3 = Zr(t3);
          return Qr(t3) && we(i3, { strokeDasharray: "0, 5.5", strokeWidth: 2.5 }), k2(e3, t3, r3 ? "center-top" : "center-middle"), r3 ? D2(e3, t3) : D2(e3, t3, ["SubProcessMarker"]), i3;
        }, "bpmn:AdHocSubProcess": function(e3, t3) {
          return C2("bpmn:SubProcess")(e3, t3);
        }, "bpmn:Transaction": function(e3, t3) {
          var i3 = C2("bpmn:SubProcess")(e3, t3, { strokeWidth: 1.5 }), r3 = n2.style(["no-fill", "no-events"], { stroke: uo(t3, c2), strokeWidth: 1.5 });
          return x2(e3, t3.width, t3.height, 7, 3, r3), i3;
        }, "bpmn:CallActivity": function(e3, t3) {
          return C2("bpmn:SubProcess")(e3, t3, { strokeWidth: 5 });
        }, "bpmn:Participant": function(e3, t3) {
          var n3 = { fillOpacity: mo, fill: lo(t3, s2), stroke: uo(t3, c2), strokeWidth: 1.5 }, i3 = C2("bpmn:Lane")(e3, t3, n3);
          Zr(t3) ? (_2(e3, [{ x: 30, y: 0 }, { x: 30, y: t3.height }], { stroke: uo(t3, c2), strokeWidth: 1.5 }), A2(e3, Br(t3).name, t3)) : T2(e3, Br(t3).name, { box: t3, align: "center-middle", style: { fill: ho(t3, p2, c2) } });
          return !!Br(t3).participantMultiplicity && C2("ParticipantMultiplicityMarker")(e3, t3), i3;
        }, "bpmn:Lane": function(e3, t3, n3) {
          var i3 = x2(e3, t3.width, t3.height, 0, { fill: lo(t3, s2), fillOpacity: 0.35, stroke: uo(t3, c2), strokeWidth: 1.5, ...n3 }), r3 = Br(t3);
          "bpmn:Lane" === r3.$type && A2(e3, r3.name, t3);
          return i3;
        }, "bpmn:InclusiveGateway": function(e3, t3) {
          var n3 = C2("bpmn:Gateway")(e3, t3);
          return b2(e3, t3.width, t3.height, 0.24 * t3.height, { strokeWidth: 2.5, fill: lo(t3, s2), stroke: uo(t3, c2) }), n3;
        }, "bpmn:ExclusiveGateway": function(e3, t3) {
          var n3 = C2("bpmn:Gateway")(e3, t3), r3 = i2.getScaledPath("GATEWAY_EXCLUSIVE", { xScaleFactor: 0.4, yScaleFactor: 0.4, containerWidth: t3.width, containerHeight: t3.height, position: { mx: 0.32, my: 0.3 } });
          return Nr(t3).isMarkerVisible && E2(e3, r3, { strokeWidth: 1, fill: uo(t3, c2), stroke: uo(t3, c2) }), n3;
        }, "bpmn:ComplexGateway": function(e3, t3) {
          var n3 = C2("bpmn:Gateway")(e3, t3);
          return E2(e3, i2.getScaledPath("GATEWAY_COMPLEX", { xScaleFactor: 0.5, yScaleFactor: 0.5, containerWidth: t3.width, containerHeight: t3.height, position: { mx: 0.46, my: 0.26 } }), { strokeWidth: 1, fill: uo(t3, c2), stroke: uo(t3, c2) }), n3;
        }, "bpmn:ParallelGateway": function(e3, t3) {
          var n3 = C2("bpmn:Gateway")(e3, t3);
          return E2(e3, i2.getScaledPath("GATEWAY_PARALLEL", { xScaleFactor: 0.6, yScaleFactor: 0.6, containerWidth: t3.width, containerHeight: t3.height, position: { mx: 0.46, my: 0.2 } }), { strokeWidth: 1, fill: uo(t3, c2), stroke: uo(t3, c2) }), n3;
        }, "bpmn:EventBasedGateway": function(e3, t3) {
          var n3 = Br(t3), r3 = C2("bpmn:Gateway")(e3, t3);
          b2(e3, t3.width, t3.height, 0.2 * t3.height, { strokeWidth: 1, fill: "none", stroke: uo(t3, c2) });
          var o3 = n3.eventGatewayType, a3 = !!n3.instantiate;
          if ("Parallel" === o3) {
            var s3 = i2.getScaledPath("GATEWAY_PARALLEL", { xScaleFactor: 0.4, yScaleFactor: 0.4, containerWidth: t3.width, containerHeight: t3.height, position: { mx: 0.474, my: 0.296 } });
            E2(e3, s3, { strokeWidth: 1, fill: "none" });
          } else "Exclusive" === o3 && (a3 || b2(e3, t3.width, t3.height, 0.26 * t3.height, { strokeWidth: 1, fill: "none", stroke: uo(t3, c2) }), function() {
            var n4 = i2.getScaledPath("GATEWAY_EVENT_BASED", { xScaleFactor: 0.18, yScaleFactor: 0.18, containerWidth: t3.width, containerHeight: t3.height, position: { mx: 0.36, my: 0.44 } });
            E2(e3, n4, { strokeWidth: 2, fill: lo(t3, "none"), stroke: uo(t3, c2) });
          }());
          return r3;
        }, "bpmn:Gateway": function(e3, t3) {
          return function(e4, t4, n3, i3) {
            var r3 = t4 / 2, o3 = n3 / 2, a3 = [{ x: r3, y: 0 }, { x: t4, y: o3 }, { x: r3, y: n3 }, { x: 0, y: o3 }].map(function(e5) {
              return e5.x + "," + e5.y;
            }).join(" ");
            i3 = d2(i3);
            var s3 = De("polygon", { ...i3, points: a3 });
            return ge(e4, s3), s3;
          }(e3, t3.width, t3.height, { fill: lo(t3, s2), fillOpacity: mo, stroke: uo(t3, c2) });
        }, "bpmn:SequenceFlow": function(e3, t3) {
          var n3, i3 = lo(t3, s2), r3 = uo(t3, c2), o3 = w2(e3, t3.waypoints, { markerEnd: y2("sequenceflow-end", i3, r3), stroke: uo(t3, c2) }), a3 = Br(t3);
          return t3.source && (n3 = t3.source.businessObject, a3.conditionExpression && n3.$instanceOf("bpmn:Activity") && we(o3, { markerStart: y2("conditional-flow-marker", i3, r3) }), n3.default && (n3.$instanceOf("bpmn:Gateway") || n3.$instanceOf("bpmn:Activity")) && n3.default === a3 && we(o3, { markerStart: y2("conditional-default-flow-marker", i3, r3) })), o3;
        }, "bpmn:Association": function(e3, t3, n3) {
          var i3 = Br(t3), r3 = lo(t3, s2), o3 = uo(t3, c2);
          return n3 = { strokeDasharray: "0, 5", stroke: uo(t3, c2), ...n3 }, "One" !== i3.associationDirection && "Both" !== i3.associationDirection || (n3.markerEnd = y2("association-end", r3, o3)), "Both" === i3.associationDirection && (n3.markerStart = y2("association-start", r3, o3)), w2(e3, t3.waypoints, n3);
        }, "bpmn:DataInputAssociation": function(e3, t3) {
          var n3 = lo(t3, s2), i3 = uo(t3, c2);
          return C2("bpmn:Association")(e3, t3, { markerEnd: y2("association-end", n3, i3) });
        }, "bpmn:DataOutputAssociation": function(e3, t3) {
          var n3 = lo(t3, s2), i3 = uo(t3, c2);
          return C2("bpmn:Association")(e3, t3, { markerEnd: y2("association-end", n3, i3) });
        }, "bpmn:MessageFlow": function(e3, t3) {
          var n3 = Br(t3), r3 = Nr(t3), o3 = lo(t3, s2), a3 = uo(t3, c2), l2 = w2(e3, t3.waypoints, { markerEnd: y2("messageflow-end", o3, a3), markerStart: y2("messageflow-start", o3, a3), strokeDasharray: "10, 11", strokeWidth: 1.5, stroke: uo(t3, c2) });
          if (n3.messageRef) {
            var u3 = l2.getPointAtLength(l2.getTotalLength() / 2), h3 = i2.getScaledPath("MESSAGE_FLOW_MARKER", { abspos: { x: u3.x, y: u3.y } }), d3 = { strokeWidth: 1 };
            "initiating" === r3.messageVisibleKind ? (d3.fill = "white", d3.stroke = co) : (d3.fill = "#888", d3.stroke = "white");
            var f3 = E2(e3, h3, d3), m3 = T2(e3, n3.messageRef.name, { align: "center-top", fitBox: true, style: { fill: uo(t3, p2) } }), v3 = f3.getBBox(), g2 = m3.getBBox();
            ni(m3, u3.x - g2.width / 2, u3.y + v3.height / 2 + 10, 0);
          }
          return l2;
        }, "bpmn:DataObject": function(e3, t3) {
          var n3 = E2(e3, i2.getScaledPath("DATA_OBJECT_PATH", { xScaleFactor: 1, yScaleFactor: 1, containerWidth: t3.width, containerHeight: t3.height, position: { mx: 0.474, my: 0.296 } }), { fill: lo(t3, s2), fillOpacity: mo, stroke: uo(t3, c2) });
          return function(e4) {
            var t4 = e4.dataObjectRef;
            return e4.isCollection || t4 && t4.isCollection;
          }(Br(t3)) && function(e4, t4) {
            var n4 = (t4.height - 18) / t4.height, r3 = i2.getScaledPath("DATA_OBJECT_COLLECTION_PATH", { xScaleFactor: 1, yScaleFactor: 1, containerWidth: t4.width, containerHeight: t4.height, position: { mx: 0.33, my: n4 } });
            E2(e4, r3, { strokeWidth: 2 });
          }(e3, t3), n3;
        }, "bpmn:DataObjectReference": R2("bpmn:DataObject"), "bpmn:DataInput": function(e3, t3) {
          var n3 = i2.getRawPath("DATA_ARROW"), r3 = C2("bpmn:DataObject")(e3, t3);
          return E2(e3, n3, { strokeWidth: 1 }), r3;
        }, "bpmn:DataOutput": function(e3, t3) {
          var n3 = i2.getRawPath("DATA_ARROW"), r3 = C2("bpmn:DataObject")(e3, t3);
          return E2(e3, n3, { strokeWidth: 1, fill: co }), r3;
        }, "bpmn:DataStoreReference": function(e3, t3) {
          return E2(e3, i2.getScaledPath("DATA_STORE", { xScaleFactor: 1, yScaleFactor: 1, containerWidth: t3.width, containerHeight: t3.height, position: { mx: 0, my: 0.133 } }), { strokeWidth: 2, fill: lo(t3, s2), fillOpacity: mo, stroke: uo(t3, c2) });
        }, "bpmn:BoundaryEvent": function(e3, t3, n3) {
          var i3 = Br(t3).cancelActivity, r3 = { strokeWidth: 1.5, fill: lo(t3, s2), stroke: uo(t3, c2) };
          i3 || (r3.strokeDasharray = "6");
          var o3 = { ...r3, fillOpacity: 1 }, a3 = { ...r3, fill: "none" }, p3 = C2("bpmn:Event")(e3, t3, o3);
          return b2(e3, t3.width, t3.height, 3, a3), n3 && false === n3.renderIcon || P2(t3, e3), p3;
        }, "bpmn:Group": function(e3, t3) {
          return x2(e3, t3.width, t3.height, 10, { stroke: uo(t3, c2), strokeWidth: 1.5, strokeDasharray: "10,6,0,6", fill: "none", pointerEvents: "none" });
        }, label: function(e3, t3) {
          return function(e4, t4) {
            var n3 = { width: 90, height: 30, x: t4.width / 2 + t4.x, y: t4.height / 2 + t4.y };
            return T2(e4, so(t4), { box: n3, fitBox: true, style: L({}, o2.getExternalStyle(), { fill: ho(t4, p2, c2) }) });
          }(e3, t3);
        }, "bpmn:TextAnnotation": function(e3, t3) {
          var n3 = x2(e3, t3.width, t3.height, 0, 0, { fill: "none", stroke: "none" });
          return E2(e3, i2.getScaledPath("TEXT_ANNOTATION", { xScaleFactor: 1, yScaleFactor: 1, containerWidth: t3.width, containerHeight: t3.height, position: { mx: 0, my: 0 } }), { stroke: uo(t3, c2) }), T2(e3, Br(t3).text || "", { box: t3, align: "left-top", padding: 7, style: { fill: ho(t3, p2, c2) } }), n3;
        }, ParticipantMultiplicityMarker: function(e3, t3) {
          S2("participant-multiplicity", e3, i2.getScaledPath("MARKER_PARALLEL", { xScaleFactor: 1, yScaleFactor: 1, containerWidth: t3.width, containerHeight: t3.height, position: { mx: t3.width / 2 / t3.width, my: (t3.height - 15) / t3.height } }), { strokeWidth: 2, fill: lo(t3, s2), stroke: uo(t3, c2) });
        }, SubProcessMarker: function(e3, t3) {
          ii(x2(e3, 14, 14, 0, { strokeWidth: 1, fill: lo(t3, s2), stroke: uo(t3, c2) }), t3.width / 2 - 7.5, t3.height - 20), S2("sub-process", e3, i2.getScaledPath("MARKER_SUB_PROCESS", { xScaleFactor: 1.5, yScaleFactor: 1.5, containerWidth: t3.width, containerHeight: t3.height, position: { mx: (t3.width / 2 - 7.5) / t3.width, my: (t3.height - 20) / t3.height } }), { fill: lo(t3, s2), stroke: uo(t3, c2) });
        }, ParallelMarker: function(e3, t3, n3) {
          S2("parallel", e3, i2.getScaledPath("MARKER_PARALLEL", { xScaleFactor: 1, yScaleFactor: 1, containerWidth: t3.width, containerHeight: t3.height, position: { mx: (t3.width / 2 + n3.parallel) / t3.width, my: (t3.height - 20) / t3.height } }), { fill: lo(t3, s2), stroke: uo(t3, c2) });
        }, SequentialMarker: function(e3, t3, n3) {
          S2("sequential", e3, i2.getScaledPath("MARKER_SEQUENTIAL", { xScaleFactor: 1, yScaleFactor: 1, containerWidth: t3.width, containerHeight: t3.height, position: { mx: (t3.width / 2 + n3.seq) / t3.width, my: (t3.height - 19) / t3.height } }), { fill: lo(t3, s2), stroke: uo(t3, c2) });
        }, CompensationMarker: function(e3, t3, n3) {
          S2("compensation", e3, i2.getScaledPath("MARKER_COMPENSATION", { xScaleFactor: 1, yScaleFactor: 1, containerWidth: t3.width, containerHeight: t3.height, position: { mx: (t3.width / 2 + n3.compensation) / t3.width, my: (t3.height - 13) / t3.height } }), { strokeWidth: 1, fill: lo(t3, s2), stroke: uo(t3, c2) });
        }, LoopMarker: function(e3, t3, n3) {
          S2("loop", e3, i2.getScaledPath("MARKER_LOOP", { xScaleFactor: 1, yScaleFactor: 1, containerWidth: t3.width, containerHeight: t3.height, position: { mx: (t3.width / 2 + n3.loop) / t3.width, my: (t3.height - 7) / t3.height } }), { strokeWidth: 1.5, fill: lo(t3, s2), stroke: uo(t3, c2), strokeMiterlimit: 0.5 });
        }, AdhocMarker: function(e3, t3, n3) {
          S2("adhoc", e3, i2.getScaledPath("MARKER_ADHOC", { xScaleFactor: 1, yScaleFactor: 1, containerWidth: t3.width, containerHeight: t3.height, position: { mx: (t3.width / 2 + n3.adhoc) / t3.width, my: (t3.height - 15) / t3.height } }), { strokeWidth: 1, fill: uo(t3, c2), stroke: uo(t3, c2) });
        } };
        function D2(e3, t3, n3) {
          var i3, r3 = Br(t3), o3 = n3 && -1 !== n3.indexOf("SubProcessMarker");
          i3 = o3 ? { seq: -21, parallel: -22, compensation: -42, loop: -18, adhoc: 10 } : { seq: -3, parallel: -6, compensation: -27, loop: 0, adhoc: 10 }, g(n3, function(n4) {
            C2(n4)(e3, t3, i3);
          }), r3.isForCompensation && C2("CompensationMarker")(e3, t3, i3), "bpmn:AdHocSubProcess" === r3.$type && C2("AdhocMarker")(e3, t3, i3);
          var a3 = r3.loopCharacteristics, s3 = a3 && a3.isSequential;
          a3 && (void 0 === s3 && C2("LoopMarker")(e3, t3, i3), false === s3 && C2("ParallelMarker")(e3, t3, i3), true === s3 && C2("SequentialMarker")(e3, t3, i3));
        }
        this._drawPath = E2, this._renderer = C2;
      }
      e(vo, it), vo.$inject = ["config.bpmnRenderer", "eventBus", "styles", "pathMap", "canvas", "textRenderer"], vo.prototype.canRender = function(e2) {
        return Mr(e2, "bpmn:BaseElement");
      }, vo.prototype.drawShape = function(e2, t2) {
        var n2 = t2.type;
        return this._renderer(n2)(e2, t2);
      }, vo.prototype.drawConnection = function(e2, t2) {
        var n2 = t2.type;
        return this._renderer(n2)(e2, t2);
      }, vo.prototype.getShapePath = function(e2) {
        return Mr(e2, "bpmn:Event") ? (n2 = (t2 = e2).x + t2.width / 2, i2 = t2.y + t2.height / 2, r2 = t2.width / 2, rt([["M", n2, i2], ["m", 0, -r2], ["a", r2, r2, 0, 1, 1, 0, 2 * r2], ["a", r2, r2, 0, 1, 1, 0, -2 * r2], ["z"]])) : Mr(e2, "bpmn:Activity") ? function(e3, t3) {
          var n3 = e3.x, i3 = e3.y, r3 = e3.width, o2 = e3.height;
          return rt([["M", n3 + t3, i3], ["l", r3 - 2 * t3, 0], ["a", t3, t3, 0, 0, 1, t3, t3], ["l", 0, o2 - 2 * t3], ["a", t3, t3, 0, 0, 1, -t3, t3], ["l", 2 * t3 - r3, 0], ["a", t3, t3, 0, 0, 1, -t3, -t3], ["l", 0, 2 * t3 - o2], ["a", t3, t3, 0, 0, 1, t3, -t3], ["z"]]);
        }(e2, 10) : Mr(e2, "bpmn:Gateway") ? function(e3) {
          var t3 = e3.width / 2, n3 = e3.height / 2;
          return rt([["M", e3.x + t3, e3.y], ["l", t3, n3], ["l", -t3, n3], ["l", -t3, -n3], ["z"]]);
        }(e2) : function(e3) {
          var t3 = e3.x, n3 = e3.y, i3 = e3.width;
          return rt([["M", t3, n3], ["l", i3, 0], ["l", 0, e3.height], ["l", -i3, 0], ["z"]]);
        }(e2);
        var t2, n2, i2, r2;
      };
      var yo = 0, go = { width: 150, height: 50 };
      function bo(e2, t2) {
        var n2;
        t2.textContent = e2;
        try {
          var i2, r2 = "" === e2;
          return t2.textContent = r2 ? "dummy" : e2, i2 = { width: (n2 = t2.getBBox()).width + 2 * n2.x, height: n2.height }, r2 && (i2.width = 0), i2;
        } catch (e3) {
          return { width: 0, height: 0 };
        }
      }
      function xo(e2, t2, n2) {
        for (var i2, r2 = e2.shift(), o2 = r2; ; ) {
          if ((i2 = bo(o2, n2)).width = o2 ? i2.width : 0, " " === o2 || "" === o2 || i2.width < Math.round(t2) || o2.length < 2) return _o(e2, o2, r2, i2);
          o2 = Eo(o2, i2.width, t2);
        }
      }
      function _o(e2, t2, n2, i2) {
        if (t2.length < n2.length) {
          var r2 = n2.slice(t2.length).trim();
          e2.unshift(r2);
        }
        return { width: i2.width, height: i2.height, text: t2 };
      }
      var wo = "­";
      function Eo(e2, t2, n2) {
        var i2 = Math.max(e2.length * (n2 / t2), 1), r2 = function(e3, t3) {
          var n3, i3 = e3.split(/(\s|-|\u00AD)/g), r3 = [], o2 = 0;
          if (i3.length > 1) for (; n3 = i3.shift(); ) {
            if (!(n3.length + o2 < t3)) {
              "-" !== n3 && n3 !== wo || r3.pop();
              break;
            }
            r3.push(n3), o2 += n3.length;
          }
          var a2 = r3[r3.length - 1];
          return a2 && a2 === wo && (r3[r3.length - 1] = "-"), r3.join("");
        }(e2, i2);
        return r2 || (r2 = e2.slice(0, Math.max(Math.round(i2 - 1), 1))), r2;
      }
      function So(e2) {
        this._config = L({}, { size: go, padding: yo, style: {}, align: "center-top" }, e2 || {});
      }
      So.prototype.createText = function(e2, t2) {
        return this.layoutText(e2, t2).element;
      }, So.prototype.getDimensions = function(e2, t2) {
        return this.layoutText(e2, t2).dimensions;
      }, So.prototype.layoutText = function(e2, t2) {
        var n2 = L({}, this._config.size, t2.box), i2 = L({}, this._config.style, t2.style), r2 = function(e3) {
          var t3 = e3.split("-");
          return { horizontal: t3[0] || "center", vertical: t3[1] || "top" };
        }(t2.align || this._config.align), o2 = function(e3) {
          return l(e3) ? L({ top: 0, left: 0, right: 0, bottom: 0 }, e3) : { top: e3, left: e3, right: e3, bottom: e3 };
        }(void 0 !== t2.padding ? t2.padding : this._config.padding), a2 = t2.fitBox || false, s2 = function(e3) {
          if ("fontSize" in e3 && "lineHeight" in e3) return e3.lineHeight * parseInt(e3.fontSize, 10);
        }(i2), c2 = e2.split(/\u00AD?\r?\n/), p2 = [], u2 = n2.width - o2.left - o2.right, h2 = De("text");
        for (we(h2, { x: 0, y: 0 }), we(h2, i2), ge(function() {
          var e3 = document.getElementById("helper-svg");
          return e3 || (we(e3 = De("svg"), { id: "helper-svg" }), q(e3, { visibility: "hidden", position: "fixed", width: 0, height: 0 }), document.body.appendChild(e3)), e3;
        }(), h2); c2.length; ) p2.push(xo(c2, u2, h2));
        "middle" === r2.vertical && (o2.top = o2.bottom = 0);
        var d2 = x(p2, function(e3, t3, n3) {
          return e3 + (s2 || t3.height);
        }, 0) + o2.top + o2.bottom, f2 = x(p2, function(e3, t3, n3) {
          return t3.width > e3 ? t3.width : e3;
        }, 0), m2 = o2.top;
        "middle" === r2.vertical && (m2 += (n2.height - d2) / 2), m2 -= (s2 || p2[0].height) / 4;
        var v2 = De("text");
        return we(v2, i2), g(p2, function(e3) {
          var t3;
          switch (m2 += s2 || e3.height, r2.horizontal) {
            case "left":
              t3 = o2.left;
              break;
            case "right":
              t3 = (a2 ? f2 : u2) - o2.right - e3.width;
              break;
            default:
              t3 = Math.max(((a2 ? f2 : u2) - e3.width) / 2 + o2.left, 0);
          }
          var n3 = De("tspan");
          we(n3, { x: t3, y: m2 }), n3.textContent = e3.text, ge(v2, n3);
        }), Re(h2), { dimensions: { width: f2, height: d2 }, element: v2 };
      };
      function Co(e2) {
        var t2 = L({ fontFamily: "Arial, sans-serif", fontSize: 12, fontWeight: "normal", lineHeight: 1.2 }, e2 && e2.defaultStyle || {}), n2 = parseInt(t2.fontSize, 10) - 1, i2 = L({}, t2, { fontSize: n2 }, e2 && e2.externalStyle || {}), r2 = new So({ style: t2 });
        this.getExternalLabelBounds = function(e3, t3) {
          var n3 = r2.getDimensions(t3, { box: { width: 90, height: 30 }, style: i2 });
          return { x: Math.round(e3.x + e3.width / 2 - n3.width / 2), y: Math.round(e3.y), width: Math.ceil(n3.width), height: Math.ceil(n3.height) };
        }, this.getTextAnnotationBounds = function(e3, n3) {
          var i3 = r2.getDimensions(n3, { box: e3, style: t2, align: "left-top", padding: 5 });
          return { x: e3.x, y: e3.y, width: e3.width, height: Math.max(30, Math.round(i3.height)) };
        }, this.createText = function(e3, t3) {
          return r2.createText(e3, t3 || {});
        }, this.getDefaultStyle = function() {
          return t2;
        }, this.getExternalStyle = function() {
          return i2;
        };
      }
      Co.$inject = ["config.textRenderer"];
      var Ro = /\{([^{}]+)\}/g, Po = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g;
      var To = { __init__: ["bpmnRenderer"], bpmnRenderer: ["type", vo], textRenderer: ["type", Co], pathMap: ["type", function() {
        this.pathMap = { EVENT_MESSAGE: { d: "m {mx},{my} l 0,{e.y1} l {e.x1},0 l 0,-{e.y1} z l {e.x0},{e.y0} l {e.x0},-{e.y0}", height: 36, width: 36, heightElements: [6, 14], widthElements: [10.5, 21] }, EVENT_SIGNAL: { d: "M {mx},{my} l {e.x0},{e.y0} l -{e.x1},0 Z", height: 36, width: 36, heightElements: [18], widthElements: [10, 20] }, EVENT_ESCALATION: { d: "M {mx},{my} l {e.x0},{e.y0} l -{e.x0},-{e.y1} l -{e.x0},{e.y1} Z", height: 36, width: 36, heightElements: [20, 7], widthElements: [8] }, EVENT_CONDITIONAL: { d: "M {e.x0},{e.y0} l {e.x1},0 l 0,{e.y2} l -{e.x1},0 Z M {e.x2},{e.y3} l {e.x0},0 M {e.x2},{e.y4} l {e.x0},0 M {e.x2},{e.y5} l {e.x0},0 M {e.x2},{e.y6} l {e.x0},0 M {e.x2},{e.y7} l {e.x0},0 M {e.x2},{e.y8} l {e.x0},0 ", height: 36, width: 36, heightElements: [8.5, 14.5, 18, 11.5, 14.5, 17.5, 20.5, 23.5, 26.5], widthElements: [10.5, 14.5, 12.5] }, EVENT_LINK: { d: "m {mx},{my} 0,{e.y0} -{e.x1},0 0,{e.y1} {e.x1},0 0,{e.y0} {e.x0},-{e.y2} -{e.x0},-{e.y2} z", height: 36, width: 36, heightElements: [4.4375, 6.75, 7.8125], widthElements: [9.84375, 13.5] }, EVENT_ERROR: { d: "m {mx},{my} {e.x0},-{e.y0} {e.x1},-{e.y1} {e.x2},{e.y2} {e.x3},-{e.y3} -{e.x4},{e.y4} -{e.x5},-{e.y5} z", height: 36, width: 36, heightElements: [0.023, 8.737, 8.151, 16.564, 10.591, 8.714], widthElements: [0.085, 6.672, 6.97, 4.273, 5.337, 6.636] }, EVENT_CANCEL_45: { d: "m {mx},{my} -{e.x1},0 0,{e.x0} {e.x1},0 0,{e.y1} {e.x0},0 0,-{e.y1} {e.x1},0 0,-{e.y0} -{e.x1},0 0,-{e.y1} -{e.x0},0 z", height: 36, width: 36, heightElements: [4.75, 8.5], widthElements: [4.75, 8.5] }, EVENT_COMPENSATION: { d: "m {mx},{my} {e.x0},-{e.y0} 0,{e.y1} z m {e.x1},-{e.y2} {e.x2},-{e.y3} 0,{e.y1} -{e.x2},-{e.y3} z", height: 36, width: 36, heightElements: [6.5, 13, 0.4, 6.1], widthElements: [9, 9.3, 8.7] }, EVENT_TIMER_WH: { d: "M {mx},{my} l {e.x0},-{e.y0} m -{e.x0},{e.y0} l {e.x1},{e.y1} ", height: 36, width: 36, heightElements: [10, 2], widthElements: [3, 7] }, EVENT_TIMER_LINE: { d: "M {mx},{my} m {e.x0},{e.y0} l -{e.x1},{e.y1} ", height: 36, width: 36, heightElements: [10, 3], widthElements: [0, 0] }, EVENT_MULTIPLE: { d: "m {mx},{my} {e.x1},-{e.y0} {e.x1},{e.y0} -{e.x0},{e.y1} -{e.x2},0 z", height: 36, width: 36, heightElements: [6.28099, 12.56199], widthElements: [3.1405, 9.42149, 12.56198] }, EVENT_PARALLEL_MULTIPLE: { d: "m {mx},{my} {e.x0},0 0,{e.y1} {e.x1},0 0,{e.y0} -{e.x1},0 0,{e.y1} -{e.x0},0 0,-{e.y1} -{e.x1},0 0,-{e.y0} {e.x1},0 z", height: 36, width: 36, heightElements: [2.56228, 7.68683], widthElements: [2.56228, 7.68683] }, GATEWAY_EXCLUSIVE: { d: "m {mx},{my} {e.x0},{e.y0} {e.x1},{e.y0} {e.x2},0 {e.x4},{e.y2} {e.x4},{e.y1} {e.x2},0 {e.x1},{e.y3} {e.x0},{e.y3} {e.x3},0 {e.x5},{e.y1} {e.x5},{e.y2} {e.x3},0 z", height: 17.5, width: 17.5, heightElements: [8.5, 6.5312, -6.5312, -8.5], widthElements: [6.5, -6.5, 3, -3, 5, -5] }, GATEWAY_PARALLEL: { d: "m {mx},{my} 0,{e.y1} -{e.x1},0 0,{e.y0} {e.x1},0 0,{e.y1} {e.x0},0 0,-{e.y1} {e.x1},0 0,-{e.y0} -{e.x1},0 0,-{e.y1} -{e.x0},0 z", height: 30, width: 30, heightElements: [5, 12.5], widthElements: [5, 12.5] }, GATEWAY_EVENT_BASED: { d: "m {mx},{my} {e.x0},{e.y0} {e.x0},{e.y1} {e.x1},{e.y2} {e.x2},0 z", height: 11, width: 11, heightElements: [-6, 6, 12, -12], widthElements: [9, -3, -12] }, GATEWAY_COMPLEX: { d: "m {mx},{my} 0,{e.y0} -{e.x0},-{e.y1} -{e.x1},{e.y2} {e.x0},{e.y1} -{e.x2},0 0,{e.y3} {e.x2},0  -{e.x0},{e.y1} l {e.x1},{e.y2} {e.x0},-{e.y1} 0,{e.y0} {e.x3},0 0,-{e.y0} {e.x0},{e.y1} {e.x1},-{e.y2} -{e.x0},-{e.y1} {e.x2},0 0,-{e.y3} -{e.x2},0 {e.x0},-{e.y1} -{e.x1},-{e.y2} -{e.x0},{e.y1} 0,-{e.y0} -{e.x3},0 z", height: 17.125, width: 17.125, heightElements: [4.875, 3.4375, 2.125, 3], widthElements: [3.4375, 2.125, 4.875, 3] }, DATA_OBJECT_PATH: { d: "m 0,0 {e.x1},0 {e.x0},{e.y0} 0,{e.y1} -{e.x2},0 0,-{e.y2} {e.x1},0 0,{e.y0} {e.x0},0", height: 61, width: 51, heightElements: [10, 50, 60], widthElements: [10, 40, 50, 60] }, DATA_OBJECT_COLLECTION_PATH: { d: "m{mx},{my} m 3,2 l 0,10 m 3,-10 l 0,10 m 3,-10 l 0,10", height: 10, width: 10, heightElements: [], widthElements: [] }, DATA_ARROW: { d: "m 5,9 9,0 0,-3 5,5 -5,5 0,-3 -9,0 z", height: 61, width: 51, heightElements: [], widthElements: [] }, DATA_STORE: { d: "m  {mx},{my} l  0,{e.y2} c  {e.x0},{e.y1} {e.x1},{e.y1}  {e.x2},0 l  0,-{e.y2} c -{e.x0},-{e.y1} -{e.x1},-{e.y1} -{e.x2},0c  {e.x0},{e.y1} {e.x1},{e.y1}  {e.x2},0 m  -{e.x2},{e.y0}c  {e.x0},{e.y1} {e.x1},{e.y1} {e.x2},0m  -{e.x2},{e.y0}c  {e.x0},{e.y1} {e.x1},{e.y1}  {e.x2},0", height: 61, width: 61, heightElements: [7, 10, 45], widthElements: [2, 58, 60] }, TEXT_ANNOTATION: { d: "m {mx}, {my} m 10,0 l -10,0 l 0,{e.y0} l 10,0", height: 30, width: 10, heightElements: [30], widthElements: [10] }, MARKER_SUB_PROCESS: { d: "m{mx},{my} m 7,2 l 0,10 m -5,-5 l 10,0", height: 10, width: 10, heightElements: [], widthElements: [] }, MARKER_PARALLEL: { d: "m{mx},{my} m 3,2 l 0,10 m 3,-10 l 0,10 m 3,-10 l 0,10", height: 10, width: 10, heightElements: [], widthElements: [] }, MARKER_SEQUENTIAL: { d: "m{mx},{my} m 0,3 l 10,0 m -10,3 l 10,0 m -10,3 l 10,0", height: 10, width: 10, heightElements: [], widthElements: [] }, MARKER_COMPENSATION: { d: "m {mx},{my} 7,-5 0,10 z m 7.1,-0.3 6.9,-4.7 0,10 -6.9,-4.7 z", height: 10, width: 21, heightElements: [], widthElements: [] }, MARKER_LOOP: { d: "m {mx},{my} c 3.526979,0 6.386161,-2.829858 6.386161,-6.320661 0,-3.490806 -2.859182,-6.320661 -6.386161,-6.320661 -3.526978,0 -6.38616,2.829855 -6.38616,6.320661 0,1.745402 0.714797,3.325567 1.870463,4.469381 0.577834,0.571908 1.265885,1.034728 2.029916,1.35457 l -0.718163,-3.909793 m 0.718163,3.909793 -3.885211,0.802902", height: 13.9, width: 13.7, heightElements: [], widthElements: [] }, MARKER_ADHOC: { d: "m {mx},{my} m 0.84461,2.64411 c 1.05533,-1.23780996 2.64337,-2.07882 4.29653,-1.97997996 2.05163,0.0805 3.85579,1.15803 5.76082,1.79107 1.06385,0.34139996 2.24454,0.1438 3.18759,-0.43767 0.61743,-0.33642 1.2775,-0.64078 1.7542,-1.17511 0,0.56023 0,1.12046 0,1.6807 -0.98706,0.96237996 -2.29792,1.62393996 -3.6918,1.66181996 -1.24459,0.0927 -2.46671,-0.2491 -3.59505,-0.74812 -1.35789,-0.55965 -2.75133,-1.33436996 -4.27027,-1.18121996 -1.37741,0.14601 -2.41842,1.13685996 -3.44288,1.96782996 z", height: 4, width: 15, heightElements: [], widthElements: [] }, TASK_TYPE_SEND: { d: "m {mx},{my} l 0,{e.y1} l {e.x1},0 l 0,-{e.y1} z l {e.x0},{e.y0} l {e.x0},-{e.y0}", height: 14, width: 21, heightElements: [6, 14], widthElements: [10.5, 21] }, TASK_TYPE_SCRIPT: { d: "m {mx},{my} c 9.966553,-6.27276 -8.000926,-7.91932 2.968968,-14.938 l -8.802728,0 c -10.969894,7.01868 6.997585,8.66524 -2.968967,14.938 z m -7,-12 l 5,0 m -4.5,3 l 4.5,0 m -3,3 l 5,0m -4,3 l 5,0", height: 15, width: 12.6, heightElements: [6, 14], widthElements: [10.5, 21] }, TASK_TYPE_USER_1: { d: "m {mx},{my} c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 -4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 zm -8,6 l 0,5.5 m 11,0 l 0,-5" }, TASK_TYPE_USER_2: { d: "m {mx},{my} m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 -2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 " }, TASK_TYPE_USER_3: { d: "m {mx},{my} m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 -4.20799998,3.36699999 -4.20699998,4.34799999 z" }, TASK_TYPE_MANUAL: { d: "m {mx},{my} c 0.234,-0.01 5.604,0.008 8.029,0.004 0.808,0 1.271,-0.172 1.417,-0.752 0.227,-0.898 -0.334,-1.314 -1.338,-1.316 -2.467,-0.01 -7.886,-0.004 -8.108,-0.004 -0.014,-0.079 0.016,-0.533 0,-0.61 0.195,-0.042 8.507,0.006 9.616,0.002 0.877,-0.007 1.35,-0.438 1.353,-1.208 0.003,-0.768 -0.479,-1.09 -1.35,-1.091 -2.968,-0.002 -9.619,-0.013 -9.619,-0.013 v -0.591 c 0,0 5.052,-0.016 7.225,-0.016 0.888,-0.002 1.354,-0.416 1.351,-1.193 -0.006,-0.761 -0.492,-1.196 -1.361,-1.196 -3.473,-0.005 -10.86,-0.003 -11.0829995,-0.003 -0.022,-0.047 -0.045,-0.094 -0.069,-0.139 0.3939995,-0.319 2.0409995,-1.626 2.4149995,-2.017 0.469,-0.4870005 0.519,-1.1650005 0.162,-1.6040005 -0.414,-0.511 -0.973,-0.5 -1.48,-0.236 -1.4609995,0.764 -6.5999995,3.6430005 -7.7329995,4.2710005 -0.9,0.499 -1.516,1.253 -1.882,2.19 -0.37000002,0.95 -0.17,2.01 -0.166,2.979 0.004,0.718 -0.27300002,1.345 -0.055,2.063 0.629,2.087 2.425,3.312 4.859,3.318 4.6179995,0.014 9.2379995,-0.139 13.8569995,-0.158 0.755,-0.004 1.171,-0.301 1.182,-1.033 0.012,-0.754 -0.423,-0.969 -1.183,-0.973 -1.778,-0.01 -5.824,-0.004 -6.04,-0.004 10e-4,-0.084 0.003,-0.586 10e-4,-0.67 z" }, TASK_TYPE_INSTANTIATING_SEND: { d: "m {mx},{my} l 0,8.4 l 12.6,0 l 0,-8.4 z l 6.3,3.6 l 6.3,-3.6" }, TASK_TYPE_SERVICE: { d: "m {mx},{my} v -1.71335 c 0.352326,-0.0705 0.703932,-0.17838 1.047628,-0.32133 0.344416,-0.14465 0.665822,-0.32133 0.966377,-0.52145 l 1.19431,1.18005 1.567487,-1.57688 -1.195028,-1.18014 c 0.403376,-0.61394 0.683079,-1.29908 0.825447,-2.01824 l 1.622133,-0.01 v -2.2196 l -1.636514,0.01 c -0.07333,-0.35153 -0.178319,-0.70024 -0.323564,-1.04372 -0.145244,-0.34406 -0.321407,-0.6644 -0.522735,-0.96217 l 1.131035,-1.13631 -1.583305,-1.56293 -1.129598,1.13589 c -0.614052,-0.40108 -1.302883,-0.68093 -2.022633,-0.82247 l 0.0093,-1.61852 h -2.241173 l 0.0042,1.63124 c -0.353763,0.0736 -0.705369,0.17977 -1.049785,0.32371 -0.344415,0.14437 -0.665102,0.32092 -0.9635006,0.52046 l -1.1698628,-1.15823 -1.5667691,1.5792 1.1684265,1.15669 c -0.4026573,0.61283 -0.68308,1.29797 -0.8247287,2.01713 l -1.6588041,0.003 v 2.22174 l 1.6724648,-0.006 c 0.073327,0.35077 0.1797598,0.70243 0.3242851,1.04472 0.1452428,0.34448 0.3214064,0.6644 0.5227339,0.96066 l -1.1993431,1.19723 1.5840256,1.56011 1.1964668,-1.19348 c 0.6140517,0.40346 1.3028827,0.68232 2.0233517,0.82331 l 7.19e-4,1.69892 h 2.226848 z m 0.221462,-3.9957 c -1.788948,0.7502 -3.8576,-0.0928 -4.6097055,-1.87438 -0.7521065,-1.78321 0.090598,-3.84627 1.8802645,-4.59604 1.78823,-0.74936 3.856881,0.0929 4.608987,1.87437 0.752106,1.78165 -0.0906,3.84612 -1.879546,4.59605 z" }, TASK_TYPE_SERVICE_FILL: { d: "m {mx},{my} c -1.788948,0.7502 -3.8576,-0.0928 -4.6097055,-1.87438 -0.7521065,-1.78321 0.090598,-3.84627 1.8802645,-4.59604 1.78823,-0.74936 3.856881,0.0929 4.608987,1.87437 0.752106,1.78165 -0.0906,3.84612 -1.879546,4.59605 z" }, TASK_TYPE_BUSINESS_RULE_HEADER: { d: "m {mx},{my} 0,4 20,0 0,-4 z" }, TASK_TYPE_BUSINESS_RULE_MAIN: { d: "m {mx},{my} 0,12 20,0 0,-12 zm 0,8 l 20,0 m -13,-4 l 0,8" }, MESSAGE_FLOW_MARKER: { d: "m {mx},{my} m -10.5 ,-7 l 0,14 l 21,0 l 0,-14 z l 10.5,6 l 10.5,-6" } }, this.getRawPath = function(e2) {
          return this.pathMap[e2].d;
        }, this.getScaledPath = function(e2, t2) {
          var n2, i2, r2 = this.pathMap[e2];
          t2.abspos ? (n2 = t2.abspos.x, i2 = t2.abspos.y) : (n2 = t2.containerWidth * t2.position.mx, i2 = t2.containerHeight * t2.position.my);
          var o2 = {};
          if (t2.position) {
            for (var a2 = t2.containerHeight / r2.height * t2.yScaleFactor, s2 = t2.containerWidth / r2.width * t2.xScaleFactor, c2 = 0; c2 < r2.heightElements.length; c2++) o2["y" + c2] = r2.heightElements[c2] * a2;
            for (var p2 = 0; p2 < r2.widthElements.length; p2++) o2["x" + p2] = r2.widthElements[p2] * s2;
          }
          var l2, u2, h2 = (l2 = r2.d, u2 = { mx: n2, my: i2, e: o2 }, String(l2).replace(Ro, function(e3, t3) {
            return function(e4, t4, n3) {
              var i3 = n3;
              return t4.replace(Po, function(e5, t5, n4, r3, o3) {
                t5 = t5 || r3, i3 && (t5 in i3 && (i3 = i3[t5]), "function" == typeof i3 && o3 && (i3 = i3()));
              }), i3 = (null == i3 || i3 == n3 ? e4 : i3) + "";
            }(e3, t3, u2);
          }));
          return h2;
        };
      }] };
      var ko = { translate: ["value", function(e2, t2) {
        return t2 = t2 || {}, e2.replace(/{([^}]+)}/g, function(e3, n2) {
          return t2[n2] || "{" + n2 + "}";
        });
      }] };
      function Ao(e2, t2, n2) {
        return L({ id: e2.id, type: e2.$type, businessObject: e2, di: t2 }, n2);
      }
      function Mo(e2, t2, n2) {
        var i2 = e2.waypoint;
        return !i2 || i2.length < 2 ? [_n(t2), _n(n2)] : i2.map(function(e3) {
          return { x: e3.x, y: e3.y };
        });
      }
      function Do(e2, t2, n2, i2) {
        return new Error(e2("element {element} referenced by {referenced}#{property} not yet drawn", { element: Cr(n2), referenced: Cr(t2), property: i2 }));
      }
      function Bo(e2, t2, n2, i2, r2, o2) {
        this._eventBus = e2, this._canvas = t2, this._elementFactory = n2, this._elementRegistry = i2, this._translate = r2, this._textRenderer = o2;
      }
      Bo.$inject = ["eventBus", "canvas", "elementFactory", "elementRegistry", "translate", "textRenderer"], Bo.prototype.add = function(e2, t2, n2) {
        var i2, r2, o2, a2 = this._translate;
        if (Mr(t2, "bpmndi:BPMNPlane")) {
          var s2 = Mr(e2, "bpmn:SubProcess") ? { id: e2.id + "_plane" } : {};
          i2 = this._elementFactory.createRoot(Ao(e2, t2, s2)), this._canvas.addRootElement(i2);
        } else if (Mr(t2, "bpmndi:BPMNShape")) {
          var c2 = !Zr(e2, t2), p2 = function(e3) {
            return Mr(e3, "bpmn:Group");
          }(e2);
          r2 = n2 && (n2.hidden || n2.collapsed);
          var l2 = t2.bounds;
          i2 = this._elementFactory.createShape(Ao(e2, t2, { collapsed: c2, hidden: r2, x: Math.round(l2.x), y: Math.round(l2.y), width: Math.round(l2.width), height: Math.round(l2.height), isFrame: p2 })), Mr(e2, "bpmn:BoundaryEvent") && this._attachBoundary(e2, i2), Mr(e2, "bpmn:Lane") && (o2 = 0), Mr(e2, "bpmn:DataStoreReference") && (function(e3, t3) {
            var n3 = t3.x, i3 = t3.y;
            return n3 >= e3.x && n3 <= e3.x + e3.width && i3 >= e3.y && i3 <= e3.y + e3.height;
          }(n2, _n(l2)) || (n2 = this._canvas.findRoot(n2))), this._canvas.addShape(i2, n2, o2);
        } else {
          if (!Mr(t2, "bpmndi:BPMNEdge")) throw new Error(a2("unknown di {di} for element {semantic}", { di: Cr(t2), semantic: Cr(e2) }));
          var u2 = this._getSource(e2), h2 = this._getTarget(e2);
          r2 = n2 && (n2.hidden || n2.collapsed), i2 = this._elementFactory.createConnection(Ao(e2, t2, { hidden: r2, source: u2, target: h2, waypoints: Mo(t2, u2, h2) })), Mr(e2, "bpmn:DataAssociation") && (n2 = this._canvas.findRoot(n2)), this._canvas.addConnection(i2, n2, o2);
        }
        return no(e2) && so(i2) && this.addLabel(e2, t2, i2), this._eventBus.fire("bpmnElement.added", { element: i2 }), i2;
      }, Bo.prototype._attachBoundary = function(e2, t2) {
        var n2 = this._translate, i2 = e2.attachedToRef;
        if (!i2) throw new Error(n2("missing {semantic}#attachedToRef", { semantic: Cr(e2) }));
        var r2 = this._elementRegistry.get(i2.id), o2 = r2 && r2.attachers;
        if (!r2) throw Do(n2, e2, i2, "attachedToRef");
        t2.host = r2, o2 || (r2.attachers = o2 = []), -1 === o2.indexOf(t2) && o2.push(t2);
      }, Bo.prototype.addLabel = function(e2, t2, n2) {
        var i2, r2, o2;
        return i2 = function(e3, t3) {
          var n3, i3, r3, o3 = e3.label;
          return o3 && o3.bounds ? (r3 = o3.bounds, i3 = { width: Math.max(eo.width, r3.width), height: r3.height }, n3 = { x: r3.x + r3.width / 2, y: r3.y + r3.height / 2 }) : (n3 = oo(t3), i3 = eo), L({ x: n3.x - i3.width / 2, y: n3.y - i3.height / 2 }, i3);
        }(t2, n2), (r2 = so(n2)) && (i2 = this._textRenderer.getExternalLabelBounds(i2, r2)), o2 = this._elementFactory.createLabel(Ao(e2, t2, { id: e2.id + "_label", labelTarget: n2, type: "label", hidden: n2.hidden || !so(n2), x: Math.round(i2.x), y: Math.round(i2.y), width: Math.round(i2.width), height: Math.round(i2.height) })), this._canvas.addShape(o2, n2.parent);
      }, Bo.prototype._getConnectedElement = function(e2, t2) {
        var n2, i2, r2 = e2.$type, o2 = this._translate;
        if (i2 = e2[t2 + "Ref"], "source" === t2 && "bpmn:DataInputAssociation" === r2 && (i2 = i2 && i2[0]), ("source" === t2 && "bpmn:DataOutputAssociation" === r2 || "target" === t2 && "bpmn:DataInputAssociation" === r2) && (i2 = e2.$parent), n2 = i2 && this._getElement(i2)) return n2;
        throw i2 ? Do(o2, e2, i2, t2 + "Ref") : new Error(o2("{semantic}#{side} Ref not specified", { semantic: Cr(e2), side: t2 }));
      }, Bo.prototype._getSource = function(e2) {
        return this._getConnectedElement(e2, "source");
      }, Bo.prototype._getTarget = function(e2) {
        return this._getConnectedElement(e2, "target");
      }, Bo.prototype._getElement = function(e2) {
        return this._elementRegistry.get(e2.id);
      };
      var No = { __depends__: [To, { __depends__: [ko], bpmnImporter: ["type", Bo] }] };
      function Oo(e2) {
        e2 && "function" == typeof e2.stopPropagation && e2.stopPropagation();
      }
      function jo(e2) {
        return e2.originalEvent || e2.srcEvent;
      }
      function Lo(e2) {
        Oo(e2), Oo(jo(e2));
      }
      function Io(e2) {
        return e2.pointers && e2.pointers.length && (e2 = e2.pointers[0]), e2.touches && e2.touches.length && (e2 = e2.touches[0]), e2 ? { x: e2.clientX, y: e2.clientY } : null;
      }
      function $o(e2, t2) {
        return (jo(e2) || e2).button === t2;
      }
      function Fo(e2) {
        return $o(e2, 0);
      }
      function zo(e2) {
        var t2 = jo(e2) || e2;
        return !!Fo(e2) && (/mac/i.test(navigator.platform) ? t2.metaKey : t2.ctrlKey);
      }
      function Ho(e2) {
        var t2 = jo(e2) || e2;
        return Fo(e2) && t2.shiftKey;
      }
      function Go(e2) {
        return true;
      }
      function Vo(e2) {
        return Fo(e2) || function(e3) {
          return $o(e3, 1);
        }(e2);
      }
      function Wo(e2, t2, n2) {
        var i2 = this;
        function r2(n3, i3, r3) {
          var o3, a3;
          (function(e3, t3) {
            var n4 = c2[e3] || Fo;
            return !n4(t3);
          })(n3, i3) || (r3 ? a3 = t2.getGraphics(r3) : (o3 = i3.delegateTarget || i3.target) && (a3 = o3, r3 = t2.get(a3)), a3 && r3 && false === e2.fire(n3, { element: r3, gfx: a3, originalEvent: i3 }) && (i3.stopPropagation(), i3.preventDefault()));
        }
        var o2 = {};
        function a2(e3) {
          return o2[e3];
        }
        var s2 = { click: "element.click", contextmenu: "element.contextmenu", dblclick: "element.dblclick", mousedown: "element.mousedown", mousemove: "element.mousemove", mouseover: "element.hover", mouseout: "element.out", mouseup: "element.mouseup" }, c2 = { "element.contextmenu": Go, "element.mousedown": Vo, "element.mouseup": Vo, "element.click": Vo, "element.dblclick": Vo };
        var p2 = "svg, .djs-element";
        function l2(e3, t3, n3, i3) {
          var a3 = o2[n3] = function(e4) {
            r2(n3, e4);
          };
          i3 && (c2[n3] = i3), a3.$delegate = pe.bind(e3, p2, t3, a3);
        }
        function u2(e3, t3, n3) {
          var i3 = a2(n3);
          i3 && pe.unbind(e3, t3, i3.$delegate);
        }
        e2.on("canvas.destroy", function(e3) {
          var t3;
          t3 = e3.svg, g(s2, function(e4, n3) {
            u2(t3, n3, e4);
          });
        }), e2.on("canvas.init", function(e3) {
          var t3;
          t3 = e3.svg, g(s2, function(e4, n3) {
            l2(t3, n3, e4);
          });
        }), e2.on(["shape.added", "connection.added"], function(t3) {
          var n3 = t3.element, i3 = t3.gfx;
          e2.fire("interactionEvents.createHit", { element: n3, gfx: i3 });
        }), e2.on(["shape.changed", "connection.changed"], 500, function(t3) {
          var n3 = t3.element, i3 = t3.gfx;
          e2.fire("interactionEvents.updateHit", { element: n3, gfx: i3 });
        }), e2.on("interactionEvents.createHit", 500, function(e3) {
          var t3 = e3.element, n3 = e3.gfx;
          i2.createDefaultHit(t3, n3);
        }), e2.on("interactionEvents.updateHit", function(e3) {
          var t3 = e3.element, n3 = e3.gfx;
          i2.updateDefaultHit(t3, n3);
        });
        var h2 = m2("djs-hit djs-hit-stroke"), d2 = m2("djs-hit djs-hit-click-stroke"), f2 = { all: m2("djs-hit djs-hit-all"), "click-stroke": d2, stroke: h2, "no-move": m2("djs-hit djs-hit-no-move") };
        function m2(e3, t3) {
          return t3 = L({ stroke: "white", strokeWidth: 15 }, t3 || {}), n2.cls(e3, ["no-fill", "no-border"], t3);
        }
        function v2(e3, t3) {
          var n3 = f2[t3];
          if (!n3) throw new Error("invalid hit type <" + t3 + ">");
          return we(e3, n3), e3;
        }
        function y2(e3, t3) {
          ge(e3, t3);
        }
        this.removeHits = function(e3) {
          g(me(".djs-hit", e3), Re);
        }, this.createDefaultHit = function(e3, t3) {
          var n3, i3 = e3.waypoints, r3 = e3.isFrame;
          return i3 ? this.createWaypointsHit(t3, i3) : (n3 = r3 ? "stroke" : "all", this.createBoxHit(t3, n3, { width: e3.width, height: e3.height }));
        }, this.createWaypointsHit = function(e3, t3) {
          var n3 = pt(t3);
          return v2(n3, "stroke"), y2(e3, n3), n3;
        }, this.createBoxHit = function(e3, t3, n3) {
          n3 = L({ x: 0, y: 0 }, n3);
          var i3 = De("rect");
          return v2(i3, t3), we(i3, n3), y2(e3, i3), i3;
        }, this.updateDefaultHit = function(e3, t3) {
          var n3 = fe(".djs-hit", t3);
          if (n3) return e3.waypoints ? lt(n3, e3.waypoints) : we(n3, { width: e3.width, height: e3.height }), n3;
        }, this.fire = r2, this.triggerMouseEvent = function(e3, t3, n3) {
          var i3 = s2[e3];
          if (!i3) throw new Error("unmapped DOM event name <" + e3 + ">");
          return r2(i3, t3, n3);
        }, this.mouseHandler = a2, this.registerEvent = l2, this.unregisterEvent = u2;
      }
      Wo.$inject = ["eventBus", "elementRegistry", "styles"];
      var Uo = { __init__: ["interactionEvents"], interactionEvents: ["type", Wo] };
      function qo(e2, t2) {
        this.offset = 6;
        var n2 = t2.cls("djs-outline", ["no-fill"]), i2 = this;
        function r2(e3, t3) {
          var i3 = De("rect");
          return we(i3, L({ x: 10, y: 10, rx: 4, width: 100, height: 100 }, n2)), ge(e3, i3), i3;
        }
        e2.on(["shape.added", "shape.changed"], 500, function(e3) {
          var t3 = e3.element, n3 = e3.gfx, o2 = fe(".djs-outline", n3);
          o2 || (o2 = r2(n3)), i2.updateShapeOutline(o2, t3);
        }), e2.on(["connection.added", "connection.changed"], function(e3) {
          var t3 = e3.element, n3 = e3.gfx, o2 = fe(".djs-outline", n3);
          o2 || (o2 = r2(n3)), i2.updateConnectionOutline(o2, t3);
        });
      }
      qo.prototype.updateShapeOutline = function(e2, t2) {
        we(e2, { x: -this.offset, y: -this.offset, width: t2.width + 2 * this.offset, height: t2.height + 2 * this.offset });
      }, qo.prototype.updateConnectionOutline = function(e2, t2) {
        var n2 = vt(t2);
        we(e2, { x: n2.x - this.offset, y: n2.y - this.offset, width: n2.width + 2 * this.offset, height: n2.height + 2 * this.offset });
      }, qo.$inject = ["eventBus", "styles", "elementRegistry"];
      var Ko = { __init__: ["outline"], outline: ["type", qo] };
      function Yo(e2, t2) {
        this._eventBus = e2, this._canvas = t2, this._selectedElements = [];
        var n2 = this;
        e2.on(["shape.remove", "connection.remove"], function(e3) {
          var t3 = e3.element;
          n2.deselect(t3);
        }), e2.on(["diagram.clear", "root.set"], function(e3) {
          n2.select(null);
        });
      }
      Yo.$inject = ["eventBus", "canvas"], Yo.prototype.deselect = function(e2) {
        var t2 = this._selectedElements, n2 = t2.indexOf(e2);
        if (-1 !== n2) {
          var i2 = t2.slice();
          t2.splice(n2, 1), this._eventBus.fire("selection.changed", { oldSelection: i2, newSelection: t2 });
        }
      }, Yo.prototype.get = function() {
        return this._selectedElements;
      }, Yo.prototype.isSelected = function(e2) {
        return -1 !== this._selectedElements.indexOf(e2);
      }, Yo.prototype.select = function(e2, t2) {
        var n2 = this._selectedElements, i2 = n2.slice();
        p(e2) || (e2 = e2 ? [e2] : []);
        var r2 = this._canvas, o2 = r2.getRootElement();
        e2 = e2.filter(function(e3) {
          var t3 = r2.findRoot(e3);
          return o2 === t3;
        }), t2 ? g(e2, function(e3) {
          -1 === n2.indexOf(e3) && n2.push(e3);
        }) : this._selectedElements = n2 = e2.slice(), this._eventBus.fire("selection.changed", { oldSelection: i2, newSelection: n2 });
      };
      var Xo = "hover", Zo = "selected";
      function Qo(e2, t2, n2) {
        this._canvas = e2;
        var i2 = this;
        function r2(t3, n3) {
          e2.addMarker(t3, n3);
        }
        function o2(t3, n3) {
          e2.removeMarker(t3, n3);
        }
        this._multiSelectionBox = null, t2.on("element.hover", function(e3) {
          r2(e3.element, Xo);
        }), t2.on("element.out", function(e3) {
          o2(e3.element, Xo);
        }), t2.on("selection.changed", function(e3) {
          var t3 = e3.oldSelection, n3 = e3.newSelection;
          g(t3, function(e4) {
            -1 === n3.indexOf(e4) && function(e5) {
              o2(e5, Zo);
            }(e4);
          }), g(n3, function(e4) {
            -1 === t3.indexOf(e4) && function(e5) {
              r2(e5, Zo);
            }(e4);
          }), i2._updateSelectionOutline(n3);
        }), t2.on("element.changed", function(e3) {
          n2.isSelected(e3.element) && i2._updateSelectionOutline(n2.get());
        });
      }
      function Jo(e2, t2, n2, i2) {
        e2.on("create.end", 500, function(e3) {
          var n3 = e3.context, i3 = n3.canExecute, r2 = n3.elements, o2 = (n3.hints || {}).autoSelect;
          if (i3) {
            if (false === o2) return;
            p(o2) ? t2.select(o2) : t2.select(r2.filter(ea));
          }
        }), e2.on("connect.end", 500, function(e3) {
          var n3 = e3.context.connection;
          n3 && t2.select(n3);
        }), e2.on("shape.move.end", 500, function(e3) {
          var n3 = e3.previousSelection || [], r2 = i2.get(e3.context.shape.id);
          m(n3, function(e4) {
            return r2.id === e4.id;
          }) || t2.select(r2);
        }), e2.on("element.click", function(e3) {
          if (Fo(e3)) {
            var i3 = e3.element;
            i3 === n2.getRootElement() && (i3 = null);
            var r2 = t2.isSelected(i3), o2 = t2.get().length > 1, a2 = zo(e3) || Ho(e3);
            if (r2 && o2) return a2 ? t2.deselect(i3) : t2.select(i3);
            r2 ? t2.deselect(i3) : t2.select(i3, a2);
          }
        });
      }
      function ea(e2) {
        return !e2.hidden;
      }
      Qo.$inject = ["canvas", "eventBus", "selection"], Qo.prototype._updateSelectionOutline = function(e2) {
        var t2 = this._canvas.getLayer("selectionOutline");
        Pe(t2);
        var n2 = e2.length > 1;
        if (Se(this._canvas.getContainer())[n2 ? "add" : "remove"]("djs-multi-select"), n2) {
          var i2 = function(e3) {
            return { x: e3.x - 6, y: e3.y - 6, width: e3.width + 12, height: e3.height + 12 };
          }(vt(e2)), r2 = De("rect");
          we(r2, L({ rx: 3 }, i2)), Se(r2).add("djs-selection-outline"), ge(t2, r2);
        }
      }, Jo.$inject = ["eventBus", "selection", "canvas", "elementRegistry"];
      var ta = { __init__: ["selectionVisuals", "selectionBehavior"], __depends__: [Uo, Ko], selection: ["type", Yo], selectionVisuals: ["type", Qo], selectionBehavior: ["type", Jo] };
      function na(e2) {
        this._counter = 0, this._prefix = (e2 ? e2 + "-" : "") + Math.floor(1e9 * Math.random()) + "-";
      }
      na.prototype.next = function() {
        return this._prefix + ++this._counter;
      };
      var ia = new na("ov");
      function ra(e2, t2, n2, i2) {
        var r2, o2;
        this._eventBus = t2, this._canvas = n2, this._elementRegistry = i2, this._ids = ia, this._overlayDefaults = L({ show: null, scale: true }, e2 && e2.defaults), this._overlays = {}, this._overlayContainers = [], this._overlayRoot = (r2 = n2.getContainer(), q(o2 = de('<div class="djs-overlay-container" />'), { position: "absolute", width: 0, height: 0 }), r2.insertBefore(o2, r2.firstChild), o2), this._init();
      }
      function oa(e2, t2, n2) {
        q(e2, { left: t2 + "px", top: n2 + "px" });
      }
      function aa(e2, t2) {
        e2.style.display = false === t2 ? "none" : "";
      }
      function sa(e2, t2) {
        e2.style["transform-origin"] = "top left", ["", "-ms-", "-webkit-"].forEach(function(n2) {
          e2.style[n2 + "transform"] = t2;
        });
      }
      ra.$inject = ["config.overlays", "eventBus", "canvas", "elementRegistry"], ra.prototype.get = function(e2) {
        if (d(e2) && (e2 = { id: e2 }), d(e2.element) && (e2.element = this._elementRegistry.get(e2.element)), e2.element) {
          var t2 = this._getOverlayContainer(e2.element, true);
          return t2 ? e2.type ? y(t2.overlays, A({ type: e2.type })) : t2.overlays.slice() : [];
        }
        return e2.type ? y(this._overlays, A({ type: e2.type })) : e2.id ? this._overlays[e2.id] : null;
      }, ra.prototype.add = function(e2, t2, n2) {
        if (l(t2) && (n2 = t2, t2 = null), e2.id || (e2 = this._elementRegistry.get(e2)), !n2.position) throw new Error("must specifiy overlay position");
        if (!n2.html) throw new Error("must specifiy overlay html");
        if (!e2) throw new Error("invalid element specified");
        var i2 = this._ids.next();
        return n2 = L({}, this._overlayDefaults, n2, { id: i2, type: t2, element: e2, html: n2.html }), this._addOverlay(n2), i2;
      }, ra.prototype.remove = function(e2) {
        var t2 = this.get(e2) || [];
        p(t2) || (t2 = [t2]);
        var n2 = this;
        g(t2, function(e3) {
          var t3 = n2._getOverlayContainer(e3.element, true);
          if (e3 && (ve(e3.html), ve(e3.htmlContainer), delete e3.htmlContainer, delete e3.element, delete n2._overlays[e3.id]), t3) {
            var i2 = t3.overlays.indexOf(e3);
            -1 !== i2 && t3.overlays.splice(i2, 1);
          }
        });
      }, ra.prototype.isShown = function() {
        return "none" !== this._overlayRoot.style.display;
      }, ra.prototype.show = function() {
        aa(this._overlayRoot);
      }, ra.prototype.hide = function() {
        aa(this._overlayRoot, false);
      }, ra.prototype.clear = function() {
        this._overlays = {}, this._overlayContainers = [], Q(this._overlayRoot);
      }, ra.prototype._updateOverlayContainer = function(e2) {
        var t2 = e2.element, n2 = e2.html, i2 = t2.x, r2 = t2.y;
        if (t2.waypoints) {
          var o2 = vt(t2);
          i2 = o2.x, r2 = o2.y;
        }
        oa(n2, i2, r2), K(e2.html, "data-container-id", t2.id);
      }, ra.prototype._updateOverlay = function(e2) {
        var t2, n2, i2 = e2.position, r2 = e2.htmlContainer, o2 = e2.element, a2 = i2.left, s2 = i2.top;
        void 0 !== i2.right && (t2 = o2.waypoints ? vt(o2).width : o2.width, a2 = -1 * i2.right + t2);
        void 0 !== i2.bottom && (n2 = o2.waypoints ? vt(o2).height : o2.height, s2 = -1 * i2.bottom + n2);
        oa(r2, a2 || 0, s2 || 0), this._updateOverlayVisibilty(e2, this._canvas.viewbox());
      }, ra.prototype._createOverlayContainer = function(e2) {
        var t2 = de('<div class="djs-overlays" />');
        q(t2, { position: "absolute" }), this._overlayRoot.appendChild(t2);
        var n2 = { html: t2, element: e2, overlays: [] };
        return this._updateOverlayContainer(n2), this._overlayContainers.push(n2), n2;
      }, ra.prototype._updateRoot = function(e2) {
        var t2 = e2.scale || 1, n2 = "matrix(" + [t2, 0, 0, t2, -1 * e2.x * t2, -1 * e2.y * t2].join(",") + ")";
        sa(this._overlayRoot, n2);
      }, ra.prototype._getOverlayContainer = function(e2, t2) {
        var n2 = m(this._overlayContainers, function(t3) {
          return t3.element === e2;
        });
        return n2 || t2 ? n2 : this._createOverlayContainer(e2);
      }, ra.prototype._addOverlay = function(e2) {
        var t2, n2, i2 = e2.id, r2 = e2.element, o2 = e2.html;
        o2.get && o2.constructor.prototype.jquery && (o2 = o2.get(0)), d(o2) && (o2 = de(o2)), n2 = this._getOverlayContainer(r2), q(t2 = de('<div class="djs-overlay" data-overlay-id="' + i2 + '">'), { position: "absolute" }), t2.appendChild(o2), e2.type && X(t2).add("djs-overlay-" + e2.type), aa(t2, this._canvas.findRoot(r2) === this._canvas.getRootElement()), e2.htmlContainer = t2, n2.overlays.push(e2), n2.html.appendChild(t2), this._overlays[i2] = e2, this._updateOverlay(e2), this._updateOverlayVisibilty(e2, this._canvas.viewbox());
      }, ra.prototype._updateOverlayVisibilty = function(e2, t2) {
        var n2 = e2.show, i2 = this._canvas.findRoot(e2.element), r2 = n2 && n2.minZoom, o2 = n2 && n2.maxZoom, a2 = e2.htmlContainer, c2 = true;
        (i2 !== this._canvas.getRootElement() || n2 && (s(r2) && r2 > t2.scale || s(o2) && o2 < t2.scale)) && (c2 = false), aa(a2, c2), this._updateOverlayScale(e2, t2);
      }, ra.prototype._updateOverlayScale = function(e2, t2) {
        var n2, i2, r2, o2 = e2.scale, a2 = e2.htmlContainer, c2 = "";
        true !== o2 && (false === o2 ? (n2 = 1, i2 = 1) : (n2 = o2.min, i2 = o2.max), s(n2) && t2.scale < n2 && (r2 = (1 / t2.scale || 1) * n2), s(i2) && t2.scale > i2 && (r2 = (1 / t2.scale || 1) * i2)), s(r2) && (c2 = "scale(" + r2 + "," + r2 + ")"), sa(a2, c2);
      }, ra.prototype._updateOverlaysVisibilty = function(e2) {
        var t2 = this;
        g(this._overlays, function(n2) {
          t2._updateOverlayVisibilty(n2, e2);
        });
      }, ra.prototype._init = function() {
        var e2 = this._eventBus, t2 = this;
        e2.on("canvas.viewbox.changing", function(e3) {
          t2.hide();
        }), e2.on("canvas.viewbox.changed", function(e3) {
          var n2;
          n2 = e3.viewbox, t2._updateRoot(n2), t2._updateOverlaysVisibilty(n2), t2.show();
        }), e2.on(["shape.remove", "connection.remove"], function(e3) {
          var n2 = e3.element;
          g(t2.get({ element: n2 }), function(e4) {
            t2.remove(e4.id);
          });
          var i2 = t2._getOverlayContainer(n2);
          if (i2) {
            ve(i2.html);
            var r2 = t2._overlayContainers.indexOf(i2);
            -1 !== r2 && t2._overlayContainers.splice(r2, 1);
          }
        }), e2.on("element.changed", 500, function(e3) {
          var n2 = e3.element, i2 = t2._getOverlayContainer(n2, true);
          i2 && (g(i2.overlays, function(e4) {
            t2._updateOverlay(e4);
          }), t2._updateOverlayContainer(i2));
        }), e2.on("element.marker.update", function(e3) {
          var n2 = t2._getOverlayContainer(e3.element, true);
          n2 && X(n2.html)[e3.add ? "add" : "remove"](e3.marker);
        }), e2.on("root.set", function() {
          t2._updateOverlaysVisibilty(t2._canvas.viewbox());
        }), e2.on("diagram.clear", this.clear, this);
      };
      var ca = { __init__: ["overlays"], overlays: ["type", ra] };
      function pa(e2, t2, n2, i2) {
        e2.on("element.changed", function(i3) {
          var r2 = i3.element;
          (r2.parent || r2 === t2.getRootElement()) && (i3.gfx = n2.getGraphics(r2)), i3.gfx && e2.fire(yt(r2) + ".changed", i3);
        }), e2.on("elements.changed", function(t3) {
          var n3 = t3.elements;
          n3.forEach(function(t4) {
            e2.fire("element.changed", { element: t4 });
          }), i2.updateContainments(n3);
        }), e2.on("shape.changed", function(e3) {
          i2.update("shape", e3.element, e3.gfx);
        }), e2.on("connection.changed", function(e3) {
          i2.update("connection", e3.element, e3.gfx);
        });
      }
      pa.$inject = ["eventBus", "canvas", "elementRegistry", "graphicsFactory"];
      var la = { __init__: ["changeSupport"], changeSupport: ["type", pa] };
      function ua(e2) {
        this._eventBus = e2;
      }
      function ha(e2) {
        return function(t2, n2, i2, r2, o2) {
          (h(t2) || u(t2)) && (o2 = r2, r2 = i2, i2 = n2, n2 = t2, t2 = null), this.on(t2, e2, n2, i2, r2, o2);
        };
      }
      function da(e2, t2) {
        t2.invoke(ua, this), this.executed(function(t3) {
          var n2 = t3.context;
          n2.rootElement ? e2.setRootElement(n2.rootElement) : n2.rootElement = e2.getRootElement();
        }), this.revert(function(t3) {
          var n2 = t3.context;
          n2.rootElement && e2.setRootElement(n2.rootElement);
        });
      }
      ua.$inject = ["eventBus"], ua.prototype.on = function(e2, t2, n2, i2, r2, o2) {
        if ((h(t2) || u(t2)) && (o2 = r2, r2 = i2, i2 = n2, n2 = t2, t2 = null), h(n2) && (o2 = r2, r2 = i2, i2 = n2, n2 = 1e3), l(r2) && (o2 = r2, r2 = false), !h(i2)) throw new Error("handlerFn must be a function");
        p(e2) || (e2 = [e2]);
        var a2 = this._eventBus;
        g(e2, function(e3) {
          var s2 = ["commandStack", e3, t2].filter(function(e4) {
            return e4;
          }).join(".");
          a2.on(s2, n2, r2 ? /* @__PURE__ */ function(e4, t3) {
            return function(n3) {
              return e4.call(t3 || null, n3.context, n3.command, n3);
            };
          }(i2, o2) : i2, o2);
        });
      }, ua.prototype.canExecute = ha("canExecute"), ua.prototype.preExecute = ha("preExecute"), ua.prototype.preExecuted = ha("preExecuted"), ua.prototype.execute = ha("execute"), ua.prototype.executed = ha("executed"), ua.prototype.postExecute = ha("postExecute"), ua.prototype.postExecuted = ha("postExecuted"), ua.prototype.revert = ha("revert"), ua.prototype.reverted = ha("reverted"), e(da, ua), da.$inject = ["canvas", "injector"];
      var fa = { __init__: ["rootElementsBehavior"], rootElementsBehavior: ["type", da] };
      function ma(e2) {
        return CSS.escape(e2);
      }
      var va = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
      function ya(e2) {
        return (e2 = "" + e2) && e2.replace(/[&<>"']/g, function(e3) {
          return va[e3];
        });
      }
      var ga = "_plane";
      function ba(e2) {
        return function(e3) {
          return e3.replace(new RegExp(ga + "$"), "");
        }(e2.id);
      }
      function xa(e2) {
        var t2 = e2.id;
        return Mr(e2, "bpmn:SubProcess") ? Ea(t2) : t2;
      }
      function _a(e2) {
        return Ea(e2);
      }
      function wa(e2) {
        return Mr(Nr(e2), "bpmndi:BPMNPlane");
      }
      function Ea(e2) {
        return e2 + ga;
      }
      function Sa(e2, t2, n2) {
        var i2 = de('<ul class="bjs-breadcrumbs"></ul>'), r2 = n2.getContainer(), o2 = X(r2);
        r2.appendChild(i2);
        var a2 = [];
        function s2(e3) {
          e3 && (a2 = function(e4) {
            for (var t3 = Br(e4), n3 = [], i3 = t3; i3; i3 = i3.$parent) (Mr(i3, "bpmn:SubProcess") || Mr(i3, "bpmn:Process")) && n3.push(i3);
            return n3.reverse();
          }(e3));
          var r3 = a2.map(function(e4) {
            var i3 = ya(e4.name || e4.id), r4 = de('<li><span class="bjs-crumb"><a title="' + i3 + '">' + i3 + "</a></span></li>"), o3 = n2.findRoot(xa(e4)) || n2.findRoot(e4.id);
            if (!o3 && Mr(e4, "bpmn:Process")) {
              var a3 = t2.find(function(t3) {
                var n3 = Br(t3);
                return n3 && n3.get("processRef") && n3.get("processRef") === e4;
              });
              o3 = n2.findRoot(a3.id);
            }
            return r4.addEventListener("click", function() {
              n2.setRootElement(o3);
            }), r4;
          });
          i2.innerHTML = "";
          var s3 = r3.length > 1;
          o2.toggle("bjs-breadcrumbs-shown", s3), r3.forEach(function(e4) {
            i2.appendChild(e4);
          });
        }
        e2.on("element.changed", function(e3) {
          var t3 = Br(e3.element);
          m(a2, function(e4) {
            return e4 === t3;
          }) && s2();
        }), e2.on("root.set", function(e3) {
          s2(e3.element);
        });
      }
      function Ca(e2, t2) {
        var n2 = null, i2 = new Ra();
        e2.on("root.set", function(e3) {
          var r2 = e3.element, o2 = t2.viewbox(), a2 = i2.get(r2);
          if (i2.set(n2, { x: o2.x, y: o2.y, zoom: o2.scale }), n2 = r2, !Mr(r2, "bpmn:Collaboration") || a2) {
            a2 = a2 || { x: 0, y: 0, zoom: 1 };
            var s2 = (o2.x - a2.x) * o2.scale, c2 = (o2.y - a2.y) * o2.scale;
            0 === s2 && 0 === c2 || t2.scroll({ dx: s2, dy: c2 }), a2.zoom !== o2.scale && t2.zoom(a2.zoom, { x: 0, y: 0 });
          }
        }), e2.on("diagram.clear", function() {
          i2.clear(), n2 = null;
        });
      }
      function Ra() {
        this._entries = [], this.set = function(e2, t2) {
          var n2 = false;
          for (var i2 in this._entries) if (this._entries[i2][0] === e2) {
            this._entries[i2][1] = t2, n2 = true;
            break;
          }
          n2 || this._entries.push([e2, t2]);
        }, this.get = function(e2) {
          for (var t2 in this._entries) if (this._entries[t2][0] === e2) return this._entries[t2][1];
          return null;
        }, this.clear = function() {
          this._entries.length = 0;
        }, this.remove = function(e2) {
          var t2 = -1;
          for (var n2 in this._entries) if (this._entries[n2][0] === e2) {
            t2 = n2;
            break;
          }
          -1 !== t2 && this._entries.splice(t2, 1);
        };
      }
      Sa.$inject = ["eventBus", "elementRegistry", "canvas"], Ca.$inject = ["eventBus", "canvas"];
      var Pa = 180, Ta = 160;
      function ka(e2, t2) {
        this._eventBus = e2, this._moddle = t2;
        var n2 = this;
        e2.on("import.render.start", 1500, function(e3, t3) {
          n2._handleImport(t3.definitions);
        });
      }
      function Aa(e2) {
        return Mr(e2, "bpmndi:BPMNDiagram") ? e2 : Aa(e2.$parent);
      }
      ka.prototype._handleImport = function(e2) {
        if (e2.diagrams) {
          var t2 = this;
          this._definitions = e2, this._processToDiagramMap = {}, e2.diagrams.forEach(function(e3) {
            e3.plane && e3.plane.bpmnElement && (t2._processToDiagramMap[e3.plane.bpmnElement.id] = e3);
          });
          var n2 = [];
          e2.diagrams.forEach(function(e3) {
            var i2 = t2._createNewDiagrams(e3.plane);
            Array.prototype.push.apply(n2, i2);
          }), n2.forEach(function(e3) {
            t2._movePlaneElementsToOrigin(e3.plane);
          });
        }
      }, ka.prototype._createNewDiagrams = function(e2) {
        var t2 = this, n2 = [], i2 = [];
        e2.get("planeElement").forEach(function(t3) {
          var r3 = t3.bpmnElement;
          if (r3) {
            var o2 = r3.$parent;
            Mr(r3, "bpmn:SubProcess") && !t3.isExpanded && n2.push(r3), function(e3, t4) {
              var n3 = e3.$parent;
              if (!Mr(n3, "bpmn:SubProcess") || n3 === t4.bpmnElement) return false;
              if (Dr(e3, ["bpmn:DataInputAssociation", "bpmn:DataOutputAssociation"])) return false;
              return true;
            }(r3, e2) && i2.push({ diElement: t3, parent: o2 });
          }
        });
        var r2 = [];
        return n2.forEach(function(e3) {
          if (!t2._processToDiagramMap[e3.id]) {
            var n3 = t2._createDiagram(e3);
            t2._processToDiagramMap[e3.id] = n3, r2.push(n3);
          }
        }), i2.forEach(function(e3) {
          for (var i3 = e3.diElement, r3 = e3.parent; r3 && -1 === n2.indexOf(r3); ) r3 = r3.$parent;
          if (r3) {
            var o2 = t2._processToDiagramMap[r3.id];
            t2._moveToDiPlane(i3, o2.plane);
          }
        }), r2;
      }, ka.prototype._movePlaneElementsToOrigin = function(e2) {
        var t2 = e2.get("planeElement"), n2 = function(e3) {
          var t3 = { top: 1 / 0, right: -1 / 0, bottom: -1 / 0, left: 1 / 0 };
          return e3.planeElement.forEach(function(e4) {
            if (e4.bounds) {
              var n3 = gn(e4.bounds);
              t3.top = Math.min(n3.top, t3.top), t3.left = Math.min(n3.left, t3.left);
            }
          }), bn(t3);
        }(e2), i2 = n2.x - Pa, r2 = n2.y - Ta;
        t2.forEach(function(e3) {
          e3.waypoint ? e3.waypoint.forEach(function(e4) {
            e4.x = e4.x - i2, e4.y = e4.y - r2;
          }) : e3.bounds && (e3.bounds.x = e3.bounds.x - i2, e3.bounds.y = e3.bounds.y - r2);
        });
      }, ka.prototype._moveToDiPlane = function(e2, t2) {
        var n2 = Aa(e2).plane.get("planeElement");
        n2.splice(n2.indexOf(e2), 1), t2.get("planeElement").push(e2);
      }, ka.prototype._createDiagram = function(e2) {
        var t2 = this._moddle.create("bpmndi:BPMNPlane", { bpmnElement: e2 }), n2 = this._moddle.create("bpmndi:BPMNDiagram", { plane: t2 });
        return t2.$parent = n2, t2.bpmnElement = e2, n2.$parent = this._definitions, this._definitions.diagrams.push(n2), n2;
      }, ka.$inject = ["eventBus", "moddle"];
      var Ma = 250;
      function Da(e2, t2, n2, i2) {
        ua.call(this, t2), this._canvas = e2, this._eventBus = t2, this._elementRegistry = n2, this._overlays = i2;
        var r2 = this;
        this.executed("shape.toggleCollapse", Ma, function(e3) {
          var t3 = e3.shape;
          r2._canDrillDown(t3) ? r2._addOverlay(t3) : r2._removeOverlay(t3);
        }, true), this.reverted("shape.toggleCollapse", Ma, function(e3) {
          var t3 = e3.shape;
          r2._canDrillDown(t3) ? r2._addOverlay(t3) : r2._removeOverlay(t3);
        }, true), this.executed(["shape.create", "shape.move", "shape.delete"], Ma, function(e3) {
          var t3 = e3.oldParent, n3 = e3.newParent || e3.parent, i3 = e3.shape;
          r2._canDrillDown(i3) && r2._addOverlay(i3), r2._updateDrilldownOverlay(t3), r2._updateDrilldownOverlay(n3), r2._updateDrilldownOverlay(i3);
        }, true), this.reverted(["shape.create", "shape.move", "shape.delete"], Ma, function(e3) {
          var t3 = e3.oldParent, n3 = e3.newParent || e3.parent, i3 = e3.shape;
          r2._canDrillDown(i3) && r2._addOverlay(i3), r2._updateDrilldownOverlay(t3), r2._updateDrilldownOverlay(n3), r2._updateDrilldownOverlay(i3);
        }, true), t2.on("import.render.complete", function() {
          n2.filter(function(e3) {
            return r2._canDrillDown(e3);
          }).map(function(e3) {
            r2._addOverlay(e3);
          });
        });
      }
      e(Da, ua), Da.prototype._updateDrilldownOverlay = function(e2) {
        var t2 = this._canvas;
        if (e2) {
          var n2 = t2.findRoot(e2);
          n2 && this._updateOverlayVisibility(n2);
        }
      }, Da.prototype._canDrillDown = function(e2) {
        var t2 = this._canvas;
        return Mr(e2, "bpmn:SubProcess") && t2.findRoot(xa(e2));
      }, Da.prototype._updateOverlayVisibility = function(e2) {
        var t2 = this._overlays, n2 = Br(e2), i2 = t2.get({ element: n2.id, type: "drilldown" })[0];
        if (i2) {
          var r2 = n2 && n2.get("flowElements") && n2.get("flowElements").length;
          X(i2.html).toggle("bjs-drilldown-empty", !r2);
        }
      }, Da.prototype._addOverlay = function(e2) {
        var t2 = this._canvas, n2 = this._overlays;
        n2.get({ element: e2, type: "drilldown" }).length && this._removeOverlay(e2);
        var i2 = de('<button class="bjs-drilldown"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.81801948,3.50735931 L10.4996894,9.1896894 L10.5,4 L12,4 L12,12 L4,12 L4,10.5 L9.6896894,10.4996894 L3.75735931,4.56801948 C3.46446609,4.27512627 3.46446609,3.80025253 3.75735931,3.50735931 C4.05025253,3.21446609 4.52512627,3.21446609 4.81801948,3.50735931 Z"/></svg></button>');
        i2.addEventListener("click", function() {
          t2.setRootElement(t2.findRoot(xa(e2)));
        }), n2.add(e2, "drilldown", { position: { bottom: -7, right: -8 }, html: i2 }), this._updateOverlayVisibility(e2);
      }, Da.prototype._removeOverlay = function(e2) {
        this._overlays.remove({ element: e2, type: "drilldown" });
      }, Da.$inject = ["canvas", "eventBus", "elementRegistry", "overlays"];
      var Ba = { __depends__: [ca, la, fa], __init__: ["drilldownBreadcrumbs", "drilldownOverlayBehavior", "drilldownCentering", "subprocessCompatibility"], drilldownBreadcrumbs: ["type", Sa], drilldownCentering: ["type", Ca], drilldownOverlayBehavior: ["type", Da], subprocessCompatibility: ["type", ka] };
      function Na(e2) {
        Ur.call(this, e2);
      }
      e(Na, Ur), Na.prototype._modules = [No, ko, ta, ca, Ba], Na.prototype._moddleExtensions = {};
      var Oa = ["c", "C"], ja = ["v", "V"], La = ["y", "Y"], Ia = ["z", "Z"];
      function $a(e2) {
        return !e2.altKey && (e2.ctrlKey || e2.metaKey);
      }
      function Fa(e2, t2) {
        return -1 !== (e2 = p(e2) ? e2 : [e2]).indexOf(t2.key) || -1 !== e2.indexOf(t2.code);
      }
      function za(e2) {
        return e2.shiftKey;
      }
      var Ha = "keyboard.keydown", Ga = "input-handle-modified-keys";
      function Va(e2, t2) {
        var n2 = this;
        this._config = e2 || {}, this._eventBus = t2, this._keydownHandler = this._keydownHandler.bind(this), this._keyupHandler = this._keyupHandler.bind(this), t2.on("diagram.destroy", function() {
          n2._fire("destroy"), n2.unbind();
        }), t2.on("diagram.init", function() {
          n2._fire("init");
        }), t2.on("attach", function() {
          e2 && e2.bindTo && n2.bind(e2.bindTo);
        }), t2.on("detach", function() {
          n2.unbind();
        });
      }
      Va.$inject = ["config.keyboard", "eventBus"], Va.prototype._keydownHandler = function(e2) {
        this._keyHandler(e2, Ha);
      }, Va.prototype._keyupHandler = function(e2) {
        this._keyHandler(e2, "keyboard.keyup");
      }, Va.prototype._keyHandler = function(e2, t2) {
        if (!this._isEventIgnored(e2)) {
          var n2 = { keyEvent: e2 };
          this._eventBus.fire(t2 || Ha, n2) && e2.preventDefault();
        }
      }, Va.prototype._isEventIgnored = function(e2) {
        return !!e2.defaultPrevented || (t2 = e2.target) && (J(t2, "input, textarea") || "true" === t2.contentEditable) && this._isModifiedKeyIgnored(e2);
        var t2;
      }, Va.prototype._isModifiedKeyIgnored = function(e2) {
        return !$a(e2) || -1 === this._getAllowedModifiers(e2.target).indexOf(e2.key);
      }, Va.prototype._getAllowedModifiers = function(e2) {
        var t2 = ee(e2, "[" + Ga + "]", true);
        return !t2 || this._node && !this._node.contains(t2) ? [] : t2.getAttribute(Ga).split(",");
      }, Va.prototype.bind = function(e2) {
        this.unbind(), this._node = e2, ae.bind(e2, "keydown", this._keydownHandler), ae.bind(e2, "keyup", this._keyupHandler), this._fire("bind");
      }, Va.prototype.getBinding = function() {
        return this._node;
      }, Va.prototype.unbind = function() {
        var e2 = this._node;
        e2 && (this._fire("unbind"), ae.unbind(e2, "keydown", this._keydownHandler), ae.unbind(e2, "keyup", this._keyupHandler)), this._node = null;
      }, Va.prototype._fire = function(e2) {
        this._eventBus.fire("keyboard." + e2, { node: this._node });
      }, Va.prototype.addListener = function(e2, t2, n2) {
        h(e2) && (n2 = t2, t2 = e2, e2 = 1e3), this._eventBus.on(n2 || Ha, e2, t2);
      }, Va.prototype.removeListener = function(e2, t2) {
        this._eventBus.off(t2 || Ha, e2);
      }, Va.prototype.hasModifier = function(e2) {
        return e2.ctrlKey || e2.metaKey || e2.shiftKey || e2.altKey;
      }, Va.prototype.isCmd = $a, Va.prototype.isShift = za, Va.prototype.isKey = Fa;
      var Wa = 500;
      function Ua(e2, t2) {
        var n2 = this;
        e2.on("editorActions.init", Wa, function(e3) {
          var i2 = e3.editorActions;
          n2.registerBindings(t2, i2);
        });
      }
      Ua.$inject = ["eventBus", "keyboard"], Ua.prototype.registerBindings = function(e2, t2) {
        function n2(n3, i2) {
          t2.isRegistered(n3) && e2.addListener(i2);
        }
        n2("undo", function(e3) {
          if (function(e4) {
            return $a(e4) && !za(e4) && Fa(Ia, e4);
          }(e3.keyEvent)) return t2.trigger("undo"), true;
        }), n2("redo", function(e3) {
          if (function(e4) {
            return $a(e4) && (Fa(La, e4) || Fa(Ia, e4) && za(e4));
          }(e3.keyEvent)) return t2.trigger("redo"), true;
        }), n2("copy", function(e3) {
          if (function(e4) {
            return $a(e4) && Fa(Oa, e4);
          }(e3.keyEvent)) return t2.trigger("copy"), true;
        }), n2("paste", function(e3) {
          if (function(e4) {
            return $a(e4) && Fa(ja, e4);
          }(e3.keyEvent)) return t2.trigger("paste"), true;
        }), n2("stepZoom", function(e3) {
          var n3 = e3.keyEvent;
          if (Fa(["+", "Add", "="], n3) && $a(n3)) return t2.trigger("stepZoom", { value: 1 }), true;
        }), n2("stepZoom", function(e3) {
          var n3 = e3.keyEvent;
          if (Fa(["-", "Subtract"], n3) && $a(n3)) return t2.trigger("stepZoom", { value: -1 }), true;
        }), n2("zoom", function(e3) {
          var n3 = e3.keyEvent;
          if (Fa("0", n3) && $a(n3)) return t2.trigger("zoom", { value: 1 }), true;
        }), n2("removeSelection", function(e3) {
          if (Fa(["Backspace", "Delete", "Del"], e3.keyEvent)) return t2.trigger("removeSelection"), true;
        });
      };
      var qa = { __init__: ["keyboard", "keyboardBindings"], keyboard: ["type", Va], keyboardBindings: ["type", Ua] }, Ka = { moveSpeed: 50, moveSpeedAccelerated: 200 };
      function Ya(e2, t2, n2) {
        var i2 = this;
        this._config = L({}, Ka, e2 || {}), t2.addListener(function(e3) {
          var n3 = e3.keyEvent, r2 = i2._config;
          if (!t2.isCmd(n3)) return;
          if (t2.isKey(["ArrowLeft", "Left", "ArrowUp", "Up", "ArrowDown", "Down", "ArrowRight", "Right"], n3)) {
            var o2, a2 = t2.isShift(n3) ? r2.moveSpeedAccelerated : r2.moveSpeed;
            switch (n3.key) {
              case "ArrowLeft":
              case "Left":
                o2 = "left";
                break;
              case "ArrowUp":
              case "Up":
                o2 = "up";
                break;
              case "ArrowRight":
              case "Right":
                o2 = "right";
                break;
              case "ArrowDown":
              case "Down":
                o2 = "down";
            }
            return i2.moveCanvas({ speed: a2, direction: o2 }), true;
          }
        }), this.moveCanvas = function(e3) {
          var t3 = 0, i3 = 0, r2 = e3.speed / Math.min(Math.sqrt(n2.viewbox().scale), 1);
          switch (e3.direction) {
            case "left":
              t3 = r2;
              break;
            case "up":
              i3 = r2;
              break;
            case "right":
              t3 = -r2;
              break;
            case "down":
              i3 = -r2;
          }
          n2.scroll({ dx: t3, dy: i3 });
        };
      }
      Ya.$inject = ["config.keyboardMove", "keyboard", "canvas"];
      var Xa = { __depends__: [qa], __init__: ["keyboardMove"], keyboardMove: ["type", Ya] }, Za = /^djs-cursor-.*$/;
      function Qa(e2) {
        var t2 = X(document.body);
        t2.removeMatching(Za), e2 && t2.add("djs-cursor-" + e2);
      }
      function Ja() {
        Qa(null);
      }
      var es = 5e3;
      function ts(e2, t2) {
        function n2() {
          return false;
        }
        return t2 = t2 || "element.click", e2.once(t2, es, n2), function() {
          e2.off(t2, n2);
        };
      }
      function ns(e2) {
        return { x: e2.x + e2.width / 2, y: e2.y + e2.height / 2 };
      }
      function is(e2, t2) {
        return { x: e2.x - t2.x, y: e2.y - t2.y };
      }
      function rs(e2, t2) {
        var n2;
        function i2(i3) {
          var r3, o2 = n2.start, a2 = n2.button, s2 = Io(i3), c2 = is(s2, o2);
          (!n2.dragging && (r3 = c2, Math.sqrt(Math.pow(r3.x, 2) + Math.pow(r3.y, 2)) > 15) && (n2.dragging = true, 0 === a2 && ts(e2), Qa("grab")), n2.dragging) && (c2 = is(s2, n2.last || n2.start), t2.scroll({ dx: c2.x, dy: c2.y }), n2.last = s2);
          i3.preventDefault();
        }
        function r2(e3) {
          ae.unbind(document, "mousemove", i2), ae.unbind(document, "mouseup", r2), n2 = null, Ja();
        }
        e2.on("element.mousedown", 500, function(e3) {
          return function(e4) {
            if (ee(e4.target, ".djs-draggable")) return;
            var t3 = e4.button;
            if (t3 >= 2 || e4.ctrlKey || e4.shiftKey || e4.altKey) return;
            return n2 = { button: t3, start: Io(e4) }, ae.bind(document, "mousemove", i2), ae.bind(document, "mouseup", r2), true;
          }(e3.originalEvent);
        }), this.isActive = function() {
          return !!n2;
        };
      }
      rs.$inject = ["eventBus", "canvas"];
      var os = { __init__: ["moveCanvas"], moveCanvas: ["type", rs] };
      function as(e2) {
        return Math.log(e2) / Math.log(10);
      }
      function ss(e2, t2) {
        var n2 = as(e2.min), i2 = as(e2.max);
        return (Math.abs(n2) + Math.abs(i2)) / t2;
      }
      var cs = Math.sign || function(e2) {
        return e2 >= 0 ? 1 : -1;
      }, ps = { min: 0.2, max: 4 };
      function ls(e2, t2, n2) {
        e2 = e2 || {}, this._enabled = false, this._canvas = n2, this._container = n2._container, this._handleWheel = j(this._handleWheel, this), this._totalDelta = 0, this._scale = e2.scale || 0.75;
        var i2 = this;
        t2.on("canvas.init", function(t3) {
          i2._init(false !== e2.enabled);
        });
      }
      ls.$inject = ["config.zoomScroll", "eventBus", "canvas"], ls.prototype.scroll = function(e2) {
        this._canvas.scroll(e2);
      }, ls.prototype.reset = function() {
        this._canvas.zoom("fit-viewport");
      }, ls.prototype.zoom = function(e2, t2) {
        var n2 = ss(ps, 20);
        this._totalDelta += e2, Math.abs(this._totalDelta) > 0.1 && (this._zoom(e2, t2, n2), this._totalDelta = 0);
      }, ls.prototype._handleWheel = function(e2) {
        if (!ee(e2.target, ".djs-scrollable", true)) {
          var t2 = this._container;
          e2.preventDefault();
          var n2, i2 = e2.ctrlKey, r2 = e2.shiftKey, o2 = -1 * this._scale;
          if (o2 *= i2 ? 0 === e2.deltaMode ? 0.02 : 0.32 : 0 === e2.deltaMode ? 1 : 16, i2) {
            var a2 = t2.getBoundingClientRect(), s2 = { x: e2.clientX - a2.left, y: e2.clientY - a2.top };
            n2 = Math.sqrt(Math.pow(e2.deltaY, 2) + Math.pow(e2.deltaX, 2)) * cs(e2.deltaY) * o2, this.zoom(n2, s2);
          } else n2 = r2 ? { dx: o2 * e2.deltaY, dy: 0 } : { dx: o2 * e2.deltaX, dy: o2 * e2.deltaY }, this.scroll(n2);
        }
      }, ls.prototype.stepZoom = function(e2, t2) {
        var n2 = ss(ps, 10);
        this._zoom(e2, t2, n2);
      }, ls.prototype._zoom = function(e2, t2, n2) {
        var i2 = this._canvas, r2 = e2 > 0 ? 1 : -1, o2 = as(i2.zoom()), a2 = Math.round(o2 / n2) * n2;
        a2 += n2 * r2;
        var s2, c2, p2 = Math.pow(10, a2);
        i2.zoom((s2 = ps, c2 = p2, Math.max(s2.min, Math.min(s2.max, c2))), t2);
      }, ls.prototype.toggle = function(e2) {
        var t2 = this._container, n2 = this._handleWheel, i2 = this._enabled;
        return void 0 === e2 && (e2 = !i2), i2 !== e2 && ae[e2 ? "bind" : "unbind"](t2, "wheel", n2, false), this._enabled = e2, e2;
      }, ls.prototype._init = function(e2) {
        this.toggle(e2);
      };
      var us = { __init__: ["zoomScroll"], zoomScroll: ["type", ls] };
      function hs(e2) {
        Na.call(this, e2);
      }
      e(hs, Na), hs.prototype._navigationModules = [Xa, os, us], hs.prototype._modules = [].concat(Na.prototype._modules, hs.prototype._navigationModules);
      var ds = { exports: {} };
      !function(e2) {
        !function(t2, n2, i2, r2) {
          var o2, a2 = ["", "webkit", "Moz", "MS", "ms", "o"], s2 = n2.createElement("div"), c2 = "function", p2 = Math.round, l2 = Math.abs, u2 = Date.now;
          function h2(e3, t3, n3) {
            return setTimeout(b2(e3, n3), t3);
          }
          function d2(e3, t3, n3) {
            return !!Array.isArray(e3) && (f2(e3, n3[t3], n3), true);
          }
          function f2(e3, t3, n3) {
            var i3;
            if (e3) if (e3.forEach) e3.forEach(t3, n3);
            else if (e3.length !== r2) for (i3 = 0; i3 < e3.length; ) t3.call(n3, e3[i3], i3, e3), i3++;
            else for (i3 in e3) e3.hasOwnProperty(i3) && t3.call(n3, e3[i3], i3, e3);
          }
          function m2(e3, n3, i3) {
            var r3 = "DEPRECATED METHOD: " + n3 + "\n" + i3 + " AT \n";
            return function() {
              var n4 = new Error("get-stack-trace"), i4 = n4 && n4.stack ? n4.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", o3 = t2.console && (t2.console.warn || t2.console.log);
              return o3 && o3.call(t2.console, r3, i4), e3.apply(this, arguments);
            };
          }
          o2 = "function" != typeof Object.assign ? function(e3) {
            if (e3 === r2 || null === e3) throw new TypeError("Cannot convert undefined or null to object");
            for (var t3 = Object(e3), n3 = 1; n3 < arguments.length; n3++) {
              var i3 = arguments[n3];
              if (i3 !== r2 && null !== i3) for (var o3 in i3) i3.hasOwnProperty(o3) && (t3[o3] = i3[o3]);
            }
            return t3;
          } : Object.assign;
          var v2 = m2(function(e3, t3, n3) {
            for (var i3 = Object.keys(t3), o3 = 0; o3 < i3.length; ) (!n3 || n3 && e3[i3[o3]] === r2) && (e3[i3[o3]] = t3[i3[o3]]), o3++;
            return e3;
          }, "extend", "Use `assign`."), y2 = m2(function(e3, t3) {
            return v2(e3, t3, true);
          }, "merge", "Use `assign`.");
          function g2(e3, t3, n3) {
            var i3, r3 = t3.prototype;
            (i3 = e3.prototype = Object.create(r3)).constructor = e3, i3._super = r3, n3 && o2(i3, n3);
          }
          function b2(e3, t3) {
            return function() {
              return e3.apply(t3, arguments);
            };
          }
          function x2(e3, t3) {
            return typeof e3 == c2 ? e3.apply(t3 && t3[0] || r2, t3) : e3;
          }
          function _2(e3, t3) {
            return e3 === r2 ? t3 : e3;
          }
          function w2(e3, t3, n3) {
            f2(R2(t3), function(t4) {
              e3.addEventListener(t4, n3, false);
            });
          }
          function E2(e3, t3, n3) {
            f2(R2(t3), function(t4) {
              e3.removeEventListener(t4, n3, false);
            });
          }
          function S2(e3, t3) {
            for (; e3; ) {
              if (e3 == t3) return true;
              e3 = e3.parentNode;
            }
            return false;
          }
          function C2(e3, t3) {
            return e3.indexOf(t3) > -1;
          }
          function R2(e3) {
            return e3.trim().split(/\s+/g);
          }
          function P2(e3, t3, n3) {
            if (e3.indexOf && !n3) return e3.indexOf(t3);
            for (var i3 = 0; i3 < e3.length; ) {
              if (n3 && e3[i3][n3] == t3 || !n3 && e3[i3] === t3) return i3;
              i3++;
            }
            return -1;
          }
          function T2(e3) {
            return Array.prototype.slice.call(e3, 0);
          }
          function k2(e3, t3, n3) {
            for (var i3 = [], r3 = [], o3 = 0; o3 < e3.length; ) {
              var a3 = t3 ? e3[o3][t3] : e3[o3];
              P2(r3, a3) < 0 && i3.push(e3[o3]), r3[o3] = a3, o3++;
            }
            return n3 && (i3 = t3 ? i3.sort(function(e4, n4) {
              return e4[t3] > n4[t3];
            }) : i3.sort()), i3;
          }
          function A2(e3, t3) {
            for (var n3, i3, o3 = t3[0].toUpperCase() + t3.slice(1), s3 = 0; s3 < a2.length; ) {
              if ((i3 = (n3 = a2[s3]) ? n3 + o3 : t3) in e3) return i3;
              s3++;
            }
            return r2;
          }
          var M2 = 1;
          function D2(e3) {
            var n3 = e3.ownerDocument || e3;
            return n3.defaultView || n3.parentWindow || t2;
          }
          var B2 = "ontouchstart" in t2, N2 = A2(t2, "PointerEvent") !== r2, O2 = B2 && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent), j2 = "touch", L2 = "mouse", I2 = 25, $2 = 1, F2 = 4, z2 = 8, H2 = 1, G2 = 2, V2 = 4, W2 = 8, U2 = 16, q2 = G2 | V2, K2 = W2 | U2, Y2 = q2 | K2, X2 = ["x", "y"], Z2 = ["clientX", "clientY"];
          function Q2(e3, t3) {
            var n3 = this;
            this.manager = e3, this.callback = t3, this.element = e3.element, this.target = e3.options.inputTarget, this.domHandler = function(t4) {
              x2(e3.options.enable, [e3]) && n3.handler(t4);
            }, this.init();
          }
          function J2(e3, t3, n3) {
            var i3 = n3.pointers.length, o3 = n3.changedPointers.length, a3 = t3 & $2 && i3 - o3 == 0, s3 = t3 & (F2 | z2) && i3 - o3 == 0;
            n3.isFirst = !!a3, n3.isFinal = !!s3, a3 && (e3.session = {}), n3.eventType = t3, function(e4, t4) {
              var n4 = e4.session, i4 = t4.pointers, o4 = i4.length;
              n4.firstInput || (n4.firstInput = ee2(t4));
              o4 > 1 && !n4.firstMultiple ? n4.firstMultiple = ee2(t4) : 1 === o4 && (n4.firstMultiple = false);
              var a4 = n4.firstInput, s4 = n4.firstMultiple, c3 = s4 ? s4.center : a4.center, p3 = t4.center = te2(i4);
              t4.timeStamp = u2(), t4.deltaTime = t4.timeStamp - a4.timeStamp, t4.angle = oe2(c3, p3), t4.distance = re2(c3, p3), function(e5, t5) {
                var n5 = t5.center, i5 = e5.offsetDelta || {}, r3 = e5.prevDelta || {}, o5 = e5.prevInput || {};
                t5.eventType !== $2 && o5.eventType !== F2 || (r3 = e5.prevDelta = { x: o5.deltaX || 0, y: o5.deltaY || 0 }, i5 = e5.offsetDelta = { x: n5.x, y: n5.y });
                t5.deltaX = r3.x + (n5.x - i5.x), t5.deltaY = r3.y + (n5.y - i5.y);
              }(n4, t4), t4.offsetDirection = ie2(t4.deltaX, t4.deltaY);
              var h3 = ne2(t4.deltaTime, t4.deltaX, t4.deltaY);
              t4.overallVelocityX = h3.x, t4.overallVelocityY = h3.y, t4.overallVelocity = l2(h3.x) > l2(h3.y) ? h3.x : h3.y, t4.scale = s4 ? (d3 = s4.pointers, f3 = i4, re2(f3[0], f3[1], Z2) / re2(d3[0], d3[1], Z2)) : 1, t4.rotation = s4 ? function(e5, t5) {
                return oe2(t5[1], t5[0], Z2) + oe2(e5[1], e5[0], Z2);
              }(s4.pointers, i4) : 0, t4.maxPointers = n4.prevInput ? t4.pointers.length > n4.prevInput.maxPointers ? t4.pointers.length : n4.prevInput.maxPointers : t4.pointers.length, function(e5, t5) {
                var n5, i5, o5, a5, s5 = e5.lastInterval || t5, c4 = t5.timeStamp - s5.timeStamp;
                if (t5.eventType != z2 && (c4 > I2 || s5.velocity === r2)) {
                  var p4 = t5.deltaX - s5.deltaX, u3 = t5.deltaY - s5.deltaY, h4 = ne2(c4, p4, u3);
                  i5 = h4.x, o5 = h4.y, n5 = l2(h4.x) > l2(h4.y) ? h4.x : h4.y, a5 = ie2(p4, u3), e5.lastInterval = t5;
                } else n5 = s5.velocity, i5 = s5.velocityX, o5 = s5.velocityY, a5 = s5.direction;
                t5.velocity = n5, t5.velocityX = i5, t5.velocityY = o5, t5.direction = a5;
              }(n4, t4);
              var d3, f3;
              var m3 = e4.element;
              S2(t4.srcEvent.target, m3) && (m3 = t4.srcEvent.target);
              t4.target = m3;
            }(e3, n3), e3.emit("hammer.input", n3), e3.recognize(n3), e3.session.prevInput = n3;
          }
          function ee2(e3) {
            for (var t3 = [], n3 = 0; n3 < e3.pointers.length; ) t3[n3] = { clientX: p2(e3.pointers[n3].clientX), clientY: p2(e3.pointers[n3].clientY) }, n3++;
            return { timeStamp: u2(), pointers: t3, center: te2(t3), deltaX: e3.deltaX, deltaY: e3.deltaY };
          }
          function te2(e3) {
            var t3 = e3.length;
            if (1 === t3) return { x: p2(e3[0].clientX), y: p2(e3[0].clientY) };
            for (var n3 = 0, i3 = 0, r3 = 0; r3 < t3; ) n3 += e3[r3].clientX, i3 += e3[r3].clientY, r3++;
            return { x: p2(n3 / t3), y: p2(i3 / t3) };
          }
          function ne2(e3, t3, n3) {
            return { x: t3 / e3 || 0, y: n3 / e3 || 0 };
          }
          function ie2(e3, t3) {
            return e3 === t3 ? H2 : l2(e3) >= l2(t3) ? e3 < 0 ? G2 : V2 : t3 < 0 ? W2 : U2;
          }
          function re2(e3, t3, n3) {
            n3 || (n3 = X2);
            var i3 = t3[n3[0]] - e3[n3[0]], r3 = t3[n3[1]] - e3[n3[1]];
            return Math.sqrt(i3 * i3 + r3 * r3);
          }
          function oe2(e3, t3, n3) {
            n3 || (n3 = X2);
            var i3 = t3[n3[0]] - e3[n3[0]], r3 = t3[n3[1]] - e3[n3[1]];
            return 180 * Math.atan2(r3, i3) / Math.PI;
          }
          Q2.prototype = { handler: function() {
          }, init: function() {
            this.evEl && w2(this.element, this.evEl, this.domHandler), this.evTarget && w2(this.target, this.evTarget, this.domHandler), this.evWin && w2(D2(this.element), this.evWin, this.domHandler);
          }, destroy: function() {
            this.evEl && E2(this.element, this.evEl, this.domHandler), this.evTarget && E2(this.target, this.evTarget, this.domHandler), this.evWin && E2(D2(this.element), this.evWin, this.domHandler);
          } };
          var ae2 = { mousedown: $2, mousemove: 2, mouseup: F2 }, se2 = "mousedown", ce2 = "mousemove mouseup";
          function pe2() {
            this.evEl = se2, this.evWin = ce2, this.pressed = false, Q2.apply(this, arguments);
          }
          g2(pe2, Q2, { handler: function(e3) {
            var t3 = ae2[e3.type];
            t3 & $2 && 0 === e3.button && (this.pressed = true), 2 & t3 && 1 !== e3.which && (t3 = F2), this.pressed && (t3 & F2 && (this.pressed = false), this.callback(this.manager, t3, { pointers: [e3], changedPointers: [e3], pointerType: L2, srcEvent: e3 }));
          } });
          var le2 = { pointerdown: $2, pointermove: 2, pointerup: F2, pointercancel: z2, pointerout: z2 }, ue2 = { 2: j2, 3: "pen", 4: L2, 5: "kinect" }, he2 = "pointerdown", de2 = "pointermove pointerup pointercancel";
          function fe2() {
            this.evEl = he2, this.evWin = de2, Q2.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
          }
          t2.MSPointerEvent && !t2.PointerEvent && (he2 = "MSPointerDown", de2 = "MSPointerMove MSPointerUp MSPointerCancel"), g2(fe2, Q2, { handler: function(e3) {
            var t3 = this.store, n3 = false, i3 = e3.type.toLowerCase().replace("ms", ""), r3 = le2[i3], o3 = ue2[e3.pointerType] || e3.pointerType, a3 = o3 == j2, s3 = P2(t3, e3.pointerId, "pointerId");
            r3 & $2 && (0 === e3.button || a3) ? s3 < 0 && (t3.push(e3), s3 = t3.length - 1) : r3 & (F2 | z2) && (n3 = true), s3 < 0 || (t3[s3] = e3, this.callback(this.manager, r3, { pointers: t3, changedPointers: [e3], pointerType: o3, srcEvent: e3 }), n3 && t3.splice(s3, 1));
          } });
          var me2 = { touchstart: $2, touchmove: 2, touchend: F2, touchcancel: z2 };
          function ve2() {
            this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", this.started = false, Q2.apply(this, arguments);
          }
          function ye2(e3, t3) {
            var n3 = T2(e3.touches), i3 = T2(e3.changedTouches);
            return t3 & (F2 | z2) && (n3 = k2(n3.concat(i3), "identifier", true)), [n3, i3];
          }
          g2(ve2, Q2, { handler: function(e3) {
            var t3 = me2[e3.type];
            if (t3 === $2 && (this.started = true), this.started) {
              var n3 = ye2.call(this, e3, t3);
              t3 & (F2 | z2) && n3[0].length - n3[1].length == 0 && (this.started = false), this.callback(this.manager, t3, { pointers: n3[0], changedPointers: n3[1], pointerType: j2, srcEvent: e3 });
            }
          } });
          var ge2 = { touchstart: $2, touchmove: 2, touchend: F2, touchcancel: z2 }, be2 = "touchstart touchmove touchend touchcancel";
          function xe2() {
            this.evTarget = be2, this.targetIds = {}, Q2.apply(this, arguments);
          }
          function _e2(e3, t3) {
            var n3 = T2(e3.touches), i3 = this.targetIds;
            if (t3 & (2 | $2) && 1 === n3.length) return i3[n3[0].identifier] = true, [n3, n3];
            var r3, o3, a3 = T2(e3.changedTouches), s3 = [], c3 = this.target;
            if (o3 = n3.filter(function(e4) {
              return S2(e4.target, c3);
            }), t3 === $2) for (r3 = 0; r3 < o3.length; ) i3[o3[r3].identifier] = true, r3++;
            for (r3 = 0; r3 < a3.length; ) i3[a3[r3].identifier] && s3.push(a3[r3]), t3 & (F2 | z2) && delete i3[a3[r3].identifier], r3++;
            return s3.length ? [k2(o3.concat(s3), "identifier", true), s3] : void 0;
          }
          g2(xe2, Q2, { handler: function(e3) {
            var t3 = ge2[e3.type], n3 = _e2.call(this, e3, t3);
            n3 && this.callback(this.manager, t3, { pointers: n3[0], changedPointers: n3[1], pointerType: j2, srcEvent: e3 });
          } });
          var we2 = 2500;
          function Ee2() {
            Q2.apply(this, arguments);
            var e3 = b2(this.handler, this);
            this.touch = new xe2(this.manager, e3), this.mouse = new pe2(this.manager, e3), this.primaryTouch = null, this.lastTouches = [];
          }
          function Se2(e3, t3) {
            e3 & $2 ? (this.primaryTouch = t3.changedPointers[0].identifier, Ce2.call(this, t3)) : e3 & (F2 | z2) && Ce2.call(this, t3);
          }
          function Ce2(e3) {
            var t3 = e3.changedPointers[0];
            if (t3.identifier === this.primaryTouch) {
              var n3 = { x: t3.clientX, y: t3.clientY };
              this.lastTouches.push(n3);
              var i3 = this.lastTouches;
              setTimeout(function() {
                var e4 = i3.indexOf(n3);
                e4 > -1 && i3.splice(e4, 1);
              }, we2);
            }
          }
          function Re2(e3) {
            for (var t3 = e3.srcEvent.clientX, n3 = e3.srcEvent.clientY, i3 = 0; i3 < this.lastTouches.length; i3++) {
              var r3 = this.lastTouches[i3], o3 = Math.abs(t3 - r3.x), a3 = Math.abs(n3 - r3.y);
              if (o3 <= 25 && a3 <= 25) return true;
            }
            return false;
          }
          g2(Ee2, Q2, { handler: function(e3, t3, n3) {
            var i3 = n3.pointerType == j2, r3 = n3.pointerType == L2;
            if (!(r3 && n3.sourceCapabilities && n3.sourceCapabilities.firesTouchEvents)) {
              if (i3) Se2.call(this, t3, n3);
              else if (r3 && Re2.call(this, n3)) return;
              this.callback(e3, t3, n3);
            }
          }, destroy: function() {
            this.touch.destroy(), this.mouse.destroy();
          } });
          var Pe2 = A2(s2.style, "touchAction"), Te2 = Pe2 !== r2, ke2 = "compute", Ae2 = "auto", Me2 = "manipulation", De2 = "none", Be2 = "pan-x", Ne2 = "pan-y", Oe2 = function() {
            if (!Te2) return false;
            var e3 = {}, n3 = t2.CSS && t2.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(i3) {
              e3[i3] = !n3 || t2.CSS.supports("touch-action", i3);
            }), e3;
          }();
          function je2(e3, t3) {
            this.manager = e3, this.set(t3);
          }
          je2.prototype = { set: function(e3) {
            e3 == ke2 && (e3 = this.compute()), Te2 && this.manager.element.style && Oe2[e3] && (this.manager.element.style[Pe2] = e3), this.actions = e3.toLowerCase().trim();
          }, update: function() {
            this.set(this.manager.options.touchAction);
          }, compute: function() {
            var e3 = [];
            return f2(this.manager.recognizers, function(t3) {
              x2(t3.options.enable, [t3]) && (e3 = e3.concat(t3.getTouchAction()));
            }), function(e4) {
              if (C2(e4, De2)) return De2;
              var t3 = C2(e4, Be2), n3 = C2(e4, Ne2);
              if (t3 && n3) return De2;
              if (t3 || n3) return t3 ? Be2 : Ne2;
              if (C2(e4, Me2)) return Me2;
              return Ae2;
            }(e3.join(" "));
          }, preventDefaults: function(e3) {
            var t3 = e3.srcEvent, n3 = e3.offsetDirection;
            if (this.manager.session.prevented) t3.preventDefault();
            else {
              var i3 = this.actions, r3 = C2(i3, De2) && !Oe2[De2], o3 = C2(i3, Ne2) && !Oe2[Ne2], a3 = C2(i3, Be2) && !Oe2[Be2];
              if (r3) {
                var s3 = 1 === e3.pointers.length, c3 = e3.distance < 2, p3 = e3.deltaTime < 250;
                if (s3 && c3 && p3) return;
              }
              if (!a3 || !o3) return r3 || o3 && n3 & q2 || a3 && n3 & K2 ? this.preventSrc(t3) : void 0;
            }
          }, preventSrc: function(e3) {
            this.manager.session.prevented = true, e3.preventDefault();
          } };
          var Le2 = 1, Ie2 = 32;
          function $e2(e3) {
            this.options = o2({}, this.defaults, e3 || {}), this.id = M2++, this.manager = null, this.options.enable = _2(this.options.enable, true), this.state = Le2, this.simultaneous = {}, this.requireFail = [];
          }
          function Fe2(e3) {
            return 16 & e3 ? "cancel" : 8 & e3 ? "end" : 4 & e3 ? "move" : 2 & e3 ? "start" : "";
          }
          function ze2(e3) {
            return e3 == U2 ? "down" : e3 == W2 ? "up" : e3 == G2 ? "left" : e3 == V2 ? "right" : "";
          }
          function He2(e3, t3) {
            var n3 = t3.manager;
            return n3 ? n3.get(e3) : e3;
          }
          function Ge2() {
            $e2.apply(this, arguments);
          }
          function Ve2() {
            Ge2.apply(this, arguments), this.pX = null, this.pY = null;
          }
          function We2() {
            Ge2.apply(this, arguments);
          }
          function Ue2() {
            $e2.apply(this, arguments), this._timer = null, this._input = null;
          }
          function qe2() {
            Ge2.apply(this, arguments);
          }
          function Ke2() {
            Ge2.apply(this, arguments);
          }
          function Ye2() {
            $e2.apply(this, arguments), this.pTime = false, this.pCenter = false, this._timer = null, this._input = null, this.count = 0;
          }
          function Xe2(e3, t3) {
            return (t3 = t3 || {}).recognizers = _2(t3.recognizers, Xe2.defaults.preset), new Ze2(e3, t3);
          }
          $e2.prototype = { defaults: {}, set: function(e3) {
            return o2(this.options, e3), this.manager && this.manager.touchAction.update(), this;
          }, recognizeWith: function(e3) {
            if (d2(e3, "recognizeWith", this)) return this;
            var t3 = this.simultaneous;
            return t3[(e3 = He2(e3, this)).id] || (t3[e3.id] = e3, e3.recognizeWith(this)), this;
          }, dropRecognizeWith: function(e3) {
            return d2(e3, "dropRecognizeWith", this) || (e3 = He2(e3, this), delete this.simultaneous[e3.id]), this;
          }, requireFailure: function(e3) {
            if (d2(e3, "requireFailure", this)) return this;
            var t3 = this.requireFail;
            return -1 === P2(t3, e3 = He2(e3, this)) && (t3.push(e3), e3.requireFailure(this)), this;
          }, dropRequireFailure: function(e3) {
            if (d2(e3, "dropRequireFailure", this)) return this;
            e3 = He2(e3, this);
            var t3 = P2(this.requireFail, e3);
            return t3 > -1 && this.requireFail.splice(t3, 1), this;
          }, hasRequireFailures: function() {
            return this.requireFail.length > 0;
          }, canRecognizeWith: function(e3) {
            return !!this.simultaneous[e3.id];
          }, emit: function(e3) {
            var t3 = this, n3 = this.state;
            function i3(n4) {
              t3.manager.emit(n4, e3);
            }
            n3 < 8 && i3(t3.options.event + Fe2(n3)), i3(t3.options.event), e3.additionalEvent && i3(e3.additionalEvent), n3 >= 8 && i3(t3.options.event + Fe2(n3));
          }, tryEmit: function(e3) {
            if (this.canEmit()) return this.emit(e3);
            this.state = Ie2;
          }, canEmit: function() {
            for (var e3 = 0; e3 < this.requireFail.length; ) {
              if (!(this.requireFail[e3].state & (Ie2 | Le2))) return false;
              e3++;
            }
            return true;
          }, recognize: function(e3) {
            var t3 = o2({}, e3);
            if (!x2(this.options.enable, [this, t3])) return this.reset(), void (this.state = Ie2);
            56 & this.state && (this.state = Le2), this.state = this.process(t3), 30 & this.state && this.tryEmit(t3);
          }, process: function(e3) {
          }, getTouchAction: function() {
          }, reset: function() {
          } }, g2(Ge2, $e2, { defaults: { pointers: 1 }, attrTest: function(e3) {
            var t3 = this.options.pointers;
            return 0 === t3 || e3.pointers.length === t3;
          }, process: function(e3) {
            var t3 = this.state, n3 = e3.eventType, i3 = 6 & t3, r3 = this.attrTest(e3);
            return i3 && (n3 & z2 || !r3) ? 16 | t3 : i3 || r3 ? n3 & F2 ? 8 | t3 : 2 & t3 ? 4 | t3 : 2 : Ie2;
          } }), g2(Ve2, Ge2, { defaults: { event: "pan", threshold: 10, pointers: 1, direction: Y2 }, getTouchAction: function() {
            var e3 = this.options.direction, t3 = [];
            return e3 & q2 && t3.push(Ne2), e3 & K2 && t3.push(Be2), t3;
          }, directionTest: function(e3) {
            var t3 = this.options, n3 = true, i3 = e3.distance, r3 = e3.direction, o3 = e3.deltaX, a3 = e3.deltaY;
            return r3 & t3.direction || (t3.direction & q2 ? (r3 = 0 === o3 ? H2 : o3 < 0 ? G2 : V2, n3 = o3 != this.pX, i3 = Math.abs(e3.deltaX)) : (r3 = 0 === a3 ? H2 : a3 < 0 ? W2 : U2, n3 = a3 != this.pY, i3 = Math.abs(e3.deltaY))), e3.direction = r3, n3 && i3 > t3.threshold && r3 & t3.direction;
          }, attrTest: function(e3) {
            return Ge2.prototype.attrTest.call(this, e3) && (2 & this.state || !(2 & this.state) && this.directionTest(e3));
          }, emit: function(e3) {
            this.pX = e3.deltaX, this.pY = e3.deltaY;
            var t3 = ze2(e3.direction);
            t3 && (e3.additionalEvent = this.options.event + t3), this._super.emit.call(this, e3);
          } }), g2(We2, Ge2, { defaults: { event: "pinch", threshold: 0, pointers: 2 }, getTouchAction: function() {
            return [De2];
          }, attrTest: function(e3) {
            return this._super.attrTest.call(this, e3) && (Math.abs(e3.scale - 1) > this.options.threshold || 2 & this.state);
          }, emit: function(e3) {
            if (1 !== e3.scale) {
              var t3 = e3.scale < 1 ? "in" : "out";
              e3.additionalEvent = this.options.event + t3;
            }
            this._super.emit.call(this, e3);
          } }), g2(Ue2, $e2, { defaults: { event: "press", pointers: 1, time: 251, threshold: 9 }, getTouchAction: function() {
            return [Ae2];
          }, process: function(e3) {
            var t3 = this.options, n3 = e3.pointers.length === t3.pointers, i3 = e3.distance < t3.threshold, r3 = e3.deltaTime > t3.time;
            if (this._input = e3, !i3 || !n3 || e3.eventType & (F2 | z2) && !r3) this.reset();
            else if (e3.eventType & $2) this.reset(), this._timer = h2(function() {
              this.state = 8, this.tryEmit();
            }, t3.time, this);
            else if (e3.eventType & F2) return 8;
            return Ie2;
          }, reset: function() {
            clearTimeout(this._timer);
          }, emit: function(e3) {
            8 === this.state && (e3 && e3.eventType & F2 ? this.manager.emit(this.options.event + "up", e3) : (this._input.timeStamp = u2(), this.manager.emit(this.options.event, this._input)));
          } }), g2(qe2, Ge2, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function() {
            return [De2];
          }, attrTest: function(e3) {
            return this._super.attrTest.call(this, e3) && (Math.abs(e3.rotation) > this.options.threshold || 2 & this.state);
          } }), g2(Ke2, Ge2, { defaults: { event: "swipe", threshold: 10, velocity: 0.3, direction: q2 | K2, pointers: 1 }, getTouchAction: function() {
            return Ve2.prototype.getTouchAction.call(this);
          }, attrTest: function(e3) {
            var t3, n3 = this.options.direction;
            return n3 & (q2 | K2) ? t3 = e3.overallVelocity : n3 & q2 ? t3 = e3.overallVelocityX : n3 & K2 && (t3 = e3.overallVelocityY), this._super.attrTest.call(this, e3) && n3 & e3.offsetDirection && e3.distance > this.options.threshold && e3.maxPointers == this.options.pointers && l2(t3) > this.options.velocity && e3.eventType & F2;
          }, emit: function(e3) {
            var t3 = ze2(e3.offsetDirection);
            t3 && this.manager.emit(this.options.event + t3, e3), this.manager.emit(this.options.event, e3);
          } }), g2(Ye2, $e2, { defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10 }, getTouchAction: function() {
            return [Me2];
          }, process: function(e3) {
            var t3 = this.options, n3 = e3.pointers.length === t3.pointers, i3 = e3.distance < t3.threshold, r3 = e3.deltaTime < t3.time;
            if (this.reset(), e3.eventType & $2 && 0 === this.count) return this.failTimeout();
            if (i3 && r3 && n3) {
              if (e3.eventType != F2) return this.failTimeout();
              var o3 = !this.pTime || e3.timeStamp - this.pTime < t3.interval, a3 = !this.pCenter || re2(this.pCenter, e3.center) < t3.posThreshold;
              if (this.pTime = e3.timeStamp, this.pCenter = e3.center, a3 && o3 ? this.count += 1 : this.count = 1, this._input = e3, 0 === this.count % t3.taps) return this.hasRequireFailures() ? (this._timer = h2(function() {
                this.state = 8, this.tryEmit();
              }, t3.interval, this), 2) : 8;
            }
            return Ie2;
          }, failTimeout: function() {
            return this._timer = h2(function() {
              this.state = Ie2;
            }, this.options.interval, this), Ie2;
          }, reset: function() {
            clearTimeout(this._timer);
          }, emit: function() {
            8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
          } }), Xe2.VERSION = "2.0.7", Xe2.defaults = { domEvents: false, touchAction: ke2, enable: true, inputTarget: null, inputClass: null, preset: [[qe2, { enable: false }], [We2, { enable: false }, ["rotate"]], [Ke2, { direction: q2 }], [Ve2, { direction: q2 }, ["swipe"]], [Ye2], [Ye2, { event: "doubletap", taps: 2 }, ["tap"]], [Ue2]], cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } };
          function Ze2(e3, t3) {
            var n3;
            this.options = o2({}, Xe2.defaults, t3 || {}), this.options.inputTarget = this.options.inputTarget || e3, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e3, this.input = new ((n3 = this).options.inputClass || (N2 ? fe2 : O2 ? xe2 : B2 ? Ee2 : pe2))(n3, J2), this.touchAction = new je2(this, this.options.touchAction), Qe2(this, true), f2(this.options.recognizers, function(e4) {
              var t4 = this.add(new e4[0](e4[1]));
              e4[2] && t4.recognizeWith(e4[2]), e4[3] && t4.requireFailure(e4[3]);
            }, this);
          }
          function Qe2(e3, t3) {
            var n3, i3 = e3.element;
            i3.style && (f2(e3.options.cssProps, function(r3, o3) {
              n3 = A2(i3.style, o3), t3 ? (e3.oldCssProps[n3] = i3.style[n3], i3.style[n3] = r3) : i3.style[n3] = e3.oldCssProps[n3] || "";
            }), t3 || (e3.oldCssProps = {}));
          }
          Ze2.prototype = { set: function(e3) {
            return o2(this.options, e3), e3.touchAction && this.touchAction.update(), e3.inputTarget && (this.input.destroy(), this.input.target = e3.inputTarget, this.input.init()), this;
          }, stop: function(e3) {
            this.session.stopped = e3 ? 2 : 1;
          }, recognize: function(e3) {
            var t3 = this.session;
            if (!t3.stopped) {
              var n3;
              this.touchAction.preventDefaults(e3);
              var i3 = this.recognizers, r3 = t3.curRecognizer;
              (!r3 || r3 && 8 & r3.state) && (r3 = t3.curRecognizer = null);
              for (var o3 = 0; o3 < i3.length; ) n3 = i3[o3], 2 === t3.stopped || r3 && n3 != r3 && !n3.canRecognizeWith(r3) ? n3.reset() : n3.recognize(e3), !r3 && 14 & n3.state && (r3 = t3.curRecognizer = n3), o3++;
            }
          }, get: function(e3) {
            if (e3 instanceof $e2) return e3;
            for (var t3 = this.recognizers, n3 = 0; n3 < t3.length; n3++) if (t3[n3].options.event == e3) return t3[n3];
            return null;
          }, add: function(e3) {
            if (d2(e3, "add", this)) return this;
            var t3 = this.get(e3.options.event);
            return t3 && this.remove(t3), this.recognizers.push(e3), e3.manager = this, this.touchAction.update(), e3;
          }, remove: function(e3) {
            if (d2(e3, "remove", this)) return this;
            if (e3 = this.get(e3)) {
              var t3 = this.recognizers, n3 = P2(t3, e3);
              -1 !== n3 && (t3.splice(n3, 1), this.touchAction.update());
            }
            return this;
          }, on: function(e3, t3) {
            if (e3 !== r2 && t3 !== r2) {
              var n3 = this.handlers;
              return f2(R2(e3), function(e4) {
                n3[e4] = n3[e4] || [], n3[e4].push(t3);
              }), this;
            }
          }, off: function(e3, t3) {
            if (e3 !== r2) {
              var n3 = this.handlers;
              return f2(R2(e3), function(e4) {
                t3 ? n3[e4] && n3[e4].splice(P2(n3[e4], t3), 1) : delete n3[e4];
              }), this;
            }
          }, emit: function(e3, t3) {
            this.options.domEvents && function(e4, t4) {
              var i4 = n2.createEvent("Event");
              i4.initEvent(e4, true, true), i4.gesture = t4, t4.target.dispatchEvent(i4);
            }(e3, t3);
            var i3 = this.handlers[e3] && this.handlers[e3].slice();
            if (i3 && i3.length) {
              t3.type = e3, t3.preventDefault = function() {
                t3.srcEvent.preventDefault();
              };
              for (var r3 = 0; r3 < i3.length; ) i3[r3](t3), r3++;
            }
          }, destroy: function() {
            this.element && Qe2(this, false), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
          } }, o2(Xe2, { INPUT_START: $2, INPUT_MOVE: 2, INPUT_END: F2, INPUT_CANCEL: z2, STATE_POSSIBLE: Le2, STATE_BEGAN: 2, STATE_CHANGED: 4, STATE_ENDED: 8, STATE_RECOGNIZED: 8, STATE_CANCELLED: 16, STATE_FAILED: Ie2, DIRECTION_NONE: H2, DIRECTION_LEFT: G2, DIRECTION_RIGHT: V2, DIRECTION_UP: W2, DIRECTION_DOWN: U2, DIRECTION_HORIZONTAL: q2, DIRECTION_VERTICAL: K2, DIRECTION_ALL: Y2, Manager: Ze2, Input: Q2, TouchAction: je2, TouchInput: xe2, MouseInput: pe2, PointerEventInput: fe2, TouchMouseInput: Ee2, SingleTouchInput: ve2, Recognizer: $e2, AttrRecognizer: Ge2, Tap: Ye2, Pan: Ve2, Swipe: Ke2, Pinch: We2, Rotate: qe2, Press: Ue2, on: w2, off: E2, each: f2, merge: y2, extend: v2, assign: o2, inherit: g2, bindFn: b2, prefixed: A2 }), (void 0 !== t2 ? t2 : "undefined" != typeof self ? self : {}).Hammer = Xe2, "function" == typeof r2 && r2.amd ? r2(function() {
            return Xe2;
          }) : e2.exports ? e2.exports = Xe2 : t2.Hammer = Xe2;
        }(window, document);
      }(ds);
      var fs = Dt(ds.exports), ms = ["mousedown", "mouseup", "mouseover", "mouseout", "click", "dblclick"];
      function vs(e2, t2) {
        return t2.get(e2, false);
      }
      function ys(e2) {
        e2.preventDefault(), "function" == typeof e2.stopPropagation ? e2.stopPropagation() : e2.srcEvent && "function" == typeof e2.srcEvent.stopPropagation && e2.srcEvent.stopPropagation(), "function" == typeof e2.stopImmediatePropagation && e2.stopImmediatePropagation();
      }
      function gs(e2) {
        function t2(t3) {
          setTimeout(function() {
            g(ms, function(t4) {
              ae.unbind(e2, t4, ys, true);
            });
          }, 500);
        }
        ae.bind(e2, "touchstart", function(t3) {
          g(ms, function(t4) {
            ae.bind(e2, t4, ys, true);
          });
        }, true), ae.bind(e2, "touchend", t2, true), ae.bind(e2, "touchcancel", t2, true);
        var n2 = new fs.Manager(e2, { inputClass: fs.TouchInput, recognizers: [], domEvents: true }), i2 = new fs.Tap(), r2 = new fs.Pan({ threshold: 10 }), o2 = new fs.Press(), a2 = new fs.Pinch(), s2 = new fs.Tap({ event: "doubletap", taps: 2 });
        return a2.requireFailure(r2), a2.requireFailure(o2), n2.add([r2, o2, a2, s2, i2]), n2.reset = function(e3) {
          var t3 = this.recognizers, i3 = this.session;
          i3.stopped || (n2.stop(e3), setTimeout(function() {
            var e4, n3;
            for (e4 = 0; n3 = t3[e4]; e4++) n3.reset(), n3.state = 8;
            i3.curRecognizer = null;
          }, 0));
        }, n2.on("hammer.input", function(e3) {
          e3.srcEvent.defaultPrevented && n2.reset(true);
        }), n2;
      }
      function bs(e2, t2, n2, i2, r2) {
        var o2, a2 = vs("dragging", e2), s2 = vs("move", e2), c2 = vs("contextPad", e2), p2 = vs("palette", e2);
        function l2(e3, t3) {
          return function(n3) {
            var o3 = u2(n3.target), a3 = o3 && i2.get(o3);
            return t3 && (n3.srcEvent.button = t3), r2.fire(e3, n3, a3);
          };
        }
        function u2(e3) {
          return ee(e3, "svg, .djs-element", true);
        }
        function h2(e3) {
          function n3(e4) {
            var n4 = u2(e4.target), r3 = n4 && i2.get(n4);
            if (s2 && t2.getRootElement() !== r3) return s2.start(e4, r3, true);
            !function(e5) {
              var n5 = 0, i3 = 0;
              function r4(e6) {
                var r5 = e6.deltaX - n5, o3 = e6.deltaY - i3;
                t2.scroll({ dx: r5, dy: o3 }), n5 = e6.deltaX, i3 = e6.deltaY;
              }
              function a3(e6) {
                o2.off("panmove", r4), o2.off("panend", a3), o2.off("pancancel", a3);
              }
              o2.on("panmove", r4), o2.on("panend", a3), o2.on("pancancel", a3);
            }();
          }
          (o2 = gs(e3)).on("tap", l2("element.click")), o2.on("doubletap", l2("element.dblclick", 1)), o2.on("panstart", n3), o2.on("press", n3), o2.on("pinchstart", function(e4) {
            var n4 = t2.zoom(), i3 = e4.center;
            function r3(e5) {
              var r4 = 1 - (1 - e5.scale) / 1.5, o3 = Math.max(0.2, Math.min(4, r4 * n4));
              t2.zoom(o3, i3), ys(e5);
            }
            function a3(e5) {
              o2.off("pinchmove", r3), o2.off("pinchend", a3), o2.off("pinchcancel", a3), o2.reset(true);
            }
            o2.on("pinchmove", r3), o2.on("pinchend", a3), o2.on("pinchcancel", a3);
          });
        }
        a2 && n2.on("drag.move", function(e3) {
          var t3 = e3.originalEvent;
          if (t3 && !(t3 instanceof MouseEvent)) {
            var n3 = Io(t3), r3 = u2(document.elementFromPoint(n3.x, n3.y)), o3 = r3 && i2.get(r3);
            o3 !== e3.hover && (e3.hover && a2.out(e3), o3 && (a2.hover({ element: o3, gfx: r3 }), e3.hover = o3, e3.hoverGfx = r3));
          }
        }), c2 && n2.on("contextPad.create", function(e3) {
          var t3 = gs(e3.pad.html);
          t3.on("panstart", function(e4) {
            c2.trigger("dragstart", e4, true);
          }), t3.on("press", function(e4) {
            c2.trigger("dragstart", e4, true);
          }), t3.on("tap", function(e4) {
            c2.trigger("click", e4);
          });
        }), p2 && n2.on("palette.create", function(e3) {
          var t3 = gs(e3.container);
          t3.on("panstart", function(e4) {
            p2.trigger("dragstart", e4, true);
          }), t3.on("press", function(e4) {
            p2.trigger("dragstart", e4, true);
          }), t3.on("tap", function(e4) {
            p2.trigger("click", e4);
          });
        }), n2.on("canvas.init", function(e3) {
          h2(e3.svg);
        });
      }
      function xs(e2) {
        var t2 = this;
        e2.on("canvas.init", function(e3) {
          t2.addBBoxMarker(e3.svg);
        });
      }
      bs.$inject = ["injector", "canvas", "eventBus", "elementRegistry", "interactionEvents", "touchFix"], xs.$inject = ["eventBus"], xs.prototype.addBBoxMarker = function(e2) {
        var t2 = { fill: "none", class: "outer-bound-marker" }, n2 = De("rect");
        we(n2, { x: -1e4, y: 1e4, width: 10, height: 10 }), we(n2, t2), ge(e2, n2);
        var i2 = De("rect");
        we(i2, { x: 1e4, y: 1e4, width: 10, height: 10 }), we(i2, t2), ge(e2, i2);
      };
      var _s = { __depends__: [{ __depends__: [Uo], __init__: ["touchInteractionEvents"], touchInteractionEvents: ["type", bs], touchFix: ["type", xs] }] };
      function ws(e2) {
        return e2 && e2[e2.length - 1];
      }
      function Es(e2) {
        return e2.y;
      }
      function Ss(e2) {
        return e2.x;
      }
      var Cs = { left: Ss, center: Ss, right: function(e2) {
        return e2.x + e2.width;
      }, top: Es, middle: Es, bottom: function(e2) {
        return e2.y + e2.height;
      } };
      function Rs(e2, t2) {
        this._modeling = e2, this._rules = t2;
      }
      Rs.$inject = ["modeling", "rules"], Rs.prototype._getOrientationDetails = function(e2) {
        var t2 = "x", n2 = "width";
        return -1 !== ["top", "bottom", "middle"].indexOf(e2) && (t2 = "y", n2 = "height"), { axis: t2, dimension: n2 };
      }, Rs.prototype._isType = function(e2, t2) {
        return -1 !== t2.indexOf(e2);
      }, Rs.prototype._alignmentPosition = function(e2, t2) {
        var n2, i2, r2, o2 = this._getOrientationDetails(e2), a2 = o2.axis, s2 = o2.dimension, c2 = {}, p2 = {}, l2 = false;
        if (this._isType(e2, ["left", "top"])) c2[e2] = t2[0][a2];
        else if (this._isType(e2, ["right", "bottom"])) r2 = ws(t2), c2[e2] = r2[a2] + r2[s2];
        else if (this._isType(e2, ["center", "middle"])) {
          if (g(t2, function(e3) {
            var t3 = e3[a2] + Math.round(e3[s2] / 2);
            p2[t3] ? p2[t3].elements.push(e3) : p2[t3] = { elements: [e3], center: t3 };
          }), n2 = k(p2, function(e3) {
            return e3.elements.length > 1 && (l2 = true), e3.elements.length;
          }), l2) return c2[e2] = ws(n2).center, c2;
          i2 = t2[0], r2 = ws(t2 = k(t2, function(e3) {
            return e3[a2] + e3[s2];
          })), c2[e2] = function(e3, t3) {
            return Math.round((e3[a2] + t3[a2] + t3[s2]) / 2);
          }(i2, r2);
        }
        return c2;
      }, Rs.prototype.trigger = function(e2, t2) {
        var n2, i2 = this._modeling, r2 = y(e2, function(e3) {
          return !(e3.waypoints || e3.host || e3.labelTarget);
        });
        if (p(n2 = this._rules.allowed("elements.align", { elements: r2 })) && (r2 = n2), !(r2.length < 2) && n2) {
          var o2 = k(r2, Cs[t2]), a2 = this._alignmentPosition(t2, o2);
          i2.alignElements(o2, a2);
        }
      };
      var Ps = { __init__: ["alignElements"], alignElements: ["type", Rs] }, Ts = ".entry";
      function ks(e2, t2, n2, i2) {
        this._canvas = e2, this._eventBus = n2, this._overlays = i2;
        var r2 = s(t2 && t2.scale) ? t2.scale : { min: 1, max: 1.5 };
        this._overlaysConfig = { scale: r2 }, this._current = null, this._init();
      }
      function As(e2, t2) {
        return -1 !== e2.indexOf(t2);
      }
      ks.$inject = ["canvas", "config.contextPad", "eventBus", "overlays"], ks.prototype._init = function() {
        var e2 = this;
        this._eventBus.on("selection.changed", function(t2) {
          var n2 = t2.newSelection, i2 = n2.length ? 1 === n2.length ? n2[0] : n2 : null;
          i2 ? e2.open(i2, true) : e2.close();
        }), this._eventBus.on("elements.changed", function(t2) {
          var n2 = t2.elements, i2 = e2._current;
          if (i2) {
            var r2 = i2.target;
            w(p(r2) ? r2 : [r2], function(e3) {
              return As(n2, e3);
            }) && e2.open(r2, true);
          }
        });
      }, ks.prototype.registerProvider = function(e2, t2) {
        t2 || (t2 = e2, e2 = 1e3), this._eventBus.on("contextPad.getProviders", e2, function(e3) {
          e3.providers.push(t2);
        });
      }, ks.prototype.getEntries = function(e2) {
        var t2 = this._getProviders(), n2 = p(e2) ? "getMultiElementContextPadEntries" : "getContextPadEntries", i2 = {};
        return g(t2, function(t3) {
          if (h(t3[n2])) {
            var r2 = t3[n2](e2);
            h(r2) ? i2 = r2(i2) : g(r2, function(e3, t4) {
              i2[t4] = e3;
            });
          }
        }), i2;
      }, ks.prototype.trigger = function(e2, t2, n2) {
        var i2, r2, o2 = t2.delegateTarget || t2.target;
        return o2 ? (i2 = K(o2, "data-action"), r2 = t2.originalEvent || t2, this.triggerEntry(i2, e2, r2, n2)) : t2.preventDefault();
      }, ks.prototype.triggerEntry = function(e2, t2, n2, i2) {
        if (this.isShown()) {
          var r2 = this._current.target, o2 = this._current.entries[e2];
          if (o2) {
            var a2 = o2.action;
            if (false !== this._eventBus.fire("contextPad.trigger", { entry: o2, event: n2 })) {
              if (h(a2)) {
                if ("click" === t2) return a2(n2, r2, i2);
              } else if (a2[t2]) return a2[t2](n2, r2, i2);
              n2.preventDefault();
            }
          }
        }
      }, ks.prototype.open = function(e2, t2) {
        !t2 && this.isOpen(e2) || (this.close(), this._updateAndOpen(e2));
      }, ks.prototype._getProviders = function() {
        var e2 = this._eventBus.createEvent({ type: "contextPad.getProviders", providers: [] });
        return this._eventBus.fire(e2), e2.providers;
      }, ks.prototype._updateAndOpen = function(e2) {
        var t2, n2 = this.getEntries(e2), i2 = this.getPad(e2), r2 = i2.html;
        g(n2, function(e3, n3) {
          var i3, o2 = e3.group || "default", a2 = de(e3.html || '<div class="entry" draggable="true"></div>');
          K(a2, "data-action", n3), (i3 = fe("[data-group=" + ma(o2) + "]", r2)) || (K(i3 = de('<div class="group"></div>'), "data-group", o2), r2.appendChild(i3)), i3.appendChild(a2), e3.className && function(e4, t3) {
            var n4 = X(e4);
            (t3 = p(t3) ? t3 : t3.split(/\s+/g)).forEach(function(e5) {
              n4.add(e5);
            });
          }(a2, e3.className), e3.title && K(a2, "title", e3.title), e3.imageUrl && (K(t2 = de("<img>"), "src", e3.imageUrl), t2.style.width = "100%", t2.style.height = "100%", a2.appendChild(t2));
        }), X(r2).add("open"), this._current = { target: e2, entries: n2, pad: i2 }, this._eventBus.fire("contextPad.open", { current: this._current });
      }, ks.prototype.getPad = function(e2) {
        if (this.isOpen()) return this._current.pad;
        var t2 = this, n2 = this._overlays, i2 = de('<div class="djs-context-pad"></div>'), r2 = this._getPosition(e2), o2 = L({ html: i2 }, this._overlaysConfig, r2);
        pe.bind(i2, Ts, "click", function(e3) {
          t2.trigger("click", e3);
        }), pe.bind(i2, Ts, "dragstart", function(e3) {
          t2.trigger("dragstart", e3);
        }), ae.bind(i2, "mousedown", function(e3) {
          e3.stopPropagation();
        });
        var a2 = this._canvas.getRootElement();
        this._overlayId = n2.add(a2, "context-pad", o2);
        var s2 = n2.get(this._overlayId);
        return this._eventBus.fire("contextPad.create", { target: e2, pad: s2 }), s2;
      }, ks.prototype.close = function() {
        this.isOpen() && (this._overlays.remove(this._overlayId), this._overlayId = null, this._eventBus.fire("contextPad.close", { current: this._current }), this._current = null);
      }, ks.prototype.isOpen = function(e2) {
        var t2 = this._current;
        if (!t2) return false;
        if (!e2) return true;
        var n2 = t2.target;
        return p(e2) === p(n2) && (p(e2) ? e2.length === n2.length && _(e2, function(e3) {
          return As(n2, e3);
        }) : n2 === e2);
      }, ks.prototype.isShown = function() {
        return this.isOpen() && this._overlays.isShown();
      }, ks.prototype._getPosition = function(e2) {
        var t2 = vt(p(e2) ? e2 : [e2]);
        return { position: { left: t2.x + t2.width + 12, top: t2.y - 6 } };
      };
      var Ms, Ds, Bs, Ns, Os, js = { __depends__: [Uo, ca], contextPad: ["type", ks] }, Ls = {}, Is = [], $s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      function Fs(e2, t2) {
        for (var n2 in t2) e2[n2] = t2[n2];
        return e2;
      }
      function zs(e2) {
        var t2 = e2.parentNode;
        t2 && t2.removeChild(e2);
      }
      function Hs(e2, t2, n2) {
        var i2, r2, o2, a2 = {};
        for (o2 in t2) "key" == o2 ? i2 = t2[o2] : "ref" == o2 ? r2 = t2[o2] : a2[o2] = t2[o2];
        if (arguments.length > 2 && (a2.children = arguments.length > 3 ? Ms.call(arguments, 2) : n2), "function" == typeof e2 && null != e2.defaultProps) for (o2 in e2.defaultProps) void 0 === a2[o2] && (a2[o2] = e2.defaultProps[o2]);
        return Gs(e2, a2, i2, r2, null);
      }
      function Gs(e2, t2, n2, i2, r2) {
        var o2 = { type: e2, props: t2, key: n2, ref: i2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r2 ? ++Bs : r2 };
        return null == r2 && null != Ds.vnode && Ds.vnode(o2), o2;
      }
      function Vs(e2) {
        return e2.children;
      }
      function Ws(e2, t2) {
        this.props = e2, this.context = t2;
      }
      function Us(e2, t2) {
        if (null == t2) return e2.__ ? Us(e2.__, e2.__.__k.indexOf(e2) + 1) : null;
        for (var n2; t2 < e2.__k.length; t2++) if (null != (n2 = e2.__k[t2]) && null != n2.__e) return n2.__e;
        return "function" == typeof e2.type ? Us(e2) : null;
      }
      function qs(e2) {
        var t2, n2;
        if (null != (e2 = e2.__) && null != e2.__c) {
          for (e2.__e = e2.__c.base = null, t2 = 0; t2 < e2.__k.length; t2++) if (null != (n2 = e2.__k[t2]) && null != n2.__e) {
            e2.__e = e2.__c.base = n2.__e;
            break;
          }
          return qs(e2);
        }
      }
      function Ks(e2) {
        (!e2.__d && (e2.__d = true) && Ns.push(e2) && !Ys.__r++ || Os !== Ds.debounceRendering) && ((Os = Ds.debounceRendering) || setTimeout)(Ys);
      }
      function Ys() {
        for (var e2; Ys.__r = Ns.length; ) e2 = Ns.sort(function(e3, t2) {
          return e3.__v.__b - t2.__v.__b;
        }), Ns = [], e2.some(function(e3) {
          var t2, n2, i2, r2, o2, a2;
          e3.__d && (o2 = (r2 = (t2 = e3).__v).__e, (a2 = t2.__P) && (n2 = [], (i2 = Fs({}, r2)).__v = r2.__v + 1, ic(a2, r2, i2, t2.__n, void 0 !== a2.ownerSVGElement, null != r2.__h ? [o2] : null, n2, null == o2 ? Us(r2) : o2, r2.__h), rc(n2, r2), r2.__e != o2 && qs(r2)));
        });
      }
      function Xs(e2, t2, n2, i2, r2, o2, a2, s2, c2, p2) {
        var l2, u2, h2, d2, f2, m2, v2, y2 = i2 && i2.__k || Is, g2 = y2.length;
        for (n2.__k = [], l2 = 0; l2 < t2.length; l2++) if (null != (d2 = n2.__k[l2] = null == (d2 = t2[l2]) || "boolean" == typeof d2 ? null : "string" == typeof d2 || "number" == typeof d2 || "bigint" == typeof d2 ? Gs(null, d2, null, null, d2) : Array.isArray(d2) ? Gs(Vs, { children: d2 }, null, null, null) : d2.__b > 0 ? Gs(d2.type, d2.props, d2.key, d2.ref ? d2.ref : null, d2.__v) : d2)) {
          if (d2.__ = n2, d2.__b = n2.__b + 1, null === (h2 = y2[l2]) || h2 && d2.key == h2.key && d2.type === h2.type) y2[l2] = void 0;
          else for (u2 = 0; u2 < g2; u2++) {
            if ((h2 = y2[u2]) && d2.key == h2.key && d2.type === h2.type) {
              y2[u2] = void 0;
              break;
            }
            h2 = null;
          }
          ic(e2, d2, h2 = h2 || Ls, r2, o2, a2, s2, c2, p2), f2 = d2.__e, (u2 = d2.ref) && h2.ref != u2 && (v2 || (v2 = []), h2.ref && v2.push(h2.ref, null, d2), v2.push(u2, d2.__c || f2, d2)), null != f2 ? (null == m2 && (m2 = f2), "function" == typeof d2.type && d2.__k === h2.__k ? d2.__d = c2 = Zs(d2, c2, e2) : c2 = Qs(e2, d2, h2, y2, f2, c2), "function" == typeof n2.type && (n2.__d = c2)) : c2 && h2.__e == c2 && c2.parentNode != e2 && (c2 = Us(h2));
        }
        for (n2.__e = m2, l2 = g2; l2--; ) null != y2[l2] && sc(y2[l2], y2[l2]);
        if (v2) for (l2 = 0; l2 < v2.length; l2++) ac(v2[l2], v2[++l2], v2[++l2]);
      }
      function Zs(e2, t2, n2) {
        for (var i2, r2 = e2.__k, o2 = 0; r2 && o2 < r2.length; o2++) (i2 = r2[o2]) && (i2.__ = e2, t2 = "function" == typeof i2.type ? Zs(i2, t2, n2) : Qs(n2, i2, i2, r2, i2.__e, t2));
        return t2;
      }
      function Qs(e2, t2, n2, i2, r2, o2) {
        var a2, s2, c2;
        if (void 0 !== t2.__d) a2 = t2.__d, t2.__d = void 0;
        else if (null == n2 || r2 != o2 || null == r2.parentNode) e: if (null == o2 || o2.parentNode !== e2) e2.appendChild(r2), a2 = null;
        else {
          for (s2 = o2, c2 = 0; (s2 = s2.nextSibling) && c2 < i2.length; c2 += 1) if (s2 == r2) break e;
          e2.insertBefore(r2, o2), a2 = o2;
        }
        return void 0 !== a2 ? a2 : r2.nextSibling;
      }
      function Js(e2, t2, n2) {
        "-" === t2[0] ? e2.setProperty(t2, n2) : e2[t2] = null == n2 ? "" : "number" != typeof n2 || $s.test(t2) ? n2 : n2 + "px";
      }
      function ec(e2, t2, n2, i2, r2) {
        var o2;
        e: if ("style" === t2) if ("string" == typeof n2) e2.style.cssText = n2;
        else {
          if ("string" == typeof i2 && (e2.style.cssText = i2 = ""), i2) for (t2 in i2) n2 && t2 in n2 || Js(e2.style, t2, "");
          if (n2) for (t2 in n2) i2 && n2[t2] === i2[t2] || Js(e2.style, t2, n2[t2]);
        }
        else if ("o" === t2[0] && "n" === t2[1]) o2 = t2 !== (t2 = t2.replace(/Capture$/, "")), t2 = t2.toLowerCase() in e2 ? t2.toLowerCase().slice(2) : t2.slice(2), e2.l || (e2.l = {}), e2.l[t2 + o2] = n2, n2 ? i2 || e2.addEventListener(t2, o2 ? nc : tc, o2) : e2.removeEventListener(t2, o2 ? nc : tc, o2);
        else if ("dangerouslySetInnerHTML" !== t2) {
          if (r2) t2 = t2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
          else if ("href" !== t2 && "list" !== t2 && "form" !== t2 && "tabIndex" !== t2 && "download" !== t2 && t2 in e2) try {
            e2[t2] = null == n2 ? "" : n2;
            break e;
          } catch (e3) {
          }
          "function" == typeof n2 || (null == n2 || false === n2 && -1 == t2.indexOf("-") ? e2.removeAttribute(t2) : e2.setAttribute(t2, n2));
        }
      }
      function tc(e2) {
        this.l[e2.type + false](Ds.event ? Ds.event(e2) : e2);
      }
      function nc(e2) {
        this.l[e2.type + true](Ds.event ? Ds.event(e2) : e2);
      }
      function ic(e2, t2, n2, i2, r2, o2, a2, s2, c2) {
        var p2, l2, u2, h2, d2, f2, m2, v2, y2, g2, b2, x2, _2, w2, E2, S2 = t2.type;
        if (void 0 !== t2.constructor) return null;
        null != n2.__h && (c2 = n2.__h, s2 = t2.__e = n2.__e, t2.__h = null, o2 = [s2]), (p2 = Ds.__b) && p2(t2);
        try {
          e: if ("function" == typeof S2) {
            if (v2 = t2.props, y2 = (p2 = S2.contextType) && i2[p2.__c], g2 = p2 ? y2 ? y2.props.value : p2.__ : i2, n2.__c ? m2 = (l2 = t2.__c = n2.__c).__ = l2.__E : ("prototype" in S2 && S2.prototype.render ? t2.__c = l2 = new S2(v2, g2) : (t2.__c = l2 = new Ws(v2, g2), l2.constructor = S2, l2.render = cc), y2 && y2.sub(l2), l2.props = v2, l2.state || (l2.state = {}), l2.context = g2, l2.__n = i2, u2 = l2.__d = true, l2.__h = [], l2._sb = []), null == l2.__s && (l2.__s = l2.state), null != S2.getDerivedStateFromProps && (l2.__s == l2.state && (l2.__s = Fs({}, l2.__s)), Fs(l2.__s, S2.getDerivedStateFromProps(v2, l2.__s))), h2 = l2.props, d2 = l2.state, u2) null == S2.getDerivedStateFromProps && null != l2.componentWillMount && l2.componentWillMount(), null != l2.componentDidMount && l2.__h.push(l2.componentDidMount);
            else {
              if (null == S2.getDerivedStateFromProps && v2 !== h2 && null != l2.componentWillReceiveProps && l2.componentWillReceiveProps(v2, g2), !l2.__e && null != l2.shouldComponentUpdate && false === l2.shouldComponentUpdate(v2, l2.__s, g2) || t2.__v === n2.__v) {
                for (l2.props = v2, l2.state = l2.__s, t2.__v !== n2.__v && (l2.__d = false), l2.__v = t2, t2.__e = n2.__e, t2.__k = n2.__k, t2.__k.forEach(function(e3) {
                  e3 && (e3.__ = t2);
                }), b2 = 0; b2 < l2._sb.length; b2++) l2.__h.push(l2._sb[b2]);
                l2._sb = [], l2.__h.length && a2.push(l2);
                break e;
              }
              null != l2.componentWillUpdate && l2.componentWillUpdate(v2, l2.__s, g2), null != l2.componentDidUpdate && l2.__h.push(function() {
                l2.componentDidUpdate(h2, d2, f2);
              });
            }
            if (l2.context = g2, l2.props = v2, l2.__v = t2, l2.__P = e2, x2 = Ds.__r, _2 = 0, "prototype" in S2 && S2.prototype.render) {
              for (l2.state = l2.__s, l2.__d = false, x2 && x2(t2), p2 = l2.render(l2.props, l2.state, l2.context), w2 = 0; w2 < l2._sb.length; w2++) l2.__h.push(l2._sb[w2]);
              l2._sb = [];
            } else do {
              l2.__d = false, x2 && x2(t2), p2 = l2.render(l2.props, l2.state, l2.context), l2.state = l2.__s;
            } while (l2.__d && ++_2 < 25);
            l2.state = l2.__s, null != l2.getChildContext && (i2 = Fs(Fs({}, i2), l2.getChildContext())), u2 || null == l2.getSnapshotBeforeUpdate || (f2 = l2.getSnapshotBeforeUpdate(h2, d2)), E2 = null != p2 && p2.type === Vs && null == p2.key ? p2.props.children : p2, Xs(e2, Array.isArray(E2) ? E2 : [E2], t2, n2, i2, r2, o2, a2, s2, c2), l2.base = t2.__e, t2.__h = null, l2.__h.length && a2.push(l2), m2 && (l2.__E = l2.__ = null), l2.__e = false;
          } else null == o2 && t2.__v === n2.__v ? (t2.__k = n2.__k, t2.__e = n2.__e) : t2.__e = oc(n2.__e, t2, n2, i2, r2, o2, a2, c2);
          (p2 = Ds.diffed) && p2(t2);
        } catch (e3) {
          t2.__v = null, (c2 || null != o2) && (t2.__e = s2, t2.__h = !!c2, o2[o2.indexOf(s2)] = null), Ds.__e(e3, t2, n2);
        }
      }
      function rc(e2, t2) {
        Ds.__c && Ds.__c(t2, e2), e2.some(function(t3) {
          try {
            e2 = t3.__h, t3.__h = [], e2.some(function(e3) {
              e3.call(t3);
            });
          } catch (e3) {
            Ds.__e(e3, t3.__v);
          }
        });
      }
      function oc(e2, t2, n2, i2, r2, o2, a2, s2) {
        var c2, p2, l2, u2 = n2.props, h2 = t2.props, d2 = t2.type, f2 = 0;
        if ("svg" === d2 && (r2 = true), null != o2) {
          for (; f2 < o2.length; f2++) if ((c2 = o2[f2]) && "setAttribute" in c2 == !!d2 && (d2 ? c2.localName === d2 : 3 === c2.nodeType)) {
            e2 = c2, o2[f2] = null;
            break;
          }
        }
        if (null == e2) {
          if (null === d2) return document.createTextNode(h2);
          e2 = r2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, h2.is && h2), o2 = null, s2 = false;
        }
        if (null === d2) u2 === h2 || s2 && e2.data === h2 || (e2.data = h2);
        else {
          if (o2 = o2 && Ms.call(e2.childNodes), p2 = (u2 = n2.props || Ls).dangerouslySetInnerHTML, l2 = h2.dangerouslySetInnerHTML, !s2) {
            if (null != o2) for (u2 = {}, f2 = 0; f2 < e2.attributes.length; f2++) u2[e2.attributes[f2].name] = e2.attributes[f2].value;
            (l2 || p2) && (l2 && (p2 && l2.__html == p2.__html || l2.__html === e2.innerHTML) || (e2.innerHTML = l2 && l2.__html || ""));
          }
          if (function(e3, t3, n3, i3, r3) {
            var o3;
            for (o3 in n3) "children" === o3 || "key" === o3 || o3 in t3 || ec(e3, o3, null, n3[o3], i3);
            for (o3 in t3) r3 && "function" != typeof t3[o3] || "children" === o3 || "key" === o3 || "value" === o3 || "checked" === o3 || n3[o3] === t3[o3] || ec(e3, o3, t3[o3], n3[o3], i3);
          }(e2, h2, u2, r2, s2), l2) t2.__k = [];
          else if (f2 = t2.props.children, Xs(e2, Array.isArray(f2) ? f2 : [f2], t2, n2, i2, r2 && "foreignObject" !== d2, o2, a2, o2 ? o2[0] : n2.__k && Us(n2, 0), s2), null != o2) for (f2 = o2.length; f2--; ) null != o2[f2] && zs(o2[f2]);
          s2 || ("value" in h2 && void 0 !== (f2 = h2.value) && (f2 !== e2.value || "progress" === d2 && !f2 || "option" === d2 && f2 !== u2.value) && ec(e2, "value", f2, u2.value, false), "checked" in h2 && void 0 !== (f2 = h2.checked) && f2 !== e2.checked && ec(e2, "checked", f2, u2.checked, false));
        }
        return e2;
      }
      function ac(e2, t2, n2) {
        try {
          "function" == typeof e2 ? e2(t2) : e2.current = t2;
        } catch (e3) {
          Ds.__e(e3, n2);
        }
      }
      function sc(e2, t2, n2) {
        var i2, r2;
        if (Ds.unmount && Ds.unmount(e2), (i2 = e2.ref) && (i2.current && i2.current !== e2.__e || ac(i2, null, t2)), null != (i2 = e2.__c)) {
          if (i2.componentWillUnmount) try {
            i2.componentWillUnmount();
          } catch (e3) {
            Ds.__e(e3, t2);
          }
          i2.base = i2.__P = null, e2.__c = void 0;
        }
        if (i2 = e2.__k) for (r2 = 0; r2 < i2.length; r2++) i2[r2] && sc(i2[r2], t2, n2 || "function" != typeof e2.type);
        n2 || null == e2.__e || zs(e2.__e), e2.__ = e2.__e = e2.__d = void 0;
      }
      function cc(e2, t2, n2) {
        return this.constructor(e2, n2);
      }
      function pc(e2, t2, n2) {
        var i2, r2, o2;
        Ds.__ && Ds.__(e2, t2), r2 = (i2 = "function" == typeof n2) ? null : n2 && n2.__k || t2.__k, o2 = [], ic(t2, e2 = (!i2 && n2 || t2).__k = Hs(Vs, null, [e2]), r2 || Ls, Ls, void 0 !== t2.ownerSVGElement, !i2 && n2 ? [n2] : r2 ? null : t2.firstChild ? Ms.call(t2.childNodes) : null, o2, !i2 && n2 ? n2 : r2 ? r2.__e : t2.firstChild, i2), rc(o2, e2);
      }
      Ms = Is.slice, Ds = { __e: function(e2, t2, n2, i2) {
        for (var r2, o2, a2; t2 = t2.__; ) if ((r2 = t2.__c) && !r2.__) try {
          if ((o2 = r2.constructor) && null != o2.getDerivedStateFromError && (r2.setState(o2.getDerivedStateFromError(e2)), a2 = r2.__d), null != r2.componentDidCatch && (r2.componentDidCatch(e2, i2 || {}), a2 = r2.__d), a2) return r2.__E = r2;
        } catch (t3) {
          e2 = t3;
        }
        throw e2;
      } }, Bs = 0, Ws.prototype.setState = function(e2, t2) {
        var n2;
        n2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = Fs({}, this.state), "function" == typeof e2 && (e2 = e2(Fs({}, n2), this.props)), e2 && Fs(n2, e2), null != e2 && this.__v && (t2 && this._sb.push(t2), Ks(this));
      }, Ws.prototype.forceUpdate = function(e2) {
        this.__v && (this.__e = true, e2 && this.__h.push(e2), Ks(this));
      }, Ws.prototype.render = Vs, Ns = [], Ys.__r = 0;
      var lc = function(e2, t2, n2, i2) {
        var r2;
        t2[0] = 0;
        for (var o2 = 1; o2 < t2.length; o2++) {
          var a2 = t2[o2++], s2 = t2[o2] ? (t2[0] |= a2 ? 1 : 2, n2[t2[o2++]]) : t2[++o2];
          3 === a2 ? i2[0] = s2 : 4 === a2 ? i2[1] = Object.assign(i2[1] || {}, s2) : 5 === a2 ? (i2[1] = i2[1] || {})[t2[++o2]] = s2 : 6 === a2 ? i2[1][t2[++o2]] += s2 + "" : a2 ? (r2 = e2.apply(s2, lc(e2, s2, n2, ["", null])), i2.push(r2), s2[0] ? t2[0] |= 2 : (t2[o2 - 2] = 0, t2[o2] = r2)) : i2.push(s2);
        }
        return i2;
      }, uc = /* @__PURE__ */ new Map();
      var hc, dc, fc, mc, vc = (function(e2) {
        var t2 = uc.get(this);
        return t2 || (t2 = /* @__PURE__ */ new Map(), uc.set(this, t2)), (t2 = lc(this, t2.get(e2) || (t2.set(e2, t2 = function(e3) {
          for (var t3, n2, i2 = 1, r2 = "", o2 = "", a2 = [0], s2 = function(e4) {
            1 === i2 && (e4 || (r2 = r2.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? a2.push(0, e4, r2) : 3 === i2 && (e4 || r2) ? (a2.push(3, e4, r2), i2 = 2) : 2 === i2 && "..." === r2 && e4 ? a2.push(4, e4, 0) : 2 === i2 && r2 && !e4 ? a2.push(5, 0, true, r2) : i2 >= 5 && ((r2 || !e4 && 5 === i2) && (a2.push(i2, 0, r2, n2), i2 = 6), e4 && (a2.push(i2, e4, 0, n2), i2 = 6)), r2 = "";
          }, c2 = 0; c2 < e3.length; c2++) {
            c2 && (1 === i2 && s2(), s2(c2));
            for (var p2 = 0; p2 < e3[c2].length; p2++) t3 = e3[c2][p2], 1 === i2 ? "<" === t3 ? (s2(), a2 = [a2], i2 = 3) : r2 += t3 : 4 === i2 ? "--" === r2 && ">" === t3 ? (i2 = 1, r2 = "") : r2 = t3 + r2[0] : o2 ? t3 === o2 ? o2 = "" : r2 += t3 : '"' === t3 || "'" === t3 ? o2 = t3 : ">" === t3 ? (s2(), i2 = 1) : i2 && ("=" === t3 ? (i2 = 5, n2 = r2, r2 = "") : "/" === t3 && (i2 < 5 || ">" === e3[c2][p2 + 1]) ? (s2(), 3 === i2 && (a2 = a2[0]), i2 = a2, (a2 = a2[0]).push(2, 0, i2), i2 = 0) : " " === t3 || "	" === t3 || "\n" === t3 || "\r" === t3 ? (s2(), i2 = 2) : r2 += t3), 3 === i2 && "!--" === r2 && (i2 = 4, a2 = a2[0]);
          }
          return s2(), a2;
        }(e2)), t2), arguments, [])).length > 1 ? t2 : t2[0];
      }).bind(Hs), yc = 0, gc = [], bc = [], xc = Ds.__b, _c = Ds.__r, wc = Ds.diffed, Ec = Ds.__c, Sc = Ds.unmount;
      function Cc(e2, t2) {
        Ds.__h && Ds.__h(dc, e2, yc || t2), yc = 0;
        var n2 = dc.__H || (dc.__H = { __: [], __h: [] });
        return e2 >= n2.__.length && n2.__.push({ __V: bc }), n2.__[e2];
      }
      function Rc(e2) {
        return yc = 1, function(e3, t2, n2) {
          var i2 = Cc(hc++, 2);
          if (i2.t = e3, !i2.__c && (i2.__ = [n2 ? n2(t2) : Ic(void 0, t2), function(e4) {
            var t3 = i2.__N ? i2.__N[0] : i2.__[0], n3 = i2.t(t3, e4);
            t3 !== n3 && (i2.__N = [n3, i2.__[1]], i2.__c.setState({}));
          }], i2.__c = dc, !dc.u)) {
            dc.u = true;
            var r2 = dc.shouldComponentUpdate;
            dc.shouldComponentUpdate = function(e4, t3, n3) {
              if (!i2.__c.__H) return true;
              var o2 = i2.__c.__H.__.filter(function(e5) {
                return e5.__c;
              });
              if (o2.every(function(e5) {
                return !e5.__N;
              })) return !r2 || r2.call(this, e4, t3, n3);
              var a2 = false;
              return o2.forEach(function(e5) {
                if (e5.__N) {
                  var t4 = e5.__[0];
                  e5.__ = e5.__N, e5.__N = void 0, t4 !== e5.__[0] && (a2 = true);
                }
              }), !(!a2 && i2.__c.props === e4) && (!r2 || r2.call(this, e4, t3, n3));
            };
          }
          return i2.__N || i2.__;
        }(Ic, e2);
      }
      function Pc(e2, t2) {
        var n2 = Cc(hc++, 3);
        !Ds.__s && Lc(n2.__H, t2) && (n2.__ = e2, n2.i = t2, dc.__H.__h.push(n2));
      }
      function Tc(e2, t2) {
        var n2 = Cc(hc++, 4);
        !Ds.__s && Lc(n2.__H, t2) && (n2.__ = e2, n2.i = t2, dc.__h.push(n2));
      }
      function kc(e2) {
        return yc = 5, Ac(function() {
          return { current: e2 };
        }, []);
      }
      function Ac(e2, t2) {
        var n2 = Cc(hc++, 7);
        return Lc(n2.__H, t2) ? (n2.__V = e2(), n2.i = t2, n2.__h = e2, n2.__V) : n2.__;
      }
      function Mc(e2, t2) {
        return yc = 8, Ac(function() {
          return e2;
        }, t2);
      }
      function Dc() {
        for (var e2; e2 = gc.shift(); ) if (e2.__P && e2.__H) try {
          e2.__H.__h.forEach(Oc), e2.__H.__h.forEach(jc), e2.__H.__h = [];
        } catch (t2) {
          e2.__H.__h = [], Ds.__e(t2, e2.__v);
        }
      }
      Ds.__b = function(e2) {
        dc = null, xc && xc(e2);
      }, Ds.__r = function(e2) {
        _c && _c(e2), hc = 0;
        var t2 = (dc = e2.__c).__H;
        t2 && (fc === dc ? (t2.__h = [], dc.__h = [], t2.__.forEach(function(e3) {
          e3.__N && (e3.__ = e3.__N), e3.__V = bc, e3.__N = e3.i = void 0;
        })) : (t2.__h.forEach(Oc), t2.__h.forEach(jc), t2.__h = [])), fc = dc;
      }, Ds.diffed = function(e2) {
        wc && wc(e2);
        var t2 = e2.__c;
        t2 && t2.__H && (t2.__H.__h.length && (1 !== gc.push(t2) && mc === Ds.requestAnimationFrame || ((mc = Ds.requestAnimationFrame) || Nc)(Dc)), t2.__H.__.forEach(function(e3) {
          e3.i && (e3.__H = e3.i), e3.__V !== bc && (e3.__ = e3.__V), e3.i = void 0, e3.__V = bc;
        })), fc = dc = null;
      }, Ds.__c = function(e2, t2) {
        t2.some(function(e3) {
          try {
            e3.__h.forEach(Oc), e3.__h = e3.__h.filter(function(e4) {
              return !e4.__ || jc(e4);
            });
          } catch (n2) {
            t2.some(function(e4) {
              e4.__h && (e4.__h = []);
            }), t2 = [], Ds.__e(n2, e3.__v);
          }
        }), Ec && Ec(e2, t2);
      }, Ds.unmount = function(e2) {
        Sc && Sc(e2);
        var t2, n2 = e2.__c;
        n2 && n2.__H && (n2.__H.__.forEach(function(e3) {
          try {
            Oc(e3);
          } catch (e4) {
            t2 = e4;
          }
        }), n2.__H = void 0, t2 && Ds.__e(t2, n2.__v));
      };
      var Bc = "function" == typeof requestAnimationFrame;
      function Nc(e2) {
        var t2, n2 = function() {
          clearTimeout(i2), Bc && cancelAnimationFrame(t2), setTimeout(e2);
        }, i2 = setTimeout(n2, 100);
        Bc && (t2 = requestAnimationFrame(n2));
      }
      function Oc(e2) {
        var t2 = dc, n2 = e2.__c;
        "function" == typeof n2 && (e2.__c = void 0, n2()), dc = t2;
      }
      function jc(e2) {
        var t2 = dc;
        e2.__c = e2.__(), dc = t2;
      }
      function Lc(e2, t2) {
        return !e2 || e2.length !== t2.length || t2.some(function(t3, n2) {
          return t3 !== e2[n2];
        });
      }
      function Ic(e2, t2) {
        return "function" == typeof t2 ? t2(e2) : t2;
      }
      function $c(e2) {
        var t2, n2, i2 = "";
        if ("string" == typeof e2 || "number" == typeof e2) i2 += e2;
        else if ("object" == typeof e2) if (Array.isArray(e2)) for (t2 = 0; t2 < e2.length; t2++) e2[t2] && (n2 = $c(e2[t2])) && (i2 && (i2 += " "), i2 += n2);
        else for (t2 in e2) e2[t2] && (i2 && (i2 += " "), i2 += t2);
        return i2;
      }
      function Fc() {
        for (var e2, t2, n2 = 0, i2 = ""; n2 < arguments.length; ) (e2 = arguments[n2++]) && (t2 = $c(e2)) && (i2 && (i2 += " "), i2 += t2);
        return i2;
      }
      function zc(e2) {
        const { entry: t2, selected: n2, onMouseEnter: i2, onMouseLeave: r2, onAction: o2 } = e2;
        return vc`
    <li
      class=${Fc("entry", { selected: n2 })}
      data-id=${t2.id}
      title=${t2.title || t2.label}
      onClick=${o2}
      onMouseEnter=${i2}
      onMouseLeave=${r2}
      onDragStart=${(e3) => o2(e3, t2, "dragstart")}
      draggable=${true}
    >
      <div class="djs-popup-entry-content">
        <span
          class=${Fc("djs-popup-entry-name", t2.className)}
        >
          ${t2.imageUrl && vc`<img class="djs-popup-entry-icon" src=${t2.imageUrl} alt="" />` || t2.imageHtml && vc`<div class="djs-popup-entry-icon" dangerouslySetInnerHTML=${{ __html: t2.imageHtml }} />`}

          ${t2.label ? vc`
            <span class="djs-popup-label">
              ${t2.label}
            </span>
          ` : null}
        </span>
        ${t2.description && vc`
          <span
            class="djs-popup-entry-description"
            title=${t2.description}
          >
            ${t2.description}
          </span>
        `}
      </div>
      ${t2.documentationRef && vc`
        <div class="djs-popup-entry-docs">
          <a
            href="${t2.documentationRef}"
            onClick=${(e3) => e3.stopPropagation()}
            title="Open element documentation"
            target="_blank"
            rel="noopener"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6368 10.6375V5.91761H11.9995V10.6382C11.9995 10.9973 11.8623 11.3141 11.5878 11.5885C11.3134 11.863 10.9966 12.0002 10.6375 12.0002H1.36266C0.982345 12.0002 0.660159 11.8681 0.396102 11.6041C0.132044 11.34 1.52588e-05 11.0178 1.52588e-05 10.6375V1.36267C1.52588e-05 0.98236 0.132044 0.660173 0.396102 0.396116C0.660159 0.132058 0.982345 2.95639e-05 1.36266 2.95639e-05H5.91624V1.36267H1.36266V10.6375H10.6368ZM12 0H7.2794L7.27873 1.36197H9.68701L3.06507 7.98391L4.01541 8.93425L10.6373 2.31231V4.72059H12V0Z" fill="#818798"/>
            </svg>
          </a>
        </div>
      `}
    </li>
  `;
      }
      function Hc(e2) {
        const { selectedEntry: t2, setSelectedEntry: n2, entries: i2, ...r2 } = e2, o2 = kc(), a2 = Ac(() => function(e3) {
          const t3 = [], n3 = (e4) => t3.find((t4) => e4.id === t4.id), i3 = (e4) => !!n3(e4), r3 = (e4) => "string" == typeof e4 ? { id: e4 } : e4;
          return e3.forEach((e4) => {
            const o3 = e4.group ? r3(e4.group) : { id: "default" };
            i3(o3) ? n3(o3).entries.push(e4) : t3.push({ ...o3, entries: [e4] });
          }), t3;
        }(i2), [i2]);
        return Tc(() => {
          const e3 = o2.current;
          if (!e3) return;
          const t3 = e3.querySelector(".selected");
          var n3;
          t3 && ("function" == typeof (n3 = t3).scrollIntoViewIfNeeded ? n3.scrollIntoViewIfNeeded() : n3.scrollIntoView({ scrollMode: "if-needed", block: "nearest" }));
        }, [t2]), vc`
    <div class="djs-popup-results" ref=${o2}>
      ${a2.map((e3) => vc`
        ${e3.name && vc`
          <div key=${e3.id} class="entry-header" title=${e3.name}>
            ${e3.name}
          </div>
        `}
        <ul class="djs-popup-group" data-group=${e3.id}>
          ${e3.entries.map((e4) => vc`
            <${zc}
              key=${e4.id}
              entry=${e4}
              selected=${e4 === t2}
              onMouseEnter=${() => n2(e4)}
              onMouseLeave=${() => n2(null)}
              ...${r2}
            />
          `)}
        </ul>
      `)}
    </div>
  `;
      }
      function Gc(e2) {
        const { onClose: t2, onSelect: n2, className: i2, headerEntries: r2, position: o2, title: a2, width: c2, scale: p2, search: l2, entries: u2, onOpened: h2, onClosed: d2 } = e2, f2 = Ac(() => !!s(l2) && u2.length > 5, [l2, u2]), m2 = kc(), [v2, y2] = Rc(""), g2 = Mc((e3, t3) => {
          if (!f2) return e3;
          return e3.filter((e4) => {
            if (!t3) return (e4.rank || 0) >= 0;
            const n3 = [e4.description || "", e4.label || "", e4.search || ""].join("---").toLowerCase();
            return t3.toLowerCase().split(/\s/g).every((e5) => n3.includes(e5));
          });
        }, [f2]), [b2, x2] = Rc(g2(u2, v2)), [_2, w2] = Rc(b2[0]), E2 = Mc((e3) => {
          _2 && e3.includes(_2) || w2(e3[0]), x2(e3);
        }, [_2, x2, w2]);
        Pc(() => {
          E2(g2(u2, v2));
        }, [v2, u2]), Pc(() => {
          const e3 = (e4) => {
            if ("Escape" === e4.key) return e4.preventDefault(), t2();
          };
          return document.documentElement.addEventListener("keydown", e3), () => {
            document.documentElement.removeEventListener("keydown", e3);
          };
        }, []), Tc(() => {
          m2.current && m2.current.focus();
        }, []);
        const S2 = Mc((e3) => {
          let t3 = b2.indexOf(_2) + e3;
          t3 < 0 && (t3 = b2.length - 1), t3 >= b2.length && (t3 = 0), w2(b2[t3]);
        }, [b2, _2, w2]), C2 = Mc((e3) => "Enter" === e3.key && _2 ? n2(e3, _2) : "ArrowUp" === e3.key || "Tab" === e3.key && e3.shiftKey ? (S2(-1), e3.preventDefault()) : "ArrowDown" === e3.key || "Tab" === e3.key ? (S2(1), e3.preventDefault()) : void 0, [n2, t2, _2, S2]), R2 = Mc((e3) => {
          J(e3.target, "input") && y2(() => e3.target.value);
        }, [y2]);
        Pc(() => (h2(), () => {
          d2();
        }), []);
        const P2 = Ac(() => a2 || r2.length > 0, [a2, r2]);
        return vc`
    <${Vc}
      onClose=${t2}
      onKeyup=${R2}
      onKeydown=${C2}
      className=${i2}
      position=${o2}
      width=${c2}
      scale=${p2}
    >
      ${P2 && vc`
        <div class="djs-popup-header">
          <h3 class="djs-popup-title" title=${a2}>${a2}</h3>
          ${r2.map((e3) => vc`
            <span
              class=${function(e4, t3) {
          return Fc("entry", e4.className, e4.active ? "active" : "", e4.disabled ? "disabled" : "", t3 ? "selected" : "");
        }(e3, e3 === _2)}
              onClick=${(t3) => n2(t3, e3)}
              title=${e3.title || e3.label}
              data-id=${e3.id}
              onMouseEnter=${() => w2(e3)}
              onMouseLeave=${() => w2(null)}
            >
              ${e3.imageUrl ? vc`
                <img class="djs-popup-entry-icon" src=${e3.imageUrl} alt="" />
              ` : null}

              ${e3.label ? vc`
                <span class="djs-popup-label">${e3.label}</span>
              ` : null}
            </span>
          `)}
        </div>
      `}
      ${u2.length > 0 && vc`
        <div class="djs-popup-body">

          ${f2 && vc`
          <div class="djs-popup-search">
            <svg class="djs-popup-search-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.0325 8.5H9.625L13.3675 12.25L12.25 13.3675L8.5 9.625V9.0325L8.2975 8.8225C7.4425 9.5575 6.3325 10 5.125 10C2.4325 10 0.25 7.8175 0.25 5.125C0.25 2.4325 2.4325 0.25 5.125 0.25C7.8175 0.25 10 2.4325 10 5.125C10 6.3325 9.5575 7.4425 8.8225 8.2975L9.0325 8.5ZM1.75 5.125C1.75 6.9925 3.2575 8.5 5.125 8.5C6.9925 8.5 8.5 6.9925 8.5 5.125C8.5 3.2575 6.9925 1.75 5.125 1.75C3.2575 1.75 1.75 3.2575 1.75 5.125Z" fill="#22242A"/>
            </svg>
            <input
                ref=${m2}
                type="text"
              />
          </div>
          `}

          <${Hc}
            entries=${b2}
            selectedEntry=${_2}
            setSelectedEntry=${w2}
            onAction=${n2}
          />
        </div>
        ${0 === b2.length && vc`
          <div class="djs-popup-no-results">No matching entries found.</div>
        `}
      `}
    </${Vc}>
  `;
      }
      function Vc(e2) {
        const { onClose: t2, onKeydown: n2, onKeyup: i2, className: r2, children: o2, position: a2 } = e2, s2 = kc(), c2 = Mc((e3) => {
          ee(e3.target, ".djs-popup", true) || t2();
        }, [t2]);
        return Tc(() => {
          if ("function" != typeof a2) return;
          const e3 = s2.current, t3 = a2(e3);
          e3.style.left = `${t3.x}px`, e3.style.top = `${t3.y}px`;
        }, [s2.current, a2]), Tc(() => {
          s2.current && s2.current.focus();
        }, []), vc`
    <div
      class="djs-popup-backdrop"
      onClick=${c2}
    >
      <div
        class=${Fc("djs-popup", r2)}
        style=${function(e3) {
          return { transform: `scale(${e3.scale})`, width: `${e3.width}px` };
        }(e2)}
        onKeydown=${n2}
        onKeyup=${i2}
        ref=${s2}
        tabIndex="-1"
      >
        ${o2}
      </div>
    </div>
  `;
      }
      var Wc = ["contextPad.close", "canvas.viewbox.changing", "commandStack.changed"];
      function Uc(e2, t2, n2) {
        this._eventBus = t2, this._canvas = n2, this._current = null;
        var i2 = s(e2 && e2.scale) ? e2.scale : { min: 1, max: 1.5 };
        this._config = { scale: i2 }, t2.on("diagram.destroy", () => {
          this.close();
        }), t2.on("element.changed", (e3) => {
          const t3 = this.isOpen() && this._current.target;
          e3.element === t3 && this._render();
        });
      }
      Uc.$inject = ["config.popupMenu", "eventBus", "canvas"], Uc.prototype._render = function() {
        const { position: e2, className: t2, entries: n2, headerEntries: i2, options: r2 } = this._current, o2 = Object.entries(n2).map(([e3, t3]) => ({ id: e3, ...t3 })), a2 = Object.entries(i2).map(([e3, t3]) => ({ id: e3, ...t3 })), s2 = e2 && ((t3) => this._ensureVisible(t3, e2)), c2 = this._updateScale(this._current.container);
        pc(vc`
      <${Gc}
        onClose=${(e3) => this.close(e3)}
        onSelect=${(e3, t3, n3) => this.trigger(e3, t3, n3)}
        position=${s2}
        className=${t2}
        entries=${o2}
        headerEntries=${a2}
        scale=${c2}
        onOpened=${this._onOpened.bind(this)}
        onClosed=${this._onClosed.bind(this)}
        ...${{ ...r2 }}
      />
    `, this._current.container);
      }, Uc.prototype.open = function(e2, t2, n2, i2) {
        if (!e2) throw new Error("target is missing");
        if (!t2) throw new Error("providers for <" + t2 + "> not found");
        if (!n2) throw new Error("position is missing");
        this.isOpen() && this.close();
        const { entries: r2, headerEntries: o2 } = this._getContext(e2, t2);
        this._current = { position: n2, className: t2, target: e2, entries: r2, headerEntries: o2, container: this._createContainer({ provider: t2 }), options: i2 }, this._emit("open"), this._bindAutoClose(), this._render();
      }, Uc.prototype._getContext = function(e2, t2) {
        const n2 = this._getProviders(t2);
        if (!n2 || !n2.length) throw new Error("provider for <" + t2 + "> not found");
        const i2 = this._getEntries(e2, n2), r2 = this._getHeaderEntries(e2, n2);
        return { entries: i2, headerEntries: r2, empty: !(Object.keys(i2).length || Object.keys(r2).length) };
      }, Uc.prototype.close = function() {
        this.isOpen() && (this._emit("close"), this.reset(), this._current = null);
      }, Uc.prototype.reset = function() {
        const e2 = this._current.container;
        pc(null, e2), ve(e2);
      }, Uc.prototype._emit = function(e2, t2) {
        this._eventBus.fire(`popupMenu.${e2}`, t2);
      }, Uc.prototype._onOpened = function() {
        this._emit("opened");
      }, Uc.prototype._onClosed = function() {
        this._emit("closed");
      }, Uc.prototype._createContainer = function(e2) {
        var t2 = this._canvas.getContainer();
        const n2 = de(`<div class="djs-popup-parent djs-scrollable" data-popup=${e2.provider}></div>`);
        return t2.appendChild(n2), n2;
      }, Uc.prototype._bindAutoClose = function() {
        this._eventBus.once(Wc, this.close, this);
      }, Uc.prototype._unbindAutoClose = function() {
        this._eventBus.off(Wc, this.close, this);
      }, Uc.prototype._updateScale = function() {
        var e2, t2, n2 = this._canvas.zoom(), i2 = this._config.scale, r2 = n2;
        return true !== i2 && (false === i2 ? (e2 = 1, t2 = 1) : (e2 = i2.min, t2 = i2.max), s(e2) && n2 < e2 && (r2 = e2), s(t2) && n2 > t2 && (r2 = t2)), r2;
      }, Uc.prototype._ensureVisible = function(e2, t2) {
        var n2 = document.documentElement.getBoundingClientRect(), i2 = e2.getBoundingClientRect(), r2 = {}, o2 = t2.x, a2 = t2.y;
        return t2.x + i2.width > n2.width && (r2.x = true), t2.y + i2.height > n2.height && (r2.y = true), r2.x && r2.y ? (o2 = t2.x - i2.width, a2 = t2.y - i2.height) : r2.x ? (o2 = t2.x - i2.width, a2 = t2.y) : r2.y && t2.y < i2.height ? (o2 = t2.x, a2 = 10) : r2.y && (o2 = t2.x, a2 = t2.y - i2.height), { x: o2, y: a2 };
      }, Uc.prototype.isEmpty = function(e2, t2) {
        if (!e2) throw new Error("target is missing");
        if (!t2) throw new Error("provider ID is missing");
        const n2 = this._getProviders(t2);
        return !n2 || !n2.length || this._getContext(e2, t2).empty;
      }, Uc.prototype.registerProvider = function(e2, t2, n2) {
        n2 || (n2 = t2, t2 = 1e3), this._eventBus.on("popupMenu.getProviders." + e2, t2, function(e3) {
          e3.providers.push(n2);
        });
      }, Uc.prototype._getProviders = function(e2) {
        var t2 = this._eventBus.createEvent({ type: "popupMenu.getProviders." + e2, providers: [] });
        return this._eventBus.fire(t2), t2.providers;
      }, Uc.prototype._getEntries = function(e2, t2) {
        var n2 = {};
        return g(t2, function(t3) {
          if (t3.getPopupMenuEntries) {
            var i2 = t3.getPopupMenuEntries(e2);
            h(i2) ? n2 = i2(n2) : g(i2, function(e3, t4) {
              n2[t4] = e3;
            });
          } else g(t3.getEntries(e2), function(e3) {
            var t4 = e3.id;
            if (!t4) throw new Error("entry ID is missing");
            n2[t4] = $(e3, ["id"]);
          });
        }), n2;
      }, Uc.prototype._getHeaderEntries = function(e2, t2) {
        var n2 = {};
        return g(t2, function(t3) {
          if (t3.getPopupMenuHeaderEntries) {
            var i2 = t3.getPopupMenuHeaderEntries(e2);
            h(i2) ? n2 = i2(n2) : g(i2, function(e3, t4) {
              n2[t4] = e3;
            });
          } else {
            if (!t3.getHeaderEntries) return;
            g(t3.getHeaderEntries(e2), function(e3) {
              var t4 = e3.id;
              if (!t4) throw new Error("entry ID is missing");
              n2[t4] = $(e3, ["id"]);
            });
          }
        }), n2;
      }, Uc.prototype.isOpen = function() {
        return !!this._current;
      }, Uc.prototype.trigger = function(e2, t2, n2 = "click") {
        if (e2.preventDefault(), !t2) {
          let n3 = K(ee(e2.delegateTarget || e2.target, ".entry", true), "data-id");
          t2 = { id: n3, ...this._getEntry(n3) };
        }
        const i2 = t2.action;
        if (false !== this._emit("trigger", { entry: t2, event: e2 })) {
          if (h(i2)) {
            if ("click" === n2) return i2(e2, t2);
          } else if (i2[n2]) return i2[n2](e2, t2);
        }
      }, Uc.prototype._getEntry = function(e2) {
        var t2 = this._current.entries[e2] || this._current.headerEntries[e2];
        if (!t2) throw new Error("entry not found");
        return t2;
      };
      var qc = { __init__: ["popupMenu"], popupMenu: ["type", Uc] }, Kc = { align: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000">\n              <line x1="200" y1="150" x2="200" y2="1850" style="stroke:currentColor;stroke-width:100;stroke-linecap:round;"/>\n              <rect x="500" y="150" width="1300" height="700" rx="1" style="fill:none;stroke:currentColor;stroke-width:100;"></rect>\n              <rect x="500" y="1150" width="700" height="700" rx="1" style="fill:currentColor;stroke:currentColor;stroke-width:100;opacity:.5;"></rect>\n          </svg>', bottom: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 1800">\n            <line x1="150" y1="1650" x2="1650" y2="1650" style="stroke:currentColor;stroke-width:100;stroke-linecap:round;"/>\n            <rect x="150" y="350" width="600" height="1300" rx="1" style="fill:none;stroke:currentColor;stroke-width:100;"></rect>\n            <rect x="1050" y="850" width="600" height="800" rx="1" style="fill:currentColor;stroke:currentColor;stroke-width:100;opacity:.5;"></rect>\n          </svg>', center: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 1800">\n            <line x1="900" y1="150" x2="900" y2="1650" style="stroke:currentColor;stroke-width:100;stroke-linecap:round;"/>\n            <rect x="250" y="150" width="1300" height="600" rx="1" style="fill:none;stroke:currentColor;stroke-width:100;"></rect>\n            <rect x="500" y="1050" width="800" height="600" rx="1" style="fill:currentColor;stroke:currentColor;stroke-width:100;opacity:.5;"></rect>\n          </svg>', left: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 1800">\n            <line x1="100" y1="150" x2="100" y2="1650" style="stroke:currentColor;stroke-width:100;stroke-linecap:round;"/>\n            <rect x="100" y="150" width="1300" height="600" rx="1" style="fill:none;stroke:currentColor;stroke-width:100;"></rect>\n            <rect x="100" y="1050" width="800" height="600" rx="1" style="fill:currentColor;stroke:currentColor;stroke-width:100;opacity:.5;"></rect>\n          </svg>', right: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 1800">\n            <line x1="1650" y1="150" x2="1650" y2="1650" style="stroke:currentColor;stroke-width:100;stroke-linecap:round;"/>\n            <rect x="350" y="150" width="1300" height="600" rx="1" style="fill:none;stroke:currentColor;stroke-width:100;"></rect>\n            <rect x="850" y="1050" width="800" height="600" rx="1" style="fill:currentColor;stroke:currentColor;stroke-width:100;opacity:.5;"></rect>\n          </svg>', top: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 1800">\n            <line x1="150" y1="150" x2="1650" y2="150" style="stroke:currentColor;stroke-width:100;stroke-linecap:round;"/>\n            <rect x="150" y="150" width="600" height="1300" rx="1" style="fill:none;stroke:currentColor;stroke-width:100;"></rect>\n            <rect x="1050" y="150" width="600" height="800" rx="1" style="fill:currentColor;stroke:currentColor;stroke-width:100;opacity:.5;"></rect>\n          </svg>', middle: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 1800">\n            <line x1="150" y1="900" x2="1650" y2="900" style="stroke:currentColor;stroke-width:100;stroke-linecap:round;"/>\n            <rect x="150" y="250" width="600" height="1300" rx="1" style="fill:none;stroke:currentColor;stroke-width:100;"></rect>\n            <rect x="1050" y="500" width="600" height="800" rx="1" style="fill:currentColor;stroke:currentColor;stroke-width:100;opacity:.5;"></rect>\n          </svg>' };
      function Yc(e2, t2, n2, i2) {
        e2.registerProvider(900, this), this._contextPad = e2, this._popupMenu = t2, this._translate = n2, this._canvas = i2;
      }
      Yc.$inject = ["contextPad", "popupMenu", "translate", "canvas"], Yc.prototype.getMultiElementContextPadEntries = function(e2) {
        var t2 = {};
        return this._isAllowed(e2) && L(t2, this._getEntries(e2)), t2;
      }, Yc.prototype._isAllowed = function(e2) {
        return !this._popupMenu.isEmpty(e2, "align-elements");
      }, Yc.prototype._getEntries = function() {
        var e2 = this;
        return { "align-elements": { group: "align-elements", title: e2._translate("Align elements"), html: `<div class="entry">${Kc.align}</div>`, action: { click: function(t2, n2) {
          var i2 = e2._getMenuPosition(n2);
          L(i2, { cursor: { x: t2.x, y: t2.y } }), e2._popupMenu.open(n2, "align-elements", i2);
        } } } };
      }, Yc.prototype._getMenuPosition = function(e2) {
        var t2 = this._contextPad.getPad(e2).html.getBoundingClientRect();
        return { x: t2.left, y: t2.bottom + 5 };
      };
      var Xc = ["left", "center", "right", "top", "middle", "bottom"];
      function Zc(e2, t2, n2, i2) {
        this._alignElements = t2, this._translate = n2, this._popupMenu = e2, this._rules = i2, e2.registerProvider("align-elements", this);
      }
      function Qc(e2) {
        ua.call(this, e2), this.init();
      }
      function Jc(e2) {
        Qc.call(this, e2);
      }
      Zc.$inject = ["popupMenu", "alignElements", "translate", "rules"], Zc.prototype.getPopupMenuEntries = function(e2) {
        var t2 = {};
        return this._isAllowed(e2) && L(t2, this._getEntries(e2)), t2;
      }, Zc.prototype._isAllowed = function(e2) {
        return this._rules.allowed("elements.align", { elements: e2 });
      }, Zc.prototype._getEntries = function(e2) {
        var t2 = this._alignElements, n2 = this._translate, i2 = this._popupMenu, r2 = {};
        return g(Xc, function(o2) {
          r2["align-elements-" + o2] = { group: "align", title: n2("Align elements " + o2), className: "bjs-align-elements-menu-entry", imageHtml: Kc[o2], action: function() {
            t2.trigger(e2, o2), i2.close();
          } };
        }), r2;
      }, Qc.$inject = ["eventBus"], e(Qc, ua), Qc.prototype.addRule = function(e2, t2, n2) {
        var i2 = this;
        "string" == typeof e2 && (e2 = [e2]), e2.forEach(function(e3) {
          i2.canExecute(e3, t2, function(e4, t3, i3) {
            return n2(e4);
          }, true);
        });
      }, Qc.prototype.init = function() {
      }, Jc.$inject = ["eventBus"], e(Jc, Qc), Jc.prototype.init = function() {
        this.addRule("elements.align", function(e2) {
          var t2 = y(e2.elements, function(e3) {
            return !(e3.waypoints || e3.host || e3.labelTarget);
          });
          return !((t2 = ut(t2)).length < 2) && t2;
        });
      };
      var ep = { __depends__: [Ps, js, qc], __init__: ["alignElementsContextPadProvider", "alignElementsMenuProvider", "bpmnAlignElements"], alignElementsContextPadProvider: ["type", Yc], alignElementsMenuProvider: ["type", Zc], bpmnAlignElements: ["type", Jc] }, tp = 10, np = 50, ip = 250;
      function rp(e2, t2, n2, i2) {
        for (var r2; r2 = ap(e2, n2, t2); ) n2 = i2(t2, n2, r2);
        return n2;
      }
      function op(e2) {
        return function(t2, n2, i2) {
          var r2 = { x: n2.x, y: n2.y };
          return ["x", "y"].forEach(function(o2) {
            var a2 = e2[o2];
            if (a2) {
              var s2 = "x" === o2 ? "width" : "height", c2 = a2.margin, p2 = a2.minDistance;
              r2[o2] = c2 < 0 ? Math.min(i2[o2] + c2 - t2[s2] / 2, n2[o2] - p2 + c2) : Math.max(i2[o2] + i2[s2] + c2 + t2[s2] / 2, n2[o2] + p2 + c2);
            }
          }), r2;
        };
      }
      function ap(e2, t2, n2) {
        var i2 = { x: t2.x - n2.width / 2, y: t2.y - n2.height / 2, width: n2.width, height: n2.height }, r2 = function(e3) {
          var t3 = sp(e3);
          e3.host && (t3 = t3.concat(sp(e3.host)));
          e3.attachers && (t3 = t3.concat(e3.attachers.reduce(function(e4, t4) {
            return e4.concat(sp(t4));
          }, [])));
          return t3;
        }(e2);
        return m(r2, function(e3) {
          return e3 !== n2 && "intersect" === wn(e3, i2, tp);
        });
      }
      function sp(e2) {
        return (t2 = e2, t2.outgoing.map(function(e3) {
          return e3.target;
        })).concat(function(e3) {
          return e3.incoming.map(function(e4) {
            return e4.source;
          });
        }(e2));
        var t2;
      }
      function cp() {
        return true;
      }
      function pp(e2, t2, n2) {
        e2.on("autoPlace", 100, function(e3) {
          var t3 = e3.shape;
          return function(e4, t4, n3) {
            n3 || (n3 = {});
            var i2 = n3.defaultDistance || np, r2 = _n(e4), o2 = gn(e4);
            return { x: o2.right + i2 + t4.width / 2, y: r2.y };
          }(e3.source, t3);
        }), e2.on("autoPlace.end", function(e3) {
          n2.scrollToElement(e3.shape);
        }), this.append = function(n3, i2, r2) {
          e2.fire("autoPlace.start", { source: n3, shape: i2 });
          var o2 = e2.fire("autoPlace", { source: n3, shape: i2 }), a2 = t2.appendShape(n3, i2, o2, n3.parent, r2);
          return e2.fire("autoPlace.end", { source: n3, shape: a2 }), a2;
        };
      }
      function lp(e2, t2) {
        e2.on("autoPlace.end", 500, function(e3) {
          t2.select(e3.shape);
        });
      }
      pp.$inject = ["eventBus", "modeling", "canvas"], lp.$inject = ["eventBus", "selection"];
      var up = { __init__: ["autoPlaceSelectionBehavior"], autoPlace: ["type", pp], autoPlaceSelectionBehavior: ["type", lp] };
      function hp(e2, t2) {
        for (d(t2) && (t2 = [t2]); e2 = e2.parent; ) if (Dr(e2, t2)) return e2;
        return null;
      }
      function dp(e2, t2) {
        return Mr(t2, "bpmn:TextAnnotation") ? function(e3, t3) {
          var n2 = gn(e3), i2 = { x: n2.right + t3.width / 2, y: n2.top - 50 - t3.height / 2 };
          fn(e3) && ((i2 = _n(e3)).x += 100, i2.y -= 50);
          return rp(e3, t3, i2, op({ y: { margin: -30, minDistance: 20 } }));
        }(e2, t2) : Dr(t2, ["bpmn:DataObjectReference", "bpmn:DataStoreReference"]) ? function(e3, t3) {
          var n2 = gn(e3), i2 = { x: n2.right - 10 + t3.width / 2, y: n2.bottom + 40 + t3.width / 2 };
          return rp(e3, t3, i2, op({ x: { margin: 30, minDistance: 30 } }));
        }(e2, t2) : Mr(t2, "bpmn:FlowNode") ? function(e3, t3) {
          var n2 = gn(e3), i2 = _n(e3), r2 = function(e4, t4) {
            t4 || (t4 = {});
            var n3 = t4.defaultDistance || np, i3 = t4.direction || "e", r3 = t4.filter, o3 = t4.getWeight || function(t5) {
              return t5.source === e4 ? 1 : -1;
            }, a3 = t4.maxDistance || ip, s3 = t4.reference || "start";
            function c3(e5, t5) {
              return "n" === i3 ? "start" === s3 ? gn(e5).top - gn(t5).bottom : "center" === s3 ? gn(e5).top - _n(t5).y : gn(e5).top - gn(t5).top : "w" === i3 ? "start" === s3 ? gn(e5).left - gn(t5).right : "center" === s3 ? gn(e5).left - _n(t5).x : gn(e5).left - gn(t5).left : "s" === i3 ? "start" === s3 ? gn(t5).top - gn(e5).bottom : "center" === s3 ? _n(t5).y - gn(e5).bottom : gn(t5).bottom - gn(e5).bottom : "start" === s3 ? gn(t5).left - gn(e5).right : "center" === s3 ? _n(t5).x - gn(e5).right : gn(t5).right - gn(e5).right;
            }
            r3 || (r3 = cp);
            var p2 = e4.incoming.filter(r3).map(function(t5) {
              var n4 = o3(t5), i4 = n4 < 0 ? c3(t5.source, e4) : c3(e4, t5.source);
              return { id: t5.source.id, distance: i4, weight: n4 };
            }), l2 = e4.outgoing.filter(r3).map(function(t5) {
              var n4 = o3(t5), i4 = n4 > 0 ? c3(e4, t5.target) : c3(t5.target, e4);
              return { id: t5.target.id, distance: i4, weight: n4 };
            }), u2 = x(p2.concat(l2).reduce(function(e5, t5) {
              return e5[t5.id + "__weight_" + t5.weight] = t5, e5;
            }, {}), function(e5, t5) {
              var n4 = t5.distance, i4 = t5.weight;
              return n4 < 0 || n4 > a3 || (e5[String(n4)] || (e5[String(n4)] = 0), e5[String(n4)] += 1 * i4, (!e5.distance || e5[e5.distance] < e5[String(n4)]) && (e5.distance = n4)), e5;
            }, {});
            return u2.distance || n3;
          }(e3, { filter: function(e4) {
            return Mr(e4, "bpmn:SequenceFlow");
          } }), o2 = 30, a2 = 80, s2 = "left";
          Mr(e3, "bpmn:BoundaryEvent") && -1 !== (s2 = wn(e3, e3.host, -25)).indexOf("top") && (o2 *= -1);
          var c2 = { x: n2.right + r2 + t3.width / 2, y: i2.y + fp(s2, a2) };
          return rp(e3, t3, c2, op({ y: { margin: o2, minDistance: a2 } }));
        }(e2, t2) : void 0;
      }
      function fp(e2, t2) {
        return e2.includes("top") ? -1 * t2 : e2.includes("bottom") ? t2 : 0;
      }
      function mp(e2) {
        e2.on("autoPlace", function(e3) {
          var t2 = e3.shape;
          return dp(e3.source, t2);
        });
      }
      mp.$inject = ["eventBus"];
      var vp = { __depends__: [up], __init__: ["bpmnAutoPlace"], bpmnAutoPlace: ["type", mp] };
      function yp(e2, t2, n2, r2) {
        ua.call(this, e2), this._elementRegistry = t2, this._modeling = n2, this._rules = r2;
        var o2 = this;
        this.postExecuted(["shape.create"], function(e3) {
          var t3 = e3.context, n3 = t3.hints || {}, i2 = t3.shape, r3 = t3.parent || t3.newParent;
          false !== n3.autoResize && o2._expand([i2], r3);
        }), this.postExecuted(["elements.move"], function(e3) {
          var t3 = e3.context, n3 = i(C(t3.closure.topLevel)), r3 = t3.hints, a2 = !r3 || r3.autoResize;
          false !== a2 && g(R(n3, function(e4) {
            return e4.parent.id;
          }), function(e4, t4) {
            p(a2) && (e4 = e4.filter(function(e5) {
              return m(a2, A({ id: e5.id }));
            })), o2._expand(e4, t4);
          });
        }), this.postExecuted(["shape.toggleCollapse"], function(e3) {
          var t3 = e3.context, n3 = t3.hints, i2 = t3.shape;
          n3 && false === n3.autoResize || i2.collapsed || o2._expand(i2.children || [], i2);
        }), this.postExecuted(["shape.resize"], function(e3) {
          var t3 = e3.context, n3 = t3.hints, i2 = t3.shape, r3 = i2.parent;
          n3 && false === n3.autoResize || r3 && o2._expand([i2], r3);
        });
      }
      function gp(e2) {
        e2.invoke(yp, this);
      }
      function bp(e2) {
        Qc.call(this, e2);
        var t2 = this;
        this.addRule("element.autoResize", function(e3) {
          return t2.canResize(e3.elements, e3.target);
        });
      }
      function xp(e2, t2) {
        bp.call(this, e2), this._modeling = t2;
      }
      yp.$inject = ["eventBus", "elementRegistry", "modeling", "rules"], e(yp, ua), yp.prototype._getOptimalBounds = function(e2, t2) {
        var n2 = this.getOffset(t2), i2 = this.getPadding(t2), r2 = gn(vt(e2)), o2 = gn(t2), a2 = {};
        return r2.top - o2.top < i2.top && (a2.top = r2.top - n2.top), r2.left - o2.left < i2.left && (a2.left = r2.left - n2.left), o2.right - r2.right < i2.right && (a2.right = r2.right + n2.right), o2.bottom - r2.bottom < i2.bottom && (a2.bottom = r2.bottom + n2.bottom), bn(L({}, o2, a2));
      }, yp.prototype._expand = function(e2, t2) {
        if ("string" == typeof t2 && (t2 = this._elementRegistry.get(t2)), this._rules.allowed("element.autoResize", { elements: e2, target: t2 })) {
          var n2 = this._getOptimalBounds(e2, t2);
          if (function(e3, t3) {
            return e3.x !== t3.x || e3.y !== t3.y || e3.width !== t3.width || e3.height !== t3.height;
          }(n2, t2)) {
            var i2 = function(e3, t3) {
              var n3 = "";
              e3 = gn(e3), t3 = gn(t3), e3.top > t3.top && (n3 = n3.concat("n"));
              e3.right < t3.right && (n3 = n3.concat("w"));
              e3.bottom < t3.bottom && (n3 = n3.concat("s"));
              e3.left > t3.left && (n3 = n3.concat("e"));
              return n3;
            }(I(t2, ["x", "y", "width", "height"]), n2);
            this.resize(t2, n2, { autoResize: i2 });
            var r2 = t2.parent;
            r2 && this._expand([t2], r2);
          }
        }
      }, yp.prototype.getOffset = function(e2) {
        return { top: 60, bottom: 60, left: 100, right: 100 };
      }, yp.prototype.getPadding = function(e2) {
        return { top: 2, bottom: 2, left: 15, right: 15 };
      }, yp.prototype.resize = function(e2, t2, n2) {
        this._modeling.resizeShape(e2, t2, null, n2);
      }, gp.$inject = ["injector"], e(gp, yp), gp.prototype.resize = function(e2, t2, n2) {
        Mr(e2, "bpmn:Participant") ? this._modeling.resizeLane(e2, t2, null, n2) : this._modeling.resizeShape(e2, t2, null, n2);
      }, bp.$inject = ["eventBus"], e(bp, Qc), bp.prototype.canResize = function(e2, t2) {
        return false;
      }, e(xp, bp), xp.$inject = ["eventBus", "modeling"], xp.prototype.canResize = function(e2, t2) {
        if (Mr(t2.di, "bpmndi:BPMNPlane")) return false;
        if (!Mr(t2, "bpmn:Participant") && !Mr(t2, "bpmn:Lane") && !Mr(t2, "bpmn:SubProcess")) return false;
        var n2 = true;
        return g(e2, function(e3) {
          (Mr(e3, "bpmn:Lane") || mn(e3)) && (n2 = false);
        }), n2;
      };
      var _p = { __init__: ["bpmnAutoResize", "bpmnAutoResizeProvider"], bpmnAutoResize: ["type", gp], bpmnAutoResizeProvider: ["type", xp] };
      function wp(e2, t2, n2) {
        var i2, r2, o2 = this, a2 = n2.get("dragging", false);
        a2 && t2.on("drag.start", function(n3) {
          t2.once("drag.move", 1500, function(t3) {
            !function(t4) {
              if (!t4.hover) {
                var n4 = t4.originalEvent, i3 = o2._findTargetGfx(n4), r3 = i3 && e2.get(i3);
                i3 && r3 && (t4.stopPropagation(), a2.hover({ element: r3, gfx: i3 }), a2.move(n4));
              }
            }(t3);
          });
        }), t2.on("element.hover", function(e3) {
          i2 = e3.gfx, r2 = e3.element;
        }), t2.on("element.hover", 1500, function(e3) {
          r2 && t2.fire("element.out", { element: r2, gfx: i2 });
        }), t2.on("element.out", function() {
          i2 = null, r2 = null;
        }), this._findTargetGfx = function(e3) {
          var t3;
          if (e3 instanceof MouseEvent) return t3 = Io(e3), function(e4) {
            return ee(e4, "svg, .djs-element", true);
          }(document.elementFromPoint(t3.x, t3.y));
        };
      }
      wp.$inject = ["elementRegistry", "eventBus", "injector"];
      var Ep = { __init__: ["hoverFix"], hoverFix: ["type", wp] }, Sp = Math.round, Cp = "djs-drag-active";
      function Rp(e2) {
        e2.preventDefault();
      }
      function Pp(e2, t2, n2, i2) {
        var r2, o2 = { threshold: 5, trapClick: true };
        function a2(e3) {
          var n3 = t2.viewbox(), i3 = t2._container.getBoundingClientRect();
          return { x: n3.x + (e3.x - i3.left) / n3.scale, y: n3.y + (e3.y - i3.top) / n3.scale };
        }
        function s2(t3, n3) {
          n3 = n3 || r2;
          var i3 = e2.createEvent(L({}, n3.payload, n3.data, { isTouch: n3.isTouch }));
          return false !== e2.fire("drag." + t3, i3) && e2.fire(n3.prefix + "." + t3, i3);
        }
        function c2(e3, i3) {
          var o3, c3 = r2.payload, p3 = r2.displacement, l3 = r2.globalStart, u3 = Io(e3), h3 = is(u3, l3), d3 = r2.localStart, f3 = a2(u3), v3 = is(f3, d3);
          if (!r2.active && (i3 || (o3 = h3, Math.sqrt(Math.pow(o3.x, 2) + Math.pow(o3.y, 2)) > r2.threshold))) {
            if (L(c3, { x: Sp(d3.x + p3.x), y: Sp(d3.y + p3.y), dx: 0, dy: 0 }, { originalEvent: e3 }), false === s2("start")) return m2();
            r2.active = true, r2.keepSelection || (c3.previousSelection = n2.get(), n2.select(null)), r2.cursor && Qa(r2.cursor), t2.addMarker(t2.getRootElement(), Cp);
          }
          Lo(e3), r2.active && (L(c3, { x: Sp(f3.x + p3.x), y: Sp(f3.y + p3.y), dx: Sp(v3.x), dy: Sp(v3.y) }, { originalEvent: e3 }), s2("move"));
        }
        function p2(e3) {
          var t3 = true;
          r2.active && (e3 && (r2.payload.originalEvent = e3, Lo(e3)), t3 = s2("end")), false === t3 && s2("rejected"), s2("ended", v2(true !== t3));
        }
        function l2(e3) {
          Fa("Escape", e3) && (Rp(e3), m2());
        }
        function u2(t3) {
          var n3;
          r2.active && (n3 = ts(e2), setTimeout(n3, 400), Rp(t3)), p2(t3);
        }
        function h2(e3) {
          c2(e3);
        }
        function d2(e3) {
          var t3 = r2.payload;
          t3.hoverGfx = e3.gfx, t3.hover = e3.element, s2("hover");
        }
        function f2(e3) {
          s2("out");
          var t3 = r2.payload;
          t3.hoverGfx = null, t3.hover = null;
        }
        function m2(e3) {
          var t3;
          if (r2) {
            var n3 = r2.active;
            n3 && s2("cancel"), t3 = v2(e3), n3 && s2("canceled", t3);
          }
        }
        function v2(o3) {
          var a3, v3;
          s2("cleanup"), Ja(), v3 = r2.trapClick ? u2 : p2, ae.unbind(document, "mousemove", c2), ae.unbind(document, "dragstart", Rp), ae.unbind(document, "selectstart", Rp), ae.unbind(document, "mousedown", v3, true), ae.unbind(document, "mouseup", v3, true), ae.unbind(document, "keyup", l2), ae.unbind(document, "touchstart", h2, true), ae.unbind(document, "touchcancel", m2, true), ae.unbind(document, "touchmove", c2, true), ae.unbind(document, "touchend", p2, true), e2.off("element.hover", d2), e2.off("element.out", f2), t2.removeMarker(t2.getRootElement(), Cp);
          var y2 = r2.payload.previousSelection;
          return false !== o3 && y2 && !n2.get().length && function(e3) {
            var t3 = e3.filter(function(e4) {
              return i2.get(e4.id);
            });
            t3.length && n2.select(t3);
          }(y2), a3 = r2, r2 = null, a3;
        }
        e2.on("diagram.destroy", m2), this.init = function(t3, n3, i3, v3) {
          r2 && m2(false), "string" == typeof n3 && (v3 = i3, i3 = n3, n3 = null);
          var y2, g2, b2, x2, _2, w2 = (v3 = L({}, o2, v3 || {})).data || {};
          x2 = v3.trapClick ? u2 : p2, t3 ? (y2 = jo(t3) || t3, g2 = Io(t3), Lo(t3), "dragstart" === y2.type && Rp(y2)) : (y2 = null, g2 = { x: 0, y: 0 }), b2 = a2(g2), n3 || (n3 = b2), _2 = function(e3) {
            return "undefined" != typeof TouchEvent && e3 instanceof TouchEvent;
          }(y2), r2 = L({ prefix: i3, data: w2, payload: {}, globalStart: g2, displacement: is(n3, b2), localStart: b2, isTouch: _2 }, v3), v3.manual || (_2 ? (ae.bind(document, "touchstart", h2, true), ae.bind(document, "touchcancel", m2, true), ae.bind(document, "touchmove", c2, true), ae.bind(document, "touchend", p2, true)) : (ae.bind(document, "mousemove", c2), ae.bind(document, "dragstart", Rp), ae.bind(document, "selectstart", Rp), ae.bind(document, "mousedown", x2, true), ae.bind(document, "mouseup", x2, true)), ae.bind(document, "keyup", l2), e2.on("element.hover", d2), e2.on("element.out", f2)), s2("init"), v3.autoActivate && c2(t3, true);
        }, this.move = c2, this.hover = d2, this.out = f2, this.end = p2, this.cancel = m2, this.context = function() {
          return r2;
        }, this.setOptions = function(e3) {
          L(o2, e3);
        };
      }
      Pp.$inject = ["eventBus", "canvas", "selection", "elementRegistry"];
      var Tp = { __depends__: [Ep, ta], dragging: ["type", Pp] };
      function kp(e2, t2, n2) {
        this._canvas = n2, this._opts = L({ scrollThresholdIn: [20, 20, 20, 20], scrollThresholdOut: [0, 0, 0, 0], scrollRepeatTimeout: 15, scrollStep: 10 }, e2);
        var i2 = this;
        t2.on("drag.move", function(e3) {
          var t3 = i2._toBorderPoint(e3);
          i2.startScroll(t3);
        }), t2.on(["drag.cleanup"], function() {
          i2.stopScroll();
        });
      }
      function Ap(e2, t2, n2) {
        return t2 < e2 && e2 < n2;
      }
      kp.$inject = ["config.autoScroll", "eventBus", "canvas"], kp.prototype.startScroll = function(e2) {
        var t2 = this._canvas, n2 = this._opts, i2 = this, r2 = t2.getContainer().getBoundingClientRect(), o2 = [e2.x, e2.y, r2.width - e2.x, r2.height - e2.y];
        this.stopScroll();
        for (var a2 = 0, s2 = 0, c2 = 0; c2 < 4; c2++) Ap(o2[c2], n2.scrollThresholdOut[c2], n2.scrollThresholdIn[c2]) && (0 === c2 ? a2 = n2.scrollStep : 1 == c2 ? s2 = n2.scrollStep : 2 == c2 ? a2 = -n2.scrollStep : 3 == c2 && (s2 = -n2.scrollStep));
        0 === a2 && 0 === s2 || (t2.scroll({ dx: a2, dy: s2 }), this._scrolling = setTimeout(function() {
          i2.startScroll(e2);
        }, n2.scrollRepeatTimeout));
      }, kp.prototype.stopScroll = function() {
        clearTimeout(this._scrolling);
      }, kp.prototype.setOptions = function(e2) {
        this._opts = L({}, this._opts, e2);
      }, kp.prototype._toBorderPoint = function(e2) {
        var t2 = this._canvas._container.getBoundingClientRect(), n2 = Io(e2.originalEvent);
        return { x: n2.x - t2.left, y: n2.y - t2.top };
      };
      var Mp = { __depends__: [Tp], __init__: ["autoScroll"], autoScroll: ["type", kp] };
      function Dp(e2) {
        this._commandStack = e2.get("commandStack", false);
      }
      Dp.$inject = ["injector"], Dp.prototype.allowed = function(e2, t2) {
        var n2 = true, i2 = this._commandStack;
        return i2 && (n2 = i2.canExecute(e2, t2)), void 0 === n2 || n2;
      };
      var Bp = { __init__: ["rules"], rules: ["type", Dp] }, Np = Math.round, Op = Math.max;
      var jp = 10;
      function Lp(e2, t2) {
        return function(e3, t3) {
          var n2, i2;
          for (n2 = 0; i2 = e3[n2]; n2++) if (Ct(i2, t3) <= jp) return { point: e3[n2], bendpoint: true, index: n2 };
          return null;
        }(e2, t2) || function(e3, t3) {
          var n2, i2, r2 = dn(function(e4, t4) {
            return [["M", e4.x, e4.y], ["m", 0, -t4], ["a", t4, t4, 0, 1, 1, 0, 2 * t4], ["a", t4, t4, 0, 1, 1, 0, -2 * t4], ["z"]];
          }(t3, jp), (n2 = [], e3.forEach(function(e4, t4) {
            n2.push([0 === t4 ? "M" : "L", e4.x, e4.y]);
          }), n2)), o2 = r2[0], a2 = r2[r2.length - 1];
          return o2 ? o2 !== a2 ? o2.segment2 !== a2.segment2 ? { point: e3[i2 = Op(o2.segment2, a2.segment2) - 1], bendpoint: true, index: i2 } : { point: { x: Np(o2.x + a2.x) / 2, y: Np(o2.y + a2.y) / 2 }, index: o2.segment2 } : { point: { x: Np(o2.x), y: Np(o2.y) }, index: o2.segment2 } : null;
        }(e2, t2);
      }
      function Ip(e2) {
        return Math.sqrt(Math.pow(e2.x, 2) + Math.pow(e2.y, 2));
      }
      function $p(e2) {
        return Math.atan((e2[1].y - e2[0].y) / (e2[1].x - e2[0].x));
      }
      function Fp(e2, t2) {
        var n2 = t2[0], i2 = t2[1], r2 = { x: i2.x - n2.x, y: i2.y - n2.y }, o2 = function(e3, t3, n3) {
          var i3 = [{ n: e3[0] - n3[0], lambda: t3[0] }, { n: e3[1] - n3[1], lambda: t3[1] }];
          return -(i3[0].n * t3[0] + i3[1].n * t3[1]) / (i3[0].lambda * t3[0] + i3[1].lambda * t3[1]);
        }([n2.x, n2.y], [r2.x, r2.y], [e2.x, e2.y]);
        return { x: n2.x + o2 * r2.x, y: n2.y + o2 * r2.y };
      }
      function zp(e2, t2) {
        var n2 = Fp(e2, t2);
        return Ip({ x: n2.x - e2.x, y: n2.y - e2.y });
      }
      function Hp(e2, t2) {
        return Ip({ x: e2.x - t2.x, y: e2.y - t2.y });
      }
      var Gp = "djs-bendpoint", Vp = "djs-segment-dragger";
      function Wp(e2, t2, n2) {
        var i2 = function(e3, t3) {
          var n3, i3 = Io(t3), r2 = e3._container.getBoundingClientRect();
          n3 = { x: r2.left, y: r2.top };
          var o2 = e3.viewbox();
          return { x: o2.x + (i3.x - n3.x) / o2.scale, y: o2.y + (i3.y - n3.y) / o2.scale };
        }(e2, n2);
        return Lp(t2, i2);
      }
      function Up(e2, t2) {
        var n2 = De("g");
        Se(n2).add(Gp), ge(e2, n2);
        var i2 = De("circle");
        we(i2, { cx: 0, cy: 0, r: 4 }), Se(i2).add("djs-visual"), ge(n2, i2);
        var r2 = De("circle");
        return we(r2, { cx: 0, cy: 0, r: 10 }), Se(r2).add("djs-hit"), ge(n2, r2), t2 && Se(n2).add(t2), n2;
      }
      function qp(e2, t2, n2, i2) {
        var r2 = De("g");
        ge(e2, r2);
        var o2 = function(e3, t3, n3) {
          var i3 = t3.x - e3.x, r3 = t3.y - e3.y;
          return Yp("h" === n3 ? i3 : r3);
        }(t2, n2, i2), a2 = De("rect");
        we(a2, { x: -9, y: -3, width: 18, height: 6 }), Se(a2).add("djs-visual"), ge(r2, a2);
        var s2 = De("rect");
        return we(s2, { x: -o2 / 2, y: -8.5, width: o2, height: 17 }), Se(s2).add("djs-hit"), ge(r2, s2), ri(r2, "v" === i2 ? 90 : 0), r2;
      }
      function Kp(e2, t2, n2) {
        var i2 = De("g"), r2 = Mt(t2, n2), o2 = Tt(t2, n2);
        return ge(e2, i2), qp(i2, t2, n2, o2), Se(i2).add(Vp), Se(i2).add("h" === o2 ? "horizontal" : "vertical"), ii(i2, r2.x, r2.y), i2;
      }
      function Yp(e2) {
        return Math.abs(Math.round(2 * e2 / 3));
      }
      function Xp(e2, t2) {
        var n2 = function(e3, t3) {
          for (var n3, i2 = t3.waypoints, r2 = 1 / 0, o2 = 0; o2 < i2.length - 1; o2++) {
            var a2 = zp(e3, [i2[o2], i2[o2 + 1]]);
            a2 < r2 && (r2 = a2, n3 = o2);
          }
          return [i2[n3], i2[n3 + 1]];
        }(e2, t2);
        return Fp(e2, n2);
      }
      function Zp(e2, t2, n2, i2, r2) {
        function o2(e3, n3) {
          var o3, a3 = n3.waypoints, s3 = Wp(t2, a3, e3);
          if (s3) return o3 = function(e4, t3) {
            var n4, i3, r3 = e4.waypoints;
            return t3.index <= 0 || t3.bendpoint ? null : (i3 = Tt((n4 = { start: r3[t3.index - 1], end: r3[t3.index] }).start, n4.end)) ? Yp("h" === i3 ? n4.end.x - n4.start.x : n4.end.y - n4.start.y) / 2 : null;
          }(n3, s3), !function(e4, t3, n4) {
            var i3, r3, o4, a4, s4, c3, p3 = e4.index, l3 = e4.point;
            return !(p3 <= 0 || e4.bendpoint) && (o4 = Mt(i3 = t3[p3 - 1], r3 = t3[p3]), a4 = Tt(i3, r3), s4 = Math.abs(l3.x - o4.x), c3 = Math.abs(l3.y - o4.y), a4 && s4 <= n4 && c3 <= n4);
          }(s3, a3, o3) ? i2.start(e3, n3, s3.index, !s3.bendpoint) : r2.start(e3, n3, s3.index), true;
        }
        function a2(e3, t3, i3) {
          ae.bind(e3, t3, function(e4) {
            n2.triggerMouseEvent(t3, e4, i3), e4.stopPropagation();
          });
        }
        function s2(e3, n3) {
          var i3 = t2.getLayer("overlays"), r3 = fe('.djs-bendpoints[data-element-id="' + ma(e3.id) + '"]', i3);
          return !r3 && n3 && (we(r3 = De("g"), { "data-element-id": e3.id }), Se(r3).add("djs-bendpoints"), ge(i3, r3), a2(r3, "mousedown", e3), a2(r3, "click", e3), a2(r3, "dblclick", e3)), r3;
        }
        function c2(e3, t3) {
          return fe('.djs-segment-dragger[data-segment-idx="' + e3 + '"]', t3);
        }
        function p2(e3, t3) {
          t3.waypoints.forEach(function(t4, n3) {
            var i3 = Up(e3);
            ge(e3, i3), ii(i3, t4.x, t4.y);
          }), Up(e3, "floating");
        }
        function l2(e3, t3) {
          for (var n3, i3, r3, o3 = t3.waypoints, s3 = 1; s3 < o3.length; s3++) Tt(n3 = o3[s3 - 1], i3 = o3[s3]) && (we(r3 = Kp(e3, n3, i3), { "data-segment-idx": s3 }), a2(r3, "mousemove", t3));
        }
        function u2(e3) {
          var t3 = s2(e3);
          return t3 || (p2(t3 = s2(e3, true), e3), l2(t3, e3)), t3;
        }
        function h2(e3) {
          var t3 = s2(e3);
          t3 && (!function(e4) {
            g(me("." + Vp, e4), function(e5) {
              Re(e5);
            });
          }(t3), function(e4) {
            g(me("." + Gp, e4), function(e5) {
              Re(e5);
            });
          }(t3), l2(t3, e3), p2(t3, e3));
        }
        function d2(e3, t3, n3) {
          var i3, r3, o3 = c2(t3.index, e3), a3 = n3[t3.index - 1], s3 = n3[t3.index], p3 = t3.point, l3 = Mt(a3, s3), u3 = Tt(a3, s3);
          o3 && (i3 = function(e4) {
            return fe(".djs-visual", e4);
          }(o3), r3 = { x: p3.x - l3.x, y: p3.y - l3.y }, "v" === u3 && (r3 = { x: r3.y, y: r3.x }), ii(i3, r3.x, r3.y));
        }
        e2.on("connection.changed", function(e3) {
          h2(e3.element);
        }), e2.on("connection.remove", function(e3) {
          var t3 = s2(e3.element);
          t3 && Re(t3);
        }), e2.on("element.marker.update", function(e3) {
          var t3, n3 = e3.element;
          n3.waypoints && (t3 = u2(n3), e3.add ? Se(t3).add(e3.marker) : Se(t3).remove(e3.marker));
        }), e2.on("element.mousemove", function(e3) {
          var n3, i3, r3 = e3.element, o3 = r3.waypoints;
          if (o3) {
            if (n3 = s2(r3, true), !(i3 = Wp(t2, o3, e3.originalEvent))) return;
            !function(e4, t3) {
              var n4 = fe(".floating", e4), i4 = t3.point;
              n4 && ii(n4, i4.x, i4.y);
            }(n3, i3), i3.bendpoint || d2(n3, i3, o3);
          }
        }), e2.on("element.mousedown", function(e3) {
          if (Fo(e3)) {
            var t3 = e3.originalEvent, n3 = e3.element;
            if (n3.waypoints) return o2(t3, n3);
          }
        }), e2.on("selection.changed", function(e3) {
          var t3 = e3.newSelection[0];
          t3 && t3.waypoints && u2(t3);
        }), e2.on("element.hover", function(e3) {
          var t3 = e3.element;
          t3.waypoints && (u2(t3), n2.registerEvent(e3.gfx, "mousemove", "element.mousemove"));
        }), e2.on("element.out", function(e3) {
          n2.unregisterEvent(e3.gfx, "mousemove", "element.mousemove");
        }), e2.on("element.updateId", function(e3) {
          var t3 = e3.element, n3 = e3.newId;
          if (t3.waypoints) {
            var i3 = s2(t3);
            i3 && we(i3, { "data-element-id": n3 });
          }
        }), this.addHandles = u2, this.updateHandles = h2, this.getBendpointsContainer = s2, this.getSegmentDragger = c2;
      }
      Zp.$inject = ["eventBus", "canvas", "interactionEvents", "bendpointMove", "connectionSegmentMove"];
      var Qp = Math.round, Jp = "reconnectStart", el = "reconnectEnd", tl = "updateWaypoints";
      function nl(e2, t2, n2, i2, r2, o2) {
        this._injector = e2, this.start = function(e3, t3, o3, a2) {
          var s2, c2 = n2.getGraphics(t3), p2 = t3.source, l2 = t3.target, u2 = t3.waypoints, h2 = (s2 = a2 || 0 !== o3 ? a2 || o3 !== u2.length - 1 ? tl : el : Jp) === tl ? "connection.updateWaypoints" : "connection.reconnect", d2 = r2.allowed(h2, { connection: t3, source: p2, target: l2 });
          false === d2 && (d2 = r2.allowed(h2, { connection: t3, source: l2, target: p2 })), false !== d2 && i2.init(e3, "bendpoint.move", { data: { connection: t3, connectionGfx: c2, context: { allowed: d2, bendpointIndex: o3, connection: t3, source: p2, target: l2, insert: a2, type: s2 } } });
        }, t2.on("bendpoint.move.hover", function(e3) {
          var t3, n3 = e3.context, i3 = n3.connection, o3 = i3.source, a2 = i3.target, s2 = e3.hover, c2 = n3.type;
          if (n3.hover = s2, s2) {
            var p2 = c2 === tl ? "connection.updateWaypoints" : "connection.reconnect";
            if (t3 = n3.allowed = r2.allowed(p2, { connection: i3, source: c2 === Jp ? s2 : o3, target: c2 === el ? s2 : a2 })) return n3.source = c2 === Jp ? s2 : o3, void (n3.target = c2 === el ? s2 : a2);
            false === t3 && (t3 = n3.allowed = r2.allowed(p2, { connection: i3, source: c2 === el ? s2 : a2, target: c2 === Jp ? s2 : o3 })), t3 && (n3.source = c2 === el ? s2 : a2, n3.target = c2 === Jp ? s2 : o3);
          }
        }), t2.on(["bendpoint.move.out", "bendpoint.move.cleanup"], function(e3) {
          var t3 = e3.context, n3 = t3.type;
          t3.hover = null, t3.source = null, t3.target = null, n3 !== tl && (t3.allowed = false);
        }), t2.on("bendpoint.move.end", function(e3) {
          var t3 = e3.context, n3 = t3.allowed, i3 = t3.bendpointIndex, r3 = t3.connection, a2 = t3.insert, s2 = r3.waypoints.slice(), c2 = t3.source, p2 = t3.target, l2 = t3.type, u2 = t3.hints || {}, h2 = { x: Qp(e3.x), y: Qp(e3.y) };
          if (!n3) return false;
          l2 === tl ? (a2 ? s2.splice(i3, 0, h2) : s2[i3] = h2, u2.bendpointMove = { insert: a2, bendpointIndex: i3 }, s2 = this.cropWaypoints(r3, s2), o2.updateWaypoints(r3, function(e4) {
            e4 = e4.slice();
            for (var t4, n4, i4, r4 = 0; e4[r4]; ) t4 = e4[r4], n4 = e4[r4 - 1], 0 === Ct(t4, i4 = e4[r4 + 1]) || Rt(n4, i4, t4) ? e4.splice(r4, 1) : r4++;
            return e4;
          }(s2), u2)) : (l2 === Jp ? (u2.docking = "source", il(t3) && (u2.docking = "target", u2.newWaypoints = s2.reverse())) : l2 === el && (u2.docking = "target", il(t3) && (u2.docking = "source", u2.newWaypoints = s2.reverse())), o2.reconnect(r3, c2, p2, h2, u2));
        }, this);
      }
      function il(e2) {
        var t2 = e2.hover, n2 = e2.source, i2 = e2.target, r2 = e2.type;
        return r2 === Jp ? t2 && i2 && t2 === i2 && n2 !== i2 : r2 === el ? t2 && n2 && t2 === n2 && n2 !== i2 : void 0;
      }
      nl.$inject = ["injector", "eventBus", "canvas", "dragging", "rules", "modeling"], nl.prototype.cropWaypoints = function(e2, t2) {
        var n2 = this._injector.get("connectionDocking", false);
        if (!n2) return t2;
        var i2 = e2.waypoints;
        return e2.waypoints = t2, e2.waypoints = n2.getCroppedWaypoints(e2), t2 = e2.waypoints, e2.waypoints = i2, t2;
      };
      var rl = "updateWaypoints", ol = "connect-ok", al = "connect-not-ok", sl = "connect-hover", cl = "djs-updating", pl = "djs-element-hidden";
      function ll(e2, t2, n2, i2) {
        this._injector = t2;
        var r2 = t2.get("connectionPreview", false);
        n2.on("bendpoint.move.start", function(e3) {
          var t3 = e3.context, n3 = t3.bendpointIndex, r3 = t3.connection, o2 = t3.insert, a2 = r3.waypoints, s2 = a2.slice();
          t3.waypoints = a2, o2 && s2.splice(n3, 0, { x: e3.x, y: e3.y }), r3.waypoints = s2, Se(t3.draggerGfx = Up(i2.getLayer("overlays"))).add("djs-dragging"), i2.addMarker(r3, pl), i2.addMarker(r3, cl);
        }), n2.on("bendpoint.move.hover", function(e3) {
          var t3 = e3.context, n3 = t3.allowed, r3 = t3.hover, o2 = t3.type;
          if (r3) {
            if (i2.addMarker(r3, sl), o2 === rl) return;
            n3 ? (i2.removeMarker(r3, al), i2.addMarker(r3, ol)) : false === n3 && (i2.removeMarker(r3, ol), i2.addMarker(r3, al));
          }
        }), n2.on(["bendpoint.move.out", "bendpoint.move.cleanup"], 1100, function(e3) {
          var t3 = e3.context, n3 = t3.hover, r3 = t3.target;
          n3 && (i2.removeMarker(n3, sl), i2.removeMarker(n3, r3 ? ol : al));
        }), n2.on("bendpoint.move.move", function(t3) {
          var n3 = t3.context, i3 = n3.allowed, o2 = n3.bendpointIndex, a2 = n3.draggerGfx, s2 = n3.hover, c2 = n3.type, p2 = n3.connection, l2 = p2.source, u2 = p2.target, h2 = p2.waypoints.slice(), d2 = { x: t3.x, y: t3.y }, f2 = n3.hints || {}, m2 = {};
          r2 && (f2.connectionStart && (m2.connectionStart = f2.connectionStart), f2.connectionEnd && (m2.connectionEnd = f2.connectionEnd), "reconnectStart" === c2 ? il(n3) ? (m2.connectionEnd = m2.connectionEnd || d2, m2.source = u2, m2.target = s2 || l2, h2 = h2.reverse()) : (m2.connectionStart = m2.connectionStart || d2, m2.source = s2 || l2, m2.target = u2) : "reconnectEnd" === c2 ? il(n3) ? (m2.connectionStart = m2.connectionStart || d2, m2.source = s2 || u2, m2.target = l2, h2 = h2.reverse()) : (m2.connectionEnd = m2.connectionEnd || d2, m2.source = l2, m2.target = s2 || u2) : (m2.noCropping = true, m2.noLayout = true, h2[o2] = d2), c2 === rl && (h2 = e2.cropWaypoints(p2, h2)), m2.waypoints = h2, r2.drawPreview(n3, i3, m2)), ii(a2, t3.x, t3.y);
        }, this), n2.on(["bendpoint.move.end", "bendpoint.move.cancel"], 1100, function(e3) {
          var t3 = e3.context, n3 = t3.connection, o2 = t3.draggerGfx, a2 = t3.hover, s2 = t3.target, c2 = t3.waypoints;
          n3.waypoints = c2, Re(o2), i2.removeMarker(n3, cl), i2.removeMarker(n3, pl), a2 && (i2.removeMarker(a2, ol), i2.removeMarker(a2, s2 ? ol : al)), r2 && r2.cleanUp(t3);
        });
      }
      ll.$inject = ["bendpointMove", "injector", "eventBus", "canvas"];
      var ul = "connect-hover", hl = "djs-updating";
      function dl(e2, t2, n2) {
        return fl(e2, t2, e2[t2] + n2);
      }
      function fl(e2, t2, n2) {
        return { x: "x" === t2 ? n2 : e2.x, y: "y" === t2 ? n2 : e2.y };
      }
      function ml(e2) {
        return "x" === e2 ? "y" : "x";
      }
      function vl(e2, t2, n2) {
        var i2, r2;
        return e2.original ? e2.original : (i2 = _n(t2), fl(e2, r2 = ml(n2), i2[r2]));
      }
      function yl(e2, t2, n2, i2, r2, o2) {
        var a2 = e2.get("connectionDocking", false);
        function s2(e3, t3) {
          if (!a2) return t3;
          var n3, i3 = e3.waypoints;
          return e3.waypoints = t3, n3 = a2.getCroppedWaypoints(e3), e3.waypoints = i3, n3;
        }
        function c2(e3) {
          r2.update("connection", e3.connection, e3.connectionGfx);
        }
        function p2(e3, t3, n3) {
          var i3 = e3.newWaypoints, r3 = function(e4, t4, n4, i4) {
            var r4 = Math.max(t4[i4], n4[i4]), o3 = Math.min(t4[i4], n4[i4]);
            return fl(t4, i4, Math.min(Math.max(o3 + 20, e4[i4]), r4 - 20));
          }(n3, i3[e3.segmentStartIndex + t3], i3[e3.segmentEndIndex + t3], ml(e3.axis));
          ii(e3.draggerGfx, r3.x, r3.y);
        }
        this.start = function(e3, t3, r3) {
          var o3, a3, s3, c3, p3 = n2.getGraphics(t3), l2 = r3 - 1, u2 = r3, h2 = t3.waypoints, d2 = h2[l2], f2 = h2[u2], m2 = Wp(n2, h2, e3);
          (a3 = Tt(d2, f2)) && (s3 = "v" === a3 ? "x" : "y", 0 === l2 && (d2 = vl(d2, t3.source, s3)), u2 === h2.length - 1 && (f2 = vl(f2, t3.target, s3)), o3 = { connection: t3, segmentStartIndex: l2, segmentEndIndex: u2, segmentStart: d2, segmentEnd: f2, axis: s3, dragPosition: c3 = m2 ? m2.point : { x: (d2.x + f2.x) / 2, y: (d2.y + f2.y) / 2 } }, i2.init(e3, c3, "connectionSegment.move", { cursor: "x" === s3 ? "resize-ew" : "resize-ns", data: { connection: t3, connectionGfx: p3, context: o3 } }));
        }, t2.on("connectionSegment.move.start", function(e3) {
          var t3 = e3.context, i3 = e3.connection, r3 = n2.getLayer("overlays");
          t3.originalWaypoints = i3.waypoints.slice(), t3.draggerGfx = Kp(r3, t3.segmentStart, t3.segmentEnd), Se(t3.draggerGfx).add("djs-dragging"), n2.addMarker(i3, hl);
        }), t2.on("connectionSegment.move.move", function(e3) {
          var t3, n3, i3 = e3.context, r3 = i3.connection, o3 = i3.segmentStartIndex, a3 = i3.segmentEndIndex, l2 = i3.segmentStart, u2 = i3.segmentEnd, h2 = i3.axis, d2 = i3.originalWaypoints.slice(), f2 = dl(l2, h2, e3["d" + h2]), m2 = dl(u2, h2, e3["d" + h2]), v2 = d2.length, y2 = 0;
          d2[o3] = f2, d2[a3] = m2, o3 < 2 && (t3 = wn(r3.source, f2), 1 === o3 ? "intersect" === t3 && (d2.shift(), d2[0] = f2, y2--) : "intersect" !== t3 && (d2.unshift(l2), y2++)), a3 > v2 - 3 && (n3 = wn(r3.target, m2), a3 === v2 - 2 ? "intersect" === n3 && (d2.pop(), d2[d2.length - 1] = m2) : "intersect" !== n3 && d2.push(u2)), i3.newWaypoints = r3.waypoints = s2(r3, d2), p2(i3, y2, e3), i3.newSegmentStartIndex = o3 + y2, c2(e3);
        }), t2.on("connectionSegment.move.hover", function(e3) {
          e3.context.hover = e3.hover, n2.addMarker(e3.hover, ul);
        }), t2.on(["connectionSegment.move.out", "connectionSegment.move.cleanup"], function(e3) {
          var t3 = e3.context.hover;
          t3 && n2.removeMarker(t3, ul);
        }), t2.on("connectionSegment.move.cleanup", function(e3) {
          var t3 = e3.context, i3 = t3.connection;
          t3.draggerGfx && Re(t3.draggerGfx), n2.removeMarker(i3, hl);
        }), t2.on(["connectionSegment.move.cancel", "connectionSegment.move.end"], function(e3) {
          var t3 = e3.context;
          t3.connection.waypoints = t3.originalWaypoints, c2(e3);
        }), t2.on("connectionSegment.move.end", function(e3) {
          var t3 = e3.context, n3 = t3.connection, i3 = t3.newWaypoints, r3 = t3.newSegmentStartIndex;
          i3 = i3.map(function(e4) {
            return { original: e4.original, x: Math.round(e4.x), y: Math.round(e4.y) };
          });
          var a3 = function(e4, t4) {
            var n4 = 0, i4 = e4.filter(function(i5, r4) {
              return !Rt(e4[r4 - 1], e4[r4 + 1], i5) || (n4 = r4 <= t4 ? n4 - 1 : n4, false);
            });
            return { waypoints: i4, segmentOffset: n4 };
          }(i3, r3), c3 = s2(n3, a3.waypoints), p3 = a3.segmentOffset, l2 = { segmentMove: { segmentStartIndex: t3.segmentStartIndex, newSegmentStartIndex: r3 + p3 } };
          o2.updateWaypoints(n3, c3, l2);
        });
      }
      yl.$inject = ["injector", "eventBus", "canvas", "dragging", "graphicsFactory", "modeling"];
      var gl = Math.abs, bl = Math.round;
      function xl(e2) {
        return { x: e2.x, y: e2.y };
      }
      function _l(e2) {
        return { x: e2.x + e2.width, y: e2.y + e2.height };
      }
      function wl(e2, t2) {
        return !e2 || isNaN(e2.x) || isNaN(e2.y) ? t2 : { x: bl(e2.x + e2.width / 2), y: bl(e2.y + e2.height / 2) };
      }
      function El(e2, t2) {
        var n2 = e2.snapped;
        return !!n2 && ("string" == typeof t2 ? n2[t2] : n2.x && n2.y);
      }
      function Sl(e2, t2, n2) {
        if ("string" != typeof t2) throw new Error("axis must be in [x, y]");
        if ("number" != typeof n2 && false !== n2) throw new Error("value must be Number or false");
        var i2, r2 = e2[t2], o2 = e2.snapped = e2.snapped || {};
        return false === n2 ? o2[t2] = false : (o2[t2] = true, i2 = n2 - r2, e2[t2] += i2, e2["d" + t2] += i2), r2;
      }
      function Cl(e2) {
        return e2.children || [];
      }
      var Rl = Math.abs, Pl = Math.round;
      function Tl(e2) {
        function t2(e3, t3) {
          if (p(e3)) {
            for (var n3 = e3.length; n3--; ) if (Rl(e3[n3] - t3) <= 10) return e3[n3];
          } else {
            var i2 = t3 % (e3 = +e3);
            if (i2 < 10) return t3 - i2;
            if (i2 > e3 - 10) return t3 - i2 + e3;
          }
          return t3;
        }
        function n2(e3, t3) {
          return e3.waypoints ? Xp(t3, e3) : e3.width ? { x: Pl(e3.width / 2 + e3.x), y: Pl(e3.height / 2 + e3.y) } : void 0;
        }
        e2.on("connectionSegment.move.move", 1500, function(e3) {
          var i2, r2, o2 = function(e4) {
            var t3 = e4.context, i3 = t3.snapPoints, r3 = t3.connection, o3 = r3.waypoints, a3 = t3.segmentStart, s3 = t3.segmentStartIndex, c3 = t3.segmentEnd, p3 = t3.segmentEndIndex, l2 = t3.axis;
            if (i3) return i3;
            var u2 = [o3[s3 - 1], a3, c3, o3[p3 + 1]];
            return s3 < 2 && u2.unshift(n2(r3.source, e4)), p3 > o3.length - 3 && u2.unshift(n2(r3.target, e4)), t3.snapPoints = i3 = { horizontal: [], vertical: [] }, g(u2, function(e5) {
              e5 && (e5 = e5.original || e5, "y" === l2 && i3.horizontal.push(e5.y), "x" === l2 && i3.vertical.push(e5.x));
            }), i3;
          }(e3), a2 = e3.x, s2 = e3.y;
          if (o2) {
            var c2 = a2 - (i2 = t2(o2.vertical, a2)), p2 = s2 - (r2 = t2(o2.horizontal, s2));
            L(e3, { dx: e3.dx - c2, dy: e3.dy - p2, x: i2, y: r2 }), (c2 || -1 !== o2.vertical.indexOf(a2)) && Sl(e3, "x", i2), (p2 || -1 !== o2.horizontal.indexOf(s2)) && Sl(e3, "y", r2);
          }
        }), e2.on(["connect.hover", "connect.move", "connect.end"], 1500, function(e3) {
          var t3 = e3.context.hover, i2 = t3 && n2(t3, e3);
          fn(t3) && i2 && i2.x && i2.y && (Sl(e3, "x", i2.x), Sl(e3, "y", i2.y));
        }), e2.on(["bendpoint.move.move", "bendpoint.move.end"], 1500, function(e3) {
          var i2, r2, o2 = e3.context, a2 = function(e4) {
            var t3 = e4.snapPoints, n3 = e4.connection.waypoints, i3 = e4.bendpointIndex;
            if (t3) return t3;
            var r3 = [n3[i3 - 1], n3[i3 + 1]];
            return e4.snapPoints = t3 = { horizontal: [], vertical: [] }, g(r3, function(e5) {
              e5 && (e5 = e5.original || e5, t3.horizontal.push(e5.y), t3.vertical.push(e5.x));
            }), t3;
          }(o2), s2 = o2.hover, c2 = s2 && n2(s2, e3), p2 = e3.x, l2 = e3.y;
          if (a2) {
            var u2 = p2 - (i2 = t2(c2 ? a2.vertical.concat([c2.x]) : a2.vertical, p2)), h2 = l2 - (r2 = t2(c2 ? a2.horizontal.concat([c2.y]) : a2.horizontal, l2));
            L(e3, { dx: e3.dx - u2, dy: e3.dy - h2, x: e3.x - u2, y: e3.y - h2 }), (u2 || -1 !== a2.vertical.indexOf(p2)) && Sl(e3, "x", i2), (h2 || -1 !== a2.horizontal.indexOf(l2)) && Sl(e3, "y", r2);
          }
        });
      }
      Tl.$inject = ["eventBus"];
      var kl = { __depends__: [Tp, Bp], __init__: ["bendpoints", "bendpointSnapping", "bendpointMovePreview"], bendpoints: ["type", Zp], bendpointMove: ["type", nl], bendpointMovePreview: ["type", ll], connectionSegmentMove: ["type", yl], bendpointSnapping: ["type", Tl] };
      function Al(e2, t2, n2, i2) {
        function r2(e3, t3) {
          return i2.allowed("connection.create", { source: e3, target: t3 });
        }
        e2.on("connect.hover", function(e3) {
          var t3, n3 = e3.context, i3 = n3.start, o2 = e3.hover;
          if (n3.hover = o2, !c(t3 = n3.canExecute = r2(i3, o2))) {
            if (false !== t3) return n3.source = i3, void (n3.target = o2);
            c(t3 = n3.canExecute = r2(o2, i3)) || false !== t3 && (n3.source = o2, n3.target = i3);
          }
        }), e2.on(["connect.out", "connect.cleanup"], function(e3) {
          var t3 = e3.context;
          t3.hover = null, t3.source = null, t3.target = null, t3.canExecute = false;
        }), e2.on("connect.end", function(e3) {
          var t3 = e3.context, i3 = t3.canExecute, r3 = t3.connectionStart, o2 = { x: e3.x, y: e3.y }, a2 = t3.source, s2 = t3.target;
          if (!i3) return false;
          var c2 = null, p2 = { connectionStart: Ml(t3) ? o2 : r3, connectionEnd: Ml(t3) ? r3 : o2 };
          l(i3) && (c2 = i3), t3.connection = n2.connect(a2, s2, c2, p2);
        }), this.start = function(e3, n3, i3, r3) {
          l(i3) || (r3 = i3, i3 = _n(n3)), t2.init(e3, "connect", { autoActivate: r3, data: { shape: n3, context: { start: n3, connectionStart: i3 } } });
        };
      }
      function Ml(e2) {
        var t2 = e2.hover, n2 = e2.source, i2 = e2.target;
        return t2 && n2 && t2 === n2 && n2 !== i2;
      }
      Al.$inject = ["eventBus", "dragging", "modeling", "rules"];
      var Dl = "connect-ok", Bl = "connect-not-ok";
      function Nl(e2, t2, n2) {
        var i2 = e2.get("connectionPreview", false);
        i2 && t2.on("connect.move", function(e3) {
          var t3 = e3.context, n3 = t3.canExecute, r2 = t3.hover, o2 = t3.source, a2 = t3.start, s2 = t3.startPosition, c2 = t3.target, p2 = t3.connectionStart || s2, l2 = t3.connectionEnd || { x: e3.x, y: e3.y }, u2 = p2, h2 = l2;
          Ml(t3) && (u2 = l2, h2 = p2), i2.drawPreview(t3, n3, { source: o2 || a2, target: c2 || r2, connectionStart: u2, connectionEnd: h2 });
        }), t2.on("connect.hover", 900, function(e3) {
          var t3 = e3.context, i3 = e3.hover, r2 = t3.canExecute;
          null !== r2 && n2.addMarker(i3, r2 ? Dl : Bl);
        }), t2.on(["connect.out", "connect.cleanup"], 1100, function(e3) {
          var t3 = e3.hover;
          t3 && (n2.removeMarker(t3, Dl), n2.removeMarker(t3, Bl));
        }), i2 && t2.on("connect.cleanup", function(e3) {
          i2.cleanUp(e3.context);
        });
      }
      Nl.$inject = ["injector", "eventBus", "canvas"];
      var Ol = { __depends__: [ta, Bp, Tp], __init__: ["connectPreview"], connect: ["type", Al], connectPreview: ["type", Nl] };
      function jl(e2, t2, n2, i2) {
        this._canvas = t2, this._graphicsFactory = n2, this._elementFactory = i2, this._connectionDocking = e2.get("connectionDocking", false), this._layouter = e2.get("layouter", false);
      }
      jl.$inject = ["injector", "canvas", "graphicsFactory", "elementFactory"], jl.prototype.drawPreview = function(e2, t2, n2) {
        n2 = n2 || {};
        var i2, r2, o2, a2 = e2.connectionPreviewGfx, s2 = e2.getConnection, c2 = n2.source, p2 = n2.target, l2 = n2.waypoints, u2 = n2.connectionStart, h2 = n2.connectionEnd, d2 = n2.noLayout, f2 = n2.noCropping, m2 = n2.noNoop, v2 = this;
        a2 || (a2 = e2.connectionPreviewGfx = this.createConnectionPreviewGfx()), Pe(a2), s2 || (s2 = e2.getConnection = (r2 = function(e3, t3, n3) {
          return v2.getConnection(e3, t3, n3);
        }, o2 = {}, function(e3) {
          var t3 = JSON.stringify(e3), n3 = o2[t3];
          return n3 || (n3 = o2[t3] = r2.apply(null, arguments)), n3;
        })), t2 && (i2 = s2(t2, c2, p2)), i2 ? (i2.waypoints = l2 || [], this._layouter && !d2 && (i2.waypoints = this._layouter.layoutConnection(i2, { source: c2, target: p2, connectionStart: u2, connectionEnd: h2, waypoints: n2.waypoints || i2.waypoints })), i2.waypoints && i2.waypoints.length || (i2.waypoints = [c2 ? _n(c2) : u2, p2 ? _n(p2) : h2]), this._connectionDocking && (c2 || p2) && !f2 && (i2.waypoints = this._connectionDocking.getCroppedWaypoints(i2, c2, p2)), this._graphicsFactory.drawConnection(a2, i2)) : !m2 && this.drawNoopPreview(a2, n2);
      }, jl.prototype.drawNoopPreview = function(e2, t2) {
        var n2 = t2.source, i2 = t2.target, r2 = t2.connectionStart || _n(n2), o2 = t2.connectionEnd || _n(i2), a2 = this.cropWaypoints(r2, o2, n2, i2);
        ge(e2, this.createNoopConnection(a2[0], a2[1]));
      }, jl.prototype.cropWaypoints = function(e2, t2, n2, i2) {
        var r2 = this._graphicsFactory, o2 = n2 && r2.getShapePath(n2), a2 = i2 && r2.getShapePath(i2), s2 = r2.getConnectionPath({ waypoints: [e2, t2] });
        return [e2 = n2 && En(o2, s2, true) || e2, t2 = i2 && En(a2, s2, false) || t2];
      }, jl.prototype.cleanUp = function(e2) {
        e2 && e2.connectionPreviewGfx && Re(e2.connectionPreviewGfx);
      }, jl.prototype.getConnection = function(e2) {
        var t2 = function(e3) {
          return l(e3) ? e3 : {};
        }(e2);
        return this._elementFactory.createConnection(t2);
      }, jl.prototype.createConnectionPreviewGfx = function() {
        var e2 = De("g");
        return we(e2, { pointerEvents: "none" }), Se(e2).add("djs-connection-preview"), ge(this._canvas.getActiveLayer(), e2), e2;
      }, jl.prototype.createNoopConnection = function(e2, t2) {
        return pt([e2, t2], { stroke: "#333", strokeDasharray: [1], strokeWidth: 2, "pointer-events": "none" });
      };
      var Ll = { __init__: ["connectionPreview"], connectionPreview: ["type", jl] }, Il = Math.min, $l = Math.max;
      function Fl(e2) {
        e2.preventDefault();
      }
      function zl(e2) {
        e2.stopPropagation();
      }
      function Hl(e2) {
        this.container = e2.container, this.parent = de('<div class="djs-direct-editing-parent"><div class="djs-direct-editing-content" contenteditable="true"></div></div>'), this.content = fe("[contenteditable]", this.parent), this.keyHandler = e2.keyHandler || function() {
        }, this.resizeHandler = e2.resizeHandler || function() {
        }, this.autoResize = j(this.autoResize, this), this.handlePaste = j(this.handlePaste, this);
      }
      function Gl(e2, t2) {
        this._eventBus = e2, this._providers = [], this._textbox = new Hl({ container: t2.getContainer(), keyHandler: j(this._handleKey, this), resizeHandler: j(this._handleResize, this) });
      }
      Hl.prototype.create = function(e2, t2, n2, i2) {
        var r2 = this.parent, o2 = this.content, a2 = this.container;
        i2 = this.options = i2 || {};
        var s2 = I(t2 = this.style = t2 || {}, ["width", "height", "maxWidth", "maxHeight", "minWidth", "minHeight", "left", "top", "backgroundColor", "position", "overflow", "border", "wordWrap", "textAlign", "outline", "transform"]);
        L(r2.style, { width: e2.width + "px", height: e2.height + "px", maxWidth: e2.maxWidth + "px", maxHeight: e2.maxHeight + "px", minWidth: e2.minWidth + "px", minHeight: e2.minHeight + "px", left: e2.x + "px", top: e2.y + "px", backgroundColor: "#ffffff", position: "absolute", overflow: "visible", border: "1px solid #ccc", boxSizing: "border-box", wordWrap: "normal", textAlign: "center", outline: "none" }, s2);
        var c2 = I(t2, ["fontFamily", "fontSize", "fontWeight", "lineHeight", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]);
        return L(o2.style, { boxSizing: "border-box", width: "100%", outline: "none", wordWrap: "break-word" }, c2), i2.centerVertically && L(o2.style, { position: "absolute", top: "50%", transform: "translate(0, -50%)" }, c2), o2.innerText = n2, ae.bind(o2, "keydown", this.keyHandler), ae.bind(o2, "mousedown", zl), ae.bind(o2, "paste", this.handlePaste), i2.autoResize && ae.bind(o2, "input", this.autoResize), i2.resizable && this.resizable(t2), a2.appendChild(r2), this.setSelection(o2.lastChild, o2.lastChild && o2.lastChild.length), r2;
      }, Hl.prototype.handlePaste = function(e2) {
        var t2, n2 = this.options, i2 = this.style;
        if (e2.preventDefault(), t2 = e2.clipboardData ? e2.clipboardData.getData("text/plain") : window.clipboardData.getData("Text"), this.insertText(t2), n2.autoResize) {
          var r2 = this.autoResize(i2);
          r2 && this.resizeHandler(r2);
        }
      }, Hl.prototype.insertText = function(e2) {
        e2 = e2.replace(/\r\n|\r|\n/g, "\n"), document.execCommand("insertText", false, e2) || this._insertTextIE(e2);
      }, Hl.prototype._insertTextIE = function(e2) {
        var t2, n2, i2, r2 = this.getSelection(), o2 = r2.startContainer, a2 = r2.endContainer, s2 = r2.startOffset, c2 = r2.endOffset, p2 = r2.commonAncestorContainer, l2 = (t2 = p2.childNodes, [].slice.call(t2));
        if (function(e3) {
          return e3.nodeType === Node.TEXT_NODE;
        }(p2)) {
          var u2 = o2.textContent;
          o2.textContent = u2.substring(0, s2) + e2 + u2.substring(c2), n2 = o2, i2 = s2 + e2.length;
        } else if (o2 === this.content && a2 === this.content) {
          var h2 = document.createTextNode(e2);
          this.content.insertBefore(h2, l2[s2]), n2 = h2, i2 = h2.textContent.length;
        } else {
          var d2 = l2.indexOf(o2), f2 = l2.indexOf(a2);
          l2.forEach(function(t3, n3) {
            n3 === d2 ? t3.textContent = o2.textContent.substring(0, s2) + e2 + a2.textContent.substring(c2) : n3 > d2 && n3 <= f2 && ve(t3);
          }), n2 = o2, i2 = s2 + e2.length;
        }
        n2 && void 0 !== i2 && setTimeout(function() {
          self.setSelection(n2, i2);
        });
      }, Hl.prototype.autoResize = function() {
        var e2 = this.parent, t2 = this.content, n2 = parseInt(this.style.fontSize) || 12;
        if (t2.scrollHeight > e2.offsetHeight || t2.scrollHeight < e2.offsetHeight - n2) {
          var i2 = e2.getBoundingClientRect(), r2 = t2.scrollHeight;
          e2.style.height = r2 + "px", this.resizeHandler({ width: i2.width, height: i2.height, dx: 0, dy: r2 - i2.height });
        }
      }, Hl.prototype.resizable = function() {
        var e2 = this, t2 = this.parent, n2 = this.resizeHandle, i2 = parseInt(this.style.minWidth) || 0, r2 = parseInt(this.style.minHeight) || 0, o2 = parseInt(this.style.maxWidth) || 1 / 0, a2 = parseInt(this.style.maxHeight) || 1 / 0;
        if (!n2) {
          var s2, c2, p2, l2;
          n2 = this.resizeHandle = de('<div class="djs-direct-editing-resize-handle"></div>');
          var u2 = function(n3) {
            Fl(n3), zl(n3);
            var u3 = Il($l(p2 + n3.clientX - s2, i2), o2), h3 = Il($l(l2 + n3.clientY - c2, r2), a2);
            t2.style.width = u3 + "px", t2.style.height = h3 + "px", e2.resizeHandler({ width: p2, height: l2, dx: n3.clientX - s2, dy: n3.clientY - c2 });
          }, h2 = function(e3) {
            Fl(e3), zl(e3), ae.unbind(document, "mousemove", u2, false), ae.unbind(document, "mouseup", h2, false);
          };
          ae.bind(n2, "mousedown", function(e3) {
            Fl(e3), zl(e3), s2 = e3.clientX, c2 = e3.clientY;
            var n3 = t2.getBoundingClientRect();
            p2 = n3.width, l2 = n3.height, ae.bind(document, "mousemove", u2), ae.bind(document, "mouseup", h2);
          });
        }
        L(n2.style, { position: "absolute", bottom: "0px", right: "0px", cursor: "nwse-resize", width: "0", height: "0", borderTop: (parseInt(this.style.fontSize) / 4 || 3) + "px solid transparent", borderRight: (parseInt(this.style.fontSize) / 4 || 3) + "px solid #ccc", borderBottom: (parseInt(this.style.fontSize) / 4 || 3) + "px solid #ccc", borderLeft: (parseInt(this.style.fontSize) / 4 || 3) + "px solid transparent" }), t2.appendChild(n2);
      }, Hl.prototype.destroy = function() {
        var e2 = this.parent, t2 = this.content, n2 = this.resizeHandle;
        t2.innerText = "", e2.removeAttribute("style"), t2.removeAttribute("style"), ae.unbind(t2, "keydown", this.keyHandler), ae.unbind(t2, "mousedown", zl), ae.unbind(t2, "input", this.autoResize), ae.unbind(t2, "paste", this.handlePaste), n2 && (n2.removeAttribute("style"), ve(n2)), ve(e2);
      }, Hl.prototype.getValue = function() {
        return this.content.innerText.trim();
      }, Hl.prototype.getSelection = function() {
        return window.getSelection().getRangeAt(0);
      }, Hl.prototype.setSelection = function(e2, t2) {
        var n2 = document.createRange();
        null === e2 ? n2.selectNodeContents(this.content) : (n2.setStart(e2, t2), n2.setEnd(e2, t2));
        var i2 = window.getSelection();
        i2.removeAllRanges(), i2.addRange(n2);
      }, Gl.$inject = ["eventBus", "canvas"], Gl.prototype.registerProvider = function(e2) {
        this._providers.push(e2);
      }, Gl.prototype.isActive = function(e2) {
        return !(!this._active || e2 && this._active.element !== e2);
      }, Gl.prototype.cancel = function() {
        this._active && (this._fire("cancel"), this.close());
      }, Gl.prototype._fire = function(e2, t2) {
        this._eventBus.fire("directEditing." + e2, t2 || { active: this._active });
      }, Gl.prototype.close = function() {
        this._textbox.destroy(), this._fire("deactivate"), this._active = null, this.resizable = void 0;
      }, Gl.prototype.complete = function() {
        var e2 = this._active;
        if (e2) {
          var t2, n2 = e2.context.bounds, i2 = this.$textbox.getBoundingClientRect(), r2 = this.getValue();
          r2 === e2.context.text && i2.height === n2.height && i2.width === n2.width || (t2 = this._textbox.container.getBoundingClientRect(), e2.provider.update(e2.element, r2, e2.context.text, { x: i2.left - t2.left, y: i2.top - t2.top, width: i2.width, height: i2.height })), this._fire("complete"), this.close();
        }
      }, Gl.prototype.getValue = function() {
        return this._textbox.getValue();
      }, Gl.prototype._handleKey = function(e2) {
        e2.stopPropagation();
        var t2 = e2.keyCode || e2.charCode;
        return 27 === t2 ? (e2.preventDefault(), this.cancel()) : 13 !== t2 || e2.shiftKey ? void 0 : (e2.preventDefault(), this.complete());
      }, Gl.prototype._handleResize = function(e2) {
        this._fire("resize", e2);
      }, Gl.prototype.activate = function(e2) {
        var t2;
        this.isActive() && this.cancel();
        var n2 = m(this._providers, function(n3) {
          return (t2 = n3.activate(e2)) ? n3 : null;
        });
        return t2 && (this.$textbox = this._textbox.create(t2.bounds, t2.style, t2.text, t2.options), this._active = { element: e2, context: t2, provider: n2 }, t2.options && t2.options.resizable && (this.resizable = true), this._fire("activate")), !!t2;
      };
      var Vl = { __depends__: [Uo], __init__: ["directEditing"], directEditing: ["type", Gl] }, Wl = ["marker-start", "marker-mid", "marker-end"], Ul = ["circle", "ellipse", "line", "path", "polygon", "polyline", "path", "rect"];
      function ql(e2, t2, n2, i2) {
        this._elementRegistry = e2, this._canvas = n2, this._styles = i2, this._clonedMarkers = {};
        var r2 = this;
        t2.on("drag.cleanup", function() {
          g(r2._clonedMarkers, function(e3) {
            Re(e3);
          }), r2._clonedMarkers = {};
        });
      }
      ql.$inject = ["elementRegistry", "eventBus", "canvas", "styles"], ql.prototype.getGfx = function(e2) {
        return this._elementRegistry.getGraphics(e2);
      }, ql.prototype.addDragger = function(e2, t2, n2) {
        var i2 = Te(n2 = n2 || this.getGfx(e2)), r2 = n2.getBoundingClientRect();
        return this._cloneMarkers(ti(i2)), we(i2, this._styles.cls("djs-dragger", [], { x: r2.top, y: r2.left })), ge(t2, i2), i2;
      }, ql.prototype.addFrame = function(e2, t2) {
        var n2 = De("rect", { class: "djs-resize-overlay", width: e2.width, height: e2.height, x: e2.x, y: e2.y });
        return ge(t2, n2), n2;
      }, ql.prototype._cloneMarkers = function(e2) {
        var t2 = this;
        if (e2.childNodes) for (var n2 = 0; n2 < e2.childNodes.length; n2++) t2._cloneMarkers(e2.childNodes[n2]);
        (function(e3) {
          return -1 !== Ul.indexOf(e3.nodeName);
        })(e2) && Wl.forEach(function(n3) {
          if (we(e2, n3)) {
            var i2 = function(e3, t3, n4) {
              var i3 = (r2 = we(e3, t3), r2.match(/url\(['"]?#([^'"]*)['"]?\)/)[1]);
              var r2;
              return fe("marker#" + i3, n4 || document);
            }(e2, n3, t2._canvas.getContainer());
            t2._cloneMarker(e2, i2, n3);
          }
        });
      }, ql.prototype._cloneMarker = function(e2, t2, n2) {
        var i2 = t2.id, r2 = this._clonedMarkers[i2];
        if (!r2) {
          var o2 = i2 + "-clone";
          (r2 = Te(t2)).id = o2, Se(r2).add("djs-dragger").add("djs-dragger-marker"), this._clonedMarkers[i2] = r2;
          var a2 = fe("defs", this._canvas._svg);
          a2 || (a2 = De("defs"), ge(this._canvas._svg, a2)), ge(a2, r2);
        }
        we(e2, n2, "url(#" + this._clonedMarkers[i2].id + ")");
      };
      var Kl = { __init__: ["previewSupport"], previewSupport: ["type", ql] }, Yl = "drop-ok", Xl = "drop-not-ok", Zl = "attach-ok", Ql = "new-parent", Jl = "create";
      function eu(e2, t2, n2, i2, r2) {
        function o2(t3, n3) {
          [Zl, Yl, Xl, Ql].forEach(function(i3) {
            i3 === n3 ? e2.addMarker(t3, i3) : e2.removeMarker(t3, i3);
          });
        }
        function a2() {
          var e3 = t2.context();
          e3 && e3.prefix === Jl && t2.cancel();
        }
        n2.on(["create.move", "create.hover"], function(e3) {
          var t3 = e3.context, n3 = t3.elements, i3 = e3.hover, a3 = t3.source, s2 = t3.hints || {};
          if (!i3) return t3.canExecute = false, void (t3.target = null);
          tu(e3);
          var c2 = { x: e3.x, y: e3.y }, p2 = t3.canExecute = i3 && function(e4, t4, n4, i4, o3) {
            if (!t4) return false;
            var a4 = m(e4 = y(e4, function(t5) {
              var n5 = t5.labelTarget;
              return !(t5.parent || mn(t5) && -1 !== e4.indexOf(n5));
            }), function(e5) {
              return !fn(e5);
            }), s3 = false, c3 = false, p3 = false;
            nu(e4) && (s3 = r2.allowed("shape.attach", { position: n4, shape: a4, target: t4 })), s3 || (p3 = nu(e4) ? r2.allowed("shape.create", { position: n4, shape: a4, source: i4, target: t4 }) : r2.allowed("elements.create", { elements: e4, position: n4, target: t4 }));
            var l2 = o3.connectionTarget;
            return p3 || s3 ? (a4 && i4 && (c3 = r2.allowed("connection.create", { source: l2 === i4 ? a4 : i4, target: l2 === i4 ? i4 : a4, hints: { targetParent: t4, targetAttach: s3 } })), { attach: s3, connect: c3 }) : (null === p3 || null === s3) && null;
          }(n3, i3, c2, a3, s2);
          i3 && null !== p2 && (t3.target = i3, p2 && p2.attach ? o2(i3, Zl) : o2(i3, p2 ? Ql : Xl));
        }), n2.on(["create.end", "create.out", "create.cleanup"], function(e3) {
          var t3 = e3.hover;
          t3 && o2(t3, null);
        }), n2.on("create.end", function(e3) {
          var t3 = e3.context, n3 = t3.source, r3 = t3.shape, o3 = t3.elements, a3 = t3.target, s2 = t3.canExecute, c2 = s2 && s2.attach, p2 = s2 && s2.connect, l2 = t3.hints || {};
          if (false === s2 || !a3) return false;
          tu(e3);
          var u2 = { x: e3.x, y: e3.y };
          r3 = p2 ? i2.appendShape(n3, r3, u2, a3, { attach: c2, connection: true === p2 ? {} : p2, connectionTarget: l2.connectionTarget }) : m(o3 = i2.createElements(o3, u2, a3, L({}, l2, { attach: c2 })), function(e4) {
            return !fn(e4);
          }), L(t3, { elements: o3, shape: r3 }), L(e3, { elements: o3, shape: r3 });
        }), n2.on("create.init", function() {
          n2.on("elements.changed", a2), n2.once(["create.cancel", "create.end"], 2e3, function() {
            n2.off("elements.changed", a2);
          });
        }), this.start = function(e3, n3, i3) {
          p(n3) || (n3 = [n3]);
          var r3 = m(n3, function(e4) {
            return !fn(e4);
          });
          if (r3) {
            i3 = L({ elements: n3, hints: {}, shape: r3 }, i3 || {}), g(n3, function(e4) {
              u(e4.x) || (e4.x = 0), u(e4.y) || (e4.y = 0);
            });
            var o3 = vt(y(n3, function(e4) {
              return !e4.hidden;
            }));
            g(n3, function(e4) {
              fn(e4) && (e4.waypoints = E(e4.waypoints, function(e5) {
                return { x: e5.x - o3.x - o3.width / 2, y: e5.y - o3.y - o3.height / 2 };
              })), L(e4, { x: e4.x - o3.x - o3.width / 2, y: e4.y - o3.y - o3.height / 2 });
            }), t2.init(e3, Jl, { cursor: "grabbing", autoActivate: true, data: { shape: r3, elements: n3, context: i3 } });
          }
        };
      }
      function tu(e2) {
        var t2 = e2.context.createConstraints;
        t2 && (t2.left && (e2.x = Math.max(e2.x, t2.left)), t2.right && (e2.x = Math.min(e2.x, t2.right)), t2.top && (e2.y = Math.max(e2.y, t2.top)), t2.bottom && (e2.y = Math.min(e2.y, t2.bottom)));
      }
      function nu(e2) {
        return e2 && 1 === e2.length && !fn(e2[0]);
      }
      eu.$inject = ["canvas", "dragging", "eventBus", "modeling", "rules"];
      function iu(e2, t2, n2, i2, r2) {
        t2.on("create.move", 750, function(t3) {
          var o2 = t3.hover, a2 = t3.context, s2 = a2.elements, c2 = a2.dragGroup;
          c2 || (c2 = a2.dragGroup = function(e3) {
            var t4 = De("g");
            we(t4, r2.cls("djs-drag-group", ["no-events"]));
            var o3 = De("g");
            return e3.forEach(function(e4) {
              var r3;
              e4.hidden || (e4.waypoints ? (r3 = n2._createContainer("connection", o3), n2.drawConnection(ti(r3), e4)) : (r3 = n2._createContainer("shape", o3), n2.drawShape(ti(r3), e4), ii(r3, e4.x, e4.y)), i2.addDragger(e4, t4, r3));
            }), t4;
          }(s2)), o2 ? (c2.parentNode || ge(e2.getActiveLayer(), c2), ii(c2, t3.x, t3.y)) : Re(c2);
        }), t2.on("create.cleanup", function(e3) {
          var t3 = e3.context.dragGroup;
          t3 && Re(t3);
        });
      }
      iu.$inject = ["canvas", "eventBus", "graphicsFactory", "previewSupport", "styles"];
      var ru = { __depends__: [Tp, Kl, Bp, ta], __init__: ["create", "createPreview"], create: ["type", eu], createPreview: ["type", iu] };
      function ou() {
      }
      ou.prototype.get = function() {
        return this._data;
      }, ou.prototype.set = function(e2) {
        this._data = e2;
      }, ou.prototype.clear = function() {
        var e2 = this._data;
        return delete this._data, e2;
      }, ou.prototype.isEmpty = function() {
        return !this._data;
      };
      var au = { clipboard: ["type", ou] };
      function su(e2) {
        var t2 = this;
        function n2(e3) {
          t2._lastMoveEvent = e3;
        }
        this._lastMoveEvent = null, e2.on("canvas.init", function(e3) {
          (t2._svg = e3.svg).addEventListener("mousemove", n2);
        }), e2.on("canvas.destroy", function() {
          t2._lastMouseEvent = null, t2._svg.removeEventListener("mousemove", n2);
        });
      }
      su.$inject = ["eventBus"], su.prototype.getLastMoveEvent = function() {
        return this._lastMoveEvent || function(e2, t2) {
          var n2 = document.createEvent("MouseEvent"), i2 = e2, r2 = t2, o2 = e2, a2 = t2;
          n2.initMouseEvent && n2.initMouseEvent("mousemove", true, true, window, 0, i2, r2, o2, a2, false, false, false, false, 0, null);
          return n2;
        }(0, 0);
      };
      var cu = { __init__: ["mouse"], mouse: ["type", su] };
      function pu(e2, t2, n2, i2, r2, o2, a2, s2) {
        this._canvas = e2, this._create = t2, this._clipboard = n2, this._elementFactory = i2, this._eventBus = r2, this._modeling = o2, this._mouse = a2, this._rules = s2, r2.on("copyPaste.copyElement", function(e3) {
          var t3 = e3.descriptor, n3 = e3.element, i3 = e3.elements;
          t3.priority = 1, t3.id = n3.id;
          var r3 = m(i3, function(e4) {
            return e4 === n3.parent;
          });
          r3 && (t3.parent = n3.parent.id), function(e4) {
            return !!e4.host;
          }(n3) && (t3.priority = 2, t3.host = n3.host.id), fn(n3) && (t3.priority = 3, t3.source = n3.source.id, t3.target = n3.target.id, t3.waypoints = function(e4) {
            return E(e4.waypoints, function(e5) {
              return (e5 = lu(e5)).original && (e5.original = lu(e5.original)), e5;
            });
          }(n3)), mn(n3) && (t3.priority = 4, t3.labelTarget = n3.labelTarget.id), g(["x", "y", "width", "height"], function(e4) {
            u(n3[e4]) && (t3[e4] = n3[e4]);
          }), t3.hidden = n3.hidden, t3.collapsed = n3.collapsed;
        }), r2.on("copyPaste.pasteElements", function(e3) {
          L(e3.hints, { createElementsBehavior: false });
        });
      }
      function lu(e2) {
        return L({}, e2);
      }
      function uu(e2, t2) {
        var n2 = t2.indexOf(e2);
        return -1 === n2 ? t2 : t2.splice(n2, 1);
      }
      pu.$inject = ["canvas", "create", "clipboard", "elementFactory", "eventBus", "modeling", "mouse", "rules"], pu.prototype.copy = function(e2) {
        var t2, n2;
        return p(e2) || (e2 = e2 ? [e2] : []), n2 = false === (t2 = this._eventBus.fire("copyPaste.canCopyElements", { elements: e2 })) ? {} : this.createTree(p(t2) ? t2 : e2), this._clipboard.set(n2), this._eventBus.fire("copyPaste.elementsCopied", { elements: e2, tree: n2 }), n2;
      }, pu.prototype.paste = function(e2) {
        var t2 = this._clipboard.get();
        if (!this._clipboard.isEmpty()) {
          var n2 = e2 && e2.hints || {};
          this._eventBus.fire("copyPaste.pasteElements", { hints: n2 });
          var i2 = this._createElements(t2);
          if (e2 && e2.element && e2.point) return this._paste(i2, e2.element, e2.point, n2);
          this._create.start(this._mouse.getLastMoveEvent(), i2, { hints: n2 || {} });
        }
      }, pu.prototype._paste = function(e2, t2, n2, i2) {
        g(e2, function(e3) {
          u(e3.x) || (e3.x = 0), u(e3.y) || (e3.y = 0);
        });
        var r2 = vt(e2);
        return g(e2, function(e3) {
          fn(e3) && (e3.waypoints = E(e3.waypoints, function(e4) {
            return { x: e4.x - r2.x - r2.width / 2, y: e4.y - r2.y - r2.height / 2 };
          })), L(e3, { x: e3.x - r2.x - r2.width / 2, y: e3.y - r2.y - r2.height / 2 });
        }), this._modeling.createElements(e2, n2, t2, L({}, i2));
      }, pu.prototype._createElements = function(e2) {
        var t2 = this, n2 = this._eventBus, i2 = {}, r2 = [];
        return g(e2, function(e3, o2) {
          g(e3 = k(e3, "priority"), function(e4) {
            var o3, a2 = L({}, $(e4, ["priority"]));
            return i2[e4.parent] ? a2.parent = i2[e4.parent] : delete a2.parent, n2.fire("copyPaste.pasteElement", { cache: i2, descriptor: a2 }), fn(a2) ? (a2.source = i2[e4.source], a2.target = i2[e4.target], o3 = i2[e4.id] = t2.createConnection(a2), void r2.push(o3)) : mn(a2) ? (a2.labelTarget = i2[a2.labelTarget], o3 = i2[e4.id] = t2.createLabel(a2), void r2.push(o3)) : (a2.host && (a2.host = i2[a2.host]), o3 = i2[e4.id] = t2.createShape(a2), void r2.push(o3));
          });
        }), r2;
      }, pu.prototype.createConnection = function(e2) {
        return this._elementFactory.createConnection($(e2, ["id"]));
      }, pu.prototype.createLabel = function(e2) {
        return this._elementFactory.createLabel($(e2, ["id"]));
      }, pu.prototype.createShape = function(e2) {
        return this._elementFactory.createShape($(e2, ["id"]));
      }, pu.prototype.hasRelations = function(e2, t2) {
        var n2, i2;
        return !(fn(e2) && (n2 = m(t2, A({ id: e2.source.id })), i2 = m(t2, A({ id: e2.target.id })), !n2 || !i2)) && !(mn(e2) && !m(t2, A({ id: e2.labelTarget.id })));
      }, pu.prototype.createTree = function(e2) {
        var t2 = this._rules, n2 = this, i2 = {}, r2 = [];
        function o2(e3, t3) {
          var n3 = m(r2, function(t4) {
            return e3 === t4.element;
          });
          n3 ? n3.depth < t3 && (r2 = function(e4, t4) {
            var n4 = t4.indexOf(e4);
            -1 !== n4 && t4.splice(n4, 1);
            return t4;
          }(n3, r2), r2.push({ element: n3.element, depth: t3 })) : r2.push({ element: e3, depth: t3 });
        }
        return ft(ut(e2), function(e3, t3, i3) {
          if (!mn(e3)) {
            g(e3.labels, function(e4) {
              o2(e4, i3);
            }), g([e3.attachers, e3.incoming, e3.outgoing], function(e4) {
              e4 && e4.length && g(e4, function(e5) {
                g(e5.labels, function(e6) {
                  o2(e6, i3);
                }), o2(e5, i3);
              });
            }), o2(e3, i3);
            var r3 = [];
            return e3.children && (r3 = e3.children.slice()), n2._eventBus.fire("copyPaste.createTree", { element: e3, children: r3 }), r3;
          }
        }), e2 = E(r2, function(e3) {
          return e3.element;
        }), r2 = E(r2, function(t3) {
          return t3.descriptor = {}, n2._eventBus.fire("copyPaste.copyElement", { descriptor: t3.descriptor, element: t3.element, elements: e2 }), t3;
        }), r2 = k(r2, function(e3) {
          return e3.descriptor.priority;
        }), e2 = E(r2, function(e3) {
          return e3.element;
        }), g(r2, function(r3) {
          var o3 = r3.depth;
          n2.hasRelations(r3.element, e2) ? !function(e3, n3) {
            return t2.allowed("element.copy", { element: e3, elements: n3 });
          }(r3.element, e2) ? uu(r3.element, e2) : (i2[o3] || (i2[o3] = []), i2[o3].push(r3.descriptor)) : uu(r3.element, e2);
        }), i2;
      };
      var hu = { __depends__: [au, ru, cu, Bp], __init__: ["copyPaste"], copyPaste: ["type", pu] };
      function du(e2, t2, n2) {
        p(n2) || (n2 = [n2]), g(n2, function(n3) {
          a(e2[n3]) || (t2[n3] = e2[n3]);
        });
      }
      function fu(e2, t2, n2) {
        function i2(t3, i3) {
          var r3 = e2.create(t3.$type);
          return n2.copyElement(t3, r3, null, i3);
        }
        t2.on("copyPaste.copyElement", 750, function(e3) {
          var t3 = e3.descriptor, n3 = e3.element, r3 = Br(n3);
          if (mn(n3)) return t3;
          var o2 = t3.businessObject = i2(r3, true), a2 = t3.di = i2(Nr(n3), true);
          a2.bpmnElement = o2, du(o2, t3, "name"), du(a2, t3, "isExpanded"), r3.default && (t3.default = r3.default.id);
        });
        var r2 = "-bpmn-js-refs";
        t2.on("copyPaste.pasteElement", function(e3) {
          var t3 = e3.cache, n3 = e3.descriptor, r3 = n3.businessObject, o2 = n3.di;
          if (mn(n3)) return n3.businessObject = Br(t3[n3.labelTarget]), void (n3.di = Nr(t3[n3.labelTarget]));
          r3 = n3.businessObject = i2(r3), (o2 = n3.di = i2(o2)).bpmnElement = r3, du(n3, r3, ["isExpanded", "name"]), n3.type = r3.$type;
        }), t2.on("copyPaste.copyElement", 750, function(e3) {
          var t3 = e3.descriptor, n3 = e3.element;
          if (Mr(n3, "bpmn:Participant")) {
            var r3 = Br(n3);
            r3.processRef && (t3.processRef = i2(r3.processRef, true));
          }
        }), t2.on("copyPaste.pasteElement", function(e3) {
          var t3 = e3.descriptor, n3 = t3.processRef;
          n3 && (t3.processRef = i2(n3));
        }), t2.on("copyPaste.pasteElement", 750, function(e3) {
          var t3 = e3.cache;
          !function(e4, t4) {
            e4[r2] = t4;
          }(t3, function(e4, t4, n3) {
            var i3 = Br(e4);
            return e4.default && (n3[e4.default] = { element: i3, property: "default" }), e4.host && (Br(e4).attachedToRef = Br(t4[e4.host])), $(n3, x(n3, function(t5, n4, r3) {
              var o2 = n4.element, a2 = n4.property;
              return r3 === e4.id && (o2[a2] = i3, t5.push(e4.id)), t5;
            }, []));
          }(e3.descriptor, t3, function(e4) {
            return e4[r2] = e4[r2] || {};
          }(t3)));
        });
      }
      fu.$inject = ["bpmnFactory", "eventBus", "moddleCopy"];
      var mu = ["artifacts", "dataInputAssociations", "dataOutputAssociations", "default", "flowElements", "lanes", "incoming", "outgoing", "categoryValue"];
      function vu(e2, t2, n2) {
        this._bpmnFactory = t2, this._eventBus = e2, this._moddle = n2, e2.on("moddleCopy.canCopyProperties", function(e3) {
          var t3 = e3.propertyNames;
          if (t3 && t3.length) return k(t3, function(e4) {
            return "extensionElements" === e4;
          });
        }), e2.on("moddleCopy.canCopyProperty", function(e3) {
          var t3 = e3.parent, n3 = l(t3) && t3.$descriptor, i2 = e3.propertyName;
          return (!i2 || -1 === mu.indexOf(i2)) && (!(i2 && n3 && !m(n3.properties, A({ name: i2 }))) && void 0);
        }), e2.on("moddleCopy.canSetCopiedProperty", function(e3) {
          var t3, n3, i2 = e3.property;
          if (n3 = "bpmn:ExtensionElements", (t3 = i2) && h(t3.$instanceOf) && t3.$instanceOf(n3) && (!i2.values || !i2.values.length)) return false;
        });
      }
      function yu(e2, t2) {
        return x(e2.properties, function(e3, n2) {
          return t2 && n2.default ? e3 : e3.concat(n2.name);
        }, []);
      }
      vu.$inject = ["eventBus", "bpmnFactory", "moddle"], vu.prototype.copyElement = function(e2, t2, n2, i2 = false) {
        var r2 = this;
        n2 && !p(n2) && (n2 = [n2]), n2 = n2 || yu(e2.$descriptor);
        var o2 = this._eventBus.fire("moddleCopy.canCopyProperties", { propertyNames: n2, sourceElement: e2, targetElement: t2, clone: i2 });
        return false === o2 || (p(o2) && (n2 = o2), g(n2, function(n3) {
          var o3;
          f(e2, n3) && (o3 = e2.get(n3));
          var a2 = r2.copyProperty(o3, t2, n3, i2);
          s(a2) && (false !== r2._eventBus.fire("moddleCopy.canSetCopiedProperty", { parent: t2, property: a2, propertyName: n3 }) && t2.set(n3, a2));
        })), t2;
      }, vu.prototype.copyProperty = function(e2, t2, n2, i2 = false) {
        var r2 = this, o2 = this._eventBus.fire("moddleCopy.canCopyProperty", { parent: t2, property: e2, propertyName: n2, clone: i2 });
        if (false !== o2) {
          if (o2) return l(o2) && o2.$type && !o2.$parent && (o2.$parent = t2), o2;
          var a2 = this._moddle.getPropertyDescriptor(t2, n2);
          if (!a2.isReference) {
            if (a2.isId) return e2 && this._copyId(e2, t2, i2);
            if (p(e2)) return x(e2, function(e3, a3) {
              return (o2 = r2.copyProperty(a3, t2, n2, i2)) ? e3.concat(o2) : e3;
            }, []);
            if (l(e2) && e2.$type) {
              if (this._moddle.getElementDescriptor(e2).isGeneric) return;
              return (o2 = r2._bpmnFactory.create(e2.$type)).$parent = t2, o2 = r2.copyElement(e2, o2, null, i2);
            }
            return e2;
          }
        }
      }, vu.prototype._copyId = function(e2, t2, n2 = false) {
        return n2 ? e2 : this._moddle.ids.assigned(e2) ? void 0 : (this._moddle.ids.claim(e2, t2), e2);
      };
      var gu = { __depends__: [hu], __init__: ["bpmnCopyPaste", "moddleCopy"], bpmnCopyPaste: ["type", fu], moddleCopy: ["type", vu] }, bu = Math.round;
      function xu(e2, t2) {
        this._modeling = e2, this._eventBus = t2;
      }
      function _u(e2, t2) {
        t2.on("replace.end", 500, function(t3) {
          const { newElement: n2, hints: i2 = {} } = t3;
          false !== i2.select && e2.select(n2);
        });
      }
      xu.$inject = ["modeling", "eventBus"], xu.prototype.replaceElement = function(e2, t2, n2) {
        if (e2.waypoints) return null;
        var i2 = this._modeling, r2 = this._eventBus;
        r2.fire("replace.start", { element: e2, attrs: t2, hints: n2 });
        var o2 = t2.width || e2.width, a2 = t2.height || e2.height, s2 = t2.x || e2.x, c2 = t2.y || e2.y, p2 = bu(s2 + o2 / 2), l2 = bu(c2 + a2 / 2), u2 = i2.replaceShape(e2, L({}, t2, { x: p2, y: l2, width: o2, height: a2 }), n2);
        return r2.fire("replace.end", { element: e2, newElement: u2, hints: n2 }), u2;
      }, _u.$inject = ["selection", "eventBus"];
      var wu = { __init__: ["replace", "replaceSelectionBehavior"], replaceSelectionBehavior: ["type", _u], replace: ["type", xu] };
      var Eu = ["cancelActivity", "instantiate", "eventGatewayType", "triggeredByEvent", "isInterrupting"];
      function Su(e2, t2, n2, i2, r2, o2) {
        this.replaceElement = function(s2, c2, l2) {
          l2 = l2 || {};
          var u2 = c2.type, h2 = s2.businessObject;
          if (Cu(h2) && "bpmn:SubProcess" === u2 && function(e3, t3) {
            var n3 = e3 && f(e3, "collapsed") ? e3.collapsed : !Zr(e3);
            return n3 !== (t3 && (f(t3, "collapsed") || f(t3, "isExpanded")) ? f(t3, "collapsed") ? t3.collapsed : !t3.isExpanded : n3);
          }(s2, c2)) return i2.toggleCollapse(s2), s2;
          var d2 = e2.create(u2), m2 = { type: u2, businessObject: d2, di: {} };
          !function(e3, t3, n3) {
            p(n3) || (n3 = [n3]), g(n3, function(n4) {
              a(e3[n4]) || (t3[n4] = e3[n4]);
            });
          }(s2.di, m2.di, ["fill", "stroke", "background-color", "border-color", "color"]);
          var v2 = function(e3, t3) {
            return e3.filter(function(e4) {
              return t3.includes(e4);
            });
          }(yu(h2.$descriptor), yu(d2.$descriptor, true));
          L(d2, I(c2, Eu));
          var b2 = y(v2, function(e3) {
            return "eventDefinitions" === e3 ? Ru(s2, c2.eventDefinitionType) : "loopCharacteristics" === e3 ? !Qr(d2) : !f(d2, e3) && (("processRef" !== e3 || false !== c2.isExpanded) && "triggeredByEvent" !== e3);
          });
          if (d2 = n2.copyElement(h2, d2, b2), c2.eventDefinitionType && (Ru(d2, c2.eventDefinitionType) || (m2.eventDefinitionType = c2.eventDefinitionType, m2.eventDefinitionAttrs = c2.eventDefinitionAttrs)), Mr(h2, "bpmn:Activity")) {
            if (Cu(h2)) m2.isExpanded = Zr(s2);
            else if (c2 && f(c2, "isExpanded")) {
              m2.isExpanded = c2.isExpanded;
              var x2 = t2.getDefaultSize(d2, { isExpanded: m2.isExpanded });
              m2.width = x2.width, m2.height = x2.height, m2.x = s2.x - (m2.width - s2.width) / 2, m2.y = s2.y - (m2.height - s2.height) / 2;
            }
            Zr(s2) && !Mr(h2, "bpmn:Task") && m2.isExpanded && (m2.width = s2.width, m2.height = s2.height);
          }
          return Cu(h2) && !Cu(d2) && (l2.moveChildren = false), Mr(h2, "bpmn:Participant") && (true === c2.isExpanded ? d2.processRef = e2.create("bpmn:Process") : l2.moveChildren = false, m2.width = s2.width, m2.height = t2.getDefaultSize(m2).height), o2.allowed("shape.resize", { shape: d2 }) || (m2.height = t2.getDefaultSize(m2).height, m2.width = t2.getDefaultSize(m2).width), d2.name = h2.name, Dr(h2, ["bpmn:ExclusiveGateway", "bpmn:InclusiveGateway", "bpmn:Activity"]) && Dr(d2, ["bpmn:ExclusiveGateway", "bpmn:InclusiveGateway", "bpmn:Activity"]) && (d2.default = h2.default), c2.host && !Mr(h2, "bpmn:BoundaryEvent") && Mr(d2, "bpmn:BoundaryEvent") && (m2.host = c2.host), "bpmn:DataStoreReference" !== m2.type && "bpmn:DataObjectReference" !== m2.type || (m2.x = s2.x + (s2.width - m2.width) / 2), r2.replaceElement(s2, m2, l2);
        };
      }
      function Cu(e2) {
        return Mr(e2, "bpmn:SubProcess");
      }
      function Ru(e2, t2) {
        var n2 = Br(e2);
        return t2 && n2.get("eventDefinitions").some(function(e3) {
          return Mr(e3, t2);
        });
      }
      Su.$inject = ["bpmnFactory", "elementFactory", "moddleCopy", "modeling", "replace", "rules"];
      var Pu = { __depends__: [gu, wu, ta], bpmnReplace: ["type", Su] };
      function Tu(e2) {
        return function(t2) {
          var n2 = t2.target, i2 = Br(e2), r2 = i2.eventDefinitions && i2.eventDefinitions[0], o2 = i2.$type === n2.type, a2 = (r2 && r2.$type) === n2.eventDefinitionType, s2 = !!n2.triggeredByEvent == !!i2.triggeredByEvent, c2 = void 0 === n2.isExpanded || n2.isExpanded === Zr(e2);
          return !(o2 && a2 && s2 && c2);
        };
      }
      var ku = [{ label: "Start Event", actionName: "replace-with-none-start", className: "bpmn-icon-start-event-none", target: { type: "bpmn:StartEvent" } }, { label: "Intermediate Throw Event", actionName: "replace-with-none-intermediate-throwing", className: "bpmn-icon-intermediate-event-none", target: { type: "bpmn:IntermediateThrowEvent" } }, { label: "End Event", actionName: "replace-with-none-end", className: "bpmn-icon-end-event-none", target: { type: "bpmn:EndEvent" } }, { label: "Message Start Event", actionName: "replace-with-message-start", className: "bpmn-icon-start-event-message", target: { type: "bpmn:StartEvent", eventDefinitionType: "bpmn:MessageEventDefinition" } }, { label: "Timer Start Event", actionName: "replace-with-timer-start", className: "bpmn-icon-start-event-timer", target: { type: "bpmn:StartEvent", eventDefinitionType: "bpmn:TimerEventDefinition" } }, { label: "Conditional Start Event", actionName: "replace-with-conditional-start", className: "bpmn-icon-start-event-condition", target: { type: "bpmn:StartEvent", eventDefinitionType: "bpmn:ConditionalEventDefinition" } }, { label: "Signal Start Event", actionName: "replace-with-signal-start", className: "bpmn-icon-start-event-signal", target: { type: "bpmn:StartEvent", eventDefinitionType: "bpmn:SignalEventDefinition" } }], Au = [{ label: "Start Event", actionName: "replace-with-none-start", className: "bpmn-icon-start-event-none", target: { type: "bpmn:StartEvent" } }, { label: "Intermediate Throw Event", actionName: "replace-with-none-intermediate-throwing", className: "bpmn-icon-intermediate-event-none", target: { type: "bpmn:IntermediateThrowEvent" } }, { label: "End Event", actionName: "replace-with-none-end", className: "bpmn-icon-end-event-none", target: { type: "bpmn:EndEvent" } }], Mu = [{ label: "Start Event", actionName: "replace-with-none-start", className: "bpmn-icon-start-event-none", target: { type: "bpmn:StartEvent" } }, { label: "Intermediate Throw Event", actionName: "replace-with-none-intermediate-throw", className: "bpmn-icon-intermediate-event-none", target: { type: "bpmn:IntermediateThrowEvent" } }, { label: "End Event", actionName: "replace-with-none-end", className: "bpmn-icon-end-event-none", target: { type: "bpmn:EndEvent" } }, { label: "Message Intermediate Catch Event", actionName: "replace-with-message-intermediate-catch", className: "bpmn-icon-intermediate-event-catch-message", target: { type: "bpmn:IntermediateCatchEvent", eventDefinitionType: "bpmn:MessageEventDefinition" } }, { label: "Message Intermediate Throw Event", actionName: "replace-with-message-intermediate-throw", className: "bpmn-icon-intermediate-event-throw-message", target: { type: "bpmn:IntermediateThrowEvent", eventDefinitionType: "bpmn:MessageEventDefinition" } }, { label: "Timer Intermediate Catch Event", actionName: "replace-with-timer-intermediate-catch", className: "bpmn-icon-intermediate-event-catch-timer", target: { type: "bpmn:IntermediateCatchEvent", eventDefinitionType: "bpmn:TimerEventDefinition" } }, { label: "Escalation Intermediate Throw Event", actionName: "replace-with-escalation-intermediate-throw", className: "bpmn-icon-intermediate-event-throw-escalation", target: { type: "bpmn:IntermediateThrowEvent", eventDefinitionType: "bpmn:EscalationEventDefinition" } }, { label: "Conditional Intermediate Catch Event", actionName: "replace-with-conditional-intermediate-catch", className: "bpmn-icon-intermediate-event-catch-condition", target: { type: "bpmn:IntermediateCatchEvent", eventDefinitionType: "bpmn:ConditionalEventDefinition" } }, { label: "Link Intermediate Catch Event", actionName: "replace-with-link-intermediate-catch", className: "bpmn-icon-intermediate-event-catch-link", target: { type: "bpmn:IntermediateCatchEvent", eventDefinitionType: "bpmn:LinkEventDefinition", eventDefinitionAttrs: { name: "" } } }, { label: "Link Intermediate Throw Event", actionName: "replace-with-link-intermediate-throw", className: "bpmn-icon-intermediate-event-throw-link", target: { type: "bpmn:IntermediateThrowEvent", eventDefinitionType: "bpmn:LinkEventDefinition", eventDefinitionAttrs: { name: "" } } }, { label: "Compensation Intermediate Throw Event", actionName: "replace-with-compensation-intermediate-throw", className: "bpmn-icon-intermediate-event-throw-compensation", target: { type: "bpmn:IntermediateThrowEvent", eventDefinitionType: "bpmn:CompensateEventDefinition" } }, { label: "Signal Intermediate Catch Event", actionName: "replace-with-signal-intermediate-catch", className: "bpmn-icon-intermediate-event-catch-signal", target: { type: "bpmn:IntermediateCatchEvent", eventDefinitionType: "bpmn:SignalEventDefinition" } }, { label: "Signal Intermediate Throw Event", actionName: "replace-with-signal-intermediate-throw", className: "bpmn-icon-intermediate-event-throw-signal", target: { type: "bpmn:IntermediateThrowEvent", eventDefinitionType: "bpmn:SignalEventDefinition" } }], Du = [{ label: "Start Event", actionName: "replace-with-none-start", className: "bpmn-icon-start-event-none", target: { type: "bpmn:StartEvent" } }, { label: "Intermediate Throw Event", actionName: "replace-with-none-intermediate-throw", className: "bpmn-icon-intermediate-event-none", target: { type: "bpmn:IntermediateThrowEvent" } }, { label: "End Event", actionName: "replace-with-none-end", className: "bpmn-icon-end-event-none", target: { type: "bpmn:EndEvent" } }, { label: "Message End Event", actionName: "replace-with-message-end", className: "bpmn-icon-end-event-message", target: { type: "bpmn:EndEvent", eventDefinitionType: "bpmn:MessageEventDefinition" } }, { label: "Escalation End Event", actionName: "replace-with-escalation-end", className: "bpmn-icon-end-event-escalation", target: { type: "bpmn:EndEvent", eventDefinitionType: "bpmn:EscalationEventDefinition" } }, { label: "Error End Event", actionName: "replace-with-error-end", className: "bpmn-icon-end-event-error", target: { type: "bpmn:EndEvent", eventDefinitionType: "bpmn:ErrorEventDefinition" } }, { label: "Cancel End Event", actionName: "replace-with-cancel-end", className: "bpmn-icon-end-event-cancel", target: { type: "bpmn:EndEvent", eventDefinitionType: "bpmn:CancelEventDefinition" } }, { label: "Compensation End Event", actionName: "replace-with-compensation-end", className: "bpmn-icon-end-event-compensation", target: { type: "bpmn:EndEvent", eventDefinitionType: "bpmn:CompensateEventDefinition" } }, { label: "Signal End Event", actionName: "replace-with-signal-end", className: "bpmn-icon-end-event-signal", target: { type: "bpmn:EndEvent", eventDefinitionType: "bpmn:SignalEventDefinition" } }, { label: "Terminate End Event", actionName: "replace-with-terminate-end", className: "bpmn-icon-end-event-terminate", target: { type: "bpmn:EndEvent", eventDefinitionType: "bpmn:TerminateEventDefinition" } }], Bu = [{ label: "Exclusive Gateway", actionName: "replace-with-exclusive-gateway", className: "bpmn-icon-gateway-xor", target: { type: "bpmn:ExclusiveGateway" } }, { label: "Parallel Gateway", actionName: "replace-with-parallel-gateway", className: "bpmn-icon-gateway-parallel", target: { type: "bpmn:ParallelGateway" } }, { label: "Inclusive Gateway", actionName: "replace-with-inclusive-gateway", className: "bpmn-icon-gateway-or", target: { type: "bpmn:InclusiveGateway" } }, { label: "Complex Gateway", actionName: "replace-with-complex-gateway", className: "bpmn-icon-gateway-complex", target: { type: "bpmn:ComplexGateway" } }, { label: "Event based Gateway", actionName: "replace-with-event-based-gateway", className: "bpmn-icon-gateway-eventbased", target: { type: "bpmn:EventBasedGateway", instantiate: false, eventGatewayType: "Exclusive" } }], Nu = [{ label: "Transaction", actionName: "replace-with-transaction", className: "bpmn-icon-transaction", target: { type: "bpmn:Transaction", isExpanded: true } }, { label: "Event Sub Process", actionName: "replace-with-event-subprocess", className: "bpmn-icon-event-subprocess-expanded", target: { type: "bpmn:SubProcess", triggeredByEvent: true, isExpanded: true } }, { label: "Sub Process (collapsed)", actionName: "replace-with-collapsed-subprocess", className: "bpmn-icon-subprocess-collapsed", target: { type: "bpmn:SubProcess", isExpanded: false } }], Ou = [{ label: "Transaction", actionName: "replace-with-transaction", className: "bpmn-icon-transaction", target: { type: "bpmn:Transaction", isExpanded: true } }, { label: "Sub Process", actionName: "replace-with-subprocess", className: "bpmn-icon-subprocess-expanded", target: { type: "bpmn:SubProcess", isExpanded: true } }, { label: "Event Sub Process", actionName: "replace-with-event-subprocess", className: "bpmn-icon-event-subprocess-expanded", target: { type: "bpmn:SubProcess", triggeredByEvent: true, isExpanded: true } }], ju = Ou, Lu = [{ label: "Task", actionName: "replace-with-task", className: "bpmn-icon-task", target: { type: "bpmn:Task" } }, { label: "User Task", actionName: "replace-with-user-task", className: "bpmn-icon-user", target: { type: "bpmn:UserTask" } }, { label: "Service Task", actionName: "replace-with-service-task", className: "bpmn-icon-service", target: { type: "bpmn:ServiceTask" } }, { label: "Send Task", actionName: "replace-with-send-task", className: "bpmn-icon-send", target: { type: "bpmn:SendTask" } }, { label: "Receive Task", actionName: "replace-with-receive-task", className: "bpmn-icon-receive", target: { type: "bpmn:ReceiveTask" } }, { label: "Manual Task", actionName: "replace-with-manual-task", className: "bpmn-icon-manual", target: { type: "bpmn:ManualTask" } }, { label: "Business Rule Task", actionName: "replace-with-rule-task", className: "bpmn-icon-business-rule", target: { type: "bpmn:BusinessRuleTask" } }, { label: "Script Task", actionName: "replace-with-script-task", className: "bpmn-icon-script", target: { type: "bpmn:ScriptTask" } }, { label: "Call Activity", actionName: "replace-with-call-activity", className: "bpmn-icon-call-activity", target: { type: "bpmn:CallActivity" } }, { label: "Sub Process (collapsed)", actionName: "replace-with-collapsed-subprocess", className: "bpmn-icon-subprocess-collapsed", target: { type: "bpmn:SubProcess", isExpanded: false } }, { label: "Sub Process (expanded)", actionName: "replace-with-expanded-subprocess", className: "bpmn-icon-subprocess-expanded", target: { type: "bpmn:SubProcess", isExpanded: true } }], Iu = [{ label: "Data Store Reference", actionName: "replace-with-data-store-reference", className: "bpmn-icon-data-store", target: { type: "bpmn:DataStoreReference" } }], $u = [{ label: "Data Object Reference", actionName: "replace-with-data-object-reference", className: "bpmn-icon-data-object", target: { type: "bpmn:DataObjectReference" } }], Fu = [{ label: "Message Boundary Event", actionName: "replace-with-message-boundary", className: "bpmn-icon-intermediate-event-catch-message", target: { type: "bpmn:BoundaryEvent", eventDefinitionType: "bpmn:MessageEventDefinition" } }, { label: "Timer Boundary Event", actionName: "replace-with-timer-boundary", className: "bpmn-icon-intermediate-event-catch-timer", target: { type: "bpmn:BoundaryEvent", eventDefinitionType: "bpmn:TimerEventDefinition" } }, { label: "Escalation Boundary Event", actionName: "replace-with-escalation-boundary", className: "bpmn-icon-intermediate-event-catch-escalation", target: { type: "bpmn:BoundaryEvent", eventDefinitionType: "bpmn:EscalationEventDefinition" } }, { label: "Conditional Boundary Event", actionName: "replace-with-conditional-boundary", className: "bpmn-icon-intermediate-event-catch-condition", target: { type: "bpmn:BoundaryEvent", eventDefinitionType: "bpmn:ConditionalEventDefinition" } }, { label: "Error Boundary Event", actionName: "replace-with-error-boundary", className: "bpmn-icon-intermediate-event-catch-error", target: { type: "bpmn:BoundaryEvent", eventDefinitionType: "bpmn:ErrorEventDefinition" } }, { label: "Cancel Boundary Event", actionName: "replace-with-cancel-boundary", className: "bpmn-icon-intermediate-event-catch-cancel", target: { type: "bpmn:BoundaryEvent", eventDefinitionType: "bpmn:CancelEventDefinition" } }, { label: "Signal Boundary Event", actionName: "replace-with-signal-boundary", className: "bpmn-icon-intermediate-event-catch-signal", target: { type: "bpmn:BoundaryEvent", eventDefinitionType: "bpmn:SignalEventDefinition" } }, { label: "Compensation Boundary Event", actionName: "replace-with-compensation-boundary", className: "bpmn-icon-intermediate-event-catch-compensation", target: { type: "bpmn:BoundaryEvent", eventDefinitionType: "bpmn:CompensateEventDefinition" } }, { label: "Message Boundary Event (non-interrupting)", actionName: "replace-with-non-interrupting-message-boundary", className: "bpmn-icon-intermediate-event-catch-non-interrupting-message", target: { type: "bpmn:BoundaryEvent", eventDefinitionType: "bpmn:MessageEventDefinition", cancelActivity: false } }, { label: "Timer Boundary Event (non-interrupting)", actionName: "replace-with-non-interrupting-timer-boundary", className: "bpmn-icon-intermediate-event-catch-non-interrupting-timer", target: { type: "bpmn:BoundaryEvent", eventDefinitionType: "bpmn:TimerEventDefinition", cancelActivity: false } }, { label: "Escalation Boundary Event (non-interrupting)", actionName: "replace-with-non-interrupting-escalation-boundary", className: "bpmn-icon-intermediate-event-catch-non-interrupting-escalation", target: { type: "bpmn:BoundaryEvent", eventDefinitionType: "bpmn:EscalationEventDefinition", cancelActivity: false } }, { label: "Conditional Boundary Event (non-interrupting)", actionName: "replace-with-non-interrupting-conditional-boundary", className: "bpmn-icon-intermediate-event-catch-non-interrupting-condition", target: { type: "bpmn:BoundaryEvent", eventDefinitionType: "bpmn:ConditionalEventDefinition", cancelActivity: false } }, { label: "Signal Boundary Event (non-interrupting)", actionName: "replace-with-non-interrupting-signal-boundary", className: "bpmn-icon-intermediate-event-catch-non-interrupting-signal", target: { type: "bpmn:BoundaryEvent", eventDefinitionType: "bpmn:SignalEventDefinition", cancelActivity: false } }], zu = [{ label: "Message Start Event", actionName: "replace-with-message-start", className: "bpmn-icon-start-event-message", target: { type: "bpmn:StartEvent", eventDefinitionType: "bpmn:MessageEventDefinition" } }, { label: "Timer Start Event", actionName: "replace-with-timer-start", className: "bpmn-icon-start-event-timer", target: { type: "bpmn:StartEvent", eventDefinitionType: "bpmn:TimerEventDefinition" } }, { label: "Conditional Start Event", actionName: "replace-with-conditional-start", className: "bpmn-icon-start-event-condition", target: { type: "bpmn:StartEvent", eventDefinitionType: "bpmn:ConditionalEventDefinition" } }, { label: "Signal Start Event", actionName: "replace-with-signal-start", className: "bpmn-icon-start-event-signal", target: { type: "bpmn:StartEvent", eventDefinitionType: "bpmn:SignalEventDefinition" } }, { label: "Error Start Event", actionName: "replace-with-error-start", className: "bpmn-icon-start-event-error", target: { type: "bpmn:StartEvent", eventDefinitionType: "bpmn:ErrorEventDefinition" } }, { label: "Escalation Start Event", actionName: "replace-with-escalation-start", className: "bpmn-icon-start-event-escalation", target: { type: "bpmn:StartEvent", eventDefinitionType: "bpmn:EscalationEventDefinition" } }, { label: "Compensation Start Event", actionName: "replace-with-compensation-start", className: "bpmn-icon-start-event-compensation", target: { type: "bpmn:StartEvent", eventDefinitionType: "bpmn:CompensateEventDefinition" } }, { label: "Message Start Event (non-interrupting)", actionName: "replace-with-non-interrupting-message-start", className: "bpmn-icon-start-event-non-interrupting-message", target: { type: "bpmn:StartEvent", eventDefinitionType: "bpmn:MessageEventDefinition", isInterrupting: false } }, { label: "Timer Start Event (non-interrupting)", actionName: "replace-with-non-interrupting-timer-start", className: "bpmn-icon-start-event-non-interrupting-timer", target: { type: "bpmn:StartEvent", eventDefinitionType: "bpmn:TimerEventDefinition", isInterrupting: false } }, { label: "Conditional Start Event (non-interrupting)", actionName: "replace-with-non-interrupting-conditional-start", className: "bpmn-icon-start-event-non-interrupting-condition", target: { type: "bpmn:StartEvent", eventDefinitionType: "bpmn:ConditionalEventDefinition", isInterrupting: false } }, { label: "Signal Start Event (non-interrupting)", actionName: "replace-with-non-interrupting-signal-start", className: "bpmn-icon-start-event-non-interrupting-signal", target: { type: "bpmn:StartEvent", eventDefinitionType: "bpmn:SignalEventDefinition", isInterrupting: false } }, { label: "Escalation Start Event (non-interrupting)", actionName: "replace-with-non-interrupting-escalation-start", className: "bpmn-icon-start-event-non-interrupting-escalation", target: { type: "bpmn:StartEvent", eventDefinitionType: "bpmn:EscalationEventDefinition", isInterrupting: false } }], Hu = [{ label: "Sequence Flow", actionName: "replace-with-sequence-flow", className: "bpmn-icon-connection" }, { label: "Default Flow", actionName: "replace-with-default-flow", className: "bpmn-icon-default-flow" }, { label: "Conditional Flow", actionName: "replace-with-conditional-flow", className: "bpmn-icon-conditional-flow" }], Gu = [{ label: "Expanded Pool", actionName: "replace-with-expanded-pool", className: "bpmn-icon-participant", target: { type: "bpmn:Participant", isExpanded: true } }, { label: function(e2) {
        var t2 = "Empty Pool";
        return e2.children && e2.children.length && (t2 += " (removes content)"), t2;
      }, actionName: "replace-with-collapsed-pool", className: "bpmn-icon-lane", target: { type: "bpmn:Participant", isExpanded: false } }];
      function Vu(e2, t2, n2, i2, r2, o2, a2) {
        this._bpmnFactory = e2, this._popupMenu = t2, this._modeling = n2, this._moddle = i2, this._bpmnReplace = r2, this._rules = o2, this._translate = a2, this._register();
      }
      Vu.$inject = ["bpmnFactory", "popupMenu", "modeling", "moddle", "bpmnReplace", "rules", "translate"], Vu.prototype._register = function() {
        this._popupMenu.registerProvider("bpmn-replace", this);
      }, Vu.prototype.getPopupMenuEntries = function(e2) {
        var t2 = e2.businessObject, n2 = this._rules, i2 = [];
        if (p(e2) || !n2.allowed("shape.replace", { element: e2 })) return {};
        var r2 = Tu(e2);
        return Mr(t2, "bpmn:DataObjectReference") ? this._createEntries(e2, Iu) : Mr(t2, "bpmn:DataStoreReference") && !Mr(e2.parent, "bpmn:Collaboration") ? this._createEntries(e2, $u) : Mr(t2, "bpmn:StartEvent") && !Mr(t2.$parent, "bpmn:SubProcess") ? (i2 = y(ku, r2), this._createEntries(e2, i2)) : Mr(t2, "bpmn:Participant") ? (i2 = y(Gu, function(t3) {
          return Zr(e2) !== t3.target.isExpanded;
        }), this._createEntries(e2, i2)) : Mr(t2, "bpmn:StartEvent") && Qr(t2.$parent) ? (i2 = y(zu, function(e3) {
          var n3 = false !== e3.target.isInterrupting, i3 = t2.isInterrupting === n3;
          return r2(e3) || !r2(e3) && !i3;
        }), this._createEntries(e2, i2)) : Mr(t2, "bpmn:StartEvent") && !Qr(t2.$parent) && Mr(t2.$parent, "bpmn:SubProcess") ? (i2 = y(Au, r2), this._createEntries(e2, i2)) : Mr(t2, "bpmn:EndEvent") ? (i2 = y(Du, function(e3) {
          return !("bpmn:CancelEventDefinition" == e3.target.eventDefinitionType && !Mr(t2.$parent, "bpmn:Transaction")) && r2(e3);
        }), this._createEntries(e2, i2)) : Mr(t2, "bpmn:BoundaryEvent") ? (i2 = y(Fu, function(e3) {
          var n3 = e3.target;
          if ("bpmn:CancelEventDefinition" == n3.eventDefinitionType && !Mr(t2.attachedToRef, "bpmn:Transaction")) return false;
          var i3 = false !== n3.cancelActivity, o2 = t2.cancelActivity == i3;
          return r2(e3) || !r2(e3) && !o2;
        }), this._createEntries(e2, i2)) : Mr(t2, "bpmn:IntermediateCatchEvent") || Mr(t2, "bpmn:IntermediateThrowEvent") ? (i2 = y(Mu, r2), this._createEntries(e2, i2)) : Mr(t2, "bpmn:Gateway") ? (i2 = y(Bu, r2), this._createEntries(e2, i2)) : Mr(t2, "bpmn:Transaction") ? (i2 = y(Ou, r2), this._createEntries(e2, i2)) : Qr(t2) && Zr(e2) ? (i2 = y(ju, r2), this._createEntries(e2, i2)) : Mr(t2, "bpmn:SubProcess") && Zr(e2) ? (i2 = y(Nu, r2), this._createEntries(e2, i2)) : Mr(t2, "bpmn:AdHocSubProcess") && !Zr(e2) ? (i2 = y(Lu, function(e3) {
          var t3 = e3.target, n3 = "bpmn:SubProcess" === t3.type, i3 = true === t3.isExpanded;
          return Tu(t3) && (!n3 || i3);
        }), this._createEntries(e2, i2)) : Mr(t2, "bpmn:SequenceFlow") ? this._createSequenceFlowEntries(e2, Hu) : Mr(t2, "bpmn:FlowNode") ? (i2 = y(Lu, r2), Mr(t2, "bpmn:SubProcess") && !Zr(e2) && (i2 = y(i2, function(e3) {
          return "Sub Process (collapsed)" !== e3.label;
        })), this._createEntries(e2, i2)) : {};
      }, Vu.prototype.getPopupMenuHeaderEntries = function(e2) {
        var t2 = {};
        return Mr(e2, "bpmn:Activity") && !Qr(e2) && (t2 = { ...t2, ...this._getLoopCharacteristicsHeaderEntries(e2) }), Mr(e2, "bpmn:DataObjectReference") && (t2 = { ...t2, ...this._getCollectionHeaderEntries(e2) }), Mr(e2, "bpmn:Participant") && (t2 = { ...t2, ...this._getParticipantMultiplicityHeaderEntries(e2) }), !Mr(e2, "bpmn:SubProcess") || Mr(e2, "bpmn:Transaction") || Qr(e2) || (t2 = { ...t2, ...this._getAdHocHeaderEntries(e2) }), t2;
      }, Vu.prototype._createEntries = function(e2, t2) {
        var n2 = {}, i2 = this;
        return g(t2, function(t3) {
          n2[t3.actionName] = i2._createEntry(t3, e2);
        }), n2;
      }, Vu.prototype._createSequenceFlowEntries = function(e2, t2) {
        var n2 = Br(e2), i2 = {}, r2 = this._modeling, o2 = this._moddle, a2 = this;
        return g(t2, function(t3) {
          switch (t3.actionName) {
            case "replace-with-default-flow":
              n2.sourceRef.default !== n2 && (Mr(n2.sourceRef, "bpmn:ExclusiveGateway") || Mr(n2.sourceRef, "bpmn:InclusiveGateway") || Mr(n2.sourceRef, "bpmn:ComplexGateway") || Mr(n2.sourceRef, "bpmn:Activity")) && (i2 = { ...i2, [t3.actionName]: a2._createEntry(t3, e2, function() {
                r2.updateProperties(e2.source, { default: n2 });
              }) });
              break;
            case "replace-with-conditional-flow":
              !n2.conditionExpression && Mr(n2.sourceRef, "bpmn:Activity") && (i2 = { ...i2, [t3.actionName]: a2._createEntry(t3, e2, function() {
                var t4 = o2.create("bpmn:FormalExpression", { body: "" });
                r2.updateProperties(e2, { conditionExpression: t4 });
              }) });
              break;
            default:
              Mr(n2.sourceRef, "bpmn:Activity") && n2.conditionExpression && (i2 = { ...i2, [t3.actionName]: a2._createEntry(t3, e2, function() {
                r2.updateProperties(e2, { conditionExpression: void 0 });
              }) }), (Mr(n2.sourceRef, "bpmn:ExclusiveGateway") || Mr(n2.sourceRef, "bpmn:InclusiveGateway") || Mr(n2.sourceRef, "bpmn:ComplexGateway") || Mr(n2.sourceRef, "bpmn:Activity")) && n2.sourceRef.default === n2 && (i2 = { ...i2, [t3.actionName]: a2._createEntry(t3, e2, function() {
                r2.updateProperties(e2.source, { default: void 0 });
              }) });
          }
        }), i2;
      }, Vu.prototype._createEntry = function(e2, t2, n2) {
        var i2 = this._translate, r2 = this._bpmnReplace.replaceElement, o2 = e2.label;
        return o2 && "function" == typeof o2 && (o2 = o2(t2)), n2 = n2 || function() {
          return r2(t2, e2.target);
        }, { label: i2(o2), className: e2.className, action: n2 };
      }, Vu.prototype._getLoopCharacteristicsHeaderEntries = function(e2) {
        var t2 = this, n2 = this._translate;
        function i2(n3, i3) {
          var r3 = Br(e2).loopCharacteristics;
          i3.active ? r3 = void 0 : (!a(i3.options.isSequential) && r3 && Mr(r3, i3.options.loopCharacteristics) || (r3 = t2._moddle.create(i3.options.loopCharacteristics)), r3.isSequential = i3.options.isSequential), t2._modeling.updateProperties(e2, { loopCharacteristics: r3 });
        }
        var r2, o2, s2, c2 = Br(e2).loopCharacteristics;
        return c2 && (r2 = c2.isSequential, o2 = void 0 === c2.isSequential, s2 = void 0 !== c2.isSequential && !c2.isSequential), { "toggle-parallel-mi": { className: "bpmn-icon-parallel-mi-marker", title: n2("Parallel Multi Instance"), active: s2, action: i2, options: { loopCharacteristics: "bpmn:MultiInstanceLoopCharacteristics", isSequential: false } }, "toggle-sequential-mi": { className: "bpmn-icon-sequential-mi-marker", title: n2("Sequential Multi Instance"), active: r2, action: i2, options: { loopCharacteristics: "bpmn:MultiInstanceLoopCharacteristics", isSequential: true } }, "toggle-loop": { className: "bpmn-icon-loop-marker", title: n2("Loop"), active: o2, action: i2, options: { loopCharacteristics: "bpmn:StandardLoopCharacteristics" } } };
      }, Vu.prototype._getCollectionHeaderEntries = function(e2) {
        var t2 = this, n2 = this._translate, i2 = e2.businessObject.dataObjectRef;
        if (!i2) return {};
        var r2 = i2.isCollection;
        return { "toggle-is-collection": { className: "bpmn-icon-parallel-mi-marker", title: n2("Collection"), active: r2, action: function(n3, r3) {
          t2._modeling.updateModdleProperties(e2, i2, { isCollection: !r3.active });
        } } };
      }, Vu.prototype._getParticipantMultiplicityHeaderEntries = function(e2) {
        var t2 = this, n2 = this._bpmnFactory, i2 = this._translate;
        var r2 = e2.businessObject.participantMultiplicity;
        return { "toggle-participant-multiplicity": { className: "bpmn-icon-parallel-mi-marker", title: i2("Participant Multiplicity"), active: !!r2, action: function(i3, r3) {
          var o2;
          r3.active || (o2 = n2.create("bpmn:ParticipantMultiplicity")), t2._modeling.updateProperties(e2, { participantMultiplicity: o2 });
        } } };
      }, Vu.prototype._getAdHocHeaderEntries = function(e2) {
        var t2 = this._translate, n2 = Mr(Br(e2), "bpmn:AdHocSubProcess"), i2 = this._bpmnReplace.replaceElement;
        return { "toggle-adhoc": { className: "bpmn-icon-ad-hoc-marker", title: t2("Ad-hoc"), active: n2, action: function(t3, r2) {
          return i2(e2, n2 ? { type: "bpmn:SubProcess" } : { type: "bpmn:AdHocSubProcess" }, { autoResize: false, layoutConnection: false });
        } } };
      };
      var Wu = { __depends__: [qc, Pu, vp], __init__: ["replaceMenuProvider"], replaceMenuProvider: ["type", Vu] }, Uu = Math.max, qu = Math.min, Ku = 20;
      function Yu(e2, t2) {
        return { top: e2.top - t2.top, right: e2.right - t2.right, bottom: e2.bottom - t2.bottom, left: e2.left - t2.left };
      }
      function Xu(e2, t2, n2) {
        var i2 = t2[e2], r2 = n2.min && n2.min[e2], o2 = n2.max && n2.max[e2];
        return u(r2) && (i2 = (/top|left/.test(e2) ? qu : Uu)(i2, r2)), u(o2) && (i2 = (/top|left/.test(e2) ? Uu : qu)(i2, o2)), i2;
      }
      function Zu(e2, t2) {
        return void 0 !== e2 ? e2 : Ku;
      }
      function Qu(e2) {
        return !e2.waypoints && "label" !== e2.type;
      }
      function Ju(e2, t2) {
        var n2;
        if ((n2 = void 0 === e2.length ? y(e2.children, Qu) : e2).length) return function(e3, t3) {
          var n3, i2, r2, o2;
          return "object" == typeof t3 ? (n3 = Zu(t3.left), i2 = Zu(t3.right), r2 = Zu(t3.top), o2 = Zu(t3.bottom)) : n3 = i2 = r2 = o2 = Zu(t3), { x: e3.x - n3, y: e3.y - r2, width: e3.width + n3 + i2, height: e3.height + r2 + o2 };
        }(vt(n2), t2);
      }
      var eh = Math.abs;
      var th = ["bpmn:Participant", "bpmn:Process", "bpmn:SubProcess"], nh = 30;
      function ih(e2, t2) {
        return t2 = t2 || [], e2.children.filter(function(e3) {
          Mr(e3, "bpmn:Lane") && (ih(e3, t2), t2.push(e3));
        }), t2;
      }
      function rh(e2) {
        return e2.children.filter(function(e3) {
          return Mr(e3, "bpmn:Lane");
        });
      }
      function oh(e2) {
        return hp(e2, th) || e2;
      }
      function ah(e2, t2) {
        var n2 = oh(e2), i2 = ih(n2, Mr(n2, "bpmn:Process") ? [] : [n2]), r2 = gn(e2), o2 = gn(t2), a2 = function(e3, t3) {
          return Yu(gn(t3), gn(e3));
        }(e2, t2), s2 = [];
        return i2.forEach(function(t3) {
          if (t3 !== e2) {
            var n3, i3, c2 = 0, p2 = a2.right, l2 = 0, u2 = a2.left, h2 = gn(t3);
            a2.top && (eh(h2.bottom - r2.top) < 10 && (l2 = o2.top - h2.bottom), eh(h2.top - r2.top) < 5 && (c2 = o2.top - h2.top)), a2.bottom && (eh(h2.top - r2.bottom) < 10 && (c2 = o2.bottom - h2.top), eh(h2.bottom - r2.bottom) < 5 && (l2 = o2.bottom - h2.bottom)), (c2 || p2 || l2 || u2) && s2.push({ shape: t3, newBounds: (n3 = t3, i3 = { top: c2, right: p2, bottom: l2, left: u2 }, { x: n3.x + (i3.left || 0), y: n3.y + (i3.top || 0), width: n3.width - (i3.left || 0) + (i3.right || 0), height: n3.height - (i3.top || 0) + (i3.bottom || 0) }) });
          }
        }), s2;
      }
      function sh(e2, t2, n2, i2, r2, o2, a2, s2, c2, p2, l2, u2) {
        e2 = e2 || {}, i2.registerProvider(this), this._contextPad = i2, this._modeling = r2, this._elementFactory = o2, this._connect = a2, this._create = s2, this._popupMenu = c2, this._canvas = p2, this._rules = l2, this._translate = u2, false !== e2.autoPlace && (this._autoPlace = t2.get("autoPlace", false)), n2.on("create.end", 250, function(e3) {
          var t3 = e3.context.shape;
          if (zo(e3) && i2.isOpen(t3)) {
            var n3 = i2.getEntries(t3);
            n3.replace && n3.replace.action.click(e3, t3);
          }
        });
      }
      function ch(e2, t2, n2) {
        var i2 = e2.$instanceOf(t2), r2 = false;
        return g(e2.eventDefinitions || [], function(e3) {
          e3.$type === n2 && (r2 = true);
        }), i2 && r2;
      }
      sh.$inject = ["config.contextPad", "injector", "eventBus", "contextPad", "modeling", "elementFactory", "connect", "create", "popupMenu", "canvas", "rules", "translate"], sh.prototype.getMultiElementContextPadEntries = function(e2) {
        var t2 = this._modeling, n2 = {};
        return this._isDeleteAllowed(e2) && L(n2, { delete: { group: "edit", className: "bpmn-icon-trash", title: this._translate("Remove"), action: { click: function(e3, n3) {
          t2.removeElements(n3.slice());
        } } } }), n2;
      }, sh.prototype._isDeleteAllowed = function(e2) {
        var t2 = this._rules.allowed("elements.delete", { elements: e2 });
        return p(t2) ? _(t2, function(e3) {
          return n2 = e3, -1 !== t2.indexOf(n2);
          var n2;
        }) : t2;
      }, sh.prototype.getContextPadEntries = function(e2) {
        var t2 = this._contextPad, n2 = this._modeling, i2 = this._elementFactory, r2 = this._connect, o2 = this._create, a2 = this._popupMenu, s2 = this._rules, c2 = this._autoPlace, l2 = this._translate, u2 = {};
        if ("label" === e2.type) return u2;
        var h2 = e2.businessObject;
        function d2(e3, t3) {
          r2.start(e3, t3);
        }
        function f2(e3, t3, n3, r3) {
          function a3(t4, n4) {
            var a4 = i2.createShape(L({ type: e3 }, r3));
            o2.start(t4, a4, { source: n4 });
          }
          "string" != typeof n3 && (r3 = n3, n3 = l2("Append {type}", { type: e3.replace(/^bpmn:/, "") }));
          var s3 = c2 ? function(t4, n4) {
            var o3 = i2.createShape(L({ type: e3 }, r3));
            c2.append(n4, o3);
          } : a3;
          return { group: "model", className: t3, title: n3, action: { dragstart: a3, click: s3 } };
        }
        function m2(e3) {
          return function(i3, r3) {
            n2.splitLane(r3, e3), t2.open(r3, true);
          };
        }
        if (Dr(h2, ["bpmn:Lane", "bpmn:Participant"]) && Zr(e2)) {
          var v2 = rh(e2);
          L(u2, { "lane-insert-above": { group: "lane-insert-above", className: "bpmn-icon-lane-insert-above", title: l2("Add Lane above"), action: { click: function(e3, t3) {
            n2.addLane(t3, "top");
          } } } }), v2.length < 2 && (e2.height >= 120 && L(u2, { "lane-divide-two": { group: "lane-divide", className: "bpmn-icon-lane-divide-two", title: l2("Divide into two Lanes"), action: { click: m2(2) } } }), e2.height >= 180 && L(u2, { "lane-divide-three": { group: "lane-divide", className: "bpmn-icon-lane-divide-three", title: l2("Divide into three Lanes"), action: { click: m2(3) } } })), L(u2, { "lane-insert-below": { group: "lane-insert-below", className: "bpmn-icon-lane-insert-below", title: l2("Add Lane below"), action: { click: function(e3, t3) {
            n2.addLane(t3, "bottom");
          } } } });
        }
        Mr(h2, "bpmn:FlowNode") && (Mr(h2, "bpmn:EventBasedGateway") ? L(u2, { "append.receive-task": f2("bpmn:ReceiveTask", "bpmn-icon-receive-task", l2("Append ReceiveTask")), "append.message-intermediate-event": f2("bpmn:IntermediateCatchEvent", "bpmn-icon-intermediate-event-catch-message", l2("Append MessageIntermediateCatchEvent"), { eventDefinitionType: "bpmn:MessageEventDefinition" }), "append.timer-intermediate-event": f2("bpmn:IntermediateCatchEvent", "bpmn-icon-intermediate-event-catch-timer", l2("Append TimerIntermediateCatchEvent"), { eventDefinitionType: "bpmn:TimerEventDefinition" }), "append.condition-intermediate-event": f2("bpmn:IntermediateCatchEvent", "bpmn-icon-intermediate-event-catch-condition", l2("Append ConditionIntermediateCatchEvent"), { eventDefinitionType: "bpmn:ConditionalEventDefinition" }), "append.signal-intermediate-event": f2("bpmn:IntermediateCatchEvent", "bpmn-icon-intermediate-event-catch-signal", l2("Append SignalIntermediateCatchEvent"), { eventDefinitionType: "bpmn:SignalEventDefinition" }) }) : ch(h2, "bpmn:BoundaryEvent", "bpmn:CompensateEventDefinition") ? L(u2, { "append.compensation-activity": f2("bpmn:Task", "bpmn-icon-task", l2("Append compensation activity"), { isForCompensation: true }) }) : Mr(h2, "bpmn:EndEvent") || h2.isForCompensation || ch(h2, "bpmn:IntermediateThrowEvent", "bpmn:LinkEventDefinition") || Qr(h2) || L(u2, { "append.end-event": f2("bpmn:EndEvent", "bpmn-icon-end-event-none", l2("Append EndEvent")), "append.gateway": f2("bpmn:ExclusiveGateway", "bpmn-icon-gateway-none", l2("Append Gateway")), "append.append-task": f2("bpmn:Task", "bpmn-icon-task", l2("Append Task")), "append.intermediate-event": f2("bpmn:IntermediateThrowEvent", "bpmn-icon-intermediate-event-none", l2("Append Intermediate/Boundary Event")) })), a2.isEmpty(e2, "bpmn-replace") || L(u2, { replace: { group: "edit", className: "bpmn-icon-screw-wrench", title: l2("Change type"), action: { click: function(e3, n3) {
          var i3 = L(function(e4) {
            var n4 = t2.getPad(e4).html.getBoundingClientRect();
            return { x: n4.left, y: n4.bottom + 5 };
          }(n3), { cursor: { x: e3.x, y: e3.y } });
          a2.open(n3, "bpmn-replace", i3, { title: l2("Change element"), width: 300, search: true });
        } } } }), Mr(h2, "bpmn:SequenceFlow") && L(u2, { "append.text-annotation": f2("bpmn:TextAnnotation", "bpmn-icon-text-annotation") }), Dr(h2, ["bpmn:FlowNode", "bpmn:InteractionNode", "bpmn:DataObjectReference", "bpmn:DataStoreReference"]) && L(u2, { "append.text-annotation": f2("bpmn:TextAnnotation", "bpmn-icon-text-annotation"), connect: { group: "connect", className: "bpmn-icon-connection-multi", title: l2("Connect using " + (h2.isForCompensation ? "" : "Sequence/MessageFlow or ") + "Association"), action: { click: d2, dragstart: d2 } } }), Mr(h2, "bpmn:TextAnnotation") && L(u2, { connect: { group: "connect", className: "bpmn-icon-connection-multi", title: l2("Connect using Association"), action: { click: d2, dragstart: d2 } } }), Dr(h2, ["bpmn:DataObjectReference", "bpmn:DataStoreReference"]) && L(u2, { connect: { group: "connect", className: "bpmn-icon-connection-multi", title: l2("Connect using DataInputAssociation"), action: { click: d2, dragstart: d2 } } }), Mr(h2, "bpmn:Group") && L(u2, { "append.text-annotation": f2("bpmn:TextAnnotation", "bpmn-icon-text-annotation") });
        var y2 = s2.allowed("elements.delete", { elements: [e2] });
        return p(y2) && (y2 = y2[0] === e2), y2 && L(u2, { delete: { group: "edit", className: "bpmn-icon-trash", title: l2("Remove"), action: { click: function(e3, t3) {
          n2.removeElements([t3]);
        } } } }), u2;
      };
      var ph = { __depends__: [Vl, js, ta, Ol, ru, Wu], __init__: ["contextPadProvider"], contextPadProvider: ["type", sh] }, lh = { horizontal: ["x", "width"], vertical: ["y", "height"] };
      function uh(e2, t2) {
        this._modeling = e2, this._filters = [], this.registerFilter(function(e3) {
          var n2 = t2.allowed("elements.distribute", { elements: e3 });
          return p(n2) ? n2 : n2 ? e3 : [];
        });
      }
      uh.$inject = ["modeling", "rules"], uh.prototype.registerFilter = function(e2) {
        if ("function" != typeof e2) throw new Error("the filter has to be a function");
        this._filters.push(e2);
      }, uh.prototype.trigger = function(e2, t2) {
        var n2, i2, r2 = this._modeling;
        if (!(e2.length < 3 || (this._setOrientation(t2), i2 = this._filterElements(e2), (n2 = this._createGroups(i2)).length <= 2))) return r2.distributeElements(n2, this._axis, this._dimension), n2;
      }, uh.prototype._filterElements = function(e2) {
        var t2 = this._filters, n2 = this._axis, i2 = this._dimension, r2 = [].concat(e2);
        return t2.length ? (g(t2, function(e3) {
          r2 = e3(r2, n2, i2);
        }), r2) : e2;
      }, uh.prototype._createGroups = function(e2) {
        var t2 = [], n2 = this, i2 = this._axis, r2 = this._dimension;
        if (!i2) throw new Error('must have a defined "axis" and "dimension"');
        return g(k(e2, i2), function(e3, o2) {
          var a2, s2 = n2._findRange(e3, i2, r2), c2 = t2[t2.length - 1];
          c2 && n2._hasIntersection(c2.range, s2) ? t2[t2.length - 1].elements.push(e3) : (a2 = { range: s2, elements: [e3] }, t2.push(a2));
        }), t2;
      }, uh.prototype._setOrientation = function(e2) {
        var t2 = lh[e2];
        this._axis = t2[0], this._dimension = t2[1];
      }, uh.prototype._hasIntersection = function(e2, t2) {
        return Math.max(e2.min, e2.max) >= Math.min(t2.min, t2.max) && Math.min(e2.min, e2.max) <= Math.max(t2.min, t2.max);
      }, uh.prototype._findRange = function(e2) {
        var t2 = e2[this._axis];
        return { min: t2 + 5, max: t2 + e2[this._dimension] - 5 };
      };
      var hh = { __init__: ["distributeElements"], distributeElements: ["type", uh] };
      function dh(e2) {
        Qc.call(this, e2);
      }
      dh.$inject = ["eventBus"], e(dh, Qc), dh.prototype.init = function() {
        this.addRule("elements.distribute", function(e2) {
          var t2 = e2.elements;
          return !((t2 = ut(t2 = y(t2, function(e3) {
            var t3 = Dr(e3, ["bpmn:Association", "bpmn:BoundaryEvent", "bpmn:DataInputAssociation", "bpmn:DataOutputAssociation", "bpmn:Lane", "bpmn:MessageFlow", "bpmn:SequenceFlow", "bpmn:TextAnnotation"]);
            return !(e3.labelTarget || t3);
          }))).length < 3) && t2;
        });
      };
      var fh = { horizontal: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 1800">\n                <polyline points="450 400 450 150 1350 150 1350 400" style="fill:none;stroke:currentColor;stroke-width:100;stroke-linejoin:round;"/>\n                <rect x="150" y="450" width="600" height="1200" rx="1" style="fill:none;stroke:currentColor;stroke-width:100;"></rect>\n                <rect x="1050" y="450" width="600" height="800" rx="1" style="fill:currentColor;stroke:currentColor;stroke-width:100;opacity:.5;"></rect>\n              </svg>', vertical: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 1800">\n              <polyline points="400 1350 150 1350 150 450 400 450" style="fill:none;stroke:currentColor;stroke-width:100;stroke-linejoin:round;"/>\n              <rect x="450" y="150" width="1200" height="600" rx="1" style="fill:none;stroke:currentColor;stroke-width:100;"></rect>\n              <rect x="450" y="1050" width="800" height="600" rx="1" style="fill:currentColor;stroke:currentColor;stroke-width:100;opacity:.5;"></rect>\n            </svg>' };
      function mh(e2, t2, n2, i2) {
        this._distributeElements = t2, this._translate = n2, this._popupMenu = e2, this._rules = i2, e2.registerProvider("align-elements", 900, this);
      }
      mh.$inject = ["popupMenu", "distributeElements", "translate", "rules"], mh.prototype.getPopupMenuEntries = function(e2) {
        var t2 = {};
        return this._isAllowed(e2) && L(t2, this._getEntries(e2)), t2;
      }, mh.prototype._isAllowed = function(e2) {
        return this._rules.allowed("elements.distribute", { elements: e2 });
      }, mh.prototype._getEntries = function(e2) {
        var t2 = this._distributeElements, n2 = this._translate, i2 = this._popupMenu;
        return { "distribute-elements-horizontal": { group: "distribute", title: n2("Distribute elements horizontally"), className: "bjs-align-elements-menu-entry", imageHtml: fh.horizontal, action: function(n3, r2) {
          t2.trigger(e2, "horizontal"), i2.close();
        } }, "distribute-elements-vertical": { group: "distribute", title: n2("Distribute elements vertically"), imageHtml: fh.vertical, action: function(n3, r2) {
          t2.trigger(e2, "vertical"), i2.close();
        } } };
      };
      var vh = { __depends__: [qc, hh], __init__: ["bpmnDistributeElements", "distributeElementsMenuProvider"], bpmnDistributeElements: ["type", dh], distributeElementsMenuProvider: ["type", mh] }, yh = "is not a registered action";
      function gh(e2, t2) {
        this._actions = {};
        var n2 = this;
        e2.on("diagram.init", function() {
          n2._registerDefaultActions(t2), e2.fire("editorActions.init", { editorActions: n2 });
        });
      }
      function bh(e2, t2) {
        return new Error(e2 + " " + t2);
      }
      gh.$inject = ["eventBus", "injector"], gh.prototype._registerDefaultActions = function(e2) {
        var t2 = e2.get("commandStack", false), n2 = e2.get("modeling", false), i2 = e2.get("selection", false), r2 = e2.get("zoomScroll", false), o2 = e2.get("copyPaste", false), a2 = e2.get("canvas", false), s2 = e2.get("rules", false), c2 = e2.get("keyboardMove", false), l2 = e2.get("keyboardMoveSelection", false);
        t2 && (this.register("undo", function() {
          t2.undo();
        }), this.register("redo", function() {
          t2.redo();
        })), o2 && i2 && this.register("copy", function() {
          var e3 = i2.get();
          if (e3.length) return o2.copy(e3);
        }), o2 && this.register("paste", function() {
          o2.paste();
        }), r2 && this.register("stepZoom", function(e3) {
          r2.stepZoom(e3.value);
        }), a2 && this.register("zoom", function(e3) {
          a2.zoom(e3.value);
        }), n2 && i2 && s2 && this.register("removeSelection", function() {
          var e3 = i2.get();
          if (e3.length) {
            var t3, r3 = s2.allowed("elements.delete", { elements: e3 });
            false !== r3 && (t3 = p(r3) ? r3 : e3).length && n2.removeElements(t3.slice());
          }
        }), c2 && this.register("moveCanvas", function(e3) {
          c2.moveCanvas(e3);
        }), l2 && this.register("moveSelection", function(e3) {
          l2.moveSelection(e3.direction, e3.accelerated);
        });
      }, gh.prototype.trigger = function(e2, t2) {
        if (!this._actions[e2]) throw bh(e2, yh);
        return this._actions[e2](t2);
      }, gh.prototype.register = function(e2, t2) {
        var n2 = this;
        if ("string" == typeof e2) return this._registerAction(e2, t2);
        g(e2, function(e3, t3) {
          n2._registerAction(t3, e3);
        });
      }, gh.prototype._registerAction = function(e2, t2) {
        if (this.isRegistered(e2)) throw bh(e2, "is already registered");
        this._actions[e2] = t2;
      }, gh.prototype.unregister = function(e2) {
        if (!this.isRegistered(e2)) throw bh(e2, yh);
        this._actions[e2] = void 0;
      }, gh.prototype.getActions = function() {
        return Object.keys(this._actions);
      }, gh.prototype.isRegistered = function(e2) {
        return !!this._actions[e2];
      };
      var xh = { __init__: ["editorActions"], editorActions: ["type", gh] };
      function _h(e2) {
        e2.invoke(gh, this);
      }
      e(_h, gh), _h.$inject = ["injector"], _h.prototype._registerDefaultActions = function(e2) {
        gh.prototype._registerDefaultActions.call(this, e2);
        var t2 = e2.get("canvas", false), n2 = e2.get("elementRegistry", false), i2 = e2.get("selection", false), r2 = e2.get("spaceTool", false), o2 = e2.get("lassoTool", false), a2 = e2.get("handTool", false), s2 = e2.get("globalConnect", false), c2 = e2.get("distributeElements", false), p2 = e2.get("alignElements", false), l2 = e2.get("directEditing", false), u2 = e2.get("searchPad", false), h2 = e2.get("modeling", false), d2 = e2.get("contextPad", false);
        t2 && n2 && i2 && this._registerAction("selectElements", function() {
          var e3 = t2.getRootElement(), r3 = n2.filter(function(t3) {
            return t3 !== e3;
          });
          return i2.select(r3), r3;
        }), r2 && this._registerAction("spaceTool", function() {
          r2.toggle();
        }), o2 && this._registerAction("lassoTool", function() {
          o2.toggle();
        }), a2 && this._registerAction("handTool", function() {
          a2.toggle();
        }), s2 && this._registerAction("globalConnectTool", function() {
          s2.toggle();
        }), i2 && c2 && this._registerAction("distributeElements", function(e3) {
          var t3 = i2.get(), n3 = e3.type;
          t3.length && c2.trigger(t3, n3);
        }), i2 && p2 && this._registerAction("alignElements", function(e3) {
          var t3 = i2.get(), n3 = [], r3 = e3.type;
          t3.length && (n3 = y(t3, function(e4) {
            return !Mr(e4, "bpmn:Lane");
          }), p2.trigger(n3, r3));
        }), i2 && h2 && this._registerAction("setColor", function(e3) {
          var t3 = i2.get();
          t3.length && h2.setColor(t3, e3);
        }), i2 && l2 && this._registerAction("directEditing", function() {
          var e3 = i2.get();
          e3.length && l2.activate(e3[0]);
        }), u2 && this._registerAction("find", function() {
          u2.toggle();
        }), t2 && h2 && this._registerAction("moveToOrigin", function() {
          var e3, i3, r3 = t2.getRootElement();
          e3 = vt(i3 = Mr(r3, "bpmn:Collaboration") ? n2.filter(function(e4) {
            return Mr(e4.parent, "bpmn:Collaboration");
          }) : n2.filter(function(e4) {
            return e4 !== r3 && !Mr(e4.parent, "bpmn:SubProcess");
          })), h2.moveElements(i3, { x: -e3.x, y: -e3.y }, r3);
        }), i2 && d2 && this._registerAction("replaceElement", function(e3) {
          d2.triggerEntry("replace", "click", e3);
        });
      };
      var wh = { __depends__: [xh], editorActions: ["type", _h] };
      function Eh(e2) {
        e2.on(["create.init", "shape.move.init"], function(e3) {
          var t2 = e3.context;
          Dr(e3.shape, ["bpmn:Participant", "bpmn:SubProcess", "bpmn:TextAnnotation"]) && (t2.gridSnappingContext || (t2.gridSnappingContext = {}), t2.gridSnappingContext.snapLocation = "top-left");
        });
      }
      Eh.$inject = ["eventBus"];
      function Sh(e2, t2, n2) {
        return n2 || (n2 = "round"), Math[n2](e2 / t2) * t2;
      }
      function Ch(e2, t2, n2) {
        var i2 = !n2 || false !== n2.active;
        this._eventBus = t2;
        var r2 = this;
        t2.on("diagram.init", 800, function() {
          r2.setActive(i2);
        }), t2.on(["create.move", "create.end", "bendpoint.move.move", "bendpoint.move.end", "connect.move", "connect.end", "connectionSegment.move.move", "connectionSegment.move.end", "resize.move", "resize.end", "shape.move.move", "shape.move.end"], 1200, function(t3) {
          var n3 = t3.originalEvent;
          if (!(!r2.active || n3 && $a(n3))) {
            var i3 = t3.context, o2 = i3.gridSnappingContext;
            o2 || (o2 = i3.gridSnappingContext = {}), ["x", "y"].forEach(function(n4) {
              var i4 = {}, o3 = function(e3, t4, n5) {
                var i5 = e3.context, r3 = e3.shape, o4 = i5.gridSnappingContext, a3 = o4.snapLocation, s2 = o4.snapOffset;
                if (s2 && u(s2[t4])) return s2[t4];
                s2 || (s2 = o4.snapOffset = {});
                u(s2[t4]) || (s2[t4] = 0);
                if (!r3) return s2[t4];
                n5.get(r3.id) || (Rh(t4) ? s2[t4] += r3[t4] + r3.width / 2 : s2[t4] += r3[t4] + r3.height / 2);
                if (!a3) return s2[t4];
                "x" === t4 ? /left/.test(a3) ? s2[t4] -= r3.width / 2 : /right/.test(a3) && (s2[t4] += r3.width / 2) : /top/.test(a3) ? s2[t4] -= r3.height / 2 : /bottom/.test(a3) && (s2[t4] += r3.height / 2);
                return s2[t4];
              }(t3, n4, e2);
              o3 && (i4.offset = o3);
              var a2 = function(e3, t4) {
                var n5 = e3.context, i5 = n5.createConstraints, r3 = n5.resizeConstraints || {}, o4 = n5.gridSnappingContext, a3 = o4.snapConstraints;
                if (a3 && a3[t4]) return a3[t4];
                a3 || (a3 = o4.snapConstraints = {});
                a3[t4] || (a3[t4] = {});
                var s2 = n5.direction;
                i5 && (Rh(t4) ? (a3.x.min = i5.left, a3.x.max = i5.right) : (a3.y.min = i5.top, a3.y.max = i5.bottom));
                var c2 = r3.min, p2 = r3.max;
                c2 && (Rh(t4) ? Th(s2) ? a3.x.max = c2.left : a3.x.min = c2.right : Ph(s2) ? a3.y.max = c2.top : a3.y.min = c2.bottom);
                p2 && (Rh(t4) ? Th(s2) ? a3.x.min = p2.left : a3.x.max = p2.right : Ph(s2) ? a3.y.min = p2.top : a3.y.max = p2.bottom);
                return a3[t4];
              }(t3, n4);
              a2 && L(i4, a2), El(t3, n4) || r2.snapEvent(t3, n4, i4);
            });
          }
        });
      }
      function Rh(e2) {
        return "x" === e2;
      }
      function Ph(e2) {
        return -1 !== e2.indexOf("n");
      }
      function Th(e2) {
        return -1 !== e2.indexOf("w");
      }
      function kh(e2, t2) {
        ua.call(this, e2), this._gridSnapping = t2;
        var n2 = this;
        this.preExecute("shape.resize", function(e3) {
          var t3 = e3.context, i2 = (t3.hints || {}).autoResize;
          if (i2) {
            var r2 = t3.shape, o2 = t3.newBounds;
            d(i2) ? t3.newBounds = n2.snapComplex(o2, i2) : t3.newBounds = n2.snapSimple(r2, o2);
          }
        });
      }
      Ch.prototype.snapEvent = function(e2, t2, n2) {
        Sl(e2, t2, this.snapValue(e2[t2], n2));
      }, Ch.prototype.getGridSpacing = function() {
        return 10;
      }, Ch.prototype.snapValue = function(e2, t2) {
        var n2, i2, r2 = 0;
        return t2 && t2.offset && (r2 = t2.offset), e2 = Sh(e2 += r2, 10), t2 && t2.min && u(n2 = t2.min) && (n2 = Sh(n2 + r2, 10, "ceil"), e2 = Math.max(e2, n2)), t2 && t2.max && u(i2 = t2.max) && (i2 = Sh(i2 + r2, 10, "floor"), e2 = Math.min(e2, i2)), e2 -= r2;
      }, Ch.prototype.isActive = function() {
        return this.active;
      }, Ch.prototype.setActive = function(e2) {
        this.active = e2, this._eventBus.fire("gridSnapping.toggle", { active: e2 });
      }, Ch.prototype.toggleActive = function() {
        this.setActive(!this.active);
      }, Ch.$inject = ["elementRegistry", "eventBus", "config.gridSnapping"], kh.$inject = ["eventBus", "gridSnapping", "modeling"], e(kh, ua), kh.prototype.snapSimple = function(e2, t2) {
        var n2 = this._gridSnapping;
        return t2.width = n2.snapValue(t2.width, { min: t2.width }), t2.height = n2.snapValue(t2.height, { min: t2.height }), t2.x = e2.x + e2.width / 2 - t2.width / 2, t2.y = e2.y + e2.height / 2 - t2.height / 2, t2;
      }, kh.prototype.snapComplex = function(e2, t2) {
        return /w|e/.test(t2) && (e2 = this.snapHorizontally(e2, t2)), /n|s/.test(t2) && (e2 = this.snapVertically(e2, t2)), e2;
      }, kh.prototype.snapHorizontally = function(e2, t2) {
        var n2 = this._gridSnapping, i2 = /w/.test(t2), r2 = /e/.test(t2), o2 = {};
        return o2.width = n2.snapValue(e2.width, { min: e2.width }), r2 && (i2 ? (o2.x = n2.snapValue(e2.x, { max: e2.x }), o2.width += n2.snapValue(e2.x - o2.x, { min: e2.x - o2.x })) : e2.x = e2.x + e2.width - o2.width), L(e2, o2), e2;
      }, kh.prototype.snapVertically = function(e2, t2) {
        var n2 = this._gridSnapping, i2 = /n/.test(t2), r2 = /s/.test(t2), o2 = {};
        return o2.height = n2.snapValue(e2.height, { min: e2.height }), i2 && (r2 ? (o2.y = n2.snapValue(e2.y, { max: e2.y }), o2.height += n2.snapValue(e2.y - o2.y, { min: e2.y - o2.y })) : e2.y = e2.y + e2.height - o2.height), L(e2, o2), e2;
      };
      function Ah(e2, t2) {
        e2.on(["spaceTool.move", "spaceTool.end"], 2e3, function(e3) {
          var n2, i2 = e3.context;
          i2.initialized && ("x" === i2.axis ? (n2 = t2.snapValue(e3.dx), e3.x = e3.x + n2 - e3.dx, e3.dx = n2) : (n2 = t2.snapValue(e3.dy), e3.y = e3.y + n2 - e3.dy, e3.dy = n2));
        });
      }
      Ah.$inject = ["eventBus", "gridSnapping"];
      var Mh = { __depends__: [{ __init__: ["gridSnappingResizeBehavior", "gridSnappingSpaceToolBehavior"], gridSnappingResizeBehavior: ["type", kh], gridSnappingSpaceToolBehavior: ["type", Ah] }], __init__: ["gridSnapping"], gridSnapping: ["type", Ch] };
      function Dh(e2, t2) {
        e2.on("autoPlace", 2e3, function(e3) {
          var n2 = e3.source, i2 = _n(n2), r2 = e3.shape, o2 = dp(n2, r2);
          return ["x", "y"].forEach(function(e4) {
            var n3 = {};
            o2[e4] !== i2[e4] && (o2[e4] > i2[e4] ? n3.min = o2[e4] : n3.max = o2[e4], Mr(r2, "bpmn:TextAnnotation") && (!/* @__PURE__ */ function(e5) {
              return "x" === e5;
            }(e4) ? n3.offset = -r2.height / 2 : n3.offset = -r2.width / 2), o2[e4] = t2.snapValue(o2[e4], n3));
          }), o2;
        });
      }
      Dh.$inject = ["eventBus", "gridSnapping"];
      function Bh(e2, t2, n2) {
        t2.on(["create.start", "shape.move.start"], 1750, function(t3) {
          var i2 = t3.context, r2 = i2.shape, o2 = e2.getRootElement();
          Mr(r2, "bpmn:Participant") && Mr(o2, "bpmn:Process") && o2.children.length && (i2.createConstraints && (r2.width = n2.snapValue(r2.width, { min: r2.width }), r2.height = n2.snapValue(r2.height, { min: r2.height })));
        });
      }
      Bh.$inject = ["canvas", "eventBus", "gridSnapping"];
      function Nh(e2, t2, n2) {
        ua.call(this, e2), this._gridSnapping = t2;
        var i2 = this;
        this.postExecuted(["connection.create", "connection.layout"], 3e3, function(e3) {
          var t3 = e3.context, r2 = t3.connection, o2 = t3.hints || {}, a2 = r2.waypoints;
          o2.connectionStart || o2.connectionEnd || false === o2.createElementsBehavior || function(e4) {
            return e4.length > 3;
          }(a2) && n2.updateWaypoints(r2, i2.snapMiddleSegments(a2));
        });
      }
      function Oh(e2, t2, n2) {
        var i2 = Tt(t2, n2), r2 = {};
        return /* @__PURE__ */ function(e3) {
          return "h" === e3;
        }(i2) && (r2.y = e2.snapValue(t2.y)), /* @__PURE__ */ function(e3) {
          return "v" === e3;
        }(i2) && (r2.x = e2.snapValue(t2.x)), ("x" in r2 || "y" in r2) && (t2 = L({}, t2, r2), n2 = L({}, n2, r2)), [t2, n2];
      }
      Nh.$inject = ["eventBus", "gridSnapping", "modeling"], e(Nh, ua), Nh.prototype.snapMiddleSegments = function(e2) {
        var t2, n2 = this._gridSnapping;
        e2 = e2.slice();
        for (var i2 = 1; i2 < e2.length - 2; i2++) t2 = Oh(n2, e2[i2], e2[i2 + 1]), e2[i2] = t2[0], e2[i2 + 1] = t2[1];
        return e2;
      };
      var jh = { __depends__: [Mh, { __init__: ["gridSnappingAutoPlaceBehavior", "gridSnappingParticipantBehavior", "gridSnappingLayoutConnectionBehavior"], gridSnappingAutoPlaceBehavior: ["type", Dh], gridSnappingParticipantBehavior: ["type", Bh], gridSnappingLayoutConnectionBehavior: ["type", Nh] }], __init__: ["bpmnGridSnapping"], bpmnGridSnapping: ["type", Eh] };
      function Lh(e2, t2) {
        this._interactionEvents = t2;
        var n2 = this;
        e2.on(["interactionEvents.createHit", "interactionEvents.updateHit"], function(e3) {
          var t3 = e3.element, i2 = e3.gfx;
          return Mr(t3, "bpmn:Lane") ? n2._createParticipantHit(t3, i2) : Mr(t3, "bpmn:Participant") ? Zr(t3) ? n2._createParticipantHit(t3, i2) : n2._createDefaultHit(t3, i2) : Mr(t3, "bpmn:SubProcess") ? Zr(t3) ? n2._createSubProcessHit(t3, i2) : n2._createDefaultHit(t3, i2) : void 0;
        });
      }
      Lh.$inject = ["eventBus", "interactionEvents"], Lh.prototype._createDefaultHit = function(e2, t2) {
        return this._interactionEvents.removeHits(t2), this._interactionEvents.createDefaultHit(e2, t2), true;
      }, Lh.prototype._createParticipantHit = function(e2, t2) {
        return this._interactionEvents.removeHits(t2), this._interactionEvents.createBoxHit(t2, "no-move", { width: e2.width, height: e2.height }), this._interactionEvents.createBoxHit(t2, "click-stroke", { width: e2.width, height: e2.height }), this._interactionEvents.createBoxHit(t2, "all", { width: 30, height: e2.height }), true;
      }, Lh.prototype._createSubProcessHit = function(e2, t2) {
        return this._interactionEvents.removeHits(t2), this._interactionEvents.createBoxHit(t2, "no-move", { width: e2.width, height: e2.height }), this._interactionEvents.createBoxHit(t2, "click-stroke", { width: e2.width, height: e2.height }), this._interactionEvents.createBoxHit(t2, "all", { width: e2.width, height: 30 }), true;
      };
      var Ih = { __init__: ["bpmnInteractionEvents"], bpmnInteractionEvents: ["type", Lh] };
      function $h(e2) {
        e2.invoke(Ua, this);
      }
      e($h, Ua), $h.$inject = ["injector"], $h.prototype.registerBindings = function(e2, t2) {
        function n2(n3, i2) {
          t2.isRegistered(n3) && e2.addListener(i2);
        }
        Ua.prototype.registerBindings.call(this, e2, t2), n2("selectElements", function(n3) {
          var i2 = n3.keyEvent;
          if (e2.isKey(["a", "A"], i2) && e2.isCmd(i2)) return t2.trigger("selectElements"), true;
        }), n2("find", function(n3) {
          var i2 = n3.keyEvent;
          if (e2.isKey(["f", "F"], i2) && e2.isCmd(i2)) return t2.trigger("find"), true;
        }), n2("spaceTool", function(n3) {
          var i2 = n3.keyEvent;
          if (!e2.hasModifier(i2)) return e2.isKey(["s", "S"], i2) ? (t2.trigger("spaceTool"), true) : void 0;
        }), n2("lassoTool", function(n3) {
          var i2 = n3.keyEvent;
          if (!e2.hasModifier(i2)) return e2.isKey(["l", "L"], i2) ? (t2.trigger("lassoTool"), true) : void 0;
        }), n2("handTool", function(n3) {
          var i2 = n3.keyEvent;
          if (!e2.hasModifier(i2)) return e2.isKey(["h", "H"], i2) ? (t2.trigger("handTool"), true) : void 0;
        }), n2("globalConnectTool", function(n3) {
          var i2 = n3.keyEvent;
          if (!e2.hasModifier(i2)) return e2.isKey(["c", "C"], i2) ? (t2.trigger("globalConnectTool"), true) : void 0;
        }), n2("directEditing", function(n3) {
          var i2 = n3.keyEvent;
          if (!e2.hasModifier(i2)) return e2.isKey(["e", "E"], i2) ? (t2.trigger("directEditing"), true) : void 0;
        }), n2("replaceElement", function(n3) {
          var i2 = n3.keyEvent;
          if (!e2.hasModifier(i2)) return e2.isKey(["r", "R"], i2) ? (t2.trigger("replaceElement", i2), true) : void 0;
        });
      };
      var Fh = { __depends__: [qa], __init__: ["keyboardBindings"], keyboardBindings: ["type", $h] }, zh = { moveSpeed: 1, moveSpeedAccelerated: 10 }, Hh = "left", Gh = "right", Vh = "down", Wh = { ArrowLeft: Hh, Left: Hh, ArrowUp: "up", Up: "up", ArrowRight: Gh, Right: Gh, ArrowDown: Vh, Down: Vh }, Uh = { left: function(e2) {
        return { x: -e2, y: 0 };
      }, up: function(e2) {
        return { x: 0, y: -e2 };
      }, right: function(e2) {
        return { x: e2, y: 0 };
      }, down: function(e2) {
        return { x: 0, y: e2 };
      } };
      function qh(e2, t2, n2, i2, r2) {
        var o2 = this;
        this._config = L({}, zh, e2 || {}), t2.addListener(1500, function(e3) {
          var n3 = e3.keyEvent, i3 = Wh[n3.key];
          if (i3 && !t2.isCmd(n3)) {
            var r3 = t2.isShift(n3);
            return o2.moveSelection(i3, r3), true;
          }
        }), this.moveSelection = function(e3, t3) {
          var o3 = r2.get();
          if (o3.length) {
            var a2 = this._config[t3 ? "moveSpeedAccelerated" : "moveSpeed"], s2 = Uh[e3](a2);
            i2.allowed("elements.move", { shapes: o3 }) && n2.moveElements(o3, s2);
          }
        };
      }
      qh.$inject = ["config.keyboardMoveSelection", "keyboard", "modeling", "rules", "selection"];
      var Kh = { __depends__: [qa, ta], __init__: ["keyboardMoveSelection"], keyboardMoveSelection: ["type", qh] };
      function Yh(e2, t2, n2, i2) {
        this._dragging = i2, this._rules = t2;
        var r2 = this;
        function o2(e3, t3) {
          var n3, i3 = e3.shape, o3 = e3.direction, a2 = e3.resizeConstraints;
          e3.delta = t3, n3 = function(e4, t4, n4) {
            var i4 = n4.x, r3 = n4.y, o4 = { x: e4.x, y: e4.y, width: e4.width, height: e4.height };
            return -1 !== t4.indexOf("n") ? (o4.y = e4.y + r3, o4.height = e4.height - r3) : -1 !== t4.indexOf("s") && (o4.height = e4.height + r3), -1 !== t4.indexOf("e") ? o4.width = e4.width + i4 : -1 !== t4.indexOf("w") && (o4.x = e4.x + i4, o4.width = e4.width - i4), o4;
          }(i3, o3, t3), e3.newBounds = function(e4, t4) {
            if (!t4) return e4;
            var n4 = gn(e4);
            return bn({ top: Xu("top", n4, t4), right: Xu("right", n4, t4), bottom: Xu("bottom", n4, t4), left: Xu("left", n4, t4) });
          }(n3, a2), e3.canExecute = r2.canResize(e3);
        }
        e2.on("resize.start", function(e3) {
          var t3, n3, i3;
          t3 = e3.context, n3 = t3.resizeConstraints, i3 = t3.minBounds, void 0 === n3 && (void 0 === i3 && (i3 = r2.computeMinResizeBox(t3)), t3.resizeConstraints = { min: gn(i3) });
        }), e2.on("resize.move", function(e3) {
          var t3 = { x: e3.dx, y: e3.dy };
          o2(e3.context, t3);
        }), e2.on("resize.end", function(e3) {
          !function(e4) {
            var t3 = e4.shape, i3 = e4.canExecute, r3 = e4.newBounds;
            if (i3) {
              if (!function(e5, t4) {
                return e5.x !== t4.x || e5.y !== t4.y || e5.width !== t4.width || e5.height !== t4.height;
              }(t3, r3 = vn(r3))) return;
              n2.resizeShape(t3, r3);
            }
          }(e3.context);
        });
      }
      function Xh(e2, t2) {
        var n2 = _n(e2), i2 = gn(e2), r2 = { x: n2.x, y: n2.y };
        return -1 !== t2.indexOf("n") ? r2.y = i2.top : -1 !== t2.indexOf("s") && (r2.y = i2.bottom), -1 !== t2.indexOf("e") ? r2.x = i2.right : -1 !== t2.indexOf("w") && (r2.x = i2.left), r2;
      }
      function Zh(e2) {
        var t2 = "resize-";
        return "n" === e2 || "s" === e2 ? t2 + "ns" : "e" === e2 || "w" === e2 ? t2 + "ew" : "nw" === e2 || "se" === e2 ? t2 + "nwse" : t2 + "nesw";
      }
      Yh.prototype.canResize = function(e2) {
        var t2 = this._rules, n2 = I(e2, ["newBounds", "shape", "delta", "direction"]);
        return t2.allowed("shape.resize", n2);
      }, Yh.prototype.activate = function(e2, t2, n2) {
        var i2, r2, o2 = this._dragging;
        if ("string" == typeof n2 && (n2 = { direction: n2 }), !(r2 = (i2 = L({ shape: t2 }, n2)).direction)) throw new Error("must provide a direction (n|w|s|e|nw|se|ne|sw)");
        o2.init(e2, Xh(t2, r2), "resize", { autoActivate: true, cursor: Zh(r2), data: { shape: t2, context: i2 } });
      }, Yh.prototype.computeMinResizeBox = function(e2) {
        var t2 = e2.shape;
        return function(e3, t3, n2, i2) {
          var r2 = gn(t3), o2 = { top: /n/.test(e3) ? r2.bottom - n2.height : r2.top, left: /w/.test(e3) ? r2.right - n2.width : r2.left, bottom: /s/.test(e3) ? r2.top + n2.height : r2.bottom, right: /e/.test(e3) ? r2.left + n2.width : r2.right }, a2 = i2 ? gn(i2) : o2;
          return bn({ top: qu(o2.top, a2.top), left: qu(o2.left, a2.left), bottom: Uu(o2.bottom, a2.bottom), right: Uu(o2.right, a2.right) });
        }(e2.direction, t2, e2.minDimensions || { width: 10, height: 10 }, Ju(t2, e2.childrenBoxPadding));
      }, Yh.$inject = ["eventBus", "rules", "modeling", "dragging"];
      var Qh = "djs-resizing", Jh = "resize-not-ok";
      function ed(e2, t2, n2) {
        e2.on("resize.move", 500, function(e3) {
          var i2, r2, o2, a2;
          i2 = e3.context, r2 = i2.shape, o2 = i2.newBounds, (a2 = i2.frame) || (a2 = i2.frame = n2.addFrame(r2, t2.getActiveLayer()), t2.addMarker(r2, Qh)), o2.width > 5 && we(a2, { x: o2.x, width: o2.width }), o2.height > 5 && we(a2, { y: o2.y, height: o2.height }), i2.canExecute ? Se(a2).remove(Jh) : Se(a2).add(Jh);
        }), e2.on("resize.cleanup", function(e3) {
          var n3, i2;
          n3 = e3.context, i2 = n3.shape, n3.frame && Re(n3.frame), t2.removeMarker(i2, Qh);
        });
      }
      ed.$inject = ["eventBus", "canvas", "previewSupport"];
      var td = -6, nd = "djs-resizer", id = ["n", "w", "s", "e", "nw", "ne", "se", "sw"];
      function rd(e2, t2, n2, i2) {
        this._resize = i2, this._canvas = t2;
        var r2 = this;
        e2.on("selection.changed", function(e3) {
          var t3 = e3.newSelection;
          r2.removeResizers(), 1 === t3.length && g(t3, j(r2.addResizer, r2));
        }), e2.on("shape.changed", function(e3) {
          var t3 = e3.element;
          n2.isSelected(t3) && (r2.removeResizers(), r2.addResizer(t3));
        });
      }
      rd.prototype.makeDraggable = function(e2, t2, n2) {
        var i2 = this._resize;
        function r2(t3) {
          Fo(t3) && i2.activate(t3, e2, n2);
        }
        ae.bind(t2, "mousedown", r2), ae.bind(t2, "touchstart", r2);
      }, rd.prototype._createResizer = function(e2, t2, n2, i2) {
        var r2 = this._getResizersParent(), o2 = function(e3) {
          var t3 = { x: 0, y: 0 };
          -1 !== e3.indexOf("e") ? t3.x = 6 : -1 !== e3.indexOf("w") && (t3.x = td);
          -1 !== e3.indexOf("s") ? t3.y = 6 : -1 !== e3.indexOf("n") && (t3.y = td);
          return t3;
        }(i2), a2 = De("g");
        Se(a2).add(nd), Se(a2).add(nd + "-" + e2.id), Se(a2).add(nd + "-" + i2), ge(r2, a2);
        var s2 = De("rect");
        we(s2, { x: -4 + o2.x, y: -4 + o2.y, width: 8, height: 8 }), Se(s2).add(nd + "-visual"), ge(a2, s2);
        var c2 = De("rect");
        return we(c2, { x: -10 + o2.x, y: -10 + o2.y, width: 20, height: 20 }), Se(c2).add(nd + "-hit"), ge(a2, c2), ni(a2, t2, n2), a2;
      }, rd.prototype.createResizer = function(e2, t2) {
        var n2 = Xh(e2, t2), i2 = this._createResizer(e2, n2.x, n2.y, t2);
        this.makeDraggable(e2, i2, t2);
      }, rd.prototype.addResizer = function(e2) {
        var t2 = this;
        !fn(e2) && this._resize.canResize({ shape: e2 }) && g(id, function(n2) {
          t2.createResizer(e2, n2);
        });
      }, rd.prototype.removeResizers = function() {
        Pe(this._getResizersParent());
      }, rd.prototype._getResizersParent = function() {
        return this._canvas.getLayer("resizers");
      }, rd.$inject = ["eventBus", "canvas", "selection", "resize"];
      var od = { __depends__: [Bp, Tp, Kl], __init__: ["resize", "resizePreview", "resizeHandles"], resize: ["type", Yh], resizePreview: ["type", ed], resizeHandles: ["type", rd] };
      function ad(e2, t2, n2, i2, r2, o2, a2) {
        function s2(e3, t3) {
          (t3 || Dr(e3, ["bpmn:Task", "bpmn:TextAnnotation", "bpmn:Participant"]) || sd(e3)) && i2.activate(e3);
        }
        this._bpmnFactory = t2, this._canvas = n2, this._modeling = r2, this._textRenderer = a2, i2.registerProvider(this), e2.on("element.dblclick", function(e3) {
          s2(e3.element, true);
        }), e2.on(["autoPlace.start", "canvas.viewbox.changing", "drag.init", "element.mousedown", "popupMenu.open", "root.set", "selection.changed"], function() {
          i2.isActive() && i2.complete();
        }), e2.on(["shape.remove", "connection.remove"], 2e3, function(e3) {
          i2.isActive(e3.element) && i2.cancel();
        }), e2.on(["commandStack.changed"], function(e3) {
          i2.isActive() && i2.cancel();
        }), e2.on("directEditing.activate", function(e3) {
          o2.removeResizers();
        }), e2.on("create.end", 500, function(e3) {
          var t3 = e3.context, n3 = t3.shape, i3 = e3.context.canExecute;
          e3.isTouch || i3 && (t3.hints && false === t3.hints.createElementsBehavior || s2(n3));
        }), e2.on("autoPlace.end", 500, function(e3) {
          s2(e3.shape);
        });
      }
      function sd(e2) {
        return Mr(e2, "bpmn:SubProcess") && !Zr(e2);
      }
      ad.$inject = ["eventBus", "bpmnFactory", "canvas", "directEditing", "modeling", "resizeHandles", "textRenderer"], ad.prototype.activate = function(e2) {
        var t2 = so(e2);
        if (void 0 !== t2) {
          var n2 = { text: t2 };
          L(n2, this.getEditingBBox(e2));
          var i2 = {};
          return (Dr(e2, ["bpmn:Task", "bpmn:Participant", "bpmn:Lane", "bpmn:CallActivity"]) || sd(e2)) && L(i2, { centerVertically: true }), no(e2) && L(i2, { autoResize: true }), Mr(e2, "bpmn:TextAnnotation") && L(i2, { resizable: true, autoResize: true }), L(n2, { options: i2 }), n2;
        }
      }, ad.prototype.getEditingBBox = function(e2) {
        var t2 = this._canvas, n2 = e2.label || e2, i2 = t2.getAbsoluteBBox(n2), r2 = i2.x + i2.width / 2, o2 = i2.y + i2.height / 2, a2 = { x: i2.x, y: i2.y }, s2 = t2.zoom(), c2 = this._textRenderer.getDefaultStyle(), p2 = this._textRenderer.getExternalStyle(), l2 = p2.fontSize * s2, u2 = p2.lineHeight, h2 = c2.fontSize * s2, d2 = c2.lineHeight, f2 = { fontFamily: this._textRenderer.getDefaultStyle().fontFamily, fontWeight: this._textRenderer.getDefaultStyle().fontWeight };
        (Mr(e2, "bpmn:Lane") || function(e3) {
          return Mr(e3, "bpmn:Participant") && Zr(e3);
        }(e2)) && (L(a2, { width: i2.height, height: 30 * s2, x: i2.x - i2.height / 2 + 15 * s2, y: o2 - 30 * s2 / 2 }), L(f2, { fontSize: h2 + "px", lineHeight: d2, paddingTop: 7 * s2 + "px", paddingBottom: 7 * s2 + "px", paddingLeft: 5 * s2 + "px", paddingRight: 5 * s2 + "px", transform: "rotate(-90deg)" })), (Dr(e2, ["bpmn:Task", "bpmn:CallActivity"]) || function(e3) {
          return Mr(e3, "bpmn:Participant") && !Zr(e3);
        }(e2) || sd(e2)) && (L(a2, { width: i2.width, height: i2.height }), L(f2, { fontSize: h2 + "px", lineHeight: d2, paddingTop: 7 * s2 + "px", paddingBottom: 7 * s2 + "px", paddingLeft: 5 * s2 + "px", paddingRight: 5 * s2 + "px" })), function(e3) {
          return Mr(e3, "bpmn:SubProcess") && Zr(e3);
        }(e2) && (L(a2, { width: i2.width, x: i2.x }), L(f2, { fontSize: h2 + "px", lineHeight: d2, paddingTop: 7 * s2 + "px", paddingBottom: 7 * s2 + "px", paddingLeft: 5 * s2 + "px", paddingRight: 5 * s2 + "px" }));
        var m2 = 90 * s2, v2 = 7 * s2, y2 = 4 * s2;
        if (n2.labelTarget && (L(a2, { width: m2, height: i2.height + v2 + y2, x: r2 - m2 / 2, y: i2.y - v2 }), L(f2, { fontSize: l2 + "px", lineHeight: u2, paddingTop: v2 + "px", paddingBottom: y2 + "px" })), no(n2) && !io(n2) && !mn(n2)) {
          var g2 = oo(e2), b2 = t2.getAbsoluteBBox({ x: g2.x, y: g2.y, width: 0, height: 0 }), x2 = l2 + v2 + y2;
          L(a2, { width: m2, height: x2, x: b2.x - m2 / 2, y: b2.y - x2 / 2 }), L(f2, { fontSize: l2 + "px", lineHeight: u2, paddingTop: v2 + "px", paddingBottom: y2 + "px" });
        }
        return Mr(e2, "bpmn:TextAnnotation") && (L(a2, { width: i2.width, height: i2.height, minWidth: 30 * s2, minHeight: 10 * s2 }), L(f2, { textAlign: "left", paddingTop: 5 * s2 + "px", paddingBottom: 7 * s2 + "px", paddingLeft: 7 * s2 + "px", paddingRight: 5 * s2 + "px", fontSize: h2 + "px", lineHeight: d2 })), { bounds: a2, style: f2 };
      }, ad.prototype.update = function(e2, t2, n2, i2) {
        var r2, o2, a2;
        Mr(e2, "bpmn:TextAnnotation") && (o2 = this._canvas.getAbsoluteBBox(e2), r2 = { x: e2.x, y: e2.y, width: e2.width / o2.width * i2.width, height: e2.height / o2.height * i2.height }), (a2 = t2) && a2.trim() || (t2 = null), this._modeling.updateLabel(e2, t2, r2);
      };
      var cd = "djs-element-hidden", pd = "djs-label-hidden";
      function ld(e2, t2, n2) {
        var i2, r2, o2, a2 = this, s2 = t2.getDefaultLayer();
        e2.on("directEditing.activate", function(e3) {
          var c2 = e3.active;
          if (Mr(i2 = c2.element.label || c2.element, "bpmn:TextAnnotation")) {
            r2 = t2.getAbsoluteBBox(i2), o2 = De("g");
            var p2 = n2.getScaledPath("TEXT_ANNOTATION", { xScaleFactor: 1, yScaleFactor: 1, containerWidth: i2.width, containerHeight: i2.height, position: { mx: 0, my: 0 } }), l2 = a2.path = De("path");
            we(l2, { d: p2, strokeWidth: 2, stroke: ud(i2) }), ge(o2, l2), ge(s2, o2), ii(o2, i2.x, i2.y);
          }
          Mr(i2, "bpmn:TextAnnotation") || i2.labelTarget ? t2.addMarker(i2, cd) : (Mr(i2, "bpmn:Task") || Mr(i2, "bpmn:CallActivity") || Mr(i2, "bpmn:SubProcess") || Mr(i2, "bpmn:Participant")) && t2.addMarker(i2, pd);
        }), e2.on("directEditing.resize", function(e3) {
          if (Mr(i2, "bpmn:TextAnnotation")) {
            var t3 = e3.height, o3 = e3.dy, s3 = Math.max(i2.height / r2.height * (t3 + o3), 0), c2 = n2.getScaledPath("TEXT_ANNOTATION", { xScaleFactor: 1, yScaleFactor: 1, containerWidth: i2.width, containerHeight: s3, position: { mx: 0, my: 0 } });
            we(a2.path, { d: c2 });
          }
        }), e2.on(["directEditing.complete", "directEditing.cancel"], function(e3) {
          var n3 = e3.active;
          n3 && (t2.removeMarker(n3.element.label || n3.element, cd), t2.removeMarker(i2, pd)), i2 = void 0, r2 = void 0, o2 && (Re(o2), o2 = void 0);
        });
      }
      function ud(e2, t2) {
        return Nr(e2).get("stroke") || t2 || "black";
      }
      ld.$inject = ["eventBus", "canvas", "pathMap"];
      var hd = { __depends__: [la, od, Vl], __init__: ["labelEditingProvider", "labelEditingPreview"], labelEditingProvider: ["type", ad], labelEditingPreview: ["type", ld] }, dd = ["top", "bottom", "left", "right"], fd = 10;
      function md(e2, t2) {
        function n2(e3) {
          if (io(e3)) {
            var n3 = function(e4) {
              var t3 = _n(e4.label), n4 = _n(e4), i2 = vd(n4, t3);
              if (r2 = i2, -1 === dd.indexOf(r2)) return;
              var r2;
              var o2 = function(e5) {
                var t4 = _n(e5), n5 = [].concat(e5.incoming.map(function(e6) {
                  return e6.waypoints[e6.waypoints.length - 2];
                }), e5.outgoing.map(function(e6) {
                  return e6.waypoints[1];
                })).map(function(e6) {
                  return vd(t4, e6);
                });
                return n5;
              }(e4);
              if (e4.host) {
                var a2 = function(e5) {
                  var t4, n5 = e5.host, i3 = _n(e5), r3 = wn(i3, n5);
                  t4 = r3.indexOf("-") >= 0 ? r3.split("-") : [r3];
                  var o3 = dd.filter(function(e6) {
                    return -1 === t4.indexOf(e6);
                  });
                  return o3;
                }(e4);
                o2 = o2.concat(a2);
              }
              var s2 = dd.filter(function(e5) {
                return -1 === o2.indexOf(e5);
              });
              if (-1 !== s2.indexOf(i2)) return;
              return s2[0];
            }(e3);
            n3 && function(e4, n4) {
              var i2 = _n(e4), r2 = e4.label, o2 = _n(r2);
              if (!r2.parent) return;
              var a2, s2 = gn(e4);
              switch (n4) {
                case "top":
                  a2 = { x: i2.x, y: s2.top - fd - r2.height / 2 };
                  break;
                case "left":
                  a2 = { x: s2.left - fd - r2.width / 2, y: i2.y };
                  break;
                case "bottom":
                  a2 = { x: i2.x, y: s2.bottom + fd + r2.height / 2 };
                  break;
                case "right":
                  a2 = { x: s2.right + fd + r2.width / 2, y: i2.y };
              }
              var c2 = is(a2, o2);
              t2.moveShape(r2, c2);
            }(e3, n3);
          }
        }
        ua.call(this, e2), this.postExecuted(["connection.create", "connection.layout", "connection.updateWaypoints"], function(e3) {
          var t3 = e3.context, i2 = t3.connection, r2 = i2.source, o2 = i2.target;
          false !== (t3.hints || {}).createElementsBehavior && (n2(r2), n2(o2));
        }), this.postExecuted(["label.create"], function(e3) {
          var t3 = e3.context, i2 = t3.shape;
          false !== (t3.hints || {}).createElementsBehavior && n2(i2.labelTarget);
        }), this.postExecuted(["elements.create"], function(e3) {
          var t3 = e3.context, i2 = t3.elements;
          false !== (t3.hints || {}).createElementsBehavior && i2.forEach(function(e4) {
            n2(e4);
          });
        });
      }
      function vd(e2, t2) {
        return wn(t2, e2, 5);
      }
      function yd(e2) {
        ua.call(this, e2), this.preExecute("shape.append", function(e3) {
          var t2 = e3.source, n2 = e3.shape;
          e3.position || (Mr(n2, "bpmn:TextAnnotation") ? e3.position = { x: t2.x + t2.width / 2 + 75, y: t2.y - 50 - n2.height / 2 } : e3.position = { x: t2.x + t2.width + 80 + n2.width / 2, y: t2.y + t2.height / 2 });
        }, true);
      }
      function gd(e2, t2) {
        e2.invoke(ua, this), this.postExecute("shape.move", function(e3) {
          var n2 = e3.newParent, i2 = e3.shape;
          g(y(i2.incoming.concat(i2.outgoing), function(e4) {
            return Mr(e4, "bpmn:Association");
          }), function(e4) {
            t2.moveConnection(e4, { x: 0, y: 0 }, n2);
          });
        }, true);
      }
      e(md, ua), md.$inject = ["eventBus", "modeling"], e(yd, ua), yd.$inject = ["eventBus"], e(gd, ua), gd.$inject = ["injector", "modeling"];
      function bd(e2, t2) {
        t2.invoke(ua, this), this._bpmnReplace = e2;
        var n2 = this;
        this.postExecuted("elements.create", 500, function(e3) {
          var t3 = e3.elements;
          1 === (t3 = t3.filter(function(e4) {
            return xd(e4, e4.host);
          })).length && t3.map(function(e4) {
            return t3.indexOf(e4);
          }).forEach(function(i2) {
            var r2 = t3[i2];
            e3.elements[i2] = n2._replaceShape(t3[i2], r2);
          });
        }, true), this.preExecute("elements.move", 500, function(e3) {
          var t3 = e3.shapes, i2 = e3.newHost;
          if (1 === t3.length) {
            var r2 = t3[0];
            xd(r2, i2) && (e3.shapes = [n2._replaceShape(r2, i2)]);
          }
        }, true);
      }
      function xd(e2, t2) {
        return !mn(e2) && Dr(e2, ["bpmn:IntermediateThrowEvent", "bpmn:IntermediateCatchEvent"]) && !!t2;
      }
      function _d(e2, t2) {
        function n2(e3) {
          return y(e3.attachers, function(e4) {
            return Mr(e4, "bpmn:BoundaryEvent");
          });
        }
        ua.call(this, e2), this.postExecute("connection.create", function(e3) {
          var i2 = e3.context.source, r2 = e3.context.target, o2 = n2(r2);
          Mr(i2, "bpmn:EventBasedGateway") && Mr(r2, "bpmn:ReceiveTask") && o2.length > 0 && t2.removeElements(o2);
        }), this.postExecute("connection.reconnect", function(e3) {
          var i2 = e3.context.oldSource, r2 = e3.context.newSource;
          Mr(i2, "bpmn:Gateway") && Mr(r2, "bpmn:EventBasedGateway") && g(r2.outgoing, function(e4) {
            var i3 = e4.target, r3 = n2(i3);
            Mr(i3, "bpmn:ReceiveTask") && r3.length > 0 && t2.removeElements(r3);
          });
        });
      }
      function wd(e2) {
        e2.invoke(ua, this), this.preExecute("shape.create", 1500, function(e3) {
          var t2 = e3.context, n2 = t2.parent, i2 = t2.shape;
          Mr(n2, "bpmn:Lane") && !Mr(i2, "bpmn:Lane") && (t2.parent = hp(n2, "bpmn:Participant"));
        });
      }
      function Ed(e2, t2) {
        ua.call(this, e2), this.preExecute("shape.create", function(e3) {
          var n2 = e3.context.shape;
          if (Mr(n2, "bpmn:DataObjectReference") && "label" !== n2.type) {
            var i2 = t2.create("bpmn:DataObject");
            n2.businessObject.dataObjectRef = i2;
          }
        });
      }
      bd.$inject = ["bpmnReplace", "injector"], e(bd, ua), bd.prototype._replaceShape = function(e2, t2) {
        var n2, i2 = (n2 = Br(e2).eventDefinitions) && n2[0], r2 = { type: "bpmn:BoundaryEvent", host: t2 };
        return i2 && (r2.eventDefinitionType = i2.$type), this._bpmnReplace.replaceElement(e2, r2, { layoutConnection: false });
      }, _d.$inject = ["eventBus", "modeling"], e(_d, ua), wd.$inject = ["injector"], e(wd, ua), Ed.$inject = ["eventBus", "bpmnFactory"], e(Ed, ua);
      var Sd = 20, Cd = 20, Rd = 30, Pd = 2e3;
      function Td(e2, t2, n2) {
        function i2() {
          var t3 = e2.getRootElement();
          return Mr(t3, "bpmn:Collaboration") ? t3 : n2.makeCollaboration();
        }
        ua.call(this, t2), t2.on(["create.start", "shape.move.start"], Pd, function(t3) {
          var n3 = t3.context, i3 = n3.shape, r2 = e2.getRootElement();
          if (Mr(i3, "bpmn:Participant") && Mr(r2, "bpmn:Process") && r2.children.length) {
            var o2 = r2.children.filter(function(e3) {
              return !Mr(e3, "bpmn:Group") && !mn(e3) && !fn(e3);
            });
            if (o2.length) {
              var a2 = vt(o2), s2 = function(e3, t4) {
                t4 = { width: t4.width + 2 * Sd + Rd, height: t4.height + 2 * Cd };
                var n4 = Math.max(e3.width, t4.width), i4 = Math.max(e3.height, t4.height);
                return { x: -n4 / 2, y: -i4 / 2, width: n4, height: i4 };
              }(i3, a2);
              L(i3, s2), n3.createConstraints = function(e3, t4) {
                return t4 = gn(t4), { bottom: t4.top + e3.height / 2 - Cd, left: t4.right - e3.width / 2 + Sd, top: t4.bottom - e3.height / 2 + Cd, right: t4.left + e3.width / 2 - Sd - Rd };
              }(i3, a2);
            }
          }
        }), t2.on("create.start", Pd, function(n3) {
          var i3 = n3.context.shape, r2 = e2.getRootElement(), o2 = e2.getGraphics(r2);
          function a2(e3) {
            e3.element = r2, e3.gfx = o2;
          }
          Mr(i3, "bpmn:Participant") && Mr(r2, "bpmn:Process") && (t2.on("element.hover", Pd, a2), t2.once("create.cleanup", function() {
            t2.off("element.hover", a2);
          }));
        }), this.preExecute("elements.create", Pd, function(e3) {
          var t3, n3 = e3.elements, r2 = e3.parent, o2 = function(e4) {
            return m(e4, function(e5) {
              return Mr(e5, "bpmn:Participant");
            });
          }(n3);
          o2 && Mr(r2, "bpmn:Process") && (e3.parent = i2(), (t3 = e3.hints = e3.hints || {}).participant = o2, t3.process = r2, t3.processRef = Br(o2).get("processRef"));
        }, true), this.preExecute("shape.create", function(e3) {
          var t3 = e3.parent, n3 = e3.shape;
          Mr(n3, "bpmn:Participant") && Mr(t3, "bpmn:Process") && (e3.parent = i2(), e3.process = t3, e3.processRef = Br(n3).get("processRef"));
        }, true), this.execute("shape.create", function(e3) {
          var t3 = e3.hints || {}, n3 = e3.process || t3.process, i3 = e3.shape, r2 = t3.participant;
          !n3 || r2 && i3 !== r2 || Br(i3).set("processRef", Br(n3));
        }, true), this.revert("shape.create", function(e3) {
          var t3 = e3.hints || {}, n3 = e3.process || t3.process, i3 = e3.processRef || t3.processRef, r2 = e3.shape, o2 = t3.participant;
          !n3 || o2 && r2 !== o2 || Br(r2).set("processRef", i3);
        }, true), this.postExecute("shape.create", function(e3) {
          var t3 = e3.hints || {}, i3 = e3.process || e3.hints.process, r2 = e3.shape, o2 = t3.participant;
          if (i3) {
            var a2 = i3.children.slice();
            o2 ? r2 === o2 && n2.moveElements(a2, { x: 0, y: 0 }, o2) : n2.moveElements(a2, { x: 0, y: 0 }, r2);
          }
        }, true);
      }
      Td.$inject = ["canvas", "eventBus", "modeling"], e(Td, ua);
      var kd = "__targetRef_placeholder";
      function Ad(e2, t2) {
        function n2(e3, n3) {
          var i3 = e3.get("properties"), r3 = m(i3, function(e4) {
            return e4.name === kd;
          });
          return !r3 && n3 && Et(i3, r3 = t2.create("bpmn:Property", { name: kd })), r3;
        }
        function i2(e3, t3) {
          var i3 = n2(e3);
          i3 && (function(e4, t4, n3) {
            return m(e4.get("dataInputAssociations"), function(e5) {
              return e5 !== n3 && e5.targetRef === t4;
            });
          }(e3, i3, t3) || wt(e3.get("properties"), i3));
        }
        function r2(e3) {
          var t3, r3 = e3.context, o2 = r3.connection, a2 = o2.businessObject, s2 = o2.target, c2 = s2 && s2.businessObject, p2 = r3.newTarget, l2 = p2 && p2.businessObject, u2 = r3.oldTarget || r3.target, h2 = u2 && u2.businessObject, d2 = o2.businessObject;
          h2 && h2 !== c2 && i2(h2, a2), l2 && l2 !== c2 && i2(l2, a2), c2 ? (t3 = n2(c2, true), d2.targetRef = t3) : d2.targetRef = null;
        }
        ua.call(this, e2), this.executed(["connection.create", "connection.delete", "connection.move", "connection.reconnect"], Md(r2)), this.reverted(["connection.create", "connection.delete", "connection.move", "connection.reconnect"], Md(r2));
      }
      function Md(e2) {
        return function(t2) {
          if (Mr(t2.context.connection, "bpmn:DataInputAssociation")) return e2(t2);
        };
      }
      function Dd(e2) {
        this._bpmnUpdater = e2;
      }
      function Bd(e2, t2, n2, i2) {
        function r2(e3) {
          return e3.children.filter(function(e4) {
            return Mr(e4, "bpmn:DataStoreReference") && !e4.labelTarget;
          });
        }
        function o2(e3, i3) {
          var r3 = e3.businessObject || e3;
          if (i3 = i3 || n2.filter(function(e4) {
            return Mr(e4, "bpmn:Participant") && Br(e4).processRef;
          })[0]) {
            var o3 = i3.businessObject || i3;
            t2.execute("dataStore.updateContainment", { dataStoreBo: r3, dataStoreDi: Nr(e3), newSemanticParent: o3.processRef || o3, newDiParent: Nr(i3) });
          }
        }
        ua.call(this, i2), t2.registerHandler("dataStore.updateContainment", Dd), this.preExecute("shape.create", function(e3) {
          var t3 = e3.context, n3 = t3.shape;
          Mr(n3, "bpmn:DataStoreReference") && "label" !== n3.type && (t3.hints || (t3.hints = {}), t3.hints.autoResize = false);
        }), this.preExecute("elements.move", function(e3) {
          var t3 = e3.context, n3 = t3.shapes;
          n3.filter(function(e4) {
            return Mr(e4, "bpmn:DataStoreReference");
          }).length && (t3.hints || (t3.hints = {}), t3.hints.autoResize = n3.filter(function(e4) {
            return !Mr(e4, "bpmn:DataStoreReference");
          }));
        }), this.postExecute("shape.create", function(e3) {
          var t3 = e3.context.shape, n3 = t3.parent;
          Mr(t3, "bpmn:DataStoreReference") && "label" !== t3.type && Mr(n3, "bpmn:Collaboration") && o2(t3);
        }), this.postExecute("shape.move", function(e3) {
          var t3 = e3.context, n3 = t3.shape, i3 = t3.oldParent, r3 = n3.parent;
          Mr(i3, "bpmn:Collaboration") || Mr(n3, "bpmn:DataStoreReference") && "label" !== n3.type && Mr(r3, "bpmn:Collaboration") && o2(n3, Mr(i3, "bpmn:Participant") ? i3 : function(e4, t4) {
            for (; e4.parent; ) {
              if (Mr(e4.parent, t4)) return e4.parent;
              e4 = e4.parent;
            }
          }(i3, "bpmn:Participant"));
        }), this.postExecute("shape.delete", function(t3) {
          var n3 = t3.context.shape, i3 = e2.getRootElement();
          Dr(n3, ["bpmn:Participant", "bpmn:SubProcess"]) && Mr(i3, "bpmn:Collaboration") && r2(i3).filter(function(e3) {
            return function(e4, t4) {
              var n4 = e4.businessObject || e4, i4 = t4.businessObject || t4;
              for (; n4.$parent; ) {
                if (n4.$parent === i4.processRef || i4) return true;
                n4 = n4.$parent;
              }
              return false;
            }(e3, n3);
          }).forEach(function(e3) {
            o2(e3);
          });
        }), this.postExecute("canvas.updateRoot", function(e3) {
          var t3 = e3.context, n3 = t3.oldRoot, i3 = t3.newRoot;
          r2(n3).forEach(function(e4) {
            Mr(i3, "bpmn:Process") && o2(e4, i3);
          });
        });
      }
      Ad.$inject = ["eventBus", "bpmnFactory"], e(Ad, ua), Dd.$inject = ["bpmnUpdater"], Dd.prototype.execute = function(e2) {
        var t2 = e2.dataStoreBo, n2 = e2.dataStoreDi, i2 = e2.newSemanticParent, r2 = e2.newDiParent;
        return e2.oldSemanticParent = t2.$parent, e2.oldDiParent = n2.$parent, this._bpmnUpdater.updateSemanticParent(t2, i2), this._bpmnUpdater.updateDiParent(n2, r2), [];
      }, Dd.prototype.revert = function(e2) {
        var t2 = e2.dataStoreBo, n2 = e2.dataStoreDi, i2 = e2.oldSemanticParent, r2 = e2.oldDiParent;
        return this._bpmnUpdater.updateSemanticParent(t2, i2), this._bpmnUpdater.updateDiParent(n2, r2), [];
      }, Bd.$inject = ["canvas", "commandStack", "elementRegistry", "eventBus"], e(Bd, ua);
      function Nd(e2, t2) {
        ua.call(this, e2), this.postExecuted("shape.delete", 500, function(e3) {
          var n2 = e3.context, i2 = n2.hints, r2 = n2.shape, o2 = n2.oldParent;
          Mr(r2, "bpmn:Lane") && (i2 && i2.nested || function(e4, n3) {
            var i3, r3, o3, a2 = rh(n3), s2 = [], c2 = [];
            ft(a2, function(t3) {
              return t3.y > e4.y ? c2.push(t3) : s2.push(t3), t3.children;
            }), a2.length && (i3 = c2.length && s2.length ? e4.height / 2 : e4.height, s2.length && (r3 = t2.calculateAdjustments(s2, "y", i3, e4.y - 10), t2.makeSpace(r3.movingShapes, r3.resizingShapes, { x: 0, y: i3 }, "s")), c2.length && (o3 = t2.calculateAdjustments(c2, "y", -i3, e4.y + e4.height + 10), t2.makeSpace(o3.movingShapes, o3.resizingShapes, { x: 0, y: -i3 }, "n")));
          }(r2, o2));
        });
      }
      Nd.$inject = ["eventBus", "spaceTool"], e(Nd, ua);
      function Od(e2, t2) {
        t2.invoke(ua, this), this._bpmnReplace = e2;
        var n2 = this;
        this.postExecuted("elements.create", 500, function(e3) {
          var t3 = e3.elements;
          t3.filter(function(e4) {
            return jd(e4, e4.host);
          }).map(function(e4) {
            return t3.indexOf(e4);
          }).forEach(function(i2) {
            e3.elements[i2] = n2._replaceShape(t3[i2]);
          });
        }, true), this.preExecute("elements.move", 500, function(e3) {
          var t3 = e3.shapes, i2 = e3.newHost;
          t3.forEach(function(e4, r2) {
            var o2, a2 = e4.host;
            jd(e4, (o2 = a2, -1 !== t3.indexOf(o2) ? a2 : i2)) && (t3[r2] = n2._replaceShape(e4));
          });
        }, true);
      }
      function jd(e2, t2) {
        return !mn(e2) && Mr(e2, "bpmn:BoundaryEvent") && !t2;
      }
      function Ld(e2, t2, n2) {
        function i2(e3, i3, r2) {
          var o2, a2, s2, c2, p2, l2, h2, d2, f2 = i3.waypoints, m2 = e3.outgoing.slice(), v2 = e3.incoming.slice(), g2 = Lp(f2, d2 = u(r2.width) ? _n(r2) : r2);
          if (g2) {
            if (o2 = f2.slice(0, g2.index), a2 = f2.slice(g2.index + (g2.bendpoint ? 1 : 0)), !o2.length || !a2.length) return;
            s2 = g2.bendpoint ? f2[g2.index] : d2, 1 !== o2.length && Id(e3, o2[o2.length - 1]) || o2.push($d(s2)), 1 !== a2.length && Id(e3, a2[0]) || a2.unshift($d(s2));
          }
          c2 = i3.source, p2 = i3.target, t2.canConnect(c2, e3, i3) && (n2.reconnectEnd(i3, e3, o2 || d2), l2 = i3), t2.canConnect(e3, p2, i3) && (l2 ? h2 = n2.connect(e3, p2, { type: i3.type, waypoints: a2 }) : (n2.reconnectStart(i3, e3, a2 || d2), h2 = i3));
          var b2 = [].concat(l2 && y(v2, function(e4) {
            return e4.source === l2.source;
          }) || [], h2 && y(m2, function(e4) {
            return e4.target === h2.target;
          }) || []);
          b2.length && n2.removeElements(b2);
        }
        ua.call(this, e2), this.preExecute("elements.move", function(e3) {
          var n3 = e3.newParent, i3 = e3.shapes, r2 = e3.delta, o2 = i3[0];
          if (o2 && n3) {
            n3 && n3.waypoints && (e3.newParent = n3 = n3.parent);
            var a2 = _n(o2), s2 = { x: a2.x + r2.x, y: a2.y + r2.y }, c2 = m(n3.children, function(e4) {
              return t2.canInsert(i3, e4) && Lp(e4.waypoints, s2);
            });
            c2 && (e3.targetFlow = c2, e3.position = s2);
          }
        }, true), this.postExecuted("elements.move", function(e3) {
          var t3 = e3.shapes, n3 = e3.targetFlow, r2 = e3.position;
          n3 && i2(t3[0], n3, r2);
        }, true), this.preExecute("shape.create", function(e3) {
          var n3 = e3.parent, i3 = e3.shape;
          t2.canInsert(i3, n3) && (e3.targetFlow = n3, e3.parent = n3.parent);
        }, true), this.postExecuted("shape.create", function(e3) {
          var t3 = e3.shape, n3 = e3.targetFlow, r2 = e3.position;
          n3 && i2(t3, n3, r2);
        }, true);
      }
      function Id(e2, t2) {
        var n2 = t2.x, i2 = t2.y;
        return n2 >= e2.x && n2 <= e2.x + e2.width && i2 >= e2.y && i2 <= e2.y + e2.height;
      }
      function $d(e2) {
        return L({}, e2);
      }
      function Fd(e2, t2) {
        ua.call(this, e2), this.preExecuted("connection.create", function(e3) {
          var n2 = e3.context, i2 = n2.connection, r2 = n2.source, o2 = n2.target, a2 = n2.hints;
          if ((!a2 || false !== a2.createElementsBehavior) && zd(i2)) {
            var s2 = [];
            s2 = Mr(r2, "bpmn:EventBasedGateway") ? o2.incoming.filter(zd) : o2.incoming.filter(function(e4) {
              return zd(e4) && Mr(e4.source, "bpmn:EventBasedGateway");
            }), s2.forEach(function(e4) {
              t2.removeConnection(e4);
            });
          }
        }), this.preExecuted("shape.replace", function(e3) {
          var n2 = e3.context.newShape;
          Mr(n2, "bpmn:EventBasedGateway") && n2.outgoing.filter(zd).reduce(function(e4, t3) {
            return e4.includes(t3.target) ? e4 : e4.concat(t3.target);
          }, []).forEach(function(e4) {
            e4.incoming.filter(zd).forEach(function(i2) {
              const r2 = e4.incoming.filter(zd).filter(function(e5) {
                return e5.source === n2;
              });
              (i2.source !== n2 || r2.length > 1) && t2.removeConnection(i2);
            });
          });
        });
      }
      function zd(e2) {
        return Mr(e2, "bpmn:SequenceFlow");
      }
      Od.$inject = ["bpmnReplace", "injector"], e(Od, ua), Od.prototype._replaceShape = function(e2) {
        var t2, n2, i2 = (n2 = Br(e2).eventDefinitions) && n2[0];
        return t2 = i2 ? { type: "bpmn:IntermediateCatchEvent", eventDefinitionType: i2.$type } : { type: "bpmn:IntermediateThrowEvent" }, this._bpmnReplace.replaceElement(e2, t2, { layoutConnection: false });
      }, e(Ld, ua), Ld.$inject = ["eventBus", "bpmnRules", "modeling"], Fd.$inject = ["eventBus", "modeling"], e(Fd, ua);
      var Hd = 1500;
      function Gd(e2, t2, n2) {
        t2.on(["create.hover", "create.move", "create.out", "create.end", "shape.move.hover", "shape.move.move", "shape.move.out", "shape.move.end"], Hd, function(t3) {
          var i2 = t3.context.shape || t3.shape, r2 = t3.hover;
          Mr(r2, "bpmn:Lane") && !Dr(i2, ["bpmn:Lane", "bpmn:Participant"]) && (t3.hover = oh(r2), t3.hoverGfx = e2.getGraphics(t3.hover));
          var o2 = n2.getRootElement();
          r2 !== o2 && (i2.labelTarget || Mr(i2, "bpmn:Group")) && (t3.hover = o2, t3.hoverGfx = e2.getGraphics(t3.hover));
        }), t2.on(["connect.hover", "connect.out", "connect.end", "connect.cleanup", "global-connect.hover", "global-connect.out", "global-connect.end", "global-connect.cleanup"], Hd, function(t3) {
          var n3 = t3.hover;
          Mr(n3, "bpmn:Lane") && (t3.hover = oh(n3) || n3, t3.hoverGfx = e2.getGraphics(t3.hover));
        }), t2.on(["bendpoint.move.hover"], Hd, function(t3) {
          var n3 = t3.context, i2 = t3.hover, r2 = n3.type;
          Mr(i2, "bpmn:Lane") && /reconnect/.test(r2) && (t3.hover = oh(i2) || i2, t3.hoverGfx = e2.getGraphics(t3.hover));
        }), t2.on(["connect.start"], Hd, function(e3) {
          var t3 = e3.context, n3 = t3.start;
          Mr(n3, "bpmn:Lane") && (t3.start = oh(n3) || n3);
        }), t2.on("shape.move.start", 2e3, function(e3) {
          var t3 = e3.shape;
          Mr(t3, "bpmn:Lane") && (e3.shape = oh(t3) || t3);
        });
      }
      Gd.$inject = ["elementRegistry", "eventBus", "canvas"];
      function Vd(e2, t2, n2, i2, r2, o2) {
        function a2(e3, t3, i3) {
          var r3 = n2.filter(function(e4) {
            return Mr(e4, "bpmn:Group");
          }).filter(function(e4) {
            return e4.businessObject !== i3;
          });
          t3 && !function(e4, t4) {
            return e4.some(function(e5) {
              var n3 = Br(e5);
              return (n3.categoryValueRef && n3.categoryValueRef.$parent) === t4;
            });
          }(r3, t3) && function(e4) {
            var t4 = e4.$parent;
            t4 && (wt(t4.get("rootElements"), e4), e4.$parent = null);
          }(t3), e3 && !function(e4, t4) {
            return e4.some(function(e5) {
              return Br(e5).categoryValueRef === t4;
            });
          }(r3, e3) && function(e4) {
            var t4 = e4.$parent;
            t4 && (wt(t4.get("categoryValue"), e4), e4.$parent = null);
          }(e3);
        }
        function s2(e3, n3) {
          return function(e4, t3, n4) {
            return Et(t3.get("categoryValue"), e4), e4.$parent = t3, Et(n4.get("rootElements"), t3), t3.$parent = n4, e4;
          }(e3, n3, t2.getDefinitions());
        }
        function c2(n3, i3) {
          var r3 = Br(n3), o3 = r3.categoryValueRef;
          o3 || (o3 = r3.categoryValueRef = i3.categoryValue = i3.categoryValue || function(e3) {
            return e3.create("bpmn:CategoryValue");
          }(e2));
          var a3 = o3.$parent;
          a3 || (a3 = o3.$parent = i3.category = i3.category || function(e3) {
            return e3.create("bpmn:Category");
          }(e2)), s2(o3, a3, t2.getDefinitions());
        }
        function p2(e3, t3) {
          var n3 = t3.category, i3 = t3.categoryValue, r3 = Br(e3);
          i3 ? (r3.categoryValueRef = null, a2(i3, n3, r3)) : a2(null, r3.categoryValueRef.$parent, r3);
        }
        function l2(t3, n3) {
          var i3 = e2.create(t3.$type);
          return o2.copyElement(t3, i3, null, n3);
        }
        r2.invoke(ua, this), this.execute("label.create", function(e3) {
          var t3 = e3.context, n3 = t3.labelTarget;
          Mr(n3, "bpmn:Group") && c2(n3, t3);
        }), this.revert("label.create", function(e3) {
          var t3 = e3.context, n3 = t3.labelTarget;
          Mr(n3, "bpmn:Group") && p2(n3, t3);
        }), this.execute("shape.delete", function(e3) {
          var t3 = e3.context, n3 = t3.shape, i3 = Br(n3);
          if (Mr(n3, "bpmn:Group") && !n3.labelTarget) {
            var r3 = t3.categoryValue = i3.categoryValueRef;
            r3 && (a2(r3, t3.category = r3.$parent, i3), i3.categoryValueRef = null);
          }
        }), this.reverted("shape.delete", function(e3) {
          var t3 = e3.context, n3 = t3.shape;
          if (Mr(n3, "bpmn:Group") && !n3.labelTarget) {
            var i3 = t3.category, r3 = t3.categoryValue, o3 = Br(n3);
            r3 && (o3.categoryValueRef = r3, s2(r3, i3));
          }
        }), this.execute("shape.create", function(e3) {
          var t3 = e3.context, n3 = t3.shape;
          Mr(n3, "bpmn:Group") && !n3.labelTarget && Br(n3).categoryValueRef && c2(n3, t3);
        }), this.reverted("shape.create", function(e3) {
          var t3 = e3.context, n3 = t3.shape;
          Mr(n3, "bpmn:Group") && !n3.labelTarget && Br(n3).categoryValueRef && p2(n3, t3);
        }), i2.on("copyPaste.copyElement", 770, function(e3) {
          var t3 = e3.descriptor, n3 = e3.element;
          if (Mr(n3, "bpmn:Group") && !n3.labelTarget) {
            var i3 = Br(n3);
            if (i3.categoryValueRef) {
              var r3 = i3.categoryValueRef;
              t3.categoryValue = l2(r3, true), r3.$parent && (t3.category = l2(r3.$parent, true));
            }
          }
        }), i2.on("copyPaste.pasteElement", 770, function(e3) {
          var t3 = e3.descriptor, n3 = t3.businessObject, i3 = t3.categoryValue, r3 = t3.category;
          i3 && (i3 = n3.categoryValueRef = l2(i3)), r3 && (i3.$parent = l2(r3)), delete t3.category, delete t3.categoryValue;
        });
      }
      function Wd(e2, t2, n2, i2) {
        var r2, o2, a2, s2;
        return 0 == (r2 = (i2.y - n2.y) * (t2.x - e2.x) - (i2.x - n2.x) * (t2.y - e2.y)) ? null : (o2 = e2.y - n2.y, a2 = e2.x - n2.x, s2 = ((i2.x - n2.x) * o2 - (i2.y - n2.y) * a2) / r2, { x: Math.round(e2.x + s2 * (t2.x - e2.x)), y: Math.round(e2.y + s2 * (t2.y - e2.y)) });
      }
      function Ud(e2) {
        function t2(e3, t3, n2) {
          var i2, r2 = { x: n2.x, y: n2.y - 50 }, o2 = { x: n2.x - 50, y: n2.y }, a2 = Wd(e3, t3, n2, r2), s2 = Wd(e3, t3, n2, o2);
          i2 = a2 && s2 ? qd(a2, n2) > qd(s2, n2) ? s2 : a2 : a2 || s2, e3.original = i2;
        }
        e2.on("bpmnElement.added", function(e3) {
          var n2, i2, r2 = e3.element;
          r2.waypoints && (t2((i2 = (n2 = r2).waypoints)[0], i2[1], _n(n2.source)), t2(i2[i2.length - 1], i2[i2.length - 2], _n(n2.target)));
        });
      }
      function qd(e2, t2) {
        return Math.sqrt(Math.pow(e2.x - t2.x, 2) + Math.pow(e2.y - t2.y, 2));
      }
      function Kd(e2) {
        ua.call(this, e2);
        var t2 = ["bpmn:Participant", "bpmn:Lane"];
        this.executed(["shape.move", "shape.create", "shape.resize"], function(e3) {
          var n2 = e3.context.shape, i2 = Br(n2), r2 = Nr(n2);
          Dr(i2, t2) && !r2.get("isHorizontal") && r2.set("isHorizontal", true);
        });
      }
      Vd.$inject = ["bpmnFactory", "bpmnjs", "elementRegistry", "eventBus", "injector", "moddleCopy"], e(Vd, ua), Ud.$inject = ["eventBus"], Kd.$inject = ["eventBus"], e(Kd, ua);
      var Yd = Math.sqrt, Xd = Math.min, Zd = Math.max, Qd = Math.abs;
      function Jd(e2) {
        return Math.pow(e2, 2);
      }
      function ef(e2, t2) {
        return Yd(Jd(e2.x - t2.x) + Jd(e2.y - t2.y));
      }
      function tf(e2, t2, n2, i2) {
        var r2 = t2.x - e2.x, o2 = t2.y - e2.y, a2 = n2.x - e2.x, s2 = n2.y - e2.y, c2 = r2 * r2 + o2 * o2, p2 = (r2 * a2 + o2 * s2) / c2, l2 = p2 * p2 - (a2 * a2 + s2 * s2 - i2 * i2) / c2;
        if (l2 < 0 && l2 > -1e-6 && (l2 = 0), l2 < 0) return [];
        var u2 = Yd(l2), h2 = -p2 + u2, d2 = -p2 - u2, f2 = { x: e2.x - r2 * h2, y: e2.y - o2 * h2 };
        return 0 === l2 ? [f2] : [f2, { x: e2.x - r2 * d2, y: e2.y - o2 * d2 }].filter(function(n3) {
          return function(e3, t3, n4) {
            return nf(e3.x, t3.x, n4.x) && nf(e3.y, t3.y, n4.y);
          }(n3, e2, t2);
        });
      }
      function nf(e2, t2, n2) {
        return e2 >= Xd(t2, n2) - rf && e2 <= Zd(t2, n2) + rf;
      }
      var rf = 0.1;
      function of(e2, t2) {
        return Qd(e2.x - t2.x) <= rf && Qd(e2.y - t2.y) <= rf;
      }
      function af(e2, t2, n2, i2) {
        var r2 = 0, o2 = 0, a2 = { point: e2, delta: { x: 0, y: 0 } }, s2 = function(e3, t3) {
          var n3, i3, r3, o3, a3, s3, c3, p3, l3, u3, h3, d3, f3 = 0;
          for (f3 = 0; f3 < t3.length - 1; f3++) {
            if (of(n3 = t3[f3], i3 = t3[f3 + 1]) ? s3 = [n3] : (r3 = ef(e3, n3), o3 = ef(e3, i3), s3 = tf(n3, i3, e3, Xd(r3, o3))), s3.length < 1) throw new Error("expected between [1, 2] circle -> line intersections");
            1 === s3.length && (c3 = { type: "bendpoint", position: s3[0], segmentIndex: f3, bendpointIndex: of(n3, s3[0]) ? f3 : f3 + 1 }), 2 === s3.length && (h3 = s3[0], d3 = s3[1], c3 = { type: "segment", position: a3 = { x: (h3.x + d3.x) / 2, y: (h3.y + d3.y) / 2 }, segmentIndex: f3, relativeLocation: ef(n3, a3) / ef(n3, i3) }), p3 = ef(c3.position, e3), (!u3 || l3 > p3) && (u3 = c3, l3 = p3);
          }
          return u3;
        }(e2, n2), c2 = s2.segmentIndex, p2 = function(e3, t3, n3, i3) {
          var r3 = n3.segmentIndex, o3 = t3.length - e3.length;
          if (i3.segmentMove) {
            var a3 = i3.segmentMove.segmentStartIndex, s3 = i3.segmentMove.newSegmentStartIndex;
            return r3 === a3 ? s3 : r3 >= s3 ? r3 + o3 < s3 ? s3 : r3 + o3 : r3;
          }
          if (i3.bendpointMove) {
            var c3, p3 = i3.bendpointMove.insert, l3 = i3.bendpointMove.bendpointIndex;
            return 0 === o3 ? r3 : (r3 >= l3 && (c3 = p3 ? r3 + 1 : r3 - 1), r3 < l3 && (c3 = r3, p3 && "bendpoint" !== n3.type && l3 - 1 === r3 && sf(t3, l3) < n3.relativeLocation && c3++), c3);
          }
          return 0 === o3 ? r3 : i3.connectionStart && 0 === r3 ? 0 : i3.connectionEnd && r3 === e3.length - 2 ? t3.length - 2 : Math.floor((t3.length - 2) / 2);
        }(n2, t2, s2, i2);
        if (p2 < 0 || p2 > t2.length - 2 || null === p2) return a2;
        var l2, u2, h2 = cf(n2, c2), d2 = cf(t2, p2), f2 = s2.position, m2 = function(e3, t3) {
          var n3 = Hp(e3[0], e3[1]), i3 = Hp(e3[0], t3);
          return 0 === n3 ? 0 : i3 / n3;
        }(h2, f2), v2 = (l2 = d2, u2 = $p(h2), $p(l2) - u2);
        if ("bendpoint" === s2.type) {
          var y2 = t2.length - n2.length, g2 = s2.bendpointIndex, b2 = n2[g2];
          if (-1 !== t2.indexOf(b2)) return a2;
          if (0 === y2) {
            var x2 = t2[g2];
            return { delta: { x: r2 = x2.x - s2.position.x, y: o2 = x2.y - s2.position.y }, point: { x: e2.x + r2, y: e2.y + o2 } };
          }
          y2 < 0 && 0 !== g2 && g2 < n2.length - 1 && (m2 = sf(n2, g2));
        }
        var _2, w2, E2 = { x: (d2[1].x - d2[0].x) * m2 + d2[0].x, y: (d2[1].y - d2[0].y) * m2 + d2[0].y }, S2 = (_2 = { x: e2.x - f2.x, y: e2.y - f2.y }, (w2 = v2) ? { x: Math.cos(w2) * _2.x - Math.sin(w2) * _2.y, y: Math.sin(w2) * _2.x + Math.cos(w2) * _2.y } : _2);
        return r2 = E2.x + S2.x - e2.x, o2 = E2.y + S2.y - e2.y, { point: yn(E2), delta: yn({ x: r2, y: o2 }) };
      }
      function sf(e2, t2) {
        var n2 = Hp(e2[t2 - 1], e2[t2]);
        return n2 / (n2 + Hp(e2[t2], e2[t2 + 1]));
      }
      function cf(e2, t2) {
        return [e2[t2], e2[t2 + 1]];
      }
      function pf(e2, t2, n2) {
        var i2 = ns(t2), r2 = ns(n2), o2 = is(e2, i2), a2 = o2.x * (n2.width / t2.width), s2 = o2.y * (n2.height / t2.height);
        return yn({ x: r2.x + a2, y: r2.y + s2 });
      }
      function lf(e2, t2, n2) {
        var i2 = ns(e2), r2 = ns(t2), o2 = ns(n2), a2 = is(e2, i2), s2 = is(i2, r2), c2 = function(e3, t3, n3) {
          var i3 = gn(t3), r3 = gn(n3);
          if (function(e4, t4) {
            return function(e5, t5) {
              return e5.right !== t5.right && e5.left !== t5.left;
            }(e4, t4) || function(e5, t5) {
              return e5.top !== t5.top && e5.bottom !== t5.bottom;
            }(e4, t4);
          }(i3, r3)) return null;
          var o3, a3, s3, c3 = wn(t3, e3);
          if ("top" === c3) o3 = { x: 0, y: r3.bottom - i3.bottom };
          else if ("bottom" === c3) o3 = { x: 0, y: r3.top - i3.top };
          else if ("right" === c3) o3 = { x: r3.left - i3.left, y: 0 };
          else {
            if ("left" !== c3) return null;
            o3 = { x: r3.right - i3.right, y: 0 };
          }
          if (a3 = { x: e3.x + o3.x, y: e3.y + o3.y }, s3 = wn(n3, a3), s3 !== c3) return null;
          return o3;
        }(i2, t2, n2);
        if (c2) return c2;
        var p2 = s2.x * (n2.width / t2.width), l2 = s2.y * (n2.height / t2.height), u2 = o2.x + p2, h2 = o2.y + l2;
        return yn({ x: u2 + a2.x - e2.x, y: h2 + a2.y - e2.y });
      }
      var uf = "name", hf = "text";
      function df(e2, t2, n2, i2) {
        function r2(e3) {
          var n3 = e3.context, r3 = n3.element, o3 = n3.properties;
          if (uf in o3 && t2.updateLabel(r3, o3[uf]), hf in o3 && Mr(r3, "bpmn:TextAnnotation")) {
            var a2 = i2.getTextAnnotationBounds({ x: r3.x, y: r3.y, width: r3.width, height: r3.height }, o3[hf] || "");
            t2.updateLabel(r3, o3.text, a2);
          }
        }
        function o2(e3) {
          var t3 = e3.context, n3 = t3.connection, i3 = n3.label, r3 = L({}, t3.hints), o3 = t3.newWaypoints || n3.waypoints, a2 = t3.oldWaypoints;
          return void 0 === r3.startChanged && (r3.startChanged = !!r3.connectionStart), void 0 === r3.endChanged && (r3.endChanged = !!r3.connectionEnd), function(e4, t4, n4, i4) {
            return af(_n(e4), t4, n4, i4).delta;
          }(i3, o3, a2, r3);
        }
        ua.call(this, e2), this.postExecute("element.updateProperties", r2), this.postExecute("element.updateModdleProperties", (e3) => {
          Br(e3.context.element) === e3.context.moddleElement && r2(e3);
        }), this.postExecute(["shape.create", "connection.create"], function(e3) {
          var n3 = e3.context;
          if (false !== (n3.hints || {}).createElementsBehavior) {
            var i3 = n3.shape || n3.connection;
            !mn(i3) && no(i3) && so(i3) && t2.updateLabel(i3, so(i3));
          }
        }), this.postExecute("shape.delete", function(e3) {
          var n3 = e3.context, i3 = n3.labelTarget, r3 = n3.hints || {};
          i3 && false !== r3.unsetLabel && t2.updateLabel(i3, null, null, { removeShape: false });
        }), this.postExecute(["connection.layout", "connection.updateWaypoints"], function(e3) {
          var n3 = e3.context;
          if (false !== (n3.hints || {}).labelBehavior) {
            var i3, r3 = n3.connection.label;
            r3 && r3.parent && (i3 = o2(e3), t2.moveShape(r3, i3));
          }
        }), this.postExecute(["shape.replace"], function(e3) {
          var t3 = e3.context, n3 = t3.newShape, i3 = t3.oldShape, r3 = Br(n3);
          r3 && no(r3) && i3.label && n3.label && (n3.label.x = i3.label.x, n3.label.y = i3.label.y);
        }), this.postExecute("shape.resize", function(e3) {
          var n3, i3 = e3.context, r3 = i3.shape, o3 = i3.newBounds, a2 = i3.oldBounds;
          if (io(r3)) {
            var s2 = r3.label, c2 = function(e4, t3) {
              if (!t3.length) return;
              var n4 = function(e5, t4) {
                var n5 = t4.map(function(t5) {
                  return { line: t5, distance: zp(e5, t5) };
                });
                return k(n5, "distance")[0].line;
              }(e4, t3);
              return Fp(e4, n4);
            }(_n(s2), [[{ x: (n3 = a2).x, y: n3.y }, { x: n3.x + (n3.width || 0), y: n3.y }], [{ x: n3.x + (n3.width || 0), y: n3.y }, { x: n3.x + (n3.width || 0), y: n3.y + (n3.height || 0) }], [{ x: n3.x, y: n3.y + (n3.height || 0) }, { x: n3.x + (n3.width || 0), y: n3.y + (n3.height || 0) }], [{ x: n3.x, y: n3.y }, { x: n3.x, y: n3.y + (n3.height || 0) }]]), p2 = ff(c2, a2, o3);
            t2.moveShape(s2, p2);
          }
        });
      }
      function ff(e2, t2, n2) {
        return yn(is(pf(e2, t2, n2), e2));
      }
      function mf(e2, t2) {
        function n2(e3, t3) {
          var n3 = e3.context, i2 = n3.connection, r2 = L({}, n3.hints), o2 = n3.newWaypoints || i2.waypoints, a2 = n3.oldWaypoints;
          return void 0 === r2.startChanged && (r2.startChanged = !!r2.connectionStart), void 0 === r2.endChanged && (r2.endChanged = !!r2.connectionEnd), function(e4, t4, n4, i3) {
            return af(e4, t4, n4, i3).point;
          }(t3, o2, a2, r2);
        }
        ua.call(this, e2), this.postExecute(["connection.layout", "connection.updateWaypoints"], function(e3) {
          var i2 = e3.context.connection, r2 = i2.outgoing;
          i2.incoming.forEach(function(i3) {
            var r3 = i3.waypoints[i3.waypoints.length - 1], o2 = n2(e3, r3), a2 = [].concat(i3.waypoints.slice(0, -1), [o2]);
            t2.updateWaypoints(i3, a2);
          }), r2.forEach(function(i3) {
            var r3 = i3.waypoints[0], o2 = n2(e3, r3), a2 = [].concat([o2], i3.waypoints.slice(1));
            t2.updateWaypoints(i3, a2);
          });
        }), this.postExecute(["connection.move"], function(e3) {
          var n3 = e3.context, i2 = n3.connection, r2 = i2.outgoing, o2 = i2.incoming, a2 = n3.delta;
          o2.forEach(function(e4) {
            var n4 = e4.waypoints[e4.waypoints.length - 1], i3 = { x: n4.x + a2.x, y: n4.y + a2.y }, r3 = [].concat(e4.waypoints.slice(0, -1), [i3]);
            t2.updateWaypoints(e4, r3);
          }), r2.forEach(function(e4) {
            var n4 = e4.waypoints[0], i3 = { x: n4.x + a2.x, y: n4.y + a2.y }, r3 = [].concat([i3], e4.waypoints.slice(1));
            t2.updateWaypoints(e4, r3);
          });
        });
      }
      function vf(e2, t2, n2) {
        var i2 = _f(e2), r2 = wf(i2, t2), o2 = i2[0];
        return r2.length ? r2[r2.length - 1] : pf(o2.original || o2, n2, t2);
      }
      function yf(e2, t2, n2) {
        var i2 = _f(e2), r2 = wf(i2, t2), o2 = i2[i2.length - 1];
        return r2.length ? r2[0] : pf(o2.original || o2, n2, t2);
      }
      function gf(e2, t2, n2) {
        var i2 = _f(e2), r2 = xf(t2, n2), o2 = i2[0];
        return pf(o2.original || o2, r2, t2);
      }
      function bf(e2, t2, n2) {
        var i2 = _f(e2), r2 = xf(t2, n2), o2 = i2[i2.length - 1];
        return pf(o2.original || o2, r2, t2);
      }
      function xf(e2, t2) {
        return { x: e2.x - t2.x, y: e2.y - t2.y, width: e2.width, height: e2.height };
      }
      function _f(e2) {
        var t2 = e2.waypoints;
        if (!t2.length) throw new Error("connection#" + e2.id + ": no waypoints");
        return t2;
      }
      function wf(e2, t2) {
        return y(E(e2, Ef), function(e3) {
          return function(e4, t3) {
            return "intersect" === wn(t3, e4, 1);
          }(e3, t2);
        });
      }
      function Ef(e2) {
        return e2.original || e2;
      }
      function Sf(e2, t2) {
        ua.call(this, e2), this.postExecute("shape.replace", function(e3) {
          var n2 = e3.oldShape, i2 = e3.newShape;
          if (function(e4, t3) {
            return Mr(e4, "bpmn:Participant") && Zr(e4) && Mr(t3, "bpmn:Participant") && !Zr(t3);
          }(n2, i2)) {
            var r2, o2, a2, s2, c2 = (o2 = mt([r2 = n2], false), a2 = [], s2 = [], o2.forEach(function(e4) {
              e4 !== r2 && (e4.incoming.forEach(function(e5) {
                Mr(e5, "bpmn:MessageFlow") && a2.push(e5);
              }), e4.outgoing.forEach(function(e5) {
                Mr(e5, "bpmn:MessageFlow") && s2.push(e5);
              }));
            }, []), { incoming: a2, outgoing: s2 });
            c2.incoming.forEach(function(e4) {
              var r3 = yf(e4, i2, n2);
              t2.reconnectEnd(e4, i2, r3);
            }), c2.outgoing.forEach(function(e4) {
              var r3 = vf(e4, i2, n2);
              t2.reconnectStart(e4, i2, r3);
            });
          }
        }, true);
      }
      e(df, ua), df.$inject = ["eventBus", "modeling", "bpmnFactory", "textRenderer"], e(mf, ua), mf.$inject = ["eventBus", "modeling"], Sf.$inject = ["eventBus", "modeling"], e(Sf, ua);
      function Cf(e2, t2, n2) {
        e2.on(["shape.move.rejected", "create.rejected"], function(e3) {
          var i2, r2, o2, a2 = e3.context, s2 = a2.shape;
          Mr(a2.target, "bpmn:Collaboration") && Mr(s2, "bpmn:FlowNode") && (i2 = e3, r2 = n2("flow elements must be children of pools/participants"), t2.add({ position: { x: i2.x + 5, y: i2.y + 5 }, type: "error", timeout: o2 || 2e3, html: "<div>" + r2 + "</div>" }));
        });
      }
      function Rf(e2, t2) {
        ua.call(this, e2), this.preExecute("shape.resize", function(e3) {
          var n2 = e3.shape, i2 = Nr(n2), r2 = i2 && i2.get("label");
          r2 && r2.get("bounds") && t2.updateModdleProperties(n2, r2, { bounds: void 0 });
        }, true);
      }
      function Pf(e2, t2, n2) {
        ua.call(this, e2), this.preExecute("shape.delete", function(e3) {
          var i2 = e3.context.shape;
          if (1 === i2.incoming.length && 1 === i2.outgoing.length) {
            var r2 = i2.incoming[0], o2 = i2.outgoing[0];
            if (Mr(r2, "bpmn:SequenceFlow") && Mr(o2, "bpmn:SequenceFlow") && t2.canConnect(r2.source, o2.target, r2)) {
              var a2 = function(e4, t3) {
                var n3 = Wd(Tf(e4[e4.length - 2]), Tf(e4[e4.length - 1]), Tf(t3[1]), Tf(t3[0]));
                return n3 ? [].concat(e4.slice(0, e4.length - 1), [n3], t3.slice(1)) : [Tf(e4[0]), Tf(t3[t3.length - 1])];
              }(r2.waypoints, o2.waypoints);
              n2.reconnectEnd(r2, o2.target, a2);
            }
          }
        });
      }
      function Tf(e2) {
        return e2.original || e2;
      }
      function kf(e2, t2) {
        ua.call(this, e2), this.preExecute("shape.delete", function(e3) {
          var t3 = e3.shape, n2 = t3.parent;
          Mr(t3, "bpmn:Participant") && (e3.collaborationRoot = n2);
        }, true), this.postExecute("shape.delete", function(e3) {
          var n2 = e3.collaborationRoot;
          n2 && !n2.businessObject.participants.length && t2.makeProcess();
        }, true);
      }
      function Af(e2, t2, n2, i2) {
        ua.call(this, e2);
        var r2 = i2.get("dragging", false);
        function o2(e3) {
          var i3, r3, o3 = e3.source, a2 = e3.target;
          e3.parent && (Mr(e3, "bpmn:SequenceFlow") && (n2.canConnectSequenceFlow(o3, a2) || (r3 = true), n2.canConnectMessageFlow(o3, a2) && (i3 = "bpmn:MessageFlow")), Mr(e3, "bpmn:MessageFlow") && (n2.canConnectMessageFlow(o3, a2) || (r3 = true), n2.canConnectSequenceFlow(o3, a2) && (i3 = "bpmn:SequenceFlow")), Mr(e3, "bpmn:Association") && !n2.canConnectAssociation(o3, a2) && (r3 = true), r3 && t2.removeConnection(e3), i3 && t2.connect(o3, a2, { type: i3, waypoints: e3.waypoints.slice() }));
        }
        this.postExecuted("elements.move", function(e3) {
          g(e3.closure.allConnections, o2);
        }, true), this.preExecute("connection.reconnect", function(e3) {
          var i3, o3, a2 = e3.context, s2 = a2.connection, c2 = a2.newSource || s2.source, p2 = a2.newTarget || s2.target;
          (i3 = n2.canConnect(c2, p2)) && i3.type !== s2.type && (o3 = t2.connect(c2, p2, { type: i3.type, waypoints: s2.waypoints.slice() }), t2.removeConnection(s2), a2.connection = o3, r2 && function(e4, t3) {
            var n3, i4 = r2.context(), o4 = i4 && i4.payload.previousSelection;
            if (!o4 || !o4.length) return;
            if (-1 === (n3 = o4.indexOf(e4))) return;
            o4.splice(n3, 1, t3);
          }(s2, o3));
        }), this.postExecuted("element.updateProperties", function(e3) {
          var n3, i3 = e3.context, r3 = i3.properties, o3 = i3.element, a2 = o3.businessObject;
          r3.default && (n3 = m(o3.outgoing, A({ id: o3.businessObject.default.id }))) && t2.updateProperties(n3, { conditionExpression: void 0 }), r3.conditionExpression && a2.sourceRef.default === a2 && t2.updateProperties(o3.source, { default: void 0 });
        });
      }
      function Mf(e2, t2, n2, i2, r2, o2) {
        i2.invoke(ua, this), this._bpmnReplace = e2, this._elementRegistry = n2, this._selection = o2, this.postExecuted(["elements.create"], 500, function(e3) {
          var n3 = e3.context, i3 = n3.parent, r3 = n3.elements, o3 = x(r3, function(e4, n4) {
            var r4 = t2.canReplace([n4], n4.host || n4.parent || i3);
            return r4 ? e4.concat(r4.replacements) : e4;
          }, []);
          o3.length && this._replaceElements(r3, o3);
        }, this), this.postExecuted(["elements.move"], 500, function(e3) {
          var n3 = e3.context, i3 = n3.newParent, r3 = n3.newHost, o3 = [];
          g(n3.closure.topLevel, function(e4) {
            o3 = Qr(e4) ? o3.concat(e4.children) : o3.concat(e4);
          }), 1 === o3.length && r3 && (i3 = r3);
          var a2 = t2.canReplace(o3, i3);
          a2 && this._replaceElements(o3, a2.replacements, r3);
        }, this), this.postExecute(["shape.replace"], 1500, function(e3) {
          var n3, i3 = e3.context, r3 = i3.oldShape, o3 = i3.newShape, a2 = r3.attachers;
          a2 && a2.length && (n3 = t2.canReplace(a2, o3), this._replaceElements(a2, n3.replacements));
        }, this), this.postExecuted(["shape.replace"], 1500, function(e3) {
          var t3 = e3.context, n3 = t3.oldShape, i3 = t3.newShape;
          r2.unclaimId(n3.businessObject.id, n3.businessObject), r2.updateProperties(i3, { id: n3.id });
        });
      }
      Cf.$inject = ["eventBus", "tooltips", "translate"], e(Rf, ua), Rf.$inject = ["eventBus", "modeling"], e(Pf, ua), Pf.$inject = ["eventBus", "bpmnRules", "modeling"], kf.$inject = ["eventBus", "modeling"], e(kf, ua), e(Af, ua), Af.$inject = ["eventBus", "modeling", "bpmnRules", "injector"], e(Mf, ua), Mf.prototype._replaceElements = function(e2, t2) {
        var n2 = this._elementRegistry, i2 = this._bpmnReplace, r2 = this._selection;
        g(t2, function(t3) {
          var r3 = { type: t3.newElementType }, o2 = n2.get(t3.oldElementId), a2 = e2.indexOf(o2);
          e2[a2] = i2.replaceElement(o2, r3, { select: false });
        }), t2 && r2.select(e2);
      }, Mf.$inject = ["bpmnReplace", "bpmnRules", "elementRegistry", "injector", "modeling", "selection"];
      var Df = { width: 140, height: 120 }, Bf = { width: 300, height: 60 }, Nf = { width: 300, height: 150 }, Of = { width: 140, height: 120 }, jf = { width: 50, height: 30 };
      function Lf(e2) {
        e2.on("resize.start", 1500, function(e3) {
          var t2 = e3.context, n2 = t2.shape, i2 = t2.direction, r2 = t2.balanced;
          (Mr(n2, "bpmn:Lane") || Mr(n2, "bpmn:Participant")) && (t2.resizeConstraints = function(e4, t3, n3) {
            var i3 = oh(e4), r3 = true, o2 = true, a2 = ih(i3, [i3]), s2 = gn(e4), c2 = {}, p2 = {};
            /e/.test(t3) ? p2.right = s2.left + Bf.width : /w/.test(t3) && (p2.left = s2.right - Bf.width);
            a2.forEach(function(e5) {
              var i4 = gn(e5);
              /n/.test(t3) && (i4.top < s2.top - 10 && (r3 = false), n3 && If(s2.top - i4.bottom) < 10 && Gf(c2, "top", i4.top + Bf.height), If(s2.top - i4.top) < 5 && Hf(p2, "top", i4.bottom - Bf.height)), /s/.test(t3) && (i4.bottom > s2.bottom + 10 && (o2 = false), n3 && If(s2.bottom - i4.top) < 10 && Hf(c2, "bottom", i4.bottom - Bf.height), If(s2.bottom - i4.bottom) < 5 && Gf(p2, "bottom", i4.top + Bf.height));
            });
            var l2 = i3.children.filter(function(e5) {
              return !e5.hidden && !e5.waypoints && (Mr(e5, "bpmn:FlowElement") || Mr(e5, "bpmn:Artifact"));
            });
            return l2.forEach(function(e5) {
              var n4 = gn(e5);
              r3 && /n/.test(t3) && Hf(p2, "top", n4.top - Uf), /e/.test(t3) && Gf(p2, "right", n4.right + Vf), o2 && /s/.test(t3) && Gf(p2, "bottom", n4.bottom + qf), /w/.test(t3) && Hf(p2, "left", n4.left - Wf);
            }), { min: p2, max: c2 };
          }(n2, i2, r2)), Mr(n2, "bpmn:Participant") && (t2.minDimensions = Nf), Mr(n2, "bpmn:SubProcess") && Zr(n2) && (t2.minDimensions = Of), Mr(n2, "bpmn:TextAnnotation") && (t2.minDimensions = jf);
        });
      }
      Lf.$inject = ["eventBus"];
      var If = Math.abs, $f = Math.min, Ff = Math.max;
      function zf(e2, t2, n2, i2) {
        var r2 = e2[t2];
        e2[t2] = void 0 === r2 ? n2 : i2(n2, r2);
      }
      function Hf(e2, t2, n2) {
        return zf(e2, t2, n2, $f);
      }
      function Gf(e2, t2, n2) {
        return zf(e2, t2, n2, Ff);
      }
      var Vf = 20, Wf = 50, Uf = 20, qf = 20;
      function Kf(e2, t2) {
        e2.on("resize.start", 1501, function(e3) {
          var t3 = e3.context, n2 = t3.shape;
          (Mr(n2, "bpmn:Lane") || Mr(n2, "bpmn:Participant")) && (t3.balanced = !zo(e3));
        }), e2.on("resize.end", 1001, function(e3) {
          var n2 = e3.context, i2 = n2.shape, r2 = n2.canExecute, o2 = n2.newBounds;
          if (Mr(i2, "bpmn:Lane") || Mr(i2, "bpmn:Participant")) return r2 && (o2 = vn(o2), t2.resizeLane(i2, o2, n2.balanced)), false;
        });
      }
      Kf.$inject = ["eventBus", "modeling"];
      function Yf(e2, t2, n2, i2, r2) {
        function o2(e3) {
          return Dr(e3, ["bpmn:ReceiveTask", "bpmn:SendTask"]) || function(e4, t3) {
            p(t3) || (t3 = [t3]);
            return w(t3, function(t4) {
              return Jr(e4, t4);
            });
          }(e3, ["bpmn:ErrorEventDefinition", "bpmn:EscalationEventDefinition", "bpmn:MessageEventDefinition", "bpmn:SignalEventDefinition"]);
        }
        function a2(t3) {
          return !!m(e2.getDefinitions().get("rootElements"), A({ id: t3.id }));
        }
        function s2(e3) {
          return Mr(e3, "bpmn:ErrorEventDefinition") ? "errorRef" : Mr(e3, "bpmn:EscalationEventDefinition") ? "escalationRef" : Mr(e3, "bpmn:MessageEventDefinition") ? "messageRef" : Mr(e3, "bpmn:SignalEventDefinition") ? "signalRef" : void 0;
        }
        function c2(e3) {
          if (Dr(e3, ["bpmn:ReceiveTask", "bpmn:SendTask"])) return e3.get("messageRef");
          var t3 = e3.get("eventDefinitions")[0];
          return t3.get(s2(t3));
        }
        n2.invoke(ua, this), this.executed(["shape.create", "element.updateProperties", "element.updateModdleProperties"], function(t3) {
          var n3 = t3.shape || t3.element;
          if (o2(n3)) {
            var i3 = c2(Br(n3));
            i3 && !a2(i3) && (Et(e2.getDefinitions().get("rootElements"), i3), t3.addedRootElement = i3);
          }
        }, true), this.reverted(["shape.create", "element.updateProperties", "element.updateModdleProperties"], function(t3) {
          var n3 = t3.addedRootElement;
          n3 && wt(e2.getDefinitions().get("rootElements"), n3);
        }, true), t2.on("copyPaste.copyElement", function(e3) {
          var t3 = e3.descriptor, n3 = e3.element;
          if (!n3.labelTarget && o2(n3)) {
            var i3 = c2(Br(n3));
            i3 && (t3.referencedRootElement = i3);
          }
        }), t2.on("copyPaste.pasteElement", 500, function(e3) {
          var t3 = e3.descriptor, n3 = t3.businessObject, o3 = t3.referencedRootElement;
          o3 && (a2(o3) || (o3 = i2.copyElement(o3, r2.create(o3.$type))), function(e4, t4) {
            if (Dr(e4, ["bpmn:ReceiveTask", "bpmn:SendTask"])) return e4.set("messageRef", t4);
            var n4 = e4.get("eventDefinitions")[0];
            n4.set(s2(n4), t4);
          }(n3, o3), delete t3.referencedRootElement);
        });
      }
      Yf.$inject = ["bpmnjs", "eventBus", "injector", "moddleCopy", "bpmnFactory"], e(Yf, ua);
      var Xf = Math.max;
      function Zf(e2) {
        e2.on("spaceTool.getMinDimensions", function(e3) {
          var t2 = e3.shapes, n2 = e3.axis, i2 = e3.start, r2 = {};
          return g(t2, function(e4) {
            var t3 = e4.id;
            Mr(e4, "bpmn:Participant") && (!/* @__PURE__ */ function(e5) {
              return "x" === e5;
            }(n2) ? r2[t3] = { width: Nf.width, height: Qf(e4, i2) } : r2[t3] = Nf), Mr(e4, "bpmn:SubProcess") && Zr(e4) && (r2[t3] = Of), Mr(e4, "bpmn:TextAnnotation") && (r2[t3] = jf), Mr(e4, "bpmn:Group") && (r2[t3] = Df);
          }), r2;
        });
      }
      function Qf(e2, t2) {
        var n2;
        return rh(e2).length ? (n2 = function(e3, t3) {
          var n3, i2 = rh(e3);
          return n3 = Jf(i2, t3), e3.height - n3.height + Bf.height;
        }(e2, t2), Xf(Nf.height, n2)) : Nf.height;
      }
      function Jf(e2, t2) {
        var n2, i2, r2;
        for (n2 = 0; n2 < e2.length; n2++) if (t2 >= (i2 = e2[n2]).y && t2 <= i2.y + i2.height) return (r2 = rh(i2)).length ? Jf(r2, t2) : i2;
      }
      Zf.$inject = ["eventBus"];
      var em = 180, tm = 160;
      function nm(e2, t2, n2, i2, r2, o2, a2) {
        ua.call(this, t2), this._canvas = e2, this._eventBus = t2, this._modeling = n2, this._elementFactory = i2, this._bpmnFactory = r2, this._bpmnjs = o2, this._elementRegistry = a2;
        var s2 = this;
        function c2(e3) {
          return Mr(e3, "bpmn:SubProcess") && !Zr(e3);
        }
        function p2(t3) {
          var n3 = t3.shape, i3 = t3.newRootElement, r3 = Br(n3);
          i3 = s2._addDiagram(i3 || r3), t3.newRootElement = e2.addRootElement(i3);
        }
        function l2(t3) {
          var n3 = Br(t3.shape);
          s2._removeDiagram(n3);
          var i3 = t3.newRootElement = a2.get(xa(n3));
          e2.removeRootElement(i3);
        }
        this.executed("shape.create", function(e3) {
          c2(e3.shape) && p2(e3);
        }, true), this.postExecuted("shape.create", function(e3) {
          var t3 = e3.shape, n3 = e3.newRootElement;
          n3 && t3.children && (s2._showRecursively(t3.children), s2._moveChildrenToShape(t3, n3));
        }, true), this.reverted("shape.create", function(e3) {
          c2(e3.shape) && l2(e3);
        }, true), this.preExecuted("shape.delete", function(e3) {
          var t3 = e3.shape;
          if (c2(t3)) {
            var i3 = a2.get(xa(t3));
            i3 && n2.removeElements(i3.children.slice());
          }
        }, true), this.executed("shape.delete", function(e3) {
          c2(e3.shape) && l2(e3);
        }, true), this.reverted("shape.delete", function(e3) {
          c2(e3.shape) && p2(e3);
        }, true), this.preExecuted("shape.replace", function(t3) {
          var n3 = t3.oldShape, i3 = t3.newShape;
          c2(n3) && c2(i3) && (t3.oldRoot = e2.removeRootElement(xa(n3)));
        }, true), this.postExecuted("shape.replace", function(t3) {
          var i3 = t3.newShape, r3 = t3.oldRoot, o3 = e2.findRoot(xa(i3));
          if (r3 && o3) {
            var a3 = r3.children;
            n2.moveElements(a3, { x: 0, y: 0 }, o3);
          }
        }, true), this.executed("element.updateProperties", function(e3) {
          var t3 = e3.element;
          if (Mr(t3, "bpmn:SubProcess")) {
            var n3 = e3.properties, i3 = e3.oldProperties.id, r3 = n3.id;
            if (i3 !== r3) {
              if (wa(t3)) return a2.updateId(t3, _a(r3)), void a2.updateId(i3, r3);
              a2.get(_a(i3)) && a2.updateId(_a(i3), _a(r3));
            }
          }
        }, true), this.reverted("element.updateProperties", function(e3) {
          var t3 = e3.element;
          if (Mr(t3, "bpmn:SubProcess")) {
            var n3 = e3.properties, i3 = e3.oldProperties.id, r3 = n3.id;
            if (i3 !== r3) {
              if (wa(t3)) return a2.updateId(t3, _a(i3)), void a2.updateId(r3, i3);
              var o3 = a2.get(_a(r3));
              o3 && a2.updateId(o3, _a(i3));
            }
          }
        }, true), t2.on("element.changed", function(e3) {
          var n3 = e3.element;
          if (wa(n3)) {
            var i3 = n3, r3 = a2.get(ba(i3));
            r3 && r3 !== i3 && t2.fire("element.changed", { element: r3 });
          }
        }), this.executed("shape.toggleCollapse", 400, function(e3) {
          var t3 = e3.shape;
          Mr(t3, "bpmn:SubProcess") && (Zr(t3) ? l2(e3) : (p2(e3), s2._showRecursively(t3.children)));
        }, true), this.reverted("shape.toggleCollapse", 400, function(e3) {
          var t3 = e3.shape;
          Mr(t3, "bpmn:SubProcess") && (Zr(t3) ? l2(e3) : (p2(e3), s2._showRecursively(t3.children)));
        }, true), this.postExecuted("shape.toggleCollapse", 600, function(e3) {
          var t3 = e3.shape;
          if (Mr(t3, "bpmn:SubProcess")) {
            var n3 = e3.newRootElement;
            n3 && (Zr(t3) ? s2._moveChildrenToShape(n3, t3) : s2._moveChildrenToShape(t3, n3));
          }
        }, true), t2.on("copyPaste.createTree", function(e3) {
          var t3 = e3.element, n3 = e3.children;
          if (c2(t3)) {
            var i3 = xa(t3), r3 = a2.get(i3);
            r3 && n3.push.apply(n3, r3.children);
          }
        }), t2.on("copyPaste.copyElement", function(e3) {
          var t3 = e3.descriptor, n3 = e3.element, i3 = e3.elements, r3 = n3.parent;
          if (Mr(Nr(r3), "bpmndi:BPMNPlane")) {
            var o3 = ba(r3), a3 = m(i3, function(e4) {
              return e4.id === o3;
            });
            a3 && (t3.parent = a3.id);
          }
        }), t2.on("copyPaste.pasteElement", function(e3) {
          var t3 = e3.descriptor;
          t3.parent && (c2(t3.parent) || t3.parent.hidden) && (t3.hidden = true);
        });
      }
      function im(e2, t2) {
        e2.invoke(ua, this), this.postExecuted("shape.replace", function(e3) {
          var n2 = e3.context.oldShape, i2 = e3.context.newShape;
          if (Mr(i2, "bpmn:SubProcess") && (Mr(n2, "bpmn:Task") || Mr(n2, "bpmn:CallActivity")) && Zr(i2)) {
            var r2, o2 = { x: (r2 = i2).x + r2.width / 6, y: r2.y + r2.height / 2 };
            t2.createShape({ type: "bpmn:StartEvent" }, o2, i2);
          }
        });
      }
      function rm(e2, t2) {
        ua.call(this, e2), this.postExecuted("shape.toggleCollapse", 1500, function(e3) {
          var n2 = e3.shape;
          if (!Zr(n2)) {
            var i2 = mt(n2);
            i2.forEach(function(e4) {
              var t3 = e4.incoming.slice(), n3 = e4.outgoing.slice();
              g(t3, function(e5) {
                r2(e5, true);
              }), g(n3, function(e5) {
                r2(e5, false);
              });
            });
          }
          function r2(e4, r3) {
            -1 !== i2.indexOf(e4.source) && -1 !== i2.indexOf(e4.target) || (r3 ? t2.reconnectEnd(e4, n2, _n(n2)) : t2.reconnectStart(e4, n2, _n(n2)));
          }
        }, true);
      }
      e(nm, ua), nm.prototype._moveChildrenToShape = function(e2, t2) {
        var n2, i2 = this._modeling, r2 = e2.children;
        if (r2) {
          var o2 = (r2 = r2.concat(r2.reduce(function(t3, n3) {
            return n3.label && n3.label.parent !== e2 ? t3.concat(n3.label) : t3;
          }, []))).filter(function(e3) {
            return !e3.hidden;
          });
          if (o2.length) {
            var a2 = vt(o2);
            if (t2.x) {
              var s2 = _n(t2), c2 = _n(a2);
              n2 = { x: s2.x - c2.x, y: s2.y - c2.y };
            } else n2 = { x: em - a2.x, y: tm - a2.y };
            i2.moveElements(r2, n2, t2, { autoResize: false });
          } else i2.moveElements(r2, { x: 0, y: 0 }, t2, { autoResize: false });
        }
      }, nm.prototype._showRecursively = function(e2, t2) {
        var n2 = this, i2 = [];
        return e2.forEach(function(e3) {
          e3.hidden = !!t2, i2 = i2.concat(e3), e3.children && (i2 = i2.concat(n2._showRecursively(e3.children, e3.collapsed || t2)));
        }), i2;
      }, nm.prototype._addDiagram = function(e2) {
        var t2 = this._bpmnjs.getDefinitions().diagrams;
        return e2.businessObject || (e2 = this._createNewDiagram(e2)), t2.push(e2.di.$parent), e2;
      }, nm.prototype._createNewDiagram = function(e2) {
        var t2 = this._bpmnFactory, n2 = this._elementFactory, i2 = t2.create("bpmndi:BPMNPlane", { bpmnElement: e2 }), r2 = t2.create("bpmndi:BPMNDiagram", { plane: i2 });
        return i2.$parent = r2, n2.createRoot({ id: xa(e2), type: e2.$type, di: i2, businessObject: e2, collapsed: true });
      }, nm.prototype._removeDiagram = function(e2) {
        var t2 = this._bpmnjs.getDefinitions().diagrams, n2 = m(t2, function(t3) {
          return t3.plane.bpmnElement.id === e2.id;
        });
        return t2.splice(t2.indexOf(n2), 1), n2;
      }, nm.$inject = ["canvas", "eventBus", "modeling", "elementFactory", "bpmnFactory", "bpmnjs", "elementRegistry"], im.$inject = ["injector", "modeling"], e(im, ua), e(rm, ua), rm.$inject = ["eventBus", "modeling"];
      function om(e2, t2, n2) {
        ua.call(this, e2), this.executed(["shape.toggleCollapse"], 500, function(e3) {
          var t3, n3 = e3.context.shape;
          Mr(n3, "bpmn:SubProcess") && (n3.collapsed ? Nr(n3).isExpanded = false : ((t3 = n3.children).length && t3.forEach(function(e4) {
            "label" !== e4.type || e4.businessObject.name || (e4.hidden = true);
          }), Nr(n3).isExpanded = true));
        }), this.reverted(["shape.toggleCollapse"], 500, function(e3) {
          var t3 = e3.context.shape;
          t3.collapsed ? Nr(t3).isExpanded = false : Nr(t3).isExpanded = true;
        }), this.postExecuted(["shape.toggleCollapse"], 500, function(e3) {
          var i2, r2 = e3.context.shape, o2 = t2.getDefaultSize(r2);
          i2 = r2.collapsed ? function(e4, t3) {
            return { x: e4.x + (e4.width - t3.width) / 2, y: e4.y + (e4.height - t3.height) / 2, width: t3.width, height: t3.height };
          }(r2, o2) : function(e4, t3) {
            var n3, i3, r3, o3 = e4.children, a2 = t3;
            return n3 = (r3 = o3, r3.filter(function(e5) {
              return !e5.hidden;
            })).concat([e4]), (i3 = Ju(n3)) ? (a2.width = Math.max(i3.width, a2.width), a2.height = Math.max(i3.height, a2.height), a2.x = i3.x + (i3.width - a2.width) / 2, a2.y = i3.y + (i3.height - a2.height) / 2) : (a2.x = e4.x + (e4.width - a2.width) / 2, a2.y = e4.y + (e4.height - a2.height) / 2), a2;
          }(r2, o2), n2.resizeShape(r2, i2, null, { autoResize: !r2.collapsed && "nwse" });
        });
      }
      function am(e2, t2, n2, i2) {
        t2.invoke(ua, this), this.preExecute("shape.delete", function(e3) {
          var t3 = e3.context.shape, r2 = t3.businessObject;
          mn(t3) || (Mr(t3, "bpmn:Participant") && Zr(t3) && n2.ids.unclaim(r2.processRef.id), i2.unclaimId(r2.id, r2));
        }), this.preExecute("connection.delete", function(e3) {
          var t3 = e3.context.connection.businessObject;
          i2.unclaimId(t3.id, t3);
        }), this.preExecute("canvas.updateRoot", function() {
          var t3 = e2.getRootElement(), i3 = t3.businessObject;
          Mr(t3, "bpmn:Collaboration") && n2.ids.unclaim(i3.id);
        });
      }
      function sm(e2, t2) {
        ua.call(this, e2), this.preExecute("connection.delete", function(e3) {
          var n2 = e3.context.connection, i2 = n2.source;
          (function(e4, t3) {
            if (!Mr(e4, "bpmn:SequenceFlow")) return false;
            var n3 = Br(t3), i3 = Br(e4);
            return n3.get("default") === i3;
          })(n2, i2) && t2.updateProperties(i2, { default: null });
        });
      }
      e(om, ua), om.$inject = ["eventBus", "elementFactory", "modeling"], e(am, ua), am.$inject = ["canvas", "injector", "moddle", "modeling"], e(sm, ua), sm.$inject = ["eventBus", "modeling"];
      function cm(e2, t2, n2) {
        var i2;
        function r2() {
          if (!i2) throw new Error(n2("out of bounds release"));
          return i2;
        }
        ua.call(this, e2);
        var o2 = ["spaceTool", "lane.add", "lane.resize", "lane.split", "elements.create", "elements.delete", "elements.move", "shape.create", "shape.delete", "shape.move", "shape.resize"];
        this.preExecute(o2, 5e3, function(e3) {
          (i2 = i2 || new pm()).enter();
        }), this.postExecuted(o2, 500, function(e3) {
          !function() {
            if (!i2) throw new Error(n2("out of bounds release"));
            var e4 = i2.leave();
            e4 && (t2.updateLaneRefs(i2.flowNodes, i2.lanes), i2 = null);
          }();
        }), this.preExecute(["shape.create", "shape.move", "shape.delete", "shape.resize"], function(e3) {
          var t3 = e3.context.shape, n3 = r2();
          t3.labelTarget || (Mr(t3, "bpmn:Lane") && n3.addLane(t3), Mr(t3, "bpmn:FlowNode") && n3.addFlowNode(t3));
        });
      }
      function pm() {
        this.flowNodes = [], this.lanes = [], this.counter = 0, this.addLane = function(e2) {
          this.lanes.push(e2);
        }, this.addFlowNode = function(e2) {
          this.flowNodes.push(e2);
        }, this.enter = function() {
          this.counter++;
        }, this.leave = function() {
          return this.counter--, !this.counter;
        };
      }
      cm.$inject = ["eventBus", "modeling", "translate"], e(cm, ua);
      var lm = { __init__: ["adaptiveLabelPositioningBehavior", "appendBehavior", "associationBehavior", "attachEventBehavior", "boundaryEventBehavior", "createBehavior", "createDataObjectBehavior", "createParticipantBehavior", "dataInputAssociationBehavior", "dataStoreBehavior", "deleteLaneBehavior", "detachEventBehavior", "dropOnFlowBehavior", "eventBasedGatewayBehavior", "fixHoverBehavior", "groupBehavior", "importDockingFix", "isHorizontalFix", "labelBehavior", "layoutConnectionBehavior", "messageFlowBehavior", "modelingFeedback", "removeElementBehavior", "removeEmbeddedLabelBoundsBehavior", "removeParticipantBehavior", "replaceConnectionBehavior", "replaceElementBehaviour", "resizeBehavior", "resizeLaneBehavior", "rootElementReferenceBehavior", "spaceToolBehavior", "subProcessPlaneBehavior", "subProcessStartEventBehavior", "toggleCollapseConnectionBehaviour", "toggleElementCollapseBehaviour", "unclaimIdBehavior", "updateFlowNodeRefsBehavior", "unsetDefaultFlowBehavior"], adaptiveLabelPositioningBehavior: ["type", md], appendBehavior: ["type", yd], associationBehavior: ["type", gd], attachEventBehavior: ["type", bd], boundaryEventBehavior: ["type", _d], createBehavior: ["type", wd], createDataObjectBehavior: ["type", Ed], createParticipantBehavior: ["type", Td], dataInputAssociationBehavior: ["type", Ad], dataStoreBehavior: ["type", Bd], deleteLaneBehavior: ["type", Nd], detachEventBehavior: ["type", Od], dropOnFlowBehavior: ["type", Ld], eventBasedGatewayBehavior: ["type", Fd], fixHoverBehavior: ["type", Gd], groupBehavior: ["type", Vd], importDockingFix: ["type", Ud], isHorizontalFix: ["type", Kd], labelBehavior: ["type", df], layoutConnectionBehavior: ["type", mf], messageFlowBehavior: ["type", Sf], modelingFeedback: ["type", Cf], removeElementBehavior: ["type", Pf], removeEmbeddedLabelBoundsBehavior: ["type", Rf], removeParticipantBehavior: ["type", kf], replaceConnectionBehavior: ["type", Af], replaceElementBehaviour: ["type", Mf], resizeBehavior: ["type", Lf], resizeLaneBehavior: ["type", Kf], rootElementReferenceBehavior: ["type", Yf], spaceToolBehavior: ["type", Zf], subProcessPlaneBehavior: ["type", nm], subProcessStartEventBehavior: ["type", im], toggleCollapseConnectionBehaviour: ["type", rm], toggleElementCollapseBehaviour: ["type", om], unclaimIdBehavior: ["type", am], unsetDefaultFlowBehavior: ["type", sm], updateFlowNodeRefsBehavior: ["type", cm] };
      function um(e2, t2) {
        var n2 = wn(e2, t2, -15);
        return "intersect" !== n2 ? n2 : null;
      }
      function hm(e2) {
        Qc.call(this, e2);
      }
      function dm(e2) {
        return !e2 || mn(e2);
      }
      function fm(e2) {
        do {
          if (Mr(e2, "bpmn:Process")) return Br(e2);
          if (Mr(e2, "bpmn:Participant")) return Br(e2).processRef || Br(e2);
        } while (e2 = e2.parent);
      }
      function mm(e2) {
        return Mr(e2, "bpmn:TextAnnotation");
      }
      function vm(e2) {
        return Mr(e2, "bpmn:Group") && !e2.labelTarget;
      }
      function ym(e2) {
        return Mr(e2, "bpmn:BoundaryEvent") && xm(e2, "bpmn:CompensateEventDefinition");
      }
      function gm(e2) {
        return Br(e2).isForCompensation;
      }
      function bm(e2) {
        for (var t2 = e2; t2 = t2.parent; ) {
          if (Mr(t2, "bpmn:FlowElementsContainer")) return Br(t2);
          if (Mr(t2, "bpmn:Participant")) return Br(t2).processRef;
        }
        return null;
      }
      function xm(e2, t2) {
        return !!m(Br(e2).eventDefinitions || [], function(e3) {
          return Mr(e3, t2);
        });
      }
      function _m(e2, t2) {
        return (Br(e2).eventDefinitions || []).every(function(e3) {
          return Mr(e3, t2);
        });
      }
      function wm(e2, t2) {
        var n2 = function(e3) {
          for (var t3 = []; e3; ) (e3 = e3.parent) && t3.push(e3);
          return t3;
        }(t2);
        return -1 !== n2.indexOf(e2);
      }
      function Em(e2, t2, n2) {
        if (dm(e2) || dm(t2)) return null;
        if (!Mr(n2, "bpmn:DataAssociation")) {
          if (jm(e2, t2)) return { type: "bpmn:MessageFlow" };
          if (Lm(e2, t2)) return { type: "bpmn:SequenceFlow" };
        }
        var i2 = Im(e2, t2);
        return i2 || (ym(e2) && gm(t2) ? { type: "bpmn:Association", associationDirection: "One" } : !!Om(e2, t2) && { type: "bpmn:Association" });
      }
      function Sm(e2, t2) {
        return !(!mn(e2) && !vm(e2)) || !(Mr(t2, "bpmn:Participant") && !Zr(t2)) && (Mr(e2, "bpmn:Participant") ? Mr(t2, "bpmn:Process") || Mr(t2, "bpmn:Collaboration") : Dr(e2, ["bpmn:DataInput", "bpmn:DataOutput"]) && e2.parent ? t2 === e2.parent : Mr(e2, "bpmn:Lane") ? Mr(t2, "bpmn:Participant") || Mr(t2, "bpmn:Lane") : !(Mr(e2, "bpmn:BoundaryEvent") && !function(e3) {
          return Br(e3).cancelActivity && (Pm(e3) || Tm(e3));
        }(e2)) && (Mr(e2, "bpmn:FlowElement") && !Mr(e2, "bpmn:DataStoreReference") ? Mr(t2, "bpmn:FlowElementsContainer") ? Zr(t2) : Dr(t2, ["bpmn:Participant", "bpmn:Lane"]) : Mr(e2, "bpmn:DataStoreReference") && Mr(t2, "bpmn:Collaboration") ? w(Br(t2).get("participants"), function(e3) {
          return !!e3.get("processRef");
        }) : Dr(e2, ["bpmn:Artifact", "bpmn:DataAssociation", "bpmn:DataStoreReference"]) ? Dr(t2, ["bpmn:Collaboration", "bpmn:Lane", "bpmn:Participant", "bpmn:Process", "bpmn:SubProcess"]) : !!Mr(e2, "bpmn:MessageFlow") && (Mr(t2, "bpmn:Collaboration") || e2.source.parent == t2 || e2.target.parent == t2)));
      }
      function Cm(e2) {
        return Mr(e2, "bpmn:Lane");
      }
      function Rm(e2) {
        return !!function(e3) {
          return !mn(e3) && Mr(e3, "bpmn:BoundaryEvent");
        }(e2) || (!(!Mr(e2, "bpmn:IntermediateThrowEvent") || !Pm(e2)) || Mr(e2, "bpmn:IntermediateCatchEvent") && Tm(e2));
      }
      function Pm(e2) {
        var t2 = Br(e2);
        return t2 && !(t2.eventDefinitions && t2.eventDefinitions.length);
      }
      function Tm(e2) {
        return km(e2, ["bpmn:MessageEventDefinition", "bpmn:TimerEventDefinition", "bpmn:SignalEventDefinition", "bpmn:ConditionalEventDefinition"]);
      }
      function km(e2, t2) {
        return t2.some(function(t3) {
          return xm(e2, t3);
        });
      }
      function Am(e2, t2, n2, i2) {
        if (Array.isArray(e2) || (e2 = [e2]), 1 !== e2.length) return false;
        var r2 = e2[0];
        return !mn(r2) && (!!Rm(r2) && (!Qr(t2) && (!(!Mr(t2, "bpmn:Activity") || gm(t2)) && (!(i2 && !um(i2, t2)) && (!function(e3) {
          return Mr(e3, "bpmn:ReceiveTask") && m(e3.incoming, function(e4) {
            return Mr(e4.source, "bpmn:EventBasedGateway");
          });
        }(t2) && "attach")))));
      }
      function Mm(e2, t2, n2) {
        if (!t2) return false;
        var i2 = { replacements: [] };
        return g(e2, function(e3) {
          Qr(t2) || Mr(e3, "bpmn:StartEvent") && "label" !== e3.type && Sm(e3, t2) && (function(e4) {
            return e4 && false !== Br(e4).isInterrupting;
          }(e3) || i2.replacements.push({ oldElementId: e3.id, newElementType: "bpmn:StartEvent" }), (function(e4) {
            return Jr(e4, "bpmn:ErrorEventDefinition");
          }(e3) || function(e4) {
            return Jr(e4, "bpmn:EscalationEventDefinition");
          }(e3) || function(e4) {
            return Jr(e4, "bpmn:CompensateEventDefinition");
          }(e3)) && i2.replacements.push({ oldElementId: e3.id, newElementType: "bpmn:StartEvent" }), km(e3, ["bpmn:MessageEventDefinition", "bpmn:TimerEventDefinition", "bpmn:SignalEventDefinition", "bpmn:ConditionalEventDefinition"]) && Mr(t2, "bpmn:SubProcess") && i2.replacements.push({ oldElementId: e3.id, newElementType: "bpmn:StartEvent" })), Mr(t2, "bpmn:Transaction") || xm(e3, "bpmn:CancelEventDefinition") && "label" !== e3.type && (Mr(e3, "bpmn:EndEvent") && Sm(e3, t2) && i2.replacements.push({ oldElementId: e3.id, newElementType: "bpmn:EndEvent" }), Mr(e3, "bpmn:BoundaryEvent") && Am(e3, t2, 0, n2) && i2.replacements.push({ oldElementId: e3.id, newElementType: "bpmn:BoundaryEvent" }));
        }), !!i2.replacements.length && i2;
      }
      function Dm(e2, t2) {
        return !w(e2, Cm) && (!t2 || e2.every(function(e3) {
          return Sm(e3, t2);
        }));
      }
      function Bm(e2, t2, n2, i2) {
        return !!t2 && (!(!mn(e2) && !vm(e2)) || !/* @__PURE__ */ function(e3, t3) {
          return e3 === t3;
        }(n2, t2) && ((!n2 || !wm(n2, t2)) && (Sm(e2, t2) || $m(e2, t2))));
      }
      function Nm(e2, t2) {
        return Mr(e2, "bpmn:SubProcess") ? Zr(e2) && (!t2 || t2.width >= 100 && t2.height >= 80) : Mr(e2, "bpmn:Lane") ? !t2 || t2.width >= 130 && t2.height >= 60 : Mr(e2, "bpmn:Participant") ? !t2 || t2.width >= 250 && t2.height >= 50 : !!mm(e2) || !!vm(e2);
      }
      function Om(e2, t2) {
        return !(!ym(e2) || !gm(t2)) || !wm(t2, e2) && !wm(e2, t2) && (!!function(e3, t3) {
          var n2 = mm(e3), i2 = mm(t3);
          return (n2 || i2) && n2 !== i2;
        }(e2, t2) || !!Im(e2, t2));
      }
      function jm(e2, t2) {
        return !(zm(e2) && !zm(t2)) && (Mr(n2 = e2, "bpmn:InteractionNode") && !Mr(n2, "bpmn:BoundaryEvent") && (!Mr(n2, "bpmn:Event") || Mr(n2, "bpmn:ThrowEvent") && _m(n2, "bpmn:MessageEventDefinition")) && function(e3) {
          return Mr(e3, "bpmn:InteractionNode") && !gm(e3) && (!Mr(e3, "bpmn:Event") || Mr(e3, "bpmn:CatchEvent") && _m(e3, "bpmn:MessageEventDefinition")) && !(Mr(e3, "bpmn:BoundaryEvent") && !xm(e3, "bpmn:MessageEventDefinition"));
        }(t2) && !function(e3, t3) {
          return fm(e3) === fm(t3);
        }(e2, t2));
        var n2;
      }
      function Lm(e2, t2) {
        return Mr(n2 = e2, "bpmn:FlowNode") && !Mr(n2, "bpmn:EndEvent") && !Qr(n2) && !(Mr(n2, "bpmn:IntermediateThrowEvent") && xm(n2, "bpmn:LinkEventDefinition")) && !ym(n2) && !gm(n2) && function(e3) {
          return Mr(e3, "bpmn:FlowNode") && !Mr(e3, "bpmn:StartEvent") && !Mr(e3, "bpmn:BoundaryEvent") && !Qr(e3) && !(Mr(e3, "bpmn:IntermediateCatchEvent") && xm(e3, "bpmn:LinkEventDefinition")) && !gm(e3);
        }(t2) && function(e3, t3) {
          return bm(e3) === bm(t3);
        }(e2, t2) && !(Mr(e2, "bpmn:EventBasedGateway") && !function(e3) {
          return Mr(e3, "bpmn:ReceiveTask") || Mr(e3, "bpmn:IntermediateCatchEvent") && (xm(e3, "bpmn:MessageEventDefinition") || xm(e3, "bpmn:TimerEventDefinition") || xm(e3, "bpmn:ConditionalEventDefinition") || xm(e3, "bpmn:SignalEventDefinition"));
        }(t2));
        var n2;
      }
      function Im(e2, t2) {
        return Dr(e2, ["bpmn:DataObjectReference", "bpmn:DataStoreReference"]) && Dr(t2, ["bpmn:Activity", "bpmn:ThrowEvent"]) ? { type: "bpmn:DataInputAssociation" } : !(!Dr(t2, ["bpmn:DataObjectReference", "bpmn:DataStoreReference"]) || !Dr(e2, ["bpmn:Activity", "bpmn:CatchEvent"])) && { type: "bpmn:DataOutputAssociation" };
      }
      function $m(e2, t2, n2) {
        if (!t2) return false;
        if (Array.isArray(e2)) {
          if (1 !== e2.length) return false;
          e2 = e2[0];
        }
        return t2.source !== e2 && t2.target !== e2 && (Dr(t2, ["bpmn:SequenceFlow", "bpmn:MessageFlow"]) && !mn(t2) && Mr(e2, "bpmn:FlowNode") && !Mr(e2, "bpmn:BoundaryEvent") && Sm(e2, t2.parent));
      }
      function Fm(e2, t2) {
        return !!mn(t2) || !(Mr(t2, "bpmn:Lane") && !function(e3, t3) {
          return e3 && t3 && -1 !== e3.indexOf(t3);
        }(e2, t2.parent));
      }
      function zm(e2) {
        return hp(e2, "bpmn:Process") || hp(e2, "bpmn:Collaboration");
      }
      e(hm, Qc), hm.$inject = ["eventBus"], hm.prototype.init = function() {
        this.addRule("connection.start", function(e2) {
          return function(e3) {
            if (dm(e3)) return null;
            return Dr(e3, ["bpmn:FlowNode", "bpmn:InteractionNode", "bpmn:DataObjectReference", "bpmn:DataStoreReference", "bpmn:Group", "bpmn:TextAnnotation"]);
          }(e2.source);
        }), this.addRule("connection.create", function(e2) {
          var t2 = e2.source, n2 = e2.target, i2 = e2.hints || {}, r2 = i2.targetParent;
          if (i2.targetAttach) return false;
          r2 && (n2.parent = r2);
          try {
            return Em(t2, n2);
          } finally {
            r2 && (n2.parent = null);
          }
        }), this.addRule("connection.reconnect", function(e2) {
          var t2 = e2.connection;
          return Em(e2.source, e2.target, t2);
        }), this.addRule("connection.updateWaypoints", function(e2) {
          return { type: e2.connection.type };
        }), this.addRule("shape.resize", function(e2) {
          return Nm(e2.shape, e2.newBounds);
        }), this.addRule("elements.create", function(e2) {
          var t2 = e2.elements, n2 = e2.position, i2 = e2.target;
          return !(fn(i2) && !$m(t2, i2)) && _(t2, function(e3) {
            return fn(e3) ? Em(e3.source, e3.target, e3) : e3.host ? Am(e3, e3.host, null, n2) : Bm(e3, i2, null);
          });
        }), this.addRule("elements.move", function(e2) {
          var t2 = e2.target, n2 = e2.shapes, i2 = e2.position;
          return Am(n2, t2, null, i2) || Mm(n2, t2, i2) || Dm(n2, t2) || $m(n2, t2);
        }), this.addRule("shape.create", function(e2) {
          return Bm(e2.shape, e2.target, e2.source, e2.position);
        }), this.addRule("shape.attach", function(e2) {
          return Am(e2.shape, e2.target, null, e2.position);
        }), this.addRule("element.copy", function(e2) {
          var t2 = e2.element;
          return Fm(e2.elements, t2);
        });
      }, hm.prototype.canConnectMessageFlow = jm, hm.prototype.canConnectSequenceFlow = Lm, hm.prototype.canConnectDataAssociation = Im, hm.prototype.canConnectAssociation = Om, hm.prototype.canMove = Dm, hm.prototype.canAttach = Am, hm.prototype.canReplace = Mm, hm.prototype.canDrop = Sm, hm.prototype.canInsert = $m, hm.prototype.canCreate = Bm, hm.prototype.canConnect = Em, hm.prototype.canResize = Nm, hm.prototype.canCopy = Fm;
      var Hm = { __depends__: [Bp], __init__: ["bpmnRules"], bpmnRules: ["type", hm] };
      function Gm(e2, t2) {
        e2.on("saveXML.start", 2e3, function() {
          g(t2.getRootElements(), function(e3) {
            var t3, n2 = Nr(e3);
            t3 = E(y(mt([e3], false), function(t4) {
              return t4 !== e3 && !t4.labelTarget;
            }), Nr), n2.set("planeElement", t3);
          });
        });
      }
      Gm.$inject = ["eventBus", "canvas"];
      var Vm = { __init__: ["bpmnDiOrdering"], bpmnDiOrdering: ["type", Gm] };
      function Wm(e2) {
        ua.call(this, e2);
        var t2 = this;
        this.preExecute(["shape.create", "connection.create"], function(e3) {
          var n2 = e3.context, i2 = n2.shape || n2.connection, r2 = n2.parent, o2 = t2.getOrdering(i2, r2);
          o2 && (void 0 !== o2.parent && (n2.parent = o2.parent), n2.parentIndex = o2.index);
        }), this.preExecute(["shape.move", "connection.move"], function(e3) {
          var n2 = e3.context, i2 = n2.shape || n2.connection, r2 = n2.newParent || i2.parent, o2 = t2.getOrdering(i2, r2);
          o2 && (void 0 !== o2.parent && (n2.newParent = o2.parent), n2.newParentIndex = o2.index);
        });
      }
      function Um(e2, t2, n2) {
        Wm.call(this, e2);
        var i2 = [{ type: "bpmn:SubProcess", order: { level: 6 } }, { type: "bpmn:SequenceFlow", order: { level: 9, containers: ["bpmn:Participant", "bpmn:FlowElementsContainer"] } }, { type: "bpmn:DataAssociation", order: { level: 9, containers: ["bpmn:Collaboration", "bpmn:FlowElementsContainer"] } }, { type: "bpmn:MessageFlow", order: { level: 9, containers: ["bpmn:Collaboration"] } }, { type: "bpmn:Association", order: { level: 6, containers: ["bpmn:Participant", "bpmn:FlowElementsContainer", "bpmn:Collaboration"] } }, { type: "bpmn:BoundaryEvent", order: { level: 8 } }, { type: "bpmn:Group", order: { level: 10, containers: ["bpmn:Collaboration", "bpmn:FlowElementsContainer"] } }, { type: "bpmn:FlowElement", order: { level: 5 } }, { type: "bpmn:Participant", order: { level: -2 } }, { type: "bpmn:Lane", order: { level: -1 } }];
        function r2(e3) {
          var t3 = e3.order;
          if (t3 || (e3.order = t3 = function(e4) {
            if (e4.labelTarget) return { level: 10 };
            var t4 = m(i2, function(t5) {
              return Dr(e4, [t5.type]);
            });
            return t4 && t4.order || { level: 1 };
          }(e3)), !t3) throw new Error("no order for <" + e3.id + ">");
          return t3;
        }
        this.getOrdering = function(e3, n3) {
          if (e3.labelTarget) return { parent: t2.findRoot(n3) || t2.getRootElement(), index: -1 };
          var i3 = r2(e3);
          i3.containers && (n3 = function(e4, t3, n4) {
            for (var i4 = t3; i4 && !Dr(i4, n4); ) i4 = i4.parent;
            if (!i4) throw new Error("no parent for <" + e4.id + "> in <" + (t3 && t3.id) + ">");
            return i4;
          }(e3, n3, i3.containers));
          var o2 = n3.children.indexOf(e3), a2 = v(n3.children, function(t3) {
            return !(!e3.labelTarget && t3.labelTarget) && i3.level < r2(t3).level;
          });
          return -1 !== a2 && -1 !== o2 && o2 < a2 && (a2 -= 1), { index: a2, parent: n3 };
        };
      }
      Wm.prototype.getOrdering = function(e2, t2) {
        return null;
      }, e(Wm, ua), Um.$inject = ["eventBus", "canvas", "translate"], e(Um, Wm);
      var qm = { __depends__: [ko], __init__: ["bpmnOrderingProvider"], bpmnOrderingProvider: ["type", Um] };
      function Km(e2, t2) {
        this._eventBus = e2, this._dragging = t2, this._tools = [], this._active = null;
      }
      Km.$inject = ["eventBus", "dragging"], Km.prototype.registerTool = function(e2, t2) {
        var n2 = this._tools;
        if (!t2) throw new Error(`A tool has to be registered with it's "events"`);
        n2.push(e2), this.bindEvents(e2, t2);
      }, Km.prototype.isActive = function(e2) {
        return e2 && this._active === e2;
      }, Km.prototype.length = function(e2) {
        return this._tools.length;
      }, Km.prototype.setActive = function(e2) {
        var t2 = this._eventBus;
        this._active !== e2 && (this._active = e2, t2.fire("tool-manager.update", { tool: e2 }));
      }, Km.prototype.bindEvents = function(e2, t2) {
        var n2 = this._eventBus, i2 = this._dragging, r2 = [];
        n2.on(t2.tool + ".init", function(t3) {
          if (!t3.context.reactivate && this.isActive(e2)) return this.setActive(null), void i2.cancel();
          this.setActive(e2);
        }, this), g(t2, function(e3) {
          r2.push(e3 + ".ended"), r2.push(e3 + ".canceled");
        }), n2.on(r2, 250, function(e3) {
          this._active && (function(e4) {
            var t3 = e4.originalEvent && e4.originalEvent.target;
            return t3 && ee(t3, '.group[data-group="tools"]');
          }(e3) || this.setActive(null));
        }, this);
      };
      var Ym = { __depends__: [Tp], __init__: ["toolManager"], toolManager: ["type", Km] };
      function Xm(e2, t2) {
        return -1 !== e2.indexOf(t2);
      }
      var Zm = Math.abs, Qm = Math.round, Jm = { x: "width", y: "height" }, ev = "crosshair", tv = { n: "top", w: "left", s: "bottom", e: "right" }, nv = 1500, iv = { n: "s", w: "e", s: "n", e: "w" }, rv = 20;
      function ov(e2, t2, n2, i2, r2, o2, a2) {
        this._canvas = e2, this._dragging = t2, this._eventBus = n2, this._modeling = i2, this._rules = r2, this._toolManager = o2, this._mouse = a2;
        var s2 = this;
        o2.registerTool("space", { tool: "spaceTool.selection", dragging: "spaceTool" }), n2.on("spaceTool.selection.end", function(e3) {
          n2.once("spaceTool.selection.ended", function() {
            s2.activateMakeSpace(e3.originalEvent);
          });
        }), n2.on("spaceTool.move", nv, function(e3) {
          var t3 = e3.context, n3 = t3.initialized;
          n3 || (n3 = t3.initialized = s2.init(e3, t3)), n3 && sv(e3);
        }), n2.on("spaceTool.end", function(e3) {
          var t3 = e3.context, i3 = t3.axis, r3 = t3.direction, o3 = t3.movingShapes, a3 = t3.resizingShapes, c2 = t3.start;
          if (t3.initialized) {
            sv(e3);
            var p2 = { x: 0, y: 0 };
            p2[i3] = Qm(e3["d" + i3]), s2.makeSpace(o3, a3, p2, r3, c2), n2.once("spaceTool.ended", function(e4) {
              s2.activateSelection(e4.originalEvent, true, true);
            });
          }
        });
      }
      function av(e2) {
        return { top: e2.top - rv, right: e2.right + rv, bottom: e2.bottom + rv, left: e2.left - rv };
      }
      function sv(e2) {
        var t2, n2, i2 = e2.context.spaceToolConstraints;
        i2 && (u(i2.left) && (t2 = Math.max(e2.x, i2.left), e2.dx = e2.dx + t2 - e2.x, e2.x = t2), u(i2.right) && (t2 = Math.min(e2.x, i2.right), e2.dx = e2.dx + t2 - e2.x, e2.x = t2), u(i2.top) && (n2 = Math.max(e2.y, i2.top), e2.dy = e2.dy + n2 - e2.y, e2.y = n2), u(i2.bottom) && (n2 = Math.min(e2.y, i2.bottom), e2.dy = e2.dy + n2 - e2.y, e2.y = n2));
      }
      function cv(e2, t2) {
        return -1 !== e2.indexOf(t2);
      }
      ov.$inject = ["canvas", "dragging", "eventBus", "modeling", "rules", "toolManager", "mouse"], ov.prototype.activateSelection = function(e2, t2, n2) {
        this._dragging.init(e2, "spaceTool.selection", { autoActivate: t2, cursor: ev, data: { context: { reactivate: n2 } }, trapClick: false });
      }, ov.prototype.activateMakeSpace = function(e2) {
        this._dragging.init(e2, "spaceTool", { autoActivate: true, cursor: ev, data: { context: {} } });
      }, ov.prototype.makeSpace = function(e2, t2, n2, i2, r2) {
        return this._modeling.createSpace(e2, t2, n2, i2, r2);
      }, ov.prototype.init = function(e2, t2) {
        var n2 = Zm(e2.dx) > Zm(e2.dy) ? "x" : "y", i2 = e2["d" + n2], r2 = e2[n2] - i2;
        if (Zm(i2) < 5) return false;
        i2 < 0 && (i2 *= -1), zo(e2) && (i2 *= -1);
        var o2 = function(e3, t3) {
          if ("x" === e3) {
            if (t3 > 0) return "e";
            if (t3 < 0) return "w";
          }
          if ("y" === e3) {
            if (t3 > 0) return "s";
            if (t3 < 0) return "n";
          }
          return null;
        }(n2, i2), a2 = mt(this._canvas.getRootElement(), true), s2 = this.calculateAdjustments(a2, n2, i2, r2), c2 = function(e3, t3, n3, i3, r3) {
          var o3 = e3.movingShapes, a3 = e3.resizingShapes;
          if (!a3.length) return;
          var s3, c3, p2 = {};
          return g(a3, function(e4) {
            var l2, h2, d2, f2, m2, v2, g2 = e4.attachers, b2 = e4.children, x2 = gn(e4), _2 = y(b2, function(e5) {
              return !(fn(e5) || mn(e5) || cv(o3, e5) || cv(a3, e5));
            }), w2 = y(b2, function(e5) {
              return !fn(e5) && !mn(e5) && cv(o3, e5);
            }), E2 = [], S2 = [];
            _2.length && (h2 = av(gn(vt(_2))), l2 = i3 - x2[tv[n3]] + h2[tv[n3]], "n" === n3 ? p2.bottom = c3 = u(c3) ? Math.min(c3, l2) : l2 : "w" === n3 ? p2.right = c3 = u(c3) ? Math.min(c3, l2) : l2 : "s" === n3 ? p2.top = s3 = u(s3) ? Math.max(s3, l2) : l2 : "e" === n3 && (p2.left = s3 = u(s3) ? Math.max(s3, l2) : l2)), w2.length && (d2 = av(gn(vt(w2))), l2 = i3 - d2[tv[iv[n3]]] + x2[tv[iv[n3]]], "n" === n3 ? p2.bottom = c3 = u(c3) ? Math.min(c3, l2) : l2 : "w" === n3 ? p2.right = c3 = u(c3) ? Math.min(c3, l2) : l2 : "s" === n3 ? p2.top = s3 = u(s3) ? Math.max(s3, l2) : l2 : "e" === n3 && (p2.left = s3 = u(s3) ? Math.max(s3, l2) : l2)), g2 && g2.length && (g2.forEach(function(e5) {
              cv(o3, e5) ? E2.push(e5) : S2.push(e5);
            }), E2.length && (f2 = gn(vt(E2.map(_n))), m2 = x2[tv[iv[n3]]] - (f2[tv[iv[n3]]] - i3)), S2.length && (v2 = gn(vt(S2.map(_n)))[tv[n3]] - (x2[tv[n3]] - i3)), "n" === n3 ? (l2 = Math.min(m2 || 1 / 0, v2 || 1 / 0), p2.bottom = c3 = u(c3) ? Math.min(c3, l2) : l2) : "w" === n3 ? (l2 = Math.min(m2 || 1 / 0, v2 || 1 / 0), p2.right = c3 = u(c3) ? Math.min(c3, l2) : l2) : "s" === n3 ? (l2 = Math.max(m2 || -1 / 0, v2 || -1 / 0), p2.top = s3 = u(s3) ? Math.max(s3, l2) : l2) : "e" === n3 && (l2 = Math.max(m2 || -1 / 0, v2 || -1 / 0), p2.left = s3 = u(s3) ? Math.max(s3, l2) : l2));
            var C2 = r3 && r3[e4.id];
            C2 && ("n" === n3 ? (l2 = i3 + e4[Jm[t3]] - C2[Jm[t3]], p2.bottom = c3 = u(c3) ? Math.min(c3, l2) : l2) : "w" === n3 ? (l2 = i3 + e4[Jm[t3]] - C2[Jm[t3]], p2.right = c3 = u(c3) ? Math.min(c3, l2) : l2) : "s" === n3 ? (l2 = i3 - e4[Jm[t3]] + C2[Jm[t3]], p2.top = s3 = u(s3) ? Math.max(s3, l2) : l2) : "e" === n3 && (l2 = i3 - e4[Jm[t3]] + C2[Jm[t3]], p2.left = s3 = u(s3) ? Math.max(s3, l2) : l2));
          }), p2;
        }(s2, n2, o2, r2, this._eventBus.fire("spaceTool.getMinDimensions", { axis: n2, direction: o2, shapes: s2.resizingShapes, start: r2 }));
        return L(t2, s2, { axis: n2, direction: o2, spaceToolConstraints: c2, start: r2 }), Qa("resize-" + ("x" === n2 ? "ew" : "ns")), true;
      }, ov.prototype.calculateAdjustments = function(e2, t2, n2, i2) {
        var r2 = this._rules, o2 = [], a2 = [], s2 = [], c2 = [];
        function p2(e3) {
          o2.includes(e3) || o2.push(e3);
          var t3 = e3.label;
          t3 && !o2.includes(t3) && o2.push(t3);
        }
        g(e2, function(e3) {
          if (e3.parent && !mn(e3)) if (fn(e3)) c2.push(e3);
          else {
            var o3 = e3[t2], l3 = o3 + e3[Jm[t2]];
            if (function(e4) {
              return !!e4.host;
            }(e3) && (n2 > 0 && _n(e3)[t2] > i2 || n2 < 0 && _n(e3)[t2] < i2)) s2.push(e3);
            else {
              var u2;
              if (!(n2 > 0 && o3 > i2 || n2 < 0 && l3 < i2)) return o3 < i2 && l3 > i2 && r2.allowed("shape.resize", { shape: e3 }) ? (u2 = e3, void (a2.includes(u2) || a2.push(u2))) : void 0;
              p2(e3);
            }
          }
        }), g(o2, function(e3) {
          var t3 = e3.attachers;
          t3 && g(t3, function(e4) {
            p2(e4);
          });
        });
        var l2 = o2.concat(a2);
        return g(s2, function(e3) {
          var t3 = e3.host;
          cv(l2, t3) && p2(e3);
        }), l2 = o2.concat(a2), g(c2, function(e3) {
          var t3 = e3.source, n3 = e3.target, i3 = e3.label;
          cv(l2, t3) && cv(l2, n3) && i3 && p2(i3);
        }), { movingShapes: o2, resizingShapes: a2 };
      }, ov.prototype.toggle = function() {
        if (this.isActive()) return this._dragging.cancel();
        var e2 = this._mouse.getLastMoveEvent();
        this.activateSelection(e2, !!e2);
      }, ov.prototype.isActive = function() {
        var e2 = this._dragging.context();
        return !!e2 && /^spaceTool/.test(e2.prefix);
      };
      var pv = "djs-dragging", lv = "djs-resizing", uv = Math.max;
      function hv(e2, t2, n2, i2, r2) {
        function o2(e3, t3) {
          g(e3, function(e4) {
            r2.addDragger(e4, t3), n2.addMarker(e4, pv);
          });
        }
        e2.on("spaceTool.selection.start", function(e3) {
          var t3 = n2.getLayer("space"), r3 = e3.context, o3 = "M 0,-10000 L 0,10000", a2 = "M -10000,0 L 10000,0", s2 = De("g");
          we(s2, i2.cls("djs-crosshair-group", ["no-events"])), ge(t3, s2);
          var c2 = De("path");
          we(c2, "d", o3), Se(c2).add("djs-crosshair"), ge(s2, c2);
          var p2 = De("path");
          we(p2, "d", a2), Se(p2).add("djs-crosshair"), ge(s2, p2), r3.crosshairGroup = s2;
        }), e2.on("spaceTool.selection.move", function(e3) {
          ii(e3.context.crosshairGroup, e3.x, e3.y);
        }), e2.on("spaceTool.selection.cleanup", function(e3) {
          var t3 = e3.context.crosshairGroup;
          t3 && Re(t3);
        }), e2.on("spaceTool.move", 250, function(e3) {
          var a2 = e3.context, s2 = a2.line, c2 = a2.axis, p2 = a2.movingShapes, l2 = a2.resizingShapes;
          if (a2.initialized) {
            if (!a2.dragGroup) {
              var u2 = n2.getLayer("space");
              we(s2 = De("path"), "d", "M0,0 L0,0"), Se(s2).add("djs-crosshair"), ge(u2, s2), a2.line = s2;
              var h2 = De("g");
              we(h2, i2.cls("djs-drag-group", ["no-events"])), ge(n2.getActiveLayer(), h2), o2(p2, h2), o2(a2.movingConnections = t2.filter(function(e4) {
                var t3 = false;
                g(p2, function(n4) {
                  g(n4.outgoing, function(n5) {
                    e4 === n5 && (t3 = true);
                  });
                });
                var n3 = false;
                g(p2, function(t4) {
                  g(t4.incoming, function(t5) {
                    e4 === t5 && (n3 = true);
                  });
                });
                var i3 = false;
                g(l2, function(t4) {
                  g(t4.outgoing, function(t5) {
                    e4 === t5 && (i3 = true);
                  });
                });
                var r3 = false;
                return g(l2, function(t4) {
                  g(t4.incoming, function(t5) {
                    e4 === t5 && (r3 = true);
                  });
                }), fn(e4) && (t3 || i3) && (n3 || r3);
              }), h2), a2.dragGroup = h2;
            }
            if (!a2.frameGroup) {
              var d2 = De("g");
              we(d2, i2.cls("djs-frame-group", ["no-events"])), ge(n2.getActiveLayer(), d2);
              var f2 = [];
              g(l2, function(e4) {
                var t3 = r2.addFrame(e4, d2), i3 = t3.getBBox();
                f2.push({ element: t3, initialBounds: i3 }), n2.addMarker(e4, lv);
              }), a2.frameGroup = d2, a2.frames = f2;
            }
            we(s2, { d: { x: "M" + e3.x + ", -10000 L" + e3.x + ", 10000", y: "M -10000, " + e3.y + " L 10000, " + e3.y }[c2] });
            var m2 = { x: e3.dx, y: e3.dy };
            m2[{ x: "y", y: "x" }[a2.axis]] = 0, ii(a2.dragGroup, m2.x, m2.y), g(a2.frames, function(e4) {
              var t3, n3, i3 = e4.element, r3 = e4.initialBounds;
              "e" === a2.direction ? we(i3, { width: uv(r3.width + m2.x, 5) }) : we(i3, { width: t3 = uv(r3.width - m2.x, 5), x: r3.x + r3.width - t3 }), "s" === a2.direction ? we(i3, { height: uv(r3.height + m2.y, 5) }) : we(i3, { height: n3 = uv(r3.height - m2.y, 5), y: r3.y + r3.height - n3 });
            });
          }
        }), e2.on("spaceTool.cleanup", function(e3) {
          var t3 = e3.context, i3 = t3.movingShapes, r3 = t3.movingConnections, o3 = t3.resizingShapes, a2 = t3.line, s2 = t3.dragGroup, c2 = t3.frameGroup;
          g(i3, function(e4) {
            n2.removeMarker(e4, pv);
          }), g(r3, function(e4) {
            n2.removeMarker(e4, pv);
          }), s2 && (Re(a2), Re(s2)), g(o3, function(e4) {
            n2.removeMarker(e4, lv);
          }), c2 && Re(c2);
        });
      }
      hv.$inject = ["eventBus", "elementRegistry", "canvas", "styles", "previewSupport"];
      var dv = { __init__: ["spaceToolPreview"], __depends__: [Tp, Bp, Ym, Kl, cu], spaceTool: ["type", ov], spaceToolPreview: ["type", hv] };
      function fv(e2) {
        e2.invoke(ov, this);
      }
      fv.$inject = ["injector"], e(fv, ov), fv.prototype.calculateAdjustments = function(e2, t2, n2, i2) {
        var r2 = ov.prototype.calculateAdjustments.call(this, e2, t2, n2, i2);
        return r2.resizingShapes = r2.resizingShapes.filter(function(e3) {
          return !Mr(e3, "bpmn:TextAnnotation") && ("y" !== t2 || !function(e4) {
            return Mr(e4, "bpmn:Participant") && !Br(e4).processRef;
          }(e3));
        }), r2;
      };
      var mv = { __depends__: [dv], spaceTool: ["type", fv] };
      function vv(e2, t2) {
        this._handlerMap = {}, this._stack = [], this._stackIdx = -1, this._currentExecution = { actions: [], dirty: [], trigger: null }, this._injector = t2, this._eventBus = e2, this._uid = 1, e2.on(["diagram.destroy", "diagram.clear"], function() {
          this.clear(false);
        }, this);
      }
      vv.$inject = ["eventBus", "injector"], vv.prototype.execute = function(e2, t2) {
        if (!e2) throw new Error("command required");
        this._currentExecution.trigger = "execute";
        const n2 = { command: e2, context: t2 };
        this._pushAction(n2), this._internalExecute(n2), this._popAction();
      }, vv.prototype.canExecute = function(e2, t2) {
        const n2 = { command: e2, context: t2 }, i2 = this._getHandler(e2);
        let r2 = this._fire(e2, "canExecute", n2);
        if (void 0 === r2) {
          if (!i2) return false;
          i2.canExecute && (r2 = i2.canExecute(t2));
        }
        return r2;
      }, vv.prototype.clear = function(e2) {
        this._stack.length = 0, this._stackIdx = -1, false !== e2 && this._fire("changed", { trigger: "clear" });
      }, vv.prototype.undo = function() {
        let e2, t2 = this._getUndoAction();
        if (t2) {
          for (this._currentExecution.trigger = "undo", this._pushAction(t2); t2 && (this._internalUndo(t2), e2 = this._getUndoAction(), e2 && e2.id === t2.id); ) t2 = e2;
          this._popAction();
        }
      }, vv.prototype.redo = function() {
        let e2, t2 = this._getRedoAction();
        if (t2) {
          for (this._currentExecution.trigger = "redo", this._pushAction(t2); t2 && (this._internalExecute(t2, true), e2 = this._getRedoAction(), e2 && e2.id === t2.id); ) t2 = e2;
          this._popAction();
        }
      }, vv.prototype.register = function(e2, t2) {
        this._setHandler(e2, t2);
      }, vv.prototype.registerHandler = function(e2, t2) {
        if (!e2 || !t2) throw new Error("command and handlerCls must be defined");
        const n2 = this._injector.instantiate(t2);
        this.register(e2, n2);
      }, vv.prototype.canUndo = function() {
        return !!this._getUndoAction();
      }, vv.prototype.canRedo = function() {
        return !!this._getRedoAction();
      }, vv.prototype._getRedoAction = function() {
        return this._stack[this._stackIdx + 1];
      }, vv.prototype._getUndoAction = function() {
        return this._stack[this._stackIdx];
      }, vv.prototype._internalUndo = function(e2) {
        const t2 = e2.command, n2 = e2.context, i2 = this._getHandler(t2);
        this._atomicDo(() => {
          this._fire(t2, "revert", e2), i2.revert && this._markDirty(i2.revert(n2)), this._revertedAction(e2), this._fire(t2, "reverted", e2);
        });
      }, vv.prototype._fire = function(e2, t2, n2) {
        arguments.length < 3 && (n2 = t2, t2 = null);
        const i2 = t2 ? [e2 + "." + t2, t2] : [e2];
        let r2;
        n2 = this._eventBus.createEvent(n2);
        for (const e3 of i2) if (r2 = this._eventBus.fire("commandStack." + e3, n2), n2.cancelBubble) break;
        return r2;
      }, vv.prototype._createId = function() {
        return this._uid++;
      }, vv.prototype._atomicDo = function(e2) {
        const t2 = this._currentExecution;
        t2.atomic = true;
        try {
          e2();
        } finally {
          t2.atomic = false;
        }
      }, vv.prototype._internalExecute = function(e2, t2) {
        const n2 = e2.command, i2 = e2.context, r2 = this._getHandler(n2);
        if (!r2) throw new Error("no command handler registered for <" + n2 + ">");
        this._pushAction(e2), t2 || (this._fire(n2, "preExecute", e2), r2.preExecute && r2.preExecute(i2), this._fire(n2, "preExecuted", e2)), this._atomicDo(() => {
          this._fire(n2, "execute", e2), r2.execute && this._markDirty(r2.execute(i2)), this._executedAction(e2, t2), this._fire(n2, "executed", e2);
        }), t2 || (this._fire(n2, "postExecute", e2), r2.postExecute && r2.postExecute(i2), this._fire(n2, "postExecuted", e2)), this._popAction();
      }, vv.prototype._pushAction = function(e2) {
        const t2 = this._currentExecution, n2 = t2.actions, i2 = n2[0];
        if (t2.atomic) throw new Error("illegal invocation in <execute> or <revert> phase (action: " + e2.command + ")");
        e2.id || (e2.id = i2 && i2.id || this._createId()), n2.push(e2);
      }, vv.prototype._popAction = function() {
        const e2 = this._currentExecution, t2 = e2.trigger, n2 = e2.actions, i2 = e2.dirty;
        n2.pop(), n2.length || (this._eventBus.fire("elements.changed", { elements: P("id", i2.reverse()) }), i2.length = 0, this._fire("changed", { trigger: t2 }), e2.trigger = null);
      }, vv.prototype._markDirty = function(e2) {
        const t2 = this._currentExecution;
        e2 && (e2 = p(e2) ? e2 : [e2], t2.dirty = t2.dirty.concat(e2));
      }, vv.prototype._executedAction = function(e2, t2) {
        const n2 = ++this._stackIdx;
        t2 || this._stack.splice(n2, this._stack.length, e2);
      }, vv.prototype._revertedAction = function(e2) {
        this._stackIdx--;
      }, vv.prototype._getHandler = function(e2) {
        return this._handlerMap[e2];
      }, vv.prototype._setHandler = function(e2, t2) {
        if (!e2 || !t2) throw new Error("command and handler required");
        if (this._handlerMap[e2]) throw new Error("overriding handler for command <" + e2 + ">");
        this._handlerMap[e2] = t2;
      };
      var yv = { commandStack: ["type", vv] }, gv = new na("tt");
      function bv(e2, t2) {
        e2.style.display = false === t2 ? "none" : "";
      }
      var xv = "djs-tooltip", _v = "." + xv;
      function wv(e2, t2) {
        var n2, i2;
        this._eventBus = e2, this._canvas = t2, this._ids = gv, this._tooltipDefaults = { show: { minZoom: 0.7, maxZoom: 5 } }, this._tooltips = {}, this._tooltipRoot = (n2 = t2.getContainer(), q(i2 = de('<div class="djs-tooltip-container" />'), { position: "absolute", width: "0", height: "0" }), n2.insertBefore(i2, n2.firstChild), i2);
        var r2 = this;
        pe.bind(this._tooltipRoot, _v, "mousedown", function(e3) {
          e3.stopPropagation();
        }), pe.bind(this._tooltipRoot, _v, "mouseover", function(e3) {
          r2.trigger("mouseover", e3);
        }), pe.bind(this._tooltipRoot, _v, "mouseout", function(e3) {
          r2.trigger("mouseout", e3);
        }), this._init();
      }
      wv.$inject = ["eventBus", "canvas"], wv.prototype.add = function(e2) {
        if (!e2.position) throw new Error("must specifiy tooltip position");
        if (!e2.html) throw new Error("must specifiy tooltip html");
        var t2 = this._ids.next();
        return e2 = L({}, this._tooltipDefaults, e2, { id: t2 }), this._addTooltip(e2), e2.timeout && this.setTimeout(e2), t2;
      }, wv.prototype.trigger = function(e2, t2) {
        var n2 = t2.delegateTarget || t2.target, i2 = this.get(K(n2, "data-tooltip-id"));
        i2 && ("mouseover" === e2 && i2.timeout && this.clearTimeout(i2), "mouseout" === e2 && i2.timeout && (i2.timeout = 1e3, this.setTimeout(i2)));
      }, wv.prototype.get = function(e2) {
        return "string" != typeof e2 && (e2 = e2.id), this._tooltips[e2];
      }, wv.prototype.clearTimeout = function(e2) {
        if (e2 = this.get(e2)) {
          var t2 = e2.removeTimer;
          t2 && (clearTimeout(t2), e2.removeTimer = null);
        }
      }, wv.prototype.setTimeout = function(e2) {
        if (e2 = this.get(e2)) {
          this.clearTimeout(e2);
          var t2 = this;
          e2.removeTimer = setTimeout(function() {
            t2.remove(e2);
          }, e2.timeout);
        }
      }, wv.prototype.remove = function(e2) {
        var t2 = this.get(e2);
        t2 && (ve(t2.html), ve(t2.htmlContainer), delete t2.htmlContainer, delete this._tooltips[t2.id]);
      }, wv.prototype.show = function() {
        bv(this._tooltipRoot);
      }, wv.prototype.hide = function() {
        bv(this._tooltipRoot, false);
      }, wv.prototype._updateRoot = function(e2) {
        var t2 = e2.scale || 1, n2 = e2.scale || 1, i2 = "matrix(" + t2 + ",0,0," + n2 + "," + -1 * e2.x * t2 + "," + -1 * e2.y * n2 + ")";
        this._tooltipRoot.style.transform = i2, this._tooltipRoot.style["-ms-transform"] = i2;
      }, wv.prototype._addTooltip = function(e2) {
        var t2, n2 = e2.id, i2 = e2.html, r2 = this._tooltipRoot;
        i2.get && i2.constructor.prototype.jquery && (i2 = i2.get(0)), d(i2) && (i2 = de(i2)), q(t2 = de('<div data-tooltip-id="' + n2 + '" class="' + xv + '">'), { position: "absolute" }), t2.appendChild(i2), e2.type && X(t2).add("djs-tooltip-" + e2.type), e2.className && X(t2).add(e2.className), e2.htmlContainer = t2, r2.appendChild(t2), this._tooltips[n2] = e2, this._updateTooltip(e2);
      }, wv.prototype._updateTooltip = function(e2) {
        var t2 = e2.position;
        !function(e3, t3, n2) {
          q(e3, { left: t3 + "px", top: n2 + "px" });
        }(e2.htmlContainer, t2.x, t2.y);
      }, wv.prototype._updateTooltipVisibilty = function(e2) {
        g(this._tooltips, function(t2) {
          var n2 = t2.show, i2 = t2.htmlContainer, r2 = true;
          n2 && ((n2.minZoom > e2.scale || n2.maxZoom < e2.scale) && (r2 = false), bv(i2, r2));
        });
      }, wv.prototype._init = function() {
        var e2 = this;
        this._eventBus.on("canvas.viewbox.changing", function(t2) {
          e2.hide();
        }), this._eventBus.on("canvas.viewbox.changed", function(t2) {
          var n2;
          n2 = t2.viewbox, e2._updateRoot(n2), e2._updateTooltipVisibilty(n2), e2.show();
        });
      };
      var Ev = { __init__: ["tooltips"], tooltips: ["type", wv] };
      function Sv(e2, t2) {
        if ("function" != typeof t2) throw new Error("removeFn iterator must be a function");
        if (e2) {
          for (var n2; n2 = e2[0]; ) t2(n2);
          return e2;
        }
      }
      function Cv(e2, t2, n2) {
        ua.call(this, t2);
        var i2 = e2.get("movePreview", false);
        t2.on("shape.move.start", 1400, function(e3) {
          var t3 = e3.context, n3 = t3.shapes, i3 = t3.validatedShapes;
          t3.shapes = Rv(n3), t3.validatedShapes = Rv(i3);
        }), i2 && t2.on("shape.move.start", 250, function(e3) {
          var t3 = e3.context, n3 = t3.shapes, r2 = [];
          g(n3, function(e4) {
            g(e4.labels, function(n4) {
              n4.hidden || -1 !== t3.shapes.indexOf(n4) || r2.push(n4), e4.labelTarget && r2.push(e4);
            });
          }), g(r2, function(e4) {
            i2.makeDraggable(t3, e4, true);
          });
        }), this.preExecuted("elements.move", 1400, function(e3) {
          var t3 = e3.context.closure, n3 = t3.enclosedElements, i3 = [];
          g(n3, function(e4) {
            g(e4.labels, function(e5) {
              n3[e5.id] || i3.push(e5);
            });
          }), t3.addAll(i3);
        }), this.preExecute(["connection.delete", "shape.delete"], function(e3) {
          var t3 = e3.context;
          Sv((t3.connection || t3.shape).labels, function(e4) {
            n2.removeShape(e4, { nested: true });
          });
        }), this.execute("shape.delete", function(e3) {
          var t3 = e3.context, n3 = t3.shape, i3 = n3.labelTarget;
          i3 && (t3.labelTargetIndex = St(i3.labels, n3), t3.labelTarget = i3, n3.labelTarget = null);
        }), this.revert("shape.delete", function(e3) {
          var t3 = e3.context, n3 = t3.shape, i3 = t3.labelTarget, r2 = t3.labelTargetIndex;
          i3 && (Et(i3.labels, n3, r2), n3.labelTarget = i3);
        });
      }
      function Rv(e2) {
        return y(e2, function(t2) {
          return -1 === e2.indexOf(t2.labelTarget);
        });
      }
      e(Cv, ua), Cv.$inject = ["injector", "eventBus", "modeling"];
      var Pv = { __init__: ["labelSupport"], labelSupport: ["type", Cv] }, Tv = "attach-ok";
      function kv(e2, t2, n2, i2, r2) {
        ua.call(this, t2);
        var o2 = e2.get("movePreview", false);
        t2.on("shape.move.start", 1401, function(e3) {
          var t3, n3, i3 = e3.context, r3 = i3.shapes, o3 = i3.validatedShapes;
          i3.shapes = (n3 = Av(t3 = r3), T("id", t3, n3)), i3.validatedShapes = function(e4) {
            var t4 = R(e4, "id");
            return y(e4, function(e5) {
              for (; e5; ) {
                if (e5.host && t4[e5.host.id]) return false;
                e5 = e5.parent;
              }
              return true;
            });
          }(o3);
        }), o2 && t2.on("shape.move.start", 251, function(e3) {
          var t3 = e3.context;
          g(Av(t3.shapes), function(e4) {
            o2.makeDraggable(t3, e4, true), g(e4.labels, function(e5) {
              o2.makeDraggable(t3, e5, true);
            });
          });
        }), o2 && t2.on("shape.move.start", function(e3) {
          var i3 = e3.context.shapes;
          if (1 === i3.length) {
            var r3 = i3[0].host;
            r3 && (n2.addMarker(r3, Tv), t2.once(["shape.move.out", "shape.move.cleanup"], function() {
              n2.removeMarker(r3, Tv);
            }));
          }
        }), this.preExecuted("elements.move", 1401, function(e3) {
          var t3 = e3.context, n3 = t3.closure;
          g(Av(t3.shapes), function(e4) {
            n3.add(e4, n3.topLevel[e4.host.id]);
          });
        }), this.postExecuted("elements.move", function(e3) {
          var t3 = e3.context, n3 = t3.shapes, i3 = t3.newHost;
          i3 && 1 !== n3.length || g(i3 ? n3 : y(n3, function(e4) {
            var t4, i4 = e4.host;
            return function(e5) {
              return !!e5.host;
            }(e4) && (t4 = i4, !(-1 !== n3.indexOf(t4)));
          }), function(e4) {
            r2.updateAttachment(e4, i3);
          });
        }), this.postExecuted("elements.move", function(e3) {
          g(e3.context.shapes, function(e4) {
            g(e4.attachers, function(e5) {
              g(e5.outgoing.slice(), function(e6) {
                i2.allowed("connection.reconnect", { connection: e6, source: e6.source, target: e6.target }) || r2.removeConnection(e6);
              }), g(e5.incoming.slice(), function(e6) {
                i2.allowed("connection.reconnect", { connection: e6, source: e6.source, target: e6.target }) || r2.removeConnection(e6);
              });
            });
          });
        }), this.postExecute("shape.create", function(e3) {
          var t3 = e3.context, n3 = t3.shape, i3 = t3.host;
          i3 && r2.updateAttachment(n3, i3);
        }), this.postExecute("shape.replace", function(e3) {
          var t3 = e3.context, n3 = t3.oldShape, o3 = t3.newShape;
          Sv(n3.attachers, function(e4) {
            "attach" === i2.allowed("elements.move", { target: o3, shapes: [e4] }) ? r2.updateAttachment(e4, o3) : r2.removeShape(e4);
          }), o3.attachers.length && g(o3.attachers, function(e4) {
            var t4 = lf(e4, n3, o3);
            r2.moveShape(e4, t4, e4.parent);
          });
        }), this.postExecute("shape.resize", function(e3) {
          var t3 = e3.context, n3 = t3.shape, i3 = t3.oldBounds, o3 = t3.newBounds, a2 = n3.attachers;
          false !== (t3.hints || {}).attachSupport && g(a2, function(e4) {
            var t4 = lf(e4, i3, o3);
            r2.moveShape(e4, t4, e4.parent), g(e4.labels, function(e5) {
              r2.moveShape(e5, t4, e5.parent);
            });
          });
        }), this.preExecute("shape.delete", function(e3) {
          var t3 = e3.context.shape;
          Sv(t3.attachers, function(e4) {
            r2.removeShape(e4);
          }), t3.host && r2.updateAttachment(t3, null);
        });
      }
      function Av(e2) {
        return i(E(e2, function(e3) {
          return e3.attachers || [];
        }));
      }
      e(kv, ua), kv.$inject = ["injector", "eventBus", "canvas", "rules", "modeling"];
      var Mv = { __depends__: [Bp], __init__: ["attachSupport"], attachSupport: ["type", kv] };
      function Dv(e2) {
        this._model = e2;
      }
      function Bv(e2, t2, n2, i2) {
        ua.call(this, e2), this._bpmnFactory = t2, this._translate = i2;
        var r2 = this;
        function o2(e3) {
          g(e3.context.oldRoot.children, function(e4) {
            Mr(e4, "bpmn:BaseElement") && r2.updateParent(e4);
          });
        }
        function a2(e3) {
          var t3 = e3.context.shape;
          Mr(t3, "bpmn:BaseElement") && r2.updateBounds(t3);
        }
        function s2(e3) {
          r2.updateConnection(e3.context);
        }
        function c2(e3) {
          r2.updateConnectionWaypoints(e3.context.connection);
        }
        function p2(e3) {
          r2.updateAttachment(e3.context);
        }
        function l2(e3) {
          const { element: n3 } = e3.context, i3 = so(n3), r3 = Nr(n3), o3 = r3 && r3.get("label");
          no(n3) || (i3 && !o3 ? r3.set("label", t2.create("bpmndi:BPMNLabel")) : !i3 && o3 && r3.set("label", void 0));
        }
        this.executed(["connection.layout", "connection.create"], function(e3) {
          var t3, i3 = e3.context, r3 = i3.hints || {};
          i3.cropped || false === r3.createElementsBehavior || ((t3 = i3.connection).waypoints = n2.getCroppedWaypoints(t3), i3.cropped = true);
        }), this.reverted(["connection.layout"], function(e3) {
          delete e3.context.cropped;
        }), this.executed(["shape.move", "shape.create", "shape.delete", "connection.create", "connection.move", "connection.delete"], Nv(function(e3) {
          var t3 = e3.context;
          r2.updateParent(t3.shape || t3.connection, t3.oldParent);
        })), this.reverted(["shape.move", "shape.create", "shape.delete", "connection.create", "connection.move", "connection.delete"], Nv(function(e3) {
          var t3 = e3.context, n3 = t3.shape || t3.connection, i3 = t3.parent || t3.newParent;
          r2.updateParent(n3, i3);
        })), this.executed(["canvas.updateRoot"], o2), this.reverted(["canvas.updateRoot"], o2), this.executed(["shape.move", "shape.create", "shape.resize"], Nv(function(e3) {
          "label" !== e3.context.shape.type && a2(e3);
        })), this.reverted(["shape.move", "shape.create", "shape.resize"], Nv(function(e3) {
          "label" !== e3.context.shape.type && a2(e3);
        })), e2.on("shape.changed", function(e3) {
          "label" === e3.element.type && a2({ context: { shape: e3.element } });
        }), this.executed(["connection.create", "connection.move", "connection.delete", "connection.reconnect"], Nv(s2)), this.reverted(["connection.create", "connection.move", "connection.delete", "connection.reconnect"], Nv(s2)), this.executed(["connection.layout", "connection.move", "connection.updateWaypoints"], Nv(c2)), this.reverted(["connection.layout", "connection.move", "connection.updateWaypoints"], Nv(c2)), this.executed("connection.reconnect", Nv(function(e3) {
          var t3 = e3.context, n3 = t3.connection, i3 = t3.oldSource, r3 = t3.newSource, o3 = Br(n3), a3 = Br(i3), s3 = Br(r3);
          o3.conditionExpression && !Dr(s3, ["bpmn:Activity", "bpmn:ExclusiveGateway", "bpmn:InclusiveGateway"]) && (t3.oldConditionExpression = o3.conditionExpression, delete o3.conditionExpression), i3 !== r3 && a3.default === o3 && (t3.oldDefault = a3.default, delete a3.default);
        })), this.reverted("connection.reconnect", Nv(function(e3) {
          var t3 = e3.context, n3 = t3.connection, i3 = t3.oldSource, r3 = t3.newSource, o3 = Br(n3), a3 = Br(i3), s3 = Br(r3);
          t3.oldConditionExpression && (o3.conditionExpression = t3.oldConditionExpression), t3.oldDefault && (a3.default = t3.oldDefault, delete s3.default);
        })), this.executed(["element.updateAttachment"], Nv(p2)), this.reverted(["element.updateAttachment"], Nv(p2)), this.executed("element.updateLabel", Nv(l2)), this.reverted("element.updateLabel", Nv(l2));
      }
      function Nv(e2) {
        return function(t2) {
          var n2 = t2.context;
          Mr(n2.shape || n2.connection || n2.element, "bpmn:BaseElement") && e2(t2);
        };
      }
      function Ov(e2, t2, n2) {
        Xn.call(this), this._bpmnFactory = e2, this._moddle = t2, this._translate = n2;
      }
      function jv(e2, t2, n2) {
        return void 0 === t2[n2] ? t2 : (e2[n2] = t2[n2], $(t2, [n2]));
      }
      function Lv(e2, t2) {
        this._modeling = e2, this._canvas = t2;
      }
      function Iv(e2) {
        this._modeling = e2;
      }
      function $v(e2, t2) {
        this._canvas = e2, this._layouter = t2;
      }
      Dv.$inject = ["moddle"], Dv.prototype._needsId = function(e2) {
        return Dr(e2, ["bpmn:RootElement", "bpmn:FlowElement", "bpmn:MessageFlow", "bpmn:DataAssociation", "bpmn:Artifact", "bpmn:Participant", "bpmn:Lane", "bpmn:LaneSet", "bpmn:Process", "bpmn:Collaboration", "bpmndi:BPMNShape", "bpmndi:BPMNEdge", "bpmndi:BPMNDiagram", "bpmndi:BPMNPlane", "bpmn:Property", "bpmn:CategoryValue"]);
      }, Dv.prototype._ensureId = function(e2) {
        var t2;
        e2.id ? this._model.ids.claim(e2.id, e2) : (t2 = Mr(e2, "bpmn:Activity") ? "Activity" : Mr(e2, "bpmn:Event") ? "Event" : Mr(e2, "bpmn:Gateway") ? "Gateway" : Dr(e2, ["bpmn:SequenceFlow", "bpmn:MessageFlow"]) ? "Flow" : (e2.$type || "").replace(/^[^:]*:/g, ""), t2 += "_", !e2.id && this._needsId(e2) && (e2.id = this._model.ids.nextPrefixed(t2, e2)));
      }, Dv.prototype.create = function(e2, t2) {
        var n2 = this._model.create(e2, t2 || {});
        return this._ensureId(n2), n2;
      }, Dv.prototype.createDiLabel = function() {
        return this.create("bpmndi:BPMNLabel", { bounds: this.createDiBounds() });
      }, Dv.prototype.createDiShape = function(e2, t2) {
        return this.create("bpmndi:BPMNShape", L({ bpmnElement: e2, bounds: this.createDiBounds() }, t2));
      }, Dv.prototype.createDiBounds = function(e2) {
        return this.create("dc:Bounds", e2);
      }, Dv.prototype.createDiWaypoints = function(e2) {
        var t2 = this;
        return E(e2, function(e3) {
          return t2.createDiWaypoint(e3);
        });
      }, Dv.prototype.createDiWaypoint = function(e2) {
        return this.create("dc:Point", I(e2, ["x", "y"]));
      }, Dv.prototype.createDiEdge = function(e2, t2) {
        return this.create("bpmndi:BPMNEdge", L({ bpmnElement: e2, waypoint: this.createDiWaypoints([]) }, t2));
      }, Dv.prototype.createDiPlane = function(e2, t2) {
        return this.create("bpmndi:BPMNPlane", L({ bpmnElement: e2 }, t2));
      }, e(Bv, ua), Bv.$inject = ["eventBus", "bpmnFactory", "connectionDocking", "translate"], Bv.prototype.updateAttachment = function(e2) {
        var t2 = e2.shape, n2 = t2.businessObject, i2 = t2.host;
        n2.attachedToRef = i2 && i2.businessObject;
      }, Bv.prototype.updateParent = function(e2, t2) {
        if (!(mn(e2) || Mr(e2, "bpmn:DataStoreReference") && e2.parent && Mr(e2.parent, "bpmn:Collaboration"))) {
          var n2 = e2.parent, i2 = e2.businessObject, r2 = Nr(e2), o2 = n2 && n2.businessObject, a2 = Nr(n2);
          Mr(e2, "bpmn:FlowNode") && this.updateFlowNodeRefs(i2, o2, t2 && t2.businessObject), Mr(e2, "bpmn:DataOutputAssociation") && (o2 = e2.source ? e2.source.businessObject : null), Mr(e2, "bpmn:DataInputAssociation") && (o2 = e2.target ? e2.target.businessObject : null), this.updateSemanticParent(i2, o2), Mr(e2, "bpmn:DataObjectReference") && i2.dataObjectRef && this.updateSemanticParent(i2.dataObjectRef, o2), this.updateDiParent(r2, a2);
        }
      }, Bv.prototype.updateBounds = function(e2) {
        var t2 = Nr(e2), n2 = function(e3) {
          if (!Mr(e3, "bpmn:Activity")) return;
          var t3 = Nr(e3);
          if (!t3) return;
          var n3 = t3.get("label");
          if (!n3) return;
          return n3.get("bounds");
        }(e2);
        if (n2) {
          var i2 = is(n2, t2.get("bounds"));
          L(n2, { x: e2.x + i2.x, y: e2.y + i2.y });
        }
        var r2 = mn(e2) ? this._getLabel(t2) : t2, o2 = r2.bounds;
        o2 || (o2 = this._bpmnFactory.createDiBounds(), r2.set("bounds", o2)), L(o2, { x: e2.x, y: e2.y, width: e2.width, height: e2.height });
      }, Bv.prototype.updateFlowNodeRefs = function(e2, t2, n2) {
        n2 !== t2 && (Mr(n2, "bpmn:Lane") && wt(n2.get("flowNodeRef"), e2), Mr(t2, "bpmn:Lane") && Et(t2.get("flowNodeRef"), e2));
      }, Bv.prototype.updateDiConnection = function(e2, t2, n2) {
        var i2 = Nr(e2), r2 = Nr(t2), o2 = Nr(n2);
        i2.sourceElement && i2.sourceElement.bpmnElement !== Br(t2) && (i2.sourceElement = t2 && r2), i2.targetElement && i2.targetElement.bpmnElement !== Br(n2) && (i2.targetElement = n2 && o2);
      }, Bv.prototype.updateDiParent = function(e2, t2) {
        if (t2 && !Mr(t2, "bpmndi:BPMNPlane") && (t2 = t2.$parent), e2.$parent !== t2) {
          var n2 = (t2 || e2.$parent).get("planeElement");
          t2 ? (n2.push(e2), e2.$parent = t2) : (wt(n2, e2), e2.$parent = null);
        }
      }, Bv.prototype.getLaneSet = function(e2) {
        var t2, n2;
        return Mr(e2, "bpmn:Lane") ? ((t2 = e2.childLaneSet) || (t2 = this._bpmnFactory.create("bpmn:LaneSet"), e2.childLaneSet = t2, t2.$parent = e2), t2) : (Mr(e2, "bpmn:Participant") && (e2 = e2.processRef), (t2 = (n2 = e2.get("laneSets"))[0]) || ((t2 = this._bpmnFactory.create("bpmn:LaneSet")).$parent = e2, n2.push(t2)), t2);
      }, Bv.prototype.updateSemanticParent = function(e2, t2, n2) {
        var i2, r2 = this._translate;
        if (e2.$parent !== t2 && (!Mr(e2, "bpmn:DataInput") && !Mr(e2, "bpmn:DataOutput") || (Mr(t2, "bpmn:Participant") && "processRef" in t2 && (t2 = t2.processRef), !("ioSpecification" in t2) || t2.ioSpecification !== e2.$parent))) {
          if (Mr(e2, "bpmn:Lane")) t2 && (t2 = this.getLaneSet(t2)), i2 = "lanes";
          else if (Mr(e2, "bpmn:FlowElement")) {
            if (t2) {
              if (Mr(t2, "bpmn:Participant")) t2 = t2.processRef;
              else if (Mr(t2, "bpmn:Lane")) do {
                t2 = t2.$parent.$parent;
              } while (Mr(t2, "bpmn:Lane"));
            }
            i2 = "flowElements";
          } else if (Mr(e2, "bpmn:Artifact")) {
            for (; t2 && !Mr(t2, "bpmn:Process") && !Mr(t2, "bpmn:SubProcess") && !Mr(t2, "bpmn:Collaboration"); ) {
              if (Mr(t2, "bpmn:Participant")) {
                t2 = t2.processRef;
                break;
              }
              t2 = t2.$parent;
            }
            i2 = "artifacts";
          } else if (Mr(e2, "bpmn:MessageFlow")) i2 = "messageFlows";
          else if (Mr(e2, "bpmn:Participant")) {
            i2 = "participants";
            var o2, a2 = e2.processRef;
            a2 && (o2 = function(e3) {
              for (; e3 && !Mr(e3, "bpmn:Definitions"); ) e3 = e3.$parent;
              return e3;
            }(e2.$parent || t2), e2.$parent && (wt(o2.get("rootElements"), a2), a2.$parent = null), t2 && (Et(o2.get("rootElements"), a2), a2.$parent = o2));
          } else Mr(e2, "bpmn:DataOutputAssociation") ? i2 = "dataOutputAssociations" : Mr(e2, "bpmn:DataInputAssociation") && (i2 = "dataInputAssociations");
          if (!i2) throw new Error(r2("no parent for {element} in {parent}", { element: e2.id, parent: t2.id }));
          var s2;
          if (e2.$parent && wt(s2 = e2.$parent.get(i2), e2), t2 ? ((s2 = t2.get(i2)).push(e2), e2.$parent = t2) : e2.$parent = null, n2) {
            var c2 = n2.get(i2);
            wt(s2, e2), t2 && (c2 || (c2 = [], t2.set(i2, c2)), c2.push(e2));
          }
        }
      }, Bv.prototype.updateConnectionWaypoints = function(e2) {
        Nr(e2).set("waypoint", this._bpmnFactory.createDiWaypoints(e2.waypoints));
      }, Bv.prototype.updateConnection = function(e2) {
        var t2, n2 = e2.connection, i2 = Br(n2), r2 = n2.source, o2 = Br(r2), a2 = n2.target, s2 = Br(n2.target);
        if (Mr(i2, "bpmn:DataAssociation")) Mr(i2, "bpmn:DataInputAssociation") ? (i2.get("sourceRef")[0] = o2, t2 = e2.parent || e2.newParent || s2, this.updateSemanticParent(i2, s2, t2)) : Mr(i2, "bpmn:DataOutputAssociation") && (t2 = e2.parent || e2.newParent || o2, this.updateSemanticParent(i2, o2, t2), i2.targetRef = s2);
        else {
          var c2 = Mr(i2, "bpmn:SequenceFlow");
          i2.sourceRef !== o2 && (c2 && (wt(i2.sourceRef && i2.sourceRef.get("outgoing"), i2), o2 && o2.get("outgoing") && o2.get("outgoing").push(i2)), i2.sourceRef = o2), i2.targetRef !== s2 && (c2 && (wt(i2.targetRef && i2.targetRef.get("incoming"), i2), s2 && s2.get("incoming") && s2.get("incoming").push(i2)), i2.targetRef = s2);
        }
        this.updateConnectionWaypoints(n2), this.updateDiConnection(n2, r2, a2);
      }, Bv.prototype._getLabel = function(e2) {
        return e2.label || (e2.label = this._bpmnFactory.createDiLabel()), e2.label;
      }, e(Ov, Xn), Ov.$inject = ["bpmnFactory", "moddle", "translate"], Ov.prototype._baseCreate = Xn.prototype.create, Ov.prototype.create = function(e2, t2) {
        if ("label" === e2) {
          var n2 = t2.di || this._bpmnFactory.createDiLabel();
          return this._baseCreate(e2, L({ type: "label", di: n2 }, eo, t2));
        }
        return this.createElement(e2, t2);
      }, Ov.prototype.createElement = function(e2, t2) {
        var n2, i2, r2, o2 = this._translate, a2 = (t2 = L({}, t2 || {})).businessObject, c2 = t2.di;
        if (!a2) {
          if (!t2.type) throw new Error(o2("no shape type specified"));
          Tr(a2 = this._bpmnFactory.create(t2.type));
        }
        if (!Dr(c2, ["bpmndi:BPMNShape", "bpmndi:BPMNEdge", "bpmndi:BPMNDiagram", "bpmndi:BPMNPlane"])) {
          var p2 = L({}, c2 || {}, { id: a2.id + "_di" });
          c2 = "root" === e2 ? this._bpmnFactory.createDiPlane(a2, p2) : "connection" === e2 ? this._bpmnFactory.createDiEdge(a2, p2) : this._bpmnFactory.createDiShape(a2, p2);
        }
        return Mr(a2, "bpmn:Group") && (t2 = L({ isFrame: true }, t2)), t2 = function(e3, t3, n3) {
          return g(n3, function(n4) {
            t3 = jv(e3, t3, n4);
          }), t3;
        }(a2, t2, ["processRef", "isInterrupting", "associationDirection", "isForCompensation"]), t2.isExpanded && (t2 = jv(c2, t2, "isExpanded")), Mr(a2, "bpmn:SubProcess") && (t2.collapsed = !Zr(a2, c2)), Mr(a2, "bpmn:ExclusiveGateway") && (c2.isMarkerVisible = true), s(t2.triggeredByEvent) && (a2.triggeredByEvent = t2.triggeredByEvent, delete t2.triggeredByEvent), s(t2.cancelActivity) && (a2.cancelActivity = t2.cancelActivity, delete t2.cancelActivity), t2.eventDefinitionType && (i2 = a2.get("eventDefinitions") || [], r2 = this._bpmnFactory.create(t2.eventDefinitionType, t2.eventDefinitionAttrs), "bpmn:ConditionalEventDefinition" === t2.eventDefinitionType && (r2.condition = this._bpmnFactory.create("bpmn:FormalExpression")), i2.push(r2), r2.$parent = a2, a2.eventDefinitions = i2, delete t2.eventDefinitionType), n2 = this.getDefaultSize(a2, c2), t2 = L({ id: a2.id }, n2, t2, { businessObject: a2, di: c2 }), this._baseCreate(e2, t2);
      }, Ov.prototype.getDefaultSize = function(e2, t2) {
        var n2 = Br(e2);
        return t2 = t2 || Nr(e2), Mr(n2, "bpmn:SubProcess") ? Zr(n2, t2) ? { width: 350, height: 200 } : { width: 100, height: 80 } : Mr(n2, "bpmn:Task") ? { width: 100, height: 80 } : Mr(n2, "bpmn:Gateway") ? { width: 50, height: 50 } : Mr(n2, "bpmn:Event") ? { width: 36, height: 36 } : Mr(n2, "bpmn:Participant") ? Zr(n2, t2) ? { width: 600, height: 250 } : { width: 400, height: 60 } : Mr(n2, "bpmn:Lane") ? { width: 400, height: 100 } : Mr(n2, "bpmn:DataObjectReference") ? { width: 36, height: 50 } : Mr(n2, "bpmn:DataStoreReference") ? { width: 50, height: 50 } : Mr(n2, "bpmn:TextAnnotation") ? { width: 100, height: 30 } : Mr(n2, "bpmn:Group") ? { width: 300, height: 300 } : { width: 100, height: 80 };
      }, Ov.prototype.createParticipantShape = function(e2) {
        return l(e2) || (e2 = { isExpanded: e2 }), false !== (e2 = L({ type: "bpmn:Participant" }, e2 || {})).isExpanded && (e2.processRef = this._bpmnFactory.create("bpmn:Process")), this.createShape(e2);
      }, Lv.$inject = ["modeling", "canvas"], Lv.prototype.preExecute = function(e2) {
        var t2 = this._modeling, n2 = e2.elements, i2 = e2.alignment;
        g(n2, function(e3) {
          var n3 = { x: 0, y: 0 };
          s(i2.left) ? n3.x = i2.left - e3.x : s(i2.right) ? n3.x = i2.right - e3.width - e3.x : s(i2.center) ? n3.x = i2.center - Math.round(e3.width / 2) - e3.x : s(i2.top) ? n3.y = i2.top - e3.y : s(i2.bottom) ? n3.y = i2.bottom - e3.height - e3.y : s(i2.middle) && (n3.y = i2.middle - Math.round(e3.height / 2) - e3.y), t2.moveElements([e3], n3, e3.parent);
        });
      }, Lv.prototype.postExecute = function(e2) {
      }, Iv.$inject = ["modeling"], Iv.prototype.preExecute = function(e2) {
        var t2 = e2.source;
        if (!t2) throw new Error("source required");
        var n2 = e2.target || t2.parent, i2 = e2.shape, r2 = e2.hints || {};
        i2 = e2.shape = this._modeling.createShape(i2, e2.position, n2, { attach: r2.attach }), e2.shape = i2;
      }, Iv.prototype.postExecute = function(e2) {
        var t2, n2, i2 = e2.hints || {};
        t2 = e2.source, n2 = e2.shape, w(t2.outgoing, function(e3) {
          return e3.target === n2;
        }) || (i2.connectionTarget === e2.source ? this._modeling.connect(e2.shape, e2.source, e2.connection) : this._modeling.connect(e2.source, e2.shape, e2.connection));
      }, $v.$inject = ["canvas", "layouter"], $v.prototype.execute = function(e2) {
        var t2 = e2.connection, n2 = e2.source, i2 = e2.target, r2 = e2.parent, o2 = e2.parentIndex, a2 = e2.hints;
        if (!n2 || !i2) throw new Error("source and target required");
        if (!r2) throw new Error("parent required");
        return t2.source = n2, t2.target = i2, t2.waypoints || (t2.waypoints = this._layouter.layoutConnection(t2, a2)), this._canvas.addConnection(t2, r2, o2), t2;
      }, $v.prototype.revert = function(e2) {
        var t2 = e2.connection;
        return this._canvas.removeConnection(t2), t2.source = null, t2.target = null, t2;
      };
      var Fv = Math.round;
      function zv(e2) {
        this._modeling = e2;
      }
      zv.$inject = ["modeling"], zv.prototype.preExecute = function(e2) {
        var t2 = e2.elements, n2 = e2.parent, i2 = e2.parentIndex, r2 = e2.position, o2 = e2.hints, a2 = this._modeling;
        g(t2, function(e3) {
          u(e3.x) || (e3.x = 0), u(e3.y) || (e3.y = 0);
        });
        var s2 = vt(y(t2, function(e3) {
          return !e3.hidden;
        }));
        g(t2, function(e3) {
          fn(e3) && (e3.waypoints = E(e3.waypoints, function(e4) {
            return { x: Fv(e4.x - s2.x - s2.width / 2 + r2.x), y: Fv(e4.y - s2.y - s2.height / 2 + r2.y) };
          })), L(e3, { x: Fv(e3.x - s2.x - s2.width / 2 + r2.x), y: Fv(e3.y - s2.y - s2.height / 2 + r2.y) });
        });
        var c2 = ut(t2), p2 = {};
        g(t2, function(e3) {
          if (fn(e3)) p2[e3.id] = u(i2) ? a2.createConnection(p2[e3.source.id], p2[e3.target.id], i2, e3, e3.parent || n2, o2) : a2.createConnection(p2[e3.source.id], p2[e3.target.id], e3, e3.parent || n2, o2);
          else {
            var t3 = L({}, o2);
            -1 === c2.indexOf(e3) && (t3.autoResize = false), mn(e3) && (t3 = $(t3, ["attach"])), p2[e3.id] = u(i2) ? a2.createShape(e3, I(e3, ["x", "y", "width", "height"]), e3.parent || n2, i2, t3) : a2.createShape(e3, I(e3, ["x", "y", "width", "height"]), e3.parent || n2, t3);
          }
        }), e2.elements = C(p2);
      };
      var Hv = Math.round;
      function Gv(e2) {
        this._canvas = e2;
      }
      function Vv(e2) {
        Gv.call(this, e2);
      }
      Gv.$inject = ["canvas"], Gv.prototype.execute = function(e2) {
        var t2 = e2.shape, n2 = e2.position, i2 = e2.parent, r2 = e2.parentIndex;
        if (!i2) throw new Error("parent required");
        if (!n2) throw new Error("position required");
        return void 0 !== n2.width ? L(t2, n2) : L(t2, { x: n2.x - Hv(t2.width / 2), y: n2.y - Hv(t2.height / 2) }), this._canvas.addShape(t2, i2, r2), t2;
      }, Gv.prototype.revert = function(e2) {
        var t2 = e2.shape;
        return this._canvas.removeShape(t2), t2;
      }, e(Vv, Gv), Vv.$inject = ["canvas"];
      var Wv = Gv.prototype.execute;
      Vv.prototype.execute = function(e2) {
        var t2 = e2.shape;
        return function(e3) {
          ["width", "height"].forEach(function(t3) {
            void 0 === e3[t3] && (e3[t3] = 0);
          });
        }(t2), t2.labelTarget = e2.labelTarget, Wv.call(this, e2);
      };
      var Uv = Gv.prototype.revert;
      function qv(e2, t2) {
        this._canvas = e2, this._modeling = t2;
      }
      function Kv(e2, t2) {
        this._modeling = e2, this._elementRegistry = t2;
      }
      function Yv(e2, t2) {
        this._canvas = e2, this._modeling = t2;
      }
      function Xv(e2) {
        this._modeling = e2;
      }
      Vv.prototype.revert = function(e2) {
        return e2.shape.labelTarget = null, Uv.call(this, e2);
      }, qv.$inject = ["canvas", "modeling"], qv.prototype.preExecute = function(e2) {
        var t2 = this._modeling, n2 = e2.connection;
        Sv(n2.incoming, function(e3) {
          t2.removeConnection(e3, { nested: true });
        }), Sv(n2.outgoing, function(e3) {
          t2.removeConnection(e3, { nested: true });
        });
      }, qv.prototype.execute = function(e2) {
        var t2 = e2.connection, n2 = t2.parent;
        return e2.parent = n2, e2.parentIndex = St(n2.children, t2), e2.source = t2.source, e2.target = t2.target, this._canvas.removeConnection(t2), t2.source = null, t2.target = null, t2;
      }, qv.prototype.revert = function(e2) {
        var t2 = e2.connection, n2 = e2.parent, i2 = e2.parentIndex;
        return t2.source = e2.source, t2.target = e2.target, Et(n2.children, t2, i2), this._canvas.addConnection(t2, n2), t2;
      }, Kv.$inject = ["modeling", "elementRegistry"], Kv.prototype.postExecute = function(e2) {
        var t2 = this._modeling, n2 = this._elementRegistry;
        g(e2.elements, function(e3) {
          n2.get(e3.id) && (e3.waypoints ? t2.removeConnection(e3) : t2.removeShape(e3));
        });
      }, Yv.$inject = ["canvas", "modeling"], Yv.prototype.preExecute = function(e2) {
        var t2 = this._modeling, n2 = e2.shape;
        Sv(n2.incoming, function(e3) {
          t2.removeConnection(e3, { nested: true });
        }), Sv(n2.outgoing, function(e3) {
          t2.removeConnection(e3, { nested: true });
        }), Sv(n2.children, function(e3) {
          fn(e3) ? t2.removeConnection(e3, { nested: true }) : t2.removeShape(e3, { nested: true });
        });
      }, Yv.prototype.execute = function(e2) {
        var t2 = this._canvas, n2 = e2.shape, i2 = n2.parent;
        return e2.oldParent = i2, e2.oldParentIndex = St(i2.children, n2), t2.removeShape(n2), n2;
      }, Yv.prototype.revert = function(e2) {
        var t2 = this._canvas, n2 = e2.shape, i2 = e2.oldParent, r2 = e2.oldParentIndex;
        return Et(i2.children, n2, r2), t2.addShape(n2, i2), n2;
      }, Xv.$inject = ["modeling"];
      var Zv = { x: "y", y: "x" };
      function Qv(e2, t2) {
        this._layouter = e2, this._canvas = t2;
      }
      function Jv() {
      }
      function ey() {
        this.allShapes = {}, this.allConnections = {}, this.enclosedElements = {}, this.enclosedConnections = {}, this.topLevel = {};
      }
      function ty(e2) {
        this._modeling = e2;
      }
      function ny(e2) {
        this._helper = new ty(e2);
      }
      function iy(e2) {
        this._modeling = e2, this._helper = new ty(e2);
      }
      function ry(e2) {
        this._modeling = e2;
      }
      function oy(e2) {
        return e2.original || e2;
      }
      function ay(e2, t2) {
        this._modeling = e2, this._rules = t2;
      }
      function sy(e2) {
        this._modeling = e2;
      }
      function cy(e2) {
        this._modeling = e2;
      }
      function py(e2) {
        return L({}, e2);
      }
      function ly(e2) {
        switch (e2) {
          case "n":
          case "s":
            return "y";
          case "w":
          case "e":
            return "x";
        }
      }
      function uy(e2, t2, n2) {
        var i2 = ly(n2);
        return /e|s/.test(n2) ? e2[i2] > t2 : /n|w/.test(n2) ? e2[i2] < t2 : void 0;
      }
      function hy(e2, t2) {
        return -1 !== e2.indexOf(t2);
      }
      function dy(e2) {
        this._modeling = e2;
      }
      function fy(e2) {
        var t2 = {};
        return g(e2, function(e3) {
          t2[e3.id] = e3.hidden, e3.children && (t2 = L({}, t2, fy(e3.children)));
        }), t2;
      }
      function my(e2, t2) {
        var n2 = [];
        return g(e2, function(e3) {
          e3.hidden = t2, n2 = n2.concat(e3), e3.children && (n2 = n2.concat(my(e3.children, e3.collapsed || t2)));
        }), n2;
      }
      function vy(e2, t2) {
        var n2 = [];
        return g(e2, function(e3) {
          e3.hidden = t2[e3.id], n2 = n2.concat(e3), e3.children && (n2 = n2.concat(vy(e3.children, t2)));
        }), n2;
      }
      function yy(e2) {
        this._modeling = e2;
      }
      function gy(e2, t2) {
        return wt(e2 && e2.attachers, t2);
      }
      function by(e2, t2, n2) {
        if (e2) {
          var i2 = e2.attachers;
          i2 || (e2.attachers = i2 = []), Et(i2, t2, n2);
        }
      }
      function xy() {
      }
      function _y(e2, t2, n2) {
        this._eventBus = e2, this._elementFactory = t2, this._commandStack = n2;
        var i2 = this;
        e2.on("diagram.init", function() {
          i2.registerHandlers(n2);
        });
      }
      function wy(e2) {
        this._elementRegistry = e2;
      }
      function Ey(e2, t2) {
        g(t2, function(t3, n2) {
          e2.set(n2, t3);
        });
      }
      Xv.prototype.preExecute = function(e2) {
        var t2 = this._modeling, n2 = e2.groups, i2 = e2.axis, r2 = e2.dimension;
        function o2(e3, t3) {
          e3.range.min = Math.min(t3[i2], e3.range.min), e3.range.max = Math.max(t3[i2] + t3[r2], e3.range.max);
        }
        function a2(e3) {
          return e3[i2] + e3[r2] / 2;
        }
        function s2(e3) {
          return e3.length - 1;
        }
        function c2(e3) {
          return e3.max - e3.min;
        }
        var p2, l2, u2 = n2[0], h2 = s2(n2), d2 = n2[h2], f2 = 0;
        g(n2, function(e3, p3) {
          var l3, u3, d3;
          e3.elements.length < 2 ? p3 && p3 !== n2.length - 1 && (o2(e3, e3.elements[0]), f2 += c2(e3.range)) : (u3 = (l3 = k(e3.elements, i2))[0], p3 === h2 && (u3 = l3[s2(l3)]), d3 = a2(u3), e3.range = null, g(l3, function(n3) {
            !function(e4, n4) {
              var r3 = { y: 0 };
              r3[i2] = e4 - a2(n4), r3[i2] && (r3[Zv[i2]] = 0, t2.moveElements([n4], r3, n4.parent));
            }(d3, n3), null !== e3.range ? o2(e3, n3) : e3.range = { min: n3[i2], max: n3[i2] + n3[r2] };
          }), p3 && p3 !== n2.length - 1 && (f2 += c2(e3.range)));
        }), l2 = Math.abs(d2.range.min - u2.range.max), (p2 = Math.round((l2 - f2) / (n2.length - 1))) < n2.length - 1 || g(n2, function(e3, o3) {
          var a3, s3 = {};
          e3 !== u2 && e3 !== d2 && (a3 = n2[o3 - 1], e3.range.max = 0, g(e3.elements, function(n3, o4) {
            s3[Zv[i2]] = 0, s3[i2] = a3.range.max - n3[i2] + p2, e3.range.min !== n3[i2] && (s3[i2] += n3[i2] - e3.range.min), s3[i2] && t2.moveElements([n3], s3, n3.parent), e3.range.max = Math.max(n3[i2] + n3[r2], o4 ? e3.range.max : 0);
          }));
        });
      }, Xv.prototype.postExecute = function(e2) {
      }, Qv.$inject = ["layouter", "canvas"], Qv.prototype.execute = function(e2) {
        var t2 = e2.connection;
        return L(e2, { oldWaypoints: t2.waypoints }), t2.waypoints = this._layouter.layoutConnection(t2, e2.hints), t2;
      }, Qv.prototype.revert = function(e2) {
        var t2 = e2.connection;
        return t2.waypoints = e2.oldWaypoints, t2;
      }, Jv.prototype.execute = function(e2) {
        var t2 = e2.connection, n2 = e2.delta, i2 = e2.newParent || t2.parent, r2 = e2.newParentIndex, o2 = t2.parent;
        return e2.oldParent = o2, e2.oldParentIndex = wt(o2.children, t2), Et(i2.children, t2, r2), t2.parent = i2, g(t2.waypoints, function(e3) {
          e3.x += n2.x, e3.y += n2.y, e3.original && (e3.original.x += n2.x, e3.original.y += n2.y);
        }), t2;
      }, Jv.prototype.revert = function(e2) {
        var t2 = e2.connection, n2 = t2.parent, i2 = e2.oldParent, r2 = e2.oldParentIndex, o2 = e2.delta;
        return wt(n2.children, t2), Et(i2.children, t2, r2), t2.parent = i2, g(t2.waypoints, function(e3) {
          e3.x -= o2.x, e3.y -= o2.y, e3.original && (e3.original.x -= o2.x, e3.original.y -= o2.y);
        }), t2;
      }, ey.prototype.add = function(e2, t2) {
        return this.addAll([e2], t2);
      }, ey.prototype.addAll = function(e2, t2) {
        var n2 = function(e3, t3, n3) {
          a(t3) && (t3 = true), l(t3) && (n3 = t3, t3 = true);
          var i2 = bt((n3 = n3 || {}).allShapes), r2 = bt(n3.allConnections), o2 = bt(n3.enclosedElements), s2 = bt(n3.enclosedConnections), c2 = bt(n3.topLevel, t3 && R(e3, function(e4) {
            return e4.id;
          }));
          function p2(e4) {
            c2[e4.source.id] && c2[e4.target.id] && (c2[e4.id] = [e4]), i2[e4.source.id] && i2[e4.target.id] && (s2[e4.id] = o2[e4.id] = e4), r2[e4.id] = e4;
          }
          return ft(e3, function(e4) {
            if (o2[e4.id] = e4, !e4.waypoints) return i2[e4.id] = e4, g(e4.incoming, p2), g(e4.outgoing, p2), e4.children;
            s2[e4.id] = r2[e4.id] = e4;
          }), { allShapes: i2, allConnections: r2, topLevel: c2, enclosedConnections: s2, enclosedElements: o2 };
        }(e2, !!t2, this);
        return L(this, n2), this;
      }, ty.prototype.moveRecursive = function(e2, t2, n2) {
        return e2 ? this.moveClosure(this.getClosure(e2), t2, n2) : [];
      }, ty.prototype.moveClosure = function(e2, t2, n2, i2, r2) {
        var o2 = this._modeling, a2 = e2.allShapes, s2 = e2.allConnections, c2 = e2.enclosedConnections, p2 = e2.topLevel, l2 = false;
        r2 && r2.parent === n2 && (l2 = true), g(a2, function(e3) {
          o2.moveShape(e3, t2, p2[e3.id] && !l2 && n2, { recurse: false, layout: false });
        }), g(s2, function(e3) {
          var i3 = !!a2[e3.source.id], r3 = !!a2[e3.target.id];
          c2[e3.id] && i3 && r3 ? o2.moveConnection(e3, t2, p2[e3.id] && !l2 && n2) : o2.layoutConnection(e3, { connectionStart: i3 && gf(e3, e3.source, t2), connectionEnd: r3 && bf(e3, e3.target, t2) });
        });
      }, ty.prototype.getClosure = function(e2) {
        return new ey().addAll(e2, true);
      }, ny.$inject = ["modeling"], ny.prototype.preExecute = function(e2) {
        e2.closure = this._helper.getClosure(e2.shapes);
      }, ny.prototype.postExecute = function(e2) {
        var t2, n2 = e2.hints;
        n2 && n2.primaryShape && (t2 = n2.primaryShape, n2.oldParent = t2.parent), this._helper.moveClosure(e2.closure, e2.delta, e2.newParent, e2.newHost, t2);
      }, iy.$inject = ["modeling"], iy.prototype.execute = function(e2) {
        var t2 = e2.shape, n2 = e2.delta, i2 = e2.newParent || t2.parent, r2 = e2.newParentIndex, o2 = t2.parent;
        return e2.oldBounds = I(t2, ["x", "y", "width", "height"]), e2.oldParent = o2, e2.oldParentIndex = wt(o2.children, t2), Et(i2.children, t2, r2), L(t2, { parent: i2, x: t2.x + n2.x, y: t2.y + n2.y }), t2;
      }, iy.prototype.postExecute = function(e2) {
        var t2 = e2.shape, n2 = e2.delta, i2 = e2.hints, r2 = this._modeling;
        false !== i2.layout && (g(t2.incoming, function(e3) {
          r2.layoutConnection(e3, { connectionEnd: bf(e3, t2, n2) });
        }), g(t2.outgoing, function(e3) {
          r2.layoutConnection(e3, { connectionStart: gf(e3, t2, n2) });
        })), false !== i2.recurse && this.moveChildren(e2);
      }, iy.prototype.revert = function(e2) {
        var t2 = e2.shape, n2 = e2.oldParent, i2 = e2.oldParentIndex, r2 = e2.delta;
        return Et(n2.children, t2, i2), L(t2, { parent: n2, x: t2.x - r2.x, y: t2.y - r2.y }), t2;
      }, iy.prototype.moveChildren = function(e2) {
        var t2 = e2.delta, n2 = e2.shape;
        this._helper.moveRecursive(n2.children, t2, null);
      }, iy.prototype.getNewParent = function(e2) {
        return e2.newParent || e2.shape.parent;
      }, ry.$inject = ["modeling"], ry.prototype.execute = function(e2) {
        var t2 = e2.newSource, n2 = e2.newTarget, i2 = e2.connection, r2 = e2.dockingOrPoints;
        if (!t2 && !n2) throw new Error("newSource or newTarget required");
        return p(r2) && (e2.oldWaypoints = i2.waypoints, i2.waypoints = r2), t2 && (e2.oldSource = i2.source, i2.source = t2), n2 && (e2.oldTarget = i2.target, i2.target = n2), i2;
      }, ry.prototype.postExecute = function(e2) {
        var t2 = e2.connection, n2 = e2.newSource, i2 = e2.newTarget, r2 = e2.dockingOrPoints, o2 = e2.hints || {}, a2 = {};
        o2.connectionStart && (a2.connectionStart = o2.connectionStart), o2.connectionEnd && (a2.connectionEnd = o2.connectionEnd), false !== o2.layoutConnection && (!n2 || i2 && "source" !== o2.docking || (a2.connectionStart = a2.connectionStart || oy(p(r2) ? r2[0] : r2)), !i2 || n2 && "target" !== o2.docking || (a2.connectionEnd = a2.connectionEnd || oy(p(r2) ? r2[r2.length - 1] : r2)), o2.newWaypoints && (a2.waypoints = o2.newWaypoints), this._modeling.layoutConnection(t2, a2));
      }, ry.prototype.revert = function(e2) {
        var t2 = e2.oldSource, n2 = e2.oldTarget, i2 = e2.oldWaypoints, r2 = e2.connection;
        return t2 && (r2.source = t2), n2 && (r2.target = n2), i2 && (r2.waypoints = i2), r2;
      }, ay.$inject = ["modeling", "rules"], ay.prototype.preExecute = function(e2) {
        var t2, n2 = this, i2 = this._modeling, r2 = this._rules, o2 = e2.oldShape, a2 = e2.newData, s2 = e2.hints || {};
        function c2(e3, t3, n3) {
          return r2.allowed("connection.reconnect", { connection: n3, source: e3, target: t3 });
        }
        var p2, l2 = { x: a2.x, y: a2.y }, u2 = { x: o2.x, y: o2.y, width: o2.width, height: o2.height };
        t2 = e2.newShape = e2.newShape || n2.createShape(a2, l2, o2.parent, s2), o2.host && i2.updateAttachment(t2, o2.host), false !== s2.moveChildren && (p2 = o2.children.slice(), i2.moveElements(p2, { x: 0, y: 0 }, t2, s2));
        var h2 = o2.incoming.slice(), d2 = o2.outgoing.slice();
        g(h2, function(e3) {
          c2(e3.source, t2, e3) && n2.reconnectEnd(e3, t2, yf(e3, t2, u2), s2);
        }), g(d2, function(e3) {
          var i3 = e3.target;
          c2(t2, i3, e3) && n2.reconnectStart(e3, t2, vf(e3, t2, u2), s2);
        });
      }, ay.prototype.postExecute = function(e2) {
        var t2 = e2.oldShape;
        this._modeling.removeShape(t2);
      }, ay.prototype.execute = function(e2) {
      }, ay.prototype.revert = function(e2) {
      }, ay.prototype.createShape = function(e2, t2, n2, i2) {
        return this._modeling.createShape(e2, t2, n2, i2);
      }, ay.prototype.reconnectStart = function(e2, t2, n2, i2) {
        this._modeling.reconnectStart(e2, t2, n2, i2);
      }, ay.prototype.reconnectEnd = function(e2, t2, n2, i2) {
        this._modeling.reconnectEnd(e2, t2, n2, i2);
      }, sy.$inject = ["modeling"], sy.prototype.execute = function(e2) {
        var t2 = e2.shape, n2 = e2.newBounds, i2 = e2.minBounds;
        if (void 0 === n2.x || void 0 === n2.y || void 0 === n2.width || void 0 === n2.height) throw new Error("newBounds must have {x, y, width, height} properties");
        if (i2 && (n2.width < i2.width || n2.height < i2.height)) throw new Error("width and height cannot be less than minimum height and width");
        if (!i2 && n2.width < 10 || n2.height < 10) throw new Error("width and height cannot be less than 10px");
        return e2.oldBounds = { width: t2.width, height: t2.height, x: t2.x, y: t2.y }, L(t2, { width: n2.width, height: n2.height, x: n2.x, y: n2.y }), t2;
      }, sy.prototype.postExecute = function(e2) {
        var t2 = this._modeling, n2 = e2.shape, i2 = e2.oldBounds;
        false !== (e2.hints || {}).layout && (g(n2.incoming, function(e3) {
          t2.layoutConnection(e3, { connectionEnd: yf(e3, n2, i2) });
        }), g(n2.outgoing, function(e3) {
          t2.layoutConnection(e3, { connectionStart: vf(e3, n2, i2) });
        }));
      }, sy.prototype.revert = function(e2) {
        var t2 = e2.shape, n2 = e2.oldBounds;
        return L(t2, { width: n2.width, height: n2.height, x: n2.x, y: n2.y }), t2;
      }, cy.$inject = ["modeling"], cy.prototype.preExecute = function(e2) {
        var t2 = e2.delta, n2 = e2.direction, i2 = e2.movingShapes, r2 = e2.resizingShapes, o2 = e2.start, a2 = {};
        this.moveShapes(i2, t2), g(r2, function(e3) {
          a2[e3.id] = function(e4) {
            return { x: e4.x, y: e4.y, height: e4.height, width: e4.width };
          }(e3);
        }), this.resizeShapes(r2, t2, n2), this.updateConnectionWaypoints(function(e3, t3) {
          var n3 = [];
          return g(e3.concat(t3), function(i3) {
            var r3 = i3.incoming, o3 = i3.outgoing;
            g(r3.concat(o3), function(i4) {
              var r4 = i4.source, o4 = i4.target;
              (Xm(e3, r4) || Xm(e3, o4) || Xm(t3, r4) || Xm(t3, o4)) && (Xm(n3, i4) || n3.push(i4));
            });
          }), n3;
        }(i2, r2), t2, n2, o2, i2, r2, a2);
      }, cy.prototype.execute = function() {
      }, cy.prototype.revert = function() {
      }, cy.prototype.moveShapes = function(e2, t2) {
        var n2 = this;
        g(e2, function(e3) {
          n2._modeling.moveShape(e3, t2, null, { autoResize: false, layout: false, recurse: false });
        });
      }, cy.prototype.resizeShapes = function(e2, t2, n2) {
        var i2 = this;
        g(e2, function(e3) {
          var r2 = function(e4, t3, n3) {
            var i3 = e4.x, r3 = e4.y, o2 = e4.width, a2 = e4.height, s2 = n3.x, c2 = n3.y;
            switch (t3) {
              case "n":
                return { x: i3, y: r3 + c2, width: o2, height: a2 - c2 };
              case "s":
                return { x: i3, y: r3, width: o2, height: a2 + c2 };
              case "w":
                return { x: i3 + s2, y: r3, width: o2 - s2, height: a2 };
              case "e":
                return { x: i3, y: r3, width: o2 + s2, height: a2 };
              default:
                throw new Error("unknown direction: " + t3);
            }
          }(e3, n2, t2);
          i2._modeling.resizeShape(e3, r2, null, { attachSupport: false, autoResize: false, layout: false });
        });
      }, cy.prototype.updateConnectionWaypoints = function(e2, t2, n2, i2, r2, o2, a2) {
        var s2 = this, c2 = r2.concat(o2);
        g(e2, function(e3) {
          var p2 = e3.source, l2 = e3.target, u2 = function(e4) {
            return E(e4.waypoints, function(e5) {
              return (e5 = py(e5)).original && (e5.original = py(e5.original)), e5;
            });
          }(e3), h2 = ly(n2), d2 = {};
          hy(c2, p2) && hy(c2, l2) ? (u2 = E(u2, function(e4) {
            return uy(e4, i2, n2) && (e4[h2] = e4[h2] + t2[h2]), e4.original && uy(e4.original, i2, n2) && (e4.original[h2] = e4.original[h2] + t2[h2]), e4;
          }), s2._modeling.updateWaypoints(e3, u2, { labelBehavior: false })) : (hy(c2, p2) || hy(c2, l2)) && (hy(r2, p2) ? d2.connectionStart = gf(e3, p2, t2) : hy(r2, l2) ? d2.connectionEnd = bf(e3, l2, t2) : hy(o2, p2) ? d2.connectionStart = vf(e3, p2, a2[p2.id]) : hy(o2, l2) && (d2.connectionEnd = yf(e3, l2, a2[l2.id])), s2._modeling.layoutConnection(e3, d2));
        });
      }, dy.$inject = ["modeling"], dy.prototype.execute = function(e2) {
        var t2 = e2.shape, n2 = t2.children;
        e2.oldChildrenVisibility = fy(n2), t2.collapsed = !t2.collapsed;
        var i2 = my(n2, t2.collapsed);
        return [t2].concat(i2);
      }, dy.prototype.revert = function(e2) {
        var t2 = e2.shape, n2 = e2.oldChildrenVisibility, i2 = vy(t2.children, n2);
        return t2.collapsed = !t2.collapsed, [t2].concat(i2);
      }, yy.$inject = ["modeling"], yy.prototype.execute = function(e2) {
        var t2 = e2.shape, n2 = e2.newHost, i2 = t2.host;
        return e2.oldHost = i2, e2.attacherIdx = gy(i2, t2), by(n2, t2), t2.host = n2, t2;
      }, yy.prototype.revert = function(e2) {
        var t2 = e2.shape, n2 = e2.newHost, i2 = e2.oldHost, r2 = e2.attacherIdx;
        return t2.host = i2, gy(n2, t2), by(i2, t2, r2), t2;
      }, xy.prototype.execute = function(e2) {
        var t2 = e2.connection, n2 = e2.newWaypoints;
        return e2.oldWaypoints = t2.waypoints, t2.waypoints = n2, t2;
      }, xy.prototype.revert = function(e2) {
        var t2 = e2.connection, n2 = e2.oldWaypoints;
        return t2.waypoints = n2, t2;
      }, _y.$inject = ["eventBus", "elementFactory", "commandStack"], _y.prototype.getHandlers = function() {
        return { "shape.append": Iv, "shape.create": Gv, "shape.delete": Yv, "shape.move": iy, "shape.resize": sy, "shape.replace": ay, "shape.toggleCollapse": dy, spaceTool: cy, "label.create": Vv, "connection.create": $v, "connection.delete": qv, "connection.move": Jv, "connection.layout": Qv, "connection.updateWaypoints": xy, "connection.reconnect": ry, "elements.create": zv, "elements.move": ny, "elements.delete": Kv, "elements.distribute": Xv, "elements.align": Lv, "element.updateAttachment": yy };
      }, _y.prototype.registerHandlers = function(e2) {
        g(this.getHandlers(), function(t2, n2) {
          e2.registerHandler(n2, t2);
        });
      }, _y.prototype.moveShape = function(e2, t2, n2, i2, r2) {
        "object" == typeof i2 && (r2 = i2, i2 = null);
        var o2 = { shape: e2, delta: t2, newParent: n2, newParentIndex: i2, hints: r2 || {} };
        this._commandStack.execute("shape.move", o2);
      }, _y.prototype.updateAttachment = function(e2, t2) {
        var n2 = { shape: e2, newHost: t2 };
        this._commandStack.execute("element.updateAttachment", n2);
      }, _y.prototype.moveElements = function(e2, t2, n2, i2) {
        var r2, o2 = (i2 = i2 || {}).attach, a2 = n2;
        true === o2 ? (r2 = n2, a2 = n2.parent) : false === o2 && (r2 = null);
        var s2 = { shapes: e2, delta: t2, newParent: a2, newHost: r2, hints: i2 };
        this._commandStack.execute("elements.move", s2);
      }, _y.prototype.moveConnection = function(e2, t2, n2, i2, r2) {
        "object" == typeof i2 && (r2 = i2, i2 = void 0);
        var o2 = { connection: e2, delta: t2, newParent: n2, newParentIndex: i2, hints: r2 || {} };
        this._commandStack.execute("connection.move", o2);
      }, _y.prototype.layoutConnection = function(e2, t2) {
        var n2 = { connection: e2, hints: t2 || {} };
        this._commandStack.execute("connection.layout", n2);
      }, _y.prototype.createConnection = function(e2, t2, n2, i2, r2, o2) {
        "object" == typeof n2 && (o2 = r2, r2 = i2, i2 = n2, n2 = void 0);
        var a2 = { source: e2, target: t2, parent: r2, parentIndex: n2, connection: i2 = this._create("connection", i2), hints: o2 };
        return this._commandStack.execute("connection.create", a2), a2.connection;
      }, _y.prototype.createShape = function(e2, t2, n2, i2, r2) {
        "number" != typeof i2 && (r2 = i2, i2 = void 0);
        var o2, a2, s2 = (r2 = r2 || {}).attach;
        e2 = this._create("shape", e2), s2 ? (o2 = n2.parent, a2 = n2) : o2 = n2;
        var c2 = { position: t2, shape: e2, parent: o2, parentIndex: i2, host: a2, hints: r2 };
        return this._commandStack.execute("shape.create", c2), c2.shape;
      }, _y.prototype.createElements = function(e2, t2, n2, i2, r2) {
        p(e2) || (e2 = [e2]), "number" != typeof i2 && (r2 = i2, i2 = void 0);
        var o2 = { position: t2, elements: e2, parent: n2, parentIndex: i2, hints: r2 = r2 || {} };
        return this._commandStack.execute("elements.create", o2), o2.elements;
      }, _y.prototype.createLabel = function(e2, t2, n2, i2) {
        n2 = this._create("label", n2);
        var r2 = { labelTarget: e2, position: t2, parent: i2 || e2.parent, shape: n2 };
        return this._commandStack.execute("label.create", r2), r2.shape;
      }, _y.prototype.appendShape = function(e2, t2, n2, i2, r2) {
        r2 = r2 || {};
        var o2 = { source: e2, position: n2, target: i2, shape: t2 = this._create("shape", t2), connection: r2.connection, connectionParent: r2.connectionParent, hints: r2 };
        return this._commandStack.execute("shape.append", o2), o2.shape;
      }, _y.prototype.removeElements = function(e2) {
        var t2 = { elements: e2 };
        this._commandStack.execute("elements.delete", t2);
      }, _y.prototype.distributeElements = function(e2, t2, n2) {
        var i2 = { groups: e2, axis: t2, dimension: n2 };
        this._commandStack.execute("elements.distribute", i2);
      }, _y.prototype.removeShape = function(e2, t2) {
        var n2 = { shape: e2, hints: t2 || {} };
        this._commandStack.execute("shape.delete", n2);
      }, _y.prototype.removeConnection = function(e2, t2) {
        var n2 = { connection: e2, hints: t2 || {} };
        this._commandStack.execute("connection.delete", n2);
      }, _y.prototype.replaceShape = function(e2, t2, n2) {
        var i2 = { oldShape: e2, newData: t2, hints: n2 || {} };
        return this._commandStack.execute("shape.replace", i2), i2.newShape;
      }, _y.prototype.alignElements = function(e2, t2) {
        var n2 = { elements: e2, alignment: t2 };
        this._commandStack.execute("elements.align", n2);
      }, _y.prototype.resizeShape = function(e2, t2, n2, i2) {
        var r2 = { shape: e2, newBounds: t2, minBounds: n2, hints: i2 };
        this._commandStack.execute("shape.resize", r2);
      }, _y.prototype.createSpace = function(e2, t2, n2, i2, r2) {
        var o2 = { delta: n2, direction: i2, movingShapes: e2, resizingShapes: t2, start: r2 };
        this._commandStack.execute("spaceTool", o2);
      }, _y.prototype.updateWaypoints = function(e2, t2, n2) {
        var i2 = { connection: e2, newWaypoints: t2, hints: n2 || {} };
        this._commandStack.execute("connection.updateWaypoints", i2);
      }, _y.prototype.reconnect = function(e2, t2, n2, i2, r2) {
        var o2 = { connection: e2, newSource: t2, newTarget: n2, dockingOrPoints: i2, hints: r2 || {} };
        this._commandStack.execute("connection.reconnect", o2);
      }, _y.prototype.reconnectStart = function(e2, t2, n2, i2) {
        i2 || (i2 = {}), this.reconnect(e2, t2, e2.target, n2, L(i2, { docking: "source" }));
      }, _y.prototype.reconnectEnd = function(e2, t2, n2, i2) {
        i2 || (i2 = {}), this.reconnect(e2, e2.source, t2, n2, L(i2, { docking: "target" }));
      }, _y.prototype.connect = function(e2, t2, n2, i2) {
        return this.createConnection(e2, t2, n2 || {}, e2.parent, i2);
      }, _y.prototype._create = function(e2, t2) {
        return t2 instanceof Vn ? t2 : this._elementFactory.create(e2, t2);
      }, _y.prototype.toggleCollapse = function(e2, t2) {
        var n2 = { shape: e2, hints: t2 || {} };
        this._commandStack.execute("shape.toggleCollapse", n2);
      }, wy.$inject = ["elementRegistry"], wy.prototype.execute = function(e2) {
        var t2 = e2.element, n2 = e2.moddleElement, i2 = e2.properties;
        if (!n2) throw new Error("<moddleElement> required");
        var r2 = e2.changed || this._getVisualReferences(n2).concat(t2), o2 = e2.oldProperties || function(e3, t3) {
          return x(t3, function(t4, n3) {
            return t4[n3] = e3.get(n3), t4;
          }, {});
        }(n2, S(i2));
        return Ey(n2, i2), e2.oldProperties = o2, e2.changed = r2, r2;
      }, wy.prototype.revert = function(e2) {
        var t2 = e2.oldProperties, n2 = e2.moddleElement, i2 = e2.changed;
        return Ey(n2, t2), i2;
      }, wy.prototype._getVisualReferences = function(e2) {
        var t2 = this._elementRegistry;
        return Mr(e2, "bpmn:DataObject") ? function(e3, t3) {
          return t3.filter(function(t4) {
            return Mr(t4, "bpmn:DataObjectReference") && Br(t4).dataObjectRef === e3;
          });
        }(e2, t2) : [];
      };
      var Sy = "default", Cy = "id", Ry = "di", Py = { width: 0, height: 0 };
      function Ty(e2, t2, n2, i2, r2) {
        this._elementRegistry = e2, this._moddle = t2, this._translate = n2, this._modeling = i2, this._textRenderer = r2;
      }
      function ky(e2, t2) {
        return Cy in e2 && e2[Cy] !== t2[Cy];
      }
      function Ay(e2, t2) {
        var n2 = e2.businessObject, i2 = Nr(e2);
        g(t2, function(e3, t3) {
          t3 !== Ry ? n2.set(t3, e3) : i2 && function(e4, t4) {
            g(t4, function(t5, n3) {
              e4.set(n3, t5);
            });
          }(i2, e3);
        });
      }
      Ty.$inject = ["elementRegistry", "moddle", "translate", "modeling", "textRenderer"], Ty.prototype.execute = function(e2) {
        var t2 = e2.element, n2 = [t2], i2 = this._translate;
        if (!t2) throw new Error(i2("element required"));
        var r2 = this._elementRegistry, o2 = this._moddle.ids, a2 = t2.businessObject, s2 = function(e3) {
          var t3 = L({}, e3);
          return My.forEach(function(n3) {
            n3 in e3 && (t3[n3] = Br(t3[n3]));
          }), t3;
        }(e2.properties), c2 = e2.oldProperties || function(e3, t3) {
          var n3 = S(t3), i3 = e3.businessObject, r3 = Nr(e3);
          return x(n3, function(e4, n4) {
            return e4[n4] = n4 !== Ry ? i3.get(n4) : function(e5, t4) {
              return x(t4, function(t5, n5) {
                return t5[n5] = e5 && e5.get(n5), t5;
              }, {});
            }(r3, S(t3.di)), e4;
          }, {});
        }(t2, s2);
        return ky(s2, a2) && (o2.unclaim(a2[Cy]), r2.updateId(t2, s2[Cy]), o2.claim(s2[Cy], a2)), Sy in s2 && (s2[Sy] && n2.push(r2.get(s2[Sy].id)), a2[Sy] && n2.push(r2.get(a2[Sy].id))), Ay(t2, s2), e2.oldProperties = c2, e2.changed = n2, n2;
      }, Ty.prototype.postExecute = function(e2) {
        var t2 = e2.element.label, n2 = t2 && Br(t2).name;
        if (n2) {
          var i2 = this._textRenderer.getExternalLabelBounds(t2, n2);
          this._modeling.resizeShape(t2, i2, Py);
        }
      }, Ty.prototype.revert = function(e2) {
        var t2 = e2.element, n2 = e2.properties, i2 = e2.oldProperties, r2 = t2.businessObject, o2 = this._elementRegistry, a2 = this._moddle.ids;
        return Ay(t2, i2), ky(n2, r2) && (a2.unclaim(n2[Cy]), o2.updateId(t2, i2[Cy]), a2.claim(i2[Cy], r2)), e2.changed;
      };
      var My = ["default"];
      function Dy(e2, t2) {
        this._canvas = e2, this._modeling = t2;
      }
      function By(e2, t2) {
        this._modeling = e2, this._spaceTool = t2;
      }
      function Ny(e2, t2) {
        this._modeling = e2, this._translate = t2;
      }
      function Oy(e2, t2) {
        this._modeling = e2, this._spaceTool = t2;
      }
      Dy.$inject = ["canvas", "modeling"], Dy.prototype.execute = function(e2) {
        var t2 = this._canvas, n2 = e2.newRoot, i2 = n2.businessObject, r2 = t2.getRootElement(), o2 = r2.businessObject, a2 = o2.$parent, s2 = Nr(r2);
        return t2.setRootElement(n2), t2.removeRootElement(r2), Et(a2.rootElements, i2), i2.$parent = a2, wt(a2.rootElements, o2), o2.$parent = null, r2.di = null, s2.bpmnElement = i2, n2.di = s2, e2.oldRoot = r2, [];
      }, Dy.prototype.revert = function(e2) {
        var t2 = this._canvas, n2 = e2.newRoot, i2 = n2.businessObject, r2 = e2.oldRoot, o2 = r2.businessObject, a2 = i2.$parent, s2 = Nr(n2);
        return t2.setRootElement(r2), t2.removeRootElement(n2), wt(a2.rootElements, i2), i2.$parent = null, Et(a2.rootElements, o2), o2.$parent = a2, n2.di = null, s2.bpmnElement = o2, r2.di = s2, [];
      }, By.$inject = ["modeling", "spaceTool"], By.prototype.preExecute = function(e2) {
        var t2 = this._spaceTool, n2 = this._modeling, i2 = e2.shape, r2 = e2.location, o2 = oh(i2), a2 = o2 === i2, s2 = a2 ? i2 : i2.parent;
        rh(s2).length || n2.createShape({ type: "bpmn:Lane" }, { x: i2.x + nh, y: i2.y, width: i2.width - nh, height: i2.height }, s2);
        var c2 = [];
        ft(o2, function(e3) {
          return c2.push(e3), e3.label && c2.push(e3.label), e3 === i2 ? [] : y(e3.children, function(e4) {
            return e4 !== i2;
          });
        });
        var p2 = "top" === r2 ? -120 : 120, l2 = "top" === r2 ? i2.y : i2.y + i2.height, u2 = l2 + ("top" === r2 ? 10 : -10), h2 = "top" === r2 ? "n" : "s", d2 = t2.calculateAdjustments(c2, "y", p2, u2);
        t2.makeSpace(d2.movingShapes, d2.resizingShapes, { x: 0, y: p2 }, h2, u2), e2.newLane = n2.createShape({ type: "bpmn:Lane" }, { x: i2.x + (a2 ? nh : 0), y: l2 - ("top" === r2 ? 120 : 0), width: i2.width - (a2 ? nh : 0), height: 120 }, s2);
      }, Ny.$inject = ["modeling", "translate"], Ny.prototype.preExecute = function(e2) {
        var t2 = this._modeling, n2 = this._translate, i2 = e2.shape, r2 = e2.count, o2 = rh(i2), a2 = o2.length;
        if (a2 > r2) throw new Error(n2("more than {count} child lanes", { count: r2 }));
        var s2, c2, p2, l2, u2, h2 = Math.round(i2.height / r2);
        for (u2 = 0; u2 < r2; u2++) s2 = i2.y + u2 * h2, c2 = u2 === r2 - 1 ? i2.height - h2 * u2 : h2, p2 = { x: i2.x + nh, y: s2, width: i2.width - nh, height: c2 }, u2 < a2 ? t2.resizeShape(o2[u2], p2) : (l2 = { type: "bpmn:Lane" }, t2.createShape(l2, p2, i2));
      }, Oy.$inject = ["modeling", "spaceTool"], Oy.prototype.preExecute = function(e2) {
        var t2 = e2.shape, n2 = e2.newBounds;
        false !== e2.balanced ? this.resizeBalanced(t2, n2) : this.resizeSpace(t2, n2);
      }, Oy.prototype.resizeBalanced = function(e2, t2) {
        var n2 = this._modeling, i2 = ah(e2, t2);
        n2.resizeShape(e2, t2), i2.forEach(function(e3) {
          n2.resizeShape(e3.shape, e3.newBounds);
        });
      }, Oy.prototype.resizeSpace = function(e2, t2) {
        var n2, i2, r2, o2, a2, s2 = this._spaceTool, c2 = gn(e2), p2 = Yu(gn(t2), c2), l2 = oh(e2), u2 = [], h2 = [];
        ft(l2, function(e3) {
          return u2.push(e3), (Mr(e3, "bpmn:Lane") || Mr(e3, "bpmn:Participant")) && h2.push(e3), e3.children;
        }), (p2.bottom || p2.top) && (n2 = p2.bottom || p2.top, i2 = e2.y + (p2.bottom ? e2.height : 0) + (p2.bottom ? -10 : 10), r2 = p2.bottom ? "s" : "n", o2 = p2.top > 0 || p2.bottom < 0 ? -n2 : n2, a2 = s2.calculateAdjustments(u2, "y", o2, i2), s2.makeSpace(a2.movingShapes, a2.resizingShapes, { x: 0, y: n2 }, r2)), (p2.left || p2.right) && (n2 = p2.right || p2.left, i2 = e2.x + (p2.right ? e2.width : 0) + (p2.right ? -10 : 100), r2 = p2.right ? "e" : "w", o2 = p2.left > 0 || p2.right < 0 ? -n2 : n2, a2 = s2.calculateAdjustments(h2, "x", o2, i2), s2.makeSpace(a2.movingShapes, a2.resizingShapes, { x: n2, y: 0 }, r2));
      };
      var jy = "flowNodeRef", Ly = "lanes";
      function Iy(e2) {
        this._elementRegistry = e2;
      }
      function $y(e2) {
        this._moddle = e2;
      }
      Iy.$inject = ["elementRegistry"], Iy.prototype._computeUpdates = function(e2, t2) {
        var n2 = [], i2 = [], r2 = {}, o2 = [];
        function a2(e3) {
          -1 === n2.indexOf(e3) && (o2.push(e3), n2.push(e3));
        }
        function s2(e3) {
          if (!e3.parent) return [];
          var t3 = function(e4) {
            var t4 = oh(e4);
            return r2[t4.id] || (r2[t4.id] = ih(t4)), r2[t4.id];
          }(e3);
          return t3.filter(function(t4) {
            return n3 = e3, i3 = gn(t4), r3 = n3.x + n3.width / 2, o3 = n3.y + n3.height / 2, r3 > i3.left && r3 < i3.right && o3 > i3.top && o3 < i3.bottom;
            var n3, i3, r3, o3;
          }).map(function(e4) {
            return e4.businessObject;
          });
        }
        return t2.forEach(function(e3) {
          var t3 = oh(e3);
          if (t3 && -1 === n2.indexOf(t3)) {
            var i3 = t3.children.filter(function(e4) {
              return Mr(e4, "bpmn:FlowNode");
            });
            i3.forEach(a2), n2.push(t3);
          }
        }), e2.forEach(a2), o2.forEach(function(e3) {
          var t3 = e3.businessObject, n3 = t3.get(Ly).slice(), r3 = s2(e3);
          i2.push({ flowNode: t3, remove: n3, add: r3 });
        }), t2.forEach(function(e3) {
          var t3 = e3.businessObject;
          e3.parent || t3.get(jy).forEach(function(e4) {
            i2.push({ flowNode: e4, remove: [t3], add: [] });
          });
        }), i2;
      }, Iy.prototype.execute = function(e2) {
        var t2 = e2.updates;
        return t2 || (t2 = e2.updates = this._computeUpdates(e2.flowNodeShapes, e2.laneShapes)), t2.forEach(function(e3) {
          var t3 = e3.flowNode, n2 = t3.get(Ly);
          e3.remove.forEach(function(e4) {
            wt(n2, e4), wt(e4.get(jy), t3);
          }), e3.add.forEach(function(e4) {
            Et(n2, e4), Et(e4.get(jy), t3);
          });
        }), [];
      }, Iy.prototype.revert = function(e2) {
        return e2.updates.forEach(function(e3) {
          var t2 = e3.flowNode, n2 = t2.get(Ly);
          e3.add.forEach(function(e4) {
            wt(n2, e4), wt(e4.get(jy), t2);
          }), e3.remove.forEach(function(e4) {
            Et(n2, e4), Et(e4.get(jy), t2);
          });
        }), [];
      }, $y.$inject = ["moddle"], $y.prototype.execute = function(e2) {
        var t2 = this._moddle.ids, n2 = e2.id, i2 = e2.element;
        return e2.claiming ? t2.claim(n2, i2) : t2.unclaim(n2), [];
      }, $y.prototype.revert = function(e2) {
        var t2 = this._moddle.ids, n2 = e2.id, i2 = e2.element;
        return e2.claiming ? t2.unclaim(n2) : t2.claim(n2, i2), [];
      };
      var Fy = { fill: void 0, stroke: void 0 };
      function zy(e2) {
        this._commandStack = e2, this._normalizeColor = function(e3) {
          if (e3) {
            if (d(e3)) {
              var t2 = function(e4) {
                var t3 = document.createElement("canvas").getContext("2d");
                return t3.fillStyle = "transparent", t3.fillStyle = e4, /^#[0-9a-fA-F]{6}$/.test(t3.fillStyle) ? t3.fillStyle : null;
              }(e3);
              if (t2) return t2;
            }
            throw new Error("invalid color value: " + e3);
          }
        };
      }
      zy.$inject = ["commandStack"], zy.prototype.postExecute = function(e2) {
        var t2 = e2.elements, n2 = e2.colors || Fy, i2 = this, r2 = {};
        "fill" in n2 && L(r2, { "background-color": this._normalizeColor(n2.fill) }), "stroke" in n2 && L(r2, { "border-color": this._normalizeColor(n2.stroke) }), g(t2, function(e3) {
          var t3 = fn(e3) ? I(r2, ["border-color"]) : r2, n3 = Nr(e3);
          if (function(e4) {
            "border-color" in e4 && (e4.stroke = e4["border-color"]);
            "background-color" in e4 && (e4.fill = e4["background-color"]);
          }(t3), mn(e3)) i2._commandStack.execute("element.updateModdleProperties", { element: e3, moddleElement: n3.label, properties: { color: r2["border-color"] } });
          else {
            if (!Dr(n3, ["bpmndi:BPMNEdge", "bpmndi:BPMNShape"])) return;
            i2._commandStack.execute("element.updateProperties", { element: e3, properties: { di: t3 } });
          }
        });
      };
      var Hy = { width: 0, height: 0 };
      function Gy(e2, t2, n2) {
        function i2(e3, t3) {
          var n3 = e3.label || e3, i3 = e3.labelTarget || e3;
          return function(e4, t4) {
            var n4 = e4.businessObject, i4 = ao(n4);
            i4 && ("categoryValueRef" === i4 ? n4.categoryValueRef.value = t4 : n4[i4] = t4);
          }(n3, t3), [n3, i3];
        }
        this.preExecute = function(t3) {
          var n3 = t3.element, i3 = n3.businessObject, r2 = t3.newLabel;
          if (!mn(n3) && no(n3) && !io(n3) && !Vy(r2)) {
            var o2 = oo(n3);
            o2 = { x: o2.x, y: o2.y + 7 }, e2.createLabel(n3, o2, { id: i3.id + "_label", businessObject: i3, di: n3.di });
          }
        }, this.execute = function(e3) {
          return e3.oldLabel = so(e3.element), i2(e3.element, e3.newLabel);
        }, this.revert = function(e3) {
          return i2(e3.element, e3.oldLabel);
        }, this.postExecute = function(n3) {
          var i3 = n3.element, r2 = i3.label || i3, o2 = n3.newLabel, a2 = n3.newBounds, s2 = n3.hints || {};
          if (mn(r2) || Mr(r2, "bpmn:TextAnnotation")) if (mn(r2) && Vy(o2)) false !== s2.removeShape && e2.removeShape(r2, { unsetLabel: false });
          else {
            var c2 = so(i3);
            void 0 === a2 && (a2 = t2.getExternalLabelBounds(r2, c2)), a2 && e2.resizeShape(r2, a2, Hy);
          }
        };
      }
      function Vy(e2) {
        return !e2 || !e2.trim();
      }
      function Wy(e2, t2, n2, i2) {
        _y.call(this, e2, t2, n2), this._bpmnRules = i2;
      }
      function Uy() {
      }
      Gy.$inject = ["modeling", "textRenderer", "bpmnFactory"], e(Wy, _y), Wy.$inject = ["eventBus", "elementFactory", "commandStack", "bpmnRules"], Wy.prototype.getHandlers = function() {
        var e2 = _y.prototype.getHandlers.call(this);
        return e2["element.updateModdleProperties"] = wy, e2["element.updateProperties"] = Ty, e2["canvas.updateRoot"] = Dy, e2["lane.add"] = By, e2["lane.resize"] = Oy, e2["lane.split"] = Ny, e2["lane.updateRefs"] = Iy, e2["id.updateClaim"] = $y, e2["element.setColor"] = zy, e2["element.updateLabel"] = Gy, e2;
      }, Wy.prototype.updateLabel = function(e2, t2, n2, i2) {
        this._commandStack.execute("element.updateLabel", { element: e2, newLabel: t2, newBounds: n2, hints: i2 || {} });
      }, Wy.prototype.connect = function(e2, t2, n2, i2) {
        var r2 = this._bpmnRules;
        if (n2 || (n2 = r2.canConnect(e2, t2)), n2) return this.createConnection(e2, t2, n2, e2.parent, i2);
      }, Wy.prototype.updateModdleProperties = function(e2, t2, n2) {
        this._commandStack.execute("element.updateModdleProperties", { element: e2, moddleElement: t2, properties: n2 });
      }, Wy.prototype.updateProperties = function(e2, t2) {
        this._commandStack.execute("element.updateProperties", { element: e2, properties: t2 });
      }, Wy.prototype.resizeLane = function(e2, t2, n2) {
        this._commandStack.execute("lane.resize", { shape: e2, newBounds: t2, balanced: n2 });
      }, Wy.prototype.addLane = function(e2, t2) {
        var n2 = { shape: e2, location: t2 };
        return this._commandStack.execute("lane.add", n2), n2.newLane;
      }, Wy.prototype.splitLane = function(e2, t2) {
        this._commandStack.execute("lane.split", { shape: e2, count: t2 });
      }, Wy.prototype.makeCollaboration = function() {
        var e2 = this._create("root", { type: "bpmn:Collaboration" }), t2 = { newRoot: e2 };
        return this._commandStack.execute("canvas.updateRoot", t2), e2;
      }, Wy.prototype.makeProcess = function() {
        var e2 = { newRoot: this._create("root", { type: "bpmn:Process" }) };
        this._commandStack.execute("canvas.updateRoot", e2);
      }, Wy.prototype.updateLaneRefs = function(e2, t2) {
        this._commandStack.execute("lane.updateRefs", { flowNodeShapes: e2, laneShapes: t2 });
      }, Wy.prototype.claimId = function(e2, t2) {
        this._commandStack.execute("id.updateClaim", { id: e2, element: t2, claiming: true });
      }, Wy.prototype.unclaimId = function(e2, t2) {
        this._commandStack.execute("id.updateClaim", { id: e2, element: t2 });
      }, Wy.prototype.setColor = function(e2, t2) {
        e2.length || (e2 = [e2]), this._commandStack.execute("element.setColor", { elements: e2, colors: t2 });
      }, Uy.prototype.layoutConnection = function(e2, t2) {
        return [(t2 = t2 || {}).connectionStart || _n(t2.source || e2.source), t2.connectionEnd || _n(t2.target || e2.target)];
      };
      var qy = 20, Ky = 5, Yy = Math.round, Xy = 20, Zy = { "h:h": 20, "v:v": 20, "h:v": -10, "v:h": -10 };
      function Qy(e2, t2, n2) {
        var i2, r2, o2, a2 = wn(t2, e2, Ky), s2 = n2.split(":")[0], c2 = Yy((t2.x - e2.x) / 2 + e2.x), p2 = Yy((t2.y - e2.y) / 2 + e2.y), l2 = (o2 = a2, { t: /top/, r: /right/, b: /bottom/, l: /left/, h: /left|right/, v: /top|bottom/ }[s2].test(o2)), u2 = /h|r|l/.test(s2), h2 = false, d2 = false;
        return l2 ? (i2 = u2 ? { x: c2, y: e2.y } : { x: e2.x, y: p2 }, r2 = u2 ? "h:h" : "v:v") : (h2 = function(e3, t3) {
          return !{ t: /top/, r: /right/, b: /bottom/, l: /left/, h: /./, v: /./ }[t3].test(e3);
        }(a2, s2), r2 = u2 ? "h:v" : "v:h", h2 ? u2 ? (d2 = p2 === e2.y, i2 = { x: e2.x + qy * (/l/.test(s2) ? -1 : 1), y: d2 ? p2 + qy : p2 }) : i2 = { x: (d2 = c2 === e2.x) ? c2 + qy : c2, y: e2.y + qy * (/t/.test(s2) ? -1 : 1) } : i2 = { x: c2, y: p2 }), { waypoints: eg(e2, i2, r2).concat(i2), directions: r2, turnNextDirections: d2 };
      }
      function Jy(e2) {
        return e2.split(":").reverse().join(":");
      }
      function eg(e2, t2, n2) {
        if (!function(e3) {
          return e3 && /^h|v|t|r|b|l:h|v|t|r|b|l$/.test(e3);
        }(n2 = n2 || "h:h")) throw new Error("unknown directions: <" + n2 + ">: must be specified as <start>:<end> with start/end in { h,v,t,r,b,l }");
        if (og(n2)) {
          var i2 = function(e3, t3, n3) {
            return Qy(e3, t3, n3);
          }(e2, t2, n2), r2 = function(e3, t3, n3) {
            var i3 = Qy(t3, e3, Jy(n3));
            return { waypoints: i3.waypoints.slice().reverse(), directions: Jy(i3.directions), turnNextDirections: i3.turnNextDirections };
          }(e2, t2, n2), o2 = function(e3, t3) {
            var n3 = e3.directions.split(":")[1], i3 = t3.directions.split(":")[0];
            e3.turnNextDirections && (n3 = "h" == n3 ? "v" : "h"), t3.turnNextDirections && (i3 = "h" == i3 ? "v" : "h");
            var r3 = n3 + ":" + i3;
            return { waypoints: eg(e3.waypoints[e3.waypoints.length - 1], t3.waypoints[0], r3), directions: r3 };
          }(i2, r2);
          return [].concat(i2.waypoints, o2.waypoints, r2.waypoints);
        }
        return function(e3, t3, n3) {
          var i3 = Yy((t3.x - e3.x) / 2 + e3.x), r3 = Yy((t3.y - e3.y) / 2 + e3.y);
          if ("h:v" === n3) return [{ x: t3.x, y: e3.y }];
          if ("v:h" === n3) return [{ x: e3.x, y: t3.y }];
          if ("h:h" === n3) return [{ x: i3, y: e3.y }, { x: i3, y: t3.y }];
          if ("v:v" === n3) return [{ x: e3.x, y: r3 }, { x: t3.x, y: r3 }];
          throw new Error("invalid directions: can only handle varians of [hv]:[hv]");
        }(e2, t2, n2);
      }
      function tg(e2, t2, n2, i2, r2) {
        var o2 = b(r2 && r2.preferredLayouts || [], "straight")[0] || "h:h", a2 = wn(e2, t2, Zy[o2] || 0), s2 = function(e3, t3) {
          if (og(t3)) return t3;
          switch (e3) {
            case "intersect":
              return "t:t";
            case "top":
            case "bottom":
              return "v:v";
            case "left":
            case "right":
              return "h:h";
            default:
              return t3;
          }
        }(a2, o2);
        n2 = n2 || _n(e2), i2 = i2 || _n(t2);
        var c2 = s2.split(":"), p2 = ag(n2, e2, c2[0], function(e3) {
          return { top: "bottom", bottom: "top", left: "right", right: "left", "top-left": "bottom-right", "bottom-right": "top-left", "top-right": "bottom-left", "bottom-left": "top-right" }[e3];
        }(a2));
        return function(e3, t3, n3) {
          var i3 = eg(e3, t3, n3);
          return i3.unshift(e3), i3.push(t3), sg(i3);
        }(p2, ag(i2, t2, c2[1], a2), s2);
      }
      function ng(e2, t2, n2, i2, r2, o2) {
        var a2;
        return p(n2) && (r2 = n2, o2 = i2, n2 = _n(e2), i2 = _n(t2)), r2 = r2 || [], a2 = -1 !== (o2 = L({ preferredLayouts: [] }, o2)).preferredLayouts.indexOf("straight") && function(e3, t3, n3, i3, r3) {
          var o3, a3, s2 = {};
          if (a3 = wn(e3, t3), !/^(top|bottom|left|right)$/.test(a3)) return null;
          /top|bottom/.test(a3) && (o3 = "x");
          /left|right/.test(a3) && (o3 = "y");
          return "target" === r3.preserveDocking ? ig(o3, i3, e3) ? (s2[o3] = i3[o3], [{ x: void 0 !== s2.x ? s2.x : n3.x, y: void 0 !== s2.y ? s2.y : n3.y, original: { x: void 0 !== s2.x ? s2.x : n3.x, y: void 0 !== s2.y ? s2.y : n3.y } }, { x: i3.x, y: i3.y }]) : null : ig(o3, n3, t3) ? (s2[o3] = n3[o3], [{ x: n3.x, y: n3.y }, { x: void 0 !== s2.x ? s2.x : i3.x, y: void 0 !== s2.y ? s2.y : i3.y, original: { x: void 0 !== s2.x ? s2.x : i3.x, y: void 0 !== s2.y ? s2.y : i3.y } }]) : null;
        }(e2, t2, n2, i2, o2), a2 || (a2 = o2.connectionEnd && function(e3, t3, n3, i3) {
          var r3 = i3.slice().reverse();
          return r3 = rg(e3, t3, n3, r3), r3 ? r3.reverse() : null;
        }(t2, e2, i2, r2), a2 || ((a2 = o2.connectionStart && rg(e2, t2, n2, r2)) || (!o2.connectionStart && !o2.connectionEnd && r2 && r2.length ? r2 : tg(e2, t2, n2, i2, o2))));
      }
      function ig(e2, t2, n2) {
        return function(e3, t3, n3) {
          return e3 >= t3 && e3 <= n3;
        }(t2[e2], n2[e2], n2[e2] + n2[{ x: "width", y: "height" }[e2]]);
      }
      function rg(e2, t2, n2, i2) {
        if (function(e3) {
          return e3.length < 3 || !(e3.length > 4) && !!m(e3, function(t3, n3) {
            var i3 = e3[n3 - 1];
            return i3 && Ct(t3, i3) < 3;
          });
        }(i2)) return null;
        var r2, o2 = i2[0], a2 = i2.slice();
        return a2[0] = n2, a2[1] = function(e3, t3, n3) {
          switch (Tt(t3, e3)) {
            case "v":
              return { x: n3.x, y: e3.y };
            case "h":
              return { x: e3.x, y: n3.y };
          }
          return { x: e3.x, y: e3.y };
        }(a2[1], o2, n2), r2 = function(e3, t3, n3) {
          var i3;
          for (i3 = e3.length - 2; 0 !== i3; i3--) if (At(e3[i3], t3, Xy) || At(e3[i3], n3, Xy)) return e3.slice(i3);
          return e3;
        }(a2, e2, t2), r2 !== a2 && (a2 = rg(e2, t2, n2, r2)), a2 && Tt(a2) ? null : a2;
      }
      function og(e2) {
        return e2 && /t|r|b|l/.test(e2);
      }
      function ag(e2, t2, n2, i2) {
        if ("h" === n2 && (n2 = /left/.test(i2) ? "l" : "r"), "v" === n2 && (n2 = /top/.test(i2) ? "t" : "b"), "t" === n2) return { original: e2, x: e2.x, y: t2.y };
        if ("r" === n2) return { original: e2, x: t2.x + t2.width, y: e2.y };
        if ("b" === n2) return { original: e2, x: e2.x, y: t2.y + t2.height };
        if ("l" === n2) return { original: e2, x: t2.x, y: e2.y };
        throw new Error("unexpected dockingDirection: <" + n2 + ">");
      }
      function sg(e2) {
        return e2.reduce(function(t2, n2, i2) {
          return Rt(t2[t2.length - 1], e2[i2 + 1], n2, 0) || t2.push(n2), t2;
        }, []);
      }
      var cg = -10, pg = 40, lg = { top: "bottom", "top-right": "bottom-left", "top-left": "bottom-right", right: "left", bottom: "top", "bottom-right": "top-left", "bottom-left": "top-right", left: "right" }, ug = { top: "t", right: "r", bottom: "b", left: "l" };
      function hg() {
      }
      function dg(e2, t2) {
        return Mr(t2, "bpmn:Participant") ? "source" : Mr(e2, "bpmn:Participant") ? "target" : yg(t2) ? "source" : yg(e2) || Mr(t2, "bpmn:Event") ? "target" : Mr(e2, "bpmn:Event") ? "source" : null;
      }
      function fg(e2) {
        return yg(e2) ? "target" : "source";
      }
      function mg(e2, t2) {
        return e2 ? e2.original || e2 : _n(t2);
      }
      function vg(e2, t2) {
        return Mr(t2, "bpmn:Activity") && Mr(e2, "bpmn:BoundaryEvent") && t2.businessObject.isForCompensation;
      }
      function yg(e2) {
        return Mr(e2, "bpmn:SubProcess") && Zr(e2);
      }
      function gg(e2, t2) {
        return e2 === t2;
      }
      function bg(e2) {
        var t2 = /right|left/.exec(e2);
        return t2 && t2[0];
      }
      function xg(e2) {
        var t2 = /top|bottom/.exec(e2);
        return t2 && t2[0];
      }
      function _g(e2) {
        return "right" === e2 || "left" === e2;
      }
      function wg(e2, t2) {
        var n2 = t2.waypoints, i2 = n2 && n2.length && wn(n2[0], e2);
        return "top" === i2 ? ["t:r"] : "right" === i2 ? ["r:b"] : "left" === i2 ? ["l:t"] : ["b:l"];
      }
      function Eg(e2, t2, n2) {
        var i2, r2, o2, a2, s2 = _n(e2), c2 = _n(t2), p2 = (a2 = (o2 = e2).host, wn(_n(o2), a2, cg)), l2 = gg(e2.host, t2), u2 = -1 !== ["top", "right", "bottom", "left"].indexOf(p2), h2 = wn(c2, s2, { x: e2.width / 2 + t2.width / 2, y: e2.height / 2 + t2.height / 2 });
        return l2 ? function(e3, t3, n3, i3, r3) {
          var o3, a3 = t3 ? e3 : xg(e3), s3 = ug[a3];
          o3 = t3 ? _g(e3) ? Sg("y", n3, i3, r3) ? "h" : "b" : Sg("x", n3, i3, r3) ? "v" : "l" : "v";
          return [s3 + ":" + o3];
        }(p2, u2, e2, t2, n2) : (i2 = function(e3, t3, n3) {
          if (n3) return ug[e3];
          if (gg(xg(e3), xg(t3)) || function(e4, t4) {
            return lg[e4] === t4;
          }(bg(e3), bg(t3))) return ug[xg(e3)];
          return ug[bg(e3)];
        }(p2, h2, u2), r2 = function(e3, t3, n3) {
          if (n3) return _g(e3) ? function(e4, t4) {
            var n4 = bg(e4), i3 = lg[n4];
            return -1 !== t4.indexOf(i3);
          }(e3, t3) || gg(e3, t3) ? "h" : "v" : function(e4, t4) {
            var n4 = xg(e4), i3 = lg[n4];
            return -1 !== t4.indexOf(i3);
          }(e3, t3) || gg(e3, t3) ? "v" : "h";
          return _g(t3) || gg(xg(e3), xg(t3)) && bg(t3) ? "h" : "v";
        }(p2, h2, u2), [i2 + ":" + r2]);
      }
      function Sg(e2, t2, n2, i2) {
        var r2 = pg;
        return !(Cg(e2, i2, n2, r2) || Cg(e2, i2, { x: n2.x + n2.width, y: n2.y + n2.height }, r2) || Cg(e2, i2, _n(t2), r2));
      }
      function Cg(e2, t2, n2, i2) {
        return Math.abs(t2[e2] - n2[e2]) < i2;
      }
      function Rg(e2) {
        return L({ original: e2.point.original || e2.point }, e2.actual);
      }
      function Pg(e2, t2) {
        this._elementRegistry = e2, this._graphicsFactory = t2;
      }
      e(hg, Uy), hg.prototype.layoutConnection = function(e2, t2) {
        t2 || (t2 = {});
        var n2, i2, r2 = t2.source || e2.source, o2 = t2.target || e2.target, a2 = t2.waypoints || e2.waypoints, s2 = t2.connectionStart, c2 = t2.connectionEnd;
        return s2 || (s2 = mg(a2 && a2[0], r2)), c2 || (c2 = mg(a2 && a2[a2.length - 1], o2)), (Mr(e2, "bpmn:Association") || Mr(e2, "bpmn:DataAssociation")) && a2 && !vg(r2, o2) ? [].concat([s2], a2.slice(1, -1), [c2]) : (Mr(e2, "bpmn:MessageFlow") ? n2 = function(e3, t3) {
          return { preferredLayouts: ["straight", "v:v"], preserveDocking: dg(e3, t3) };
        }(r2, o2) : (Mr(e2, "bpmn:SequenceFlow") || vg(r2, o2)) && (n2 = r2 === o2 ? { preferredLayouts: wg(r2, e2) } : Mr(r2, "bpmn:BoundaryEvent") ? { preferredLayouts: Eg(r2, o2, c2) } : yg(r2) || yg(o2) ? function(e3) {
          return { preferredLayouts: ["straight", "h:h"], preserveDocking: fg(e3) };
        }(r2) : Mr(r2, "bpmn:Gateway") ? { preferredLayouts: ["v:h"] } : Mr(o2, "bpmn:Gateway") ? { preferredLayouts: ["h:v"] } : { preferredLayouts: ["h:h"] }), n2 && (i2 = sg(ng(r2, o2, s2, c2, a2, n2 = L(n2, t2)))), i2 || [s2, c2]);
      }, Pg.$inject = ["elementRegistry", "graphicsFactory"], Pg.prototype.getCroppedWaypoints = function(e2, t2, n2) {
        t2 = t2 || e2.source, n2 = n2 || e2.target;
        var i2 = this.getDockingPoint(e2, t2, true), r2 = this.getDockingPoint(e2, n2), o2 = e2.waypoints.slice(i2.idx + 1, r2.idx);
        return o2.unshift(Rg(i2)), o2.push(Rg(r2)), o2;
      }, Pg.prototype.getDockingPoint = function(e2, t2, n2) {
        var i2, r2, o2 = e2.waypoints;
        return { point: r2 = o2[i2 = n2 ? 0 : o2.length - 1], actual: this._getIntersection(t2, e2, n2) || r2, idx: i2 };
      }, Pg.prototype._getIntersection = function(e2, t2, n2) {
        return En(this._getShapePath(e2), this._getConnectionPath(t2), n2);
      }, Pg.prototype._getConnectionPath = function(e2) {
        return this._graphicsFactory.getConnectionPath(e2);
      }, Pg.prototype._getShapePath = function(e2) {
        return this._graphicsFactory.getShapePath(e2);
      }, Pg.prototype._getGfx = function(e2) {
        return this._elementRegistry.getGraphics(e2);
      };
      var Tg = { __init__: ["modeling", "bpmnUpdater"], __depends__: [lm, Hm, Vm, qm, Pu, yv, Ev, Pv, Mv, ta, la, mv], bpmnFactory: ["type", Dv], bpmnUpdater: ["type", Bv], elementFactory: ["type", Ov], modeling: ["type", Wy], layouter: ["type", hg], connectionDocking: ["type", Pg] }, kg = Math.round;
      function Ag(e2, t2, n2, i2, r2) {
        function o2(e3, t3, n3, i3) {
          return r2.allowed("elements.move", { shapes: e3, delta: t3, position: n3, target: i3 });
        }
        function a2(e3, n3, i3, r3) {
          if (l(i3) && (r3 = i3, i3 = false), !n3.waypoints && n3.parent && !Se(e3.target).has("djs-hit-no-move")) {
            var o3 = function(e4) {
              return { x: e4.x + kg(e4.width / 2), y: e4.y + kg(e4.height / 2) };
            }(n3);
            return t2.init(e3, o3, "shape.move", { cursor: "grabbing", autoActivate: i3, data: { shape: n3, context: r3 || {} } }), true;
          }
        }
        e2.on("shape.move.start", 1500, function(e3) {
          var t3 = e3.context, n3 = e3.shape, r3 = i2.get().slice();
          -1 === r3.indexOf(n3) && (r3 = [n3]), r3 = function(e4) {
            var t4 = R(e4, "id");
            return y(e4, function(e5) {
              for (; e5 = e5.parent; ) if (t4[e5.id]) return false;
              return true;
            });
          }(r3), L(t3, { shapes: r3, validatedShapes: r3, shape: n3 });
        }), e2.on("shape.move.start", 1250, function(e3) {
          var t3 = e3.context, n3 = t3.validatedShapes;
          if (!(t3.canExecute = o2(n3))) return false;
        }), e2.on("shape.move.move", 500, function(e3) {
          var t3, n3 = e3.context, i3 = n3.validatedShapes, r3 = e3.hover, a3 = { x: e3.dx, y: e3.dy };
          t3 = o2(i3, a3, { x: e3.x, y: e3.y }, r3), n3.delta = a3, n3.canExecute = t3, n3.target = null !== t3 ? r3 : null;
        }), e2.on("shape.move.end", function(e3) {
          var t3 = e3.context, i3 = t3.delta, r3 = t3.canExecute, o3 = "attach" === r3, a3 = t3.shapes;
          if (false === r3) return false;
          i3.x = kg(i3.x), i3.y = kg(i3.y), 0 === i3.x && 0 === i3.y || n2.moveElements(a3, i3, t3.target, { primaryShape: t3.shape, attach: o3 });
        }), e2.on("element.mousedown", function(e3) {
          if (Fo(e3)) {
            var t3 = jo(e3);
            if (!t3) throw new Error("must supply DOM mousedown event");
            return a2(t3, e3.element);
          }
        }), this.start = a2;
      }
      Ag.$inject = ["eventBus", "dragging", "modeling", "selection", "rules"];
      var Mg = "djs-dragging", Dg = "drop-ok", Bg = "drop-not-ok", Ng = "new-parent", Og = "attach-ok";
      function jg(e2, t2, n2, r2) {
        function o2(e3) {
          var t3 = function(e4) {
            var t4 = y(e4, function(t5) {
              return !fn(t5) || m(e4, A({ id: t5.source.id })) && m(e4, A({ id: t5.target.id }));
            });
            return t4;
          }(a2(e3));
          return t3;
        }
        function a2(e3) {
          var t3 = mt(e3, true), n3 = E(t3, function(e4) {
            return (e4.incoming || []).concat(e4.outgoing || []);
          });
          return i(t3.concat(n3));
        }
        function s2(e3, n3) {
          [Og, Dg, Bg, Ng].forEach(function(i2) {
            i2 === n3 ? t2.addMarker(e3, i2) : t2.removeMarker(e3, i2);
          });
        }
        e2.on("shape.move.start", 499, function(e3) {
          var s3 = e3.context, c2 = s3.shapes, p2 = s3.allDraggedElements, l2 = o2(c2);
          if (!s3.dragGroup) {
            var u2 = De("g");
            we(u2, n2.cls("djs-drag-group", ["no-events"])), ge(t2.getActiveLayer(), u2), s3.dragGroup = u2;
          }
          l2.forEach(function(e4) {
            r2.addDragger(e4, s3.dragGroup);
          }), g(p2 = p2 ? i([p2, a2(c2)]) : a2(c2), function(e4) {
            t2.addMarker(e4, Mg);
          }), s3.allDraggedElements = p2, s3.differentParents = 1 !== function(e4) {
            return S(e4).length;
          }(R(c2, function(e4) {
            return e4.parent && e4.parent.id;
          }));
        }), e2.on("shape.move.move", 499, function(e3) {
          var t3 = e3.context, n3 = t3.dragGroup, i2 = t3.target, r3 = t3.shape.parent, o3 = t3.canExecute;
          i2 && ("attach" === o3 ? s2(i2, Og) : t3.canExecute && i2 && i2.id !== r3.id ? s2(i2, Ng) : s2(i2, t3.canExecute ? Dg : Bg)), ii(n3, e3.dx, e3.dy);
        }), e2.on(["shape.move.out", "shape.move.cleanup"], function(e3) {
          var t3 = e3.context.target;
          t3 && s2(t3, null);
        }), e2.on("shape.move.cleanup", function(e3) {
          var n3 = e3.context, i2 = n3.allDraggedElements, r3 = n3.dragGroup;
          g(i2, function(e4) {
            t2.removeMarker(e4, Mg);
          }), r3 && Re(r3);
        }), this.makeDraggable = function(e3, n3, i2) {
          r2.addDragger(n3, e3.dragGroup), i2 && t2.addMarker(n3, Mg), e3.allDraggedElements ? e3.allDraggedElements.push(n3) : e3.allDraggedElements = [n3];
        };
      }
      jg.$inject = ["eventBus", "canvas", "styles", "previewSupport"];
      var Lg = { __depends__: [Uo, ta, Ko, Bp, Tp, Kl], __init__: ["move", "movePreview"], move: ["type", Ag], movePreview: ["type", jg] }, Ig = ".djs-palette-toggle", $g = ".entry", Fg = Ig + ", " + $g, zg = "djs-palette-", Hg = "open", Gg = "two-column";
      function Vg(e2, t2) {
        this._eventBus = e2, this._canvas = t2;
        var n2 = this;
        e2.on("tool-manager.update", function(e3) {
          var t3 = e3.tool;
          n2.updateToolHighlight(t3);
        }), e2.on("i18n.changed", function() {
          n2._update();
        }), e2.on("diagram.init", function() {
          n2._diagramInitialized = true, n2._rebuild();
        });
      }
      function Wg(e2, t2) {
        var n2 = t2.getPaletteEntries();
        return h(n2) ? n2(e2) : (g(n2, function(t3, n3) {
          e2[n3] = t3;
        }), e2);
      }
      Vg.$inject = ["eventBus", "canvas"], Vg.prototype.registerProvider = function(e2, t2) {
        t2 || (t2 = e2, e2 = 1e3), this._eventBus.on("palette.getProviders", e2, function(e3) {
          e3.providers.push(t2);
        }), this._rebuild();
      }, Vg.prototype.getEntries = function() {
        return this._getProviders().reduce(Wg, {});
      }, Vg.prototype._rebuild = function() {
        this._diagramInitialized && (this._getProviders().length && (this._container || this._init(), this._update()));
      }, Vg.prototype._init = function() {
        var e2 = this, t2 = this._eventBus, n2 = this._getParentContainer(), i2 = this._container = de(Vg.HTML_MARKUP);
        n2.appendChild(i2), X(n2).add(zg + "shown"), pe.bind(i2, Fg, "click", function(t3) {
          if (J(t3.delegateTarget, Ig)) return e2.toggle();
          e2.trigger("click", t3);
        }), ae.bind(i2, "mousedown", function(e3) {
          e3.stopPropagation();
        }), pe.bind(i2, $g, "dragstart", function(t3) {
          e2.trigger("dragstart", t3);
        }), t2.on("canvas.resized", this._layoutChanged, this), t2.fire("palette.create", { container: i2 });
      }, Vg.prototype._getProviders = function(e2) {
        var t2 = this._eventBus.createEvent({ type: "palette.getProviders", providers: [] });
        return this._eventBus.fire(t2), t2.providers;
      }, Vg.prototype._toggleState = function(e2) {
        e2 = e2 || {};
        var t2, n2 = this._getParentContainer(), i2 = this._container, r2 = this._eventBus, o2 = X(i2), a2 = X(n2);
        t2 = "twoColumn" in e2 ? e2.twoColumn : this._needsCollapse(n2.clientHeight, this._entries || {}), o2.toggle(Gg, t2), a2.toggle(zg + Gg, t2), "open" in e2 && (o2.toggle(Hg, e2.open), a2.toggle(zg + Hg, e2.open)), r2.fire("palette.changed", { twoColumn: t2, open: this.isOpen() });
      }, Vg.prototype._update = function() {
        var e2 = fe(".djs-palette-entries", this._container), t2 = this._entries = this.getEntries();
        Q(e2), g(t2, function(t3, n2) {
          var i2 = t3.group || "default", r2 = fe("[data-group=" + ma(i2) + "]", e2);
          r2 || (K(r2 = de('<div class="group"></div>'), "data-group", i2), e2.appendChild(r2));
          var o2 = t3.html || (t3.separator ? '<hr class="separator" />' : '<div class="entry" draggable="true"></div>'), a2 = de(o2);
          if (r2.appendChild(a2), !t3.separator && (K(a2, "data-action", n2), t3.title && K(a2, "title", t3.title), t3.className && function(e3, t4) {
            var n3 = X(e3);
            (p(t4) ? t4 : t4.split(/\s+/g)).forEach(function(e4) {
              n3.add(e4);
            });
          }(a2, t3.className), t3.imageUrl)) {
            var s2 = de("<img>");
            K(s2, "src", t3.imageUrl), a2.appendChild(s2);
          }
        }), this.open();
      }, Vg.prototype.trigger = function(e2, t2, n2) {
        var i2, r2, o2 = t2.delegateTarget || t2.target;
        return o2 ? (i2 = K(o2, "data-action"), r2 = t2.originalEvent || t2, this.triggerEntry(i2, e2, r2, n2)) : t2.preventDefault();
      }, Vg.prototype.triggerEntry = function(e2, t2, n2, i2) {
        var r2, o2;
        if ((r2 = this._entries[e2]) && (o2 = r2.action, false !== this._eventBus.fire("palette.trigger", { entry: r2, event: n2 }))) {
          if (h(o2)) {
            if ("click" === t2) return o2(n2, i2);
          } else if (o2[t2]) return o2[t2](n2, i2);
          n2.preventDefault();
        }
      }, Vg.prototype._layoutChanged = function() {
        this._toggleState({});
      }, Vg.prototype._needsCollapse = function(e2, t2) {
        return e2 < 46 * Object.keys(t2).length + 50;
      }, Vg.prototype.close = function() {
        this._toggleState({ open: false, twoColumn: false });
      }, Vg.prototype.open = function() {
        this._toggleState({ open: true });
      }, Vg.prototype.toggle = function() {
        this.isOpen() ? this.close() : this.open();
      }, Vg.prototype.isActiveTool = function(e2) {
        return e2 && this._activeTool === e2;
      }, Vg.prototype.updateToolHighlight = function(e2) {
        var t2;
        this._toolsContainer || (t2 = fe(".djs-palette-entries", this._container), this._toolsContainer = fe("[data-group=tools]", t2)), g(this._toolsContainer.children, function(t3) {
          var n2 = t3.getAttribute("data-action");
          if (n2) {
            var i2 = X(t3);
            n2 = n2.replace("-tool", ""), i2.contains("entry") && n2 === e2 ? i2.add("highlighted-entry") : i2.remove("highlighted-entry");
          }
        });
      }, Vg.prototype.isOpen = function() {
        return X(this._container).has(Hg);
      }, Vg.prototype._getParentContainer = function() {
        return this._canvas.getContainer();
      }, Vg.HTML_MARKUP = '<div class="djs-palette"><div class="djs-palette-entries"></div><div class="djs-palette-toggle"></div></div>';
      var Ug = { __init__: ["palette"], palette: ["type", Vg] }, qg = "crosshair";
      function Kg(e2, t2, n2, i2, r2, o2, a2) {
        this._selection = r2, this._dragging = n2, this._mouse = a2;
        var s2 = this, c2 = function(e3) {
          var n3, i3 = t2.getActiveLayer();
          we(n3 = e3.frame = De("rect"), { class: "djs-lasso-overlay", width: 1, height: 1, x: 0, y: 0 }), ge(i3, n3);
        }, p2 = function(e3) {
          var t3 = e3.frame, n3 = e3.bbox;
          we(t3, { x: n3.x, y: n3.y, width: n3.width, height: n3.height });
        }, l2 = function(e3) {
          e3.frame && Re(e3.frame);
        };
        o2.registerTool("lasso", { tool: "lasso.selection", dragging: "lasso" }), e2.on("lasso.selection.end", function(t3) {
          var n3 = t3.originalEvent.target;
          (t3.hover || n3 instanceof SVGElement) && e2.once("lasso.selection.ended", function() {
            s2.activateLasso(t3.originalEvent, true);
          });
        }), e2.on("lasso.end", function(e3) {
          var t3 = Yg(e3), n3 = i2.filter(function(e4) {
            return e4;
          });
          s2.select(n3, t3);
        }), e2.on("lasso.start", function(e3) {
          var t3 = e3.context;
          t3.bbox = Yg(e3), c2(t3);
        }), e2.on("lasso.move", function(e3) {
          var t3 = e3.context;
          t3.bbox = Yg(e3), p2(t3);
        }), e2.on("lasso.cleanup", function(e3) {
          var t3 = e3.context;
          l2(t3);
        }), e2.on("element.mousedown", 1500, function(e3) {
          if (Ho(e3)) return s2.activateLasso(e3.originalEvent), true;
        });
      }
      function Yg(e2) {
        var t2 = { x: e2.x - e2.dx, y: e2.y - e2.dy }, n2 = { x: e2.x, y: e2.y };
        return t2.x <= n2.x && t2.y < n2.y || t2.x < n2.x && t2.y <= n2.y ? { x: t2.x, y: t2.y, width: n2.x - t2.x, height: n2.y - t2.y } : t2.x >= n2.x && t2.y < n2.y || t2.x > n2.x && t2.y <= n2.y ? { x: n2.x, y: t2.y, width: t2.x - n2.x, height: n2.y - t2.y } : t2.x <= n2.x && t2.y > n2.y || t2.x < n2.x && t2.y >= n2.y ? { x: t2.x, y: n2.y, width: n2.x - t2.x, height: t2.y - n2.y } : t2.x >= n2.x && t2.y > n2.y || t2.x > n2.x && t2.y >= n2.y ? { x: n2.x, y: n2.y, width: t2.x - n2.x, height: t2.y - n2.y } : { x: n2.x, y: n2.y, width: 0, height: 0 };
      }
      Kg.$inject = ["eventBus", "canvas", "dragging", "elementRegistry", "selection", "toolManager", "mouse"], Kg.prototype.activateLasso = function(e2, t2) {
        this._dragging.init(e2, "lasso", { autoActivate: t2, cursor: qg, data: { context: {} } });
      }, Kg.prototype.activateSelection = function(e2, t2) {
        this._dragging.init(e2, "lasso.selection", { trapClick: false, autoActivate: t2, cursor: qg, data: { context: {} } });
      }, Kg.prototype.select = function(e2, t2) {
        var n2 = function(e3, t3) {
          var n3 = {};
          return g(e3, function(e4) {
            var i2 = e4;
            i2.waypoints && (i2 = vt(i2)), !u(t3.y) && i2.x > t3.x && (n3[e4.id] = e4), !u(t3.x) && i2.y > t3.y && (n3[e4.id] = e4), i2.x > t3.x && i2.y > t3.y && (u(t3.width) && u(t3.height) && i2.width + i2.x < t3.width + t3.x && i2.height + i2.y < t3.height + t3.y ? n3[e4.id] = e4 : u(t3.width) && u(t3.height) || (n3[e4.id] = e4));
          }), n3;
        }(e2, t2);
        this._selection.select(C(n2));
      }, Kg.prototype.toggle = function() {
        if (this.isActive()) return this._dragging.cancel();
        var e2 = this._mouse.getLastMoveEvent();
        this.activateSelection(e2, !!e2);
      }, Kg.prototype.isActive = function() {
        var e2 = this._dragging.context();
        return e2 && /^lasso/.test(e2.prefix);
      };
      var Xg = { __depends__: [Ym, cu], __init__: ["lassoTool"], lassoTool: ["type", Kg] }, Zg = 1500, Qg = "grab";
      function Jg(e2, t2, n2, i2, r2, o2) {
        this._dragging = n2, this._mouse = o2;
        var a2 = this, s2 = i2.get("keyboard", false);
        r2.registerTool("hand", { tool: "hand", dragging: "hand.move" }), e2.on("element.mousedown", Zg, function(e3) {
          if (zo(e3)) return a2.activateMove(e3.originalEvent, true), false;
        }), s2 && s2.addListener(Zg, function(e3) {
          if (eb(e3.keyEvent) && !a2.isActive()) {
            var t3 = a2._mouse.getLastMoveEvent();
            a2.activateMove(t3, !!t3);
          }
        }, "keyboard.keydown"), s2 && s2.addListener(Zg, function(e3) {
          eb(e3.keyEvent) && a2.isActive() && a2.toggle();
        }, "keyboard.keyup"), e2.on("hand.end", function(t3) {
          var n3 = t3.originalEvent.target;
          if (!(t3.hover || n3 instanceof SVGElement)) return false;
          e2.once("hand.ended", function() {
            a2.activateMove(t3.originalEvent, { reactivate: true });
          });
        }), e2.on("hand.move.move", function(e3) {
          var n3 = t2.viewbox().scale;
          t2.scroll({ dx: e3.dx * n3, dy: e3.dy * n3 });
        }), e2.on("hand.move.end", function(t3) {
          var n3 = t3.context.reactivate;
          return !zo(t3) && n3 && e2.once("hand.move.ended", function(e3) {
            a2.activateHand(e3.originalEvent, true, true);
          }), false;
        });
      }
      function eb(e2) {
        return Fa("Space", e2);
      }
      Jg.$inject = ["eventBus", "canvas", "dragging", "injector", "toolManager", "mouse"], Jg.prototype.activateMove = function(e2, t2, n2) {
        "object" == typeof t2 && (n2 = t2, t2 = false), this._dragging.init(e2, "hand.move", { autoActivate: t2, cursor: Qg, data: { context: n2 || {} } });
      }, Jg.prototype.activateHand = function(e2, t2, n2) {
        this._dragging.init(e2, "hand", { trapClick: false, autoActivate: t2, cursor: Qg, data: { context: { reactivate: n2 } } });
      }, Jg.prototype.toggle = function() {
        if (this.isActive()) return this._dragging.cancel();
        var e2 = this._mouse.getLastMoveEvent();
        this.activateHand(e2, !!e2);
      }, Jg.prototype.isActive = function() {
        var e2 = this._dragging.context();
        return !!e2 && /^(hand|hand\.move)$/.test(e2.prefix);
      };
      var tb = { __depends__: [Ym, cu], __init__: ["handTool"], handTool: ["type", Jg] }, nb = "connect-ok", ib = "connect-not-ok";
      function rb(e2, t2, n2, i2, r2, o2, a2) {
        var s2 = this;
        this._dragging = t2, this._rules = o2, this._mouse = a2, r2.registerTool("global-connect", { tool: "global-connect", dragging: "global-connect.drag" }), e2.on("global-connect.hover", function(e3) {
          var t3 = e3.context, n3 = e3.hover, r3 = t3.canStartConnect = s2.canStartConnect(n3);
          null !== r3 && (t3.startTarget = n3, i2.addMarker(n3, r3 ? nb : ib));
        }), e2.on(["global-connect.out", "global-connect.cleanup"], function(e3) {
          var t3 = e3.context.startTarget, n3 = e3.context.canStartConnect;
          t3 && i2.removeMarker(t3, n3 ? nb : ib);
        }), e2.on(["global-connect.ended"], function(t3) {
          var i3 = t3.context.startTarget, r3 = { x: t3.x, y: t3.y };
          if (s2.canStartConnect(i3)) return e2.once("element.out", function() {
            e2.once(["connect.ended", "connect.canceled"], function() {
              e2.fire("global-connect.drag.ended");
            }), n2.start(null, i3, r3);
          }), false;
        });
      }
      rb.$inject = ["eventBus", "dragging", "connect", "canvas", "toolManager", "rules", "mouse"], rb.prototype.start = function(e2, t2) {
        this._dragging.init(e2, "global-connect", { autoActivate: t2, trapClick: false, data: { context: {} } });
      }, rb.prototype.toggle = function() {
        if (this.isActive()) return this._dragging.cancel();
        var e2 = this._mouse.getLastMoveEvent();
        return this.start(e2, !!e2);
      }, rb.prototype.isActive = function() {
        var e2 = this._dragging.context();
        return e2 && /^global-connect/.test(e2.prefix);
      }, rb.prototype.canStartConnect = function(e2) {
        return this._rules.allowed("connection.start", { source: e2 });
      };
      var ob = { __depends__: [Ol, Bp, Tp, Ym, cu], globalConnect: ["type", rb] };
      function ab(e2, t2, n2, i2, r2, o2, a2, s2) {
        this._palette = e2, this._create = t2, this._elementFactory = n2, this._spaceTool = i2, this._lassoTool = r2, this._handTool = o2, this._globalConnect = a2, this._translate = s2, e2.registerProvider(this);
      }
      ab.$inject = ["palette", "create", "elementFactory", "spaceTool", "lassoTool", "handTool", "globalConnect", "translate"], ab.prototype.getPaletteEntries = function() {
        var e2 = {}, t2 = this._create, n2 = this._elementFactory, i2 = this._spaceTool, r2 = this._lassoTool, o2 = this._handTool, a2 = this._globalConnect, s2 = this._translate;
        function c2(e3, i3, r3, o3, a3) {
          function c3(i4) {
            var r4 = n2.createShape(L({ type: e3 }, a3));
            a3 && (Nr(r4).isExpanded = a3.isExpanded);
            t2.start(i4, r4);
          }
          var p3 = e3.replace(/^bpmn:/, "");
          return { group: i3, className: r3, title: o3 || s2("Create {type}", { type: p3 }), action: { dragstart: c3, click: c3 } };
        }
        function p2(e3) {
          var i3 = n2.createShape({ type: "bpmn:SubProcess", x: 0, y: 0, isExpanded: true }), r3 = n2.createShape({ type: "bpmn:StartEvent", x: 40, y: 82, parent: i3 });
          t2.start(e3, [i3, r3], { hints: { autoSelect: [i3] } });
        }
        function l2(e3) {
          t2.start(e3, n2.createParticipantShape());
        }
        return L(e2, { "hand-tool": { group: "tools", className: "bpmn-icon-hand-tool", title: s2("Activate the hand tool"), action: { click: function(e3) {
          o2.activateHand(e3);
        } } }, "lasso-tool": { group: "tools", className: "bpmn-icon-lasso-tool", title: s2("Activate the lasso tool"), action: { click: function(e3) {
          r2.activateSelection(e3);
        } } }, "space-tool": { group: "tools", className: "bpmn-icon-space-tool", title: s2("Activate the create/remove space tool"), action: { click: function(e3) {
          i2.activateSelection(e3);
        } } }, "global-connect-tool": { group: "tools", className: "bpmn-icon-connection-multi", title: s2("Activate the global connect tool"), action: { click: function(e3) {
          a2.start(e3);
        } } }, "tool-separator": { group: "tools", separator: true }, "create.start-event": c2("bpmn:StartEvent", "event", "bpmn-icon-start-event-none", s2("Create StartEvent")), "create.intermediate-event": c2("bpmn:IntermediateThrowEvent", "event", "bpmn-icon-intermediate-event-none", s2("Create Intermediate/Boundary Event")), "create.end-event": c2("bpmn:EndEvent", "event", "bpmn-icon-end-event-none", s2("Create EndEvent")), "create.exclusive-gateway": c2("bpmn:ExclusiveGateway", "gateway", "bpmn-icon-gateway-none", s2("Create Gateway")), "create.task": c2("bpmn:Task", "activity", "bpmn-icon-task", s2("Create Task")), "create.data-object": c2("bpmn:DataObjectReference", "data-object", "bpmn-icon-data-object", s2("Create DataObjectReference")), "create.data-store": c2("bpmn:DataStoreReference", "data-store", "bpmn-icon-data-store", s2("Create DataStoreReference")), "create.subprocess-expanded": { group: "activity", className: "bpmn-icon-subprocess-expanded", title: s2("Create expanded SubProcess"), action: { dragstart: p2, click: p2 } }, "create.participant-expanded": { group: "collaboration", className: "bpmn-icon-participant", title: s2("Create Pool/Participant"), action: { dragstart: l2, click: l2 } }, "create.group": c2("bpmn:Group", "artifact", "bpmn-icon-group", s2("Create Group")) }), e2;
      };
      var sb = { __depends__: [Ug, ru, mv, Xg, tb, ob, ko], __init__: ["paletteProvider"], paletteProvider: ["type", ab] };
      function cb(e2, t2, n2, i2, r2) {
        ua.call(this, e2), e2.on("shape.move.move", 250, function(e3) {
          var o2 = e3.context, a2 = o2.canExecute;
          o2.visualReplacements || (o2.visualReplacements = {}), a2 && a2.replacements ? function(e4) {
            g(e4.canExecute.replacements, function(o3) {
              var a3 = o3.oldElementId, s2 = { type: o3.newElementType };
              if (!e4.visualReplacements[a3]) {
                var c2 = t2.get(a3);
                L(s2, { x: c2.x, y: c2.y });
                var p2 = n2.createShape(s2);
                i2.addShape(p2, c2.parent);
                var l2 = fe('[data-element-id="' + ma(c2.id) + '"]', e4.dragGroup);
                l2 && we(l2, { display: "none" });
                var u2 = r2.addDragger(p2, e4.dragGroup);
                e4.visualReplacements[a3] = u2, i2.removeShape(p2);
              }
            });
          }(o2) : function(e4) {
            var t3 = e4.visualReplacements;
            g(t3, function(n3, i3) {
              var r3 = fe('[data-element-id="' + ma(i3) + '"]', e4.dragGroup);
              r3 && we(r3, { display: "inline" }), n3.remove(), t3[i3] && delete t3[i3];
            });
          }(o2);
        });
      }
      cb.$inject = ["eventBus", "elementRegistry", "elementFactory", "canvas", "previewSupport"], e(cb, ua);
      var pb = { __depends__: [Kl], __init__: ["bpmnReplacePreview"], bpmnReplacePreview: ["type", cb] }, lb = 40, ub = 20, hb = 10, db = 20, fb = ["x", "y"], mb = Math.abs;
      function vb(e2) {
        e2.on(["connect.hover", "connect.move", "connect.end"], 1250, function(e3) {
          var t2 = e3.context, n2 = t2.canExecute, i2 = t2.start, r2 = t2.hover, o2 = t2.source, a2 = t2.target;
          e3.originalEvent && $a(e3.originalEvent) || (t2.initialConnectionStart || (t2.initialConnectionStart = t2.connectionStart), n2 && r2 && function(e4, t3, n3) {
            fb.forEach(function(i3) {
              var r3 = bb(i3, t3);
              e4[i3] < t3[i3] + n3 ? Sl(e4, i3, t3[i3] + n3) : e4[i3] > t3[i3] + r3 - n3 && Sl(e4, i3, t3[i3] + r3 - n3);
            });
          }(e3, r2, function(e4) {
            return Mr(e4, "bpmn:Task") ? hb : ub;
          }(r2)), r2 && function(e4, t3) {
            return w(t3, function(t4) {
              return gb(e4, t4);
            });
          }(n2, ["bpmn:Association", "bpmn:DataInputAssociation", "bpmn:DataOutputAssociation", "bpmn:SequenceFlow"]) ? (t2.connectionStart = wl(i2), Dr(r2, ["bpmn:Event", "bpmn:Gateway"]) && yb(e3, wl(r2)), Dr(r2, ["bpmn:Task", "bpmn:SubProcess"]) && function(e4, t3) {
            var n3 = wl(t3);
            fb.forEach(function(i3) {
              (function(e5, t4, n4) {
                return e5[n4] > t4[n4] + db && e5[n4] < t4[n4] + bb(n4, t4) - db;
              })(e4, t3, i3) && Sl(e4, i3, n3[i3]);
            });
          }(e3, r2), Mr(o2, "bpmn:BoundaryEvent") && a2 === o2.host && function(e4) {
            var t3 = e4.context, n3 = t3.source, i3 = t3.target;
            if (function(e5) {
              var t4 = e5.hover, n4 = e5.source;
              return t4 && n4 && t4 === n4;
            }(t3)) return;
            var r3 = wl(n3), o3 = wn(r3, i3, -10), a3 = [];
            /top|bottom/.test(o3) && a3.push("x");
            /left|right/.test(o3) && a3.push("y");
            a3.forEach(function(t4) {
              var n4, i4 = e4[t4];
              mb(i4 - r3[t4]) < lb && (n4 = i4 > r3[t4] ? r3[t4] + lb : r3[t4] - lb, Sl(e4, t4, n4));
            });
          }(e3)) : gb(n2, "bpmn:MessageFlow") ? (Mr(i2, "bpmn:Event") && (t2.connectionStart = wl(i2)), Mr(r2, "bpmn:Event") && yb(e3, wl(r2))) : t2.connectionStart = t2.initialConnectionStart);
        });
      }
      function yb(e2, t2) {
        Sl(e2, "x", t2.x), Sl(e2, "y", t2.y);
      }
      function gb(e2, t2) {
        return e2 && e2.type === t2;
      }
      function bb(e2, t2) {
        return "x" === e2 ? t2.width : t2.height;
      }
      function xb() {
        this._targets = {}, this._snapOrigins = {}, this._snapLocations = [], this._defaultSnaps = {};
      }
      function _b() {
        this._snapValues = {};
      }
      vb.$inject = ["eventBus"], xb.prototype.getSnapOrigin = function(e2) {
        return this._snapOrigins[e2];
      }, xb.prototype.setSnapOrigin = function(e2, t2) {
        this._snapOrigins[e2] = t2, -1 === this._snapLocations.indexOf(e2) && this._snapLocations.push(e2);
      }, xb.prototype.addDefaultSnap = function(e2, t2) {
        var n2 = this._defaultSnaps[e2];
        n2 || (n2 = this._defaultSnaps[e2] = []), n2.push(t2);
      }, xb.prototype.getSnapLocations = function() {
        return this._snapLocations;
      }, xb.prototype.setSnapLocations = function(e2) {
        this._snapLocations = e2;
      }, xb.prototype.pointsForTarget = function(e2) {
        var t2 = e2.id || e2, n2 = this._targets[t2];
        return n2 || (n2 = this._targets[t2] = new _b()).initDefaults(this._defaultSnaps), n2;
      }, _b.prototype.add = function(e2, t2) {
        var n2 = this._snapValues[e2];
        n2 || (n2 = this._snapValues[e2] = { x: [], y: [] }), -1 === n2.x.indexOf(t2.x) && n2.x.push(t2.x), -1 === n2.y.indexOf(t2.y) && n2.y.push(t2.y);
      }, _b.prototype.snap = function(e2, t2, n2, i2) {
        var r2 = this._snapValues[t2];
        return r2 && function(e3, t3, n3) {
          var i3, r3;
          for (n3 = void 0 === n3 ? 10 : n3, i3 = 0; i3 < t3.length; i3++) if (r3 = t3[i3], gl(r3 - e3) <= n3) return r3;
        }(e2[n2], r2[n2], i2);
      }, _b.prototype.initDefaults = function(e2) {
        var t2 = this;
        g(e2 || {}, function(e3, n2) {
          g(e3, function(e4) {
            t2.add(n2, e4);
          });
        });
      };
      var wb = 1250;
      function Eb(e2, t2, n2) {
        var i2 = this;
        this._elementRegistry = e2, t2.on(["create.start", "shape.move.start"], function(e3) {
          i2.initSnap(e3);
        }), t2.on(["create.move", "create.end", "shape.move.move", "shape.move.end"], wb, function(e3) {
          var t3 = e3.context, r2 = t3.shape, o2 = t3.snapContext, a2 = t3.target;
          if ((!e3.originalEvent || !$a(e3.originalEvent)) && !El(e3) && a2) {
            var s2 = o2.pointsForTarget(a2);
            s2.initialized || ((s2 = i2.addSnapTargetPoints(s2, r2, a2)).initialized = true), n2.snap(e3, s2);
          }
        }), t2.on(["create.cleanup", "shape.move.cleanup"], function() {
          n2.hide();
        });
      }
      Eb.$inject = ["elementRegistry", "eventBus", "snapping"], Eb.prototype.initSnap = function(e2) {
        var t2, n2 = this._elementRegistry, i2 = e2.context, r2 = i2.shape, o2 = i2.snapContext;
        o2 || (o2 = i2.snapContext = new xb());
        var a2 = (t2 = n2.get(r2.id) ? wl(r2, e2) : { x: e2.x + wl(r2).x, y: e2.y + wl(r2).y }).x - r2.width / 2, s2 = t2.y - r2.height / 2, c2 = t2.x + r2.width / 2, p2 = t2.y + r2.height / 2;
        return o2.setSnapOrigin("mid", { x: t2.x - e2.x, y: t2.y - e2.y }), mn(r2) || (o2.setSnapOrigin("top-left", { x: a2 - e2.x, y: s2 - e2.y }), o2.setSnapOrigin("bottom-right", { x: c2 - e2.x, y: p2 - e2.y })), o2;
      }, Eb.prototype.addSnapTargetPoints = function(e2, t2, n2) {
        return g(this.getSnapTargets(t2, n2), function(n3) {
          if (mn(n3)) mn(t2) && e2.add("mid", wl(n3));
          else if (fn(n3)) {
            if (n3.waypoints.length < 3) return;
            g(n3.waypoints.slice(1, -1), function(t3) {
              e2.add("mid", t3);
            });
          } else e2.add("mid", wl(n3));
        }), u(t2.x) && u(t2.y) ? (this._elementRegistry.get(t2.id) && e2.add("mid", wl(t2)), e2) : e2;
      }, Eb.prototype.getSnapTargets = function(e2, t2) {
        return Cl(t2).filter(function(e3) {
          return !e3.hidden;
        });
      };
      function Sb(e2, t2) {
        t2.invoke(Eb, this), e2.on(["create.move", "create.end"], 1500, Cb), e2.on(["create.move", "create.end", "shape.move.move", "shape.move.end"], 1500, function(e3) {
          var t3 = e3.context, n2 = t3.canExecute, i2 = t3.target;
          n2 && ("attach" === n2 || n2.attach) && !El(e3) && function(e4, t4) {
            var n3, i3 = gn(t4), r2 = um(e4, t4), o2 = e4.context, a2 = o2.shape;
            n3 = a2.parent ? { x: 0, y: 0 } : _n(a2);
            /top/.test(r2) ? Sl(e4, "y", i3.top - n3.y) : /bottom/.test(r2) && Sl(e4, "y", i3.bottom - n3.y);
            /left/.test(r2) ? Sl(e4, "x", i3.left - n3.x) : /right/.test(r2) && Sl(e4, "x", i3.right - n3.x);
          }(e3, i2);
        });
      }
      function Cb(e2) {
        var t2 = e2.context.createConstraints;
        if (t2) {
          var n2 = t2.top, i2 = t2.right, r2 = t2.bottom, o2 = t2.left;
          (o2 && o2 >= e2.x || i2 && i2 <= e2.x) && Sl(e2, "x", e2.x), (n2 && n2 >= e2.y || r2 && r2 <= e2.y) && Sl(e2, "y", e2.y);
        }
      }
      function Rb(e2, t2) {
        return -1 !== e2.indexOf(t2);
      }
      function Pb(e2, t2, n2) {
        return t2 ? { x: e2.x - n2.x, y: e2.y - n2.y } : { x: e2.x, y: e2.y };
      }
      e(Sb, Eb), Sb.$inject = ["eventBus", "injector"], Sb.prototype.initSnap = function(e2) {
        var t2 = Eb.prototype.initSnap.call(this, e2), n2 = e2.shape, i2 = !!this._elementRegistry.get(n2.id);
        return g(n2.outgoing, function(n3) {
          var r2 = n3.waypoints[0];
          r2 = r2.original || r2, t2.setSnapOrigin(n3.id + "-docking", Pb(r2, i2, e2));
        }), g(n2.incoming, function(n3) {
          var r2 = n3.waypoints[n3.waypoints.length - 1];
          r2 = r2.original || r2, t2.setSnapOrigin(n3.id + "-docking", Pb(r2, i2, e2));
        }), Mr(n2, "bpmn:Participant") && t2.setSnapLocations(["top-left", "bottom-right", "mid"]), t2;
      }, Sb.prototype.addSnapTargetPoints = function(e2, t2, n2) {
        Eb.prototype.addSnapTargetPoints.call(this, e2, t2, n2);
        var i2 = this.getSnapTargets(t2, n2);
        g(i2, function(n3) {
          var i3;
          (function(e3) {
            if (Mr(e3, "bpmn:SubProcess") && Zr(e3)) return true;
            return Mr(e3, "bpmn:Participant");
          }(n3) || (i3 = "bpmn:TextAnnotation", [t2, n3].every(function(e3) {
            return Mr(e3, i3);
          }))) && (e2.add("top-left", xl(n3)), e2.add("bottom-right", _l(n3)));
        });
        var r2 = this._elementRegistry;
        return g(t2.incoming, function(n3) {
          if (r2.get(t2.id)) {
            Rb(i2, n3.source) || e2.add("mid", _n(n3.source));
            var o2 = n3.waypoints[0];
            e2.add(n3.id + "-docking", o2.original || o2);
          }
        }), g(t2.outgoing, function(n3) {
          if (r2.get(t2.id)) {
            Rb(i2, n3.target) || e2.add("mid", _n(n3.target));
            var o2 = n3.waypoints[n3.waypoints.length - 1];
            e2.add(n3.id + "-docking", o2.original || o2);
          }
        }), Mr(n2, "bpmn:SequenceFlow") && (e2 = this.addSnapTargetPoints(e2, t2, n2.parent)), e2;
      }, Sb.prototype.getSnapTargets = function(e2, t2) {
        return Eb.prototype.getSnapTargets.call(this, e2, t2).filter(function(e3) {
          return !Mr(e3, "bpmn:Lane");
        });
      };
      function Tb(e2, t2) {
        var n2 = this;
        e2.on(["resize.start"], function(e3) {
          n2.initSnap(e3);
        }), e2.on(["resize.move", "resize.end"], 1250, function(e3) {
          var i2 = e3.context, r2 = i2.shape, o2 = r2.parent, a2 = i2.direction, s2 = i2.snapContext;
          if (!(e3.originalEvent && $a(e3.originalEvent) || El(e3))) {
            var c2 = s2.pointsForTarget(o2);
            c2.initialized || ((c2 = n2.addSnapTargetPoints(c2, r2, o2, a2)).initialized = true), /* @__PURE__ */ function(e4) {
              return "n" === e4 || "s" === e4;
            }(a2) && Sl(e3, "x", e3.x), /* @__PURE__ */ function(e4) {
              return "e" === e4 || "w" === e4;
            }(a2) && Sl(e3, "y", e3.y), t2.snap(e3, c2);
          }
        }), e2.on(["resize.cleanup"], function() {
          t2.hide();
        });
      }
      function kb(e2, t2) {
        var n2 = _n(e2), i2 = gn(e2), r2 = { x: n2.x, y: n2.y };
        return -1 !== t2.indexOf("n") ? r2.y = i2.top : -1 !== t2.indexOf("s") && (r2.y = i2.bottom), -1 !== t2.indexOf("e") ? r2.x = i2.right : -1 !== t2.indexOf("w") && (r2.x = i2.left), r2;
      }
      Tb.prototype.initSnap = function(e2) {
        var t2 = e2.context, n2 = t2.shape, i2 = t2.direction, r2 = t2.snapContext;
        r2 || (r2 = t2.snapContext = new xb());
        var o2 = kb(n2, i2);
        return r2.setSnapOrigin("corner", { x: o2.x - e2.x, y: o2.y - e2.y }), r2;
      }, Tb.prototype.addSnapTargetPoints = function(e2, t2, n2, i2) {
        return g(this.getSnapTargets(t2, n2), function(t3) {
          e2.add("corner", _l(t3)), e2.add("corner", xl(t3));
        }), e2.add("corner", kb(t2, i2)), e2;
      }, Tb.$inject = ["eventBus", "snapping"], Tb.prototype.getSnapTargets = function(e2, t2) {
        return Cl(t2).filter(function(t3) {
          return !(n2 = t3, i2 = e2, n2.host === i2 || fn(t3) || function(e3) {
            return !!e3.hidden;
          }(t3) || mn(t3));
          var n2, i2;
        });
      };
      function Ab(e2) {
        this._canvas = e2, this._asyncHide = O(j(this.hide, this), 1e3);
      }
      Ab.$inject = ["canvas"], Ab.prototype.snap = function(e2, t2) {
        var n2 = e2.context.snapContext, i2 = n2.getSnapLocations(), r2 = { x: El(e2, "x"), y: El(e2, "y") };
        g(i2, function(i3) {
          var o2 = n2.getSnapOrigin(i3), a2 = { x: e2.x + o2.x, y: e2.y + o2.y };
          if (g(["x", "y"], function(e3) {
            var n3;
            r2[e3] || void 0 !== (n3 = t2.snap(a2, i3, e3, 7)) && (r2[e3] = { value: n3, originValue: n3 - o2[e3] });
          }), r2.x && r2.y) return false;
        }), this.showSnapLine("vertical", r2.x && r2.x.value), this.showSnapLine("horizontal", r2.y && r2.y.value), g(["x", "y"], function(t3) {
          var n3 = r2[t3];
          l(n3) && Sl(e2, t3, n3.originValue);
        });
      }, Ab.prototype._createLine = function(e2) {
        var t2 = this._canvas.getLayer("snap"), n2 = De("path");
        return we(n2, { d: "M0,0 L0,0" }), Se(n2).add("djs-snap-line"), ge(t2, n2), { update: function(t3) {
          u(t3) ? we(n2, "horizontal" === e2 ? { d: "M-100000," + t3 + " L+100000," + t3, display: "" } : { d: "M " + t3 + ",-100000 L " + t3 + ", +100000", display: "" }) : we(n2, { display: "none" });
        } };
      }, Ab.prototype._createSnapLines = function() {
        this._snapLines = { horizontal: this._createLine("horizontal"), vertical: this._createLine("vertical") };
      }, Ab.prototype.showSnapLine = function(e2, t2) {
        var n2 = this.getSnapLine(e2);
        n2 && n2.update(t2), this._asyncHide();
      }, Ab.prototype.getSnapLine = function(e2) {
        return this._snapLines || this._createSnapLines(), this._snapLines[e2];
      }, Ab.prototype.hide = function() {
        g(this._snapLines, function(e2) {
          e2.update();
        });
      };
      var Mb = { __depends__: [{ __init__: ["createMoveSnapping", "resizeSnapping", "snapping"], createMoveSnapping: ["type", Eb], resizeSnapping: ["type", Tb], snapping: ["type", Ab] }], __init__: ["connectSnapping", "createMoveSnapping"], connectSnapping: ["type", vb], createMoveSnapping: ["type", Sb] };
      function Db(e2, t2, n2, i2) {
        this._open = false, this._results = [], this._eventMaps = [], this._canvas = e2, this._eventBus = t2, this._overlays = n2, this._selection = i2, this._container = de(Db.BOX_HTML), this._searchInput = fe(Db.INPUT_SELECTOR, this._container), this._resultsContainer = fe(Db.RESULTS_CONTAINER_SELECTOR, this._container), this._canvas.getContainer().appendChild(this._container), t2.on(["canvas.destroy", "diagram.destroy"], this.close, this);
      }
      function Bb(e2, t2, n2) {
        var i2 = function(e3) {
          var t3 = "";
          return e3.forEach(function(e4) {
            e4.matched ? t3 += '<strong class="' + Db.RESULT_HIGHLIGHT_CLASS + '">' + ya(e4.matched) + "</strong>" : t3 += ya(e4.normal);
          }), "" !== t3 ? t3 : null;
        }(t2), r2 = de(n2);
        r2.innerHTML = i2, e2.appendChild(r2);
      }
      Db.$inject = ["canvas", "eventBus", "overlays", "selection"], Db.prototype._bindEvents = function() {
        var e2 = this;
        function t2(t3, n2, i2, r2) {
          e2._eventMaps.push({ el: t3, type: i2, listener: pe.bind(t3, n2, i2, r2) });
        }
        t2(document, "html", "click", function(t3) {
          e2.close();
        }), t2(this._container, Db.INPUT_SELECTOR, "click", function(e3) {
          e3.stopPropagation(), e3.delegateTarget.focus();
        }), t2(this._container, Db.RESULT_SELECTOR, "mouseover", function(t3) {
          t3.stopPropagation(), e2._scrollToNode(t3.delegateTarget), e2._preselect(t3.delegateTarget);
        }), t2(this._container, Db.RESULT_SELECTOR, "click", function(t3) {
          t3.stopPropagation(), e2._select(t3.delegateTarget);
        }), t2(this._container, Db.INPUT_SELECTOR, "keydown", function(e3) {
          Fa("ArrowUp", e3) && e3.preventDefault(), Fa("ArrowDown", e3) && e3.preventDefault();
        }), t2(this._container, Db.INPUT_SELECTOR, "keyup", function(t3) {
          if (Fa("Escape", t3)) return e2.close();
          if (Fa("Enter", t3)) {
            var n2 = e2._getCurrentResult();
            return n2 ? e2._select(n2) : e2.close();
          }
          return Fa("ArrowUp", t3) ? e2._scrollToDirection(true) : Fa("ArrowDown", t3) ? e2._scrollToDirection() : void (Fa(["ArrowLeft", "ArrowRight"], t3) || e2._search(t3.delegateTarget.value));
        });
      }, Db.prototype._unbindEvents = function() {
        this._eventMaps.forEach(function(e2) {
          pe.unbind(e2.el, e2.type, e2.listener);
        });
      }, Db.prototype._search = function(e2) {
        var t2 = this;
        if (this._clearResults(), e2 && "" !== e2) {
          var n2 = this._searchProvider.find(e2);
          if (n2.length) {
            n2.forEach(function(e3) {
              var n3 = e3.element.id, i3 = t2._createResultNode(e3, n3);
              t2._results[n3] = { element: e3.element, node: i3 };
            });
            var i2 = fe(Db.RESULT_SELECTOR, this._resultsContainer);
            this._scrollToNode(i2), this._preselect(i2);
          }
        }
      }, Db.prototype._scrollToDirection = function(e2) {
        var t2 = this._getCurrentResult();
        if (t2) {
          var n2 = e2 ? t2.previousElementSibling : t2.nextElementSibling;
          n2 && (this._scrollToNode(n2), this._preselect(n2));
        }
      }, Db.prototype._scrollToNode = function(e2) {
        if (e2 && e2 !== this._getCurrentResult()) {
          var t2 = e2.offsetTop, n2 = this._resultsContainer.scrollTop, i2 = t2 - this._resultsContainer.clientHeight + e2.clientHeight;
          t2 < n2 ? this._resultsContainer.scrollTop = t2 : n2 < i2 && (this._resultsContainer.scrollTop = i2);
        }
      }, Db.prototype._clearResults = function() {
        Q(this._resultsContainer), this._results = [], this._resetOverlay(), this._eventBus.fire("searchPad.cleared");
      }, Db.prototype._getCurrentResult = function() {
        return fe(Db.RESULT_SELECTED_SELECTOR, this._resultsContainer);
      }, Db.prototype._createResultNode = function(e2, t2) {
        var n2 = de(Db.RESULT_HTML);
        return e2.primaryTokens.length > 0 && Bb(n2, e2.primaryTokens, Db.RESULT_PRIMARY_HTML), Bb(n2, e2.secondaryTokens, Db.RESULT_SECONDARY_HTML), K(n2, Db.RESULT_ID_ATTRIBUTE, t2), this._resultsContainer.appendChild(n2), n2;
      }, Db.prototype.registerProvider = function(e2) {
        this._searchProvider = e2;
      }, Db.prototype.open = function() {
        if (!this._searchProvider) throw new Error("no search provider registered");
        this.isOpen() || (this._bindEvents(), this._open = true, X(this._container).add("open"), this._searchInput.focus(), this._eventBus.fire("searchPad.opened"));
      }, Db.prototype.close = function() {
        this.isOpen() && (this._unbindEvents(), this._open = false, X(this._container).remove("open"), this._clearResults(), this._searchInput.value = "", this._searchInput.blur(), this._resetOverlay(), this._eventBus.fire("searchPad.closed"));
      }, Db.prototype.toggle = function() {
        this.isOpen() ? this.close() : this.open();
      }, Db.prototype.isOpen = function() {
        return this._open;
      }, Db.prototype._preselect = function(e2) {
        var t2 = this._getCurrentResult();
        if (e2 !== t2) {
          t2 && X(t2).remove(Db.RESULT_SELECTED_CLASS);
          var n2 = K(e2, Db.RESULT_ID_ATTRIBUTE), i2 = this._results[n2].element;
          X(e2).add(Db.RESULT_SELECTED_CLASS), this._resetOverlay(i2), this._canvas.scrollToElement(i2, { top: 400 }), this._selection.select(i2), this._eventBus.fire("searchPad.preselected", i2);
        }
      }, Db.prototype._select = function(e2) {
        var t2 = K(e2, Db.RESULT_ID_ATTRIBUTE), n2 = this._results[t2].element;
        this.close(), this._resetOverlay(), this._canvas.scrollToElement(n2, { top: 400 }), this._selection.select(n2), this._eventBus.fire("searchPad.selected", n2);
      }, Db.prototype._resetOverlay = function(e2) {
        if (this._overlayId && this._overlays.remove(this._overlayId), e2) {
          var t2 = function(e3) {
            var t3 = 6, n2 = e3.width + 2 * t3, i2 = e3.height + 2 * t3, r2 = { width: n2 + "px", height: i2 + "px" }, o2 = de('<div class="' + Db.OVERLAY_CLASS + '"></div>');
            return q(o2, r2), { position: { bottom: i2 - t3, right: n2 - t3 }, show: true, html: o2 };
          }(vt(e2));
          this._overlayId = this._overlays.add(e2, t2);
        }
      }, Db.CONTAINER_SELECTOR = ".djs-search-container", Db.INPUT_SELECTOR = ".djs-search-input input", Db.RESULTS_CONTAINER_SELECTOR = ".djs-search-results", Db.RESULT_SELECTOR = ".djs-search-result", Db.RESULT_SELECTED_CLASS = "djs-search-result-selected", Db.RESULT_SELECTED_SELECTOR = "." + Db.RESULT_SELECTED_CLASS, Db.RESULT_ID_ATTRIBUTE = "data-result-id", Db.RESULT_HIGHLIGHT_CLASS = "djs-search-highlight", Db.OVERLAY_CLASS = "djs-search-overlay", Db.BOX_HTML = '<div class="djs-search-container djs-draggable djs-scrollable"><div class="djs-search-input"><input type="text"/></div><div class="djs-search-results"></div></div>', Db.RESULT_HTML = '<div class="djs-search-result"></div>', Db.RESULT_PRIMARY_HTML = '<div class="djs-search-result-primary"></div>', Db.RESULT_SECONDARY_HTML = '<p class="djs-search-result-secondary"></p>';
      var Nb = { __depends__: [ca, ta], searchPad: ["type", Db] };
      function Ob(e2, t2, n2) {
        this._elementRegistry = e2, this._canvas = n2, t2.registerProvider(this);
      }
      function jb(e2) {
        return y(e2, function(e3) {
          return !!e3.matched;
        }).length > 0;
      }
      function Lb(e2, t2) {
        var n2 = [], i2 = e2;
        if (!e2) return n2;
        e2 = e2.toLowerCase(), t2 = t2.toLowerCase();
        var r2 = e2.indexOf(t2);
        return r2 > -1 ? (0 !== r2 && n2.push({ normal: i2.substr(0, r2) }), n2.push({ matched: i2.substr(r2, t2.length) }), t2.length + r2 < e2.length && n2.push({ normal: i2.substr(t2.length + r2, e2.length) })) : n2.push({ normal: i2 }), n2;
      }
      Ob.$inject = ["elementRegistry", "searchPad", "canvas"], Ob.prototype.find = function(e2) {
        var t2 = this._canvas.getRootElement(), n2 = this._elementRegistry.filter(function(e3) {
          return !e3.labelTarget;
        });
        return n2 = y(n2, function(e3) {
          return e3 !== t2;
        }), n2 = k(n2 = y(n2 = E(n2, function(t3) {
          return { primaryTokens: Lb(so(t3), e2), secondaryTokens: Lb(t3.id, e2), element: t3 };
        }), function(e3) {
          return jb(e3.primaryTokens) || jb(e3.secondaryTokens);
        }), function(e3) {
          return so(e3.element) + e3.element.id;
        });
      };
      var Ib = { __depends__: [Nb], __init__: ["bpmnSearch"], bpmnSearch: ["type", Ob] };
      function $b(e2) {
        Xr.call(this, e2);
      }
      return e($b, Xr), $b.Viewer = Na, $b.NavigatedViewer = hs, $b.prototype.createDiagram = function() {
        return this.importXML('<?xml version="1.0" encoding="UTF-8"?><bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" targetNamespace="http://bpmn.io/schema/bpmn" id="Definitions_1"><bpmn:process id="Process_1" isExecutable="false"><bpmn:startEvent id="StartEvent_1"/></bpmn:process><bpmndi:BPMNDiagram id="BPMNDiagram_1"><bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1"><bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1"><dc:Bounds height="36.0" width="36.0" x="173.0" y="102.0"/></bpmndi:BPMNShape></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></bpmn:definitions>');
      }, $b.prototype.createDiagram = Rr($b.prototype.createDiagram), $b.prototype._interactionModules = [Xa, os, _s, us], $b.prototype._modelingModules = [ep, vp, Mp, _p, kl, Ol, Ll, ph, gu, ru, vh, wh, jh, Ih, Fh, Kh, hd, Tg, Lg, sb, pb, od, Mb, Ib], $b.prototype._modules = [].concat(Na.prototype._modules, $b.prototype._interactionModules, $b.prototype._modelingModules), $b;
    });
  }
});
export default require_bpmn_modeler_production_min();
/*! Bundled license information:

bpmn-js/dist/bpmn-modeler.production.min.js:
  (*! bpmn-js - bpmn-modeler v13.2.2 | Copyright (c) 2014-present, camunda Services GmbH | bpmn.io/license *)
  (*! Hammer.JS - v2.0.7 - 2016-04-22
     * http://hammerjs.github.io/
     *
     * Copyright (c) 2016 Jorik Tangelder;
     * Licensed under the MIT license *)
*/
//# sourceMappingURL=bpmn-js_dist_bpmn-modeler__production__min__js.js.map
