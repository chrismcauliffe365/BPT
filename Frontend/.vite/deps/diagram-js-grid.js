import {
  append,
  attr2 as attr,
  clear,
  create,
  has,
  isObject,
  query
} from "./chunk-3I43AQ5D.js";
import {
  __commonJS,
  __toESM
} from "./chunk-V4OQ3NZ2.js";

// node_modules/path-intersection/intersect.js
var require_intersect = __commonJS({
  "node_modules/path-intersection/intersect.js"(exports, module) {
    "use strict";
    var p2s = /,?([a-z]),?/gi;
    var toFloat = parseFloat;
    var math = Math;
    var PI = math.PI;
    var mmin = math.min;
    var mmax = math.max;
    var pow = math.pow;
    var abs = math.abs;
    var pathCommand = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[-+]?\d+)?[\s]*,?[\s]*)+)/ig;
    var pathValues = /(-?\d*\.?\d*(?:e[-+]?\d+)?)[\s]*,?[\s]*/ig;
    var isArray = Array.isArray || function(o) {
      return o instanceof Array;
    };
    function hasProperty(obj, property) {
      return Object.prototype.hasOwnProperty.call(obj, property);
    }
    function clone(obj) {
      if (typeof obj == "function" || Object(obj) !== obj) {
        return obj;
      }
      var res = new obj.constructor();
      for (var key in obj) {
        if (hasProperty(obj, key)) {
          res[key] = clone(obj[key]);
        }
      }
      return res;
    }
    function repush(array, item) {
      for (var i = 0, ii = array.length; i < ii; i++) if (array[i] === item) {
        return array.push(array.splice(i, 1)[0]);
      }
    }
    function cacher(f) {
      function newf() {
        var arg = Array.prototype.slice.call(arguments, 0), args = arg.join("␀"), cache = newf.cache = newf.cache || {}, count = newf.count = newf.count || [];
        if (hasProperty(cache, args)) {
          repush(count, args);
          return cache[args];
        }
        count.length >= 1e3 && delete cache[count.shift()];
        count.push(args);
        cache[args] = f.apply(0, arg);
        return cache[args];
      }
      return newf;
    }
    function parsePathString(pathString) {
      if (!pathString) {
        return null;
      }
      var pth = paths(pathString);
      if (pth.arr) {
        return clone(pth.arr);
      }
      var paramCounts = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 }, data = [];
      if (isArray(pathString) && isArray(pathString[0])) {
        data = clone(pathString);
      }
      if (!data.length) {
        String(pathString).replace(pathCommand, function(a, b, c) {
          var params = [], name = b.toLowerCase();
          c.replace(pathValues, function(a2, b2) {
            b2 && params.push(+b2);
          });
          if (name == "m" && params.length > 2) {
            data.push([b].concat(params.splice(0, 2)));
            name = "l";
            b = b == "m" ? "l" : "L";
          }
          while (params.length >= paramCounts[name]) {
            data.push([b].concat(params.splice(0, paramCounts[name])));
            if (!paramCounts[name]) {
              break;
            }
          }
        });
      }
      data.toString = paths.toString;
      pth.arr = clone(data);
      return data;
    }
    function paths(ps) {
      var p = paths.ps = paths.ps || {};
      if (p[ps]) {
        p[ps].sleep = 100;
      } else {
        p[ps] = {
          sleep: 100
        };
      }
      setTimeout(function() {
        for (var key in p) {
          if (hasProperty(p, key) && key != ps) {
            p[key].sleep--;
            !p[key].sleep && delete p[key];
          }
        }
      });
      return p[ps];
    }
    function rectBBox(x, y, width, height) {
      if (arguments.length === 1) {
        y = x.y;
        width = x.width;
        height = x.height;
        x = x.x;
      }
      return {
        x,
        y,
        width,
        height,
        x2: x + width,
        y2: y + height
      };
    }
    function pathToString() {
      return this.join(",").replace(p2s, "$1");
    }
    function pathClone(pathArray) {
      var res = clone(pathArray);
      res.toString = pathToString;
      return res;
    }
    function findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
      var t1 = 1 - t, t13 = pow(t1, 3), t12 = pow(t1, 2), t2 = t * t, t3 = t2 * t, x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x, y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y;
      return {
        x: fixError(x),
        y: fixError(y)
      };
    }
    function bezierBBox(points) {
      var bbox = curveBBox.apply(null, points);
      return rectBBox(
        bbox.x0,
        bbox.y0,
        bbox.x1 - bbox.x0,
        bbox.y1 - bbox.y0
      );
    }
    function isPointInsideBBox(bbox, x, y) {
      return x >= bbox.x && x <= bbox.x + bbox.width && y >= bbox.y && y <= bbox.y + bbox.height;
    }
    function isBBoxIntersect(bbox1, bbox2) {
      bbox1 = rectBBox(bbox1);
      bbox2 = rectBBox(bbox2);
      return isPointInsideBBox(bbox2, bbox1.x, bbox1.y) || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y) || isPointInsideBBox(bbox2, bbox1.x, bbox1.y2) || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y2) || isPointInsideBBox(bbox1, bbox2.x, bbox2.y) || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y) || isPointInsideBBox(bbox1, bbox2.x, bbox2.y2) || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y2) || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x) && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
    }
    function base3(t, p1, p2, p3, p4) {
      var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4, t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
      return t * t2 - 3 * p1 + 3 * p2;
    }
    function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
      if (z == null) {
        z = 1;
      }
      z = z > 1 ? 1 : z < 0 ? 0 : z;
      var z2 = z / 2, n = 12, Tvalues = [-0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699, 0.7699, -0.9041, 0.9041, -0.9816, 0.9816], Cvalues = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472], sum = 0;
      for (var i = 0; i < n; i++) {
        var ct = z2 * Tvalues[i] + z2, xbase = base3(ct, x1, x2, x3, x4), ybase = base3(ct, y1, y2, y3, y4), comb = xbase * xbase + ybase * ybase;
        sum += Cvalues[i] * math.sqrt(comb);
      }
      return z2 * sum;
    }
    function intersectLines(x1, y1, x2, y2, x3, y3, x4, y4) {
      if (mmax(x1, x2) < mmin(x3, x4) || mmin(x1, x2) > mmax(x3, x4) || mmax(y1, y2) < mmin(y3, y4) || mmin(y1, y2) > mmax(y3, y4)) {
        return;
      }
      var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4), ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4), denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
      if (!denominator) {
        return;
      }
      var px = fixError(nx / denominator), py = fixError(ny / denominator), px2 = +px.toFixed(2), py2 = +py.toFixed(2);
      if (px2 < +mmin(x1, x2).toFixed(2) || px2 > +mmax(x1, x2).toFixed(2) || px2 < +mmin(x3, x4).toFixed(2) || px2 > +mmax(x3, x4).toFixed(2) || py2 < +mmin(y1, y2).toFixed(2) || py2 > +mmax(y1, y2).toFixed(2) || py2 < +mmin(y3, y4).toFixed(2) || py2 > +mmax(y3, y4).toFixed(2)) {
        return;
      }
      return { x: px, y: py };
    }
    function fixError(number) {
      return Math.round(number * 1e11) / 1e11;
    }
    function findBezierIntersections(bez1, bez2, justCount) {
      var bbox1 = bezierBBox(bez1), bbox2 = bezierBBox(bez2);
      if (!isBBoxIntersect(bbox1, bbox2)) {
        return justCount ? 0 : [];
      }
      var l1 = bezlen.apply(0, bez1), l2 = bezlen.apply(0, bez2), n1 = isLine(bez1) ? 1 : ~~(l1 / 5) || 1, n2 = isLine(bez2) ? 1 : ~~(l2 / 5) || 1, dots1 = [], dots2 = [], xy = {}, res = justCount ? 0 : [];
      for (var i = 0; i < n1 + 1; i++) {
        var p = findDotsAtSegment.apply(0, bez1.concat(i / n1));
        dots1.push({ x: p.x, y: p.y, t: i / n1 });
      }
      for (i = 0; i < n2 + 1; i++) {
        p = findDotsAtSegment.apply(0, bez2.concat(i / n2));
        dots2.push({ x: p.x, y: p.y, t: i / n2 });
      }
      for (i = 0; i < n1; i++) {
        for (var j = 0; j < n2; j++) {
          var di = dots1[i], di1 = dots1[i + 1], dj = dots2[j], dj1 = dots2[j + 1], ci = abs(di1.x - di.x) < 0.01 ? "y" : "x", cj = abs(dj1.x - dj.x) < 0.01 ? "y" : "x", is = intersectLines(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y), key;
          if (is) {
            key = is.x.toFixed(9) + "#" + is.y.toFixed(9);
            if (xy[key]) {
              continue;
            }
            xy[key] = true;
            var t1 = di.t + abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t), t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
            if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
              if (justCount) {
                res++;
              } else {
                res.push({
                  x: is.x,
                  y: is.y,
                  t1,
                  t2
                });
              }
            }
          }
        }
      }
      return res;
    }
    function findPathIntersections(path1, path2, justCount) {
      path1 = pathToCurve(path1);
      path2 = pathToCurve(path2);
      var x1, y1, x2, y2, x1m, y1m, x2m, y2m, bez1, bez2, res = justCount ? 0 : [];
      for (var i = 0, ii = path1.length; i < ii; i++) {
        var pi = path1[i];
        if (pi[0] == "M") {
          x1 = x1m = pi[1];
          y1 = y1m = pi[2];
        } else {
          if (pi[0] == "C") {
            bez1 = [x1, y1].concat(pi.slice(1));
            x1 = bez1[6];
            y1 = bez1[7];
          } else {
            bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
            x1 = x1m;
            y1 = y1m;
          }
          for (var j = 0, jj = path2.length; j < jj; j++) {
            var pj = path2[j];
            if (pj[0] == "M") {
              x2 = x2m = pj[1];
              y2 = y2m = pj[2];
            } else {
              if (pj[0] == "C") {
                bez2 = [x2, y2].concat(pj.slice(1));
                x2 = bez2[6];
                y2 = bez2[7];
              } else {
                bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
                x2 = x2m;
                y2 = y2m;
              }
              var intr = findBezierIntersections(bez1, bez2, justCount);
              if (justCount) {
                res += intr;
              } else {
                for (var k = 0, kk = intr.length; k < kk; k++) {
                  intr[k].segment1 = i;
                  intr[k].segment2 = j;
                  intr[k].bez1 = bez1;
                  intr[k].bez2 = bez2;
                }
                res = res.concat(intr);
              }
            }
          }
        }
      }
      return res;
    }
    function pathToAbsolute(pathArray) {
      var pth = paths(pathArray);
      if (pth.abs) {
        return pathClone(pth.abs);
      }
      if (!isArray(pathArray) || !isArray(pathArray && pathArray[0])) {
        pathArray = parsePathString(pathArray);
      }
      if (!pathArray || !pathArray.length) {
        return [["M", 0, 0]];
      }
      var res = [], x = 0, y = 0, mx = 0, my = 0, start = 0, pa0;
      if (pathArray[0][0] == "M") {
        x = +pathArray[0][1];
        y = +pathArray[0][2];
        mx = x;
        my = y;
        start++;
        res[0] = ["M", x, y];
      }
      for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
        res.push(r = []);
        pa = pathArray[i];
        pa0 = pa[0];
        if (pa0 != pa0.toUpperCase()) {
          r[0] = pa0.toUpperCase();
          switch (r[0]) {
            case "A":
              r[1] = pa[1];
              r[2] = pa[2];
              r[3] = pa[3];
              r[4] = pa[4];
              r[5] = pa[5];
              r[6] = +pa[6] + x;
              r[7] = +pa[7] + y;
              break;
            case "V":
              r[1] = +pa[1] + y;
              break;
            case "H":
              r[1] = +pa[1] + x;
              break;
            case "M":
              mx = +pa[1] + x;
              my = +pa[2] + y;
            default:
              for (var j = 1, jj = pa.length; j < jj; j++) {
                r[j] = +pa[j] + (j % 2 ? x : y);
              }
          }
        } else {
          for (var k = 0, kk = pa.length; k < kk; k++) {
            r[k] = pa[k];
          }
        }
        pa0 = pa0.toUpperCase();
        switch (r[0]) {
          case "Z":
            x = +mx;
            y = +my;
            break;
          case "H":
            x = r[1];
            break;
          case "V":
            y = r[1];
            break;
          case "M":
            mx = r[r.length - 2];
            my = r[r.length - 1];
          default:
            x = r[r.length - 2];
            y = r[r.length - 1];
        }
      }
      res.toString = pathToString;
      pth.abs = pathClone(res);
      return res;
    }
    function isLine(bez) {
      return bez[0] === bez[2] && bez[1] === bez[3] && bez[4] === bez[6] && bez[5] === bez[7];
    }
    function lineToCurve(x1, y1, x2, y2) {
      return [
        x1,
        y1,
        x2,
        y2,
        x2,
        y2
      ];
    }
    function qubicToCurve(x1, y1, ax, ay, x2, y2) {
      var _13 = 1 / 3, _23 = 2 / 3;
      return [
        _13 * x1 + _23 * ax,
        _13 * y1 + _23 * ay,
        _13 * x2 + _23 * ax,
        _13 * y2 + _23 * ay,
        x2,
        y2
      ];
    }
    function arcToCurve(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
      var _120 = PI * 120 / 180, rad = PI / 180 * (+angle || 0), res = [], xy, rotate = cacher(function(x3, y3, rad2) {
        var X = x3 * math.cos(rad2) - y3 * math.sin(rad2), Y = x3 * math.sin(rad2) + y3 * math.cos(rad2);
        return { x: X, y: Y };
      });
      if (!recursive) {
        xy = rotate(x1, y1, -rad);
        x1 = xy.x;
        y1 = xy.y;
        xy = rotate(x2, y2, -rad);
        x2 = xy.x;
        y2 = xy.y;
        var x = (x1 - x2) / 2, y = (y1 - y2) / 2;
        var h = x * x / (rx * rx) + y * y / (ry * ry);
        if (h > 1) {
          h = math.sqrt(h);
          rx = h * rx;
          ry = h * ry;
        }
        var rx2 = rx * rx, ry2 = ry * ry, k = (large_arc_flag == sweep_flag ? -1 : 1) * math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))), cx = k * rx * y / ry + (x1 + x2) / 2, cy = k * -ry * x / rx + (y1 + y2) / 2, f1 = math.asin(((y1 - cy) / ry).toFixed(9)), f2 = math.asin(((y2 - cy) / ry).toFixed(9));
        f1 = x1 < cx ? PI - f1 : f1;
        f2 = x2 < cx ? PI - f2 : f2;
        f1 < 0 && (f1 = PI * 2 + f1);
        f2 < 0 && (f2 = PI * 2 + f2);
        if (sweep_flag && f1 > f2) {
          f1 = f1 - PI * 2;
        }
        if (!sweep_flag && f2 > f1) {
          f2 = f2 - PI * 2;
        }
      } else {
        f1 = recursive[0];
        f2 = recursive[1];
        cx = recursive[2];
        cy = recursive[3];
      }
      var df = f2 - f1;
      if (abs(df) > _120) {
        var f2old = f2, x2old = x2, y2old = y2;
        f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
        x2 = cx + rx * math.cos(f2);
        y2 = cy + ry * math.sin(f2);
        res = arcToCurve(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
      }
      df = f2 - f1;
      var c1 = math.cos(f1), s1 = math.sin(f1), c2 = math.cos(f2), s2 = math.sin(f2), t = math.tan(df / 4), hx = 4 / 3 * rx * t, hy = 4 / 3 * ry * t, m1 = [x1, y1], m2 = [x1 + hx * s1, y1 - hy * c1], m3 = [x2 + hx * s2, y2 - hy * c2], m4 = [x2, y2];
      m2[0] = 2 * m1[0] - m2[0];
      m2[1] = 2 * m1[1] - m2[1];
      if (recursive) {
        return [m2, m3, m4].concat(res);
      } else {
        res = [m2, m3, m4].concat(res).join().split(",");
        var newres = [];
        for (var i = 0, ii = res.length; i < ii; i++) {
          newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
        }
        return newres;
      }
    }
    function curveBBox(x0, y0, x1, y1, x2, y2, x3, y3) {
      var tvalues = [], bounds = [[], []], a, b, c, t, t1, t2, b2ac, sqrtb2ac;
      for (var i = 0; i < 2; ++i) {
        if (i == 0) {
          b = 6 * x0 - 12 * x1 + 6 * x2;
          a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
          c = 3 * x1 - 3 * x0;
        } else {
          b = 6 * y0 - 12 * y1 + 6 * y2;
          a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
          c = 3 * y1 - 3 * y0;
        }
        if (abs(a) < 1e-12) {
          if (abs(b) < 1e-12) {
            continue;
          }
          t = -c / b;
          if (0 < t && t < 1) {
            tvalues.push(t);
          }
          continue;
        }
        b2ac = b * b - 4 * c * a;
        sqrtb2ac = math.sqrt(b2ac);
        if (b2ac < 0) {
          continue;
        }
        t1 = (-b + sqrtb2ac) / (2 * a);
        if (0 < t1 && t1 < 1) {
          tvalues.push(t1);
        }
        t2 = (-b - sqrtb2ac) / (2 * a);
        if (0 < t2 && t2 < 1) {
          tvalues.push(t2);
        }
      }
      var j = tvalues.length, jlen = j, mt;
      while (j--) {
        t = tvalues[j];
        mt = 1 - t;
        bounds[0][j] = mt * mt * mt * x0 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3;
        bounds[1][j] = mt * mt * mt * y0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3;
      }
      bounds[0][jlen] = x0;
      bounds[1][jlen] = y0;
      bounds[0][jlen + 1] = x3;
      bounds[1][jlen + 1] = y3;
      bounds[0].length = bounds[1].length = jlen + 2;
      return {
        x0: mmin.apply(0, bounds[0]),
        y0: mmin.apply(0, bounds[1]),
        x1: mmax.apply(0, bounds[0]),
        y1: mmax.apply(0, bounds[1])
      };
    }
    function pathToCurve(path) {
      var pth = paths(path);
      if (pth.curve) {
        return pathClone(pth.curve);
      }
      var curvedPath = pathToAbsolute(path), attrs = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, processPath = function(path2, d, pathCommand3) {
        var nx, ny;
        if (!path2) {
          return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
        }
        !(path2[0] in { T: 1, Q: 1 }) && (d.qx = d.qy = null);
        switch (path2[0]) {
          case "M":
            d.X = path2[1];
            d.Y = path2[2];
            break;
          case "A":
            path2 = ["C"].concat(arcToCurve.apply(0, [d.x, d.y].concat(path2.slice(1))));
            break;
          case "S":
            if (pathCommand3 == "C" || pathCommand3 == "S") {
              nx = d.x * 2 - d.bx;
              ny = d.y * 2 - d.by;
            } else {
              nx = d.x;
              ny = d.y;
            }
            path2 = ["C", nx, ny].concat(path2.slice(1));
            break;
          case "T":
            if (pathCommand3 == "Q" || pathCommand3 == "T") {
              d.qx = d.x * 2 - d.qx;
              d.qy = d.y * 2 - d.qy;
            } else {
              d.qx = d.x;
              d.qy = d.y;
            }
            path2 = ["C"].concat(qubicToCurve(d.x, d.y, d.qx, d.qy, path2[1], path2[2]));
            break;
          case "Q":
            d.qx = path2[1];
            d.qy = path2[2];
            path2 = ["C"].concat(qubicToCurve(d.x, d.y, path2[1], path2[2], path2[3], path2[4]));
            break;
          case "L":
            path2 = ["C"].concat(lineToCurve(d.x, d.y, path2[1], path2[2]));
            break;
          case "H":
            path2 = ["C"].concat(lineToCurve(d.x, d.y, path2[1], d.y));
            break;
          case "V":
            path2 = ["C"].concat(lineToCurve(d.x, d.y, d.x, path2[1]));
            break;
          case "Z":
            path2 = ["C"].concat(lineToCurve(d.x, d.y, d.X, d.Y));
            break;
        }
        return path2;
      }, fixArc = function(pp, i2) {
        if (pp[i2].length > 7) {
          pp[i2].shift();
          var pi = pp[i2];
          while (pi.length) {
            pathCommands[i2] = "A";
            pp.splice(i2++, 0, ["C"].concat(pi.splice(0, 6)));
          }
          pp.splice(i2, 1);
          ii = curvedPath.length;
        }
      }, pathCommands = [], pfirst = "", pathCommand2 = "";
      for (var i = 0, ii = curvedPath.length; i < ii; i++) {
        curvedPath[i] && (pfirst = curvedPath[i][0]);
        if (pfirst != "C") {
          pathCommands[i] = pfirst;
          i && (pathCommand2 = pathCommands[i - 1]);
        }
        curvedPath[i] = processPath(curvedPath[i], attrs, pathCommand2);
        if (pathCommands[i] != "A" && pfirst == "C") pathCommands[i] = "C";
        fixArc(curvedPath, i);
        var seg = curvedPath[i], seglen = seg.length;
        attrs.x = seg[seglen - 2];
        attrs.y = seg[seglen - 1];
        attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
        attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
      }
      pth.curve = pathClone(curvedPath);
      return curvedPath;
    }
    module.exports = findPathIntersections;
  }
});

