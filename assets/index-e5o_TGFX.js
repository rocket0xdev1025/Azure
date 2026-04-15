var dh = (e) => {
  throw TypeError(e);
};
var _l = (e, t, n) => t.has(e) || dh("Cannot " + n);
var M = (e, t, n) => (
    _l(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  J = (e, t, n) =>
    t.has(e)
      ? dh("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  G = (e, t, n, r) => (
    _l(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  Le = (e, t, n) => (_l(e, t, "access private method"), n);
var ms = (e, t, n, r) => ({
  set _(o) {
    G(e, t, o, n);
  },
  get _() {
    return M(e, t, r);
  },
});
function w1(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Dg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Lg = { exports: {} },
  Ja = {},
  Og = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var es = Symbol.for("react.element"),
  S1 = Symbol.for("react.portal"),
  C1 = Symbol.for("react.fragment"),
  E1 = Symbol.for("react.strict_mode"),
  T1 = Symbol.for("react.profiler"),
  b1 = Symbol.for("react.provider"),
  P1 = Symbol.for("react.context"),
  k1 = Symbol.for("react.forward_ref"),
  A1 = Symbol.for("react.suspense"),
  R1 = Symbol.for("react.memo"),
  M1 = Symbol.for("react.lazy"),
  fh = Symbol.iterator;
function N1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (fh && e[fh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var jg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ig = Object.assign,
  Fg = {};
function zo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Fg),
    (this.updater = n || jg);
}
zo.prototype.isReactComponent = {};
zo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
zo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Vg() {}
Vg.prototype = zo.prototype;
function md(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Fg),
    (this.updater = n || jg);
}
var gd = (md.prototype = new Vg());
gd.constructor = md;
Ig(gd, zo.prototype);
gd.isPureReactComponent = !0;
var hh = Array.isArray,
  _g = Object.prototype.hasOwnProperty,
  yd = { current: null },
  zg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bg(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      _g.call(t, r) && !zg.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: es,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: yd.current,
  };
}
function D1(e, t) {
  return {
    $$typeof: es,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function vd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === es;
}
function L1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ph = /\/+/g;
function zl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? L1("" + e.key)
    : t.toString(36);
}
function Ws(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case es:
          case S1:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + zl(s, 0) : r),
      hh(o)
        ? ((n = ""),
          e != null && (n = e.replace(ph, "$&/") + "/"),
          Ws(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (vd(o) &&
            (o = D1(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(ph, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), hh(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + zl(i, a);
      s += Ws(i, t, n, l, o);
    }
  else if (((l = N1(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + zl(i, a++)), (s += Ws(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function gs(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Ws(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function O1(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var He = { current: null },
  Hs = { transition: null },
  j1 = {
    ReactCurrentDispatcher: He,
    ReactCurrentBatchConfig: Hs,
    ReactCurrentOwner: yd,
  };
function $g() {
  throw Error("act(...) is not supported in production builds of React.");
}
X.Children = {
  map: gs,
  forEach: function (e, t, n) {
    gs(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      gs(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      gs(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!vd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
X.Component = zo;
X.Fragment = C1;
X.Profiler = T1;
X.PureComponent = md;
X.StrictMode = E1;
X.Suspense = A1;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j1;
X.act = $g;
X.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ig({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = yd.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      _g.call(t, l) &&
        !zg.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: es, type: e.type, key: o, ref: i, props: r, _owner: s };
};
X.createContext = function (e) {
  return (
    (e = {
      $$typeof: P1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: b1, _context: e }),
    (e.Consumer = e)
  );
};
X.createElement = Bg;
X.createFactory = function (e) {
  var t = Bg.bind(null, e);
  return (t.type = e), t;
};
X.createRef = function () {
  return { current: null };
};
X.forwardRef = function (e) {
  return { $$typeof: k1, render: e };
};
X.isValidElement = vd;
X.lazy = function (e) {
  return { $$typeof: M1, _payload: { _status: -1, _result: e }, _init: O1 };
};
X.memo = function (e, t) {
  return { $$typeof: R1, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function (e) {
  var t = Hs.transition;
  Hs.transition = {};
  try {
    e();
  } finally {
    Hs.transition = t;
  }
};
X.unstable_act = $g;
X.useCallback = function (e, t) {
  return He.current.useCallback(e, t);
};
X.useContext = function (e) {
  return He.current.useContext(e);
};
X.useDebugValue = function () {};
X.useDeferredValue = function (e) {
  return He.current.useDeferredValue(e);
};
X.useEffect = function (e, t) {
  return He.current.useEffect(e, t);
};
X.useId = function () {
  return He.current.useId();
};
X.useImperativeHandle = function (e, t, n) {
  return He.current.useImperativeHandle(e, t, n);
};
X.useInsertionEffect = function (e, t) {
  return He.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function (e, t) {
  return He.current.useLayoutEffect(e, t);
};
X.useMemo = function (e, t) {
  return He.current.useMemo(e, t);
};
X.useReducer = function (e, t, n) {
  return He.current.useReducer(e, t, n);
};
X.useRef = function (e) {
  return He.current.useRef(e);
};
X.useState = function (e) {
  return He.current.useState(e);
};
X.useSyncExternalStore = function (e, t, n) {
  return He.current.useSyncExternalStore(e, t, n);
};
X.useTransition = function () {
  return He.current.useTransition();
};
X.version = "18.3.1";
Og.exports = X;
var w = Og.exports;
const L = Dg(w),
  Ug = w1({ __proto__: null, default: L }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var I1 = w,
  F1 = Symbol.for("react.element"),
  V1 = Symbol.for("react.fragment"),
  _1 = Object.prototype.hasOwnProperty,
  z1 = I1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  B1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wg(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) _1.call(t, r) && !B1.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: F1,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: z1.current,
  };
}
Ja.Fragment = V1;
Ja.jsx = Wg;
Ja.jsxs = Wg;
Lg.exports = Ja;
var C = Lg.exports,
  Hg = { exports: {} },
  ut = {},
  Kg = { exports: {} },
  Gg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(k, R) {
    var I = k.length;
    k.push(R);
    e: for (; 0 < I; ) {
      var $ = (I - 1) >>> 1,
        B = k[$];
      if (0 < o(B, R)) (k[$] = R), (k[I] = B), (I = $);
      else break e;
    }
  }
  function n(k) {
    return k.length === 0 ? null : k[0];
  }
  function r(k) {
    if (k.length === 0) return null;
    var R = k[0],
      I = k.pop();
    if (I !== R) {
      k[0] = I;
      e: for (var $ = 0, B = k.length, Y = B >>> 1; $ < Y; ) {
        var q = 2 * ($ + 1) - 1,
          ve = k[q],
          De = q + 1,
          ee = k[De];
        if (0 > o(ve, I))
          De < B && 0 > o(ee, ve)
            ? ((k[$] = ee), (k[De] = I), ($ = De))
            : ((k[$] = ve), (k[q] = I), ($ = q));
        else if (De < B && 0 > o(ee, I)) (k[$] = ee), (k[De] = I), ($ = De);
        else break e;
      }
    }
    return R;
  }
  function o(k, R) {
    var I = k.sortIndex - R.sortIndex;
    return I !== 0 ? I : k.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    h = !1,
    v = !1,
    g = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(k) {
    for (var R = n(u); R !== null; ) {
      if (R.callback === null) r(u);
      else if (R.startTime <= k)
        r(u), (R.sortIndex = R.expirationTime), t(l, R);
      else break;
      R = n(u);
    }
  }
  function S(k) {
    if (((g = !1), y(k), !v))
      if (n(l) !== null) (v = !0), z(E);
      else {
        var R = n(u);
        R !== null && H(S, R.startTime - k);
      }
  }
  function E(k, R) {
    (v = !1), g && ((g = !1), m(P), (P = -1)), (h = !0);
    var I = f;
    try {
      for (
        y(R), d = n(l);
        d !== null && (!(d.expirationTime > R) || (k && !F()));

      ) {
        var $ = d.callback;
        if (typeof $ == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var B = $(d.expirationTime <= R);
          (R = e.unstable_now()),
            typeof B == "function" ? (d.callback = B) : d === n(l) && r(l),
            y(R);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Y = !0;
      else {
        var q = n(u);
        q !== null && H(S, q.startTime - R), (Y = !1);
      }
      return Y;
    } finally {
      (d = null), (f = I), (h = !1);
    }
  }
  var T = !1,
    b = null,
    P = -1,
    N = 5,
    A = -1;
  function F() {
    return !(e.unstable_now() - A < N);
  }
  function j() {
    if (b !== null) {
      var k = e.unstable_now();
      A = k;
      var R = !0;
      try {
        R = b(!0, k);
      } finally {
        R ? U() : ((T = !1), (b = null));
      }
    } else T = !1;
  }
  var U;
  if (typeof p == "function")
    U = function () {
      p(j);
    };
  else if (typeof MessageChannel < "u") {
    var O = new MessageChannel(),
      W = O.port2;
    (O.port1.onmessage = j),
      (U = function () {
        W.postMessage(null);
      });
  } else
    U = function () {
      x(j, 0);
    };
  function z(k) {
    (b = k), T || ((T = !0), U());
  }
  function H(k, R) {
    P = x(function () {
      k(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (k) {
      k.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || h || ((v = !0), z(E));
    }),
    (e.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (N = 0 < k ? Math.floor(1e3 / k) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (k) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = f;
      }
      var I = f;
      f = R;
      try {
        return k();
      } finally {
        f = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (k, R) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var I = f;
      f = k;
      try {
        return R();
      } finally {
        f = I;
      }
    }),
    (e.unstable_scheduleCallback = function (k, R, I) {
      var $ = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? $ + I : $))
          : (I = $),
        k)
      ) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return (
        (B = I + B),
        (k = {
          id: c++,
          callback: R,
          priorityLevel: k,
          startTime: I,
          expirationTime: B,
          sortIndex: -1,
        }),
        I > $
          ? ((k.sortIndex = I),
            t(u, k),
            n(l) === null &&
              k === n(u) &&
              (g ? (m(P), (P = -1)) : (g = !0), H(S, I - $)))
          : ((k.sortIndex = B), t(l, k), v || h || ((v = !0), z(E))),
        k
      );
    }),
    (e.unstable_shouldYield = F),
    (e.unstable_wrapCallback = function (k) {
      var R = f;
      return function () {
        var I = f;
        f = R;
        try {
          return k.apply(this, arguments);
        } finally {
          f = I;
        }
      };
    });
})(Gg);
Kg.exports = Gg;
var $1 = Kg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var U1 = w,
  lt = $1;
function D(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Qg = new Set(),
  ki = {};
function Vr(e, t) {
  Ao(e, t), Ao(e + "Capture", t);
}
function Ao(e, t) {
  for (ki[e] = t, e = 0; e < t.length; e++) Qg.add(t[e]);
}
var fn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Iu = Object.prototype.hasOwnProperty,
  W1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  mh = {},
  gh = {};
function H1(e) {
  return Iu.call(gh, e)
    ? !0
    : Iu.call(mh, e)
    ? !1
    : W1.test(e)
    ? (gh[e] = !0)
    : ((mh[e] = !0), !1);
}
function K1(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function G1(e, t, n, r) {
  if (t === null || typeof t > "u" || K1(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ke(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new Ke(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ne[t] = new Ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ne[e] = new Ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ne[e] = new Ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new Ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ne[e] = new Ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ne[e] = new Ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ne[e] = new Ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ne[e] = new Ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var xd = /[\-:]([a-z])/g;
function wd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(xd, wd);
    Ne[t] = new Ke(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(xd, wd);
    Ne[t] = new Ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(xd, wd);
  Ne[t] = new Ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ne[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new Ke(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ne[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Sd(e, t, n, r) {
  var o = Ne.hasOwnProperty(t) ? Ne[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (G1(t, n, o, r) && (n = null),
    r || o === null
      ? H1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var vn = U1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ys = Symbol.for("react.element"),
  Yr = Symbol.for("react.portal"),
  Xr = Symbol.for("react.fragment"),
  Cd = Symbol.for("react.strict_mode"),
  Fu = Symbol.for("react.profiler"),
  Yg = Symbol.for("react.provider"),
  Xg = Symbol.for("react.context"),
  Ed = Symbol.for("react.forward_ref"),
  Vu = Symbol.for("react.suspense"),
  _u = Symbol.for("react.suspense_list"),
  Td = Symbol.for("react.memo"),
  Nn = Symbol.for("react.lazy"),
  qg = Symbol.for("react.offscreen"),
  yh = Symbol.iterator;
function qo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (yh && e[yh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var pe = Object.assign,
  Bl;
function li(e) {
  if (Bl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Bl = (t && t[1]) || "";
    }
  return (
    `
` +
    Bl +
    e
  );
}
var $l = !1;
function Ul(e, t) {
  if (!e || $l) return "";
  $l = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    ($l = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? li(e) : "";
}
function Q1(e) {
  switch (e.tag) {
    case 5:
      return li(e.type);
    case 16:
      return li("Lazy");
    case 13:
      return li("Suspense");
    case 19:
      return li("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ul(e.type, !1)), e;
    case 11:
      return (e = Ul(e.type.render, !1)), e;
    case 1:
      return (e = Ul(e.type, !0)), e;
    default:
      return "";
  }
}
function zu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Xr:
      return "Fragment";
    case Yr:
      return "Portal";
    case Fu:
      return "Profiler";
    case Cd:
      return "StrictMode";
    case Vu:
      return "Suspense";
    case _u:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Xg:
        return (e.displayName || "Context") + ".Consumer";
      case Yg:
        return (e._context.displayName || "Context") + ".Provider";
      case Ed:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Td:
        return (
          (t = e.displayName || null), t !== null ? t : zu(e.type) || "Memo"
        );
      case Nn:
        (t = e._payload), (e = e._init);
        try {
          return zu(e(t));
        } catch {}
    }
  return null;
}
function Y1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return zu(t);
    case 8:
      return t === Cd ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Zn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Zg(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function X1(e) {
  var t = Zg(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function vs(e) {
  e._valueTracker || (e._valueTracker = X1(e));
}
function Jg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Zg(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ha(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Bu(e, t) {
  var n = t.checked;
  return pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function vh(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Zn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ey(e, t) {
  (t = t.checked), t != null && Sd(e, "checked", t, !1);
}
function $u(e, t) {
  ey(e, t);
  var n = Zn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Uu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Uu(e, t.type, Zn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function xh(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Uu(e, t, n) {
  (t !== "number" || ha(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ui = Array.isArray;
function co(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Zn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Wu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(D(91));
  return pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function wh(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(D(92));
      if (ui(n)) {
        if (1 < n.length) throw Error(D(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Zn(n) };
}
function ty(e, t) {
  var n = Zn(t.value),
    r = Zn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Sh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ny(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Hu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ny(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var xs,
  ry = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        xs = xs || document.createElement("div"),
          xs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = xs.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ai(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var hi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  q1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(hi).forEach(function (e) {
  q1.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (hi[t] = hi[e]);
  });
});
function oy(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (hi.hasOwnProperty(e) && hi[e])
    ? ("" + t).trim()
    : t + "px";
}
function iy(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = oy(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Z1 = pe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ku(e, t) {
  if (t) {
    if (Z1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(D(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(D(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(D(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(D(62));
  }
}
function Gu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Qu = null;
function bd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Yu = null,
  fo = null,
  ho = null;
function Ch(e) {
  if ((e = rs(e))) {
    if (typeof Yu != "function") throw Error(D(280));
    var t = e.stateNode;
    t && ((t = ol(t)), Yu(e.stateNode, e.type, t));
  }
}
function sy(e) {
  fo ? (ho ? ho.push(e) : (ho = [e])) : (fo = e);
}
function ay() {
  if (fo) {
    var e = fo,
      t = ho;
    if (((ho = fo = null), Ch(e), t)) for (e = 0; e < t.length; e++) Ch(t[e]);
  }
}
function ly(e, t) {
  return e(t);
}
function uy() {}
var Wl = !1;
function cy(e, t, n) {
  if (Wl) return e(t, n);
  Wl = !0;
  try {
    return ly(e, t, n);
  } finally {
    (Wl = !1), (fo !== null || ho !== null) && (uy(), ay());
  }
}
function Ri(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ol(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(D(231, t, typeof n));
  return n;
}
var Xu = !1;
if (fn)
  try {
    var Zo = {};
    Object.defineProperty(Zo, "passive", {
      get: function () {
        Xu = !0;
      },
    }),
      window.addEventListener("test", Zo, Zo),
      window.removeEventListener("test", Zo, Zo);
  } catch {
    Xu = !1;
  }
function J1(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var pi = !1,
  pa = null,
  ma = !1,
  qu = null,
  eS = {
    onError: function (e) {
      (pi = !0), (pa = e);
    },
  };
function tS(e, t, n, r, o, i, s, a, l) {
  (pi = !1), (pa = null), J1.apply(eS, arguments);
}
function nS(e, t, n, r, o, i, s, a, l) {
  if ((tS.apply(this, arguments), pi)) {
    if (pi) {
      var u = pa;
      (pi = !1), (pa = null);
    } else throw Error(D(198));
    ma || ((ma = !0), (qu = u));
  }
}
function _r(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function dy(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Eh(e) {
  if (_r(e) !== e) throw Error(D(188));
}
function rS(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = _r(e)), t === null)) throw Error(D(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Eh(o), e;
        if (i === r) return Eh(o), t;
        i = i.sibling;
      }
      throw Error(D(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(D(189));
      }
    }
    if (n.alternate !== r) throw Error(D(190));
  }
  if (n.tag !== 3) throw Error(D(188));
  return n.stateNode.current === n ? e : t;
}
function fy(e) {
  return (e = rS(e)), e !== null ? hy(e) : null;
}
function hy(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = hy(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var py = lt.unstable_scheduleCallback,
  Th = lt.unstable_cancelCallback,
  oS = lt.unstable_shouldYield,
  iS = lt.unstable_requestPaint,
  ye = lt.unstable_now,
  sS = lt.unstable_getCurrentPriorityLevel,
  Pd = lt.unstable_ImmediatePriority,
  my = lt.unstable_UserBlockingPriority,
  ga = lt.unstable_NormalPriority,
  aS = lt.unstable_LowPriority,
  gy = lt.unstable_IdlePriority,
  el = null,
  Xt = null;
function lS(e) {
  if (Xt && typeof Xt.onCommitFiberRoot == "function")
    try {
      Xt.onCommitFiberRoot(el, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ot = Math.clz32 ? Math.clz32 : dS,
  uS = Math.log,
  cS = Math.LN2;
function dS(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((uS(e) / cS) | 0)) | 0;
}
var ws = 64,
  Ss = 4194304;
function ci(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ya(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = ci(a)) : ((i &= s), i !== 0 && (r = ci(i)));
  } else (s = n & ~o), s !== 0 ? (r = ci(s)) : i !== 0 && (r = ci(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ot(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function fS(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function hS(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - Ot(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & n) || a & r) && (o[s] = fS(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Zu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function yy() {
  var e = ws;
  return (ws <<= 1), !(ws & 4194240) && (ws = 64), e;
}
function Hl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ts(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ot(t)),
    (e[t] = n);
}
function pS(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Ot(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function kd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ot(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var te = 0;
function vy(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var xy,
  Ad,
  wy,
  Sy,
  Cy,
  Ju = !1,
  Cs = [],
  Wn = null,
  Hn = null,
  Kn = null,
  Mi = new Map(),
  Ni = new Map(),
  Ln = [],
  mS =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function bh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Wn = null;
      break;
    case "dragenter":
    case "dragleave":
      Hn = null;
      break;
    case "mouseover":
    case "mouseout":
      Kn = null;
      break;
    case "pointerover":
    case "pointerout":
      Mi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ni.delete(t.pointerId);
  }
}
function Jo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = rs(t)), t !== null && Ad(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function gS(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Wn = Jo(Wn, e, t, n, r, o)), !0;
    case "dragenter":
      return (Hn = Jo(Hn, e, t, n, r, o)), !0;
    case "mouseover":
      return (Kn = Jo(Kn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Mi.set(i, Jo(Mi.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Ni.set(i, Jo(Ni.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Ey(e) {
  var t = yr(e.target);
  if (t !== null) {
    var n = _r(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = dy(n)), t !== null)) {
          (e.blockedOn = t),
            Cy(e.priority, function () {
              wy(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ks(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ec(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Qu = r), n.target.dispatchEvent(r), (Qu = null);
    } else return (t = rs(n)), t !== null && Ad(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ph(e, t, n) {
  Ks(e) && n.delete(t);
}
function yS() {
  (Ju = !1),
    Wn !== null && Ks(Wn) && (Wn = null),
    Hn !== null && Ks(Hn) && (Hn = null),
    Kn !== null && Ks(Kn) && (Kn = null),
    Mi.forEach(Ph),
    Ni.forEach(Ph);
}
function ei(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ju ||
      ((Ju = !0),
      lt.unstable_scheduleCallback(lt.unstable_NormalPriority, yS)));
}
function Di(e) {
  function t(o) {
    return ei(o, e);
  }
  if (0 < Cs.length) {
    ei(Cs[0], e);
    for (var n = 1; n < Cs.length; n++) {
      var r = Cs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Wn !== null && ei(Wn, e),
      Hn !== null && ei(Hn, e),
      Kn !== null && ei(Kn, e),
      Mi.forEach(t),
      Ni.forEach(t),
      n = 0;
    n < Ln.length;
    n++
  )
    (r = Ln[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ln.length && ((n = Ln[0]), n.blockedOn === null); )
    Ey(n), n.blockedOn === null && Ln.shift();
}
var po = vn.ReactCurrentBatchConfig,
  va = !0;
function vS(e, t, n, r) {
  var o = te,
    i = po.transition;
  po.transition = null;
  try {
    (te = 1), Rd(e, t, n, r);
  } finally {
    (te = o), (po.transition = i);
  }
}
function xS(e, t, n, r) {
  var o = te,
    i = po.transition;
  po.transition = null;
  try {
    (te = 4), Rd(e, t, n, r);
  } finally {
    (te = o), (po.transition = i);
  }
}
function Rd(e, t, n, r) {
  if (va) {
    var o = ec(e, t, n, r);
    if (o === null) tu(e, t, r, xa, n), bh(e, r);
    else if (gS(o, e, t, n, r)) r.stopPropagation();
    else if ((bh(e, r), t & 4 && -1 < mS.indexOf(e))) {
      for (; o !== null; ) {
        var i = rs(o);
        if (
          (i !== null && xy(i),
          (i = ec(e, t, n, r)),
          i === null && tu(e, t, r, xa, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else tu(e, t, r, null, n);
  }
}
var xa = null;
function ec(e, t, n, r) {
  if (((xa = null), (e = bd(r)), (e = yr(e)), e !== null))
    if (((t = _r(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = dy(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (xa = e), null;
}
function Ty(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (sS()) {
        case Pd:
          return 1;
        case my:
          return 4;
        case ga:
        case aS:
          return 16;
        case gy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var zn = null,
  Md = null,
  Gs = null;
function by() {
  if (Gs) return Gs;
  var e,
    t = Md,
    n = t.length,
    r,
    o = "value" in zn ? zn.value : zn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Gs = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Qs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Es() {
  return !0;
}
function kh() {
  return !1;
}
function ct(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Es
        : kh),
      (this.isPropagationStopped = kh),
      this
    );
  }
  return (
    pe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Es));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Es));
      },
      persist: function () {},
      isPersistent: Es,
    }),
    t
  );
}
var Bo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Nd = ct(Bo),
  ns = pe({}, Bo, { view: 0, detail: 0 }),
  wS = ct(ns),
  Kl,
  Gl,
  ti,
  tl = pe({}, ns, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Dd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ti &&
            (ti && e.type === "mousemove"
              ? ((Kl = e.screenX - ti.screenX), (Gl = e.screenY - ti.screenY))
              : (Gl = Kl = 0),
            (ti = e)),
          Kl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Gl;
    },
  }),
  Ah = ct(tl),
  SS = pe({}, tl, { dataTransfer: 0 }),
  CS = ct(SS),
  ES = pe({}, ns, { relatedTarget: 0 }),
  Ql = ct(ES),
  TS = pe({}, Bo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bS = ct(TS),
  PS = pe({}, Bo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  kS = ct(PS),
  AS = pe({}, Bo, { data: 0 }),
  Rh = ct(AS),
  RS = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  MS = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  NS = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function DS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = NS[e]) ? !!t[e] : !1;
}
function Dd() {
  return DS;
}
var LS = pe({}, ns, {
    key: function (e) {
      if (e.key) {
        var t = RS[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Qs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? MS[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Dd,
    charCode: function (e) {
      return e.type === "keypress" ? Qs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Qs(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  OS = ct(LS),
  jS = pe({}, tl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Mh = ct(jS),
  IS = pe({}, ns, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Dd,
  }),
  FS = ct(IS),
  VS = pe({}, Bo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _S = ct(VS),
  zS = pe({}, tl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  BS = ct(zS),
  $S = [9, 13, 27, 32],
  Ld = fn && "CompositionEvent" in window,
  mi = null;
fn && "documentMode" in document && (mi = document.documentMode);
var US = fn && "TextEvent" in window && !mi,
  Py = fn && (!Ld || (mi && 8 < mi && 11 >= mi)),
  Nh = " ",
  Dh = !1;
function ky(e, t) {
  switch (e) {
    case "keyup":
      return $S.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ay(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var qr = !1;
function WS(e, t) {
  switch (e) {
    case "compositionend":
      return Ay(t);
    case "keypress":
      return t.which !== 32 ? null : ((Dh = !0), Nh);
    case "textInput":
      return (e = t.data), e === Nh && Dh ? null : e;
    default:
      return null;
  }
}
function HS(e, t) {
  if (qr)
    return e === "compositionend" || (!Ld && ky(e, t))
      ? ((e = by()), (Gs = Md = zn = null), (qr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Py && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var KS = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Lh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!KS[e.type] : t === "textarea";
}
function Ry(e, t, n, r) {
  sy(r),
    (t = wa(t, "onChange")),
    0 < t.length &&
      ((n = new Nd("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var gi = null,
  Li = null;
function GS(e) {
  zy(e, 0);
}
function nl(e) {
  var t = eo(e);
  if (Jg(t)) return e;
}
function QS(e, t) {
  if (e === "change") return t;
}
var My = !1;
if (fn) {
  var Yl;
  if (fn) {
    var Xl = "oninput" in document;
    if (!Xl) {
      var Oh = document.createElement("div");
      Oh.setAttribute("oninput", "return;"),
        (Xl = typeof Oh.oninput == "function");
    }
    Yl = Xl;
  } else Yl = !1;
  My = Yl && (!document.documentMode || 9 < document.documentMode);
}
function jh() {
  gi && (gi.detachEvent("onpropertychange", Ny), (Li = gi = null));
}
function Ny(e) {
  if (e.propertyName === "value" && nl(Li)) {
    var t = [];
    Ry(t, Li, e, bd(e)), cy(GS, t);
  }
}
function YS(e, t, n) {
  e === "focusin"
    ? (jh(), (gi = t), (Li = n), gi.attachEvent("onpropertychange", Ny))
    : e === "focusout" && jh();
}
function XS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return nl(Li);
}
function qS(e, t) {
  if (e === "click") return nl(t);
}
function ZS(e, t) {
  if (e === "input" || e === "change") return nl(t);
}
function JS(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ft = typeof Object.is == "function" ? Object.is : JS;
function Oi(e, t) {
  if (Ft(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Iu.call(t, o) || !Ft(e[o], t[o])) return !1;
  }
  return !0;
}
function Ih(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Fh(e, t) {
  var n = Ih(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ih(n);
  }
}
function Dy(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Dy(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ly() {
  for (var e = window, t = ha(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ha(e.document);
  }
  return t;
}
function Od(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function eC(e) {
  var t = Ly(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Dy(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Od(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Fh(n, i));
        var s = Fh(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var tC = fn && "documentMode" in document && 11 >= document.documentMode,
  Zr = null,
  tc = null,
  yi = null,
  nc = !1;
function Vh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  nc ||
    Zr == null ||
    Zr !== ha(r) ||
    ((r = Zr),
    "selectionStart" in r && Od(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (yi && Oi(yi, r)) ||
      ((yi = r),
      (r = wa(tc, "onSelect")),
      0 < r.length &&
        ((t = new Nd("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Zr))));
}
function Ts(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Jr = {
    animationend: Ts("Animation", "AnimationEnd"),
    animationiteration: Ts("Animation", "AnimationIteration"),
    animationstart: Ts("Animation", "AnimationStart"),
    transitionend: Ts("Transition", "TransitionEnd"),
  },
  ql = {},
  Oy = {};
fn &&
  ((Oy = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Jr.animationend.animation,
    delete Jr.animationiteration.animation,
    delete Jr.animationstart.animation),
  "TransitionEvent" in window || delete Jr.transitionend.transition);
function rl(e) {
  if (ql[e]) return ql[e];
  if (!Jr[e]) return e;
  var t = Jr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Oy) return (ql[e] = t[n]);
  return e;
}
var jy = rl("animationend"),
  Iy = rl("animationiteration"),
  Fy = rl("animationstart"),
  Vy = rl("transitionend"),
  _y = new Map(),
  _h =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function sr(e, t) {
  _y.set(e, t), Vr(t, [e]);
}
for (var Zl = 0; Zl < _h.length; Zl++) {
  var Jl = _h[Zl],
    nC = Jl.toLowerCase(),
    rC = Jl[0].toUpperCase() + Jl.slice(1);
  sr(nC, "on" + rC);
}
sr(jy, "onAnimationEnd");
sr(Iy, "onAnimationIteration");
sr(Fy, "onAnimationStart");
sr("dblclick", "onDoubleClick");
sr("focusin", "onFocus");
sr("focusout", "onBlur");
sr(Vy, "onTransitionEnd");
Ao("onMouseEnter", ["mouseout", "mouseover"]);
Ao("onMouseLeave", ["mouseout", "mouseover"]);
Ao("onPointerEnter", ["pointerout", "pointerover"]);
Ao("onPointerLeave", ["pointerout", "pointerover"]);
Vr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Vr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Vr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Vr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Vr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var di =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  oC = new Set("cancel close invalid load scroll toggle".split(" ").concat(di));
function zh(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), nS(r, t, void 0, e), (e.currentTarget = null);
}
function zy(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          zh(o, a, u), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          zh(o, a, u), (i = l);
        }
    }
  }
  if (ma) throw ((e = qu), (ma = !1), (qu = null), e);
}
function se(e, t) {
  var n = t[ac];
  n === void 0 && (n = t[ac] = new Set());
  var r = e + "__bubble";
  n.has(r) || (By(t, e, 2, !1), n.add(r));
}
function eu(e, t, n) {
  var r = 0;
  t && (r |= 4), By(n, e, r, t);
}
var bs = "_reactListening" + Math.random().toString(36).slice(2);
function ji(e) {
  if (!e[bs]) {
    (e[bs] = !0),
      Qg.forEach(function (n) {
        n !== "selectionchange" && (oC.has(n) || eu(n, !1, e), eu(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[bs] || ((t[bs] = !0), eu("selectionchange", !1, t));
  }
}
function By(e, t, n, r) {
  switch (Ty(t)) {
    case 1:
      var o = vS;
      break;
    case 4:
      o = xS;
      break;
    default:
      o = Rd;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Xu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function tu(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = yr(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  cy(function () {
    var u = i,
      c = bd(n),
      d = [];
    e: {
      var f = _y.get(e);
      if (f !== void 0) {
        var h = Nd,
          v = e;
        switch (e) {
          case "keypress":
            if (Qs(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = OS;
            break;
          case "focusin":
            (v = "focus"), (h = Ql);
            break;
          case "focusout":
            (v = "blur"), (h = Ql);
            break;
          case "beforeblur":
          case "afterblur":
            h = Ql;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Ah;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = CS;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = FS;
            break;
          case jy:
          case Iy:
          case Fy:
            h = bS;
            break;
          case Vy:
            h = _S;
            break;
          case "scroll":
            h = wS;
            break;
          case "wheel":
            h = BS;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = kS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Mh;
        }
        var g = (t & 4) !== 0,
          x = !g && e === "scroll",
          m = g ? (f !== null ? f + "Capture" : null) : f;
        g = [];
        for (var p = u, y; p !== null; ) {
          y = p;
          var S = y.stateNode;
          if (
            (y.tag === 5 &&
              S !== null &&
              ((y = S),
              m !== null && ((S = Ri(p, m)), S != null && g.push(Ii(p, S, y)))),
            x)
          )
            break;
          p = p.return;
        }
        0 < g.length &&
          ((f = new h(f, v, null, n, c)), d.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Qu &&
            (v = n.relatedTarget || n.fromElement) &&
            (yr(v) || v[hn]))
        )
          break e;
        if (
          (h || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          h
            ? ((v = n.relatedTarget || n.toElement),
              (h = u),
              (v = v ? yr(v) : null),
              v !== null &&
                ((x = _r(v)), v !== x || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((h = null), (v = u)),
          h !== v)
        ) {
          if (
            ((g = Ah),
            (S = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Mh),
              (S = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (x = h == null ? f : eo(h)),
            (y = v == null ? f : eo(v)),
            (f = new g(S, p + "leave", h, n, c)),
            (f.target = x),
            (f.relatedTarget = y),
            (S = null),
            yr(c) === u &&
              ((g = new g(m, p + "enter", v, n, c)),
              (g.target = y),
              (g.relatedTarget = x),
              (S = g)),
            (x = S),
            h && v)
          )
            t: {
              for (g = h, m = v, p = 0, y = g; y; y = Gr(y)) p++;
              for (y = 0, S = m; S; S = Gr(S)) y++;
              for (; 0 < p - y; ) (g = Gr(g)), p--;
              for (; 0 < y - p; ) (m = Gr(m)), y--;
              for (; p--; ) {
                if (g === m || (m !== null && g === m.alternate)) break t;
                (g = Gr(g)), (m = Gr(m));
              }
              g = null;
            }
          else g = null;
          h !== null && Bh(d, f, h, g, !1),
            v !== null && x !== null && Bh(d, x, v, g, !0);
        }
      }
      e: {
        if (
          ((f = u ? eo(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var E = QS;
        else if (Lh(f))
          if (My) E = ZS;
          else {
            E = XS;
            var T = YS;
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (E = qS);
        if (E && (E = E(e, u))) {
          Ry(d, E, n, c);
          break e;
        }
        T && T(e, f, u),
          e === "focusout" &&
            (T = f._wrapperState) &&
            T.controlled &&
            f.type === "number" &&
            Uu(f, "number", f.value);
      }
      switch (((T = u ? eo(u) : window), e)) {
        case "focusin":
          (Lh(T) || T.contentEditable === "true") &&
            ((Zr = T), (tc = u), (yi = null));
          break;
        case "focusout":
          yi = tc = Zr = null;
          break;
        case "mousedown":
          nc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (nc = !1), Vh(d, n, c);
          break;
        case "selectionchange":
          if (tC) break;
        case "keydown":
        case "keyup":
          Vh(d, n, c);
      }
      var b;
      if (Ld)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        qr
          ? ky(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Py &&
          n.locale !== "ko" &&
          (qr || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && qr && (b = by())
            : ((zn = c),
              (Md = "value" in zn ? zn.value : zn.textContent),
              (qr = !0))),
        (T = wa(u, P)),
        0 < T.length &&
          ((P = new Rh(P, e, null, n, c)),
          d.push({ event: P, listeners: T }),
          b ? (P.data = b) : ((b = Ay(n)), b !== null && (P.data = b)))),
        (b = US ? WS(e, n) : HS(e, n)) &&
          ((u = wa(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Rh("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = b)));
    }
    zy(d, t);
  });
}
function Ii(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function wa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Ri(e, n)),
      i != null && r.unshift(Ii(e, i, o)),
      (i = Ri(e, t)),
      i != null && r.push(Ii(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Gr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Bh(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = Ri(n, i)), l != null && s.unshift(Ii(n, l, a)))
        : o || ((l = Ri(n, i)), l != null && s.push(Ii(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var iC = /\r\n?/g,
  sC = /\u0000|\uFFFD/g;
function $h(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      iC,
      `
`
    )
    .replace(sC, "");
}
function Ps(e, t, n) {
  if (((t = $h(t)), $h(e) !== t && n)) throw Error(D(425));
}
function Sa() {}
var rc = null,
  oc = null;
function ic(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var sc = typeof setTimeout == "function" ? setTimeout : void 0,
  aC = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Uh = typeof Promise == "function" ? Promise : void 0,
  lC =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Uh < "u"
      ? function (e) {
          return Uh.resolve(null).then(e).catch(uC);
        }
      : sc;
function uC(e) {
  setTimeout(function () {
    throw e;
  });
}
function nu(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Di(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Di(t);
}
function Gn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Wh(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var $o = Math.random().toString(36).slice(2),
  Qt = "__reactFiber$" + $o,
  Fi = "__reactProps$" + $o,
  hn = "__reactContainer$" + $o,
  ac = "__reactEvents$" + $o,
  cC = "__reactListeners$" + $o,
  dC = "__reactHandles$" + $o;
function yr(e) {
  var t = e[Qt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[hn] || n[Qt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Wh(e); e !== null; ) {
          if ((n = e[Qt])) return n;
          e = Wh(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function rs(e) {
  return (
    (e = e[Qt] || e[hn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function eo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(D(33));
}
function ol(e) {
  return e[Fi] || null;
}
var lc = [],
  to = -1;
function ar(e) {
  return { current: e };
}
function le(e) {
  0 > to || ((e.current = lc[to]), (lc[to] = null), to--);
}
function oe(e, t) {
  to++, (lc[to] = e.current), (e.current = t);
}
var Jn = {},
  Ve = ar(Jn),
  Xe = ar(!1),
  Dr = Jn;
function Ro(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Jn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function qe(e) {
  return (e = e.childContextTypes), e != null;
}
function Ca() {
  le(Xe), le(Ve);
}
function Hh(e, t, n) {
  if (Ve.current !== Jn) throw Error(D(168));
  oe(Ve, t), oe(Xe, n);
}
function $y(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(D(108, Y1(e) || "Unknown", o));
  return pe({}, n, r);
}
function Ea(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Jn),
    (Dr = Ve.current),
    oe(Ve, e),
    oe(Xe, Xe.current),
    !0
  );
}
function Kh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(D(169));
  n
    ? ((e = $y(e, t, Dr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      le(Xe),
      le(Ve),
      oe(Ve, e))
    : le(Xe),
    oe(Xe, n);
}
var an = null,
  il = !1,
  ru = !1;
function Uy(e) {
  an === null ? (an = [e]) : an.push(e);
}
function fC(e) {
  (il = !0), Uy(e);
}
function lr() {
  if (!ru && an !== null) {
    ru = !0;
    var e = 0,
      t = te;
    try {
      var n = an;
      for (te = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (an = null), (il = !1);
    } catch (o) {
      throw (an !== null && (an = an.slice(e + 1)), py(Pd, lr), o);
    } finally {
      (te = t), (ru = !1);
    }
  }
  return null;
}
var no = [],
  ro = 0,
  Ta = null,
  ba = 0,
  ht = [],
  pt = 0,
  Lr = null,
  un = 1,
  cn = "";
function pr(e, t) {
  (no[ro++] = ba), (no[ro++] = Ta), (Ta = e), (ba = t);
}
function Wy(e, t, n) {
  (ht[pt++] = un), (ht[pt++] = cn), (ht[pt++] = Lr), (Lr = e);
  var r = un;
  e = cn;
  var o = 32 - Ot(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Ot(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (un = (1 << (32 - Ot(t) + o)) | (n << o) | r),
      (cn = i + e);
  } else (un = (1 << i) | (n << o) | r), (cn = e);
}
function jd(e) {
  e.return !== null && (pr(e, 1), Wy(e, 1, 0));
}
function Id(e) {
  for (; e === Ta; )
    (Ta = no[--ro]), (no[ro] = null), (ba = no[--ro]), (no[ro] = null);
  for (; e === Lr; )
    (Lr = ht[--pt]),
      (ht[pt] = null),
      (cn = ht[--pt]),
      (ht[pt] = null),
      (un = ht[--pt]),
      (ht[pt] = null);
}
var st = null,
  it = null,
  ce = !1,
  Lt = null;
function Hy(e, t) {
  var n = mt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Gh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (st = e), (it = Gn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (st = e), (it = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Lr !== null ? { id: un, overflow: cn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = mt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (st = e),
            (it = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function uc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function cc(e) {
  if (ce) {
    var t = it;
    if (t) {
      var n = t;
      if (!Gh(e, t)) {
        if (uc(e)) throw Error(D(418));
        t = Gn(n.nextSibling);
        var r = st;
        t && Gh(e, t)
          ? Hy(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ce = !1), (st = e));
      }
    } else {
      if (uc(e)) throw Error(D(418));
      (e.flags = (e.flags & -4097) | 2), (ce = !1), (st = e);
    }
  }
}
function Qh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  st = e;
}
function ks(e) {
  if (e !== st) return !1;
  if (!ce) return Qh(e), (ce = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ic(e.type, e.memoizedProps))),
    t && (t = it))
  ) {
    if (uc(e)) throw (Ky(), Error(D(418)));
    for (; t; ) Hy(e, t), (t = Gn(t.nextSibling));
  }
  if ((Qh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(D(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              it = Gn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      it = null;
    }
  } else it = st ? Gn(e.stateNode.nextSibling) : null;
  return !0;
}
function Ky() {
  for (var e = it; e; ) e = Gn(e.nextSibling);
}
function Mo() {
  (it = st = null), (ce = !1);
}
function Fd(e) {
  Lt === null ? (Lt = [e]) : Lt.push(e);
}
var hC = vn.ReactCurrentBatchConfig;
function ni(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(D(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(D(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(D(284));
    if (!n._owner) throw Error(D(290, e));
  }
  return e;
}
function As(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      D(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Yh(e) {
  var t = e._init;
  return t(e._payload);
}
function Gy(e) {
  function t(m, p) {
    if (e) {
      var y = m.deletions;
      y === null ? ((m.deletions = [p]), (m.flags |= 16)) : y.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function o(m, p) {
    return (m = qn(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, p, y) {
    return (
      (m.index = y),
      e
        ? ((y = m.alternate),
          y !== null
            ? ((y = y.index), y < p ? ((m.flags |= 2), p) : y)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, p, y, S) {
    return p === null || p.tag !== 6
      ? ((p = cu(y, m.mode, S)), (p.return = m), p)
      : ((p = o(p, y)), (p.return = m), p);
  }
  function l(m, p, y, S) {
    var E = y.type;
    return E === Xr
      ? c(m, p, y.props.children, S, y.key)
      : p !== null &&
        (p.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Nn &&
            Yh(E) === p.type))
      ? ((S = o(p, y.props)), (S.ref = ni(m, p, y)), (S.return = m), S)
      : ((S = ta(y.type, y.key, y.props, null, m.mode, S)),
        (S.ref = ni(m, p, y)),
        (S.return = m),
        S);
  }
  function u(m, p, y, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== y.containerInfo ||
      p.stateNode.implementation !== y.implementation
      ? ((p = du(y, m.mode, S)), (p.return = m), p)
      : ((p = o(p, y.children || [])), (p.return = m), p);
  }
  function c(m, p, y, S, E) {
    return p === null || p.tag !== 7
      ? ((p = Rr(y, m.mode, S, E)), (p.return = m), p)
      : ((p = o(p, y)), (p.return = m), p);
  }
  function d(m, p, y) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = cu("" + p, m.mode, y)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ys:
          return (
            (y = ta(p.type, p.key, p.props, null, m.mode, y)),
            (y.ref = ni(m, null, p)),
            (y.return = m),
            y
          );
        case Yr:
          return (p = du(p, m.mode, y)), (p.return = m), p;
        case Nn:
          var S = p._init;
          return d(m, S(p._payload), y);
      }
      if (ui(p) || qo(p))
        return (p = Rr(p, m.mode, y, null)), (p.return = m), p;
      As(m, p);
    }
    return null;
  }
  function f(m, p, y, S) {
    var E = p !== null ? p.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return E !== null ? null : a(m, p, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ys:
          return y.key === E ? l(m, p, y, S) : null;
        case Yr:
          return y.key === E ? u(m, p, y, S) : null;
        case Nn:
          return (E = y._init), f(m, p, E(y._payload), S);
      }
      if (ui(y) || qo(y)) return E !== null ? null : c(m, p, y, S, null);
      As(m, y);
    }
    return null;
  }
  function h(m, p, y, S, E) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (m = m.get(y) || null), a(p, m, "" + S, E);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case ys:
          return (m = m.get(S.key === null ? y : S.key) || null), l(p, m, S, E);
        case Yr:
          return (m = m.get(S.key === null ? y : S.key) || null), u(p, m, S, E);
        case Nn:
          var T = S._init;
          return h(m, p, y, T(S._payload), E);
      }
      if (ui(S) || qo(S)) return (m = m.get(y) || null), c(p, m, S, E, null);
      As(p, S);
    }
    return null;
  }
  function v(m, p, y, S) {
    for (
      var E = null, T = null, b = p, P = (p = 0), N = null;
      b !== null && P < y.length;
      P++
    ) {
      b.index > P ? ((N = b), (b = null)) : (N = b.sibling);
      var A = f(m, b, y[P], S);
      if (A === null) {
        b === null && (b = N);
        break;
      }
      e && b && A.alternate === null && t(m, b),
        (p = i(A, p, P)),
        T === null ? (E = A) : (T.sibling = A),
        (T = A),
        (b = N);
    }
    if (P === y.length) return n(m, b), ce && pr(m, P), E;
    if (b === null) {
      for (; P < y.length; P++)
        (b = d(m, y[P], S)),
          b !== null &&
            ((p = i(b, p, P)), T === null ? (E = b) : (T.sibling = b), (T = b));
      return ce && pr(m, P), E;
    }
    for (b = r(m, b); P < y.length; P++)
      (N = h(b, m, P, y[P], S)),
        N !== null &&
          (e && N.alternate !== null && b.delete(N.key === null ? P : N.key),
          (p = i(N, p, P)),
          T === null ? (E = N) : (T.sibling = N),
          (T = N));
    return (
      e &&
        b.forEach(function (F) {
          return t(m, F);
        }),
      ce && pr(m, P),
      E
    );
  }
  function g(m, p, y, S) {
    var E = qo(y);
    if (typeof E != "function") throw Error(D(150));
    if (((y = E.call(y)), y == null)) throw Error(D(151));
    for (
      var T = (E = null), b = p, P = (p = 0), N = null, A = y.next();
      b !== null && !A.done;
      P++, A = y.next()
    ) {
      b.index > P ? ((N = b), (b = null)) : (N = b.sibling);
      var F = f(m, b, A.value, S);
      if (F === null) {
        b === null && (b = N);
        break;
      }
      e && b && F.alternate === null && t(m, b),
        (p = i(F, p, P)),
        T === null ? (E = F) : (T.sibling = F),
        (T = F),
        (b = N);
    }
    if (A.done) return n(m, b), ce && pr(m, P), E;
    if (b === null) {
      for (; !A.done; P++, A = y.next())
        (A = d(m, A.value, S)),
          A !== null &&
            ((p = i(A, p, P)), T === null ? (E = A) : (T.sibling = A), (T = A));
      return ce && pr(m, P), E;
    }
    for (b = r(m, b); !A.done; P++, A = y.next())
      (A = h(b, m, P, A.value, S)),
        A !== null &&
          (e && A.alternate !== null && b.delete(A.key === null ? P : A.key),
          (p = i(A, p, P)),
          T === null ? (E = A) : (T.sibling = A),
          (T = A));
    return (
      e &&
        b.forEach(function (j) {
          return t(m, j);
        }),
      ce && pr(m, P),
      E
    );
  }
  function x(m, p, y, S) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === Xr &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case ys:
          e: {
            for (var E = y.key, T = p; T !== null; ) {
              if (T.key === E) {
                if (((E = y.type), E === Xr)) {
                  if (T.tag === 7) {
                    n(m, T.sibling),
                      (p = o(T, y.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  T.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Nn &&
                    Yh(E) === T.type)
                ) {
                  n(m, T.sibling),
                    (p = o(T, y.props)),
                    (p.ref = ni(m, T, y)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, T);
                break;
              } else t(m, T);
              T = T.sibling;
            }
            y.type === Xr
              ? ((p = Rr(y.props.children, m.mode, S, y.key)),
                (p.return = m),
                (m = p))
              : ((S = ta(y.type, y.key, y.props, null, m.mode, S)),
                (S.ref = ni(m, p, y)),
                (S.return = m),
                (m = S));
          }
          return s(m);
        case Yr:
          e: {
            for (T = y.key; p !== null; ) {
              if (p.key === T)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === y.containerInfo &&
                  p.stateNode.implementation === y.implementation
                ) {
                  n(m, p.sibling),
                    (p = o(p, y.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = du(y, m.mode, S)), (p.return = m), (m = p);
          }
          return s(m);
        case Nn:
          return (T = y._init), x(m, p, T(y._payload), S);
      }
      if (ui(y)) return v(m, p, y, S);
      if (qo(y)) return g(m, p, y, S);
      As(m, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = o(p, y)), (p.return = m), (m = p))
          : (n(m, p), (p = cu(y, m.mode, S)), (p.return = m), (m = p)),
        s(m))
      : n(m, p);
  }
  return x;
}
var No = Gy(!0),
  Qy = Gy(!1),
  Pa = ar(null),
  ka = null,
  oo = null,
  Vd = null;
function _d() {
  Vd = oo = ka = null;
}
function zd(e) {
  var t = Pa.current;
  le(Pa), (e._currentValue = t);
}
function dc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function mo(e, t) {
  (ka = e),
    (Vd = oo = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ye = !0), (e.firstContext = null));
}
function xt(e) {
  var t = e._currentValue;
  if (Vd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), oo === null)) {
      if (ka === null) throw Error(D(308));
      (oo = e), (ka.dependencies = { lanes: 0, firstContext: e });
    } else oo = oo.next = e;
  return t;
}
var vr = null;
function Bd(e) {
  vr === null ? (vr = [e]) : vr.push(e);
}
function Yy(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Bd(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    pn(e, r)
  );
}
function pn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Dn = !1;
function $d(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Xy(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function dn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Qn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Z & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      pn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Bd(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    pn(e, n)
  );
}
function Ys(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), kd(e, n);
  }
}
function Xh(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Aa(e, t, n, r) {
  var o = e.updateQueue;
  Dn = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (s = 0), (c = u = l = null), (a = i);
    do {
      var f = a.lane,
        h = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            g = a;
          switch (((f = t), (h = n), g.tag)) {
            case 1:
              if (((v = g.payload), typeof v == "function")) {
                d = v.call(h, d, f);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = g.payload),
                (f = typeof v == "function" ? v.call(h, d, f) : v),
                f == null)
              )
                break e;
              d = pe({}, d, f);
              break e;
            case 2:
              Dn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [a]) : f.push(a));
      } else
        (h = {
          eventTime: h,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (l = d)) : (c = c.next = h),
          (s |= f);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (jr |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function qh(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(D(191, o));
        o.call(r);
      }
    }
}
var os = {},
  qt = ar(os),
  Vi = ar(os),
  _i = ar(os);
function xr(e) {
  if (e === os) throw Error(D(174));
  return e;
}
function Ud(e, t) {
  switch ((oe(_i, t), oe(Vi, e), oe(qt, os), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Hu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Hu(t, e));
  }
  le(qt), oe(qt, t);
}
function Do() {
  le(qt), le(Vi), le(_i);
}
function qy(e) {
  xr(_i.current);
  var t = xr(qt.current),
    n = Hu(t, e.type);
  t !== n && (oe(Vi, e), oe(qt, n));
}
function Wd(e) {
  Vi.current === e && (le(qt), le(Vi));
}
var fe = ar(0);
function Ra(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ou = [];
function Hd() {
  for (var e = 0; e < ou.length; e++)
    ou[e]._workInProgressVersionPrimary = null;
  ou.length = 0;
}
var Xs = vn.ReactCurrentDispatcher,
  iu = vn.ReactCurrentBatchConfig,
  Or = 0,
  he = null,
  Ce = null,
  be = null,
  Ma = !1,
  vi = !1,
  zi = 0,
  pC = 0;
function Oe() {
  throw Error(D(321));
}
function Kd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ft(e[n], t[n])) return !1;
  return !0;
}
function Gd(e, t, n, r, o, i) {
  if (
    ((Or = i),
    (he = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Xs.current = e === null || e.memoizedState === null ? vC : xC),
    (e = n(r, o)),
    vi)
  ) {
    i = 0;
    do {
      if (((vi = !1), (zi = 0), 25 <= i)) throw Error(D(301));
      (i += 1),
        (be = Ce = null),
        (t.updateQueue = null),
        (Xs.current = wC),
        (e = n(r, o));
    } while (vi);
  }
  if (
    ((Xs.current = Na),
    (t = Ce !== null && Ce.next !== null),
    (Or = 0),
    (be = Ce = he = null),
    (Ma = !1),
    t)
  )
    throw Error(D(300));
  return e;
}
function Qd() {
  var e = zi !== 0;
  return (zi = 0), e;
}
function $t() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return be === null ? (he.memoizedState = be = e) : (be = be.next = e), be;
}
function wt() {
  if (Ce === null) {
    var e = he.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ce.next;
  var t = be === null ? he.memoizedState : be.next;
  if (t !== null) (be = t), (Ce = e);
  else {
    if (e === null) throw Error(D(310));
    (Ce = e),
      (e = {
        memoizedState: Ce.memoizedState,
        baseState: Ce.baseState,
        baseQueue: Ce.baseQueue,
        queue: Ce.queue,
        next: null,
      }),
      be === null ? (he.memoizedState = be = e) : (be = be.next = e);
  }
  return be;
}
function Bi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function su(e) {
  var t = wt(),
    n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = Ce,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Or & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (s = r)) : (l = l.next = d),
          (he.lanes |= c),
          (jr |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = r) : (l.next = a),
      Ft(r, t.memoizedState) || (Ye = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (he.lanes |= i), (jr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function au(e) {
  var t = wt(),
    n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    Ft(i, t.memoizedState) || (Ye = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Zy() {}
function Jy(e, t) {
  var n = he,
    r = wt(),
    o = t(),
    i = !Ft(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ye = !0)),
    (r = r.queue),
    Yd(nv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (be !== null && be.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      $i(9, tv.bind(null, n, r, o, t), void 0, null),
      Pe === null)
    )
      throw Error(D(349));
    Or & 30 || ev(n, t, o);
  }
  return o;
}
function ev(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function tv(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), rv(t) && ov(e);
}
function nv(e, t, n) {
  return n(function () {
    rv(t) && ov(e);
  });
}
function rv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ft(e, n);
  } catch {
    return !0;
  }
}
function ov(e) {
  var t = pn(e, 1);
  t !== null && jt(t, e, 1, -1);
}
function Zh(e) {
  var t = $t();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Bi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = yC.bind(null, he, e)),
    [t.memoizedState, e]
  );
}
function $i(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function iv() {
  return wt().memoizedState;
}
function qs(e, t, n, r) {
  var o = $t();
  (he.flags |= e),
    (o.memoizedState = $i(1 | t, n, void 0, r === void 0 ? null : r));
}
function sl(e, t, n, r) {
  var o = wt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ce !== null) {
    var s = Ce.memoizedState;
    if (((i = s.destroy), r !== null && Kd(r, s.deps))) {
      o.memoizedState = $i(t, n, i, r);
      return;
    }
  }
  (he.flags |= e), (o.memoizedState = $i(1 | t, n, i, r));
}
function Jh(e, t) {
  return qs(8390656, 8, e, t);
}
function Yd(e, t) {
  return sl(2048, 8, e, t);
}
function sv(e, t) {
  return sl(4, 2, e, t);
}
function av(e, t) {
  return sl(4, 4, e, t);
}
function lv(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function uv(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), sl(4, 4, lv.bind(null, t, e), n)
  );
}
function Xd() {}
function cv(e, t) {
  var n = wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Kd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function dv(e, t) {
  var n = wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Kd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function fv(e, t, n) {
  return Or & 21
    ? (Ft(n, t) || ((n = yy()), (he.lanes |= n), (jr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ye = !0)), (e.memoizedState = n));
}
function mC(e, t) {
  var n = te;
  (te = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = iu.transition;
  iu.transition = {};
  try {
    e(!1), t();
  } finally {
    (te = n), (iu.transition = r);
  }
}
function hv() {
  return wt().memoizedState;
}
function gC(e, t, n) {
  var r = Xn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    pv(e))
  )
    mv(t, n);
  else if (((n = Yy(e, t, n, r)), n !== null)) {
    var o = We();
    jt(n, e, r, o), gv(n, t, r);
  }
}
function yC(e, t, n) {
  var r = Xn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (pv(e)) mv(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), Ft(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), Bd(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Yy(e, t, o, r)),
      n !== null && ((o = We()), jt(n, e, r, o), gv(n, t, r));
  }
}
function pv(e) {
  var t = e.alternate;
  return e === he || (t !== null && t === he);
}
function mv(e, t) {
  vi = Ma = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function gv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), kd(e, n);
  }
}
var Na = {
    readContext: xt,
    useCallback: Oe,
    useContext: Oe,
    useEffect: Oe,
    useImperativeHandle: Oe,
    useInsertionEffect: Oe,
    useLayoutEffect: Oe,
    useMemo: Oe,
    useReducer: Oe,
    useRef: Oe,
    useState: Oe,
    useDebugValue: Oe,
    useDeferredValue: Oe,
    useTransition: Oe,
    useMutableSource: Oe,
    useSyncExternalStore: Oe,
    useId: Oe,
    unstable_isNewReconciler: !1,
  },
  vC = {
    readContext: xt,
    useCallback: function (e, t) {
      return ($t().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: xt,
    useEffect: Jh,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        qs(4194308, 4, lv.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return qs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return qs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = $t();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = $t();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = gC.bind(null, he, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = $t();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Zh,
    useDebugValue: Xd,
    useDeferredValue: function (e) {
      return ($t().memoizedState = e);
    },
    useTransition: function () {
      var e = Zh(!1),
        t = e[0];
      return (e = mC.bind(null, e[1])), ($t().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = he,
        o = $t();
      if (ce) {
        if (n === void 0) throw Error(D(407));
        n = n();
      } else {
        if (((n = t()), Pe === null)) throw Error(D(349));
        Or & 30 || ev(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Jh(nv.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        $i(9, tv.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = $t(),
        t = Pe.identifierPrefix;
      if (ce) {
        var n = cn,
          r = un;
        (n = (r & ~(1 << (32 - Ot(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = zi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = pC++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  xC = {
    readContext: xt,
    useCallback: cv,
    useContext: xt,
    useEffect: Yd,
    useImperativeHandle: uv,
    useInsertionEffect: sv,
    useLayoutEffect: av,
    useMemo: dv,
    useReducer: su,
    useRef: iv,
    useState: function () {
      return su(Bi);
    },
    useDebugValue: Xd,
    useDeferredValue: function (e) {
      var t = wt();
      return fv(t, Ce.memoizedState, e);
    },
    useTransition: function () {
      var e = su(Bi)[0],
        t = wt().memoizedState;
      return [e, t];
    },
    useMutableSource: Zy,
    useSyncExternalStore: Jy,
    useId: hv,
    unstable_isNewReconciler: !1,
  },
  wC = {
    readContext: xt,
    useCallback: cv,
    useContext: xt,
    useEffect: Yd,
    useImperativeHandle: uv,
    useInsertionEffect: sv,
    useLayoutEffect: av,
    useMemo: dv,
    useReducer: au,
    useRef: iv,
    useState: function () {
      return au(Bi);
    },
    useDebugValue: Xd,
    useDeferredValue: function (e) {
      var t = wt();
      return Ce === null ? (t.memoizedState = e) : fv(t, Ce.memoizedState, e);
    },
    useTransition: function () {
      var e = au(Bi)[0],
        t = wt().memoizedState;
      return [e, t];
    },
    useMutableSource: Zy,
    useSyncExternalStore: Jy,
    useId: hv,
    unstable_isNewReconciler: !1,
  };
function At(e, t) {
  if (e && e.defaultProps) {
    (t = pe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function fc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var al = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? _r(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = We(),
      o = Xn(e),
      i = dn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Qn(e, i, o)),
      t !== null && (jt(t, e, o, r), Ys(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = We(),
      o = Xn(e),
      i = dn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Qn(e, i, o)),
      t !== null && (jt(t, e, o, r), Ys(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = We(),
      r = Xn(e),
      o = dn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Qn(e, o, r)),
      t !== null && (jt(t, e, r, n), Ys(t, e, r));
  },
};
function ep(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Oi(n, r) || !Oi(o, i)
      : !0
  );
}
function yv(e, t, n) {
  var r = !1,
    o = Jn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = xt(i))
      : ((o = qe(t) ? Dr : Ve.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Ro(e, o) : Jn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = al),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function tp(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && al.enqueueReplaceState(t, t.state, null);
}
function hc(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), $d(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = xt(i))
    : ((i = qe(t) ? Dr : Ve.current), (o.context = Ro(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (fc(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && al.enqueueReplaceState(o, o.state, null),
      Aa(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Lo(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Q1(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function lu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function pc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var SC = typeof WeakMap == "function" ? WeakMap : Map;
function vv(e, t, n) {
  (n = dn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      La || ((La = !0), (Tc = r)), pc(e, t);
    }),
    n
  );
}
function xv(e, t, n) {
  (n = dn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        pc(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        pc(e, t),
          typeof r != "function" &&
            (Yn === null ? (Yn = new Set([this])) : Yn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function np(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new SC();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = jC.bind(null, e, t, n)), t.then(e, e));
}
function rp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function op(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = dn(-1, 1)), (t.tag = 2), Qn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var CC = vn.ReactCurrentOwner,
  Ye = !1;
function ze(e, t, n, r) {
  t.child = e === null ? Qy(t, null, n, r) : No(t, e.child, n, r);
}
function ip(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    mo(t, o),
    (r = Gd(e, t, n, r, i, o)),
    (n = Qd()),
    e !== null && !Ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        mn(e, t, o))
      : (ce && n && jd(t), (t.flags |= 1), ze(e, t, r, o), t.child)
  );
}
function sp(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !of(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), wv(e, t, i, r, o))
      : ((e = ta(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Oi), n(s, r) && e.ref === t.ref)
    )
      return mn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = qn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function wv(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Oi(i, r) && e.ref === t.ref)
      if (((Ye = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ye = !0);
      else return (t.lanes = e.lanes), mn(e, t, o);
  }
  return mc(e, t, n, r, o);
}
function Sv(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        oe(so, nt),
        (nt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          oe(so, nt),
          (nt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        oe(so, nt),
        (nt |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      oe(so, nt),
      (nt |= r);
  return ze(e, t, o, n), t.child;
}
function Cv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function mc(e, t, n, r, o) {
  var i = qe(n) ? Dr : Ve.current;
  return (
    (i = Ro(t, i)),
    mo(t, o),
    (n = Gd(e, t, n, r, i, o)),
    (r = Qd()),
    e !== null && !Ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        mn(e, t, o))
      : (ce && r && jd(t), (t.flags |= 1), ze(e, t, n, o), t.child)
  );
}
function ap(e, t, n, r, o) {
  if (qe(n)) {
    var i = !0;
    Ea(t);
  } else i = !1;
  if ((mo(t, o), t.stateNode === null))
    Zs(e, t), yv(t, n, r), hc(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = xt(u))
      : ((u = qe(n) ? Dr : Ve.current), (u = Ro(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && tp(t, s, r, u)),
      (Dn = !1);
    var f = t.memoizedState;
    (s.state = f),
      Aa(t, r, s, o),
      (l = t.memoizedState),
      a !== r || f !== l || Xe.current || Dn
        ? (typeof c == "function" && (fc(t, n, c, r), (l = t.memoizedState)),
          (a = Dn || ep(t, n, a, r, f, l, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Xy(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : At(t.type, a)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = xt(l))
        : ((l = qe(n) ? Dr : Ve.current), (l = Ro(t, l)));
    var h = n.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && tp(t, s, r, l)),
      (Dn = !1),
      (f = t.memoizedState),
      (s.state = f),
      Aa(t, r, s, o);
    var v = t.memoizedState;
    a !== d || f !== v || Xe.current || Dn
      ? (typeof h == "function" && (fc(t, n, h, r), (v = t.memoizedState)),
        (u = Dn || ep(t, n, u, r, f, v, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, v, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, v, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return gc(e, t, n, r, i, o);
}
function gc(e, t, n, r, o, i) {
  Cv(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Kh(t, n, !1), mn(e, t, i);
  (r = t.stateNode), (CC.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = No(t, e.child, null, i)), (t.child = No(t, null, a, i)))
      : ze(e, t, a, i),
    (t.memoizedState = r.state),
    o && Kh(t, n, !0),
    t.child
  );
}
function Ev(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Hh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Hh(e, t.context, !1),
    Ud(e, t.containerInfo);
}
function lp(e, t, n, r, o) {
  return Mo(), Fd(o), (t.flags |= 256), ze(e, t, n, r), t.child;
}
var yc = { dehydrated: null, treeContext: null, retryLane: 0 };
function vc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Tv(e, t, n) {
  var r = t.pendingProps,
    o = fe.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    oe(fe, o & 1),
    e === null)
  )
    return (
      cc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = cl(s, r, 0, null)),
              (e = Rr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = vc(n)),
              (t.memoizedState = yc),
              e)
            : qd(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return EC(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = qn(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = qn(a, i)) : ((i = Rr(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? vc(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = yc),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = qn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function qd(e, t) {
  return (
    (t = cl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Rs(e, t, n, r) {
  return (
    r !== null && Fd(r),
    No(t, e.child, null, n),
    (e = qd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function EC(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = lu(Error(D(422)))), Rs(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = cl({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Rr(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && No(t, e.child, null, s),
        (t.child.memoizedState = vc(s)),
        (t.memoizedState = yc),
        i);
  if (!(t.mode & 1)) return Rs(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(D(419))), (r = lu(i, r, void 0)), Rs(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Ye || a)) {
    if (((r = Pe), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), pn(e, o), jt(r, e, o, -1));
    }
    return rf(), (r = lu(Error(D(421)))), Rs(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = IC.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (it = Gn(o.nextSibling)),
      (st = t),
      (ce = !0),
      (Lt = null),
      e !== null &&
        ((ht[pt++] = un),
        (ht[pt++] = cn),
        (ht[pt++] = Lr),
        (un = e.id),
        (cn = e.overflow),
        (Lr = t)),
      (t = qd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function up(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), dc(e.return, t, n);
}
function uu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function bv(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((ze(e, t, r.children, n), (r = fe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && up(e, n, t);
        else if (e.tag === 19) up(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((oe(fe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Ra(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          uu(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ra(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        uu(t, !0, n, null, i);
        break;
      case "together":
        uu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Zs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function mn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (jr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(D(153));
  if (t.child !== null) {
    for (
      e = t.child, n = qn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = qn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function TC(e, t, n) {
  switch (t.tag) {
    case 3:
      Ev(t), Mo();
      break;
    case 5:
      qy(t);
      break;
    case 1:
      qe(t.type) && Ea(t);
      break;
    case 4:
      Ud(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      oe(Pa, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (oe(fe, fe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Tv(e, t, n)
          : (oe(fe, fe.current & 1),
            (e = mn(e, t, n)),
            e !== null ? e.sibling : null);
      oe(fe, fe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return bv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        oe(fe, fe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Sv(e, t, n);
  }
  return mn(e, t, n);
}
var Pv, xc, kv, Av;
Pv = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
xc = function () {};
kv = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), xr(qt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Bu(e, o)), (r = Bu(e, r)), (i = []);
        break;
      case "select":
        (o = pe({}, o, { value: void 0 })),
          (r = pe({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Wu(e, o)), (r = Wu(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Sa);
    }
    Ku(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ki.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (ki.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && se("scroll", e),
                  i || a === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Av = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ri(e, t) {
  if (!ce)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function je(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function bC(e, t, n) {
  var r = t.pendingProps;
  switch ((Id(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return je(t), null;
    case 1:
      return qe(t.type) && Ca(), je(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Do(),
        le(Xe),
        le(Ve),
        Hd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ks(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Lt !== null && (kc(Lt), (Lt = null)))),
        xc(e, t),
        je(t),
        null
      );
    case 5:
      Wd(t);
      var o = xr(_i.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        kv(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(D(166));
          return je(t), null;
        }
        if (((e = xr(qt.current)), ks(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Qt] = t), (r[Fi] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              se("cancel", r), se("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              se("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < di.length; o++) se(di[o], r);
              break;
            case "source":
              se("error", r);
              break;
            case "img":
            case "image":
            case "link":
              se("error", r), se("load", r);
              break;
            case "details":
              se("toggle", r);
              break;
            case "input":
              vh(r, i), se("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                se("invalid", r);
              break;
            case "textarea":
              wh(r, i), se("invalid", r);
          }
          Ku(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ps(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ps(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : ki.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  se("scroll", r);
            }
          switch (n) {
            case "input":
              vs(r), xh(r, i, !0);
              break;
            case "textarea":
              vs(r), Sh(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Sa);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ny(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Qt] = t),
            (e[Fi] = r),
            Pv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Gu(n, r)), n)) {
              case "dialog":
                se("cancel", e), se("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                se("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < di.length; o++) se(di[o], e);
                o = r;
                break;
              case "source":
                se("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                se("error", e), se("load", e), (o = r);
                break;
              case "details":
                se("toggle", e), (o = r);
                break;
              case "input":
                vh(e, r), (o = Bu(e, r)), se("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = pe({}, r, { value: void 0 })),
                  se("invalid", e);
                break;
              case "textarea":
                wh(e, r), (o = Wu(e, r)), se("invalid", e);
                break;
              default:
                o = r;
            }
            Ku(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? iy(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && ry(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Ai(e, l)
                    : typeof l == "number" && Ai(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (ki.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && se("scroll", e)
                      : l != null && Sd(e, i, l, s));
              }
            switch (n) {
              case "input":
                vs(e), xh(e, r, !1);
                break;
              case "textarea":
                vs(e), Sh(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Zn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? co(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      co(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Sa);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return je(t), null;
    case 6:
      if (e && t.stateNode != null) Av(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(D(166));
        if (((n = xr(_i.current)), xr(qt.current), ks(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Qt] = t),
            (i = r.nodeValue !== n) && ((e = st), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ps(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ps(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Qt] = t),
            (t.stateNode = r);
      }
      return je(t), null;
    case 13:
      if (
        (le(fe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ce && it !== null && t.mode & 1 && !(t.flags & 128))
          Ky(), Mo(), (t.flags |= 98560), (i = !1);
        else if (((i = ks(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(D(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(D(317));
            i[Qt] = t;
          } else
            Mo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          je(t), (i = !1);
        } else Lt !== null && (kc(Lt), (Lt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || fe.current & 1 ? Te === 0 && (Te = 3) : rf())),
          t.updateQueue !== null && (t.flags |= 4),
          je(t),
          null);
    case 4:
      return (
        Do(), xc(e, t), e === null && ji(t.stateNode.containerInfo), je(t), null
      );
    case 10:
      return zd(t.type._context), je(t), null;
    case 17:
      return qe(t.type) && Ca(), je(t), null;
    case 19:
      if ((le(fe), (i = t.memoizedState), i === null)) return je(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) ri(i, !1);
        else {
          if (Te !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Ra(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ri(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return oe(fe, (fe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ye() > Oo &&
            ((t.flags |= 128), (r = !0), ri(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ra(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ri(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !ce)
            )
              return je(t), null;
          } else
            2 * ye() - i.renderingStartTime > Oo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ri(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ye()),
          (t.sibling = null),
          (n = fe.current),
          oe(fe, r ? (n & 1) | 2 : n & 1),
          t)
        : (je(t), null);
    case 22:
    case 23:
      return (
        nf(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? nt & 1073741824 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : je(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(D(156, t.tag));
}
function PC(e, t) {
  switch ((Id(t), t.tag)) {
    case 1:
      return (
        qe(t.type) && Ca(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Do(),
        le(Xe),
        le(Ve),
        Hd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Wd(t), null;
    case 13:
      if (
        (le(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(D(340));
        Mo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return le(fe), null;
    case 4:
      return Do(), null;
    case 10:
      return zd(t.type._context), null;
    case 22:
    case 23:
      return nf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ms = !1,
  Fe = !1,
  kC = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function io(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ge(e, t, r);
      }
    else n.current = null;
}
function wc(e, t, n) {
  try {
    n();
  } catch (r) {
    ge(e, t, r);
  }
}
var cp = !1;
function AC(e, t) {
  if (((rc = va), (e = Ly()), Od(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var h;
              d !== n || (o !== 0 && d.nodeType !== 3) || (a = s + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (f = d), (d = h);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === o && (a = s),
                f === i && ++c === r && (l = s),
                (h = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = h;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (oc = { focusedElem: e, selectionRange: n }, va = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (V = e);
    else
      for (; V !== null; ) {
        t = V;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var g = v.memoizedProps,
                    x = v.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : At(t.type, g),
                      x
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(D(163));
            }
        } catch (S) {
          ge(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (V = e);
          break;
        }
        V = t.return;
      }
  return (v = cp), (cp = !1), v;
}
function xi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && wc(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ll(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Sc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Rv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Rv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Qt], delete t[Fi], delete t[ac], delete t[cC], delete t[dC])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Mv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function dp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Mv(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Cc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Sa));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Cc(e, t, n), e = e.sibling; e !== null; ) Cc(e, t, n), (e = e.sibling);
}
function Ec(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ec(e, t, n), e = e.sibling; e !== null; ) Ec(e, t, n), (e = e.sibling);
}
var ke = null,
  Dt = !1;
function bn(e, t, n) {
  for (n = n.child; n !== null; ) Nv(e, t, n), (n = n.sibling);
}
function Nv(e, t, n) {
  if (Xt && typeof Xt.onCommitFiberUnmount == "function")
    try {
      Xt.onCommitFiberUnmount(el, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Fe || io(n, t);
    case 6:
      var r = ke,
        o = Dt;
      (ke = null),
        bn(e, t, n),
        (ke = r),
        (Dt = o),
        ke !== null &&
          (Dt
            ? ((e = ke),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ke.removeChild(n.stateNode));
      break;
    case 18:
      ke !== null &&
        (Dt
          ? ((e = ke),
            (n = n.stateNode),
            e.nodeType === 8
              ? nu(e.parentNode, n)
              : e.nodeType === 1 && nu(e, n),
            Di(e))
          : nu(ke, n.stateNode));
      break;
    case 4:
      (r = ke),
        (o = Dt),
        (ke = n.stateNode.containerInfo),
        (Dt = !0),
        bn(e, t, n),
        (ke = r),
        (Dt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Fe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && wc(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      bn(e, t, n);
      break;
    case 1:
      if (
        !Fe &&
        (io(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ge(n, t, a);
        }
      bn(e, t, n);
      break;
    case 21:
      bn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Fe = (r = Fe) || n.memoizedState !== null), bn(e, t, n), (Fe = r))
        : bn(e, t, n);
      break;
    default:
      bn(e, t, n);
  }
}
function fp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new kC()),
      t.forEach(function (r) {
        var o = FC.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Tt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ke = a.stateNode), (Dt = !1);
              break e;
            case 3:
              (ke = a.stateNode.containerInfo), (Dt = !0);
              break e;
            case 4:
              (ke = a.stateNode.containerInfo), (Dt = !0);
              break e;
          }
          a = a.return;
        }
        if (ke === null) throw Error(D(160));
        Nv(i, s, o), (ke = null), (Dt = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        ge(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Dv(t, e), (t = t.sibling);
}
function Dv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Tt(t, e), Bt(e), r & 4)) {
        try {
          xi(3, e, e.return), ll(3, e);
        } catch (g) {
          ge(e, e.return, g);
        }
        try {
          xi(5, e, e.return);
        } catch (g) {
          ge(e, e.return, g);
        }
      }
      break;
    case 1:
      Tt(t, e), Bt(e), r & 512 && n !== null && io(n, n.return);
      break;
    case 5:
      if (
        (Tt(t, e),
        Bt(e),
        r & 512 && n !== null && io(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Ai(o, "");
        } catch (g) {
          ge(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && ey(o, i),
              Gu(a, s);
            var u = Gu(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                d = l[s + 1];
              c === "style"
                ? iy(o, d)
                : c === "dangerouslySetInnerHTML"
                ? ry(o, d)
                : c === "children"
                ? Ai(o, d)
                : Sd(o, c, d, u);
            }
            switch (a) {
              case "input":
                $u(o, i);
                break;
              case "textarea":
                ty(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? co(o, !!i.multiple, h, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? co(o, !!i.multiple, i.defaultValue, !0)
                      : co(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Fi] = i;
          } catch (g) {
            ge(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Tt(t, e), Bt(e), r & 4)) {
        if (e.stateNode === null) throw Error(D(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (g) {
          ge(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Tt(t, e), Bt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Di(t.containerInfo);
        } catch (g) {
          ge(e, e.return, g);
        }
      break;
    case 4:
      Tt(t, e), Bt(e);
      break;
    case 13:
      Tt(t, e),
        Bt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (ef = ye())),
        r & 4 && fp(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Fe = (u = Fe) || c), Tt(t, e), (Fe = u)) : Tt(t, e),
        Bt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (V = e, c = e.child; c !== null; ) {
            for (d = V = c; V !== null; ) {
              switch (((f = V), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  xi(4, f, f.return);
                  break;
                case 1:
                  io(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (g) {
                      ge(r, n, g);
                    }
                  }
                  break;
                case 5:
                  io(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    pp(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (V = h)) : pp(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = oy("display", s)));
              } catch (g) {
                ge(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (g) {
                ge(e, e.return, g);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Tt(t, e), Bt(e), r & 4 && fp(e);
      break;
    case 21:
      break;
    default:
      Tt(t, e), Bt(e);
  }
}
function Bt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Mv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(D(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Ai(o, ""), (r.flags &= -33));
          var i = dp(e);
          Ec(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = dp(e);
          Cc(e, a, s);
          break;
        default:
          throw Error(D(161));
      }
    } catch (l) {
      ge(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function RC(e, t, n) {
  (V = e), Lv(e);
}
function Lv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var o = V,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Ms;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || Fe;
        a = Ms;
        var u = Fe;
        if (((Ms = s), (Fe = l) && !u))
          for (V = o; V !== null; )
            (s = V),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? mp(o)
                : l !== null
                ? ((l.return = s), (V = l))
                : mp(o);
        for (; i !== null; ) (V = i), Lv(i), (i = i.sibling);
        (V = o), (Ms = a), (Fe = u);
      }
      hp(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (V = i)) : hp(e);
  }
}
function hp(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Fe || ll(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Fe)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : At(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && qh(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                qh(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Di(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(D(163));
          }
        Fe || (t.flags & 512 && Sc(t));
      } catch (f) {
        ge(t, t.return, f);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function pp(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function mp(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ll(4, t);
          } catch (l) {
            ge(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ge(t, o, l);
            }
          }
          var i = t.return;
          try {
            Sc(t);
          } catch (l) {
            ge(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Sc(t);
          } catch (l) {
            ge(t, s, l);
          }
      }
    } catch (l) {
      ge(t, t.return, l);
    }
    if (t === e) {
      V = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (V = a);
      break;
    }
    V = t.return;
  }
}
var MC = Math.ceil,
  Da = vn.ReactCurrentDispatcher,
  Zd = vn.ReactCurrentOwner,
  yt = vn.ReactCurrentBatchConfig,
  Z = 0,
  Pe = null,
  we = null,
  Me = 0,
  nt = 0,
  so = ar(0),
  Te = 0,
  Ui = null,
  jr = 0,
  ul = 0,
  Jd = 0,
  wi = null,
  Qe = null,
  ef = 0,
  Oo = 1 / 0,
  sn = null,
  La = !1,
  Tc = null,
  Yn = null,
  Ns = !1,
  Bn = null,
  Oa = 0,
  Si = 0,
  bc = null,
  Js = -1,
  ea = 0;
function We() {
  return Z & 6 ? ye() : Js !== -1 ? Js : (Js = ye());
}
function Xn(e) {
  return e.mode & 1
    ? Z & 2 && Me !== 0
      ? Me & -Me
      : hC.transition !== null
      ? (ea === 0 && (ea = yy()), ea)
      : ((e = te),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ty(e.type))),
        e)
    : 1;
}
function jt(e, t, n, r) {
  if (50 < Si) throw ((Si = 0), (bc = null), Error(D(185)));
  ts(e, n, r),
    (!(Z & 2) || e !== Pe) &&
      (e === Pe && (!(Z & 2) && (ul |= n), Te === 4 && On(e, Me)),
      Ze(e, r),
      n === 1 && Z === 0 && !(t.mode & 1) && ((Oo = ye() + 500), il && lr()));
}
function Ze(e, t) {
  var n = e.callbackNode;
  hS(e, t);
  var r = ya(e, e === Pe ? Me : 0);
  if (r === 0)
    n !== null && Th(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Th(n), t === 1))
      e.tag === 0 ? fC(gp.bind(null, e)) : Uy(gp.bind(null, e)),
        lC(function () {
          !(Z & 6) && lr();
        }),
        (n = null);
    else {
      switch (vy(r)) {
        case 1:
          n = Pd;
          break;
        case 4:
          n = my;
          break;
        case 16:
          n = ga;
          break;
        case 536870912:
          n = gy;
          break;
        default:
          n = ga;
      }
      n = Bv(n, Ov.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ov(e, t) {
  if (((Js = -1), (ea = 0), Z & 6)) throw Error(D(327));
  var n = e.callbackNode;
  if (go() && e.callbackNode !== n) return null;
  var r = ya(e, e === Pe ? Me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ja(e, r);
  else {
    t = r;
    var o = Z;
    Z |= 2;
    var i = Iv();
    (Pe !== e || Me !== t) && ((sn = null), (Oo = ye() + 500), Ar(e, t));
    do
      try {
        LC();
        break;
      } catch (a) {
        jv(e, a);
      }
    while (!0);
    _d(),
      (Da.current = i),
      (Z = o),
      we !== null ? (t = 0) : ((Pe = null), (Me = 0), (t = Te));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Zu(e)), o !== 0 && ((r = o), (t = Pc(e, o)))), t === 1)
    )
      throw ((n = Ui), Ar(e, 0), On(e, r), Ze(e, ye()), n);
    if (t === 6) On(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !NC(o) &&
          ((t = ja(e, r)),
          t === 2 && ((i = Zu(e)), i !== 0 && ((r = i), (t = Pc(e, i)))),
          t === 1))
      )
        throw ((n = Ui), Ar(e, 0), On(e, r), Ze(e, ye()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(D(345));
        case 2:
          mr(e, Qe, sn);
          break;
        case 3:
          if (
            (On(e, r), (r & 130023424) === r && ((t = ef + 500 - ye()), 10 < t))
          ) {
            if (ya(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              We(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = sc(mr.bind(null, e, Qe, sn), t);
            break;
          }
          mr(e, Qe, sn);
          break;
        case 4:
          if ((On(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Ot(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ye() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * MC(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = sc(mr.bind(null, e, Qe, sn), r);
            break;
          }
          mr(e, Qe, sn);
          break;
        case 5:
          mr(e, Qe, sn);
          break;
        default:
          throw Error(D(329));
      }
    }
  }
  return Ze(e, ye()), e.callbackNode === n ? Ov.bind(null, e) : null;
}
function Pc(e, t) {
  var n = wi;
  return (
    e.current.memoizedState.isDehydrated && (Ar(e, t).flags |= 256),
    (e = ja(e, t)),
    e !== 2 && ((t = Qe), (Qe = n), t !== null && kc(t)),
    e
  );
}
function kc(e) {
  Qe === null ? (Qe = e) : Qe.push.apply(Qe, e);
}
function NC(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Ft(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function On(e, t) {
  for (
    t &= ~Jd,
      t &= ~ul,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ot(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function gp(e) {
  if (Z & 6) throw Error(D(327));
  go();
  var t = ya(e, 0);
  if (!(t & 1)) return Ze(e, ye()), null;
  var n = ja(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Zu(e);
    r !== 0 && ((t = r), (n = Pc(e, r)));
  }
  if (n === 1) throw ((n = Ui), Ar(e, 0), On(e, t), Ze(e, ye()), n);
  if (n === 6) throw Error(D(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    mr(e, Qe, sn),
    Ze(e, ye()),
    null
  );
}
function tf(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    (Z = n), Z === 0 && ((Oo = ye() + 500), il && lr());
  }
}
function Ir(e) {
  Bn !== null && Bn.tag === 0 && !(Z & 6) && go();
  var t = Z;
  Z |= 1;
  var n = yt.transition,
    r = te;
  try {
    if (((yt.transition = null), (te = 1), e)) return e();
  } finally {
    (te = r), (yt.transition = n), (Z = t), !(Z & 6) && lr();
  }
}
function nf() {
  (nt = so.current), le(so);
}
function Ar(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), aC(n)), we !== null))
    for (n = we.return; n !== null; ) {
      var r = n;
      switch ((Id(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ca();
          break;
        case 3:
          Do(), le(Xe), le(Ve), Hd();
          break;
        case 5:
          Wd(r);
          break;
        case 4:
          Do();
          break;
        case 13:
          le(fe);
          break;
        case 19:
          le(fe);
          break;
        case 10:
          zd(r.type._context);
          break;
        case 22:
        case 23:
          nf();
      }
      n = n.return;
    }
  if (
    ((Pe = e),
    (we = e = qn(e.current, null)),
    (Me = nt = t),
    (Te = 0),
    (Ui = null),
    (Jd = ul = jr = 0),
    (Qe = wi = null),
    vr !== null)
  ) {
    for (t = 0; t < vr.length; t++)
      if (((n = vr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    vr = null;
  }
  return e;
}
function jv(e, t) {
  do {
    var n = we;
    try {
      if ((_d(), (Xs.current = Na), Ma)) {
        for (var r = he.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Ma = !1;
      }
      if (
        ((Or = 0),
        (be = Ce = he = null),
        (vi = !1),
        (zi = 0),
        (Zd.current = null),
        n === null || n.return === null)
      ) {
        (Te = 1), (Ui = t), (we = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = Me),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = rp(s);
          if (h !== null) {
            (h.flags &= -257),
              op(h, s, a, i, t),
              h.mode & 1 && np(i, u, t),
              (t = h),
              (l = u);
            var v = t.updateQueue;
            if (v === null) {
              var g = new Set();
              g.add(l), (t.updateQueue = g);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              np(i, u, t), rf();
              break e;
            }
            l = Error(D(426));
          }
        } else if (ce && a.mode & 1) {
          var x = rp(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              op(x, s, a, i, t),
              Fd(Lo(l, a));
            break e;
          }
        }
        (i = l = Lo(l, a)),
          Te !== 4 && (Te = 2),
          wi === null ? (wi = [i]) : wi.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = vv(i, l, t);
              Xh(i, m);
              break e;
            case 1:
              a = l;
              var p = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (Yn === null || !Yn.has(y))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = xv(i, a, t);
                Xh(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Vv(n);
    } catch (E) {
      (t = E), we === n && n !== null && (we = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Iv() {
  var e = Da.current;
  return (Da.current = Na), e === null ? Na : e;
}
function rf() {
  (Te === 0 || Te === 3 || Te === 2) && (Te = 4),
    Pe === null || (!(jr & 268435455) && !(ul & 268435455)) || On(Pe, Me);
}
function ja(e, t) {
  var n = Z;
  Z |= 2;
  var r = Iv();
  (Pe !== e || Me !== t) && ((sn = null), Ar(e, t));
  do
    try {
      DC();
      break;
    } catch (o) {
      jv(e, o);
    }
  while (!0);
  if ((_d(), (Z = n), (Da.current = r), we !== null)) throw Error(D(261));
  return (Pe = null), (Me = 0), Te;
}
function DC() {
  for (; we !== null; ) Fv(we);
}
function LC() {
  for (; we !== null && !oS(); ) Fv(we);
}
function Fv(e) {
  var t = zv(e.alternate, e, nt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Vv(e) : (we = t),
    (Zd.current = null);
}
function Vv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = PC(n, t)), n !== null)) {
        (n.flags &= 32767), (we = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Te = 6), (we = null);
        return;
      }
    } else if (((n = bC(n, t, nt)), n !== null)) {
      we = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      we = t;
      return;
    }
    we = t = e;
  } while (t !== null);
  Te === 0 && (Te = 5);
}
function mr(e, t, n) {
  var r = te,
    o = yt.transition;
  try {
    (yt.transition = null), (te = 1), OC(e, t, n, r);
  } finally {
    (yt.transition = o), (te = r);
  }
  return null;
}
function OC(e, t, n, r) {
  do go();
  while (Bn !== null);
  if (Z & 6) throw Error(D(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(D(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (pS(e, i),
    e === Pe && ((we = Pe = null), (Me = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ns ||
      ((Ns = !0),
      Bv(ga, function () {
        return go(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = yt.transition), (yt.transition = null);
    var s = te;
    te = 1;
    var a = Z;
    (Z |= 4),
      (Zd.current = null),
      AC(e, n),
      Dv(n, e),
      eC(oc),
      (va = !!rc),
      (oc = rc = null),
      (e.current = n),
      RC(n),
      iS(),
      (Z = a),
      (te = s),
      (yt.transition = i);
  } else e.current = n;
  if (
    (Ns && ((Ns = !1), (Bn = e), (Oa = o)),
    (i = e.pendingLanes),
    i === 0 && (Yn = null),
    lS(n.stateNode),
    Ze(e, ye()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (La) throw ((La = !1), (e = Tc), (Tc = null), e);
  return (
    Oa & 1 && e.tag !== 0 && go(),
    (i = e.pendingLanes),
    i & 1 ? (e === bc ? Si++ : ((Si = 0), (bc = e))) : (Si = 0),
    lr(),
    null
  );
}
function go() {
  if (Bn !== null) {
    var e = vy(Oa),
      t = yt.transition,
      n = te;
    try {
      if (((yt.transition = null), (te = 16 > e ? 16 : e), Bn === null))
        var r = !1;
      else {
        if (((e = Bn), (Bn = null), (Oa = 0), Z & 6)) throw Error(D(331));
        var o = Z;
        for (Z |= 4, V = e.current; V !== null; ) {
          var i = V,
            s = i.child;
          if (V.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (V = u; V !== null; ) {
                  var c = V;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xi(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (V = d);
                  else
                    for (; V !== null; ) {
                      c = V;
                      var f = c.sibling,
                        h = c.return;
                      if ((Rv(c), c === u)) {
                        V = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = h), (V = f);
                        break;
                      }
                      V = h;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var x = g.sibling;
                    (g.sibling = null), (g = x);
                  } while (g !== null);
                }
              }
              V = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (V = s);
          else
            e: for (; V !== null; ) {
              if (((i = V), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    xi(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (V = m);
                break e;
              }
              V = i.return;
            }
        }
        var p = e.current;
        for (V = p; V !== null; ) {
          s = V;
          var y = s.child;
          if (s.subtreeFlags & 2064 && y !== null) (y.return = s), (V = y);
          else
            e: for (s = p; V !== null; ) {
              if (((a = V), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ll(9, a);
                  }
                } catch (E) {
                  ge(a, a.return, E);
                }
              if (a === s) {
                V = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (V = S);
                break e;
              }
              V = a.return;
            }
        }
        if (
          ((Z = o), lr(), Xt && typeof Xt.onPostCommitFiberRoot == "function")
        )
          try {
            Xt.onPostCommitFiberRoot(el, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (te = n), (yt.transition = t);
    }
  }
  return !1;
}
function yp(e, t, n) {
  (t = Lo(n, t)),
    (t = vv(e, t, 1)),
    (e = Qn(e, t, 1)),
    (t = We()),
    e !== null && (ts(e, 1, t), Ze(e, t));
}
function ge(e, t, n) {
  if (e.tag === 3) yp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        yp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Yn === null || !Yn.has(r)))
        ) {
          (e = Lo(n, e)),
            (e = xv(t, e, 1)),
            (t = Qn(t, e, 1)),
            (e = We()),
            t !== null && (ts(t, 1, e), Ze(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function jC(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = We()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Pe === e &&
      (Me & n) === n &&
      (Te === 4 || (Te === 3 && (Me & 130023424) === Me && 500 > ye() - ef)
        ? Ar(e, 0)
        : (Jd |= n)),
    Ze(e, t);
}
function _v(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ss), (Ss <<= 1), !(Ss & 130023424) && (Ss = 4194304))
      : (t = 1));
  var n = We();
  (e = pn(e, t)), e !== null && (ts(e, t, n), Ze(e, n));
}
function IC(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), _v(e, n);
}
function FC(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(D(314));
  }
  r !== null && r.delete(t), _v(e, n);
}
var zv;
zv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Xe.current) Ye = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ye = !1), TC(e, t, n);
      Ye = !!(e.flags & 131072);
    }
  else (Ye = !1), ce && t.flags & 1048576 && Wy(t, ba, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Zs(e, t), (e = t.pendingProps);
      var o = Ro(t, Ve.current);
      mo(t, n), (o = Gd(null, t, r, e, o, n));
      var i = Qd();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            qe(r) ? ((i = !0), Ea(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            $d(t),
            (o.updater = al),
            (t.stateNode = o),
            (o._reactInternals = t),
            hc(t, r, e, n),
            (t = gc(null, t, r, !0, i, n)))
          : ((t.tag = 0), ce && i && jd(t), ze(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Zs(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = _C(r)),
          (e = At(r, e)),
          o)
        ) {
          case 0:
            t = mc(null, t, r, e, n);
            break e;
          case 1:
            t = ap(null, t, r, e, n);
            break e;
          case 11:
            t = ip(null, t, r, e, n);
            break e;
          case 14:
            t = sp(null, t, r, At(r.type, e), n);
            break e;
        }
        throw Error(D(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : At(r, o)),
        mc(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : At(r, o)),
        ap(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Ev(t), e === null)) throw Error(D(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Xy(e, t),
          Aa(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Lo(Error(D(423)), t)), (t = lp(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Lo(Error(D(424)), t)), (t = lp(e, t, r, n, o));
            break e;
          } else
            for (
              it = Gn(t.stateNode.containerInfo.firstChild),
                st = t,
                ce = !0,
                Lt = null,
                n = Qy(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Mo(), r === o)) {
            t = mn(e, t, n);
            break e;
          }
          ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        qy(t),
        e === null && cc(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        ic(r, o) ? (s = null) : i !== null && ic(r, i) && (t.flags |= 32),
        Cv(e, t),
        ze(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && cc(t), null;
    case 13:
      return Tv(e, t, n);
    case 4:
      return (
        Ud(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = No(t, null, r, n)) : ze(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : At(r, o)),
        ip(e, t, r, o, n)
      );
    case 7:
      return ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          oe(Pa, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (Ft(i.value, s)) {
            if (i.children === o.children && !Xe.current) {
              t = mn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = dn(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      dc(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(D(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  dc(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        ze(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        mo(t, n),
        (o = xt(o)),
        (r = r(o)),
        (t.flags |= 1),
        ze(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = At(r, t.pendingProps)),
        (o = At(r.type, o)),
        sp(e, t, r, o, n)
      );
    case 15:
      return wv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : At(r, o)),
        Zs(e, t),
        (t.tag = 1),
        qe(r) ? ((e = !0), Ea(t)) : (e = !1),
        mo(t, n),
        yv(t, r, o),
        hc(t, r, o, n),
        gc(null, t, r, !0, e, n)
      );
    case 19:
      return bv(e, t, n);
    case 22:
      return Sv(e, t, n);
  }
  throw Error(D(156, t.tag));
};
function Bv(e, t) {
  return py(e, t);
}
function VC(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function mt(e, t, n, r) {
  return new VC(e, t, n, r);
}
function of(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function _C(e) {
  if (typeof e == "function") return of(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ed)) return 11;
    if (e === Td) return 14;
  }
  return 2;
}
function qn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = mt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ta(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) of(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Xr:
        return Rr(n.children, o, i, t);
      case Cd:
        (s = 8), (o |= 8);
        break;
      case Fu:
        return (
          (e = mt(12, n, t, o | 2)), (e.elementType = Fu), (e.lanes = i), e
        );
      case Vu:
        return (e = mt(13, n, t, o)), (e.elementType = Vu), (e.lanes = i), e;
      case _u:
        return (e = mt(19, n, t, o)), (e.elementType = _u), (e.lanes = i), e;
      case qg:
        return cl(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Yg:
              s = 10;
              break e;
            case Xg:
              s = 9;
              break e;
            case Ed:
              s = 11;
              break e;
            case Td:
              s = 14;
              break e;
            case Nn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(D(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = mt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Rr(e, t, n, r) {
  return (e = mt(7, e, r, t)), (e.lanes = n), e;
}
function cl(e, t, n, r) {
  return (
    (e = mt(22, e, r, t)),
    (e.elementType = qg),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function cu(e, t, n) {
  return (e = mt(6, e, null, t)), (e.lanes = n), e;
}
function du(e, t, n) {
  return (
    (t = mt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function zC(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Hl(0)),
    (this.expirationTimes = Hl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Hl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function sf(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new zC(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = mt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    $d(i),
    e
  );
}
function BC(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Yr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function $v(e) {
  if (!e) return Jn;
  e = e._reactInternals;
  e: {
    if (_r(e) !== e || e.tag !== 1) throw Error(D(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (qe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(D(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (qe(n)) return $y(e, n, t);
  }
  return t;
}
function Uv(e, t, n, r, o, i, s, a, l) {
  return (
    (e = sf(n, r, !0, e, o, i, s, a, l)),
    (e.context = $v(null)),
    (n = e.current),
    (r = We()),
    (o = Xn(n)),
    (i = dn(r, o)),
    (i.callback = t ?? null),
    Qn(n, i, o),
    (e.current.lanes = o),
    ts(e, o, r),
    Ze(e, r),
    e
  );
}
function dl(e, t, n, r) {
  var o = t.current,
    i = We(),
    s = Xn(o);
  return (
    (n = $v(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = dn(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Qn(o, t, s)),
    e !== null && (jt(e, o, s, i), Ys(e, o, s)),
    s
  );
}
function Ia(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function vp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function af(e, t) {
  vp(e, t), (e = e.alternate) && vp(e, t);
}
function $C() {
  return null;
}
var Wv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function lf(e) {
  this._internalRoot = e;
}
fl.prototype.render = lf.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(D(409));
  dl(e, t, null, null);
};
fl.prototype.unmount = lf.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ir(function () {
      dl(null, e, null, null);
    }),
      (t[hn] = null);
  }
};
function fl(e) {
  this._internalRoot = e;
}
fl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Sy();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ln.length && t !== 0 && t < Ln[n].priority; n++);
    Ln.splice(n, 0, e), n === 0 && Ey(e);
  }
};
function uf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function hl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function xp() {}
function UC(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Ia(s);
        i.call(u);
      };
    }
    var s = Uv(t, r, e, 0, null, !1, !1, "", xp);
    return (
      (e._reactRootContainer = s),
      (e[hn] = s.current),
      ji(e.nodeType === 8 ? e.parentNode : e),
      Ir(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Ia(l);
      a.call(u);
    };
  }
  var l = sf(e, 0, !1, null, null, !1, !1, "", xp);
  return (
    (e._reactRootContainer = l),
    (e[hn] = l.current),
    ji(e.nodeType === 8 ? e.parentNode : e),
    Ir(function () {
      dl(t, l, n, r);
    }),
    l
  );
}
function pl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = Ia(s);
        a.call(l);
      };
    }
    dl(t, s, e, o);
  } else s = UC(n, t, e, o, r);
  return Ia(s);
}
xy = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ci(t.pendingLanes);
        n !== 0 &&
          (kd(t, n | 1), Ze(t, ye()), !(Z & 6) && ((Oo = ye() + 500), lr()));
      }
      break;
    case 13:
      Ir(function () {
        var r = pn(e, 1);
        if (r !== null) {
          var o = We();
          jt(r, e, 1, o);
        }
      }),
        af(e, 1);
  }
};
Ad = function (e) {
  if (e.tag === 13) {
    var t = pn(e, 134217728);
    if (t !== null) {
      var n = We();
      jt(t, e, 134217728, n);
    }
    af(e, 134217728);
  }
};
wy = function (e) {
  if (e.tag === 13) {
    var t = Xn(e),
      n = pn(e, t);
    if (n !== null) {
      var r = We();
      jt(n, e, t, r);
    }
    af(e, t);
  }
};
Sy = function () {
  return te;
};
Cy = function (e, t) {
  var n = te;
  try {
    return (te = e), t();
  } finally {
    te = n;
  }
};
Yu = function (e, t, n) {
  switch (t) {
    case "input":
      if (($u(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ol(r);
            if (!o) throw Error(D(90));
            Jg(r), $u(r, o);
          }
        }
      }
      break;
    case "textarea":
      ty(e, n);
      break;
    case "select":
      (t = n.value), t != null && co(e, !!n.multiple, t, !1);
  }
};
ly = tf;
uy = Ir;
var WC = { usingClientEntryPoint: !1, Events: [rs, eo, ol, sy, ay, tf] },
  oi = {
    findFiberByHostInstance: yr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  HC = {
    bundleType: oi.bundleType,
    version: oi.version,
    rendererPackageName: oi.rendererPackageName,
    rendererConfig: oi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: vn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = fy(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: oi.findFiberByHostInstance || $C,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ds = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ds.isDisabled && Ds.supportsFiber)
    try {
      (el = Ds.inject(HC)), (Xt = Ds);
    } catch {}
}
ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = WC;
ut.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!uf(t)) throw Error(D(200));
  return BC(e, t, null, n);
};
ut.createRoot = function (e, t) {
  if (!uf(e)) throw Error(D(299));
  var n = !1,
    r = "",
    o = Wv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = sf(e, 1, !1, null, null, n, !1, r, o)),
    (e[hn] = t.current),
    ji(e.nodeType === 8 ? e.parentNode : e),
    new lf(t)
  );
};
ut.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(D(188))
      : ((e = Object.keys(e).join(",")), Error(D(268, e)));
  return (e = fy(t)), (e = e === null ? null : e.stateNode), e;
};
ut.flushSync = function (e) {
  return Ir(e);
};
ut.hydrate = function (e, t, n) {
  if (!hl(t)) throw Error(D(200));
  return pl(null, e, t, !0, n);
};
ut.hydrateRoot = function (e, t, n) {
  if (!uf(e)) throw Error(D(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = Wv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Uv(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[hn] = t.current),
    ji(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new fl(t);
};
ut.render = function (e, t, n) {
  if (!hl(t)) throw Error(D(200));
  return pl(null, e, t, !1, n);
};
ut.unmountComponentAtNode = function (e) {
  if (!hl(e)) throw Error(D(40));
  return e._reactRootContainer
    ? (Ir(function () {
        pl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[hn] = null);
        });
      }),
      !0)
    : !1;
};
ut.unstable_batchedUpdates = tf;
ut.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!hl(n)) throw Error(D(200));
  if (e == null || e._reactInternals === void 0) throw Error(D(38));
  return pl(e, t, n, !1, r);
};
ut.version = "18.3.1-next-f1338f8080-20240426";
function Hv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hv);
    } catch (e) {
      console.error(e);
    }
}
Hv(), (Hg.exports = ut);
var is = Hg.exports;
const Kv = Dg(is);
var Gv,
  wp = is;
(Gv = wp.createRoot), wp.hydrateRoot;
var ml = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  gl = typeof window > "u" || "Deno" in globalThis;
function Rt() {}
function KC(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function GC(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function QC(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Ac(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function YC(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Sp(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: i,
    queryKey: s,
    stale: a,
  } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== cf(s, t.options)) return !1;
    } else if (!Hi(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const l = t.isActive();
    if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (o && o !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function Cp(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Wi(t.options.mutationKey) !== Wi(i)) return !1;
    } else if (!Hi(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function cf(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Wi)(e);
}
function Wi(e) {
  return JSON.stringify(e, (t, n) =>
    Rc(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n
  );
}
function Hi(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? Object.keys(t).every((n) => Hi(e[n], t[n]))
    : !1;
}
function Qv(e, t) {
  if (e === t) return e;
  const n = Ep(e) && Ep(t);
  if (n || (Rc(e) && Rc(t))) {
    const r = n ? e : Object.keys(e),
      o = r.length,
      i = n ? t : Object.keys(t),
      s = i.length,
      a = n ? [] : {},
      l = new Set(r);
    let u = 0;
    for (let c = 0; c < s; c++) {
      const d = n ? c : i[c];
      ((!n && l.has(d)) || n) && e[d] === void 0 && t[d] === void 0
        ? ((a[d] = void 0), u++)
        : ((a[d] = Qv(e[d], t[d])), a[d] === e[d] && e[d] !== void 0 && u++);
    }
    return o === s && u === o ? e : a;
  }
  return t;
}
function Ep(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Rc(e) {
  if (!Tp(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !Tp(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Tp(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function XC(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function qC(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? Qv(e, t)
    : t;
}
function ZC(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function JC(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var df = Symbol();
function Yv(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === df
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var Cr,
  jn,
  wo,
  Tg,
  eE =
    ((Tg = class extends ml {
      constructor() {
        super();
        J(this, Cr);
        J(this, jn);
        J(this, wo);
        G(this, wo, (t) => {
          if (!gl && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        M(this, jn) || this.setEventListener(M(this, wo));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = M(this, jn)) == null || t.call(this), G(this, jn, void 0));
      }
      setEventListener(t) {
        var n;
        G(this, wo, t),
          (n = M(this, jn)) == null || n.call(this),
          G(
            this,
            jn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        M(this, Cr) !== t && (G(this, Cr, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof M(this, Cr) == "boolean"
          ? M(this, Cr)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Cr = new WeakMap()),
    (jn = new WeakMap()),
    (wo = new WeakMap()),
    Tg),
  Xv = new eE(),
  So,
  In,
  Co,
  bg,
  tE =
    ((bg = class extends ml {
      constructor() {
        super();
        J(this, So, !0);
        J(this, In);
        J(this, Co);
        G(this, Co, (t) => {
          if (!gl && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        M(this, In) || this.setEventListener(M(this, Co));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = M(this, In)) == null || t.call(this), G(this, In, void 0));
      }
      setEventListener(t) {
        var n;
        G(this, Co, t),
          (n = M(this, In)) == null || n.call(this),
          G(this, In, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        M(this, So) !== t &&
          (G(this, So, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return M(this, So);
      }
    }),
    (So = new WeakMap()),
    (In = new WeakMap()),
    (Co = new WeakMap()),
    bg),
  Fa = new tE();
function nE() {
  let e, t;
  const n = new Promise((o, i) => {
    (e = o), (t = i);
  });
  (n.status = "pending"), n.catch(() => {});
  function r(o) {
    Object.assign(n, o), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (o) => {
      r({ status: "fulfilled", value: o }), e(o);
    }),
    (n.reject = (o) => {
      r({ status: "rejected", reason: o }), t(o);
    }),
    n
  );
}
function rE(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function qv(e) {
  return (e ?? "online") === "online" ? Fa.isOnline() : !0;
}
var Zv = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function fu(e) {
  return e instanceof Zv;
}
function Jv(e) {
  let t = !1,
    n = 0,
    r = !1,
    o;
  const i = nE(),
    s = (g) => {
      var x;
      r || (f(new Zv(g)), (x = e.abort) == null || x.call(e));
    },
    a = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    u = () =>
      Xv.isFocused() &&
      (e.networkMode === "always" || Fa.isOnline()) &&
      e.canRun(),
    c = () => qv(e.networkMode) && e.canRun(),
    d = (g) => {
      var x;
      r ||
        ((r = !0),
        (x = e.onSuccess) == null || x.call(e, g),
        o == null || o(),
        i.resolve(g));
    },
    f = (g) => {
      var x;
      r ||
        ((r = !0),
        (x = e.onError) == null || x.call(e, g),
        o == null || o(),
        i.reject(g));
    },
    h = () =>
      new Promise((g) => {
        var x;
        (o = (m) => {
          (r || u()) && g(m);
        }),
          (x = e.onPause) == null || x.call(e);
      }).then(() => {
        var g;
        (o = void 0), r || (g = e.onContinue) == null || g.call(e);
      }),
    v = () => {
      if (r) return;
      let g;
      const x = n === 0 ? e.initialPromise : void 0;
      try {
        g = x ?? e.fn();
      } catch (m) {
        g = Promise.reject(m);
      }
      Promise.resolve(g)
        .then(d)
        .catch((m) => {
          var T;
          if (r) return;
          const p = e.retry ?? (gl ? 0 : 3),
            y = e.retryDelay ?? rE,
            S = typeof y == "function" ? y(n, m) : y,
            E =
              p === !0 ||
              (typeof p == "number" && n < p) ||
              (typeof p == "function" && p(n, m));
          if (t || !E) {
            f(m);
            return;
          }
          n++,
            (T = e.onFail) == null || T.call(e, n, m),
            XC(S)
              .then(() => (u() ? void 0 : h()))
              .then(() => {
                t ? f(m) : v();
              });
        });
    };
  return {
    promise: i,
    cancel: s,
    continue: () => (o == null || o(), i),
    cancelRetry: a,
    continueRetry: l,
    canStart: c,
    start: () => (c() ? v() : h().then(v), i),
  };
}
var oE = (e) => setTimeout(e, 0);
function iE() {
  let e = [],
    t = 0,
    n = (a) => {
      a();
    },
    r = (a) => {
      a();
    },
    o = oE;
  const i = (a) => {
      t
        ? e.push(a)
        : o(() => {
            n(a);
          });
    },
    s = () => {
      const a = e;
      (e = []),
        a.length &&
          o(() => {
            r(() => {
              a.forEach((l) => {
                n(l);
              });
            });
          });
    };
  return {
    batch: (a) => {
      let l;
      t++;
      try {
        l = a();
      } finally {
        t--, t || s();
      }
      return l;
    },
    batchCalls:
      (a) =>
      (...l) => {
        i(() => {
          a(...l);
        });
      },
    schedule: i,
    setNotifyFunction: (a) => {
      n = a;
    },
    setBatchNotifyFunction: (a) => {
      r = a;
    },
    setScheduler: (a) => {
      o = a;
    },
  };
}
var Be = iE(),
  Er,
  Pg,
  e0 =
    ((Pg = class {
      constructor() {
        J(this, Er);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          GC(this.gcTime) &&
            G(
              this,
              Er,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (gl ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        M(this, Er) && (clearTimeout(M(this, Er)), G(this, Er, void 0));
      }
    }),
    (Er = new WeakMap()),
    Pg),
  Eo,
  Tr,
  ft,
  br,
  Ie,
  Zi,
  Pr,
  Mt,
  on,
  kg,
  sE =
    ((kg = class extends e0 {
      constructor(t) {
        super();
        J(this, Mt);
        J(this, Eo);
        J(this, Tr);
        J(this, ft);
        J(this, br);
        J(this, Ie);
        J(this, Zi);
        J(this, Pr);
        G(this, Pr, !1),
          G(this, Zi, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          G(this, br, t.client),
          G(this, ft, M(this, br).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          G(this, Eo, lE(this.options)),
          (this.state = t.state ?? M(this, Eo)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = M(this, Ie)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...M(this, Zi), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          M(this, ft).remove(this);
      }
      setData(t, n) {
        const r = qC(this.state.data, t, this.options);
        return (
          Le(this, Mt, on).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        Le(this, Mt, on).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, o;
        const n = (r = M(this, Ie)) == null ? void 0 : r.promise;
        return (
          (o = M(this, Ie)) == null || o.cancel(t),
          n ? n.then(Rt).catch(Rt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(M(this, Eo));
      }
      isActive() {
        return this.observers.some((t) => YC(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === df ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => Ac(t.options.staleTime, this) === "static"
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
          ? !1
          : this.state.isInvalidated
          ? !0
          : !QC(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = M(this, Ie)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = M(this, Ie)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          M(this, ft).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (M(this, Ie) &&
              (M(this, Pr)
                ? M(this, Ie).cancel({ revert: !0 })
                : M(this, Ie).cancelRetry()),
            this.scheduleGc()),
          M(this, ft).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Le(this, Mt, on).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var u, c, d;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (M(this, Ie))
            return M(this, Ie).continueRetry(), M(this, Ie).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const f = this.observers.find((h) => h.options.queryFn);
          f && this.setOptions(f.options);
        }
        const r = new AbortController(),
          o = (f) => {
            Object.defineProperty(f, "signal", {
              enumerable: !0,
              get: () => (G(this, Pr, !0), r.signal),
            });
          },
          i = () => {
            const f = Yv(this.options, n),
              v = (() => {
                const g = {
                  client: M(this, br),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return o(g), g;
              })();
            return (
              G(this, Pr, !1),
              this.options.persister ? this.options.persister(f, v, this) : f(v)
            );
          },
          a = (() => {
            const f = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: M(this, br),
              state: this.state,
              fetchFn: i,
            };
            return o(f), f;
          })();
        (u = this.options.behavior) == null || u.onFetch(a, this),
          G(this, Tr, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((c = a.fetchOptions) == null ? void 0 : c.meta)) &&
            Le(this, Mt, on).call(this, {
              type: "fetch",
              meta: (d = a.fetchOptions) == null ? void 0 : d.meta,
            });
        const l = (f) => {
          var h, v, g, x;
          (fu(f) && f.silent) ||
            Le(this, Mt, on).call(this, { type: "error", error: f }),
            fu(f) ||
              ((v = (h = M(this, ft).config).onError) == null ||
                v.call(h, f, this),
              (x = (g = M(this, ft).config).onSettled) == null ||
                x.call(g, this.state.data, f, this)),
            this.scheduleGc();
        };
        return (
          G(
            this,
            Ie,
            Jv({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: a.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (f) => {
                var h, v, g, x;
                if (f === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(f);
                } catch (m) {
                  l(m);
                  return;
                }
                (v = (h = M(this, ft).config).onSuccess) == null ||
                  v.call(h, f, this),
                  (x = (g = M(this, ft).config).onSettled) == null ||
                    x.call(g, f, this.state.error, this),
                  this.scheduleGc();
              },
              onError: l,
              onFail: (f, h) => {
                Le(this, Mt, on).call(this, {
                  type: "failed",
                  failureCount: f,
                  error: h,
                });
              },
              onPause: () => {
                Le(this, Mt, on).call(this, { type: "pause" });
              },
              onContinue: () => {
                Le(this, Mt, on).call(this, { type: "continue" });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
              canRun: () => !0,
            })
          ),
          M(this, Ie).start()
        );
      }
    }),
    (Eo = new WeakMap()),
    (Tr = new WeakMap()),
    (ft = new WeakMap()),
    (br = new WeakMap()),
    (Ie = new WeakMap()),
    (Zi = new WeakMap()),
    (Pr = new WeakMap()),
    (Mt = new WeakSet()),
    (on = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...aE(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return (
              G(this, Tr, void 0),
              {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!t.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case "error":
            const o = t.error;
            return fu(o) && o.revert && M(this, Tr)
              ? { ...M(this, Tr), fetchStatus: "idle" }
              : {
                  ...r,
                  error: o,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: o,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        Be.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            M(this, ft).notify({ query: this, type: "updated", action: t });
        });
    }),
    kg);
function aE(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: qv(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function lE(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Wt,
  Ag,
  uE =
    ((Ag = class extends ml {
      constructor(t = {}) {
        super();
        J(this, Wt);
        (this.config = t), G(this, Wt, new Map());
      }
      build(t, n, r) {
        const o = n.queryKey,
          i = n.queryHash ?? cf(o, n);
        let s = this.get(i);
        return (
          s ||
            ((s = new sE({
              client: t,
              queryKey: o,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(o),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        M(this, Wt).has(t.queryHash) ||
          (M(this, Wt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = M(this, Wt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && M(this, Wt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Be.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return M(this, Wt).get(t);
      }
      getAll() {
        return [...M(this, Wt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Sp(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => Sp(t, r)) : n;
      }
      notify(t) {
        Be.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Be.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Be.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Wt = new WeakMap()),
    Ag),
  Ht,
  _e,
  kr,
  Kt,
  An,
  Rg,
  cE =
    ((Rg = class extends e0 {
      constructor(t) {
        super();
        J(this, Kt);
        J(this, Ht);
        J(this, _e);
        J(this, kr);
        (this.mutationId = t.mutationId),
          G(this, _e, t.mutationCache),
          G(this, Ht, []),
          (this.state = t.state || dE()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        M(this, Ht).includes(t) ||
          (M(this, Ht).push(t),
          this.clearGcTimeout(),
          M(this, _e).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        G(
          this,
          Ht,
          M(this, Ht).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          M(this, _e).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        M(this, Ht).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : M(this, _e).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = M(this, kr)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var i, s, a, l, u, c, d, f, h, v, g, x, m, p, y, S, E, T, b, P;
        const n = () => {
          Le(this, Kt, An).call(this, { type: "continue" });
        };
        G(
          this,
          kr,
          Jv({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (N, A) => {
              Le(this, Kt, An).call(this, {
                type: "failed",
                failureCount: N,
                error: A,
              });
            },
            onPause: () => {
              Le(this, Kt, An).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => M(this, _e).canRun(this),
          })
        );
        const r = this.state.status === "pending",
          o = !M(this, kr).canStart();
        try {
          if (r) n();
          else {
            Le(this, Kt, An).call(this, {
              type: "pending",
              variables: t,
              isPaused: o,
            }),
              await ((s = (i = M(this, _e).config).onMutate) == null
                ? void 0
                : s.call(i, t, this));
            const A = await ((l = (a = this.options).onMutate) == null
              ? void 0
              : l.call(a, t));
            A !== this.state.context &&
              Le(this, Kt, An).call(this, {
                type: "pending",
                context: A,
                variables: t,
                isPaused: o,
              });
          }
          const N = await M(this, kr).start();
          return (
            await ((c = (u = M(this, _e).config).onSuccess) == null
              ? void 0
              : c.call(u, N, t, this.state.context, this)),
            await ((f = (d = this.options).onSuccess) == null
              ? void 0
              : f.call(d, N, t, this.state.context)),
            await ((v = (h = M(this, _e).config).onSettled) == null
              ? void 0
              : v.call(
                  h,
                  N,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((x = (g = this.options).onSettled) == null
              ? void 0
              : x.call(g, N, null, t, this.state.context)),
            Le(this, Kt, An).call(this, { type: "success", data: N }),
            N
          );
        } catch (N) {
          try {
            throw (
              (await ((p = (m = M(this, _e).config).onError) == null
                ? void 0
                : p.call(m, N, t, this.state.context, this)),
              await ((S = (y = this.options).onError) == null
                ? void 0
                : S.call(y, N, t, this.state.context)),
              await ((T = (E = M(this, _e).config).onSettled) == null
                ? void 0
                : T.call(
                    E,
                    void 0,
                    N,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((P = (b = this.options).onSettled) == null
                ? void 0
                : P.call(b, void 0, N, t, this.state.context)),
              N)
            );
          } finally {
            Le(this, Kt, An).call(this, { type: "error", error: N });
          }
        } finally {
          M(this, _e).runNext(this);
        }
      }
    }),
    (Ht = new WeakMap()),
    (_e = new WeakMap()),
    (kr = new WeakMap()),
    (Kt = new WeakSet()),
    (An = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        Be.batch(() => {
          M(this, Ht).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            M(this, _e).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    Rg);
function dE() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var ln,
  Nt,
  Ji,
  Mg,
  fE =
    ((Mg = class extends ml {
      constructor(t = {}) {
        super();
        J(this, ln);
        J(this, Nt);
        J(this, Ji);
        (this.config = t),
          G(this, ln, new Set()),
          G(this, Nt, new Map()),
          G(this, Ji, 0);
      }
      build(t, n, r) {
        const o = new cE({
          mutationCache: this,
          mutationId: ++ms(this, Ji)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(o), o;
      }
      add(t) {
        M(this, ln).add(t);
        const n = Ls(t);
        if (typeof n == "string") {
          const r = M(this, Nt).get(n);
          r ? r.push(t) : M(this, Nt).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (M(this, ln).delete(t)) {
          const n = Ls(t);
          if (typeof n == "string") {
            const r = M(this, Nt).get(n);
            if (r)
              if (r.length > 1) {
                const o = r.indexOf(t);
                o !== -1 && r.splice(o, 1);
              } else r[0] === t && M(this, Nt).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = Ls(t);
        if (typeof n == "string") {
          const r = M(this, Nt).get(n),
            o =
              r == null ? void 0 : r.find((i) => i.state.status === "pending");
          return !o || o === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = Ls(t);
        if (typeof n == "string") {
          const o =
            (r = M(this, Nt).get(n)) == null
              ? void 0
              : r.find((i) => i !== t && i.state.isPaused);
          return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        Be.batch(() => {
          M(this, ln).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            M(this, ln).clear(),
            M(this, Nt).clear();
        });
      }
      getAll() {
        return Array.from(M(this, ln));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Cp(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Cp(t, n));
      }
      notify(t) {
        Be.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return Be.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(Rt)))
        );
      }
    }),
    (ln = new WeakMap()),
    (Nt = new WeakMap()),
    (Ji = new WeakMap()),
    Mg);
function Ls(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function bp(e) {
  return {
    onFetch: (t, n) => {
      var c, d, f, h, v;
      const r = t.options,
        o =
          (f =
            (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null
              ? void 0
              : d.fetchMore) == null
            ? void 0
            : f.direction,
        i = ((h = t.state.data) == null ? void 0 : h.pages) || [],
        s = ((v = t.state.data) == null ? void 0 : v.pageParams) || [];
      let a = { pages: [], pageParams: [] },
        l = 0;
      const u = async () => {
        let g = !1;
        const x = (y) => {
            Object.defineProperty(y, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (g = !0)
                  : t.signal.addEventListener("abort", () => {
                      g = !0;
                    }),
                t.signal
              ),
            });
          },
          m = Yv(t.options, t.fetchOptions),
          p = async (y, S, E) => {
            if (g) return Promise.reject();
            if (S == null && y.pages.length) return Promise.resolve(y);
            const b = (() => {
                const F = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: S,
                  direction: E ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return x(F), F;
              })(),
              P = await m(b),
              { maxPages: N } = t.options,
              A = E ? JC : ZC;
            return {
              pages: A(y.pages, P, N),
              pageParams: A(y.pageParams, S, N),
            };
          };
        if (o && i.length) {
          const y = o === "backward",
            S = y ? hE : Pp,
            E = { pages: i, pageParams: s },
            T = S(r, E);
          a = await p(E, T, y);
        } else {
          const y = e ?? i.length;
          do {
            const S = l === 0 ? s[0] ?? r.initialPageParam : Pp(r, a);
            if (l > 0 && S == null) break;
            (a = await p(a, S)), l++;
          } while (l < y);
        }
        return a;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var g, x;
            return (x = (g = t.options).persister) == null
              ? void 0
              : x.call(
                  g,
                  u,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function Pp(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function hE(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var me,
  Fn,
  Vn,
  To,
  bo,
  _n,
  Po,
  ko,
  Ng,
  pE =
    ((Ng = class {
      constructor(e = {}) {
        J(this, me);
        J(this, Fn);
        J(this, Vn);
        J(this, To);
        J(this, bo);
        J(this, _n);
        J(this, Po);
        J(this, ko);
        G(this, me, e.queryCache || new uE()),
          G(this, Fn, e.mutationCache || new fE()),
          G(this, Vn, e.defaultOptions || {}),
          G(this, To, new Map()),
          G(this, bo, new Map()),
          G(this, _n, 0);
      }
      mount() {
        ms(this, _n)._++,
          M(this, _n) === 1 &&
            (G(
              this,
              Po,
              Xv.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), M(this, me).onFocus());
              })
            ),
            G(
              this,
              ko,
              Fa.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), M(this, me).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        ms(this, _n)._--,
          M(this, _n) === 0 &&
            ((e = M(this, Po)) == null || e.call(this),
            G(this, Po, void 0),
            (t = M(this, ko)) == null || t.call(this),
            G(this, ko, void 0));
      }
      isFetching(e) {
        return M(this, me).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return M(this, Fn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = M(this, me).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = M(this, me).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(Ac(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return M(this, me)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          o = M(this, me).get(r.queryHash),
          i = o == null ? void 0 : o.state.data,
          s = KC(t, i);
        if (s !== void 0)
          return M(this, me)
            .build(this, r)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Be.batch(() =>
          M(this, me)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = M(this, me).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = M(this, me);
        Be.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = M(this, me);
        return Be.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          )
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = Be.batch(() =>
            M(this, me)
              .findAll(e)
              .map((o) => o.cancel(n))
          );
        return Promise.all(r).then(Rt).catch(Rt);
      }
      invalidateQueries(e, t = {}) {
        return Be.batch(
          () => (
            M(this, me)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t
                )
          )
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = Be.batch(() =>
            M(this, me)
              .findAll(e)
              .filter((o) => !o.isDisabled() && !o.isStatic())
              .map((o) => {
                let i = o.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(Rt)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(r).then(Rt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = M(this, me).build(this, t);
        return n.isStaleByTime(Ac(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(Rt).catch(Rt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = bp(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Rt).catch(Rt);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = bp(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return Fa.isOnline()
          ? M(this, Fn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return M(this, me);
      }
      getMutationCache() {
        return M(this, Fn);
      }
      getDefaultOptions() {
        return M(this, Vn);
      }
      setDefaultOptions(e) {
        G(this, Vn, e);
      }
      setQueryDefaults(e, t) {
        M(this, To).set(Wi(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...M(this, To).values()],
          n = {};
        return (
          t.forEach((r) => {
            Hi(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        M(this, bo).set(Wi(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...M(this, bo).values()],
          n = {};
        return (
          t.forEach((r) => {
            Hi(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...M(this, Vn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = cf(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === df && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...M(this, Vn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        M(this, me).clear(), M(this, Fn).clear();
      }
    }),
    (me = new WeakMap()),
    (Fn = new WeakMap()),
    (Vn = new WeakMap()),
    (To = new WeakMap()),
    (bo = new WeakMap()),
    (_n = new WeakMap()),
    (Po = new WeakMap()),
    (ko = new WeakMap()),
    Ng),
  mE = w.createContext(void 0),
  gE = ({ client: e, children: t }) => (
    w.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    C.jsx(mE.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Va() {
  return (
    (Va = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Va.apply(this, arguments)
  );
}
var $n;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})($n || ($n = {}));
const kp = "popstate";
function yE(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: a } = r.location;
    return Mc(
      "",
      { pathname: i, search: s, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : n0(o);
  }
  return xE(t, n, null, e);
}
function et(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function t0(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function vE() {
  return Math.random().toString(36).substr(2, 8);
}
function Ap(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Mc(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Va(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? yl(t) : t,
      { state: n, key: (t && t.key) || r || vE() }
    )
  );
}
function n0(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function yl(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function xE(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    a = $n.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState(Va({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function d() {
    a = $n.Pop;
    let x = c(),
      m = x == null ? null : x - u;
    (u = x), l && l({ action: a, location: g.location, delta: m });
  }
  function f(x, m) {
    a = $n.Push;
    let p = Mc(g.location, x, m);
    u = c() + 1;
    let y = Ap(p, u),
      S = g.createHref(p);
    try {
      s.pushState(y, "", S);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      o.location.assign(S);
    }
    i && l && l({ action: a, location: g.location, delta: 1 });
  }
  function h(x, m) {
    a = $n.Replace;
    let p = Mc(g.location, x, m);
    u = c();
    let y = Ap(p, u),
      S = g.createHref(p);
    s.replaceState(y, "", S),
      i && l && l({ action: a, location: g.location, delta: 0 });
  }
  function v(x) {
    let m = o.location.origin !== "null" ? o.location.origin : o.location.href,
      p = typeof x == "string" ? x : n0(x);
    return (
      (p = p.replace(/ $/, "%20")),
      et(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, m)
    );
  }
  let g = {
    get action() {
      return a;
    },
    get location() {
      return e(o, s);
    },
    listen(x) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(kp, d),
        (l = x),
        () => {
          o.removeEventListener(kp, d), (l = null);
        }
      );
    },
    createHref(x) {
      return t(o, x);
    },
    createURL: v,
    encodeLocation(x) {
      let m = v(x);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: f,
    replace: h,
    go(x) {
      return s.go(x);
    },
  };
  return g;
}
var Rp;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Rp || (Rp = {}));
function wE(e, t, n) {
  return n === void 0 && (n = "/"), SE(e, t, n, !1);
}
function SE(e, t, n, r) {
  let o = typeof t == "string" ? yl(t) : t,
    i = i0(o.pathname || "/", n);
  if (i == null) return null;
  let s = r0(e);
  CE(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = LE(i);
    a = NE(s[l], u, r);
  }
  return a;
}
function r0(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, s, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (et(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = yo([r, l.relativePath]),
      c = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (et(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      r0(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: RE(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, s) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, s);
      else for (let l of o0(i.path)) o(i, s, l);
    }),
    t
  );
}
function o0(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = o0(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? i : [i, l].join("/")))),
    o && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function CE(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : ME(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const EE = /^:[\w-]+$/,
  TE = 3,
  bE = 2,
  PE = 1,
  kE = 10,
  AE = -2,
  Mp = (e) => e === "*";
function RE(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Mp) && (r += AE),
    t && (r += bE),
    n
      .filter((o) => !Mp(o))
      .reduce((o, i) => o + (EE.test(i) ? TE : i === "" ? PE : kE), r)
  );
}
function ME(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function NE(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    i = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = i === "/" ? t : t.slice(i.length) || "/",
      d = Np(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c
      ),
      f = l.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = Np(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c
        )),
      !d)
    )
      return null;
    Object.assign(o, d.params),
      s.push({
        params: o,
        pathname: yo([i, d.pathname]),
        pathnameBase: OE(yo([i, d.pathnameBase])),
        route: f,
      }),
      d.pathnameBase !== "/" && (i = yo([i, d.pathnameBase]));
  }
  return s;
}
function Np(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = DE(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: f, isOptional: h } = c;
      if (f === "*") {
        let g = a[d] || "";
        s = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const v = a[d];
      return (
        h && !v ? (u[f] = void 0) : (u[f] = (v || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function DE(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    t0(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function LE(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      t0(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function i0(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const yo = (e) => e.join("/").replace(/\/\/+/g, "/"),
  OE = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function jE(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const s0 = ["post", "put", "patch", "delete"];
new Set(s0);
const IE = ["get", ...s0];
new Set(IE);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _a() {
  return (
    (_a = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    _a.apply(this, arguments)
  );
}
const FE = w.createContext(null),
  VE = w.createContext(null),
  a0 = w.createContext(null),
  vl = w.createContext(null),
  xl = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  l0 = w.createContext(null);
function ff() {
  return w.useContext(vl) != null;
}
function u0() {
  return ff() || et(!1), w.useContext(vl).location;
}
function _E(e, t) {
  return zE(e, t);
}
function zE(e, t, n, r) {
  ff() || et(!1);
  let { navigator: o } = w.useContext(a0),
    { matches: i } = w.useContext(xl),
    s = i[i.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let u = u0(),
    c;
  if (t) {
    var d;
    let x = typeof t == "string" ? yl(t) : t;
    l === "/" || ((d = x.pathname) != null && d.startsWith(l)) || et(!1),
      (c = x);
  } else c = u;
  let f = c.pathname || "/",
    h = f;
  if (l !== "/") {
    let x = l.replace(/^\//, "").split("/");
    h = "/" + f.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let v = wE(e, { pathname: h }),
    g = HE(
      v &&
        v.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, a, x.params),
            pathname: yo([
              l,
              o.encodeLocation
                ? o.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? l
                : yo([
                    l,
                    o.encodeLocation
                      ? o.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && g
    ? w.createElement(
        vl.Provider,
        {
          value: {
            location: _a(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: $n.Pop,
          },
        },
        g
      )
    : g;
}
function BE() {
  let e = YE(),
    t = jE(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return w.createElement(
    w.Fragment,
    null,
    w.createElement("h2", null, "Unexpected Application Error!"),
    w.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? w.createElement("pre", { style: o }, n) : null,
    null
  );
}
const $E = w.createElement(BE, null);
class UE extends w.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? w.createElement(
          xl.Provider,
          { value: this.props.routeContext },
          w.createElement(l0.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function WE(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = w.useContext(FE);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(xl.Provider, { value: t }, r)
  );
}
function HE(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    a = (o = n) == null ? void 0 : o.errors;
  if (a != null) {
    let c = s.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0
    );
    c >= 0 || et(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let d = s[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: f, errors: h } = n,
          v =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!h || h[d.route.id] === void 0);
        if (d.route.lazy || v) {
          (l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((c, d, f) => {
    let h,
      v = !1,
      g = null,
      x = null;
    n &&
      ((h = a && d.route.id ? a[d.route.id] : void 0),
      (g = d.route.errorElement || $E),
      l &&
        (u < 0 && f === 0
          ? ((v = !0), (x = null))
          : u === f &&
            ((v = !0), (x = d.route.hydrateFallbackElement || null))));
    let m = t.concat(s.slice(0, f + 1)),
      p = () => {
        let y;
        return (
          h
            ? (y = g)
            : v
            ? (y = x)
            : d.route.Component
            ? (y = w.createElement(d.route.Component, null))
            : d.route.element
            ? (y = d.route.element)
            : (y = c),
          w.createElement(WE, {
            match: d,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? w.createElement(UE, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: h,
          children: p(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var Nc = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(Nc || {});
function KE(e) {
  let t = w.useContext(VE);
  return t || et(!1), t;
}
function GE(e) {
  let t = w.useContext(xl);
  return t || et(!1), t;
}
function QE(e) {
  let t = GE(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || et(!1), n.route.id;
}
function YE() {
  var e;
  let t = w.useContext(l0),
    n = KE(Nc.UseRouteError),
    r = QE(Nc.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function XE(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function Dc(e) {
  et(!1);
}
function qE(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = $n.Pop,
    navigator: i,
    static: s = !1,
    future: a,
  } = e;
  ff() && et(!1);
  let l = t.replace(/^\/*/, "/"),
    u = w.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: s,
        future: _a({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, i, s]
    );
  typeof r == "string" && (r = yl(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
      state: h = null,
      key: v = "default",
    } = r,
    g = w.useMemo(() => {
      let x = i0(c, l);
      return x == null
        ? null
        : {
            location: { pathname: x, search: d, hash: f, state: h, key: v },
            navigationType: o,
          };
    }, [l, c, d, f, h, v, o]);
  return g == null
    ? null
    : w.createElement(
        a0.Provider,
        { value: u },
        w.createElement(vl.Provider, { children: n, value: g })
      );
}
function ZE(e) {
  let { children: t, location: n } = e;
  return _E(Lc(t), n);
}
new Promise(() => {});
function Lc(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    w.Children.forEach(e, (r, o) => {
      if (!w.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === w.Fragment) {
        n.push.apply(n, Lc(r.props.children, i));
        return;
      }
      r.type !== Dc && et(!1), !r.props.index || !r.props.children || et(!1);
      let s = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = Lc(r.props.children, i)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const JE = "6";
try {
  window.__reactRouterVersion = JE;
} catch {}
const eT = "startTransition",
  Dp = Ug[eT];
function tT(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = w.useRef();
  i.current == null && (i.current = yE({ window: o, v5Compat: !0 }));
  let s = i.current,
    [a, l] = w.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = w.useCallback(
      (d) => {
        u && Dp ? Dp(() => l(d)) : l(d);
      },
      [l, u]
    );
  return (
    w.useLayoutEffect(() => s.listen(c), [s, c]),
    w.useEffect(() => XE(r), [r]),
    w.createElement(qE, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
var Lp;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Lp || (Lp = {}));
var Op;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Op || (Op = {}));
var jp = ["light", "dark"],
  nT = "(prefers-color-scheme: dark)",
  rT = w.createContext(void 0),
  oT = { setTheme: (e) => {}, themes: [] },
  iT = () => {
    var e;
    return (e = w.useContext(rT)) != null ? e : oT;
  };
w.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: i,
    value: s,
    attrs: a,
    nonce: l,
  }) => {
    let u = i === "system",
      c =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${a
              .map((v) => `'${v}'`)
              .join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      d = o
        ? jp.includes(i) && i
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      f = (v, g = !1, x = !0) => {
        let m = s ? s[v] : v,
          p = g ? v + "|| ''" : `'${m}'`,
          y = "";
        return (
          o &&
            x &&
            !g &&
            jp.includes(v) &&
            (y += `d.style.colorScheme = '${v}';`),
          n === "class"
            ? g || m
              ? (y += `c.add(${p})`)
              : (y += "null")
            : m && (y += `d[s](n,${p})`),
          y
        );
      },
      h = e
        ? `!function(){${c}${f(e)}}()`
        : r
        ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${nT}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f(
            "dark"
          )}}else{${f("light")}}}else if(e){${
            s ? `var x=${JSON.stringify(s)};` : ""
          }${f(s ? "x[e]" : "e", !0)}}${
            u ? "" : "else{" + f(i, !1, !1) + "}"
          }${d}}catch(e){}}()`
        : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${
            s ? `var x=${JSON.stringify(s)};` : ""
          }${f(s ? "x[e]" : "e", !0)}}else{${f(
            i,
            !1,
            !1
          )};}${d}}catch(t){}}();`;
    return w.createElement("script", {
      nonce: l,
      dangerouslySetInnerHTML: { __html: h },
    });
  }
);
var sT = (e) => {
    switch (e) {
      case "success":
        return uT;
      case "info":
        return dT;
      case "warning":
        return cT;
      case "error":
        return fT;
      default:
        return null;
    }
  },
  aT = Array(12).fill(0),
  lT = ({ visible: e, className: t }) =>
    L.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      L.createElement(
        "div",
        { className: "sonner-spinner" },
        aT.map((n, r) =>
          L.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          })
        )
      )
    ),
  uT = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  cT = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  dT = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  fT = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  hT = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    L.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    L.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  pT = () => {
    let [e, t] = L.useState(document.hidden);
    return (
      L.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  Oc = 1,
  mT = class {
    constructor() {
      (this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          this.publish(e), (this.toasts = [...this.toasts, e]);
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            o =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : Oc++,
            i = this.toasts.find((a) => a.id === o),
            s = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            i
              ? (this.toasts = this.toasts.map((a) =>
                  a.id === o
                    ? (this.publish({ ...a, ...e, id: o, title: n }),
                      { ...a, ...e, id: o, dismissible: s, title: n })
                    : a
                ))
              : this.addToast({ title: n, ...r, dismissible: s, id: o }),
            o
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            o = n !== void 0,
            i,
            s = r
              .then(async (l) => {
                if (((i = ["resolve", l]), L.isValidElement(l)))
                  (o = !1), this.create({ id: n, type: "default", message: l });
                else if (yT(l) && !l.ok) {
                  o = !1;
                  let u =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${l.status}`)
                        : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${l.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: c,
                  });
                } else if (t.success !== void 0) {
                  o = !1;
                  let u =
                      typeof t.success == "function"
                        ? await t.success(l)
                        : t.success,
                    c =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: u,
                    description: c,
                  });
                }
              })
              .catch(async (l) => {
                if (((i = ["reject", l]), t.error !== void 0)) {
                  o = !1;
                  let u =
                      typeof t.error == "function" ? await t.error(l) : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: c,
                  });
                }
              })
              .finally(() => {
                var l;
                o && (this.dismiss(n), (n = void 0)),
                  (l = t.finally) == null || l.call(t);
              }),
            a = () =>
              new Promise((l, u) =>
                s.then(() => (i[0] === "reject" ? u(i[1]) : l(i[1]))).catch(u)
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: a }
            : Object.assign(n, { unwrap: a });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || Oc++;
          return this.create({ jsx: e(n), id: n, ...t }), n;
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set());
    }
  },
  Ge = new mT(),
  gT = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Oc++;
    return Ge.addToast({ title: e, ...t, id: n }), n;
  },
  yT = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  vT = gT,
  xT = () => Ge.toasts,
  wT = () => Ge.getActiveToasts();
Object.assign(
  vT,
  {
    success: Ge.success,
    info: Ge.info,
    warning: Ge.warning,
    error: Ge.error,
    custom: Ge.custom,
    message: Ge.message,
    promise: Ge.promise,
    dismiss: Ge.dismiss,
    loading: Ge.loading,
  },
  { getHistory: xT, getToasts: wT }
);
function ST(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  (r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e));
}
ST(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Os(e) {
  return e.label !== void 0;
}
var CT = 3,
  ET = "32px",
  TT = "16px",
  Ip = 4e3,
  bT = 356,
  PT = 14,
  kT = 20,
  AT = 200;
function bt(...e) {
  return e.filter(Boolean).join(" ");
}
function RT(e) {
  let [t, n] = e.split("-"),
    r = [];
  return t && r.push(t), n && r.push(n), r;
}
var MT = (e) => {
  var t, n, r, o, i, s, a, l, u, c, d;
  let {
      invert: f,
      toast: h,
      unstyled: v,
      interacting: g,
      setHeights: x,
      visibleToasts: m,
      heights: p,
      index: y,
      toasts: S,
      expanded: E,
      removeToast: T,
      defaultRichColors: b,
      closeButton: P,
      style: N,
      cancelButtonStyle: A,
      actionButtonStyle: F,
      className: j = "",
      descriptionClassName: U = "",
      duration: O,
      position: W,
      gap: z,
      loadingIcon: H,
      expandByDefault: k,
      classNames: R,
      icons: I,
      closeButtonAriaLabel: $ = "Close toast",
      pauseWhenPageIsHidden: B,
    } = e,
    [Y, q] = L.useState(null),
    [ve, De] = L.useState(null),
    [ee, Br] = L.useState(!1),
    [xn, cr] = L.useState(!1),
    [wn, $r] = L.useState(!1),
    [Sn, fs] = L.useState(!1),
    [jl, hs] = L.useState(!1),
    [Il, Yo] = L.useState(0),
    [Ur, ih] = L.useState(0),
    Xo = L.useRef(h.duration || O || Ip),
    sh = L.useRef(null),
    dr = L.useRef(null),
    d1 = y === 0,
    f1 = y + 1 <= m,
    dt = h.type,
    Wr = h.dismissible !== !1,
    h1 = h.className || "",
    p1 = h.descriptionClassName || "",
    ps = L.useMemo(
      () => p.findIndex((K) => K.toastId === h.id) || 0,
      [p, h.id]
    ),
    m1 = L.useMemo(() => {
      var K;
      return (K = h.closeButton) != null ? K : P;
    }, [h.closeButton, P]),
    ah = L.useMemo(() => h.duration || O || Ip, [h.duration, O]),
    Fl = L.useRef(0),
    Hr = L.useRef(0),
    lh = L.useRef(0),
    Kr = L.useRef(null),
    [g1, y1] = W.split("-"),
    uh = L.useMemo(
      () => p.reduce((K, ne, ue) => (ue >= ps ? K : K + ne.height), 0),
      [p, ps]
    ),
    ch = pT(),
    v1 = h.invert || f,
    Vl = dt === "loading";
  (Hr.current = L.useMemo(() => ps * z + uh, [ps, uh])),
    L.useEffect(() => {
      Xo.current = ah;
    }, [ah]),
    L.useEffect(() => {
      Br(!0);
    }, []),
    L.useEffect(() => {
      let K = dr.current;
      if (K) {
        let ne = K.getBoundingClientRect().height;
        return (
          ih(ne),
          x((ue) => [
            { toastId: h.id, height: ne, position: h.position },
            ...ue,
          ]),
          () => x((ue) => ue.filter((St) => St.toastId !== h.id))
        );
      }
    }, [x, h.id]),
    L.useLayoutEffect(() => {
      if (!ee) return;
      let K = dr.current,
        ne = K.style.height;
      K.style.height = "auto";
      let ue = K.getBoundingClientRect().height;
      (K.style.height = ne),
        ih(ue),
        x((St) =>
          St.find((Ct) => Ct.toastId === h.id)
            ? St.map((Ct) => (Ct.toastId === h.id ? { ...Ct, height: ue } : Ct))
            : [{ toastId: h.id, height: ue, position: h.position }, ...St]
        );
    }, [ee, h.title, h.description, x, h.id]);
  let Cn = L.useCallback(() => {
    cr(!0),
      Yo(Hr.current),
      x((K) => K.filter((ne) => ne.toastId !== h.id)),
      setTimeout(() => {
        T(h);
      }, AT);
  }, [h, T, x, Hr]);
  L.useEffect(() => {
    if (
      (h.promise && dt === "loading") ||
      h.duration === 1 / 0 ||
      h.type === "loading"
    )
      return;
    let K;
    return (
      E || g || (B && ch)
        ? (() => {
            if (lh.current < Fl.current) {
              let ne = new Date().getTime() - Fl.current;
              Xo.current = Xo.current - ne;
            }
            lh.current = new Date().getTime();
          })()
        : Xo.current !== 1 / 0 &&
          ((Fl.current = new Date().getTime()),
          (K = setTimeout(() => {
            var ne;
            (ne = h.onAutoClose) == null || ne.call(h, h), Cn();
          }, Xo.current))),
      () => clearTimeout(K)
    );
  }, [E, g, h, dt, B, ch, Cn]),
    L.useEffect(() => {
      h.delete && Cn();
    }, [Cn, h.delete]);
  function x1() {
    var K, ne, ue;
    return I != null && I.loading
      ? L.createElement(
          "div",
          {
            className: bt(
              R == null ? void 0 : R.loader,
              (K = h == null ? void 0 : h.classNames) == null
                ? void 0
                : K.loader,
              "sonner-loader"
            ),
            "data-visible": dt === "loading",
          },
          I.loading
        )
      : H
      ? L.createElement(
          "div",
          {
            className: bt(
              R == null ? void 0 : R.loader,
              (ne = h == null ? void 0 : h.classNames) == null
                ? void 0
                : ne.loader,
              "sonner-loader"
            ),
            "data-visible": dt === "loading",
          },
          H
        )
      : L.createElement(lT, {
          className: bt(
            R == null ? void 0 : R.loader,
            (ue = h == null ? void 0 : h.classNames) == null
              ? void 0
              : ue.loader
          ),
          visible: dt === "loading",
        });
  }
  return L.createElement(
    "li",
    {
      tabIndex: 0,
      ref: dr,
      className: bt(
        j,
        h1,
        R == null ? void 0 : R.toast,
        (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast,
        R == null ? void 0 : R.default,
        R == null ? void 0 : R[dt],
        (n = h == null ? void 0 : h.classNames) == null ? void 0 : n[dt]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = h.richColors) != null ? r : b,
      "data-styled": !(h.jsx || h.unstyled || v),
      "data-mounted": ee,
      "data-promise": !!h.promise,
      "data-swiped": jl,
      "data-removed": xn,
      "data-visible": f1,
      "data-y-position": g1,
      "data-x-position": y1,
      "data-index": y,
      "data-front": d1,
      "data-swiping": wn,
      "data-dismissible": Wr,
      "data-type": dt,
      "data-invert": v1,
      "data-swipe-out": Sn,
      "data-swipe-direction": ve,
      "data-expanded": !!(E || (k && ee)),
      style: {
        "--index": y,
        "--toasts-before": y,
        "--z-index": S.length - y,
        "--offset": `${xn ? Il : Hr.current}px`,
        "--initial-height": k ? "auto" : `${Ur}px`,
        ...N,
        ...h.style,
      },
      onDragEnd: () => {
        $r(!1), q(null), (Kr.current = null);
      },
      onPointerDown: (K) => {
        Vl ||
          !Wr ||
          ((sh.current = new Date()),
          Yo(Hr.current),
          K.target.setPointerCapture(K.pointerId),
          K.target.tagName !== "BUTTON" &&
            ($r(!0), (Kr.current = { x: K.clientX, y: K.clientY })));
      },
      onPointerUp: () => {
        var K, ne, ue, St;
        if (Sn || !Wr) return;
        Kr.current = null;
        let Ct = Number(
            ((K = dr.current) == null
              ? void 0
              : K.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          En = Number(
            ((ne = dr.current) == null
              ? void 0
              : ne.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          fr =
            new Date().getTime() -
            ((ue = sh.current) == null ? void 0 : ue.getTime()),
          Et = Y === "x" ? Ct : En,
          Tn = Math.abs(Et) / fr;
        if (Math.abs(Et) >= kT || Tn > 0.11) {
          Yo(Hr.current),
            (St = h.onDismiss) == null || St.call(h, h),
            De(
              Y === "x" ? (Ct > 0 ? "right" : "left") : En > 0 ? "down" : "up"
            ),
            Cn(),
            fs(!0),
            hs(!1);
          return;
        }
        $r(!1), q(null);
      },
      onPointerMove: (K) => {
        var ne, ue, St, Ct;
        if (
          !Kr.current ||
          !Wr ||
          ((ne = window.getSelection()) == null
            ? void 0
            : ne.toString().length) > 0
        )
          return;
        let En = K.clientY - Kr.current.y,
          fr = K.clientX - Kr.current.x,
          Et = (ue = e.swipeDirections) != null ? ue : RT(W);
        !Y &&
          (Math.abs(fr) > 1 || Math.abs(En) > 1) &&
          q(Math.abs(fr) > Math.abs(En) ? "x" : "y");
        let Tn = { x: 0, y: 0 };
        Y === "y"
          ? (Et.includes("top") || Et.includes("bottom")) &&
            ((Et.includes("top") && En < 0) ||
              (Et.includes("bottom") && En > 0)) &&
            (Tn.y = En)
          : Y === "x" &&
            (Et.includes("left") || Et.includes("right")) &&
            ((Et.includes("left") && fr < 0) ||
              (Et.includes("right") && fr > 0)) &&
            (Tn.x = fr),
          (Math.abs(Tn.x) > 0 || Math.abs(Tn.y) > 0) && hs(!0),
          (St = dr.current) == null ||
            St.style.setProperty("--swipe-amount-x", `${Tn.x}px`),
          (Ct = dr.current) == null ||
            Ct.style.setProperty("--swipe-amount-y", `${Tn.y}px`);
      },
    },
    m1 && !h.jsx
      ? L.createElement(
          "button",
          {
            "aria-label": $,
            "data-disabled": Vl,
            "data-close-button": !0,
            onClick:
              Vl || !Wr
                ? () => {}
                : () => {
                    var K;
                    Cn(), (K = h.onDismiss) == null || K.call(h, h);
                  },
            className: bt(
              R == null ? void 0 : R.closeButton,
              (o = h == null ? void 0 : h.classNames) == null
                ? void 0
                : o.closeButton
            ),
          },
          (i = I == null ? void 0 : I.close) != null ? i : hT
        )
      : null,
    h.jsx || w.isValidElement(h.title)
      ? h.jsx
        ? h.jsx
        : typeof h.title == "function"
        ? h.title()
        : h.title
      : L.createElement(
          L.Fragment,
          null,
          dt || h.icon || h.promise
            ? L.createElement(
                "div",
                {
                  "data-icon": "",
                  className: bt(
                    R == null ? void 0 : R.icon,
                    (s = h == null ? void 0 : h.classNames) == null
                      ? void 0
                      : s.icon
                  ),
                },
                h.promise || (h.type === "loading" && !h.icon)
                  ? h.icon || x1()
                  : null,
                h.type !== "loading"
                  ? h.icon || (I == null ? void 0 : I[dt]) || sT(dt)
                  : null
              )
            : null,
          L.createElement(
            "div",
            {
              "data-content": "",
              className: bt(
                R == null ? void 0 : R.content,
                (a = h == null ? void 0 : h.classNames) == null
                  ? void 0
                  : a.content
              ),
            },
            L.createElement(
              "div",
              {
                "data-title": "",
                className: bt(
                  R == null ? void 0 : R.title,
                  (l = h == null ? void 0 : h.classNames) == null
                    ? void 0
                    : l.title
                ),
              },
              typeof h.title == "function" ? h.title() : h.title
            ),
            h.description
              ? L.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: bt(
                      U,
                      p1,
                      R == null ? void 0 : R.description,
                      (u = h == null ? void 0 : h.classNames) == null
                        ? void 0
                        : u.description
                    ),
                  },
                  typeof h.description == "function"
                    ? h.description()
                    : h.description
                )
              : null
          ),
          w.isValidElement(h.cancel)
            ? h.cancel
            : h.cancel && Os(h.cancel)
            ? L.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: h.cancelButtonStyle || A,
                  onClick: (K) => {
                    var ne, ue;
                    Os(h.cancel) &&
                      Wr &&
                      ((ue = (ne = h.cancel).onClick) == null || ue.call(ne, K),
                      Cn());
                  },
                  className: bt(
                    R == null ? void 0 : R.cancelButton,
                    (c = h == null ? void 0 : h.classNames) == null
                      ? void 0
                      : c.cancelButton
                  ),
                },
                h.cancel.label
              )
            : null,
          w.isValidElement(h.action)
            ? h.action
            : h.action && Os(h.action)
            ? L.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: h.actionButtonStyle || F,
                  onClick: (K) => {
                    var ne, ue;
                    Os(h.action) &&
                      ((ue = (ne = h.action).onClick) == null || ue.call(ne, K),
                      !K.defaultPrevented && Cn());
                  },
                  className: bt(
                    R == null ? void 0 : R.actionButton,
                    (d = h == null ? void 0 : h.classNames) == null
                      ? void 0
                      : d.actionButton
                  ),
                },
                h.action.label
              )
            : null
        )
  );
};
function Fp() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function NT(e, t) {
  let n = {};
  return (
    [e, t].forEach((r, o) => {
      let i = o === 1,
        s = i ? "--mobile-offset" : "--offset",
        a = i ? TT : ET;
      function l(u) {
        ["top", "right", "bottom", "left"].forEach((c) => {
          n[`${s}-${c}`] = typeof u == "number" ? `${u}px` : u;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? l(r)
        : typeof r == "object"
        ? ["top", "right", "bottom", "left"].forEach((u) => {
            r[u] === void 0
              ? (n[`${s}-${u}`] = a)
              : (n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]);
          })
        : l(a);
    }),
    n
  );
}
var DT = w.forwardRef(function (e, t) {
  let {
      invert: n,
      position: r = "bottom-right",
      hotkey: o = ["altKey", "KeyT"],
      expand: i,
      closeButton: s,
      className: a,
      offset: l,
      mobileOffset: u,
      theme: c = "light",
      richColors: d,
      duration: f,
      style: h,
      visibleToasts: v = CT,
      toastOptions: g,
      dir: x = Fp(),
      gap: m = PT,
      loadingIcon: p,
      icons: y,
      containerAriaLabel: S = "Notifications",
      pauseWhenPageIsHidden: E,
    } = e,
    [T, b] = L.useState([]),
    P = L.useMemo(
      () =>
        Array.from(
          new Set(
            [r].concat(T.filter((B) => B.position).map((B) => B.position))
          )
        ),
      [T, r]
    ),
    [N, A] = L.useState([]),
    [F, j] = L.useState(!1),
    [U, O] = L.useState(!1),
    [W, z] = L.useState(
      c !== "system"
        ? c
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    H = L.useRef(null),
    k = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    R = L.useRef(null),
    I = L.useRef(!1),
    $ = L.useCallback((B) => {
      b((Y) => {
        var q;
        return (
          ((q = Y.find((ve) => ve.id === B.id)) != null && q.delete) ||
            Ge.dismiss(B.id),
          Y.filter(({ id: ve }) => ve !== B.id)
        );
      });
    }, []);
  return (
    L.useEffect(
      () =>
        Ge.subscribe((B) => {
          if (B.dismiss) {
            b((Y) => Y.map((q) => (q.id === B.id ? { ...q, delete: !0 } : q)));
            return;
          }
          setTimeout(() => {
            Kv.flushSync(() => {
              b((Y) => {
                let q = Y.findIndex((ve) => ve.id === B.id);
                return q !== -1
                  ? [...Y.slice(0, q), { ...Y[q], ...B }, ...Y.slice(q + 1)]
                  : [B, ...Y];
              });
            });
          });
        }),
      []
    ),
    L.useEffect(() => {
      if (c !== "system") {
        z(c);
        return;
      }
      if (
        (c === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? z("dark")
            : z("light")),
        typeof window > "u")
      )
        return;
      let B = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        B.addEventListener("change", ({ matches: Y }) => {
          z(Y ? "dark" : "light");
        });
      } catch {
        B.addListener(({ matches: q }) => {
          try {
            z(q ? "dark" : "light");
          } catch (ve) {
            console.error(ve);
          }
        });
      }
    }, [c]),
    L.useEffect(() => {
      T.length <= 1 && j(!1);
    }, [T]),
    L.useEffect(() => {
      let B = (Y) => {
        var q, ve;
        o.every((De) => Y[De] || Y.code === De) &&
          (j(!0), (q = H.current) == null || q.focus()),
          Y.code === "Escape" &&
            (document.activeElement === H.current ||
              ((ve = H.current) != null &&
                ve.contains(document.activeElement))) &&
            j(!1);
      };
      return (
        document.addEventListener("keydown", B),
        () => document.removeEventListener("keydown", B)
      );
    }, [o]),
    L.useEffect(() => {
      if (H.current)
        return () => {
          R.current &&
            (R.current.focus({ preventScroll: !0 }),
            (R.current = null),
            (I.current = !1));
        };
    }, [H.current]),
    L.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${S} ${k}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      P.map((B, Y) => {
        var q;
        let [ve, De] = B.split("-");
        return T.length
          ? L.createElement(
              "ol",
              {
                key: B,
                dir: x === "auto" ? Fp() : x,
                tabIndex: -1,
                ref: H,
                className: a,
                "data-sonner-toaster": !0,
                "data-theme": W,
                "data-y-position": ve,
                "data-lifted": F && T.length > 1 && !i,
                "data-x-position": De,
                style: {
                  "--front-toast-height": `${
                    ((q = N[0]) == null ? void 0 : q.height) || 0
                  }px`,
                  "--width": `${bT}px`,
                  "--gap": `${m}px`,
                  ...h,
                  ...NT(l, u),
                },
                onBlur: (ee) => {
                  I.current &&
                    !ee.currentTarget.contains(ee.relatedTarget) &&
                    ((I.current = !1),
                    R.current &&
                      (R.current.focus({ preventScroll: !0 }),
                      (R.current = null)));
                },
                onFocus: (ee) => {
                  (ee.target instanceof HTMLElement &&
                    ee.target.dataset.dismissible === "false") ||
                    I.current ||
                    ((I.current = !0), (R.current = ee.relatedTarget));
                },
                onMouseEnter: () => j(!0),
                onMouseMove: () => j(!0),
                onMouseLeave: () => {
                  U || j(!1);
                },
                onDragEnd: () => j(!1),
                onPointerDown: (ee) => {
                  (ee.target instanceof HTMLElement &&
                    ee.target.dataset.dismissible === "false") ||
                    O(!0);
                },
                onPointerUp: () => O(!1),
              },
              T.filter(
                (ee) => (!ee.position && Y === 0) || ee.position === B
              ).map((ee, Br) => {
                var xn, cr;
                return L.createElement(MT, {
                  key: ee.id,
                  icons: y,
                  index: Br,
                  toast: ee,
                  defaultRichColors: d,
                  duration:
                    (xn = g == null ? void 0 : g.duration) != null ? xn : f,
                  className: g == null ? void 0 : g.className,
                  descriptionClassName:
                    g == null ? void 0 : g.descriptionClassName,
                  invert: n,
                  visibleToasts: v,
                  closeButton:
                    (cr = g == null ? void 0 : g.closeButton) != null ? cr : s,
                  interacting: U,
                  position: B,
                  style: g == null ? void 0 : g.style,
                  unstyled: g == null ? void 0 : g.unstyled,
                  classNames: g == null ? void 0 : g.classNames,
                  cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                  actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                  removeToast: $,
                  toasts: T.filter((wn) => wn.position == ee.position),
                  heights: N.filter((wn) => wn.position == ee.position),
                  setHeights: A,
                  expandByDefault: i,
                  gap: m,
                  loadingIcon: p,
                  expanded: F,
                  pauseWhenPageIsHidden: E,
                  swipeDirections: e.swipeDirections,
                });
              })
            )
          : null;
      })
    )
  );
});
const LT = ({ ...e }) => {
    const { theme: t = "system" } = iT();
    return C.jsx(DT, {
      theme: t,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...e,
    });
  },
  OT = 1,
  jT = 1e6;
let hu = 0;
function IT() {
  return (hu = (hu + 1) % Number.MAX_SAFE_INTEGER), hu.toString();
}
const pu = new Map(),
  Vp = (e) => {
    if (pu.has(e)) return;
    const t = setTimeout(() => {
      pu.delete(e), Ci({ type: "REMOVE_TOAST", toastId: e });
    }, jT);
    pu.set(e, t);
  },
  FT = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, OT) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? Vp(n)
            : e.toasts.forEach((r) => {
                Vp(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  na = [];
let ra = { toasts: [] };
function Ci(e) {
  (ra = FT(ra, e)),
    na.forEach((t) => {
      t(ra);
    });
}
function VT({ ...e }) {
  const t = IT(),
    n = (o) => Ci({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
    r = () => Ci({ type: "DISMISS_TOAST", toastId: t });
  return (
    Ci({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function _T() {
  const [e, t] = w.useState(ra);
  return (
    w.useEffect(
      () => (
        na.push(t),
        () => {
          const n = na.indexOf(t);
          n > -1 && na.splice(n, 1);
        }
      ),
      [e]
    ),
    {
      ...e,
      toast: VT,
      dismiss: (n) => Ci({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function Ee(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function _p(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function c0(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = _p(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : _p(e[o], null);
        }
      };
  };
}
function Vt(...e) {
  return w.useCallback(c0(...e), e);
}
function wl(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = w.createContext(s),
      l = n.length;
    n = [...n, s];
    const u = (d) => {
      var m;
      const { scope: f, children: h, ...v } = d,
        g = ((m = f == null ? void 0 : f[e]) == null ? void 0 : m[l]) || a,
        x = w.useMemo(() => v, Object.values(v));
      return C.jsx(g.Provider, { value: x, children: h });
    };
    u.displayName = i + "Provider";
    function c(d, f) {
      var g;
      const h = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || a,
        v = w.useContext(h);
      if (v) return v;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [u, c];
  }
  const o = () => {
    const i = n.map((s) => w.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return w.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (o.scopeName = e), [r, zT(o, ...t)];
}
function zT(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(i)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return w.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function jc(e) {
  const t = BT(e),
    n = w.forwardRef((r, o) => {
      const { children: i, ...s } = r,
        a = w.Children.toArray(i),
        l = a.find(UT);
      if (l) {
        const u = l.props.children,
          c = a.map((d) =>
            d === l
              ? w.Children.count(u) > 1
                ? w.Children.only(null)
                : w.isValidElement(u)
                ? u.props.children
                : null
              : d
          );
        return C.jsx(t, {
          ...s,
          ref: o,
          children: w.isValidElement(u) ? w.cloneElement(u, void 0, c) : null,
        });
      }
      return C.jsx(t, { ...s, ref: o, children: i });
    });
  return (n.displayName = `${e}.Slot`), n;
}
function BT(e) {
  const t = w.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (w.isValidElement(o)) {
      const s = HT(o),
        a = WT(i, o.props);
      return (
        o.type !== w.Fragment && (a.ref = r ? c0(r, s) : s),
        w.cloneElement(o, a)
      );
    }
    return w.Children.count(o) > 1 ? w.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var d0 = Symbol("radix.slottable");
function $T(e) {
  const t = ({ children: n }) => C.jsx(C.Fragment, { children: n });
  return (t.displayName = `${e}.Slottable`), (t.__radixId = d0), t;
}
function UT(e) {
  return (
    w.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === d0
  );
}
function WT(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...a) => {
            const l = i(...a);
            return o(...a), l;
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...i })
      : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function HT(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function KT(e) {
  const t = e + "CollectionProvider",
    [n, r] = wl(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (g) => {
      const { scope: x, children: m } = g,
        p = L.useRef(null),
        y = L.useRef(new Map()).current;
      return C.jsx(o, { scope: x, itemMap: y, collectionRef: p, children: m });
    };
  s.displayName = t;
  const a = e + "CollectionSlot",
    l = jc(a),
    u = L.forwardRef((g, x) => {
      const { scope: m, children: p } = g,
        y = i(a, m),
        S = Vt(x, y.collectionRef);
      return C.jsx(l, { ref: S, children: p });
    });
  u.displayName = a;
  const c = e + "CollectionItemSlot",
    d = "data-radix-collection-item",
    f = jc(c),
    h = L.forwardRef((g, x) => {
      const { scope: m, children: p, ...y } = g,
        S = L.useRef(null),
        E = Vt(x, S),
        T = i(c, m);
      return (
        L.useEffect(
          () => (
            T.itemMap.set(S, { ref: S, ...y }), () => void T.itemMap.delete(S)
          )
        ),
        C.jsx(f, { [d]: "", ref: E, children: p })
      );
    });
  h.displayName = c;
  function v(g) {
    const x = i(e + "CollectionConsumer", g);
    return L.useCallback(() => {
      const p = x.collectionRef.current;
      if (!p) return [];
      const y = Array.from(p.querySelectorAll(`[${d}]`));
      return Array.from(x.itemMap.values()).sort(
        (T, b) => y.indexOf(T.ref.current) - y.indexOf(b.ref.current)
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [{ Provider: s, Slot: u, ItemSlot: h }, v, r];
}
var GT = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  tt = GT.reduce((e, t) => {
    const n = jc(`Primitive.${t}`),
      r = w.forwardRef((o, i) => {
        const { asChild: s, ...a } = o,
          l = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          C.jsx(l, { ...a, ref: i })
        );
      });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function f0(e, t) {
  e && is.flushSync(() => e.dispatchEvent(t));
}
function er(e) {
  const t = w.useRef(e);
  return (
    w.useEffect(() => {
      t.current = e;
    }),
    w.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function QT(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = er(e);
  w.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var YT = "DismissableLayer",
  Ic = "dismissableLayer.update",
  XT = "dismissableLayer.pointerDownOutside",
  qT = "dismissableLayer.focusOutside",
  zp,
  h0 = w.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  hf = w.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: a,
        ...l
      } = e,
      u = w.useContext(h0),
      [c, d] = w.useState(null),
      f =
        (c == null ? void 0 : c.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, h] = w.useState({}),
      v = Vt(t, (b) => d(b)),
      g = Array.from(u.layers),
      [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      m = g.indexOf(x),
      p = c ? g.indexOf(c) : -1,
      y = u.layersWithOutsidePointerEventsDisabled.size > 0,
      S = p >= m,
      E = JT((b) => {
        const P = b.target,
          N = [...u.branches].some((A) => A.contains(P));
        !S ||
          N ||
          (o == null || o(b),
          s == null || s(b),
          b.defaultPrevented || a == null || a());
      }, f),
      T = eb((b) => {
        const P = b.target;
        [...u.branches].some((A) => A.contains(P)) ||
          (i == null || i(b),
          s == null || s(b),
          b.defaultPrevented || a == null || a());
      }, f);
    return (
      QT((b) => {
        p === u.layers.size - 1 &&
          (r == null || r(b),
          !b.defaultPrevented && a && (b.preventDefault(), a()));
      }, f),
      w.useEffect(() => {
        if (c)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((zp = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            Bp(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = zp);
            }
          );
      }, [c, f, n, u]),
      w.useEffect(
        () => () => {
          c &&
            (u.layers.delete(c),
            u.layersWithOutsidePointerEventsDisabled.delete(c),
            Bp());
        },
        [c, u]
      ),
      w.useEffect(() => {
        const b = () => h({});
        return (
          document.addEventListener(Ic, b),
          () => document.removeEventListener(Ic, b)
        );
      }, []),
      C.jsx(tt.div, {
        ...l,
        ref: v,
        style: {
          pointerEvents: y ? (S ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: Ee(e.onFocusCapture, T.onFocusCapture),
        onBlurCapture: Ee(e.onBlurCapture, T.onBlurCapture),
        onPointerDownCapture: Ee(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        ),
      })
    );
  });
hf.displayName = YT;
var ZT = "DismissableLayerBranch",
  p0 = w.forwardRef((e, t) => {
    const n = w.useContext(h0),
      r = w.useRef(null),
      o = Vt(t, r);
    return (
      w.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      C.jsx(tt.div, { ...e, ref: o })
    );
  });
p0.displayName = ZT;
function JT(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = er(e),
    r = w.useRef(!1),
    o = w.useRef(() => {});
  return (
    w.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let l = function () {
              m0(XT, n, u, { discrete: !0 });
            };
            const u = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = l),
                t.addEventListener("click", o.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function eb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = er(e),
    r = w.useRef(!1);
  return (
    w.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          m0(qT, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Bp() {
  const e = new CustomEvent(Ic);
  document.dispatchEvent(e);
}
function m0(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? f0(o, i) : o.dispatchEvent(i);
}
var tb = hf,
  nb = p0,
  tr = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {},
  rb = "Portal",
  g0 = w.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [o, i] = w.useState(!1);
    tr(() => i(!0), []);
    const s =
      n ||
      (o &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return s ? Kv.createPortal(C.jsx(tt.div, { ...r, ref: t }), s) : null;
  });
g0.displayName = rb;
function ob(e, t) {
  return w.useReducer((n, r) => t[n][r] ?? n, e);
}
var pf = (e) => {
  const { present: t, children: n } = e,
    r = ib(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : w.Children.only(n),
    i = Vt(r.ref, sb(o));
  return typeof n == "function" || r.isPresent
    ? w.cloneElement(o, { ref: i })
    : null;
};
pf.displayName = "Presence";
function ib(e) {
  const [t, n] = w.useState(),
    r = w.useRef(null),
    o = w.useRef(e),
    i = w.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [a, l] = ob(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    w.useEffect(() => {
      const u = js(r.current);
      i.current = a === "mounted" ? u : "none";
    }, [a]),
    tr(() => {
      const u = r.current,
        c = o.current;
      if (c !== e) {
        const f = i.current,
          h = js(u);
        e
          ? l("MOUNT")
          : h === "none" || (u == null ? void 0 : u.display) === "none"
          ? l("UNMOUNT")
          : l(c && f !== h ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, l]),
    tr(() => {
      if (t) {
        let u;
        const c = t.ownerDocument.defaultView ?? window,
          d = (h) => {
            const g = js(r.current).includes(h.animationName);
            if (h.target === t && g && (l("ANIMATION_END"), !o.current)) {
              const x = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = c.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = x);
                }));
            }
          },
          f = (h) => {
            h.target === t && (i.current = js(r.current));
          };
        return (
          t.addEventListener("animationstart", f),
          t.addEventListener("animationcancel", d),
          t.addEventListener("animationend", d),
          () => {
            c.clearTimeout(u),
              t.removeEventListener("animationstart", f),
              t.removeEventListener("animationcancel", d),
              t.removeEventListener("animationend", d);
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: w.useCallback((u) => {
        (r.current = u ? getComputedStyle(u) : null), n(u);
      }, []),
    }
  );
}
function js(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function sb(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var ab = Ug[" useInsertionEffect ".trim().toString()] || tr;
function lb({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [o, i, s] = ub({ defaultProp: t, onChange: n }),
    a = e !== void 0,
    l = a ? e : o;
  {
    const c = w.useRef(e !== void 0);
    w.useEffect(() => {
      const d = c.current;
      d !== a &&
        console.warn(
          `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${
            a ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (c.current = a);
    }, [a, r]);
  }
  const u = w.useCallback(
    (c) => {
      var d;
      if (a) {
        const f = cb(c) ? c(e) : c;
        f !== e && ((d = s.current) == null || d.call(s, f));
      } else i(c);
    },
    [a, e, i, s]
  );
  return [l, u];
}
function ub({ defaultProp: e, onChange: t }) {
  const [n, r] = w.useState(e),
    o = w.useRef(n),
    i = w.useRef(t);
  return (
    ab(() => {
      i.current = t;
    }, [t]),
    w.useEffect(() => {
      var s;
      o.current !== n &&
        ((s = i.current) == null || s.call(i, n), (o.current = n));
    }, [n, o]),
    [n, r, i]
  );
}
function cb(e) {
  return typeof e == "function";
}
var db = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  fb = "VisuallyHidden",
  Sl = w.forwardRef((e, t) =>
    C.jsx(tt.span, { ...e, ref: t, style: { ...db, ...e.style } })
  );
Sl.displayName = fb;
var hb = Sl,
  mf = "ToastProvider",
  [gf, pb, mb] = KT("Toast"),
  [y0, CD] = wl("Toast", [mb]),
  [gb, Cl] = y0(mf),
  v0 = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: i = 50,
        children: s,
      } = e,
      [a, l] = w.useState(null),
      [u, c] = w.useState(0),
      d = w.useRef(!1),
      f = w.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${mf}\`. Expected non-empty \`string\`.`
        ),
      C.jsx(gf.Provider, {
        scope: t,
        children: C.jsx(gb, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: i,
          toastCount: u,
          viewport: a,
          onViewportChange: l,
          onToastAdd: w.useCallback(() => c((h) => h + 1), []),
          onToastRemove: w.useCallback(() => c((h) => h - 1), []),
          isFocusedToastEscapeKeyDownRef: d,
          isClosePausedRef: f,
          children: s,
        }),
      })
    );
  };
v0.displayName = mf;
var x0 = "ToastViewport",
  yb = ["F8"],
  Fc = "toast.viewportPause",
  Vc = "toast.viewportResume",
  w0 = w.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = yb,
        label: o = "Notifications ({hotkey})",
        ...i
      } = e,
      s = Cl(x0, n),
      a = pb(n),
      l = w.useRef(null),
      u = w.useRef(null),
      c = w.useRef(null),
      d = w.useRef(null),
      f = Vt(t, d, s.onViewportChange),
      h = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      v = s.toastCount > 0;
    w.useEffect(() => {
      const x = (m) => {
        var y;
        r.length !== 0 &&
          r.every((S) => m[S] || m.code === S) &&
          ((y = d.current) == null || y.focus());
      };
      return (
        document.addEventListener("keydown", x),
        () => document.removeEventListener("keydown", x)
      );
    }, [r]),
      w.useEffect(() => {
        const x = l.current,
          m = d.current;
        if (v && x && m) {
          const p = () => {
              if (!s.isClosePausedRef.current) {
                const T = new CustomEvent(Fc);
                m.dispatchEvent(T), (s.isClosePausedRef.current = !0);
              }
            },
            y = () => {
              if (s.isClosePausedRef.current) {
                const T = new CustomEvent(Vc);
                m.dispatchEvent(T), (s.isClosePausedRef.current = !1);
              }
            },
            S = (T) => {
              !x.contains(T.relatedTarget) && y();
            },
            E = () => {
              x.contains(document.activeElement) || y();
            };
          return (
            x.addEventListener("focusin", p),
            x.addEventListener("focusout", S),
            x.addEventListener("pointermove", p),
            x.addEventListener("pointerleave", E),
            window.addEventListener("blur", p),
            window.addEventListener("focus", y),
            () => {
              x.removeEventListener("focusin", p),
                x.removeEventListener("focusout", S),
                x.removeEventListener("pointermove", p),
                x.removeEventListener("pointerleave", E),
                window.removeEventListener("blur", p),
                window.removeEventListener("focus", y);
            }
          );
        }
      }, [v, s.isClosePausedRef]);
    const g = w.useCallback(
      ({ tabbingDirection: x }) => {
        const p = a().map((y) => {
          const S = y.ref.current,
            E = [S, ...Mb(S)];
          return x === "forwards" ? E : E.reverse();
        });
        return (x === "forwards" ? p.reverse() : p).flat();
      },
      [a]
    );
    return (
      w.useEffect(() => {
        const x = d.current;
        if (x) {
          const m = (p) => {
            var E, T, b;
            const y = p.altKey || p.ctrlKey || p.metaKey;
            if (p.key === "Tab" && !y) {
              const P = document.activeElement,
                N = p.shiftKey;
              if (p.target === x && N) {
                (E = u.current) == null || E.focus();
                return;
              }
              const j = g({ tabbingDirection: N ? "backwards" : "forwards" }),
                U = j.findIndex((O) => O === P);
              mu(j.slice(U + 1))
                ? p.preventDefault()
                : N
                ? (T = u.current) == null || T.focus()
                : (b = c.current) == null || b.focus();
            }
          };
          return (
            x.addEventListener("keydown", m),
            () => x.removeEventListener("keydown", m)
          );
        }
      }, [a, g]),
      C.jsxs(nb, {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", h),
        tabIndex: -1,
        style: { pointerEvents: v ? void 0 : "none" },
        children: [
          v &&
            C.jsx(_c, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const x = g({ tabbingDirection: "forwards" });
                mu(x);
              },
            }),
          C.jsx(gf.Slot, {
            scope: n,
            children: C.jsx(tt.ol, { tabIndex: -1, ...i, ref: f }),
          }),
          v &&
            C.jsx(_c, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const x = g({ tabbingDirection: "backwards" });
                mu(x);
              },
            }),
        ],
      })
    );
  });
w0.displayName = x0;
var S0 = "ToastFocusProxy",
  _c = w.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      i = Cl(S0, n);
    return C.jsx(Sl, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (s) => {
        var u;
        const a = s.relatedTarget;
        !((u = i.viewport) != null && u.contains(a)) && r();
      },
    });
  });
_c.displayName = S0;
var ss = "Toast",
  vb = "toast.swipeStart",
  xb = "toast.swipeMove",
  wb = "toast.swipeCancel",
  Sb = "toast.swipeEnd",
  C0 = w.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s } = e,
      [a, l] = lb({ prop: r, defaultProp: o ?? !0, onChange: i, caller: ss });
    return C.jsx(pf, {
      present: n || a,
      children: C.jsx(Tb, {
        open: a,
        ...s,
        ref: t,
        onClose: () => l(!1),
        onPause: er(e.onPause),
        onResume: er(e.onResume),
        onSwipeStart: Ee(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: Ee(e.onSwipeMove, (u) => {
          const { x: c, y: d } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${c}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${d}px`
            );
        }),
        onSwipeCancel: Ee(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: Ee(e.onSwipeEnd, (u) => {
          const { x: c, y: d } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${c}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${d}px`
            ),
            l(!1);
        }),
      }),
    });
  });
C0.displayName = ss;
var [Cb, Eb] = y0(ss, { onClose() {} }),
  Tb = w.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: u,
        onSwipeStart: c,
        onSwipeMove: d,
        onSwipeCancel: f,
        onSwipeEnd: h,
        ...v
      } = e,
      g = Cl(ss, n),
      [x, m] = w.useState(null),
      p = Vt(t, (O) => m(O)),
      y = w.useRef(null),
      S = w.useRef(null),
      E = o || g.duration,
      T = w.useRef(0),
      b = w.useRef(E),
      P = w.useRef(0),
      { onToastAdd: N, onToastRemove: A } = g,
      F = er(() => {
        var W;
        (x == null ? void 0 : x.contains(document.activeElement)) &&
          ((W = g.viewport) == null || W.focus()),
          s();
      }),
      j = w.useCallback(
        (O) => {
          !O ||
            O === 1 / 0 ||
            (window.clearTimeout(P.current),
            (T.current = new Date().getTime()),
            (P.current = window.setTimeout(F, O)));
        },
        [F]
      );
    w.useEffect(() => {
      const O = g.viewport;
      if (O) {
        const W = () => {
            j(b.current), u == null || u();
          },
          z = () => {
            const H = new Date().getTime() - T.current;
            (b.current = b.current - H),
              window.clearTimeout(P.current),
              l == null || l();
          };
        return (
          O.addEventListener(Fc, z),
          O.addEventListener(Vc, W),
          () => {
            O.removeEventListener(Fc, z), O.removeEventListener(Vc, W);
          }
        );
      }
    }, [g.viewport, E, l, u, j]),
      w.useEffect(() => {
        i && !g.isClosePausedRef.current && j(E);
      }, [i, E, g.isClosePausedRef, j]),
      w.useEffect(() => (N(), () => A()), [N, A]);
    const U = w.useMemo(() => (x ? R0(x) : null), [x]);
    return g.viewport
      ? C.jsxs(C.Fragment, {
          children: [
            U &&
              C.jsx(bb, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: U,
              }),
            C.jsx(Cb, {
              scope: n,
              onClose: F,
              children: is.createPortal(
                C.jsx(gf.ItemSlot, {
                  scope: n,
                  children: C.jsx(tb, {
                    asChild: !0,
                    onEscapeKeyDown: Ee(a, () => {
                      g.isFocusedToastEscapeKeyDownRef.current || F(),
                        (g.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: C.jsx(tt.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": i ? "open" : "closed",
                      "data-swipe-direction": g.swipeDirection,
                      ...v,
                      ref: p,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: Ee(e.onKeyDown, (O) => {
                        O.key === "Escape" &&
                          (a == null || a(O.nativeEvent),
                          O.nativeEvent.defaultPrevented ||
                            ((g.isFocusedToastEscapeKeyDownRef.current = !0),
                            F()));
                      }),
                      onPointerDown: Ee(e.onPointerDown, (O) => {
                        O.button === 0 &&
                          (y.current = { x: O.clientX, y: O.clientY });
                      }),
                      onPointerMove: Ee(e.onPointerMove, (O) => {
                        if (!y.current) return;
                        const W = O.clientX - y.current.x,
                          z = O.clientY - y.current.y,
                          H = !!S.current,
                          k = ["left", "right"].includes(g.swipeDirection),
                          R = ["left", "up"].includes(g.swipeDirection)
                            ? Math.min
                            : Math.max,
                          I = k ? R(0, W) : 0,
                          $ = k ? 0 : R(0, z),
                          B = O.pointerType === "touch" ? 10 : 2,
                          Y = { x: I, y: $ },
                          q = { originalEvent: O, delta: Y };
                        H
                          ? ((S.current = Y), Is(xb, d, q, { discrete: !1 }))
                          : $p(Y, g.swipeDirection, B)
                          ? ((S.current = Y),
                            Is(vb, c, q, { discrete: !1 }),
                            O.target.setPointerCapture(O.pointerId))
                          : (Math.abs(W) > B || Math.abs(z) > B) &&
                            (y.current = null);
                      }),
                      onPointerUp: Ee(e.onPointerUp, (O) => {
                        const W = S.current,
                          z = O.target;
                        if (
                          (z.hasPointerCapture(O.pointerId) &&
                            z.releasePointerCapture(O.pointerId),
                          (S.current = null),
                          (y.current = null),
                          W)
                        ) {
                          const H = O.currentTarget,
                            k = { originalEvent: O, delta: W };
                          $p(W, g.swipeDirection, g.swipeThreshold)
                            ? Is(Sb, h, k, { discrete: !0 })
                            : Is(wb, f, k, { discrete: !0 }),
                            H.addEventListener(
                              "click",
                              (R) => R.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                g.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  bb = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = Cl(ss, t),
      [i, s] = w.useState(!1),
      [a, l] = w.useState(!1);
    return (
      Ab(() => s(!0)),
      w.useEffect(() => {
        const u = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      a
        ? null
        : C.jsx(g0, {
            asChild: !0,
            children: C.jsx(Sl, {
              ...r,
              children:
                i && C.jsxs(C.Fragment, { children: [o.label, " ", n] }),
            }),
          })
    );
  },
  Pb = "ToastTitle",
  E0 = w.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return C.jsx(tt.div, { ...r, ref: t });
  });
E0.displayName = Pb;
var kb = "ToastDescription",
  T0 = w.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return C.jsx(tt.div, { ...r, ref: t });
  });
T0.displayName = kb;
var b0 = "ToastAction",
  P0 = w.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? C.jsx(A0, {
          altText: n,
          asChild: !0,
          children: C.jsx(yf, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${b0}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
P0.displayName = b0;
var k0 = "ToastClose",
  yf = w.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = Eb(k0, n);
    return C.jsx(A0, {
      asChild: !0,
      children: C.jsx(tt.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: Ee(e.onClick, o.onClose),
      }),
    });
  });
yf.displayName = k0;
var A0 = w.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return C.jsx(tt.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function R0(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        Rb(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          i = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (i) {
            const s = r.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...R0(r));
      }
    }),
    t
  );
}
function Is(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? f0(o, i) : o.dispatchEvent(i);
}
var $p = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    i = r > o;
  return t === "left" || t === "right" ? i && r > n : !i && o > n;
};
function Ab(e = () => {}) {
  const t = er(e);
  tr(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t))
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function Rb(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Mb(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function mu(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  );
}
var Nb = v0,
  M0 = w0,
  N0 = C0,
  D0 = E0,
  L0 = T0,
  O0 = P0,
  j0 = yf;
function I0(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = I0(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function F0() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = I0(e)) && (r && (r += " "), (r += t));
  return r;
}
const Up = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Wp = F0,
  Db = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Wp(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: i } = t,
      s = Object.keys(o).map((u) => {
        const c = n == null ? void 0 : n[u],
          d = i == null ? void 0 : i[u];
        if (c === null) return null;
        const f = Up(c) || Up(d);
        return o[u][f];
      }),
      a =
        n &&
        Object.entries(n).reduce((u, c) => {
          let [d, f] = c;
          return f === void 0 || (u[d] = f), u;
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, c) => {
              let { class: d, className: f, ...h } = c;
              return Object.entries(h).every((v) => {
                let [g, x] = v;
                return Array.isArray(x)
                  ? x.includes({ ...i, ...a }[g])
                  : { ...i, ...a }[g] === x;
              })
                ? [...u, d, f]
                : u;
            }, []);
    return Wp(
      e,
      s,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lb = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  V0 = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Ob = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jb = w.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: i,
      iconNode: s,
      ...a
    },
    l
  ) =>
    w.createElement(
      "svg",
      {
        ref: l,
        ...Ob,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: V0("lucide", o),
        ...a,
      },
      [
        ...s.map(([u, c]) => w.createElement(u, c)),
        ...(Array.isArray(i) ? i : [i]),
      ]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const El = (e, t) => {
  const n = w.forwardRef(({ className: r, ...o }, i) =>
    w.createElement(jb, {
      ref: i,
      iconNode: t,
      className: V0(`lucide-${Lb(e)}`, r),
      ...o,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vf = El("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xf = El("Copy", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea",
    },
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ib = El("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wf = El("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Sf = "-",
  Fb = (e) => {
    const t = _b(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const a = s.split(Sf);
        return a[0] === "" && a.length !== 1 && a.shift(), _0(a, t) || Vb(s);
      },
      getConflictingClassGroupIds: (s, a) => {
        const l = n[s] || [];
        return a && r[s] ? [...l, ...r[s]] : l;
      },
    };
  },
  _0 = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? _0(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(Sf);
    return (s = t.validators.find(({ validator: a }) => a(i))) == null
      ? void 0
      : s.classGroupId;
  },
  Hp = /^\[(.+)\]$/,
  Vb = (e) => {
    if (Hp.test(e)) {
      const t = Hp.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  _b = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      Bb(Object.entries(e.classGroups), n).forEach(([i, s]) => {
        zc(s, r, i, t);
      }),
      r
    );
  },
  zc = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const i = o === "" ? t : Kp(t, o);
        i.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (zb(o)) {
          zc(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([i, s]) => {
        zc(s, Kp(t, i), n, r);
      });
    });
  },
  Kp = (e, t) => {
    let n = e;
    return (
      t.split(Sf).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  zb = (e) => e.isThemeGetter,
  Bb = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
              ? Object.fromEntries(
                  Object.entries(i).map(([s, a]) => [t + s, a])
                )
              : i
          );
          return [n, o];
        })
      : e,
  $b = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (i, s) => {
      n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(i) {
        let s = n.get(i);
        if (s !== void 0) return s;
        if ((s = r.get(i)) !== void 0) return o(i, s), s;
      },
      set(i, s) {
        n.has(i) ? n.set(i, s) : o(i, s);
      },
    };
  },
  z0 = "!",
  Ub = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      i = t.length,
      s = (a) => {
        const l = [];
        let u = 0,
          c = 0,
          d;
        for (let x = 0; x < a.length; x++) {
          let m = a[x];
          if (u === 0) {
            if (m === o && (r || a.slice(x, x + i) === t)) {
              l.push(a.slice(c, x)), (c = x + i);
              continue;
            }
            if (m === "/") {
              d = x;
              continue;
            }
          }
          m === "[" ? u++ : m === "]" && u--;
        }
        const f = l.length === 0 ? a : a.substring(c),
          h = f.startsWith(z0),
          v = h ? f.substring(1) : f,
          g = d && d > c ? d - c : void 0;
        return {
          modifiers: l,
          hasImportantModifier: h,
          baseClassName: v,
          maybePostfixModifierPosition: g,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: s }) : s;
  },
  Wb = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  Hb = (e) => ({ cache: $b(e.cacheSize), parseClassName: Ub(e), ...Fb(e) }),
  Kb = /\s+/,
  Gb = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      i = [],
      s = e.trim().split(Kb);
    let a = "";
    for (let l = s.length - 1; l >= 0; l -= 1) {
      const u = s[l],
        {
          modifiers: c,
          hasImportantModifier: d,
          baseClassName: f,
          maybePostfixModifierPosition: h,
        } = n(u);
      let v = !!h,
        g = r(v ? f.substring(0, h) : f);
      if (!g) {
        if (!v) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((g = r(f)), !g)) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        v = !1;
      }
      const x = Wb(c).join(":"),
        m = d ? x + z0 : x,
        p = m + g;
      if (i.includes(p)) continue;
      i.push(p);
      const y = o(g, v);
      for (let S = 0; S < y.length; ++S) {
        const E = y[S];
        i.push(m + E);
      }
      a = u + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function Qb() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = B0(t)) && (r && (r += " "), (r += n));
  return r;
}
const B0 = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = B0(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function Yb(e, ...t) {
  let n,
    r,
    o,
    i = s;
  function s(l) {
    const u = t.reduce((c, d) => d(c), e());
    return (n = Hb(u)), (r = n.cache.get), (o = n.cache.set), (i = a), a(l);
  }
  function a(l) {
    const u = r(l);
    if (u) return u;
    const c = Gb(l, n);
    return o(l, c), c;
  }
  return function () {
    return i(Qb.apply(null, arguments));
  };
}
const ie = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  $0 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Xb = /^\d+\/\d+$/,
  qb = new Set(["px", "full", "screen"]),
  Zb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Jb =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  eP = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  tP = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  nP =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  rn = (e) => vo(e) || qb.has(e) || Xb.test(e),
  Pn = (e) => Uo(e, "length", cP),
  vo = (e) => !!e && !Number.isNaN(Number(e)),
  gu = (e) => Uo(e, "number", vo),
  ii = (e) => !!e && Number.isInteger(Number(e)),
  rP = (e) => e.endsWith("%") && vo(e.slice(0, -1)),
  Q = (e) => $0.test(e),
  kn = (e) => Zb.test(e),
  oP = new Set(["length", "size", "percentage"]),
  iP = (e) => Uo(e, oP, U0),
  sP = (e) => Uo(e, "position", U0),
  aP = new Set(["image", "url"]),
  lP = (e) => Uo(e, aP, fP),
  uP = (e) => Uo(e, "", dP),
  si = () => !0,
  Uo = (e, t, n) => {
    const r = $0.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  cP = (e) => Jb.test(e) && !eP.test(e),
  U0 = () => !1,
  dP = (e) => tP.test(e),
  fP = (e) => nP.test(e),
  hP = () => {
    const e = ie("colors"),
      t = ie("spacing"),
      n = ie("blur"),
      r = ie("brightness"),
      o = ie("borderColor"),
      i = ie("borderRadius"),
      s = ie("borderSpacing"),
      a = ie("borderWidth"),
      l = ie("contrast"),
      u = ie("grayscale"),
      c = ie("hueRotate"),
      d = ie("invert"),
      f = ie("gap"),
      h = ie("gradientColorStops"),
      v = ie("gradientColorStopPositions"),
      g = ie("inset"),
      x = ie("margin"),
      m = ie("opacity"),
      p = ie("padding"),
      y = ie("saturate"),
      S = ie("scale"),
      E = ie("sepia"),
      T = ie("skew"),
      b = ie("space"),
      P = ie("translate"),
      N = () => ["auto", "contain", "none"],
      A = () => ["auto", "hidden", "clip", "visible", "scroll"],
      F = () => ["auto", Q, t],
      j = () => [Q, t],
      U = () => ["", rn, Pn],
      O = () => ["auto", vo, Q],
      W = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      z = () => ["solid", "dashed", "dotted", "double", "none"],
      H = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      k = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      R = () => ["", "0", Q],
      I = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      $ = () => [vo, Q];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [si],
        spacing: [rn, Pn],
        blur: ["none", "", kn, Q],
        brightness: $(),
        borderColor: [e],
        borderRadius: ["none", "", "full", kn, Q],
        borderSpacing: j(),
        borderWidth: U(),
        contrast: $(),
        grayscale: R(),
        hueRotate: $(),
        invert: R(),
        gap: j(),
        gradientColorStops: [e],
        gradientColorStopPositions: [rP, Pn],
        inset: F(),
        margin: F(),
        opacity: $(),
        padding: j(),
        saturate: $(),
        scale: $(),
        sepia: R(),
        skew: $(),
        space: j(),
        translate: j(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", Q] }],
        container: ["container"],
        columns: [{ columns: [kn] }],
        "break-after": [{ "break-after": I() }],
        "break-before": [{ "break-before": I() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...W(), Q] }],
        overflow: [{ overflow: A() }],
        "overflow-x": [{ "overflow-x": A() }],
        "overflow-y": [{ "overflow-y": A() }],
        overscroll: [{ overscroll: N() }],
        "overscroll-x": [{ "overscroll-x": N() }],
        "overscroll-y": [{ "overscroll-y": N() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [g] }],
        "inset-x": [{ "inset-x": [g] }],
        "inset-y": [{ "inset-y": [g] }],
        start: [{ start: [g] }],
        end: [{ end: [g] }],
        top: [{ top: [g] }],
        right: [{ right: [g] }],
        bottom: [{ bottom: [g] }],
        left: [{ left: [g] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", ii, Q] }],
        basis: [{ basis: F() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", Q] }],
        grow: [{ grow: R() }],
        shrink: [{ shrink: R() }],
        order: [{ order: ["first", "last", "none", ii, Q] }],
        "grid-cols": [{ "grid-cols": [si] }],
        "col-start-end": [{ col: ["auto", { span: ["full", ii, Q] }, Q] }],
        "col-start": [{ "col-start": O() }],
        "col-end": [{ "col-end": O() }],
        "grid-rows": [{ "grid-rows": [si] }],
        "row-start-end": [{ row: ["auto", { span: [ii, Q] }, Q] }],
        "row-start": [{ "row-start": O() }],
        "row-end": [{ "row-end": O() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Q] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Q] }],
        gap: [{ gap: [f] }],
        "gap-x": [{ "gap-x": [f] }],
        "gap-y": [{ "gap-y": [f] }],
        "justify-content": [{ justify: ["normal", ...k()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...k(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...k(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [p] }],
        px: [{ px: [p] }],
        py: [{ py: [p] }],
        ps: [{ ps: [p] }],
        pe: [{ pe: [p] }],
        pt: [{ pt: [p] }],
        pr: [{ pr: [p] }],
        pb: [{ pb: [p] }],
        pl: [{ pl: [p] }],
        m: [{ m: [x] }],
        mx: [{ mx: [x] }],
        my: [{ my: [x] }],
        ms: [{ ms: [x] }],
        me: [{ me: [x] }],
        mt: [{ mt: [x] }],
        mr: [{ mr: [x] }],
        mb: [{ mb: [x] }],
        ml: [{ ml: [x] }],
        "space-x": [{ "space-x": [b] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [b] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, t] }],
        "min-w": [{ "min-w": [Q, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              Q,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [kn] },
              kn,
            ],
          },
        ],
        h: [{ h: [Q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [Q, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", kn, Pn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              gu,
            ],
          },
        ],
        "font-family": [{ font: [si] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              Q,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", vo, gu] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              rn,
              Q,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", Q] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", Q] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [m] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [m] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...z(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", rn, Pn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", rn, Q] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: j() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              Q,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", Q] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [m] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...W(), sP] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", iP] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              lP,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [v] }],
        "gradient-via-pos": [{ via: [v] }],
        "gradient-to-pos": [{ to: [v] }],
        "gradient-from": [{ from: [h] }],
        "gradient-via": [{ via: [h] }],
        "gradient-to": [{ to: [h] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [m] }],
        "border-style": [{ border: [...z(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [m] }],
        "divide-style": [{ divide: z() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...z()] }],
        "outline-offset": [{ "outline-offset": [rn, Q] }],
        "outline-w": [{ outline: [rn, Pn] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: U() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [m] }],
        "ring-offset-w": [{ "ring-offset": [rn, Pn] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", kn, uP] }],
        "shadow-color": [{ shadow: [si] }],
        opacity: [{ opacity: [m] }],
        "mix-blend": [{ "mix-blend": [...H(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": H() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", kn, Q] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [c] }],
        invert: [{ invert: [d] }],
        saturate: [{ saturate: [y] }],
        sepia: [{ sepia: [E] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
        "backdrop-invert": [{ "backdrop-invert": [d] }],
        "backdrop-opacity": [{ "backdrop-opacity": [m] }],
        "backdrop-saturate": [{ "backdrop-saturate": [y] }],
        "backdrop-sepia": [{ "backdrop-sepia": [E] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              Q,
            ],
          },
        ],
        duration: [{ duration: $() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", Q] }],
        delay: [{ delay: $() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", Q] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [S] }],
        "scale-x": [{ "scale-x": [S] }],
        "scale-y": [{ "scale-y": [S] }],
        rotate: [{ rotate: [ii, Q] }],
        "translate-x": [{ "translate-x": [P] }],
        "translate-y": [{ "translate-y": [P] }],
        "skew-x": [{ "skew-x": [T] }],
        "skew-y": [{ "skew-y": [T] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              Q,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              Q,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": j() }],
        "scroll-mx": [{ "scroll-mx": j() }],
        "scroll-my": [{ "scroll-my": j() }],
        "scroll-ms": [{ "scroll-ms": j() }],
        "scroll-me": [{ "scroll-me": j() }],
        "scroll-mt": [{ "scroll-mt": j() }],
        "scroll-mr": [{ "scroll-mr": j() }],
        "scroll-mb": [{ "scroll-mb": j() }],
        "scroll-ml": [{ "scroll-ml": j() }],
        "scroll-p": [{ "scroll-p": j() }],
        "scroll-px": [{ "scroll-px": j() }],
        "scroll-py": [{ "scroll-py": j() }],
        "scroll-ps": [{ "scroll-ps": j() }],
        "scroll-pe": [{ "scroll-pe": j() }],
        "scroll-pt": [{ "scroll-pt": j() }],
        "scroll-pr": [{ "scroll-pr": j() }],
        "scroll-pb": [{ "scroll-pb": j() }],
        "scroll-pl": [{ "scroll-pl": j() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", Q] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [rn, Pn, gu] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  pP = Yb(hP);
function zr(...e) {
  return pP(F0(e));
}
const mP = Nb,
  W0 = w.forwardRef(({ className: e, ...t }, n) =>
    C.jsx(M0, {
      ref: n,
      className: zr(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e
      ),
      ...t,
    })
  );
W0.displayName = M0.displayName;
const gP = Db(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  H0 = w.forwardRef(({ className: e, variant: t, ...n }, r) =>
    C.jsx(N0, { ref: r, className: zr(gP({ variant: t }), e), ...n })
  );
H0.displayName = N0.displayName;
const yP = w.forwardRef(({ className: e, ...t }, n) =>
  C.jsx(O0, {
    ref: n,
    className: zr(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e
    ),
    ...t,
  })
);
yP.displayName = O0.displayName;
const K0 = w.forwardRef(({ className: e, ...t }, n) =>
  C.jsx(j0, {
    ref: n,
    className: zr(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: C.jsx(wf, { className: "h-4 w-4" }),
  })
);
K0.displayName = j0.displayName;
const G0 = w.forwardRef(({ className: e, ...t }, n) =>
  C.jsx(D0, { ref: n, className: zr("text-sm font-semibold", e), ...t })
);
G0.displayName = D0.displayName;
const Q0 = w.forwardRef(({ className: e, ...t }, n) =>
  C.jsx(L0, { ref: n, className: zr("text-sm opacity-90", e), ...t })
);
Q0.displayName = L0.displayName;
function vP() {
  const { toasts: e } = _T();
  return C.jsxs(mP, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...i }) {
        return C.jsxs(
          H0,
          {
            ...i,
            children: [
              C.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && C.jsx(G0, { children: n }),
                  r && C.jsx(Q0, { children: r }),
                ],
              }),
              o,
              C.jsx(K0, {}),
            ],
          },
          t
        );
      }),
      C.jsx(W0, {}),
    ],
  });
}
const xP = ["top", "right", "bottom", "left"],
  nr = Math.min,
  rt = Math.max,
  za = Math.round,
  Fs = Math.floor,
  Zt = (e) => ({ x: e, y: e }),
  wP = { left: "right", right: "left", bottom: "top", top: "bottom" },
  SP = { start: "end", end: "start" };
function Bc(e, t, n) {
  return rt(e, nr(t, n));
}
function gn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function yn(e) {
  return e.split("-")[0];
}
function Wo(e) {
  return e.split("-")[1];
}
function Cf(e) {
  return e === "x" ? "y" : "x";
}
function Ef(e) {
  return e === "y" ? "height" : "width";
}
const CP = new Set(["top", "bottom"]);
function Yt(e) {
  return CP.has(yn(e)) ? "y" : "x";
}
function Tf(e) {
  return Cf(Yt(e));
}
function EP(e, t, n) {
  n === void 0 && (n = !1);
  const r = Wo(e),
    o = Tf(e),
    i = Ef(o);
  let s =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (s = Ba(s)), [s, Ba(s)];
}
function TP(e) {
  const t = Ba(e);
  return [$c(e), t, $c(t)];
}
function $c(e) {
  return e.replace(/start|end/g, (t) => SP[t]);
}
const Gp = ["left", "right"],
  Qp = ["right", "left"],
  bP = ["top", "bottom"],
  PP = ["bottom", "top"];
function kP(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? Qp : Gp) : t ? Gp : Qp;
    case "left":
    case "right":
      return t ? bP : PP;
    default:
      return [];
  }
}
function AP(e, t, n, r) {
  const o = Wo(e);
  let i = kP(yn(e), n === "start", r);
  return (
    o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map($c)))), i
  );
}
function Ba(e) {
  return e.replace(/left|right|bottom|top/g, (t) => wP[t]);
}
function RP(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Y0(e) {
  return typeof e != "number"
    ? RP(e)
    : { top: e, right: e, bottom: e, left: e };
}
function $a(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function Yp(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = Yt(t),
    s = Tf(t),
    a = Ef(s),
    l = yn(t),
    u = i === "y",
    c = r.x + r.width / 2 - o.width / 2,
    d = r.y + r.height / 2 - o.height / 2,
    f = r[a] / 2 - o[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = { x: c, y: r.y - o.height };
      break;
    case "bottom":
      h = { x: c, y: r.y + r.height };
      break;
    case "right":
      h = { x: r.x + r.width, y: d };
      break;
    case "left":
      h = { x: r.x - o.width, y: d };
      break;
    default:
      h = { x: r.x, y: r.y };
  }
  switch (Wo(t)) {
    case "start":
      h[s] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      h[s] += f * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const MP = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: s,
    } = n,
    a = i.filter(Boolean),
    l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: c, y: d } = Yp(u, r, l),
    f = r,
    h = {},
    v = 0;
  for (let g = 0; g < a.length; g++) {
    const { name: x, fn: m } = a[g],
      {
        x: p,
        y,
        data: S,
        reset: E,
      } = await m({
        x: c,
        y: d,
        initialPlacement: r,
        placement: f,
        strategy: o,
        middlewareData: h,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (c = p ?? c),
      (d = y ?? d),
      (h = { ...h, [x]: { ...h[x], ...S } }),
      E &&
        v <= 50 &&
        (v++,
        typeof E == "object" &&
          (E.placement && (f = E.placement),
          E.rects &&
            (u =
              E.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : E.rects),
          ({ x: c, y: d } = Yp(u, f, l))),
        (g = -1));
  }
  return { x: c, y: d, placement: f, strategy: o, middlewareData: h };
};
async function Ki(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: s, elements: a, strategy: l } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: d = "floating",
      altBoundary: f = !1,
      padding: h = 0,
    } = gn(t, e),
    v = Y0(h),
    x = a[f ? (d === "floating" ? "reference" : "floating") : d],
    m = $a(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null ||
          n
            ? x
            : x.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: l,
      })
    ),
    p =
      d === "floating"
        ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
        : s.reference,
    y = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(a.floating)),
    S = (await (i.isElement == null ? void 0 : i.isElement(y)))
      ? (await (i.getScale == null ? void 0 : i.getScale(y))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    E = $a(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: p,
            offsetParent: y,
            strategy: l,
          })
        : p
    );
  return {
    top: (m.top - E.top + v.top) / S.y,
    bottom: (E.bottom - m.bottom + v.bottom) / S.y,
    left: (m.left - E.left + v.left) / S.x,
    right: (E.right - m.right + v.right) / S.x,
  };
}
const NP = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: s,
          elements: a,
          middlewareData: l,
        } = t,
        { element: u, padding: c = 0 } = gn(e, t) || {};
      if (u == null) return {};
      const d = Y0(c),
        f = { x: n, y: r },
        h = Tf(o),
        v = Ef(h),
        g = await s.getDimensions(u),
        x = h === "y",
        m = x ? "top" : "left",
        p = x ? "bottom" : "right",
        y = x ? "clientHeight" : "clientWidth",
        S = i.reference[v] + i.reference[h] - f[h] - i.floating[v],
        E = f[h] - i.reference[h],
        T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let b = T ? T[y] : 0;
      (!b || !(await (s.isElement == null ? void 0 : s.isElement(T)))) &&
        (b = a.floating[y] || i.floating[v]);
      const P = S / 2 - E / 2,
        N = b / 2 - g[v] / 2 - 1,
        A = nr(d[m], N),
        F = nr(d[p], N),
        j = A,
        U = b - g[v] - F,
        O = b / 2 - g[v] / 2 + P,
        W = Bc(j, O, U),
        z =
          !l.arrow &&
          Wo(o) != null &&
          O !== W &&
          i.reference[v] / 2 - (O < j ? A : F) - g[v] / 2 < 0,
        H = z ? (O < j ? O - j : O - U) : 0;
      return {
        [h]: f[h] + H,
        data: {
          [h]: W,
          centerOffset: O - W - H,
          ...(z && { alignmentOffset: H }),
        },
        reset: z,
      };
    },
  }),
  DP = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: s,
              initialPlacement: a,
              platform: l,
              elements: u,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: d = !0,
              fallbackPlacements: f,
              fallbackStrategy: h = "bestFit",
              fallbackAxisSideDirection: v = "none",
              flipAlignment: g = !0,
              ...x
            } = gn(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const m = yn(o),
            p = Yt(a),
            y = yn(a) === a,
            S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
            E = f || (y || !g ? [Ba(a)] : TP(a)),
            T = v !== "none";
          !f && T && E.push(...AP(a, g, v, S));
          const b = [a, ...E],
            P = await Ki(t, x),
            N = [];
          let A = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((c && N.push(P[m]), d)) {
            const O = EP(o, s, S);
            N.push(P[O[0]], P[O[1]]);
          }
          if (
            ((A = [...A, { placement: o, overflows: N }]),
            !N.every((O) => O <= 0))
          ) {
            var F, j;
            const O = (((F = i.flip) == null ? void 0 : F.index) || 0) + 1,
              W = b[O];
            if (
              W &&
              (!(d === "alignment" ? p !== Yt(W) : !1) ||
                A.every((k) => k.overflows[0] > 0 && Yt(k.placement) === p))
            )
              return {
                data: { index: O, overflows: A },
                reset: { placement: W },
              };
            let z =
              (j = A.filter((H) => H.overflows[0] <= 0).sort(
                (H, k) => H.overflows[1] - k.overflows[1]
              )[0]) == null
                ? void 0
                : j.placement;
            if (!z)
              switch (h) {
                case "bestFit": {
                  var U;
                  const H =
                    (U = A.filter((k) => {
                      if (T) {
                        const R = Yt(k.placement);
                        return R === p || R === "y";
                      }
                      return !0;
                    })
                      .map((k) => [
                        k.placement,
                        k.overflows
                          .filter((R) => R > 0)
                          .reduce((R, I) => R + I, 0),
                      ])
                      .sort((k, R) => k[1] - R[1])[0]) == null
                      ? void 0
                      : U[0];
                  H && (z = H);
                  break;
                }
                case "initialPlacement":
                  z = a;
                  break;
              }
            if (o !== z) return { reset: { placement: z } };
          }
          return {};
        },
      }
    );
  };
function Xp(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function qp(e) {
  return xP.some((t) => e[t] >= 0);
}
const LP = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: r = "referenceHidden", ...o } = gn(e, t);
          switch (r) {
            case "referenceHidden": {
              const i = await Ki(t, { ...o, elementContext: "reference" }),
                s = Xp(i, n.reference);
              return {
                data: { referenceHiddenOffsets: s, referenceHidden: qp(s) },
              };
            }
            case "escaped": {
              const i = await Ki(t, { ...o, altBoundary: !0 }),
                s = Xp(i, n.floating);
              return { data: { escapedOffsets: s, escaped: qp(s) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  X0 = new Set(["left", "top"]);
async function OP(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = yn(n),
    a = Wo(n),
    l = Yt(n) === "y",
    u = X0.has(s) ? -1 : 1,
    c = i && l ? -1 : 1,
    d = gn(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: v,
  } = typeof d == "number"
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis,
      };
  return (
    a && typeof v == "number" && (h = a === "end" ? v * -1 : v),
    l ? { x: h * c, y: f * u } : { x: f * u, y: h * c }
  );
}
const jP = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: s, middlewareData: a } = t,
            l = await OP(t, e);
          return s === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + l.x, y: i + l.y, data: { ...l, placement: s } };
        },
      }
    );
  },
  IP = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: a = {
                fn: (x) => {
                  let { x: m, y: p } = x;
                  return { x: m, y: p };
                },
              },
              ...l
            } = gn(e, t),
            u = { x: n, y: r },
            c = await Ki(t, l),
            d = Yt(yn(o)),
            f = Cf(d);
          let h = u[f],
            v = u[d];
          if (i) {
            const x = f === "y" ? "top" : "left",
              m = f === "y" ? "bottom" : "right",
              p = h + c[x],
              y = h - c[m];
            h = Bc(p, h, y);
          }
          if (s) {
            const x = d === "y" ? "top" : "left",
              m = d === "y" ? "bottom" : "right",
              p = v + c[x],
              y = v - c[m];
            v = Bc(p, v, y);
          }
          const g = a.fn({ ...t, [f]: h, [d]: v });
          return {
            ...g,
            data: { x: g.x - n, y: g.y - r, enabled: { [f]: i, [d]: s } },
          };
        },
      }
    );
  },
  FP = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: u = !0 } = gn(e, t),
            c = { x: n, y: r },
            d = Yt(o),
            f = Cf(d);
          let h = c[f],
            v = c[d];
          const g = gn(a, t),
            x =
              typeof g == "number"
                ? { mainAxis: g, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...g };
          if (l) {
            const y = f === "y" ? "height" : "width",
              S = i.reference[f] - i.floating[y] + x.mainAxis,
              E = i.reference[f] + i.reference[y] - x.mainAxis;
            h < S ? (h = S) : h > E && (h = E);
          }
          if (u) {
            var m, p;
            const y = f === "y" ? "width" : "height",
              S = X0.has(yn(o)),
              E =
                i.reference[d] -
                i.floating[y] +
                ((S && ((m = s.offset) == null ? void 0 : m[d])) || 0) +
                (S ? 0 : x.crossAxis),
              T =
                i.reference[d] +
                i.reference[y] +
                (S ? 0 : ((p = s.offset) == null ? void 0 : p[d]) || 0) -
                (S ? x.crossAxis : 0);
            v < E ? (v = E) : v > T && (v = T);
          }
          return { [f]: h, [d]: v };
        },
      }
    );
  },
  VP = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: i, platform: s, elements: a } = t,
            { apply: l = () => {}, ...u } = gn(e, t),
            c = await Ki(t, u),
            d = yn(o),
            f = Wo(o),
            h = Yt(o) === "y",
            { width: v, height: g } = i.floating;
          let x, m;
          d === "top" || d === "bottom"
            ? ((x = d),
              (m =
                f ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((m = d), (x = f === "end" ? "top" : "bottom"));
          const p = g - c.top - c.bottom,
            y = v - c.left - c.right,
            S = nr(g - c[x], p),
            E = nr(v - c[m], y),
            T = !t.middlewareData.shift;
          let b = S,
            P = E;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (P = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (b = p),
            T && !f)
          ) {
            const A = rt(c.left, 0),
              F = rt(c.right, 0),
              j = rt(c.top, 0),
              U = rt(c.bottom, 0);
            h
              ? (P = v - 2 * (A !== 0 || F !== 0 ? A + F : rt(c.left, c.right)))
              : (b =
                  g - 2 * (j !== 0 || U !== 0 ? j + U : rt(c.top, c.bottom)));
          }
          await l({ ...t, availableWidth: P, availableHeight: b });
          const N = await s.getDimensions(a.floating);
          return v !== N.width || g !== N.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Tl() {
  return typeof window < "u";
}
function Ho(e) {
  return q0(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function at(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function nn(e) {
  var t;
  return (t = (q0(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function q0(e) {
  return Tl() ? e instanceof Node || e instanceof at(e).Node : !1;
}
function _t(e) {
  return Tl() ? e instanceof Element || e instanceof at(e).Element : !1;
}
function en(e) {
  return Tl() ? e instanceof HTMLElement || e instanceof at(e).HTMLElement : !1;
}
function Zp(e) {
  return !Tl() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof at(e).ShadowRoot;
}
const _P = new Set(["inline", "contents"]);
function as(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = zt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !_P.has(o);
}
const zP = new Set(["table", "td", "th"]);
function BP(e) {
  return zP.has(Ho(e));
}
const $P = [":popover-open", ":modal"];
function bl(e) {
  return $P.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const UP = ["transform", "translate", "scale", "rotate", "perspective"],
  WP = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  HP = ["paint", "layout", "strict", "content"];
function bf(e) {
  const t = Pf(),
    n = _t(e) ? zt(e) : e;
  return (
    UP.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    WP.some((r) => (n.willChange || "").includes(r)) ||
    HP.some((r) => (n.contain || "").includes(r))
  );
}
function KP(e) {
  let t = rr(e);
  for (; en(t) && !jo(t); ) {
    if (bf(t)) return t;
    if (bl(t)) return null;
    t = rr(t);
  }
  return null;
}
function Pf() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const GP = new Set(["html", "body", "#document"]);
function jo(e) {
  return GP.has(Ho(e));
}
function zt(e) {
  return at(e).getComputedStyle(e);
}
function Pl(e) {
  return _t(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function rr(e) {
  if (Ho(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Zp(e) && e.host) || nn(e);
  return Zp(t) ? t.host : t;
}
function Z0(e) {
  const t = rr(e);
  return jo(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : en(t) && as(t)
    ? t
    : Z0(t);
}
function Gi(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Z0(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = at(o);
  if (i) {
    const a = Uc(s);
    return t.concat(
      s,
      s.visualViewport || [],
      as(o) ? o : [],
      a && n ? Gi(a) : []
    );
  }
  return t.concat(o, Gi(o, [], n));
}
function Uc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function J0(e) {
  const t = zt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = en(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    a = za(n) !== i || za(r) !== s;
  return a && ((n = i), (r = s)), { width: n, height: r, $: a };
}
function kf(e) {
  return _t(e) ? e : e.contextElement;
}
function xo(e) {
  const t = kf(e);
  if (!en(t)) return Zt(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = J0(t);
  let s = (i ? za(n.width) : n.width) / r,
    a = (i ? za(n.height) : n.height) / o;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: s, y: a }
  );
}
const QP = Zt(0);
function ex(e) {
  const t = at(e);
  return !Pf() || !t.visualViewport
    ? QP
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function YP(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== at(e)) ? !1 : t;
}
function Fr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = kf(e);
  let s = Zt(1);
  t && (r ? _t(r) && (s = xo(r)) : (s = xo(e)));
  const a = YP(i, n, r) ? ex(i) : Zt(0);
  let l = (o.left + a.x) / s.x,
    u = (o.top + a.y) / s.y,
    c = o.width / s.x,
    d = o.height / s.y;
  if (i) {
    const f = at(i),
      h = r && _t(r) ? at(r) : r;
    let v = f,
      g = Uc(v);
    for (; g && r && h !== v; ) {
      const x = xo(g),
        m = g.getBoundingClientRect(),
        p = zt(g),
        y = m.left + (g.clientLeft + parseFloat(p.paddingLeft)) * x.x,
        S = m.top + (g.clientTop + parseFloat(p.paddingTop)) * x.y;
      (l *= x.x),
        (u *= x.y),
        (c *= x.x),
        (d *= x.y),
        (l += y),
        (u += S),
        (v = at(g)),
        (g = Uc(v));
    }
  }
  return $a({ width: c, height: d, x: l, y: u });
}
function Af(e, t) {
  const n = Pl(e).scrollLeft;
  return t ? t.left + n : Fr(nn(e)).left + n;
}
function tx(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    o = r.left + t.scrollLeft - (n ? 0 : Af(e, r)),
    i = r.top + t.scrollTop;
  return { x: o, y: i };
}
function XP(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    s = nn(r),
    a = t ? bl(t.floating) : !1;
  if (r === s || (a && i)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    u = Zt(1);
  const c = Zt(0),
    d = en(r);
  if (
    (d || (!d && !i)) &&
    ((Ho(r) !== "body" || as(s)) && (l = Pl(r)), en(r))
  ) {
    const h = Fr(r);
    (u = xo(r)), (c.x = h.x + r.clientLeft), (c.y = h.y + r.clientTop);
  }
  const f = s && !d && !i ? tx(s, l, !0) : Zt(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y,
  };
}
function qP(e) {
  return Array.from(e.getClientRects());
}
function ZP(e) {
  const t = nn(e),
    n = Pl(e),
    r = e.ownerDocument.body,
    o = rt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = rt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Af(e);
  const a = -n.scrollTop;
  return (
    zt(r).direction === "rtl" && (s += rt(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: s, y: a }
  );
}
function JP(e, t) {
  const n = at(e),
    r = nn(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    l = 0;
  if (o) {
    (i = o.width), (s = o.height);
    const u = Pf();
    (!u || (u && t === "fixed")) && ((a = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: i, height: s, x: a, y: l };
}
const ek = new Set(["absolute", "fixed"]);
function tk(e, t) {
  const n = Fr(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = en(e) ? xo(e) : Zt(1),
    s = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    l = o * i.x,
    u = r * i.y;
  return { width: s, height: a, x: l, y: u };
}
function Jp(e, t, n) {
  let r;
  if (t === "viewport") r = JP(e, n);
  else if (t === "document") r = ZP(nn(e));
  else if (_t(t)) r = tk(t, n);
  else {
    const o = ex(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return $a(r);
}
function nx(e, t) {
  const n = rr(e);
  return n === t || !_t(n) || jo(n)
    ? !1
    : zt(n).position === "fixed" || nx(n, t);
}
function nk(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Gi(e, [], !1).filter((a) => _t(a) && Ho(a) !== "body"),
    o = null;
  const i = zt(e).position === "fixed";
  let s = i ? rr(e) : e;
  for (; _t(s) && !jo(s); ) {
    const a = zt(s),
      l = bf(s);
    !l && a.position === "fixed" && (o = null),
      (
        i
          ? !l && !o
          : (!l && a.position === "static" && !!o && ek.has(o.position)) ||
            (as(s) && !l && nx(e, s))
      )
        ? (r = r.filter((c) => c !== s))
        : (o = a),
      (s = rr(s));
  }
  return t.set(e, r), r;
}
function rk(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? bl(t)
          ? []
          : nk(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = s[0],
    l = s.reduce((u, c) => {
      const d = Jp(t, c, o);
      return (
        (u.top = rt(d.top, u.top)),
        (u.right = nr(d.right, u.right)),
        (u.bottom = nr(d.bottom, u.bottom)),
        (u.left = rt(d.left, u.left)),
        u
      );
    }, Jp(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function ok(e) {
  const { width: t, height: n } = J0(e);
  return { width: t, height: n };
}
function ik(e, t, n) {
  const r = en(t),
    o = nn(t),
    i = n === "fixed",
    s = Fr(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Zt(0);
  function u() {
    l.x = Af(o);
  }
  if (r || (!r && !i))
    if (((Ho(t) !== "body" || as(o)) && (a = Pl(t)), r)) {
      const h = Fr(t, !0, i, t);
      (l.x = h.x + t.clientLeft), (l.y = h.y + t.clientTop);
    } else o && u();
  i && !r && o && u();
  const c = o && !r && !i ? tx(o, a) : Zt(0),
    d = s.left + a.scrollLeft - l.x - c.x,
    f = s.top + a.scrollTop - l.y - c.y;
  return { x: d, y: f, width: s.width, height: s.height };
}
function yu(e) {
  return zt(e).position === "static";
}
function em(e, t) {
  if (!en(e) || zt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return nn(e) === n && (n = n.ownerDocument.body), n;
}
function rx(e, t) {
  const n = at(e);
  if (bl(e)) return n;
  if (!en(e)) {
    let o = rr(e);
    for (; o && !jo(o); ) {
      if (_t(o) && !yu(o)) return o;
      o = rr(o);
    }
    return n;
  }
  let r = em(e, t);
  for (; r && BP(r) && yu(r); ) r = em(r, t);
  return r && jo(r) && yu(r) && !bf(r) ? n : r || KP(e) || n;
}
const sk = async function (e) {
  const t = this.getOffsetParent || rx,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: ik(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function ak(e) {
  return zt(e).direction === "rtl";
}
const lk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: XP,
  getDocumentElement: nn,
  getClippingRect: rk,
  getOffsetParent: rx,
  getElementRects: sk,
  getClientRects: qP,
  getDimensions: ok,
  getScale: xo,
  isElement: _t,
  isRTL: ak,
};
function ox(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function uk(e, t) {
  let n = null,
    r;
  const o = nn(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const u = e.getBoundingClientRect(),
      { left: c, top: d, width: f, height: h } = u;
    if ((a || t(), !f || !h)) return;
    const v = Fs(d),
      g = Fs(o.clientWidth - (c + f)),
      x = Fs(o.clientHeight - (d + h)),
      m = Fs(c),
      y = {
        rootMargin: -v + "px " + -g + "px " + -x + "px " + -m + "px",
        threshold: rt(0, nr(1, l)) || 1,
      };
    let S = !0;
    function E(T) {
      const b = T[0].intersectionRatio;
      if (b !== l) {
        if (!S) return s();
        b
          ? s(!1, b)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      b === 1 && !ox(u, e.getBoundingClientRect()) && s(), (S = !1);
    }
    try {
      n = new IntersectionObserver(E, { ...y, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(E, y);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function ck(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    u = kf(e),
    c = o || i ? [...(u ? Gi(u) : []), ...Gi(t)] : [];
  c.forEach((m) => {
    o && m.addEventListener("scroll", n, { passive: !0 }),
      i && m.addEventListener("resize", n);
  });
  const d = u && a ? uk(u, n) : null;
  let f = -1,
    h = null;
  s &&
    ((h = new ResizeObserver((m) => {
      let [p] = m;
      p &&
        p.target === u &&
        h &&
        (h.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var y;
          (y = h) == null || y.observe(t);
        }))),
        n();
    })),
    u && !l && h.observe(u),
    h.observe(t));
  let v,
    g = l ? Fr(e) : null;
  l && x();
  function x() {
    const m = Fr(e);
    g && !ox(g, m) && n(), (g = m), (v = requestAnimationFrame(x));
  }
  return (
    n(),
    () => {
      var m;
      c.forEach((p) => {
        o && p.removeEventListener("scroll", n),
          i && p.removeEventListener("resize", n);
      }),
        d == null || d(),
        (m = h) == null || m.disconnect(),
        (h = null),
        l && cancelAnimationFrame(v);
    }
  );
}
const dk = jP,
  fk = IP,
  hk = DP,
  pk = VP,
  mk = LP,
  tm = NP,
  gk = FP,
  yk = (e, t, n) => {
    const r = new Map(),
      o = { platform: lk, ...n },
      i = { ...o.platform, _c: r };
    return MP(e, t, { ...o, platform: i });
  };
var vk = typeof document < "u",
  xk = function () {},
  oa = vk ? w.useLayoutEffect : xk;
function Ua(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Ua(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Ua(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ix(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function nm(e, t) {
  const n = ix(e);
  return Math.round(t * n) / n;
}
function vu(e) {
  const t = w.useRef(e);
  return (
    oa(() => {
      t.current = e;
    }),
    t
  );
}
function wk(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: s } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: u,
    } = e,
    [c, d] = w.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, h] = w.useState(r);
  Ua(f, r) || h(r);
  const [v, g] = w.useState(null),
    [x, m] = w.useState(null),
    p = w.useCallback((k) => {
      k !== T.current && ((T.current = k), g(k));
    }, []),
    y = w.useCallback((k) => {
      k !== b.current && ((b.current = k), m(k));
    }, []),
    S = i || v,
    E = s || x,
    T = w.useRef(null),
    b = w.useRef(null),
    P = w.useRef(c),
    N = l != null,
    A = vu(l),
    F = vu(o),
    j = vu(u),
    U = w.useCallback(() => {
      if (!T.current || !b.current) return;
      const k = { placement: t, strategy: n, middleware: f };
      F.current && (k.platform = F.current),
        yk(T.current, b.current, k).then((R) => {
          const I = { ...R, isPositioned: j.current !== !1 };
          O.current &&
            !Ua(P.current, I) &&
            ((P.current = I),
            is.flushSync(() => {
              d(I);
            }));
        });
    }, [f, t, n, F, j]);
  oa(() => {
    u === !1 &&
      P.current.isPositioned &&
      ((P.current.isPositioned = !1), d((k) => ({ ...k, isPositioned: !1 })));
  }, [u]);
  const O = w.useRef(!1);
  oa(
    () => (
      (O.current = !0),
      () => {
        O.current = !1;
      }
    ),
    []
  ),
    oa(() => {
      if ((S && (T.current = S), E && (b.current = E), S && E)) {
        if (A.current) return A.current(S, E, U);
        U();
      }
    }, [S, E, U, A, N]);
  const W = w.useMemo(
      () => ({ reference: T, floating: b, setReference: p, setFloating: y }),
      [p, y]
    ),
    z = w.useMemo(() => ({ reference: S, floating: E }), [S, E]),
    H = w.useMemo(() => {
      const k = { position: n, left: 0, top: 0 };
      if (!z.floating) return k;
      const R = nm(z.floating, c.x),
        I = nm(z.floating, c.y);
      return a
        ? {
            ...k,
            transform: "translate(" + R + "px, " + I + "px)",
            ...(ix(z.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: R, top: I };
    }, [n, a, z.floating, c.x, c.y]);
  return w.useMemo(
    () => ({ ...c, update: U, refs: W, elements: z, floatingStyles: H }),
    [c, U, W, z, H]
  );
}
const Sk = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? tm({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? tm({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  },
  Ck = (e, t) => ({ ...dk(e), options: [e, t] }),
  Ek = (e, t) => ({ ...fk(e), options: [e, t] }),
  Tk = (e, t) => ({ ...gk(e), options: [e, t] }),
  bk = (e, t) => ({ ...hk(e), options: [e, t] }),
  Pk = (e, t) => ({ ...pk(e), options: [e, t] }),
  kk = (e, t) => ({ ...mk(e), options: [e, t] }),
  Ak = (e, t) => ({ ...Sk(e), options: [e, t] });
var Rk = "Arrow",
  sx = w.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return C.jsx(tt.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : C.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
sx.displayName = Rk;
var Mk = sx;
function Nk(e) {
  const [t, n] = w.useState(void 0);
  return (
    tr(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, a;
          if ("borderBoxSize" in i) {
            const l = i.borderBoxSize,
              u = Array.isArray(l) ? l[0] : l;
            (s = u.inlineSize), (a = u.blockSize);
          } else (s = e.offsetWidth), (a = e.offsetHeight);
          n({ width: s, height: a });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var ax = "Popper",
  [lx, ux] = wl(ax),
  [ED, cx] = lx(ax),
  dx = "PopperAnchor",
  fx = w.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = cx(dx, n),
      s = w.useRef(null),
      a = Vt(t, s);
    return (
      w.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : C.jsx(tt.div, { ...o, ref: a })
    );
  });
fx.displayName = dx;
var Rf = "PopperContent",
  [Dk, Lk] = lx(Rf),
  hx = w.forwardRef((e, t) => {
    var ee, Br, xn, cr, wn, $r;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: s = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: u = [],
        collisionPadding: c = 0,
        sticky: d = "partial",
        hideWhenDetached: f = !1,
        updatePositionStrategy: h = "optimized",
        onPlaced: v,
        ...g
      } = e,
      x = cx(Rf, n),
      [m, p] = w.useState(null),
      y = Vt(t, (Sn) => p(Sn)),
      [S, E] = w.useState(null),
      T = Nk(S),
      b = (T == null ? void 0 : T.width) ?? 0,
      P = (T == null ? void 0 : T.height) ?? 0,
      N = r + (i !== "center" ? "-" + i : ""),
      A =
        typeof c == "number"
          ? c
          : { top: 0, right: 0, bottom: 0, left: 0, ...c },
      F = Array.isArray(u) ? u : [u],
      j = F.length > 0,
      U = { padding: A, boundary: F.filter(jk), altBoundary: j },
      {
        refs: O,
        floatingStyles: W,
        placement: z,
        isPositioned: H,
        middlewareData: k,
      } = wk({
        strategy: "fixed",
        placement: N,
        whileElementsMounted: (...Sn) =>
          ck(...Sn, { animationFrame: h === "always" }),
        elements: { reference: x.anchor },
        middleware: [
          Ck({ mainAxis: o + P, alignmentAxis: s }),
          l &&
            Ek({
              mainAxis: !0,
              crossAxis: !1,
              limiter: d === "partial" ? Tk() : void 0,
              ...U,
            }),
          l && bk({ ...U }),
          Pk({
            ...U,
            apply: ({
              elements: Sn,
              rects: fs,
              availableWidth: jl,
              availableHeight: hs,
            }) => {
              const { width: Il, height: Yo } = fs.reference,
                Ur = Sn.floating.style;
              Ur.setProperty("--radix-popper-available-width", `${jl}px`),
                Ur.setProperty("--radix-popper-available-height", `${hs}px`),
                Ur.setProperty("--radix-popper-anchor-width", `${Il}px`),
                Ur.setProperty("--radix-popper-anchor-height", `${Yo}px`);
            },
          }),
          S && Ak({ element: S, padding: a }),
          Ik({ arrowWidth: b, arrowHeight: P }),
          f && kk({ strategy: "referenceHidden", ...U }),
        ],
      }),
      [R, I] = gx(z),
      $ = er(v);
    tr(() => {
      H && ($ == null || $());
    }, [H, $]);
    const B = (ee = k.arrow) == null ? void 0 : ee.x,
      Y = (Br = k.arrow) == null ? void 0 : Br.y,
      q = ((xn = k.arrow) == null ? void 0 : xn.centerOffset) !== 0,
      [ve, De] = w.useState();
    return (
      tr(() => {
        m && De(window.getComputedStyle(m).zIndex);
      }, [m]),
      C.jsx("div", {
        ref: O.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...W,
          transform: H ? W.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: ve,
          "--radix-popper-transform-origin": [
            (cr = k.transformOrigin) == null ? void 0 : cr.x,
            (wn = k.transformOrigin) == null ? void 0 : wn.y,
          ].join(" "),
          ...((($r = k.hide) == null ? void 0 : $r.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: C.jsx(Dk, {
          scope: n,
          placedSide: R,
          onArrowChange: E,
          arrowX: B,
          arrowY: Y,
          shouldHideArrow: q,
          children: C.jsx(tt.div, {
            "data-side": R,
            "data-align": I,
            ...g,
            ref: y,
            style: { ...g.style, animation: H ? void 0 : "none" },
          }),
        }),
      })
    );
  });
hx.displayName = Rf;
var px = "PopperArrow",
  Ok = { top: "bottom", right: "left", bottom: "top", left: "right" },
  mx = w.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = Lk(px, r),
      s = Ok[i.placedSide];
    return C.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: C.jsx(Mk, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
mx.displayName = px;
function jk(e) {
  return e !== null;
}
var Ik = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, m, p;
    const { placement: n, rects: r, middlewareData: o } = t,
      s = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0,
      a = s ? 0 : e.arrowWidth,
      l = s ? 0 : e.arrowHeight,
      [u, c] = gx(n),
      d = { start: "0%", center: "50%", end: "100%" }[c],
      f = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + a / 2,
      h = (((p = o.arrow) == null ? void 0 : p.y) ?? 0) + l / 2;
    let v = "",
      g = "";
    return (
      u === "bottom"
        ? ((v = s ? d : `${f}px`), (g = `${-l}px`))
        : u === "top"
        ? ((v = s ? d : `${f}px`), (g = `${r.floating.height + l}px`))
        : u === "right"
        ? ((v = `${-l}px`), (g = s ? d : `${h}px`))
        : u === "left" &&
          ((v = `${r.floating.width + l}px`), (g = s ? d : `${h}px`)),
      { data: { x: v, y: g } }
    );
  },
});
function gx(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Fk = fx,
  Vk = hx,
  _k = mx,
  [kl, TD] = wl("Tooltip", [ux]),
  Mf = ux(),
  yx = "TooltipProvider",
  zk = 700,
  rm = "tooltip.open",
  [Bk, vx] = kl(yx),
  xx = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = zk,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: i,
      } = e,
      s = w.useRef(!0),
      a = w.useRef(!1),
      l = w.useRef(0);
    return (
      w.useEffect(() => {
        const u = l.current;
        return () => window.clearTimeout(u);
      }, []),
      C.jsx(Bk, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: w.useCallback(() => {
          window.clearTimeout(l.current), (s.current = !1);
        }, []),
        onClose: w.useCallback(() => {
          window.clearTimeout(l.current),
            (l.current = window.setTimeout(() => (s.current = !0), r));
        }, [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: w.useCallback((u) => {
          a.current = u;
        }, []),
        disableHoverableContent: o,
        children: i,
      })
    );
  };
xx.displayName = yx;
var wx = "Tooltip",
  [bD, Al] = kl(wx),
  Wc = "TooltipTrigger",
  $k = w.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = Al(Wc, n),
      i = vx(Wc, n),
      s = Mf(n),
      a = w.useRef(null),
      l = Vt(t, a, o.onTriggerChange),
      u = w.useRef(!1),
      c = w.useRef(!1),
      d = w.useCallback(() => (u.current = !1), []);
    return (
      w.useEffect(
        () => () => document.removeEventListener("pointerup", d),
        [d]
      ),
      C.jsx(Fk, {
        asChild: !0,
        ...s,
        children: C.jsx(tt.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: l,
          onPointerMove: Ee(e.onPointerMove, (f) => {
            f.pointerType !== "touch" &&
              !c.current &&
              !i.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (c.current = !0));
          }),
          onPointerLeave: Ee(e.onPointerLeave, () => {
            o.onTriggerLeave(), (c.current = !1);
          }),
          onPointerDown: Ee(e.onPointerDown, () => {
            o.open && o.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", d, { once: !0 });
          }),
          onFocus: Ee(e.onFocus, () => {
            u.current || o.onOpen();
          }),
          onBlur: Ee(e.onBlur, o.onClose),
          onClick: Ee(e.onClick, o.onClose),
        }),
      })
    );
  });
$k.displayName = Wc;
var Uk = "TooltipPortal",
  [PD, Wk] = kl(Uk, { forceMount: void 0 }),
  Io = "TooltipContent",
  Sx = w.forwardRef((e, t) => {
    const n = Wk(Io, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
      s = Al(Io, e.__scopeTooltip);
    return C.jsx(pf, {
      present: r || s.open,
      children: s.disableHoverableContent
        ? C.jsx(Cx, { side: o, ...i, ref: t })
        : C.jsx(Hk, { side: o, ...i, ref: t }),
    });
  }),
  Hk = w.forwardRef((e, t) => {
    const n = Al(Io, e.__scopeTooltip),
      r = vx(Io, e.__scopeTooltip),
      o = w.useRef(null),
      i = Vt(t, o),
      [s, a] = w.useState(null),
      { trigger: l, onClose: u } = n,
      c = o.current,
      { onPointerInTransitChange: d } = r,
      f = w.useCallback(() => {
        a(null), d(!1);
      }, [d]),
      h = w.useCallback(
        (v, g) => {
          const x = v.currentTarget,
            m = { x: v.clientX, y: v.clientY },
            p = Xk(m, x.getBoundingClientRect()),
            y = qk(m, p),
            S = Zk(g.getBoundingClientRect()),
            E = eA([...y, ...S]);
          a(E), d(!0);
        },
        [d]
      );
    return (
      w.useEffect(() => () => f(), [f]),
      w.useEffect(() => {
        if (l && c) {
          const v = (x) => h(x, c),
            g = (x) => h(x, l);
          return (
            l.addEventListener("pointerleave", v),
            c.addEventListener("pointerleave", g),
            () => {
              l.removeEventListener("pointerleave", v),
                c.removeEventListener("pointerleave", g);
            }
          );
        }
      }, [l, c, h, f]),
      w.useEffect(() => {
        if (s) {
          const v = (g) => {
            const x = g.target,
              m = { x: g.clientX, y: g.clientY },
              p =
                (l == null ? void 0 : l.contains(x)) ||
                (c == null ? void 0 : c.contains(x)),
              y = !Jk(m, s);
            p ? f() : y && (f(), u());
          };
          return (
            document.addEventListener("pointermove", v),
            () => document.removeEventListener("pointermove", v)
          );
        }
      }, [l, c, s, u, f]),
      C.jsx(Cx, { ...e, ref: i })
    );
  }),
  [Kk, Gk] = kl(wx, { isInside: !1 }),
  Qk = $T("TooltipContent"),
  Cx = w.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        ...a
      } = e,
      l = Al(Io, n),
      u = Mf(n),
      { onClose: c } = l;
    return (
      w.useEffect(
        () => (
          document.addEventListener(rm, c),
          () => document.removeEventListener(rm, c)
        ),
        [c]
      ),
      w.useEffect(() => {
        if (l.trigger) {
          const d = (f) => {
            const h = f.target;
            h != null && h.contains(l.trigger) && c();
          };
          return (
            window.addEventListener("scroll", d, { capture: !0 }),
            () => window.removeEventListener("scroll", d, { capture: !0 })
          );
        }
      }, [l.trigger, c]),
      C.jsx(hf, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: c,
        children: C.jsxs(Vk, {
          "data-state": l.stateAttribute,
          ...u,
          ...a,
          ref: t,
          style: {
            ...a.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            C.jsx(Qk, { children: r }),
            C.jsx(Kk, {
              scope: n,
              isInside: !0,
              children: C.jsx(hb, {
                id: l.contentId,
                role: "tooltip",
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
Sx.displayName = Io;
var Ex = "TooltipArrow",
  Yk = w.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = Mf(n);
    return Gk(Ex, n).isInside ? null : C.jsx(_k, { ...o, ...r, ref: t });
  });
Yk.displayName = Ex;
function Xk(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function qk(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function Zk(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function Jk(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i],
      l = t[s],
      u = a.x,
      c = a.y,
      d = l.x,
      f = l.y;
    c > r != f > r && n < ((d - u) * (r - c)) / (f - c) + u && (o = !o);
  }
  return o;
}
function eA(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0
    ),
    tA(t)
  );
}
function tA(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        s = t[t.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        s = n[n.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var nA = xx,
  Tx = Sx;
const rA = nA,
  oA = w.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    C.jsx(Tx, {
      ref: r,
      sideOffset: t,
      className: zr(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n,
    })
  );
oA.displayName = Tx.displayName;
const Nf = w.createContext({});
function Df(e) {
  const t = w.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const iA = typeof window < "u",
  bx = iA ? w.useLayoutEffect : w.useEffect,
  Rl = w.createContext(null);
function Lf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Wa(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const tn = (e, t, n) => (n > t ? t : n < e ? e : n);
let Ml = () => {},
  Fo = () => {};
const or = {},
  Px = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function kx(e) {
  return typeof e == "object" && e !== null;
}
const Ax = (e) => /^0[^.\s]+$/u.test(e);
function Rx(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const vt = (e) => e,
  sA = (e, t) => (n) => t(e(n)),
  ls = (...e) => e.reduce(sA),
  Qi = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  };
class Of {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Lf(this.subscriptions, t), () => Wa(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Je = (e) => e * 1e3,
  gt = (e) => e / 1e3;
function Mx(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Nx = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  aA = 1e-7,
  lA = 12;
function uA(e, t, n, r, o) {
  let i,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (i = Nx(s, r, o) - e), i > 0 ? (n = s) : (t = s);
  while (Math.abs(i) > aA && ++a < lA);
  return s;
}
function us(e, t, n, r) {
  if (e === t && n === r) return vt;
  const o = (i) => uA(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : Nx(o(i), t, r));
}
const Dx = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Lx = (e) => (t) => 1 - e(1 - t),
  Ox = us(0.33, 1.53, 0.69, 0.99),
  jf = Lx(Ox),
  jx = Dx(jf),
  Ix = (e) =>
    e >= 1
      ? 1
      : (e *= 2) < 1
      ? 0.5 * jf(e)
      : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  If = (e) => 1 - Math.sin(Math.acos(e)),
  Fx = Lx(If),
  Vx = Dx(If),
  cA = us(0.42, 0, 1, 1),
  dA = us(0, 0, 0.58, 1),
  _x = us(0.42, 0, 0.58, 1),
  fA = (e) => Array.isArray(e) && typeof e[0] != "number",
  zx = (e) => Array.isArray(e) && typeof e[0] == "number",
  om = {
    linear: vt,
    easeIn: cA,
    easeInOut: _x,
    easeOut: dA,
    circIn: If,
    circInOut: Vx,
    circOut: Fx,
    backIn: jf,
    backInOut: jx,
    backOut: Ox,
    anticipate: Ix,
  },
  hA = (e) => typeof e == "string",
  im = (e) => {
    if (zx(e)) {
      Fo(
        e.length === 4,
        "Cubic bezier arrays must contain four numerical values.",
        "cubic-bezier-length"
      );
      const [t, n, r, o] = e;
      return us(t, n, r, o);
    } else if (hA(e))
      return (
        Fo(
          om[e] !== void 0,
          `Invalid easing type '${e}'`,
          "invalid-easing-type"
        ),
        om[e]
      );
    return e;
  },
  Vs = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  sm = { value: null, addProjectionMetrics: null };
function pA(e, t) {
  let n = new Set(),
    r = new Set(),
    o = !1,
    i = !1;
  const s = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 },
    l = 0;
  function u(d) {
    s.has(d) && (c.schedule(d), e()), l++, d(a);
  }
  const c = {
    schedule: (d, f = !1, h = !1) => {
      const g = h && o ? n : r;
      return f && s.add(d), g.add(d), d;
    },
    cancel: (d) => {
      r.delete(d), s.delete(d);
    },
    process: (d) => {
      if (((a = d), o)) {
        i = !0;
        return;
      }
      o = !0;
      const f = n;
      (n = r),
        (r = f),
        n.forEach(u),
        t && sm.value && sm.value.frameloop[t].push(l),
        (l = 0),
        n.clear(),
        (o = !1),
        i && ((i = !1), c.process(d));
    },
  };
  return c;
}
const mA = 40;
function Bx(e, t) {
  let n = !1,
    r = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (n = !0),
    s = Vs.reduce((y, S) => ((y[S] = pA(i, t ? S : void 0)), y), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: u,
      preUpdate: c,
      update: d,
      preRender: f,
      render: h,
      postRender: v,
    } = s,
    g = () => {
      const y = or.useManualTiming,
        S = y ? o.timestamp : performance.now();
      (n = !1),
        y ||
          (o.delta = r ? 1e3 / 60 : Math.max(Math.min(S - o.timestamp, mA), 1)),
        (o.timestamp = S),
        (o.isProcessing = !0),
        a.process(o),
        l.process(o),
        u.process(o),
        c.process(o),
        d.process(o),
        f.process(o),
        h.process(o),
        v.process(o),
        (o.isProcessing = !1),
        n && t && ((r = !1), e(g));
    },
    x = () => {
      (n = !0), (r = !0), o.isProcessing || e(g);
    };
  return {
    schedule: Vs.reduce((y, S) => {
      const E = s[S];
      return (y[S] = (T, b = !1, P = !1) => (n || x(), E.schedule(T, b, P))), y;
    }, {}),
    cancel: (y) => {
      for (let S = 0; S < Vs.length; S++) s[Vs[S]].cancel(y);
    },
    state: o,
    steps: s,
  };
}
const {
  schedule: re,
  cancel: ir,
  state: Ae,
  steps: xu,
} = Bx(typeof requestAnimationFrame < "u" ? requestAnimationFrame : vt, !0);
let ia;
function gA() {
  ia = void 0;
}
const $e = {
    now: () => (
      ia === void 0 &&
        $e.set(
          Ae.isProcessing || or.useManualTiming
            ? Ae.timestamp
            : performance.now()
        ),
      ia
    ),
    set: (e) => {
      (ia = e), queueMicrotask(gA);
    },
  },
  $x = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Ux = $x("--"),
  yA = $x("var(--"),
  Ff = (e) => (yA(e) ? vA.test(e.split("/*")[0].trim()) : !1),
  vA =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function am(e) {
  return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--");
}
const Ko = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Yi = { ...Ko, transform: (e) => tn(0, 1, e) },
  _s = { ...Ko, default: 1 },
  Ei = (e) => Math.round(e * 1e5) / 1e5,
  Vf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function xA(e) {
  return e == null;
}
const wA =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  _f = (e, t) => (n) =>
    !!(
      (typeof n == "string" && wA.test(n) && n.startsWith(e)) ||
      (t && !xA(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Wx = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [o, i, s, a] = r.match(Vf);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  SA = (e) => tn(0, 255, e),
  wu = { ...Ko, transform: (e) => Math.round(SA(e)) },
  wr = {
    test: _f("rgb", "red"),
    parse: Wx("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      wu.transform(e) +
      ", " +
      wu.transform(t) +
      ", " +
      wu.transform(n) +
      ", " +
      Ei(Yi.transform(r)) +
      ")",
  };
function CA(e) {
  let t = "",
    n = "",
    r = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const Hc = { test: _f("#"), parse: CA, transform: wr.transform },
  cs = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Rn = cs("deg"),
  Jt = cs("%"),
  _ = cs("px"),
  EA = cs("vh"),
  TA = cs("vw"),
  lm = {
    ...Jt,
    parse: (e) => Jt.parse(e) / 100,
    transform: (e) => Jt.transform(e * 100),
  },
  ao = {
    test: _f("hsl", "hue"),
    parse: Wx("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Jt.transform(Ei(t)) +
      ", " +
      Jt.transform(Ei(n)) +
      ", " +
      Ei(Yi.transform(r)) +
      ")",
  },
  xe = {
    test: (e) => wr.test(e) || Hc.test(e) || ao.test(e),
    parse: (e) =>
      wr.test(e) ? wr.parse(e) : ao.test(e) ? ao.parse(e) : Hc.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? wr.transform(e)
        : ao.transform(e),
    getAnimatableNone: (e) => {
      const t = xe.parse(e);
      return (t.alpha = 0), xe.transform(t);
    },
  },
  bA =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function PA(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Vf)) == null ? void 0 : t.length) || 0) +
      (((n = e.match(bA)) == null ? void 0 : n.length) || 0) >
      0
  );
}
const Hx = "number",
  Kx = "color",
  kA = "var",
  AA = "var(",
  um = "${}",
  RA =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Vo(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    o = [];
  let i = 0;
  const a = t
    .replace(
      RA,
      (l) => (
        xe.test(l)
          ? (r.color.push(i), o.push(Kx), n.push(xe.parse(l)))
          : l.startsWith(AA)
          ? (r.var.push(i), o.push(kA), n.push(l))
          : (r.number.push(i), o.push(Hx), n.push(parseFloat(l))),
        ++i,
        um
      )
    )
    .split(um);
  return { values: n, split: a, indexes: r, types: o };
}
function MA(e) {
  return Vo(e).values;
}
function Gx({ split: e, types: t }) {
  const n = e.length;
  return (r) => {
    let o = "";
    for (let i = 0; i < n; i++)
      if (((o += e[i]), r[i] !== void 0)) {
        const s = t[i];
        s === Hx
          ? (o += Ei(r[i]))
          : s === Kx
          ? (o += xe.transform(r[i]))
          : (o += r[i]);
      }
    return o;
  };
}
function NA(e) {
  return Gx(Vo(e));
}
const DA = (e) =>
    typeof e == "number" ? 0 : xe.test(e) ? xe.getAnimatableNone(e) : e,
  LA = (e, t) =>
    typeof e == "number"
      ? t != null && t.trim().endsWith("/")
        ? e
        : 0
      : DA(e);
function OA(e) {
  const t = Vo(e);
  return Gx(t)(t.values.map((r, o) => LA(r, t.split[o])));
}
const It = {
  test: PA,
  parse: MA,
  createTransformer: NA,
  getAnimatableNone: OA,
};
function Su(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function jA({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let o = 0,
    i = 0,
    s = 0;
  if (!t) o = i = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (o = Su(l, a, e + 1 / 3)), (i = Su(l, a, e)), (s = Su(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function Ha(e, t) {
  return (n) => (n > 0 ? t : e);
}
const ae = (e, t, n) => e + (t - e) * n,
  Cu = (e, t, n) => {
    const r = e * e,
      o = n * (t * t - r) + r;
    return o < 0 ? 0 : Math.sqrt(o);
  },
  IA = [Hc, wr, ao],
  FA = (e) => IA.find((t) => t.test(e));
function cm(e) {
  const t = FA(e);
  if (
    (Ml(
      !!t,
      `'${e}' is not an animatable color. Use the equivalent color code instead.`,
      "color-not-animatable"
    ),
    !t)
  )
    return !1;
  let n = t.parse(e);
  return t === ao && (n = jA(n)), n;
}
const dm = (e, t) => {
    const n = cm(e),
      r = cm(t);
    if (!n || !r) return Ha(e, t);
    const o = { ...n };
    return (i) => (
      (o.red = Cu(n.red, r.red, i)),
      (o.green = Cu(n.green, r.green, i)),
      (o.blue = Cu(n.blue, r.blue, i)),
      (o.alpha = ae(n.alpha, r.alpha, i)),
      wr.transform(o)
    );
  },
  Kc = new Set(["none", "hidden"]);
function VA(e, t) {
  return Kc.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function _A(e, t) {
  return (n) => ae(e, t, n);
}
function zf(e) {
  return typeof e == "number"
    ? _A
    : typeof e == "string"
    ? Ff(e)
      ? Ha
      : xe.test(e)
      ? dm
      : $A
    : Array.isArray(e)
    ? Qx
    : typeof e == "object"
    ? xe.test(e)
      ? dm
      : zA
    : Ha;
}
function Qx(e, t) {
  const n = [...e],
    r = n.length,
    o = e.map((i, s) => zf(i)(i, t[s]));
  return (i) => {
    for (let s = 0; s < r; s++) n[s] = o[s](i);
    return n;
  };
}
function zA(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = zf(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r) n[i] = r[i](o);
    return n;
  };
}
function BA(e, t) {
  const n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const i = t.types[o],
      s = e.indexes[i][r[i]],
      a = e.values[s] ?? 0;
    (n[o] = a), r[i]++;
  }
  return n;
}
const $A = (e, t) => {
  const n = It.createTransformer(t),
    r = Vo(e),
    o = Vo(t);
  return r.indexes.var.length === o.indexes.var.length &&
    r.indexes.color.length === o.indexes.color.length &&
    r.indexes.number.length >= o.indexes.number.length
    ? (Kc.has(e) && !o.values.length) || (Kc.has(t) && !r.values.length)
      ? VA(e, t)
      : ls(Qx(BA(r, o), o.values), n)
    : (Ml(
        !0,
        `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
        "complex-values-different"
      ),
      Ha(e, t));
};
function Yx(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? ae(e, t, n)
    : zf(e)(e, t);
}
const UA = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: (n = !0) => re.update(t, n),
      stop: () => ir(t),
      now: () => (Ae.isProcessing ? Ae.timestamp : $e.now()),
    };
  },
  Xx = (e, t, n = 10) => {
    let r = "";
    const o = Math.max(Math.round(t / n), 2);
    for (let i = 0; i < o; i++)
      r += Math.round(e(i / (o - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  Ka = 2e4;
function Bf(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Ka; ) (t += n), (r = e.next(t));
  return t >= Ka ? 1 / 0 : t;
}
function WA(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }),
    o = Math.min(Bf(r), Ka);
  return {
    type: "keyframes",
    ease: (i) => r.next(o * i).value / t,
    duration: gt(o),
  };
}
const de = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function Gc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const HA = 12;
function KA(e, t, n) {
  let r = n;
  for (let o = 1; o < HA; o++) r = r - e(r) / t(r);
  return r;
}
const Eu = 0.001;
function GA({
  duration: e = de.duration,
  bounce: t = de.bounce,
  velocity: n = de.velocity,
  mass: r = de.mass,
}) {
  let o, i;
  Ml(
    e <= Je(de.maxDuration),
    "Spring duration must be 10 seconds or less",
    "spring-duration-limit"
  );
  let s = 1 - t;
  (s = tn(de.minDamping, de.maxDamping, s)),
    (e = tn(de.minDuration, de.maxDuration, gt(e))),
    s < 1
      ? ((o = (u) => {
          const c = u * s,
            d = c * e,
            f = c - n,
            h = Gc(u, s),
            v = Math.exp(-d);
          return Eu - (f / h) * v;
        }),
        (i = (u) => {
          const d = u * s * e,
            f = d * n + n,
            h = Math.pow(s, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-d),
            g = Gc(Math.pow(u, 2), s);
          return ((-o(u) + Eu > 0 ? -1 : 1) * ((f - h) * v)) / g;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -Eu + c * d;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const a = 5 / e,
    l = KA(o, i, a);
  if (((e = Je(e)), isNaN(l)))
    return { stiffness: de.stiffness, damping: de.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const QA = ["duration", "bounce"],
  YA = ["stiffness", "damping", "mass"];
function fm(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function XA(e) {
  let t = {
    velocity: de.velocity,
    stiffness: de.stiffness,
    damping: de.damping,
    mass: de.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!fm(e, YA) && fm(e, QA))
    if (((t.velocity = 0), e.visualDuration)) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        o = r * r,
        i = 2 * tn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = { ...t, mass: de.mass, stiffness: o, damping: i };
    } else {
      const n = GA({ ...e, velocity: 0 });
      (t = { ...t, ...n, mass: de.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function Ga(e = de.visualDuration, t = de.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: o } = n;
  const i = n.keyframes[0],
    s = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: i },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: d,
      velocity: f,
      isResolvedFromDuration: h,
    } = XA({ ...n, velocity: -gt(n.velocity || 0) }),
    v = f || 0,
    g = u / (2 * Math.sqrt(l * c)),
    x = s - i,
    m = gt(Math.sqrt(l / c)),
    p = Math.abs(x) < 5;
  r || (r = p ? de.restSpeed.granular : de.restSpeed.default),
    o || (o = p ? de.restDelta.granular : de.restDelta.default);
  let y, S, E, T, b, P;
  if (g < 1)
    (E = Gc(m, g)),
      (T = (v + g * m * x) / E),
      (y = (A) => {
        const F = Math.exp(-g * m * A);
        return s - F * (T * Math.sin(E * A) + x * Math.cos(E * A));
      }),
      (b = g * m * T + x * E),
      (P = g * m * x - T * E),
      (S = (A) =>
        Math.exp(-g * m * A) * (b * Math.sin(E * A) + P * Math.cos(E * A)));
  else if (g === 1) {
    y = (F) => s - Math.exp(-m * F) * (x + (v + m * x) * F);
    const A = v + m * x;
    S = (F) => Math.exp(-m * F) * (m * A * F - v);
  } else {
    const A = m * Math.sqrt(g * g - 1);
    y = (O) => {
      const W = Math.exp(-g * m * O),
        z = Math.min(A * O, 300);
      return (
        s - (W * ((v + g * m * x) * Math.sinh(z) + A * x * Math.cosh(z))) / A
      );
    };
    const F = (v + g * m * x) / A,
      j = g * m * F - x * A,
      U = g * m * x - F * A;
    S = (O) => {
      const W = Math.exp(-g * m * O),
        z = Math.min(A * O, 300);
      return W * (j * Math.sinh(z) + U * Math.cosh(z));
    };
  }
  const N = {
    calculatedDuration: (h && d) || null,
    velocity: (A) => Je(S(A)),
    next: (A) => {
      if (!h && g < 1) {
        const j = Math.exp(-g * m * A),
          U = Math.sin(E * A),
          O = Math.cos(E * A),
          W = s - j * (T * U + x * O),
          z = Je(j * (b * U + P * O));
        return (
          (a.done = Math.abs(z) <= r && Math.abs(s - W) <= o),
          (a.value = a.done ? s : W),
          a
        );
      }
      const F = y(A);
      if (h) a.done = A >= d;
      else {
        const j = Je(S(A));
        a.done = Math.abs(j) <= r && Math.abs(s - F) <= o;
      }
      return (a.value = a.done ? s : F), a;
    },
    toString: () => {
      const A = Math.min(Bf(N), Ka),
        F = Xx((j) => N.next(A * j).value, A, 30);
      return A + "ms " + F;
    },
    toTransition: () => {},
  };
  return N;
}
Ga.applyToOptions = (e) => {
  const t = WA(e, 100, Ga);
  return (
    (e.ease = t.ease), (e.duration = Je(t.duration)), (e.type = "keyframes"), e
  );
};
const qA = 5;
function qx(e, t, n) {
  const r = Math.max(t - qA, 0);
  return Mx(n - e(r), t - r);
}
function Qc({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    h = (P) => (a !== void 0 && P < a) || (l !== void 0 && P > l),
    v = (P) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - P) < Math.abs(l - P)
        ? a
        : l;
  let g = n * t;
  const x = d + g,
    m = s === void 0 ? x : s(x);
  m !== x && (g = m - d);
  const p = (P) => -g * Math.exp(-P / r),
    y = (P) => m + p(P),
    S = (P) => {
      const N = p(P),
        A = y(P);
      (f.done = Math.abs(N) <= u), (f.value = f.done ? m : A);
    };
  let E, T;
  const b = (P) => {
    h(f.value) &&
      ((E = P),
      (T = Ga({
        keyframes: [f.value, v(f.value)],
        velocity: qx(y, P, f.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    b(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let N = !1;
        return (
          !T && E === void 0 && ((N = !0), S(P), b(P)),
          E !== void 0 && P >= E ? T.next(P - E) : (!N && S(P), f)
        );
      },
    }
  );
}
function ZA(e, t, n) {
  const r = [],
    o = n || or.mix || Yx,
    i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || vt : t;
      a = ls(l, a);
    }
    r.push(a);
  }
  return r;
}
function JA(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if (
    (Fo(
      i === t.length,
      "Both input and output ranges must be the same length",
      "range-length"
    ),
    i === 1)
  )
    return () => t[0];
  if (i === 2 && t[0] === t[1]) return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = ZA(t, r, o),
    l = a.length,
    u = (c) => {
      if (s && c < e[0]) return t[0];
      let d = 0;
      if (l > 1) for (; d < e.length - 2 && !(c < e[d + 1]); d++);
      const f = Qi(e[d], e[d + 1], c);
      return a[d](f);
    };
  return n ? (c) => u(tn(e[0], e[i - 1], c)) : u;
}
function eR(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = Qi(0, t, r);
    e.push(ae(n, 1, o));
  }
}
function tR(e) {
  const t = [0];
  return eR(t, e.length - 1), t;
}
function nR(e, t) {
  return e.map((n) => n * t);
}
function rR(e, t) {
  return e.map(() => t || _x).splice(0, e.length - 1);
}
function Ti({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const o = fA(r) ? r.map(im) : im(r),
    i = { done: !1, value: t[0] },
    s = nR(n && n.length === t.length ? n : tR(t), e),
    a = JA(s, t, { ease: Array.isArray(o) ? o : rR(t, o) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
  };
}
const oR = (e) => e !== null;
function Nl(e, { repeat: t, repeatType: n = "loop" }, r, o = 1) {
  const i = e.filter(oR),
    a = o < 0 || (t && n !== "loop" && t % 2 === 1) ? 0 : i.length - 1;
  return !a || r === void 0 ? i[a] : r;
}
const iR = { decay: Qc, inertia: Qc, tween: Ti, keyframes: Ti, spring: Ga };
function Zx(e) {
  typeof e.type == "string" && (e.type = iR[e.type]);
}
class $f {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const sR = (e) => e / 100;
class Qa extends $f {
  constructor(t) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.delayState = { done: !1, value: void 0 }),
      (this.stop = () => {
        var r, o;
        const { motionValue: n } = this.options;
        n && n.updatedAt !== $e.now() && this.tick($e.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (o = (r = this.options).onStop) == null || o.call(r));
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    Zx(t);
    const {
      type: n = Ti,
      repeat: r = 0,
      repeatDelay: o = 0,
      repeatType: i,
      velocity: s = 0,
    } = t;
    let { keyframes: a } = t;
    const l = n || Ti;
    l !== Ti &&
      typeof a[0] != "number" &&
      ((this.mixKeyframes = ls(sR, Yx(a[0], a[1]))), (a = [0, 100]));
    const u = l({ ...t, keyframes: a });
    i === "mirror" &&
      (this.mirroredGenerator = l({
        ...t,
        keyframes: [...a].reverse(),
        velocity: -s,
      })),
      u.calculatedDuration === null && (u.calculatedDuration = Bf(u));
    const { calculatedDuration: c } = u;
    (this.calculatedDuration = c),
      (this.resolvedDuration = c + o),
      (this.totalDuration = this.resolvedDuration * (r + 1) - o),
      (this.generator = u);
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = n);
  }
  tick(t, n = !1) {
    const {
      generator: r,
      totalDuration: o,
      mixKeyframes: i,
      mirroredGenerator: s,
      resolvedDuration: a,
      calculatedDuration: l,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: u = 0,
      keyframes: c,
      repeat: d,
      repeatType: f,
      repeatDelay: h,
      type: v,
      onUpdate: g,
      finalKeyframe: x,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - o / this.speed, this.startTime)),
      n ? (this.currentTime = t) : this.updateTime(t);
    const m = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
      p = this.playbackSpeed >= 0 ? m < 0 : m > o;
    (this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = o);
    let y = this.currentTime,
      S = r;
    if (d) {
      const P = Math.min(this.currentTime, o) / a;
      let N = Math.floor(P),
        A = P % 1;
      !A && P >= 1 && (A = 1),
        A === 1 && N--,
        (N = Math.min(N, d + 1)),
        !!(N % 2) &&
          (f === "reverse"
            ? ((A = 1 - A), h && (A -= h / a))
            : f === "mirror" && (S = s)),
        (y = tn(0, 1, A) * a);
    }
    let E;
    p
      ? ((this.delayState.value = c[0]), (E = this.delayState))
      : (E = S.next(y)),
      i && !p && (E.value = i(E.value));
    let { done: T } = E;
    !p &&
      l !== null &&
      (T =
        this.playbackSpeed >= 0
          ? this.currentTime >= o
          : this.currentTime <= 0);
    const b =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && T));
    return (
      b && v !== Qc && (E.value = Nl(c, this.options, x, this.speed)),
      g && g(E.value),
      b && this.finish(),
      E
    );
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return gt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + gt(t);
  }
  get time() {
    return gt(this.currentTime);
  }
  set time(t) {
    (t = Je(t)),
      (this.currentTime = t),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = t)
        : this.driver &&
          (this.startTime = this.driver.now() - t / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0),
          (this.state = "paused"),
          (this.holdTime = t),
          this.tick(t));
  }
  getGeneratorVelocity() {
    const t = this.currentTime;
    if (t <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(t);
    const n = this.generator.next(t).value;
    return qx((r) => this.generator.next(r).value, t, n);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    n && this.driver && this.updateTime($e.now()),
      (this.playbackSpeed = t),
      n && this.driver && (this.time = gt(this.currentTime));
  }
  play() {
    var o, i;
    if (this.isStopped) return;
    const { driver: t = UA, startTime: n } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))),
      (i = (o = this.options).onPlay) == null || i.call(o);
    const r = this.driver.now();
    this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : this.startTime || (this.startTime = n ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime($e.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    var t, n;
    this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (n = (t = this.options).onComplete) == null || n.call(t);
  }
  cancel() {
    var t, n;
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (n = (t = this.options).onCancel) == null || n.call(t);
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
  attachTimeline(t) {
    var n;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (n = this.driver) == null || n.stop(),
      t.observe(this)
    );
  }
}
function aR(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const Sr = (e) => (e * 180) / Math.PI,
  Yc = (e) => {
    const t = Sr(Math.atan2(e[1], e[0]));
    return Xc(t);
  },
  lR = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: Yc,
    rotateZ: Yc,
    skewX: (e) => Sr(Math.atan(e[1])),
    skewY: (e) => Sr(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  Xc = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  hm = Yc,
  pm = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  mm = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  uR = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: pm,
    scaleY: mm,
    scale: (e) => (pm(e) + mm(e)) / 2,
    rotateX: (e) => Xc(Sr(Math.atan2(e[6], e[5]))),
    rotateY: (e) => Xc(Sr(Math.atan2(-e[2], e[0]))),
    rotateZ: hm,
    rotate: hm,
    skewX: (e) => Sr(Math.atan(e[4])),
    skewY: (e) => Sr(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function qc(e) {
  return e.includes("scale") ? 1 : 0;
}
function Zc(e, t) {
  if (!e || e === "none") return qc(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, o;
  if (n) (r = uR), (o = n);
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (r = lR), (o = a);
  }
  if (!o) return qc(t);
  const i = r[t],
    s = o[1].split(",").map(dR);
  return typeof i == "function" ? i(s) : s[i];
}
const cR = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return Zc(n, t);
};
function dR(e) {
  return parseFloat(e.trim());
}
const Go = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Qo = new Set(Go),
  gm = (e) => e === Ko || e === _,
  fR = new Set(["x", "y", "z"]),
  hR = Go.filter((e) => !fR.has(e));
function pR(e) {
  const t = [];
  return (
    hR.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Un = {
  width: (
    { x: e },
    { paddingLeft: t = "0", paddingRight: n = "0", boxSizing: r }
  ) => {
    const o = e.max - e.min;
    return r === "border-box" ? o : o - parseFloat(t) - parseFloat(n);
  },
  height: (
    { y: e },
    { paddingTop: t = "0", paddingBottom: n = "0", boxSizing: r }
  ) => {
    const o = e.max - e.min;
    return r === "border-box" ? o : o - parseFloat(t) - parseFloat(n);
  },
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => Zc(t, "x"),
  y: (e, { transform: t }) => Zc(t, "y"),
};
Un.translateX = Un.x;
Un.translateY = Un.y;
const Mr = new Set();
let Jc = !1,
  ed = !1,
  td = !1;
function Jx() {
  if (ed) {
    const e = Array.from(Mr).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const o = pR(r);
      o.length && (n.set(r, o), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const o = n.get(r);
        o &&
          o.forEach(([i, s]) => {
            var a;
            (a = r.getValue(i)) == null || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (ed = !1), (Jc = !1), Mr.forEach((e) => e.complete(td)), Mr.clear();
}
function ew() {
  Mr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (ed = !0);
  });
}
function mR() {
  (td = !0), ew(), Jx(), (td = !1);
}
class Uf {
  constructor(t, n, r, o, i, s = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = o),
      (this.element = i),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (Mr.add(this),
          Jc || ((Jc = !0), re.read(ew), re.resolveKeyframes(Jx)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: o,
    } = this;
    if (t[0] === null) {
      const i = o == null ? void 0 : o.get(),
        s = t[t.length - 1];
      if (i !== void 0) t[0] = i;
      else if (r && n) {
        const a = r.readValue(n, s);
        a != null && (t[0] = a);
      }
      t[0] === void 0 && (t[0] = s), o && i === void 0 && o.set(t[0]);
    }
    aR(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      Mr.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Mr.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const gR = (e) => e.startsWith("--");
function tw(e, t, n) {
  gR(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
const yR = {};
function nw(e, t) {
  const n = Rx(e);
  return () => yR[t] ?? n();
}
const vR = nw(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  rw = nw(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  fi = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  ym = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: fi([0, 0.65, 0.55, 1]),
    circOut: fi([0.55, 0, 1, 0.45]),
    backIn: fi([0.31, 0.01, 0.66, -0.59]),
    backOut: fi([0.33, 1.53, 0.69, 0.99]),
  };
function ow(e, t) {
  if (e)
    return typeof e == "function"
      ? rw()
        ? Xx(e, t)
        : "ease-out"
      : zx(e)
      ? fi(e)
      : Array.isArray(e)
      ? e.map((n) => ow(n, t) || ym.easeOut)
      : ym[e];
}
function xR(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: o = 300,
    repeat: i = 0,
    repeatType: s = "loop",
    ease: a = "easeOut",
    times: l,
  } = {},
  u = void 0
) {
  const c = { [t]: n };
  l && (c.offset = l);
  const d = ow(a, o);
  Array.isArray(d) && (c.easing = d);
  const f = {
    delay: r,
    duration: o,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: i + 1,
    direction: s === "reverse" ? "alternate" : "normal",
  };
  return u && (f.pseudoElement = u), e.animate(c, f);
}
function iw(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function wR({ type: e, ...t }) {
  return iw(e) && rw()
    ? e.applyToOptions(t)
    : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class sw extends $f {
  constructor(t) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !t)
    )
      return;
    const {
      element: n,
      name: r,
      keyframes: o,
      pseudoElement: i,
      allowFlatten: s = !1,
      finalKeyframe: a,
      onComplete: l,
    } = t;
    (this.isPseudoElement = !!i),
      (this.allowFlatten = s),
      (this.options = t),
      Fo(
        typeof t.type != "string",
        `Mini animate() doesn't support "type" as a string.`,
        "mini-spring"
      );
    const u = wR(t);
    (this.animation = xR(n, r, o, u, i)),
      u.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !i)) {
          const c = Nl(o, this.options, a, this.speed);
          this.updateMotionValue && this.updateMotionValue(c),
            tw(n, r, c),
            this.animation.cancel();
        }
        l == null || l(), this.notifyFinished();
      });
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" ||
      t === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var n, r, o;
    const t = (n = this.options) == null ? void 0 : n.element;
    !this.isPseudoElement &&
      t != null &&
      t.isConnected &&
      ((o = (r = this.animation).commitStyles) == null || o.call(r));
  }
  get duration() {
    var n, r;
    const t =
      ((r =
        (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) ==
      null
        ? void 0
        : r.call(n).duration) || 0;
    return gt(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + gt(t);
  }
  get time() {
    return gt(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    const n = this.finishedTime !== null;
    (this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = Je(t)),
      n && this.animation.pause();
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t);
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(t) {
    this.manualStartTime = this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, rangeStart: n, rangeEnd: r, observe: o }) {
    var i;
    return (
      this.allowFlatten &&
        ((i = this.animation.effect) == null ||
          i.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      t && vR()
        ? ((this.animation.timeline = t),
          n && (this.animation.rangeStart = n),
          r && (this.animation.rangeEnd = r),
          vt)
        : o(this)
    );
  }
}
const aw = { anticipate: Ix, backInOut: jx, circInOut: Vx };
function SR(e) {
  return e in aw;
}
function CR(e) {
  typeof e.ease == "string" && SR(e.ease) && (e.ease = aw[e.ease]);
}
const Tu = 10;
class ER extends sw {
  constructor(t) {
    CR(t),
      Zx(t),
      super(t),
      t.startTime !== void 0 &&
        t.autoplay !== !1 &&
        (this.startTime = t.startTime),
      (this.options = t);
  }
  updateMotionValue(t) {
    const {
      motionValue: n,
      onUpdate: r,
      onComplete: o,
      element: i,
      ...s
    } = this.options;
    if (!n) return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new Qa({ ...s, autoplay: !1 }),
      l = Math.max(Tu, $e.now() - this.startTime),
      u = tn(0, Tu, l - Tu),
      c = a.sample(l).value,
      { name: d } = this.options;
    i && d && tw(i, d, c),
      n.setWithVelocity(a.sample(Math.max(0, l - u)).value, c, u),
      a.stop();
  }
}
const vm = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (It.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function TR(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function bR(e, t, n, r) {
  const o = e[0];
  if (o === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const i = e[e.length - 1],
    s = vm(o, t),
    a = vm(i, t);
  return (
    Ml(
      s === a,
      `You are trying to animate ${t} from "${o}" to "${i}". "${
        s ? i : o
      }" is not an animatable value.`,
      "value-not-animatable"
    ),
    !s || !a ? !1 : TR(e) || ((n === "spring" || iw(n)) && r)
  );
}
function nd(e) {
  (e.duration = 0), (e.type = "keyframes");
}
const lw = new Set(["opacity", "clipPath", "filter", "transform"]),
  PR = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function kR(e) {
  for (let t = 0; t < e.length; t++)
    if (typeof e[t] == "string" && PR.test(e[t])) return !0;
  return !1;
}
const AR = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
  ]),
  RR = Rx(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function MR(e) {
  var d;
  const {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: o,
    damping: i,
    type: s,
    keyframes: a,
  } = e;
  if (
    !(
      ((d = t == null ? void 0 : t.owner) == null
        ? void 0
        : d.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: u, transformTemplate: c } = t.owner.getProps();
  return (
    RR() &&
    n &&
    (lw.has(n) || (AR.has(n) && kR(a))) &&
    (n !== "transform" || !c) &&
    !u &&
    !r &&
    o !== "mirror" &&
    i !== 0 &&
    s !== "inertia"
  );
}
const NR = 40;
class DR extends $f {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: o = 0,
    repeatDelay: i = 0,
    repeatType: s = "loop",
    keyframes: a,
    name: l,
    motionValue: u,
    element: c,
    ...d
  }) {
    var v;
    super(),
      (this.stop = () => {
        var g, x;
        this._animation &&
          (this._animation.stop(),
          (g = this.stopTimeline) == null || g.call(this)),
          (x = this.keyframeResolver) == null || x.cancel();
      }),
      (this.createdAt = $e.now());
    const f = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: o,
        repeatDelay: i,
        repeatType: s,
        name: l,
        motionValue: u,
        element: c,
        ...d,
      },
      h = (c == null ? void 0 : c.KeyframeResolver) || Uf;
    (this.keyframeResolver = new h(
      a,
      (g, x, m) => this.onKeyframesResolved(g, x, f, !m),
      l,
      u,
      c
    )),
      (v = this.keyframeResolver) == null || v.scheduleResolve();
  }
  onKeyframesResolved(t, n, r, o) {
    var m, p;
    this.keyframeResolver = void 0;
    const {
      name: i,
      type: s,
      velocity: a,
      delay: l,
      isHandoff: u,
      onUpdate: c,
    } = r;
    this.resolvedAt = $e.now();
    let d = !0;
    bR(t, i, s, a) ||
      ((d = !1),
      (or.instantAnimations || !l) && (c == null || c(Nl(t, r, n))),
      (t[0] = t[t.length - 1]),
      nd(r),
      (r.repeat = 0));
    const h = {
        startTime: o
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > NR
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...r,
        keyframes: t,
      },
      v = d && !u && MR(h),
      g =
        (p = (m = h.motionValue) == null ? void 0 : m.owner) == null
          ? void 0
          : p.current;
    let x;
    if (v)
      try {
        x = new ER({ ...h, element: g });
      } catch {
        x = new Qa(h);
      }
    else x = new Qa(h);
    x.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(vt),
      this.pendingTimeline &&
        ((this.stopTimeline = x.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = x);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    var t;
    return (
      this._animation ||
        ((t = this.keyframeResolver) == null || t.resume(), mR()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(t))
        : (this.pendingTimeline = t),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    this._animation && this.animation.cancel(),
      (t = this.keyframeResolver) == null || t.cancel();
  }
}
function uw(e, t, n, r = 0, o = 1) {
  const i = Array.from(e)
      .sort((u, c) => u.sortNodePosition(c))
      .indexOf(t),
    s = e.size,
    a = (s - 1) * r;
  return typeof n == "function" ? n(i, s) : o === 1 ? i * r : a - i * r;
}
const LR = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function OR(e) {
  const t = LR.exec(e);
  if (!t) return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
const jR = 4;
function cw(e, t, n = 1) {
  Fo(
    n <= jR,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
    "max-css-var-depth"
  );
  const [r, o] = OR(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const s = i.trim();
    return Px(s) ? parseFloat(s) : s;
  }
  return Ff(o) ? cw(o, t, n + 1) : o;
}
const IR = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  FR = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  VR = { type: "keyframes", duration: 0.8 },
  _R = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  zR = (e, { keyframes: t }) =>
    t.length > 2
      ? VR
      : Qo.has(e)
      ? e.startsWith("scale")
        ? FR(t[1])
        : IR
      : _R;
function dw(e, t) {
  if (e != null && e.inherit && t) {
    const { inherit: n, ...r } = e;
    return { ...t, ...r };
  }
  return e;
}
function Wf(e, t) {
  const n =
    (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
  return n !== e ? dw(n, e) : n;
}
const BR = new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed",
]);
function $R(e) {
  for (const t in e) if (!BR.has(t)) return !0;
  return !1;
}
const Hf =
  (e, t, n, r = {}, o, i) =>
  (s) => {
    const a = Wf(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - Je(l);
    const c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (f) => {
        t.set(f), a.onUpdate && a.onUpdate(f);
      },
      onComplete: () => {
        s(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: i ? void 0 : o,
    };
    $R(a) || Object.assign(c, zR(e, c)),
      c.duration && (c.duration = Je(c.duration)),
      c.repeatDelay && (c.repeatDelay = Je(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        (nd(c), c.delay === 0 && (d = !0)),
      (or.instantAnimations ||
        or.skipAnimations ||
        (o != null && o.shouldSkipAnimations)) &&
        ((d = !0), nd(c), (c.delay = 0)),
      (c.allowFlatten = !a.type && !a.ease),
      d && !i && t.get() !== void 0)
    ) {
      const f = Nl(c.keyframes, a);
      if (f !== void 0) {
        re.update(() => {
          c.onUpdate(f), c.onComplete();
        });
        return;
      }
    }
    return a.isSync ? new Qa(c) : new DR(c);
  };
function xm(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function Kf(e, t, n, r) {
  if (typeof t == "function") {
    const [o, i] = xm(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [o, i] = xm(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  return t;
}
function Nr(e, t, n) {
  const r = e.getProps();
  return Kf(r, t, n !== void 0 ? n : r.custom, e);
}
const fw = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...Go,
  ]),
  wm = 30,
  UR = (e) => !isNaN(parseFloat(e));
class WR {
  constructor(t, n = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r) => {
        var i;
        const o = $e.now();
        if (
          (this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            ((i = this.events.change) == null || i.notify(this.current),
            this.dependents))
        )
          for (const s of this.dependents) s.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = $e.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = UR(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Of());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            re.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t) {
    this.passiveEffect
      ? this.passiveEffect(t, this.updateAndNotify)
      : this.updateAndNotify(t);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = $e.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > wm
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, wm);
    return Mx(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var t, n;
    (t = this.dependents) == null || t.clear(),
      (n = this.events.destroy) == null || n.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function _o(e, t) {
  return new WR(e, t);
}
const rd = (e) => Array.isArray(e);
function HR(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, _o(n));
}
function KR(e) {
  return rd(e) ? e[e.length - 1] || 0 : e;
}
function GR(e, t) {
  const n = Nr(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const s in i) {
    const a = KR(i[s]);
    HR(e, s, a);
  }
}
const Re = (e) => !!(e && e.getVelocity);
function QR(e) {
  return !!(Re(e) && e.add);
}
function od(e, t) {
  const n = e.getValue("willChange");
  if (QR(n)) return n.add(t);
  if (!n && or.WillChange) {
    const r = new or.WillChange("auto");
    e.addValue("willChange", r), r.add(t);
  }
}
function Gf(e) {
  return e.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
}
const YR = "framerAppearId",
  hw = "data-" + Gf(YR);
function pw(e) {
  return e.props[hw];
}
function XR({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function mw(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let { transition: i, transitionEnd: s, ...a } = t;
  const l = e.getDefaultTransition();
  i = i ? dw(i, l) : l;
  const u = i == null ? void 0 : i.reduceMotion;
  r && (i = r);
  const c = [],
    d = o && e.animationState && e.animationState.getState()[o];
  for (const f in a) {
    const h = e.getValue(f, e.latestValues[f] ?? null),
      v = a[f];
    if (v === void 0 || (d && XR(d, f))) continue;
    const g = { delay: n, ...Wf(i || {}, f) },
      x = h.get();
    if (
      x !== void 0 &&
      !h.isAnimating() &&
      !Array.isArray(v) &&
      v === x &&
      !g.velocity
    ) {
      re.update(() => h.set(v));
      continue;
    }
    let m = !1;
    if (window.MotionHandoffAnimation) {
      const S = pw(e);
      if (S) {
        const E = window.MotionHandoffAnimation(S, f, re);
        E !== null && ((g.startTime = E), (m = !0));
      }
    }
    od(e, f);
    const p = u ?? e.shouldReduceMotion;
    h.start(Hf(f, h, v, p && fw.has(f) ? { type: !1 } : g, e, m));
    const y = h.animation;
    y && c.push(y);
  }
  if (s) {
    const f = () =>
      re.update(() => {
        s && GR(e, s);
      });
    c.length ? Promise.all(c).then(f) : f();
  }
  return c;
}
function id(e, t, n = {}) {
  var l;
  const r = Nr(
    e,
    t,
    n.type === "exit"
      ? (l = e.presenceContext) == null
        ? void 0
        : l.custom
      : void 0
  );
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(mw(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = o;
            return qR(e, t, u, c, d, f, n);
          }
        : () => Promise.resolve(),
    { when: a } = o;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [i, s] : [s, i];
    return u().then(() => c());
  } else return Promise.all([i(), s(n.delay)]);
}
function qR(e, t, n = 0, r = 0, o = 0, i = 1, s) {
  const a = [];
  for (const l of e.variantChildren)
    l.notify("AnimationStart", t),
      a.push(
        id(l, t, {
          ...s,
          delay:
            n +
            (typeof r == "function" ? 0 : r) +
            uw(e.variantChildren, l, r, o, i),
        }).then(() => l.notify("AnimationComplete", t))
      );
  return Promise.all(a);
}
function ZR(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => id(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string") r = id(e, t, n);
  else {
    const o = typeof t == "function" ? Nr(e, t, n.custom) : t;
    r = Promise.all(mw(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const JR = { test: (e) => e === "auto", parse: (e) => e },
  gw = (e) => (t) => t.test(e),
  yw = [Ko, _, Jt, Rn, TA, EA, JR],
  Sm = (e) => yw.find(gw(e));
function eM(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Ax(e)
    : !0;
}
const tM = new Set(["brightness", "contrast", "saturate", "opacity"]);
function nM(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Vf) || [];
  if (!r) return e;
  const o = n.replace(r, "");
  let i = tM.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const rM = /\b([a-z-]*)\(.*?\)/gu,
  sd = {
    ...It,
    getAnimatableNone: (e) => {
      const t = e.match(rM);
      return t ? t.map(nM).join(" ") : e;
    },
  },
  ad = {
    ...It,
    getAnimatableNone: (e) => {
      const t = It.parse(e);
      return It.createTransformer(e)(
        t.map((r) =>
          typeof r == "number"
            ? 0
            : typeof r == "object"
            ? { ...r, alpha: 1 }
            : r
        )
      );
    },
  },
  Cm = { ...Ko, transform: Math.round },
  oM = {
    rotate: Rn,
    rotateX: Rn,
    rotateY: Rn,
    rotateZ: Rn,
    scale: _s,
    scaleX: _s,
    scaleY: _s,
    scaleZ: _s,
    skew: Rn,
    skewX: Rn,
    skewY: Rn,
    distance: _,
    translateX: _,
    translateY: _,
    translateZ: _,
    x: _,
    y: _,
    z: _,
    perspective: _,
    transformPerspective: _,
    opacity: Yi,
    originX: lm,
    originY: lm,
    originZ: _,
  },
  Qf = {
    borderWidth: _,
    borderTopWidth: _,
    borderRightWidth: _,
    borderBottomWidth: _,
    borderLeftWidth: _,
    borderRadius: _,
    borderTopLeftRadius: _,
    borderTopRightRadius: _,
    borderBottomRightRadius: _,
    borderBottomLeftRadius: _,
    width: _,
    maxWidth: _,
    height: _,
    maxHeight: _,
    top: _,
    right: _,
    bottom: _,
    left: _,
    inset: _,
    insetBlock: _,
    insetBlockStart: _,
    insetBlockEnd: _,
    insetInline: _,
    insetInlineStart: _,
    insetInlineEnd: _,
    padding: _,
    paddingTop: _,
    paddingRight: _,
    paddingBottom: _,
    paddingLeft: _,
    paddingBlock: _,
    paddingBlockStart: _,
    paddingBlockEnd: _,
    paddingInline: _,
    paddingInlineStart: _,
    paddingInlineEnd: _,
    margin: _,
    marginTop: _,
    marginRight: _,
    marginBottom: _,
    marginLeft: _,
    marginBlock: _,
    marginBlockStart: _,
    marginBlockEnd: _,
    marginInline: _,
    marginInlineStart: _,
    marginInlineEnd: _,
    fontSize: _,
    backgroundPositionX: _,
    backgroundPositionY: _,
    ...oM,
    zIndex: Cm,
    fillOpacity: Yi,
    strokeOpacity: Yi,
    numOctaves: Cm,
  },
  iM = {
    ...Qf,
    color: xe,
    backgroundColor: xe,
    outlineColor: xe,
    fill: xe,
    stroke: xe,
    borderColor: xe,
    borderTopColor: xe,
    borderRightColor: xe,
    borderBottomColor: xe,
    borderLeftColor: xe,
    filter: sd,
    WebkitFilter: sd,
    mask: ad,
    WebkitMask: ad,
  },
  vw = (e) => iM[e],
  sM = new Set([sd, ad]);
function xw(e, t) {
  let n = vw(e);
  return (
    sM.has(n) || (n = It), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const aM = new Set(["auto", "none", "0"]);
function lM(e, t, n) {
  let r = 0,
    o;
  for (; r < e.length && !o; ) {
    const i = e[r];
    typeof i == "string" && !aM.has(i) && Vo(i).values.length && (o = e[r]),
      r++;
  }
  if (o && n) for (const i of t) e[i] = xw(n, o);
}
class uM extends Uf {
  constructor(t, n, r, o, i) {
    super(t, n, r, o, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let d = t[c];
      if (typeof d == "string" && ((d = d.trim()), Ff(d))) {
        const f = cw(d, n.current);
        f !== void 0 && (t[c] = f),
          c === t.length - 1 && (this.finalKeyframe = d);
      }
    }
    if ((this.resolveNoneKeyframes(), !fw.has(r) || t.length !== 2)) return;
    const [o, i] = t,
      s = Sm(o),
      a = Sm(i),
      l = am(o),
      u = am(i);
    if (l !== u && Un[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (s !== a)
      if (gm(s) && gm(a))
        for (let c = 0; c < t.length; c++) {
          const d = t[c];
          typeof d == "string" && (t[c] = parseFloat(d));
        }
      else Un[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let o = 0; o < t.length; o++) (t[o] === null || eM(t[o])) && r.push(o);
    r.length && lM(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Un[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const o = n[n.length - 1];
    o !== void 0 && t.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var a;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current) return;
    const o = t.getValue(n);
    o && o.jump(this.measuredOrigin, !1);
    const i = r.length - 1,
      s = r[i];
    (r[i] = Un[n](t.measureViewportBox(), window.getComputedStyle(t.current))),
      s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
      (a = this.removedTransforms) != null &&
        a.length &&
        this.removedTransforms.forEach(([l, u]) => {
          t.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function ww(e, t, n) {
  if (e == null) return [];
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    const o = document.querySelectorAll(e);
    return o ? Array.from(o) : [];
  }
  return Array.from(e).filter((r) => r != null);
}
const Sw = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function sa(e) {
  return kx(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
const { schedule: Yf, cancel: kD } = Bx(queueMicrotask, !1),
  kt = { x: !1, y: !1 };
function Cw() {
  return kt.x || kt.y;
}
function cM(e) {
  return e === "x" || e === "y"
    ? kt[e]
      ? null
      : ((kt[e] = !0),
        () => {
          kt[e] = !1;
        })
    : kt.x || kt.y
    ? null
    : ((kt.x = kt.y = !0),
      () => {
        kt.x = kt.y = !1;
      });
}
function Ew(e, t) {
  const n = ww(e),
    r = new AbortController(),
    o = { passive: !0, ...t, signal: r.signal };
  return [n, o, () => r.abort()];
}
function dM(e) {
  return !(e.pointerType === "touch" || Cw());
}
function fM(e, t, n = {}) {
  const [r, o, i] = Ew(e, n);
  return (
    r.forEach((s) => {
      let a = !1,
        l = !1,
        u;
      const c = () => {
          s.removeEventListener("pointerleave", v);
        },
        d = (x) => {
          u && (u(x), (u = void 0)), c();
        },
        f = (x) => {
          (a = !1),
            window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", f),
            l && ((l = !1), d(x));
        },
        h = () => {
          (a = !0),
            window.addEventListener("pointerup", f, o),
            window.addEventListener("pointercancel", f, o);
        },
        v = (x) => {
          if (x.pointerType !== "touch") {
            if (a) {
              l = !0;
              return;
            }
            d(x);
          }
        },
        g = (x) => {
          if (!dM(x)) return;
          l = !1;
          const m = t(s, x);
          typeof m == "function" &&
            ((u = m), s.addEventListener("pointerleave", v, o));
        };
      s.addEventListener("pointerenter", g, o),
        s.addEventListener("pointerdown", h, o);
    }),
    i
  );
}
const Tw = (e, t) => (t ? (e === t ? !0 : Tw(e, t.parentElement)) : !1),
  Xf = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  hM = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function pM(e) {
  return hM.has(e.tagName) || e.isContentEditable === !0;
}
const mM = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function gM(e) {
  return mM.has(e.tagName) || e.isContentEditable === !0;
}
const aa = new WeakSet();
function Em(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function bu(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const yM = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Em(() => {
    if (aa.has(n)) return;
    bu(n, "down");
    const o = Em(() => {
        bu(n, "up");
      }),
      i = () => bu(n, "cancel");
    n.addEventListener("keyup", o, t), n.addEventListener("blur", i, t);
  });
  n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Tm(e) {
  return Xf(e) && !Cw();
}
const bm = new WeakSet();
function vM(e, t, n = {}) {
  const [r, o, i] = Ew(e, n),
    s = (a) => {
      const l = a.currentTarget;
      if (!Tm(a) || bm.has(a)) return;
      aa.add(l), n.stopPropagation && bm.add(a);
      const u = t(l, a),
        c = (h, v) => {
          window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            aa.has(l) && aa.delete(l),
            Tm(h) && typeof u == "function" && u(h, { success: v });
        },
        d = (h) => {
          c(
            h,
            l === window ||
              l === document ||
              n.useGlobalTarget ||
              Tw(l, h.target)
          );
        },
        f = (h) => {
          c(h, !1);
        };
      window.addEventListener("pointerup", d, o),
        window.addEventListener("pointercancel", f, o);
    };
  return (
    r.forEach((a) => {
      (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, o),
        sa(a) &&
          (a.addEventListener("focus", (u) => yM(u, o)),
          !pM(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
    }),
    i
  );
}
function qf(e) {
  return kx(e) && "ownerSVGElement" in e;
}
const la = new WeakMap();
let Mn;
const bw = (e, t, n) => (r, o) =>
    o && o[0]
      ? o[0][e + "Size"]
      : qf(r) && "getBBox" in r
      ? r.getBBox()[t]
      : r[n],
  xM = bw("inline", "width", "offsetWidth"),
  wM = bw("block", "height", "offsetHeight");
function SM({ target: e, borderBoxSize: t }) {
  var n;
  (n = la.get(e)) == null ||
    n.forEach((r) => {
      r(e, {
        get width() {
          return xM(e, t);
        },
        get height() {
          return wM(e, t);
        },
      });
    });
}
function CM(e) {
  e.forEach(SM);
}
function EM() {
  typeof ResizeObserver > "u" || (Mn = new ResizeObserver(CM));
}
function TM(e, t) {
  Mn || EM();
  const n = ww(e);
  return (
    n.forEach((r) => {
      let o = la.get(r);
      o || ((o = new Set()), la.set(r, o)),
        o.add(t),
        Mn == null || Mn.observe(r);
    }),
    () => {
      n.forEach((r) => {
        const o = la.get(r);
        o == null || o.delete(t),
          (o != null && o.size) || Mn == null || Mn.unobserve(r);
      });
    }
  );
}
const ua = new Set();
let lo;
function bM() {
  (lo = () => {
    const e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    ua.forEach((t) => t(e));
  }),
    window.addEventListener("resize", lo);
}
function PM(e) {
  return (
    ua.add(e),
    lo || bM(),
    () => {
      ua.delete(e),
        !ua.size &&
          typeof lo == "function" &&
          (window.removeEventListener("resize", lo), (lo = void 0));
    }
  );
}
function Pm(e, t) {
  return typeof e == "function" ? PM(e) : TM(e, t);
}
function kM(e) {
  return qf(e) && e.tagName === "svg";
}
const AM = [...yw, xe, It],
  RM = (e) => AM.find(gw(e)),
  km = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  uo = () => ({ x: km(), y: km() }),
  Am = () => ({ min: 0, max: 0 }),
  Se = () => ({ x: Am(), y: Am() }),
  MM = new WeakMap();
function Dl(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Xi(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Zf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Jf = ["initial", ...Zf];
function Ll(e) {
  return Dl(e.animate) || Jf.some((t) => Xi(e[t]));
}
function Pw(e) {
  return !!(Ll(e) || e.variants);
}
function NM(e, t, n) {
  for (const r in t) {
    const o = t[r],
      i = n[r];
    if (Re(o)) e.addValue(r, o);
    else if (Re(i)) e.addValue(r, _o(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(o) : s.hasAnimated || s.set(o);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, _o(s !== void 0 ? s : o, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const ld = { current: null },
  kw = { current: !1 },
  DM = typeof window < "u";
function LM() {
  if (((kw.current = !0), !!DM))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (ld.current = e.matches);
      e.addEventListener("change", t), t();
    } else ld.current = !1;
}
const Rm = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let Ya = {};
function Aw(e) {
  Ya = e;
}
function OM() {
  return Ya;
}
class jM {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: o,
      skipAnimations: i,
      blockInitialAnimation: s,
      visualState: a,
    },
    l = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = Uf),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const h = $e.now();
        this.renderScheduledAt < h &&
          ((this.renderScheduledAt = h), re.render(this.render, !1, !0));
      });
    const { latestValues: u, renderState: c } = a;
    (this.latestValues = u),
      (this.baseTarget = { ...u }),
      (this.initialValues = n.initial ? { ...u } : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.skipAnimationsConfig = i),
      (this.options = l),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = Ll(n)),
      (this.isVariantNode = Pw(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const h in f) {
      const v = f[h];
      u[h] !== void 0 && Re(v) && v.set(u[h]);
    }
  }
  mount(t) {
    var n, r;
    if (this.hasBeenMounted)
      for (const o in this.initialValues)
        (n = this.values.get(o)) == null || n.jump(this.initialValues[o]),
          (this.latestValues[o] = this.initialValues[o]);
    (this.current = t),
      MM.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((o, i) => this.bindToMotionValue(i, o)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
        ? (this.shouldReduceMotion = !0)
        : (kw.current || LM(), (this.shouldReduceMotion = ld.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      (r = this.parent) == null || r.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0);
  }
  unmount() {
    var t;
    this.projection && this.projection.unmount(),
      ir(this.notifyUpdate),
      ir(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (t = this.parent) == null || t.removeChild(this);
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features) {
      const r = this.features[n];
      r && (r.unmount(), (r.isMounted = !1));
    }
    this.current = null;
  }
  addChild(t) {
    this.children.add(t),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(t);
  }
  removeChild(t) {
    this.children.delete(t),
      this.enteringChildren && this.enteringChildren.delete(t);
  }
  bindToMotionValue(t, n) {
    if (
      (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
      n.accelerate && lw.has(t) && this.current instanceof HTMLElement)
    ) {
      const {
          factory: s,
          keyframes: a,
          times: l,
          ease: u,
          duration: c,
        } = n.accelerate,
        d = new sw({
          element: this.current,
          name: t,
          keyframes: a,
          times: l,
          ease: u,
          duration: Je(c),
        }),
        f = s(d);
      this.valueSubscriptions.set(t, () => {
        f(), d.cancel();
      });
      return;
    }
    const r = Qo.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const o = n.on("change", (s) => {
      (this.latestValues[t] = s),
        this.props.onUpdate && re.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender();
    });
    let i;
    typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (i = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        o(), i && i(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Ya) {
      const n = Ya[t];
      if (!n) continue;
      const { isEnabled: r, Feature: o } = n;
      if (
        (!this.features[t] &&
          o &&
          r(this.props) &&
          (this.features[t] = new o(this)),
        this.features[t])
      ) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Se();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Rm.length; r++) {
      const o = Rm[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = "on" + o,
        s = t[i];
      s && (this.propEventSubscriptions[o] = this.on(o, s));
    }
    (this.prevMotionValues = NM(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = _o(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    let r =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : this.getBaseTargetFromProps(this.props, t) ??
          this.readValueFromInstance(this.current, t, this.options);
    return (
      r != null &&
        (typeof r == "string" && (Px(r) || Ax(r))
          ? (r = parseFloat(r))
          : !RM(r) && It.test(n) && (r = xw(t, n)),
        this.setBaseTarget(t, Re(r) ? r.get() : r)),
      Re(r) ? r.get() : r
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var i;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const s = Kf(
        this.props,
        n,
        (i = this.presenceContext) == null ? void 0 : i.custom
      );
      s && (r = s[t]);
    }
    if (n && r !== void 0) return r;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Re(o)
      ? o
      : this.initialValues[t] !== void 0 && r === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Of()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    Yf.render(this.render);
  }
}
class Rw extends jM {
  constructor() {
    super(...arguments), (this.KeyframeResolver = uM);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    const r = t.style;
    return r ? r[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Re(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class ur {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function Mw({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function IM({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function FM(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Pu(e) {
  return e === void 0 || e === 1;
}
function ud({ scale: e, scaleX: t, scaleY: n }) {
  return !Pu(e) || !Pu(t) || !Pu(n);
}
function gr(e) {
  return (
    ud(e) ||
    Nw(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Nw(e) {
  return Mm(e.x) || Mm(e.y);
}
function Mm(e) {
  return e && e !== "0%";
}
function Xa(e, t, n) {
  const r = e - n,
    o = t * r;
  return n + o;
}
function Nm(e, t, n, r, o) {
  return o !== void 0 && (e = Xa(e, o, r)), Xa(e, n, r) + t;
}
function cd(e, t = 0, n = 1, r, o) {
  (e.min = Nm(e.min, t, n, r, o)), (e.max = Nm(e.max, t, n, r, o));
}
function Dw(e, { x: t, y: n }) {
  cd(e.x, t.translate, t.scale, t.originPoint),
    cd(e.y, n.translate, n.scale, n.originPoint);
}
const Dm = 0.999999999999,
  Lm = 1.0000000000001;
function VM(e, t, n, r = !1) {
  var a;
  const o = n.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, s;
  for (let l = 0; l < o; l++) {
    (i = n[l]), (s = i.projectionDelta);
    const { visualElement: u } = i.options;
    (u && u.props.style && u.props.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        (Gt(e.x, -i.scroll.offset.x), Gt(e.y, -i.scroll.offset.y)),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Dw(e, s)),
      r &&
        gr(i.latestValues) &&
        ca(e, i.latestValues, (a = i.layout) == null ? void 0 : a.layoutBox));
  }
  t.x < Lm && t.x > Dm && (t.x = 1), t.y < Lm && t.y > Dm && (t.y = 1);
}
function Gt(e, t) {
  (e.min += t), (e.max += t);
}
function Om(e, t, n, r, o = 0.5) {
  const i = ae(e.min, e.max, o);
  cd(e, t, n, i, r);
}
function jm(e, t) {
  return typeof e == "string" ? (parseFloat(e) / 100) * (t.max - t.min) : e;
}
function ca(e, t, n) {
  const r = n ?? e;
  Om(e.x, jm(t.x, r.x), t.scaleX, t.scale, t.originX),
    Om(e.y, jm(t.y, r.y), t.scaleY, t.scale, t.originY);
}
function Lw(e, t) {
  return Mw(FM(e.getBoundingClientRect(), t));
}
function _M(e, t, n) {
  const r = Lw(e, n),
    { scroll: o } = t;
  return o && (Gt(r.x, o.offset.x), Gt(r.y, o.offset.y)), r;
}
const zM = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  BM = Go.length;
function $M(e, t, n) {
  let r = "",
    o = !0;
  for (let i = 0; i < BM; i++) {
    const s = Go[i],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if (typeof a == "number") l = a === (s.startsWith("scale") ? 1 : 0);
    else {
      const u = parseFloat(a);
      l = s.startsWith("scale") ? u === 1 : u === 0;
    }
    if (!l || n) {
      const u = Sw(a, Qf[s]);
      if (!l) {
        o = !1;
        const c = zM[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, o ? "" : r)) : o && (r = "none"), r;
}
function eh(e, t, n) {
  const { style: r, vars: o, transformOrigin: i } = e;
  let s = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (Qo.has(l)) {
      s = !0;
      continue;
    } else if (Ux(l)) {
      o[l] = u;
      continue;
    } else {
      const c = Sw(u, Qf[l]);
      l.startsWith("origin") ? ((a = !0), (i[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = $M(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = i;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
function Ow(e, { style: t, vars: n }, r, o) {
  const i = e.style;
  let s;
  for (s in t) i[s] = t[s];
  o == null || o.applyProjectionStyles(i, r);
  for (s in n) i.setProperty(s, n[s]);
}
function Im(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const ai = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (_.test(e)) e = parseFloat(e);
        else return e;
      const n = Im(e, t.target.x),
        r = Im(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  UM = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        o = It.parse(e);
      if (o.length > 5) return r;
      const i = It.createTransformer(e),
        s = typeof o[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (o[0 + s] /= a), (o[1 + s] /= l);
      const u = ae(a, l, 0.5);
      return (
        typeof o[2 + s] == "number" && (o[2 + s] /= u),
        typeof o[3 + s] == "number" && (o[3 + s] /= u),
        i(o)
      );
    },
  },
  dd = {
    borderRadius: {
      ...ai,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: ai,
    borderTopRightRadius: ai,
    borderBottomLeftRadius: ai,
    borderBottomRightRadius: ai,
    boxShadow: UM,
  };
function jw(e, { layout: t, layoutId: n }) {
  return (
    Qo.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!dd[e] || e === "opacity"))
  );
}
function th(e, t, n) {
  var s;
  const r = e.style,
    o = t == null ? void 0 : t.style,
    i = {};
  if (!r) return i;
  for (const a in r)
    (Re(r[a]) ||
      (o && Re(o[a])) ||
      jw(a, e) ||
      ((s = n == null ? void 0 : n.getValue(a)) == null
        ? void 0
        : s.liveStyle) !== void 0) &&
      (i[a] = r[a]);
  return i;
}
function WM(e) {
  return window.getComputedStyle(e);
}
class HM extends Rw {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Ow);
  }
  readValueFromInstance(t, n) {
    var r;
    if (Qo.has(n))
      return (r = this.projection) != null && r.isProjecting ? qc(n) : cR(t, n);
    {
      const o = WM(t),
        i = (Ux(n) ? o.getPropertyValue(n) : o[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Lw(t, n);
  }
  build(t, n, r) {
    eh(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return th(t, n, r);
  }
}
const KM = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  GM = { offset: "strokeDashoffset", array: "strokeDasharray" };
function QM(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? KM : GM;
  (e[i.offset] = `${-r}`), (e[i.array] = `${t} ${n}`);
}
const YM = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function Iw(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: o,
    pathSpacing: i = 1,
    pathOffset: s = 0,
    ...a
  },
  l,
  u,
  c
) {
  if ((eh(e, a, u), l)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: d, style: f } = e;
  d.transform && ((f.transform = d.transform), delete d.transform),
    (f.transform || d.transformOrigin) &&
      ((f.transformOrigin = d.transformOrigin ?? "50% 50%"),
      delete d.transformOrigin),
    f.transform &&
      ((f.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box"),
      delete d.transformBox);
  for (const h of YM) d[h] !== void 0 && ((f[h] = d[h]), delete d[h]);
  t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    o !== void 0 && QM(d, o, i, s, !1);
}
const Fw = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  Vw = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function XM(e, t, n, r) {
  Ow(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(Fw.has(o) ? o : Gf(o), t.attrs[o]);
}
function _w(e, t, n) {
  const r = th(e, t, n);
  for (const o in e)
    if (Re(e[o]) || Re(t[o])) {
      const i =
        Go.indexOf(o) !== -1
          ? "attr" + o.charAt(0).toUpperCase() + o.substring(1)
          : o;
      r[i] = e[o];
    }
  return r;
}
class qM extends Rw {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Se);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Qo.has(n)) {
      const r = vw(n);
      return (r && r.default) || 0;
    }
    return (n = Fw.has(n) ? n : Gf(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return _w(t, n, r);
  }
  build(t, n, r) {
    Iw(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, o) {
    XM(t, n, r, o);
  }
  mount(t) {
    (this.isSVGTag = Vw(t.tagName)), super.mount(t);
  }
}
const ZM = Jf.length;
function zw(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? zw(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < ZM; n++) {
    const r = Jf[n],
      o = e.props[r];
    (Xi(o) || o === !1) && (t[r] = o);
  }
  return t;
}
function Bw(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
const JM = [...Zf].reverse(),
  e2 = Zf.length;
function t2(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => ZR(e, n, r)));
}
function n2(e) {
  let t = t2(e),
    n = Fm(),
    r = !0,
    o = !1;
  const i = (u) => (c, d) => {
    var h;
    const f = Nr(
      e,
      d,
      u === "exit"
        ? (h = e.presenceContext) == null
          ? void 0
          : h.custom
        : void 0
    );
    if (f) {
      const { transition: v, transitionEnd: g, ...x } = f;
      c = { ...c, ...x, ...g };
    }
    return c;
  };
  function s(u) {
    t = u(e);
  }
  function a(u) {
    const { props: c } = e,
      d = zw(e.parent) || {},
      f = [],
      h = new Set();
    let v = {},
      g = 1 / 0;
    for (let m = 0; m < e2; m++) {
      const p = JM[m],
        y = n[p],
        S = c[p] !== void 0 ? c[p] : d[p],
        E = Xi(S),
        T = p === u ? y.isActive : null;
      T === !1 && (g = m);
      let b = S === d[p] && S !== c[p] && E;
      if (
        (b && (r || o) && e.manuallyAnimateOnMount && (b = !1),
        (y.protectedKeys = { ...v }),
        (!y.isActive && T === null) ||
          (!S && !y.prevProp) ||
          Dl(S) ||
          typeof S == "boolean")
      )
        continue;
      if (p === "exit" && y.isActive && T !== !0) {
        y.prevResolvedValues && (v = { ...v, ...y.prevResolvedValues });
        continue;
      }
      const P = r2(y.prevProp, S);
      let N = P || (p === u && y.isActive && !b && E) || (m > g && E),
        A = !1;
      const F = Array.isArray(S) ? S : [S];
      let j = F.reduce(i(p), {});
      T === !1 && (j = {});
      const { prevResolvedValues: U = {} } = y,
        O = { ...U, ...j },
        W = (k) => {
          (N = !0),
            h.has(k) && ((A = !0), h.delete(k)),
            (y.needsAnimating[k] = !0);
          const R = e.getValue(k);
          R && (R.liveStyle = !1);
        };
      for (const k in O) {
        const R = j[k],
          I = U[k];
        if (v.hasOwnProperty(k)) continue;
        let $ = !1;
        rd(R) && rd(I) ? ($ = !Bw(R, I)) : ($ = R !== I),
          $
            ? R != null
              ? W(k)
              : h.add(k)
            : R !== void 0 && h.has(k)
            ? W(k)
            : (y.protectedKeys[k] = !0);
      }
      (y.prevProp = S),
        (y.prevResolvedValues = j),
        y.isActive && (v = { ...v, ...j }),
        (r || o) && e.blockInitialAnimation && (N = !1);
      const z = b && P;
      N &&
        (!z || A) &&
        f.push(
          ...F.map((k) => {
            const R = { type: p };
            if (
              typeof k == "string" &&
              (r || o) &&
              !z &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              const { parent: I } = e,
                $ = Nr(I, k);
              if (I.enteringChildren && $) {
                const { delayChildren: B } = $.transition || {};
                R.delay = uw(I.enteringChildren, e, B);
              }
            }
            return { animation: k, options: R };
          })
        );
    }
    if (h.size) {
      const m = {};
      if (typeof c.initial != "boolean") {
        const p = Nr(e, Array.isArray(c.initial) ? c.initial[0] : c.initial);
        p && p.transition && (m.transition = p.transition);
      }
      h.forEach((p) => {
        const y = e.getBaseTarget(p),
          S = e.getValue(p);
        S && (S.liveStyle = !0), (m[p] = y ?? null);
      }),
        f.push({ animation: m });
    }
    let x = !!f.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (x = !1),
      (r = !1),
      (o = !1),
      x ? t(f) : Promise.resolve()
    );
  }
  function l(u, c) {
    var f;
    if (n[u].isActive === c) return Promise.resolve();
    (f = e.variantChildren) == null ||
      f.forEach((h) => {
        var v;
        return (v = h.animationState) == null ? void 0 : v.setActive(u, c);
      }),
      (n[u].isActive = c);
    const d = a(u);
    for (const h in n) n[h].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: a,
    setActive: l,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      (n = Fm()), (o = !0);
    },
  };
}
function r2(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Bw(t, e) : !1;
}
function hr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Fm() {
  return {
    animate: hr(!0),
    whileInView: hr(),
    whileHover: hr(),
    whileTap: hr(),
    whileDrag: hr(),
    whileFocus: hr(),
    exit: hr(),
  };
}
function fd(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Pt(e, t) {
  fd(e.x, t.x), fd(e.y, t.y);
}
function Vm(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
const $w = 1e-4,
  o2 = 1 - $w,
  i2 = 1 + $w,
  Uw = 0.01,
  s2 = 0 - Uw,
  a2 = 0 + Uw;
function Ue(e) {
  return e.max - e.min;
}
function l2(e, t, n) {
  return Math.abs(e - t) <= n;
}
function _m(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = ae(t.min, t.max, e.origin)),
    (e.scale = Ue(n) / Ue(t)),
    (e.translate = ae(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= o2 && e.scale <= i2) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= s2 && e.translate <= a2) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function bi(e, t, n, r) {
  _m(e.x, t.x, n.x, r ? r.originX : void 0),
    _m(e.y, t.y, n.y, r ? r.originY : void 0);
}
function zm(e, t, n, r = 0) {
  const o = r ? ae(n.min, n.max, r) : n.min;
  (e.min = o + t.min), (e.max = e.min + Ue(t));
}
function u2(e, t, n, r) {
  zm(e.x, t.x, n.x, r == null ? void 0 : r.x),
    zm(e.y, t.y, n.y, r == null ? void 0 : r.y);
}
function Bm(e, t, n, r = 0) {
  const o = r ? ae(n.min, n.max, r) : n.min;
  (e.min = t.min - o), (e.max = e.min + Ue(t));
}
function qa(e, t, n, r) {
  Bm(e.x, t.x, n.x, r == null ? void 0 : r.x),
    Bm(e.y, t.y, n.y, r == null ? void 0 : r.y);
}
function $m(e, t, n, r, o) {
  return (
    (e -= t), (e = Xa(e, 1 / n, r)), o !== void 0 && (e = Xa(e, 1 / o, r)), e
  );
}
function c2(e, t = 0, n = 1, r = 0.5, o, i = e, s = e) {
  if (
    (Jt.test(t) &&
      ((t = parseFloat(t)), (t = ae(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = ae(i.min, i.max, r);
  e === i && (a -= t),
    (e.min = $m(e.min, t, n, a, o)),
    (e.max = $m(e.max, t, n, a, o));
}
function Um(e, t, [n, r, o], i, s) {
  c2(e, t[n], t[r], t[o], t.scale, i, s);
}
const d2 = ["x", "scaleX", "originX"],
  f2 = ["y", "scaleY", "originY"];
function Wm(e, t, n, r) {
  Um(e.x, t, d2, n ? n.x : void 0, r ? r.x : void 0),
    Um(e.y, t, f2, n ? n.y : void 0, r ? r.y : void 0);
}
function Hm(e) {
  return e.translate === 0 && e.scale === 1;
}
function Ww(e) {
  return Hm(e.x) && Hm(e.y);
}
function Km(e, t) {
  return e.min === t.min && e.max === t.max;
}
function h2(e, t) {
  return Km(e.x, t.x) && Km(e.y, t.y);
}
function Gm(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Hw(e, t) {
  return Gm(e.x, t.x) && Gm(e.y, t.y);
}
function Qm(e) {
  return Ue(e.x) / Ue(e.y);
}
function Ym(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
function Ut(e) {
  return [e("x"), e("y")];
}
function p2(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((o || i || s) && (r = `translate3d(${o}px, ${i}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: f,
      skewX: h,
      skewY: v,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      h && (r += `skewX(${h}deg) `),
      v && (r += `skewY(${v}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const Kw = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ],
  m2 = Kw.length,
  Xm = (e) => (typeof e == "string" ? parseFloat(e) : e),
  qm = (e) => typeof e == "number" || _.test(e);
function g2(e, t, n, r, o, i) {
  o
    ? ((e.opacity = ae(0, n.opacity ?? 1, y2(r))),
      (e.opacityExit = ae(t.opacity ?? 1, 0, v2(r))))
    : i && (e.opacity = ae(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let s = 0; s < m2; s++) {
    const a = Kw[s];
    let l = Zm(t, a),
      u = Zm(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || qm(l) === qm(u)
        ? ((e[a] = Math.max(ae(Xm(l), Xm(u), r), 0)),
          (Jt.test(u) || Jt.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = ae(t.rotate || 0, n.rotate || 0, r));
}
function Zm(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const y2 = Gw(0, 0.5, Fx),
  v2 = Gw(0.5, 0.95, vt);
function Gw(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Qi(e, t, r)));
}
function x2(e, t, n) {
  const r = Re(e) ? e : _o(e);
  return r.start(Hf("", r, t, n)), r.animation;
}
function qi(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const w2 = (e, t) => e.depth - t.depth;
class S2 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Lf(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Wa(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(w2),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function C2(e, t) {
  const n = $e.now(),
    r = ({ timestamp: o }) => {
      const i = o - n;
      i >= t && (ir(r), e(i - t));
    };
  return re.setup(r, !0), () => ir(r);
}
function da(e) {
  return Re(e) ? e.get() : e;
}
class E2 {
  constructor() {
    this.members = [];
  }
  add(t) {
    Lf(this.members, t);
    for (let n = this.members.length - 1; n >= 0; n--) {
      const r = this.members[n];
      if (r === t || r === this.lead || r === this.prevLead) continue;
      const o = r.instance;
      (!o || o.isConnected === !1) &&
        !r.snapshot &&
        (Wa(this.members, r), r.unmount());
    }
    t.scheduleRender();
  }
  remove(t) {
    if (
      (Wa(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    var n;
    for (let r = this.members.indexOf(t) - 1; r >= 0; r--) {
      const o = this.members[r];
      if (
        o.isPresent !== !1 &&
        ((n = o.instance) == null ? void 0 : n.isConnected) !== !1
      )
        return this.promote(o), !0;
    }
    return !1;
  }
  promote(t, n) {
    var o;
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.updateSnapshot(), t.scheduleRender();
      const { layoutDependency: i } = r.options,
        { layoutDependency: s } = t.options;
      (i === void 0 || i !== s) &&
        ((t.resumeFrom = r),
        n && (r.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        (o = t.root) != null && o.isUpdating && (t.isLayoutDirty = !0)),
        t.options.crossfade === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      var n, r, o, i, s;
      (r = (n = t.options).onExitComplete) == null || r.call(n),
        (s =
          (o = t.resumingFrom) == null
            ? void 0
            : (i = o.options).onExitComplete) == null || s.call(i);
    });
  }
  scheduleRender() {
    this.members.forEach((t) => t.instance && t.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    var t;
    (t = this.lead) != null && t.snapshot && (this.lead.snapshot = void 0);
  }
}
const fa = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  ku = ["", "X", "Y", "Z"],
  T2 = 1e3;
let b2 = 0;
function Au(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && ((n[e] = o[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Qw(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = pw(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", re, !(o || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Qw(r);
}
function Yw({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = b2++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(A2),
            this.nodes.forEach(O2),
            this.nodes.forEach(j2),
            this.nodes.forEach(R2);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new S2());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Of()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s) {
      if (this.instance) return;
      (this.isSVG = qf(s) && !kM(s)), (this.instance = s);
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let c,
          d = 0;
        const f = () => (this.root.updateBlockedByResize = !1);
        re.read(() => {
          d = window.innerWidth;
        }),
          e(s, () => {
            const h = window.innerWidth;
            h !== d &&
              ((d = h),
              (this.root.updateBlockedByResize = !0),
              c && c(),
              (c = C2(f, 250)),
              fa.hasAnimatedSinceResize &&
                ((fa.hasAnimatedSinceResize = !1), this.nodes.forEach(tg)));
          });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          u &&
          (a || l) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: c,
              hasLayoutChanged: d,
              hasRelativeLayoutChanged: f,
              layout: h,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || u.getDefaultTransition() || z2,
                { onLayoutAnimationStart: g, onLayoutAnimationComplete: x } =
                  u.getProps(),
                m = !this.targetLayout || !Hw(this.targetLayout, h),
                p = !d && f;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                p ||
                (d && (m || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const y = { ...Wf(v, "layout"), onPlay: g, onComplete: x };
                (u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((y.delay = 0), (y.type = !1)),
                  this.startAnimation(y),
                  this.setAnimationOrigin(c, p);
              } else
                d || tg(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = h;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        ir(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(I2),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Qw(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          (typeof d.latestValues.x == "string" ||
            typeof d.latestValues.y == "string") &&
            (d.isLayoutDirty = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        const l = this.updateBlockedByResize;
        this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          l && this.nodes.forEach(N2),
          this.nodes.forEach(Jm);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(eg);
        return;
      }
      (this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(D2),
            this.nodes.forEach(L2),
            this.nodes.forEach(P2),
            this.nodes.forEach(k2))
          : this.nodes.forEach(eg),
        this.clearAllSnapshots();
      const a = $e.now();
      (Ae.delta = tn(0, 1e3 / 60, a - Ae.timestamp)),
        (Ae.timestamp = a),
        (Ae.isProcessing = !0),
        xu.update.process(Ae),
        xu.preRender.process(Ae),
        xu.render.process(Ae),
        (Ae.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Yf.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(M2), this.sharedNodes.forEach(F2);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        re.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      re.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !Ue(this.snapshot.measuredBox.x) &&
          !Ue(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = Se()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
        a && this.instance)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!o) return;
      const s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Ww(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        this.instance &&
        (a || gr(this.latestValues) || c) &&
        (o(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        B2(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var u;
      const { visualElement: s } = this.options;
      if (!s) return Se();
      const a = s.measureViewportBox();
      if (
        !(
          ((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some($2)
        )
      ) {
        const { scroll: c } = this.root;
        c && (Gt(a.x, c.offset.x), Gt(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(s) {
      var l;
      const a = Se();
      if ((Pt(a, s), (l = this.scroll) != null && l.wasRoot)) return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: d, options: f } = c;
        c !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && Pt(a, s), Gt(a.x, d.offset.x), Gt(a.y, d.offset.y));
      }
      return a;
    }
    applyTransform(s, a = !1, l) {
      var c, d;
      const u = l || Se();
      Pt(u, s);
      for (let f = 0; f < this.path.length; f++) {
        const h = this.path[f];
        !a &&
          h.options.layoutScroll &&
          h.scroll &&
          h !== h.root &&
          (Gt(u.x, -h.scroll.offset.x), Gt(u.y, -h.scroll.offset.y)),
          gr(h.latestValues) &&
            ca(
              u,
              h.latestValues,
              (c = h.layout) == null ? void 0 : c.layoutBox
            );
      }
      return (
        gr(this.latestValues) &&
          ca(
            u,
            this.latestValues,
            (d = this.layout) == null ? void 0 : d.layoutBox
          ),
        u
      );
    }
    removeTransform(s) {
      var l;
      const a = Se();
      Pt(a, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        if (!gr(c.latestValues)) continue;
        let d;
        c.instance &&
          (ud(c.latestValues) && c.updateSnapshot(),
          (d = Se()),
          Pt(d, c.measurePageBox())),
          Wm(
            a,
            c.latestValues,
            (l = c.snapshot) == null ? void 0 : l.layoutBox,
            d
          );
      }
      return gr(this.latestValues) && Wm(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Ae.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var h;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (
        !(
          s ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((h = this.parent) != null && h.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (!this.layout || !(c || d)) return;
      this.resolvedRelativeTargetAt = Ae.timestamp;
      const f = this.getClosestProjectingParent();
      f &&
        this.linkedParentVersion !== f.layoutVersion &&
        !f.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && f && f.layout
            ? this.createRelativeTarget(
                f,
                this.layout.layoutBox,
                f.layout.layoutBox
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Se()), (this.targetWithTransforms = Se())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              u2(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0
              ))
            : this.targetDelta
            ? (this.resumingFrom
                ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                : Pt(this.target, this.layout.layoutBox),
              Dw(this.target, this.targetDelta))
            : Pt(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            f &&
            !!f.resumingFrom == !!this.resumingFrom &&
            !f.options.layoutScroll &&
            f.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(f, this.target, f.target)
              : (this.relativeParent = this.relativeTarget = void 0)));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          ud(this.parent.latestValues) ||
          Nw(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(s, a, l) {
      (this.relativeParent = s),
        (this.linkedParentVersion = s.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = Se()),
        (this.relativeTargetOrigin = Se()),
        qa(
          this.relativeTargetOrigin,
          a,
          l,
          this.options.layoutAnchor || void 0
        ),
        Pt(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var v;
      const s = this.getLead(),
        a = !!this.resumingFrom || this !== s;
      let l = !0;
      if (
        ((this.isProjectionDirty ||
          ((v = this.parent) != null && v.isProjectionDirty)) &&
          (l = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
        this.resolvedRelativeTargetAt === Ae.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: u, layoutId: c } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || c))
      )
        return;
      Pt(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        f = this.treeScale.y;
      VM(this.layoutCorrected, this.treeScale, this.path, a),
        s.layout &&
          !s.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((s.target = s.layout.layoutBox), (s.targetWithTransforms = Se()));
      const { target: h } = s;
      if (!h) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Vm(this.prevProjectionDelta.x, this.projectionDelta.x),
          Vm(this.prevProjectionDelta.y, this.projectionDelta.y)),
        bi(this.projectionDelta, this.layoutCorrected, h, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== f ||
          !Ym(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Ym(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", h));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (((a = this.options.visualElement) == null || a.scheduleRender(), s)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = uo()),
        (this.projectionDelta = uo()),
        (this.projectionDeltaWithTransform = uo());
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = uo();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = Se(),
        h = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        g = h !== v,
        x = this.getStack(),
        m = !x || x.members.length <= 1,
        p = !!(g && !m && this.options.crossfade === !0 && !this.path.some(_2));
      this.animationProgress = 0;
      let y;
      (this.mixTargetDelta = (S) => {
        const E = S / 1e3;
        ng(d.x, s.x, E),
          ng(d.y, s.y, E),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (qa(
              f,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0
            ),
            V2(this.relativeTarget, this.relativeTargetOrigin, f, E),
            y && h2(this.relativeTarget, y) && (this.isProjectionDirty = !1),
            y || (y = Se()),
            Pt(y, this.relativeTarget)),
          g &&
            ((this.animationValues = c), g2(c, u, this.latestValues, E, p, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = E);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      var a, l, u;
      this.notifyListeners("animationStart"),
        (a = this.currentAnimation) == null || a.stop(),
        (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) ==
          null || u.stop(),
        this.pendingAnimation &&
          (ir(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = re.update(() => {
          (fa.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = _o(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = x2(this.motionValue, [0, 1e3], {
              ...s,
              velocity: 0,
              isSync: !0,
              onUpdate: (c) => {
                this.mixTargetDelta(c), s.onUpdate && s.onUpdate(c);
              },
              onStop: () => {},
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(T2),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          Xw(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || Se();
          const d = Ue(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + d);
          const f = Ue(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + f);
        }
        Pt(a, l),
          ca(a, c),
          bi(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new E2()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? ((a = this.getStack()) == null ? void 0 : a.lead) || this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? ((a = this.getStack()) == null ? void 0 : a.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && Au("z", s, u, this.animationValues);
      for (let c = 0; c < ku.length; c++)
        Au(`rotate${ku[c]}`, s, u, this.animationValues),
          Au(`skew${ku[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u)
        s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender();
    }
    applyProjectionStyles(s, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        s.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        (this.needsReset = !1),
          (s.visibility = ""),
          (s.opacity = ""),
          (s.pointerEvents = da(a == null ? void 0 : a.pointerEvents) || ""),
          (s.transform = l ? l(this.latestValues, "") : "none");
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId &&
          ((s.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (s.pointerEvents = da(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
            !gr(this.latestValues) &&
            ((s.transform = l ? l({}, "") : "none"), (this.hasProjected = !1));
        return;
      }
      s.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let d = p2(this.projectionDeltaWithTransform, this.treeScale, c);
      l && (d = l(c, d)), (s.transform = d);
      const { x: f, y: h } = this.projectionDelta;
      (s.transformOrigin = `${f.origin * 100}% ${h.origin * 100}% 0`),
        u.animationValues
          ? (s.opacity =
              u === this
                ? c.opacity ?? this.latestValues.opacity ?? 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : c.opacityExit)
          : (s.opacity =
              u === this
                ? c.opacity !== void 0
                  ? c.opacity
                  : ""
                : c.opacityExit !== void 0
                ? c.opacityExit
                : 0);
      for (const v in dd) {
        if (c[v] === void 0) continue;
        const { correct: g, applyTo: x, isCSSVariable: m } = dd[v],
          p = d === "none" ? c[v] : g(c[v], u);
        if (x) {
          const y = x.length;
          for (let S = 0; S < y; S++) s[x[S]] = p;
        } else
          m ? (this.options.visualElement.renderState.vars[v] = p) : (s[v] = p);
      }
      this.options.layoutId &&
        (s.pointerEvents =
          u === this ? da(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) == null ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(Jm),
        this.root.sharedNodes.clear();
    }
  };
}
function P2(e) {
  e.updateLayout();
}
function k2(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      s = t.source !== e.layout.source;
    if (i === "size")
      Ut((d) => {
        const f = s ? t.measuredBox[d] : t.layoutBox[d],
          h = Ue(f);
        (f.min = r[d].min), (f.max = f.min + h);
      });
    else if (i === "x" || i === "y") {
      const d = i === "x" ? "y" : "x";
      fd(s ? t.measuredBox[d] : t.layoutBox[d], r[d]);
    } else
      Xw(i, t.layoutBox, r) &&
        Ut((d) => {
          const f = s ? t.measuredBox[d] : t.layoutBox[d],
            h = Ue(r[d]);
          (f.max = f.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + h));
        });
    const a = uo();
    bi(a, r, t.layoutBox);
    const l = uo();
    s ? bi(l, e.applyTransform(o, !0), t.measuredBox) : bi(l, r, t.layoutBox);
    const u = !Ww(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d;
        if (f && h) {
          const v = e.options.layoutAnchor || void 0,
            g = Se();
          qa(g, t.layoutBox, f.layoutBox, v);
          const x = Se();
          qa(x, r, h.layoutBox, v),
            Hw(g, x) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = x),
              (e.relativeTargetOrigin = g),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function A2(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function R2(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function M2(e) {
  e.clearSnapshot();
}
function Jm(e) {
  e.clearMeasurements();
}
function N2(e) {
  (e.isLayoutDirty = !0), e.updateLayout();
}
function eg(e) {
  e.isLayoutDirty = !1;
}
function D2(e) {
  e.isAnimationBlocked &&
    e.layout &&
    !e.isLayoutDirty &&
    ((e.snapshot = e.layout), (e.isLayoutDirty = !0));
}
function L2(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function tg(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function O2(e) {
  e.resolveTargetDelta();
}
function j2(e) {
  e.calcProjection();
}
function I2(e) {
  e.resetSkewAndRotation();
}
function F2(e) {
  e.removeLeadSnapshot();
}
function ng(e, t, n) {
  (e.translate = ae(t.translate, 0, n)),
    (e.scale = ae(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function rg(e, t, n, r) {
  (e.min = ae(t.min, n.min, r)), (e.max = ae(t.max, n.max, r));
}
function V2(e, t, n, r) {
  rg(e.x, t.x, n.x, r), rg(e.y, t.y, n.y, r);
}
function _2(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const z2 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  og = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  ig = og("applewebkit/") && !og("chrome/") ? Math.round : vt;
function sg(e) {
  (e.min = ig(e.min)), (e.max = ig(e.max));
}
function B2(e) {
  sg(e.x), sg(e.y);
}
function Xw(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !l2(Qm(t), Qm(n), 0.2))
  );
}
function $2(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const U2 = Yw({
    attachResizeListener: (e, t) => qi(e, "resize", t),
    measureScroll: () => {
      var e, t;
      return {
        x:
          document.documentElement.scrollLeft ||
          ((e = document.body) == null ? void 0 : e.scrollLeft) ||
          0,
        y:
          document.documentElement.scrollTop ||
          ((t = document.body) == null ? void 0 : t.scrollTop) ||
          0,
      };
    },
    checkIsScrollRoot: () => !0,
  }),
  Ru = { current: void 0 },
  qw = Yw({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Ru.current) {
        const e = new U2({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Ru.current = e);
      }
      return Ru.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  nh = w.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function ag(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function W2(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = ag(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : ag(e[o], null);
        }
      };
  };
}
function H2(...e) {
  return w.useCallback(W2(...e), e);
}
class K2 extends w.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (
      sa(n) &&
      t.isPresent &&
      !this.props.isPresent &&
      this.props.pop !== !1
    ) {
      const r = n.offsetParent,
        o = (sa(r) && r.offsetWidth) || 0,
        i = (sa(r) && r.offsetHeight) || 0,
        s = getComputedStyle(n),
        a = this.props.sizeRef.current;
      (a.height = parseFloat(s.height)),
        (a.width = parseFloat(s.width)),
        (a.top = n.offsetTop),
        (a.left = n.offsetLeft),
        (a.right = o - a.width - a.left),
        (a.bottom = i - a.height - a.top);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function G2({
  children: e,
  isPresent: t,
  anchorX: n,
  anchorY: r,
  root: o,
  pop: i,
}) {
  var f;
  const s = w.useId(),
    a = w.useRef(null),
    l = w.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }),
    { nonce: u } = w.useContext(nh),
    c =
      ((f = e.props) == null ? void 0 : f.ref) ?? (e == null ? void 0 : e.ref),
    d = H2(a, c);
  return (
    w.useInsertionEffect(() => {
      const {
        width: h,
        height: v,
        top: g,
        left: x,
        right: m,
        bottom: p,
      } = l.current;
      if (t || i === !1 || !a.current || !h || !v) return;
      const y = n === "left" ? `left: ${x}` : `right: ${m}`,
        S = r === "bottom" ? `bottom: ${p}` : `top: ${g}`;
      a.current.dataset.motionPopId = s;
      const E = document.createElement("style");
      u && (E.nonce = u);
      const T = o ?? document.head;
      return (
        T.appendChild(E),
        E.sheet &&
          E.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${v}px !important;
            ${y}px !important;
            ${S}px !important;
          }
        `),
        () => {
          var b;
          (b = a.current) == null || b.removeAttribute("data-motion-pop-id"),
            T.contains(E) && T.removeChild(E);
        }
      );
    }, [t]),
    C.jsx(K2, {
      isPresent: t,
      childRef: a,
      sizeRef: l,
      pop: i,
      children: i === !1 ? e : w.cloneElement(e, { ref: d }),
    })
  );
}
const Q2 = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: o,
  presenceAffectsLayout: i,
  mode: s,
  anchorX: a,
  anchorY: l,
  root: u,
}) => {
  const c = Df(Y2),
    d = w.useId();
  let f = !0,
    h = w.useMemo(
      () => (
        (f = !1),
        {
          id: d,
          initial: t,
          isPresent: n,
          custom: o,
          onExitComplete: (v) => {
            c.set(v, !0);
            for (const g of c.values()) if (!g) return;
            r && r();
          },
          register: (v) => (c.set(v, !1), () => c.delete(v)),
        }
      ),
      [n, c, r]
    );
  return (
    i && f && (h = { ...h }),
    w.useMemo(() => {
      c.forEach((v, g) => c.set(g, !1));
    }, [n]),
    w.useEffect(() => {
      !n && !c.size && r && r();
    }, [n]),
    (e = C.jsx(G2, {
      pop: s === "popLayout",
      isPresent: n,
      anchorX: a,
      anchorY: l,
      root: u,
      children: e,
    })),
    C.jsx(Rl.Provider, { value: h, children: e })
  );
};
function Y2() {
  return new Map();
}
function Zw(e = !0) {
  const t = w.useContext(Rl);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = t,
    i = w.useId();
  w.useEffect(() => {
    if (e) return o(i);
  }, [e]);
  const s = w.useCallback(() => e && r && r(i), [i, r, e]);
  return !n && r ? [!1, s] : [!0];
}
const zs = (e) => e.key || "";
function lg(e) {
  const t = [];
  return (
    w.Children.forEach(e, (n) => {
      w.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const X2 = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: o = !0,
    mode: i = "sync",
    propagate: s = !1,
    anchorX: a = "left",
    anchorY: l = "top",
    root: u,
  }) => {
    const [c, d] = Zw(s),
      f = w.useMemo(() => lg(e), [e]),
      h = s && !c ? [] : f.map(zs),
      v = w.useRef(!0),
      g = w.useRef(f),
      x = Df(() => new Map()),
      m = w.useRef(new Set()),
      [p, y] = w.useState(f),
      [S, E] = w.useState(f);
    bx(() => {
      (v.current = !1), (g.current = f);
      for (let P = 0; P < S.length; P++) {
        const N = zs(S[P]);
        h.includes(N)
          ? (x.delete(N), m.current.delete(N))
          : x.get(N) !== !0 && x.set(N, !1);
      }
    }, [S, h.length, h.join("-")]);
    const T = [];
    if (f !== p) {
      let P = [...f];
      for (let N = 0; N < S.length; N++) {
        const A = S[N],
          F = zs(A);
        h.includes(F) || (P.splice(N, 0, A), T.push(A));
      }
      return i === "wait" && T.length && (P = T), E(lg(P)), y(f), null;
    }
    const { forceRender: b } = w.useContext(Nf);
    return C.jsx(C.Fragment, {
      children: S.map((P) => {
        const N = zs(P),
          A = s && !c ? !1 : f === S || h.includes(N),
          F = () => {
            if (m.current.has(N)) return;
            if (x.has(N)) m.current.add(N), x.set(N, !0);
            else return;
            let j = !0;
            x.forEach((U) => {
              U || (j = !1);
            }),
              j &&
                (b == null || b(),
                E(g.current),
                s && (d == null || d()),
                r && r());
          };
        return C.jsx(
          Q2,
          {
            isPresent: A,
            initial: !v.current || n ? void 0 : !1,
            custom: t,
            presenceAffectsLayout: o,
            mode: i,
            root: u,
            onExitComplete: A ? void 0 : F,
            anchorX: a,
            anchorY: l,
            children: P,
          },
          N
        );
      }),
    });
  },
  Jw = w.createContext({ strict: !1 }),
  ug = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let cg = !1;
function q2() {
  if (cg) return;
  const e = {};
  for (const t in ug) e[t] = { isEnabled: (n) => ug[t].some((r) => !!n[r]) };
  Aw(e), (cg = !0);
}
function e1() {
  return q2(), OM();
}
function Z2(e) {
  const t = e1();
  for (const n in e) t[n] = { ...t[n], ...e[n] };
  Aw(t);
}
const J2 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function Za(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    J2.has(e)
  );
}
let t1 = (e) => !Za(e);
function eN(e) {
  typeof e == "function" && (t1 = (t) => (t.startsWith("on") ? !Za(t) : e(t)));
}
try {
  eN(require("@emotion/is-prop-valid").default);
} catch {}
function tN(e, t, n) {
  const r = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      Re(e[o]) ||
      ((t1(o) ||
        (n === !0 && Za(o)) ||
        (!t && !Za(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (r[o] = e[o]));
  return r;
}
const Ol = w.createContext({});
function nN(e, t) {
  if (Ll(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Xi(n) ? n : void 0,
      animate: Xi(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function rN(e) {
  const { initial: t, animate: n } = nN(e, w.useContext(Ol));
  return w.useMemo(() => ({ initial: t, animate: n }), [dg(t), dg(n)]);
}
function dg(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const rh = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function n1(e, t, n) {
  for (const r in t) !Re(t[r]) && !jw(r, n) && (e[r] = t[r]);
}
function oN({ transformTemplate: e }, t) {
  return w.useMemo(() => {
    const n = rh();
    return eh(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function iN(e, t) {
  const n = e.style || {},
    r = {};
  return n1(r, n, e), Object.assign(r, oN(e, t)), r;
}
function sN(e, t) {
  const n = {},
    r = iN(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const r1 = () => ({ ...rh(), attrs: {} });
function aN(e, t, n, r) {
  const o = w.useMemo(() => {
    const i = r1();
    return (
      Iw(i, t, Vw(r), e.transformTemplate, e.style),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    n1(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
const lN = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function oh(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(lN.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function uN(e, t, n, { latestValues: r }, o, i = !1, s) {
  const l = (s ?? oh(e) ? aN : sN)(t, r, o, e),
    u = tN(t, typeof e == "string", i),
    c = e !== w.Fragment ? { ...u, ...l, ref: n } : {},
    { children: d } = t,
    f = w.useMemo(() => (Re(d) ? d.get() : d), [d]);
  return w.createElement(e, { ...c, children: f });
}
function cN({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, o) {
  return { latestValues: dN(n, r, o, e), renderState: t() };
}
function dN(e, t, n, r) {
  const o = {},
    i = r(e, {});
  for (const f in i) o[f] = da(i[f]);
  let { initial: s, animate: a } = e;
  const l = Ll(e),
    u = Pw(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const d = c ? a : s;
  if (d && typeof d != "boolean" && !Dl(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let h = 0; h < f.length; h++) {
      const v = Kf(e, f[h]);
      if (v) {
        const { transitionEnd: g, transition: x, ...m } = v;
        for (const p in m) {
          let y = m[p];
          if (Array.isArray(y)) {
            const S = c ? y.length - 1 : 0;
            y = y[S];
          }
          y !== null && (o[p] = y);
        }
        for (const p in g) o[p] = g[p];
      }
    }
  }
  return o;
}
const o1 = (e) => (t, n) => {
    const r = w.useContext(Ol),
      o = w.useContext(Rl),
      i = () => cN(e, t, r, o);
    return n ? i() : Df(i);
  },
  fN = o1({ scrapeMotionValuesFromProps: th, createRenderState: rh }),
  hN = o1({ scrapeMotionValuesFromProps: _w, createRenderState: r1 }),
  pN = Symbol.for("motionComponentSymbol");
function mN(e, t, n) {
  const r = w.useRef(n);
  w.useInsertionEffect(() => {
    r.current = n;
  });
  const o = w.useRef(null);
  return w.useCallback(
    (i) => {
      var a;
      i && ((a = e.onMount) == null || a.call(e, i));
      const s = r.current;
      if (typeof s == "function")
        if (i) {
          const l = s(i);
          typeof l == "function" && (o.current = l);
        } else o.current ? (o.current(), (o.current = null)) : s(i);
      else s && (s.current = i);
      t && (i ? t.mount(i) : t.unmount());
    },
    [t]
  );
}
const i1 = w.createContext({});
function Qr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function gN(e, t, n, r, o, i) {
  var y, S;
  const { visualElement: s } = w.useContext(Ol),
    a = w.useContext(Jw),
    l = w.useContext(Rl),
    u = w.useContext(nh),
    c = u.reducedMotion,
    d = u.skipAnimations,
    f = w.useRef(null),
    h = w.useRef(!1);
  (r = r || a.renderer),
    !f.current &&
      r &&
      ((f.current = r(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: c,
        skipAnimations: d,
        isSVG: i,
      })),
      h.current && f.current && (f.current.manuallyAnimateOnMount = !0));
  const v = f.current,
    g = w.useContext(i1);
  v &&
    !v.projection &&
    o &&
    (v.type === "html" || v.type === "svg") &&
    yN(f.current, n, o, g);
  const x = w.useRef(!1);
  w.useInsertionEffect(() => {
    v && x.current && v.update(n, l);
  });
  const m = n[hw],
    p = w.useRef(
      !!m &&
        typeof window < "u" &&
        !((y = window.MotionHandoffIsComplete) != null && y.call(window, m)) &&
        ((S = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : S.call(window, m))
    );
  return (
    bx(() => {
      (h.current = !0),
        v &&
          ((x.current = !0),
          (window.MotionIsMounted = !0),
          v.updateFeatures(),
          v.scheduleRenderMicrotask(),
          p.current && v.animationState && v.animationState.animateChanges());
    }),
    w.useEffect(() => {
      v &&
        (!p.current && v.animationState && v.animationState.animateChanges(),
        p.current &&
          (queueMicrotask(() => {
            var E;
            (E = window.MotionHandoffMarkAsComplete) == null ||
              E.call(window, m);
          }),
          (p.current = !1)),
        (v.enteringChildren = void 0));
    }),
    v
  );
}
function yN(e, t, n, r) {
  const {
    layoutId: o,
    layout: i,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
    layoutAnchor: c,
    layoutCrossfade: d,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : s1(e.parent)
  )),
    e.projection.setOptions({
      layoutId: o,
      layout: i,
      alwaysMeasureLayout: !!s || (a && Qr(a)),
      visualElement: e,
      animationType: typeof i == "string" ? i : "both",
      initialPromotionConfig: r,
      crossfade: d,
      layoutScroll: l,
      layoutRoot: u,
      layoutAnchor: c,
    });
}
function s1(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : s1(e.parent);
}
function Mu(e, { forwardMotionProps: t = !1, type: n } = {}, r, o) {
  r && Z2(r);
  const i = n ? n === "svg" : oh(e),
    s = i ? hN : fN;
  function a(u, c) {
    let d;
    const f = { ...w.useContext(nh), ...u, layoutId: vN(u) },
      { isStatic: h } = f,
      v = rN(u),
      g = s(u, h);
    if (!h && typeof window < "u") {
      xN();
      const x = wN(f);
      (d = x.MeasureLayout),
        (v.visualElement = gN(e, g, f, o, x.ProjectionNode, i));
    }
    return C.jsxs(Ol.Provider, {
      value: v,
      children: [
        d && v.visualElement
          ? C.jsx(d, { visualElement: v.visualElement, ...f })
          : null,
        uN(e, u, mN(g, v.visualElement, c), g, h, t, i),
      ],
    });
  }
  a.displayName = `motion.${
    typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`
  }`;
  const l = w.forwardRef(a);
  return (l[pN] = e), l;
}
function vN({ layoutId: e }) {
  const t = w.useContext(Nf).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function xN(e, t) {
  w.useContext(Jw).strict;
}
function wN(e) {
  const t = e1(),
    { drag: n, layout: r } = t;
  if (!n && !r) return {};
  const o = { ...n, ...r };
  return {
    MeasureLayout:
      (n != null && n.isEnabled(e)) || (r != null && r.isEnabled(e))
        ? o.MeasureLayout
        : void 0,
    ProjectionNode: o.ProjectionNode,
  };
}
function SN(e, t) {
  if (typeof Proxy > "u") return Mu;
  const n = new Map(),
    r = (i, s) => Mu(i, s, e, t),
    o = (i, s) => r(i, s);
  return new Proxy(o, {
    get: (i, s) =>
      s === "create"
        ? r
        : (n.has(s) || n.set(s, Mu(s, void 0, e, t)), n.get(s)),
  });
}
const CN = (e, t) =>
  t.isSVG ?? oh(e)
    ? new qM(t)
    : new HM(t, { allowProjection: e !== w.Fragment });
class EN extends ur {
  constructor(t) {
    super(t), t.animationState || (t.animationState = n2(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Dl(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) == null || t.call(this);
  }
}
let TN = 0;
class bN extends ur {
  constructor() {
    super(...arguments), (this.id = TN++), (this.isExitComplete = !1);
  }
  update() {
    var i;
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    if (t && r === !1) {
      if (this.isExitComplete) {
        const { initial: s, custom: a } = this.node.getProps();
        if (typeof s == "string") {
          const l = Nr(this.node, s, a);
          if (l) {
            const { transition: u, transitionEnd: c, ...d } = l;
            for (const f in d)
              (i = this.node.getValue(f)) == null || i.jump(d[f]);
          }
        }
        this.node.animationState.reset(),
          this.node.animationState.animateChanges();
      } else this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const o = this.node.animationState.setActive("exit", !t);
    n &&
      !t &&
      o.then(() => {
        (this.isExitComplete = !0), n(this.id);
      });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const PN = { animation: { Feature: EN }, exit: { Feature: bN } };
function ds(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const kN = (e) => (t) => Xf(t) && e(t, ds(t));
function Pi(e, t, n, r) {
  return qi(e, t, kN(n), r);
}
const a1 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  fg = (e, t) => Math.abs(e - t);
function AN(e, t) {
  const n = fg(e.x, t.x),
    r = fg(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
const hg = new Set(["auto", "scroll"]);
class l1 {
  constructor(
    t,
    n,
    {
      transformPagePoint: r,
      contextWindow: o = window,
      dragSnapToOrigin: i = !1,
      distanceThreshold: s = 3,
      element: a,
    } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.lastRawMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (h) => {
        this.handleScroll(h.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = Bs(
            this.lastRawMoveEventInfo,
            this.transformPagePoint
          ));
        const h = Nu(this.lastMoveEventInfo, this.history),
          v = this.startEvent !== null,
          g = AN(h.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!v && !g) return;
        const { point: x } = h,
          { timestamp: m } = Ae;
        this.history.push({ ...x, timestamp: m });
        const { onStart: p, onMove: y } = this.handlers;
        v ||
          (p && p(this.lastMoveEvent, h),
          (this.startEvent = this.lastMoveEvent)),
          y && y(this.lastMoveEvent, h);
      }),
      (this.handlePointerMove = (h, v) => {
        (this.lastMoveEvent = h),
          (this.lastRawMoveEventInfo = v),
          (this.lastMoveEventInfo = Bs(v, this.transformPagePoint)),
          re.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (h, v) => {
        this.end();
        const { onEnd: g, onSessionEnd: x, resumeAnimation: m } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && m && m(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const p = Nu(
          h.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Bs(v, this.transformPagePoint),
          this.history
        );
        this.startEvent && g && g(h, p), x && x(h, p);
      }),
      !Xf(t))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.distanceThreshold = s),
      (this.contextWindow = o || window);
    const l = ds(t),
      u = Bs(l, this.transformPagePoint),
      { point: c } = u,
      { timestamp: d } = Ae;
    this.history = [{ ...c, timestamp: d }];
    const { onSessionStart: f } = n;
    f && f(t, Nu(u, this.history)),
      (this.removeListeners = ls(
        Pi(this.contextWindow, "pointermove", this.handlePointerMove),
        Pi(this.contextWindow, "pointerup", this.handlePointerUp),
        Pi(this.contextWindow, "pointercancel", this.handlePointerUp)
      )),
      a && this.startScrollTracking(a);
  }
  startScrollTracking(t) {
    let n = t.parentElement;
    for (; n; ) {
      const r = getComputedStyle(n);
      (hg.has(r.overflowX) || hg.has(r.overflowY)) &&
        this.scrollPositions.set(n, { x: n.scrollLeft, y: n.scrollTop }),
        (n = n.parentElement);
    }
    this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll);
      });
  }
  handleScroll(t) {
    const n = this.scrollPositions.get(t);
    if (!n) return;
    const r = t === window,
      o = r
        ? { x: window.scrollX, y: window.scrollY }
        : { x: t.scrollLeft, y: t.scrollTop },
      i = { x: o.x - n.x, y: o.y - n.y };
    (i.x === 0 && i.y === 0) ||
      (r
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += i.x),
          (this.lastMoveEventInfo.point.y += i.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= i.x), (this.history[0].y -= i.y)),
      this.scrollPositions.set(t, o),
      re.update(this.updatePoint, !0));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      ir(this.updatePoint);
  }
}
function Bs(e, t) {
  return t ? { point: t(e.point) } : e;
}
function pg(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Nu({ point: e }, t) {
  return {
    point: e,
    delta: pg(e, u1(t)),
    offset: pg(e, RN(t)),
    velocity: MN(t, 0.1),
  };
}
function RN(e) {
  return e[0];
}
function u1(e) {
  return e[e.length - 1];
}
function MN(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const o = u1(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > Je(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  r === e[0] &&
    e.length > 2 &&
    o.timestamp - r.timestamp > Je(t) * 2 &&
    (r = e[1]);
  const i = gt(o.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const s = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function NN(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? ae(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? ae(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function mg(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function DN(e, { top: t, left: n, bottom: r, right: o }) {
  return { x: mg(e.x, n, o), y: mg(e.y, t, r) };
}
function gg(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function LN(e, t) {
  return { x: gg(e.x, t.x), y: gg(e.y, t.y) };
}
function ON(e, t) {
  let n = 0.5;
  const r = Ue(e),
    o = Ue(t);
  return (
    o > r
      ? (n = Qi(t.min, t.max - r, e.min))
      : r > o && (n = Qi(e.min, e.max - o, t.min)),
    tn(0, 1, n)
  );
}
function jN(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const hd = 0.35;
function IN(e = hd) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = hd),
    { x: yg(e, "left", "right"), y: yg(e, "top", "bottom") }
  );
}
function yg(e, t, n) {
  return { min: vg(e, t), max: vg(e, n) };
}
function vg(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const FN = new WeakMap();
class VN {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Se()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: o } = this.visualElement;
    if (o && o.isPresent === !1) return;
    const i = (d) => {
        n && this.snapToCursor(ds(d).point), this.stopAnimation();
      },
      s = (d, f) => {
        const { drag: h, dragPropagation: v, onDragStart: g } = this.getProps();
        if (
          h &&
          !v &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = cM(h)),
          !this.openDragLock)
        )
          return;
        (this.latestPointerEvent = d),
          (this.latestPanInfo = f),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ut((m) => {
            let p = this.getAxisMotionValue(m).get() || 0;
            if (Jt.test(p)) {
              const { projection: y } = this.visualElement;
              if (y && y.layout) {
                const S = y.layout.layoutBox[m];
                S && (p = Ue(S) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[m] = p;
          }),
          g && re.update(() => g(d, f), !1, !0),
          od(this.visualElement, "transform");
        const { animationState: x } = this.visualElement;
        x && x.setActive("whileDrag", !0);
      },
      a = (d, f) => {
        (this.latestPointerEvent = d), (this.latestPanInfo = f);
        const {
          dragPropagation: h,
          dragDirectionLock: v,
          onDirectionLock: g,
          onDrag: x,
        } = this.getProps();
        if (!h && !this.openDragLock) return;
        const { offset: m } = f;
        if (v && this.currentDirection === null) {
          (this.currentDirection = zN(m)),
            this.currentDirection !== null && g && g(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, m),
          this.updateAxis("y", f.point, m),
          this.visualElement.render(),
          x && re.update(() => x(d, f), !1, !0);
      },
      l = (d, f) => {
        (this.latestPointerEvent = d),
          (this.latestPanInfo = f),
          this.stop(d, f),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null);
      },
      u = () => {
        const { dragSnapToOrigin: d } = this.getProps();
        (d || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new l1(
      t,
      {
        onSessionStart: i,
        onStart: s,
        onMove: a,
        onSessionEnd: l,
        resumeAnimation: u,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        distanceThreshold: r,
        contextWindow: a1(this.visualElement),
        element: this.visualElement.current,
      }
    );
  }
  stop(t, n) {
    const r = t || this.latestPointerEvent,
      o = n || this.latestPanInfo,
      i = this.isDragging;
    if ((this.cancel(), !i || !o || !r)) return;
    const { velocity: s } = o;
    this.startAnimation(s);
    const { onDragEnd: a } = this.getProps();
    a && re.postRender(() => a(r, o));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  endPanSession() {
    this.panSession && this.panSession.end(), (this.panSession = void 0);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !$s(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = NN(s, this.constraints[t], this.elastic[t])),
      i.set(s);
  }
  resolveConstraints() {
    var i;
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (i = this.visualElement.projection) == null
          ? void 0
          : i.layout,
      o = this.constraints;
    t && Qr(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = DN(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = IN(n)),
      o !== this.constraints &&
        !Qr(t) &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ut((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = jN(r.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Qr(t)) return !1;
    const r = t.current;
    Fo(
      r !== null,
      "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
      "drag-constraints-ref"
    );
    const { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = _M(r, o.root, this.visualElement.getTransformPagePoint());
    let s = LN(o.layout.layoutBox, i);
    if (n) {
      const a = n(IM(s));
      (this.hasMutatedConstraints = !!a), a && (s = Mw(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = Ut((c) => {
        if (!$s(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        (s === !0 || s === c) && (d = { min: 0, max: 0 });
        const f = o ? 200 : 1e6,
          h = o ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      od(this.visualElement, t), r.start(Hf(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Ut((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      o = r[n];
    return (
      o ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Ut((n) => {
      const { drag: r } = this.getProps();
      if (!$s(n, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[n],
          l = i.get() || 0;
        i.set(t[n] - ae(s, a, 0.5) + l);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Qr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Ut((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[s] = ON({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      Ut((s) => {
        if (!$s(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(ae(l, u, o[s]));
      }),
      this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current) return;
    FN.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Pi(t, "pointerdown", (u) => {
        const { drag: c, dragListener: d = !0 } = this.getProps(),
          f = u.target,
          h = f !== t && gM(f);
        c && d && !h && this.start(u);
      });
    let r;
    const o = () => {
        const { dragConstraints: u } = this.getProps();
        Qr(u) &&
          u.current &&
          ((this.constraints = this.resolveRefConstraints()),
          r ||
            (r = _N(t, u.current, () =>
              this.scalePositionWithinConstraints()
            )));
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", o);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      re.read(o);
    const a = qi(window, "resize", () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        "didUpdate",
        ({ delta: u, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (Ut((d) => {
              const f = this.getAxisMotionValue(d);
              f &&
                ((this.originPoint[d] += u[d].translate),
                f.set(f.get() + u[d].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      a(), n(), s(), l && l(), r && r();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: s = hd,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function xg(e) {
  let t = !0;
  return () => {
    if (t) {
      t = !1;
      return;
    }
    e();
  };
}
function _N(e, t, n) {
  const r = Pm(e, xg(n)),
    o = Pm(t, xg(n));
  return () => {
    r(), o();
  };
}
function $s(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function zN(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class BN extends ur {
  constructor(t) {
    super(t),
      (this.removeGroupControls = vt),
      (this.removeListeners = vt),
      (this.controls = new VN(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || vt);
  }
  update() {
    const { dragControls: t } = this.node.getProps(),
      { dragControls: n } = this.node.prevProps || {};
    t !== n &&
      (this.removeGroupControls(),
      t && (this.removeGroupControls = t.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession();
  }
}
const Du = (e) => (t, n) => {
  e && re.update(() => e(t, n), !1, !0);
};
class $N extends ur {
  constructor() {
    super(...arguments), (this.removePointerDownListener = vt);
  }
  onPointerDown(t) {
    this.session = new l1(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: a1(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: Du(t),
      onStart: Du(n),
      onMove: Du(r),
      onEnd: (i, s) => {
        delete this.session, o && re.postRender(() => o(i, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Pi(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let Lu = !1;
class UN extends w.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    i &&
      (n.group && n.group.add(i),
      r && r.register && o && r.register(i),
      Lu && i.root.didUpdate(),
      i.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      i.setOptions({
        ...i.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (fa.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: o,
        isPresent: i,
      } = this.props,
      { projection: s } = r;
    return (
      s &&
        ((s.isPresent = i),
        t.layoutDependency !== n &&
          s.setOptions({ ...s.options, layoutDependency: n }),
        (Lu = !0),
        o || t.layoutDependency !== n || n === void 0 || t.isPresent !== i
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? s.promote()
            : s.relegate() ||
              re.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { visualElement: t, layoutAnchor: n } = this.props,
      { projection: r } = t;
    r &&
      ((r.options.layoutAnchor = n),
      r.root.didUpdate(),
      Yf.postRender(() => {
        !r.currentAnimation && r.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: o } = t;
    (Lu = !0),
      o &&
        (o.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(o),
        r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function c1(e) {
  const [t, n] = Zw(),
    r = w.useContext(Nf);
  return C.jsx(UN, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: w.useContext(i1),
    isPresent: t,
    safeToRemove: n,
  });
}
const WN = {
  pan: { Feature: $N },
  drag: { Feature: BN, ProjectionNode: qw, MeasureLayout: c1 },
};
function wg(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n,
    i = r[o];
  i && re.postRender(() => i(t, ds(t)));
}
class HN extends ur {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = fM(
        t,
        (n, r) => (wg(this.node, r, "Start"), (o) => wg(this.node, o, "End"))
      ));
  }
  unmount() {}
}
class KN extends ur {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = ls(
      qi(this.node.current, "focus", () => this.onFocus()),
      qi(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function Sg(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n),
    i = r[o];
  i && re.postRender(() => i(t, ds(t)));
}
class GN extends ur {
  mount() {
    const { current: t } = this.node;
    if (!t) return;
    const { globalTapTarget: n, propagate: r } = this.node.props;
    this.unmount = vM(
      t,
      (o, i) => (
        Sg(this.node, i, "Start"),
        (s, { success: a }) => Sg(this.node, s, a ? "End" : "Cancel")
      ),
      {
        useGlobalTarget: n,
        stopPropagation: (r == null ? void 0 : r.tap) === !1,
      }
    );
  }
  unmount() {}
}
const pd = new WeakMap(),
  Ou = new WeakMap(),
  QN = (e) => {
    const t = pd.get(e.target);
    t && t(e);
  },
  YN = (e) => {
    e.forEach(QN);
  };
function XN({ root: e, ...t }) {
  const n = e || document;
  Ou.has(n) || Ou.set(n, {});
  const r = Ou.get(n),
    o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(YN, { root: e, ...t })), r[o];
}
function qN(e, t, n) {
  const r = XN(t);
  return (
    pd.set(e, n),
    r.observe(e),
    () => {
      pd.delete(e), r.unobserve(e);
    }
  );
}
const ZN = { some: 0, all: 1 };
class JN extends ur {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    var l;
    (l = this.stopObserver) == null || l.call(this);
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: o = "some", once: i } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof o == "number" ? o : ZN[o],
      },
      a = (u) => {
        const { isIntersecting: c } = u;
        if (
          this.isInView === c ||
          ((this.isInView = c), i && !c && this.hasEnteredView)
        )
          return;
        c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c);
        const { onViewportEnter: d, onViewportLeave: f } = this.node.getProps(),
          h = c ? d : f;
        h && h(u);
      };
    this.stopObserver = qN(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(eD(t, n)) && this.startObserver();
  }
  unmount() {
    var t;
    (t = this.stopObserver) == null || t.call(this),
      (this.hasEnteredView = !1),
      (this.isInView = !1);
  }
}
function eD({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const tD = {
    inView: { Feature: JN },
    tap: { Feature: GN },
    focus: { Feature: KN },
    hover: { Feature: HN },
  },
  nD = { layout: { ProjectionNode: qw, MeasureLayout: c1 } },
  rD = { ...PN, ...tD, ...WN, ...nD },
  ot = SN(rD, CN),
  oD = () => {
    const [e, t] = w.useState([]);
    return (
      w.useEffect(() => {
        const n = window.innerWidth < 768 ? 15 : 30,
          r = Array.from({ length: n }, (o, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 2,
            duration: Math.random() * 8 + 6,
            delay: Math.random() * 5,
            opacity: Math.random() * 0.4 + 0.1,
          }));
        t(r);
      }, []),
      C.jsx("div", {
        className: "fixed inset-0 pointer-events-none z-0 overflow-hidden",
        children: e.map((n) =>
          C.jsx(
            ot.div,
            {
              className: "absolute rounded-full",
              style: {
                left: `${n.x}%`,
                top: `${n.y}%`,
                width: n.size,
                height: n.size,
                background: `radial-gradient(circle, hsl(var(--gold) / ${
                  n.opacity
                }), hsl(var(--ember) / ${n.opacity * 0.5}))`,
                boxShadow: `0 0 ${n.size * 2}px hsl(var(--gold) / ${
                  n.opacity * 0.5
                })`,
              },
              animate: {
                y: [0, -80 - Math.random() * 120, -200],
                x: [0, (Math.random() - 0.5) * 60],
                opacity: [0, n.opacity, 0],
                scale: [0.5, 1, 0.3],
              },
              transition: {
                duration: n.duration,
                delay: n.delay,
                repeat: 1 / 0,
                ease: "easeInOut",
              },
            },
            n.id
          )
        ),
      })
    );
  },
  ju = "0xcomingsoon",
  iD = () => {
    const [e, t] = w.useState(null),
      [n, r] = w.useState(null),
      [o, i] = w.useState(!1),
      [s, a] = w.useState(!1);
    w.useEffect(() => {
      const u = async () => {
        var d;
        try {
          const v =
            (d = (
              await (
                await fetch(
                  `https://api.dexscreener.com/latest/dex/tokens/${ju}`
                )
              ).json()
            ).pairs) == null
              ? void 0
              : d[0];
          if (v) {
            const g = Number(v.marketCap || v.fdv || 0);
            t(
              g >= 1e6
                ? `$${(g / 1e6).toFixed(2)}M`
                : `$${(g / 1e3).toFixed(1)}K`
            ),
              r(`$${Number(v.priceUsd).toFixed(8)}`);
          }
        } catch {
          t("--");
        }
      };
      u();
      const c = setInterval(u, 15e3);
      return () => clearInterval(c);
    }, []);
    const l = async () => {
      await navigator.clipboard.writeText(ju),
        i(!0),
        setTimeout(() => i(!1), 2e3);
    };
    return C.jsxs(C.Fragment, {
      children: [
        C.jsx("div", {
          className:
            "fixed top-0 left-0 right-0 z-50 bg-secondary/90 backdrop-blur-sm border-b border-gold/20",
          children: C.jsxs("div", {
            className:
              "container flex items-center justify-between py-2 px-3 md:px-8 text-sm font-body",
            children: [
              C.jsxs("div", {
                className: "flex items-center gap-1.5 md:gap-2 min-w-0",
                children: [
                  C.jsx("span", {
                    className:
                      "font-display text-gold font-bold tracking-wider text-xs md:text-sm",
                    children: "$AZURE",
                  }),
                  C.jsx("span", {
                    className: "text-muted-foreground hidden sm:inline",
                    children: "|",
                  }),
                  C.jsx("span", {
                    className: "text-foreground text-xs md:text-sm truncate",
                    children: n ?? "...",
                  }),
                ],
              }),
              C.jsxs("div", {
                className: "flex items-center gap-1.5 md:gap-2",
                children: [
                  C.jsx("span", {
                    className:
                      "text-muted-foreground text-[10px] md:text-xs uppercase tracking-widest hidden sm:inline",
                    children: "MCap",
                  }),
                  C.jsx("span", {
                    className:
                      "font-display text-gold font-bold animate-pulse-gold text-xs md:text-sm",
                    children: e ?? "...",
                  }),
                ],
              }),
              C.jsxs("div", {
                className: "hidden md:flex items-center gap-3",
                children: [
                  C.jsx("a", {
                    href: "https://x.com",
                    target: "_blank",
                    rel: "noopener",
                    className:
                      "text-muted-foreground hover:text-gold transition-colors text-xs uppercase tracking-wider",
                    children: "𝕏",
                  }),
                  C.jsx("a", {
                    href: "https://dexscreener.com/ethereum/0xcomingsoon",
                    target: "_blank",
                    rel: "noopener",
                    className:
                      "text-muted-foreground hover:text-gold transition-colors text-xs uppercase tracking-wider",
                    children: "DexScreener",
                  }),
                  C.jsx("a", {
                    href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon",
                    target: "_blank",
                    rel: "noopener",
                    className:
                      "text-muted-foreground hover:text-gold transition-colors text-xs uppercase tracking-wider",
                    children: "Buy Now",
                  }),
                ],
              }),
              C.jsx("button", {
                onClick: () => a(!s),
                className:
                  "md:hidden text-foreground/70 hover:text-gold transition-colors p-1",
                "aria-label": "Menu",
                children: s ? C.jsx(wf, { size: 18 }) : C.jsx(Ib, { size: 18 }),
              }),
            ],
          }),
        }),
        s &&
          C.jsx("div", {
            className:
              "fixed top-[40px] left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-gold/20 md:hidden animate-fade-in",
            children: C.jsxs("div", {
              className: "flex flex-col gap-3 p-4",
              children: [
                C.jsxs("button", {
                  onClick: l,
                  className:
                    "flex items-center gap-2 text-xs font-mono text-foreground/70 hover:text-gold transition-colors",
                  children: [
                    o
                      ? C.jsx(vf, { size: 14, className: "text-green-400" })
                      : C.jsx(xf, { size: 14 }),
                    C.jsx("span", {
                      className: "truncate",
                      children: o ? "Copied!" : `CA: ${ju.slice(0, 16)}...`,
                    }),
                  ],
                }),
                C.jsx("a", {
                  href: "https://t.me",
                  target: "_blank",
                  rel: "noopener",
                  className:
                    "text-foreground/80 hover:text-gold transition-colors text-sm font-display uppercase tracking-wider",
                  children: "Community",
                }),
                C.jsx("a", {
                  href: "https://dexscreener.com/ethereum/0xcomingsoon",
                  target: "_blank",
                  rel: "noopener",
                  className:
                    "text-foreground/80 hover:text-gold transition-colors text-sm font-display uppercase tracking-wider",
                  children: "DexScreener",
                }),
                C.jsx("a", {
                  href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon",
                  target: "_blank",
                  rel: "noopener",
                  className:
                    "text-foreground/80 hover:text-gold transition-colors text-sm font-display uppercase tracking-wider",
                  children: "Buy Now",
                }),
              ],
            }),
          }),
      ],
    });
  },
  sD = "/assets/azure-banner-BUKAg46S.png",
  Cg = "0xcomingsoon",
  aD = () => {
    const [e, t] = w.useState(!1),
      n = async () => {
        await navigator.clipboard.writeText(Cg),
          t(!0),
          setTimeout(() => t(!1), 2e3);
      };
    return C.jsxs("section", {
      className:
        "relative min-h-screen flex flex-col items-center justify-center pt-12 md:pt-16 overflow-hidden",
      children: [
        C.jsx("div", {
          className:
            "absolute inset-0 bg-gradient-to-b from-secondary via-background to-background",
        }),
        C.jsx("div", {
          className:
            "absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[200px] md:h-[400px] bg-ember/5 rounded-full blur-[80px] md:blur-[120px]",
        }),
        C.jsxs("div", {
          className:
            "relative z-10 container flex flex-col items-center text-center px-4",
          children: [
            C.jsx(ot.div, {
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 1, ease: "easeOut" },
              className: "w-full max-w-sm md:max-w-4xl mb-6 md:mb-8",
              children: C.jsx("img", {
                src: sD,
                alt: "AzureArcFifth Banner",
                className: "w-full rounded-lg glow-ember",
              }),
            }),
            C.jsx(ot.h1, {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.4, duration: 0.8 },
              className:
                "font-display text-4xl sm:text-5xl md:text-7xl font-black text-gold-gradient mb-3 md:mb-4 tracking-wide",
              children: "AzureArcFifth",
            }),
            C.jsxs(ot.p, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.6, duration: 0.8 },
              className:
                "font-body text-lg sm:text-xl md:text-2xl text-foreground/80 mb-2 tracking-wide px-2",
              children: [
                "Elon's new in-game character. The next ",
                C.jsx("span", {
                  className: "text-gold font-semibold",
                  children: "Kekius Maximus",
                }),
                ".",
              ],
            }),
            C.jsxs(ot.button, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.8 },
              onClick: n,
              className:
                "group flex items-center gap-2 text-muted-foreground text-xs sm:text-sm font-mono mb-6 md:mb-8 max-w-xl hover:text-gold transition-colors cursor-pointer px-3 py-2 rounded-md hover:bg-secondary/50",
              children: [
                C.jsxs("span", {
                  className: "break-all",
                  children: ["CA: ", Cg],
                }),
                e
                  ? C.jsx(vf, {
                      size: 14,
                      className: "text-green-400 shrink-0",
                    })
                  : C.jsx(xf, {
                      size: 14,
                      className:
                        "shrink-0 opacity-50 group-hover:opacity-100 transition-opacity",
                    }),
              ],
            }),
            C.jsxs(ot.div, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 1 },
              className:
                "flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0",
              children: [
                C.jsx("a", {
                  href: "https://dexscreener.com/ethereum/0xcomingsoon",
                  target: "_blank",
                  rel: "noopener",
                  className:
                    "px-8 py-3 bg-primary text-primary-foreground font-display font-bold tracking-wider uppercase rounded border border-gold-light/30 hover:shadow-[0_0_30px_hsl(38_80%_50%/0.3)] transition-all duration-300 text-center active:scale-95",
                  children: "Buy on DexScreener",
                }),
                C.jsx("a", {
                  href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon",
                  target: "_blank",
                  rel: "noopener",
                  className:
                    "px-8 py-3 bg-secondary text-foreground font-display font-bold tracking-wider uppercase rounded border border-gold/20 hover:border-gold/50 transition-all duration-300 text-center active:scale-95",
                  children: "Buy Now",
                }),
              ],
            }),
          ],
        }),
        C.jsx("div", {
          className:
            "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent",
        }),
      ],
    });
  },
  lD = [
    { value: "$400M", label: "Kekius ATH" },
    { value: "Random9#2886", label: "Elon's Steam ID" },
    { value: "AzureArcFifth", label: "New Username" },
  ],
  uD = () =>
    C.jsx("section", {
      className: "py-16 md:py-20 relative",
      children: C.jsx("div", {
        className: "container max-w-3xl px-4",
        children: C.jsxs(ot.div, {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.8 },
          children: [
            C.jsx("h2", {
              className:
                "font-display text-2xl sm:text-3xl md:text-4xl text-gold-gradient font-bold mb-8 text-center",
              children: "The Story",
            }),
            C.jsx("div", {
              className: "grid grid-cols-3 gap-3 md:gap-6 mb-10",
              children: lD.map((e, t) =>
                C.jsxs(
                  ot.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { delay: t * 0.15 },
                    className:
                      "text-center p-3 md:p-4 rounded-lg border border-gold/15 bg-card/50 hover:border-gold/30 transition-colors",
                    children: [
                      C.jsx("div", {
                        className:
                          "font-display text-gold font-bold text-sm md:text-lg truncate",
                        children: e.value,
                      }),
                      C.jsx("div", {
                        className:
                          "text-muted-foreground text-[10px] md:text-xs uppercase tracking-wider mt-1",
                        children: e.label,
                      }),
                    ],
                  },
                  t
                )
              ),
            }),
            C.jsxs("div", {
              className:
                "space-y-5 text-foreground/80 text-base md:text-lg leading-relaxed font-body",
              children: [
                C.jsxs("p", {
                  children: [
                    "Remember ",
                    C.jsx("span", {
                      className: "text-gold font-semibold",
                      children: "Kekius Maximus",
                    }),
                    '? About a year and a half ago, Elon Musk changed the name of one of his in-game characters to "Kekius Maximus" — and the coin associated with it exploded to a ',
                    C.jsx("span", {
                      className: "text-gold font-bold",
                      children: "$400M market cap",
                    }),
                    " on ETH.",
                  ],
                }),
                C.jsxs("p", {
                  children: [
                    "Now, there are very strong rumors that he has a new character named after his daughter, Azure — ",
                    C.jsx("span", {
                      className: "text-gold font-semibold",
                      children: "AzureArcFifth",
                    }),
                    " — in the same game.",
                  ],
                }),
                C.jsxs("p", {
                  children: [
                    "Everyone is talking about it. You can literally log in to the game and check his user yourself. Everyone knows that ",
                    C.jsx("span", {
                      className: "text-gold font-semibold",
                      children: "Random9#2886",
                    }),
                    " is Elon Musk's Steam user ID.",
                  ],
                }),
                C.jsx("p", {
                  className:
                    "text-lg md:text-xl text-center font-display text-gold/90 pt-4",
                  children:
                    "It just needs time for people to realize it's real.",
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  cD = () =>
    C.jsxs("section", {
      className: "py-16 md:py-20 relative",
      children: [
        C.jsx("div", {
          className:
            "absolute inset-0 bg-gradient-to-b from-transparent via-ember/3 to-transparent",
        }),
        C.jsx("div", {
          className: "container max-w-4xl px-4 relative z-10",
          children: C.jsxs(ot.div, {
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.8 },
            className: "text-center",
            children: [
              C.jsx("h2", {
                className:
                  "font-display text-2xl sm:text-3xl md:text-4xl text-gold-gradient font-bold mb-4 md:mb-6",
                children: "The Proof",
              }),
              C.jsxs("p", {
                className:
                  "text-foreground/80 text-base md:text-lg font-body mb-6 md:mb-8 max-w-2xl mx-auto px-2",
                children: [
                  "Everyone knows that ",
                  C.jsx("span", {
                    className: "text-gold font-semibold",
                    children: "Random9#2886",
                  }),
                  " is Elon Musk's Steam user ID. As you can see in the screen recording, his new in-game username is ",
                  C.jsx("span", {
                    className: "text-gold font-semibold",
                    children: "AzureArcFifth",
                  }),
                  ".",
                ],
              }),
              C.jsxs("p", {
                className:
                  "text-foreground/70 text-sm md:text-base font-body mb-8 md:mb-10 max-w-2xl mx-auto px-2",
                children: [
                  "We also added him to our guild (",
                  C.jsx("span", {
                    className: "text-gold",
                    children: "AzureCommunity",
                  }),
                  ") where you can see again that the username is AzureArcFifth. It just needs time for people to realize it's real.",
                ],
              }),
              C.jsx("div", {
                className:
                  "rounded-lg overflow-hidden border border-gold/20 glow-gold bg-secondary/50 p-1",
                children: C.jsx("div", {
                  className: "aspect-video w-full",
                  children: C.jsx("iframe", {
                    src: "https://platform.twitter.com/embed/Tweet.html?id=2044360349768450171",
                    className: "w-full h-full rounded",
                    allowFullScreen: !0,
                    allow: "autoplay; encrypted-media",
                    sandbox: "allow-scripts allow-same-origin allow-popups",
                  }),
                }),
              }),
              C.jsx("p", {
                className: "text-muted-foreground text-sm mt-4",
                children: C.jsx("a", {
                  href: "https://x.com/i/status/2044360349768450171",
                  target: "_blank",
                  rel: "noopener",
                  className: "hover:text-gold transition-colors underline",
                  children: "Watch on 𝕏 →",
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  dD = "/assets/proof-elon-tweet-Cm0AsNY_.png",
  fD = "/assets/proof-guild-sql3lQLS.png",
  hD = "/assets/proof-offline-XqI06vRz.png",
  pD = "/assets/azure-character-3xViR3qL.png",
  Us = [
    {
      img: dD,
      caption: "Elon confirms his daughter's name is Azure",
      alt: "Elon Musk tweet about Azure",
    },
    {
      img: fD,
      caption: "AzureArcFifth (Random9#2886) invited to AzureCommunity guild",
      alt: "Guild invitation proof",
    },
    {
      img: hD,
      caption:
        "AzureArcFifth (Random9#2886) is now offline — username confirmed",
      alt: "Username confirmation",
    },
    {
      img: pD,
      caption: "The Azure warrior — in-game character",
      alt: "Azure character in game",
    },
  ],
  mD = () => {
    const [e, t] = w.useState(null);
    return C.jsxs("section", {
      className: "py-16 md:py-20 relative",
      children: [
        C.jsxs("div", {
          className: "container px-4",
          children: [
            C.jsx(ot.h2, {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: !0 },
              className:
                "font-display text-2xl sm:text-3xl md:text-4xl text-gold-gradient font-bold mb-8 md:mb-12 text-center",
              children: "Evidence",
            }),
            C.jsx("div", {
              className:
                "grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto",
              children: Us.map((n, r) =>
                C.jsxs(
                  ot.div,
                  {
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { delay: r * 0.1, duration: 0.6 },
                    onClick: () => t(r),
                    className:
                      "group relative rounded-lg overflow-hidden border border-gold/15 bg-card hover:border-gold/40 transition-all duration-500 glow-gold cursor-pointer active:scale-[0.98]",
                    children: [
                      C.jsx("div", {
                        className: "overflow-hidden",
                        children: C.jsx("img", {
                          src: n.img,
                          alt: n.alt,
                          loading: "lazy",
                          className:
                            "w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700",
                        }),
                      }),
                      C.jsx("div", {
                        className:
                          "p-3 md:p-4 bg-gradient-to-t from-card to-transparent",
                        children: C.jsx("p", {
                          className:
                            "text-foreground/80 text-xs sm:text-sm font-body",
                          children: n.caption,
                        }),
                      }),
                    ],
                  },
                  r
                )
              ),
            }),
          ],
        }),
        C.jsx(X2, {
          children:
            e !== null &&
            C.jsxs(ot.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              onClick: () => t(null),
              className:
                "fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4",
              children: [
                C.jsx("button", {
                  onClick: () => t(null),
                  className:
                    "absolute top-4 right-4 text-foreground/70 hover:text-gold transition-colors z-10",
                  children: C.jsx(wf, { size: 28 }),
                }),
                C.jsx(ot.img, {
                  initial: { scale: 0.8, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  exit: { scale: 0.8, opacity: 0 },
                  src: Us[e].img,
                  alt: Us[e].alt,
                  className:
                    "max-w-full max-h-[85vh] object-contain rounded-lg",
                }),
                C.jsx("p", {
                  className:
                    "absolute bottom-6 left-0 right-0 text-center text-foreground/80 text-sm font-body px-4",
                  children: Us[e].caption,
                }),
              ],
            }),
        }),
      ],
    });
  },
  Eg = "0xcomingsoon",
  gD = () => {
    const [e, t] = w.useState(!1),
      n = async () => {
        await navigator.clipboard.writeText(Eg),
          t(!0),
          setTimeout(() => t(!1), 2e3);
      };
    return C.jsx("footer", {
      className: "py-12 md:py-16 border-t border-gold/10",
      children: C.jsxs("div", {
        className: "container px-4 text-center",
        children: [
          C.jsx("h3", {
            className:
              "font-display text-xl md:text-2xl text-gold-gradient font-bold mb-6",
            children: "Join the Movement",
          }),
          C.jsxs("div", {
            className:
              "flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 mb-8",
            children: [
              C.jsx("a", {
                href: "https://t.me",
                target: "_blank",
                rel: "noopener",
                className:
                  "px-6 py-2.5 border border-gold/30 rounded font-display text-sm uppercase tracking-wider text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 active:scale-95",
                children: "Community",
              }),
              C.jsx("a", {
                href: "https://dexscreener.com/ethereum/0xcomingsoon",
                target: "_blank",
                rel: "noopener",
                className:
                  "px-6 py-2.5 border border-gold/30 rounded font-display text-sm uppercase tracking-wider text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 active:scale-95",
                children: "DexScreener",
              }),
              C.jsx("a", {
                href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon",
                target: "_blank",
                rel: "noopener",
                className:
                  "px-6 py-2.5 border border-gold/30 rounded font-display text-sm uppercase tracking-wider text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 active:scale-95",
                children: "Buy Now",
              }),
            ],
          }),
          C.jsxs("button", {
            onClick: n,
            className:
              "flex items-center gap-2 mx-auto text-muted-foreground text-xs font-mono break-all max-w-lg mb-4 hover:text-gold transition-colors cursor-pointer group",
            children: [
              C.jsxs("span", { children: ["CA: ", Eg] }),
              e
                ? C.jsx(vf, { size: 14, className: "text-green-400 shrink-0" })
                : C.jsx(xf, {
                    size: 14,
                    className: "shrink-0 opacity-50 group-hover:opacity-100",
                  }),
            ],
          }),
          C.jsx("p", {
            className: "text-muted-foreground/50 text-xs mb-6",
            children:
              "$AZURE is a meme coin with no intrinsic value or expectation of financial return. This is not financial advice.",
          }),
        ],
      }),
    });
  },
  yD = () =>
    C.jsxs("div", {
      className: "min-h-screen",
      children: [
        C.jsx(oD, {}),
        C.jsx(iD, {}),
        C.jsx(aD, {}),
        C.jsx(uD, {}),
        C.jsx(cD, {}),
        C.jsx(mD, {}),
        C.jsx(gD, {}),
      ],
    }),
  vD = () => {
    const e = u0();
    return (
      w.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname
        );
      }, [e.pathname]),
      C.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: C.jsxs("div", {
          className: "text-center",
          children: [
            C.jsx("h1", {
              className: "mb-4 text-4xl font-bold",
              children: "404",
            }),
            C.jsx("p", {
              className: "mb-4 text-xl text-muted-foreground",
              children: "Oops! Page not found",
            }),
            C.jsx("a", {
              href: "/",
              className: "text-primary underline hover:text-primary/90",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  xD = new pE(),
  wD = () =>
    C.jsx(gE, {
      client: xD,
      children: C.jsxs(rA, {
        children: [
          C.jsx(vP, {}),
          C.jsx(LT, {}),
          C.jsx(tT, {
            children: C.jsxs(ZE, {
              children: [
                C.jsx(Dc, { path: "/", element: C.jsx(yD, {}) }),
                C.jsx(Dc, { path: "*", element: C.jsx(vD, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
Gv(document.getElementById("root")).render(C.jsx(wD, {}));
