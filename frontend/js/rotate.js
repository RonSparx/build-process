/*!
 * 
 *  js-cloudimage-360-view v2.4.1
 *  https://github.com/scaleflex/js-cloudimage-360-view
 * 
 *  Copyright (c) 2019 scaleflex
 *  Released under the MIT license
 * 
 *  Date: 2020-04-11T08:17:37.687Z
 * 
 */
!function(e) {
    var t = {};
    function i(n) {
        if (t[n])
            return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, i),
        o.l = !0,
        o.exports
    }
    i.m = e,
    i.c = t,
    i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(e, t) {
        if (1 & t && (e = i(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                i.d(n, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return n
    }
    ,
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return i.d(t, "a", t),
        t
    }
    ,
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    i.p = "",
    i(i.s = 33)
}([function(e, t) {
    e.exports = "object" == typeof window && window && window.Math == Math ? window : "object" == typeof self && self && self.Math == Math ? self : Function("return this")()
}
, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}
, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}
, function(e, t, i) {
    var n = i(10)
      , o = i(26);
    e.exports = i(4) ? function(e, t, i) {
        return n.f(e, t, o(1, i))
    }
    : function(e, t, i) {
        return e[t] = i,
        e
    }
}
, function(e, t, i) {
    e.exports = !i(1)((function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    }
    ))
}
, function(e, t) {
    var i = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return i.call(e, t)
    }
}
, function(e, t, i) {
    var n = i(0)
      , o = i(9)
      , s = n["__core-js_shared__"] || o("__core-js_shared__", {});
    (e.exports = function(e, t) {
        return s[e] || (s[e] = void 0 !== t ? t : {})
    }
    )("versions", []).push({
        version: "3.0.0",
        mode: i(42) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}
, function(e, t, i) {
    var n = i(2);
    e.exports = function(e) {
        if (!n(e))
            throw TypeError(String(e) + " is not an object");
        return e
    }
}
, function(e, t, i) {
    var n = i(6)("wks")
      , o = i(27)
      , s = i(0).Symbol
      , r = i(43);
    e.exports = function(e) {
        return n[e] || (n[e] = r && s[e] || (r ? s : o)("Symbol." + e))
    }
}
, function(e, t, i) {
    var n = i(0)
      , o = i(3);
    e.exports = function(e, t) {
        try {
            o(n, e, t)
        } catch (i) {
            n[e] = t
        }
        return t
    }
}
, function(e, t, i) {
    var n = i(4)
      , o = i(23)
      , s = i(7)
      , r = i(25)
      , a = Object.defineProperty;
    t.f = n ? a : function(e, t, i) {
        if (s(e),
        t = r(t, !0),
        s(i),
        o)
            try {
                return a(e, t, i)
            } catch (e) {}
        if ("get"in i || "set"in i)
            throw TypeError("Accessors not supported");
        return "value"in i && (e[t] = i.value),
        e
    }
}
, function(e, t, i) {
    var n = i(0)
      , o = i(28).f
      , s = i(3)
      , r = i(46)
      , a = i(9)
      , c = i(49)
      , l = i(54);
    e.exports = function(e, t) {
        var i, u, h, d, f, v = e.target, p = e.global, y = e.stat;
        if (i = p ? n : y ? n[v] || a(v, {}) : (n[v] || {}).prototype)
            for (u in t) {
                if (d = t[u],
                h = e.noTargetGet ? (f = o(i, u)) && f.value : i[u],
                !l(p ? u : v + (y ? "." : "#") + u, e.forced) && void 0 !== h) {
                    if (typeof d == typeof h)
                        continue;
                    c(d, h)
                }
                (e.sham || h && h.sham) && s(d, "sham", !0),
                r(i, u, d, e)
            }
    }
}
, function(e, t, i) {
    var n = i(18)
      , o = i(20);
    e.exports = function(e) {
        return n(o(e))
    }
}
, function(e, t) {
    e.exports = {}
}
, function(e, t) {
    e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}
, function(e, t, i) {
    var n = i(0)
      , o = i(17)
      , s = Function.call;
    e.exports = function(e, t, i) {
        return o(s, n[e].prototype[t], i)
    }
}
, function(e, t, i) {
    var n = i(17)
      , o = i(18)
      , s = i(39)
      , r = i(21)
      , a = i(40);
    e.exports = function(e, t) {
        var i = 1 == e
          , c = 2 == e
          , l = 3 == e
          , u = 4 == e
          , h = 6 == e
          , d = 5 == e || h
          , f = t || a;
        return function(t, a, v) {
            for (var p, y, g = s(t), m = o(g), w = n(a, v, 3), x = r(m.length), b = 0, I = i ? f(t, x) : c ? f(t, 0) : void 0; x > b; b++)
                if ((d || b in m) && (y = w(p = m[b], b, g),
                e))
                    if (i)
                        I[b] = y;
                    else if (y)
                        switch (e) {
                        case 3:
                            return !0;
                        case 5:
                            return p;
                        case 6:
                            return b;
                        case 2:
                            I.push(p)
                        }
                    else if (u)
                        return !1;
            return h ? -1 : l || u ? u : I
        }
    }
}
, function(e, t, i) {
    var n = i(38);
    e.exports = function(e, t, i) {
        if (n(e),
        void 0 === t)
            return e;
        switch (i) {
        case 0:
            return function() {
                return e.call(t)
            }
            ;
        case 1:
            return function(i) {
                return e.call(t, i)
            }
            ;
        case 2:
            return function(i, n) {
                return e.call(t, i, n)
            }
            ;
        case 3:
            return function(i, n, o) {
                return e.call(t, i, n, o)
            }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}
, function(e, t, i) {
    var n = i(1)
      , o = i(19)
      , s = "".split;
    e.exports = n((function() {
        return !Object("z").propertyIsEnumerable(0)
    }
    )) ? function(e) {
        return "String" == o(e) ? s.call(e, "") : Object(e)
    }
    : Object
}
, function(e, t) {
    var i = {}.toString;
    e.exports = function(e) {
        return i.call(e).slice(8, -1)
    }
}
, function(e, t) {
    e.exports = function(e) {
        if (null == e)
            throw TypeError("Can't call method on " + e);
        return e
    }
}
, function(e, t, i) {
    var n = i(22)
      , o = Math.min;
    e.exports = function(e) {
        return e > 0 ? o(n(e), 9007199254740991) : 0
    }
}
, function(e, t) {
    var i = Math.ceil
      , n = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? n : i)(e)
    }
}
, function(e, t, i) {
    e.exports = !i(4) && !i(1)((function() {
        return 7 != Object.defineProperty(i(24)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }
    ))
}
, function(e, t, i) {
    var n = i(2)
      , o = i(0).document
      , s = n(o) && n(o.createElement);
    e.exports = function(e) {
        return s ? o.createElement(e) : {}
    }
}
, function(e, t, i) {
    var n = i(2);
    e.exports = function(e, t) {
        if (!n(e))
            return e;
        var i, o;
        if (t && "function" == typeof (i = e.toString) && !n(o = i.call(e)))
            return o;
        if ("function" == typeof (i = e.valueOf) && !n(o = i.call(e)))
            return o;
        if (!t && "function" == typeof (i = e.toString) && !n(o = i.call(e)))
            return o;
        throw TypeError("Can't convert object to primitive value")
    }
}
, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}
, function(e, t) {
    var i = 0
      , n = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++i + n).toString(36))
    }
}
, function(e, t, i) {
    var n = i(4)
      , o = i(45)
      , s = i(26)
      , r = i(12)
      , a = i(25)
      , c = i(5)
      , l = i(23)
      , u = Object.getOwnPropertyDescriptor;
    t.f = n ? u : function(e, t) {
        if (e = r(e),
        t = a(t, !0),
        l)
            try {
                return u(e, t)
            } catch (e) {}
        if (c(e, t))
            return s(!o.f.call(e, t), e[t])
    }
}
, function(e, t, i) {
    e.exports = i(6)("native-function-to-string", Function.toString)
}
, function(e, t, i) {
    var n = i(6)("keys")
      , o = i(27);
    e.exports = function(e) {
        return n[e] || (n[e] = o(e))
    }
}
, function(e, t, i) {
    var n = i(5)
      , o = i(12)
      , s = i(32)(!1)
      , r = i(13);
    e.exports = function(e, t) {
        var i, a = o(e), c = 0, l = [];
        for (i in a)
            !n(r, i) && n(a, i) && l.push(i);
        for (; t.length > c; )
            n(a, i = t[c++]) && (~s(l, i) || l.push(i));
        return l
    }
}
, function(e, t, i) {
    var n = i(12)
      , o = i(21)
      , s = i(52);
    e.exports = function(e) {
        return function(t, i, r) {
            var a, c = n(t), l = o(c.length), u = s(r, l);
            if (e && i != i) {
                for (; l > u; )
                    if ((a = c[u++]) != a)
                        return !0
            } else
                for (; l > u; u++)
                    if ((e || u in c) && c[u] === i)
                        return e || u || 0;
            return !e && -1
        }
    }
}
, function(e, t, i) {
    "use strict";
    i(34),
    i(55),
    i(59);
    var n, o = i(67), s = (n = o) && n.__esModule ? n : {
        default: n
    };
    function r() {
        var e = []
          , t = document.querySelectorAll(".cloudimage-360:not(.initialized)");
        [].slice.call(t).forEach((function(t) {
            e.push(new s.default(t))
        }
        )),
        window.CI360._viewers = e
    }
    function a() {
        return !(window.CI360._viewers && window.CI360._viewers.length > 0)
    }
    window.CI360 = window.CI360 || {},
    window.CI360.init = r,
    window.CI360.destroy = function() {
        a() || (window.CI360._viewers.forEach((function(e) {
            e.destroy()
        }
        )),
        window.CI360._viewers = [])
    },
    window.CI360.getActiveIndexByID = function(e) {
        if (!a()) {
            var t = window.CI360._viewers.filter((function(t) {
                return t.id === e
            }
            ))[0];
            return t && t.activeImage - 1
        }
    },
    window.CI360.play = function() {
        (window.CI360._viewers.forEach((function(e) {
            e.play();
        }
        )))
    },
    window.CI360.stop = function() {
        (window.CI360._viewers.forEach((function(e) {
            e.stop();
        }
        )))
    },
    window.CI360.notInitOnLoad || r()
}, function(e, t, i) {
    e.exports = i(35)
}, function(e, t, i) {
    i(36),
    e.exports = i(15)("Array", "forEach")
}, function(e, t, i) {
    "use strict";
    var n = i(37);
    i(11)({
        target: "Array",
        proto: !0,
        forced: [].forEach != n
    }, {
        forEach: n
    })
}, function(e, t, i) {
    "use strict";
    var n = [].forEach
      , o = i(16)(0)
      , s = i(44)("forEach");
    e.exports = s ? function(e) {
        return o(this, e, arguments[1])
    } : n
}, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e)
            throw TypeError(String(e) + " is not a function");
        return e
    }
}, function(e, t, i) {
    var n = i(20);
    e.exports = function(e) {
        return Object(n(e))
    }
}, function(e, t, i) {
    var n = i(2)
      , o = i(41)
      , s = i(8)("species");
    e.exports = function(e, t) {
        var i;
        return o(e) && ("function" != typeof (i = e.constructor) || i !== Array && !o(i.prototype) ? n(i) && null === (i = i[s]) && (i = void 0) : i = void 0),
        new (void 0 === i ? Array : i)(0 === t ? 0 : t)
    }
}, function(e, t, i) {
    var n = i(19);
    e.exports = Array.isArray || function(e) {
        return "Array" == n(e)
    }
}, function(e, t) {
    e.exports = !1
}, function(e, t, i) {
    e.exports = !i(1)((function() {
        String(Symbol())
    }
    ))
}, function(e, t, i) {
    "use strict";
    var n = i(1);
    e.exports = function(e, t) {
        var i = [][e];
        return !i || !n((function() {
            i.call(null, t || function() {
                throw Error()
            }
            , 1)
        }
        ))
    }
}, function(e, t, i) {
    "use strict";
    var n = {}.propertyIsEnumerable
      , o = Object.getOwnPropertyDescriptor
      , s = o && !n.call({
        1: 2
    }, 1);
    t.f = s ? function(e) {
        var t = o(this, e);
        return !!t && t.enumerable
    }
    : n
}
, function(e, t, i) {
    var n = i(0)
      , o = i(3)
      , s = i(5)
      , r = i(9)
      , a = i(29)
      , c = i(47)
      , l = c.get
      , u = c.enforce
      , h = String(a).split("toString");
    i(6)("inspectSource", (function(e) {
        return a.call(e)
    }
    )),
    (e.exports = function(e, t, i, a) {
        var c = !!a && !!a.unsafe
          , l = !!a && !!a.enumerable
          , d = !!a && !!a.noTargetGet;
        "function" == typeof i && ("string" != typeof t || s(i, "name") || o(i, "name", t),
        u(i).source = h.join("string" == typeof t ? t : "")),
        e !== n ? (c ? !d && e[t] && (l = !0) : delete e[t],
        l ? e[t] = i : o(e, t, i)) : l ? e[t] = i : r(t, i)
    }
    )(Function.prototype, "toString", (function() {
        return "function" == typeof this && l(this).source || a.call(this)
    }
    ))
}
, function(e, t, i) {
    var n, o, s, r = i(48), a = i(2), c = i(3), l = i(5), u = i(30), h = i(13), d = i(0).WeakMap;
    if (r) {
        var f = new d
          , v = f.get
          , p = f.has
          , y = f.set;
        n = function(e, t) {
            return y.call(f, e, t),
            t
        }
        ,
        o = function(e) {
            return v.call(f, e) || {}
        }
        ,
        s = function(e) {
            return p.call(f, e)
        }
    } else {
        var g = u("state");
        h[g] = !0,
        n = function(e, t) {
            return c(e, g, t),
            t
        }
        ,
        o = function(e) {
            return l(e, g) ? e[g] : {}
        }
        ,
        s = function(e) {
            return l(e, g)
        }
    }
    e.exports = {
        set: n,
        get: o,
        has: s,
        enforce: function(e) {
            return s(e) ? o(e) : n(e, {})
        },
        getterFor: function(e) {
            return function(t) {
                var i;
                if (!a(t) || (i = o(t)).type !== e)
                    throw TypeError("Incompatible receiver, " + e + " required");
                return i
            }
        }
    }
}
, function(e, t, i) {
    var n = i(29)
      , o = i(0).WeakMap;
    e.exports = "function" == typeof o && /native code/.test(n.call(o))
}
, function(e, t, i) {
    var n = i(5)
      , o = i(50)
      , s = i(28)
      , r = i(10);
    e.exports = function(e, t) {
        for (var i = o(t), a = r.f, c = s.f, l = 0; l < i.length; l++) {
            var u = i[l];
            n(e, u) || a(e, u, c(t, u))
        }
    }
}
, function(e, t, i) {
    var n = i(51)
      , o = i(53)
      , s = i(7)
      , r = i(0).Reflect;
    e.exports = r && r.ownKeys || function(e) {
        var t = n.f(s(e))
          , i = o.f;
        return i ? t.concat(i(e)) : t
    }
}
, function(e, t, i) {
    var n = i(31)
      , o = i(14).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function(e) {
        return n(e, o)
    }
}
, function(e, t, i) {
    var n = i(22)
      , o = Math.max
      , s = Math.min;
    e.exports = function(e, t) {
        var i = n(e);
        return i < 0 ? o(i + t, 0) : s(i, t)
    }
}
, function(e, t) {
    t.f = Object.getOwnPropertySymbols
}
, function(e, t, i) {
    var n = i(1)
      , o = /#|\.prototype\./
      , s = function(e, t) {
        var i = a[r(e)];
        return i == l || i != c && ("function" == typeof t ? n(t) : !!t)
    }
      , r = s.normalize = function(e) {
        return String(e).replace(o, ".").toLowerCase()
    }
      , a = s.data = {}
      , c = s.NATIVE = "N"
      , l = s.POLYFILL = "P";
    e.exports = s
}
, function(e, t, i) {
    e.exports = i(56)
}
, function(e, t, i) {
    i(57),
    e.exports = i(15)("Array", "filter")
}
, function(e, t, i) {
    "use strict";
    var n = i(16)(2)
      , o = i(58)("filter");
    i(11)({
        target: "Array",
        proto: !0,
        forced: !o
    }, {
        filter: function(e) {
            return n(this, e, arguments[1])
        }
    })
}
, function(e, t, i) {
    var n = i(1)
      , o = i(8)("species");
    e.exports = function(e) {
        return !n((function() {
            var t = [];
            return (t.constructor = {})[o] = function() {
                return {
                    foo: 1
                }
            }
            ,
            1 !== t[e](Boolean).foo
        }
        ))
    }
}
, function(e, t, i) {
    e.exports = i(60)
}
, function(e, t, i) {
    i(61),
    e.exports = i(15)("Array", "includes")
}
, function(e, t, i) {
    "use strict";
    var n = i(32)(!0);
    i(11)({
        target: "Array",
        proto: !0
    }, {
        includes: function(e) {
            return n(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }),
    i(62)("includes")
}
, function(e, t, i) {
    var n = i(8)("unscopables")
      , o = i(63)
      , s = i(3)
      , r = Array.prototype;
    null == r[n] && s(r, n, o(null)),
    e.exports = function(e) {
        r[n][e] = !0
    }
}
, function(e, t, i) {
    var n = i(7)
      , o = i(64)
      , s = i(14)
      , r = i(66)
      , a = i(24)
      , c = i(30)("IE_PROTO")
      , l = function() {}
      , u = function() {
        var e, t = a("iframe"), i = s.length;
        for (t.style.display = "none",
        r.appendChild(t),
        t.src = String("javascript:"),
        (e = t.contentWindow.document).open(),
        e.write("<script>document.F=Object<\/script>"),
        e.close(),
        u = e.F; i--; )
            delete u.prototype[s[i]];
        return u()
    };
    e.exports = Object.create || function(e, t) {
        var i;
        return null !== e ? (l.prototype = n(e),
        i = new l,
        l.prototype = null,
        i[c] = e) : i = u(),
        void 0 === t ? i : o(i, t)
    }
    ,
    i(13)[c] = !0
}
, function(e, t, i) {
    var n = i(4)
      , o = i(10)
      , s = i(7)
      , r = i(65);
    e.exports = n ? Object.defineProperties : function(e, t) {
        s(e);
        for (var i, n = r(t), a = n.length, c = 0; a > c; )
            o.f(e, i = n[c++], t[i]);
        return e
    }
}
, function(e, t, i) {
    var n = i(31)
      , o = i(14);
    e.exports = Object.keys || function(e) {
        return n(e, o)
    }
}
, function(e, t, i) {
    var n = i(0).document;
    e.exports = n && n.documentElement
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }()
      , o = i(68);
    var s = function() {
        function e(t, i, n) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.container = t,
            this.activeImage = 1,
            this.movementStart = 0,
            this.isClicked = !1,
            this.loadedImages = 0,
            this.imagesLoaded = !1,
            this.reversed = !1,
            this.fullScreenView = !!i,
            this.ratio = n,
            this.images = [],
            this.devicePixelRatio = Math.round(window.devicePixelRatio || 1),
            this.isMobile = !!("ontouchstart"in window || navigator.msMaxTouchPoints),
            this.id = t.id,
            this.init(t)
        }
        return n(e, [{
            key: "mousedown",
            value: function(e) {
                e.preventDefault(),
                this.imagesLoaded && (this.glass && this.closeMagnifier(),
                this.view360Icon && this.remove360ViewIcon(),
                (this.autoplay || this.loopTimeoutId) && (this.stop(),
                this.autoplay = !1),
                this.movementStart = e.pageX,
                this.isClicked = !0,
                this.container.style.cursor = "grabbing")
            }
        }, {
            key: "mouseup",
            value: function() {
                this.imagesLoaded && (this.movementStart = 0,
                this.isClicked = !1,
                this.container.style.cursor = "grab",
                this.bottomCircle && this.show360ViewCircleIcon())
            }
        }, {
            key: "mousemove",
            value: function(e) {
                this.isClicked && this.imagesLoaded && this.onMove(e.pageX)
            }
        }, {
            key: "touchstart",
            value: function(e) {
                this.imagesLoaded && (this.glass && this.closeMagnifier(),
                this.view360Icon && this.remove360ViewIcon(),
                (this.autoplay || this.loopTimeoutId) && (this.stop(),
                this.autoplay = !1),
                this.movementStart = e.touches[0].clientX,
                this.isClicked = !0)
            }
        }, {
            key: "touchend",
            value: function() {
                this.imagesLoaded && (this.movementStart = 0,
                this.isClicked = !1,
                this.bottomCircle && this.show360ViewCircleIcon())
            }
        }, {
            key: "touchmove",
            value: function(e) {
                this.isClicked && this.imagesLoaded && this.onMove(e.touches[0].clientX)
            }
        }, {
            key: "keydownGeneral",
            value: function() {
                this.imagesLoaded && this.glass && this.closeMagnifier()
            }
        }, {
            key: "keydown",
            value: function(e) {
                this.imagesLoaded && (this.glass && this.closeMagnifier(),
                -1 !== [37, 39].indexOf(e.keyCode) && (37 === e.keyCode ? this.reversed ? this.prev() : this.next() : 39 === e.keyCode && (this.reversed ? this.next() : this.prev()),
                this.onSpin()))
            }
        }, {
            key: "onSpin",
            value: function() {
                this.bottomCircle && this.hide360ViewCircleIcon(),
                this.view360Icon && this.remove360ViewIcon(),
                (this.autoplay || this.loopTimeoutId) && (this.stop(),
                this.autoplay = !1)
            }
        }, {
            key: "keyup",
            value: function(e) {
                this.imagesLoaded && -1 !== [37, 39].indexOf(e.keyCode) && this.onFinishSpin()
            }
        }, {
            key: "onFinishSpin",
            value: function() {
                this.bottomCircle && this.show360ViewCircleIcon()
            }
        }, {
            key: "onMove",
            value: function(e) {
                if (e - this.movementStart >= this.speedFactor) {
                    var t = Math.floor((e - this.movementStart) / this.speedFactor) || 1;
                    this.movementStart = e,
                    this.spinReverse ? this.moveActiveIndexDown(t) : this.moveActiveIndexUp(t),
                    this.bottomCircle && this.hide360ViewCircleIcon(),
                    this.update()
                } else if (this.movementStart - e >= this.speedFactor) {
                    var i = Math.floor((this.movementStart - e) / this.speedFactor) || 1;
                    this.movementStart = e,
                    this.spinReverse ? this.moveActiveIndexUp(i) : this.moveActiveIndexDown(i),
                    this.bottomCircle && this.hide360ViewCircleIcon(),
                    this.update()
                }
            }
        }, {
            key: "moveActiveIndexUp",
            value: function(e) {
                var t = this.controlReverse ? !this.spinReverse : this.spinReverse;
                this.stopAtEdges ? this.activeImage + e >= this.amount ? (this.activeImage = this.amount,
                (t ? this.prevElem : this.nextElem) && (0,
                o.addClass)(t ? this.prevElem : this.nextElem, "not-active")) : (this.activeImage += e,
                this.nextElem && (0,
                o.removeClass)(this.nextElem, "not-active"),
                this.prevElem && (0,
                o.removeClass)(this.prevElem, "not-active")) : this.activeImage = (this.activeImage + e) % this.amount || this.amount
            }
        }, {
            key: "moveActiveIndexDown",
            value: function(e) {
                var t = this.controlReverse ? !this.spinReverse : this.spinReverse;
                this.stopAtEdges ? this.activeImage - e <= 1 ? (this.activeImage = 1,
                (t ? this.nextElem : this.prevElem) && (0,
                o.addClass)(t ? this.nextElem : this.prevElem, "not-active")) : (this.activeImage -= e,
                this.prevElem && (0,
                o.removeClass)(this.prevElem, "not-active"),
                this.nextElem && (0,
                o.removeClass)(this.nextElem, "not-active")) : this.activeImage - e < 1 ? this.activeImage = this.amount + (this.activeImage - e) : this.activeImage -= e
            }
        }, {
            key: "loop",
            value: function(e) {
                e ? this.prev() : this.next()
            }
        }, {
            key: "next",
            value: function() {
                this.moveActiveIndexUp(1),
                this.update()
            }
        }, {
            key: "prev",
            value: function() {
                this.moveActiveIndexDown(1),
                this.update()
            }
        }, {
            key: "update",
            value: function() {
                var e = this.images[this.activeImage - 1]
                  , t = this.canvas.getContext("2d");
                if (t.scale(this.devicePixelRatio, this.devicePixelRatio),
                this.fullScreenView) {
                    this.canvas.width = window.innerWidth * this.devicePixelRatio,
                    this.canvas.style.width = window.innerWidth + "px",
                    this.canvas.height = window.innerHeight * this.devicePixelRatio,
                    this.canvas.style.height = window.innerHeight + "px";
                    var i = (0,
                    o.contain)(this.canvas.width, this.canvas.height, e.width, e.height)
                      , n = i.offsetX
                      , s = i.offsetY
                      , r = i.width
                      , a = i.height;
                    t.drawImage(e, n, s, r, a)
                } else
                    this.canvas.width = this.container.offsetWidth * this.devicePixelRatio,
                    this.canvas.style.width = this.container.offsetWidth + "px",
                    this.canvas.height = this.container.offsetWidth * this.devicePixelRatio / e.width * e.height,
                    this.canvas.style.height = this.container.offsetWidth / e.width * e.height + "px",
                    t.drawImage(e, 0, 0, this.canvas.width, this.canvas.height)
            }
        }, {
            key: "updatePercentageInLoader",
            value: function(e) {
                this.loader && (this.loader.style.width = e + "%"),
                this.view360Icon && (this.view360Icon.innerText = e + "%")
            }
        }, {
            key: "onAllImagesLoaded",
            value: function() {
                if (this.imagesLoaded = !0,
                this.container.style.cursor = "grab",
                this.removeLoader(),
                this.fullScreenView) {
                    var e = this.container.offsetHeight / this.container.offsetWidth
                      , t = this.container.offsetWidth;
                    this.ratio > e && (t = this.container.offsetHeight / this.ratio),
                    this.speedFactor = Math.floor(this.dragSpeed / 150 * 36 / this.amount * 25 * t / 1500) || 1
                } else
                    this.speedFactor = Math.floor(this.dragSpeed / 150 * 36 / this.amount * 25 * this.container.offsetWidth / 1500) || 1;
                this.autoplay && this.play(),
                this.view360Icon && (this.view360Icon.innerText = "",
                (0,
                o.setView360Icon)(this.view360Icon)),
                this.initControls()
            }
        }, {
            key: "onFirstImageLoaded",
            value: function(e) {
                var t = this;
                if (this.add360ViewIcon(),
                this.fullScreenView) {
                    this.canvas.width = window.innerWidth * this.devicePixelRatio,
                    this.canvas.style.width = window.innerWidth + "px",
                    this.canvas.height = window.innerHeight * this.devicePixelRatio,
                    this.canvas.style.height = window.innerHeight + "px";
                    var i = this.canvas.getContext("2d")
                      , n = (0,
                    o.contain)(this.canvas.width, this.canvas.height, e.target.width, e.target.height)
                      , s = n.offsetX
                      , r = n.offsetY
                      , a = n.width
                      , c = n.height;
                    i.drawImage(e.target, s, r, a, c)
                } else {
                    this.canvas.width = this.container.offsetWidth * this.devicePixelRatio,
                    this.canvas.style.width = this.container.offsetWidth + "px",
                    this.canvas.height = this.container.offsetWidth * this.devicePixelRatio / e.target.width * e.target.height,
                    this.canvas.style.height = this.container.offsetWidth / e.target.width * e.target.height + "px",
                    this.canvas.getContext("2d").drawImage(e.target, 0, 0, this.canvas.width, this.canvas.height)
                }
                this.lazyload && !this.fullScreenView && this.images.forEach((function(e, i) {
                    0 !== i ? e.getAttribute("data-src") && (e.src = e.getAttribute("data-src")) : t.innerBox.removeChild(t.lazyloadInitImage)
                }
                )),
                this.ratio && (this.container.style.minHeight = "auto"),
                this.magnifier && !this.fullScreenView && this.addMagnifier(),
                this.boxShadow && !this.fullScreenView && this.addBoxShadow(),
                this.bottomCircle && !this.fullScreenView && this.add360ViewCircleIcon(),
                this.fullScreen && !this.fullScreenView ? this.addFullScreenIcon() : this.fullScreenView && this.addCloseFullScreenView()
            }
        }, {
            key: "onImageLoad",
            value: function(e, t) {
                var i = Math.round(this.loadedImages / this.amount * 100);
                this.loadedImages += 1,
                this.updatePercentageInLoader(i),
                this.loadedImages === this.amount ? this.onAllImagesLoaded(t) : 0 === e && this.onFirstImageLoaded(t)
            }
        }, {
            key: "addCloseFullScreenView",
            value: function() {
                var e = document.createElement("div");
                (0,
                o.setCloseFullScreenViewStyles)(e),
                e.onclick = this.closeFullScreenModal.bind(this),
                this.innerBox.appendChild(e)
            }
        }, {
            key: "add360ViewIcon",
            value: function() {
                var e = document.createElement("div");
                (0,
                o.set360ViewIconStyles)(e),
                e.innerText = "0%",
                this.view360Icon = e,
                this.innerBox.appendChild(e)
            }
        }, {
            key: "addFullScreenIcon",
            value: function() {
                var e = document.createElement("div");
                (0,
                o.setFullScreenIconStyles)(e),
                e.onclick = this.openFullScreenModal.bind(this),
                this.innerBox.appendChild(e)
            }
        }, {
            key: "addMagnifier",
            value: function() {
                var e = document.createElement("div");
                (0,
                o.setMagnifyIconStyles)(e, this.fullScreen),
                e.onclick = this.magnify.bind(this),
                this.innerBox.appendChild(e)
            }
        }, {
            key: "getOriginalSrc",
            value: function() {
                var e = this.images[this.activeImage - 1]
                  , t = e.src.lastIndexOf("//");
                return t > 10 ? e.src.slice(t) : e.src
            }
        }, {
            key: "magnify",
            value: function() {
                var e = this
                  , t = new Image
                  , i = this.getOriginalSrc();
                t.src = i,
                t.onload = function() {
                    e.glass && (e.glass.style.cursor = "none")
                }
                ,
                this.glass = document.createElement("div"),
                this.container.style.overflow = "hidden",
                (0,
                o.magnify)(this.container, i, this.glass, this.magnifier || 3)
            }
        }, {
            key: "closeMagnifier",
            value: function() {
                this.glass && (this.container.style.overflow = "visible",
                this.container.removeChild(this.glass),
                this.glass = null)
            }
        }, {
            key: "openFullScreenModal",
            value: function() {
                var t = document.createElement("div");
                (0,
                o.setFullScreenModalStyles)(t);
                var i = this.container.cloneNode()
                  , n = this.images[0]
                  , s = n.height / n.width;
                i.style.height = "100%",
                i.style.maxHeight = "100%",
                t.appendChild(i),
                window.document.body.appendChild(t),
                new e(i,!0,s)
            }
        }, {
            key: "closeFullScreenModal",
            value: function() {
                document.body.removeChild(this.container.parentNode)
            }
        }, {
            key: "add360ViewCircleIcon",
            value: function() {
                var e = new Image;
                (0,
                o.set360ViewCircleIconStyles)(e, this.bottomCircleOffset),
                this.view360CircleIcon = e,
                this.innerBox.appendChild(e)
            }
        }, {
            key: "hide360ViewCircleIcon",
            value: function() {
                this.view360CircleIcon && (this.view360CircleIcon.style.opacity = "0")
            }
        }, {
            key: "show360ViewCircleIcon",
            value: function() {
                this.view360CircleIcon && (this.view360CircleIcon.style.opacity = "1")
            }
        }, {
            key: "remove360ViewCircleIcon",
            value: function() {
                this.view360CircleIcon && (this.innerBox.removeChild(this.view360CircleIcon),
                this.view360CircleIcon = null)
            }
        }, {
            key: "addLoader",
            value: function() {
                var e = document.createElement("div");
                (0,
                o.setLoaderStyles)(e),
                this.loader = e,
                this.innerBox.appendChild(e)
            }
        }, {
            key: "addBoxShadow",
            value: function() {
                var e = document.createElement("div");
                (0,
                o.setBoxShadowStyles)(e, this.boxShadow),
                this.innerBox.appendChild(e)
            }
        }, {
            key: "removeLoader",
            value: function() {
                this.loader && (this.innerBox.removeChild(this.loader),
                this.loader = null)
            }
        }, {
            key: "remove360ViewIcon",
            value: function() {
                this.view360Icon && (this.innerBox.removeChild(this.view360Icon),
                this.view360Icon = null)
            }
        }, {
            key: "play",
            value: function() {
                var e = this;
                this.bottomCircle && this.hide360ViewCircleIcon(),
                this.remove360ViewIcon(),
                this.loopTimeoutId = window.setInterval((function() {
                    e.loop(e.reversed)
                }
                ), this.autoplaySpeed)
            }
        }, {
            key: "stop",
            value: function() {
                this.bottomCircle && this.show360ViewCircleIcon(),
                window.clearTimeout(this.loopTimeoutId)
            }
        }, {
            key: "getSrc",
            value: function(e, t, i, n, s) {
                var r = s.ciSize
                  , a = s.ciToken
                  , c = s.ciOperation
                  , l = s.ciFilters
                  , u = "" + i + n;
                if (e) {
                    var h = t.offsetWidth;
                    if (this.fullScreenView) {
                        var d = t.offsetHeight / t.offsetWidth;
                        this.ratio > d && (h = t.offsetHeight / this.ratio)
                    }
                    u = "https://" + a + ".cloudimg.io/" + c + "/" + (0,
                    o.getSizeAccordingToPixelRatio)(r || (0,
                    o.getResponsiveWidthOfContainer)(h)) + "/" + l + "/" + u
                }
                return u
            }
        }, {
            key: "preloadImages",
            value: function(e, t, i, n, s, r, a) {
                var c = this;
                if (this.imageList)
                    try {
                        var l = JSON.parse(this.imageList);
                        this.amount = l.length,
                        l.forEach((function(e, t) {
                            var o = /(http(s?)):\/\//gi.test(e) ? "" : c.folder
                              , l = c.getSrc(r, s, o, e, a);
                            c.addImage(l, i, n, t)
                        }
                        ))
                    } catch (e) {
                        console.error("Wrong format in image-list attribute: " + e.message)
                    }
                else
                    [].concat(function(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, i = Array(e.length); t < e.length; t++)
                                i[t] = e[t];
                            return i
                        }
                        return Array.from(e)
                    }(new Array(e))).map((function(e, s) {
                        var r = (0,
                        o.pad)(s + 1, c.indexZeroBase)
                          , a = t.replace("{index}", r);
                        c.addImage(a, i, n, s)
                    }
                    ))
            }
        }, {
            key: "addImage",
            value: function(e, t, i, n) {
                var o = new Image;
                t && !this.fullScreenView ? (o.setAttribute("data-src", e),
                o.className = o.className.length ? o.className + " " + i : i,
                0 === n && (this.lazyloadInitImage = o,
                o.style.position = "absolute",
                o.style.top = "0",
                o.style.left = "0",
                this.innerBox.appendChild(o))) : o.src = e,
                o.onload = this.onImageLoad.bind(this, n),
                o.onerror = this.onImageLoad.bind(this, n),
                this.images.push(o)
            }
        }, {
            key: "destroy",
            value: function() {
                stop();
                var e = this.container
                  , t = e.cloneNode(!0)
                  , i = t.querySelector(".cloudimage-inner-box");
                t.className = t.className.replace(" initialized", ""),
                t.style.position = "relative",
                t.style.width = "100%",
                t.style.cursor = "default",
                t.setAttribute("draggable", "false"),
                t.style.minHeight = "auto",
                t.removeChild(i),
                e.parentNode.replaceChild(t, e)
            }
        }, {
            key: "initControls",
            value: function() {
                var e = this
                  , t = this.controlReverse ? !this.spinReverse : this.spinReverse
                  , i = this.container.querySelector(".cloudimage-360-prev")
                  , n = this.container.querySelector(".cloudimage-360-next");
                if (i || n) {
                    var s = function(t) {
                        t.stopPropagation(),
                        e.onSpin(),
                        e.prev(),
                        e.loopTimeoutId = window.setInterval(e.prev.bind(e), e.autoplaySpeed)
                    }
                      , r = function(t) {
                        t.stopPropagation(),
                        e.onSpin(),
                        e.next(),
                        e.loopTimeoutId = window.setInterval(e.next.bind(e), e.autoplaySpeed)
                    }
                      , a = function() {
                        e.onFinishSpin(),
                        window.clearTimeout(e.loopTimeoutId)
                    }
                      , c = function() {
                        e.onFinishSpin(),
                        window.clearTimeout(e.loopTimeoutId)
                    };
                    i && (i.style.display = "block",
                    i.addEventListener("mousedown", t ? r : s),
                    i.addEventListener("touchstart", t ? r : s),
                    i.addEventListener("mouseup", t ? c : a),
                    i.addEventListener("touchend", t ? c : a),
                    this.prevElem = i),
                    n && (n.style.display = "block",
                    n.addEventListener("mousedown", t ? s : r),
                    n.addEventListener("touchstart", t ? s : r),
                    n.addEventListener("mouseup", t ? a : c),
                    n.addEventListener("touchend", t ? a : c),
                    this.nextElem = n),
                    (t ? n : i) && this.stopAtEdges && (0,
                    o.addClass)(t ? n : i, "not-active")
                }
            }
        }, {
            key: "addInnerBox",
            value: function() {
                this.innerBox = document.createElement("div"),
                this.innerBox.className = "cloudimage-inner-box",
                this.container.appendChild(this.innerBox)
            }
        }, {
            key: "addCanvas",
            value: function() {
                this.canvas = document.createElement("canvas"),
                this.canvas.style.width = "100%",
                this.canvas.style.fontSize = "0",
                this.ratio && (this.container.style.minHeight = this.container.offsetWidth * this.ratio + "px",
                this.canvas.height = parseInt(this.container.style.minHeight)),
                this.innerBox.appendChild(this.canvas)
            }
        }, {
            key: "attachEvents",
            value: function(e, t, i) {
                e && (this.container.addEventListener("mousedown", this.mousedown.bind(this)),
                this.container.addEventListener("mouseup", this.mouseup.bind(this)),
                this.container.addEventListener("mousemove", this.mousemove.bind(this))),
                t && (this.container.addEventListener("touchstart", this.touchstart.bind(this), {
                    passive: !0
                }),
                this.container.addEventListener("touchend", this.touchend.bind(this), {
                    passive: !0
                }),
                this.container.addEventListener("touchmove", this.touchmove.bind(this))),
                i ? (document.addEventListener("keydown", this.keydown.bind(this)),
                document.addEventListener("keyup", this.keyup.bind(this))) : document.addEventListener("keydown", this.keydownGeneral.bind(this))
            }
        }, {
            key: "applyStylesToContainer",
            value: function() {
                this.container.style.position = "relative",
                this.container.style.width = "100%",
                this.container.style.cursor = "wait",
                this.container.setAttribute("draggable", "false"),
                this.container.className = this.container.className + " initialized"
            }
        }, {
            key: "init",
            value: function(e) {
                var t = (0,
                o.get360ViewProps)(e)
                  , i = t.folder
                  , n = t.filename
                  , s = t.imageList
                  , r = t.indexZeroBase
                  , a = t.amount
                  , c = t.draggable
                  , l = void 0 === c || c
                  , u = t.swipeable
                  , h = void 0 === u || u
                  , d = t.keys
                  , f = t.bottomCircle
                  , v = t.bottomCircleOffset
                  , p = t.boxShadow
                  , y = t.autoplay
                  , g = t.speed
                  , m = t.autoplayReverse
                  , w = t.fullScreen
                  , x = t.magnifier
                  , b = t.ratio
                  , I = t.responsive
                  , S = t.ciToken
                  , C = t.ciSize
                  , k = t.ciOperation
                  , E = t.ciFilters
                  , L = t.lazyload
                  , O = t.lazySelector
                  , A = t.spinReverse
                  , M = t.dragSpeed
                  , P = t.stopAtEdges
                  , V = t.controlReverse
                  , R = {
                    ciSize: C,
                    ciToken: S,
                    ciOperation: k,
                    ciFilters: E
                };
                this.addInnerBox(),
                this.addLoader(),
                this.folder = i,
                this.filename = n,
                this.imageList = s,
                this.indexZeroBase = r,
                this.amount = a,
                this.bottomCircle = f,
                this.bottomCircleOffset = v,
                this.boxShadow = p,
                this.autoplay = y && !this.isMobile,
                this.speed = g,
                this.reversed = m,
                this.fullScreen = w,
                this.magnifier = !(this.isMobile || !x) && x,
                this.lazyload = L,
                this.ratio = b,
                this.spinReverse = A,
                this.controlReverse = V,
                this.dragSpeed = M,
                this.autoplaySpeed = 36 * this.speed / this.amount,
                this.stopAtEdges = P,
                this.applyStylesToContainer(),
                this.addCanvas();
                var j = this.getSrc(I, e, i, n, R);
                this.preloadImages(a, j, L, O, e, I, R),
                this.attachEvents(l, h, d)
            }
        }]),
        e
    }();
    t.default = s
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n, o = function(e, t) {
        var i = s(e, t)
          , n = s(e, "data-" + t);
        return null !== i && "false" !== i || null !== n && "false" !== n
    }, s = function(e, t) {
        return e.getAttribute(t)
    }, r = (n = !0,
    function(e, t, i, o) {
        var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1
          , r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .5
          , a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : .5
          , c = i / o
          , l = e / t
          , u = e * s
          , h = t * s;
        return (n ? c > l : c < l) ? h = u / c : u = h * c,
        {
            width: u,
            height: h,
            offsetX: (e - u) * r,
            offsetY: (t - h) * a
        }
    }
    );
    t.get360ViewProps = function(e) {
        return {
            folder: s(e, "folder") || s(e, "data-folder") || "/",
            filename: s(e, "filename") || s(e, "data-filename") || "image-{index}.jpg",
            imageList: s(e, "image-list") || s(e, "data-image-list") || null,
            indexZeroBase: parseInt(s(e, "index-zero-base") || s(e, "data-index-zero-base") || 0, 10),
            amount: parseInt(s(e, "amount") || s(e, "data-amount") || 36, 10),
            speed: parseInt(s(e, "speed") || s(e, "data-speed") || 80, 10),
            dragSpeed: parseInt(s(e, "drag-speed") || s(e, "data-drag-speed") || 150, 10),
            keys: o(e, "keys"),
            boxShadow: s(e, "box-shadow") || s(e, "data-box-shadow"),
            autoplay: o(e, "autoplay"),
            autoplayReverse: o(e, "autoplay-reverse"),
            bottomCircle: o(e, "bottom-circle"),
            fullScreen: o(e, "full-screen"),
            magnifier: (null !== s(e, "magnifier") || null !== s(e, "data-magnifier")) && parseInt(s(e, "magnifier") || s(e, "data-magnifier"), 10),
            bottomCircleOffset: parseInt(s(e, "bottom-circle-offset") || s(e, "data-bottom-circle-offset") || 5, 10),
            ratio: parseFloat(s(e, "ratio") || s(e, "data-ratio") || 0) || !1,
            responsive: o(e, "responsive"),
            ciToken: s(e, "responsive") || s(e, "data-responsive") || "demo",
            ciSize: s(e, "size") || s(e, "data-size"),
            ciOperation: s(e, "operation") || s(e, "data-operation") || "width",
            ciFilters: s(e, "filters") || s(e, "data-filters") || "q35",
            lazyload: o(e, "lazyload"),
            lazySelector: s(e, "lazyload-selector") || s(e, "data-lazyload-selector") || "lazyload",
            spinReverse: o(e, "spin-reverse"),
            controlReverse: o(e, "control-reverse"),
            stopAtEdges: o(e, "stop-at-edges")
        }
    }
    ,
    t.set360ViewIconStyles = function(e) {
        e.style.position = "absolute",
        e.style.top = "0",
        e.style.bottom = "0",
        e.style.left = "0",
        e.style.right = "0",
        e.style.width = "100px",
        e.style.height = "100px",
        e.style.margin = "auto",
        e.style.backgroundColor = "rgba(255,255,255,0.8)",
        e.style.borderRadius = "50%",
        e.style.boxShadow = "rgb(255, 255, 255, 0.5) 0px 0px 4px",
        e.style.transition = "0.5s all",
        e.style.color = "rgb(80,80,80)",
        e.style.textAlign = "center",
        e.style.lineHeight = "100px",
        e.style.zIndex = "2"
    }
    ,
    t.set360ViewCircleIconStyles = function(e, t) {
        e.src = "https://scaleflex.ultrafast.io/https://scaleflex.api.airstore.io/v1/get/_/2236d56f-914a-5a8b-a3ae-f7bde1c50000/360.svg",
        e.style.position = "absolute",
        e.style.top = "auto",
        e.style.bottom = t + "%",
        e.style.left = "0",
        e.style.right = "0",
        e.style.width = "80%",
        e.style.height = "auto",
        e.style.margin = "auto",
        e.style.transition = "0.5s all",
        e.style.zIndex = "2"
    }
    ,
    t.setLoaderStyles = function(e) {
        e.className = "cloudimage-360-loader",
        e.style.position = "absolute",
        e.style.zIndex = "100",
        e.style.top = "0",
        e.style.left = "0",
        e.style.right = "0",
        e.style.width = "0%",
        e.style.height = "8px",
        e.style.background = "rgb(165,175,184)"
    }
    ,
    t.setBoxShadowStyles = function(e, t) {
        e.className = "cloudimage-360-box-shadow",
        e.style.position = "absolute",
        e.style.zIndex = "99",
        e.style.top = "0",
        e.style.left = "0",
        e.style.right = "0",
        e.style.bottom = "0",
        e.style.boxShadow = t
    }
    ,
    t.setView360Icon = function(e) {
        e.style.background = "rgba(255,255,255,0.8) url('https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/filerobot/js-cloudimage-360-view/360_view.svg') 50% 50% / contain no-repeat"
    }
    ,
    t.magnify = function(e, t, i, n) {
        var o, s;
        function r(t) {
            var r, a = void 0, c = void 0;
            t.preventDefault(),
            r = function(t) {
                var i, n = 0, o = 0;
                return t = t || window.event,
                i = e.getBoundingClientRect(),
                n = t.pageX - i.left,
                o = t.pageY - i.top,
                n -= window.pageXOffset,
                o -= window.pageYOffset,
                {
                    x: n,
                    y: o
                }
            }(t),
            a = r.x,
            c = r.y,
            a > e.offsetWidth - o / n && (a = e.offsetWidth - o / n),
            a < o / n && (a = o / n),
            c > e.offsetHeight - s / n && (c = e.offsetHeight - s / n),
            c < s / n && (c = s / n),
            i.style.left = a - o + "px",
            i.style.top = c - s + "px",
            i.style.backgroundPosition = "-" + (a * n - o + 3) + "px -" + (c * n - s + 3) + "px"
        }
        i.setAttribute("class", "img-magnifier-glass"),
        e.prepend(i),
        i.style.backgroundColor = "#fff",
        i.style.backgroundImage = "url('" + t + "')",
        i.style.backgroundRepeat = "no-repeat",
        i.style.backgroundSize = e.offsetWidth * n + "px " + e.offsetHeight * n + "px",
        i.style.position = "absolute",
        i.style.border = "3px solid #000",
        i.style.borderRadius = "50%",
        i.style.cursor = "wait",
        i.style.lineHeight = "200px",
        i.style.textAlign = "center",
        i.style.zIndex = "1000",
        i.style.width = "250px",
        i.style.height = "250px",
        i.style.top = "-75px",
        i.style.right = "-85px",
        o = i.offsetWidth / 2,
        s = i.offsetHeight / 2,
        i.addEventListener("mousemove", r),
        e.addEventListener("mousemove", r),
        i.addEventListener("touchmove", r),
        e.addEventListener("touchmove", r)
    }
    ,
    t.setMagnifyIconStyles = function(e, t) {
        e.style.position = "absolute",
        e.style.top = t ? "35px" : "5px",
        e.style.right = "5px",
        e.style.width = "25px",
        e.style.height = "25px",
        e.style.zIndex = "101",
        e.style.cursor = "pointer",
        e.style.background = "url('https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/filerobot/js-cloudimage-360-view/loupe.svg') 50% 50% / cover no-repeat"
    }
    ,
    t.setFullScreenModalStyles = function(e) {
        e.style.position = "fixed",
        e.style.top = "0",
        e.style.bottom = "0",
        e.style.left = "0",
        e.style.right = "0",
        e.style.width = "100%",
        e.style.height = "100%",
        e.style.zIndex = "999",
        e.style.background = "#fff"
    }
    ,
    t.setFullScreenIconStyles = function(e) {
        e.style.position = "absolute",
        e.style.top = "5px",
        e.style.right = "5px",
        e.style.width = "25px",
        e.style.height = "25px",
        e.style.zIndex = "101",
        e.style.cursor = "pointer",
        e.style.background = "url('https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/filerobot/js-cloudimage-360-view/full_screen.svg') 50% 50% / cover no-repeat"
    }
    ,
    t.setCloseFullScreenViewStyles = function(e) {
        e.style.position = "absolute",
        e.style.top = "5px",
        e.style.right = "5px",
        e.style.width = "25px",
        e.style.height = "25px",
        e.style.zIndex = "101",
        e.style.cursor = "pointer",
        e.style.background = "url('https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/filerobot/js-cloudimage-360-view/cross.svg') 50% 50% / cover no-repeat"
    }
    ,
    t.getResponsiveWidthOfContainer = function(e) {
        return (t = e) <= 25 ? "25" : t <= 50 ? "50" : (100 * Math.ceil(t / 100)).toString();
        var t
    }
    ,
    t.getSizeAccordingToPixelRatio = function(e) {
        var t = e.toString().split("x")
          , i = [];
        return [].forEach.call(t, (function(e) {
            i.push(e * Math.round(window.devicePixelRatio || 1))
        }
        )),
        i.join("x")
    }
    ,
    t.contain = r,
    t.addClass = function(e, t) {
        e.classList ? e.classList.add(t) : e.className += " " + t
    }
    ,
    t.removeClass = function(e, t) {
        e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)","gi"), " ")
    }
    ,
    t.pad = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (e += "").length >= t ? e : new Array(t - e.length + 1).join("0") + e
    }
}
]);