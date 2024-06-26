/*!
 * wfplayer.js v2.2.9
 * Github: https://github.com/zhw2590582/WFPlayer
 * (c) 2017-2024 Harvey Zack
 * Released under the MIT License.
 */
/*!
 * wfplayer.js v2.2.9
 * Github: https://github.com/zhw2590582/WFPlayer
 * (c) 2017-2024 Harvey Zack
 * Released under the MIT License.
 */
!(function (e, t, r, i, n) {
    var o =
            'undefined' != typeof globalThis
                ? globalThis
                : 'undefined' != typeof self
                ? self
                : 'undefined' != typeof window
                ? window
                : 'undefined' != typeof global
                ? global
                : {},
        a = 'function' == typeof o[i] && o[i],
        s = a.cache || {},
        l = 'undefined' != typeof module && 'function' == typeof module.require && module.require.bind(module);
    function u(t, r) {
        if (!s[t]) {
            if (!e[t]) {
                var n = 'function' == typeof o[i] && o[i];
                if (!r && n) return n(t, !0);
                if (a) return a(t, !0);
                if (l && 'string' == typeof t) return l(t);
                var f = Error("Cannot find module '" + t + "'");
                throw ((f.code = 'MODULE_NOT_FOUND'), f);
            }
            (h.resolve = function (r) {
                var i = e[t][1][r];
                return null != i ? i : r;
            }),
                (h.cache = {});
            var c = (s[t] = new u.Module(t));
            e[t][0].call(c.exports, h, c, c.exports, this);
        }
        return s[t].exports;
        function h(e) {
            var t = h.resolve(e);
            return !1 === t ? {} : u(t);
        }
    }
    (u.isParcelRequire = !0),
        (u.Module = function (e) {
            (this.id = e), (this.bundle = u), (this.exports = {});
        }),
        (u.modules = e),
        (u.cache = s),
        (u.parent = a),
        (u.register = function (t, r) {
            e[t] = [
                function (e, t) {
                    t.exports = r;
                },
                {},
            ];
        }),
        Object.defineProperty(u, 'root', {
            get: function () {
                return o[i];
            },
        }),
        (o[i] = u);
    for (var f = 0; f < t.length; f++) u(t[f]);
    if (r) {
        var c = u(r);
        'object' == typeof exports && 'undefined' != typeof module
            ? (module.exports = c)
            : 'function' == typeof define &&
              define.amd &&
              define(function () {
                  return c;
              });
    }
})(
    {
        bqk8e: [
            function (e, t, r) {
                var i = e('@parcel/transformer-js/src/esmodule-helpers.js');
                i.defineInteropFlag(r);
                var n = e('option-validator'),
                    o = i.interopDefault(n),
                    a = e('./emitter'),
                    s = i.interopDefault(a),
                    l = e('./events'),
                    u = i.interopDefault(l),
                    f = e('./template'),
                    c = i.interopDefault(f),
                    h = e('./drawer'),
                    d = i.interopDefault(h),
                    p = e('./decoder'),
                    m = i.interopDefault(p),
                    g = e('./loader'),
                    y = i.interopDefault(g),
                    w = e('./controller'),
                    b = i.interopDefault(w),
                    v = e('bundle-text:./style.less'),
                    x = i.interopDefault(v),
                    T = e('./utils');
                let C = 0,
                    j = [];
                class M extends s.default {
                    static get instances() {
                        return j;
                    }
                    static get version() {
                        return '2.2.9';
                    }
                    static get env() {
                        return 'production';
                    }
                    static get default() {
                        return {
                            container: '#waveform',
                            mediaElement: null,
                            useWorker: !0,
                            wave: !0,
                            waveColor: 'rgba(255, 255, 255, 0.1)',
                            backgroundColor: 'rgb(28, 32, 34)',
                            paddingColor: 'rgba(255, 255, 255, 0.05)',
                            cursor: !0,
                            cursorColor: '#ff0000',
                            progress: !0,
                            progressColor: 'rgba(255, 255, 255, 0.5)',
                            grid: !0,
                            gridColor: 'rgba(255, 255, 255, 0.05)',
                            ruler: !0,
                            rulerColor: 'rgba(255, 255, 255, 0.5)',
                            scrollbar: !0,
                            scrollbarColor: 'rgba(255, 255, 255, 0.25)',
                            rulerAtTop: !0,
                            scrollable: !1,
                            refreshDelay: 50,
                            channel: 0,
                            duration: 10,
                            padding: 5,
                            waveScale: 0.8,
                            waveSize: 1,
                            pixelRatio: Math.ceil(window.devicePixelRatio),
                            waveBorder: !1,
                            waveBorderWidth: 1,
                            waveBorderColor: 'rgba(255, 255, 255, 0.1)',
                            useAudioContext: !1,
                            waveAlign: 'center',
                        };
                    }
                    static get scheme() {
                        return {
                            container: 'htmlelement|htmldivelement',
                            mediaElement: 'null|htmlvideoelement|htmlaudioelement',
                            useWorker: 'boolean',
                            wave: 'boolean',
                            waveColor: 'string',
                            backgroundColor: 'string',
                            paddingColor: 'string',
                            cursor: 'boolean',
                            cursorColor: 'string',
                            progress: 'boolean',
                            progressColor: 'string',
                            grid: 'boolean',
                            gridColor: 'string',
                            ruler: 'boolean',
                            rulerColor: 'string',
                            scrollbar: 'boolean',
                            scrollbarColor: 'string',
                            rulerAtTop: 'boolean',
                            scrollable: 'boolean',
                            refreshDelay: 'number',
                            channel: 'number',
                            duration: 'number',
                            padding: 'number',
                            waveScale: 'number',
                            waveSize: 'number',
                            pixelRatio: 'number',
                            waveBorder: 'boolean',
                            waveBorderWidth: 'number',
                            waveBorderColor: 'string',
                            useAudioContext: 'boolean',
                            waveAlign: 'string',
                        };
                    }
                    constructor(e = {}) {
                        super(),
                            (this._seekTimer = null),
                            (this._currentTime = 0),
                            (this.isDestroy = !1),
                            (this.grabbing = !1),
                            (this.options = {}),
                            this.setOptions(e),
                            (this.events = new u.default(this)),
                            (this.template = new c.default(this)),
                            (this.decoder = new m.default(this)),
                            (this.drawer = new d.default(this)),
                            (this.controller = new b.default(this)),
                            (this.loader = new y.default(this)),
                            this.update(),
                            (C += 1),
                            (this.id = C),
                            j.push(this);
                    }
                    get currentTime() {
                        return this.options.mediaElement?.currentTime || this._currentTime;
                    }
                    set currentTime(e) {
                        (this._currentTime = (0, T.clamp)(e, 0, this.duration)),
                            this.options.mediaElement &&
                                this.options.mediaElement.currentTime !== this._currentTime &&
                                (this.options.mediaElement.currentTime = this._currentTime);
                    }
                    get duration() {
                        return this.options.mediaElement?.duration || 1 / 0;
                    }
                    get playing() {
                        let { mediaElement: e } = this.options;
                        return !!e && !!(e.currentTime > 0 && !e.paused && !e.ended && e.readyState > 2);
                    }
                    get canvas() {
                        return this.template.canvas;
                    }
                    get config() {
                        return this.drawer.config;
                    }
                    get proxy() {
                        return this.events.proxy;
                    }
                    setOptions(e = {}) {
                        return (
                            (0, T.errorHandle)(
                                'object' === (0, o.default).kindOf(e),
                                'setOptions expects to receive object as a parameter.',
                            ),
                            'string' == typeof e.container && (e.container = document.querySelector(e.container)),
                            'string' == typeof e.mediaElement &&
                                (e.mediaElement = document.querySelector(e.mediaElement)),
                            (this.options = (0, o.default)({ ...M.default, ...this.options, ...e }, M.scheme)),
                            (this.options.channel = Math.abs(Math.floor(this.options.channel))),
                            (this.options.duration = Math.abs(Math.floor(this.options.duration))),
                            (this.options.padding = Math.abs(Math.floor(this.options.padding))),
                            (this.options.pixelRatio = Math.abs(Math.floor(this.options.pixelRatio))),
                            (this.options.waveSize = Math.abs(Math.floor(this.options.waveSize))),
                            (this.options.waveScale = Math.abs(this.options.waveScale)),
                            this.options.duration % 2 != 0 && (this.options.duration -= 1),
                            this.emit('options', this.options),
                            this.options.scrollable
                                ? (0, T.addClass)(this.options.container, 'wf-scrollable')
                                : (0, T.removeClass)(this.options.container, 'wf-scrollable'),
                            this.update(),
                            this
                        );
                    }
                    load(e) {
                        return (
                            e && 'function' == typeof e.getChannelData
                                ? (this.decoder.decodeSuccess(e), this.controller.init())
                                : e && e.buffer
                                ? (this.decoder.decodeAudioData(e), this.controller.init())
                                : ((e instanceof HTMLVideoElement || e instanceof HTMLAudioElement) &&
                                      ((this.options.mediaElement = e), (e = e.currentSrc || e.src)),
                                  (0, T.errorHandle)(
                                      'string' == typeof e && e.trim(),
                                      'The load target is not a string. If you are loading a mediaElement, make sure the mediaElement.src is not empty.',
                                  ),
                                  this.loader.load(e),
                                  this.controller.init(),
                                  this.options.useAudioContext &&
                                      ((this.options.mediaElement = null),
                                      this.on('decode:success', (e) => {
                                          let t = this.decoder.audioCtx,
                                              r = t.createBufferSource();
                                          r.connect(t.destination), (r.buffer = e);
                                      }))),
                            this
                        );
                    }
                    play() {
                        return this.options.mediaElement?.play?.();
                    }
                    pause() {
                        return this.options.mediaElement?.pause?.();
                    }
                    getCurrentTimeFromEvent(e) {
                        let { container: t } = this.options,
                            { padding: r, beginTime: i, gridGap: n, pixelRatio: o } = this.drawer.config,
                            a = e.pageX - t.getBoundingClientRect().left;
                        return this.getDurationFromWidth(a - (r * n) / o) + i;
                    }
                    getDurationFromWidth(e) {
                        let { gridGap: t, pixelRatio: r } = this.drawer.config;
                        return e / ((t / r) * 10);
                    }
                    getWidthFromDuration(e) {
                        let { gridGap: t, pixelRatio: r } = this.drawer.config;
                        return (t / r) * 10 * e;
                    }
                    getLeftFromTime(e) {
                        let { gridGap: t, pixelRatio: r, beginTime: i, padding: n } = this.drawer.config;
                        return this.getWidthFromDuration(e - i) + (n * t) / r;
                    }
                    checkVisible(e, t) {
                        let { beginTime: r, duration: i } = this.drawer.config;
                        return 'number' == typeof e && 'number' == typeof t && !(e >= t) && !(t < r) && !(e > r + i);
                    }
                    checkCurrent(e, t) {
                        return this.checkVisible(e, t) && this.currentTime >= e && this.currentTime <= t;
                    }
                    seek(e) {
                        return (
                            (0, T.errorHandle)('number' == typeof e, 'seek expects to receive number as a parameter.'),
                            cancelAnimationFrame(this._seekTimer),
                            (this.currentTime = e),
                            this.update(),
                            this
                        );
                    }
                    smoothSeek(e, t = 0.2) {
                        return new Promise((r) => {
                            (0, T.errorHandle)(
                                'number' == typeof e,
                                'smoothSeek expects to receive number as a parameter.',
                            ),
                                cancelAnimationFrame(this._seekTimer);
                            let i = (0, T.clamp)(e, 0, this.duration),
                                n = i - this.currentTime;
                            if (0 === n) return r(this);
                            let o = n / t / 100,
                                { playing: a } = this;
                            a && this.pause(),
                                function e() {
                                    this._seekTimer = requestAnimationFrame(() => {
                                        (n > 0 && this.currentTime < i) || (n < 0 && this.currentTime > i)
                                            ? (this.seek(this.currentTime + o), this.isDestroy || e.call(this))
                                            : (this.seek(i), a && this.play(), r(this));
                                    });
                                }.call(this);
                        });
                    }
                    changeChannel(e) {
                        return this.decoder.changeChannel(e), this.setOptions({ channel: e }), this.update(), this;
                    }
                    exportImage() {
                        return this.template.exportImage(), this;
                    }
                    update() {
                        return this.template && this.drawer && (this.template.update(), this.drawer.update()), this;
                    }
                    reset() {
                        return this.decoder.destroy(), this;
                    }
                    destroy() {
                        return (
                            (this.isDestroy = !0),
                            this.events.destroy(),
                            this.template.destroy(),
                            this.controller.destroy(),
                            this.decoder.destroy(),
                            this.loader.destroy(),
                            this.drawer.destroy(),
                            j.splice(j.indexOf(this), 1),
                            this
                        );
                    }
                }
                if (((r.default = M), 'undefined' != typeof document && !document.getElementById('wfplayer-style'))) {
                    let e = document.createElement('style');
                    (e.id = 'wfplayer-style'), (e.textContent = x.default), document.head.appendChild(e);
                }
                'undefined' != typeof window && (window.WFPlayer = M);
            },
            {
                'option-validator': 'e1J0t',
                './emitter': 'eQX3k',
                './events': 'giPUg',
                './template': '2OQDE',
                './drawer': '5ozk4',
                './decoder': '2xfV6',
                './loader': 'kF7nB',
                './controller': '3y0fD',
                'bundle-text:./style.less': '4okRS',
                './utils': '50e2b',
                '@parcel/transformer-js/src/esmodule-helpers.js': '47PTV',
            },
        ],
        e1J0t: [
            function (e, t, r) {
                var i;
                (i = function () {
                    function e(t) {
                        return (e =
                            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                ? function (e) {
                                      return typeof e;
                                  }
                                : function (e) {
                                      return e &&
                                          'function' == typeof Symbol &&
                                          e.constructor === Symbol &&
                                          e !== Symbol.prototype
                                          ? 'symbol'
                                          : typeof e;
                                  })(t);
                    }
                    var t = Object.prototype.toString,
                        r = function (r) {
                            if (void 0 === r) return 'undefined';
                            if (null === r) return 'null';
                            var n = e(r);
                            if ('boolean' === n) return 'boolean';
                            if ('string' === n) return 'string';
                            if ('number' === n) return 'number';
                            if ('symbol' === n) return 'symbol';
                            if ('function' === n)
                                return 'GeneratorFunction' === i(r) ? 'generatorfunction' : 'function';
                            if (Array.isArray ? Array.isArray(r) : r instanceof Array) return 'array';
                            if (
                                r.constructor &&
                                'function' == typeof r.constructor.isBuffer &&
                                r.constructor.isBuffer(r)
                            )
                                return 'buffer';
                            if (
                                (function (e) {
                                    try {
                                        if ('number' == typeof e.length && 'function' == typeof e.callee) return !0;
                                    } catch (e) {
                                        if (-1 !== e.message.indexOf('callee')) return !0;
                                    }
                                    return !1;
                                })(r)
                            )
                                return 'arguments';
                            if (
                                r instanceof Date ||
                                ('function' == typeof r.toDateString &&
                                    'function' == typeof r.getDate &&
                                    'function' == typeof r.setDate)
                            )
                                return 'date';
                            if (
                                r instanceof Error ||
                                ('string' == typeof r.message &&
                                    r.constructor &&
                                    'number' == typeof r.constructor.stackTraceLimit)
                            )
                                return 'error';
                            if (
                                r instanceof RegExp ||
                                ('string' == typeof r.flags &&
                                    'boolean' == typeof r.ignoreCase &&
                                    'boolean' == typeof r.multiline &&
                                    'boolean' == typeof r.global)
                            )
                                return 'regexp';
                            switch (i(r)) {
                                case 'Symbol':
                                    return 'symbol';
                                case 'Promise':
                                    return 'promise';
                                case 'WeakMap':
                                    return 'weakmap';
                                case 'WeakSet':
                                    return 'weakset';
                                case 'Map':
                                    return 'map';
                                case 'Set':
                                    return 'set';
                                case 'Int8Array':
                                    return 'int8array';
                                case 'Uint8Array':
                                    return 'uint8array';
                                case 'Uint8ClampedArray':
                                    return 'uint8clampedarray';
                                case 'Int16Array':
                                    return 'int16array';
                                case 'Uint16Array':
                                    return 'uint16array';
                                case 'Int32Array':
                                    return 'int32array';
                                case 'Uint32Array':
                                    return 'uint32array';
                                case 'Float32Array':
                                    return 'float32array';
                                case 'Float64Array':
                                    return 'float64array';
                            }
                            if (
                                'function' == typeof r.throw &&
                                'function' == typeof r.return &&
                                'function' == typeof r.next
                            )
                                return 'generator';
                            switch ((n = t.call(r))) {
                                case '[object Object]':
                                    return 'object';
                                case '[object Map Iterator]':
                                    return 'mapiterator';
                                case '[object Set Iterator]':
                                    return 'setiterator';
                                case '[object String Iterator]':
                                    return 'stringiterator';
                                case '[object Array Iterator]':
                                    return 'arrayiterator';
                            }
                            return n.slice(8, -1).toLowerCase().replace(/\s/g, '');
                        };
                    function i(e) {
                        return e.constructor ? e.constructor.name : null;
                    }
                    function n(e, t) {
                        var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : ['option'];
                        return (
                            o(e, t, i),
                            a(e, t, i),
                            (function (e, t, i) {
                                var s = r(t),
                                    l = r(e);
                                if ('object' === s) {
                                    if ('object' !== l)
                                        throw Error(
                                            "[Type Error]: '"
                                                .concat(i.join('.'), "' require 'object' type, but got '")
                                                .concat(l, "'"),
                                        );
                                    Object.keys(t).forEach(function (r) {
                                        var s = e[r],
                                            l = t[r],
                                            u = i.slice();
                                        u.push(r), o(s, l, u), a(s, l, u), n(s, l, u);
                                    });
                                }
                                if ('array' === s) {
                                    if ('array' !== l)
                                        throw Error(
                                            "[Type Error]: '"
                                                .concat(i.join('.'), "' require 'array' type, but got '")
                                                .concat(l, "'"),
                                        );
                                    e.forEach(function (r, s) {
                                        var l = e[s],
                                            u = t[s] || t[0],
                                            f = i.slice();
                                        f.push(s), o(l, u, f), a(l, u, f), n(l, u, f);
                                    });
                                }
                            })(e, t, i),
                            e
                        );
                    }
                    function o(e, t, i) {
                        if ('string' === r(t)) {
                            var n = r(e);
                            if (
                                ('?' === t[0] && (t = t.slice(1) + '|undefined'),
                                !(-1 < t.indexOf('|')
                                    ? t
                                          .split('|')
                                          .map(function (e) {
                                              return e.toLowerCase().trim();
                                          })
                                          .filter(Boolean)
                                          .some(function (e) {
                                              return n === e;
                                          })
                                    : t.toLowerCase().trim() === n))
                            )
                                throw Error(
                                    "[Type Error]: '"
                                        .concat(i.join('.'), "' require '")
                                        .concat(t, "' type, but got '")
                                        .concat(n, "'"),
                                );
                        }
                    }
                    function a(e, t, i) {
                        if ('function' === r(t)) {
                            var n = t(e, r(e), i);
                            if (!0 !== n) {
                                var o = r(n);
                                throw 'string' === o
                                    ? Error(n)
                                    : 'error' === o
                                    ? n
                                    : Error(
                                          "[Validator Error]: The scheme for '"
                                              .concat(i.join('.'), "' validator require return true, but got '")
                                              .concat(n, "'"),
                                      );
                            }
                        }
                    }
                    return (n.kindOf = r), n;
                }),
                    (t.exports = i());
            },
            {},
        ],
        eQX3k: [
            function (e, t, r) {
                e('@parcel/transformer-js/src/esmodule-helpers.js').defineInteropFlag(r),
                    (r.default = class {
                        on(e, t, r) {
                            let i = this.e || (this.e = {});
                            return (i[e] || (i[e] = [])).push({ fn: t, ctx: r }), this;
                        }
                        once(e, t, r) {
                            let i = this;
                            function n(...o) {
                                i.off(e, n), t.apply(r, o);
                            }
                            return (n._ = t), this.on(e, n, r);
                        }
                        emit(e, ...t) {
                            let r = ((this.e || (this.e = {}))[e] || []).slice();
                            for (let e = 0; e < r.length; e += 1) r[e].fn.apply(r[e].ctx, t);
                            return this;
                        }
                        off(e, t) {
                            let r = this.e || (this.e = {}),
                                i = r[e],
                                n = [];
                            if (i && t)
                                for (let e = 0, r = i.length; e < r; e += 1)
                                    i[e].fn !== t && i[e].fn._ !== t && n.push(i[e]);
                            return n.length ? (r[e] = n) : delete r[e], this;
                        }
                    });
            },
            { '@parcel/transformer-js/src/esmodule-helpers.js': '47PTV' },
        ],
        '47PTV': [
            function (e, t, r) {
                (r.interopDefault = function (e) {
                    return e && e.__esModule ? e : { default: e };
                }),
                    (r.defineInteropFlag = function (e) {
                        Object.defineProperty(e, '__esModule', { value: !0 });
                    }),
                    (r.exportAll = function (e, t) {
                        return (
                            Object.keys(e).forEach(function (r) {
                                'default' === r ||
                                    '__esModule' === r ||
                                    Object.prototype.hasOwnProperty.call(t, r) ||
                                    Object.defineProperty(t, r, {
                                        enumerable: !0,
                                        get: function () {
                                            return e[r];
                                        },
                                    });
                            }),
                            t
                        );
                    }),
                    (r.export = function (e, t, r) {
                        Object.defineProperty(e, t, { enumerable: !0, get: r });
                    });
            },
            {},
        ],
        giPUg: [
            function (e, t, r) {
                e('@parcel/transformer-js/src/esmodule-helpers.js').defineInteropFlag(r),
                    (r.default = class {
                        constructor() {
                            (this.destroyEvents = []), (this.proxy = this.proxy.bind(this));
                        }
                        proxy(e, t, r, i = {}) {
                            if (Array.isArray(t)) return t.map((t) => this.proxy(e, t, r, i));
                            e.addEventListener(t, r, i);
                            let n = () => e.removeEventListener(t, r, i);
                            return this.destroyEvents.push(n), n;
                        }
                        destroy() {
                            this.destroyEvents.forEach((e) => e());
                        }
                    });
            },
            { '@parcel/transformer-js/src/esmodule-helpers.js': '47PTV' },
        ],
        '2OQDE': [
            function (e, t, r) {
                e('@parcel/transformer-js/src/esmodule-helpers.js').defineInteropFlag(r);
                var i = e('./utils');
                r.default = class {
                    constructor(e) {
                        (this.wf = e), (this.canvas = null);
                        let { refreshDelay: t } = e.options;
                        (this.update = (0, i.throttle)(this.init, t, this)), this.init();
                    }
                    init() {
                        let { container: e, pixelRatio: t } = this.wf.options,
                            { clientWidth: r, clientHeight: n } = e,
                            o = r * t,
                            a = n * t;
                        this.canvas
                            ? (this.canvas.width !== o && (this.canvas.width = o),
                              this.canvas.height !== a && (this.canvas.height = a))
                            : ((0, i.errorHandle)(
                                  this.wf.constructor.instances.every((t) => t.options.container !== e),
                                  'Cannot mount multiple instances on the same dom element, please destroy the previous instance first.',
                              ),
                              (e.innerHTML = ''),
                              (0, i.addClass)(e, 'wf-player'),
                              (this.canvas = document.createElement('canvas')),
                              (this.canvas.width = o),
                              (this.canvas.height = a),
                              (this.canvas.style.width = '100%'),
                              (this.canvas.style.height = '100%'),
                              e.appendChild(this.canvas));
                    }
                    exportImage() {
                        let e = document.createElement('a');
                        (e.style.display = 'none'),
                            (e.href = this.canvas.toDataURL('image/png')),
                            (e.download = `${Date.now()}.png`),
                            document.body.appendChild(e),
                            e.click(),
                            document.body.removeChild(e);
                    }
                    destroy() {
                        this.wf.options.container.innerHTML = '';
                    }
                };
            },
            { './utils': '50e2b', '@parcel/transformer-js/src/esmodule-helpers.js': '47PTV' },
        ],
        '50e2b': [
            function (e, t, r) {
                var i = e('@parcel/transformer-js/src/esmodule-helpers.js');
                i.defineInteropFlag(r),
                    i.export(r, 'WFPlayerError', () => n),
                    i.export(r, 'errorHandle', () => o),
                    i.export(r, 'mergeBuffer', () => a),
                    i.export(r, 'clamp', () => s),
                    i.export(r, 'throttle', () => l),
                    i.export(r, 'addClass', () => u),
                    i.export(r, 'removeClass', () => f);
                class n extends Error {
                    constructor(e) {
                        super(e), (this.name = 'WFPlayerError');
                    }
                }
                function o(e, t) {
                    if (!e) throw new n(t);
                    return e;
                }
                function a(...e) {
                    let t = e[0].constructor;
                    return e.reduce((e, r) => {
                        let i = new t((0 | e.byteLength) + (0 | r.byteLength));
                        return i.set(e, 0), i.set(r, 0 | e.byteLength), i;
                    }, new t());
                }
                function s(e, t, r) {
                    return Math.max(Math.min(e, Math.max(t, r)), Math.min(t, r));
                }
                function l(e, t, r) {
                    let i = Date.now();
                    return (...n) => {
                        Date.now() - i >= t && (e.apply(r, n), (i = Date.now()));
                    };
                }
                function u(e, t) {
                    return e.classList.add(t);
                }
                function f(e, t) {
                    return e.classList.remove(t);
                }
            },
            { '@parcel/transformer-js/src/esmodule-helpers.js': '47PTV' },
        ],
        '5ozk4': [
            function (e, t, r) {
                var i = e('@parcel/transformer-js/src/esmodule-helpers.js');
                i.defineInteropFlag(r);
                var n = e('./utils'),
                    o = e('bundle-text:./worker'),
                    a = i.interopDefault(o),
                    s = e('./worker');
                r.default = class {
                    constructor(e) {
                        (this.wf = e), (this.canvas = e.template.canvas), (this.config = {});
                        let { refreshDelay: t, useWorker: r } = e.options;
                        (this.update = (0, n.throttle)(this.update, t, this)),
                            r && window.OffscreenCanvas && window.Worker
                                ? ((this.worker = new Worker(URL.createObjectURL(new Blob([a.default])))),
                                  (this.ctx = this.canvas.getContext('bitmaprenderer')),
                                  this.wf.events.proxy(this.worker, 'message', (t) => {
                                      let { type: r, data: i } = t.data;
                                      'UPDATE' !== r ||
                                          e.isDestroy ||
                                          ((this.config = i.config),
                                          this.wf.emit('update', i.config),
                                          this.ctx.transferFromImageBitmap(i.imageBitmap));
                                  }),
                                  this.worker.postMessage({
                                      type: 'INIT',
                                      data: { width: this.canvas.width, height: this.canvas.height },
                                  }))
                                : ((this.worker = { postMessage: s.postMessage }),
                                  this.wf.on('update', (e) => {
                                      this.config = e;
                                  }),
                                  this.worker.postMessage({
                                      type: 'INIT',
                                      data: { canvas: this.canvas, wf: this.wf },
                                  })),
                            e.on('decode', ({ channelData: e, sampleRate: t }) => {
                                this.worker.postMessage({ type: 'DECODE', data: { channelData: e, sampleRate: t } }),
                                    this.update();
                            });
                    }
                    update() {
                        let {
                                currentTime: e,
                                duration: t,
                                options: { container: r, mediaElement: i, ...n },
                            } = this.wf,
                            { width: o, height: a } = this.canvas;
                        this.worker.postMessage({
                            type: 'UPDATE',
                            data: { ...n, currentTime: e, width: o, height: a, totolDuration: t },
                        });
                    }
                    destroy() {
                        this.worker.terminate && this.worker.terminate();
                    }
                };
            },
            {
                './utils': '50e2b',
                'bundle-text:./worker': '2nCk3',
                './worker': 'iCc9f',
                '@parcel/transformer-js/src/esmodule-helpers.js': '47PTV',
            },
        ],
        '2nCk3': [
            function (e, t, r) {
                t.exports =
                    '!function(e,t,l,n,r){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof o[n]&&o[n],f=i.cache||{},a="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(t,l){if(!f[t]){if(!e[t]){var r="function"==typeof o[n]&&o[n];if(!l&&r)return r(t,!0);if(i)return i(t,!0);if(a&&"string"==typeof t)return a(t);var c=Error("Cannot find module \'"+t+"\'");throw c.code="MODULE_NOT_FOUND",c}s.resolve=function(l){var n=e[t][1][l];return null!=n?n:l},s.cache={};var d=f[t]=new u.Module(t);e[t][0].call(d.exports,s,d,d.exports,this)}return f[t].exports;function s(e){var t=s.resolve(e);return!1===t?{}:u(t)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=f,u.parent=i,u.register=function(t,l){e[t]=[function(e,t){t.exports=l},{}]},Object.defineProperty(u,"root",{get:function(){return o[n]}}),o[n]=u;for(var c=0;c<t.length;c++)u(t[c]);if(l){var d=u(l);"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof define&&define.amd&&define(function(){return d})}}({"04Ftm":[function(e,t,l){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(l),n.export(l,"postMessage",()=>m);let r=void 0===self.document,o=null,i=null,f=null,a=0,u=0,c=0,d=1,s=44100,p=new Float32Array,h="";self.onmessage=function(e){let{type:t,data:l}=e.data;if("INIT"===t&&(r?i=new OffscreenCanvas(l.width,l.height):(o=l.wf,i=l.canvas),f=i.getContext("2d")),"DECODE"===t&&(s=l.sampleRate,p=l.channelData),"UPDATE"===t){let e=JSON.stringify(l);if(h===e)return h=e;i.width!==l.width&&(i.width=l.width),i.height!==l.height&&(i.height=l.height);let{byteLength:t}=p;a=10*l.duration+2*l.padding,u=l.width/a,d=function(e){if(0===u)return 1;f.font=`${11*e.pixelRatio}px Arial`;let t=f.measureText("99:99:99").width;return function e(l){return u*l/(1.5*t)>1?Math.floor(l/10):e(l+10)}(10)}(l),c=l.scrollable?"left"===l.waveAlign?l.currentTime:l.currentTime-l.duration/2:Math.floor(l.currentTime/l.duration)*l.duration,function(e){let{width:t,height:l,backgroundColor:n,paddingColor:r,padding:o}=e;f.clearRect(0,0,t,l),f.fillStyle=n,f.fillRect(0,0,t,l),f.fillStyle=r,f.fillRect(0,0,o*u,l),f.fillRect(t-o*u,0,o*u,l)}(l),l.grid&&function(e){let{width:t,height:l,currentTime:n,gridColor:r,pixelRatio:o,scrollable:i,waveAlign:c}=e;f.fillStyle=r;for(let e=0;e<a+10;e+=d){let t;t=i?"left"===c?u*e:u*e-(n-parseInt(n,10))*u*10:u*e,f.fillRect(t,0,o,l)}for(let e=0;e<l/u;e+=d)f.fillRect(0,u*e,t,o)}(l),l.ruler&&function(e){let{height:t,currentTime:l,rulerColor:n,pixelRatio:r,padding:o,rulerAtTop:i,scrollable:s,waveAlign:p}=e;f.font=`${11*r}px Arial`,f.fillStyle=n;let h=-1;for(let e=0;e<a+10;e+=1){let n;if(n=s?"left"===p?u*e:u*e-(l-parseInt(l,10))*u*10:u*e,(e-o)%10==0){h+=1,f.fillRect(n,i?0:t-15*r,r,15*r);let e=Math.floor(c+h);e%d==0&&e>=0&&f.fillText(function(e){let t=Math.floor(e/3600),l=Math.floor((e-3600*t)/60);return[t,l,Math.floor(e-3600*t-60*l)].map(e=>e<10?`0${e}`:String(e)).join(":")}(e),n-11*r*2+r,i?30*r:t-30*r+11)}else(e-o)%5==0&&f.fillRect(n,i?0:t-7.5*r,r,7.5*r)}}(l),l.wave&&function(e){var t;let l;let{width:n,height:r,currentTime:o,progress:i,waveColor:a,progressColor:d,duration:h,padding:m,waveScale:y,waveSize:g,scrollable:M,waveBorder:x,waveBorderWidth:w,waveBorderColor:b,waveAlign:v}=e,R=r/2,T=n-u*m*2,O=Math.floor(c*s),j=Math.floor(Math.max(Math.min((c+h)*s,Math.max(O,t=1/0)),Math.min(O,t))),P=Math.floor((j-O)/T);l=M?"left"===v?u*m:n/2:u*m+(o-c)*u*10;let S=0,F=0,_=1,A=-1;for(let e=O;e<j;e+=g){S+=1;let t=p[e]||0;if(t<_?_=t:t>A&&(A=t),S>=P&&F<T){let e=u*m+F;x&&(f.strokeStyle=b,f.lineWidth=w,f.strokeRect(e,(1+_*y)*R,g,Math.max(1,(A-_)*R*y))),f.fillStyle=i&&l>=e?d:a,f.fillRect(e+(x?w/2:0),(1+_*y)*R+(x?w/2:0),g-(x?w:0),Math.max(1,(A-_)*R*y)-(x?w:0)),F+=g,S=0,_=1,A=-1}}}(l),l.scrollbar&&function(e){let{width:t,height:l,currentTime:n,pixelRatio:r,rulerAtTop:o,totolDuration:i,scrollable:a,scrollbarColor:c}=e;if(!a||!i||i===1/0)return;let d=t/(u/r*10*i)*t,s=5*r;f.fillStyle=c,f.fillRect(n/i*(t-d),o?l-s:0,d,s)}(l),l.cursor&&function(e){let t;let{height:l,width:n,currentTime:r,cursorColor:o,pixelRatio:i,padding:a,scrollable:d,waveAlign:s}=e;f.fillStyle=o,t=d?"left"===s?a*u:n/2:a*u+(r-c)*u*10,f.fillRect(t,0,i,l)}(l);let n={gridNum:a,gridGap:u,beginTime:c,density:d,sampleRate:s,byteLength:t,...l};r?self.postMessage({type:"UPDATE",data:{config:n,imageBitmap:i.transferToImageBitmap()}}):o.emit("update",n)}};let m=e=>{self.onmessage({data:e})}},{"@parcel/transformer-js/src/esmodule-helpers.js":"47PTV"}],"47PTV":[function(e,t,l){l.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},l.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.exportAll=function(e,t){return Object.keys(e).forEach(function(l){"default"===l||"__esModule"===l||Object.prototype.hasOwnProperty.call(t,l)||Object.defineProperty(t,l,{enumerable:!0,get:function(){return e[l]}})}),t},l.export=function(e,t,l){Object.defineProperty(e,t,{enumerable:!0,get:l})}},{}]},["04Ftm"],"04Ftm","parcelRequireb650");';
            },
            {},
        ],
        iCc9f: [
            function (e, t, r) {
                var i = e('@parcel/transformer-js/src/esmodule-helpers.js');
                i.defineInteropFlag(r), i.export(r, 'postMessage', () => m);
                let n = void 0 === self.document,
                    o = null,
                    a = null,
                    s = null,
                    l = 0,
                    u = 0,
                    f = 0,
                    c = 1,
                    h = 44100,
                    d = new Float32Array(),
                    p = '';
                self.onmessage = function (e) {
                    let { type: t, data: r } = e.data;
                    if (
                        ('INIT' === t &&
                            (n ? (a = new OffscreenCanvas(r.width, r.height)) : ((o = r.wf), (a = r.canvas)),
                            (s = a.getContext('2d'))),
                        'DECODE' === t && ((h = r.sampleRate), (d = r.channelData)),
                        'UPDATE' === t)
                    ) {
                        let e = JSON.stringify(r);
                        if (p === e) return (p = e);
                        a.width !== r.width && (a.width = r.width), a.height !== r.height && (a.height = r.height);
                        let { byteLength: t } = d;
                        (l = 10 * r.duration + 2 * r.padding),
                            (u = r.width / l),
                            (c = (function (e) {
                                if (0 === u) return 1;
                                s.font = `${11 * e.pixelRatio}px Arial`;
                                let t = s.measureText('99:99:99').width;
                                return (function e(r) {
                                    return (u * r) / (1.5 * t) > 1 ? Math.floor(r / 10) : e(r + 10);
                                })(10);
                            })(r)),
                            (f = r.scrollable
                                ? 'left' === r.waveAlign
                                    ? r.currentTime
                                    : r.currentTime - r.duration / 2
                                : Math.floor(r.currentTime / r.duration) * r.duration),
                            (function (e) {
                                let { width: t, height: r, backgroundColor: i, paddingColor: n, padding: o } = e;
                                s.clearRect(0, 0, t, r),
                                    (s.fillStyle = i),
                                    s.fillRect(0, 0, t, r),
                                    (s.fillStyle = n),
                                    s.fillRect(0, 0, o * u, r),
                                    s.fillRect(t - o * u, 0, o * u, r);
                            })(r),
                            r.grid &&
                                (function (e) {
                                    let {
                                        width: t,
                                        height: r,
                                        currentTime: i,
                                        gridColor: n,
                                        pixelRatio: o,
                                        scrollable: a,
                                        waveAlign: f,
                                    } = e;
                                    s.fillStyle = n;
                                    for (let e = 0; e < l + 10; e += c) {
                                        let t;
                                        (t = a
                                            ? 'left' === f
                                                ? u * e
                                                : u * e - (i - parseInt(i, 10)) * u * 10
                                            : u * e),
                                            s.fillRect(t, 0, o, r);
                                    }
                                    for (let e = 0; e < r / u; e += c) s.fillRect(0, u * e, t, o);
                                })(r),
                            r.ruler &&
                                (function (e) {
                                    let {
                                        height: t,
                                        currentTime: r,
                                        rulerColor: i,
                                        pixelRatio: n,
                                        padding: o,
                                        rulerAtTop: a,
                                        scrollable: h,
                                        waveAlign: d,
                                    } = e;
                                    (s.font = `${11 * n}px Arial`), (s.fillStyle = i);
                                    let p = -1;
                                    for (let e = 0; e < l + 10; e += 1) {
                                        let i;
                                        if (
                                            ((i = h
                                                ? 'left' === d
                                                    ? u * e
                                                    : u * e - (r - parseInt(r, 10)) * u * 10
                                                : u * e),
                                            (e - o) % 10 == 0)
                                        ) {
                                            (p += 1), s.fillRect(i, a ? 0 : t - 15 * n, n, 15 * n);
                                            let e = Math.floor(f + p);
                                            e % c == 0 &&
                                                e >= 0 &&
                                                s.fillText(
                                                    (function (e) {
                                                        let t = Math.floor(e / 3600),
                                                            r = Math.floor((e - 3600 * t) / 60);
                                                        return [t, r, Math.floor(e - 3600 * t - 60 * r)]
                                                            .map((e) => (e < 10 ? `0${e}` : String(e)))
                                                            .join(':');
                                                    })(e),
                                                    i - 11 * n * 2 + n,
                                                    a ? 30 * n : t - 30 * n + 11,
                                                );
                                        } else (e - o) % 5 == 0 && s.fillRect(i, a ? 0 : t - 7.5 * n, n, 7.5 * n);
                                    }
                                })(r),
                            r.wave &&
                                (function (e) {
                                    var t;
                                    let r;
                                    let {
                                            width: i,
                                            height: n,
                                            currentTime: o,
                                            progress: a,
                                            waveColor: l,
                                            progressColor: c,
                                            duration: p,
                                            padding: m,
                                            waveScale: g,
                                            waveSize: y,
                                            scrollable: w,
                                            waveBorder: b,
                                            waveBorderWidth: v,
                                            waveBorderColor: x,
                                            waveAlign: T,
                                        } = e,
                                        C = n / 2,
                                        j = i - u * m * 2,
                                        M = Math.floor(f * h),
                                        S = Math.floor(
                                            Math.max(Math.min((f + p) * h, Math.max(M, (t = 1 / 0))), Math.min(M, t)),
                                        ),
                                        A = Math.floor((S - M) / j);
                                    r = w ? ('left' === T ? u * m : i / 2) : u * m + (o - f) * u * 10;
                                    let D = 0,
                                        k = 0,
                                        E = 1,
                                        R = -1;
                                    for (let e = M; e < S; e += y) {
                                        D += 1;
                                        let t = d[e] || 0;
                                        if ((t < E ? (E = t) : t > R && (R = t), D >= A && k < j)) {
                                            let e = u * m + k;
                                            b &&
                                                ((s.strokeStyle = x),
                                                (s.lineWidth = v),
                                                s.strokeRect(e, (1 + E * g) * C, y, Math.max(1, (R - E) * C * g))),
                                                (s.fillStyle = a && r >= e ? c : l),
                                                s.fillRect(
                                                    e + (b ? v / 2 : 0),
                                                    (1 + E * g) * C + (b ? v / 2 : 0),
                                                    y - (b ? v : 0),
                                                    Math.max(1, (R - E) * C * g) - (b ? v : 0),
                                                ),
                                                (k += y),
                                                (D = 0),
                                                (E = 1),
                                                (R = -1);
                                        }
                                    }
                                })(r),
                            r.scrollbar &&
                                (function (e) {
                                    let {
                                        width: t,
                                        height: r,
                                        currentTime: i,
                                        pixelRatio: n,
                                        rulerAtTop: o,
                                        totolDuration: a,
                                        scrollable: l,
                                        scrollbarColor: f,
                                    } = e;
                                    if (!l || !a || a === 1 / 0) return;
                                    let c = (t / ((u / n) * 10 * a)) * t,
                                        h = 5 * n;
                                    (s.fillStyle = f), s.fillRect((i / a) * (t - c), o ? r - h : 0, c, h);
                                })(r),
                            r.cursor &&
                                (function (e) {
                                    let t;
                                    let {
                                        height: r,
                                        width: i,
                                        currentTime: n,
                                        cursorColor: o,
                                        pixelRatio: a,
                                        padding: l,
                                        scrollable: c,
                                        waveAlign: h,
                                    } = e;
                                    (s.fillStyle = o),
                                        (t = c ? ('left' === h ? l * u : i / 2) : l * u + (n - f) * u * 10),
                                        s.fillRect(t, 0, a, r);
                                })(r);
                        let i = {
                            gridNum: l,
                            gridGap: u,
                            beginTime: f,
                            density: c,
                            sampleRate: h,
                            byteLength: t,
                            ...r,
                        };
                        n
                            ? self.postMessage({
                                  type: 'UPDATE',
                                  data: { config: i, imageBitmap: a.transferToImageBitmap() },
                              })
                            : o.emit('update', i);
                    }
                };
                let m = (e) => {
                    self.onmessage({ data: e });
                };
            },
            { '@parcel/transformer-js/src/esmodule-helpers.js': '47PTV' },
        ],
        '2xfV6': [
            function (e, t, r) {
                e('@parcel/transformer-js/src/esmodule-helpers.js').defineInteropFlag(r),
                    (r.default = class {
                        constructor(e) {
                            (this.wf = e),
                                (this.audioCtx = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(
                                    1,
                                    2,
                                    44100,
                                )),
                                (this.audiobuffer = this.audioCtx.createBuffer(1, 2, 44100)),
                                (this.channelData = new Float32Array());
                        }
                        decodeAudioData(e) {
                            return new Promise((t, r) => {
                                this.wf.emit('decode:start', e),
                                    this.audioCtx.decodeAudioData(
                                        e.buffer,
                                        (e) => {
                                            this.wf.emit('decode:success', e), this.decodeSuccess(e), t(e);
                                        },
                                        (e) => {
                                            this.wf.emit('decode:error', e), r(e);
                                        },
                                    );
                            });
                        }
                        decodeSuccess(e) {
                            (this.audiobuffer = e),
                                (this.channelData = e.getChannelData(this.wf.options.channel)),
                                this.wf.emit('decode', {
                                    channelData: this.channelData,
                                    sampleRate: this.audiobuffer.sampleRate,
                                    duration: this.audiobuffer.duration,
                                }),
                                this.wf.update();
                        }
                        changeChannel(e) {
                            (this.channelData = this.audiobuffer.getChannelData(e) || new Float32Array()),
                                this.wf.emit('decode', {
                                    channelData: this.channelData,
                                    sampleRate: this.audiobuffer.sampleRate,
                                    duration: this.audiobuffer.duration,
                                }),
                                this.wf.update();
                        }
                        destroy() {
                            (this.audiobuffer = this.audioCtx.createBuffer(1, 2, 44100)),
                                (this.channelData = new Float32Array()),
                                this.wf.emit('decode', {
                                    channelData: this.channelData,
                                    sampleRate: this.audiobuffer.sampleRate,
                                    duration: this.audiobuffer.duration,
                                }),
                                this.wf.update();
                        }
                    });
            },
            { '@parcel/transformer-js/src/esmodule-helpers.js': '47PTV' },
        ],
        kF7nB: [
            function (e, t, r) {
                e('@parcel/transformer-js/src/esmodule-helpers.js').defineInteropFlag(r);
                var i = e('./utils');
                r.default = class {
                    constructor(e) {
                        (this.wf = e),
                            (this.fileSize = 0),
                            (this.loadSize = 0),
                            (this.data = new Uint8Array()),
                            (this.reader = null);
                    }
                    load(e) {
                        return (
                            this.destroy(),
                            fetch(e)
                                .then((e) =>
                                    e.body && 'function' == typeof e.body.getReader
                                        ? ((this.fileSize = Number(e.headers.get('content-length'))),
                                          (this.reader = e.body.getReader()),
                                          function e() {
                                              return this.reader
                                                  .read()
                                                  .then(({ done: t, value: r }) =>
                                                      t
                                                          ? null
                                                          : ((this.loadSize += r.byteLength),
                                                            (this.data = (0, i.mergeBuffer)(this.data, r)),
                                                            this.wf.decoder.decodeAudioData(this.data.slice()),
                                                            this.wf.emit('load', {
                                                                fileSize: this.fileSize,
                                                                loadSize: this.loadSize,
                                                                data: this.data,
                                                            }),
                                                            e.call(this)),
                                                  );
                                          }.call(this))
                                        : e.arrayBuffer(),
                                )
                                .then(
                                    (e) => (
                                        e &&
                                            e.byteLength &&
                                            ((this.data = new Uint8Array(e)),
                                            (this.fileSize = this.data.byteLength),
                                            (this.loadSize = this.data.byteLength),
                                            this.wf.decoder.decodeAudioData(this.data),
                                            this.wf.emit('load', {
                                                fileSize: this.fileSize,
                                                loadSize: this.loadSize,
                                                data: this.data,
                                            })),
                                        e
                                    ),
                                )
                        );
                    }
                    destroy() {
                        (this.fileSize = 0),
                            (this.loadSize = 0),
                            (this.data = new Uint8Array()),
                            this.reader && (this.reader.cancel(), (this.reader = null));
                    }
                };
            },
            { './utils': '50e2b', '@parcel/transformer-js/src/esmodule-helpers.js': '47PTV' },
        ],
        '3y0fD': [
            function (e, t, r) {
                e('@parcel/transformer-js/src/esmodule-helpers.js').defineInteropFlag(r);
                var i = e('./utils');
                r.default = class {
                    constructor(e) {
                        (this.wf = e),
                            (this.playTimer = null),
                            (this.isInit = !1),
                            (this.init = () => {
                                this.isInit ||
                                    ((this.isInit = !0),
                                    this.clickInit(),
                                    this.resizeInit(),
                                    this.playInit(),
                                    this.scrollInit(),
                                    this.grabInit(),
                                    this.hoverInit());
                            });
                    }
                    clickInit() {
                        let {
                            options: { container: e },
                            events: { proxy: t },
                        } = this.wf;
                        t(e, ['click', 'contextmenu'], (e) => {
                            if (this.wf.grabbing) return;
                            let t = this.wf.getCurrentTimeFromEvent(e);
                            this.wf.emit(e.type, t, e);
                        });
                    }
                    resizeInit() {
                        let { proxy: e } = this.wf.events,
                            t = (0, i.throttle)(
                                () => {
                                    this.wf.update(), this.wf.emit('resize');
                                },
                                200,
                                this,
                            );
                        e(window, ['resize', 'orientationchange'], () => {
                            t();
                        });
                    }
                    playInit() {
                        let {
                            events: { proxy: e },
                            options: { mediaElement: t },
                        } = this.wf;
                        t &&
                            (e(t, ['seeked', 'seeking', 'canplay'], () => {
                                this.wf.update();
                            }),
                            function e() {
                                this.playTimer = requestAnimationFrame(() => {
                                    this.wf.playing && this.wf.update(), this.wf.isDestroy || e.call(this);
                                });
                            }.call(this));
                    }
                    scrollInit() {
                        let {
                            events: { proxy: e },
                            options: { container: t },
                        } = this.wf;
                        e(t, 'wheel', (e) => {
                            this.wf.emit('scroll', Math.sign(e.deltaY), e);
                        });
                    }
                    grabInit() {
                        let {
                                events: { proxy: e },
                                options: { container: t },
                            } = this.wf,
                            r = !1,
                            n = 0,
                            o = 0;
                        e(t, 'mousedown', (e) => {
                            if ((this.wf.emit('mousedown', e), 0 !== e.button)) return;
                            r = !0;
                            let { scrollable: t } = this.wf.config;
                            (n = t ? this.wf.currentTime : this.wf.getCurrentTimeFromEvent(e)), (o = e.pageX);
                        }),
                            e(t, 'mousemove', (e) => {
                                if ((this.wf.emit('mousemove', e), !r)) return;
                                (this.wf.grabbing = !0), (0, i.addClass)(t, 'wf-grabbing');
                                let { scrollable: a } = this.wf.config,
                                    s = e.pageX - o,
                                    l = this.wf.getDurationFromWidth(s),
                                    u = n + (a ? -l : l);
                                this.wf.emit('grabbing', u, e);
                            }),
                            e(document, 'mouseup', (e) => {
                                this.wf.emit('mouseup', e),
                                    r &&
                                        (setTimeout(() => (this.wf.grabbing = !1)),
                                        (0, i.removeClass)(t, 'wf-grabbing'),
                                        (r = !1),
                                        (n = 0),
                                        (o = 0));
                            });
                    }
                    hoverInit() {
                        let {
                                events: { proxy: e },
                                options: { container: t },
                            } = this.wf,
                            r = document.createElement('div');
                        (0, i.addClass)(r, 'wf-cursor'),
                            t.appendChild(r),
                            (this.wf.template.cursor = r),
                            this.wf.on('mousemove', (e) => {
                                r.style.left = e.pageX - t.getBoundingClientRect().left + 'px';
                            }),
                            e(t, 'mouseenter', (e) => {
                                this.wf.emit('mouseenter', e), (r.style.display = null);
                            }),
                            e(t, 'mouseleave', (e) => {
                                this.wf.emit('mouseleave', e), (r.style.display = 'none');
                            });
                    }
                    destroy() {
                        cancelAnimationFrame(this.playTimer);
                    }
                };
            },
            { './utils': '50e2b', '@parcel/transformer-js/src/esmodule-helpers.js': '47PTV' },
        ],
        '4okRS': [
            function (e, t, r) {
                t.exports =
                    '.wf-player{position:relative;overflow:hidden}.wf-scrollable{cursor:grab}.wf-scrollable.wf-grabbing{cursor:grabbing}.wf-cursor{z-index:10;opacity:.25;-webkit-user-select:none;user-select:none;pointer-events:none;background-color:#fff;width:1px;height:100%;position:absolute;top:0;bottom:0;left:0}';
            },
            {},
        ],
    },
    ['bqk8e'],
    'bqk8e',
    'parcelRequireb650',
);