// node_modules/diagram-js/lib/features/grid-snapping/GridUtil.js
var SPACING = 10;
function quantize(value, quantum, fn) {
  if (!fn) {
    fn = "round";
  }
  return Math[fn](value / quantum) * quantum;
}

// node_modules/diagram-js/lib/layout/LayoutUtil.js
var import_path_intersection = __toESM(require_intersect());

// node_modules/diagram-js/lib/util/ModelUtil.js
function isConnection(value) {
  return isObject(value) && has(value, "waypoints");
}

// node_modules/diagram-js/lib/layout/LayoutUtil.js
function roundPoint(point) {
  return {
    x: Math.round(point.x),
    y: Math.round(point.y)
  };
}
function getBoundsMid(bounds) {
  return roundPoint({
    x: bounds.x + (bounds.width || 0) / 2,
    y: bounds.y + (bounds.height || 0) / 2
  });
}
function getConnectionMid(connection) {
  var waypoints = connection.waypoints;
  var parts = waypoints.reduce(function(parts2, point, index2) {
    var lastPoint = waypoints[index2 - 1];
    if (lastPoint) {
      var lastPart = parts2[parts2.length - 1];
      var startLength = lastPart && lastPart.endLength || 0;
      var length = distance(lastPoint, point);
      parts2.push({
        start: lastPoint,
        end: point,
        startLength,
        endLength: startLength + length,
        length
      });
    }
    return parts2;
  }, []);
  var totalLength = parts.reduce(function(length, part) {
    return length + part.length;
  }, 0);
  var midLength = totalLength / 2;
  var i = 0;
  var midSegment = parts[i];
  while (midSegment.endLength < midLength) {
    midSegment = parts[++i];
  }
  var segmentProgress = (midLength - midSegment.startLength) / midSegment.length;
  var midPoint = {
    x: midSegment.start.x + (midSegment.end.x - midSegment.start.x) * segmentProgress,
    y: midSegment.start.y + (midSegment.end.y - midSegment.start.y) * segmentProgress
  };
  return midPoint;
}
function getMid(element) {
  if (isConnection(element)) {
    return getConnectionMid(element);
  }
  return getBoundsMid(element);
}
function distance(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

// node_modules/diagram-js-grid/dist/index.esm.js
var GRID_COLOR = "#ccc";
var LAYER_NAME = "djs-grid";
var GRID_DIMENSIONS = {
  width: 1e5,
  height: 1e5
};
function Grid(canvas, eventBus) {
  this._canvas = canvas;
  var self = this;
  eventBus.on("diagram.init", function() {
    self._init();
    self.toggle(true);
  });
  eventBus.on("gridSnapping.toggle", function(event) {
    var active = event.active;
    self.toggle(active);
    self._centerGridAroundViewbox();
  });
  eventBus.on("canvas.viewbox.changed", function(context) {
    var viewbox = context.viewbox;
    self._centerGridAroundViewbox(viewbox);
  });
}
Grid.prototype._init = function() {
  var defs = query("defs", this._canvas._svg);
  if (!defs) {
    defs = create("defs");
    append(this._canvas._svg, defs);
  }
  var pattern = this._pattern = create("pattern");
  var patternId = "djs-grid-pattern-" + randomNumber();
  attr(pattern, {
    id: patternId,
    width: SPACING,
    height: SPACING,
    patternUnits: "userSpaceOnUse"
  });
  var circle = this._circle = create("circle");
  attr(circle, {
    cx: 0.5,
    cy: 0.5,
    r: 0.5,
    fill: GRID_COLOR
  });
  append(pattern, circle);
  append(defs, pattern);
  var grid = this._gfx = create("rect");
  attr(grid, {
    x: -(GRID_DIMENSIONS.width / 2),
    y: -(GRID_DIMENSIONS.height / 2),
    width: GRID_DIMENSIONS.width,
    height: GRID_DIMENSIONS.height,
    fill: `url(#${patternId})`
  });
};
Grid.prototype._centerGridAroundViewbox = function(viewbox) {
  if (!viewbox) {
    viewbox = this._canvas.viewbox();
  }
  var mid = getMid(viewbox);
  attr(this._gfx, {
    x: -(GRID_DIMENSIONS.width / 2) + quantize(mid.x, SPACING),
    y: -(GRID_DIMENSIONS.height / 2) + quantize(mid.y, SPACING)
  });
};
Grid.prototype.isVisible = function() {
  return this._visible;
};
Grid.prototype.toggle = function(visible) {
  if (typeof visible === "undefined") {
    visible = !this._visible;
  }
  if (visible === this._visible) {
    return;
  }
  var parent = this._getParent();
  if (visible) {
    append(parent, this._gfx);
  } else {
    clear(parent);
  }
  this._visible = visible;
};
Grid.prototype._getParent = function() {
  return this._canvas.getLayer(LAYER_NAME, -2);
};
Grid.$inject = [
  "canvas",
  "eventBus"
];
function randomNumber() {
  return Math.trunc(Math.random() * 1e6);
}
var index = {
  __init__: ["grid"],
  grid: ["type", Grid]
};
export {
  index as default
};
//# sourceMappingURL=diagram-js-grid.js.map
