"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _recharts = require("recharts");
var _lucideReact = require("lucide-react");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var SatelliteLightCurveAnalyzer = function SatelliteLightCurveAnalyzer() {
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    uploadedSignals = _useState2[0],
    setUploadedSignals = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    testSignals = _useState4[0],
    setTestSignals = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedSignal = _useState6[0],
    setSelectedSignal = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    analysis = _useState8[0],
    setAnalysis = _useState8[1];
  var _useState9 = (0, _react.useState)(0),
    _useState0 = _slicedToArray(_useState9, 2),
    fileInputKey = _useState0[0],
    setFileInputKey = _useState0[1];
  (0, _react.useEffect)(function () {
    generateTestSignals();
  }, []);
  var generateTestSignals = function generateTestSignals() {
    var signals = [generateInvariantSignal(), generatePeriodicSignal(2.0), generatePeriodicSignal(5.0), generatePeriodicWithNoiseSignal(3.0, 0.3), generateAperiodicSignal(), generateComplexPeriodicSignal(), generateNoisyInvariantSignal()];
    setTestSignals(signals);
  };
  var generateInvariantSignal = function generateInvariantSignal() {
    var fs = 10;
    var segments = [];
    var t = 0;
    for (var seg = 0; seg < 5; seg++) {
      var segment = [];
      for (var i = 0; i < 10 * fs; i++) {
        segment.push({
          time: t,
          magnitude: 12.5 + (Math.random() - 0.5) * 0.1
        });
        t += 1 / fs;
      }
      segments.push(segment);
      t += 4;
    }
    return {
      name: "Test: Invariante",
      type: "invariante",
      segments: segments,
      data: segments.flat()
    };
  };
  var generatePeriodicSignal = function generatePeriodicSignal(period) {
    var fs = 10;
    var segments = [];
    var t = 0;
    for (var seg = 0; seg < 5; seg++) {
      var segment = [];
      for (var i = 0; i < 10 * fs; i++) {
        var magnitude = 12.0 + 0.5 * Math.sin(2 * Math.PI * t / period) + (Math.random() - 0.5) * 0.05;
        segment.push({
          time: t,
          magnitude: magnitude
        });
        t += 1 / fs;
      }
      segments.push(segment);
      t += 4;
    }
    return {
      name: "Test: Periodico (T=".concat(period, "s)"),
      type: "periodico",
      period: period,
      segments: segments,
      data: segments.flat()
    };
  };
  var generateAperiodicSignal = function generateAperiodicSignal() {
    var fs = 10;
    var segments = [];
    var t = 0;
    var mag = 12.0;
    for (var seg = 0; seg < 5; seg++) {
      var segment = [];
      for (var i = 0; i < 10 * fs; i++) {
        mag += (Math.random() - 0.5) * 0.3;
        mag = Math.max(11.5, Math.min(13.0, mag));
        segment.push({
          time: t,
          magnitude: mag
        });
        t += 1 / fs;
      }
      segments.push(segment);
      t += 4;
    }
    return {
      name: "Test: Aperiodico",
      type: "aperiodico",
      segments: segments,
      data: segments.flat()
    };
  };
  var generateComplexPeriodicSignal = function generateComplexPeriodicSignal() {
    var fs = 10;
    var segments = [];
    var t = 0;
    for (var seg = 0; seg < 5; seg++) {
      var segment = [];
      for (var i = 0; i < 10 * fs; i++) {
        var magnitude = 12.0 + 0.4 * Math.sin(2 * Math.PI * t / 3.0) + 0.2 * Math.sin(2 * Math.PI * t / 1.5) + (Math.random() - 0.5) * 0.05;
        segment.push({
          time: t,
          magnitude: magnitude
        });
        t += 1 / fs;
      }
      segments.push(segment);
      t += 4;
    }
    return {
      name: "Test: Periodico Complesso",
      type: "periodico",
      period: 3.0,
      segments: segments,
      data: segments.flat()
    };
  };
  var generateNoisyInvariantSignal = function generateNoisyInvariantSignal() {
    var fs = 10;
    var segments = [];
    var t = 0;
    for (var seg = 0; seg < 5; seg++) {
      var segment = [];
      for (var i = 0; i < 10 * fs; i++) {
        segment.push({
          time: t,
          magnitude: 12.5 + (Math.random() - 0.5) * 0.5
        });
        t += 1 / fs;
      }
      segments.push(segment);
      t += 4;
    }
    return {
      name: "Test: Invariante + Rumore Forte",
      type: "invariante",
      segments: segments,
      data: segments.flat()
    };
  };
  var generatePeriodicWithNoiseSignal = function generatePeriodicWithNoiseSignal(period, noiseLevel) {
    var fs = 10;
    var segments = [];
    var t = 0;
    for (var seg = 0; seg < 5; seg++) {
      var segment = [];
      for (var i = 0; i < 10 * fs; i++) {
        var magnitude = 12.0 + 0.5 * Math.sin(2 * Math.PI * t / period) + (Math.random() - 0.5) * noiseLevel;
        segment.push({
          time: t,
          magnitude: magnitude
        });
        t += 1 / fs;
      }
      segments.push(segment);
      t += 4;
    }
    return {
      name: "Test: Periodico (T=".concat(period, "s) + Rumore \u03C3=").concat(noiseLevel),
      type: "periodico",
      period: period,
      segments: segments,
      data: segments.flat()
    };
  };
  var handleFileUpload = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(event) {
      var file, text, lines, data, startTime, _iterator, _step, line, parts, timestamp, magnitude, dateTime, newSignal;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            file = event.target.files[0];
            if (file) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            _context.n = 2;
            return file.text();
          case 2:
            text = _context.v;
            lines = text.trim().split('\n');
            data = [];
            startTime = null;
            _iterator = _createForOfIteratorHelper(lines);
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                line = _step.value;
                parts = line.trim().split(/\s+/);
                if (parts.length >= 3) {
                  try {
                    // Cerca di parsare il timestamp (primo campo + secondo campo se è una data)
                    timestamp = void 0, magnitude = void 0; // Caso 1: timestamp numerico diretto (secondi)
                    if (!isNaN(parseFloat(parts[0])) && parts[0].indexOf('-') === -1) {
                      timestamp = parseFloat(parts[0]);
                      magnitude = parseFloat(parts[1]);
                    }
                    // Caso 2: data + timestamp (come i tuoi dati)
                    else if (parts[0].indexOf('-') !== -1) {
                      dateTime = new Date(parts[0] + ' ' + parts[1]).getTime();
                      if (startTime === null) startTime = dateTime;
                      timestamp = (dateTime - startTime) / 1000;
                      magnitude = parseFloat(parts[2]);
                    }
                    // Caso 3: due colonne: tempo, magnitudine
                    else {
                      timestamp = parseFloat(parts[0]);
                      magnitude = parseFloat(parts[1]);
                    }
                    if (!isNaN(timestamp) && !isNaN(magnitude)) {
                      data.push({
                        time: timestamp,
                        magnitude: magnitude
                      });
                    }
                  } catch (e) {
                    console.warn('Riga ignorata:', line);
                  }
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            if (data.length > 0) {
              newSignal = {
                name: file.name,
                type: "caricato",
                data: data,
                segments: [data]
              };
              setUploadedSignals(function (prev) {
                return [].concat(_toConsumableArray(prev), [newSignal]);
              });
              setSelectedSignal({
                type: 'uploaded',
                index: uploadedSignals.length
              });
              setFileInputKey(function (prev) {
                return prev + 1;
              });
            } else {
              alert('Nessun dato valido trovato nel file');
            }
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function handleFileUpload(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var removeUploadedSignal = function removeUploadedSignal(index) {
    setUploadedSignals(function (prev) {
      return prev.filter(function (_, i) {
        return i !== index;
      });
    });
    if ((selectedSignal === null || selectedSignal === void 0 ? void 0 : selectedSignal.type) === 'uploaded' && selectedSignal.index === index) {
      setSelectedSignal(null);
      setAnalysis(null);
    } else if ((selectedSignal === null || selectedSignal === void 0 ? void 0 : selectedSignal.type) === 'uploaded' && selectedSignal.index > index) {
      setSelectedSignal({
        type: 'uploaded',
        index: selectedSignal.index - 1
      });
    }
  };
  var computeFFT = function computeFFT(data) {
    var N = data.length;
    var spectrum = [];
    var fs = 10;
    for (var k = 0; k < N / 2; k++) {
      var real = 0,
        imag = 0;
      for (var n = 0; n < N; n++) {
        var angle = -2 * Math.PI * k * n / N;
        real += data[n] * Math.cos(angle);
        imag += data[n] * Math.sin(angle);
      }
      var magnitude = Math.sqrt(real * real + imag * imag) / N;
      var frequency = k * fs / N;
      spectrum.push({
        frequency: frequency,
        power: magnitude
      });
    }
    return spectrum;
  };
  var computeAutocorrelation = function computeAutocorrelation(data) {
    var mean = data.reduce(function (a, b) {
      return a + b;
    }, 0) / data.length;
    var variance = data.reduce(function (sum, x) {
      return sum + Math.pow(x - mean, 2);
    }, 0) / data.length;
    var maxLag = Math.min(100, Math.floor(data.length / 2));
    var acf = [];
    for (var lag = 0; lag < maxLag; lag++) {
      var sum = 0;
      for (var i = 0; i < data.length - lag; i++) {
        sum += (data[i] - mean) * (data[i + lag] - mean);
      }
      acf.push({
        lag: lag / 10,
        correlation: sum / ((data.length - lag) * variance)
      });
    }
    return acf;
  };
  var findPeriod = function findPeriod(times, magnitudes) {
    var minPeriod = 0.5;
    var maxPeriod = 10.0;
    var steps = 200;
    var periodStep = (maxPeriod - minPeriod) / steps;
    var bestPeriod = 0;
    var minTheta = Infinity;
    var pdm = [];
    for (var i = 0; i < steps; i++) {
      var period = minPeriod + i * periodStep;
      var theta = computePDM(times, magnitudes, period);
      pdm.push({
        period: period,
        theta: theta
      });
      if (theta < minTheta) {
        minTheta = theta;
        bestPeriod = period;
      }
    }
    return {
      bestPeriod: bestPeriod,
      pdm: pdm,
      minTheta: minTheta
    };
  };
  var computePDM = function computePDM(times, magnitudes, period) {
    var nBins = 10;
    var bins = Array(nBins).fill(0).map(function () {
      return [];
    });
    for (var i = 0; i < times.length; i++) {
      var phase = times[i] % period / period;
      var binIndex = Math.floor(phase * nBins) % nBins;
      bins[binIndex].push(magnitudes[i]);
    }
    var varWithin = 0;
    var count = 0;
    var _iterator2 = _createForOfIteratorHelper(bins),
      _step2;
    try {
      var _loop = function _loop() {
        var bin = _step2.value;
        if (bin.length > 1) {
          var mean = bin.reduce(function (a, b) {
            return a + b;
          }, 0) / bin.length;
          var variance = bin.reduce(function (sum, x) {
            return sum + Math.pow(x - mean, 2);
          }, 0) / bin.length;
          varWithin += variance * bin.length;
          count += bin.length;
        }
      };
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var overallMean = magnitudes.reduce(function (a, b) {
      return a + b;
    }, 0) / magnitudes.length;
    var overallVar = magnitudes.reduce(function (sum, x) {
      return sum + Math.pow(x - overallMean, 2);
    }, 0) / magnitudes.length;
    return count > 0 ? varWithin / (count * overallVar) : 1;
  };
  var analyzeSignal = function analyzeSignal(signal) {
    var magnitudes = signal.data.map(function (d) {
      return d.magnitude;
    });
    var times = signal.data.map(function (d) {
      return d.time;
    });
    var mean = magnitudes.reduce(function (a, b) {
      return a + b;
    }, 0) / magnitudes.length;
    var variance = magnitudes.reduce(function (sum, x) {
      return sum + Math.pow(x - mean, 2);
    }, 0) / magnitudes.length;
    var stdDev = Math.sqrt(variance);
    var n = magnitudes.length;
    var sumX = 0,
      sumY = 0,
      sumXY = 0,
      sumX2 = 0;
    for (var i = 0; i < n; i++) {
      sumX += i;
      sumY += magnitudes[i];
      sumXY += i * magnitudes[i];
      sumX2 += i * i;
    }
    var slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    var spectrum = computeFFT(magnitudes);
    var dominantFreq = spectrum.reduce(function (max, p) {
      return p.frequency > 0 && p.power > max.power ? p : max;
    }, {
      frequency: 0,
      power: 0
    });
    var acf = computeAutocorrelation(magnitudes);
    var acfPeaks = [];
    for (var _i = 1; _i < acf.length - 1; _i++) {
      if (acf[_i].correlation > acf[_i - 1].correlation && acf[_i].correlation > acf[_i + 1].correlation && acf[_i].correlation > 0.3) {
        acfPeaks.push(acf[_i]);
      }
    }
    var periodSearch = findPeriod(times, magnitudes);
    var classification = "Invariante";
    var confidence = 0;
    var estimatedPeriod = null;
    if (stdDev < 0.15) {
      classification = "Invariante";
      confidence = 1 - stdDev / 0.15;
    } else {
      var isPeriodic = periodSearch.minTheta < 0.3 || acfPeaks.length > 0 && acfPeaks[0].correlation > 0.5;
      if (isPeriodic) {
        classification = "Periodico";
        estimatedPeriod = periodSearch.bestPeriod;
        confidence = 1 - periodSearch.minTheta;
        if (acfPeaks.length > 0) {
          var acfPeriod = acfPeaks[0].lag;
          if (Math.abs(acfPeriod - estimatedPeriod) / estimatedPeriod < 0.2) {
            confidence = Math.max(confidence, acfPeaks[0].correlation);
          }
        }
      } else {
        classification = "Aperiodico";
        confidence = 0.7;
      }
    }
    return {
      classification: classification,
      confidence: confidence,
      estimatedPeriod: estimatedPeriod,
      statistics: {
        mean: mean,
        stdDev: stdDev,
        variance: variance,
        slope: slope
      },
      spectrum: spectrum,
      dominantFreq: dominantFreq,
      acf: acf,
      acfPeaks: acfPeaks,
      periodSearch: periodSearch
    };
  };
  (0, _react.useEffect)(function () {
    if (selectedSignal !== null) {
      var signal;
      if (selectedSignal.type === 'test') {
        signal = testSignals[selectedSignal.index];
      } else {
        signal = uploadedSignals[selectedSignal.index];
      }
      if (signal) {
        var result = analyzeSignal(signal);
        setAnalysis(result);
      }
    }
  }, [selectedSignal, testSignals, uploadedSignals]);
  var getCurrentSignal = function getCurrentSignal() {
    if (!selectedSignal) return null;
    if (selectedSignal.type === 'test') {
      return testSignals[selectedSignal.index];
    } else {
      return uploadedSignals[selectedSignal.index];
    }
  };
  var currentSignal = getCurrentSignal();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full min-h-screen overflow-auto bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-7xl mx-auto"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
  }, "Analizzatore Light Curves Satelliti"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-6 bg-slate-800/50 p-6 rounded-lg backdrop-blur border-2 border-dashed border-blue-500/50"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-xl font-bold mb-4 flex items-center gap-2"
  }, /*#__PURE__*/_react["default"].createElement(_lucideReact.Upload, {
    className: "w-5 h-5"
  }), "Carica la tua Light Curve"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "block mb-2 text-sm text-slate-300"
  }, "Formato file: CSV/TXT con colonne separate da spazi o tab"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-xs text-slate-400 mb-3 space-y-1"
  }, /*#__PURE__*/_react["default"].createElement("div", null, "\u2022 ", /*#__PURE__*/_react["default"].createElement("strong", null, "Formato 1:"), " timestamp(s) magnitudine"), /*#__PURE__*/_react["default"].createElement("div", null, "\u2022 ", /*#__PURE__*/_react["default"].createElement("strong", null, "Formato 2:"), " data ora magnitudine [altri campi...]"), /*#__PURE__*/_react["default"].createElement("div", null, "\u2022 Esempio: ", /*#__PURE__*/_react["default"].createElement("code", {
    className: "bg-slate-700 px-1"
  }, "2016-02-10 01:04:27.098 0.235 ..."))), /*#__PURE__*/_react["default"].createElement("input", {
    key: fileInputKey,
    type: "file",
    accept: ".csv,.txt,.dat",
    onChange: handleFileUpload,
    className: "block w-full text-sm text-slate-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 file:cursor-pointer"
  })), uploadedSignals.length > 0 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-sm font-semibold mb-2"
  }, "File Caricati:"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "space-y-2"
  }, uploadedSignals.map(function (sig, idx) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: idx,
      className: "flex items-center justify-between bg-slate-700/50 p-2 rounded"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "text-sm"
    }, sig.name, " (", sig.data.length, " punti)"), /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return removeUploadedSignal(idx);
      },
      className: "p-1 hover:bg-red-500/20 rounded"
    }, /*#__PURE__*/_react["default"].createElement(_lucideReact.X, {
      className: "w-4 h-4 text-red-400"
    })));
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-6 bg-slate-800/50 p-4 rounded-lg backdrop-blur"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "block mb-2 font-semibold"
  }, "Seleziona Segnale:"), uploadedSignals.length > 0 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-sm text-blue-400 mb-2 font-semibold"
  }, "I TUOI FILE:"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-2 flex-wrap mb-4"
  }, uploadedSignals.map(function (sig, idx) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: "uploaded-".concat(idx),
      onClick: function onClick() {
        return setSelectedSignal({
          type: 'uploaded',
          index: idx
        });
      },
      className: "px-4 py-2 rounded-lg font-medium transition-all ".concat((selectedSignal === null || selectedSignal === void 0 ? void 0 : selectedSignal.type) === 'uploaded' && (selectedSignal === null || selectedSignal === void 0 ? void 0 : selectedSignal.index) === idx ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50' : 'bg-slate-700 hover:bg-slate-600')
    }, sig.name);
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-sm text-green-400 mb-2 font-semibold"
  }, "SEGNALI DI TEST:"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-2 flex-wrap"
  }, testSignals.map(function (sig, idx) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: "test-".concat(idx),
      onClick: function onClick() {
        return setSelectedSignal({
          type: 'test',
          index: idx
        });
      },
      className: "px-4 py-2 rounded-lg font-medium transition-all ".concat((selectedSignal === null || selectedSignal === void 0 ? void 0 : selectedSignal.type) === 'test' && (selectedSignal === null || selectedSignal === void 0 ? void 0 : selectedSignal.index) === idx ? 'bg-green-500 text-white shadow-lg shadow-green-500/50' : 'bg-slate-700 hover:bg-slate-600')
    }, sig.name);
  }))), currentSignal && analysis && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-6 bg-gradient-to-r from-slate-800/80 to-slate-700/80 p-6 rounded-lg backdrop-blur border border-slate-600"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-2xl font-bold mb-4"
  }, "Risultato Analisi"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-slate-900/50 p-4 rounded-lg"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-sm text-slate-400 mb-1"
  }, "Classificazione"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-2xl font-bold text-blue-400"
  }, analysis.classification)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-slate-900/50 p-4 rounded-lg"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-sm text-slate-400 mb-1"
  }, "Confidenza"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-2xl font-bold text-green-400"
  }, (analysis.confidence * 100).toFixed(1), "%")), analysis.estimatedPeriod && /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-slate-900/50 p-4 rounded-lg"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-sm text-slate-400 mb-1"
  }, "Periodo Stimato"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-2xl font-bold text-purple-400"
  }, analysis.estimatedPeriod.toFixed(2), "s"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-slate-400"
  }, "Media:"), ' ', /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-mono"
  }, analysis.statistics.mean.toFixed(3))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-slate-400"
  }, "Std Dev:"), ' ', /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-mono"
  }, analysis.statistics.stdDev.toFixed(3))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-slate-400"
  }, "Punti:"), ' ', /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-mono"
  }, currentSignal.data.length)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-slate-400"
  }, "Durata:"), ' ', /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-mono"
  }, (currentSignal.data[currentSignal.data.length - 1].time - currentSignal.data[0].time).toFixed(1), "s"))), currentSignal.type && currentSignal.type !== 'caricato' && /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-3 pt-3 border-t border-slate-600"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-slate-400"
  }, "Tipo Reale:"), ' ', /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-semibold text-yellow-400"
  }, currentSignal.type), currentSignal.period && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, ' | ', /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-slate-400"
  }, "Periodo Reale:"), ' ', /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-semibold text-yellow-400"
  }, currentSignal.period, "s")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-6 bg-slate-800/50 p-4 rounded-lg backdrop-blur"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-xl font-bold mb-4"
  }, "Light Curve"), /*#__PURE__*/_react["default"].createElement(_recharts.ResponsiveContainer, {
    width: "100%",
    height: 250
  }, /*#__PURE__*/_react["default"].createElement(_recharts.LineChart, {
    data: currentSignal.data
  }, /*#__PURE__*/_react["default"].createElement(_recharts.CartesianGrid, {
    strokeDasharray: "3 3",
    stroke: "#374151"
  }), /*#__PURE__*/_react["default"].createElement(_recharts.XAxis, {
    dataKey: "time",
    type: "number",
    domain: ['dataMin', 'dataMax'],
    label: {
      value: 'Tempo (s)',
      position: 'insideBottom',
      offset: -5,
      fill: '#9CA3AF'
    },
    stroke: "#9CA3AF"
  }), /*#__PURE__*/_react["default"].createElement(_recharts.YAxis, {
    reversed: true,
    domain: ['dataMin - 0.2', 'dataMax + 0.2'],
    label: {
      value: 'Magnitudine',
      angle: -90,
      position: 'insideLeft',
      fill: '#9CA3AF'
    },
    stroke: "#9CA3AF"
  }), /*#__PURE__*/_react["default"].createElement(_recharts.Tooltip, {
    contentStyle: {
      backgroundColor: '#1F2937',
      border: '1px solid #374151'
    },
    formatter: function formatter(value) {
      return value.toFixed(3);
    }
  }), /*#__PURE__*/_react["default"].createElement(_recharts.Line, {
    type: "monotone",
    dataKey: "magnitude",
    stroke: "#3B82F6",
    strokeWidth: 2,
    dot: {
      fill: '#3B82F6',
      r: 1
    },
    connectNulls: false
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-6 bg-slate-800/50 p-4 rounded-lg backdrop-blur"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-xl font-bold mb-4"
  }, "Spettro di Potenza (FFT)"), /*#__PURE__*/_react["default"].createElement(_recharts.ResponsiveContainer, {
    width: "100%",
    height: 250
  }, /*#__PURE__*/_react["default"].createElement(_recharts.LineChart, {
    data: analysis.spectrum.slice(1, 50)
  }, /*#__PURE__*/_react["default"].createElement(_recharts.CartesianGrid, {
    strokeDasharray: "3 3",
    stroke: "#374151"
  }), /*#__PURE__*/_react["default"].createElement(_recharts.XAxis, {
    dataKey: "frequency",
    label: {
      value: 'Frequenza (Hz)',
      position: 'insideBottom',
      offset: -5,
      fill: '#9CA3AF'
    },
    stroke: "#9CA3AF"
  }), /*#__PURE__*/_react["default"].createElement(_recharts.YAxis, {
    label: {
      value: 'Potenza',
      angle: -90,
      position: 'insideLeft',
      fill: '#9CA3AF'
    },
    stroke: "#9CA3AF"
  }), /*#__PURE__*/_react["default"].createElement(_recharts.Tooltip, {
    contentStyle: {
      backgroundColor: '#1F2937',
      border: '1px solid #374151'
    },
    formatter: function formatter(value) {
      return value.toFixed(4);
    }
  }), /*#__PURE__*/_react["default"].createElement(_recharts.Line, {
    type: "monotone",
    dataKey: "power",
    stroke: "#10B981",
    strokeWidth: 2,
    dot: false
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-6 bg-slate-800/50 p-4 rounded-lg backdrop-blur"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-xl font-bold mb-4"
  }, "Autocorrelazione"), /*#__PURE__*/_react["default"].createElement(_recharts.ResponsiveContainer, {
    width: "100%",
    height: 250
  }, /*#__PURE__*/_react["default"].createElement(_recharts.LineChart, {
    data: analysis.acf
  }, /*#__PURE__*/_react["default"].createElement(_recharts.CartesianGrid, {
    strokeDasharray: "3 3",
    stroke: "#374151"
  }), /*#__PURE__*/_react["default"].createElement(_recharts.XAxis, {
    dataKey: "lag",
    label: {
      value: 'Lag (s)',
      position: 'insideBottom',
      offset: -5,
      fill: '#9CA3AF'
    },
    stroke: "#9CA3AF"
  }), /*#__PURE__*/_react["default"].createElement(_recharts.YAxis, {
    domain: [-1, 1],
    label: {
      value: 'Correlazione',
      angle: -90,
      position: 'insideLeft',
      fill: '#9CA3AF'
    },
    stroke: "#9CA3AF"
  }), /*#__PURE__*/_react["default"].createElement(_recharts.Tooltip, {
    contentStyle: {
      backgroundColor: '#1F2937',
      border: '1px solid #374151'
    },
    formatter: function formatter(value) {
      return value.toFixed(3);
    }
  }), /*#__PURE__*/_react["default"].createElement(_recharts.Line, {
    type: "monotone",
    dataKey: "correlation",
    stroke: "#F59E0B",
    strokeWidth: 2,
    dot: false
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-6 bg-slate-800/50 p-4 rounded-lg backdrop-blur"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-xl font-bold mb-4"
  }, "Period Search (PDM)"), /*#__PURE__*/_react["default"].createElement(_recharts.ResponsiveContainer, {
    width: "100%",
    height: 250
  }, /*#__PURE__*/_react["default"].createElement(_recharts.LineChart, {
    data: analysis.periodSearch.pdm
  }, /*#__PURE__*/_react["default"].createElement(_recharts.CartesianGrid, {
    strokeDasharray: "3 3",
    stroke: "#374151"
  }), /*#__PURE__*/_react["default"].createElement(_recharts.XAxis, {
    dataKey: "period",
    label: {
      value: 'Periodo (s)',
      position: 'insideBottom',
      offset: -5,
      fill: '#9CA3AF'
    },
    stroke: "#9CA3AF"
  }), /*#__PURE__*/_react["default"].createElement(_recharts.YAxis, {
    label: {
      value: 'Theta (PDM)',
      angle: -90,
      position: 'insideLeft',
      fill: '#9CA3AF'
    },
    stroke: "#9CA3AF"
  }), /*#__PURE__*/_react["default"].createElement(_recharts.Tooltip, {
    contentStyle: {
      backgroundColor: '#1F2937',
      border: '1px solid #374151'
    },
    formatter: function formatter(value) {
      return value.toFixed(4);
    }
  }), /*#__PURE__*/_react["default"].createElement(_recharts.Line, {
    type: "monotone",
    dataKey: "theta",
    stroke: "#8B5CF6",
    strokeWidth: 2,
    dot: false
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-2 text-sm text-slate-400"
  }, "Minimo globale (miglior periodo): ", analysis.periodSearch.bestPeriod.toFixed(2), "s (\u03B8 = ", analysis.periodSearch.minTheta.toFixed(4), ")"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-slate-800/30 p-4 rounded-lg text-sm text-slate-300"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "font-bold mb-2"
  }, "\uD83D\uDCD6 Istruzioni:"), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "list-disc list-inside space-y-1 mb-3"
  }, /*#__PURE__*/_react["default"].createElement("li", null, "Carica il tuo file CSV/TXT con timestamp e magnitudine"), /*#__PURE__*/_react["default"].createElement("li", null, "L'analizzatore riconosce automaticamente diversi formati"), /*#__PURE__*/_react["default"].createElement("li", null, "Confronta i tuoi dati con i segnali di test per validare l'algoritmo")), /*#__PURE__*/_react["default"].createElement("h3", {
    className: "font-bold mb-2 mt-4"
  }, "\uD83D\uDD2C Metodi di Analisi:"), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "list-disc list-inside space-y-1"
  }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Analisi Statistica:"), " Varianza e deviazione standard per rilevare variabilit\xE0"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("strong", null, "FFT:"), " Trasformata di Fourier per identificare frequenze dominanti"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Autocorrelazione:"), " Rileva pattern ripetitivi nel segnale"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("strong", null, "PDM:"), " Trova il periodo ottimale minimizzando la dispersione delle fasi")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-3"
  }, /*#__PURE__*/_react["default"].createElement("strong", null, "\u2699\uFE0F Criteri di Classificazione:"), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "list-disc list-inside mt-1"
  }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Invariante:"), " \u03C3 < 0.15 mag (bassa variabilit\xE0)"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Periodico:"), " \u03B8_PDM < 0.3 o picco ACF > 0.5 (segnale ripetitivo)"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Aperiodico:"), " Alta variabilit\xE0 senza periodicit\xE0 (tumbling satellite)"))))));
};
var _default = exports["default"] = SatelliteLightCurveAnalyzer;
