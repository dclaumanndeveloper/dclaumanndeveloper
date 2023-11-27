!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("NESCntlr", [], e) : "object" == typeof exports ? exports.NESCntlr = e() : t.NESCntlr = e();
  }(this, (function() {
    return (() => {
      var t = {
        705: (t, e, s) => {
          var i = s(639).Symbol;
          t.exports = i;
        },
        239: (t, e, s) => {
          var i = s(705), n = s(607), r = s(333), o = i ? i.toStringTag : void 0;
          t.exports = function(t) {
            return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : o && o in Object(t) ? n(t) : r(t);
          };
        },
        561: (t, e, s) => {
          var i = s(990), n = /^\s+/;
          t.exports = function(t) {
            return t ? t.slice(0, i(t) + 1).replace(n, "") : t;
          };
        },
        957: (t, e, s) => {
          var i = "object" == typeof s.g && s.g && s.g.Object === Object && s.g;
          t.exports = i;
        },
        607: (t, e, s) => {
          var i = s(705), n = Object.prototype, r = n.hasOwnProperty, o = n.toString, h = i ? i.toStringTag : void 0;
          t.exports = function(t) {
            var e = r.call(t, h), s = t[h];
            try {
              t[h] = void 0;
              var i = !0;
            } catch (t) {}
            var n = o.call(t);
            return i && (e ? t[h] = s : delete t[h]), n;
          };
        },
        333: t => {
          var e = Object.prototype.toString;
          t.exports = function(t) {
            return e.call(t);
          };
        },
        639: (t, e, s) => {
          var i = s(957), n = "object" == typeof self && self && self.Object === Object && self, r = i || n || Function("return this")();
          t.exports = r;
        },
        990: t => {
          var e = /\s/;
          t.exports = function(t) {
            for (var s = t.length; s-- && e.test(t.charAt(s)); ) ;
            return s;
          };
        },
        279: (t, e, s) => {
          var i = s(218), n = s(771), r = s(841), o = Math.max, h = Math.min;
          t.exports = function(t, e, s) {
            var c, d, l, a, u, p, v = 0, f = !1, g = !1, y = !0;
            if ("function" != typeof t) throw new TypeError("Expected a function");
            function m(e) {
              var s = c, i = d;
              return c = d = void 0, v = e, a = t.apply(i, s);
            }
            function w(t) {
              return v = t, u = setTimeout(x, e), f ? m(t) : a;
            }
            function b(t) {
              var s = t - p;
              return void 0 === p || s >= e || s < 0 || g && t - v >= l;
            }
            function x() {
              var t = n();
              if (b(t)) return k(t);
              u = setTimeout(x, function(t) {
                var s = e - (t - p);
                return g ? h(s, l - (t - v)) : s;
              }(t));
            }
            function k(t) {
              return u = void 0, y && c ? m(t) : (c = d = void 0, a);
            }
            function $() {
              var t = n(), s = b(t);
              if (c = arguments, d = this, p = t, s) {
                if (void 0 === u) return w(p);
                if (g) return clearTimeout(u), u = setTimeout(x, e), m(p);
              }
              return void 0 === u && (u = setTimeout(x, e)), a;
            }
            return e = r(e) || 0, i(s) && (f = !!s.leading, l = (g = "maxWait" in s) ? o(r(s.maxWait) || 0, e) : l, y = "trailing" in s ? !!s.trailing : y), $.cancel = function() {
              void 0 !== u && clearTimeout(u), v = 0, c = p = d = u = void 0;
            }, $.flush = function() {
              return void 0 === u ? a : k(n());
            }, $;
          };
        },
        218: t => {
          t.exports = function(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e);
          };
        },
        5: t => {
          t.exports = function(t) {
            return null != t && "object" == typeof t;
          };
        },
        448: (t, e, s) => {
          var i = s(239), n = s(5);
          t.exports = function(t) {
            return "symbol" == typeof t || n(t) && "[object Symbol]" == i(t);
          };
        },
        771: (t, e, s) => {
          var i = s(639);
          t.exports = function() {
            return i.Date.now();
          };
        },
        841: (t, e, s) => {
          var i = s(561), n = s(218), r = s(448), o = /^[-+]0x[0-9a-f]+$/i, h = /^0b[01]+$/i, c = /^0o[0-7]+$/i, d = parseInt;
          t.exports = function(t) {
            if ("number" == typeof t) return t;
            if (r(t)) return NaN;
            if (n(t)) {
              var e = "function" == typeof t.valueOf ? t.valueOf() : t;
              t = n(e) ? e + "" : e;
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = i(t);
            var s = h.test(t);
            return s || c.test(t) ? d(t.slice(2), s ? 2 : 8) : o.test(t) ? NaN : +t;
          };
        },
        504: (t, e, s) => {
          "use strict";
          s.d(e, {
            Z: () => o
          });
          var i = s(279), n = s.n(i);
          t = s.hmd(t);
          class r {
            constructor(t) {
              this.settings = t, this.dom = {};
            }
            create() {
              this.settings.styles.inline && this.setStyles(), this.setHtml(), this.refresh(), this.bindEvents();
            }
            destroy() {
              let t = document.querySelector(`.${this.settings.prefix}-styles`), e = document.querySelector(`.${this.settings.prefix}-cntlr`);
              t.parentNode.removeChild(t), e.parentNode.removeChild(e);
            }
            setStyles() {
              let t = `\n\t\t\t.cntlr {\n\t\t\t\tposition: fixed;\n\t\t\t\tbottom: 0;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\tdisplay: flex;\n\t\t\t\tpadding: 0 15px 10px 15px;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tjustify-content: space-between;\n\t\t\t\tperspective-origin: 50px 53px;\n\t\t\t\tperspective: 100px;\n\t\t\t\tz-index: ${this.settings.styles.zIndex};\n\t\t\t}\n\t\t\t.${this.settings.prefix}-cntlr .d-pad { transition: transform 0.2s; }\n\t\t\t.${this.settings.prefix}-cntlr .d-pad.is-up-left { transform: rotate3d(1, -1, 0, 8deg); }\n\t\t\t.${this.settings.prefix}-cntlr .d-pad.is-left { transform: rotate3d(0, -1, 0, 8deg); }\n\t\t\t.${this.settings.prefix}-cntlr .d-pad.is-down-left { transform: rotate3d(-1, -1, 0, 8deg); }\n\t\t\t.${this.settings.prefix}-cntlr .d-pad.is-up-right { transform: rotate3d(1, 1, 0, 8deg); }\n\t\t\t.${this.settings.prefix}-cntlr .d-pad.is-right { transform: rotate3d(0, 1, 0, 8deg); }\n\t\t\t.${this.settings.prefix}-cntlr .d-pad.is-down-right { transform: rotate3d(-1, 1, 0, 8deg); }\n\t\t\t.${this.settings.prefix}-cntlr .d-pad.is-up { transform: rotate3d(1, 0, 0, 8deg); }\n\t\t\t.${this.settings.prefix}-cntlr .d-pad.is-down { transform: rotate3d(-1, 0, 0, 8deg); }\n\n\t\t\t.${this.settings.prefix}-cntlr .btns.is-b .${this.settings.prefix}__b,\n\t\t\t.${this.settings.prefix}-cntlr .btns.is-a .${this.settings.prefix}__a { fill: ${this.settings.styles.colors[3]}; }\n\t\t\t.${this.settings.prefix}-cntlr .btns.is-select .${this.settings.prefix}__select,\n\t\t\t.${this.settings.prefix}-cntlr .btns.is-start .${this.settings.prefix}__start { fill: ${this.settings.styles.colors[1]}; }`, e = document.head, s = document.createElement("style");
              s.classList.add(`${this.settings.prefix}-styles`), s.appendChild(document.createTextNode(t)), e.appendChild(s);
            }
            setHtml() {
              let t = `\n\t\t\t<nav class="cntlr ${this.settings.prefix}-cntlr">\n\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" width="85" height="107" viewBox="0 0 85 107" class="d-pad" data-default-class="d-pad">\n\t\t\t\t\t<path fill="${this.settings.styles.colors[0]}" stroke="${this.settings.styles.colors[4]}" stroke-width="5" stroke-linecap="round" d="M30.981 2.5c-1.87 0-3.282 1.605-3.282 3.553v22.458H6.198c-1.872 0-3.415 1.607-3.415 3.553V55.74c0 1.945 1.543 3.553 3.415 3.553h21.501V81.75c0 1.947 1.412 3.416 3.282 3.416H54.02c1.869 0 3.282-1.469 3.282-3.416V59.293h21.501c1.871 0 3.414-1.607 3.414-3.553V32.063c0-1.946-1.543-3.553-3.414-3.553H57.302V6.053c0-1.947-1.413-3.553-3.282-3.553H30.981z"/>\n\t\t\t\t</svg>\n\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" width="100" height="107" viewBox="0 0 100 107" class="btns" data-default-class="btns">\n\t\t\t\t\t<path fill="${this.settings.styles.colors[4]}" d="M48 69.584a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5v-38a5 5 0 0 1 5-5h38a5 5 0 0 1 5 5v38z"/>\n\t\t\t\t\t<path class="${this.settings.prefix}__b" fill="${this.settings.styles.colors[2]}" d="M43.082 51.338c0 9.768-7.92 17.688-17.689 17.688S7.704 61.105 7.704 51.338c0-9.771 7.92-17.689 17.688-17.689 9.77-.002 17.69 7.918 17.69 17.689z"/>\n\t\t\t\t\t<path fill="rgba(255,255,255,0.08)" d="M21.556 49.833h8.024v-2.006h-8.024v2.006zm0 4.679h8.024v-2.006h-8.024v2.006zm-2.674 2.674V45.151h9.36c2.674 0 4.012 1.212 4.012 3.637 0 .99-.215 1.783-.643 2.381.428.588.643 1.377.643 2.365 0 2.434-1.338 3.65-4.012 3.65h-9.36v.002z"/>\n\t\t\t\t\t<path fill="${this.settings.styles.colors[4]}" d="M100 69.753a5 5 0 0 1-5 5H57a5 5 0 0 1-5-5v-38a5 5 0 0 1 5-5h38a5 5 0 0 1 5 5v38z"/>\n\t\t\t\t\t<path class="${this.settings.prefix}__a" fill="${this.settings.styles.colors[2]}" d="M93.476 51.506c0 9.769-7.92 17.688-17.689 17.688s-17.688-7.92-17.688-17.688c0-9.77 7.92-17.689 17.688-17.689 9.769-.001 17.689 7.919 17.689 17.689z"/>\n\t\t\t\t\t<path fill="rgba(255,255,255,0.08)" d="M79.798 51.505v-2.006c0-.892-.445-1.337-1.336-1.337h-5.35c-.892 0-1.337.445-1.337 1.337v2.006h8.023zm-8.023 2.674v3.344H69.1V49.5c0-2.674 1.338-4.011 4.012-4.011h5.35c2.674 0 4.01 1.337 4.01 4.011v8.022h-2.674v-3.344h-8.023z"/>\n\t\t\t\t\t<path class="${this.settings.prefix}__select" fill="${this.settings.styles.colors[0]}" stroke="${this.settings.styles.colors[4]}" stroke-width="3" stroke-miterlimit="10" d="M11.734 80.328h24.84c5.377 0 9.734 3.512 9.734 7.843 0 4.332-4.357 7.843-9.734 7.843h-24.84C6.358 96.014 2 92.503 2 88.171c0-4.331 4.357-7.843 9.734-7.843z"/>\n\t\t\t\t\t<path fill="#AE3C66" d="M5.306 107h4.021c1.146 0 1.722-.525 1.722-1.579 0-1.053-.575-1.579-1.722-1.579H6.455v-.861h4.594v-1.148H7.027c-1.147 0-1.722.534-1.722 1.604 0 1.037.574 1.557 1.722 1.557h2.872v.859H5.306V107zm12.06 0h-4.021c-1.147 0-1.722-.574-1.722-1.723v-3.445h5.742v1.148H12.77v.861h4.595v1.147H12.77v.288c0 .383.191.574.574.574h4.021V107zm.567-5.174v3.445c0 1.147.575 1.724 1.722 1.724h4.021v-1.147h-4.021c-.383 0-.573-.193-.573-.576v-3.444l-1.149-.002zM29.994 107h-4.021c-1.147 0-1.722-.574-1.722-1.723v-3.445h5.743v1.148h-4.596v.861h4.596v1.147h-4.596v.288c0 .383.192.574.573.574h4.021l.002 1.15zm6.317 0h-4.02c-1.149 0-1.724-.574-1.724-1.723v-1.723c0-1.148.573-1.724 1.724-1.724h4.02v1.147h-4.02c-.383 0-.573.192-.573.576v1.723c0 .383.19.574.573.574h4.02V107zm.578-5.174h5.742v1.148h-2.297v4.021h-1.147v-4.021h-2.298v-1.148z"/>\n\t\t\t\t\t<path class="${this.settings.prefix}__start" fill="${this.settings.styles.colors[0]}" stroke="${this.settings.styles.colors[4]}" stroke-width="3" stroke-miterlimit="10" d="M63.389 80.328h24.84c5.377 0 9.734 3.512 9.734 7.843 0 4.332-4.357 7.843-9.734 7.843h-24.84c-5.376 0-9.734-3.511-9.734-7.843-.001-4.331 4.357-7.843 9.734-7.843z"/>\n\t\t\t\t\t<path fill="#AE3C66" d="M60.815 106.939h3.918c1.119 0 1.678-.514 1.678-1.541 0-1.025-.559-1.538-1.678-1.538h-2.8v-.839h4.478v-1.12h-3.917c-1.12 0-1.679.52-1.679 1.561 0 1.013.56 1.517 1.679 1.517h2.798v.841h-4.477v1.119zm6.148-5.044h5.598v1.119h-2.239v3.918h-1.12v-3.918h-2.239v-1.119zm10.64 2.521v-.84c0-.373-.187-.561-.56-.561h-2.239c-.374 0-.56.188-.56.561v.84h3.359zm-3.359 1.12v1.399h-1.119v-3.358c0-1.119.561-1.679 1.679-1.679h2.239c1.119 0 1.679.56 1.679 1.679v3.358h-1.119v-1.399h-3.359zm6.152-1.682h3.357v-.84h-3.357v.84zm0 1.119v1.959h-1.119v-5.037h3.918c1.119 0 1.679.512 1.679 1.533 0 .485-.08.842-.24 1.069.16.265.24.608.24 1.035v1.399h-1.119v-1.399c0-.373-.187-.56-.56-.56h-2.799v.001zm5.043-3.078h5.597v1.119h-2.238v3.918h-1.119v-3.918H85.44l-.001-1.119z"/>\n\t\t\t\t</svg>\n\t\t\t</nav>`;
              document.querySelector(this.settings.location).insertAdjacentHTML("beforeend", t), this.dom.el = document.querySelector(this.settings.location).querySelector(`.${this.settings.prefix}-cntlr`);
            }
            bindEvents() {
              window.addEventListener("orientationchange", (t => this.refresh(t))), window.addEventListener("resize", n()((t => this.refresh(t)), 300));
            }
            refresh() {
              let t = "0";
              this.isTouchDevice && window.innerWidth < 992 && (t = "50px"), this.dom.el.style.bottom = t;
            }
            get isTouchDevice() {
              return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
            }
          }
          void 0 !== t.exports ? t.exports = r : "function" == typeof define && s.amdO ? define([], (() => r)) : window.VirtualCntlr = r;
          const o = r;
        }
      }, e = {};
      function s(i) {
        var n = e[i];
        if (void 0 !== n) return n.exports;
        var r = e[i] = {
          id: i,
          loaded: !1,
          exports: {}
        };
        return t[i](r, r.exports, s), r.loaded = !0, r.exports;
      }
      s.amdO = {}, s.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return s.d(e, {
          a: e
        }), e;
      }, s.d = (t, e) => {
        for (var i in e) s.o(e, i) && !s.o(t, i) && Object.defineProperty(t, i, {
          enumerable: !0,
          get: e[i]
        });
      }, s.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" == typeof window) return window;
        }
      }(), s.hmd = t => ((t = Object.create(t)).children || (t.children = []), Object.defineProperty(t, "exports", {
        enumerable: !0,
        set: () => {
          throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + t.id);
        }
      }), t), s.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
      var i = {};
      return (() => {
        "use strict";
        s.d(i, {
          default: () => r
        });
        var t = s(279), e = s.n(t), n = s(504);
        const r = class {
          constructor(t) {
            this.dom = {}, this.settings = {
              keys: {
                start: "Enter",
                select: "Space",
                left: "ArrowLeft",
                up: "ArrowUp",
                right: "ArrowRight",
                down: "ArrowDown",
                b: "KeyZ",
                a: "KeyX"
              },
              location: "body",
              prefix: "player1",
              virtual: "auto",
              styles: {
                inline: !0,
                colors: [ "#2F3335", "#383d41", "#AC3C66", "#D64A80", "#B4B4B4" ],
                zIndex: 100
              }
            }, this.settings = {
              ...this.settings,
              ...t
            }, this.current = {
              dpad: {
                top: 0,
                left: 0,
                active: null
              },
              btns: {
                prev: null,
                top: 0,
                left: 0,
                active: null
              }
            }, this.keys = {
              pressed: {}
            }, this.timming = {}, this.showVirtualCntlr = !1, this.init();
          }
          init() {
            this.setVirtualCntlr(), this.bindEvents();
          }
          setVirtualCntlr() {
            switch (this.settings.virtual) {
             case "always":
              this.showVirtualCntlr = !0, this.createVirtualCntlr();
              break;
             case "never":
              this.showVirtualCntlr = !1, this.destroyVirtualCntlr();
              break;
             default:
              this.showVirtualCntlr = this.isTouchDevice, this.showVirtualCntlr ? this.createVirtualCntlr() : this.destroyVirtualCntlr();
            }
          }
          get isTouchDevice() {
            return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
          }
          bindEvents() {
            window.addEventListener("orientationchange", (() => this.refresh())), window.addEventListener("resize", e()((() => this.refresh()), 300)), window.addEventListener("keydown", (t => this.keyAction(t, !0))), window.addEventListener("keyup", (t => this.keyAction(t, !1)));
          }
          keyAction(t, e) {
            if (!(t = t || window.event).repeat) {
              e ? this.keys.pressed[t.code] = !0 : delete this.keys.pressed[t.code], t.code === this.settings.keys.select && this.setTouchBtns("select", e), t.code === this.settings.keys.start && this.setTouchBtns("start", e), t.code === this.settings.keys.b && this.setTouchBtns("b", e), t.code === this.settings.keys.a && this.setTouchBtns("a", e);
              let s = null;
              this.keys.pressed.hasOwnProperty(this.settings.keys.up) && this.keys.pressed.hasOwnProperty(this.settings.keys.left) ? s = "up-left" : this.keys.pressed.hasOwnProperty(this.settings.keys.up) && this.keys.pressed.hasOwnProperty(this.settings.keys.right) ? s = "up-right" : this.keys.pressed.hasOwnProperty(this.settings.keys.down) && this.keys.pressed.hasOwnProperty(this.settings.keys.left) ? s = "down-left" : this.keys.pressed.hasOwnProperty(this.settings.keys.down) && this.keys.pressed.hasOwnProperty(this.settings.keys.right) ? s = "down-right" : this.keys.pressed.hasOwnProperty(this.settings.keys.up) ? s = "up" : this.keys.pressed.hasOwnProperty(this.settings.keys.down) ? s = "down" : this.keys.pressed.hasOwnProperty(this.settings.keys.right) ? s = "right" : this.keys.pressed.hasOwnProperty(this.settings.keys.left) && (s = "left"), this.setTouchDirection(s);
            }
          }
          createVirtualCntlr() {
            void 0 === this.controller && (this.controller = new n.Z(this.settings), this.controller.create(), this.dom.el = document.querySelector(`.${this.settings.prefix}-cntlr`), this.dom.dpad = document.querySelector(`.${this.settings.prefix}-cntlr .d-pad`), this.dom.btns = document.querySelector(`.${this.settings.prefix}-cntlr .btns`), this.setVirtualCntlrPos(), this.dom.el.addEventListener("touchstart", (t => this.touchMove(t)), !1), this.dom.el.addEventListener("touchmove", (t => this.touchMove(t)), !1), this.dom.el.addEventListener("touchend", (t => this.touchEnd(t)), !1), this.dom.el.addEventListener("touchcancel", (t => this.touchEnd(t)), !1));
          }
          destroyVirtualCntlr() {
            void 0 !== this.controller && (this.controller.destroy(), this.dom.el.removeEventListener("touchstart", (t => this.touchMove(t)), !1), this.dom.el.removeEventListener("touchmove", (t => this.touchMove(t)), !1), this.dom.el.removeEventListener("touchend", (() => this.touchEnd()), !1), this.dom.el.removeEventListener("touchcancel", (() => this.touchEnd()), !1), this.dom.el = null);
          }
          refresh() {
            this.setVirtualCntlr(), this.setVirtualCntlrPos();
          }
          setVirtualCntlrPos() {
            if (this.dom.dpad && this.dom.btns) {
              const t = this.dom.dpad.getBoundingClientRect(), e = this.dom.btns.getBoundingClientRect();
              this.current.dpad.top = t.y, this.current.dpad.left = t.x, this.current.dpad.right = t.right, this.current.btns.top = e.y, this.current.btns.left = e.x, this.current.btns.right = e.right;
            }
          }
          touchMove(t) {
            t.preventDefault(), Array.from(t.touches).forEach((t => {
              t.pageX > this.current.dpad.left && t.pageX < this.current.dpad.right ? this.dpadMove(t) : t.pageX > this.current.btns.left && t.pageX < this.current.btns.right && this.btnsMove(t);
            }));
          }
          touchEnd(t) {
            this.current.dpad.active && this.current.btns.active ? Array.from(t.changedTouches).forEach((t => {
              t.pageX > this.current.dpad.left && t.pageX < this.current.dpad.right ? this.setTouchDirection() : this.setTouchBtns();
            })) : this.current.dpad.active ? this.setTouchDirection() : this.setTouchBtns();
          }
          dpadMove(t) {
            let e = t.pageX - this.current.dpad.left, s = t.pageY - this.current.dpad.top, i = null;
            e >= 0 && e <= 85 && e && s >= 0 && s <= 88 && (i = e < 28 ? s < 28 ? "up-left" : s < 59 ? "left" : "down-left" : e < 58 ? s < 28 ? "up" : s < 59 ? null : "down" : s < 28 ? "up-right" : s < 59 ? "right" : "down-right"), this.setTouchDirection(i);
          }
          btnsMove(t) {
            let e = t.pageX - this.current.btns.left, s = t.pageY - this.current.btns.top, i = null;
            e >= 0 && e <= 100 && s >= 28 && s <= 107 && (i = s < 77 ? e < 50 ? "b" : "a" : e < 50 ? "select" : "start"), this.setTouchBtns(i);
          }
          setTouchDirection(t = null) {
            null != t ? this.current.dpad.active !== t && (this.triggerEvent(this.dom.dpad, this.current.dpad.active, !1), this.current.dpad.active = t, this.triggerEvent(this.dom.dpad, this.current.dpad.active, !0)) : (this.triggerEvent(this.dom.dpad, this.current.dpad.active, !1), this.current.dpad.active = null);
          }
          setTouchBtns(t = null, e = null) {
            null != t && 0 != e ? this.current.btns.active !== t && (this.triggerEvent(this.dom.btns, this.current.btns.active, !1), this.current.btns.active = t, this.triggerEvent(this.dom.btns, t, !0)) : (this.triggerEvent(this.dom.btns, this.current.btns.active, !1), this.current.btns.active = null);
          }
          triggerEvent(t, e, s) {
            if (null !== e && "" !== e) {
              let t = {
                pressed: s,
                btn: e
              };
              s ? this.timming[e] = new Date : t.duration = new Date - this.timming[e];
              let i = new CustomEvent(`${this.settings.prefix}:${e}`, {
                detail: t
              });
              document.dispatchEvent(i);
            }
            this.showVirtualCntlr && t && (t.classList = t.getAttribute("data-default-class"), s && t.classList.add(`is-${e}`));
          }
        };
      })(), i.default;
    })();
  }));