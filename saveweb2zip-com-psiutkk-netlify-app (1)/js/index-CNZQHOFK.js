var jh = (e) => {
  throw TypeError(e);
};
var Ll = (e, t, r) => t.has(e) || jh("Cannot " + r);
var N = (e, t, r) => (
    Ll(e, t, "read from private field"),
    r ? r.call(e) : t.get(e)
  ),
  te = (e, t, r) =>
    t.has(e)
      ? jh("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, r),
  G = (e, t, r, n) => (
    Ll(e, t, "write to private field"),
    n ? n.call(e, r) : t.set(e, r),
    r
  ),
  $e = (e, t, r) => (Ll(e, t, "access private method"), r);
var bi = (e, t, r, n) => ({
  set _(s) {
    G(e, t, s, r);
  },
  get _() {
    return N(e, t, n);
  },
});
function Jv(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const s in n)
        if (s !== "default" && !(s in e)) {
          const o = Object.getOwnPropertyDescriptor(n, s);
          o &&
            Object.defineProperty(
              e,
              s,
              o.get ? o : { enumerable: !0, get: () => n[s] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && n(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function n(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = r(s);
    fetch(s.href, o);
  }
})();
function lm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var um = { exports: {} },
  Qa = {},
  cm = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var li = Symbol.for("react.element"),
  Yv = Symbol.for("react.portal"),
  Xv = Symbol.for("react.fragment"),
  Zv = Symbol.for("react.strict_mode"),
  ew = Symbol.for("react.profiler"),
  tw = Symbol.for("react.provider"),
  rw = Symbol.for("react.context"),
  nw = Symbol.for("react.forward_ref"),
  sw = Symbol.for("react.suspense"),
  ow = Symbol.for("react.memo"),
  iw = Symbol.for("react.lazy"),
  Ah = Symbol.iterator;
function aw(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ah && e[Ah]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var dm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  hm = Object.assign,
  fm = {};
function qs(e, t, r) {
  ((this.props = e),
    (this.context = t),
    (this.refs = fm),
    (this.updater = r || dm));
}
qs.prototype.isReactComponent = {};
qs.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
qs.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function pm() {}
pm.prototype = qs.prototype;
function rd(e, t, r) {
  ((this.props = e),
    (this.context = t),
    (this.refs = fm),
    (this.updater = r || dm));
}
var nd = (rd.prototype = new pm());
nd.constructor = rd;
hm(nd, qs.prototype);
nd.isPureReactComponent = !0;
var Oh = Array.isArray,
  mm = Object.prototype.hasOwnProperty,
  sd = { current: null },
  gm = { key: !0, ref: !0, __self: !0, __source: !0 };
function ym(e, t, r) {
  var n,
    s = {},
    o = null,
    i = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      mm.call(t, n) && !gm.hasOwnProperty(n) && (s[n] = t[n]);
  var a = arguments.length - 2;
  if (a === 1) s.children = r;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    s.children = l;
  }
  if (e && e.defaultProps)
    for (n in ((a = e.defaultProps), a)) s[n] === void 0 && (s[n] = a[n]);
  return {
    $$typeof: li,
    type: e,
    key: o,
    ref: i,
    props: s,
    _owner: sd.current,
  };
}
function lw(e, t) {
  return {
    $$typeof: li,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function od(e) {
  return typeof e == "object" && e !== null && e.$$typeof === li;
}
function uw(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var Ih = /\/+/g;
function $l(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? uw("" + e.key)
    : t.toString(36);
}
function Xi(e, t, r, n, s) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case li:
          case Yv:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (s = s(i)),
      (e = n === "" ? "." + $l(i, 0) : n),
      Oh(s)
        ? ((r = ""),
          e != null && (r = e.replace(Ih, "$&/") + "/"),
          Xi(s, t, r, "", function (u) {
            return u;
          }))
        : s != null &&
          (od(s) &&
            (s = lw(
              s,
              r +
                (!s.key || (i && i.key === s.key)
                  ? ""
                  : ("" + s.key).replace(Ih, "$&/") + "/") +
                e,
            )),
          t.push(s)),
      1
    );
  if (((i = 0), (n = n === "" ? "." : n + ":"), Oh(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = n + $l(o, a);
      i += Xi(o, t, r, l, s);
    }
  else if (((l = aw(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      ((o = o.value), (l = n + $l(o, a++)), (i += Xi(o, t, r, l, s)));
  else if (o === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return i;
}
function _i(e, t, r) {
  if (e == null) return e;
  var n = [],
    s = 0;
  return (
    Xi(e, n, "", "", function (o) {
      return t.call(r, o, s++);
    }),
    n
  );
}
function cw(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var qe = { current: null },
  Zi = { transition: null },
  dw = {
    ReactCurrentDispatcher: qe,
    ReactCurrentBatchConfig: Zi,
    ReactCurrentOwner: sd,
  };
function vm() {
  throw Error("act(...) is not supported in production builds of React.");
}
X.Children = {
  map: _i,
  forEach: function (e, t, r) {
    _i(
      e,
      function () {
        t.apply(this, arguments);
      },
      r,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      _i(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      _i(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!od(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
X.Component = qs;
X.Fragment = Xv;
X.Profiler = ew;
X.PureComponent = rd;
X.StrictMode = Zv;
X.Suspense = sw;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dw;
X.act = vm;
X.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var n = hm({}, e.props),
    s = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = sd.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      mm.call(t, l) &&
        !gm.hasOwnProperty(l) &&
        (n[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    n.children = a;
  }
  return { $$typeof: li, type: e.type, key: s, ref: o, props: n, _owner: i };
};
X.createContext = function (e) {
  return (
    (e = {
      $$typeof: rw,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: tw, _context: e }),
    (e.Consumer = e)
  );
};
X.createElement = ym;
X.createFactory = function (e) {
  var t = ym.bind(null, e);
  return ((t.type = e), t);
};
X.createRef = function () {
  return { current: null };
};
X.forwardRef = function (e) {
  return { $$typeof: nw, render: e };
};
X.isValidElement = od;
X.lazy = function (e) {
  return { $$typeof: iw, _payload: { _status: -1, _result: e }, _init: cw };
};
X.memo = function (e, t) {
  return { $$typeof: ow, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function (e) {
  var t = Zi.transition;
  Zi.transition = {};
  try {
    e();
  } finally {
    Zi.transition = t;
  }
};
X.unstable_act = vm;
X.useCallback = function (e, t) {
  return qe.current.useCallback(e, t);
};
X.useContext = function (e) {
  return qe.current.useContext(e);
};
X.useDebugValue = function () {};
X.useDeferredValue = function (e) {
  return qe.current.useDeferredValue(e);
};
X.useEffect = function (e, t) {
  return qe.current.useEffect(e, t);
};
X.useId = function () {
  return qe.current.useId();
};
X.useImperativeHandle = function (e, t, r) {
  return qe.current.useImperativeHandle(e, t, r);
};
X.useInsertionEffect = function (e, t) {
  return qe.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function (e, t) {
  return qe.current.useLayoutEffect(e, t);
};
X.useMemo = function (e, t) {
  return qe.current.useMemo(e, t);
};
X.useReducer = function (e, t, r) {
  return qe.current.useReducer(e, t, r);
};
X.useRef = function (e) {
  return qe.current.useRef(e);
};
X.useState = function (e) {
  return qe.current.useState(e);
};
X.useSyncExternalStore = function (e, t, r) {
  return qe.current.useSyncExternalStore(e, t, r);
};
X.useTransition = function () {
  return qe.current.useTransition();
};
X.version = "18.3.1";
cm.exports = X;
var _ = cm.exports;
const O = lm(_),
  wm = Jv({ __proto__: null, default: O }, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hw = _,
  fw = Symbol.for("react.element"),
  pw = Symbol.for("react.fragment"),
  mw = Object.prototype.hasOwnProperty,
  gw = hw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  yw = { key: !0, ref: !0, __self: !0, __source: !0 };
function xm(e, t, r) {
  var n,
    s = {},
    o = null,
    i = null;
  (r !== void 0 && (o = "" + r),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref));
  for (n in t) mw.call(t, n) && !yw.hasOwnProperty(n) && (s[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) s[n] === void 0 && (s[n] = t[n]);
  return {
    $$typeof: fw,
    type: e,
    key: o,
    ref: i,
    props: s,
    _owner: gw.current,
  };
}
Qa.Fragment = pw;
Qa.jsx = xm;
Qa.jsxs = xm;
um.exports = Qa;
var h = um.exports,
  bm = { exports: {} },
  dt = {},
  _m = { exports: {} },
  Em = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, R) {
    var L = C.length;
    C.push(R);
    e: for (; 0 < L; ) {
      var q = (L - 1) >>> 1,
        z = C[q];
      if (0 < s(z, R)) ((C[q] = R), (C[L] = z), (L = q));
      else break e;
    }
  }
  function r(C) {
    return C.length === 0 ? null : C[0];
  }
  function n(C) {
    if (C.length === 0) return null;
    var R = C[0],
      L = C.pop();
    if (L !== R) {
      C[0] = L;
      e: for (var q = 0, z = C.length, Y = z >>> 1; q < Y; ) {
        var Z = 2 * (q + 1) - 1,
          be = C[Z],
          Le = Z + 1,
          re = C[Le];
        if (0 > s(be, L))
          Le < z && 0 > s(re, be)
            ? ((C[q] = re), (C[Le] = L), (q = Le))
            : ((C[q] = be), (C[Z] = L), (q = Z));
        else if (Le < z && 0 > s(re, L)) ((C[q] = re), (C[Le] = L), (q = Le));
        else break e;
      }
    }
    return R;
  }
  function s(C, R) {
    var L = C.sortIndex - R.sortIndex;
    return L !== 0 ? L : C.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    p = null,
    f = 3,
    d = !1,
    w = !1,
    y = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(C) {
    for (var R = r(u); R !== null; ) {
      if (R.callback === null) n(u);
      else if (R.startTime <= C)
        (n(u), (R.sortIndex = R.expirationTime), t(l, R));
      else break;
      R = r(u);
    }
  }
  function b(C) {
    if (((y = !1), v(C), !w))
      if (r(l) !== null) ((w = !0), H(E));
      else {
        var R = r(u);
        R !== null && D(b, R.startTime - C);
      }
  }
  function E(C, R) {
    ((w = !1), y && ((y = !1), g(T), (T = -1)), (d = !0));
    var L = f;
    try {
      for (
        v(R), p = r(l);
        p !== null && (!(p.expirationTime > R) || (C && !M()));
      ) {
        var q = p.callback;
        if (typeof q == "function") {
          ((p.callback = null), (f = p.priorityLevel));
          var z = q(p.expirationTime <= R);
          ((R = e.unstable_now()),
            typeof z == "function" ? (p.callback = z) : p === r(l) && n(l),
            v(R));
        } else n(l);
        p = r(l);
      }
      if (p !== null) var Y = !0;
      else {
        var Z = r(u);
        (Z !== null && D(b, Z.startTime - R), (Y = !1));
      }
      return Y;
    } finally {
      ((p = null), (f = L), (d = !1));
    }
  }
  var S = !1,
    k = null,
    T = -1,
    j = 5,
    P = -1;
  function M() {
    return !(e.unstable_now() - P < j);
  }
  function $() {
    if (k !== null) {
      var C = e.unstable_now();
      P = C;
      var R = !0;
      try {
        R = k(!0, C);
      } finally {
        R ? B() : ((S = !1), (k = null));
      }
    } else S = !1;
  }
  var B;
  if (typeof m == "function")
    B = function () {
      m($);
    };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(),
      Q = I.port2;
    ((I.port1.onmessage = $),
      (B = function () {
        Q.postMessage(null);
      }));
  } else
    B = function () {
      x($, 0);
    };
  function H(C) {
    ((k = C), S || ((S = !0), B()));
  }
  function D(C, R) {
    T = x(function () {
      C(e.unstable_now());
    }, R);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || d || ((w = !0), H(E));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (j = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(l);
    }),
    (e.unstable_next = function (C) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = f;
      }
      var L = f;
      f = R;
      try {
        return C();
      } finally {
        f = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, R) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var L = f;
      f = C;
      try {
        return R();
      } finally {
        f = L;
      }
    }),
    (e.unstable_scheduleCallback = function (C, R, L) {
      var q = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? q + L : q))
          : (L = q),
        C)
      ) {
        case 1:
          var z = -1;
          break;
        case 2:
          z = 250;
          break;
        case 5:
          z = 1073741823;
          break;
        case 4:
          z = 1e4;
          break;
        default:
          z = 5e3;
      }
      return (
        (z = L + z),
        (C = {
          id: c++,
          callback: R,
          priorityLevel: C,
          startTime: L,
          expirationTime: z,
          sortIndex: -1,
        }),
        L > q
          ? ((C.sortIndex = L),
            t(u, C),
            r(l) === null &&
              C === r(u) &&
              (y ? (g(T), (T = -1)) : (y = !0), D(b, L - q)))
          : ((C.sortIndex = z), t(l, C), w || d || ((w = !0), H(E))),
        C
      );
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (C) {
      var R = f;
      return function () {
        var L = f;
        f = R;
        try {
          return C.apply(this, arguments);
        } finally {
          f = L;
        }
      };
    }));
})(Em);
_m.exports = Em;
var vw = _m.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ww = _,
  ct = vw;
function A(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Sm = new Set(),
  jo = {};
function $n(e, t) {
  (Os(e, t), Os(e + "Capture", t));
}
function Os(e, t) {
  for (jo[e] = t, e = 0; e < t.length; e++) Sm.add(t[e]);
}
var cr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Nu = Object.prototype.hasOwnProperty,
  xw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Lh = {},
  $h = {};
function bw(e) {
  return Nu.call($h, e)
    ? !0
    : Nu.call(Lh, e)
      ? !1
      : xw.test(e)
        ? ($h[e] = !0)
        : ((Lh[e] = !0), !1);
}
function _w(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ew(e, t, r, n) {
  if (t === null || typeof t > "u" || _w(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
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
function Ke(e, t, r, n, s, o, i) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = s),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i));
}
var Ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ie[e] = new Ke(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ie[t] = new Ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ie[e] = new Ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ie[e] = new Ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ie[e] = new Ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ie[e] = new Ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ie[e] = new Ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ie[e] = new Ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ie[e] = new Ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var id = /[\-:]([a-z])/g;
function ad(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(id, ad);
    Ie[t] = new Ke(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(id, ad);
    Ie[t] = new Ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(id, ad);
  Ie[t] = new Ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ie[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ie.xlinkHref = new Ke(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ie[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ld(e, t, r, n) {
  var s = Ie.hasOwnProperty(t) ? Ie[t] : null;
  (s !== null
    ? s.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ew(t, r, s, n) && (r = null),
    n || s === null
      ? bw(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : s.mustUseProperty
        ? (e[s.propertyName] = r === null ? (s.type === 3 ? !1 : "") : r)
        : ((t = s.attributeName),
          (n = s.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((s = s.type),
              (r = s === 3 || (s === 4 && r === !0) ? "" : "" + r),
              n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var gr = ww.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ei = Symbol.for("react.element"),
  rs = Symbol.for("react.portal"),
  ns = Symbol.for("react.fragment"),
  ud = Symbol.for("react.strict_mode"),
  ju = Symbol.for("react.profiler"),
  km = Symbol.for("react.provider"),
  Cm = Symbol.for("react.context"),
  cd = Symbol.for("react.forward_ref"),
  Au = Symbol.for("react.suspense"),
  Ou = Symbol.for("react.suspense_list"),
  dd = Symbol.for("react.memo"),
  Pr = Symbol.for("react.lazy"),
  Tm = Symbol.for("react.offscreen"),
  Mh = Symbol.iterator;
function to(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Mh && e[Mh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var me = Object.assign,
  Ml;
function ho(e) {
  if (Ml === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      Ml = (t && t[1]) || "";
    }
  return (
    `
` +
    Ml +
    e
  );
}
var Dl = !1;
function Fl(e, t) {
  if (!e || Dl) return "";
  Dl = !0;
  var r = Error.prepareStackTrace;
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
          var n = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          n = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (
        var s = u.stack.split(`
`),
          o = n.stack.split(`
`),
          i = s.length - 1,
          a = o.length - 1;
        1 <= i && 0 <= a && s[i] !== o[a];
      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (s[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || s[i] !== o[a])) {
                var l =
                  `
` + s[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    ((Dl = !1), (Error.prepareStackTrace = r));
  }
  return (e = e ? e.displayName || e.name : "") ? ho(e) : "";
}
function Sw(e) {
  switch (e.tag) {
    case 5:
      return ho(e.type);
    case 16:
      return ho("Lazy");
    case 13:
      return ho("Suspense");
    case 19:
      return ho("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Fl(e.type, !1)), e);
    case 11:
      return ((e = Fl(e.type.render, !1)), e);
    case 1:
      return ((e = Fl(e.type, !0)), e);
    default:
      return "";
  }
}
function Iu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ns:
      return "Fragment";
    case rs:
      return "Portal";
    case ju:
      return "Profiler";
    case ud:
      return "StrictMode";
    case Au:
      return "Suspense";
    case Ou:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Cm:
        return (e.displayName || "Context") + ".Consumer";
      case km:
        return (e._context.displayName || "Context") + ".Provider";
      case cd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case dd:
        return (
          (t = e.displayName || null),
          t !== null ? t : Iu(e.type) || "Memo"
        );
      case Pr:
        ((t = e._payload), (e = e._init));
        try {
          return Iu(e(t));
        } catch {}
    }
  return null;
}
function kw(e) {
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
      return Iu(t);
    case 8:
      return t === ud ? "StrictMode" : "Mode";
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
function Yr(e) {
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
function Pm(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Cw(e) {
  var t = Pm(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var s = r.get,
      o = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (i) {
          ((n = "" + i), o.call(this, i));
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (i) {
          n = "" + i;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Si(e) {
  e._valueTracker || (e._valueTracker = Cw(e));
}
function Rm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return (
    e && (n = Pm(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function fa(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Lu(e, t) {
  var r = t.checked;
  return me({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function Dh(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  ((r = Yr(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Nm(e, t) {
  ((t = t.checked), t != null && ld(e, "checked", t, !1));
}
function $u(e, t) {
  Nm(e, t);
  var r = Yr(t.value),
    n = t.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? Mu(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && Mu(e, t.type, Yr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Fh(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r));
}
function Mu(e, t, r) {
  (t !== "number" || fa(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var fo = Array.isArray;
function ms(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < r.length; s++) t["$" + r[s]] = !0;
    for (r = 0; r < e.length; r++)
      ((s = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== s && (e[r].selected = s),
        s && n && (e[r].defaultSelected = !0));
  } else {
    for (r = "" + Yr(r), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === r) {
        ((e[s].selected = !0), n && (e[s].defaultSelected = !0));
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function Du(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return me({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Uh(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(A(92));
      if (fo(r)) {
        if (1 < r.length) throw Error(A(93));
        r = r[0];
      }
      t = r;
    }
    (t == null && (t = ""), (r = t));
  }
  e._wrapperState = { initialValue: Yr(r) };
}
function jm(e, t) {
  var r = Yr(t.value),
    n = Yr(t.defaultValue);
  (r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n));
}
function Bh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Am(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Fu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Am(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var ki,
  Om = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ki = ki || document.createElement("div"),
          ki.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ki.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ao(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var yo = {
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
  Tw = ["Webkit", "ms", "Moz", "O"];
Object.keys(yo).forEach(function (e) {
  Tw.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (yo[t] = yo[e]));
  });
});
function Im(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (yo.hasOwnProperty(e) && yo[e])
      ? ("" + t).trim()
      : t + "px";
}
function Lm(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        s = Im(r, t[r], n);
      (r === "float" && (r = "cssFloat"), n ? e.setProperty(r, s) : (e[r] = s));
    }
}
var Pw = me(
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
  },
);
function Uu(e, t) {
  if (t) {
    if (Pw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function Bu(e, t) {
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
var zu = null;
function hd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Vu = null,
  gs = null,
  ys = null;
function zh(e) {
  if ((e = di(e))) {
    if (typeof Vu != "function") throw Error(A(280));
    var t = e.stateNode;
    t && ((t = el(t)), Vu(e.stateNode, e.type, t));
  }
}
function $m(e) {
  gs ? (ys ? ys.push(e) : (ys = [e])) : (gs = e);
}
function Mm() {
  if (gs) {
    var e = gs,
      t = ys;
    if (((ys = gs = null), zh(e), t)) for (e = 0; e < t.length; e++) zh(t[e]);
  }
}
function Dm(e, t) {
  return e(t);
}
function Fm() {}
var Ul = !1;
function Um(e, t, r) {
  if (Ul) return e(t, r);
  Ul = !0;
  try {
    return Dm(e, t, r);
  } finally {
    ((Ul = !1), (gs !== null || ys !== null) && (Fm(), Mm()));
  }
}
function Oo(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = el(r);
  if (n === null) return null;
  r = n[t];
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
      ((n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(A(231, t, typeof r));
  return r;
}
var Wu = !1;
if (cr)
  try {
    var ro = {};
    (Object.defineProperty(ro, "passive", {
      get: function () {
        Wu = !0;
      },
    }),
      window.addEventListener("test", ro, ro),
      window.removeEventListener("test", ro, ro));
  } catch {
    Wu = !1;
  }
function Rw(e, t, r, n, s, o, i, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var vo = !1,
  pa = null,
  ma = !1,
  Hu = null,
  Nw = {
    onError: function (e) {
      ((vo = !0), (pa = e));
    },
  };
function jw(e, t, r, n, s, o, i, a, l) {
  ((vo = !1), (pa = null), Rw.apply(Nw, arguments));
}
function Aw(e, t, r, n, s, o, i, a, l) {
  if ((jw.apply(this, arguments), vo)) {
    if (vo) {
      var u = pa;
      ((vo = !1), (pa = null));
    } else throw Error(A(198));
    ma || ((ma = !0), (Hu = u));
  }
}
function Mn(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (r = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function Bm(e) {
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
function Vh(e) {
  if (Mn(e) !== e) throw Error(A(188));
}
function Ow(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Mn(e)), t === null)) throw Error(A(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var s = r.return;
    if (s === null) break;
    var o = s.alternate;
    if (o === null) {
      if (((n = s.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (s.child === o.child) {
      for (o = s.child; o; ) {
        if (o === r) return (Vh(s), e);
        if (o === n) return (Vh(s), t);
        o = o.sibling;
      }
      throw Error(A(188));
    }
    if (r.return !== n.return) ((r = s), (n = o));
    else {
      for (var i = !1, a = s.child; a; ) {
        if (a === r) {
          ((i = !0), (r = s), (n = o));
          break;
        }
        if (a === n) {
          ((i = !0), (n = s), (r = o));
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === r) {
            ((i = !0), (r = o), (n = s));
            break;
          }
          if (a === n) {
            ((i = !0), (n = o), (r = s));
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(A(189));
      }
    }
    if (r.alternate !== n) throw Error(A(190));
  }
  if (r.tag !== 3) throw Error(A(188));
  return r.stateNode.current === r ? e : t;
}
function zm(e) {
  return ((e = Ow(e)), e !== null ? Vm(e) : null);
}
function Vm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Vm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Wm = ct.unstable_scheduleCallback,
  Wh = ct.unstable_cancelCallback,
  Iw = ct.unstable_shouldYield,
  Lw = ct.unstable_requestPaint,
  we = ct.unstable_now,
  $w = ct.unstable_getCurrentPriorityLevel,
  fd = ct.unstable_ImmediatePriority,
  Hm = ct.unstable_UserBlockingPriority,
  ga = ct.unstable_NormalPriority,
  Mw = ct.unstable_LowPriority,
  qm = ct.unstable_IdlePriority,
  Ja = null,
  Qt = null;
function Dw(e) {
  if (Qt && typeof Qt.onCommitFiberRoot == "function")
    try {
      Qt.onCommitFiberRoot(Ja, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var $t = Math.clz32 ? Math.clz32 : Bw,
  Fw = Math.log,
  Uw = Math.LN2;
function Bw(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Fw(e) / Uw) | 0)) | 0);
}
var Ci = 64,
  Ti = 4194304;
function po(e) {
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
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    s = e.suspendedLanes,
    o = e.pingedLanes,
    i = r & 268435455;
  if (i !== 0) {
    var a = i & ~s;
    a !== 0 ? (n = po(a)) : ((o &= i), o !== 0 && (n = po(o)));
  } else ((i = r & ~s), i !== 0 ? (n = po(i)) : o !== 0 && (n = po(o)));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    !(t & s) &&
    ((s = n & -n), (o = t & -t), s >= o || (s === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      ((r = 31 - $t(t)), (s = 1 << r), (n |= e[r]), (t &= ~s));
  return n;
}
function zw(e, t) {
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
function Vw(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      s = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;
  ) {
    var i = 31 - $t(o),
      a = 1 << i,
      l = s[i];
    (l === -1
      ? (!(a & r) || a & n) && (s[i] = zw(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a));
  }
}
function qu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Km() {
  var e = Ci;
  return ((Ci <<= 1), !(Ci & 4194240) && (Ci = 64), e);
}
function Bl(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function ui(e, t, r) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - $t(t)),
    (e[t] = r));
}
function Ww(e, t) {
  var r = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var s = 31 - $t(r),
      o = 1 << s;
    ((t[s] = 0), (n[s] = -1), (e[s] = -1), (r &= ~o));
  }
}
function pd(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - $t(r),
      s = 1 << n;
    ((s & t) | (e[n] & t) && (e[n] |= t), (r &= ~s));
  }
}
var ne = 0;
function Gm(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Qm,
  md,
  Jm,
  Ym,
  Xm,
  Ku = !1,
  Pi = [],
  Vr = null,
  Wr = null,
  Hr = null,
  Io = new Map(),
  Lo = new Map(),
  jr = [],
  Hw =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Hh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Vr = null;
      break;
    case "dragenter":
    case "dragleave":
      Wr = null;
      break;
    case "mouseover":
    case "mouseout":
      Hr = null;
      break;
    case "pointerover":
    case "pointerout":
      Io.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Lo.delete(t.pointerId);
  }
}
function no(e, t, r, n, s, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: o,
        targetContainers: [s],
      }),
      t !== null && ((t = di(t)), t !== null && md(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function qw(e, t, r, n, s) {
  switch (t) {
    case "focusin":
      return ((Vr = no(Vr, e, t, r, n, s)), !0);
    case "dragenter":
      return ((Wr = no(Wr, e, t, r, n, s)), !0);
    case "mouseover":
      return ((Hr = no(Hr, e, t, r, n, s)), !0);
    case "pointerover":
      var o = s.pointerId;
      return (Io.set(o, no(Io.get(o) || null, e, t, r, n, s)), !0);
    case "gotpointercapture":
      return (
        (o = s.pointerId),
        Lo.set(o, no(Lo.get(o) || null, e, t, r, n, s)),
        !0
      );
  }
  return !1;
}
function Zm(e) {
  var t = vn(e.target);
  if (t !== null) {
    var r = Mn(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = Bm(r)), t !== null)) {
          ((e.blockedOn = t),
            Xm(e.priority, function () {
              Jm(r);
            }));
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ea(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Gu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      ((zu = n), r.target.dispatchEvent(n), (zu = null));
    } else return ((t = di(r)), t !== null && md(t), (e.blockedOn = r), !1);
    t.shift();
  }
  return !0;
}
function qh(e, t, r) {
  ea(e) && r.delete(t);
}
function Kw() {
  ((Ku = !1),
    Vr !== null && ea(Vr) && (Vr = null),
    Wr !== null && ea(Wr) && (Wr = null),
    Hr !== null && ea(Hr) && (Hr = null),
    Io.forEach(qh),
    Lo.forEach(qh));
}
function so(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ku ||
      ((Ku = !0),
      ct.unstable_scheduleCallback(ct.unstable_NormalPriority, Kw)));
}
function $o(e) {
  function t(s) {
    return so(s, e);
  }
  if (0 < Pi.length) {
    so(Pi[0], e);
    for (var r = 1; r < Pi.length; r++) {
      var n = Pi[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    Vr !== null && so(Vr, e),
      Wr !== null && so(Wr, e),
      Hr !== null && so(Hr, e),
      Io.forEach(t),
      Lo.forEach(t),
      r = 0;
    r < jr.length;
    r++
  )
    ((n = jr[r]), n.blockedOn === e && (n.blockedOn = null));
  for (; 0 < jr.length && ((r = jr[0]), r.blockedOn === null); )
    (Zm(r), r.blockedOn === null && jr.shift());
}
var vs = gr.ReactCurrentBatchConfig,
  va = !0;
function Gw(e, t, r, n) {
  var s = ne,
    o = vs.transition;
  vs.transition = null;
  try {
    ((ne = 1), gd(e, t, r, n));
  } finally {
    ((ne = s), (vs.transition = o));
  }
}
function Qw(e, t, r, n) {
  var s = ne,
    o = vs.transition;
  vs.transition = null;
  try {
    ((ne = 4), gd(e, t, r, n));
  } finally {
    ((ne = s), (vs.transition = o));
  }
}
function gd(e, t, r, n) {
  if (va) {
    var s = Gu(e, t, r, n);
    if (s === null) (Yl(e, t, n, wa, r), Hh(e, n));
    else if (qw(s, e, t, r, n)) n.stopPropagation();
    else if ((Hh(e, n), t & 4 && -1 < Hw.indexOf(e))) {
      for (; s !== null; ) {
        var o = di(s);
        if (
          (o !== null && Qm(o),
          (o = Gu(e, t, r, n)),
          o === null && Yl(e, t, n, wa, r),
          o === s)
        )
          break;
        s = o;
      }
      s !== null && n.stopPropagation();
    } else Yl(e, t, n, null, r);
  }
}
var wa = null;
function Gu(e, t, r, n) {
  if (((wa = null), (e = hd(n)), (e = vn(e)), e !== null))
    if (((t = Mn(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = Bm(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((wa = e), null);
}
function eg(e) {
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
      switch ($w()) {
        case fd:
          return 1;
        case Hm:
          return 4;
        case ga:
        case Mw:
          return 16;
        case qm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Fr = null,
  yd = null,
  ta = null;
function tg() {
  if (ta) return ta;
  var e,
    t = yd,
    r = t.length,
    n,
    s = "value" in Fr ? Fr.value : Fr.textContent,
    o = s.length;
  for (e = 0; e < r && t[e] === s[e]; e++);
  var i = r - e;
  for (n = 1; n <= i && t[r - n] === s[o - n]; n++);
  return (ta = s.slice(e, 1 < n ? 1 - n : void 0));
}
function ra(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ri() {
  return !0;
}
function Kh() {
  return !1;
}
function ht(e) {
  function t(r, n, s, o, i) {
    ((this._reactName = r),
      (this._targetInst = s),
      (this.type = n),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((r = e[a]), (this[a] = r ? r(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Ri
        : Kh),
      (this.isPropagationStopped = Kh),
      this
    );
  }
  return (
    me(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = Ri));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = Ri));
      },
      persist: function () {},
      isPersistent: Ri,
    }),
    t
  );
}
var Ks = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  vd = ht(Ks),
  ci = me({}, Ks, { view: 0, detail: 0 }),
  Jw = ht(ci),
  zl,
  Vl,
  oo,
  Ya = me({}, ci, {
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
    getModifierState: wd,
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
        : (e !== oo &&
            (oo && e.type === "mousemove"
              ? ((zl = e.screenX - oo.screenX), (Vl = e.screenY - oo.screenY))
              : (Vl = zl = 0),
            (oo = e)),
          zl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Vl;
    },
  }),
  Gh = ht(Ya),
  Yw = me({}, Ya, { dataTransfer: 0 }),
  Xw = ht(Yw),
  Zw = me({}, ci, { relatedTarget: 0 }),
  Wl = ht(Zw),
  e1 = me({}, Ks, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  t1 = ht(e1),
  r1 = me({}, Ks, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  n1 = ht(r1),
  s1 = me({}, Ks, { data: 0 }),
  Qh = ht(s1),
  o1 = {
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
  i1 = {
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
  a1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function l1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = a1[e]) ? !!t[e] : !1;
}
function wd() {
  return l1;
}
var u1 = me({}, ci, {
    key: function (e) {
      if (e.key) {
        var t = o1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ra(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? i1[e.keyCode] || "Unidentified"
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
    getModifierState: wd,
    charCode: function (e) {
      return e.type === "keypress" ? ra(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ra(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  c1 = ht(u1),
  d1 = me({}, Ya, {
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
  Jh = ht(d1),
  h1 = me({}, ci, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: wd,
  }),
  f1 = ht(h1),
  p1 = me({}, Ks, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  m1 = ht(p1),
  g1 = me({}, Ya, {
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
  y1 = ht(g1),
  v1 = [9, 13, 27, 32],
  xd = cr && "CompositionEvent" in window,
  wo = null;
cr && "documentMode" in document && (wo = document.documentMode);
var w1 = cr && "TextEvent" in window && !wo,
  rg = cr && (!xd || (wo && 8 < wo && 11 >= wo)),
  Yh = " ",
  Xh = !1;
function ng(e, t) {
  switch (e) {
    case "keyup":
      return v1.indexOf(t.keyCode) !== -1;
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
function sg(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var ss = !1;
function x1(e, t) {
  switch (e) {
    case "compositionend":
      return sg(t);
    case "keypress":
      return t.which !== 32 ? null : ((Xh = !0), Yh);
    case "textInput":
      return ((e = t.data), e === Yh && Xh ? null : e);
    default:
      return null;
  }
}
function b1(e, t) {
  if (ss)
    return e === "compositionend" || (!xd && ng(e, t))
      ? ((e = tg()), (ta = yd = Fr = null), (ss = !1), e)
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
      return rg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var _1 = {
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
function Zh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!_1[e.type] : t === "textarea";
}
function og(e, t, r, n) {
  ($m(n),
    (t = xa(t, "onChange")),
    0 < t.length &&
      ((r = new vd("onChange", "change", null, r, n)),
      e.push({ event: r, listeners: t })));
}
var xo = null,
  Mo = null;
function E1(e) {
  gg(e, 0);
}
function Xa(e) {
  var t = as(e);
  if (Rm(t)) return e;
}
function S1(e, t) {
  if (e === "change") return t;
}
var ig = !1;
if (cr) {
  var Hl;
  if (cr) {
    var ql = "oninput" in document;
    if (!ql) {
      var ef = document.createElement("div");
      (ef.setAttribute("oninput", "return;"),
        (ql = typeof ef.oninput == "function"));
    }
    Hl = ql;
  } else Hl = !1;
  ig = Hl && (!document.documentMode || 9 < document.documentMode);
}
function tf() {
  xo && (xo.detachEvent("onpropertychange", ag), (Mo = xo = null));
}
function ag(e) {
  if (e.propertyName === "value" && Xa(Mo)) {
    var t = [];
    (og(t, Mo, e, hd(e)), Um(E1, t));
  }
}
function k1(e, t, r) {
  e === "focusin"
    ? (tf(), (xo = t), (Mo = r), xo.attachEvent("onpropertychange", ag))
    : e === "focusout" && tf();
}
function C1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Xa(Mo);
}
function T1(e, t) {
  if (e === "click") return Xa(t);
}
function P1(e, t) {
  if (e === "input" || e === "change") return Xa(t);
}
function R1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Dt = typeof Object.is == "function" ? Object.is : R1;
function Do(e, t) {
  if (Dt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var s = r[n];
    if (!Nu.call(t, s) || !Dt(e[s], t[s])) return !1;
  }
  return !0;
}
function rf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function nf(e, t) {
  var r = rf(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = rf(r);
  }
}
function lg(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? lg(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function ug() {
  for (var e = window, t = fa(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = fa(e.document);
  }
  return t;
}
function bd(e) {
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
function N1(e) {
  var t = ug(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    lg(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && bd(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        "selectionStart" in r)
      )
        ((r.selectionStart = t),
          (r.selectionEnd = Math.min(e, r.value.length)));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = r.textContent.length,
          o = Math.min(n.start, s);
        ((n = n.end === void 0 ? o : Math.min(n.end, s)),
          !e.extend && o > n && ((s = n), (n = o), (o = s)),
          (s = nf(r, o)));
        var i = nf(r, n);
        s &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          o > n
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      ((e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var j1 = cr && "documentMode" in document && 11 >= document.documentMode,
  os = null,
  Qu = null,
  bo = null,
  Ju = !1;
function sf(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Ju ||
    os == null ||
    os !== fa(n) ||
    ((n = os),
    "selectionStart" in n && bd(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (bo && Do(bo, n)) ||
      ((bo = n),
      (n = xa(Qu, "onSelect")),
      0 < n.length &&
        ((t = new vd("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = os))));
}
function Ni(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var is = {
    animationend: Ni("Animation", "AnimationEnd"),
    animationiteration: Ni("Animation", "AnimationIteration"),
    animationstart: Ni("Animation", "AnimationStart"),
    transitionend: Ni("Transition", "TransitionEnd"),
  },
  Kl = {},
  cg = {};
cr &&
  ((cg = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete is.animationend.animation,
    delete is.animationiteration.animation,
    delete is.animationstart.animation),
  "TransitionEvent" in window || delete is.transitionend.transition);
function Za(e) {
  if (Kl[e]) return Kl[e];
  if (!is[e]) return e;
  var t = is[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in cg) return (Kl[e] = t[r]);
  return e;
}
var dg = Za("animationend"),
  hg = Za("animationiteration"),
  fg = Za("animationstart"),
  pg = Za("transitionend"),
  mg = new Map(),
  of =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function nn(e, t) {
  (mg.set(e, t), $n(t, [e]));
}
for (var Gl = 0; Gl < of.length; Gl++) {
  var Ql = of[Gl],
    A1 = Ql.toLowerCase(),
    O1 = Ql[0].toUpperCase() + Ql.slice(1);
  nn(A1, "on" + O1);
}
nn(dg, "onAnimationEnd");
nn(hg, "onAnimationIteration");
nn(fg, "onAnimationStart");
nn("dblclick", "onDoubleClick");
nn("focusin", "onFocus");
nn("focusout", "onBlur");
nn(pg, "onTransitionEnd");
Os("onMouseEnter", ["mouseout", "mouseover"]);
Os("onMouseLeave", ["mouseout", "mouseover"]);
Os("onPointerEnter", ["pointerout", "pointerover"]);
Os("onPointerLeave", ["pointerout", "pointerover"]);
$n(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
$n(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
$n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
$n(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
$n(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
$n(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var mo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  I1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(mo));
function af(e, t, r) {
  var n = e.type || "unknown-event";
  ((e.currentTarget = r), Aw(n, t, void 0, e), (e.currentTarget = null));
}
function gg(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      s = n.event;
    n = n.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = n.length - 1; 0 <= i; i--) {
          var a = n[i],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== o && s.isPropagationStopped())) break e;
          (af(s, a, u), (o = l));
        }
      else
        for (i = 0; i < n.length; i++) {
          if (
            ((a = n[i]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && s.isPropagationStopped())
          )
            break e;
          (af(s, a, u), (o = l));
        }
    }
  }
  if (ma) throw ((e = Hu), (ma = !1), (Hu = null), e);
}
function le(e, t) {
  var r = t[tc];
  r === void 0 && (r = t[tc] = new Set());
  var n = e + "__bubble";
  r.has(n) || (yg(t, e, 2, !1), r.add(n));
}
function Jl(e, t, r) {
  var n = 0;
  (t && (n |= 4), yg(r, e, n, t));
}
var ji = "_reactListening" + Math.random().toString(36).slice(2);
function Fo(e) {
  if (!e[ji]) {
    ((e[ji] = !0),
      Sm.forEach(function (r) {
        r !== "selectionchange" && (I1.has(r) || Jl(r, !1, e), Jl(r, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ji] || ((t[ji] = !0), Jl("selectionchange", !1, t));
  }
}
function yg(e, t, r, n) {
  switch (eg(t)) {
    case 1:
      var s = Gw;
      break;
    case 4:
      s = Qw;
      break;
    default:
      s = gd;
  }
  ((r = s.bind(null, t, r, e)),
    (s = void 0),
    !Wu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    n
      ? s !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: s })
        : e.addEventListener(t, r, !0)
      : s !== void 0
        ? e.addEventListener(t, r, { passive: s })
        : e.addEventListener(t, r, !1));
}
function Yl(e, t, r, n, s) {
  var o = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var i = n.tag;
      if (i === 3 || i === 4) {
        var a = n.stateNode.containerInfo;
        if (a === s || (a.nodeType === 8 && a.parentNode === s)) break;
        if (i === 4)
          for (i = n.return; i !== null; ) {
            var l = i.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = i.stateNode.containerInfo),
              l === s || (l.nodeType === 8 && l.parentNode === s))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = vn(a)), i === null)) return;
          if (((l = i.tag), l === 5 || l === 6)) {
            n = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      n = n.return;
    }
  Um(function () {
    var u = o,
      c = hd(r),
      p = [];
    e: {
      var f = mg.get(e);
      if (f !== void 0) {
        var d = vd,
          w = e;
        switch (e) {
          case "keypress":
            if (ra(r) === 0) break e;
          case "keydown":
          case "keyup":
            d = c1;
            break;
          case "focusin":
            ((w = "focus"), (d = Wl));
            break;
          case "focusout":
            ((w = "blur"), (d = Wl));
            break;
          case "beforeblur":
          case "afterblur":
            d = Wl;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            d = Gh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            d = Xw;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            d = f1;
            break;
          case dg:
          case hg:
          case fg:
            d = t1;
            break;
          case pg:
            d = m1;
            break;
          case "scroll":
            d = Jw;
            break;
          case "wheel":
            d = y1;
            break;
          case "copy":
          case "cut":
          case "paste":
            d = n1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            d = Jh;
        }
        var y = (t & 4) !== 0,
          x = !y && e === "scroll",
          g = y ? (f !== null ? f + "Capture" : null) : f;
        y = [];
        for (var m = u, v; m !== null; ) {
          v = m;
          var b = v.stateNode;
          if (
            (v.tag === 5 &&
              b !== null &&
              ((v = b),
              g !== null && ((b = Oo(m, g)), b != null && y.push(Uo(m, b, v)))),
            x)
          )
            break;
          m = m.return;
        }
        0 < y.length &&
          ((f = new d(f, w, null, r, c)), p.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (d = e === "mouseout" || e === "pointerout"),
          f &&
            r !== zu &&
            (w = r.relatedTarget || r.fromElement) &&
            (vn(w) || w[dr]))
        )
          break e;
        if (
          (d || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          d
            ? ((w = r.relatedTarget || r.toElement),
              (d = u),
              (w = w ? vn(w) : null),
              w !== null &&
                ((x = Mn(w)), w !== x || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((d = null), (w = u)),
          d !== w)
        ) {
          if (
            ((y = Gh),
            (b = "onMouseLeave"),
            (g = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Jh),
              (b = "onPointerLeave"),
              (g = "onPointerEnter"),
              (m = "pointer")),
            (x = d == null ? f : as(d)),
            (v = w == null ? f : as(w)),
            (f = new y(b, m + "leave", d, r, c)),
            (f.target = x),
            (f.relatedTarget = v),
            (b = null),
            vn(c) === u &&
              ((y = new y(g, m + "enter", w, r, c)),
              (y.target = v),
              (y.relatedTarget = x),
              (b = y)),
            (x = b),
            d && w)
          )
            t: {
              for (y = d, g = w, m = 0, v = y; v; v = Hn(v)) m++;
              for (v = 0, b = g; b; b = Hn(b)) v++;
              for (; 0 < m - v; ) ((y = Hn(y)), m--);
              for (; 0 < v - m; ) ((g = Hn(g)), v--);
              for (; m--; ) {
                if (y === g || (g !== null && y === g.alternate)) break t;
                ((y = Hn(y)), (g = Hn(g)));
              }
              y = null;
            }
          else y = null;
          (d !== null && lf(p, f, d, y, !1),
            w !== null && x !== null && lf(p, x, w, y, !0));
        }
      }
      e: {
        if (
          ((f = u ? as(u) : window),
          (d = f.nodeName && f.nodeName.toLowerCase()),
          d === "select" || (d === "input" && f.type === "file"))
        )
          var E = S1;
        else if (Zh(f))
          if (ig) E = P1;
          else {
            E = C1;
            var S = k1;
          }
        else
          (d = f.nodeName) &&
            d.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (E = T1);
        if (E && (E = E(e, u))) {
          og(p, E, r, c);
          break e;
        }
        (S && S(e, f, u),
          e === "focusout" &&
            (S = f._wrapperState) &&
            S.controlled &&
            f.type === "number" &&
            Mu(f, "number", f.value));
      }
      switch (((S = u ? as(u) : window), e)) {
        case "focusin":
          (Zh(S) || S.contentEditable === "true") &&
            ((os = S), (Qu = u), (bo = null));
          break;
        case "focusout":
          bo = Qu = os = null;
          break;
        case "mousedown":
          Ju = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Ju = !1), sf(p, r, c));
          break;
        case "selectionchange":
          if (j1) break;
        case "keydown":
        case "keyup":
          sf(p, r, c);
      }
      var k;
      if (xd)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        ss
          ? ng(e, r) && (T = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (T = "onCompositionStart");
      (T &&
        (rg &&
          r.locale !== "ko" &&
          (ss || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && ss && (k = tg())
            : ((Fr = c),
              (yd = "value" in Fr ? Fr.value : Fr.textContent),
              (ss = !0))),
        (S = xa(u, T)),
        0 < S.length &&
          ((T = new Qh(T, e, null, r, c)),
          p.push({ event: T, listeners: S }),
          k ? (T.data = k) : ((k = sg(r)), k !== null && (T.data = k)))),
        (k = w1 ? x1(e, r) : b1(e, r)) &&
          ((u = xa(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Qh("onBeforeInput", "beforeinput", null, r, c)),
            p.push({ event: c, listeners: u }),
            (c.data = k))));
    }
    gg(p, t);
  });
}
function Uo(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function xa(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var s = e,
      o = s.stateNode;
    (s.tag === 5 &&
      o !== null &&
      ((s = o),
      (o = Oo(e, r)),
      o != null && n.unshift(Uo(e, o, s)),
      (o = Oo(e, t)),
      o != null && n.push(Uo(e, o, s))),
      (e = e.return));
  }
  return n;
}
function Hn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function lf(e, t, r, n, s) {
  for (var o = t._reactName, i = []; r !== null && r !== n; ) {
    var a = r,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === n) break;
    (a.tag === 5 &&
      u !== null &&
      ((a = u),
      s
        ? ((l = Oo(r, o)), l != null && i.unshift(Uo(r, l, a)))
        : s || ((l = Oo(r, o)), l != null && i.push(Uo(r, l, a)))),
      (r = r.return));
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var L1 = /\r\n?/g,
  $1 = /\u0000|\uFFFD/g;
function uf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      L1,
      `
`,
    )
    .replace($1, "");
}
function Ai(e, t, r) {
  if (((t = uf(t)), uf(e) !== t && r)) throw Error(A(425));
}
function ba() {}
var Yu = null,
  Xu = null;
function Zu(e, t) {
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
var ec = typeof setTimeout == "function" ? setTimeout : void 0,
  M1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  cf = typeof Promise == "function" ? Promise : void 0,
  D1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof cf < "u"
        ? function (e) {
            return cf.resolve(null).then(e).catch(F1);
          }
        : ec;
function F1(e) {
  setTimeout(function () {
    throw e;
  });
}
function Xl(e, t) {
  var r = t,
    n = 0;
  do {
    var s = r.nextSibling;
    if ((e.removeChild(r), s && s.nodeType === 8))
      if (((r = s.data), r === "/$")) {
        if (n === 0) {
          (e.removeChild(s), $o(t));
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = s;
  } while (r);
  $o(t);
}
function qr(e) {
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
function df(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Gs = Math.random().toString(36).slice(2),
  Kt = "__reactFiber$" + Gs,
  Bo = "__reactProps$" + Gs,
  dr = "__reactContainer$" + Gs,
  tc = "__reactEvents$" + Gs,
  U1 = "__reactListeners$" + Gs,
  B1 = "__reactHandles$" + Gs;
function vn(e) {
  var t = e[Kt];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[dr] || r[Kt])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = df(e); e !== null; ) {
          if ((r = e[Kt])) return r;
          e = df(e);
        }
      return t;
    }
    ((e = r), (r = e.parentNode));
  }
  return null;
}
function di(e) {
  return (
    (e = e[Kt] || e[dr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function as(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function el(e) {
  return e[Bo] || null;
}
var rc = [],
  ls = -1;
function sn(e) {
  return { current: e };
}
function ue(e) {
  0 > ls || ((e.current = rc[ls]), (rc[ls] = null), ls--);
}
function ie(e, t) {
  (ls++, (rc[ls] = e.current), (e.current = t));
}
var Xr = {},
  Be = sn(Xr),
  Ye = sn(!1),
  Nn = Xr;
function Is(e, t) {
  var r = e.type.contextTypes;
  if (!r) return Xr;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    o;
  for (o in r) s[o] = t[o];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function Xe(e) {
  return ((e = e.childContextTypes), e != null);
}
function _a() {
  (ue(Ye), ue(Be));
}
function hf(e, t, r) {
  if (Be.current !== Xr) throw Error(A(168));
  (ie(Be, t), ie(Ye, r));
}
function vg(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var s in n) if (!(s in t)) throw Error(A(108, kw(e) || "Unknown", s));
  return me({}, r, n);
}
function Ea(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Xr),
    (Nn = Be.current),
    ie(Be, e),
    ie(Ye, Ye.current),
    !0
  );
}
function ff(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(A(169));
  (r
    ? ((e = vg(e, t, Nn)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      ue(Ye),
      ue(Be),
      ie(Be, e))
    : ue(Ye),
    ie(Ye, r));
}
var or = null,
  tl = !1,
  Zl = !1;
function wg(e) {
  or === null ? (or = [e]) : or.push(e);
}
function z1(e) {
  ((tl = !0), wg(e));
}
function on() {
  if (!Zl && or !== null) {
    Zl = !0;
    var e = 0,
      t = ne;
    try {
      var r = or;
      for (ne = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      ((or = null), (tl = !1));
    } catch (s) {
      throw (or !== null && (or = or.slice(e + 1)), Wm(fd, on), s);
    } finally {
      ((ne = t), (Zl = !1));
    }
  }
  return null;
}
var us = [],
  cs = 0,
  Sa = null,
  ka = 0,
  gt = [],
  yt = 0,
  jn = null,
  ar = 1,
  lr = "";
function fn(e, t) {
  ((us[cs++] = ka), (us[cs++] = Sa), (Sa = e), (ka = t));
}
function xg(e, t, r) {
  ((gt[yt++] = ar), (gt[yt++] = lr), (gt[yt++] = jn), (jn = e));
  var n = ar;
  e = lr;
  var s = 32 - $t(n) - 1;
  ((n &= ~(1 << s)), (r += 1));
  var o = 32 - $t(t) + s;
  if (30 < o) {
    var i = s - (s % 5);
    ((o = (n & ((1 << i) - 1)).toString(32)),
      (n >>= i),
      (s -= i),
      (ar = (1 << (32 - $t(t) + s)) | (r << s) | n),
      (lr = o + e));
  } else ((ar = (1 << o) | (r << s) | n), (lr = e));
}
function _d(e) {
  e.return !== null && (fn(e, 1), xg(e, 1, 0));
}
function Ed(e) {
  for (; e === Sa; )
    ((Sa = us[--cs]), (us[cs] = null), (ka = us[--cs]), (us[cs] = null));
  for (; e === jn; )
    ((jn = gt[--yt]),
      (gt[yt] = null),
      (lr = gt[--yt]),
      (gt[yt] = null),
      (ar = gt[--yt]),
      (gt[yt] = null));
}
var lt = null,
  at = null,
  de = !1,
  Lt = null;
function bg(e, t) {
  var r = vt(5, null, null, 0);
  ((r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r));
}
function pf(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (lt = e), (at = qr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (lt = e), (at = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = jn !== null ? { id: ar, overflow: lr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = vt(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (lt = e),
            (at = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function nc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function sc(e) {
  if (de) {
    var t = at;
    if (t) {
      var r = t;
      if (!pf(e, t)) {
        if (nc(e)) throw Error(A(418));
        t = qr(r.nextSibling);
        var n = lt;
        t && pf(e, t)
          ? bg(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (de = !1), (lt = e));
      }
    } else {
      if (nc(e)) throw Error(A(418));
      ((e.flags = (e.flags & -4097) | 2), (de = !1), (lt = e));
    }
  }
}
function mf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  lt = e;
}
function Oi(e) {
  if (e !== lt) return !1;
  if (!de) return (mf(e), (de = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Zu(e.type, e.memoizedProps))),
    t && (t = at))
  ) {
    if (nc(e)) throw (_g(), Error(A(418)));
    for (; t; ) (bg(e, t), (t = qr(t.nextSibling)));
  }
  if ((mf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              at = qr(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      at = null;
    }
  } else at = lt ? qr(e.stateNode.nextSibling) : null;
  return !0;
}
function _g() {
  for (var e = at; e; ) e = qr(e.nextSibling);
}
function Ls() {
  ((at = lt = null), (de = !1));
}
function Sd(e) {
  Lt === null ? (Lt = [e]) : Lt.push(e);
}
var V1 = gr.ReactCurrentBatchConfig;
function io(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(A(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(A(147, e));
      var s = n,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var a = s.refs;
            i === null ? delete a[o] : (a[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(A(284));
    if (!r._owner) throw Error(A(290, e));
  }
  return e;
}
function Ii(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      A(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function gf(e) {
  var t = e._init;
  return t(e._payload);
}
function Eg(e) {
  function t(g, m) {
    if (e) {
      var v = g.deletions;
      v === null ? ((g.deletions = [m]), (g.flags |= 16)) : v.push(m);
    }
  }
  function r(g, m) {
    if (!e) return null;
    for (; m !== null; ) (t(g, m), (m = m.sibling));
    return null;
  }
  function n(g, m) {
    for (g = new Map(); m !== null; )
      (m.key !== null ? g.set(m.key, m) : g.set(m.index, m), (m = m.sibling));
    return g;
  }
  function s(g, m) {
    return ((g = Jr(g, m)), (g.index = 0), (g.sibling = null), g);
  }
  function o(g, m, v) {
    return (
      (g.index = v),
      e
        ? ((v = g.alternate),
          v !== null
            ? ((v = v.index), v < m ? ((g.flags |= 2), m) : v)
            : ((g.flags |= 2), m))
        : ((g.flags |= 1048576), m)
    );
  }
  function i(g) {
    return (e && g.alternate === null && (g.flags |= 2), g);
  }
  function a(g, m, v, b) {
    return m === null || m.tag !== 6
      ? ((m = iu(v, g.mode, b)), (m.return = g), m)
      : ((m = s(m, v)), (m.return = g), m);
  }
  function l(g, m, v, b) {
    var E = v.type;
    return E === ns
      ? c(g, m, v.props.children, b, v.key)
      : m !== null &&
          (m.elementType === E ||
            (typeof E == "object" &&
              E !== null &&
              E.$$typeof === Pr &&
              gf(E) === m.type))
        ? ((b = s(m, v.props)), (b.ref = io(g, m, v)), (b.return = g), b)
        : ((b = ua(v.type, v.key, v.props, null, g.mode, b)),
          (b.ref = io(g, m, v)),
          (b.return = g),
          b);
  }
  function u(g, m, v, b) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== v.containerInfo ||
      m.stateNode.implementation !== v.implementation
      ? ((m = au(v, g.mode, b)), (m.return = g), m)
      : ((m = s(m, v.children || [])), (m.return = g), m);
  }
  function c(g, m, v, b, E) {
    return m === null || m.tag !== 7
      ? ((m = Rn(v, g.mode, b, E)), (m.return = g), m)
      : ((m = s(m, v)), (m.return = g), m);
  }
  function p(g, m, v) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return ((m = iu("" + m, g.mode, v)), (m.return = g), m);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ei:
          return (
            (v = ua(m.type, m.key, m.props, null, g.mode, v)),
            (v.ref = io(g, null, m)),
            (v.return = g),
            v
          );
        case rs:
          return ((m = au(m, g.mode, v)), (m.return = g), m);
        case Pr:
          var b = m._init;
          return p(g, b(m._payload), v);
      }
      if (fo(m) || to(m))
        return ((m = Rn(m, g.mode, v, null)), (m.return = g), m);
      Ii(g, m);
    }
    return null;
  }
  function f(g, m, v, b) {
    var E = m !== null ? m.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return E !== null ? null : a(g, m, "" + v, b);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ei:
          return v.key === E ? l(g, m, v, b) : null;
        case rs:
          return v.key === E ? u(g, m, v, b) : null;
        case Pr:
          return ((E = v._init), f(g, m, E(v._payload), b));
      }
      if (fo(v) || to(v)) return E !== null ? null : c(g, m, v, b, null);
      Ii(g, v);
    }
    return null;
  }
  function d(g, m, v, b, E) {
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return ((g = g.get(v) || null), a(m, g, "" + b, E));
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Ei:
          return (
            (g = g.get(b.key === null ? v : b.key) || null),
            l(m, g, b, E)
          );
        case rs:
          return (
            (g = g.get(b.key === null ? v : b.key) || null),
            u(m, g, b, E)
          );
        case Pr:
          var S = b._init;
          return d(g, m, v, S(b._payload), E);
      }
      if (fo(b) || to(b)) return ((g = g.get(v) || null), c(m, g, b, E, null));
      Ii(m, b);
    }
    return null;
  }
  function w(g, m, v, b) {
    for (
      var E = null, S = null, k = m, T = (m = 0), j = null;
      k !== null && T < v.length;
      T++
    ) {
      k.index > T ? ((j = k), (k = null)) : (j = k.sibling);
      var P = f(g, k, v[T], b);
      if (P === null) {
        k === null && (k = j);
        break;
      }
      (e && k && P.alternate === null && t(g, k),
        (m = o(P, m, T)),
        S === null ? (E = P) : (S.sibling = P),
        (S = P),
        (k = j));
    }
    if (T === v.length) return (r(g, k), de && fn(g, T), E);
    if (k === null) {
      for (; T < v.length; T++)
        ((k = p(g, v[T], b)),
          k !== null &&
            ((m = o(k, m, T)),
            S === null ? (E = k) : (S.sibling = k),
            (S = k)));
      return (de && fn(g, T), E);
    }
    for (k = n(g, k); T < v.length; T++)
      ((j = d(k, g, T, v[T], b)),
        j !== null &&
          (e && j.alternate !== null && k.delete(j.key === null ? T : j.key),
          (m = o(j, m, T)),
          S === null ? (E = j) : (S.sibling = j),
          (S = j)));
    return (
      e &&
        k.forEach(function (M) {
          return t(g, M);
        }),
      de && fn(g, T),
      E
    );
  }
  function y(g, m, v, b) {
    var E = to(v);
    if (typeof E != "function") throw Error(A(150));
    if (((v = E.call(v)), v == null)) throw Error(A(151));
    for (
      var S = (E = null), k = m, T = (m = 0), j = null, P = v.next();
      k !== null && !P.done;
      T++, P = v.next()
    ) {
      k.index > T ? ((j = k), (k = null)) : (j = k.sibling);
      var M = f(g, k, P.value, b);
      if (M === null) {
        k === null && (k = j);
        break;
      }
      (e && k && M.alternate === null && t(g, k),
        (m = o(M, m, T)),
        S === null ? (E = M) : (S.sibling = M),
        (S = M),
        (k = j));
    }
    if (P.done) return (r(g, k), de && fn(g, T), E);
    if (k === null) {
      for (; !P.done; T++, P = v.next())
        ((P = p(g, P.value, b)),
          P !== null &&
            ((m = o(P, m, T)),
            S === null ? (E = P) : (S.sibling = P),
            (S = P)));
      return (de && fn(g, T), E);
    }
    for (k = n(g, k); !P.done; T++, P = v.next())
      ((P = d(k, g, T, P.value, b)),
        P !== null &&
          (e && P.alternate !== null && k.delete(P.key === null ? T : P.key),
          (m = o(P, m, T)),
          S === null ? (E = P) : (S.sibling = P),
          (S = P)));
    return (
      e &&
        k.forEach(function ($) {
          return t(g, $);
        }),
      de && fn(g, T),
      E
    );
  }
  function x(g, m, v, b) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === ns &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Ei:
          e: {
            for (var E = v.key, S = m; S !== null; ) {
              if (S.key === E) {
                if (((E = v.type), E === ns)) {
                  if (S.tag === 7) {
                    (r(g, S.sibling),
                      (m = s(S, v.props.children)),
                      (m.return = g),
                      (g = m));
                    break e;
                  }
                } else if (
                  S.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Pr &&
                    gf(E) === S.type)
                ) {
                  (r(g, S.sibling),
                    (m = s(S, v.props)),
                    (m.ref = io(g, S, v)),
                    (m.return = g),
                    (g = m));
                  break e;
                }
                r(g, S);
                break;
              } else t(g, S);
              S = S.sibling;
            }
            v.type === ns
              ? ((m = Rn(v.props.children, g.mode, b, v.key)),
                (m.return = g),
                (g = m))
              : ((b = ua(v.type, v.key, v.props, null, g.mode, b)),
                (b.ref = io(g, m, v)),
                (b.return = g),
                (g = b));
          }
          return i(g);
        case rs:
          e: {
            for (S = v.key; m !== null; ) {
              if (m.key === S)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === v.containerInfo &&
                  m.stateNode.implementation === v.implementation
                ) {
                  (r(g, m.sibling),
                    (m = s(m, v.children || [])),
                    (m.return = g),
                    (g = m));
                  break e;
                } else {
                  r(g, m);
                  break;
                }
              else t(g, m);
              m = m.sibling;
            }
            ((m = au(v, g.mode, b)), (m.return = g), (g = m));
          }
          return i(g);
        case Pr:
          return ((S = v._init), x(g, m, S(v._payload), b));
      }
      if (fo(v)) return w(g, m, v, b);
      if (to(v)) return y(g, m, v, b);
      Ii(g, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        m !== null && m.tag === 6
          ? (r(g, m.sibling), (m = s(m, v)), (m.return = g), (g = m))
          : (r(g, m), (m = iu(v, g.mode, b)), (m.return = g), (g = m)),
        i(g))
      : r(g, m);
  }
  return x;
}
var $s = Eg(!0),
  Sg = Eg(!1),
  Ca = sn(null),
  Ta = null,
  ds = null,
  kd = null;
function Cd() {
  kd = ds = Ta = null;
}
function Td(e) {
  var t = Ca.current;
  (ue(Ca), (e._currentValue = t));
}
function oc(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function ws(e, t) {
  ((Ta = e),
    (kd = ds = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Je = !0), (e.firstContext = null)));
}
function xt(e) {
  var t = e._currentValue;
  if (kd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ds === null)) {
      if (Ta === null) throw Error(A(308));
      ((ds = e), (Ta.dependencies = { lanes: 0, firstContext: e }));
    } else ds = ds.next = e;
  return t;
}
var wn = null;
function Pd(e) {
  wn === null ? (wn = [e]) : wn.push(e);
}
function kg(e, t, r, n) {
  var s = t.interleaved;
  return (
    s === null ? ((r.next = r), Pd(t)) : ((r.next = s.next), (s.next = r)),
    (t.interleaved = r),
    hr(e, n)
  );
}
function hr(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return));
  return r.tag === 3 ? r.stateNode : null;
}
var Rr = !1;
function Rd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Cg(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function ur(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Kr(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), ee & 2)) {
    var s = n.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (n.pending = t),
      hr(e, r)
    );
  }
  return (
    (s = n.interleaved),
    s === null ? ((t.next = t), Pd(n)) : ((t.next = s.next), (s.next = t)),
    (n.interleaved = t),
    hr(e, r)
  );
}
function na(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    ((n &= e.pendingLanes), (r |= n), (t.lanes = r), pd(e, r));
  }
}
function yf(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var s = null,
      o = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var i = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        (o === null ? (s = o = i) : (o = o.next = i), (r = r.next));
      } while (r !== null);
      o === null ? (s = o = t) : (o = o.next = t);
    } else s = o = t;
    ((r = {
      baseState: n.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: o,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r));
    return;
  }
  ((e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t));
}
function Pa(e, t, r, n) {
  var s = e.updateQueue;
  Rr = !1;
  var o = s.firstBaseUpdate,
    i = s.lastBaseUpdate,
    a = s.shared.pending;
  if (a !== null) {
    s.shared.pending = null;
    var l = a,
      u = l.next;
    ((l.next = null), i === null ? (o = u) : (i.next = u), (i = l));
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== i &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var p = s.baseState;
    ((i = 0), (c = u = l = null), (a = o));
    do {
      var f = a.lane,
        d = a.eventTime;
      if ((n & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: d,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            y = a;
          switch (((f = t), (d = r), y.tag)) {
            case 1:
              if (((w = y.payload), typeof w == "function")) {
                p = w.call(d, p, f);
                break e;
              }
              p = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = y.payload),
                (f = typeof w == "function" ? w.call(d, p, f) : w),
                f == null)
              )
                break e;
              p = me({}, p, f);
              break e;
            case 2:
              Rr = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = s.effects),
          f === null ? (s.effects = [a]) : f.push(a));
      } else
        ((d = {
          eventTime: d,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = d), (l = p)) : (c = c.next = d),
          (i |= f));
      if (((a = a.next), a === null)) {
        if (((a = s.shared.pending), a === null)) break;
        ((f = a),
          (a = f.next),
          (f.next = null),
          (s.lastBaseUpdate = f),
          (s.shared.pending = null));
      }
    } while (!0);
    if (
      (c === null && (l = p),
      (s.baseState = l),
      (s.firstBaseUpdate = u),
      (s.lastBaseUpdate = c),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do ((i |= s.lane), (s = s.next));
      while (s !== t);
    } else o === null && (s.shared.lanes = 0);
    ((On |= i), (e.lanes = i), (e.memoizedState = p));
  }
}
function vf(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        s = n.callback;
      if (s !== null) {
        if (((n.callback = null), (n = r), typeof s != "function"))
          throw Error(A(191, s));
        s.call(n);
      }
    }
}
var hi = {},
  Jt = sn(hi),
  zo = sn(hi),
  Vo = sn(hi);
function xn(e) {
  if (e === hi) throw Error(A(174));
  return e;
}
function Nd(e, t) {
  switch ((ie(Vo, t), ie(zo, e), ie(Jt, hi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Fu(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Fu(t, e)));
  }
  (ue(Jt), ie(Jt, t));
}
function Ms() {
  (ue(Jt), ue(zo), ue(Vo));
}
function Tg(e) {
  xn(Vo.current);
  var t = xn(Jt.current),
    r = Fu(t, e.type);
  t !== r && (ie(zo, e), ie(Jt, r));
}
function jd(e) {
  zo.current === e && (ue(Jt), ue(zo));
}
var fe = sn(0);
function Ra(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var eu = [];
function Ad() {
  for (var e = 0; e < eu.length; e++)
    eu[e]._workInProgressVersionPrimary = null;
  eu.length = 0;
}
var sa = gr.ReactCurrentDispatcher,
  tu = gr.ReactCurrentBatchConfig,
  An = 0,
  pe = null,
  ke = null,
  Pe = null,
  Na = !1,
  _o = !1,
  Wo = 0,
  W1 = 0;
function Me() {
  throw Error(A(321));
}
function Od(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!Dt(e[r], t[r])) return !1;
  return !0;
}
function Id(e, t, r, n, s, o) {
  if (
    ((An = o),
    (pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (sa.current = e === null || e.memoizedState === null ? G1 : Q1),
    (e = r(n, s)),
    _o)
  ) {
    o = 0;
    do {
      if (((_o = !1), (Wo = 0), 25 <= o)) throw Error(A(301));
      ((o += 1),
        (Pe = ke = null),
        (t.updateQueue = null),
        (sa.current = J1),
        (e = r(n, s)));
    } while (_o);
  }
  if (
    ((sa.current = ja),
    (t = ke !== null && ke.next !== null),
    (An = 0),
    (Pe = ke = pe = null),
    (Na = !1),
    t)
  )
    throw Error(A(300));
  return e;
}
function Ld() {
  var e = Wo !== 0;
  return ((Wo = 0), e);
}
function Vt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (Pe === null ? (pe.memoizedState = Pe = e) : (Pe = Pe.next = e), Pe);
}
function bt() {
  if (ke === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ke.next;
  var t = Pe === null ? pe.memoizedState : Pe.next;
  if (t !== null) ((Pe = t), (ke = e));
  else {
    if (e === null) throw Error(A(310));
    ((ke = e),
      (e = {
        memoizedState: ke.memoizedState,
        baseState: ke.baseState,
        baseQueue: ke.baseQueue,
        queue: ke.queue,
        next: null,
      }),
      Pe === null ? (pe.memoizedState = Pe = e) : (Pe = Pe.next = e));
  }
  return Pe;
}
function Ho(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ru(e) {
  var t = bt(),
    r = t.queue;
  if (r === null) throw Error(A(311));
  r.lastRenderedReducer = e;
  var n = ke,
    s = n.baseQueue,
    o = r.pending;
  if (o !== null) {
    if (s !== null) {
      var i = s.next;
      ((s.next = o.next), (o.next = i));
    }
    ((n.baseQueue = s = o), (r.pending = null));
  }
  if (s !== null) {
    ((o = s.next), (n = n.baseState));
    var a = (i = null),
      l = null,
      u = o;
    do {
      var c = u.lane;
      if ((An & c) === c)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (n = u.hasEagerState ? u.eagerState : e(n, u.action)));
      else {
        var p = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (l === null ? ((a = l = p), (i = n)) : (l = l.next = p),
          (pe.lanes |= c),
          (On |= c));
      }
      u = u.next;
    } while (u !== null && u !== o);
    (l === null ? (i = n) : (l.next = a),
      Dt(n, t.memoizedState) || (Je = !0),
      (t.memoizedState = n),
      (t.baseState = i),
      (t.baseQueue = l),
      (r.lastRenderedState = n));
  }
  if (((e = r.interleaved), e !== null)) {
    s = e;
    do ((o = s.lane), (pe.lanes |= o), (On |= o), (s = s.next));
    while (s !== e);
  } else s === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function nu(e) {
  var t = bt(),
    r = t.queue;
  if (r === null) throw Error(A(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    s = r.pending,
    o = t.memoizedState;
  if (s !== null) {
    r.pending = null;
    var i = (s = s.next);
    do ((o = e(o, i.action)), (i = i.next));
    while (i !== s);
    (Dt(o, t.memoizedState) || (Je = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (r.lastRenderedState = o));
  }
  return [o, n];
}
function Pg() {}
function Rg(e, t) {
  var r = pe,
    n = bt(),
    s = t(),
    o = !Dt(n.memoizedState, s);
  if (
    (o && ((n.memoizedState = s), (Je = !0)),
    (n = n.queue),
    $d(Ag.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || o || (Pe !== null && Pe.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      qo(9, jg.bind(null, r, n, s, t), void 0, null),
      Re === null)
    )
      throw Error(A(349));
    An & 30 || Ng(r, t, s);
  }
  return s;
}
function Ng(e, t, r) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e)));
}
function jg(e, t, r, n) {
  ((t.value = r), (t.getSnapshot = n), Og(t) && Ig(e));
}
function Ag(e, t, r) {
  return r(function () {
    Og(t) && Ig(e);
  });
}
function Og(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !Dt(e, r);
  } catch {
    return !0;
  }
}
function Ig(e) {
  var t = hr(e, 1);
  t !== null && Mt(t, e, 1, -1);
}
function wf(e) {
  var t = Vt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ho,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = K1.bind(null, pe, e)),
    [t.memoizedState, e]
  );
}
function qo(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function Lg() {
  return bt().memoizedState;
}
function oa(e, t, r, n) {
  var s = Vt();
  ((pe.flags |= e),
    (s.memoizedState = qo(1 | t, r, void 0, n === void 0 ? null : n)));
}
function rl(e, t, r, n) {
  var s = bt();
  n = n === void 0 ? null : n;
  var o = void 0;
  if (ke !== null) {
    var i = ke.memoizedState;
    if (((o = i.destroy), n !== null && Od(n, i.deps))) {
      s.memoizedState = qo(t, r, o, n);
      return;
    }
  }
  ((pe.flags |= e), (s.memoizedState = qo(1 | t, r, o, n)));
}
function xf(e, t) {
  return oa(8390656, 8, e, t);
}
function $d(e, t) {
  return rl(2048, 8, e, t);
}
function $g(e, t) {
  return rl(4, 2, e, t);
}
function Mg(e, t) {
  return rl(4, 4, e, t);
}
function Dg(e, t) {
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
function Fg(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null),
    rl(4, 4, Dg.bind(null, t, e), r)
  );
}
function Md() {}
function Ug(e, t) {
  var r = bt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Od(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function Bg(e, t) {
  var r = bt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Od(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function zg(e, t, r) {
  return An & 21
    ? (Dt(r, t) || ((r = Km()), (pe.lanes |= r), (On |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Je = !0)), (e.memoizedState = r));
}
function H1(e, t) {
  var r = ne;
  ((ne = r !== 0 && 4 > r ? r : 4), e(!0));
  var n = tu.transition;
  tu.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((ne = r), (tu.transition = n));
  }
}
function Vg() {
  return bt().memoizedState;
}
function q1(e, t, r) {
  var n = Qr(e);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Wg(e))
  )
    Hg(t, r);
  else if (((r = kg(e, t, r, n)), r !== null)) {
    var s = He();
    (Mt(r, e, n, s), qg(r, t, n));
  }
}
function K1(e, t, r) {
  var n = Qr(e),
    s = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (Wg(e)) Hg(t, s);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = o(i, r);
        if (((s.hasEagerState = !0), (s.eagerState = a), Dt(a, i))) {
          var l = t.interleaved;
          (l === null
            ? ((s.next = s), Pd(t))
            : ((s.next = l.next), (l.next = s)),
            (t.interleaved = s));
          return;
        }
      } catch {
      } finally {
      }
    ((r = kg(e, t, s, n)),
      r !== null && ((s = He()), Mt(r, e, n, s), qg(r, t, n)));
  }
}
function Wg(e) {
  var t = e.alternate;
  return e === pe || (t !== null && t === pe);
}
function Hg(e, t) {
  _o = Na = !0;
  var r = e.pending;
  (r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t));
}
function qg(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    ((n &= e.pendingLanes), (r |= n), (t.lanes = r), pd(e, r));
  }
}
var ja = {
    readContext: xt,
    useCallback: Me,
    useContext: Me,
    useEffect: Me,
    useImperativeHandle: Me,
    useInsertionEffect: Me,
    useLayoutEffect: Me,
    useMemo: Me,
    useReducer: Me,
    useRef: Me,
    useState: Me,
    useDebugValue: Me,
    useDeferredValue: Me,
    useTransition: Me,
    useMutableSource: Me,
    useSyncExternalStore: Me,
    useId: Me,
    unstable_isNewReconciler: !1,
  },
  G1 = {
    readContext: xt,
    useCallback: function (e, t) {
      return ((Vt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: xt,
    useEffect: xf,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        oa(4194308, 4, Dg.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return oa(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return oa(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = Vt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (r.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, r) {
      var n = Vt();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = q1.bind(null, pe, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Vt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: wf,
    useDebugValue: Md,
    useDeferredValue: function (e) {
      return (Vt().memoizedState = e);
    },
    useTransition: function () {
      var e = wf(!1),
        t = e[0];
      return ((e = H1.bind(null, e[1])), (Vt().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = pe,
        s = Vt();
      if (de) {
        if (r === void 0) throw Error(A(407));
        r = r();
      } else {
        if (((r = t()), Re === null)) throw Error(A(349));
        An & 30 || Ng(n, t, r);
      }
      s.memoizedState = r;
      var o = { value: r, getSnapshot: t };
      return (
        (s.queue = o),
        xf(Ag.bind(null, n, o, e), [e]),
        (n.flags |= 2048),
        qo(9, jg.bind(null, n, o, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = Vt(),
        t = Re.identifierPrefix;
      if (de) {
        var r = lr,
          n = ar;
        ((r = (n & ~(1 << (32 - $t(n) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = Wo++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":"));
      } else ((r = W1++), (t = ":" + t + "r" + r.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Q1 = {
    readContext: xt,
    useCallback: Ug,
    useContext: xt,
    useEffect: $d,
    useImperativeHandle: Fg,
    useInsertionEffect: $g,
    useLayoutEffect: Mg,
    useMemo: Bg,
    useReducer: ru,
    useRef: Lg,
    useState: function () {
      return ru(Ho);
    },
    useDebugValue: Md,
    useDeferredValue: function (e) {
      var t = bt();
      return zg(t, ke.memoizedState, e);
    },
    useTransition: function () {
      var e = ru(Ho)[0],
        t = bt().memoizedState;
      return [e, t];
    },
    useMutableSource: Pg,
    useSyncExternalStore: Rg,
    useId: Vg,
    unstable_isNewReconciler: !1,
  },
  J1 = {
    readContext: xt,
    useCallback: Ug,
    useContext: xt,
    useEffect: $d,
    useImperativeHandle: Fg,
    useInsertionEffect: $g,
    useLayoutEffect: Mg,
    useMemo: Bg,
    useReducer: nu,
    useRef: Lg,
    useState: function () {
      return nu(Ho);
    },
    useDebugValue: Md,
    useDeferredValue: function (e) {
      var t = bt();
      return ke === null ? (t.memoizedState = e) : zg(t, ke.memoizedState, e);
    },
    useTransition: function () {
      var e = nu(Ho)[0],
        t = bt().memoizedState;
      return [e, t];
    },
    useMutableSource: Pg,
    useSyncExternalStore: Rg,
    useId: Vg,
    unstable_isNewReconciler: !1,
  };
function Pt(e, t) {
  if (e && e.defaultProps) {
    ((t = me({}, t)), (e = e.defaultProps));
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function ic(e, t, r, n) {
  ((t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : me({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r));
}
var nl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Mn(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = He(),
      s = Qr(e),
      o = ur(n, s);
    ((o.payload = t),
      r != null && (o.callback = r),
      (t = Kr(e, o, s)),
      t !== null && (Mt(t, e, s, n), na(t, e, s)));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = He(),
      s = Qr(e),
      o = ur(n, s);
    ((o.tag = 1),
      (o.payload = t),
      r != null && (o.callback = r),
      (t = Kr(e, o, s)),
      t !== null && (Mt(t, e, s, n), na(t, e, s)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = He(),
      n = Qr(e),
      s = ur(r, n);
    ((s.tag = 2),
      t != null && (s.callback = t),
      (t = Kr(e, s, n)),
      t !== null && (Mt(t, e, n, r), na(t, e, n)));
  },
};
function bf(e, t, r, n, s, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Do(r, n) || !Do(s, o)
        : !0
  );
}
function Kg(e, t, r) {
  var n = !1,
    s = Xr,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = xt(o))
      : ((s = Xe(t) ? Nn : Be.current),
        (n = t.contextTypes),
        (o = (n = n != null) ? Is(e, s) : Xr)),
    (t = new t(r, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = nl),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function _f(e, t, r, n) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && nl.enqueueReplaceState(t, t.state, null));
}
function ac(e, t, r, n) {
  var s = e.stateNode;
  ((s.props = r), (s.state = e.memoizedState), (s.refs = {}), Rd(e));
  var o = t.contextType;
  (typeof o == "object" && o !== null
    ? (s.context = xt(o))
    : ((o = Xe(t) ? Nn : Be.current), (s.context = Is(e, o))),
    (s.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (ic(e, t, o, r), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && nl.enqueueReplaceState(s, s.state, null),
      Pa(e, r, s, n),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308));
}
function Ds(e, t) {
  try {
    var r = "",
      n = t;
    do ((r += Sw(n)), (n = n.return));
    while (n);
    var s = r;
  } catch (o) {
    s =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function su(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function lc(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var Y1 = typeof WeakMap == "function" ? WeakMap : Map;
function Gg(e, t, r) {
  ((r = ur(-1, r)), (r.tag = 3), (r.payload = { element: null }));
  var n = t.value;
  return (
    (r.callback = function () {
      (Oa || ((Oa = !0), (vc = n)), lc(e, t));
    }),
    r
  );
}
function Qg(e, t, r) {
  ((r = ur(-1, r)), (r.tag = 3));
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var s = t.value;
    ((r.payload = function () {
      return n(s);
    }),
      (r.callback = function () {
        lc(e, t);
      }));
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (r.callback = function () {
        (lc(e, t),
          typeof n != "function" &&
            (Gr === null ? (Gr = new Set([this])) : Gr.add(this)));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    r
  );
}
function Ef(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new Y1();
    var s = new Set();
    n.set(t, s);
  } else ((s = n.get(t)), s === void 0 && ((s = new Set()), n.set(t, s)));
  s.has(r) || (s.add(r), (e = dx.bind(null, e, t, r)), t.then(e, e));
}
function Sf(e) {
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
function kf(e, t, r, n, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = ur(-1, 1)), (t.tag = 2), Kr(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var X1 = gr.ReactCurrentOwner,
  Je = !1;
function Ve(e, t, r, n) {
  t.child = e === null ? Sg(t, null, r, n) : $s(t, e.child, r, n);
}
function Cf(e, t, r, n, s) {
  r = r.render;
  var o = t.ref;
  return (
    ws(t, s),
    (n = Id(e, t, r, n, o, s)),
    (r = Ld()),
    e !== null && !Je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        fr(e, t, s))
      : (de && r && _d(t), (t.flags |= 1), Ve(e, t, n, s), t.child)
  );
}
function Tf(e, t, r, n, s) {
  if (e === null) {
    var o = r.type;
    return typeof o == "function" &&
      !Hd(o) &&
      o.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Jg(e, t, o, n, s))
      : ((e = ua(r.type, null, n, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & s))) {
    var i = o.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : Do), r(i, n) && e.ref === t.ref)
    )
      return fr(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = Jr(o, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Jg(e, t, r, n, s) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Do(o, n) && e.ref === t.ref)
      if (((Je = !1), (t.pendingProps = n = o), (e.lanes & s) !== 0))
        e.flags & 131072 && (Je = !0);
      else return ((t.lanes = e.lanes), fr(e, t, s));
  }
  return uc(e, t, r, n, s);
}
function Yg(e, t, r) {
  var n = t.pendingProps,
    s = n.children,
    o = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ie(fs, nt),
        (nt |= r));
    else {
      if (!(r & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ie(fs, nt),
          (nt |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = o !== null ? o.baseLanes : r),
        ie(fs, nt),
        (nt |= n));
    }
  else
    (o !== null ? ((n = o.baseLanes | r), (t.memoizedState = null)) : (n = r),
      ie(fs, nt),
      (nt |= n));
  return (Ve(e, t, s, r), t.child);
}
function Xg(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function uc(e, t, r, n, s) {
  var o = Xe(r) ? Nn : Be.current;
  return (
    (o = Is(t, o)),
    ws(t, s),
    (r = Id(e, t, r, n, o, s)),
    (n = Ld()),
    e !== null && !Je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        fr(e, t, s))
      : (de && n && _d(t), (t.flags |= 1), Ve(e, t, r, s), t.child)
  );
}
function Pf(e, t, r, n, s) {
  if (Xe(r)) {
    var o = !0;
    Ea(t);
  } else o = !1;
  if ((ws(t, s), t.stateNode === null))
    (ia(e, t), Kg(t, r, n), ac(t, r, n, s), (n = !0));
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var l = i.context,
      u = r.contextType;
    typeof u == "object" && u !== null
      ? (u = xt(u))
      : ((u = Xe(r) ? Nn : Be.current), (u = Is(t, u)));
    var c = r.getDerivedStateFromProps,
      p =
        typeof c == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    (p ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== n || l !== u) && _f(t, i, n, u)),
      (Rr = !1));
    var f = t.memoizedState;
    ((i.state = f),
      Pa(t, n, i, s),
      (l = t.memoizedState),
      a !== n || f !== l || Ye.current || Rr
        ? (typeof c == "function" && (ic(t, r, c, n), (l = t.memoizedState)),
          (a = Rr || bf(t, r, a, n, f, l, u))
            ? (p ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = l)),
          (i.props = n),
          (i.state = l),
          (i.context = u),
          (n = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (n = !1)));
  } else {
    ((i = t.stateNode),
      Cg(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Pt(t.type, a)),
      (i.props = u),
      (p = t.pendingProps),
      (f = i.context),
      (l = r.contextType),
      typeof l == "object" && l !== null
        ? (l = xt(l))
        : ((l = Xe(r) ? Nn : Be.current), (l = Is(t, l))));
    var d = r.getDerivedStateFromProps;
    ((c =
      typeof d == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== p || f !== l) && _f(t, i, n, l)),
      (Rr = !1),
      (f = t.memoizedState),
      (i.state = f),
      Pa(t, n, i, s));
    var w = t.memoizedState;
    a !== p || f !== w || Ye.current || Rr
      ? (typeof d == "function" && (ic(t, r, d, n), (w = t.memoizedState)),
        (u = Rr || bf(t, r, u, n, f, w, l) || !1)
          ? (c ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(n, w, l),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(n, w, l)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = w)),
        (i.props = n),
        (i.state = w),
        (i.context = l),
        (n = u))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return cc(e, t, r, n, o, s);
}
function cc(e, t, r, n, s, o) {
  Xg(e, t);
  var i = (t.flags & 128) !== 0;
  if (!n && !i) return (s && ff(t, r, !1), fr(e, t, o));
  ((n = t.stateNode), (X1.current = t));
  var a =
    i && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = $s(t, e.child, null, o)), (t.child = $s(t, null, a, o)))
      : Ve(e, t, a, o),
    (t.memoizedState = n.state),
    s && ff(t, r, !0),
    t.child
  );
}
function Zg(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? hf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && hf(e, t.context, !1),
    Nd(e, t.containerInfo));
}
function Rf(e, t, r, n, s) {
  return (Ls(), Sd(s), (t.flags |= 256), Ve(e, t, r, n), t.child);
}
var dc = { dehydrated: null, treeContext: null, retryLane: 0 };
function hc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function e0(e, t, r) {
  var n = t.pendingProps,
    s = fe.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    ie(fe, s & 1),
    e === null)
  )
    return (
      sc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = n.children),
          (e = n.fallback),
          o
            ? ((n = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(n & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = il(i, n, 0, null)),
              (e = Rn(e, n, r, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = hc(r)),
              (t.memoizedState = dc),
              e)
            : Dd(t, i))
    );
  if (((s = e.memoizedState), s !== null && ((a = s.dehydrated), a !== null)))
    return Z1(e, t, i, n, a, s, r);
  if (o) {
    ((o = n.fallback), (i = t.mode), (s = e.child), (a = s.sibling));
    var l = { mode: "hidden", children: n.children };
    return (
      !(i & 1) && t.child !== s
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = l),
          (t.deletions = null))
        : ((n = Jr(s, l)), (n.subtreeFlags = s.subtreeFlags & 14680064)),
      a !== null ? (o = Jr(a, o)) : ((o = Rn(o, i, r, null)), (o.flags |= 2)),
      (o.return = t),
      (n.return = t),
      (n.sibling = o),
      (t.child = n),
      (n = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? hc(r)
          : {
              baseLanes: i.baseLanes | r,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~r),
      (t.memoizedState = dc),
      n
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (n = Jr(o, { mode: "visible", children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function Dd(e, t) {
  return (
    (t = il({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Li(e, t, r, n) {
  return (
    n !== null && Sd(n),
    $s(t, e.child, null, r),
    (e = Dd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Z1(e, t, r, n, s, o, i) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = su(Error(A(422)))), Li(e, t, i, n))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = n.fallback),
          (s = t.mode),
          (n = il({ mode: "visible", children: n.children }, s, 0, null)),
          (o = Rn(o, s, i, null)),
          (o.flags |= 2),
          (n.return = t),
          (o.return = t),
          (n.sibling = o),
          (t.child = n),
          t.mode & 1 && $s(t, e.child, null, i),
          (t.child.memoizedState = hc(i)),
          (t.memoizedState = dc),
          o);
  if (!(t.mode & 1)) return Li(e, t, i, null);
  if (s.data === "$!") {
    if (((n = s.nextSibling && s.nextSibling.dataset), n)) var a = n.dgst;
    return (
      (n = a),
      (o = Error(A(419))),
      (n = su(o, n, void 0)),
      Li(e, t, i, n)
    );
  }
  if (((a = (i & e.childLanes) !== 0), Je || a)) {
    if (((n = Re), n !== null)) {
      switch (i & -i) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
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
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      ((s = s & (n.suspendedLanes | i) ? 0 : s),
        s !== 0 &&
          s !== o.retryLane &&
          ((o.retryLane = s), hr(e, s), Mt(n, e, s, -1)));
    }
    return (Wd(), (n = su(Error(A(421)))), Li(e, t, i, n));
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = hx.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (at = qr(s.nextSibling)),
      (lt = t),
      (de = !0),
      (Lt = null),
      e !== null &&
        ((gt[yt++] = ar),
        (gt[yt++] = lr),
        (gt[yt++] = jn),
        (ar = e.id),
        (lr = e.overflow),
        (jn = t)),
      (t = Dd(t, n.children)),
      (t.flags |= 4096),
      t);
}
function Nf(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  (n !== null && (n.lanes |= t), oc(e.return, t, r));
}
function ou(e, t, r, n, s) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: s,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = n),
      (o.tail = r),
      (o.tailMode = s));
}
function t0(e, t, r) {
  var n = t.pendingProps,
    s = n.revealOrder,
    o = n.tail;
  if ((Ve(e, t, n.children, r), (n = fe.current), n & 2))
    ((n = (n & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Nf(e, r, t);
        else if (e.tag === 19) Nf(e, r, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    n &= 1;
  }
  if ((ie(fe, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (r = t.child, s = null; r !== null; )
          ((e = r.alternate),
            e !== null && Ra(e) === null && (s = r),
            (r = r.sibling));
        ((r = s),
          r === null
            ? ((s = t.child), (t.child = null))
            : ((s = r.sibling), (r.sibling = null)),
          ou(t, !1, s, r, o));
        break;
      case "backwards":
        for (r = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && Ra(e) === null)) {
            t.child = s;
            break;
          }
          ((e = s.sibling), (s.sibling = r), (r = s), (s = e));
        }
        ou(t, !0, r, null, o);
        break;
      case "together":
        ou(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ia(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function fr(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (On |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (
      e = t.child, r = Jr(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (r = r.sibling = Jr(e, e.pendingProps)),
        (r.return = t));
    r.sibling = null;
  }
  return t.child;
}
function ex(e, t, r) {
  switch (t.tag) {
    case 3:
      (Zg(t), Ls());
      break;
    case 5:
      Tg(t);
      break;
    case 1:
      Xe(t.type) && Ea(t);
      break;
    case 4:
      Nd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        s = t.memoizedProps.value;
      (ie(Ca, n._currentValue), (n._currentValue = s));
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (ie(fe, fe.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
            ? e0(e, t, r)
            : (ie(fe, fe.current & 1),
              (e = fr(e, t, r)),
              e !== null ? e.sibling : null);
      ie(fe, fe.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return t0(e, t, r);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        ie(fe, fe.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Yg(e, t, r));
  }
  return fr(e, t, r);
}
var r0, fc, n0, s0;
r0 = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      ((r.child.return = r), (r = r.child));
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    ((r.sibling.return = r.return), (r = r.sibling));
  }
};
fc = function () {};
n0 = function (e, t, r, n) {
  var s = e.memoizedProps;
  if (s !== n) {
    ((e = t.stateNode), xn(Jt.current));
    var o = null;
    switch (r) {
      case "input":
        ((s = Lu(e, s)), (n = Lu(e, n)), (o = []));
        break;
      case "select":
        ((s = me({}, s, { value: void 0 })),
          (n = me({}, n, { value: void 0 })),
          (o = []));
        break;
      case "textarea":
        ((s = Du(e, s)), (n = Du(e, n)), (o = []));
        break;
      default:
        typeof s.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = ba);
    }
    Uu(r, n);
    var i;
    r = null;
    for (u in s)
      if (!n.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
        if (u === "style") {
          var a = s[u];
          for (i in a) a.hasOwnProperty(i) && (r || (r = {}), (r[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (jo.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in n) {
      var l = n[u];
      if (
        ((a = s != null ? s[u] : void 0),
        n.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (l && l.hasOwnProperty(i)) ||
                (r || (r = {}), (r[i] = ""));
            for (i in l)
              l.hasOwnProperty(i) &&
                a[i] !== l[i] &&
                (r || (r = {}), (r[i] = l[i]));
          } else (r || (o || (o = []), o.push(u, r)), (r = l));
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (o = o || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (jo.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && le("scroll", e),
                    o || a === l || (o = []))
                  : (o = o || []).push(u, l));
    }
    r && (o = o || []).push("style", r);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
s0 = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function ao(e, t) {
  if (!de)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          (t.alternate !== null && (r = t), (t = t.sibling));
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; )
          (r.alternate !== null && (n = r), (r = r.sibling));
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function De(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var s = e.child; s !== null; )
      ((r |= s.lanes | s.childLanes),
        (n |= s.subtreeFlags & 14680064),
        (n |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling));
  else
    for (s = e.child; s !== null; )
      ((r |= s.lanes | s.childLanes),
        (n |= s.subtreeFlags),
        (n |= s.flags),
        (s.return = e),
        (s = s.sibling));
  return ((e.subtreeFlags |= n), (e.childLanes = r), t);
}
function tx(e, t, r) {
  var n = t.pendingProps;
  switch ((Ed(t), t.tag)) {
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
      return (De(t), null);
    case 1:
      return (Xe(t.type) && _a(), De(t), null);
    case 3:
      return (
        (n = t.stateNode),
        Ms(),
        ue(Ye),
        ue(Be),
        Ad(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (Oi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Lt !== null && (bc(Lt), (Lt = null)))),
        fc(e, t),
        De(t),
        null
      );
    case 5:
      jd(t);
      var s = xn(Vo.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        (n0(e, t, r, n, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(A(166));
          return (De(t), null);
        }
        if (((e = xn(Jt.current)), Oi(t))) {
          ((n = t.stateNode), (r = t.type));
          var o = t.memoizedProps;
          switch (((n[Kt] = t), (n[Bo] = o), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              (le("cancel", n), le("close", n));
              break;
            case "iframe":
            case "object":
            case "embed":
              le("load", n);
              break;
            case "video":
            case "audio":
              for (s = 0; s < mo.length; s++) le(mo[s], n);
              break;
            case "source":
              le("error", n);
              break;
            case "img":
            case "image":
            case "link":
              (le("error", n), le("load", n));
              break;
            case "details":
              le("toggle", n);
              break;
            case "input":
              (Dh(n, o), le("invalid", n));
              break;
            case "select":
              ((n._wrapperState = { wasMultiple: !!o.multiple }),
                le("invalid", n));
              break;
            case "textarea":
              (Uh(n, o), le("invalid", n));
          }
          (Uu(r, o), (s = null));
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children"
                ? typeof a == "string"
                  ? n.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ai(n.textContent, a, e),
                    (s = ["children", a]))
                  : typeof a == "number" &&
                    n.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ai(n.textContent, a, e),
                    (s = ["children", "" + a]))
                : jo.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  le("scroll", n);
            }
          switch (r) {
            case "input":
              (Si(n), Fh(n, o, !0));
              break;
            case "textarea":
              (Si(n), Bh(n));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (n.onclick = ba);
          }
          ((n = s), (t.updateQueue = n), n !== null && (t.flags |= 4));
        } else {
          ((i = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Am(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                  ? (e = i.createElement(r, { is: n.is }))
                  : ((e = i.createElement(r)),
                    r === "select" &&
                      ((i = e),
                      n.multiple
                        ? (i.multiple = !0)
                        : n.size && (i.size = n.size)))
              : (e = i.createElementNS(e, r)),
            (e[Kt] = t),
            (e[Bo] = n),
            r0(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((i = Bu(r, n)), r)) {
              case "dialog":
                (le("cancel", e), le("close", e), (s = n));
                break;
              case "iframe":
              case "object":
              case "embed":
                (le("load", e), (s = n));
                break;
              case "video":
              case "audio":
                for (s = 0; s < mo.length; s++) le(mo[s], e);
                s = n;
                break;
              case "source":
                (le("error", e), (s = n));
                break;
              case "img":
              case "image":
              case "link":
                (le("error", e), le("load", e), (s = n));
                break;
              case "details":
                (le("toggle", e), (s = n));
                break;
              case "input":
                (Dh(e, n), (s = Lu(e, n)), le("invalid", e));
                break;
              case "option":
                s = n;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!n.multiple }),
                  (s = me({}, n, { value: void 0 })),
                  le("invalid", e));
                break;
              case "textarea":
                (Uh(e, n), (s = Du(e, n)), le("invalid", e));
                break;
              default:
                s = n;
            }
            (Uu(r, s), (a = s));
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? Lm(e, l)
                  : o === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Om(e, l))
                    : o === "children"
                      ? typeof l == "string"
                        ? (r !== "textarea" || l !== "") && Ao(e, l)
                        : typeof l == "number" && Ao(e, "" + l)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (jo.hasOwnProperty(o)
                          ? l != null && o === "onScroll" && le("scroll", e)
                          : l != null && ld(e, o, l, i));
              }
            switch (r) {
              case "input":
                (Si(e), Fh(e, n, !1));
                break;
              case "textarea":
                (Si(e), Bh(e));
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + Yr(n.value));
                break;
              case "select":
                ((e.multiple = !!n.multiple),
                  (o = n.value),
                  o != null
                    ? ms(e, !!n.multiple, o, !1)
                    : n.defaultValue != null &&
                      ms(e, !!n.multiple, n.defaultValue, !0));
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = ba);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (De(t), null);
    case 6:
      if (e && t.stateNode != null) s0(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(A(166));
        if (((r = xn(Vo.current)), xn(Jt.current), Oi(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[Kt] = t),
            (o = n.nodeValue !== r) && ((e = lt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ai(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ai(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          ((n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[Kt] = t),
            (t.stateNode = n));
      }
      return (De(t), null);
    case 13:
      if (
        (ue(fe),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (de && at !== null && t.mode & 1 && !(t.flags & 128))
          (_g(), Ls(), (t.flags |= 98560), (o = !1));
        else if (((o = Oi(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(A(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(A(317));
            o[Kt] = t;
          } else
            (Ls(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (De(t), (o = !1));
        } else (Lt !== null && (bc(Lt), (Lt = null)), (o = !0));
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || fe.current & 1 ? Te === 0 && (Te = 3) : Wd())),
          t.updateQueue !== null && (t.flags |= 4),
          De(t),
          null);
    case 4:
      return (
        Ms(),
        fc(e, t),
        e === null && Fo(t.stateNode.containerInfo),
        De(t),
        null
      );
    case 10:
      return (Td(t.type._context), De(t), null);
    case 17:
      return (Xe(t.type) && _a(), De(t), null);
    case 19:
      if ((ue(fe), (o = t.memoizedState), o === null)) return (De(t), null);
      if (((n = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (n) ao(o, !1);
        else {
          if (Te !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Ra(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    ao(o, !1),
                    n = i.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;
                )
                  ((o = r),
                    (e = n),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling));
                return (ie(fe, (fe.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          o.tail !== null &&
            we() > Fs &&
            ((t.flags |= 128), (n = !0), ao(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = Ra(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              ao(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !de)
            )
              return (De(t), null);
          } else
            2 * we() - o.renderingStartTime > Fs &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), ao(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((r = o.last),
            r !== null ? (r.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = we()),
          (t.sibling = null),
          (r = fe.current),
          ie(fe, n ? (r & 1) | 2 : r & 1),
          t)
        : (De(t), null);
    case 22:
    case 23:
      return (
        Vd(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? nt & 1073741824 && (De(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : De(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function rx(e, t) {
  switch ((Ed(t), t.tag)) {
    case 1:
      return (
        Xe(t.type) && _a(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ms(),
        ue(Ye),
        ue(Be),
        Ad(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (jd(t), null);
    case 13:
      if (
        (ue(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(A(340));
        Ls();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (ue(fe), null);
    case 4:
      return (Ms(), null);
    case 10:
      return (Td(t.type._context), null);
    case 22:
    case 23:
      return (Vd(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var $i = !1,
  Ue = !1,
  nx = typeof WeakSet == "function" ? WeakSet : Set,
  F = null;
function hs(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        ve(e, t, n);
      }
    else r.current = null;
}
function pc(e, t, r) {
  try {
    r();
  } catch (n) {
    ve(e, t, n);
  }
}
var jf = !1;
function sx(e, t) {
  if (((Yu = va), (e = ug()), bd(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var s = n.anchorOffset,
            o = n.focusNode;
          n = n.focusOffset;
          try {
            (r.nodeType, o.nodeType);
          } catch {
            r = null;
            break e;
          }
          var i = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            p = e,
            f = null;
          t: for (;;) {
            for (
              var d;
              p !== r || (s !== 0 && p.nodeType !== 3) || (a = i + s),
                p !== o || (n !== 0 && p.nodeType !== 3) || (l = i + n),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (d = p.firstChild) !== null;
            )
              ((f = p), (p = d));
            for (;;) {
              if (p === e) break t;
              if (
                (f === r && ++u === s && (a = i),
                f === o && ++c === n && (l = i),
                (d = p.nextSibling) !== null)
              )
                break;
              ((p = f), (f = p.parentNode));
            }
            p = d;
          }
          r = a === -1 || l === -1 ? null : { start: a, end: l };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (Xu = { focusedElem: e, selectionRange: r }, va = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (F = e));
    else
      for (; F !== null; ) {
        t = F;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var y = w.memoizedProps,
                    x = w.memoizedState,
                    g = t.stateNode,
                    m = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Pt(t.type, y),
                      x,
                    );
                  g.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(A(163));
            }
        } catch (b) {
          ve(t, t.return, b);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (F = e));
          break;
        }
        F = t.return;
      }
  return ((w = jf), (jf = !1), w);
}
function Eo(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var s = (n = n.next);
    do {
      if ((s.tag & e) === e) {
        var o = s.destroy;
        ((s.destroy = void 0), o !== void 0 && pc(t, r, o));
      }
      s = s.next;
    } while (s !== n);
  }
}
function sl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function mc(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function o0(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), o0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Kt], delete t[Bo], delete t[tc], delete t[U1], delete t[B1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function i0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Af(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || i0(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function gc(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    ((e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = ba)));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (gc(e, t, r), e = e.sibling; e !== null; )
      (gc(e, t, r), (e = e.sibling));
}
function yc(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    ((e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (yc(e, t, r), e = e.sibling; e !== null; )
      (yc(e, t, r), (e = e.sibling));
}
var Ae = null,
  Ot = !1;
function Sr(e, t, r) {
  for (r = r.child; r !== null; ) (a0(e, t, r), (r = r.sibling));
}
function a0(e, t, r) {
  if (Qt && typeof Qt.onCommitFiberUnmount == "function")
    try {
      Qt.onCommitFiberUnmount(Ja, r);
    } catch {}
  switch (r.tag) {
    case 5:
      Ue || hs(r, t);
    case 6:
      var n = Ae,
        s = Ot;
      ((Ae = null),
        Sr(e, t, r),
        (Ae = n),
        (Ot = s),
        Ae !== null &&
          (Ot
            ? ((e = Ae),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : Ae.removeChild(r.stateNode)));
      break;
    case 18:
      Ae !== null &&
        (Ot
          ? ((e = Ae),
            (r = r.stateNode),
            e.nodeType === 8
              ? Xl(e.parentNode, r)
              : e.nodeType === 1 && Xl(e, r),
            $o(e))
          : Xl(Ae, r.stateNode));
      break;
    case 4:
      ((n = Ae),
        (s = Ot),
        (Ae = r.stateNode.containerInfo),
        (Ot = !0),
        Sr(e, t, r),
        (Ae = n),
        (Ot = s));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ue &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        s = n = n.next;
        do {
          var o = s,
            i = o.destroy;
          ((o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && pc(r, t, i),
            (s = s.next));
        } while (s !== n);
      }
      Sr(e, t, r);
      break;
    case 1:
      if (
        !Ue &&
        (hs(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          ((n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount());
        } catch (a) {
          ve(r, t, a);
        }
      Sr(e, t, r);
      break;
    case 21:
      Sr(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((Ue = (n = Ue) || r.memoizedState !== null), Sr(e, t, r), (Ue = n))
        : Sr(e, t, r);
      break;
    default:
      Sr(e, t, r);
  }
}
function Of(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    (r === null && (r = e.stateNode = new nx()),
      t.forEach(function (n) {
        var s = fx.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(s, s));
      }));
  }
}
function kt(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var s = r[n];
      try {
        var o = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((Ae = a.stateNode), (Ot = !1));
              break e;
            case 3:
              ((Ae = a.stateNode.containerInfo), (Ot = !0));
              break e;
            case 4:
              ((Ae = a.stateNode.containerInfo), (Ot = !0));
              break e;
          }
          a = a.return;
        }
        if (Ae === null) throw Error(A(160));
        (a0(o, i, s), (Ae = null), (Ot = !1));
        var l = s.alternate;
        (l !== null && (l.return = null), (s.return = null));
      } catch (u) {
        ve(s, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (l0(t, e), (t = t.sibling));
}
function l0(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((kt(t, e), zt(e), n & 4)) {
        try {
          (Eo(3, e, e.return), sl(3, e));
        } catch (y) {
          ve(e, e.return, y);
        }
        try {
          Eo(5, e, e.return);
        } catch (y) {
          ve(e, e.return, y);
        }
      }
      break;
    case 1:
      (kt(t, e), zt(e), n & 512 && r !== null && hs(r, r.return));
      break;
    case 5:
      if (
        (kt(t, e),
        zt(e),
        n & 512 && r !== null && hs(r, r.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          Ao(s, "");
        } catch (y) {
          ve(e, e.return, y);
        }
      }
      if (n & 4 && ((s = e.stateNode), s != null)) {
        var o = e.memoizedProps,
          i = r !== null ? r.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (a === "input" && o.type === "radio" && o.name != null && Nm(s, o),
              Bu(a, i));
            var u = Bu(a, o);
            for (i = 0; i < l.length; i += 2) {
              var c = l[i],
                p = l[i + 1];
              c === "style"
                ? Lm(s, p)
                : c === "dangerouslySetInnerHTML"
                  ? Om(s, p)
                  : c === "children"
                    ? Ao(s, p)
                    : ld(s, c, p, u);
            }
            switch (a) {
              case "input":
                $u(s, o);
                break;
              case "textarea":
                jm(s, o);
                break;
              case "select":
                var f = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!o.multiple;
                var d = o.value;
                d != null
                  ? ms(s, !!o.multiple, d, !1)
                  : f !== !!o.multiple &&
                    (o.defaultValue != null
                      ? ms(s, !!o.multiple, o.defaultValue, !0)
                      : ms(s, !!o.multiple, o.multiple ? [] : "", !1));
            }
            s[Bo] = o;
          } catch (y) {
            ve(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((kt(t, e), zt(e), n & 4)) {
        if (e.stateNode === null) throw Error(A(162));
        ((s = e.stateNode), (o = e.memoizedProps));
        try {
          s.nodeValue = o;
        } catch (y) {
          ve(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (kt(t, e), zt(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          $o(t.containerInfo);
        } catch (y) {
          ve(e, e.return, y);
        }
      break;
    case 4:
      (kt(t, e), zt(e));
      break;
    case 13:
      (kt(t, e),
        zt(e),
        (s = e.child),
        s.flags & 8192 &&
          ((o = s.memoizedState !== null),
          (s.stateNode.isHidden = o),
          !o ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (Bd = we())),
        n & 4 && Of(e));
      break;
    case 22:
      if (
        ((c = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((Ue = (u = Ue) || c), kt(t, e), (Ue = u)) : kt(t, e),
        zt(e),
        n & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (F = e, c = e.child; c !== null; ) {
            for (p = F = c; F !== null; ) {
              switch (((f = F), (d = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Eo(4, f, f.return);
                  break;
                case 1:
                  hs(f, f.return);
                  var w = f.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    ((n = f), (r = f.return));
                    try {
                      ((t = n),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount());
                    } catch (y) {
                      ve(n, r, y);
                    }
                  }
                  break;
                case 5:
                  hs(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Lf(p);
                    continue;
                  }
              }
              d !== null ? ((d.return = f), (F = d)) : Lf(p);
            }
            c = c.sibling;
          }
        e: for (c = null, p = e; ; ) {
          if (p.tag === 5) {
            if (c === null) {
              c = p;
              try {
                ((s = p.stateNode),
                  u
                    ? ((o = s.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = p.stateNode),
                      (l = p.memoizedProps.style),
                      (i =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Im("display", i))));
              } catch (y) {
                ve(e, e.return, y);
              }
            }
          } else if (p.tag === 6) {
            if (c === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (y) {
                ve(e, e.return, y);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            ((p.child.return = p), (p = p.child));
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            (c === p && (c = null), (p = p.return));
          }
          (c === p && (c = null),
            (p.sibling.return = p.return),
            (p = p.sibling));
        }
      }
      break;
    case 19:
      (kt(t, e), zt(e), n & 4 && Of(e));
      break;
    case 21:
      break;
    default:
      (kt(t, e), zt(e));
  }
}
function zt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (i0(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(A(160));
      }
      switch (n.tag) {
        case 5:
          var s = n.stateNode;
          n.flags & 32 && (Ao(s, ""), (n.flags &= -33));
          var o = Af(e);
          yc(e, o, s);
          break;
        case 3:
        case 4:
          var i = n.stateNode.containerInfo,
            a = Af(e);
          gc(e, a, i);
          break;
        default:
          throw Error(A(161));
      }
    } catch (l) {
      ve(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ox(e, t, r) {
  ((F = e), u0(e));
}
function u0(e, t, r) {
  for (var n = (e.mode & 1) !== 0; F !== null; ) {
    var s = F,
      o = s.child;
    if (s.tag === 22 && n) {
      var i = s.memoizedState !== null || $i;
      if (!i) {
        var a = s.alternate,
          l = (a !== null && a.memoizedState !== null) || Ue;
        a = $i;
        var u = Ue;
        if ((($i = i), (Ue = l) && !u))
          for (F = s; F !== null; )
            ((i = F),
              (l = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? $f(s)
                : l !== null
                  ? ((l.return = i), (F = l))
                  : $f(s));
        for (; o !== null; ) ((F = o), u0(o), (o = o.sibling));
        ((F = s), ($i = a), (Ue = u));
      }
      If(e);
    } else
      s.subtreeFlags & 8772 && o !== null ? ((o.return = s), (F = o)) : If(e);
  }
}
function If(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ue || sl(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !Ue)
                if (r === null) n.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : Pt(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    s,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && vf(t, o, n);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                vf(t, i, r);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (r === null && t.flags & 4) {
                r = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && r.focus();
                    break;
                  case "img":
                    l.src && (r.src = l.src);
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
                    var p = c.dehydrated;
                    p !== null && $o(p);
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
              throw Error(A(163));
          }
        Ue || (t.flags & 512 && mc(t));
      } catch (f) {
        ve(t, t.return, f);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      ((r.return = t.return), (F = r));
      break;
    }
    F = t.return;
  }
}
function Lf(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      ((r.return = t.return), (F = r));
      break;
    }
    F = t.return;
  }
}
function $f(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            sl(4, t);
          } catch (l) {
            ve(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var s = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              ve(t, s, l);
            }
          }
          var o = t.return;
          try {
            mc(t);
          } catch (l) {
            ve(t, o, l);
          }
          break;
        case 5:
          var i = t.return;
          try {
            mc(t);
          } catch (l) {
            ve(t, i, l);
          }
      }
    } catch (l) {
      ve(t, t.return, l);
    }
    if (t === e) {
      F = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (F = a));
      break;
    }
    F = t.return;
  }
}
var ix = Math.ceil,
  Aa = gr.ReactCurrentDispatcher,
  Fd = gr.ReactCurrentOwner,
  wt = gr.ReactCurrentBatchConfig,
  ee = 0,
  Re = null,
  Ee = null,
  Oe = 0,
  nt = 0,
  fs = sn(0),
  Te = 0,
  Ko = null,
  On = 0,
  ol = 0,
  Ud = 0,
  So = null,
  Qe = null,
  Bd = 0,
  Fs = 1 / 0,
  nr = null,
  Oa = !1,
  vc = null,
  Gr = null,
  Mi = !1,
  Ur = null,
  Ia = 0,
  ko = 0,
  wc = null,
  aa = -1,
  la = 0;
function He() {
  return ee & 6 ? we() : aa !== -1 ? aa : (aa = we());
}
function Qr(e) {
  return e.mode & 1
    ? ee & 2 && Oe !== 0
      ? Oe & -Oe
      : V1.transition !== null
        ? (la === 0 && (la = Km()), la)
        : ((e = ne),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : eg(e.type))),
          e)
    : 1;
}
function Mt(e, t, r, n) {
  if (50 < ko) throw ((ko = 0), (wc = null), Error(A(185)));
  (ui(e, r, n),
    (!(ee & 2) || e !== Re) &&
      (e === Re && (!(ee & 2) && (ol |= r), Te === 4 && Ar(e, Oe)),
      Ze(e, n),
      r === 1 && ee === 0 && !(t.mode & 1) && ((Fs = we() + 500), tl && on())));
}
function Ze(e, t) {
  var r = e.callbackNode;
  Vw(e, t);
  var n = ya(e, e === Re ? Oe : 0);
  if (n === 0)
    (r !== null && Wh(r), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && Wh(r), t === 1))
      (e.tag === 0 ? z1(Mf.bind(null, e)) : wg(Mf.bind(null, e)),
        D1(function () {
          !(ee & 6) && on();
        }),
        (r = null));
    else {
      switch (Gm(n)) {
        case 1:
          r = fd;
          break;
        case 4:
          r = Hm;
          break;
        case 16:
          r = ga;
          break;
        case 536870912:
          r = qm;
          break;
        default:
          r = ga;
      }
      r = y0(r, c0.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = r));
  }
}
function c0(e, t) {
  if (((aa = -1), (la = 0), ee & 6)) throw Error(A(327));
  var r = e.callbackNode;
  if (xs() && e.callbackNode !== r) return null;
  var n = ya(e, e === Re ? Oe : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = La(e, n);
  else {
    t = n;
    var s = ee;
    ee |= 2;
    var o = h0();
    (Re !== e || Oe !== t) && ((nr = null), (Fs = we() + 500), Pn(e, t));
    do
      try {
        ux();
        break;
      } catch (a) {
        d0(e, a);
      }
    while (!0);
    (Cd(),
      (Aa.current = o),
      (ee = s),
      Ee !== null ? (t = 0) : ((Re = null), (Oe = 0), (t = Te)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = qu(e)), s !== 0 && ((n = s), (t = xc(e, s)))), t === 1)
    )
      throw ((r = Ko), Pn(e, 0), Ar(e, n), Ze(e, we()), r);
    if (t === 6) Ar(e, n);
    else {
      if (
        ((s = e.current.alternate),
        !(n & 30) &&
          !ax(s) &&
          ((t = La(e, n)),
          t === 2 && ((o = qu(e)), o !== 0 && ((n = o), (t = xc(e, o)))),
          t === 1))
      )
        throw ((r = Ko), Pn(e, 0), Ar(e, n), Ze(e, we()), r);
      switch (((e.finishedWork = s), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          pn(e, Qe, nr);
          break;
        case 3:
          if (
            (Ar(e, n), (n & 130023424) === n && ((t = Bd + 500 - we()), 10 < t))
          ) {
            if (ya(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & n) !== n)) {
              (He(), (e.pingedLanes |= e.suspendedLanes & s));
              break;
            }
            e.timeoutHandle = ec(pn.bind(null, e, Qe, nr), t);
            break;
          }
          pn(e, Qe, nr);
          break;
        case 4:
          if ((Ar(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, s = -1; 0 < n; ) {
            var i = 31 - $t(n);
            ((o = 1 << i), (i = t[i]), i > s && (s = i), (n &= ~o));
          }
          if (
            ((n = s),
            (n = we() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                  ? 480
                  : 1080 > n
                    ? 1080
                    : 1920 > n
                      ? 1920
                      : 3e3 > n
                        ? 3e3
                        : 4320 > n
                          ? 4320
                          : 1960 * ix(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = ec(pn.bind(null, e, Qe, nr), n);
            break;
          }
          pn(e, Qe, nr);
          break;
        case 5:
          pn(e, Qe, nr);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return (Ze(e, we()), e.callbackNode === r ? c0.bind(null, e) : null);
}
function xc(e, t) {
  var r = So;
  return (
    e.current.memoizedState.isDehydrated && (Pn(e, t).flags |= 256),
    (e = La(e, t)),
    e !== 2 && ((t = Qe), (Qe = r), t !== null && bc(t)),
    e
  );
}
function bc(e) {
  Qe === null ? (Qe = e) : Qe.push.apply(Qe, e);
}
function ax(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var s = r[n],
            o = s.getSnapshot;
          s = s.value;
          try {
            if (!Dt(o(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      ((r.return = t), (t = r));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Ar(e, t) {
  for (
    t &= ~Ud,
      t &= ~ol,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var r = 31 - $t(t),
      n = 1 << r;
    ((e[r] = -1), (t &= ~n));
  }
}
function Mf(e) {
  if (ee & 6) throw Error(A(327));
  xs();
  var t = ya(e, 0);
  if (!(t & 1)) return (Ze(e, we()), null);
  var r = La(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = qu(e);
    n !== 0 && ((t = n), (r = xc(e, n)));
  }
  if (r === 1) throw ((r = Ko), Pn(e, 0), Ar(e, t), Ze(e, we()), r);
  if (r === 6) throw Error(A(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    pn(e, Qe, nr),
    Ze(e, we()),
    null
  );
}
function zd(e, t) {
  var r = ee;
  ee |= 1;
  try {
    return e(t);
  } finally {
    ((ee = r), ee === 0 && ((Fs = we() + 500), tl && on()));
  }
}
function In(e) {
  Ur !== null && Ur.tag === 0 && !(ee & 6) && xs();
  var t = ee;
  ee |= 1;
  var r = wt.transition,
    n = ne;
  try {
    if (((wt.transition = null), (ne = 1), e)) return e();
  } finally {
    ((ne = n), (wt.transition = r), (ee = t), !(ee & 6) && on());
  }
}
function Vd() {
  ((nt = fs.current), ue(fs));
}
function Pn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), M1(r)), Ee !== null))
    for (r = Ee.return; r !== null; ) {
      var n = r;
      switch ((Ed(n), n.tag)) {
        case 1:
          ((n = n.type.childContextTypes), n != null && _a());
          break;
        case 3:
          (Ms(), ue(Ye), ue(Be), Ad());
          break;
        case 5:
          jd(n);
          break;
        case 4:
          Ms();
          break;
        case 13:
          ue(fe);
          break;
        case 19:
          ue(fe);
          break;
        case 10:
          Td(n.type._context);
          break;
        case 22:
        case 23:
          Vd();
      }
      r = r.return;
    }
  if (
    ((Re = e),
    (Ee = e = Jr(e.current, null)),
    (Oe = nt = t),
    (Te = 0),
    (Ko = null),
    (Ud = ol = On = 0),
    (Qe = So = null),
    wn !== null)
  ) {
    for (t = 0; t < wn.length; t++)
      if (((r = wn[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var s = n.next,
          o = r.pending;
        if (o !== null) {
          var i = o.next;
          ((o.next = s), (n.next = i));
        }
        r.pending = n;
      }
    wn = null;
  }
  return e;
}
function d0(e, t) {
  do {
    var r = Ee;
    try {
      if ((Cd(), (sa.current = ja), Na)) {
        for (var n = pe.memoizedState; n !== null; ) {
          var s = n.queue;
          (s !== null && (s.pending = null), (n = n.next));
        }
        Na = !1;
      }
      if (
        ((An = 0),
        (Pe = ke = pe = null),
        (_o = !1),
        (Wo = 0),
        (Fd.current = null),
        r === null || r.return === null)
      ) {
        ((Te = 1), (Ko = t), (Ee = null));
        break;
      }
      e: {
        var o = e,
          i = r.return,
          a = r,
          l = t;
        if (
          ((t = Oe),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            p = c.tag;
          if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var d = Sf(i);
          if (d !== null) {
            ((d.flags &= -257),
              kf(d, i, a, o, t),
              d.mode & 1 && Ef(o, u, t),
              (t = d),
              (l = u));
            var w = t.updateQueue;
            if (w === null) {
              var y = new Set();
              (y.add(l), (t.updateQueue = y));
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              (Ef(o, u, t), Wd());
              break e;
            }
            l = Error(A(426));
          }
        } else if (de && a.mode & 1) {
          var x = Sf(i);
          if (x !== null) {
            (!(x.flags & 65536) && (x.flags |= 256),
              kf(x, i, a, o, t),
              Sd(Ds(l, a)));
            break e;
          }
        }
        ((o = l = Ds(l, a)),
          Te !== 4 && (Te = 2),
          So === null ? (So = [o]) : So.push(o),
          (o = i));
        do {
          switch (o.tag) {
            case 3:
              ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
              var g = Gg(o, l, t);
              yf(o, g);
              break e;
            case 1:
              a = l;
              var m = o.type,
                v = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Gr === null || !Gr.has(v))))
              ) {
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var b = Qg(o, a, t);
                yf(o, b);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      p0(r);
    } catch (E) {
      ((t = E), Ee === r && r !== null && (Ee = r = r.return));
      continue;
    }
    break;
  } while (!0);
}
function h0() {
  var e = Aa.current;
  return ((Aa.current = ja), e === null ? ja : e);
}
function Wd() {
  ((Te === 0 || Te === 3 || Te === 2) && (Te = 4),
    Re === null || (!(On & 268435455) && !(ol & 268435455)) || Ar(Re, Oe));
}
function La(e, t) {
  var r = ee;
  ee |= 2;
  var n = h0();
  (Re !== e || Oe !== t) && ((nr = null), Pn(e, t));
  do
    try {
      lx();
      break;
    } catch (s) {
      d0(e, s);
    }
  while (!0);
  if ((Cd(), (ee = r), (Aa.current = n), Ee !== null)) throw Error(A(261));
  return ((Re = null), (Oe = 0), Te);
}
function lx() {
  for (; Ee !== null; ) f0(Ee);
}
function ux() {
  for (; Ee !== null && !Iw(); ) f0(Ee);
}
function f0(e) {
  var t = g0(e.alternate, e, nt);
  ((e.memoizedProps = e.pendingProps),
    t === null ? p0(e) : (Ee = t),
    (Fd.current = null));
}
function p0(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = rx(r, t)), r !== null)) {
        ((r.flags &= 32767), (Ee = r));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((Te = 6), (Ee = null));
        return;
      }
    } else if (((r = tx(r, t, nt)), r !== null)) {
      Ee = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ee = t;
      return;
    }
    Ee = t = e;
  } while (t !== null);
  Te === 0 && (Te = 5);
}
function pn(e, t, r) {
  var n = ne,
    s = wt.transition;
  try {
    ((wt.transition = null), (ne = 1), cx(e, t, r, n));
  } finally {
    ((wt.transition = s), (ne = n));
  }
  return null;
}
function cx(e, t, r, n) {
  do xs();
  while (Ur !== null);
  if (ee & 6) throw Error(A(327));
  r = e.finishedWork;
  var s = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(A(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var o = r.lanes | r.childLanes;
  if (
    (Ww(e, o),
    e === Re && ((Ee = Re = null), (Oe = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      Mi ||
      ((Mi = !0),
      y0(ga, function () {
        return (xs(), null);
      })),
    (o = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || o)
  ) {
    ((o = wt.transition), (wt.transition = null));
    var i = ne;
    ne = 1;
    var a = ee;
    ((ee |= 4),
      (Fd.current = null),
      sx(e, r),
      l0(r, e),
      N1(Xu),
      (va = !!Yu),
      (Xu = Yu = null),
      (e.current = r),
      ox(r),
      Lw(),
      (ee = a),
      (ne = i),
      (wt.transition = o));
  } else e.current = r;
  if (
    (Mi && ((Mi = !1), (Ur = e), (Ia = s)),
    (o = e.pendingLanes),
    o === 0 && (Gr = null),
    Dw(r.stateNode),
    Ze(e, we()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      ((s = t[r]), n(s.value, { componentStack: s.stack, digest: s.digest }));
  if (Oa) throw ((Oa = !1), (e = vc), (vc = null), e);
  return (
    Ia & 1 && e.tag !== 0 && xs(),
    (o = e.pendingLanes),
    o & 1 ? (e === wc ? ko++ : ((ko = 0), (wc = e))) : (ko = 0),
    on(),
    null
  );
}
function xs() {
  if (Ur !== null) {
    var e = Gm(Ia),
      t = wt.transition,
      r = ne;
    try {
      if (((wt.transition = null), (ne = 16 > e ? 16 : e), Ur === null))
        var n = !1;
      else {
        if (((e = Ur), (Ur = null), (Ia = 0), ee & 6)) throw Error(A(331));
        var s = ee;
        for (ee |= 4, F = e.current; F !== null; ) {
          var o = F,
            i = o.child;
          if (F.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (F = u; F !== null; ) {
                  var c = F;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Eo(8, c, o);
                  }
                  var p = c.child;
                  if (p !== null) ((p.return = c), (F = p));
                  else
                    for (; F !== null; ) {
                      c = F;
                      var f = c.sibling,
                        d = c.return;
                      if ((o0(c), c === u)) {
                        F = null;
                        break;
                      }
                      if (f !== null) {
                        ((f.return = d), (F = f));
                        break;
                      }
                      F = d;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var y = w.child;
                if (y !== null) {
                  w.child = null;
                  do {
                    var x = y.sibling;
                    ((y.sibling = null), (y = x));
                  } while (y !== null);
                }
              }
              F = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) ((i.return = o), (F = i));
          else
            e: for (; F !== null; ) {
              if (((o = F), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Eo(9, o, o.return);
                }
              var g = o.sibling;
              if (g !== null) {
                ((g.return = o.return), (F = g));
                break e;
              }
              F = o.return;
            }
        }
        var m = e.current;
        for (F = m; F !== null; ) {
          i = F;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) ((v.return = i), (F = v));
          else
            e: for (i = m; F !== null; ) {
              if (((a = F), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      sl(9, a);
                  }
                } catch (E) {
                  ve(a, a.return, E);
                }
              if (a === i) {
                F = null;
                break e;
              }
              var b = a.sibling;
              if (b !== null) {
                ((b.return = a.return), (F = b));
                break e;
              }
              F = a.return;
            }
        }
        if (
          ((ee = s), on(), Qt && typeof Qt.onPostCommitFiberRoot == "function")
        )
          try {
            Qt.onPostCommitFiberRoot(Ja, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      ((ne = r), (wt.transition = t));
    }
  }
  return !1;
}
function Df(e, t, r) {
  ((t = Ds(r, t)),
    (t = Gg(e, t, 1)),
    (e = Kr(e, t, 1)),
    (t = He()),
    e !== null && (ui(e, 1, t), Ze(e, t)));
}
function ve(e, t, r) {
  if (e.tag === 3) Df(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Df(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (Gr === null || !Gr.has(n)))
        ) {
          ((e = Ds(r, e)),
            (e = Qg(t, e, 1)),
            (t = Kr(t, e, 1)),
            (e = He()),
            t !== null && (ui(t, 1, e), Ze(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function dx(e, t, r) {
  var n = e.pingCache;
  (n !== null && n.delete(t),
    (t = He()),
    (e.pingedLanes |= e.suspendedLanes & r),
    Re === e &&
      (Oe & r) === r &&
      (Te === 4 || (Te === 3 && (Oe & 130023424) === Oe && 500 > we() - Bd)
        ? Pn(e, 0)
        : (Ud |= r)),
    Ze(e, t));
}
function m0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ti), (Ti <<= 1), !(Ti & 130023424) && (Ti = 4194304))
      : (t = 1));
  var r = He();
  ((e = hr(e, t)), e !== null && (ui(e, t, r), Ze(e, r)));
}
function hx(e) {
  var t = e.memoizedState,
    r = 0;
  (t !== null && (r = t.retryLane), m0(e, r));
}
function fx(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        s = e.memoizedState;
      s !== null && (r = s.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(A(314));
  }
  (n !== null && n.delete(t), m0(e, r));
}
var g0;
g0 = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ye.current) Je = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return ((Je = !1), ex(e, t, r));
      Je = !!(e.flags & 131072);
    }
  else ((Je = !1), de && t.flags & 1048576 && xg(t, ka, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      (ia(e, t), (e = t.pendingProps));
      var s = Is(t, Be.current);
      (ws(t, r), (s = Id(null, t, n, e, s, r)));
      var o = Ld();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Xe(n) ? ((o = !0), Ea(t)) : (o = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            Rd(t),
            (s.updater = nl),
            (t.stateNode = s),
            (s._reactInternals = t),
            ac(t, n, e, r),
            (t = cc(null, t, n, !0, o, r)))
          : ((t.tag = 0), de && o && _d(t), Ve(null, t, s, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (ia(e, t),
          (e = t.pendingProps),
          (s = n._init),
          (n = s(n._payload)),
          (t.type = n),
          (s = t.tag = mx(n)),
          (e = Pt(n, e)),
          s)
        ) {
          case 0:
            t = uc(null, t, n, e, r);
            break e;
          case 1:
            t = Pf(null, t, n, e, r);
            break e;
          case 11:
            t = Cf(null, t, n, e, r);
            break e;
          case 14:
            t = Tf(null, t, n, Pt(n.type, e), r);
            break e;
        }
        throw Error(A(306, n, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (s = t.pendingProps),
        (s = t.elementType === n ? s : Pt(n, s)),
        uc(e, t, n, s, r)
      );
    case 1:
      return (
        (n = t.type),
        (s = t.pendingProps),
        (s = t.elementType === n ? s : Pt(n, s)),
        Pf(e, t, n, s, r)
      );
    case 3:
      e: {
        if ((Zg(t), e === null)) throw Error(A(387));
        ((n = t.pendingProps),
          (o = t.memoizedState),
          (s = o.element),
          Cg(e, t),
          Pa(t, n, null, r));
        var i = t.memoizedState;
        if (((n = i.element), o.isDehydrated))
          if (
            ((o = {
              element: n,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            ((s = Ds(Error(A(423)), t)), (t = Rf(e, t, n, r, s)));
            break e;
          } else if (n !== s) {
            ((s = Ds(Error(A(424)), t)), (t = Rf(e, t, n, r, s)));
            break e;
          } else
            for (
              at = qr(t.stateNode.containerInfo.firstChild),
                lt = t,
                de = !0,
                Lt = null,
                r = Sg(t, null, n, r),
                t.child = r;
              r;
            )
              ((r.flags = (r.flags & -3) | 4096), (r = r.sibling));
        else {
          if ((Ls(), n === s)) {
            t = fr(e, t, r);
            break e;
          }
          Ve(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Tg(t),
        e === null && sc(t),
        (n = t.type),
        (s = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = s.children),
        Zu(n, s) ? (i = null) : o !== null && Zu(n, o) && (t.flags |= 32),
        Xg(e, t),
        Ve(e, t, i, r),
        t.child
      );
    case 6:
      return (e === null && sc(t), null);
    case 13:
      return e0(e, t, r);
    case 4:
      return (
        Nd(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = $s(t, null, n, r)) : Ve(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (s = t.pendingProps),
        (s = t.elementType === n ? s : Pt(n, s)),
        Cf(e, t, n, s, r)
      );
    case 7:
      return (Ve(e, t, t.pendingProps, r), t.child);
    case 8:
      return (Ve(e, t, t.pendingProps.children, r), t.child);
    case 12:
      return (Ve(e, t, t.pendingProps.children, r), t.child);
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (s = t.pendingProps),
          (o = t.memoizedProps),
          (i = s.value),
          ie(Ca, n._currentValue),
          (n._currentValue = i),
          o !== null)
        )
          if (Dt(o.value, i)) {
            if (o.children === s.children && !Ye.current) {
              t = fr(e, t, r);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                i = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === n) {
                    if (o.tag === 1) {
                      ((l = ur(-1, r & -r)), (l.tag = 2));
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        (c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l));
                      }
                    }
                    ((o.lanes |= r),
                      (l = o.alternate),
                      l !== null && (l.lanes |= r),
                      oc(o.return, r, t),
                      (a.lanes |= r));
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(A(341));
                ((i.lanes |= r),
                  (a = i.alternate),
                  a !== null && (a.lanes |= r),
                  oc(i, r, t),
                  (i = o.sibling));
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    ((o.return = i.return), (i = o));
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        (Ve(e, t, s.children, r), (t = t.child));
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (n = t.pendingProps.children),
        ws(t, r),
        (s = xt(s)),
        (n = n(s)),
        (t.flags |= 1),
        Ve(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (s = Pt(n, t.pendingProps)),
        (s = Pt(n.type, s)),
        Tf(e, t, n, s, r)
      );
    case 15:
      return Jg(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (s = t.pendingProps),
        (s = t.elementType === n ? s : Pt(n, s)),
        ia(e, t),
        (t.tag = 1),
        Xe(n) ? ((e = !0), Ea(t)) : (e = !1),
        ws(t, r),
        Kg(t, n, s),
        ac(t, n, s, r),
        cc(null, t, n, !0, e, r)
      );
    case 19:
      return t0(e, t, r);
    case 22:
      return Yg(e, t, r);
  }
  throw Error(A(156, t.tag));
};
function y0(e, t) {
  return Wm(e, t);
}
function px(e, t, r, n) {
  ((this.tag = e),
    (this.key = r),
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
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function vt(e, t, r, n) {
  return new px(e, t, r, n);
}
function Hd(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function mx(e) {
  if (typeof e == "function") return Hd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === cd)) return 11;
    if (e === dd) return 14;
  }
  return 2;
}
function Jr(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = vt(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function ua(e, t, r, n, s, o) {
  var i = 2;
  if (((n = e), typeof e == "function")) Hd(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case ns:
        return Rn(r.children, s, o, t);
      case ud:
        ((i = 8), (s |= 8));
        break;
      case ju:
        return (
          (e = vt(12, r, t, s | 2)),
          (e.elementType = ju),
          (e.lanes = o),
          e
        );
      case Au:
        return ((e = vt(13, r, t, s)), (e.elementType = Au), (e.lanes = o), e);
      case Ou:
        return ((e = vt(19, r, t, s)), (e.elementType = Ou), (e.lanes = o), e);
      case Tm:
        return il(r, s, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case km:
              i = 10;
              break e;
            case Cm:
              i = 9;
              break e;
            case cd:
              i = 11;
              break e;
            case dd:
              i = 14;
              break e;
            case Pr:
              ((i = 16), (n = null));
              break e;
          }
        throw Error(A(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = vt(i, r, t, s)),
    (t.elementType = e),
    (t.type = n),
    (t.lanes = o),
    t
  );
}
function Rn(e, t, r, n) {
  return ((e = vt(7, e, n, t)), (e.lanes = r), e);
}
function il(e, t, r, n) {
  return (
    (e = vt(22, e, n, t)),
    (e.elementType = Tm),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function iu(e, t, r) {
  return ((e = vt(6, e, null, t)), (e.lanes = r), e);
}
function au(e, t, r) {
  return (
    (t = vt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function gx(e, t, r, n, s) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Bl(0)),
    (this.expirationTimes = Bl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Bl(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null));
}
function qd(e, t, r, n, s, o, i, a, l) {
  return (
    (e = new gx(e, t, r, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = vt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Rd(o),
    e
  );
}
function yx(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: rs,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function v0(e) {
  if (!e) return Xr;
  e = e._reactInternals;
  e: {
    if (Mn(e) !== e || e.tag !== 1) throw Error(A(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(A(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (Xe(r)) return vg(e, r, t);
  }
  return t;
}
function w0(e, t, r, n, s, o, i, a, l) {
  return (
    (e = qd(r, n, !0, e, s, o, i, a, l)),
    (e.context = v0(null)),
    (r = e.current),
    (n = He()),
    (s = Qr(r)),
    (o = ur(n, s)),
    (o.callback = t ?? null),
    Kr(r, o, s),
    (e.current.lanes = s),
    ui(e, s, n),
    Ze(e, n),
    e
  );
}
function al(e, t, r, n) {
  var s = t.current,
    o = He(),
    i = Qr(s);
  return (
    (r = v0(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = ur(o, i)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = Kr(s, t, i)),
    e !== null && (Mt(e, s, i, o), na(e, s, i)),
    i
  );
}
function $a(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ff(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function Kd(e, t) {
  (Ff(e, t), (e = e.alternate) && Ff(e, t));
}
function vx() {
  return null;
}
var x0 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Gd(e) {
  this._internalRoot = e;
}
ll.prototype.render = Gd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  al(e, t, null, null);
};
ll.prototype.unmount = Gd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (In(function () {
      al(null, e, null, null);
    }),
      (t[dr] = null));
  }
};
function ll(e) {
  this._internalRoot = e;
}
ll.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ym();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < jr.length && t !== 0 && t < jr[r].priority; r++);
    (jr.splice(r, 0, e), r === 0 && Zm(e));
  }
};
function Qd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ul(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Uf() {}
function wx(e, t, r, n, s) {
  if (s) {
    if (typeof n == "function") {
      var o = n;
      n = function () {
        var u = $a(i);
        o.call(u);
      };
    }
    var i = w0(t, n, e, 0, null, !1, !1, "", Uf);
    return (
      (e._reactRootContainer = i),
      (e[dr] = i.current),
      Fo(e.nodeType === 8 ? e.parentNode : e),
      In(),
      i
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof n == "function") {
    var a = n;
    n = function () {
      var u = $a(l);
      a.call(u);
    };
  }
  var l = qd(e, 0, !1, null, null, !1, !1, "", Uf);
  return (
    (e._reactRootContainer = l),
    (e[dr] = l.current),
    Fo(e.nodeType === 8 ? e.parentNode : e),
    In(function () {
      al(t, l, r, n);
    }),
    l
  );
}
function cl(e, t, r, n, s) {
  var o = r._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var l = $a(i);
        a.call(l);
      };
    }
    al(t, i, e, s);
  } else i = wx(r, t, e, s, n);
  return $a(i);
}
Qm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = po(t.pendingLanes);
        r !== 0 &&
          (pd(t, r | 1), Ze(t, we()), !(ee & 6) && ((Fs = we() + 500), on()));
      }
      break;
    case 13:
      (In(function () {
        var n = hr(e, 1);
        if (n !== null) {
          var s = He();
          Mt(n, e, 1, s);
        }
      }),
        Kd(e, 1));
  }
};
md = function (e) {
  if (e.tag === 13) {
    var t = hr(e, 134217728);
    if (t !== null) {
      var r = He();
      Mt(t, e, 134217728, r);
    }
    Kd(e, 134217728);
  }
};
Jm = function (e) {
  if (e.tag === 13) {
    var t = Qr(e),
      r = hr(e, t);
    if (r !== null) {
      var n = He();
      Mt(r, e, t, n);
    }
    Kd(e, t);
  }
};
Ym = function () {
  return ne;
};
Xm = function (e, t) {
  var r = ne;
  try {
    return ((ne = e), t());
  } finally {
    ne = r;
  }
};
Vu = function (e, t, r) {
  switch (t) {
    case "input":
      if (($u(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var s = el(n);
            if (!s) throw Error(A(90));
            (Rm(n), $u(n, s));
          }
        }
      }
      break;
    case "textarea":
      jm(e, r);
      break;
    case "select":
      ((t = r.value), t != null && ms(e, !!r.multiple, t, !1));
  }
};
Dm = zd;
Fm = In;
var xx = { usingClientEntryPoint: !1, Events: [di, as, el, $m, Mm, zd] },
  lo = {
    findFiberByHostInstance: vn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  bx = {
    bundleType: lo.bundleType,
    version: lo.version,
    rendererPackageName: lo.rendererPackageName,
    rendererConfig: lo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: gr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = zm(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: lo.findFiberByHostInstance || vx,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Di = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Di.isDisabled && Di.supportsFiber)
    try {
      ((Ja = Di.inject(bx)), (Qt = Di));
    } catch {}
}
dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xx;
dt.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Qd(t)) throw Error(A(200));
  return yx(e, t, null, r);
};
dt.createRoot = function (e, t) {
  if (!Qd(e)) throw Error(A(299));
  var r = !1,
    n = "",
    s = x0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = qd(e, 1, !1, null, null, r, !1, n, s)),
    (e[dr] = t.current),
    Fo(e.nodeType === 8 ? e.parentNode : e),
    new Gd(t)
  );
};
dt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(A(188))
      : ((e = Object.keys(e).join(",")), Error(A(268, e)));
  return ((e = zm(t)), (e = e === null ? null : e.stateNode), e);
};
dt.flushSync = function (e) {
  return In(e);
};
dt.hydrate = function (e, t, r) {
  if (!ul(t)) throw Error(A(200));
  return cl(null, e, t, !0, r);
};
dt.hydrateRoot = function (e, t, r) {
  if (!Qd(e)) throw Error(A(405));
  var n = (r != null && r.hydratedSources) || null,
    s = !1,
    o = "",
    i = x0;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (s = !0),
      r.identifierPrefix !== void 0 && (o = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (i = r.onRecoverableError)),
    (t = w0(t, null, e, 1, r ?? null, s, !1, o, i)),
    (e[dr] = t.current),
    Fo(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      ((r = n[e]),
        (s = r._getVersion),
        (s = s(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, s])
          : t.mutableSourceEagerHydrationData.push(r, s));
  return new ll(t);
};
dt.render = function (e, t, r) {
  if (!ul(t)) throw Error(A(200));
  return cl(null, e, t, !1, r);
};
dt.unmountComponentAtNode = function (e) {
  if (!ul(e)) throw Error(A(40));
  return e._reactRootContainer
    ? (In(function () {
        cl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[dr] = null));
        });
      }),
      !0)
    : !1;
};
dt.unstable_batchedUpdates = zd;
dt.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!ul(r)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return cl(e, t, r, !1, n);
};
dt.version = "18.3.1-next-f1338f8080-20240426";
function b0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b0);
    } catch (e) {
      console.error(e);
    }
}
(b0(), (bm.exports = dt));
var Qs = bm.exports;
const _0 = lm(Qs);
var E0,
  Bf = Qs;
((E0 = Bf.createRoot), Bf.hydrateRoot);
const _x = 1,
  Ex = 1e6;
let lu = 0;
function Sx() {
  return ((lu = (lu + 1) % Number.MAX_SAFE_INTEGER), lu.toString());
}
const uu = new Map(),
  zf = (e) => {
    if (uu.has(e)) return;
    const t = setTimeout(() => {
      (uu.delete(e), Co({ type: "REMOVE_TOAST", toastId: e }));
    }, Ex);
    uu.set(e, t);
  },
  kx = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, _x) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((r) =>
            r.id === t.toast.id ? { ...r, ...t.toast } : r,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: r } = t;
        return (
          r
            ? zf(r)
            : e.toasts.forEach((n) => {
                zf(n.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((n) =>
              n.id === r || r === void 0 ? { ...n, open: !1 } : n,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((r) => r.id !== t.toastId) };
    }
  },
  ca = [];
let da = { toasts: [] };
function Co(e) {
  ((da = kx(da, e)),
    ca.forEach((t) => {
      t(da);
    }));
}
function Cx({ ...e }) {
  const t = Sx(),
    r = (s) => Co({ type: "UPDATE_TOAST", toast: { ...s, id: t } }),
    n = () => Co({ type: "DISMISS_TOAST", toastId: t });
  return (
    Co({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (s) => {
          s || n();
        },
      },
    }),
    { id: t, dismiss: n, update: r }
  );
}
function Tx() {
  const [e, t] = _.useState(da);
  return (
    _.useEffect(
      () => (
        ca.push(t),
        () => {
          const r = ca.indexOf(t);
          r > -1 && ca.splice(r, 1);
        }
      ),
      [e],
    ),
    {
      ...e,
      toast: Cx,
      dismiss: (r) => Co({ type: "DISMISS_TOAST", toastId: r }),
    }
  );
}
function Ce(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (s) {
    if ((e == null || e(s), r === !1 || !s.defaultPrevented))
      return t == null ? void 0 : t(s);
  };
}
function Vf(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function S0(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((s) => {
      const o = Vf(s, t);
      return (!r && typeof o == "function" && (r = !0), o);
    });
    if (r)
      return () => {
        for (let s = 0; s < n.length; s++) {
          const o = n[s];
          typeof o == "function" ? o() : Vf(e[s], null);
        }
      };
  };
}
function Ft(...e) {
  return _.useCallback(S0(...e), e);
}
function dl(e, t = []) {
  let r = [];
  function n(o, i) {
    const a = _.createContext(i),
      l = r.length;
    r = [...r, i];
    const u = (p) => {
      var g;
      const { scope: f, children: d, ...w } = p,
        y = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || a,
        x = _.useMemo(() => w, Object.values(w));
      return h.jsx(y.Provider, { value: x, children: d });
    };
    u.displayName = o + "Provider";
    function c(p, f) {
      var y;
      const d = ((y = f == null ? void 0 : f[e]) == null ? void 0 : y[l]) || a,
        w = _.useContext(d);
      if (w) return w;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${o}\``);
    }
    return [u, c];
  }
  const s = () => {
    const o = r.map((i) => _.createContext(i));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || o;
      return _.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return ((s.scopeName = e), [n, Px(s, ...t)]);
}
function Px(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function (o) {
      const i = n.reduce((a, { useScope: l, scopeName: u }) => {
        const p = l(o)[`__scope${u}`];
        return { ...a, ...p };
      }, {});
      return _.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return ((r.scopeName = t.scopeName), r);
}
function _c(e) {
  const t = Rx(e),
    r = _.forwardRef((n, s) => {
      const { children: o, ...i } = n,
        a = _.Children.toArray(o),
        l = a.find(jx);
      if (l) {
        const u = l.props.children,
          c = a.map((p) =>
            p === l
              ? _.Children.count(u) > 1
                ? _.Children.only(null)
                : _.isValidElement(u)
                  ? u.props.children
                  : null
              : p,
          );
        return h.jsx(t, {
          ...i,
          ref: s,
          children: _.isValidElement(u) ? _.cloneElement(u, void 0, c) : null,
        });
      }
      return h.jsx(t, { ...i, ref: s, children: o });
    });
  return ((r.displayName = `${e}.Slot`), r);
}
function Rx(e) {
  const t = _.forwardRef((r, n) => {
    const { children: s, ...o } = r;
    if (_.isValidElement(s)) {
      const i = Ox(s),
        a = Ax(o, s.props);
      return (
        s.type !== _.Fragment && (a.ref = n ? S0(n, i) : i),
        _.cloneElement(s, a)
      );
    }
    return _.Children.count(s) > 1 ? _.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var k0 = Symbol("radix.slottable");
function Nx(e) {
  const t = ({ children: r }) => h.jsx(h.Fragment, { children: r });
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = k0), t);
}
function jx(e) {
  return (
    _.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === k0
  );
}
function Ax(e, t) {
  const r = { ...t };
  for (const n in t) {
    const s = e[n],
      o = t[n];
    /^on[A-Z]/.test(n)
      ? s && o
        ? (r[n] = (...a) => {
            const l = o(...a);
            return (s(...a), l);
          })
        : s && (r[n] = s)
      : n === "style"
        ? (r[n] = { ...s, ...o })
        : n === "className" && (r[n] = [s, o].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Ox(e) {
  var n, s;
  let t =
      (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : n.get,
    r = t && "isReactWarning" in t && t.isReactWarning;
  return r
    ? e.ref
    : ((t =
        (s = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : s.get),
      (r = t && "isReactWarning" in t && t.isReactWarning),
      r ? e.props.ref : e.props.ref || e.ref);
}
function Ix(e) {
  const t = e + "CollectionProvider",
    [r, n] = dl(t),
    [s, o] = r(t, { collectionRef: { current: null }, itemMap: new Map() }),
    i = (y) => {
      const { scope: x, children: g } = y,
        m = O.useRef(null),
        v = O.useRef(new Map()).current;
      return h.jsx(s, { scope: x, itemMap: v, collectionRef: m, children: g });
    };
  i.displayName = t;
  const a = e + "CollectionSlot",
    l = _c(a),
    u = O.forwardRef((y, x) => {
      const { scope: g, children: m } = y,
        v = o(a, g),
        b = Ft(x, v.collectionRef);
      return h.jsx(l, { ref: b, children: m });
    });
  u.displayName = a;
  const c = e + "CollectionItemSlot",
    p = "data-radix-collection-item",
    f = _c(c),
    d = O.forwardRef((y, x) => {
      const { scope: g, children: m, ...v } = y,
        b = O.useRef(null),
        E = Ft(x, b),
        S = o(c, g);
      return (
        O.useEffect(
          () => (
            S.itemMap.set(b, { ref: b, ...v }),
            () => void S.itemMap.delete(b)
          ),
        ),
        h.jsx(f, { [p]: "", ref: E, children: m })
      );
    });
  d.displayName = c;
  function w(y) {
    const x = o(e + "CollectionConsumer", y);
    return O.useCallback(() => {
      const m = x.collectionRef.current;
      if (!m) return [];
      const v = Array.from(m.querySelectorAll(`[${p}]`));
      return Array.from(x.itemMap.values()).sort(
        (S, k) => v.indexOf(S.ref.current) - v.indexOf(k.ref.current),
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [{ Provider: i, Slot: u, ItemSlot: d }, w, n];
}
var Lx = [
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
  tt = Lx.reduce((e, t) => {
    const r = _c(`Primitive.${t}`),
      n = _.forwardRef((s, o) => {
        const { asChild: i, ...a } = s,
          l = i ? r : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          h.jsx(l, { ...a, ref: o })
        );
      });
    return ((n.displayName = `Primitive.${t}`), { ...e, [t]: n });
  }, {});
function C0(e, t) {
  e && Qs.flushSync(() => e.dispatchEvent(t));
}
function Zr(e) {
  const t = _.useRef(e);
  return (
    _.useEffect(() => {
      t.current = e;
    }),
    _.useMemo(
      () =>
        (...r) => {
          var n;
          return (n = t.current) == null ? void 0 : n.call(t, ...r);
        },
      [],
    )
  );
}
function $x(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Zr(e);
  _.useEffect(() => {
    const n = (s) => {
      s.key === "Escape" && r(s);
    };
    return (
      t.addEventListener("keydown", n, { capture: !0 }),
      () => t.removeEventListener("keydown", n, { capture: !0 })
    );
  }, [r, t]);
}
var Mx = "DismissableLayer",
  Ec = "dismissableLayer.update",
  Dx = "dismissableLayer.pointerDownOutside",
  Fx = "dismissableLayer.focusOutside",
  Wf,
  T0 = _.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Jd = _.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: n,
        onPointerDownOutside: s,
        onFocusOutside: o,
        onInteractOutside: i,
        onDismiss: a,
        ...l
      } = e,
      u = _.useContext(T0),
      [c, p] = _.useState(null),
      f =
        (c == null ? void 0 : c.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, d] = _.useState({}),
      w = Ft(t, (k) => p(k)),
      y = Array.from(u.layers),
      [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      g = y.indexOf(x),
      m = c ? y.indexOf(c) : -1,
      v = u.layersWithOutsidePointerEventsDisabled.size > 0,
      b = m >= g,
      E = Bx((k) => {
        const T = k.target,
          j = [...u.branches].some((P) => P.contains(T));
        !b ||
          j ||
          (s == null || s(k),
          i == null || i(k),
          k.defaultPrevented || a == null || a());
      }, f),
      S = zx((k) => {
        const T = k.target;
        [...u.branches].some((P) => P.contains(T)) ||
          (o == null || o(k),
          i == null || i(k),
          k.defaultPrevented || a == null || a());
      }, f);
    return (
      $x((k) => {
        m === u.layers.size - 1 &&
          (n == null || n(k),
          !k.defaultPrevented && a && (k.preventDefault(), a()));
      }, f),
      _.useEffect(() => {
        if (c)
          return (
            r &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Wf = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            Hf(),
            () => {
              r &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = Wf);
            }
          );
      }, [c, f, r, u]),
      _.useEffect(
        () => () => {
          c &&
            (u.layers.delete(c),
            u.layersWithOutsidePointerEventsDisabled.delete(c),
            Hf());
        },
        [c, u],
      ),
      _.useEffect(() => {
        const k = () => d({});
        return (
          document.addEventListener(Ec, k),
          () => document.removeEventListener(Ec, k)
        );
      }, []),
      h.jsx(tt.div, {
        ...l,
        ref: w,
        style: {
          pointerEvents: v ? (b ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: Ce(e.onFocusCapture, S.onFocusCapture),
        onBlurCapture: Ce(e.onBlurCapture, S.onBlurCapture),
        onPointerDownCapture: Ce(
          e.onPointerDownCapture,
          E.onPointerDownCapture,
        ),
      })
    );
  });
Jd.displayName = Mx;
var Ux = "DismissableLayerBranch",
  P0 = _.forwardRef((e, t) => {
    const r = _.useContext(T0),
      n = _.useRef(null),
      s = Ft(t, n);
    return (
      _.useEffect(() => {
        const o = n.current;
        if (o)
          return (
            r.branches.add(o),
            () => {
              r.branches.delete(o);
            }
          );
      }, [r.branches]),
      h.jsx(tt.div, { ...e, ref: s })
    );
  });
P0.displayName = Ux;
function Bx(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Zr(e),
    n = _.useRef(!1),
    s = _.useRef(() => {});
  return (
    _.useEffect(() => {
      const o = (a) => {
          if (a.target && !n.current) {
            let l = function () {
              R0(Dx, r, u, { discrete: !0 });
            };
            const u = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", s.current),
                (s.current = l),
                t.addEventListener("click", s.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", s.current);
          n.current = !1;
        },
        i = window.setTimeout(() => {
          t.addEventListener("pointerdown", o);
        }, 0);
      return () => {
        (window.clearTimeout(i),
          t.removeEventListener("pointerdown", o),
          t.removeEventListener("click", s.current));
      };
    }, [t, r]),
    { onPointerDownCapture: () => (n.current = !0) }
  );
}
function zx(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Zr(e),
    n = _.useRef(!1);
  return (
    _.useEffect(() => {
      const s = (o) => {
        o.target &&
          !n.current &&
          R0(Fx, r, { originalEvent: o }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", s),
        () => t.removeEventListener("focusin", s)
      );
    }, [t, r]),
    {
      onFocusCapture: () => (n.current = !0),
      onBlurCapture: () => (n.current = !1),
    }
  );
}
function Hf() {
  const e = new CustomEvent(Ec);
  document.dispatchEvent(e);
}
function R0(e, t, r, { discrete: n }) {
  const s = r.originalEvent.target,
    o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  (t && s.addEventListener(e, t, { once: !0 }),
    n ? C0(s, o) : s.dispatchEvent(o));
}
var Vx = Jd,
  Wx = P0,
  en = globalThis != null && globalThis.document ? _.useLayoutEffect : () => {},
  Hx = "Portal",
  N0 = _.forwardRef((e, t) => {
    var a;
    const { container: r, ...n } = e,
      [s, o] = _.useState(!1);
    en(() => o(!0), []);
    const i =
      r ||
      (s &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return i ? _0.createPortal(h.jsx(tt.div, { ...n, ref: t }), i) : null;
  });
N0.displayName = Hx;
function qx(e, t) {
  return _.useReducer((r, n) => t[r][n] ?? r, e);
}
var Yd = (e) => {
  const { present: t, children: r } = e,
    n = Kx(t),
    s =
      typeof r == "function" ? r({ present: n.isPresent }) : _.Children.only(r),
    o = Ft(n.ref, Gx(s));
  return typeof r == "function" || n.isPresent
    ? _.cloneElement(s, { ref: o })
    : null;
};
Yd.displayName = "Presence";
function Kx(e) {
  const [t, r] = _.useState(),
    n = _.useRef(null),
    s = _.useRef(e),
    o = _.useRef("none"),
    i = e ? "mounted" : "unmounted",
    [a, l] = qx(i, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    _.useEffect(() => {
      const u = Fi(n.current);
      o.current = a === "mounted" ? u : "none";
    }, [a]),
    en(() => {
      const u = n.current,
        c = s.current;
      if (c !== e) {
        const f = o.current,
          d = Fi(u);
        (e
          ? l("MOUNT")
          : d === "none" || (u == null ? void 0 : u.display) === "none"
            ? l("UNMOUNT")
            : l(c && f !== d ? "ANIMATION_OUT" : "UNMOUNT"),
          (s.current = e));
      }
    }, [e, l]),
    en(() => {
      if (t) {
        let u;
        const c = t.ownerDocument.defaultView ?? window,
          p = (d) => {
            const y = Fi(n.current).includes(d.animationName);
            if (d.target === t && y && (l("ANIMATION_END"), !s.current)) {
              const x = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (u = c.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = x);
                })));
            }
          },
          f = (d) => {
            d.target === t && (o.current = Fi(n.current));
          };
        return (
          t.addEventListener("animationstart", f),
          t.addEventListener("animationcancel", p),
          t.addEventListener("animationend", p),
          () => {
            (c.clearTimeout(u),
              t.removeEventListener("animationstart", f),
              t.removeEventListener("animationcancel", p),
              t.removeEventListener("animationend", p));
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: _.useCallback((u) => {
        ((n.current = u ? getComputedStyle(u) : null), r(u));
      }, []),
    }
  );
}
function Fi(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Gx(e) {
  var n, s;
  let t =
      (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : n.get,
    r = t && "isReactWarning" in t && t.isReactWarning;
  return r
    ? e.ref
    : ((t =
        (s = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : s.get),
      (r = t && "isReactWarning" in t && t.isReactWarning),
      r ? e.props.ref : e.props.ref || e.ref);
}
var Qx = wm[" useInsertionEffect ".trim().toString()] || en;
function Jx({ prop: e, defaultProp: t, onChange: r = () => {}, caller: n }) {
  const [s, o, i] = Yx({ defaultProp: t, onChange: r }),
    a = e !== void 0,
    l = a ? e : s;
  {
    const c = _.useRef(e !== void 0);
    _.useEffect(() => {
      const p = c.current;
      (p !== a &&
        console.warn(
          `${n} is changing from ${p ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (c.current = a));
    }, [a, n]);
  }
  const u = _.useCallback(
    (c) => {
      var p;
      if (a) {
        const f = Xx(c) ? c(e) : c;
        f !== e && ((p = i.current) == null || p.call(i, f));
      } else o(c);
    },
    [a, e, o, i],
  );
  return [l, u];
}
function Yx({ defaultProp: e, onChange: t }) {
  const [r, n] = _.useState(e),
    s = _.useRef(r),
    o = _.useRef(t);
  return (
    Qx(() => {
      o.current = t;
    }, [t]),
    _.useEffect(() => {
      var i;
      s.current !== r &&
        ((i = o.current) == null || i.call(o, r), (s.current = r));
    }, [r, s]),
    [r, n, o]
  );
}
function Xx(e) {
  return typeof e == "function";
}
var Zx = Object.freeze({
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
  eb = "VisuallyHidden",
  hl = _.forwardRef((e, t) =>
    h.jsx(tt.span, { ...e, ref: t, style: { ...Zx, ...e.style } }),
  );
hl.displayName = eb;
var tb = hl,
  Xd = "ToastProvider",
  [Zd, rb, nb] = Ix("Toast"),
  [j0, QP] = dl("Toast", [nb]),
  [sb, fl] = j0(Xd),
  A0 = (e) => {
    const {
        __scopeToast: t,
        label: r = "Notification",
        duration: n = 5e3,
        swipeDirection: s = "right",
        swipeThreshold: o = 50,
        children: i,
      } = e,
      [a, l] = _.useState(null),
      [u, c] = _.useState(0),
      p = _.useRef(!1),
      f = _.useRef(!1);
    return (
      r.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Xd}\`. Expected non-empty \`string\`.`,
        ),
      h.jsx(Zd.Provider, {
        scope: t,
        children: h.jsx(sb, {
          scope: t,
          label: r,
          duration: n,
          swipeDirection: s,
          swipeThreshold: o,
          toastCount: u,
          viewport: a,
          onViewportChange: l,
          onToastAdd: _.useCallback(() => c((d) => d + 1), []),
          onToastRemove: _.useCallback(() => c((d) => d - 1), []),
          isFocusedToastEscapeKeyDownRef: p,
          isClosePausedRef: f,
          children: i,
        }),
      })
    );
  };
A0.displayName = Xd;
var O0 = "ToastViewport",
  ob = ["F8"],
  Sc = "toast.viewportPause",
  kc = "toast.viewportResume",
  I0 = _.forwardRef((e, t) => {
    const {
        __scopeToast: r,
        hotkey: n = ob,
        label: s = "Notifications ({hotkey})",
        ...o
      } = e,
      i = fl(O0, r),
      a = rb(r),
      l = _.useRef(null),
      u = _.useRef(null),
      c = _.useRef(null),
      p = _.useRef(null),
      f = Ft(t, p, i.onViewportChange),
      d = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      w = i.toastCount > 0;
    (_.useEffect(() => {
      const x = (g) => {
        var v;
        n.length !== 0 &&
          n.every((b) => g[b] || g.code === b) &&
          ((v = p.current) == null || v.focus());
      };
      return (
        document.addEventListener("keydown", x),
        () => document.removeEventListener("keydown", x)
      );
    }, [n]),
      _.useEffect(() => {
        const x = l.current,
          g = p.current;
        if (w && x && g) {
          const m = () => {
              if (!i.isClosePausedRef.current) {
                const S = new CustomEvent(Sc);
                (g.dispatchEvent(S), (i.isClosePausedRef.current = !0));
              }
            },
            v = () => {
              if (i.isClosePausedRef.current) {
                const S = new CustomEvent(kc);
                (g.dispatchEvent(S), (i.isClosePausedRef.current = !1));
              }
            },
            b = (S) => {
              !x.contains(S.relatedTarget) && v();
            },
            E = () => {
              x.contains(document.activeElement) || v();
            };
          return (
            x.addEventListener("focusin", m),
            x.addEventListener("focusout", b),
            x.addEventListener("pointermove", m),
            x.addEventListener("pointerleave", E),
            window.addEventListener("blur", m),
            window.addEventListener("focus", v),
            () => {
              (x.removeEventListener("focusin", m),
                x.removeEventListener("focusout", b),
                x.removeEventListener("pointermove", m),
                x.removeEventListener("pointerleave", E),
                window.removeEventListener("blur", m),
                window.removeEventListener("focus", v));
            }
          );
        }
      }, [w, i.isClosePausedRef]));
    const y = _.useCallback(
      ({ tabbingDirection: x }) => {
        const m = a().map((v) => {
          const b = v.ref.current,
            E = [b, ...vb(b)];
          return x === "forwards" ? E : E.reverse();
        });
        return (x === "forwards" ? m.reverse() : m).flat();
      },
      [a],
    );
    return (
      _.useEffect(() => {
        const x = p.current;
        if (x) {
          const g = (m) => {
            var E, S, k;
            const v = m.altKey || m.ctrlKey || m.metaKey;
            if (m.key === "Tab" && !v) {
              const T = document.activeElement,
                j = m.shiftKey;
              if (m.target === x && j) {
                (E = u.current) == null || E.focus();
                return;
              }
              const $ = y({ tabbingDirection: j ? "backwards" : "forwards" }),
                B = $.findIndex((I) => I === T);
              cu($.slice(B + 1))
                ? m.preventDefault()
                : j
                  ? (S = u.current) == null || S.focus()
                  : (k = c.current) == null || k.focus();
            }
          };
          return (
            x.addEventListener("keydown", g),
            () => x.removeEventListener("keydown", g)
          );
        }
      }, [a, y]),
      h.jsxs(Wx, {
        ref: l,
        role: "region",
        "aria-label": s.replace("{hotkey}", d),
        tabIndex: -1,
        style: { pointerEvents: w ? void 0 : "none" },
        children: [
          w &&
            h.jsx(Cc, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const x = y({ tabbingDirection: "forwards" });
                cu(x);
              },
            }),
          h.jsx(Zd.Slot, {
            scope: r,
            children: h.jsx(tt.ol, { tabIndex: -1, ...o, ref: f }),
          }),
          w &&
            h.jsx(Cc, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const x = y({ tabbingDirection: "backwards" });
                cu(x);
              },
            }),
        ],
      })
    );
  });
I0.displayName = O0;
var L0 = "ToastFocusProxy",
  Cc = _.forwardRef((e, t) => {
    const { __scopeToast: r, onFocusFromOutsideViewport: n, ...s } = e,
      o = fl(L0, r);
    return h.jsx(hl, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...s,
      ref: t,
      style: { position: "fixed" },
      onFocus: (i) => {
        var u;
        const a = i.relatedTarget;
        !((u = o.viewport) != null && u.contains(a)) && n();
      },
    });
  });
Cc.displayName = L0;
var fi = "Toast",
  ib = "toast.swipeStart",
  ab = "toast.swipeMove",
  lb = "toast.swipeCancel",
  ub = "toast.swipeEnd",
  $0 = _.forwardRef((e, t) => {
    const { forceMount: r, open: n, defaultOpen: s, onOpenChange: o, ...i } = e,
      [a, l] = Jx({ prop: n, defaultProp: s ?? !0, onChange: o, caller: fi });
    return h.jsx(Yd, {
      present: r || a,
      children: h.jsx(hb, {
        open: a,
        ...i,
        ref: t,
        onClose: () => l(!1),
        onPause: Zr(e.onPause),
        onResume: Zr(e.onResume),
        onSwipeStart: Ce(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: Ce(e.onSwipeMove, (u) => {
          const { x: c, y: p } = u.detail.delta;
          (u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${c}px`,
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${p}px`,
            ));
        }),
        onSwipeCancel: Ce(e.onSwipeCancel, (u) => {
          (u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y"));
        }),
        onSwipeEnd: Ce(e.onSwipeEnd, (u) => {
          const { x: c, y: p } = u.detail.delta;
          (u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${c}px`,
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${p}px`,
            ),
            l(!1));
        }),
      }),
    });
  });
$0.displayName = fi;
var [cb, db] = j0(fi, { onClose() {} }),
  hb = _.forwardRef((e, t) => {
    const {
        __scopeToast: r,
        type: n = "foreground",
        duration: s,
        open: o,
        onClose: i,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: u,
        onSwipeStart: c,
        onSwipeMove: p,
        onSwipeCancel: f,
        onSwipeEnd: d,
        ...w
      } = e,
      y = fl(fi, r),
      [x, g] = _.useState(null),
      m = Ft(t, (I) => g(I)),
      v = _.useRef(null),
      b = _.useRef(null),
      E = s || y.duration,
      S = _.useRef(0),
      k = _.useRef(E),
      T = _.useRef(0),
      { onToastAdd: j, onToastRemove: P } = y,
      M = Zr(() => {
        var Q;
        ((x == null ? void 0 : x.contains(document.activeElement)) &&
          ((Q = y.viewport) == null || Q.focus()),
          i());
      }),
      $ = _.useCallback(
        (I) => {
          !I ||
            I === 1 / 0 ||
            (window.clearTimeout(T.current),
            (S.current = new Date().getTime()),
            (T.current = window.setTimeout(M, I)));
        },
        [M],
      );
    (_.useEffect(() => {
      const I = y.viewport;
      if (I) {
        const Q = () => {
            ($(k.current), u == null || u());
          },
          H = () => {
            const D = new Date().getTime() - S.current;
            ((k.current = k.current - D),
              window.clearTimeout(T.current),
              l == null || l());
          };
        return (
          I.addEventListener(Sc, H),
          I.addEventListener(kc, Q),
          () => {
            (I.removeEventListener(Sc, H), I.removeEventListener(kc, Q));
          }
        );
      }
    }, [y.viewport, E, l, u, $]),
      _.useEffect(() => {
        o && !y.isClosePausedRef.current && $(E);
      }, [o, E, y.isClosePausedRef, $]),
      _.useEffect(() => (j(), () => P()), [j, P]));
    const B = _.useMemo(() => (x ? V0(x) : null), [x]);
    return y.viewport
      ? h.jsxs(h.Fragment, {
          children: [
            B &&
              h.jsx(fb, {
                __scopeToast: r,
                role: "status",
                "aria-live": n === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: B,
              }),
            h.jsx(cb, {
              scope: r,
              onClose: M,
              children: Qs.createPortal(
                h.jsx(Zd.ItemSlot, {
                  scope: r,
                  children: h.jsx(Vx, {
                    asChild: !0,
                    onEscapeKeyDown: Ce(a, () => {
                      (y.isFocusedToastEscapeKeyDownRef.current || M(),
                        (y.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: h.jsx(tt.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": o ? "open" : "closed",
                      "data-swipe-direction": y.swipeDirection,
                      ...w,
                      ref: m,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: Ce(e.onKeyDown, (I) => {
                        I.key === "Escape" &&
                          (a == null || a(I.nativeEvent),
                          I.nativeEvent.defaultPrevented ||
                            ((y.isFocusedToastEscapeKeyDownRef.current = !0),
                            M()));
                      }),
                      onPointerDown: Ce(e.onPointerDown, (I) => {
                        I.button === 0 &&
                          (v.current = { x: I.clientX, y: I.clientY });
                      }),
                      onPointerMove: Ce(e.onPointerMove, (I) => {
                        if (!v.current) return;
                        const Q = I.clientX - v.current.x,
                          H = I.clientY - v.current.y,
                          D = !!b.current,
                          C = ["left", "right"].includes(y.swipeDirection),
                          R = ["left", "up"].includes(y.swipeDirection)
                            ? Math.min
                            : Math.max,
                          L = C ? R(0, Q) : 0,
                          q = C ? 0 : R(0, H),
                          z = I.pointerType === "touch" ? 10 : 2,
                          Y = { x: L, y: q },
                          Z = { originalEvent: I, delta: Y };
                        D
                          ? ((b.current = Y), Ui(ab, p, Z, { discrete: !1 }))
                          : qf(Y, y.swipeDirection, z)
                            ? ((b.current = Y),
                              Ui(ib, c, Z, { discrete: !1 }),
                              I.target.setPointerCapture(I.pointerId))
                            : (Math.abs(Q) > z || Math.abs(H) > z) &&
                              (v.current = null);
                      }),
                      onPointerUp: Ce(e.onPointerUp, (I) => {
                        const Q = b.current,
                          H = I.target;
                        if (
                          (H.hasPointerCapture(I.pointerId) &&
                            H.releasePointerCapture(I.pointerId),
                          (b.current = null),
                          (v.current = null),
                          Q)
                        ) {
                          const D = I.currentTarget,
                            C = { originalEvent: I, delta: Q };
                          (qf(Q, y.swipeDirection, y.swipeThreshold)
                            ? Ui(ub, d, C, { discrete: !0 })
                            : Ui(lb, f, C, { discrete: !0 }),
                            D.addEventListener(
                              "click",
                              (R) => R.preventDefault(),
                              { once: !0 },
                            ));
                        }
                      }),
                    }),
                  }),
                }),
                y.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  fb = (e) => {
    const { __scopeToast: t, children: r, ...n } = e,
      s = fl(fi, t),
      [o, i] = _.useState(!1),
      [a, l] = _.useState(!1);
    return (
      gb(() => i(!0)),
      _.useEffect(() => {
        const u = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      a
        ? null
        : h.jsx(N0, {
            asChild: !0,
            children: h.jsx(hl, {
              ...n,
              children:
                o && h.jsxs(h.Fragment, { children: [s.label, " ", r] }),
            }),
          })
    );
  },
  pb = "ToastTitle",
  M0 = _.forwardRef((e, t) => {
    const { __scopeToast: r, ...n } = e;
    return h.jsx(tt.div, { ...n, ref: t });
  });
M0.displayName = pb;
var mb = "ToastDescription",
  D0 = _.forwardRef((e, t) => {
    const { __scopeToast: r, ...n } = e;
    return h.jsx(tt.div, { ...n, ref: t });
  });
D0.displayName = mb;
var F0 = "ToastAction",
  U0 = _.forwardRef((e, t) => {
    const { altText: r, ...n } = e;
    return r.trim()
      ? h.jsx(z0, {
          altText: r,
          asChild: !0,
          children: h.jsx(eh, { ...n, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${F0}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
U0.displayName = F0;
var B0 = "ToastClose",
  eh = _.forwardRef((e, t) => {
    const { __scopeToast: r, ...n } = e,
      s = db(B0, r);
    return h.jsx(z0, {
      asChild: !0,
      children: h.jsx(tt.button, {
        type: "button",
        ...n,
        ref: t,
        onClick: Ce(e.onClick, s.onClose),
      }),
    });
  });
eh.displayName = B0;
var z0 = _.forwardRef((e, t) => {
  const { __scopeToast: r, altText: n, ...s } = e;
  return h.jsx(tt.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": n || void 0,
    ...s,
    ref: t,
  });
});
function V0(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((n) => {
      if (
        (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent),
        yb(n))
      ) {
        const s = n.ariaHidden || n.hidden || n.style.display === "none",
          o = n.dataset.radixToastAnnounceExclude === "";
        if (!s)
          if (o) {
            const i = n.dataset.radixToastAnnounceAlt;
            i && t.push(i);
          } else t.push(...V0(n));
      }
    }),
    t
  );
}
function Ui(e, t, r, { discrete: n }) {
  const s = r.originalEvent.currentTarget,
    o = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: r });
  (t && s.addEventListener(e, t, { once: !0 }),
    n ? C0(s, o) : s.dispatchEvent(o));
}
var qf = (e, t, r = 0) => {
  const n = Math.abs(e.x),
    s = Math.abs(e.y),
    o = n > s;
  return t === "left" || t === "right" ? o && n > r : !o && s > r;
};
function gb(e = () => {}) {
  const t = Zr(e);
  en(() => {
    let r = 0,
      n = 0;
    return (
      (r = window.requestAnimationFrame(
        () => (n = window.requestAnimationFrame(t)),
      )),
      () => {
        (window.cancelAnimationFrame(r), window.cancelAnimationFrame(n));
      }
    );
  }, [t]);
}
function yb(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function vb(e) {
  const t = [],
    r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (n) => {
        const s = n.tagName === "INPUT" && n.type === "hidden";
        return n.disabled || n.hidden || s
          ? NodeFilter.FILTER_SKIP
          : n.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function cu(e) {
  const t = document.activeElement;
  return e.some((r) =>
    r === t ? !0 : (r.focus(), document.activeElement !== t),
  );
}
var wb = A0,
  W0 = I0,
  H0 = $0,
  q0 = M0,
  K0 = D0,
  G0 = U0,
  Q0 = eh;
function J0(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (r = J0(e[t])) && (n && (n += " "), (n += r));
    } else for (r in e) e[r] && (n && (n += " "), (n += r));
  return n;
}
function Y0() {
  for (var e, t, r = 0, n = "", s = arguments.length; r < s; r++)
    (e = arguments[r]) && (t = J0(e)) && (n && (n += " "), (n += t));
  return n;
}
const Kf = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Gf = Y0,
  xb = (e, t) => (r) => {
    var n;
    if ((t == null ? void 0 : t.variants) == null)
      return Gf(
        e,
        r == null ? void 0 : r.class,
        r == null ? void 0 : r.className,
      );
    const { variants: s, defaultVariants: o } = t,
      i = Object.keys(s).map((u) => {
        const c = r == null ? void 0 : r[u],
          p = o == null ? void 0 : o[u];
        if (c === null) return null;
        const f = Kf(c) || Kf(p);
        return s[u][f];
      }),
      a =
        r &&
        Object.entries(r).reduce((u, c) => {
          let [p, f] = c;
          return (f === void 0 || (u[p] = f), u);
        }, {}),
      l =
        t == null || (n = t.compoundVariants) === null || n === void 0
          ? void 0
          : n.reduce((u, c) => {
              let { class: p, className: f, ...d } = c;
              return Object.entries(d).every((w) => {
                let [y, x] = w;
                return Array.isArray(x)
                  ? x.includes({ ...o, ...a }[y])
                  : { ...o, ...a }[y] === x;
              })
                ? [...u, p, f]
                : u;
            }, []);
    return Gf(
      e,
      i,
      l,
      r == null ? void 0 : r.class,
      r == null ? void 0 : r.className,
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bb = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  X0 = (...e) =>
    e
      .filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var _b = {
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
 */ const Eb = _.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: n,
      className: s = "",
      children: o,
      iconNode: i,
      ...a
    },
    l,
  ) =>
    _.createElement(
      "svg",
      {
        ref: l,
        ..._b,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: n ? (Number(r) * 24) / Number(t) : r,
        className: X0("lucide", s),
        ...a,
      },
      [
        ...i.map(([u, c]) => _.createElement(u, c)),
        ...(Array.isArray(o) ? o : [o]),
      ],
    ),
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xe = (e, t) => {
  const r = _.forwardRef(({ className: n, ...s }, o) =>
    _.createElement(Eb, {
      ref: o,
      iconNode: t,
      className: X0(`lucide-${bb(e)}`, n),
      ...s,
    }),
  );
  return ((r.displayName = `${e}`), r);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sb = xe("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kb = xe("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cb = xe("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z0 = xe("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tb = xe("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const th = xe("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tc = xe("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pb = xe("Copy", [
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
 */ const Rb = xe("Flame", [
  [
    "path",
    {
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nb = xe("Hash", [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jb = xe("Headphones", [
  [
    "path",
    {
      d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
      key: "1xhozi",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ab = xe("Key", [
  [
    "path",
    {
      d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",
      key: "g0fldk",
    },
  ],
  ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
  ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const To = xe("Lock", [
  [
    "rect",
    {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2",
      key: "1w4ew1",
    },
  ],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ob = xe("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ib = xe("QrCode", [
  ["rect", { width: "5", height: "5", x: "3", y: "3", rx: "1", key: "1tu5fj" }],
  [
    "rect",
    { width: "5", height: "5", x: "16", y: "3", rx: "1", key: "1v8r4q" },
  ],
  [
    "rect",
    { width: "5", height: "5", x: "3", y: "16", rx: "1", key: "1x03jg" },
  ],
  ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3", key: "177gqh" }],
  ["path", { d: "M21 21v.01", key: "ents32" }],
  ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7", key: "8crl2c" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M12 3h.01", key: "n36tog" }],
  ["path", { d: "M12 16v.01", key: "133mhm" }],
  ["path", { d: "M16 12h1", key: "1slzba" }],
  ["path", { d: "M21 12v.01", key: "1lwtk9" }],
  ["path", { d: "M12 21v-1", key: "1880an" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lb = xe("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3",
    },
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ey = xe("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ty = xe("Smartphone", [
  [
    "rect",
    {
      width: "14",
      height: "20",
      x: "5",
      y: "2",
      rx: "2",
      ry: "2",
      key: "1yt0o3",
    },
  ],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $b = xe("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq",
    },
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mb = xe("Wallet", [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6",
    },
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pc = xe("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  rh = "-",
  Db = (e) => {
    const t = Ub(e),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: n } = e;
    return {
      getClassGroupId: (i) => {
        const a = i.split(rh);
        return (a[0] === "" && a.length !== 1 && a.shift(), ry(a, t) || Fb(i));
      },
      getConflictingClassGroupIds: (i, a) => {
        const l = r[i] || [];
        return a && n[i] ? [...l, ...n[i]] : l;
      },
    };
  },
  ry = (e, t) => {
    var i;
    if (e.length === 0) return t.classGroupId;
    const r = e[0],
      n = t.nextPart.get(r),
      s = n ? ry(e.slice(1), n) : void 0;
    if (s) return s;
    if (t.validators.length === 0) return;
    const o = e.join(rh);
    return (i = t.validators.find(({ validator: a }) => a(o))) == null
      ? void 0
      : i.classGroupId;
  },
  Qf = /^\[(.+)\]$/,
  Fb = (e) => {
    if (Qf.test(e)) {
      const t = Qf.exec(e)[1],
        r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (r) return "arbitrary.." + r;
    }
  },
  Ub = (e) => {
    const { theme: t, prefix: r } = e,
      n = { nextPart: new Map(), validators: [] };
    return (
      zb(Object.entries(e.classGroups), r).forEach(([o, i]) => {
        Rc(i, n, o, t);
      }),
      n
    );
  },
  Rc = (e, t, r, n) => {
    e.forEach((s) => {
      if (typeof s == "string") {
        const o = s === "" ? t : Jf(t, s);
        o.classGroupId = r;
        return;
      }
      if (typeof s == "function") {
        if (Bb(s)) {
          Rc(s(n), t, r, n);
          return;
        }
        t.validators.push({ validator: s, classGroupId: r });
        return;
      }
      Object.entries(s).forEach(([o, i]) => {
        Rc(i, Jf(t, o), r, n);
      });
    });
  },
  Jf = (e, t) => {
    let r = e;
    return (
      t.split(rh).forEach((n) => {
        (r.nextPart.has(n) ||
          r.nextPart.set(n, { nextPart: new Map(), validators: [] }),
          (r = r.nextPart.get(n)));
      }),
      r
    );
  },
  Bb = (e) => e.isThemeGetter,
  zb = (e, t) =>
    t
      ? e.map(([r, n]) => {
          const s = n.map((o) =>
            typeof o == "string"
              ? t + o
              : typeof o == "object"
                ? Object.fromEntries(
                    Object.entries(o).map(([i, a]) => [t + i, a]),
                  )
                : o,
          );
          return [r, s];
        })
      : e,
  Vb = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      r = new Map(),
      n = new Map();
    const s = (o, i) => {
      (r.set(o, i), t++, t > e && ((t = 0), (n = r), (r = new Map())));
    };
    return {
      get(o) {
        let i = r.get(o);
        if (i !== void 0) return i;
        if ((i = n.get(o)) !== void 0) return (s(o, i), i);
      },
      set(o, i) {
        r.has(o) ? r.set(o, i) : s(o, i);
      },
    };
  },
  ny = "!",
  Wb = (e) => {
    const { separator: t, experimentalParseClassName: r } = e,
      n = t.length === 1,
      s = t[0],
      o = t.length,
      i = (a) => {
        const l = [];
        let u = 0,
          c = 0,
          p;
        for (let x = 0; x < a.length; x++) {
          let g = a[x];
          if (u === 0) {
            if (g === s && (n || a.slice(x, x + o) === t)) {
              (l.push(a.slice(c, x)), (c = x + o));
              continue;
            }
            if (g === "/") {
              p = x;
              continue;
            }
          }
          g === "[" ? u++ : g === "]" && u--;
        }
        const f = l.length === 0 ? a : a.substring(c),
          d = f.startsWith(ny),
          w = d ? f.substring(1) : f,
          y = p && p > c ? p - c : void 0;
        return {
          modifiers: l,
          hasImportantModifier: d,
          baseClassName: w,
          maybePostfixModifierPosition: y,
        };
      };
    return r ? (a) => r({ className: a, parseClassName: i }) : i;
  },
  Hb = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let r = [];
    return (
      e.forEach((n) => {
        n[0] === "[" ? (t.push(...r.sort(), n), (r = [])) : r.push(n);
      }),
      t.push(...r.sort()),
      t
    );
  },
  qb = (e) => ({ cache: Vb(e.cacheSize), parseClassName: Wb(e), ...Db(e) }),
  Kb = /\s+/,
  Gb = (e, t) => {
    const {
        parseClassName: r,
        getClassGroupId: n,
        getConflictingClassGroupIds: s,
      } = t,
      o = [],
      i = e.trim().split(Kb);
    let a = "";
    for (let l = i.length - 1; l >= 0; l -= 1) {
      const u = i[l],
        {
          modifiers: c,
          hasImportantModifier: p,
          baseClassName: f,
          maybePostfixModifierPosition: d,
        } = r(u);
      let w = !!d,
        y = n(w ? f.substring(0, d) : f);
      if (!y) {
        if (!w) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((y = n(f)), !y)) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        w = !1;
      }
      const x = Hb(c).join(":"),
        g = p ? x + ny : x,
        m = g + y;
      if (o.includes(m)) continue;
      o.push(m);
      const v = s(y, w);
      for (let b = 0; b < v.length; ++b) {
        const E = v[b];
        o.push(g + E);
      }
      a = u + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function Qb() {
  let e = 0,
    t,
    r,
    n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = sy(t)) && (n && (n += " "), (n += r));
  return n;
}
const sy = (e) => {
  if (typeof e == "string") return e;
  let t,
    r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = sy(e[n])) && (r && (r += " "), (r += t));
  return r;
};
function Jb(e, ...t) {
  let r,
    n,
    s,
    o = i;
  function i(l) {
    const u = t.reduce((c, p) => p(c), e());
    return ((r = qb(u)), (n = r.cache.get), (s = r.cache.set), (o = a), a(l));
  }
  function a(l) {
    const u = n(l);
    if (u) return u;
    const c = Gb(l, r);
    return (s(l, c), c);
  }
  return function () {
    return o(Qb.apply(null, arguments));
  };
}
const ae = (e) => {
    const t = (r) => r[e] || [];
    return ((t.isThemeGetter = !0), t);
  },
  oy = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Yb = /^\d+\/\d+$/,
  Xb = new Set(["px", "full", "screen"]),
  Zb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  e_ =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  t_ = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  r_ = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  n_ =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  tr = (e) => bs(e) || Xb.has(e) || Yb.test(e),
  kr = (e) => Js(e, "length", d_),
  bs = (e) => !!e && !Number.isNaN(Number(e)),
  du = (e) => Js(e, "number", bs),
  uo = (e) => !!e && Number.isInteger(Number(e)),
  s_ = (e) => e.endsWith("%") && bs(e.slice(0, -1)),
  J = (e) => oy.test(e),
  Cr = (e) => Zb.test(e),
  o_ = new Set(["length", "size", "percentage"]),
  i_ = (e) => Js(e, o_, iy),
  a_ = (e) => Js(e, "position", iy),
  l_ = new Set(["image", "url"]),
  u_ = (e) => Js(e, l_, f_),
  c_ = (e) => Js(e, "", h_),
  co = () => !0,
  Js = (e, t, r) => {
    const n = oy.exec(e);
    return n
      ? n[1]
        ? typeof t == "string"
          ? n[1] === t
          : t.has(n[1])
        : r(n[2])
      : !1;
  },
  d_ = (e) => e_.test(e) && !t_.test(e),
  iy = () => !1,
  h_ = (e) => r_.test(e),
  f_ = (e) => n_.test(e),
  p_ = () => {
    const e = ae("colors"),
      t = ae("spacing"),
      r = ae("blur"),
      n = ae("brightness"),
      s = ae("borderColor"),
      o = ae("borderRadius"),
      i = ae("borderSpacing"),
      a = ae("borderWidth"),
      l = ae("contrast"),
      u = ae("grayscale"),
      c = ae("hueRotate"),
      p = ae("invert"),
      f = ae("gap"),
      d = ae("gradientColorStops"),
      w = ae("gradientColorStopPositions"),
      y = ae("inset"),
      x = ae("margin"),
      g = ae("opacity"),
      m = ae("padding"),
      v = ae("saturate"),
      b = ae("scale"),
      E = ae("sepia"),
      S = ae("skew"),
      k = ae("space"),
      T = ae("translate"),
      j = () => ["auto", "contain", "none"],
      P = () => ["auto", "hidden", "clip", "visible", "scroll"],
      M = () => ["auto", J, t],
      $ = () => [J, t],
      B = () => ["", tr, kr],
      I = () => ["auto", bs, J],
      Q = () => [
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
      H = () => ["solid", "dashed", "dotted", "double", "none"],
      D = () => [
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
      C = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      R = () => ["", "0", J],
      L = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      q = () => [bs, J];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [co],
        spacing: [tr, kr],
        blur: ["none", "", Cr, J],
        brightness: q(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Cr, J],
        borderSpacing: $(),
        borderWidth: B(),
        contrast: q(),
        grayscale: R(),
        hueRotate: q(),
        invert: R(),
        gap: $(),
        gradientColorStops: [e],
        gradientColorStopPositions: [s_, kr],
        inset: M(),
        margin: M(),
        opacity: q(),
        padding: $(),
        saturate: q(),
        scale: q(),
        sepia: R(),
        skew: q(),
        space: $(),
        translate: $(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", J] }],
        container: ["container"],
        columns: [{ columns: [Cr] }],
        "break-after": [{ "break-after": L() }],
        "break-before": [{ "break-before": L() }],
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
        "object-position": [{ object: [...Q(), J] }],
        overflow: [{ overflow: P() }],
        "overflow-x": [{ "overflow-x": P() }],
        "overflow-y": [{ "overflow-y": P() }],
        overscroll: [{ overscroll: j() }],
        "overscroll-x": [{ "overscroll-x": j() }],
        "overscroll-y": [{ "overscroll-y": j() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [y] }],
        "inset-x": [{ "inset-x": [y] }],
        "inset-y": [{ "inset-y": [y] }],
        start: [{ start: [y] }],
        end: [{ end: [y] }],
        top: [{ top: [y] }],
        right: [{ right: [y] }],
        bottom: [{ bottom: [y] }],
        left: [{ left: [y] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", uo, J] }],
        basis: [{ basis: M() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", J] }],
        grow: [{ grow: R() }],
        shrink: [{ shrink: R() }],
        order: [{ order: ["first", "last", "none", uo, J] }],
        "grid-cols": [{ "grid-cols": [co] }],
        "col-start-end": [{ col: ["auto", { span: ["full", uo, J] }, J] }],
        "col-start": [{ "col-start": I() }],
        "col-end": [{ "col-end": I() }],
        "grid-rows": [{ "grid-rows": [co] }],
        "row-start-end": [{ row: ["auto", { span: [uo, J] }, J] }],
        "row-start": [{ "row-start": I() }],
        "row-end": [{ "row-end": I() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", J] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", J] }],
        gap: [{ gap: [f] }],
        "gap-x": [{ "gap-x": [f] }],
        "gap-y": [{ "gap-y": [f] }],
        "justify-content": [{ justify: ["normal", ...C()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...C(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...C(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [m] }],
        px: [{ px: [m] }],
        py: [{ py: [m] }],
        ps: [{ ps: [m] }],
        pe: [{ pe: [m] }],
        pt: [{ pt: [m] }],
        pr: [{ pr: [m] }],
        pb: [{ pb: [m] }],
        pl: [{ pl: [m] }],
        m: [{ m: [x] }],
        mx: [{ mx: [x] }],
        my: [{ my: [x] }],
        ms: [{ ms: [x] }],
        me: [{ me: [x] }],
        mt: [{ mt: [x] }],
        mr: [{ mr: [x] }],
        mb: [{ mb: [x] }],
        ml: [{ ml: [x] }],
        "space-x": [{ "space-x": [k] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [k] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", J, t] }],
        "min-w": [{ "min-w": [J, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              J,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Cr] },
              Cr,
            ],
          },
        ],
        h: [{ h: [J, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [J, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [J, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [J, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Cr, kr] }],
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
              du,
            ],
          },
        ],
        "font-family": [{ font: [co] }],
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
              J,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", bs, du] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              tr,
              J,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", J] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", J] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [g] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [g] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...H(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", tr, kr] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", tr, J] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: $() }],
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
              J,
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
        content: [{ content: ["none", J] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [g] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Q(), a_] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", i_] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              u_,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [w] }],
        "gradient-via-pos": [{ via: [w] }],
        "gradient-to-pos": [{ to: [w] }],
        "gradient-from": [{ from: [d] }],
        "gradient-via": [{ via: [d] }],
        "gradient-to": [{ to: [d] }],
        rounded: [{ rounded: [o] }],
        "rounded-s": [{ "rounded-s": [o] }],
        "rounded-e": [{ "rounded-e": [o] }],
        "rounded-t": [{ "rounded-t": [o] }],
        "rounded-r": [{ "rounded-r": [o] }],
        "rounded-b": [{ "rounded-b": [o] }],
        "rounded-l": [{ "rounded-l": [o] }],
        "rounded-ss": [{ "rounded-ss": [o] }],
        "rounded-se": [{ "rounded-se": [o] }],
        "rounded-ee": [{ "rounded-ee": [o] }],
        "rounded-es": [{ "rounded-es": [o] }],
        "rounded-tl": [{ "rounded-tl": [o] }],
        "rounded-tr": [{ "rounded-tr": [o] }],
        "rounded-br": [{ "rounded-br": [o] }],
        "rounded-bl": [{ "rounded-bl": [o] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [g] }],
        "border-style": [{ border: [...H(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [g] }],
        "divide-style": [{ divide: H() }],
        "border-color": [{ border: [s] }],
        "border-color-x": [{ "border-x": [s] }],
        "border-color-y": [{ "border-y": [s] }],
        "border-color-s": [{ "border-s": [s] }],
        "border-color-e": [{ "border-e": [s] }],
        "border-color-t": [{ "border-t": [s] }],
        "border-color-r": [{ "border-r": [s] }],
        "border-color-b": [{ "border-b": [s] }],
        "border-color-l": [{ "border-l": [s] }],
        "divide-color": [{ divide: [s] }],
        "outline-style": [{ outline: ["", ...H()] }],
        "outline-offset": [{ "outline-offset": [tr, J] }],
        "outline-w": [{ outline: [tr, kr] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: B() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [g] }],
        "ring-offset-w": [{ "ring-offset": [tr, kr] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Cr, c_] }],
        "shadow-color": [{ shadow: [co] }],
        opacity: [{ opacity: [g] }],
        "mix-blend": [{ "mix-blend": [...D(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": D() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [r] }],
        brightness: [{ brightness: [n] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Cr, J] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [c] }],
        invert: [{ invert: [p] }],
        saturate: [{ saturate: [v] }],
        sepia: [{ sepia: [E] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [r] }],
        "backdrop-brightness": [{ "backdrop-brightness": [n] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
        "backdrop-invert": [{ "backdrop-invert": [p] }],
        "backdrop-opacity": [{ "backdrop-opacity": [g] }],
        "backdrop-saturate": [{ "backdrop-saturate": [v] }],
        "backdrop-sepia": [{ "backdrop-sepia": [E] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [i] }],
        "border-spacing-x": [{ "border-spacing-x": [i] }],
        "border-spacing-y": [{ "border-spacing-y": [i] }],
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
              J,
            ],
          },
        ],
        duration: [{ duration: q() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", J] }],
        delay: [{ delay: q() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", J] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [b] }],
        "scale-x": [{ "scale-x": [b] }],
        "scale-y": [{ "scale-y": [b] }],
        rotate: [{ rotate: [uo, J] }],
        "translate-x": [{ "translate-x": [T] }],
        "translate-y": [{ "translate-y": [T] }],
        "skew-x": [{ "skew-x": [S] }],
        "skew-y": [{ "skew-y": [S] }],
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
              J,
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
              J,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": $() }],
        "scroll-mx": [{ "scroll-mx": $() }],
        "scroll-my": [{ "scroll-my": $() }],
        "scroll-ms": [{ "scroll-ms": $() }],
        "scroll-me": [{ "scroll-me": $() }],
        "scroll-mt": [{ "scroll-mt": $() }],
        "scroll-mr": [{ "scroll-mr": $() }],
        "scroll-mb": [{ "scroll-mb": $() }],
        "scroll-ml": [{ "scroll-ml": $() }],
        "scroll-p": [{ "scroll-p": $() }],
        "scroll-px": [{ "scroll-px": $() }],
        "scroll-py": [{ "scroll-py": $() }],
        "scroll-ps": [{ "scroll-ps": $() }],
        "scroll-pe": [{ "scroll-pe": $() }],
        "scroll-pt": [{ "scroll-pt": $() }],
        "scroll-pr": [{ "scroll-pr": $() }],
        "scroll-pb": [{ "scroll-pb": $() }],
        "scroll-pl": [{ "scroll-pl": $() }],
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
          { "will-change": ["auto", "scroll", "contents", "transform", J] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [tr, kr, du] }],
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
  m_ = Jb(p_);
function Dn(...e) {
  return m_(Y0(e));
}
const g_ = wb,
  ay = _.forwardRef(({ className: e, ...t }, r) =>
    h.jsx(W0, {
      ref: r,
      className: Dn(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e,
      ),
      ...t,
    }),
  );
ay.displayName = W0.displayName;
const y_ = xb(
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
    },
  ),
  ly = _.forwardRef(({ className: e, variant: t, ...r }, n) =>
    h.jsx(H0, { ref: n, className: Dn(y_({ variant: t }), e), ...r }),
  );
ly.displayName = H0.displayName;
const v_ = _.forwardRef(({ className: e, ...t }, r) =>
  h.jsx(G0, {
    ref: r,
    className: Dn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e,
    ),
    ...t,
  }),
);
v_.displayName = G0.displayName;
const uy = _.forwardRef(({ className: e, ...t }, r) =>
  h.jsx(Q0, {
    ref: r,
    className: Dn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e,
    ),
    "toast-close": "",
    ...t,
    children: h.jsx(Pc, { className: "h-4 w-4" }),
  }),
);
uy.displayName = Q0.displayName;
const cy = _.forwardRef(({ className: e, ...t }, r) =>
  h.jsx(q0, { ref: r, className: Dn("text-sm font-semibold", e), ...t }),
);
cy.displayName = q0.displayName;
const dy = _.forwardRef(({ className: e, ...t }, r) =>
  h.jsx(K0, { ref: r, className: Dn("text-sm opacity-90", e), ...t }),
);
dy.displayName = K0.displayName;
function w_() {
  const { toasts: e } = Tx();
  return h.jsxs(g_, {
    children: [
      e.map(function ({ id: t, title: r, description: n, action: s, ...o }) {
        return h.jsxs(
          ly,
          {
            ...o,
            children: [
              h.jsxs("div", {
                className: "grid gap-1",
                children: [
                  r && h.jsx(cy, { children: r }),
                  n && h.jsx(dy, { children: n }),
                ],
              }),
              s,
              h.jsx(uy, {}),
            ],
          },
          t,
        );
      }),
      h.jsx(ay, {}),
    ],
  });
}
var Yf = ["light", "dark"],
  x_ = "(prefers-color-scheme: dark)",
  b_ = _.createContext(void 0),
  __ = { setTheme: (e) => {}, themes: [] },
  E_ = () => {
    var e;
    return (e = _.useContext(b_)) != null ? e : __;
  };
_.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: r,
    enableSystem: n,
    enableColorScheme: s,
    defaultTheme: o,
    value: i,
    attrs: a,
    nonce: l,
  }) => {
    let u = o === "system",
      c =
        r === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map((w) => `'${w}'`).join(",")})`};`
          : `var d=document.documentElement,n='${r}',s='setAttribute';`,
      p = s
        ? Yf.includes(o) && o
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      f = (w, y = !1, x = !0) => {
        let g = i ? i[w] : w,
          m = y ? w + "|| ''" : `'${g}'`,
          v = "";
        return (
          s &&
            x &&
            !y &&
            Yf.includes(w) &&
            (v += `d.style.colorScheme = '${w}';`),
          r === "class"
            ? y || g
              ? (v += `c.add(${m})`)
              : (v += "null")
            : g && (v += `d[s](n,${m})`),
          v
        );
      },
      d = e
        ? `!function(){${c}${f(e)}}()`
        : n
          ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${x_}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${f(i ? "x[e]" : "e", !0)}}${u ? "" : "else{" + f(o, !1, !1) + "}"}${p}}catch(e){}}()`
          : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${f(i ? "x[e]" : "e", !0)}}else{${f(o, !1, !1)};}${p}}catch(t){}}();`;
    return _.createElement("script", {
      nonce: l,
      dangerouslySetInnerHTML: { __html: d },
    });
  },
);
var S_ = (e) => {
    switch (e) {
      case "success":
        return T_;
      case "info":
        return R_;
      case "warning":
        return P_;
      case "error":
        return N_;
      default:
        return null;
    }
  },
  k_ = Array(12).fill(0),
  C_ = ({ visible: e, className: t }) =>
    O.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      O.createElement(
        "div",
        { className: "sonner-spinner" },
        k_.map((r, n) =>
          O.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${n}`,
          }),
        ),
      ),
    ),
  T_ = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  P_ = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  R_ = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  N_ = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  j_ = O.createElement(
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
    O.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    O.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  ),
  A_ = () => {
    let [e, t] = O.useState(document.hidden);
    return (
      O.useEffect(() => {
        let r = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", r),
          () => window.removeEventListener("visibilitychange", r)
        );
      }, []),
      e
    );
  },
  Nc = 1,
  O_ = class {
    constructor() {
      ((this.subscribe = (e) => (
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
          (this.publish(e), (this.toasts = [...this.toasts, e]));
        }),
        (this.create = (e) => {
          var t;
          let { message: r, ...n } = e,
            s =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : Nc++,
            o = this.toasts.find((a) => a.id === s),
            i = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(s) && this.dismissedToasts.delete(s),
            o
              ? (this.toasts = this.toasts.map((a) =>
                  a.id === s
                    ? (this.publish({ ...a, ...e, id: s, title: r }),
                      { ...a, ...e, id: s, dismissible: i, title: r })
                    : a,
                ))
              : this.addToast({ title: r, ...n, dismissible: i, id: s }),
            s
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((r) => r({ id: t.id, dismiss: !0 }));
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
          let r;
          t.loading !== void 0 &&
            (r = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let n = e instanceof Promise ? e : e(),
            s = r !== void 0,
            o,
            i = n
              .then(async (l) => {
                if (((o = ["resolve", l]), O.isValidElement(l)))
                  ((s = !1),
                    this.create({ id: r, type: "default", message: l }));
                else if (L_(l) && !l.ok) {
                  s = !1;
                  let u =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${l.status}`)
                        : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${l.status}`)
                        : t.description;
                  this.create({
                    id: r,
                    type: "error",
                    message: u,
                    description: c,
                  });
                } else if (t.success !== void 0) {
                  s = !1;
                  let u =
                      typeof t.success == "function"
                        ? await t.success(l)
                        : t.success,
                    c =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: r,
                    type: "success",
                    message: u,
                    description: c,
                  });
                }
              })
              .catch(async (l) => {
                if (((o = ["reject", l]), t.error !== void 0)) {
                  s = !1;
                  let u =
                      typeof t.error == "function" ? await t.error(l) : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: r,
                    type: "error",
                    message: u,
                    description: c,
                  });
                }
              })
              .finally(() => {
                var l;
                (s && (this.dismiss(r), (r = void 0)),
                  (l = t.finally) == null || l.call(t));
              }),
            a = () =>
              new Promise((l, u) =>
                i.then(() => (o[0] === "reject" ? u(o[1]) : l(o[1]))).catch(u),
              );
          return typeof r != "string" && typeof r != "number"
            ? { unwrap: a }
            : Object.assign(r, { unwrap: a });
        }),
        (this.custom = (e, t) => {
          let r = (t == null ? void 0 : t.id) || Nc++;
          return (this.create({ jsx: e(r), id: r, ...t }), r);
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()));
    }
  },
  Ge = new O_(),
  I_ = (e, t) => {
    let r = (t == null ? void 0 : t.id) || Nc++;
    return (Ge.addToast({ title: e, ...t, id: r }), r);
  },
  L_ = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  $_ = I_,
  M_ = () => Ge.toasts,
  D_ = () => Ge.getActiveToasts();
Object.assign(
  $_,
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
  { getHistory: M_, getToasts: D_ },
);
function F_(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let r = document.head || document.getElementsByTagName("head")[0],
    n = document.createElement("style");
  ((n.type = "text/css"),
    t === "top" && r.firstChild
      ? r.insertBefore(n, r.firstChild)
      : r.appendChild(n),
    n.styleSheet
      ? (n.styleSheet.cssText = e)
      : n.appendChild(document.createTextNode(e)));
}
F_(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Bi(e) {
  return e.label !== void 0;
}
var U_ = 3,
  B_ = "32px",
  z_ = "16px",
  Xf = 4e3,
  V_ = 356,
  W_ = 14,
  H_ = 20,
  q_ = 200;
function Ct(...e) {
  return e.filter(Boolean).join(" ");
}
function K_(e) {
  let [t, r] = e.split("-"),
    n = [];
  return (t && n.push(t), r && n.push(r), n);
}
var G_ = (e) => {
  var t, r, n, s, o, i, a, l, u, c, p;
  let {
      invert: f,
      toast: d,
      unstyled: w,
      interacting: y,
      setHeights: x,
      visibleToasts: g,
      heights: m,
      index: v,
      toasts: b,
      expanded: E,
      removeToast: S,
      defaultRichColors: k,
      closeButton: T,
      style: j,
      cancelButtonStyle: P,
      actionButtonStyle: M,
      className: $ = "",
      descriptionClassName: B = "",
      duration: I,
      position: Q,
      gap: H,
      loadingIcon: D,
      expandByDefault: C,
      classNames: R,
      icons: L,
      closeButtonAriaLabel: q = "Close toast",
      pauseWhenPageIsHidden: z,
    } = e,
    [Y, Z] = O.useState(null),
    [be, Le] = O.useState(null),
    [re, Fn] = O.useState(!1),
    [vr, ln] = O.useState(!1),
    [wr, Un] = O.useState(!1),
    [xr, vi] = O.useState(!1),
    [jl, wi] = O.useState(!1),
    [Al, Zs] = O.useState(0),
    [Bn, kh] = O.useState(0),
    eo = O.useRef(d.duration || I || Xf),
    Ch = O.useRef(null),
    un = O.useRef(null),
    Bv = v === 0,
    zv = v + 1 <= g,
    pt = d.type,
    zn = d.dismissible !== !1,
    Vv = d.className || "",
    Wv = d.descriptionClassName || "",
    xi = O.useMemo(
      () => m.findIndex((K) => K.toastId === d.id) || 0,
      [m, d.id],
    ),
    Hv = O.useMemo(() => {
      var K;
      return (K = d.closeButton) != null ? K : T;
    }, [d.closeButton, T]),
    Th = O.useMemo(() => d.duration || I || Xf, [d.duration, I]),
    Ol = O.useRef(0),
    Vn = O.useRef(0),
    Ph = O.useRef(0),
    Wn = O.useRef(null),
    [qv, Kv] = Q.split("-"),
    Rh = O.useMemo(
      () => m.reduce((K, se, ce) => (ce >= xi ? K : K + se.height), 0),
      [m, xi],
    ),
    Nh = A_(),
    Gv = d.invert || f,
    Il = pt === "loading";
  ((Vn.current = O.useMemo(() => xi * H + Rh, [xi, Rh])),
    O.useEffect(() => {
      eo.current = Th;
    }, [Th]),
    O.useEffect(() => {
      Fn(!0);
    }, []),
    O.useEffect(() => {
      let K = un.current;
      if (K) {
        let se = K.getBoundingClientRect().height;
        return (
          kh(se),
          x((ce) => [
            { toastId: d.id, height: se, position: d.position },
            ...ce,
          ]),
          () => x((ce) => ce.filter((_t) => _t.toastId !== d.id))
        );
      }
    }, [x, d.id]),
    O.useLayoutEffect(() => {
      if (!re) return;
      let K = un.current,
        se = K.style.height;
      K.style.height = "auto";
      let ce = K.getBoundingClientRect().height;
      ((K.style.height = se),
        kh(ce),
        x((_t) =>
          _t.find((Et) => Et.toastId === d.id)
            ? _t.map((Et) => (Et.toastId === d.id ? { ...Et, height: ce } : Et))
            : [{ toastId: d.id, height: ce, position: d.position }, ..._t],
        ));
    }, [re, d.title, d.description, x, d.id]));
  let br = O.useCallback(() => {
    (ln(!0),
      Zs(Vn.current),
      x((K) => K.filter((se) => se.toastId !== d.id)),
      setTimeout(() => {
        S(d);
      }, q_));
  }, [d, S, x, Vn]);
  (O.useEffect(() => {
    if (
      (d.promise && pt === "loading") ||
      d.duration === 1 / 0 ||
      d.type === "loading"
    )
      return;
    let K;
    return (
      E || y || (z && Nh)
        ? (() => {
            if (Ph.current < Ol.current) {
              let se = new Date().getTime() - Ol.current;
              eo.current = eo.current - se;
            }
            Ph.current = new Date().getTime();
          })()
        : eo.current !== 1 / 0 &&
          ((Ol.current = new Date().getTime()),
          (K = setTimeout(() => {
            var se;
            ((se = d.onAutoClose) == null || se.call(d, d), br());
          }, eo.current))),
      () => clearTimeout(K)
    );
  }, [E, y, d, pt, z, Nh, br]),
    O.useEffect(() => {
      d.delete && br();
    }, [br, d.delete]));
  function Qv() {
    var K, se, ce;
    return L != null && L.loading
      ? O.createElement(
          "div",
          {
            className: Ct(
              R == null ? void 0 : R.loader,
              (K = d == null ? void 0 : d.classNames) == null
                ? void 0
                : K.loader,
              "sonner-loader",
            ),
            "data-visible": pt === "loading",
          },
          L.loading,
        )
      : D
        ? O.createElement(
            "div",
            {
              className: Ct(
                R == null ? void 0 : R.loader,
                (se = d == null ? void 0 : d.classNames) == null
                  ? void 0
                  : se.loader,
                "sonner-loader",
              ),
              "data-visible": pt === "loading",
            },
            D,
          )
        : O.createElement(C_, {
            className: Ct(
              R == null ? void 0 : R.loader,
              (ce = d == null ? void 0 : d.classNames) == null
                ? void 0
                : ce.loader,
            ),
            visible: pt === "loading",
          });
  }
  return O.createElement(
    "li",
    {
      tabIndex: 0,
      ref: un,
      className: Ct(
        $,
        Vv,
        R == null ? void 0 : R.toast,
        (t = d == null ? void 0 : d.classNames) == null ? void 0 : t.toast,
        R == null ? void 0 : R.default,
        R == null ? void 0 : R[pt],
        (r = d == null ? void 0 : d.classNames) == null ? void 0 : r[pt],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (n = d.richColors) != null ? n : k,
      "data-styled": !(d.jsx || d.unstyled || w),
      "data-mounted": re,
      "data-promise": !!d.promise,
      "data-swiped": jl,
      "data-removed": vr,
      "data-visible": zv,
      "data-y-position": qv,
      "data-x-position": Kv,
      "data-index": v,
      "data-front": Bv,
      "data-swiping": wr,
      "data-dismissible": zn,
      "data-type": pt,
      "data-invert": Gv,
      "data-swipe-out": xr,
      "data-swipe-direction": be,
      "data-expanded": !!(E || (C && re)),
      style: {
        "--index": v,
        "--toasts-before": v,
        "--z-index": b.length - v,
        "--offset": `${vr ? Al : Vn.current}px`,
        "--initial-height": C ? "auto" : `${Bn}px`,
        ...j,
        ...d.style,
      },
      onDragEnd: () => {
        (Un(!1), Z(null), (Wn.current = null));
      },
      onPointerDown: (K) => {
        Il ||
          !zn ||
          ((Ch.current = new Date()),
          Zs(Vn.current),
          K.target.setPointerCapture(K.pointerId),
          K.target.tagName !== "BUTTON" &&
            (Un(!0), (Wn.current = { x: K.clientX, y: K.clientY })));
      },
      onPointerUp: () => {
        var K, se, ce, _t;
        if (xr || !zn) return;
        Wn.current = null;
        let Et = Number(
            ((K = un.current) == null
              ? void 0
              : K.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0,
          ),
          _r = Number(
            ((se = un.current) == null
              ? void 0
              : se.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0,
          ),
          cn =
            new Date().getTime() -
            ((ce = Ch.current) == null ? void 0 : ce.getTime()),
          St = Y === "x" ? Et : _r,
          Er = Math.abs(St) / cn;
        if (Math.abs(St) >= H_ || Er > 0.11) {
          (Zs(Vn.current),
            (_t = d.onDismiss) == null || _t.call(d, d),
            Le(
              Y === "x" ? (Et > 0 ? "right" : "left") : _r > 0 ? "down" : "up",
            ),
            br(),
            vi(!0),
            wi(!1));
          return;
        }
        (Un(!1), Z(null));
      },
      onPointerMove: (K) => {
        var se, ce, _t, Et;
        if (
          !Wn.current ||
          !zn ||
          ((se = window.getSelection()) == null
            ? void 0
            : se.toString().length) > 0
        )
          return;
        let _r = K.clientY - Wn.current.y,
          cn = K.clientX - Wn.current.x,
          St = (ce = e.swipeDirections) != null ? ce : K_(Q);
        !Y &&
          (Math.abs(cn) > 1 || Math.abs(_r) > 1) &&
          Z(Math.abs(cn) > Math.abs(_r) ? "x" : "y");
        let Er = { x: 0, y: 0 };
        (Y === "y"
          ? (St.includes("top") || St.includes("bottom")) &&
            ((St.includes("top") && _r < 0) ||
              (St.includes("bottom") && _r > 0)) &&
            (Er.y = _r)
          : Y === "x" &&
            (St.includes("left") || St.includes("right")) &&
            ((St.includes("left") && cn < 0) ||
              (St.includes("right") && cn > 0)) &&
            (Er.x = cn),
          (Math.abs(Er.x) > 0 || Math.abs(Er.y) > 0) && wi(!0),
          (_t = un.current) == null ||
            _t.style.setProperty("--swipe-amount-x", `${Er.x}px`),
          (Et = un.current) == null ||
            Et.style.setProperty("--swipe-amount-y", `${Er.y}px`));
      },
    },
    Hv && !d.jsx
      ? O.createElement(
          "button",
          {
            "aria-label": q,
            "data-disabled": Il,
            "data-close-button": !0,
            onClick:
              Il || !zn
                ? () => {}
                : () => {
                    var K;
                    (br(), (K = d.onDismiss) == null || K.call(d, d));
                  },
            className: Ct(
              R == null ? void 0 : R.closeButton,
              (s = d == null ? void 0 : d.classNames) == null
                ? void 0
                : s.closeButton,
            ),
          },
          (o = L == null ? void 0 : L.close) != null ? o : j_,
        )
      : null,
    d.jsx || _.isValidElement(d.title)
      ? d.jsx
        ? d.jsx
        : typeof d.title == "function"
          ? d.title()
          : d.title
      : O.createElement(
          O.Fragment,
          null,
          pt || d.icon || d.promise
            ? O.createElement(
                "div",
                {
                  "data-icon": "",
                  className: Ct(
                    R == null ? void 0 : R.icon,
                    (i = d == null ? void 0 : d.classNames) == null
                      ? void 0
                      : i.icon,
                  ),
                },
                d.promise || (d.type === "loading" && !d.icon)
                  ? d.icon || Qv()
                  : null,
                d.type !== "loading"
                  ? d.icon || (L == null ? void 0 : L[pt]) || S_(pt)
                  : null,
              )
            : null,
          O.createElement(
            "div",
            {
              "data-content": "",
              className: Ct(
                R == null ? void 0 : R.content,
                (a = d == null ? void 0 : d.classNames) == null
                  ? void 0
                  : a.content,
              ),
            },
            O.createElement(
              "div",
              {
                "data-title": "",
                className: Ct(
                  R == null ? void 0 : R.title,
                  (l = d == null ? void 0 : d.classNames) == null
                    ? void 0
                    : l.title,
                ),
              },
              typeof d.title == "function" ? d.title() : d.title,
            ),
            d.description
              ? O.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: Ct(
                      B,
                      Wv,
                      R == null ? void 0 : R.description,
                      (u = d == null ? void 0 : d.classNames) == null
                        ? void 0
                        : u.description,
                    ),
                  },
                  typeof d.description == "function"
                    ? d.description()
                    : d.description,
                )
              : null,
          ),
          _.isValidElement(d.cancel)
            ? d.cancel
            : d.cancel && Bi(d.cancel)
              ? O.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: d.cancelButtonStyle || P,
                    onClick: (K) => {
                      var se, ce;
                      Bi(d.cancel) &&
                        zn &&
                        ((ce = (se = d.cancel).onClick) == null ||
                          ce.call(se, K),
                        br());
                    },
                    className: Ct(
                      R == null ? void 0 : R.cancelButton,
                      (c = d == null ? void 0 : d.classNames) == null
                        ? void 0
                        : c.cancelButton,
                    ),
                  },
                  d.cancel.label,
                )
              : null,
          _.isValidElement(d.action)
            ? d.action
            : d.action && Bi(d.action)
              ? O.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: d.actionButtonStyle || M,
                    onClick: (K) => {
                      var se, ce;
                      Bi(d.action) &&
                        ((ce = (se = d.action).onClick) == null ||
                          ce.call(se, K),
                        !K.defaultPrevented && br());
                    },
                    className: Ct(
                      R == null ? void 0 : R.actionButton,
                      (p = d == null ? void 0 : d.classNames) == null
                        ? void 0
                        : p.actionButton,
                    ),
                  },
                  d.action.label,
                )
              : null,
        ),
  );
};
function Zf() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function Q_(e, t) {
  let r = {};
  return (
    [e, t].forEach((n, s) => {
      let o = s === 1,
        i = o ? "--mobile-offset" : "--offset",
        a = o ? z_ : B_;
      function l(u) {
        ["top", "right", "bottom", "left"].forEach((c) => {
          r[`${i}-${c}`] = typeof u == "number" ? `${u}px` : u;
        });
      }
      typeof n == "number" || typeof n == "string"
        ? l(n)
        : typeof n == "object"
          ? ["top", "right", "bottom", "left"].forEach((u) => {
              n[u] === void 0
                ? (r[`${i}-${u}`] = a)
                : (r[`${i}-${u}`] =
                    typeof n[u] == "number" ? `${n[u]}px` : n[u]);
            })
          : l(a);
    }),
    r
  );
}
var J_ = _.forwardRef(function (e, t) {
  let {
      invert: r,
      position: n = "bottom-right",
      hotkey: s = ["altKey", "KeyT"],
      expand: o,
      closeButton: i,
      className: a,
      offset: l,
      mobileOffset: u,
      theme: c = "light",
      richColors: p,
      duration: f,
      style: d,
      visibleToasts: w = U_,
      toastOptions: y,
      dir: x = Zf(),
      gap: g = W_,
      loadingIcon: m,
      icons: v,
      containerAriaLabel: b = "Notifications",
      pauseWhenPageIsHidden: E,
    } = e,
    [S, k] = O.useState([]),
    T = O.useMemo(
      () =>
        Array.from(
          new Set(
            [n].concat(S.filter((z) => z.position).map((z) => z.position)),
          ),
        ),
      [S, n],
    ),
    [j, P] = O.useState([]),
    [M, $] = O.useState(!1),
    [B, I] = O.useState(!1),
    [Q, H] = O.useState(
      c !== "system"
        ? c
        : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
    ),
    D = O.useRef(null),
    C = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    R = O.useRef(null),
    L = O.useRef(!1),
    q = O.useCallback((z) => {
      k((Y) => {
        var Z;
        return (
          ((Z = Y.find((be) => be.id === z.id)) != null && Z.delete) ||
            Ge.dismiss(z.id),
          Y.filter(({ id: be }) => be !== z.id)
        );
      });
    }, []);
  return (
    O.useEffect(
      () =>
        Ge.subscribe((z) => {
          if (z.dismiss) {
            k((Y) => Y.map((Z) => (Z.id === z.id ? { ...Z, delete: !0 } : Z)));
            return;
          }
          setTimeout(() => {
            _0.flushSync(() => {
              k((Y) => {
                let Z = Y.findIndex((be) => be.id === z.id);
                return Z !== -1
                  ? [...Y.slice(0, Z), { ...Y[Z], ...z }, ...Y.slice(Z + 1)]
                  : [z, ...Y];
              });
            });
          });
        }),
      [],
    ),
    O.useEffect(() => {
      if (c !== "system") {
        H(c);
        return;
      }
      if (
        (c === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? H("dark")
            : H("light")),
        typeof window > "u")
      )
        return;
      let z = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        z.addEventListener("change", ({ matches: Y }) => {
          H(Y ? "dark" : "light");
        });
      } catch {
        z.addListener(({ matches: Z }) => {
          try {
            H(Z ? "dark" : "light");
          } catch (be) {
            console.error(be);
          }
        });
      }
    }, [c]),
    O.useEffect(() => {
      S.length <= 1 && $(!1);
    }, [S]),
    O.useEffect(() => {
      let z = (Y) => {
        var Z, be;
        (s.every((Le) => Y[Le] || Y.code === Le) &&
          ($(!0), (Z = D.current) == null || Z.focus()),
          Y.code === "Escape" &&
            (document.activeElement === D.current ||
              ((be = D.current) != null &&
                be.contains(document.activeElement))) &&
            $(!1));
      };
      return (
        document.addEventListener("keydown", z),
        () => document.removeEventListener("keydown", z)
      );
    }, [s]),
    O.useEffect(() => {
      if (D.current)
        return () => {
          R.current &&
            (R.current.focus({ preventScroll: !0 }),
            (R.current = null),
            (L.current = !1));
        };
    }, [D.current]),
    O.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${b} ${C}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      T.map((z, Y) => {
        var Z;
        let [be, Le] = z.split("-");
        return S.length
          ? O.createElement(
              "ol",
              {
                key: z,
                dir: x === "auto" ? Zf() : x,
                tabIndex: -1,
                ref: D,
                className: a,
                "data-sonner-toaster": !0,
                "data-theme": Q,
                "data-y-position": be,
                "data-lifted": M && S.length > 1 && !o,
                "data-x-position": Le,
                style: {
                  "--front-toast-height": `${((Z = j[0]) == null ? void 0 : Z.height) || 0}px`,
                  "--width": `${V_}px`,
                  "--gap": `${g}px`,
                  ...d,
                  ...Q_(l, u),
                },
                onBlur: (re) => {
                  L.current &&
                    !re.currentTarget.contains(re.relatedTarget) &&
                    ((L.current = !1),
                    R.current &&
                      (R.current.focus({ preventScroll: !0 }),
                      (R.current = null)));
                },
                onFocus: (re) => {
                  (re.target instanceof HTMLElement &&
                    re.target.dataset.dismissible === "false") ||
                    L.current ||
                    ((L.current = !0), (R.current = re.relatedTarget));
                },
                onMouseEnter: () => $(!0),
                onMouseMove: () => $(!0),
                onMouseLeave: () => {
                  B || $(!1);
                },
                onDragEnd: () => $(!1),
                onPointerDown: (re) => {
                  (re.target instanceof HTMLElement &&
                    re.target.dataset.dismissible === "false") ||
                    I(!0);
                },
                onPointerUp: () => I(!1),
              },
              S.filter(
                (re) => (!re.position && Y === 0) || re.position === z,
              ).map((re, Fn) => {
                var vr, ln;
                return O.createElement(G_, {
                  key: re.id,
                  icons: v,
                  index: Fn,
                  toast: re,
                  defaultRichColors: p,
                  duration:
                    (vr = y == null ? void 0 : y.duration) != null ? vr : f,
                  className: y == null ? void 0 : y.className,
                  descriptionClassName:
                    y == null ? void 0 : y.descriptionClassName,
                  invert: r,
                  visibleToasts: w,
                  closeButton:
                    (ln = y == null ? void 0 : y.closeButton) != null ? ln : i,
                  interacting: B,
                  position: z,
                  style: y == null ? void 0 : y.style,
                  unstyled: y == null ? void 0 : y.unstyled,
                  classNames: y == null ? void 0 : y.classNames,
                  cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
                  actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
                  removeToast: q,
                  toasts: S.filter((wr) => wr.position == re.position),
                  heights: j.filter((wr) => wr.position == re.position),
                  setHeights: P,
                  expandByDefault: o,
                  gap: g,
                  loadingIcon: m,
                  expanded: M,
                  pauseWhenPageIsHidden: E,
                  swipeDirections: e.swipeDirections,
                });
              }),
            )
          : null;
      }),
    )
  );
});
const Y_ = ({ ...e }) => {
    const { theme: t = "system" } = E_();
    return h.jsx(J_, {
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
  X_ = ["top", "right", "bottom", "left"],
  tn = Math.min,
  st = Math.max,
  Ma = Math.round,
  zi = Math.floor,
  Yt = (e) => ({ x: e, y: e }),
  Z_ = { left: "right", right: "left", bottom: "top", top: "bottom" },
  eE = { start: "end", end: "start" };
function jc(e, t, r) {
  return st(e, tn(t, r));
}
function pr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function mr(e) {
  return e.split("-")[0];
}
function Ys(e) {
  return e.split("-")[1];
}
function nh(e) {
  return e === "x" ? "y" : "x";
}
function sh(e) {
  return e === "y" ? "height" : "width";
}
const tE = new Set(["top", "bottom"]);
function Gt(e) {
  return tE.has(mr(e)) ? "y" : "x";
}
function oh(e) {
  return nh(Gt(e));
}
function rE(e, t, r) {
  r === void 0 && (r = !1);
  const n = Ys(e),
    s = oh(e),
    o = sh(s);
  let i =
    s === "x"
      ? n === (r ? "end" : "start")
        ? "right"
        : "left"
      : n === "start"
        ? "bottom"
        : "top";
  return (t.reference[o] > t.floating[o] && (i = Da(i)), [i, Da(i)]);
}
function nE(e) {
  const t = Da(e);
  return [Ac(e), t, Ac(t)];
}
function Ac(e) {
  return e.replace(/start|end/g, (t) => eE[t]);
}
const ep = ["left", "right"],
  tp = ["right", "left"],
  sE = ["top", "bottom"],
  oE = ["bottom", "top"];
function iE(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? (t ? tp : ep) : t ? ep : tp;
    case "left":
    case "right":
      return t ? sE : oE;
    default:
      return [];
  }
}
function aE(e, t, r, n) {
  const s = Ys(e);
  let o = iE(mr(e), r === "start", n);
  return (
    s && ((o = o.map((i) => i + "-" + s)), t && (o = o.concat(o.map(Ac)))),
    o
  );
}
function Da(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Z_[t]);
}
function lE(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function hy(e) {
  return typeof e != "number"
    ? lE(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Fa(e) {
  const { x: t, y: r, width: n, height: s } = e;
  return {
    width: n,
    height: s,
    top: r,
    left: t,
    right: t + n,
    bottom: r + s,
    x: t,
    y: r,
  };
}
function rp(e, t, r) {
  let { reference: n, floating: s } = e;
  const o = Gt(t),
    i = oh(t),
    a = sh(i),
    l = mr(t),
    u = o === "y",
    c = n.x + n.width / 2 - s.width / 2,
    p = n.y + n.height / 2 - s.height / 2,
    f = n[a] / 2 - s[a] / 2;
  let d;
  switch (l) {
    case "top":
      d = { x: c, y: n.y - s.height };
      break;
    case "bottom":
      d = { x: c, y: n.y + n.height };
      break;
    case "right":
      d = { x: n.x + n.width, y: p };
      break;
    case "left":
      d = { x: n.x - s.width, y: p };
      break;
    default:
      d = { x: n.x, y: n.y };
  }
  switch (Ys(t)) {
    case "start":
      d[i] -= f * (r && u ? -1 : 1);
      break;
    case "end":
      d[i] += f * (r && u ? -1 : 1);
      break;
  }
  return d;
}
const uE = async (e, t, r) => {
  const {
      placement: n = "bottom",
      strategy: s = "absolute",
      middleware: o = [],
      platform: i,
    } = r,
    a = o.filter(Boolean),
    l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({ reference: e, floating: t, strategy: s }),
    { x: c, y: p } = rp(u, n, l),
    f = n,
    d = {},
    w = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: x, fn: g } = a[y],
      {
        x: m,
        y: v,
        data: b,
        reset: E,
      } = await g({
        x: c,
        y: p,
        initialPlacement: n,
        placement: f,
        strategy: s,
        middlewareData: d,
        rects: u,
        platform: i,
        elements: { reference: e, floating: t },
      });
    ((c = m ?? c),
      (p = v ?? p),
      (d = { ...d, [x]: { ...d[x], ...b } }),
      E &&
        w <= 50 &&
        (w++,
        typeof E == "object" &&
          (E.placement && (f = E.placement),
          E.rects &&
            (u =
              E.rects === !0
                ? await i.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: s,
                  })
                : E.rects),
          ({ x: c, y: p } = rp(u, f, l))),
        (y = -1)));
  }
  return { x: c, y: p, placement: f, strategy: s, middlewareData: d };
};
async function Go(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: n, y: s, platform: o, rects: i, elements: a, strategy: l } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: p = "floating",
      altBoundary: f = !1,
      padding: d = 0,
    } = pr(t, e),
    w = hy(d),
    x = a[f ? (p === "floating" ? "reference" : "floating") : p],
    g = Fa(
      await o.getClippingRect({
        element:
          (r = await (o.isElement == null ? void 0 : o.isElement(x))) == null ||
          r
            ? x
            : x.contextElement ||
              (await (o.getDocumentElement == null
                ? void 0
                : o.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: l,
      }),
    ),
    m =
      p === "floating"
        ? { x: n, y: s, width: i.floating.width, height: i.floating.height }
        : i.reference,
    v = await (o.getOffsetParent == null
      ? void 0
      : o.getOffsetParent(a.floating)),
    b = (await (o.isElement == null ? void 0 : o.isElement(v)))
      ? (await (o.getScale == null ? void 0 : o.getScale(v))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    E = Fa(
      o.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: m,
            offsetParent: v,
            strategy: l,
          })
        : m,
    );
  return {
    top: (g.top - E.top + w.top) / b.y,
    bottom: (E.bottom - g.bottom + w.bottom) / b.y,
    left: (g.left - E.left + w.left) / b.x,
    right: (E.right - g.right + w.right) / b.x,
  };
}
const cE = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: r,
          y: n,
          placement: s,
          rects: o,
          platform: i,
          elements: a,
          middlewareData: l,
        } = t,
        { element: u, padding: c = 0 } = pr(e, t) || {};
      if (u == null) return {};
      const p = hy(c),
        f = { x: r, y: n },
        d = oh(s),
        w = sh(d),
        y = await i.getDimensions(u),
        x = d === "y",
        g = x ? "top" : "left",
        m = x ? "bottom" : "right",
        v = x ? "clientHeight" : "clientWidth",
        b = o.reference[w] + o.reference[d] - f[d] - o.floating[w],
        E = f[d] - o.reference[d],
        S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
      let k = S ? S[v] : 0;
      (!k || !(await (i.isElement == null ? void 0 : i.isElement(S)))) &&
        (k = a.floating[v] || o.floating[w]);
      const T = b / 2 - E / 2,
        j = k / 2 - y[w] / 2 - 1,
        P = tn(p[g], j),
        M = tn(p[m], j),
        $ = P,
        B = k - y[w] - M,
        I = k / 2 - y[w] / 2 + T,
        Q = jc($, I, B),
        H =
          !l.arrow &&
          Ys(s) != null &&
          I !== Q &&
          o.reference[w] / 2 - (I < $ ? P : M) - y[w] / 2 < 0,
        D = H ? (I < $ ? I - $ : I - B) : 0;
      return {
        [d]: f[d] + D,
        data: {
          [d]: Q,
          centerOffset: I - Q - D,
          ...(H && { alignmentOffset: D }),
        },
        reset: H,
      };
    },
  }),
  dE = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var r, n;
          const {
              placement: s,
              middlewareData: o,
              rects: i,
              initialPlacement: a,
              platform: l,
              elements: u,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: p = !0,
              fallbackPlacements: f,
              fallbackStrategy: d = "bestFit",
              fallbackAxisSideDirection: w = "none",
              flipAlignment: y = !0,
              ...x
            } = pr(e, t);
          if ((r = o.arrow) != null && r.alignmentOffset) return {};
          const g = mr(s),
            m = Gt(a),
            v = mr(a) === a,
            b = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
            E = f || (v || !y ? [Da(a)] : nE(a)),
            S = w !== "none";
          !f && S && E.push(...aE(a, y, w, b));
          const k = [a, ...E],
            T = await Go(t, x),
            j = [];
          let P = ((n = o.flip) == null ? void 0 : n.overflows) || [];
          if ((c && j.push(T[g]), p)) {
            const I = rE(s, i, b);
            j.push(T[I[0]], T[I[1]]);
          }
          if (
            ((P = [...P, { placement: s, overflows: j }]),
            !j.every((I) => I <= 0))
          ) {
            var M, $;
            const I = (((M = o.flip) == null ? void 0 : M.index) || 0) + 1,
              Q = k[I];
            if (
              Q &&
              (!(p === "alignment" ? m !== Gt(Q) : !1) ||
                P.every((C) => C.overflows[0] > 0 && Gt(C.placement) === m))
            )
              return {
                data: { index: I, overflows: P },
                reset: { placement: Q },
              };
            let H =
              ($ = P.filter((D) => D.overflows[0] <= 0).sort(
                (D, C) => D.overflows[1] - C.overflows[1],
              )[0]) == null
                ? void 0
                : $.placement;
            if (!H)
              switch (d) {
                case "bestFit": {
                  var B;
                  const D =
                    (B = P.filter((C) => {
                      if (S) {
                        const R = Gt(C.placement);
                        return R === m || R === "y";
                      }
                      return !0;
                    })
                      .map((C) => [
                        C.placement,
                        C.overflows
                          .filter((R) => R > 0)
                          .reduce((R, L) => R + L, 0),
                      ])
                      .sort((C, R) => C[1] - R[1])[0]) == null
                      ? void 0
                      : B[0];
                  D && (H = D);
                  break;
                }
                case "initialPlacement":
                  H = a;
                  break;
              }
            if (s !== H) return { reset: { placement: H } };
          }
          return {};
        },
      }
    );
  };
function np(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function sp(e) {
  return X_.some((t) => e[t] >= 0);
}
const hE = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: r } = t,
            { strategy: n = "referenceHidden", ...s } = pr(e, t);
          switch (n) {
            case "referenceHidden": {
              const o = await Go(t, { ...s, elementContext: "reference" }),
                i = np(o, r.reference);
              return {
                data: { referenceHiddenOffsets: i, referenceHidden: sp(i) },
              };
            }
            case "escaped": {
              const o = await Go(t, { ...s, altBoundary: !0 }),
                i = np(o, r.floating);
              return { data: { escapedOffsets: i, escaped: sp(i) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  fy = new Set(["left", "top"]);
async function fE(e, t) {
  const { placement: r, platform: n, elements: s } = e,
    o = await (n.isRTL == null ? void 0 : n.isRTL(s.floating)),
    i = mr(r),
    a = Ys(r),
    l = Gt(r) === "y",
    u = fy.has(i) ? -1 : 1,
    c = o && l ? -1 : 1,
    p = pr(t, e);
  let {
    mainAxis: f,
    crossAxis: d,
    alignmentAxis: w,
  } = typeof p == "number"
    ? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis,
      };
  return (
    a && typeof w == "number" && (d = a === "end" ? w * -1 : w),
    l ? { x: d * c, y: f * u } : { x: f * u, y: d * c }
  );
}
const pE = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var r, n;
          const { x: s, y: o, placement: i, middlewareData: a } = t,
            l = await fE(t, e);
          return i === ((r = a.offset) == null ? void 0 : r.placement) &&
            (n = a.arrow) != null &&
            n.alignmentOffset
            ? {}
            : { x: s + l.x, y: o + l.y, data: { ...l, placement: i } };
        },
      }
    );
  },
  mE = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: r, y: n, placement: s } = t,
            {
              mainAxis: o = !0,
              crossAxis: i = !1,
              limiter: a = {
                fn: (x) => {
                  let { x: g, y: m } = x;
                  return { x: g, y: m };
                },
              },
              ...l
            } = pr(e, t),
            u = { x: r, y: n },
            c = await Go(t, l),
            p = Gt(mr(s)),
            f = nh(p);
          let d = u[f],
            w = u[p];
          if (o) {
            const x = f === "y" ? "top" : "left",
              g = f === "y" ? "bottom" : "right",
              m = d + c[x],
              v = d - c[g];
            d = jc(m, d, v);
          }
          if (i) {
            const x = p === "y" ? "top" : "left",
              g = p === "y" ? "bottom" : "right",
              m = w + c[x],
              v = w - c[g];
            w = jc(m, w, v);
          }
          const y = a.fn({ ...t, [f]: d, [p]: w });
          return {
            ...y,
            data: { x: y.x - r, y: y.y - n, enabled: { [f]: o, [p]: i } },
          };
        },
      }
    );
  },
  gE = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: r, y: n, placement: s, rects: o, middlewareData: i } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: u = !0 } = pr(e, t),
            c = { x: r, y: n },
            p = Gt(s),
            f = nh(p);
          let d = c[f],
            w = c[p];
          const y = pr(a, t),
            x =
              typeof y == "number"
                ? { mainAxis: y, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...y };
          if (l) {
            const v = f === "y" ? "height" : "width",
              b = o.reference[f] - o.floating[v] + x.mainAxis,
              E = o.reference[f] + o.reference[v] - x.mainAxis;
            d < b ? (d = b) : d > E && (d = E);
          }
          if (u) {
            var g, m;
            const v = f === "y" ? "width" : "height",
              b = fy.has(mr(s)),
              E =
                o.reference[p] -
                o.floating[v] +
                ((b && ((g = i.offset) == null ? void 0 : g[p])) || 0) +
                (b ? 0 : x.crossAxis),
              S =
                o.reference[p] +
                o.reference[v] +
                (b ? 0 : ((m = i.offset) == null ? void 0 : m[p]) || 0) -
                (b ? x.crossAxis : 0);
            w < E ? (w = E) : w > S && (w = S);
          }
          return { [f]: d, [p]: w };
        },
      }
    );
  },
  yE = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var r, n;
          const { placement: s, rects: o, platform: i, elements: a } = t,
            { apply: l = () => {}, ...u } = pr(e, t),
            c = await Go(t, u),
            p = mr(s),
            f = Ys(s),
            d = Gt(s) === "y",
            { width: w, height: y } = o.floating;
          let x, g;
          p === "top" || p === "bottom"
            ? ((x = p),
              (g =
                f ===
                ((await (i.isRTL == null ? void 0 : i.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((g = p), (x = f === "end" ? "top" : "bottom"));
          const m = y - c.top - c.bottom,
            v = w - c.left - c.right,
            b = tn(y - c[x], m),
            E = tn(w - c[g], v),
            S = !t.middlewareData.shift;
          let k = b,
            T = E;
          if (
            ((r = t.middlewareData.shift) != null && r.enabled.x && (T = v),
            (n = t.middlewareData.shift) != null && n.enabled.y && (k = m),
            S && !f)
          ) {
            const P = st(c.left, 0),
              M = st(c.right, 0),
              $ = st(c.top, 0),
              B = st(c.bottom, 0);
            d
              ? (T = w - 2 * (P !== 0 || M !== 0 ? P + M : st(c.left, c.right)))
              : (k =
                  y - 2 * ($ !== 0 || B !== 0 ? $ + B : st(c.top, c.bottom)));
          }
          await l({ ...t, availableWidth: T, availableHeight: k });
          const j = await i.getDimensions(a.floating);
          return w !== j.width || y !== j.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function pl() {
  return typeof window < "u";
}
function Xs(e) {
  return py(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ut(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Zt(e) {
  var t;
  return (t = (py(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function py(e) {
  return pl() ? e instanceof Node || e instanceof ut(e).Node : !1;
}
function Ut(e) {
  return pl() ? e instanceof Element || e instanceof ut(e).Element : !1;
}
function Xt(e) {
  return pl() ? e instanceof HTMLElement || e instanceof ut(e).HTMLElement : !1;
}
function op(e) {
  return !pl() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof ut(e).ShadowRoot;
}
const vE = new Set(["inline", "contents"]);
function pi(e) {
  const { overflow: t, overflowX: r, overflowY: n, display: s } = Bt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !vE.has(s);
}
const wE = new Set(["table", "td", "th"]);
function xE(e) {
  return wE.has(Xs(e));
}
const bE = [":popover-open", ":modal"];
function ml(e) {
  return bE.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const _E = ["transform", "translate", "scale", "rotate", "perspective"],
  EE = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  SE = ["paint", "layout", "strict", "content"];
function ih(e) {
  const t = ah(),
    r = Ut(e) ? Bt(e) : e;
  return (
    _E.some((n) => (r[n] ? r[n] !== "none" : !1)) ||
    (r.containerType ? r.containerType !== "normal" : !1) ||
    (!t && (r.backdropFilter ? r.backdropFilter !== "none" : !1)) ||
    (!t && (r.filter ? r.filter !== "none" : !1)) ||
    EE.some((n) => (r.willChange || "").includes(n)) ||
    SE.some((n) => (r.contain || "").includes(n))
  );
}
function kE(e) {
  let t = rn(e);
  for (; Xt(t) && !Us(t); ) {
    if (ih(t)) return t;
    if (ml(t)) return null;
    t = rn(t);
  }
  return null;
}
function ah() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const CE = new Set(["html", "body", "#document"]);
function Us(e) {
  return CE.has(Xs(e));
}
function Bt(e) {
  return ut(e).getComputedStyle(e);
}
function gl(e) {
  return Ut(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function rn(e) {
  if (Xs(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (op(e) && e.host) || Zt(e);
  return op(t) ? t.host : t;
}
function my(e) {
  const t = rn(e);
  return Us(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Xt(t) && pi(t)
      ? t
      : my(t);
}
function Qo(e, t, r) {
  var n;
  (t === void 0 && (t = []), r === void 0 && (r = !0));
  const s = my(e),
    o = s === ((n = e.ownerDocument) == null ? void 0 : n.body),
    i = ut(s);
  if (o) {
    const a = Oc(i);
    return t.concat(
      i,
      i.visualViewport || [],
      pi(s) ? s : [],
      a && r ? Qo(a) : [],
    );
  }
  return t.concat(s, Qo(s, [], r));
}
function Oc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function gy(e) {
  const t = Bt(e);
  let r = parseFloat(t.width) || 0,
    n = parseFloat(t.height) || 0;
  const s = Xt(e),
    o = s ? e.offsetWidth : r,
    i = s ? e.offsetHeight : n,
    a = Ma(r) !== o || Ma(n) !== i;
  return (a && ((r = o), (n = i)), { width: r, height: n, $: a });
}
function lh(e) {
  return Ut(e) ? e : e.contextElement;
}
function _s(e) {
  const t = lh(e);
  if (!Xt(t)) return Yt(1);
  const r = t.getBoundingClientRect(),
    { width: n, height: s, $: o } = gy(t);
  let i = (o ? Ma(r.width) : r.width) / n,
    a = (o ? Ma(r.height) : r.height) / s;
  return (
    (!i || !Number.isFinite(i)) && (i = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: i, y: a }
  );
}
const TE = Yt(0);
function yy(e) {
  const t = ut(e);
  return !ah() || !t.visualViewport
    ? TE
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function PE(e, t, r) {
  return (t === void 0 && (t = !1), !r || (t && r !== ut(e)) ? !1 : t);
}
function Ln(e, t, r, n) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  const s = e.getBoundingClientRect(),
    o = lh(e);
  let i = Yt(1);
  t && (n ? Ut(n) && (i = _s(n)) : (i = _s(e)));
  const a = PE(o, r, n) ? yy(o) : Yt(0);
  let l = (s.left + a.x) / i.x,
    u = (s.top + a.y) / i.y,
    c = s.width / i.x,
    p = s.height / i.y;
  if (o) {
    const f = ut(o),
      d = n && Ut(n) ? ut(n) : n;
    let w = f,
      y = Oc(w);
    for (; y && n && d !== w; ) {
      const x = _s(y),
        g = y.getBoundingClientRect(),
        m = Bt(y),
        v = g.left + (y.clientLeft + parseFloat(m.paddingLeft)) * x.x,
        b = g.top + (y.clientTop + parseFloat(m.paddingTop)) * x.y;
      ((l *= x.x),
        (u *= x.y),
        (c *= x.x),
        (p *= x.y),
        (l += v),
        (u += b),
        (w = ut(y)),
        (y = Oc(w)));
    }
  }
  return Fa({ width: c, height: p, x: l, y: u });
}
function uh(e, t) {
  const r = gl(e).scrollLeft;
  return t ? t.left + r : Ln(Zt(e)).left + r;
}
function vy(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(),
    s = n.left + t.scrollLeft - (r ? 0 : uh(e, n)),
    o = n.top + t.scrollTop;
  return { x: s, y: o };
}
function RE(e) {
  let { elements: t, rect: r, offsetParent: n, strategy: s } = e;
  const o = s === "fixed",
    i = Zt(n),
    a = t ? ml(t.floating) : !1;
  if (n === i || (a && o)) return r;
  let l = { scrollLeft: 0, scrollTop: 0 },
    u = Yt(1);
  const c = Yt(0),
    p = Xt(n);
  if (
    (p || (!p && !o)) &&
    ((Xs(n) !== "body" || pi(i)) && (l = gl(n)), Xt(n))
  ) {
    const d = Ln(n);
    ((u = _s(n)), (c.x = d.x + n.clientLeft), (c.y = d.y + n.clientTop));
  }
  const f = i && !p && !o ? vy(i, l, !0) : Yt(0);
  return {
    width: r.width * u.x,
    height: r.height * u.y,
    x: r.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: r.y * u.y - l.scrollTop * u.y + c.y + f.y,
  };
}
function NE(e) {
  return Array.from(e.getClientRects());
}
function jE(e) {
  const t = Zt(e),
    r = gl(e),
    n = e.ownerDocument.body,
    s = st(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
    o = st(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -r.scrollLeft + uh(e);
  const a = -r.scrollTop;
  return (
    Bt(n).direction === "rtl" && (i += st(t.clientWidth, n.clientWidth) - s),
    { width: s, height: o, x: i, y: a }
  );
}
function AE(e, t) {
  const r = ut(e),
    n = Zt(e),
    s = r.visualViewport;
  let o = n.clientWidth,
    i = n.clientHeight,
    a = 0,
    l = 0;
  if (s) {
    ((o = s.width), (i = s.height));
    const u = ah();
    (!u || (u && t === "fixed")) && ((a = s.offsetLeft), (l = s.offsetTop));
  }
  return { width: o, height: i, x: a, y: l };
}
const OE = new Set(["absolute", "fixed"]);
function IE(e, t) {
  const r = Ln(e, !0, t === "fixed"),
    n = r.top + e.clientTop,
    s = r.left + e.clientLeft,
    o = Xt(e) ? _s(e) : Yt(1),
    i = e.clientWidth * o.x,
    a = e.clientHeight * o.y,
    l = s * o.x,
    u = n * o.y;
  return { width: i, height: a, x: l, y: u };
}
function ip(e, t, r) {
  let n;
  if (t === "viewport") n = AE(e, r);
  else if (t === "document") n = jE(Zt(e));
  else if (Ut(t)) n = IE(t, r);
  else {
    const s = yy(e);
    n = { x: t.x - s.x, y: t.y - s.y, width: t.width, height: t.height };
  }
  return Fa(n);
}
function wy(e, t) {
  const r = rn(e);
  return r === t || !Ut(r) || Us(r)
    ? !1
    : Bt(r).position === "fixed" || wy(r, t);
}
function LE(e, t) {
  const r = t.get(e);
  if (r) return r;
  let n = Qo(e, [], !1).filter((a) => Ut(a) && Xs(a) !== "body"),
    s = null;
  const o = Bt(e).position === "fixed";
  let i = o ? rn(e) : e;
  for (; Ut(i) && !Us(i); ) {
    const a = Bt(i),
      l = ih(i);
    (!l && a.position === "fixed" && (s = null),
      (
        o
          ? !l && !s
          : (!l && a.position === "static" && !!s && OE.has(s.position)) ||
            (pi(i) && !l && wy(e, i))
      )
        ? (n = n.filter((c) => c !== i))
        : (s = a),
      (i = rn(i)));
  }
  return (t.set(e, n), n);
}
function $E(e) {
  let { element: t, boundary: r, rootBoundary: n, strategy: s } = e;
  const i = [
      ...(r === "clippingAncestors"
        ? ml(t)
          ? []
          : LE(t, this._c)
        : [].concat(r)),
      n,
    ],
    a = i[0],
    l = i.reduce(
      (u, c) => {
        const p = ip(t, c, s);
        return (
          (u.top = st(p.top, u.top)),
          (u.right = tn(p.right, u.right)),
          (u.bottom = tn(p.bottom, u.bottom)),
          (u.left = st(p.left, u.left)),
          u
        );
      },
      ip(t, a, s),
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function ME(e) {
  const { width: t, height: r } = gy(e);
  return { width: t, height: r };
}
function DE(e, t, r) {
  const n = Xt(t),
    s = Zt(t),
    o = r === "fixed",
    i = Ln(e, !0, o, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Yt(0);
  function u() {
    l.x = uh(s);
  }
  if (n || (!n && !o))
    if (((Xs(t) !== "body" || pi(s)) && (a = gl(t)), n)) {
      const d = Ln(t, !0, o, t);
      ((l.x = d.x + t.clientLeft), (l.y = d.y + t.clientTop));
    } else s && u();
  o && !n && s && u();
  const c = s && !n && !o ? vy(s, a) : Yt(0),
    p = i.left + a.scrollLeft - l.x - c.x,
    f = i.top + a.scrollTop - l.y - c.y;
  return { x: p, y: f, width: i.width, height: i.height };
}
function hu(e) {
  return Bt(e).position === "static";
}
function ap(e, t) {
  if (!Xt(e) || Bt(e).position === "fixed") return null;
  if (t) return t(e);
  let r = e.offsetParent;
  return (Zt(e) === r && (r = r.ownerDocument.body), r);
}
function xy(e, t) {
  const r = ut(e);
  if (ml(e)) return r;
  if (!Xt(e)) {
    let s = rn(e);
    for (; s && !Us(s); ) {
      if (Ut(s) && !hu(s)) return s;
      s = rn(s);
    }
    return r;
  }
  let n = ap(e, t);
  for (; n && xE(n) && hu(n); ) n = ap(n, t);
  return n && Us(n) && hu(n) && !ih(n) ? r : n || kE(e) || r;
}
const FE = async function (e) {
  const t = this.getOffsetParent || xy,
    r = this.getDimensions,
    n = await r(e.floating);
  return {
    reference: DE(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: n.width, height: n.height },
  };
};
function UE(e) {
  return Bt(e).direction === "rtl";
}
const BE = {
  convertOffsetParentRelativeRectToViewportRelativeRect: RE,
  getDocumentElement: Zt,
  getClippingRect: $E,
  getOffsetParent: xy,
  getElementRects: FE,
  getClientRects: NE,
  getDimensions: ME,
  getScale: _s,
  isElement: Ut,
  isRTL: UE,
};
function by(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function zE(e, t) {
  let r = null,
    n;
  const s = Zt(e);
  function o() {
    var a;
    (clearTimeout(n), (a = r) == null || a.disconnect(), (r = null));
  }
  function i(a, l) {
    (a === void 0 && (a = !1), l === void 0 && (l = 1), o());
    const u = e.getBoundingClientRect(),
      { left: c, top: p, width: f, height: d } = u;
    if ((a || t(), !f || !d)) return;
    const w = zi(p),
      y = zi(s.clientWidth - (c + f)),
      x = zi(s.clientHeight - (p + d)),
      g = zi(c),
      v = {
        rootMargin: -w + "px " + -y + "px " + -x + "px " + -g + "px",
        threshold: st(0, tn(1, l)) || 1,
      };
    let b = !0;
    function E(S) {
      const k = S[0].intersectionRatio;
      if (k !== l) {
        if (!b) return i();
        k
          ? i(!1, k)
          : (n = setTimeout(() => {
              i(!1, 1e-7);
            }, 1e3));
      }
      (k === 1 && !by(u, e.getBoundingClientRect()) && i(), (b = !1));
    }
    try {
      r = new IntersectionObserver(E, { ...v, root: s.ownerDocument });
    } catch {
      r = new IntersectionObserver(E, v);
    }
    r.observe(e);
  }
  return (i(!0), o);
}
function VE(e, t, r, n) {
  n === void 0 && (n = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: o = !0,
      elementResize: i = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = n,
    u = lh(e),
    c = s || o ? [...(u ? Qo(u) : []), ...Qo(t)] : [];
  c.forEach((g) => {
    (s && g.addEventListener("scroll", r, { passive: !0 }),
      o && g.addEventListener("resize", r));
  });
  const p = u && a ? zE(u, r) : null;
  let f = -1,
    d = null;
  i &&
    ((d = new ResizeObserver((g) => {
      let [m] = g;
      (m &&
        m.target === u &&
        d &&
        (d.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var v;
          (v = d) == null || v.observe(t);
        }))),
        r());
    })),
    u && !l && d.observe(u),
    d.observe(t));
  let w,
    y = l ? Ln(e) : null;
  l && x();
  function x() {
    const g = Ln(e);
    (y && !by(y, g) && r(), (y = g), (w = requestAnimationFrame(x)));
  }
  return (
    r(),
    () => {
      var g;
      (c.forEach((m) => {
        (s && m.removeEventListener("scroll", r),
          o && m.removeEventListener("resize", r));
      }),
        p == null || p(),
        (g = d) == null || g.disconnect(),
        (d = null),
        l && cancelAnimationFrame(w));
    }
  );
}
const WE = pE,
  HE = mE,
  qE = dE,
  KE = yE,
  GE = hE,
  lp = cE,
  QE = gE,
  JE = (e, t, r) => {
    const n = new Map(),
      s = { platform: BE, ...r },
      o = { ...s.platform, _c: n };
    return uE(e, t, { ...s, platform: o });
  };
var YE = typeof document < "u",
  XE = function () {},
  ha = YE ? _.useLayoutEffect : XE;
function Ua(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let r, n, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((r = e.length), r !== t.length)) return !1;
      for (n = r; n-- !== 0; ) if (!Ua(e[n], t[n])) return !1;
      return !0;
    }
    if (((s = Object.keys(e)), (r = s.length), r !== Object.keys(t).length))
      return !1;
    for (n = r; n-- !== 0; ) if (!{}.hasOwnProperty.call(t, s[n])) return !1;
    for (n = r; n-- !== 0; ) {
      const o = s[n];
      if (!(o === "_owner" && e.$$typeof) && !Ua(e[o], t[o])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function _y(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function up(e, t) {
  const r = _y(e);
  return Math.round(t * r) / r;
}
function fu(e) {
  const t = _.useRef(e);
  return (
    ha(() => {
      t.current = e;
    }),
    t
  );
}
function ZE(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: r = "absolute",
      middleware: n = [],
      platform: s,
      elements: { reference: o, floating: i } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: u,
    } = e,
    [c, p] = _.useState({
      x: 0,
      y: 0,
      strategy: r,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, d] = _.useState(n);
  Ua(f, n) || d(n);
  const [w, y] = _.useState(null),
    [x, g] = _.useState(null),
    m = _.useCallback((C) => {
      C !== S.current && ((S.current = C), y(C));
    }, []),
    v = _.useCallback((C) => {
      C !== k.current && ((k.current = C), g(C));
    }, []),
    b = o || w,
    E = i || x,
    S = _.useRef(null),
    k = _.useRef(null),
    T = _.useRef(c),
    j = l != null,
    P = fu(l),
    M = fu(s),
    $ = fu(u),
    B = _.useCallback(() => {
      if (!S.current || !k.current) return;
      const C = { placement: t, strategy: r, middleware: f };
      (M.current && (C.platform = M.current),
        JE(S.current, k.current, C).then((R) => {
          const L = { ...R, isPositioned: $.current !== !1 };
          I.current &&
            !Ua(T.current, L) &&
            ((T.current = L),
            Qs.flushSync(() => {
              p(L);
            }));
        }));
    }, [f, t, r, M, $]);
  ha(() => {
    u === !1 &&
      T.current.isPositioned &&
      ((T.current.isPositioned = !1), p((C) => ({ ...C, isPositioned: !1 })));
  }, [u]);
  const I = _.useRef(!1);
  (ha(
    () => (
      (I.current = !0),
      () => {
        I.current = !1;
      }
    ),
    [],
  ),
    ha(() => {
      if ((b && (S.current = b), E && (k.current = E), b && E)) {
        if (P.current) return P.current(b, E, B);
        B();
      }
    }, [b, E, B, P, j]));
  const Q = _.useMemo(
      () => ({ reference: S, floating: k, setReference: m, setFloating: v }),
      [m, v],
    ),
    H = _.useMemo(() => ({ reference: b, floating: E }), [b, E]),
    D = _.useMemo(() => {
      const C = { position: r, left: 0, top: 0 };
      if (!H.floating) return C;
      const R = up(H.floating, c.x),
        L = up(H.floating, c.y);
      return a
        ? {
            ...C,
            transform: "translate(" + R + "px, " + L + "px)",
            ...(_y(H.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: r, left: R, top: L };
    }, [r, a, H.floating, c.x, c.y]);
  return _.useMemo(
    () => ({ ...c, update: B, refs: Q, elements: H, floatingStyles: D }),
    [c, B, Q, H, D],
  );
}
const eS = (e) => {
    function t(r) {
      return {}.hasOwnProperty.call(r, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(r) {
        const { element: n, padding: s } = typeof e == "function" ? e(r) : e;
        return n && t(n)
          ? n.current != null
            ? lp({ element: n.current, padding: s }).fn(r)
            : {}
          : n
            ? lp({ element: n, padding: s }).fn(r)
            : {};
      },
    };
  },
  tS = (e, t) => ({ ...WE(e), options: [e, t] }),
  rS = (e, t) => ({ ...HE(e), options: [e, t] }),
  nS = (e, t) => ({ ...QE(e), options: [e, t] }),
  sS = (e, t) => ({ ...qE(e), options: [e, t] }),
  oS = (e, t) => ({ ...KE(e), options: [e, t] }),
  iS = (e, t) => ({ ...GE(e), options: [e, t] }),
  aS = (e, t) => ({ ...eS(e), options: [e, t] });
var lS = "Arrow",
  Ey = _.forwardRef((e, t) => {
    const { children: r, width: n = 10, height: s = 5, ...o } = e;
    return h.jsx(tt.svg, {
      ...o,
      ref: t,
      width: n,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : h.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Ey.displayName = lS;
var uS = Ey;
function cS(e) {
  const [t, r] = _.useState(void 0);
  return (
    en(() => {
      if (e) {
        r({ width: e.offsetWidth, height: e.offsetHeight });
        const n = new ResizeObserver((s) => {
          if (!Array.isArray(s) || !s.length) return;
          const o = s[0];
          let i, a;
          if ("borderBoxSize" in o) {
            const l = o.borderBoxSize,
              u = Array.isArray(l) ? l[0] : l;
            ((i = u.inlineSize), (a = u.blockSize));
          } else ((i = e.offsetWidth), (a = e.offsetHeight));
          r({ width: i, height: a });
        });
        return (n.observe(e, { box: "border-box" }), () => n.unobserve(e));
      } else r(void 0);
    }, [e]),
    t
  );
}
var Sy = "Popper",
  [ky, Cy] = dl(Sy),
  [JP, Ty] = ky(Sy),
  Py = "PopperAnchor",
  Ry = _.forwardRef((e, t) => {
    const { __scopePopper: r, virtualRef: n, ...s } = e,
      o = Ty(Py, r),
      i = _.useRef(null),
      a = Ft(t, i);
    return (
      _.useEffect(() => {
        o.onAnchorChange((n == null ? void 0 : n.current) || i.current);
      }),
      n ? null : h.jsx(tt.div, { ...s, ref: a })
    );
  });
Ry.displayName = Py;
var ch = "PopperContent",
  [dS, hS] = ky(ch),
  Ny = _.forwardRef((e, t) => {
    var re, Fn, vr, ln, wr, Un;
    const {
        __scopePopper: r,
        side: n = "bottom",
        sideOffset: s = 0,
        align: o = "center",
        alignOffset: i = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: u = [],
        collisionPadding: c = 0,
        sticky: p = "partial",
        hideWhenDetached: f = !1,
        updatePositionStrategy: d = "optimized",
        onPlaced: w,
        ...y
      } = e,
      x = Ty(ch, r),
      [g, m] = _.useState(null),
      v = Ft(t, (xr) => m(xr)),
      [b, E] = _.useState(null),
      S = cS(b),
      k = (S == null ? void 0 : S.width) ?? 0,
      T = (S == null ? void 0 : S.height) ?? 0,
      j = n + (o !== "center" ? "-" + o : ""),
      P =
        typeof c == "number"
          ? c
          : { top: 0, right: 0, bottom: 0, left: 0, ...c },
      M = Array.isArray(u) ? u : [u],
      $ = M.length > 0,
      B = { padding: P, boundary: M.filter(pS), altBoundary: $ },
      {
        refs: I,
        floatingStyles: Q,
        placement: H,
        isPositioned: D,
        middlewareData: C,
      } = ZE({
        strategy: "fixed",
        placement: j,
        whileElementsMounted: (...xr) =>
          VE(...xr, { animationFrame: d === "always" }),
        elements: { reference: x.anchor },
        middleware: [
          tS({ mainAxis: s + T, alignmentAxis: i }),
          l &&
            rS({
              mainAxis: !0,
              crossAxis: !1,
              limiter: p === "partial" ? nS() : void 0,
              ...B,
            }),
          l && sS({ ...B }),
          oS({
            ...B,
            apply: ({
              elements: xr,
              rects: vi,
              availableWidth: jl,
              availableHeight: wi,
            }) => {
              const { width: Al, height: Zs } = vi.reference,
                Bn = xr.floating.style;
              (Bn.setProperty("--radix-popper-available-width", `${jl}px`),
                Bn.setProperty("--radix-popper-available-height", `${wi}px`),
                Bn.setProperty("--radix-popper-anchor-width", `${Al}px`),
                Bn.setProperty("--radix-popper-anchor-height", `${Zs}px`));
            },
          }),
          b && aS({ element: b, padding: a }),
          mS({ arrowWidth: k, arrowHeight: T }),
          f && iS({ strategy: "referenceHidden", ...B }),
        ],
      }),
      [R, L] = Oy(H),
      q = Zr(w);
    en(() => {
      D && (q == null || q());
    }, [D, q]);
    const z = (re = C.arrow) == null ? void 0 : re.x,
      Y = (Fn = C.arrow) == null ? void 0 : Fn.y,
      Z = ((vr = C.arrow) == null ? void 0 : vr.centerOffset) !== 0,
      [be, Le] = _.useState();
    return (
      en(() => {
        g && Le(window.getComputedStyle(g).zIndex);
      }, [g]),
      h.jsx("div", {
        ref: I.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Q,
          transform: D ? Q.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: be,
          "--radix-popper-transform-origin": [
            (ln = C.transformOrigin) == null ? void 0 : ln.x,
            (wr = C.transformOrigin) == null ? void 0 : wr.y,
          ].join(" "),
          ...(((Un = C.hide) == null ? void 0 : Un.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: h.jsx(dS, {
          scope: r,
          placedSide: R,
          onArrowChange: E,
          arrowX: z,
          arrowY: Y,
          shouldHideArrow: Z,
          children: h.jsx(tt.div, {
            "data-side": R,
            "data-align": L,
            ...y,
            ref: v,
            style: { ...y.style, animation: D ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Ny.displayName = ch;
var jy = "PopperArrow",
  fS = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Ay = _.forwardRef(function (t, r) {
    const { __scopePopper: n, ...s } = t,
      o = hS(jy, n),
      i = fS[o.placedSide];
    return h.jsx("span", {
      ref: o.onArrowChange,
      style: {
        position: "absolute",
        left: o.arrowX,
        top: o.arrowY,
        [i]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[o.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[o.placedSide],
        visibility: o.shouldHideArrow ? "hidden" : void 0,
      },
      children: h.jsx(uS, {
        ...s,
        ref: r,
        style: { ...s.style, display: "block" },
      }),
    });
  });
Ay.displayName = jy;
function pS(e) {
  return e !== null;
}
var mS = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, g, m;
    const { placement: r, rects: n, middlewareData: s } = t,
      i = ((x = s.arrow) == null ? void 0 : x.centerOffset) !== 0,
      a = i ? 0 : e.arrowWidth,
      l = i ? 0 : e.arrowHeight,
      [u, c] = Oy(r),
      p = { start: "0%", center: "50%", end: "100%" }[c],
      f = (((g = s.arrow) == null ? void 0 : g.x) ?? 0) + a / 2,
      d = (((m = s.arrow) == null ? void 0 : m.y) ?? 0) + l / 2;
    let w = "",
      y = "";
    return (
      u === "bottom"
        ? ((w = i ? p : `${f}px`), (y = `${-l}px`))
        : u === "top"
          ? ((w = i ? p : `${f}px`), (y = `${n.floating.height + l}px`))
          : u === "right"
            ? ((w = `${-l}px`), (y = i ? p : `${d}px`))
            : u === "left" &&
              ((w = `${n.floating.width + l}px`), (y = i ? p : `${d}px`)),
      { data: { x: w, y } }
    );
  },
});
function Oy(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var gS = Ry,
  yS = Ny,
  vS = Ay,
  [yl, YP] = dl("Tooltip", [Cy]),
  dh = Cy(),
  Iy = "TooltipProvider",
  wS = 700,
  cp = "tooltip.open",
  [xS, Ly] = yl(Iy),
  $y = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: r = wS,
        skipDelayDuration: n = 300,
        disableHoverableContent: s = !1,
        children: o,
      } = e,
      i = _.useRef(!0),
      a = _.useRef(!1),
      l = _.useRef(0);
    return (
      _.useEffect(() => {
        const u = l.current;
        return () => window.clearTimeout(u);
      }, []),
      h.jsx(xS, {
        scope: t,
        isOpenDelayedRef: i,
        delayDuration: r,
        onOpen: _.useCallback(() => {
          (window.clearTimeout(l.current), (i.current = !1));
        }, []),
        onClose: _.useCallback(() => {
          (window.clearTimeout(l.current),
            (l.current = window.setTimeout(() => (i.current = !0), n)));
        }, [n]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: _.useCallback((u) => {
          a.current = u;
        }, []),
        disableHoverableContent: s,
        children: o,
      })
    );
  };
$y.displayName = Iy;
var My = "Tooltip",
  [XP, vl] = yl(My),
  Ic = "TooltipTrigger",
  bS = _.forwardRef((e, t) => {
    const { __scopeTooltip: r, ...n } = e,
      s = vl(Ic, r),
      o = Ly(Ic, r),
      i = dh(r),
      a = _.useRef(null),
      l = Ft(t, a, s.onTriggerChange),
      u = _.useRef(!1),
      c = _.useRef(!1),
      p = _.useCallback(() => (u.current = !1), []);
    return (
      _.useEffect(
        () => () => document.removeEventListener("pointerup", p),
        [p],
      ),
      h.jsx(gS, {
        asChild: !0,
        ...i,
        children: h.jsx(tt.button, {
          "aria-describedby": s.open ? s.contentId : void 0,
          "data-state": s.stateAttribute,
          ...n,
          ref: l,
          onPointerMove: Ce(e.onPointerMove, (f) => {
            f.pointerType !== "touch" &&
              !c.current &&
              !o.isPointerInTransitRef.current &&
              (s.onTriggerEnter(), (c.current = !0));
          }),
          onPointerLeave: Ce(e.onPointerLeave, () => {
            (s.onTriggerLeave(), (c.current = !1));
          }),
          onPointerDown: Ce(e.onPointerDown, () => {
            (s.open && s.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", p, { once: !0 }));
          }),
          onFocus: Ce(e.onFocus, () => {
            u.current || s.onOpen();
          }),
          onBlur: Ce(e.onBlur, s.onClose),
          onClick: Ce(e.onClick, s.onClose),
        }),
      })
    );
  });
bS.displayName = Ic;
var _S = "TooltipPortal",
  [ZP, ES] = yl(_S, { forceMount: void 0 }),
  Bs = "TooltipContent",
  Dy = _.forwardRef((e, t) => {
    const r = ES(Bs, e.__scopeTooltip),
      { forceMount: n = r.forceMount, side: s = "top", ...o } = e,
      i = vl(Bs, e.__scopeTooltip);
    return h.jsx(Yd, {
      present: n || i.open,
      children: i.disableHoverableContent
        ? h.jsx(Fy, { side: s, ...o, ref: t })
        : h.jsx(SS, { side: s, ...o, ref: t }),
    });
  }),
  SS = _.forwardRef((e, t) => {
    const r = vl(Bs, e.__scopeTooltip),
      n = Ly(Bs, e.__scopeTooltip),
      s = _.useRef(null),
      o = Ft(t, s),
      [i, a] = _.useState(null),
      { trigger: l, onClose: u } = r,
      c = s.current,
      { onPointerInTransitChange: p } = n,
      f = _.useCallback(() => {
        (a(null), p(!1));
      }, [p]),
      d = _.useCallback(
        (w, y) => {
          const x = w.currentTarget,
            g = { x: w.clientX, y: w.clientY },
            m = RS(g, x.getBoundingClientRect()),
            v = NS(g, m),
            b = jS(y.getBoundingClientRect()),
            E = OS([...v, ...b]);
          (a(E), p(!0));
        },
        [p],
      );
    return (
      _.useEffect(() => () => f(), [f]),
      _.useEffect(() => {
        if (l && c) {
          const w = (x) => d(x, c),
            y = (x) => d(x, l);
          return (
            l.addEventListener("pointerleave", w),
            c.addEventListener("pointerleave", y),
            () => {
              (l.removeEventListener("pointerleave", w),
                c.removeEventListener("pointerleave", y));
            }
          );
        }
      }, [l, c, d, f]),
      _.useEffect(() => {
        if (i) {
          const w = (y) => {
            const x = y.target,
              g = { x: y.clientX, y: y.clientY },
              m =
                (l == null ? void 0 : l.contains(x)) ||
                (c == null ? void 0 : c.contains(x)),
              v = !AS(g, i);
            m ? f() : v && (f(), u());
          };
          return (
            document.addEventListener("pointermove", w),
            () => document.removeEventListener("pointermove", w)
          );
        }
      }, [l, c, i, u, f]),
      h.jsx(Fy, { ...e, ref: o })
    );
  }),
  [kS, CS] = yl(My, { isInside: !1 }),
  TS = Nx("TooltipContent"),
  Fy = _.forwardRef((e, t) => {
    const {
        __scopeTooltip: r,
        children: n,
        "aria-label": s,
        onEscapeKeyDown: o,
        onPointerDownOutside: i,
        ...a
      } = e,
      l = vl(Bs, r),
      u = dh(r),
      { onClose: c } = l;
    return (
      _.useEffect(
        () => (
          document.addEventListener(cp, c),
          () => document.removeEventListener(cp, c)
        ),
        [c],
      ),
      _.useEffect(() => {
        if (l.trigger) {
          const p = (f) => {
            const d = f.target;
            d != null && d.contains(l.trigger) && c();
          };
          return (
            window.addEventListener("scroll", p, { capture: !0 }),
            () => window.removeEventListener("scroll", p, { capture: !0 })
          );
        }
      }, [l.trigger, c]),
      h.jsx(Jd, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: i,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: c,
        children: h.jsxs(yS, {
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
            h.jsx(TS, { children: n }),
            h.jsx(kS, {
              scope: r,
              isInside: !0,
              children: h.jsx(tb, {
                id: l.contentId,
                role: "tooltip",
                children: s || n,
              }),
            }),
          ],
        }),
      })
    );
  });
Dy.displayName = Bs;
var Uy = "TooltipArrow",
  PS = _.forwardRef((e, t) => {
    const { __scopeTooltip: r, ...n } = e,
      s = dh(r);
    return CS(Uy, r).isInside ? null : h.jsx(vS, { ...s, ...n, ref: t });
  });
PS.displayName = Uy;
function RS(e, t) {
  const r = Math.abs(t.top - e.y),
    n = Math.abs(t.bottom - e.y),
    s = Math.abs(t.right - e.x),
    o = Math.abs(t.left - e.x);
  switch (Math.min(r, n, s, o)) {
    case o:
      return "left";
    case s:
      return "right";
    case r:
      return "top";
    case n:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function NS(e, t, r = 5) {
  const n = [];
  switch (t) {
    case "top":
      n.push({ x: e.x - r, y: e.y + r }, { x: e.x + r, y: e.y + r });
      break;
    case "bottom":
      n.push({ x: e.x - r, y: e.y - r }, { x: e.x + r, y: e.y - r });
      break;
    case "left":
      n.push({ x: e.x + r, y: e.y - r }, { x: e.x + r, y: e.y + r });
      break;
    case "right":
      n.push({ x: e.x - r, y: e.y - r }, { x: e.x - r, y: e.y + r });
      break;
  }
  return n;
}
function jS(e) {
  const { top: t, right: r, bottom: n, left: s } = e;
  return [
    { x: s, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: s, y: n },
  ];
}
function AS(e, t) {
  const { x: r, y: n } = e;
  let s = !1;
  for (let o = 0, i = t.length - 1; o < t.length; i = o++) {
    const a = t[o],
      l = t[i],
      u = a.x,
      c = a.y,
      p = l.x,
      f = l.y;
    c > n != f > n && r < ((p - u) * (n - c)) / (f - c) + u && (s = !s);
  }
  return s;
}
function OS(e) {
  const t = e.slice();
  return (
    t.sort((r, n) =>
      r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0,
    ),
    IS(t)
  );
}
function IS(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (; t.length >= 2; ) {
      const o = t[t.length - 1],
        i = t[t.length - 2];
      if ((o.x - i.x) * (s.y - i.y) >= (o.y - i.y) * (s.x - i.x)) t.pop();
      else break;
    }
    t.push(s);
  }
  t.pop();
  const r = [];
  for (let n = e.length - 1; n >= 0; n--) {
    const s = e[n];
    for (; r.length >= 2; ) {
      const o = r[r.length - 1],
        i = r[r.length - 2];
      if ((o.x - i.x) * (s.y - i.y) >= (o.y - i.y) * (s.x - i.x)) r.pop();
      else break;
    }
    r.push(s);
  }
  return (
    r.pop(),
    t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y
      ? t
      : t.concat(r)
  );
}
var LS = $y,
  By = Dy;
const $S = LS,
  MS = _.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) =>
    h.jsx(By, {
      ref: n,
      sideOffset: t,
      className: Dn(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e,
      ),
      ...r,
    }),
  );
MS.displayName = By.displayName;
var wl = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  xl = typeof window > "u" || "Deno" in globalThis;
function Rt() {}
function DS(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function FS(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function US(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Lc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function BS(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function dp(e, t) {
  const {
    type: r = "all",
    exact: n,
    fetchStatus: s,
    predicate: o,
    queryKey: i,
    stale: a,
  } = e;
  if (i) {
    if (n) {
      if (t.queryHash !== hh(i, t.options)) return !1;
    } else if (!Yo(t.queryKey, i)) return !1;
  }
  if (r !== "all") {
    const l = t.isActive();
    if ((r === "active" && !l) || (r === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (s && s !== t.state.fetchStatus) ||
    (o && !o(t))
  );
}
function hp(e, t) {
  const { exact: r, status: n, predicate: s, mutationKey: o } = e;
  if (o) {
    if (!t.options.mutationKey) return !1;
    if (r) {
      if (Jo(t.options.mutationKey) !== Jo(o)) return !1;
    } else if (!Yo(t.options.mutationKey, o)) return !1;
  }
  return !((n && t.state.status !== n) || (s && !s(t)));
}
function hh(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Jo)(e);
}
function Jo(e) {
  return JSON.stringify(e, (t, r) =>
    $c(r)
      ? Object.keys(r)
          .sort()
          .reduce((n, s) => ((n[s] = r[s]), n), {})
      : r,
  );
}
function Yo(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? Object.keys(t).every((r) => Yo(e[r], t[r]))
        : !1;
}
function zy(e, t) {
  if (e === t) return e;
  const r = fp(e) && fp(t);
  if (r || ($c(e) && $c(t))) {
    const n = r ? e : Object.keys(e),
      s = n.length,
      o = r ? t : Object.keys(t),
      i = o.length,
      a = r ? [] : {},
      l = new Set(n);
    let u = 0;
    for (let c = 0; c < i; c++) {
      const p = r ? c : o[c];
      ((!r && l.has(p)) || r) && e[p] === void 0 && t[p] === void 0
        ? ((a[p] = void 0), u++)
        : ((a[p] = zy(e[p], t[p])), a[p] === e[p] && e[p] !== void 0 && u++);
    }
    return s === i && u === s ? e : a;
  }
  return t;
}
function fp(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function $c(e) {
  if (!pp(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const r = t.prototype;
  return !(
    !pp(r) ||
    !r.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function pp(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function zS(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function VS(e, t, r) {
  return typeof r.structuralSharing == "function"
    ? r.structuralSharing(e, t)
    : r.structuralSharing !== !1
      ? zy(e, t)
      : t;
}
function WS(e, t, r = 0) {
  const n = [...e, t];
  return r && n.length > r ? n.slice(1) : n;
}
function HS(e, t, r = 0) {
  const n = [t, ...e];
  return r && n.length > r ? n.slice(0, -1) : n;
}
var fh = Symbol();
function Vy(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === fh
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
var _n,
  Ir,
  ks,
  em,
  qS =
    ((em = class extends wl {
      constructor() {
        super();
        te(this, _n);
        te(this, Ir);
        te(this, ks);
        G(this, ks, (t) => {
          if (!xl && window.addEventListener) {
            const r = () => t();
            return (
              window.addEventListener("visibilitychange", r, !1),
              () => {
                window.removeEventListener("visibilitychange", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        N(this, Ir) || this.setEventListener(N(this, ks));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = N(this, Ir)) == null || t.call(this), G(this, Ir, void 0));
      }
      setEventListener(t) {
        var r;
        (G(this, ks, t),
          (r = N(this, Ir)) == null || r.call(this),
          G(
            this,
            Ir,
            t((n) => {
              typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
            }),
          ));
      }
      setFocused(t) {
        N(this, _n) !== t && (G(this, _n, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((r) => {
          r(t);
        });
      }
      isFocused() {
        var t;
        return typeof N(this, _n) == "boolean"
          ? N(this, _n)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (_n = new WeakMap()),
    (Ir = new WeakMap()),
    (ks = new WeakMap()),
    em),
  Wy = new qS(),
  Cs,
  Lr,
  Ts,
  tm,
  KS =
    ((tm = class extends wl {
      constructor() {
        super();
        te(this, Cs, !0);
        te(this, Lr);
        te(this, Ts);
        G(this, Ts, (t) => {
          if (!xl && window.addEventListener) {
            const r = () => t(!0),
              n = () => t(!1);
            return (
              window.addEventListener("online", r, !1),
              window.addEventListener("offline", n, !1),
              () => {
                (window.removeEventListener("online", r),
                  window.removeEventListener("offline", n));
              }
            );
          }
        });
      }
      onSubscribe() {
        N(this, Lr) || this.setEventListener(N(this, Ts));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = N(this, Lr)) == null || t.call(this), G(this, Lr, void 0));
      }
      setEventListener(t) {
        var r;
        (G(this, Ts, t),
          (r = N(this, Lr)) == null || r.call(this),
          G(this, Lr, t(this.setOnline.bind(this))));
      }
      setOnline(t) {
        N(this, Cs) !== t &&
          (G(this, Cs, t),
          this.listeners.forEach((n) => {
            n(t);
          }));
      }
      isOnline() {
        return N(this, Cs);
      }
    }),
    (Cs = new WeakMap()),
    (Lr = new WeakMap()),
    (Ts = new WeakMap()),
    tm),
  Ba = new KS();
function GS() {
  let e, t;
  const r = new Promise((s, o) => {
    ((e = s), (t = o));
  });
  ((r.status = "pending"), r.catch(() => {}));
  function n(s) {
    (Object.assign(r, s), delete r.resolve, delete r.reject);
  }
  return (
    (r.resolve = (s) => {
      (n({ status: "fulfilled", value: s }), e(s));
    }),
    (r.reject = (s) => {
      (n({ status: "rejected", reason: s }), t(s));
    }),
    r
  );
}
function QS(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Hy(e) {
  return (e ?? "online") === "online" ? Ba.isOnline() : !0;
}
var qy = class extends Error {
  constructor(e) {
    (super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent));
  }
};
function pu(e) {
  return e instanceof qy;
}
function Ky(e) {
  let t = !1,
    r = 0,
    n = !1,
    s;
  const o = GS(),
    i = (y) => {
      var x;
      n || (f(new qy(y)), (x = e.abort) == null || x.call(e));
    },
    a = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    u = () =>
      Wy.isFocused() &&
      (e.networkMode === "always" || Ba.isOnline()) &&
      e.canRun(),
    c = () => Hy(e.networkMode) && e.canRun(),
    p = (y) => {
      var x;
      n ||
        ((n = !0),
        (x = e.onSuccess) == null || x.call(e, y),
        s == null || s(),
        o.resolve(y));
    },
    f = (y) => {
      var x;
      n ||
        ((n = !0),
        (x = e.onError) == null || x.call(e, y),
        s == null || s(),
        o.reject(y));
    },
    d = () =>
      new Promise((y) => {
        var x;
        ((s = (g) => {
          (n || u()) && y(g);
        }),
          (x = e.onPause) == null || x.call(e));
      }).then(() => {
        var y;
        ((s = void 0), n || (y = e.onContinue) == null || y.call(e));
      }),
    w = () => {
      if (n) return;
      let y;
      const x = r === 0 ? e.initialPromise : void 0;
      try {
        y = x ?? e.fn();
      } catch (g) {
        y = Promise.reject(g);
      }
      Promise.resolve(y)
        .then(p)
        .catch((g) => {
          var S;
          if (n) return;
          const m = e.retry ?? (xl ? 0 : 3),
            v = e.retryDelay ?? QS,
            b = typeof v == "function" ? v(r, g) : v,
            E =
              m === !0 ||
              (typeof m == "number" && r < m) ||
              (typeof m == "function" && m(r, g));
          if (t || !E) {
            f(g);
            return;
          }
          (r++,
            (S = e.onFail) == null || S.call(e, r, g),
            zS(b)
              .then(() => (u() ? void 0 : d()))
              .then(() => {
                t ? f(g) : w();
              }));
        });
    };
  return {
    promise: o,
    cancel: i,
    continue: () => (s == null || s(), o),
    cancelRetry: a,
    continueRetry: l,
    canStart: c,
    start: () => (c() ? w() : d().then(w), o),
  };
}
var JS = (e) => setTimeout(e, 0);
function YS() {
  let e = [],
    t = 0,
    r = (a) => {
      a();
    },
    n = (a) => {
      a();
    },
    s = JS;
  const o = (a) => {
      t
        ? e.push(a)
        : s(() => {
            r(a);
          });
    },
    i = () => {
      const a = e;
      ((e = []),
        a.length &&
          s(() => {
            n(() => {
              a.forEach((l) => {
                r(l);
              });
            });
          }));
    };
  return {
    batch: (a) => {
      let l;
      t++;
      try {
        l = a();
      } finally {
        (t--, t || i());
      }
      return l;
    },
    batchCalls:
      (a) =>
      (...l) => {
        o(() => {
          a(...l);
        });
      },
    schedule: o,
    setNotifyFunction: (a) => {
      r = a;
    },
    setBatchNotifyFunction: (a) => {
      n = a;
    },
    setScheduler: (a) => {
      s = a;
    },
  };
}
var We = YS(),
  En,
  rm,
  Gy =
    ((rm = class {
      constructor() {
        te(this, En);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        (this.clearGcTimeout(),
          FS(this.gcTime) &&
            G(
              this,
              En,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            ));
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (xl ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        N(this, En) && (clearTimeout(N(this, En)), G(this, En, void 0));
      }
    }),
    (En = new WeakMap()),
    rm),
  Ps,
  Sn,
  mt,
  kn,
  Fe,
  ii,
  Cn,
  jt,
  rr,
  nm,
  XS =
    ((nm = class extends Gy {
      constructor(t) {
        super();
        te(this, jt);
        te(this, Ps);
        te(this, Sn);
        te(this, mt);
        te(this, kn);
        te(this, Fe);
        te(this, ii);
        te(this, Cn);
        (G(this, Cn, !1),
          G(this, ii, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          G(this, kn, t.client),
          G(this, mt, N(this, kn).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          G(this, Ps, ek(this.options)),
          (this.state = t.state ?? N(this, Ps)),
          this.scheduleGc());
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = N(this, Fe)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        ((this.options = { ...N(this, ii), ...t }),
          this.updateGcTime(this.options.gcTime));
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          N(this, mt).remove(this);
      }
      setData(t, r) {
        const n = VS(this.state.data, t, this.options);
        return (
          $e(this, jt, rr).call(this, {
            data: n,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual,
          }),
          n
        );
      }
      setState(t, r) {
        $e(this, jt, rr).call(this, {
          type: "setState",
          state: t,
          setStateOptions: r,
        });
      }
      cancel(t) {
        var n, s;
        const r = (n = N(this, Fe)) == null ? void 0 : n.promise;
        return (
          (s = N(this, Fe)) == null || s.cancel(t),
          r ? r.then(Rt).catch(Rt) : Promise.resolve()
        );
      }
      destroy() {
        (super.destroy(), this.cancel({ silent: !0 }));
      }
      reset() {
        (this.destroy(), this.setState(N(this, Ps)));
      }
      isActive() {
        return this.observers.some((t) => BS(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === fh ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => Lc(t.options.staleTime, this) === "static",
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
              : !US(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var r;
        const t = this.observers.find((n) => n.shouldFetchOnWindowFocus());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (r = N(this, Fe)) == null || r.continue());
      }
      onOnline() {
        var r;
        const t = this.observers.find((n) => n.shouldFetchOnReconnect());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (r = N(this, Fe)) == null || r.continue());
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          N(this, mt).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((r) => r !== t)),
          this.observers.length ||
            (N(this, Fe) &&
              (N(this, Cn)
                ? N(this, Fe).cancel({ revert: !0 })
                : N(this, Fe).cancelRetry()),
            this.scheduleGc()),
          N(this, mt).notify({
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
          $e(this, jt, rr).call(this, { type: "invalidate" });
      }
      fetch(t, r) {
        var u, c, p;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && r != null && r.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (N(this, Fe))
            return (N(this, Fe).continueRetry(), N(this, Fe).promise);
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const f = this.observers.find((d) => d.options.queryFn);
          f && this.setOptions(f.options);
        }
        const n = new AbortController(),
          s = (f) => {
            Object.defineProperty(f, "signal", {
              enumerable: !0,
              get: () => (G(this, Cn, !0), n.signal),
            });
          },
          o = () => {
            const f = Vy(this.options, r),
              w = (() => {
                const y = {
                  client: N(this, kn),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return (s(y), y);
              })();
            return (
              G(this, Cn, !1),
              this.options.persister ? this.options.persister(f, w, this) : f(w)
            );
          },
          a = (() => {
            const f = {
              fetchOptions: r,
              options: this.options,
              queryKey: this.queryKey,
              client: N(this, kn),
              state: this.state,
              fetchFn: o,
            };
            return (s(f), f);
          })();
        ((u = this.options.behavior) == null || u.onFetch(a, this),
          G(this, Sn, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((c = a.fetchOptions) == null ? void 0 : c.meta)) &&
            $e(this, jt, rr).call(this, {
              type: "fetch",
              meta: (p = a.fetchOptions) == null ? void 0 : p.meta,
            }));
        const l = (f) => {
          var d, w, y, x;
          ((pu(f) && f.silent) ||
            $e(this, jt, rr).call(this, { type: "error", error: f }),
            pu(f) ||
              ((w = (d = N(this, mt).config).onError) == null ||
                w.call(d, f, this),
              (x = (y = N(this, mt).config).onSettled) == null ||
                x.call(y, this.state.data, f, this)),
            this.scheduleGc());
        };
        return (
          G(
            this,
            Fe,
            Ky({
              initialPromise: r == null ? void 0 : r.initialPromise,
              fn: a.fetchFn,
              abort: n.abort.bind(n),
              onSuccess: (f) => {
                var d, w, y, x;
                if (f === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(f);
                } catch (g) {
                  l(g);
                  return;
                }
                ((w = (d = N(this, mt).config).onSuccess) == null ||
                  w.call(d, f, this),
                  (x = (y = N(this, mt).config).onSettled) == null ||
                    x.call(y, f, this.state.error, this),
                  this.scheduleGc());
              },
              onError: l,
              onFail: (f, d) => {
                $e(this, jt, rr).call(this, {
                  type: "failed",
                  failureCount: f,
                  error: d,
                });
              },
              onPause: () => {
                $e(this, jt, rr).call(this, { type: "pause" });
              },
              onContinue: () => {
                $e(this, jt, rr).call(this, { type: "continue" });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
              canRun: () => !0,
            }),
          ),
          N(this, Fe).start()
        );
      }
    }),
    (Ps = new WeakMap()),
    (Sn = new WeakMap()),
    (mt = new WeakMap()),
    (kn = new WeakMap()),
    (Fe = new WeakMap()),
    (ii = new WeakMap()),
    (Cn = new WeakMap()),
    (jt = new WeakSet()),
    (rr = function (t) {
      const r = (n) => {
        switch (t.type) {
          case "failed":
            return {
              ...n,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...n, fetchStatus: "paused" };
          case "continue":
            return { ...n, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...n,
              ...ZS(n.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return (
              G(this, Sn, void 0),
              {
                ...n,
                data: t.data,
                dataUpdateCount: n.dataUpdateCount + 1,
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
            const s = t.error;
            return pu(s) && s.revert && N(this, Sn)
              ? { ...N(this, Sn), fetchStatus: "idle" }
              : {
                  ...n,
                  error: s,
                  errorUpdateCount: n.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: n.fetchFailureCount + 1,
                  fetchFailureReason: s,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...n, isInvalidated: !0 };
          case "setState":
            return { ...n, ...t.state };
        }
      };
      ((this.state = r(this.state)),
        We.batch(() => {
          (this.observers.forEach((n) => {
            n.onQueryUpdate();
          }),
            N(this, mt).notify({ query: this, type: "updated", action: t }));
        }));
    }),
    nm);
function ZS(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Hy(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function ek(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    r = t !== void 0,
    n = r
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? (n ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Wt,
  sm,
  tk =
    ((sm = class extends wl {
      constructor(t = {}) {
        super();
        te(this, Wt);
        ((this.config = t), G(this, Wt, new Map()));
      }
      build(t, r, n) {
        const s = r.queryKey,
          o = r.queryHash ?? hh(s, r);
        let i = this.get(o);
        return (
          i ||
            ((i = new XS({
              client: t,
              queryKey: s,
              queryHash: o,
              options: t.defaultQueryOptions(r),
              state: n,
              defaultOptions: t.getQueryDefaults(s),
            })),
            this.add(i)),
          i
        );
      }
      add(t) {
        N(this, Wt).has(t.queryHash) ||
          (N(this, Wt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const r = N(this, Wt).get(t.queryHash);
        r &&
          (t.destroy(),
          r === t && N(this, Wt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        We.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return N(this, Wt).get(t);
      }
      getAll() {
        return [...N(this, Wt).values()];
      }
      find(t) {
        const r = { exact: !0, ...t };
        return this.getAll().find((n) => dp(r, n));
      }
      findAll(t = {}) {
        const r = this.getAll();
        return Object.keys(t).length > 0 ? r.filter((n) => dp(t, n)) : r;
      }
      notify(t) {
        We.batch(() => {
          this.listeners.forEach((r) => {
            r(t);
          });
        });
      }
      onFocus() {
        We.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        We.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Wt = new WeakMap()),
    sm),
  Ht,
  ze,
  Tn,
  qt,
  Tr,
  om,
  rk =
    ((om = class extends Gy {
      constructor(t) {
        super();
        te(this, qt);
        te(this, Ht);
        te(this, ze);
        te(this, Tn);
        ((this.mutationId = t.mutationId),
          G(this, ze, t.mutationCache),
          G(this, Ht, []),
          (this.state = t.state || nk()),
          this.setOptions(t.options),
          this.scheduleGc());
      }
      setOptions(t) {
        ((this.options = t), this.updateGcTime(this.options.gcTime));
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        N(this, Ht).includes(t) ||
          (N(this, Ht).push(t),
          this.clearGcTimeout(),
          N(this, ze).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        (G(
          this,
          Ht,
          N(this, Ht).filter((r) => r !== t),
        ),
          this.scheduleGc(),
          N(this, ze).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          }));
      }
      optionalRemove() {
        N(this, Ht).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : N(this, ze).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = N(this, Tn)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var o, i, a, l, u, c, p, f, d, w, y, x, g, m, v, b, E, S, k, T;
        const r = () => {
          $e(this, qt, Tr).call(this, { type: "continue" });
        };
        G(
          this,
          Tn,
          Ky({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (j, P) => {
              $e(this, qt, Tr).call(this, {
                type: "failed",
                failureCount: j,
                error: P,
              });
            },
            onPause: () => {
              $e(this, qt, Tr).call(this, { type: "pause" });
            },
            onContinue: r,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => N(this, ze).canRun(this),
          }),
        );
        const n = this.state.status === "pending",
          s = !N(this, Tn).canStart();
        try {
          if (n) r();
          else {
            ($e(this, qt, Tr).call(this, {
              type: "pending",
              variables: t,
              isPaused: s,
            }),
              await ((i = (o = N(this, ze).config).onMutate) == null
                ? void 0
                : i.call(o, t, this)));
            const P = await ((l = (a = this.options).onMutate) == null
              ? void 0
              : l.call(a, t));
            P !== this.state.context &&
              $e(this, qt, Tr).call(this, {
                type: "pending",
                context: P,
                variables: t,
                isPaused: s,
              });
          }
          const j = await N(this, Tn).start();
          return (
            await ((c = (u = N(this, ze).config).onSuccess) == null
              ? void 0
              : c.call(u, j, t, this.state.context, this)),
            await ((f = (p = this.options).onSuccess) == null
              ? void 0
              : f.call(p, j, t, this.state.context)),
            await ((w = (d = N(this, ze).config).onSettled) == null
              ? void 0
              : w.call(
                  d,
                  j,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                )),
            await ((x = (y = this.options).onSettled) == null
              ? void 0
              : x.call(y, j, null, t, this.state.context)),
            $e(this, qt, Tr).call(this, { type: "success", data: j }),
            j
          );
        } catch (j) {
          try {
            throw (
              await ((m = (g = N(this, ze).config).onError) == null
                ? void 0
                : m.call(g, j, t, this.state.context, this)),
              await ((b = (v = this.options).onError) == null
                ? void 0
                : b.call(v, j, t, this.state.context)),
              await ((S = (E = N(this, ze).config).onSettled) == null
                ? void 0
                : S.call(
                    E,
                    void 0,
                    j,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((T = (k = this.options).onSettled) == null
                ? void 0
                : T.call(k, void 0, j, t, this.state.context)),
              j
            );
          } finally {
            $e(this, qt, Tr).call(this, { type: "error", error: j });
          }
        } finally {
          N(this, ze).runNext(this);
        }
      }
    }),
    (Ht = new WeakMap()),
    (ze = new WeakMap()),
    (Tn = new WeakMap()),
    (qt = new WeakSet()),
    (Tr = function (t) {
      const r = (n) => {
        switch (t.type) {
          case "failed":
            return {
              ...n,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...n, isPaused: !0 };
          case "continue":
            return { ...n, isPaused: !1 };
          case "pending":
            return {
              ...n,
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
              ...n,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...n,
              data: void 0,
              error: t.error,
              failureCount: n.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      ((this.state = r(this.state)),
        We.batch(() => {
          (N(this, Ht).forEach((n) => {
            n.onMutationUpdate(t);
          }),
            N(this, ze).notify({ mutation: this, type: "updated", action: t }));
        }));
    }),
    om);
function nk() {
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
var ir,
  At,
  ai,
  im,
  sk =
    ((im = class extends wl {
      constructor(t = {}) {
        super();
        te(this, ir);
        te(this, At);
        te(this, ai);
        ((this.config = t),
          G(this, ir, new Set()),
          G(this, At, new Map()),
          G(this, ai, 0));
      }
      build(t, r, n) {
        const s = new rk({
          mutationCache: this,
          mutationId: ++bi(this, ai)._,
          options: t.defaultMutationOptions(r),
          state: n,
        });
        return (this.add(s), s);
      }
      add(t) {
        N(this, ir).add(t);
        const r = Vi(t);
        if (typeof r == "string") {
          const n = N(this, At).get(r);
          n ? n.push(t) : N(this, At).set(r, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (N(this, ir).delete(t)) {
          const r = Vi(t);
          if (typeof r == "string") {
            const n = N(this, At).get(r);
            if (n)
              if (n.length > 1) {
                const s = n.indexOf(t);
                s !== -1 && n.splice(s, 1);
              } else n[0] === t && N(this, At).delete(r);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const r = Vi(t);
        if (typeof r == "string") {
          const n = N(this, At).get(r),
            s =
              n == null ? void 0 : n.find((o) => o.state.status === "pending");
          return !s || s === t;
        } else return !0;
      }
      runNext(t) {
        var n;
        const r = Vi(t);
        if (typeof r == "string") {
          const s =
            (n = N(this, At).get(r)) == null
              ? void 0
              : n.find((o) => o !== t && o.state.isPaused);
          return (s == null ? void 0 : s.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        We.batch(() => {
          (N(this, ir).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            N(this, ir).clear(),
            N(this, At).clear());
        });
      }
      getAll() {
        return Array.from(N(this, ir));
      }
      find(t) {
        const r = { exact: !0, ...t };
        return this.getAll().find((n) => hp(r, n));
      }
      findAll(t = {}) {
        return this.getAll().filter((r) => hp(t, r));
      }
      notify(t) {
        We.batch(() => {
          this.listeners.forEach((r) => {
            r(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((r) => r.state.isPaused);
        return We.batch(() =>
          Promise.all(t.map((r) => r.continue().catch(Rt))),
        );
      }
    }),
    (ir = new WeakMap()),
    (At = new WeakMap()),
    (ai = new WeakMap()),
    im);
function Vi(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function mp(e) {
  return {
    onFetch: (t, r) => {
      var c, p, f, d, w;
      const n = t.options,
        s =
          (f =
            (p = (c = t.fetchOptions) == null ? void 0 : c.meta) == null
              ? void 0
              : p.fetchMore) == null
            ? void 0
            : f.direction,
        o = ((d = t.state.data) == null ? void 0 : d.pages) || [],
        i = ((w = t.state.data) == null ? void 0 : w.pageParams) || [];
      let a = { pages: [], pageParams: [] },
        l = 0;
      const u = async () => {
        let y = !1;
        const x = (v) => {
            Object.defineProperty(v, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (y = !0)
                  : t.signal.addEventListener("abort", () => {
                      y = !0;
                    }),
                t.signal
              ),
            });
          },
          g = Vy(t.options, t.fetchOptions),
          m = async (v, b, E) => {
            if (y) return Promise.reject();
            if (b == null && v.pages.length) return Promise.resolve(v);
            const k = (() => {
                const M = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: b,
                  direction: E ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return (x(M), M);
              })(),
              T = await g(k),
              { maxPages: j } = t.options,
              P = E ? HS : WS;
            return {
              pages: P(v.pages, T, j),
              pageParams: P(v.pageParams, b, j),
            };
          };
        if (s && o.length) {
          const v = s === "backward",
            b = v ? ok : gp,
            E = { pages: o, pageParams: i },
            S = b(n, E);
          a = await m(E, S, v);
        } else {
          const v = e ?? o.length;
          do {
            const b = l === 0 ? (i[0] ?? n.initialPageParam) : gp(n, a);
            if (l > 0 && b == null) break;
            ((a = await m(a, b)), l++);
          } while (l < v);
        }
        return a;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var y, x;
            return (x = (y = t.options).persister) == null
              ? void 0
              : x.call(
                  y,
                  u,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  r,
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function gp(e, { pages: t, pageParams: r }) {
  const n = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[n], t, r[n], r) : void 0;
}
function ok(e, { pages: t, pageParams: r }) {
  var n;
  return t.length > 0
    ? (n = e.getPreviousPageParam) == null
      ? void 0
      : n.call(e, t[0], t, r[0], r)
    : void 0;
}
var ge,
  $r,
  Mr,
  Rs,
  Ns,
  Dr,
  js,
  As,
  am,
  ik =
    ((am = class {
      constructor(e = {}) {
        te(this, ge);
        te(this, $r);
        te(this, Mr);
        te(this, Rs);
        te(this, Ns);
        te(this, Dr);
        te(this, js);
        te(this, As);
        (G(this, ge, e.queryCache || new tk()),
          G(this, $r, e.mutationCache || new sk()),
          G(this, Mr, e.defaultOptions || {}),
          G(this, Rs, new Map()),
          G(this, Ns, new Map()),
          G(this, Dr, 0));
      }
      mount() {
        (bi(this, Dr)._++,
          N(this, Dr) === 1 &&
            (G(
              this,
              js,
              Wy.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), N(this, ge).onFocus());
              }),
            ),
            G(
              this,
              As,
              Ba.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), N(this, ge).onOnline());
              }),
            )));
      }
      unmount() {
        var e, t;
        (bi(this, Dr)._--,
          N(this, Dr) === 0 &&
            ((e = N(this, js)) == null || e.call(this),
            G(this, js, void 0),
            (t = N(this, As)) == null || t.call(this),
            G(this, As, void 0)));
      }
      isFetching(e) {
        return N(this, ge).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return N(this, $r).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var r;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (r = N(this, ge).get(t.queryHash)) == null
          ? void 0
          : r.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          r = N(this, ge).build(this, t),
          n = r.state.data;
        return n === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              r.isStaleByTime(Lc(t.staleTime, r)) &&
              this.prefetchQuery(t),
            Promise.resolve(n));
      }
      getQueriesData(e) {
        return N(this, ge)
          .findAll(e)
          .map(({ queryKey: t, state: r }) => {
            const n = r.data;
            return [t, n];
          });
      }
      setQueryData(e, t, r) {
        const n = this.defaultQueryOptions({ queryKey: e }),
          s = N(this, ge).get(n.queryHash),
          o = s == null ? void 0 : s.state.data,
          i = DS(t, o);
        if (i !== void 0)
          return N(this, ge)
            .build(this, n)
            .setData(i, { ...r, manual: !0 });
      }
      setQueriesData(e, t, r) {
        return We.batch(() =>
          N(this, ge)
            .findAll(e)
            .map(({ queryKey: n }) => [n, this.setQueryData(n, t, r)]),
        );
      }
      getQueryState(e) {
        var r;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (r = N(this, ge).get(t.queryHash)) == null ? void 0 : r.state;
      }
      removeQueries(e) {
        const t = N(this, ge);
        We.batch(() => {
          t.findAll(e).forEach((r) => {
            t.remove(r);
          });
        });
      }
      resetQueries(e, t) {
        const r = N(this, ge);
        return We.batch(
          () => (
            r.findAll(e).forEach((n) => {
              n.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          ),
        );
      }
      cancelQueries(e, t = {}) {
        const r = { revert: !0, ...t },
          n = We.batch(() =>
            N(this, ge)
              .findAll(e)
              .map((s) => s.cancel(r)),
          );
        return Promise.all(n).then(Rt).catch(Rt);
      }
      invalidateQueries(e, t = {}) {
        return We.batch(
          () => (
            N(this, ge)
              .findAll(e)
              .forEach((r) => {
                r.invalidate();
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
                  t,
                )
          ),
        );
      }
      refetchQueries(e, t = {}) {
        const r = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          n = We.batch(() =>
            N(this, ge)
              .findAll(e)
              .filter((s) => !s.isDisabled() && !s.isStatic())
              .map((s) => {
                let o = s.fetch(void 0, r);
                return (
                  r.throwOnError || (o = o.catch(Rt)),
                  s.state.fetchStatus === "paused" ? Promise.resolve() : o
                );
              }),
          );
        return Promise.all(n).then(Rt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const r = N(this, ge).build(this, t);
        return r.isStaleByTime(Lc(t.staleTime, r))
          ? r.fetch(t)
          : Promise.resolve(r.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(Rt).catch(Rt);
      }
      fetchInfiniteQuery(e) {
        return ((e.behavior = mp(e.pages)), this.fetchQuery(e));
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Rt).catch(Rt);
      }
      ensureInfiniteQueryData(e) {
        return ((e.behavior = mp(e.pages)), this.ensureQueryData(e));
      }
      resumePausedMutations() {
        return Ba.isOnline()
          ? N(this, $r).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return N(this, ge);
      }
      getMutationCache() {
        return N(this, $r);
      }
      getDefaultOptions() {
        return N(this, Mr);
      }
      setDefaultOptions(e) {
        G(this, Mr, e);
      }
      setQueryDefaults(e, t) {
        N(this, Rs).set(Jo(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...N(this, Rs).values()],
          r = {};
        return (
          t.forEach((n) => {
            Yo(e, n.queryKey) && Object.assign(r, n.defaultOptions);
          }),
          r
        );
      }
      setMutationDefaults(e, t) {
        N(this, Ns).set(Jo(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...N(this, Ns).values()],
          r = {};
        return (
          t.forEach((n) => {
            Yo(e, n.mutationKey) && Object.assign(r, n.defaultOptions);
          }),
          r
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...N(this, Mr).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = hh(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === fh && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...N(this, Mr).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        (N(this, ge).clear(), N(this, $r).clear());
      }
    }),
    (ge = new WeakMap()),
    ($r = new WeakMap()),
    (Mr = new WeakMap()),
    (Rs = new WeakMap()),
    (Ns = new WeakMap()),
    (Dr = new WeakMap()),
    (js = new WeakMap()),
    (As = new WeakMap()),
    am),
  ak = _.createContext(void 0),
  lk = ({ client: e, children: t }) => (
    _.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    h.jsx(ak.Provider, { value: e, children: t })
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
 */ function za() {
  return (
    (za = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    za.apply(this, arguments)
  );
}
var Br;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(Br || (Br = {}));
const yp = "popstate";
function uk(e) {
  e === void 0 && (e = {});
  function t(n, s) {
    let { pathname: o, search: i, hash: a } = n.location;
    return Mc(
      "",
      { pathname: o, search: i, hash: a },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default",
    );
  }
  function r(n, s) {
    return typeof s == "string" ? s : Jy(s);
  }
  return dk(t, r, null, e);
}
function et(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Qy(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function ck() {
  return Math.random().toString(36).substr(2, 8);
}
function vp(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Mc(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    za(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? bl(t) : t,
      { state: r, key: (t && t.key) || n || ck() },
    )
  );
}
function Jy(e) {
  let { pathname: t = "/", search: r = "", hash: n = "" } = e;
  return (
    r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
    t
  );
}
function bl(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let n = e.indexOf("?");
    (n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
      e && (t.pathname = e));
  }
  return t;
}
function dk(e, t, r, n) {
  n === void 0 && (n = {});
  let { window: s = document.defaultView, v5Compat: o = !1 } = n,
    i = s.history,
    a = Br.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), i.replaceState(za({}, i.state, { idx: u }), ""));
  function c() {
    return (i.state || { idx: null }).idx;
  }
  function p() {
    a = Br.Pop;
    let x = c(),
      g = x == null ? null : x - u;
    ((u = x), l && l({ action: a, location: y.location, delta: g }));
  }
  function f(x, g) {
    a = Br.Push;
    let m = Mc(y.location, x, g);
    u = c() + 1;
    let v = vp(m, u),
      b = y.createHref(m);
    try {
      i.pushState(v, "", b);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      s.location.assign(b);
    }
    o && l && l({ action: a, location: y.location, delta: 1 });
  }
  function d(x, g) {
    a = Br.Replace;
    let m = Mc(y.location, x, g);
    u = c();
    let v = vp(m, u),
      b = y.createHref(m);
    (i.replaceState(v, "", b),
      o && l && l({ action: a, location: y.location, delta: 0 }));
  }
  function w(x) {
    let g = s.location.origin !== "null" ? s.location.origin : s.location.href,
      m = typeof x == "string" ? x : Jy(x);
    return (
      (m = m.replace(/ $/, "%20")),
      et(
        g,
        "No window.location.(origin|href) available to create URL for href: " +
          m,
      ),
      new URL(m, g)
    );
  }
  let y = {
    get action() {
      return a;
    },
    get location() {
      return e(s, i);
    },
    listen(x) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(yp, p),
        (l = x),
        () => {
          (s.removeEventListener(yp, p), (l = null));
        }
      );
    },
    createHref(x) {
      return t(s, x);
    },
    createURL: w,
    encodeLocation(x) {
      let g = w(x);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: f,
    replace: d,
    go(x) {
      return i.go(x);
    },
  };
  return y;
}
var wp;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(wp || (wp = {}));
function hk(e, t, r) {
  return (r === void 0 && (r = "/"), fk(e, t, r, !1));
}
function fk(e, t, r, n) {
  let s = typeof t == "string" ? bl(t) : t,
    o = Zy(s.pathname || "/", r);
  if (o == null) return null;
  let i = Yy(e);
  pk(i);
  let a = null;
  for (let l = 0; a == null && l < i.length; ++l) {
    let u = kk(o);
    a = Ek(i[l], u, n);
  }
  return a;
}
function Yy(e, t, r, n) {
  (t === void 0 && (t = []),
    r === void 0 && (r = []),
    n === void 0 && (n = ""));
  let s = (o, i, a) => {
    let l = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    l.relativePath.startsWith("/") &&
      (et(
        l.relativePath.startsWith(n),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(n.length)));
    let u = Es([n, l.relativePath]),
      c = r.concat(l);
    (o.children &&
      o.children.length > 0 &&
      (et(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      Yy(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: bk(u, o.index), routesMeta: c }));
  };
  return (
    e.forEach((o, i) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) s(o, i);
      else for (let l of Xy(o.path)) s(o, i, l);
    }),
    t
  );
}
function Xy(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t,
    s = r.endsWith("?"),
    o = r.replace(/\?$/, "");
  if (n.length === 0) return s ? [o, ""] : [o];
  let i = Xy(n.join("/")),
    a = [];
  return (
    a.push(...i.map((l) => (l === "" ? o : [o, l].join("/")))),
    s && a.push(...i),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function pk(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : _k(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex),
        ),
  );
}
const mk = /^:[\w-]+$/,
  gk = 3,
  yk = 2,
  vk = 1,
  wk = 10,
  xk = -2,
  xp = (e) => e === "*";
function bk(e, t) {
  let r = e.split("/"),
    n = r.length;
  return (
    r.some(xp) && (n += xk),
    t && (n += yk),
    r
      .filter((s) => !xp(s))
      .reduce((s, o) => s + (mk.test(o) ? gk : o === "" ? vk : wk), n)
  );
}
function _k(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, s) => n === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ek(e, t, r) {
  let { routesMeta: n } = e,
    s = {},
    o = "/",
    i = [];
  for (let a = 0; a < n.length; ++a) {
    let l = n[a],
      u = a === n.length - 1,
      c = o === "/" ? t : t.slice(o.length) || "/",
      p = bp(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c,
      ),
      f = l.route;
    if (
      (!p &&
        u &&
        r &&
        !n[n.length - 1].route.index &&
        (p = bp(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c,
        )),
      !p)
    )
      return null;
    (Object.assign(s, p.params),
      i.push({
        params: s,
        pathname: Es([o, p.pathname]),
        pathnameBase: Ck(Es([o, p.pathnameBase])),
        route: f,
      }),
      p.pathnameBase !== "/" && (o = Es([o, p.pathnameBase])));
  }
  return i;
}
function bp(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = Sk(e.path, e.caseSensitive, e.end),
    s = t.match(r);
  if (!s) return null;
  let o = s[0],
    i = o.replace(/(.)\/+$/, "$1"),
    a = s.slice(1);
  return {
    params: n.reduce((u, c, p) => {
      let { paramName: f, isOptional: d } = c;
      if (f === "*") {
        let y = a[p] || "";
        i = o.slice(0, o.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const w = a[p];
      return (
        d && !w ? (u[f] = void 0) : (u[f] = (w || "").replace(/%2F/g, "/")),
        u
      );
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Sk(e, t, r) {
  (t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    Qy(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let n = [],
    s =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, a, l) => (
            n.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (n.push({ paramName: "*" }),
        (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
        ? (s += "\\/*$")
        : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, t ? void 0 : "i"), n]
  );
}
function kk(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Qy(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function Zy(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
const Es = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Ck = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function Tk(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const ev = ["post", "put", "patch", "delete"];
new Set(ev);
const Pk = ["get", ...ev];
new Set(Pk);
/**
 * React Router v6.30.1
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
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Va.apply(this, arguments)
  );
}
const Rk = _.createContext(null),
  Nk = _.createContext(null),
  tv = _.createContext(null),
  _l = _.createContext(null),
  El = _.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  rv = _.createContext(null);
function ph() {
  return _.useContext(_l) != null;
}
function nv() {
  return (ph() || et(!1), _.useContext(_l).location);
}
function jk(e, t) {
  return Ak(e, t);
}
function Ak(e, t, r, n) {
  ph() || et(!1);
  let { navigator: s } = _.useContext(tv),
    { matches: o } = _.useContext(El),
    i = o[o.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let l = i ? i.pathnameBase : "/";
  i && i.route;
  let u = nv(),
    c;
  if (t) {
    var p;
    let x = typeof t == "string" ? bl(t) : t;
    (l === "/" || ((p = x.pathname) != null && p.startsWith(l)) || et(!1),
      (c = x));
  } else c = u;
  let f = c.pathname || "/",
    d = f;
  if (l !== "/") {
    let x = l.replace(/^\//, "").split("/");
    d = "/" + f.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let w = hk(e, { pathname: d }),
    y = Mk(
      w &&
        w.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, a, x.params),
            pathname: Es([
              l,
              s.encodeLocation
                ? s.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? l
                : Es([
                    l,
                    s.encodeLocation
                      ? s.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          }),
        ),
      o,
      r,
      n,
    );
  return t && y
    ? _.createElement(
        _l.Provider,
        {
          value: {
            location: Va(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c,
            ),
            navigationType: Br.Pop,
          },
        },
        y,
      )
    : y;
}
function Ok() {
  let e = Bk(),
    t = Tk(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return _.createElement(
    _.Fragment,
    null,
    _.createElement("h2", null, "Unexpected Application Error!"),
    _.createElement("h3", { style: { fontStyle: "italic" } }, t),
    r ? _.createElement("pre", { style: s }, r) : null,
    null,
  );
}
const Ik = _.createElement(Ok, null);
class Lk extends _.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location ||
      (r.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : r.error,
          location: r.location,
          revalidation: t.revalidation || r.revalidation,
        };
  }
  componentDidCatch(t, r) {
    console.error(
      "React Router caught the following error during render",
      t,
      r,
    );
  }
  render() {
    return this.state.error !== void 0
      ? _.createElement(
          El.Provider,
          { value: this.props.routeContext },
          _.createElement(rv.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function $k(e) {
  let { routeContext: t, match: r, children: n } = e,
    s = _.useContext(Rk);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = r.route.id),
    _.createElement(El.Provider, { value: t }, n)
  );
}
function Mk(e, t, r, n) {
  var s;
  if (
    (t === void 0 && (t = []),
    r === void 0 && (r = null),
    n === void 0 && (n = null),
    e == null)
  ) {
    var o;
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (
      (o = n) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !r.initialized &&
      r.matches.length > 0
    )
      e = r.matches;
    else return null;
  }
  let i = e,
    a = (s = r) == null ? void 0 : s.errors;
  if (a != null) {
    let c = i.findIndex(
      (p) => p.route.id && (a == null ? void 0 : a[p.route.id]) !== void 0,
    );
    (c >= 0 || et(!1), (i = i.slice(0, Math.min(i.length, c + 1))));
  }
  let l = !1,
    u = -1;
  if (r && n && n.v7_partialHydration)
    for (let c = 0; c < i.length; c++) {
      let p = i[c];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (u = c),
        p.route.id)
      ) {
        let { loaderData: f, errors: d } = r,
          w =
            p.route.loader &&
            f[p.route.id] === void 0 &&
            (!d || d[p.route.id] === void 0);
        if (p.route.lazy || w) {
          ((l = !0), u >= 0 ? (i = i.slice(0, u + 1)) : (i = [i[0]]));
          break;
        }
      }
    }
  return i.reduceRight((c, p, f) => {
    let d,
      w = !1,
      y = null,
      x = null;
    r &&
      ((d = a && p.route.id ? a[p.route.id] : void 0),
      (y = p.route.errorElement || Ik),
      l &&
        (u < 0 && f === 0
          ? ((w = !0), (x = null))
          : u === f &&
            ((w = !0), (x = p.route.hydrateFallbackElement || null))));
    let g = t.concat(i.slice(0, f + 1)),
      m = () => {
        let v;
        return (
          d
            ? (v = y)
            : w
              ? (v = x)
              : p.route.Component
                ? (v = _.createElement(p.route.Component, null))
                : p.route.element
                  ? (v = p.route.element)
                  : (v = c),
          _.createElement($k, {
            match: p,
            routeContext: { outlet: c, matches: g, isDataRoute: r != null },
            children: v,
          })
        );
      };
    return r && (p.route.ErrorBoundary || p.route.errorElement || f === 0)
      ? _.createElement(Lk, {
          location: r.location,
          revalidation: r.revalidation,
          component: y,
          error: d,
          children: m(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var Dc = (function (e) {
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
})(Dc || {});
function Dk(e) {
  let t = _.useContext(Nk);
  return (t || et(!1), t);
}
function Fk(e) {
  let t = _.useContext(El);
  return (t || et(!1), t);
}
function Uk(e) {
  let t = Fk(),
    r = t.matches[t.matches.length - 1];
  return (r.route.id || et(!1), r.route.id);
}
function Bk() {
  var e;
  let t = _.useContext(rv),
    r = Dk(Dc.UseRouteError),
    n = Uk(Dc.UseRouteError);
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n];
}
function zk(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function Fc(e) {
  et(!1);
}
function Vk(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: n,
    navigationType: s = Br.Pop,
    navigator: o,
    static: i = !1,
    future: a,
  } = e;
  ph() && et(!1);
  let l = t.replace(/^\/*/, "/"),
    u = _.useMemo(
      () => ({
        basename: l,
        navigator: o,
        static: i,
        future: Va({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, o, i],
    );
  typeof n == "string" && (n = bl(n));
  let {
      pathname: c = "/",
      search: p = "",
      hash: f = "",
      state: d = null,
      key: w = "default",
    } = n,
    y = _.useMemo(() => {
      let x = Zy(c, l);
      return x == null
        ? null
        : {
            location: { pathname: x, search: p, hash: f, state: d, key: w },
            navigationType: s,
          };
    }, [l, c, p, f, d, w, s]);
  return y == null
    ? null
    : _.createElement(
        tv.Provider,
        { value: u },
        _.createElement(_l.Provider, { children: r, value: y }),
      );
}
function Wk(e) {
  let { children: t, location: r } = e;
  return jk(Uc(t), r);
}
new Promise(() => {});
function Uc(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return (
    _.Children.forEach(e, (n, s) => {
      if (!_.isValidElement(n)) return;
      let o = [...t, s];
      if (n.type === _.Fragment) {
        r.push.apply(r, Uc(n.props.children, o));
        return;
      }
      (n.type !== Fc && et(!1), !n.props.index || !n.props.children || et(!1));
      let i = {
        id: n.props.id || o.join("-"),
        caseSensitive: n.props.caseSensitive,
        element: n.props.element,
        Component: n.props.Component,
        index: n.props.index,
        path: n.props.path,
        loader: n.props.loader,
        action: n.props.action,
        errorElement: n.props.errorElement,
        ErrorBoundary: n.props.ErrorBoundary,
        hasErrorBoundary:
          n.props.ErrorBoundary != null || n.props.errorElement != null,
        shouldRevalidate: n.props.shouldRevalidate,
        handle: n.props.handle,
        lazy: n.props.lazy,
      };
      (n.props.children && (i.children = Uc(n.props.children, o)), r.push(i));
    }),
    r
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
 */ const Hk = "6";
try {
  window.__reactRouterVersion = Hk;
} catch {}
const qk = "startTransition",
  _p = wm[qk];
function Kk(e) {
  let { basename: t, children: r, future: n, window: s } = e,
    o = _.useRef();
  o.current == null && (o.current = uk({ window: s, v5Compat: !0 }));
  let i = o.current,
    [a, l] = _.useState({ action: i.action, location: i.location }),
    { v7_startTransition: u } = n || {},
    c = _.useCallback(
      (p) => {
        u && _p ? _p(() => l(p)) : l(p);
      },
      [l, u],
    );
  return (
    _.useLayoutEffect(() => i.listen(c), [i, c]),
    _.useEffect(() => zk(n), [n]),
    _.createElement(Vk, {
      basename: t,
      children: r,
      location: a.location,
      navigationType: a.action,
      navigator: i,
      future: n,
    })
  );
}
var Ep;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(Ep || (Ep = {}));
var Sp;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(Sp || (Sp = {}));
const Gk = () =>
    h.jsxs("div", {
      className: "fixed inset-0 pointer-events-none",
      style: { zIndex: 1 },
      "aria-hidden": "true",
      children: [
        h.jsx("div", {
          className: "absolute top-0 left-0 w-full h-[3px]",
          style: {
            background:
              "linear-gradient(90deg, #FE2B54, #FFC107 30%, #4CAF50 60%, #9C27B0 85%, #FE2B54)",
          },
        }),
        h.jsx("div", {
          className: "absolute bottom-0 left-0 w-full h-[3px]",
          style: {
            background:
              "linear-gradient(90deg, #9C27B0, #FE2B54 30%, #FFC107 60%, #4CAF50 85%, #9C27B0)",
          },
        }),
        h.jsx("div", {
          className: "absolute top-0 left-0 w-[3px] h-full",
          style: {
            background:
              "linear-gradient(180deg, #FE2B54 0%, #FFC107 25%, #4CAF50 50%, #9C27B0 75%, #FE2B54 100%)",
            opacity: 0.3,
          },
        }),
        h.jsx("div", {
          className: "absolute top-0 right-0 w-[3px] h-full",
          style: {
            background:
              "linear-gradient(180deg, #FFC107 0%, #9C27B0 25%, #FE2B54 50%, #4CAF50 75%, #FFC107 100%)",
            opacity: 0.3,
          },
        }),
        h.jsx("div", {
          className: "absolute -top-20 -left-20 w-64 h-64 rounded-full",
          style: {
            background:
              "radial-gradient(circle, rgba(156,39,176,0.08), transparent 65%)",
          },
        }),
        h.jsx("div", {
          className: "absolute -top-16 -right-16 w-56 h-56 rounded-full",
          style: {
            background:
              "radial-gradient(circle, rgba(255,193,7,0.08), transparent 65%)",
          },
        }),
        h.jsx("div", {
          className: "absolute -bottom-20 -left-16 w-56 h-56 rounded-full",
          style: {
            background:
              "radial-gradient(circle, rgba(76,175,80,0.06), transparent 65%)",
          },
        }),
        h.jsx("div", {
          className: "absolute -bottom-18 -right-18 w-60 h-60 rounded-full",
          style: {
            background:
              "radial-gradient(circle, rgba(254,43,84,0.07), transparent 65%)",
          },
        }),
      ],
    }),
  sv = "/assets/mascara-carnaval.png",
  ov = "/assets/p-saldo-Cbw24AHL.svg",
  iv = "/assets/pix-logo.svg",
  Qk = ({ balance: e, onWithdraw: t, isPopup: r = !1, disabled: n = !1 }) => {
    const [s, o] = _.useState(0),
      i = _.useRef(null),
      a = _.useRef(!1),
      l = (c) =>
        c
          .toFixed(2)
          .replace(".", ",")
          .replace(/\B(?=(\d{3})+(?!\d))/g, "."),
      u = (c) => 1 - Math.pow(1 - c, 3);
    return (
      _.useEffect(() => {
        if (a.current) return;
        a.current = !0;
        const c = 2e3;
        let p = null;
        const f = (d) => {
          p || (p = d);
          const w = d - p,
            y = Math.min(w / c, 1),
            x = e * u(y);
          (o(x), y < 1 && (i.current = requestAnimationFrame(f)));
        };
        return (
          (i.current = requestAnimationFrame(f)),
          () => {
            i.current && cancelAnimationFrame(i.current);
          }
        );
      }, [e]),
      h.jsx("div", {
        className: `p-5 rounded-lg bg-white/95 shadow-sm w-full ${r ? "" : "max-w-none"}`,
        children: h.jsxs("div", {
          className: "flex items-end justify-between gap-4",
          children: [
            h.jsxs("div", {
              className: "flex flex-col gap-1.5 min-w-0",
              children: [
                h.jsxs("div", {
                  className:
                    "flex items-center gap-1 text-gray-600 text-sm font-medium",
                  children: [
                    h.jsx("span", { children: "Seu saldo" }),
                    h.jsx("img", { src: ov, alt: "", className: "w-3 h-3" }),
                  ],
                }),
                h.jsx("div", {
                  className: "flex items-baseline gap-1.5",
                  children: h.jsxs("span", {
                    className: "text-black font-bold text-[22px]",
                    children: ["R$ ", l(s)],
                  }),
                }),
              ],
            }),
            h.jsx("div", {
              className: "flex",
              children: h.jsxs("button", {
                type: "button",
                onClick: t,
                disabled: n,
                className:
                  "w-[81px] h-[27px] inline-flex justify-center items-center gap-2.5 rounded-full bg-primary relative disabled:opacity-50 disabled:pointer-events-none transition-all hover:brightness-110",
                children: [
                  h.jsx("span", {
                    className: "text-white text-sm font-medium",
                    children: "Sacar",
                  }),
                  h.jsx("span", {
                    className: "absolute -top-2 -right-[3px]",
                    children: h.jsx("img", {
                      src: iv,
                      alt: "",
                      className:
                        "w-[31px] h-[11px] p-0.5 px-1 rounded-md rounded-bl-none bg-[#edf2f1]",
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      })
    );
  },
  Jk = "/assets/parabens-img.png",
  Yk = ({ balance: e }) => {
    const t = (r) =>
      r
        .toFixed(2)
        .replace(".", ",")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return h.jsxs("div", {
      className: "flex items-start justify-between",
      children: [
        h.jsxs("div", {
          className: "flex flex-col",
          children: [
            h.jsx("span", {
              className: "text-foreground text-[22px] font-bold block",
              children: "Parabéns!",
            }),
            h.jsxs("span", {
              className: "text-foreground text-[22px] font-bold",
              children: [
                "Você concluiu ",
                h.jsx("span", {
                  className: "whitespace-nowrap",
                  children: "todas as tarefas",
                }),
              ],
            }),
            h.jsxs("span", {
              className: "text-primary text-[22px] font-bold block mt-1",
              children: ["R$ ", t(e)],
            }),
          ],
        }),
        h.jsx("img", {
          src: Jk,
          alt: "",
          className: "w-28 h-auto -mt-5 flex-shrink-0",
        }),
      ],
    });
  },
  Xk = "/assets/p-dia-lT2QY6l_.svg",
  Zk =
    "data:image/svg+xml,%3csvg%20width='19'%20height='19'%20viewBox='0%200%2019%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.17505%2016.9615C5.91036%2016.9616%205.64825%2016.9095%205.40372%2016.8081C5.1592%2016.7068%204.93707%2016.5582%204.75005%2016.3709L0.347595%2011.9708L2.02751%2010.2917L6.17505%2014.4392L16.9726%203.64168L18.6525%205.3208L7.60005%2016.3709C7.41304%2016.5582%207.19091%2016.7068%206.94639%2016.8081C6.70186%2016.9095%206.43975%2016.9616%206.17505%2016.9615V16.9615Z'%20fill='%23FE2B54'/%3e%3c/svg%3e",
  eC = [
    { value: 50, completed: !0 },
    { value: 100, completed: !0 },
    { value: 150, completed: !0 },
    { value: 200, completed: !0 },
    { value: 250, completed: !0 },
    { value: 300, completed: !0 },
  ],
  tC = ({ days: e = eC }) =>
    h.jsx("div", {
      className:
        "flex w-full justify-between items-center mt-5 text-center relative",
      children: e.map((t, r) =>
        h.jsxs(
          "div",
          {
            className: "w-[45px] flex flex-col items-start gap-2",
            children: [
              h.jsxs("div", {
                className:
                  "w-[45px] h-[45px] relative bg-[#f8f9fb] rounded-lg overflow-hidden",
                children: [
                  h.jsxs("div", {
                    className:
                      "absolute left-0 top-1.5 w-[45px] flex flex-col items-center gap-1",
                    children: [
                      h.jsx("div", {
                        className: "w-4 h-4",
                        children: h.jsx("img", {
                          src: Xk,
                          alt: "P",
                          className: "w-full h-full",
                        }),
                      }),
                      h.jsx("div", {
                        className:
                          "text-black text-[11px] font-semibold text-center w-full",
                        children: t.value,
                      }),
                    ],
                  }),
                  t.completed &&
                    h.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-br from-[rgba(255,240,243,0.95)] to-[rgba(255,220,230,0.9)] rounded-lg flex items-center justify-center",
                      children: h.jsx("img", {
                        src: Zk,
                        alt: "✓",
                        className: "w-[19px] h-[19px]",
                      }),
                    }),
                ],
              }),
              h.jsxs("div", {
                className:
                  "text-[#a4a4a4] text-[10px] font-semibold text-center w-full",
                children: ["Dia ", String(r + 1).padStart(2, "0")],
              }),
            ],
          },
          r,
        ),
      ),
    }),
  Wi = ({
    title: e,
    highlight: t,
    subtitle: r,
    completed: n = !0,
    showDivider: s = !0,
  }) =>
    h.jsxs(h.Fragment, {
      children: [
        s &&
          h.jsx("div", {
            className:
              "w-full h-px border-b border-dashed border-black/10 my-5",
          }),
        h.jsxs("div", {
          className: "pt-5 flex flex-wrap items-center justify-between gap-2",
          children: [
            h.jsxs("span", {
              className: "flex-1 min-w-0 text-black text-sm font-medium",
              children: [
                e,
                t &&
                  h.jsx("span", {
                    className: "text-primary block",
                    children: t,
                  }),
                r &&
                  h.jsx("span", {
                    className: "text-[#ce425f] text-xs block mt-1.5",
                    children: r,
                  }),
              ],
            }),
            n &&
              h.jsx("button", {
                type: "button",
                className:
                  "w-[89px] h-[35px] inline-flex rounded-full bg-[#f1f1f3] justify-center items-center pointer-events-none",
                children: h.jsx("span", {
                  className: "text-[#d4d4d4] text-xs font-medium",
                  children: "Concluído",
                }),
              }),
          ],
        }),
      ],
    }),
  rC = "/assets/p-assista.svg",
  nC = ({ steps: e, label: t, labelPosition: r = "left" }) =>
    h.jsxs("div", {
      className: "mt-3",
      children: [
        t &&
          h.jsxs("div", {
            className: `relative inline-flex items-center gap-1 bg-[#f1f1f1] rounded-md px-2 py-1 mb-2 ${r === "right" ? "float-right" : ""}`,
            children: [
              h.jsx("span", {
                className: "text-[#666] text-xs font-medium",
                children: t,
              }),
              h.jsx("svg", {
                className:
                  "absolute -bottom-[5px] left-1/2 transform -translate-x-1/2",
                width: "7",
                height: "6",
                viewBox: "0 0 7 6",
                fill: "none",
                children: h.jsx("path", {
                  d: "M4.03259 5.25C3.64769 5.91667 2.68544 5.91667 2.30054 5.25L0.135475 1.5C-0.249425 0.833333 0.231701 6.49976e-07 1.0015 5.82678e-07L5.33163 2.04126e-07C6.10143 1.36828e-07 6.58255 0.833334 6.19765 1.5L4.03259 5.25Z",
                  fill: "#F1F1F1",
                }),
              }),
            ],
          }),
        h.jsx("div", {
          className: "flex justify-between items-center gap-2 py-2",
          children: e.map((n, s) =>
            h.jsxs(
              "div",
              {
                className: `flex flex-col items-center gap-1 ${n.hidden ? "opacity-50" : ""}`,
                children: [
                  h.jsx("div", {
                    className: "w-[22px] h-[22px]",
                    children: h.jsx("img", {
                      src: rC,
                      alt: "P",
                      className: "w-full h-full",
                    }),
                  }),
                  h.jsx("span", {
                    className:
                      "text-[10px] text-gray-600 font-medium whitespace-nowrap",
                    children: n.points,
                  }),
                ],
              },
              s,
            ),
          ),
        }),
      ],
    }),
  sC = ({ balance: e, onContinue: t }) => {
    const [r, n] = _.useState(1020),
      [s, o] = _.useState(0),
      [i, a] = _.useState(!1),
      l = _.useRef();
    (_.useEffect(() => {
      const d = window.scrollY;
      return (
        (document.body.style.overflow = "hidden"),
        (document.body.style.position = "fixed"),
        (document.body.style.width = "100%"),
        (document.body.style.top = `-${d}px`),
        () => {
          ((document.body.style.overflow = ""),
            (document.body.style.position = ""),
            (document.body.style.width = ""),
            (document.body.style.top = ""),
            window.scrollTo(0, d),
            (document.documentElement.style.overflow = ""),
            (document.body.style.overflowY = ""));
        }
      );
    }, []),
      _.useEffect(() => {
        const w = performance.now(),
          y = (x) => {
            const g = x - w,
              m = Math.min(g / 2e3, 1),
              v = 1 - Math.pow(1 - m, 3);
            (o(v * e), m < 1 && (l.current = requestAnimationFrame(y)));
          };
        return (
          (l.current = requestAnimationFrame(y)),
          () => {
            l.current && cancelAnimationFrame(l.current);
          }
        );
      }, [e]),
      _.useEffect(() => {
        const d = setInterval(() => {
          n((w) => (w > 0 ? w - 1 : 0));
        }, 1e3);
        return () => clearInterval(d);
      }, []));
    const u = (d) =>
        d
          .toFixed(2)
          .replace(".", ",")
          .replace(/\B(?=(\d{3})+(?!\d))/g, "."),
      c = (d) => {
        const w = Math.floor(d / 3600),
          y = Math.floor((d % 3600) / 60),
          x = d % 60;
        return {
          hours: w.toString().padStart(2, "0"),
          minutes: y.toString().padStart(2, "0"),
          seconds: x.toString().padStart(2, "0"),
        };
      },
      p = () => {
        i ||
          (a(!0),
          setTimeout(() => {
            t();
          }, 320));
      },
      f = c(r);
    return h.jsxs("div", {
      className: "fixed inset-0 z-[9999]",
      style: { minHeight: "100vh", height: "100dvh" },
      children: [
        h.jsx("div", {
          className: `absolute inset-0 bg-black/60 transition-opacity duration-300 ease-out ${i ? "opacity-0" : "opacity-100"}`,
        }),
        h.jsx("div", {
          className:
            "absolute left-1/2 top-1/2 w-[88%] max-w-[320px] -translate-x-1/2 -translate-y-1/2",
          children: h.jsx("div", {
            className: `transform-gpu transition-all duration-300 ease-out ${i ? "opacity-0 translate-y-2 scale-[0.98]" : "opacity-100 translate-y-0 scale-100"}`,
            children: h.jsxs("div", {
              className: "flex flex-col items-center",
              children: [
                h.jsx("div", {
                  className:
                    "w-[180px] h-[180px] -mb-14 z-10 flex items-center justify-center",
                  style: { animation: "float 3s ease-in-out infinite" },
                  children: h.jsx("img", {
                    src: sv,
                    alt: "Carnaval de Prêmios",
                    className: "w-full h-full object-contain",
                  }),
                }),
                h.jsxs("div", {
                  className:
                    "bg-[#FFFDF5] rounded-2xl p-4 pt-10 w-full shadow-2xl animate-slide-up",
                  children: [
                    h.jsxs("div", {
                      className: "text-center mb-2",
                      children: [
                        h.jsx("h2", {
                          className: "text-lg font-bold text-foreground mb-1",
                          children: "Carnaval de Prêmios",
                        }),
                        h.jsx("p", {
                          className:
                            "text-muted-foreground text-xs leading-relaxed px-2",
                          children:
                            "Parabéns! Como parte de uma campanha de recompensas exclusiva.",
                        }),
                      ],
                    }),
                    h.jsx("div", {
                      className: "text-center mb-3",
                      children: h.jsxs("span", {
                        className:
                          "text-[28px] font-bold text-foreground tabular-nums",
                        children: ["R$ ", u(s)],
                      }),
                    }),
                    h.jsxs("div", {
                      className: "flex items-center justify-center gap-1 mb-3",
                      children: [
                        h.jsx("span", {
                          className: "text-muted-foreground text-xs",
                          children: "Expira em",
                        }),
                        h.jsxs("div", {
                          className: "flex items-center gap-0.5 ml-1",
                          children: [
                            h.jsx("span", {
                              className:
                                "bg-white border border-border rounded px-1.5 py-0.5 text-xs font-mono font-semibold text-foreground",
                              children: f.hours,
                            }),
                            h.jsx("span", {
                              className: "text-muted-foreground text-xs",
                              children: ":",
                            }),
                            h.jsx("span", {
                              className:
                                "bg-white border border-border rounded px-1.5 py-0.5 text-xs font-mono font-semibold text-foreground",
                              children: f.minutes,
                            }),
                            h.jsx("span", {
                              className: "text-muted-foreground text-xs",
                              children: ":",
                            }),
                            h.jsx("span", {
                              className:
                                "bg-white border border-border rounded px-1.5 py-0.5 text-xs font-mono font-semibold text-foreground",
                              children: f.seconds,
                            }),
                          ],
                        }),
                      ],
                    }),
                    h.jsx("div", {
                      className: "border-t border-dashed border-border mb-3",
                    }),
                    h.jsx("button", {
                      onClick: p,
                      disabled: i,
                      className:
                        "w-full py-3 bg-primary text-primary-foreground font-bold rounded-full shadow-lg shadow-primary/30 hover:brightness-110 active:scale-[0.98] transition-all duration-200",
                      children: "Obrigado",
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  Xo =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2028.1.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20800%20800'%20style='enable-background:new%200%200%20800%20800;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%2332BCAD;}%20%3c/style%3e%3cpath%20class='st0'%20d='M595.8,585.5c-27.3,0.1-53.4-10.8-72.7-30.1l-105-105c-7.7-7.3-19.8-7.3-27.6,0L285.2,555.8%20c-19.2,19.3-45.4,30.2-72.7,30.1h-20.7l133,133c41.5,41.5,108.9,41.5,150.3,0l133.3-133.4L595.8,585.5L595.8,585.5z%20M212.5,214.1%20c27.5,0,53.3,10.7,72.7,30.1l105.4,105.4c7.6,7.6,20,7.6,27.6,0c0,0,0,0,0,0l105-105c19.2-19.3,45.4-30.2,72.7-30.1h12.7L475.2,81.2%20c-41.5-41.5-108.8-41.5-150.4,0l-133,133L212.5,214.1L212.5,214.1z'/%3e%3cpath%20class='st0'%20d='M718.8,324.8l-80.6-80.6c-1.8,0.7-3.7,1.1-5.7,1.1h-36.6c-19,0-37.5,7.7-50.9,21.1l-105,105%20c-19.6,19.7-51.4,19.8-71.1,0.2c-0.1-0.1-0.1-0.1-0.2-0.2L263.4,266c-13.5-13.5-31.8-21.1-50.9-21.1h-45c-1.9,0-3.7-0.4-5.4-1%20l-80.9,80.9c-41.5,41.5-41.5,108.9,0,150.4l80.9,80.9c1.7-0.7,3.5-1.1,5.4-1.1h45c19,0,37.5-7.7,50.9-21.1l105.4-105.4%20c20-19,51.3-19,71.3,0l105,105c13.4,13.4,31.9,21,50.9,21h36.6c2,0,4,0.5,5.7,1.2l80.6-80.6C760.3,433.7,760.3,366.2,718.8,324.8%20L718.8,324.8z'/%3e%3c/svg%3e",
  oC = ({ balance: e, onContinue: t, onBack: r }) => {
    const [n, s] = _.useState(e),
      [o, i] = _.useState(u(e)),
      a = [
        { value: 60, label: "R$ 60" },
        { value: 100, label: "R$ 100" },
        { value: 250, label: "R$ 250" },
      ],
      l = [
        { value: 1e3, label: "R$ 1.000", isHot: !0 },
        { value: e, label: `R$ ${u(e)}`, isHot: !0, isMax: !0 },
      ];
    function u(w) {
      return w
        .toFixed(2)
        .replace(".", ",")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    const c = (w) => {
        (s(w), i(u(w)));
      },
      p = (w) => {
        const y = w.target.value.replace(/\D/g, "");
        if (y === "") {
          (i(""), s(0));
          return;
        }
        const x = parseInt(y) / 100,
          g = Math.min(x, e);
        (s(g), i(u(g)));
      },
      f = () => {
        n > 0 && n <= e && t(n);
      },
      d = n > 0 && n <= e;
    return h.jsxs("div", {
      className:
        "min-h-screen min-h-[100dvh] bg-background animate-page-in relative",
      children: [
        h.jsx("div", {
          className: "sticky top-0 z-10 bg-card border-b border-border",
          children: h.jsxs("div", {
            className:
              "flex items-center justify-between px-4 h-12 max-w-md mx-auto",
            children: [
              h.jsx("button", {
                onClick: r,
                className:
                  "w-8 h-8 flex items-center justify-center -ml-2 active:scale-95 transition-transform",
                children: h.jsx(Z0, { size: 24, className: "text-foreground" }),
              }),
              h.jsx("span", {
                className: "text-base font-semibold text-foreground",
                children: "Sacar",
              }),
              h.jsx("div", { className: "w-8" }),
            ],
          }),
        }),
        h.jsxs("div", {
          className:
            "px-4 pt-6 pb-4 max-w-md mx-auto text-center animate-fade-in-up",
          children: [
            h.jsx("p", {
              className: "text-muted-foreground text-sm mb-1",
              children: "Saldo disponível",
            }),
            h.jsxs("p", {
              className:
                "text-3xl sm:text-4xl font-bold text-foreground tracking-tight",
              children: ["R$ ", u(e)],
            }),
          ],
        }),
        h.jsxs("div", {
          className: "px-4 pb-4 max-w-md mx-auto",
          children: [
            h.jsx("label", {
              className:
                "text-muted-foreground text-xs font-medium mb-3 block uppercase tracking-wide text-center animate-fade-in-up",
              style: { animationDelay: "50ms" },
              children: "Escolha o valor do saque",
            }),
            h.jsx("div", {
              className: "grid grid-cols-3 gap-2 animate-fade-in-up",
              style: { animationDelay: "100ms" },
              children: a.map(({ value: w, label: y }) => {
                const x = n === w;
                return h.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => c(w),
                    className: `py-3 px-2 rounded-xl text-sm font-semibold transition-all duration-200 ${x ? "bg-primary text-primary-foreground shadow-lg scale-[1.02]" : "bg-card border border-border text-foreground hover:border-primary/50 active:scale-95"}`,
                    children: y,
                  },
                  w,
                );
              }),
            }),
            h.jsx("div", {
              className: "grid grid-cols-2 gap-3 mt-3 animate-fade-in-up",
              style: { animationDelay: "150ms" },
              children: l.map(({ value: w, label: y, isHot: x }) => {
                const g = n === w;
                return h.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => c(w),
                    className: `relative py-4 px-3 rounded-xl text-base font-bold transition-all duration-200 ${g ? "bg-primary text-primary-foreground shadow-lg scale-[1.02]" : "bg-card border-2 border-border text-foreground hover:border-primary/50 active:scale-95"}`,
                    children: [
                      x &&
                        h.jsxs("div", {
                          className:
                            "absolute -top-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full animate-pulse-hot shadow-lg",
                          children: [
                            h.jsx(Rb, { size: 10, className: "animate-flame" }),
                            h.jsx("span", { children: "QUENTE" }),
                          ],
                        }),
                      y,
                    ],
                  },
                  w,
                );
              }),
            }),
            h.jsxs("div", {
              className: "mt-4 animate-fade-in-up",
              style: { animationDelay: "200ms" },
              children: [
                h.jsxs("div", {
                  className:
                    "flex items-center bg-card border-2 border-border rounded-xl px-4 py-3 focus-within:border-primary transition-colors",
                  children: [
                    h.jsx("span", {
                      className: "text-foreground font-bold text-lg mr-2",
                      children: "R$",
                    }),
                    h.jsx("input", {
                      type: "text",
                      inputMode: "numeric",
                      value: o,
                      onChange: p,
                      placeholder: "0,00",
                      className:
                        "flex-1 bg-transparent text-foreground text-lg font-semibold placeholder:text-muted-foreground/50 focus:outline-none",
                    }),
                    h.jsx("div", {
                      className:
                        "w-9 h-9 bg-[#32BCAD] rounded-lg flex items-center justify-center flex-shrink-0 ml-2",
                      children: h.jsx("img", {
                        src: Xo,
                        alt: "PIX",
                        className: "w-5 h-5 brightness-0 invert",
                      }),
                    }),
                  ],
                }),
                h.jsxs("p", {
                  className: "text-xs text-muted-foreground mt-2 text-center",
                  children: ["Limite máximo: R$ ", u(e)],
                }),
              ],
            }),
            n > 0 &&
              h.jsxs("div", {
                className:
                  "mt-4 p-3 bg-primary/10 rounded-xl border border-primary/30 text-center animate-fade-in-up",
                style: { animationDelay: "250ms" },
                children: [
                  h.jsx("p", {
                    className: "text-xs text-muted-foreground mb-0.5",
                    children: "Você vai sacar",
                  }),
                  h.jsxs("p", {
                    className: "text-2xl font-bold text-primary",
                    children: ["R$ ", u(n)],
                  }),
                ],
              }),
          ],
        }),
        h.jsxs("div", {
          className: "px-4 pb-8 max-w-md mx-auto mt-4",
          children: [
            h.jsx("button", {
              onClick: f,
              disabled: !d,
              className: `w-full py-4 font-bold rounded-xl transition-all duration-200 shadow-lg animate-fade-in-up ${d ? "bg-primary text-primary-foreground active:scale-[0.98] shadow-primary/30" : "bg-muted text-muted-foreground cursor-not-allowed"}`,
              style: { animationDelay: "250ms" },
              children: "Continuar para PIX",
            }),
            h.jsxs("div", {
              className:
                "flex items-center justify-center gap-2 pt-4 animate-fade-in-up",
              style: { animationDelay: "300ms" },
              children: [
                h.jsx(To, { size: 12, className: "text-muted-foreground" }),
                h.jsx("p", {
                  className: "text-[11px] text-muted-foreground",
                  children: "Conexão segura e criptografada",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  iC = ({ onSubmit: e, valorSaque: t, onBack: r }) => {
    const [n, s] = _.useState(""),
      [o, i] = _.useState("CPF"),
      [a, l] = _.useState(""),
      [u, c] = _.useState({}),
      p = [
        { type: "CPF", icon: h.jsx(Nb, { size: 16 }), label: "CPF" },
        { type: "Celular", icon: h.jsx(ty, { size: 16 }), label: "Celular" },
        { type: "Email", icon: h.jsx(Ob, { size: 16 }), label: "E-mail" },
        {
          type: "Aleatória",
          icon: h.jsx(Ab, { size: 16 }),
          label: "Aleatória",
        },
      ],
      f = (b) =>
        b
          .toFixed(2)
          .replace(".", ",")
          .replace(/\B(?=(\d{3})+(?!\d))/g, "."),
      d = (b) => {
        const E = b.replace(/\D/g, "");
        return E.length <= 3
          ? E
          : E.length <= 6
            ? `${E.slice(0, 3)}.${E.slice(3)}`
            : E.length <= 9
              ? `${E.slice(0, 3)}.${E.slice(3, 6)}.${E.slice(6)}`
              : `${E.slice(0, 3)}.${E.slice(3, 6)}.${E.slice(6, 9)}-${E.slice(9, 11)}`;
      },
      w = (b) => {
        const E = b.replace(/\D/g, "");
        return E.length <= 2
          ? E
          : E.length <= 7
            ? `(${E.slice(0, 2)}) ${E.slice(2)}`
            : `(${E.slice(0, 2)}) ${E.slice(2, 7)}-${E.slice(7, 11)}`;
      },
      y = (b) => {
        l(o === "CPF" ? d(b) : o === "Celular" ? w(b) : b);
      },
      x = () => {
        const b = {},
          E = n.trim();
        if (
          (E
            ? E.length < 2
              ? (b.nome = "Nome deve ter pelo menos 2 caracteres")
              : E.length > 100
                ? (b.nome = "Nome muito longo")
                : E.replace(/[^\p{L}]/gu, "").length < 2 &&
                  (b.nome = "Digite um nome válido")
            : (b.nome = "Nome é obrigatório"),
          !a.trim())
        )
          b.chavePix = "Chave PIX é obrigatória";
        else if (o === "CPF")
          a.replace(/\D/g, "").length !== 11 &&
            (b.chavePix = "CPF deve ter 11 dígitos");
        else if (o === "Celular") {
          const S = a.replace(/\D/g, "");
          (S.length < 10 || S.length > 11) && (b.chavePix = "Celular inválido");
        } else
          o === "Email" &&
            (!a.includes("@") || !a.includes(".")) &&
            (b.chavePix = "Email inválido");
        return (c(b), Object.keys(b).length === 0);
      },
      g = (b) => {
        (b.preventDefault(),
          x() && e({ nome: n.trim(), tipoChave: o, chavePix: a.trim() }));
      },
      m = () => {
        switch (o) {
          case "CPF":
            return "000.000.000-00";
          case "Celular":
            return "(00) 00000-0000";
          case "Email":
            return "seu@email.com";
          case "Aleatória":
            return "Cole sua chave aqui";
          default:
            return "";
        }
      },
      v = () => {
        switch (o) {
          case "Email":
            return "email";
          case "CPF":
          case "Celular":
            return "tel";
          default:
            return "text";
        }
      };
    return h.jsxs("div", {
      className: "min-h-screen min-h-[100dvh] bg-background animate-page-in",
      children: [
        h.jsx("div", {
          className: "sticky top-0 z-10 bg-card border-b border-border",
          children: h.jsxs("div", {
            className:
              "flex items-center justify-between px-4 h-12 max-w-md mx-auto",
            children: [
              h.jsx("button", {
                onClick: r,
                className:
                  "w-8 h-8 flex items-center justify-center -ml-2 active:scale-95 transition-transform",
                children: h.jsx(Z0, { size: 24, className: "text-foreground" }),
              }),
              h.jsx("span", {
                className: "text-base font-semibold text-foreground",
                children: "Dados PIX",
              }),
              h.jsx("div", { className: "w-8" }),
            ],
          }),
        }),
        h.jsxs("div", {
          className:
            "px-4 pt-6 pb-4 max-w-md mx-auto text-center animate-fade-in-up",
          children: [
            h.jsx("p", {
              className: "text-muted-foreground text-sm mb-1",
              children: "Valor do saque",
            }),
            h.jsxs("p", {
              className:
                "text-3xl sm:text-4xl font-bold text-primary tracking-tight",
              children: ["R$ ", f(t)],
            }),
          ],
        }),
        h.jsx("div", { className: "h-2 bg-muted" }),
        h.jsx("div", {
          className: "px-4 pt-5 pb-8 max-w-md mx-auto",
          children: h.jsxs("form", {
            onSubmit: g,
            className: "space-y-5",
            children: [
              h.jsxs("div", {
                className: "flex items-center gap-3 mb-4 animate-fade-in-up",
                style: { animationDelay: "50ms" },
                children: [
                  h.jsx("div", {
                    className:
                      "w-10 h-10 sm:w-11 sm:h-11 bg-[#32BCAD] rounded-xl flex items-center justify-center flex-shrink-0",
                    children: h.jsx("img", {
                      src: Xo,
                      alt: "PIX",
                      className: "w-6 h-6 sm:w-7 sm:h-7 brightness-0 invert",
                    }),
                  }),
                  h.jsxs("div", {
                    className: "min-w-0",
                    children: [
                      h.jsx("p", {
                        className:
                          "font-semibold text-foreground text-sm sm:text-base",
                        children: "Transferência PIX",
                      }),
                      h.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: "Receba em segundos",
                      }),
                    ],
                  }),
                ],
              }),
              h.jsxs("div", {
                className: "animate-fade-in-up",
                style: { animationDelay: "100ms" },
                children: [
                  h.jsx("label", {
                    className:
                      "text-muted-foreground text-xs font-medium mb-2 block uppercase tracking-wide",
                    children: "Nome Completo",
                  }),
                  h.jsx("input", {
                    type: "text",
                    value: n,
                    onChange: (b) => s(b.target.value),
                    placeholder: "Digite seu nome",
                    className:
                      "w-full bg-transparent border-b-2 border-border py-3 text-foreground text-base placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors",
                  }),
                  u.nome &&
                    h.jsx("p", {
                      className: "text-destructive text-xs mt-1.5",
                      children: u.nome,
                    }),
                ],
              }),
              h.jsxs("div", {
                className: "animate-fade-in-up",
                style: { animationDelay: "150ms" },
                children: [
                  h.jsx("label", {
                    className:
                      "text-muted-foreground text-xs font-medium mb-3 block uppercase tracking-wide",
                    children: "Tipo de Chave PIX",
                  }),
                  h.jsx("div", {
                    className: "grid grid-cols-4 gap-2",
                    children: p.map(({ type: b, icon: E, label: S }) =>
                      h.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            (i(b), l(""));
                          },
                          className: `flex flex-col items-center justify-center py-2.5 sm:py-3 rounded-xl transition-all duration-200 ${o === b ? "bg-primary text-primary-foreground shadow-md scale-[1.02]" : "bg-muted text-muted-foreground hover:bg-muted/80 active:scale-95"}`,
                          children: [
                            E,
                            h.jsx("span", {
                              className:
                                "text-[10px] sm:text-xs mt-1 font-medium",
                              children: S,
                            }),
                          ],
                        },
                        b,
                      ),
                    ),
                  }),
                ],
              }),
              h.jsxs("div", {
                className: "animate-fade-in-up",
                style: { animationDelay: "200ms" },
                children: [
                  h.jsx("label", {
                    className:
                      "text-muted-foreground text-xs font-medium mb-2 block uppercase tracking-wide",
                    children: "Chave PIX",
                  }),
                  h.jsx("input", {
                    type: v(),
                    value: a,
                    onChange: (b) => y(b.target.value),
                    placeholder: m(),
                    className:
                      "w-full bg-transparent border-b-2 border-border py-3 text-foreground text-base placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors",
                  }),
                  u.chavePix &&
                    h.jsx("p", {
                      className: "text-destructive text-xs mt-1.5",
                      children: u.chavePix,
                    }),
                ],
              }),
              h.jsxs("button", {
                type: "submit",
                className:
                  "w-full py-3.5 sm:py-4 bg-primary text-primary-foreground font-bold rounded-xl mt-4 active:scale-[0.98] transition-transform shadow-lg shadow-primary/20 animate-fade-in-up",
                style: { animationDelay: "250ms" },
                children: ["Sacar R$ ", f(t)],
              }),
              h.jsxs("div", {
                className:
                  "flex items-center justify-center gap-2 pt-2 animate-fade-in-up",
                style: { animationDelay: "300ms" },
                children: [
                  h.jsx(To, { size: 12, className: "text-muted-foreground" }),
                  h.jsx("p", {
                    className: "text-[11px] text-muted-foreground",
                    children: "Conexão segura e criptografada",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  Hi = [
    "Conectando com servidor seguro...",
    "Verificando dados bancários...",
    "Validando chave PIX...",
    "Processando solicitação...",
    "Finalizando...",
  ],
  aC = ({ onComplete: e }) => {
    const t = _.useRef(0),
      r = _.useRef(null),
      n = _.useRef(null),
      s = _.useRef(null),
      o = _.useRef(),
      i = 2 * Math.PI * 45;
    return (
      _.useEffect(() => {
        let l = null;
        const u = [
            { time: 0, progress: 0 },
            { time: 0.08, progress: 15 },
            { time: 0.2, progress: 35 },
            { time: 0.45, progress: 55 },
            { time: 0.6, progress: 70 },
            { time: 0.75, progress: 85 },
            { time: 0.88, progress: 95 },
            { time: 1, progress: 100 },
          ],
          c = (f) => {
            let d = u[0],
              w = u[1];
            for (let v = 1; v < u.length; v++)
              if (f <= u[v].time) {
                ((d = u[v - 1]), (w = u[v]));
                break;
              }
            const y = w.time - d.time,
              x = w.progress - d.progress,
              g = (f - d.time) / y,
              m = g < 0.5 ? 2 * g * g : 1 - Math.pow(-2 * g + 2, 2) / 2;
            return d.progress + x * m;
          },
          p = (f) => {
            l === null && (l = f);
            const d = f - l,
              w = Math.min(d / 4500, 1),
              y = c(w),
              x = Math.sin(d * 0.02) * 0.3,
              g = Math.min(100, Math.max(0, y + x));
            if (((t.current = g), r.current)) {
              const v = i - (g / 100) * i;
              r.current.style.strokeDashoffset = `${v}`;
            }
            n.current && (n.current.textContent = `${Math.round(g)}%`);
            const m = Math.min(
              Math.floor((g / 100) * Hi.length),
              Hi.length - 1,
            );
            (s.current && (s.current.textContent = Hi[m]),
              w < 1
                ? (o.current = requestAnimationFrame(p))
                : (r.current && (r.current.style.strokeDashoffset = "0"),
                  n.current && (n.current.textContent = "100%"),
                  setTimeout(() => (e == null ? void 0 : e()), 300)));
          };
        return (
          (o.current = requestAnimationFrame(p)),
          () => {
            o.current && cancelAnimationFrame(o.current);
          }
        );
      }, [e, i]),
      h.jsxs("div", {
        className:
          "min-h-screen min-h-[100dvh] bg-background animate-page-in relative",
        children: [
          h.jsx("div", {
            className: "sticky top-0 z-10 bg-card border-b border-border",
            children: h.jsxs("div", {
              className:
                "flex items-center justify-between px-4 h-12 max-w-md mx-auto",
              children: [
                h.jsx("div", { className: "w-8" }),
                h.jsx("span", {
                  className: "text-base font-semibold text-foreground",
                  children: "Processando",
                }),
                h.jsx("div", { className: "w-8" }),
              ],
            }),
          }),
          h.jsxs("div", {
            className:
              "flex flex-col items-center justify-center px-4 pt-16 pb-8 max-w-md mx-auto",
            children: [
              h.jsxs("div", {
                className:
                  "relative w-32 h-32 sm:w-40 sm:h-40 mb-8 animate-fade-in-up",
                children: [
                  h.jsxs("svg", {
                    className: "w-full h-full",
                    viewBox: "0 0 100 100",
                    children: [
                      h.jsx("circle", {
                        cx: "50",
                        cy: "50",
                        r: "45",
                        fill: "none",
                        stroke: "hsl(var(--muted))",
                        strokeWidth: "5",
                      }),
                      h.jsx("circle", {
                        ref: r,
                        cx: "50",
                        cy: "50",
                        r: "45",
                        fill: "none",
                        stroke: "hsl(var(--primary))",
                        strokeWidth: "5",
                        strokeLinecap: "round",
                        strokeDasharray: i,
                        strokeDashoffset: i,
                        style: {
                          transform: "rotate(-90deg)",
                          transformOrigin: "center",
                          willChange: "stroke-dashoffset",
                        },
                      }),
                    ],
                  }),
                  h.jsx("div", {
                    className:
                      "absolute inset-0 flex items-center justify-center",
                    children: h.jsx("div", {
                      className:
                        "w-14 h-14 sm:w-16 sm:h-16 bg-[#32BCAD] rounded-2xl flex items-center justify-center shadow-lg",
                      children: h.jsx("img", {
                        src: Xo,
                        alt: "PIX",
                        className: "w-8 h-8 sm:w-9 sm:h-9 brightness-0 invert",
                      }),
                    }),
                  }),
                ],
              }),
              h.jsx("div", {
                ref: n,
                className:
                  "text-5xl sm:text-6xl font-bold text-foreground mb-4 tabular-nums animate-fade-in-up",
                style: { animationDelay: "100ms" },
                children: "0%",
              }),
              h.jsx("p", {
                ref: s,
                className:
                  "text-muted-foreground text-sm text-center px-4 animate-fade-in-up",
                style: { animationDelay: "150ms" },
                children: Hi[0],
              }),
              h.jsxs("div", {
                className:
                  "mt-10 p-4 bg-card rounded-xl border border-border w-full animate-fade-in-up relative overflow-hidden",
                style: { animationDelay: "200ms" },
                children: [
                  h.jsx("div", {
                    className: "absolute top-0 left-0 w-full h-[2px]",
                    style: {
                      background:
                        "linear-gradient(90deg, hsl(var(--primary)), hsl(43,100%,69%), hsl(142,76%,36%), hsl(270,60%,55%))",
                    },
                  }),
                  h.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      h.jsx("div", {
                        className:
                          "w-10 h-10 bg-[#32BCAD] rounded-xl flex items-center justify-center flex-shrink-0",
                        children: h.jsx("img", {
                          src: Xo,
                          alt: "PIX",
                          className: "w-6 h-6 brightness-0 invert",
                        }),
                      }),
                      h.jsxs("div", {
                        children: [
                          h.jsx("p", {
                            className: "font-semibold text-foreground text-sm",
                            children: "Transferência PIX",
                          }),
                          h.jsx("p", {
                            className: "text-xs text-muted-foreground",
                            children: "Processando sua solicitação...",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  lC = "/assets/bacen.png",
  uC = "/assets/receita-federal.png";
var mi = {},
  cC = function () {
    return (
      typeof Promise == "function" &&
      Promise.prototype &&
      Promise.prototype.then
    );
  },
  av = {},
  ft = {};
let mh;
const dC = [
  0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655,
  733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921,
  2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706,
];
ft.getSymbolSize = function (t) {
  if (!t) throw new Error('"version" cannot be null or undefined');
  if (t < 1 || t > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return t * 4 + 17;
};
ft.getSymbolTotalCodewords = function (t) {
  return dC[t];
};
ft.getBCHDigit = function (e) {
  let t = 0;
  for (; e !== 0; ) (t++, (e >>>= 1));
  return t;
};
ft.setToSJISFunction = function (t) {
  if (typeof t != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  mh = t;
};
ft.isKanjiModeEnabled = function () {
  return typeof mh < "u";
};
ft.toSJIS = function (t) {
  return mh(t);
};
var Sl = {};
(function (e) {
  ((e.L = { bit: 1 }),
    (e.M = { bit: 0 }),
    (e.Q = { bit: 3 }),
    (e.H = { bit: 2 }));
  function t(r) {
    if (typeof r != "string") throw new Error("Param is not a string");
    switch (r.toLowerCase()) {
      case "l":
      case "low":
        return e.L;
      case "m":
      case "medium":
        return e.M;
      case "q":
      case "quartile":
        return e.Q;
      case "h":
      case "high":
        return e.H;
      default:
        throw new Error("Unknown EC Level: " + r);
    }
  }
  ((e.isValid = function (n) {
    return n && typeof n.bit < "u" && n.bit >= 0 && n.bit < 4;
  }),
    (e.from = function (n, s) {
      if (e.isValid(n)) return n;
      try {
        return t(n);
      } catch {
        return s;
      }
    }));
})(Sl);
function lv() {
  ((this.buffer = []), (this.length = 0));
}
lv.prototype = {
  get: function (e) {
    const t = Math.floor(e / 8);
    return ((this.buffer[t] >>> (7 - (e % 8))) & 1) === 1;
  },
  put: function (e, t) {
    for (let r = 0; r < t; r++) this.putBit(((e >>> (t - r - 1)) & 1) === 1);
  },
  getLengthInBits: function () {
    return this.length;
  },
  putBit: function (e) {
    const t = Math.floor(this.length / 8);
    (this.buffer.length <= t && this.buffer.push(0),
      e && (this.buffer[t] |= 128 >>> (this.length % 8)),
      this.length++);
  },
};
var hC = lv;
function gi(e) {
  if (!e || e < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  ((this.size = e),
    (this.data = new Uint8Array(e * e)),
    (this.reservedBit = new Uint8Array(e * e)));
}
gi.prototype.set = function (e, t, r, n) {
  const s = e * this.size + t;
  ((this.data[s] = r), n && (this.reservedBit[s] = !0));
};
gi.prototype.get = function (e, t) {
  return this.data[e * this.size + t];
};
gi.prototype.xor = function (e, t, r) {
  this.data[e * this.size + t] ^= r;
};
gi.prototype.isReserved = function (e, t) {
  return this.reservedBit[e * this.size + t];
};
var fC = gi,
  uv = {};
(function (e) {
  const t = ft.getSymbolSize;
  ((e.getRowColCoords = function (n) {
    if (n === 1) return [];
    const s = Math.floor(n / 7) + 2,
      o = t(n),
      i = o === 145 ? 26 : Math.ceil((o - 13) / (2 * s - 2)) * 2,
      a = [o - 7];
    for (let l = 1; l < s - 1; l++) a[l] = a[l - 1] - i;
    return (a.push(6), a.reverse());
  }),
    (e.getPositions = function (n) {
      const s = [],
        o = e.getRowColCoords(n),
        i = o.length;
      for (let a = 0; a < i; a++)
        for (let l = 0; l < i; l++)
          (a === 0 && l === 0) ||
            (a === 0 && l === i - 1) ||
            (a === i - 1 && l === 0) ||
            s.push([o[a], o[l]]);
      return s;
    }));
})(uv);
var cv = {};
const pC = ft.getSymbolSize,
  kp = 7;
cv.getPositions = function (t) {
  const r = pC(t);
  return [
    [0, 0],
    [r - kp, 0],
    [0, r - kp],
  ];
};
var dv = {};
(function (e) {
  e.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7,
  };
  const t = { N1: 3, N2: 3, N3: 40, N4: 10 };
  ((e.isValid = function (s) {
    return s != null && s !== "" && !isNaN(s) && s >= 0 && s <= 7;
  }),
    (e.from = function (s) {
      return e.isValid(s) ? parseInt(s, 10) : void 0;
    }),
    (e.getPenaltyN1 = function (s) {
      const o = s.size;
      let i = 0,
        a = 0,
        l = 0,
        u = null,
        c = null;
      for (let p = 0; p < o; p++) {
        ((a = l = 0), (u = c = null));
        for (let f = 0; f < o; f++) {
          let d = s.get(p, f);
          (d === u ? a++ : (a >= 5 && (i += t.N1 + (a - 5)), (u = d), (a = 1)),
            (d = s.get(f, p)),
            d === c
              ? l++
              : (l >= 5 && (i += t.N1 + (l - 5)), (c = d), (l = 1)));
        }
        (a >= 5 && (i += t.N1 + (a - 5)), l >= 5 && (i += t.N1 + (l - 5)));
      }
      return i;
    }),
    (e.getPenaltyN2 = function (s) {
      const o = s.size;
      let i = 0;
      for (let a = 0; a < o - 1; a++)
        for (let l = 0; l < o - 1; l++) {
          const u =
            s.get(a, l) +
            s.get(a, l + 1) +
            s.get(a + 1, l) +
            s.get(a + 1, l + 1);
          (u === 4 || u === 0) && i++;
        }
      return i * t.N2;
    }),
    (e.getPenaltyN3 = function (s) {
      const o = s.size;
      let i = 0,
        a = 0,
        l = 0;
      for (let u = 0; u < o; u++) {
        a = l = 0;
        for (let c = 0; c < o; c++)
          ((a = ((a << 1) & 2047) | s.get(u, c)),
            c >= 10 && (a === 1488 || a === 93) && i++,
            (l = ((l << 1) & 2047) | s.get(c, u)),
            c >= 10 && (l === 1488 || l === 93) && i++);
      }
      return i * t.N3;
    }),
    (e.getPenaltyN4 = function (s) {
      let o = 0;
      const i = s.data.length;
      for (let l = 0; l < i; l++) o += s.data[l];
      return Math.abs(Math.ceil((o * 100) / i / 5) - 10) * t.N4;
    }));
  function r(n, s, o) {
    switch (n) {
      case e.Patterns.PATTERN000:
        return (s + o) % 2 === 0;
      case e.Patterns.PATTERN001:
        return s % 2 === 0;
      case e.Patterns.PATTERN010:
        return o % 3 === 0;
      case e.Patterns.PATTERN011:
        return (s + o) % 3 === 0;
      case e.Patterns.PATTERN100:
        return (Math.floor(s / 2) + Math.floor(o / 3)) % 2 === 0;
      case e.Patterns.PATTERN101:
        return ((s * o) % 2) + ((s * o) % 3) === 0;
      case e.Patterns.PATTERN110:
        return (((s * o) % 2) + ((s * o) % 3)) % 2 === 0;
      case e.Patterns.PATTERN111:
        return (((s * o) % 3) + ((s + o) % 2)) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + n);
    }
  }
  ((e.applyMask = function (s, o) {
    const i = o.size;
    for (let a = 0; a < i; a++)
      for (let l = 0; l < i; l++) o.isReserved(l, a) || o.xor(l, a, r(s, l, a));
  }),
    (e.getBestMask = function (s, o) {
      const i = Object.keys(e.Patterns).length;
      let a = 0,
        l = 1 / 0;
      for (let u = 0; u < i; u++) {
        (o(u), e.applyMask(u, s));
        const c =
          e.getPenaltyN1(s) +
          e.getPenaltyN2(s) +
          e.getPenaltyN3(s) +
          e.getPenaltyN4(s);
        (e.applyMask(u, s), c < l && ((l = c), (a = u)));
      }
      return a;
    }));
})(dv);
var kl = {};
const zr = Sl,
  qi = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2,
    4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4,
    9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13,
    18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18,
    25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13,
    26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54,
    18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59,
    70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81,
  ],
  Ki = [
    7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72,
    88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192,
    72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352,
    120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448,
    532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442,
    644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312,
    588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050,
    1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510,
    924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064,
    1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
    2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
  ];
kl.getBlocksCount = function (t, r) {
  switch (r) {
    case zr.L:
      return qi[(t - 1) * 4 + 0];
    case zr.M:
      return qi[(t - 1) * 4 + 1];
    case zr.Q:
      return qi[(t - 1) * 4 + 2];
    case zr.H:
      return qi[(t - 1) * 4 + 3];
    default:
      return;
  }
};
kl.getTotalCodewordsCount = function (t, r) {
  switch (r) {
    case zr.L:
      return Ki[(t - 1) * 4 + 0];
    case zr.M:
      return Ki[(t - 1) * 4 + 1];
    case zr.Q:
      return Ki[(t - 1) * 4 + 2];
    case zr.H:
      return Ki[(t - 1) * 4 + 3];
    default:
      return;
  }
};
var hv = {},
  Cl = {};
const Po = new Uint8Array(512),
  Wa = new Uint8Array(256);
(function () {
  let t = 1;
  for (let r = 0; r < 255; r++)
    ((Po[r] = t), (Wa[t] = r), (t <<= 1), t & 256 && (t ^= 285));
  for (let r = 255; r < 512; r++) Po[r] = Po[r - 255];
})();
Cl.log = function (t) {
  if (t < 1) throw new Error("log(" + t + ")");
  return Wa[t];
};
Cl.exp = function (t) {
  return Po[t];
};
Cl.mul = function (t, r) {
  return t === 0 || r === 0 ? 0 : Po[Wa[t] + Wa[r]];
};
(function (e) {
  const t = Cl;
  ((e.mul = function (n, s) {
    const o = new Uint8Array(n.length + s.length - 1);
    for (let i = 0; i < n.length; i++)
      for (let a = 0; a < s.length; a++) o[i + a] ^= t.mul(n[i], s[a]);
    return o;
  }),
    (e.mod = function (n, s) {
      let o = new Uint8Array(n);
      for (; o.length - s.length >= 0; ) {
        const i = o[0];
        for (let l = 0; l < s.length; l++) o[l] ^= t.mul(s[l], i);
        let a = 0;
        for (; a < o.length && o[a] === 0; ) a++;
        o = o.slice(a);
      }
      return o;
    }),
    (e.generateECPolynomial = function (n) {
      let s = new Uint8Array([1]);
      for (let o = 0; o < n; o++) s = e.mul(s, new Uint8Array([1, t.exp(o)]));
      return s;
    }));
})(hv);
const fv = hv;
function gh(e) {
  ((this.genPoly = void 0),
    (this.degree = e),
    this.degree && this.initialize(this.degree));
}
gh.prototype.initialize = function (t) {
  ((this.degree = t), (this.genPoly = fv.generateECPolynomial(this.degree)));
};
gh.prototype.encode = function (t) {
  if (!this.genPoly) throw new Error("Encoder not initialized");
  const r = new Uint8Array(t.length + this.degree);
  r.set(t);
  const n = fv.mod(r, this.genPoly),
    s = this.degree - n.length;
  if (s > 0) {
    const o = new Uint8Array(this.degree);
    return (o.set(n, s), o);
  }
  return n;
};
var mC = gh,
  pv = {},
  an = {},
  yh = {};
yh.isValid = function (t) {
  return !isNaN(t) && t >= 1 && t <= 40;
};
var er = {};
const mv = "[0-9]+",
  gC = "[A-Z $%*+\\-./:]+";
let Zo =
  "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
Zo = Zo.replace(/u/g, "\\u");
const yC =
  "(?:(?![A-Z0-9 $%*+\\-./:]|" +
  Zo +
  `)(?:.|[\r
]))+`;
er.KANJI = new RegExp(Zo, "g");
er.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
er.BYTE = new RegExp(yC, "g");
er.NUMERIC = new RegExp(mv, "g");
er.ALPHANUMERIC = new RegExp(gC, "g");
const vC = new RegExp("^" + Zo + "$"),
  wC = new RegExp("^" + mv + "$"),
  xC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
er.testKanji = function (t) {
  return vC.test(t);
};
er.testNumeric = function (t) {
  return wC.test(t);
};
er.testAlphanumeric = function (t) {
  return xC.test(t);
};
(function (e) {
  const t = yh,
    r = er;
  ((e.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
    (e.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
    (e.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
    (e.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
    (e.MIXED = { bit: -1 }),
    (e.getCharCountIndicator = function (o, i) {
      if (!o.ccBits) throw new Error("Invalid mode: " + o);
      if (!t.isValid(i)) throw new Error("Invalid version: " + i);
      return i >= 1 && i < 10
        ? o.ccBits[0]
        : i < 27
          ? o.ccBits[1]
          : o.ccBits[2];
    }),
    (e.getBestModeForData = function (o) {
      return r.testNumeric(o)
        ? e.NUMERIC
        : r.testAlphanumeric(o)
          ? e.ALPHANUMERIC
          : r.testKanji(o)
            ? e.KANJI
            : e.BYTE;
    }),
    (e.toString = function (o) {
      if (o && o.id) return o.id;
      throw new Error("Invalid mode");
    }),
    (e.isValid = function (o) {
      return o && o.bit && o.ccBits;
    }));
  function n(s) {
    if (typeof s != "string") throw new Error("Param is not a string");
    switch (s.toLowerCase()) {
      case "numeric":
        return e.NUMERIC;
      case "alphanumeric":
        return e.ALPHANUMERIC;
      case "kanji":
        return e.KANJI;
      case "byte":
        return e.BYTE;
      default:
        throw new Error("Unknown mode: " + s);
    }
  }
  e.from = function (o, i) {
    if (e.isValid(o)) return o;
    try {
      return n(o);
    } catch {
      return i;
    }
  };
})(an);
(function (e) {
  const t = ft,
    r = kl,
    n = Sl,
    s = an,
    o = yh,
    i = 7973,
    a = t.getBCHDigit(i);
  function l(f, d, w) {
    for (let y = 1; y <= 40; y++) if (d <= e.getCapacity(y, w, f)) return y;
  }
  function u(f, d) {
    return s.getCharCountIndicator(f, d) + 4;
  }
  function c(f, d) {
    let w = 0;
    return (
      f.forEach(function (y) {
        const x = u(y.mode, d);
        w += x + y.getBitsLength();
      }),
      w
    );
  }
  function p(f, d) {
    for (let w = 1; w <= 40; w++)
      if (c(f, w) <= e.getCapacity(w, d, s.MIXED)) return w;
  }
  ((e.from = function (d, w) {
    return o.isValid(d) ? parseInt(d, 10) : w;
  }),
    (e.getCapacity = function (d, w, y) {
      if (!o.isValid(d)) throw new Error("Invalid QR Code version");
      typeof y > "u" && (y = s.BYTE);
      const x = t.getSymbolTotalCodewords(d),
        g = r.getTotalCodewordsCount(d, w),
        m = (x - g) * 8;
      if (y === s.MIXED) return m;
      const v = m - u(y, d);
      switch (y) {
        case s.NUMERIC:
          return Math.floor((v / 10) * 3);
        case s.ALPHANUMERIC:
          return Math.floor((v / 11) * 2);
        case s.KANJI:
          return Math.floor(v / 13);
        case s.BYTE:
        default:
          return Math.floor(v / 8);
      }
    }),
    (e.getBestVersionForData = function (d, w) {
      let y;
      const x = n.from(w, n.M);
      if (Array.isArray(d)) {
        if (d.length > 1) return p(d, x);
        if (d.length === 0) return 1;
        y = d[0];
      } else y = d;
      return l(y.mode, y.getLength(), x);
    }),
    (e.getEncodedBits = function (d) {
      if (!o.isValid(d) || d < 7) throw new Error("Invalid QR Code version");
      let w = d << 12;
      for (; t.getBCHDigit(w) - a >= 0; ) w ^= i << (t.getBCHDigit(w) - a);
      return (d << 12) | w;
    }));
})(pv);
var gv = {};
const Bc = ft,
  yv = 1335,
  bC = 21522,
  Cp = Bc.getBCHDigit(yv);
gv.getEncodedBits = function (t, r) {
  const n = (t.bit << 3) | r;
  let s = n << 10;
  for (; Bc.getBCHDigit(s) - Cp >= 0; ) s ^= yv << (Bc.getBCHDigit(s) - Cp);
  return ((n << 10) | s) ^ bC;
};
var vv = {};
const _C = an;
function zs(e) {
  ((this.mode = _C.NUMERIC), (this.data = e.toString()));
}
zs.getBitsLength = function (t) {
  return 10 * Math.floor(t / 3) + (t % 3 ? (t % 3) * 3 + 1 : 0);
};
zs.prototype.getLength = function () {
  return this.data.length;
};
zs.prototype.getBitsLength = function () {
  return zs.getBitsLength(this.data.length);
};
zs.prototype.write = function (t) {
  let r, n, s;
  for (r = 0; r + 3 <= this.data.length; r += 3)
    ((n = this.data.substr(r, 3)), (s = parseInt(n, 10)), t.put(s, 10));
  const o = this.data.length - r;
  o > 0 &&
    ((n = this.data.substr(r)), (s = parseInt(n, 10)), t.put(s, o * 3 + 1));
};
var EC = zs;
const SC = an,
  mu = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
    "$",
    "%",
    "*",
    "+",
    "-",
    ".",
    "/",
    ":",
  ];
function Vs(e) {
  ((this.mode = SC.ALPHANUMERIC), (this.data = e));
}
Vs.getBitsLength = function (t) {
  return 11 * Math.floor(t / 2) + 6 * (t % 2);
};
Vs.prototype.getLength = function () {
  return this.data.length;
};
Vs.prototype.getBitsLength = function () {
  return Vs.getBitsLength(this.data.length);
};
Vs.prototype.write = function (t) {
  let r;
  for (r = 0; r + 2 <= this.data.length; r += 2) {
    let n = mu.indexOf(this.data[r]) * 45;
    ((n += mu.indexOf(this.data[r + 1])), t.put(n, 11));
  }
  this.data.length % 2 && t.put(mu.indexOf(this.data[r]), 6);
};
var kC = Vs;
const CC = an;
function Ws(e) {
  ((this.mode = CC.BYTE),
    typeof e == "string"
      ? (this.data = new TextEncoder().encode(e))
      : (this.data = new Uint8Array(e)));
}
Ws.getBitsLength = function (t) {
  return t * 8;
};
Ws.prototype.getLength = function () {
  return this.data.length;
};
Ws.prototype.getBitsLength = function () {
  return Ws.getBitsLength(this.data.length);
};
Ws.prototype.write = function (e) {
  for (let t = 0, r = this.data.length; t < r; t++) e.put(this.data[t], 8);
};
var TC = Ws;
const PC = an,
  RC = ft;
function Hs(e) {
  ((this.mode = PC.KANJI), (this.data = e));
}
Hs.getBitsLength = function (t) {
  return t * 13;
};
Hs.prototype.getLength = function () {
  return this.data.length;
};
Hs.prototype.getBitsLength = function () {
  return Hs.getBitsLength(this.data.length);
};
Hs.prototype.write = function (e) {
  let t;
  for (t = 0; t < this.data.length; t++) {
    let r = RC.toSJIS(this.data[t]);
    if (r >= 33088 && r <= 40956) r -= 33088;
    else if (r >= 57408 && r <= 60351) r -= 49472;
    else
      throw new Error(
        "Invalid SJIS character: " +
          this.data[t] +
          `
Make sure your charset is UTF-8`,
      );
    ((r = ((r >>> 8) & 255) * 192 + (r & 255)), e.put(r, 13));
  }
};
var NC = Hs,
  wv = { exports: {} };
(function (e) {
  var t = {
    single_source_shortest_paths: function (r, n, s) {
      var o = {},
        i = {};
      i[n] = 0;
      var a = t.PriorityQueue.make();
      a.push(n, 0);
      for (var l, u, c, p, f, d, w, y, x; !a.empty(); ) {
        ((l = a.pop()), (u = l.value), (p = l.cost), (f = r[u] || {}));
        for (c in f)
          f.hasOwnProperty(c) &&
            ((d = f[c]),
            (w = p + d),
            (y = i[c]),
            (x = typeof i[c] > "u"),
            (x || y > w) && ((i[c] = w), a.push(c, w), (o[c] = u)));
      }
      if (typeof s < "u" && typeof i[s] > "u") {
        var g = ["Could not find a path from ", n, " to ", s, "."].join("");
        throw new Error(g);
      }
      return o;
    },
    extract_shortest_path_from_predecessor_list: function (r, n) {
      for (var s = [], o = n; o; ) (s.push(o), r[o], (o = r[o]));
      return (s.reverse(), s);
    },
    find_path: function (r, n, s) {
      var o = t.single_source_shortest_paths(r, n, s);
      return t.extract_shortest_path_from_predecessor_list(o, s);
    },
    PriorityQueue: {
      make: function (r) {
        var n = t.PriorityQueue,
          s = {},
          o;
        r = r || {};
        for (o in n) n.hasOwnProperty(o) && (s[o] = n[o]);
        return ((s.queue = []), (s.sorter = r.sorter || n.default_sorter), s);
      },
      default_sorter: function (r, n) {
        return r.cost - n.cost;
      },
      push: function (r, n) {
        var s = { value: r, cost: n };
        (this.queue.push(s), this.queue.sort(this.sorter));
      },
      pop: function () {
        return this.queue.shift();
      },
      empty: function () {
        return this.queue.length === 0;
      },
    },
  };
  e.exports = t;
})(wv);
var jC = wv.exports;
(function (e) {
  const t = an,
    r = EC,
    n = kC,
    s = TC,
    o = NC,
    i = er,
    a = ft,
    l = jC;
  function u(g) {
    return unescape(encodeURIComponent(g)).length;
  }
  function c(g, m, v) {
    const b = [];
    let E;
    for (; (E = g.exec(v)) !== null; )
      b.push({ data: E[0], index: E.index, mode: m, length: E[0].length });
    return b;
  }
  function p(g) {
    const m = c(i.NUMERIC, t.NUMERIC, g),
      v = c(i.ALPHANUMERIC, t.ALPHANUMERIC, g);
    let b, E;
    return (
      a.isKanjiModeEnabled()
        ? ((b = c(i.BYTE, t.BYTE, g)), (E = c(i.KANJI, t.KANJI, g)))
        : ((b = c(i.BYTE_KANJI, t.BYTE, g)), (E = [])),
      m
        .concat(v, b, E)
        .sort(function (k, T) {
          return k.index - T.index;
        })
        .map(function (k) {
          return { data: k.data, mode: k.mode, length: k.length };
        })
    );
  }
  function f(g, m) {
    switch (m) {
      case t.NUMERIC:
        return r.getBitsLength(g);
      case t.ALPHANUMERIC:
        return n.getBitsLength(g);
      case t.KANJI:
        return o.getBitsLength(g);
      case t.BYTE:
        return s.getBitsLength(g);
    }
  }
  function d(g) {
    return g.reduce(function (m, v) {
      const b = m.length - 1 >= 0 ? m[m.length - 1] : null;
      return b && b.mode === v.mode
        ? ((m[m.length - 1].data += v.data), m)
        : (m.push(v), m);
    }, []);
  }
  function w(g) {
    const m = [];
    for (let v = 0; v < g.length; v++) {
      const b = g[v];
      switch (b.mode) {
        case t.NUMERIC:
          m.push([
            b,
            { data: b.data, mode: t.ALPHANUMERIC, length: b.length },
            { data: b.data, mode: t.BYTE, length: b.length },
          ]);
          break;
        case t.ALPHANUMERIC:
          m.push([b, { data: b.data, mode: t.BYTE, length: b.length }]);
          break;
        case t.KANJI:
          m.push([b, { data: b.data, mode: t.BYTE, length: u(b.data) }]);
          break;
        case t.BYTE:
          m.push([{ data: b.data, mode: t.BYTE, length: u(b.data) }]);
      }
    }
    return m;
  }
  function y(g, m) {
    const v = {},
      b = { start: {} };
    let E = ["start"];
    for (let S = 0; S < g.length; S++) {
      const k = g[S],
        T = [];
      for (let j = 0; j < k.length; j++) {
        const P = k[j],
          M = "" + S + j;
        (T.push(M), (v[M] = { node: P, lastCount: 0 }), (b[M] = {}));
        for (let $ = 0; $ < E.length; $++) {
          const B = E[$];
          v[B] && v[B].node.mode === P.mode
            ? ((b[B][M] =
                f(v[B].lastCount + P.length, P.mode) -
                f(v[B].lastCount, P.mode)),
              (v[B].lastCount += P.length))
            : (v[B] && (v[B].lastCount = P.length),
              (b[B][M] =
                f(P.length, P.mode) + 4 + t.getCharCountIndicator(P.mode, m)));
        }
      }
      E = T;
    }
    for (let S = 0; S < E.length; S++) b[E[S]].end = 0;
    return { map: b, table: v };
  }
  function x(g, m) {
    let v;
    const b = t.getBestModeForData(g);
    if (((v = t.from(m, b)), v !== t.BYTE && v.bit < b.bit))
      throw new Error(
        '"' +
          g +
          '" cannot be encoded with mode ' +
          t.toString(v) +
          `.
 Suggested mode is: ` +
          t.toString(b),
      );
    switch ((v === t.KANJI && !a.isKanjiModeEnabled() && (v = t.BYTE), v)) {
      case t.NUMERIC:
        return new r(g);
      case t.ALPHANUMERIC:
        return new n(g);
      case t.KANJI:
        return new o(g);
      case t.BYTE:
        return new s(g);
    }
  }
  ((e.fromArray = function (m) {
    return m.reduce(function (v, b) {
      return (
        typeof b == "string"
          ? v.push(x(b, null))
          : b.data && v.push(x(b.data, b.mode)),
        v
      );
    }, []);
  }),
    (e.fromString = function (m, v) {
      const b = p(m, a.isKanjiModeEnabled()),
        E = w(b),
        S = y(E, v),
        k = l.find_path(S.map, "start", "end"),
        T = [];
      for (let j = 1; j < k.length - 1; j++) T.push(S.table[k[j]].node);
      return e.fromArray(d(T));
    }),
    (e.rawSplit = function (m) {
      return e.fromArray(p(m, a.isKanjiModeEnabled()));
    }));
})(vv);
const Tl = ft,
  gu = Sl,
  AC = hC,
  OC = fC,
  IC = uv,
  LC = cv,
  zc = dv,
  Vc = kl,
  $C = mC,
  Ha = pv,
  MC = gv,
  DC = an,
  yu = vv;
function FC(e, t) {
  const r = e.size,
    n = LC.getPositions(t);
  for (let s = 0; s < n.length; s++) {
    const o = n[s][0],
      i = n[s][1];
    for (let a = -1; a <= 7; a++)
      if (!(o + a <= -1 || r <= o + a))
        for (let l = -1; l <= 7; l++)
          i + l <= -1 ||
            r <= i + l ||
            ((a >= 0 && a <= 6 && (l === 0 || l === 6)) ||
            (l >= 0 && l <= 6 && (a === 0 || a === 6)) ||
            (a >= 2 && a <= 4 && l >= 2 && l <= 4)
              ? e.set(o + a, i + l, !0, !0)
              : e.set(o + a, i + l, !1, !0));
  }
}
function UC(e) {
  const t = e.size;
  for (let r = 8; r < t - 8; r++) {
    const n = r % 2 === 0;
    (e.set(r, 6, n, !0), e.set(6, r, n, !0));
  }
}
function BC(e, t) {
  const r = IC.getPositions(t);
  for (let n = 0; n < r.length; n++) {
    const s = r[n][0],
      o = r[n][1];
    for (let i = -2; i <= 2; i++)
      for (let a = -2; a <= 2; a++)
        i === -2 || i === 2 || a === -2 || a === 2 || (i === 0 && a === 0)
          ? e.set(s + i, o + a, !0, !0)
          : e.set(s + i, o + a, !1, !0);
  }
}
function zC(e, t) {
  const r = e.size,
    n = Ha.getEncodedBits(t);
  let s, o, i;
  for (let a = 0; a < 18; a++)
    ((s = Math.floor(a / 3)),
      (o = (a % 3) + r - 8 - 3),
      (i = ((n >> a) & 1) === 1),
      e.set(s, o, i, !0),
      e.set(o, s, i, !0));
}
function vu(e, t, r) {
  const n = e.size,
    s = MC.getEncodedBits(t, r);
  let o, i;
  for (o = 0; o < 15; o++)
    ((i = ((s >> o) & 1) === 1),
      o < 6
        ? e.set(o, 8, i, !0)
        : o < 8
          ? e.set(o + 1, 8, i, !0)
          : e.set(n - 15 + o, 8, i, !0),
      o < 8
        ? e.set(8, n - o - 1, i, !0)
        : o < 9
          ? e.set(8, 15 - o - 1 + 1, i, !0)
          : e.set(8, 15 - o - 1, i, !0));
  e.set(n - 8, 8, 1, !0);
}
function VC(e, t) {
  const r = e.size;
  let n = -1,
    s = r - 1,
    o = 7,
    i = 0;
  for (let a = r - 1; a > 0; a -= 2)
    for (a === 6 && a--; ; ) {
      for (let l = 0; l < 2; l++)
        if (!e.isReserved(s, a - l)) {
          let u = !1;
          (i < t.length && (u = ((t[i] >>> o) & 1) === 1),
            e.set(s, a - l, u),
            o--,
            o === -1 && (i++, (o = 7)));
        }
      if (((s += n), s < 0 || r <= s)) {
        ((s -= n), (n = -n));
        break;
      }
    }
}
function WC(e, t, r) {
  const n = new AC();
  r.forEach(function (l) {
    (n.put(l.mode.bit, 4),
      n.put(l.getLength(), DC.getCharCountIndicator(l.mode, e)),
      l.write(n));
  });
  const s = Tl.getSymbolTotalCodewords(e),
    o = Vc.getTotalCodewordsCount(e, t),
    i = (s - o) * 8;
  for (
    n.getLengthInBits() + 4 <= i && n.put(0, 4);
    n.getLengthInBits() % 8 !== 0;
  )
    n.putBit(0);
  const a = (i - n.getLengthInBits()) / 8;
  for (let l = 0; l < a; l++) n.put(l % 2 ? 17 : 236, 8);
  return HC(n, e, t);
}
function HC(e, t, r) {
  const n = Tl.getSymbolTotalCodewords(t),
    s = Vc.getTotalCodewordsCount(t, r),
    o = n - s,
    i = Vc.getBlocksCount(t, r),
    a = n % i,
    l = i - a,
    u = Math.floor(n / i),
    c = Math.floor(o / i),
    p = c + 1,
    f = u - c,
    d = new $C(f);
  let w = 0;
  const y = new Array(i),
    x = new Array(i);
  let g = 0;
  const m = new Uint8Array(e.buffer);
  for (let k = 0; k < i; k++) {
    const T = k < l ? c : p;
    ((y[k] = m.slice(w, w + T)),
      (x[k] = d.encode(y[k])),
      (w += T),
      (g = Math.max(g, T)));
  }
  const v = new Uint8Array(n);
  let b = 0,
    E,
    S;
  for (E = 0; E < g; E++)
    for (S = 0; S < i; S++) E < y[S].length && (v[b++] = y[S][E]);
  for (E = 0; E < f; E++) for (S = 0; S < i; S++) v[b++] = x[S][E];
  return v;
}
function qC(e, t, r, n) {
  let s;
  if (Array.isArray(e)) s = yu.fromArray(e);
  else if (typeof e == "string") {
    let u = t;
    if (!u) {
      const c = yu.rawSplit(e);
      u = Ha.getBestVersionForData(c, r);
    }
    s = yu.fromString(e, u || 40);
  } else throw new Error("Invalid data");
  const o = Ha.getBestVersionForData(s, r);
  if (!o)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!t) t = o;
  else if (t < o)
    throw new Error(
      `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` +
        o +
        `.
`,
    );
  const i = WC(t, r, s),
    a = Tl.getSymbolSize(t),
    l = new OC(a);
  return (
    FC(l, t),
    UC(l),
    BC(l, t),
    vu(l, r, 0),
    t >= 7 && zC(l, t),
    VC(l, i),
    isNaN(n) && (n = zc.getBestMask(l, vu.bind(null, l, r))),
    zc.applyMask(n, l),
    vu(l, r, n),
    {
      modules: l,
      version: t,
      errorCorrectionLevel: r,
      maskPattern: n,
      segments: s,
    }
  );
}
av.create = function (t, r) {
  if (typeof t > "u" || t === "") throw new Error("No input text");
  let n = gu.M,
    s,
    o;
  return (
    typeof r < "u" &&
      ((n = gu.from(r.errorCorrectionLevel, gu.M)),
      (s = Ha.from(r.version)),
      (o = zc.from(r.maskPattern)),
      r.toSJISFunc && Tl.setToSJISFunction(r.toSJISFunc)),
    qC(t, s, n, o)
  );
};
var xv = {},
  vh = {};
(function (e) {
  function t(r) {
    if ((typeof r == "number" && (r = r.toString()), typeof r != "string"))
      throw new Error("Color should be defined as hex string");
    let n = r.slice().replace("#", "").split("");
    if (n.length < 3 || n.length === 5 || n.length > 8)
      throw new Error("Invalid hex color: " + r);
    ((n.length === 3 || n.length === 4) &&
      (n = Array.prototype.concat.apply(
        [],
        n.map(function (o) {
          return [o, o];
        }),
      )),
      n.length === 6 && n.push("F", "F"));
    const s = parseInt(n.join(""), 16);
    return {
      r: (s >> 24) & 255,
      g: (s >> 16) & 255,
      b: (s >> 8) & 255,
      a: s & 255,
      hex: "#" + n.slice(0, 6).join(""),
    };
  }
  ((e.getOptions = function (n) {
    (n || (n = {}), n.color || (n.color = {}));
    const s =
        typeof n.margin > "u" || n.margin === null || n.margin < 0
          ? 4
          : n.margin,
      o = n.width && n.width >= 21 ? n.width : void 0,
      i = n.scale || 4;
    return {
      width: o,
      scale: o ? 4 : i,
      margin: s,
      color: {
        dark: t(n.color.dark || "#000000ff"),
        light: t(n.color.light || "#ffffffff"),
      },
      type: n.type,
      rendererOpts: n.rendererOpts || {},
    };
  }),
    (e.getScale = function (n, s) {
      return s.width && s.width >= n + s.margin * 2
        ? s.width / (n + s.margin * 2)
        : s.scale;
    }),
    (e.getImageWidth = function (n, s) {
      const o = e.getScale(n, s);
      return Math.floor((n + s.margin * 2) * o);
    }),
    (e.qrToImageData = function (n, s, o) {
      const i = s.modules.size,
        a = s.modules.data,
        l = e.getScale(i, o),
        u = Math.floor((i + o.margin * 2) * l),
        c = o.margin * l,
        p = [o.color.light, o.color.dark];
      for (let f = 0; f < u; f++)
        for (let d = 0; d < u; d++) {
          let w = (f * u + d) * 4,
            y = o.color.light;
          if (f >= c && d >= c && f < u - c && d < u - c) {
            const x = Math.floor((f - c) / l),
              g = Math.floor((d - c) / l);
            y = p[a[x * i + g] ? 1 : 0];
          }
          ((n[w++] = y.r), (n[w++] = y.g), (n[w++] = y.b), (n[w] = y.a));
        }
    }));
})(vh);
(function (e) {
  const t = vh;
  function r(s, o, i) {
    (s.clearRect(0, 0, o.width, o.height),
      o.style || (o.style = {}),
      (o.height = i),
      (o.width = i),
      (o.style.height = i + "px"),
      (o.style.width = i + "px"));
  }
  function n() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  ((e.render = function (o, i, a) {
    let l = a,
      u = i;
    (typeof l > "u" && (!i || !i.getContext) && ((l = i), (i = void 0)),
      i || (u = n()),
      (l = t.getOptions(l)));
    const c = t.getImageWidth(o.modules.size, l),
      p = u.getContext("2d"),
      f = p.createImageData(c, c);
    return (
      t.qrToImageData(f.data, o, l),
      r(p, u, c),
      p.putImageData(f, 0, 0),
      u
    );
  }),
    (e.renderToDataURL = function (o, i, a) {
      let l = a;
      (typeof l > "u" && (!i || !i.getContext) && ((l = i), (i = void 0)),
        l || (l = {}));
      const u = e.render(o, i, l),
        c = l.type || "image/png",
        p = l.rendererOpts || {};
      return u.toDataURL(c, p.quality);
    }));
})(xv);
var bv = {};
const KC = vh;
function Tp(e, t) {
  const r = e.a / 255,
    n = t + '="' + e.hex + '"';
  return r < 1 ? n + " " + t + '-opacity="' + r.toFixed(2).slice(1) + '"' : n;
}
function wu(e, t, r) {
  let n = e + t;
  return (typeof r < "u" && (n += " " + r), n);
}
function GC(e, t, r) {
  let n = "",
    s = 0,
    o = !1,
    i = 0;
  for (let a = 0; a < e.length; a++) {
    const l = Math.floor(a % t),
      u = Math.floor(a / t);
    (!l && !o && (o = !0),
      e[a]
        ? (i++,
          (a > 0 && l > 0 && e[a - 1]) ||
            ((n += o ? wu("M", l + r, 0.5 + u + r) : wu("m", s, 0)),
            (s = 0),
            (o = !1)),
          (l + 1 < t && e[a + 1]) || ((n += wu("h", i)), (i = 0)))
        : s++);
  }
  return n;
}
bv.render = function (t, r, n) {
  const s = KC.getOptions(r),
    o = t.modules.size,
    i = t.modules.data,
    a = o + s.margin * 2,
    l = s.color.light.a
      ? "<path " +
        Tp(s.color.light, "fill") +
        ' d="M0 0h' +
        a +
        "v" +
        a +
        'H0z"/>'
      : "",
    u =
      "<path " +
      Tp(s.color.dark, "stroke") +
      ' d="' +
      GC(i, o, s.margin) +
      '"/>',
    c = 'viewBox="0 0 ' + a + " " + a + '"',
    f =
      '<svg xmlns="http://www.w3.org/2000/svg" ' +
      (s.width ? 'width="' + s.width + '" height="' + s.width + '" ' : "") +
      c +
      ' shape-rendering="crispEdges">' +
      l +
      u +
      `</svg>
`;
  return (typeof n == "function" && n(null, f), f);
};
const QC = cC,
  Wc = av,
  _v = xv,
  JC = bv;
function wh(e, t, r, n, s) {
  const o = [].slice.call(arguments, 1),
    i = o.length,
    a = typeof o[i - 1] == "function";
  if (!a && !QC()) throw new Error("Callback required as last argument");
  if (a) {
    if (i < 2) throw new Error("Too few arguments provided");
    i === 2
      ? ((s = r), (r = t), (t = n = void 0))
      : i === 3 &&
        (t.getContext && typeof s > "u"
          ? ((s = n), (n = void 0))
          : ((s = n), (n = r), (r = t), (t = void 0)));
  } else {
    if (i < 1) throw new Error("Too few arguments provided");
    return (
      i === 1
        ? ((r = t), (t = n = void 0))
        : i === 2 && !t.getContext && ((n = r), (r = t), (t = void 0)),
      new Promise(function (l, u) {
        try {
          const c = Wc.create(r, n);
          l(e(c, t, n));
        } catch (c) {
          u(c);
        }
      })
    );
  }
  try {
    const l = Wc.create(r, n);
    s(null, e(l, t, n));
  } catch (l) {
    s(l);
  }
}
mi.create = Wc.create;
mi.toCanvas = wh.bind(null, _v.render);
mi.toDataURL = wh.bind(null, _v.renderToDataURL);
mi.toString = wh.bind(null, function (e, t, r) {
  return JC.render(e, r);
});
function Pl(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++)
      t.indexOf(n[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[s]) &&
        (r[n[s]] = e[n[s]]);
  return r;
}
function YC(e, t, r, n) {
  function s(o) {
    return o instanceof r
      ? o
      : new r(function (i) {
          i(o);
        });
  }
  return new (r || (r = Promise))(function (o, i) {
    function a(c) {
      try {
        u(n.next(c));
      } catch (p) {
        i(p);
      }
    }
    function l(c) {
      try {
        u(n.throw(c));
      } catch (p) {
        i(p);
      }
    }
    function u(c) {
      c.done ? o(c.value) : s(c.value).then(a, l);
    }
    u((n = n.apply(e, t || [])).next());
  });
}
const XC = (e) => (e ? (...t) => e(...t) : (...t) => fetch(...t));
class xh extends Error {
  constructor(t, r = "FunctionsError", n) {
    (super(t), (this.name = r), (this.context = n));
  }
}
class ZC extends xh {
  constructor(t) {
    super(
      "Failed to send a request to the Edge Function",
      "FunctionsFetchError",
      t,
    );
  }
}
class Pp extends xh {
  constructor(t) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", t);
  }
}
class Rp extends xh {
  constructor(t) {
    super(
      "Edge Function returned a non-2xx status code",
      "FunctionsHttpError",
      t,
    );
  }
}
var Hc;
(function (e) {
  ((e.Any = "any"),
    (e.ApNortheast1 = "ap-northeast-1"),
    (e.ApNortheast2 = "ap-northeast-2"),
    (e.ApSouth1 = "ap-south-1"),
    (e.ApSoutheast1 = "ap-southeast-1"),
    (e.ApSoutheast2 = "ap-southeast-2"),
    (e.CaCentral1 = "ca-central-1"),
    (e.EuCentral1 = "eu-central-1"),
    (e.EuWest1 = "eu-west-1"),
    (e.EuWest2 = "eu-west-2"),
    (e.EuWest3 = "eu-west-3"),
    (e.SaEast1 = "sa-east-1"),
    (e.UsEast1 = "us-east-1"),
    (e.UsWest1 = "us-west-1"),
    (e.UsWest2 = "us-west-2"));
})(Hc || (Hc = {}));
class e2 {
  constructor(t, { headers: r = {}, customFetch: n, region: s = Hc.Any } = {}) {
    ((this.url = t),
      (this.headers = r),
      (this.region = s),
      (this.fetch = XC(n)));
  }
  setAuth(t) {
    this.headers.Authorization = `Bearer ${t}`;
  }
  invoke(t) {
    return YC(this, arguments, void 0, function* (r, n = {}) {
      var s;
      let o, i;
      try {
        const { headers: a, method: l, body: u, signal: c, timeout: p } = n;
        let f = {},
          { region: d } = n;
        d || (d = this.region);
        const w = new URL(`${this.url}/${r}`);
        d &&
          d !== "any" &&
          ((f["x-region"] = d), w.searchParams.set("forceFunctionRegion", d));
        let y;
        u &&
        ((a && !Object.prototype.hasOwnProperty.call(a, "Content-Type")) || !a)
          ? (typeof Blob < "u" && u instanceof Blob) || u instanceof ArrayBuffer
            ? ((f["Content-Type"] = "application/octet-stream"), (y = u))
            : typeof u == "string"
              ? ((f["Content-Type"] = "text/plain"), (y = u))
              : typeof FormData < "u" && u instanceof FormData
                ? (y = u)
                : ((f["Content-Type"] = "application/json"),
                  (y = JSON.stringify(u)))
          : u &&
              typeof u != "string" &&
              !(typeof Blob < "u" && u instanceof Blob) &&
              !(u instanceof ArrayBuffer) &&
              !(typeof FormData < "u" && u instanceof FormData)
            ? (y = JSON.stringify(u))
            : (y = u);
        let x = c;
        p &&
          ((i = new AbortController()),
          (o = setTimeout(() => i.abort(), p)),
          c
            ? ((x = i.signal), c.addEventListener("abort", () => i.abort()))
            : (x = i.signal));
        const g = yield this.fetch(w.toString(), {
            method: l || "POST",
            headers: Object.assign(
              Object.assign(Object.assign({}, f), this.headers),
              a,
            ),
            body: y,
            signal: x,
          }).catch((E) => {
            throw new ZC(E);
          }),
          m = g.headers.get("x-relay-error");
        if (m && m === "true") throw new Pp(g);
        if (!g.ok) throw new Rp(g);
        let v = (
            (s = g.headers.get("Content-Type")) !== null && s !== void 0
              ? s
              : "text/plain"
          )
            .split(";")[0]
            .trim(),
          b;
        return (
          v === "application/json"
            ? (b = yield g.json())
            : v === "application/octet-stream" || v === "application/pdf"
              ? (b = yield g.blob())
              : v === "text/event-stream"
                ? (b = g)
                : v === "multipart/form-data"
                  ? (b = yield g.formData())
                  : (b = yield g.text()),
          { data: b, error: null, response: g }
        );
      } catch (a) {
        return {
          data: null,
          error: a,
          response: a instanceof Rp || a instanceof Pp ? a.context : void 0,
        };
      } finally {
        o && clearTimeout(o);
      }
    });
  }
}
var t2 = class extends Error {
    constructor(e) {
      (super(e.message),
        (this.name = "PostgrestError"),
        (this.details = e.details),
        (this.hint = e.hint),
        (this.code = e.code));
    }
  },
  r2 = class {
    constructor(e) {
      var t, r;
      ((this.shouldThrowOnError = !1),
        (this.method = e.method),
        (this.url = e.url),
        (this.headers = new Headers(e.headers)),
        (this.schema = e.schema),
        (this.body = e.body),
        (this.shouldThrowOnError =
          (t = e.shouldThrowOnError) !== null && t !== void 0 ? t : !1),
        (this.signal = e.signal),
        (this.isMaybeSingle =
          (r = e.isMaybeSingle) !== null && r !== void 0 ? r : !1),
        e.fetch ? (this.fetch = e.fetch) : (this.fetch = fetch));
    }
    throwOnError() {
      return ((this.shouldThrowOnError = !0), this);
    }
    setHeader(e, t) {
      return (
        (this.headers = new Headers(this.headers)),
        this.headers.set(e, t),
        this
      );
    }
    then(e, t) {
      var r = this;
      (this.schema === void 0 ||
        (["GET", "HEAD"].includes(this.method)
          ? this.headers.set("Accept-Profile", this.schema)
          : this.headers.set("Content-Profile", this.schema)),
        this.method !== "GET" &&
          this.method !== "HEAD" &&
          this.headers.set("Content-Type", "application/json"));
      const n = this.fetch;
      let s = n(this.url.toString(), {
        method: this.method,
        headers: this.headers,
        body: JSON.stringify(this.body),
        signal: this.signal,
      }).then(async (o) => {
        let i = null,
          a = null,
          l = null,
          u = o.status,
          c = o.statusText;
        if (o.ok) {
          var p, f;
          if (r.method !== "HEAD") {
            var d;
            const g = await o.text();
            g === "" ||
              (r.headers.get("Accept") === "text/csv" ||
              (r.headers.get("Accept") &&
                !((d = r.headers.get("Accept")) === null || d === void 0) &&
                d.includes("application/vnd.pgrst.plan+text"))
                ? (a = g)
                : (a = JSON.parse(g)));
          }
          const y =
              (p = r.headers.get("Prefer")) === null || p === void 0
                ? void 0
                : p.match(/count=(exact|planned|estimated)/),
            x =
              (f = o.headers.get("content-range")) === null || f === void 0
                ? void 0
                : f.split("/");
          (y && x && x.length > 1 && (l = parseInt(x[1])),
            r.isMaybeSingle &&
              r.method === "GET" &&
              Array.isArray(a) &&
              (a.length > 1
                ? ((i = {
                    code: "PGRST116",
                    details: `Results contain ${a.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message:
                      "JSON object requested, multiple (or no) rows returned",
                  }),
                  (a = null),
                  (l = null),
                  (u = 406),
                  (c = "Not Acceptable"))
                : a.length === 1
                  ? (a = a[0])
                  : (a = null)));
        } else {
          var w;
          const y = await o.text();
          try {
            ((i = JSON.parse(y)),
              Array.isArray(i) &&
                o.status === 404 &&
                ((a = []), (i = null), (u = 200), (c = "OK")));
          } catch {
            o.status === 404 && y === ""
              ? ((u = 204), (c = "No Content"))
              : (i = { message: y });
          }
          if (
            (i &&
              r.isMaybeSingle &&
              !(i == null || (w = i.details) === null || w === void 0) &&
              w.includes("0 rows") &&
              ((i = null), (u = 200), (c = "OK")),
            i && r.shouldThrowOnError)
          )
            throw new t2(i);
        }
        return { error: i, data: a, count: l, status: u, statusText: c };
      });
      return (
        this.shouldThrowOnError ||
          (s = s.catch((o) => {
            var i;
            let a = "";
            const l = o == null ? void 0 : o.cause;
            if (l) {
              var u, c, p, f;
              const w =
                  (u = l == null ? void 0 : l.message) !== null && u !== void 0
                    ? u
                    : "",
                y =
                  (c = l == null ? void 0 : l.code) !== null && c !== void 0
                    ? c
                    : "";
              ((a = `${(p = o == null ? void 0 : o.name) !== null && p !== void 0 ? p : "FetchError"}: ${o == null ? void 0 : o.message}`),
                (a += `

Caused by: ${(f = l == null ? void 0 : l.name) !== null && f !== void 0 ? f : "Error"}: ${w}`),
                y && (a += ` (${y})`),
                l != null &&
                  l.stack &&
                  (a += `
${l.stack}`));
            } else {
              var d;
              a =
                (d = o == null ? void 0 : o.stack) !== null && d !== void 0
                  ? d
                  : "";
            }
            return {
              error: {
                message: `${(i = o == null ? void 0 : o.name) !== null && i !== void 0 ? i : "FetchError"}: ${o == null ? void 0 : o.message}`,
                details: a,
                hint: "",
                code: "",
              },
              data: null,
              count: null,
              status: 0,
              statusText: "",
            };
          })),
        s.then(e, t)
      );
    }
    returns() {
      return this;
    }
    overrideTypes() {
      return this;
    }
  },
  n2 = class extends r2 {
    select(e) {
      let t = !1;
      const r = (e ?? "*")
        .split("")
        .map((n) => (/\s/.test(n) && !t ? "" : (n === '"' && (t = !t), n)))
        .join("");
      return (
        this.url.searchParams.set("select", r),
        this.headers.append("Prefer", "return=representation"),
        this
      );
    }
    order(
      e,
      {
        ascending: t = !0,
        nullsFirst: r,
        foreignTable: n,
        referencedTable: s = n,
      } = {},
    ) {
      const o = s ? `${s}.order` : "order",
        i = this.url.searchParams.get(o);
      return (
        this.url.searchParams.set(
          o,
          `${i ? `${i},` : ""}${e}.${t ? "asc" : "desc"}${r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"}`,
        ),
        this
      );
    }
    limit(e, { foreignTable: t, referencedTable: r = t } = {}) {
      const n = typeof r > "u" ? "limit" : `${r}.limit`;
      return (this.url.searchParams.set(n, `${e}`), this);
    }
    range(e, t, { foreignTable: r, referencedTable: n = r } = {}) {
      const s = typeof n > "u" ? "offset" : `${n}.offset`,
        o = typeof n > "u" ? "limit" : `${n}.limit`;
      return (
        this.url.searchParams.set(s, `${e}`),
        this.url.searchParams.set(o, `${t - e + 1}`),
        this
      );
    }
    abortSignal(e) {
      return ((this.signal = e), this);
    }
    single() {
      return (
        this.headers.set("Accept", "application/vnd.pgrst.object+json"),
        this
      );
    }
    maybeSingle() {
      return (
        this.method === "GET"
          ? this.headers.set("Accept", "application/json")
          : this.headers.set("Accept", "application/vnd.pgrst.object+json"),
        (this.isMaybeSingle = !0),
        this
      );
    }
    csv() {
      return (this.headers.set("Accept", "text/csv"), this);
    }
    geojson() {
      return (this.headers.set("Accept", "application/geo+json"), this);
    }
    explain({
      analyze: e = !1,
      verbose: t = !1,
      settings: r = !1,
      buffers: n = !1,
      wal: s = !1,
      format: o = "text",
    } = {}) {
      var i;
      const a = [
          e ? "analyze" : null,
          t ? "verbose" : null,
          r ? "settings" : null,
          n ? "buffers" : null,
          s ? "wal" : null,
        ]
          .filter(Boolean)
          .join("|"),
        l =
          (i = this.headers.get("Accept")) !== null && i !== void 0
            ? i
            : "application/json";
      return (
        this.headers.set(
          "Accept",
          `application/vnd.pgrst.plan+${o}; for="${l}"; options=${a};`,
        ),
        o === "json" ? this : this
      );
    }
    rollback() {
      return (this.headers.append("Prefer", "tx=rollback"), this);
    }
    returns() {
      return this;
    }
    maxAffected(e) {
      return (
        this.headers.append("Prefer", "handling=strict"),
        this.headers.append("Prefer", `max-affected=${e}`),
        this
      );
    }
  };
const Np = new RegExp("[,()]");
var Zn = class extends n2 {
    eq(e, t) {
      return (this.url.searchParams.append(e, `eq.${t}`), this);
    }
    neq(e, t) {
      return (this.url.searchParams.append(e, `neq.${t}`), this);
    }
    gt(e, t) {
      return (this.url.searchParams.append(e, `gt.${t}`), this);
    }
    gte(e, t) {
      return (this.url.searchParams.append(e, `gte.${t}`), this);
    }
    lt(e, t) {
      return (this.url.searchParams.append(e, `lt.${t}`), this);
    }
    lte(e, t) {
      return (this.url.searchParams.append(e, `lte.${t}`), this);
    }
    like(e, t) {
      return (this.url.searchParams.append(e, `like.${t}`), this);
    }
    likeAllOf(e, t) {
      return (
        this.url.searchParams.append(e, `like(all).{${t.join(",")}}`),
        this
      );
    }
    likeAnyOf(e, t) {
      return (
        this.url.searchParams.append(e, `like(any).{${t.join(",")}}`),
        this
      );
    }
    ilike(e, t) {
      return (this.url.searchParams.append(e, `ilike.${t}`), this);
    }
    ilikeAllOf(e, t) {
      return (
        this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`),
        this
      );
    }
    ilikeAnyOf(e, t) {
      return (
        this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`),
        this
      );
    }
    regexMatch(e, t) {
      return (this.url.searchParams.append(e, `match.${t}`), this);
    }
    regexIMatch(e, t) {
      return (this.url.searchParams.append(e, `imatch.${t}`), this);
    }
    is(e, t) {
      return (this.url.searchParams.append(e, `is.${t}`), this);
    }
    isDistinct(e, t) {
      return (this.url.searchParams.append(e, `isdistinct.${t}`), this);
    }
    in(e, t) {
      const r = Array.from(new Set(t))
        .map((n) => (typeof n == "string" && Np.test(n) ? `"${n}"` : `${n}`))
        .join(",");
      return (this.url.searchParams.append(e, `in.(${r})`), this);
    }
    notIn(e, t) {
      const r = Array.from(new Set(t))
        .map((n) => (typeof n == "string" && Np.test(n) ? `"${n}"` : `${n}`))
        .join(",");
      return (this.url.searchParams.append(e, `not.in.(${r})`), this);
    }
    contains(e, t) {
      return (
        typeof t == "string"
          ? this.url.searchParams.append(e, `cs.${t}`)
          : Array.isArray(t)
            ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`)
            : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`),
        this
      );
    }
    containedBy(e, t) {
      return (
        typeof t == "string"
          ? this.url.searchParams.append(e, `cd.${t}`)
          : Array.isArray(t)
            ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`)
            : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`),
        this
      );
    }
    rangeGt(e, t) {
      return (this.url.searchParams.append(e, `sr.${t}`), this);
    }
    rangeGte(e, t) {
      return (this.url.searchParams.append(e, `nxl.${t}`), this);
    }
    rangeLt(e, t) {
      return (this.url.searchParams.append(e, `sl.${t}`), this);
    }
    rangeLte(e, t) {
      return (this.url.searchParams.append(e, `nxr.${t}`), this);
    }
    rangeAdjacent(e, t) {
      return (this.url.searchParams.append(e, `adj.${t}`), this);
    }
    overlaps(e, t) {
      return (
        typeof t == "string"
          ? this.url.searchParams.append(e, `ov.${t}`)
          : this.url.searchParams.append(e, `ov.{${t.join(",")}}`),
        this
      );
    }
    textSearch(e, t, { config: r, type: n } = {}) {
      let s = "";
      n === "plain"
        ? (s = "pl")
        : n === "phrase"
          ? (s = "ph")
          : n === "websearch" && (s = "w");
      const o = r === void 0 ? "" : `(${r})`;
      return (this.url.searchParams.append(e, `${s}fts${o}.${t}`), this);
    }
    match(e) {
      return (
        Object.entries(e).forEach(([t, r]) => {
          this.url.searchParams.append(t, `eq.${r}`);
        }),
        this
      );
    }
    not(e, t, r) {
      return (this.url.searchParams.append(e, `not.${t}.${r}`), this);
    }
    or(e, { foreignTable: t, referencedTable: r = t } = {}) {
      const n = r ? `${r}.or` : "or";
      return (this.url.searchParams.append(n, `(${e})`), this);
    }
    filter(e, t, r) {
      return (this.url.searchParams.append(e, `${t}.${r}`), this);
    }
  },
  s2 = class {
    constructor(e, { headers: t = {}, schema: r, fetch: n }) {
      ((this.url = e),
        (this.headers = new Headers(t)),
        (this.schema = r),
        (this.fetch = n));
    }
    cloneRequestState() {
      return {
        url: new URL(this.url.toString()),
        headers: new Headers(this.headers),
      };
    }
    select(e, t) {
      const { head: r = !1, count: n } = t ?? {},
        s = r ? "HEAD" : "GET";
      let o = !1;
      const i = (e ?? "*")
          .split("")
          .map((u) => (/\s/.test(u) && !o ? "" : (u === '"' && (o = !o), u)))
          .join(""),
        { url: a, headers: l } = this.cloneRequestState();
      return (
        a.searchParams.set("select", i),
        n && l.append("Prefer", `count=${n}`),
        new Zn({
          method: s,
          url: a,
          headers: l,
          schema: this.schema,
          fetch: this.fetch,
        })
      );
    }
    insert(e, { count: t, defaultToNull: r = !0 } = {}) {
      var n;
      const s = "POST",
        { url: o, headers: i } = this.cloneRequestState();
      if (
        (t && i.append("Prefer", `count=${t}`),
        r || i.append("Prefer", "missing=default"),
        Array.isArray(e))
      ) {
        const a = e.reduce((l, u) => l.concat(Object.keys(u)), []);
        if (a.length > 0) {
          const l = [...new Set(a)].map((u) => `"${u}"`);
          o.searchParams.set("columns", l.join(","));
        }
      }
      return new Zn({
        method: s,
        url: o,
        headers: i,
        schema: this.schema,
        body: e,
        fetch: (n = this.fetch) !== null && n !== void 0 ? n : fetch,
      });
    }
    upsert(
      e,
      {
        onConflict: t,
        ignoreDuplicates: r = !1,
        count: n,
        defaultToNull: s = !0,
      } = {},
    ) {
      var o;
      const i = "POST",
        { url: a, headers: l } = this.cloneRequestState();
      if (
        (l.append("Prefer", `resolution=${r ? "ignore" : "merge"}-duplicates`),
        t !== void 0 && a.searchParams.set("on_conflict", t),
        n && l.append("Prefer", `count=${n}`),
        s || l.append("Prefer", "missing=default"),
        Array.isArray(e))
      ) {
        const u = e.reduce((c, p) => c.concat(Object.keys(p)), []);
        if (u.length > 0) {
          const c = [...new Set(u)].map((p) => `"${p}"`);
          a.searchParams.set("columns", c.join(","));
        }
      }
      return new Zn({
        method: i,
        url: a,
        headers: l,
        schema: this.schema,
        body: e,
        fetch: (o = this.fetch) !== null && o !== void 0 ? o : fetch,
      });
    }
    update(e, { count: t } = {}) {
      var r;
      const n = "PATCH",
        { url: s, headers: o } = this.cloneRequestState();
      return (
        t && o.append("Prefer", `count=${t}`),
        new Zn({
          method: n,
          url: s,
          headers: o,
          schema: this.schema,
          body: e,
          fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch,
        })
      );
    }
    delete({ count: e } = {}) {
      var t;
      const r = "DELETE",
        { url: n, headers: s } = this.cloneRequestState();
      return (
        e && s.append("Prefer", `count=${e}`),
        new Zn({
          method: r,
          url: n,
          headers: s,
          schema: this.schema,
          fetch: (t = this.fetch) !== null && t !== void 0 ? t : fetch,
        })
      );
    }
  },
  o2 = class Ev {
    constructor(t, { headers: r = {}, schema: n, fetch: s } = {}) {
      ((this.url = t),
        (this.headers = new Headers(r)),
        (this.schemaName = n),
        (this.fetch = s));
    }
    from(t) {
      if (!t || typeof t != "string" || t.trim() === "")
        throw new Error(
          "Invalid relation name: relation must be a non-empty string.",
        );
      return new s2(new URL(`${this.url}/${t}`), {
        headers: new Headers(this.headers),
        schema: this.schemaName,
        fetch: this.fetch,
      });
    }
    schema(t) {
      return new Ev(this.url, {
        headers: this.headers,
        schema: t,
        fetch: this.fetch,
      });
    }
    rpc(t, r = {}, { head: n = !1, get: s = !1, count: o } = {}) {
      var i;
      let a;
      const l = new URL(`${this.url}/rpc/${t}`);
      let u;
      const c = (d) =>
          d !== null &&
          typeof d == "object" &&
          (!Array.isArray(d) || d.some(c)),
        p = n && Object.values(r).some(c);
      p
        ? ((a = "POST"), (u = r))
        : n || s
          ? ((a = n ? "HEAD" : "GET"),
            Object.entries(r)
              .filter(([d, w]) => w !== void 0)
              .map(([d, w]) => [
                d,
                Array.isArray(w) ? `{${w.join(",")}}` : `${w}`,
              ])
              .forEach(([d, w]) => {
                l.searchParams.append(d, w);
              }))
          : ((a = "POST"), (u = r));
      const f = new Headers(this.headers);
      return (
        p
          ? f.set("Prefer", o ? `count=${o},return=minimal` : "return=minimal")
          : o && f.set("Prefer", `count=${o}`),
        new Zn({
          method: a,
          url: l,
          headers: f,
          schema: this.schemaName,
          body: u,
          fetch: (i = this.fetch) !== null && i !== void 0 ? i : fetch,
        })
      );
    }
  };
class i2 {
  constructor() {}
  static detectEnvironment() {
    var t;
    if (typeof WebSocket < "u")
      return { type: "native", constructor: WebSocket };
    if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u")
      return { type: "native", constructor: globalThis.WebSocket };
    if (typeof global < "u" && typeof global.WebSocket < "u")
      return { type: "native", constructor: global.WebSocket };
    if (
      typeof globalThis < "u" &&
      typeof globalThis.WebSocketPair < "u" &&
      typeof globalThis.WebSocket > "u"
    )
      return {
        type: "cloudflare",
        error:
          "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround:
          "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.",
      };
    if (
      (typeof globalThis < "u" && globalThis.EdgeRuntime) ||
      (typeof navigator < "u" &&
        !((t = navigator.userAgent) === null || t === void 0) &&
        t.includes("Vercel-Edge"))
    )
      return {
        type: "unsupported",
        error:
          "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround:
          "Use serverless functions or a different deployment target for WebSocket functionality.",
      };
    const r = globalThis.process;
    if (r) {
      const n = r.versions;
      if (n && n.node) {
        const s = n.node,
          o = parseInt(s.replace(/^v/, "").split(".")[0]);
        return o >= 22
          ? typeof globalThis.WebSocket < "u"
            ? { type: "native", constructor: globalThis.WebSocket }
            : {
                type: "unsupported",
                error: `Node.js ${o} detected but native WebSocket not found.`,
                workaround:
                  "Provide a WebSocket implementation via the transport option.",
              }
          : {
              type: "unsupported",
              error: `Node.js ${o} detected without native WebSocket support.`,
              workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`,
            };
      }
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround:
        "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.",
    };
  }
  static getWebSocketConstructor() {
    const t = this.detectEnvironment();
    if (t.constructor) return t.constructor;
    let r = t.error || "WebSocket not supported in this environment.";
    throw (
      t.workaround &&
        (r += `

Suggested solution: ${t.workaround}`),
      new Error(r)
    );
  }
  static createWebSocket(t, r) {
    const n = this.getWebSocketConstructor();
    return new n(t, r);
  }
  static isWebSocketSupported() {
    try {
      const t = this.detectEnvironment();
      return t.type === "native" || t.type === "ws";
    } catch {
      return !1;
    }
  }
}
const a2 = "2.91.0",
  l2 = `realtime-js/${a2}`,
  u2 = "1.0.0",
  Sv = "2.0.0",
  jp = Sv,
  qc = 1e4,
  c2 = 1e3,
  d2 = 100;
var Nr;
(function (e) {
  ((e[(e.connecting = 0)] = "connecting"),
    (e[(e.open = 1)] = "open"),
    (e[(e.closing = 2)] = "closing"),
    (e[(e.closed = 3)] = "closed"));
})(Nr || (Nr = {}));
var Se;
(function (e) {
  ((e.closed = "closed"),
    (e.errored = "errored"),
    (e.joined = "joined"),
    (e.joining = "joining"),
    (e.leaving = "leaving"));
})(Se || (Se = {}));
var It;
(function (e) {
  ((e.close = "phx_close"),
    (e.error = "phx_error"),
    (e.join = "phx_join"),
    (e.reply = "phx_reply"),
    (e.leave = "phx_leave"),
    (e.access_token = "access_token"));
})(It || (It = {}));
var Kc;
(function (e) {
  e.websocket = "websocket";
})(Kc || (Kc = {}));
var gn;
(function (e) {
  ((e.Connecting = "connecting"),
    (e.Open = "open"),
    (e.Closing = "closing"),
    (e.Closed = "closed"));
})(gn || (gn = {}));
class h2 {
  constructor(t) {
    ((this.HEADER_LENGTH = 1),
      (this.USER_BROADCAST_PUSH_META_LENGTH = 6),
      (this.KINDS = { userBroadcastPush: 3, userBroadcast: 4 }),
      (this.BINARY_ENCODING = 0),
      (this.JSON_ENCODING = 1),
      (this.BROADCAST_EVENT = "broadcast"),
      (this.allowedMetadataKeys = []),
      (this.allowedMetadataKeys = t ?? []));
  }
  encode(t, r) {
    if (
      t.event === this.BROADCAST_EVENT &&
      !(t.payload instanceof ArrayBuffer) &&
      typeof t.payload.event == "string"
    )
      return r(this._binaryEncodeUserBroadcastPush(t));
    let n = [t.join_ref, t.ref, t.topic, t.event, t.payload];
    return r(JSON.stringify(n));
  }
  _binaryEncodeUserBroadcastPush(t) {
    var r;
    return this._isArrayBuffer(
      (r = t.payload) === null || r === void 0 ? void 0 : r.payload,
    )
      ? this._encodeBinaryUserBroadcastPush(t)
      : this._encodeJsonUserBroadcastPush(t);
  }
  _encodeBinaryUserBroadcastPush(t) {
    var r, n;
    const s =
      (n = (r = t.payload) === null || r === void 0 ? void 0 : r.payload) !==
        null && n !== void 0
        ? n
        : new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(t, this.BINARY_ENCODING, s);
  }
  _encodeJsonUserBroadcastPush(t) {
    var r, n;
    const s =
        (n = (r = t.payload) === null || r === void 0 ? void 0 : r.payload) !==
          null && n !== void 0
          ? n
          : {},
      i = new TextEncoder().encode(JSON.stringify(s)).buffer;
    return this._encodeUserBroadcastPush(t, this.JSON_ENCODING, i);
  }
  _encodeUserBroadcastPush(t, r, n) {
    var s, o;
    const i = t.topic,
      a = (s = t.ref) !== null && s !== void 0 ? s : "",
      l = (o = t.join_ref) !== null && o !== void 0 ? o : "",
      u = t.payload.event,
      c = this.allowedMetadataKeys
        ? this._pick(t.payload, this.allowedMetadataKeys)
        : {},
      p = Object.keys(c).length === 0 ? "" : JSON.stringify(c);
    if (l.length > 255)
      throw new Error(`joinRef length ${l.length} exceeds maximum of 255`);
    if (a.length > 255)
      throw new Error(`ref length ${a.length} exceeds maximum of 255`);
    if (i.length > 255)
      throw new Error(`topic length ${i.length} exceeds maximum of 255`);
    if (u.length > 255)
      throw new Error(`userEvent length ${u.length} exceeds maximum of 255`);
    if (p.length > 255)
      throw new Error(`metadata length ${p.length} exceeds maximum of 255`);
    const f =
        this.USER_BROADCAST_PUSH_META_LENGTH +
        l.length +
        a.length +
        i.length +
        u.length +
        p.length,
      d = new ArrayBuffer(this.HEADER_LENGTH + f);
    let w = new DataView(d),
      y = 0;
    (w.setUint8(y++, this.KINDS.userBroadcastPush),
      w.setUint8(y++, l.length),
      w.setUint8(y++, a.length),
      w.setUint8(y++, i.length),
      w.setUint8(y++, u.length),
      w.setUint8(y++, p.length),
      w.setUint8(y++, r),
      Array.from(l, (g) => w.setUint8(y++, g.charCodeAt(0))),
      Array.from(a, (g) => w.setUint8(y++, g.charCodeAt(0))),
      Array.from(i, (g) => w.setUint8(y++, g.charCodeAt(0))),
      Array.from(u, (g) => w.setUint8(y++, g.charCodeAt(0))),
      Array.from(p, (g) => w.setUint8(y++, g.charCodeAt(0))));
    var x = new Uint8Array(d.byteLength + n.byteLength);
    return (
      x.set(new Uint8Array(d), 0),
      x.set(new Uint8Array(n), d.byteLength),
      x.buffer
    );
  }
  decode(t, r) {
    if (this._isArrayBuffer(t)) {
      let n = this._binaryDecode(t);
      return r(n);
    }
    if (typeof t == "string") {
      const n = JSON.parse(t),
        [s, o, i, a, l] = n;
      return r({ join_ref: s, ref: o, topic: i, event: a, payload: l });
    }
    return r({});
  }
  _binaryDecode(t) {
    const r = new DataView(t),
      n = r.getUint8(0),
      s = new TextDecoder();
    switch (n) {
      case this.KINDS.userBroadcast:
        return this._decodeUserBroadcast(t, r, s);
    }
  }
  _decodeUserBroadcast(t, r, n) {
    const s = r.getUint8(1),
      o = r.getUint8(2),
      i = r.getUint8(3),
      a = r.getUint8(4);
    let l = this.HEADER_LENGTH + 4;
    const u = n.decode(t.slice(l, l + s));
    l = l + s;
    const c = n.decode(t.slice(l, l + o));
    l = l + o;
    const p = n.decode(t.slice(l, l + i));
    l = l + i;
    const f = t.slice(l, t.byteLength),
      d = a === this.JSON_ENCODING ? JSON.parse(n.decode(f)) : f,
      w = { type: this.BROADCAST_EVENT, event: c, payload: d };
    return (
      i > 0 && (w.meta = JSON.parse(p)),
      {
        join_ref: null,
        ref: null,
        topic: u,
        event: this.BROADCAST_EVENT,
        payload: w,
      }
    );
  }
  _isArrayBuffer(t) {
    var r;
    return (
      t instanceof ArrayBuffer ||
      ((r = t == null ? void 0 : t.constructor) === null || r === void 0
        ? void 0
        : r.name) === "ArrayBuffer"
    );
  }
  _pick(t, r) {
    return !t || typeof t != "object"
      ? {}
      : Object.fromEntries(Object.entries(t).filter(([n]) => r.includes(n)));
  }
}
class kv {
  constructor(t, r) {
    ((this.callback = t),
      (this.timerCalc = r),
      (this.timer = void 0),
      (this.tries = 0),
      (this.callback = t),
      (this.timerCalc = r));
  }
  reset() {
    ((this.tries = 0), clearTimeout(this.timer), (this.timer = void 0));
  }
  scheduleTimeout() {
    (clearTimeout(this.timer),
      (this.timer = setTimeout(
        () => {
          ((this.tries = this.tries + 1), this.callback());
        },
        this.timerCalc(this.tries + 1),
      )));
  }
}
var oe;
(function (e) {
  ((e.abstime = "abstime"),
    (e.bool = "bool"),
    (e.date = "date"),
    (e.daterange = "daterange"),
    (e.float4 = "float4"),
    (e.float8 = "float8"),
    (e.int2 = "int2"),
    (e.int4 = "int4"),
    (e.int4range = "int4range"),
    (e.int8 = "int8"),
    (e.int8range = "int8range"),
    (e.json = "json"),
    (e.jsonb = "jsonb"),
    (e.money = "money"),
    (e.numeric = "numeric"),
    (e.oid = "oid"),
    (e.reltime = "reltime"),
    (e.text = "text"),
    (e.time = "time"),
    (e.timestamp = "timestamp"),
    (e.timestamptz = "timestamptz"),
    (e.timetz = "timetz"),
    (e.tsrange = "tsrange"),
    (e.tstzrange = "tstzrange"));
})(oe || (oe = {}));
const Ap = (e, t, r = {}) => {
    var n;
    const s = (n = r.skipTypes) !== null && n !== void 0 ? n : [];
    return t
      ? Object.keys(t).reduce((o, i) => ((o[i] = f2(i, e, t, s)), o), {})
      : {};
  },
  f2 = (e, t, r, n) => {
    const s = t.find((a) => a.name === e),
      o = s == null ? void 0 : s.type,
      i = r[e];
    return o && !n.includes(o) ? Cv(o, i) : Gc(i);
  },
  Cv = (e, t) => {
    if (e.charAt(0) === "_") {
      const r = e.slice(1, e.length);
      return y2(t, r);
    }
    switch (e) {
      case oe.bool:
        return p2(t);
      case oe.float4:
      case oe.float8:
      case oe.int2:
      case oe.int4:
      case oe.int8:
      case oe.numeric:
      case oe.oid:
        return m2(t);
      case oe.json:
      case oe.jsonb:
        return g2(t);
      case oe.timestamp:
        return v2(t);
      case oe.abstime:
      case oe.date:
      case oe.daterange:
      case oe.int4range:
      case oe.int8range:
      case oe.money:
      case oe.reltime:
      case oe.text:
      case oe.time:
      case oe.timestamptz:
      case oe.timetz:
      case oe.tsrange:
      case oe.tstzrange:
        return Gc(t);
      default:
        return Gc(t);
    }
  },
  Gc = (e) => e,
  p2 = (e) => {
    switch (e) {
      case "t":
        return !0;
      case "f":
        return !1;
      default:
        return e;
    }
  },
  m2 = (e) => {
    if (typeof e == "string") {
      const t = parseFloat(e);
      if (!Number.isNaN(t)) return t;
    }
    return e;
  },
  g2 = (e) => {
    if (typeof e == "string")
      try {
        return JSON.parse(e);
      } catch {
        return e;
      }
    return e;
  },
  y2 = (e, t) => {
    if (typeof e != "string") return e;
    const r = e.length - 1,
      n = e[r];
    if (e[0] === "{" && n === "}") {
      let o;
      const i = e.slice(1, r);
      try {
        o = JSON.parse("[" + i + "]");
      } catch {
        o = i ? i.split(",") : [];
      }
      return o.map((a) => Cv(t, a));
    }
    return e;
  },
  v2 = (e) => (typeof e == "string" ? e.replace(" ", "T") : e),
  Tv = (e) => {
    const t = new URL(e);
    return (
      (t.protocol = t.protocol.replace(/^ws/i, "http")),
      (t.pathname = t.pathname
        .replace(/\/+$/, "")
        .replace(/\/socket\/websocket$/i, "")
        .replace(/\/socket$/i, "")
        .replace(/\/websocket$/i, "")),
      t.pathname === "" || t.pathname === "/"
        ? (t.pathname = "/api/broadcast")
        : (t.pathname = t.pathname + "/api/broadcast"),
      t.href
    );
  };
class xu {
  constructor(t, r, n = {}, s = qc) {
    ((this.channel = t),
      (this.event = r),
      (this.payload = n),
      (this.timeout = s),
      (this.sent = !1),
      (this.timeoutTimer = void 0),
      (this.ref = ""),
      (this.receivedResp = null),
      (this.recHooks = []),
      (this.refEvent = null));
  }
  resend(t) {
    ((this.timeout = t),
      this._cancelRefEvent(),
      (this.ref = ""),
      (this.refEvent = null),
      (this.receivedResp = null),
      (this.sent = !1),
      this.send());
  }
  send() {
    this._hasReceived("timeout") ||
      (this.startTimeout(),
      (this.sent = !0),
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload,
        ref: this.ref,
        join_ref: this.channel._joinRef(),
      }));
  }
  updatePayload(t) {
    this.payload = Object.assign(Object.assign({}, this.payload), t);
  }
  receive(t, r) {
    var n;
    return (
      this._hasReceived(t) &&
        r(
          (n = this.receivedResp) === null || n === void 0
            ? void 0
            : n.response,
        ),
      this.recHooks.push({ status: t, callback: r }),
      this
    );
  }
  startTimeout() {
    if (this.timeoutTimer) return;
    ((this.ref = this.channel.socket._makeRef()),
      (this.refEvent = this.channel._replyEventName(this.ref)));
    const t = (r) => {
      (this._cancelRefEvent(),
        this._cancelTimeout(),
        (this.receivedResp = r),
        this._matchReceive(r));
    };
    (this.channel._on(this.refEvent, {}, t),
      (this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout)));
  }
  trigger(t, r) {
    this.refEvent &&
      this.channel._trigger(this.refEvent, { status: t, response: r });
  }
  destroy() {
    (this._cancelRefEvent(), this._cancelTimeout());
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    (clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0));
  }
  _matchReceive({ status: t, response: r }) {
    this.recHooks.filter((n) => n.status === t).forEach((n) => n.callback(r));
  }
  _hasReceived(t) {
    return this.receivedResp && this.receivedResp.status === t;
  }
}
var Op;
(function (e) {
  ((e.SYNC = "sync"), (e.JOIN = "join"), (e.LEAVE = "leave"));
})(Op || (Op = {}));
class Ro {
  constructor(t, r) {
    ((this.channel = t),
      (this.state = {}),
      (this.pendingDiffs = []),
      (this.joinRef = null),
      (this.enabled = !1),
      (this.caller = {
        onJoin: () => {},
        onLeave: () => {},
        onSync: () => {},
      }));
    const n = (r == null ? void 0 : r.events) || {
      state: "presence_state",
      diff: "presence_diff",
    };
    (this.channel._on(n.state, {}, (s) => {
      const { onJoin: o, onLeave: i, onSync: a } = this.caller;
      ((this.joinRef = this.channel._joinRef()),
        (this.state = Ro.syncState(this.state, s, o, i)),
        this.pendingDiffs.forEach((l) => {
          this.state = Ro.syncDiff(this.state, l, o, i);
        }),
        (this.pendingDiffs = []),
        a());
    }),
      this.channel._on(n.diff, {}, (s) => {
        const { onJoin: o, onLeave: i, onSync: a } = this.caller;
        this.inPendingSyncState()
          ? this.pendingDiffs.push(s)
          : ((this.state = Ro.syncDiff(this.state, s, o, i)), a());
      }),
      this.onJoin((s, o, i) => {
        this.channel._trigger("presence", {
          event: "join",
          key: s,
          currentPresences: o,
          newPresences: i,
        });
      }),
      this.onLeave((s, o, i) => {
        this.channel._trigger("presence", {
          event: "leave",
          key: s,
          currentPresences: o,
          leftPresences: i,
        });
      }),
      this.onSync(() => {
        this.channel._trigger("presence", { event: "sync" });
      }));
  }
  static syncState(t, r, n, s) {
    const o = this.cloneDeep(t),
      i = this.transformState(r),
      a = {},
      l = {};
    return (
      this.map(o, (u, c) => {
        i[u] || (l[u] = c);
      }),
      this.map(i, (u, c) => {
        const p = o[u];
        if (p) {
          const f = c.map((x) => x.presence_ref),
            d = p.map((x) => x.presence_ref),
            w = c.filter((x) => d.indexOf(x.presence_ref) < 0),
            y = p.filter((x) => f.indexOf(x.presence_ref) < 0);
          (w.length > 0 && (a[u] = w), y.length > 0 && (l[u] = y));
        } else a[u] = c;
      }),
      this.syncDiff(o, { joins: a, leaves: l }, n, s)
    );
  }
  static syncDiff(t, r, n, s) {
    const { joins: o, leaves: i } = {
      joins: this.transformState(r.joins),
      leaves: this.transformState(r.leaves),
    };
    return (
      n || (n = () => {}),
      s || (s = () => {}),
      this.map(o, (a, l) => {
        var u;
        const c = (u = t[a]) !== null && u !== void 0 ? u : [];
        if (((t[a] = this.cloneDeep(l)), c.length > 0)) {
          const p = t[a].map((d) => d.presence_ref),
            f = c.filter((d) => p.indexOf(d.presence_ref) < 0);
          t[a].unshift(...f);
        }
        n(a, c, l);
      }),
      this.map(i, (a, l) => {
        let u = t[a];
        if (!u) return;
        const c = l.map((p) => p.presence_ref);
        ((u = u.filter((p) => c.indexOf(p.presence_ref) < 0)),
          (t[a] = u),
          s(a, u, l),
          u.length === 0 && delete t[a]);
      }),
      t
    );
  }
  static map(t, r) {
    return Object.getOwnPropertyNames(t).map((n) => r(n, t[n]));
  }
  static transformState(t) {
    return (
      (t = this.cloneDeep(t)),
      Object.getOwnPropertyNames(t).reduce((r, n) => {
        const s = t[n];
        return (
          "metas" in s
            ? (r[n] = s.metas.map(
                (o) => (
                  (o.presence_ref = o.phx_ref),
                  delete o.phx_ref,
                  delete o.phx_ref_prev,
                  o
                ),
              ))
            : (r[n] = s),
          r
        );
      }, {})
    );
  }
  static cloneDeep(t) {
    return JSON.parse(JSON.stringify(t));
  }
  onJoin(t) {
    this.caller.onJoin = t;
  }
  onLeave(t) {
    this.caller.onLeave = t;
  }
  onSync(t) {
    this.caller.onSync = t;
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var Ip;
(function (e) {
  ((e.ALL = "*"),
    (e.INSERT = "INSERT"),
    (e.UPDATE = "UPDATE"),
    (e.DELETE = "DELETE"));
})(Ip || (Ip = {}));
var No;
(function (e) {
  ((e.BROADCAST = "broadcast"),
    (e.PRESENCE = "presence"),
    (e.POSTGRES_CHANGES = "postgres_changes"),
    (e.SYSTEM = "system"));
})(No || (No = {}));
var sr;
(function (e) {
  ((e.SUBSCRIBED = "SUBSCRIBED"),
    (e.TIMED_OUT = "TIMED_OUT"),
    (e.CLOSED = "CLOSED"),
    (e.CHANNEL_ERROR = "CHANNEL_ERROR"));
})(sr || (sr = {}));
class ps {
  constructor(t, r = { config: {} }, n) {
    var s, o;
    if (
      ((this.topic = t),
      (this.params = r),
      (this.socket = n),
      (this.bindings = {}),
      (this.state = Se.closed),
      (this.joinedOnce = !1),
      (this.pushBuffer = []),
      (this.subTopic = t.replace(/^realtime:/i, "")),
      (this.params.config = Object.assign(
        {
          broadcast: { ack: !1, self: !1 },
          presence: { key: "", enabled: !1 },
          private: !1,
        },
        r.config,
      )),
      (this.timeout = this.socket.timeout),
      (this.joinPush = new xu(this, It.join, this.params, this.timeout)),
      (this.rejoinTimer = new kv(
        () => this._rejoinUntilConnected(),
        this.socket.reconnectAfterMs,
      )),
      this.joinPush.receive("ok", () => {
        ((this.state = Se.joined),
          this.rejoinTimer.reset(),
          this.pushBuffer.forEach((i) => i.send()),
          (this.pushBuffer = []));
      }),
      this._onClose(() => {
        (this.rejoinTimer.reset(),
          this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
          (this.state = Se.closed),
          this.socket._remove(this));
      }),
      this._onError((i) => {
        this._isLeaving() ||
          this._isClosed() ||
          (this.socket.log("channel", `error ${this.topic}`, i),
          (this.state = Se.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive("timeout", () => {
        this._isJoining() &&
          (this.socket.log(
            "channel",
            `timeout ${this.topic}`,
            this.joinPush.timeout,
          ),
          (this.state = Se.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive("error", (i) => {
        this._isLeaving() ||
          this._isClosed() ||
          (this.socket.log("channel", `error ${this.topic}`, i),
          (this.state = Se.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this._on(It.reply, {}, (i, a) => {
        this._trigger(this._replyEventName(a), i);
      }),
      (this.presence = new Ro(this)),
      (this.broadcastEndpointURL = Tv(this.socket.endPoint)),
      (this.private = this.params.config.private || !1),
      !this.private &&
        !(
          (o =
            (s = this.params.config) === null || s === void 0
              ? void 0
              : s.broadcast) === null || o === void 0
        ) &&
        o.replay)
    )
      throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`;
  }
  subscribe(t, r = this.timeout) {
    var n, s, o;
    if (
      (this.socket.isConnected() || this.socket.connect(),
      this.state == Se.closed)
    ) {
      const {
          config: { broadcast: i, presence: a, private: l },
        } = this.params,
        u =
          (s =
            (n = this.bindings.postgres_changes) === null || n === void 0
              ? void 0
              : n.map((d) => d.filter)) !== null && s !== void 0
            ? s
            : [],
        c =
          (!!this.bindings[No.PRESENCE] &&
            this.bindings[No.PRESENCE].length > 0) ||
          ((o = this.params.config.presence) === null || o === void 0
            ? void 0
            : o.enabled) === !0,
        p = {},
        f = {
          broadcast: i,
          presence: Object.assign(Object.assign({}, a), { enabled: c }),
          postgres_changes: u,
          private: l,
        };
      (this.socket.accessTokenValue &&
        (p.access_token = this.socket.accessTokenValue),
        this._onError((d) => (t == null ? void 0 : t(sr.CHANNEL_ERROR, d))),
        this._onClose(() => (t == null ? void 0 : t(sr.CLOSED))),
        this.updateJoinPayload(Object.assign({ config: f }, p)),
        (this.joinedOnce = !0),
        this._rejoin(r),
        this.joinPush
          .receive("ok", async ({ postgres_changes: d }) => {
            var w;
            if (
              (this.socket._isManualToken() || this.socket.setAuth(),
              d === void 0)
            ) {
              t == null || t(sr.SUBSCRIBED);
              return;
            } else {
              const y = this.bindings.postgres_changes,
                x =
                  (w = y == null ? void 0 : y.length) !== null && w !== void 0
                    ? w
                    : 0,
                g = [];
              for (let m = 0; m < x; m++) {
                const v = y[m],
                  {
                    filter: { event: b, schema: E, table: S, filter: k },
                  } = v,
                  T = d && d[m];
                if (
                  T &&
                  T.event === b &&
                  ps.isFilterValueEqual(T.schema, E) &&
                  ps.isFilterValueEqual(T.table, S) &&
                  ps.isFilterValueEqual(T.filter, k)
                )
                  g.push(Object.assign(Object.assign({}, v), { id: T.id }));
                else {
                  (this.unsubscribe(),
                    (this.state = Se.errored),
                    t == null ||
                      t(
                        sr.CHANNEL_ERROR,
                        new Error(
                          "mismatch between server and client bindings for postgres changes",
                        ),
                      ));
                  return;
                }
              }
              ((this.bindings.postgres_changes = g), t && t(sr.SUBSCRIBED));
              return;
            }
          })
          .receive("error", (d) => {
            ((this.state = Se.errored),
              t == null ||
                t(
                  sr.CHANNEL_ERROR,
                  new Error(
                    JSON.stringify(Object.values(d).join(", ") || "error"),
                  ),
                ));
          })
          .receive("timeout", () => {
            t == null || t(sr.TIMED_OUT);
          }));
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(t, r = {}) {
    return await this.send(
      { type: "presence", event: "track", payload: t },
      r.timeout || this.timeout,
    );
  }
  async untrack(t = {}) {
    return await this.send({ type: "presence", event: "untrack" }, t);
  }
  on(t, r, n) {
    return (
      this.state === Se.joined &&
        t === No.PRESENCE &&
        (this.socket.log(
          "channel",
          `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`,
        ),
        this.unsubscribe().then(async () => await this.subscribe())),
      this._on(t, r, n)
    );
  }
  async httpSend(t, r, n = {}) {
    var s;
    if (r == null) return Promise.reject("Payload is required for httpSend()");
    const o = {
      apikey: this.socket.apiKey ? this.socket.apiKey : "",
      "Content-Type": "application/json",
    };
    this.socket.accessTokenValue &&
      (o.Authorization = `Bearer ${this.socket.accessTokenValue}`);
    const i = {
        method: "POST",
        headers: o,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: t,
              payload: r,
              private: this.private,
            },
          ],
        }),
      },
      a = await this._fetchWithTimeout(
        this.broadcastEndpointURL,
        i,
        (s = n.timeout) !== null && s !== void 0 ? s : this.timeout,
      );
    if (a.status === 202) return { success: !0 };
    let l = a.statusText;
    try {
      const u = await a.json();
      l = u.error || u.message || l;
    } catch {}
    return Promise.reject(new Error(l));
  }
  async send(t, r = {}) {
    var n, s;
    if (!this._canPush() && t.type === "broadcast") {
      console.warn(
        "Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.",
      );
      const { event: o, payload: i } = t,
        a = {
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json",
        };
      this.socket.accessTokenValue &&
        (a.Authorization = `Bearer ${this.socket.accessTokenValue}`);
      const l = {
        method: "POST",
        headers: a,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: o,
              payload: i,
              private: this.private,
            },
          ],
        }),
      };
      try {
        const u = await this._fetchWithTimeout(
          this.broadcastEndpointURL,
          l,
          (n = r.timeout) !== null && n !== void 0 ? n : this.timeout,
        );
        return (
          await ((s = u.body) === null || s === void 0 ? void 0 : s.cancel()),
          u.ok ? "ok" : "error"
        );
      } catch (u) {
        return u.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((o) => {
        var i, a, l;
        const u = this._push(t.type, t, r.timeout || this.timeout);
        (t.type === "broadcast" &&
          !(
            !(
              (l =
                (a =
                  (i = this.params) === null || i === void 0
                    ? void 0
                    : i.config) === null || a === void 0
                  ? void 0
                  : a.broadcast) === null || l === void 0
            ) && l.ack
          ) &&
          o("ok"),
          u.receive("ok", () => o("ok")),
          u.receive("error", () => o("error")),
          u.receive("timeout", () => o("timed out")));
      });
  }
  updateJoinPayload(t) {
    this.joinPush.updatePayload(t);
  }
  unsubscribe(t = this.timeout) {
    this.state = Se.leaving;
    const r = () => {
      (this.socket.log("channel", `leave ${this.topic}`),
        this._trigger(It.close, "leave", this._joinRef()));
    };
    this.joinPush.destroy();
    let n = null;
    return new Promise((s) => {
      ((n = new xu(this, It.leave, {}, t)),
        n
          .receive("ok", () => {
            (r(), s("ok"));
          })
          .receive("timeout", () => {
            (r(), s("timed out"));
          })
          .receive("error", () => {
            s("error");
          }),
        n.send(),
        this._canPush() || n.trigger("ok", {}));
    }).finally(() => {
      n == null || n.destroy();
    });
  }
  teardown() {
    (this.pushBuffer.forEach((t) => t.destroy()),
      (this.pushBuffer = []),
      this.rejoinTimer.reset(),
      this.joinPush.destroy(),
      (this.state = Se.closed),
      (this.bindings = {}));
  }
  async _fetchWithTimeout(t, r, n) {
    const s = new AbortController(),
      o = setTimeout(() => s.abort(), n),
      i = await this.socket.fetch(
        t,
        Object.assign(Object.assign({}, r), { signal: s.signal }),
      );
    return (clearTimeout(o), i);
  }
  _push(t, r, n = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let s = new xu(this, t, r, n);
    return (this._canPush() ? s.send() : this._addToPushBuffer(s), s);
  }
  _addToPushBuffer(t) {
    if (
      (t.startTimeout(), this.pushBuffer.push(t), this.pushBuffer.length > d2)
    ) {
      const r = this.pushBuffer.shift();
      r &&
        (r.destroy(),
        this.socket.log(
          "channel",
          `discarded push due to buffer overflow: ${r.event}`,
          r.payload,
        ));
    }
  }
  _onMessage(t, r, n) {
    return r;
  }
  _isMember(t) {
    return this.topic === t;
  }
  _joinRef() {
    return this.joinPush.ref;
  }
  _trigger(t, r, n) {
    var s, o;
    const i = t.toLocaleLowerCase(),
      { close: a, error: l, leave: u, join: c } = It;
    if (n && [a, l, u, c].indexOf(i) >= 0 && n !== this._joinRef()) return;
    let f = this._onMessage(i, r, n);
    if (r && !f)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(i)
      ? (s = this.bindings.postgres_changes) === null ||
        s === void 0 ||
        s
          .filter((d) => {
            var w, y, x;
            return (
              ((w = d.filter) === null || w === void 0 ? void 0 : w.event) ===
                "*" ||
              ((x =
                (y = d.filter) === null || y === void 0 ? void 0 : y.event) ===
                null || x === void 0
                ? void 0
                : x.toLocaleLowerCase()) === i
            );
          })
          .map((d) => d.callback(f, n))
      : (o = this.bindings[i]) === null ||
        o === void 0 ||
        o
          .filter((d) => {
            var w, y, x, g, m, v, b, E;
            if (["broadcast", "presence", "postgres_changes"].includes(i))
              if ("id" in d) {
                const S = d.id,
                  k =
                    (w = d.filter) === null || w === void 0 ? void 0 : w.event;
                return (
                  S &&
                  ((y = r.ids) === null || y === void 0
                    ? void 0
                    : y.includes(S)) &&
                  (k === "*" ||
                    (k == null ? void 0 : k.toLocaleLowerCase()) ===
                      ((x = r.data) === null || x === void 0
                        ? void 0
                        : x.type.toLocaleLowerCase())) &&
                  (!(!((g = d.filter) === null || g === void 0) && g.table) ||
                    d.filter.table ===
                      ((m = r.data) === null || m === void 0
                        ? void 0
                        : m.table))
                );
              } else {
                const S =
                  (b =
                    (v = d == null ? void 0 : d.filter) === null || v === void 0
                      ? void 0
                      : v.event) === null || b === void 0
                    ? void 0
                    : b.toLocaleLowerCase();
                return (
                  S === "*" ||
                  S ===
                    ((E = r == null ? void 0 : r.event) === null || E === void 0
                      ? void 0
                      : E.toLocaleLowerCase())
                );
              }
            else return d.type.toLocaleLowerCase() === i;
          })
          .map((d) => {
            if (typeof f == "object" && "ids" in f) {
              const w = f.data,
                {
                  schema: y,
                  table: x,
                  commit_timestamp: g,
                  type: m,
                  errors: v,
                } = w;
              f = Object.assign(
                Object.assign(
                  {},
                  {
                    schema: y,
                    table: x,
                    commit_timestamp: g,
                    eventType: m,
                    new: {},
                    old: {},
                    errors: v,
                  },
                ),
                this._getPayloadRecords(w),
              );
            }
            d.callback(f, n);
          });
  }
  _isClosed() {
    return this.state === Se.closed;
  }
  _isJoined() {
    return this.state === Se.joined;
  }
  _isJoining() {
    return this.state === Se.joining;
  }
  _isLeaving() {
    return this.state === Se.leaving;
  }
  _replyEventName(t) {
    return `chan_reply_${t}`;
  }
  _on(t, r, n) {
    const s = t.toLocaleLowerCase(),
      o = { type: s, filter: r, callback: n };
    return (
      this.bindings[s] ? this.bindings[s].push(o) : (this.bindings[s] = [o]),
      this
    );
  }
  _off(t, r) {
    const n = t.toLocaleLowerCase();
    return (
      this.bindings[n] &&
        (this.bindings[n] = this.bindings[n].filter((s) => {
          var o;
          return !(
            ((o = s.type) === null || o === void 0
              ? void 0
              : o.toLocaleLowerCase()) === n && ps.isEqual(s.filter, r)
          );
        })),
      this
    );
  }
  static isEqual(t, r) {
    if (Object.keys(t).length !== Object.keys(r).length) return !1;
    for (const n in t) if (t[n] !== r[n]) return !1;
    return !0;
  }
  static isFilterValueEqual(t, r) {
    return (t ?? void 0) === (r ?? void 0);
  }
  _rejoinUntilConnected() {
    (this.rejoinTimer.scheduleTimeout(),
      this.socket.isConnected() && this._rejoin());
  }
  _onClose(t) {
    this._on(It.close, {}, t);
  }
  _onError(t) {
    this._on(It.error, {}, (r) => t(r));
  }
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  _rejoin(t = this.timeout) {
    this._isLeaving() ||
      (this.socket._leaveOpenTopic(this.topic),
      (this.state = Se.joining),
      this.joinPush.resend(t));
  }
  _getPayloadRecords(t) {
    const r = { new: {}, old: {} };
    return (
      (t.type === "INSERT" || t.type === "UPDATE") &&
        (r.new = Ap(t.columns, t.record)),
      (t.type === "UPDATE" || t.type === "DELETE") &&
        (r.old = Ap(t.columns, t.old_record)),
      r
    );
  }
}
const bu = () => {},
  Gi = {
    HEARTBEAT_INTERVAL: 25e3,
    RECONNECT_DELAY: 10,
    HEARTBEAT_TIMEOUT_FALLBACK: 100,
  },
  w2 = [1e3, 2e3, 5e3, 1e4],
  x2 = 1e4,
  b2 = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class _2 {
  constructor(t, r) {
    var n;
    if (
      ((this.accessTokenValue = null),
      (this.apiKey = null),
      (this._manuallySetToken = !1),
      (this.channels = new Array()),
      (this.endPoint = ""),
      (this.httpEndpoint = ""),
      (this.headers = {}),
      (this.params = {}),
      (this.timeout = qc),
      (this.transport = null),
      (this.heartbeatIntervalMs = Gi.HEARTBEAT_INTERVAL),
      (this.heartbeatTimer = void 0),
      (this.pendingHeartbeatRef = null),
      (this.heartbeatCallback = bu),
      (this.ref = 0),
      (this.reconnectTimer = null),
      (this.vsn = jp),
      (this.logger = bu),
      (this.conn = null),
      (this.sendBuffer = []),
      (this.serializer = new h2()),
      (this.stateChangeCallbacks = {
        open: [],
        close: [],
        error: [],
        message: [],
      }),
      (this.accessToken = null),
      (this._connectionState = "disconnected"),
      (this._wasManualDisconnect = !1),
      (this._authPromise = null),
      (this._heartbeatSentAt = null),
      (this._resolveFetch = (s) =>
        s ? (...o) => s(...o) : (...o) => fetch(...o)),
      !(
        !((n = r == null ? void 0 : r.params) === null || n === void 0) &&
        n.apikey
      ))
    )
      throw new Error("API key is required to connect to Realtime");
    ((this.apiKey = r.params.apikey),
      (this.endPoint = `${t}/${Kc.websocket}`),
      (this.httpEndpoint = Tv(t)),
      this._initializeOptions(r),
      this._setupReconnectionTimer(),
      (this.fetch = this._resolveFetch(r == null ? void 0 : r.fetch)));
  }
  connect() {
    if (
      !(
        this.isConnecting() ||
        this.isDisconnecting() ||
        (this.conn !== null && this.isConnected())
      )
    ) {
      if (
        (this._setConnectionState("connecting"),
        this.accessToken &&
          !this._authPromise &&
          this._setAuthSafely("connect"),
        this.transport)
      )
        this.conn = new this.transport(this.endpointURL());
      else
        try {
          this.conn = i2.createWebSocket(this.endpointURL());
        } catch (t) {
          this._setConnectionState("disconnected");
          const r = t.message;
          throw r.includes("Node.js")
            ? new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`)
            : new Error(`WebSocket not available: ${r}`);
        }
      this._setupConnectionHandlers();
    }
  }
  endpointURL() {
    return this._appendParams(
      this.endPoint,
      Object.assign({}, this.params, { vsn: this.vsn }),
    );
  }
  disconnect(t, r) {
    if (!this.isDisconnecting())
      if ((this._setConnectionState("disconnecting", !0), this.conn)) {
        const n = setTimeout(() => {
          this._setConnectionState("disconnected");
        }, 100);
        ((this.conn.onclose = () => {
          (clearTimeout(n), this._setConnectionState("disconnected"));
        }),
          typeof this.conn.close == "function" &&
            (t ? this.conn.close(t, r ?? "") : this.conn.close()),
          this._teardownConnection());
      } else this._setConnectionState("disconnected");
  }
  getChannels() {
    return this.channels;
  }
  async removeChannel(t) {
    const r = await t.unsubscribe();
    return (this.channels.length === 0 && this.disconnect(), r);
  }
  async removeAllChannels() {
    const t = await Promise.all(this.channels.map((r) => r.unsubscribe()));
    return ((this.channels = []), this.disconnect(), t);
  }
  log(t, r, n) {
    this.logger(t, r, n);
  }
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case Nr.connecting:
        return gn.Connecting;
      case Nr.open:
        return gn.Open;
      case Nr.closing:
        return gn.Closing;
      default:
        return gn.Closed;
    }
  }
  isConnected() {
    return this.connectionState() === gn.Open;
  }
  isConnecting() {
    return this._connectionState === "connecting";
  }
  isDisconnecting() {
    return this._connectionState === "disconnecting";
  }
  channel(t, r = { config: {} }) {
    const n = `realtime:${t}`,
      s = this.getChannels().find((o) => o.topic === n);
    if (s) return s;
    {
      const o = new ps(`realtime:${t}`, r, this);
      return (this.channels.push(o), o);
    }
  }
  push(t) {
    const { topic: r, event: n, payload: s, ref: o } = t,
      i = () => {
        this.encode(t, (a) => {
          var l;
          (l = this.conn) === null || l === void 0 || l.send(a);
        });
      };
    (this.log("push", `${r} ${n} (${o})`, s),
      this.isConnected() ? i() : this.sendBuffer.push(i));
  }
  async setAuth(t = null) {
    this._authPromise = this._performAuth(t);
    try {
      await this._authPromise;
    } finally {
      this._authPromise = null;
    }
  }
  _isManualToken() {
    return this._manuallySetToken;
  }
  async sendHeartbeat() {
    var t;
    if (!this.isConnected()) {
      try {
        this.heartbeatCallback("disconnected");
      } catch (r) {
        this.log("error", "error in heartbeat callback", r);
      }
      return;
    }
    if (this.pendingHeartbeatRef) {
      ((this.pendingHeartbeatRef = null),
        (this._heartbeatSentAt = null),
        this.log(
          "transport",
          "heartbeat timeout. Attempting to re-establish connection",
        ));
      try {
        this.heartbeatCallback("timeout");
      } catch (r) {
        this.log("error", "error in heartbeat callback", r);
      }
      ((this._wasManualDisconnect = !1),
        (t = this.conn) === null ||
          t === void 0 ||
          t.close(c2, "heartbeat timeout"),
        setTimeout(() => {
          var r;
          this.isConnected() ||
            (r = this.reconnectTimer) === null ||
            r === void 0 ||
            r.scheduleTimeout();
        }, Gi.HEARTBEAT_TIMEOUT_FALLBACK));
      return;
    }
    ((this._heartbeatSentAt = Date.now()),
      (this.pendingHeartbeatRef = this._makeRef()),
      this.push({
        topic: "phoenix",
        event: "heartbeat",
        payload: {},
        ref: this.pendingHeartbeatRef,
      }));
    try {
      this.heartbeatCallback("sent");
    } catch (r) {
      this.log("error", "error in heartbeat callback", r);
    }
    this._setAuthSafely("heartbeat");
  }
  onHeartbeat(t) {
    this.heartbeatCallback = t;
  }
  flushSendBuffer() {
    this.isConnected() &&
      this.sendBuffer.length > 0 &&
      (this.sendBuffer.forEach((t) => t()), (this.sendBuffer = []));
  }
  _makeRef() {
    let t = this.ref + 1;
    return (
      t === this.ref ? (this.ref = 0) : (this.ref = t),
      this.ref.toString()
    );
  }
  _leaveOpenTopic(t) {
    let r = this.channels.find(
      (n) => n.topic === t && (n._isJoined() || n._isJoining()),
    );
    r &&
      (this.log("transport", `leaving duplicate topic "${t}"`),
      r.unsubscribe());
  }
  _remove(t) {
    this.channels = this.channels.filter((r) => r.topic !== t.topic);
  }
  _onConnMessage(t) {
    this.decode(t.data, (r) => {
      if (
        r.topic === "phoenix" &&
        r.event === "phx_reply" &&
        r.ref &&
        r.ref === this.pendingHeartbeatRef
      ) {
        const u = this._heartbeatSentAt
          ? Date.now() - this._heartbeatSentAt
          : void 0;
        try {
          this.heartbeatCallback(r.payload.status === "ok" ? "ok" : "error", u);
        } catch (c) {
          this.log("error", "error in heartbeat callback", c);
        }
        ((this._heartbeatSentAt = null), (this.pendingHeartbeatRef = null));
      }
      const { topic: n, event: s, payload: o, ref: i } = r,
        a = i ? `(${i})` : "",
        l = o.status || "";
      (this.log("receive", `${l} ${n} ${s} ${a}`.trim(), o),
        this.channels
          .filter((u) => u._isMember(n))
          .forEach((u) => u._trigger(s, o, i)),
        this._triggerStateCallbacks("message", r));
    });
  }
  _clearTimer(t) {
    var r;
    t === "heartbeat" && this.heartbeatTimer
      ? (clearInterval(this.heartbeatTimer), (this.heartbeatTimer = void 0))
      : t === "reconnect" &&
        ((r = this.reconnectTimer) === null || r === void 0 || r.reset());
  }
  _clearAllTimers() {
    (this._clearTimer("heartbeat"), this._clearTimer("reconnect"));
  }
  _setupConnectionHandlers() {
    this.conn &&
      ("binaryType" in this.conn && (this.conn.binaryType = "arraybuffer"),
      (this.conn.onopen = () => this._onConnOpen()),
      (this.conn.onerror = (t) => this._onConnError(t)),
      (this.conn.onmessage = (t) => this._onConnMessage(t)),
      (this.conn.onclose = (t) => this._onConnClose(t)),
      this.conn.readyState === Nr.open && this._onConnOpen());
  }
  _teardownConnection() {
    if (this.conn) {
      if (
        this.conn.readyState === Nr.open ||
        this.conn.readyState === Nr.connecting
      )
        try {
          this.conn.close();
        } catch (t) {
          this.log("error", "Error closing connection", t);
        }
      ((this.conn.onopen = null),
        (this.conn.onerror = null),
        (this.conn.onmessage = null),
        (this.conn.onclose = null),
        (this.conn = null));
    }
    (this._clearAllTimers(),
      this._terminateWorker(),
      this.channels.forEach((t) => t.teardown()));
  }
  _onConnOpen() {
    (this._setConnectionState("connected"),
      this.log("transport", `connected to ${this.endpointURL()}`),
      (
        this._authPromise ||
        (this.accessToken && !this.accessTokenValue
          ? this.setAuth()
          : Promise.resolve())
      )
        .then(() => {
          this.flushSendBuffer();
        })
        .catch((r) => {
          (this.log("error", "error waiting for auth on connect", r),
            this.flushSendBuffer());
        }),
      this._clearTimer("reconnect"),
      this.worker
        ? this.workerRef || this._startWorkerHeartbeat()
        : this._startHeartbeat(),
      this._triggerStateCallbacks("open"));
  }
  _startHeartbeat() {
    (this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      (this.heartbeatTimer = setInterval(
        () => this.sendHeartbeat(),
        this.heartbeatIntervalMs,
      )));
  }
  _startWorkerHeartbeat() {
    this.workerUrl
      ? this.log("worker", `starting worker for from ${this.workerUrl}`)
      : this.log("worker", "starting default worker");
    const t = this._workerObjectUrl(this.workerUrl);
    ((this.workerRef = new Worker(t)),
      (this.workerRef.onerror = (r) => {
        (this.log("worker", "worker error", r.message),
          this._terminateWorker());
      }),
      (this.workerRef.onmessage = (r) => {
        r.data.event === "keepAlive" && this.sendHeartbeat();
      }),
      this.workerRef.postMessage({
        event: "start",
        interval: this.heartbeatIntervalMs,
      }));
  }
  _terminateWorker() {
    this.workerRef &&
      (this.log("worker", "terminating worker"),
      this.workerRef.terminate(),
      (this.workerRef = void 0));
  }
  _onConnClose(t) {
    var r;
    (this._setConnectionState("disconnected"),
      this.log("transport", "close", t),
      this._triggerChanError(),
      this._clearTimer("heartbeat"),
      this._wasManualDisconnect ||
        (r = this.reconnectTimer) === null ||
        r === void 0 ||
        r.scheduleTimeout(),
      this._triggerStateCallbacks("close", t));
  }
  _onConnError(t) {
    (this._setConnectionState("disconnected"),
      this.log("transport", `${t}`),
      this._triggerChanError(),
      this._triggerStateCallbacks("error", t));
  }
  _triggerChanError() {
    this.channels.forEach((t) => t._trigger(It.error));
  }
  _appendParams(t, r) {
    if (Object.keys(r).length === 0) return t;
    const n = t.match(/\?/) ? "&" : "?",
      s = new URLSearchParams(r);
    return `${t}${n}${s}`;
  }
  _workerObjectUrl(t) {
    let r;
    if (t) r = t;
    else {
      const n = new Blob([b2], { type: "application/javascript" });
      r = URL.createObjectURL(n);
    }
    return r;
  }
  _setConnectionState(t, r = !1) {
    ((this._connectionState = t),
      t === "connecting"
        ? (this._wasManualDisconnect = !1)
        : t === "disconnecting" && (this._wasManualDisconnect = r));
  }
  async _performAuth(t = null) {
    let r,
      n = !1;
    if (t) ((r = t), (n = !0));
    else if (this.accessToken)
      try {
        r = await this.accessToken();
      } catch (s) {
        (this.log("error", "Error fetching access token from callback", s),
          (r = this.accessTokenValue));
      }
    else r = this.accessTokenValue;
    (n
      ? (this._manuallySetToken = !0)
      : this.accessToken && (this._manuallySetToken = !1),
      this.accessTokenValue != r &&
        ((this.accessTokenValue = r),
        this.channels.forEach((s) => {
          const o = { access_token: r, version: l2 };
          (r && s.updateJoinPayload(o),
            s.joinedOnce &&
              s._isJoined() &&
              s._push(It.access_token, { access_token: r }));
        })));
  }
  async _waitForAuthIfNeeded() {
    this._authPromise && (await this._authPromise);
  }
  _setAuthSafely(t = "general") {
    this._isManualToken() ||
      this.setAuth().catch((r) => {
        this.log("error", `Error setting auth in ${t}`, r);
      });
  }
  _triggerStateCallbacks(t, r) {
    try {
      this.stateChangeCallbacks[t].forEach((n) => {
        try {
          n(r);
        } catch (s) {
          this.log("error", `error in ${t} callback`, s);
        }
      });
    } catch (n) {
      this.log("error", `error triggering ${t} callbacks`, n);
    }
  }
  _setupReconnectionTimer() {
    this.reconnectTimer = new kv(async () => {
      setTimeout(async () => {
        (await this._waitForAuthIfNeeded(),
          this.isConnected() || this.connect());
      }, Gi.RECONNECT_DELAY);
    }, this.reconnectAfterMs);
  }
  _initializeOptions(t) {
    var r, n, s, o, i, a, l, u, c, p, f, d;
    switch (
      ((this.transport =
        (r = t == null ? void 0 : t.transport) !== null && r !== void 0
          ? r
          : null),
      (this.timeout =
        (n = t == null ? void 0 : t.timeout) !== null && n !== void 0 ? n : qc),
      (this.heartbeatIntervalMs =
        (s = t == null ? void 0 : t.heartbeatIntervalMs) !== null &&
        s !== void 0
          ? s
          : Gi.HEARTBEAT_INTERVAL),
      (this.worker =
        (o = t == null ? void 0 : t.worker) !== null && o !== void 0 ? o : !1),
      (this.accessToken =
        (i = t == null ? void 0 : t.accessToken) !== null && i !== void 0
          ? i
          : null),
      (this.heartbeatCallback =
        (a = t == null ? void 0 : t.heartbeatCallback) !== null && a !== void 0
          ? a
          : bu),
      (this.vsn =
        (l = t == null ? void 0 : t.vsn) !== null && l !== void 0 ? l : jp),
      t != null && t.params && (this.params = t.params),
      t != null && t.logger && (this.logger = t.logger),
      ((t != null && t.logLevel) || (t != null && t.log_level)) &&
        ((this.logLevel = t.logLevel || t.log_level),
        (this.params = Object.assign(Object.assign({}, this.params), {
          log_level: this.logLevel,
        }))),
      (this.reconnectAfterMs =
        (u = t == null ? void 0 : t.reconnectAfterMs) !== null && u !== void 0
          ? u
          : (w) => w2[w - 1] || x2),
      this.vsn)
    ) {
      case u2:
        ((this.encode =
          (c = t == null ? void 0 : t.encode) !== null && c !== void 0
            ? c
            : (w, y) => y(JSON.stringify(w))),
          (this.decode =
            (p = t == null ? void 0 : t.decode) !== null && p !== void 0
              ? p
              : (w, y) => y(JSON.parse(w))));
        break;
      case Sv:
        ((this.encode =
          (f = t == null ? void 0 : t.encode) !== null && f !== void 0
            ? f
            : this.serializer.encode.bind(this.serializer)),
          (this.decode =
            (d = t == null ? void 0 : t.decode) !== null && d !== void 0
              ? d
              : this.serializer.decode.bind(this.serializer)));
        break;
      default:
        throw new Error(`Unsupported serializer version: ${this.vsn}`);
    }
    if (this.worker) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.workerUrl = t == null ? void 0 : t.workerUrl;
    }
  }
}
var ei = class extends Error {
  constructor(e, t) {
    var r;
    (super(e),
      (this.name = "IcebergError"),
      (this.status = t.status),
      (this.icebergType = t.icebergType),
      (this.icebergCode = t.icebergCode),
      (this.details = t.details),
      (this.isCommitStateUnknown =
        t.icebergType === "CommitStateUnknownException" ||
        ([500, 502, 504].includes(t.status) &&
          ((r = t.icebergType) == null ? void 0 : r.includes("CommitState")) ===
            !0)));
  }
  isNotFound() {
    return this.status === 404;
  }
  isConflict() {
    return this.status === 409;
  }
  isAuthenticationTimeout() {
    return this.status === 419;
  }
};
function E2(e, t, r) {
  const n = new URL(t, e);
  if (r)
    for (const [s, o] of Object.entries(r))
      o !== void 0 && n.searchParams.set(s, o);
  return n.toString();
}
async function S2(e) {
  return !e || e.type === "none"
    ? {}
    : e.type === "bearer"
      ? { Authorization: `Bearer ${e.token}` }
      : e.type === "header"
        ? { [e.name]: e.value }
        : e.type === "custom"
          ? await e.getHeaders()
          : {};
}
function k2(e) {
  const t = e.fetchImpl ?? globalThis.fetch;
  return {
    async request({ method: r, path: n, query: s, body: o, headers: i }) {
      const a = E2(e.baseUrl, n, s),
        l = await S2(e.auth),
        u = await t(a, {
          method: r,
          headers: {
            ...(o ? { "Content-Type": "application/json" } : {}),
            ...l,
            ...i,
          },
          body: o ? JSON.stringify(o) : void 0,
        }),
        c = await u.text(),
        p = (u.headers.get("content-type") || "").includes("application/json"),
        f = p && c ? JSON.parse(c) : c;
      if (!u.ok) {
        const d = p ? f : void 0,
          w = d == null ? void 0 : d.error;
        throw new ei(
          (w == null ? void 0 : w.message) ??
            `Request failed with status ${u.status}`,
          {
            status: u.status,
            icebergType: w == null ? void 0 : w.type,
            icebergCode: w == null ? void 0 : w.code,
            details: d,
          },
        );
      }
      return { status: u.status, headers: u.headers, data: f };
    },
  };
}
function Qi(e) {
  return e.join("");
}
var C2 = class {
  constructor(e, t = "") {
    ((this.client = e), (this.prefix = t));
  }
  async listNamespaces(e) {
    const t = e ? { parent: Qi(e.namespace) } : void 0;
    return (
      await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces`,
        query: t,
      })
    ).data.namespaces.map((n) => ({ namespace: n }));
  }
  async createNamespace(e, t) {
    const r = {
      namespace: e.namespace,
      properties: t == null ? void 0 : t.properties,
    };
    return (
      await this.client.request({
        method: "POST",
        path: `${this.prefix}/namespaces`,
        body: r,
      })
    ).data;
  }
  async dropNamespace(e) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${Qi(e.namespace)}`,
    });
  }
  async loadNamespaceMetadata(e) {
    return {
      properties: (
        await this.client.request({
          method: "GET",
          path: `${this.prefix}/namespaces/${Qi(e.namespace)}`,
        })
      ).data.properties,
    };
  }
  async namespaceExists(e) {
    try {
      return (
        await this.client.request({
          method: "HEAD",
          path: `${this.prefix}/namespaces/${Qi(e.namespace)}`,
        }),
        !0
      );
    } catch (t) {
      if (t instanceof ei && t.status === 404) return !1;
      throw t;
    }
  }
  async createNamespaceIfNotExists(e, t) {
    try {
      return await this.createNamespace(e, t);
    } catch (r) {
      if (r instanceof ei && r.status === 409) return;
      throw r;
    }
  }
};
function qn(e) {
  return e.join("");
}
var T2 = class {
    constructor(e, t = "", r) {
      ((this.client = e), (this.prefix = t), (this.accessDelegation = r));
    }
    async listTables(e) {
      return (
        await this.client.request({
          method: "GET",
          path: `${this.prefix}/namespaces/${qn(e.namespace)}/tables`,
        })
      ).data.identifiers;
    }
    async createTable(e, t) {
      const r = {};
      return (
        this.accessDelegation &&
          (r["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (
          await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces/${qn(e.namespace)}/tables`,
            body: t,
            headers: r,
          })
        ).data.metadata
      );
    }
    async updateTable(e, t) {
      const r = await this.client.request({
        method: "POST",
        path: `${this.prefix}/namespaces/${qn(e.namespace)}/tables/${e.name}`,
        body: t,
      });
      return {
        "metadata-location": r.data["metadata-location"],
        metadata: r.data.metadata,
      };
    }
    async dropTable(e, t) {
      await this.client.request({
        method: "DELETE",
        path: `${this.prefix}/namespaces/${qn(e.namespace)}/tables/${e.name}`,
        query: { purgeRequested: String((t == null ? void 0 : t.purge) ?? !1) },
      });
    }
    async loadTable(e) {
      const t = {};
      return (
        this.accessDelegation &&
          (t["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (
          await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces/${qn(e.namespace)}/tables/${e.name}`,
            headers: t,
          })
        ).data.metadata
      );
    }
    async tableExists(e) {
      const t = {};
      this.accessDelegation &&
        (t["X-Iceberg-Access-Delegation"] = this.accessDelegation);
      try {
        return (
          await this.client.request({
            method: "HEAD",
            path: `${this.prefix}/namespaces/${qn(e.namespace)}/tables/${e.name}`,
            headers: t,
          }),
          !0
        );
      } catch (r) {
        if (r instanceof ei && r.status === 404) return !1;
        throw r;
      }
    }
    async createTableIfNotExists(e, t) {
      try {
        return await this.createTable(e, t);
      } catch (r) {
        if (r instanceof ei && r.status === 409)
          return await this.loadTable({ namespace: e.namespace, name: t.name });
        throw r;
      }
    }
  },
  P2 = class {
    constructor(e) {
      var n;
      let t = "v1";
      e.catalogName && (t += `/${e.catalogName}`);
      const r = e.baseUrl.endsWith("/") ? e.baseUrl : `${e.baseUrl}/`;
      ((this.client = k2({ baseUrl: r, auth: e.auth, fetchImpl: e.fetch })),
        (this.accessDelegation =
          (n = e.accessDelegation) == null ? void 0 : n.join(",")),
        (this.namespaceOps = new C2(this.client, t)),
        (this.tableOps = new T2(this.client, t, this.accessDelegation)));
    }
    async listNamespaces(e) {
      return this.namespaceOps.listNamespaces(e);
    }
    async createNamespace(e, t) {
      return this.namespaceOps.createNamespace(e, t);
    }
    async dropNamespace(e) {
      await this.namespaceOps.dropNamespace(e);
    }
    async loadNamespaceMetadata(e) {
      return this.namespaceOps.loadNamespaceMetadata(e);
    }
    async listTables(e) {
      return this.tableOps.listTables(e);
    }
    async createTable(e, t) {
      return this.tableOps.createTable(e, t);
    }
    async updateTable(e, t) {
      return this.tableOps.updateTable(e, t);
    }
    async dropTable(e, t) {
      await this.tableOps.dropTable(e, t);
    }
    async loadTable(e) {
      return this.tableOps.loadTable(e);
    }
    async namespaceExists(e) {
      return this.namespaceOps.namespaceExists(e);
    }
    async tableExists(e) {
      return this.tableOps.tableExists(e);
    }
    async createNamespaceIfNotExists(e, t) {
      return this.namespaceOps.createNamespaceIfNotExists(e, t);
    }
    async createTableIfNotExists(e, t) {
      return this.tableOps.createTableIfNotExists(e, t);
    }
  },
  Rl = class extends Error {
    constructor(e) {
      (super(e), (this.__isStorageError = !0), (this.name = "StorageError"));
    }
  };
function he(e) {
  return typeof e == "object" && e !== null && "__isStorageError" in e;
}
var R2 = class extends Rl {
    constructor(e, t, r) {
      (super(e),
        (this.name = "StorageApiError"),
        (this.status = t),
        (this.statusCode = r));
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        statusCode: this.statusCode,
      };
    }
  },
  Qc = class extends Rl {
    constructor(e, t) {
      (super(e), (this.name = "StorageUnknownError"), (this.originalError = t));
    }
  };
const bh = (e) => (e ? (...t) => e(...t) : (...t) => fetch(...t)),
  N2 = () => Response,
  Jc = (e) => {
    if (Array.isArray(e)) return e.map((r) => Jc(r));
    if (typeof e == "function" || e !== Object(e)) return e;
    const t = {};
    return (
      Object.entries(e).forEach(([r, n]) => {
        const s = r.replace(/([-_][a-z])/gi, (o) =>
          o.toUpperCase().replace(/[-_]/g, ""),
        );
        t[s] = Jc(n);
      }),
      t
    );
  },
  j2 = (e) => {
    if (typeof e != "object" || e === null) return !1;
    const t = Object.getPrototypeOf(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  A2 = (e) =>
    !e ||
    typeof e != "string" ||
    e.length === 0 ||
    e.length > 100 ||
    e.trim() !== e ||
    e.includes("/") ||
    e.includes("\\")
      ? !1
      : /^[\w!.\*'() &$@=;:+,?-]+$/.test(e);
function ti(e) {
  "@babel/helpers - typeof";
  return (
    (ti =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ti(e)
  );
}
function O2(e, t) {
  if (ti(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ti(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function I2(e) {
  var t = O2(e, "string");
  return ti(t) == "symbol" ? t : t + "";
}
function L2(e, t, r) {
  return (
    (t = I2(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Lp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (s) {
        return Object.getOwnPropertyDescriptor(e, s).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Lp(Object(r), !0).forEach(function (n) {
          L2(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Lp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
const _u = (e) => {
    var t;
    return (
      e.msg ||
      e.message ||
      e.error_description ||
      (typeof e.error == "string"
        ? e.error
        : (t = e.error) === null || t === void 0
          ? void 0
          : t.message) ||
      JSON.stringify(e)
    );
  },
  $2 = async (e, t, r) => {
    e instanceof (await N2()) && !(r != null && r.noResolveJson)
      ? e
          .json()
          .then((n) => {
            const s = e.status || 500,
              o = (n == null ? void 0 : n.statusCode) || s + "";
            t(new R2(_u(n), s, o));
          })
          .catch((n) => {
            t(new Qc(_u(n), n));
          })
      : t(new Qc(_u(e), e));
  },
  M2 = (e, t, r, n) => {
    const s = { method: e, headers: (t == null ? void 0 : t.headers) || {} };
    return e === "GET" || !n
      ? s
      : (j2(n)
          ? ((s.headers = W(
              { "Content-Type": "application/json" },
              t == null ? void 0 : t.headers,
            )),
            (s.body = JSON.stringify(n)))
          : (s.body = n),
        t != null && t.duplex && (s.duplex = t.duplex),
        W(W({}, s), r));
  };
async function yi(e, t, r, n, s, o) {
  return new Promise((i, a) => {
    e(r, M2(t, n, s, o))
      .then((l) => {
        if (!l.ok) throw l;
        return n != null && n.noResolveJson ? l : l.json();
      })
      .then((l) => i(l))
      .catch((l) => $2(l, a, n));
  });
}
async function ri(e, t, r, n) {
  return yi(e, "GET", t, r, n);
}
async function Nt(e, t, r, n, s) {
  return yi(e, "POST", t, n, s, r);
}
async function Yc(e, t, r, n, s) {
  return yi(e, "PUT", t, n, s, r);
}
async function D2(e, t, r, n) {
  return yi(e, "HEAD", t, W(W({}, r), {}, { noResolveJson: !0 }), n);
}
async function _h(e, t, r, n, s) {
  return yi(e, "DELETE", t, n, s, r);
}
var F2 = class {
  constructor(e, t) {
    ((this.downloadFn = e), (this.shouldThrowOnError = t));
  }
  then(e, t) {
    return this.execute().then(e, t);
  }
  async execute() {
    var e = this;
    try {
      return { data: (await e.downloadFn()).body, error: null };
    } catch (t) {
      if (e.shouldThrowOnError) throw t;
      if (he(t)) return { data: null, error: t };
      throw t;
    }
  }
};
let Pv;
Pv = Symbol.toStringTag;
var U2 = class {
  constructor(e, t) {
    ((this.downloadFn = e),
      (this.shouldThrowOnError = t),
      (this[Pv] = "BlobDownloadBuilder"),
      (this.promise = null));
  }
  asStream() {
    return new F2(this.downloadFn, this.shouldThrowOnError);
  }
  then(e, t) {
    return this.getPromise().then(e, t);
  }
  catch(e) {
    return this.getPromise().catch(e);
  }
  finally(e) {
    return this.getPromise().finally(e);
  }
  getPromise() {
    return (this.promise || (this.promise = this.execute()), this.promise);
  }
  async execute() {
    var e = this;
    try {
      return { data: await (await e.downloadFn()).blob(), error: null };
    } catch (t) {
      if (e.shouldThrowOnError) throw t;
      if (he(t)) return { data: null, error: t };
      throw t;
    }
  }
};
const B2 = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } },
  $p = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1,
  };
var z2 = class {
  constructor(e, t = {}, r, n) {
    ((this.shouldThrowOnError = !1),
      (this.url = e),
      (this.headers = t),
      (this.bucketId = r),
      (this.fetch = bh(n)));
  }
  throwOnError() {
    return ((this.shouldThrowOnError = !0), this);
  }
  async uploadOrUpdate(e, t, r, n) {
    var s = this;
    try {
      let o;
      const i = W(W({}, $p), n);
      let a = W(
        W({}, s.headers),
        e === "POST" && { "x-upsert": String(i.upsert) },
      );
      const l = i.metadata;
      (typeof Blob < "u" && r instanceof Blob
        ? ((o = new FormData()),
          o.append("cacheControl", i.cacheControl),
          l && o.append("metadata", s.encodeMetadata(l)),
          o.append("", r))
        : typeof FormData < "u" && r instanceof FormData
          ? ((o = r),
            o.has("cacheControl") || o.append("cacheControl", i.cacheControl),
            l &&
              !o.has("metadata") &&
              o.append("metadata", s.encodeMetadata(l)))
          : ((o = r),
            (a["cache-control"] = `max-age=${i.cacheControl}`),
            (a["content-type"] = i.contentType),
            l && (a["x-metadata"] = s.toBase64(s.encodeMetadata(l))),
            ((typeof ReadableStream < "u" && o instanceof ReadableStream) ||
              (o &&
                typeof o == "object" &&
                "pipe" in o &&
                typeof o.pipe == "function")) &&
              !i.duplex &&
              (i.duplex = "half")),
        n != null && n.headers && (a = W(W({}, a), n.headers)));
      const u = s._removeEmptyFolders(t),
        c = s._getFinalPath(u),
        p = await (e == "PUT" ? Yc : Nt)(
          s.fetch,
          `${s.url}/object/${c}`,
          o,
          W({ headers: a }, i != null && i.duplex ? { duplex: i.duplex } : {}),
        );
      return { data: { path: u, id: p.Id, fullPath: p.Key }, error: null };
    } catch (o) {
      if (s.shouldThrowOnError) throw o;
      if (he(o)) return { data: null, error: o };
      throw o;
    }
  }
  async upload(e, t, r) {
    return this.uploadOrUpdate("POST", e, t, r);
  }
  async uploadToSignedUrl(e, t, r, n) {
    var s = this;
    const o = s._removeEmptyFolders(e),
      i = s._getFinalPath(o),
      a = new URL(s.url + `/object/upload/sign/${i}`);
    a.searchParams.set("token", t);
    try {
      let l;
      const u = W({ upsert: $p.upsert }, n),
        c = W(W({}, s.headers), { "x-upsert": String(u.upsert) });
      return (
        typeof Blob < "u" && r instanceof Blob
          ? ((l = new FormData()),
            l.append("cacheControl", u.cacheControl),
            l.append("", r))
          : typeof FormData < "u" && r instanceof FormData
            ? ((l = r), l.append("cacheControl", u.cacheControl))
            : ((l = r),
              (c["cache-control"] = `max-age=${u.cacheControl}`),
              (c["content-type"] = u.contentType)),
        {
          data: {
            path: o,
            fullPath: (await Yc(s.fetch, a.toString(), l, { headers: c })).Key,
          },
          error: null,
        }
      );
    } catch (l) {
      if (s.shouldThrowOnError) throw l;
      if (he(l)) return { data: null, error: l };
      throw l;
    }
  }
  async createSignedUploadUrl(e, t) {
    var r = this;
    try {
      let n = r._getFinalPath(e);
      const s = W({}, r.headers);
      t != null && t.upsert && (s["x-upsert"] = "true");
      const o = await Nt(
          r.fetch,
          `${r.url}/object/upload/sign/${n}`,
          {},
          { headers: s },
        ),
        i = new URL(r.url + o.url),
        a = i.searchParams.get("token");
      if (!a) throw new Rl("No token returned by API");
      return {
        data: { signedUrl: i.toString(), path: e, token: a },
        error: null,
      };
    } catch (n) {
      if (r.shouldThrowOnError) throw n;
      if (he(n)) return { data: null, error: n };
      throw n;
    }
  }
  async update(e, t, r) {
    return this.uploadOrUpdate("PUT", e, t, r);
  }
  async move(e, t, r) {
    var n = this;
    try {
      return {
        data: await Nt(
          n.fetch,
          `${n.url}/object/move`,
          {
            bucketId: n.bucketId,
            sourceKey: e,
            destinationKey: t,
            destinationBucket: r == null ? void 0 : r.destinationBucket,
          },
          { headers: n.headers },
        ),
        error: null,
      };
    } catch (s) {
      if (n.shouldThrowOnError) throw s;
      if (he(s)) return { data: null, error: s };
      throw s;
    }
  }
  async copy(e, t, r) {
    var n = this;
    try {
      return {
        data: {
          path: (
            await Nt(
              n.fetch,
              `${n.url}/object/copy`,
              {
                bucketId: n.bucketId,
                sourceKey: e,
                destinationKey: t,
                destinationBucket: r == null ? void 0 : r.destinationBucket,
              },
              { headers: n.headers },
            )
          ).Key,
        },
        error: null,
      };
    } catch (s) {
      if (n.shouldThrowOnError) throw s;
      if (he(s)) return { data: null, error: s };
      throw s;
    }
  }
  async createSignedUrl(e, t, r) {
    var n = this;
    try {
      let s = n._getFinalPath(e),
        o = await Nt(
          n.fetch,
          `${n.url}/object/sign/${s}`,
          W(
            { expiresIn: t },
            r != null && r.transform ? { transform: r.transform } : {},
          ),
          { headers: n.headers },
        );
      const i =
        r != null && r.download
          ? `&download=${r.download === !0 ? "" : r.download}`
          : "";
      return (
        (o = { signedUrl: encodeURI(`${n.url}${o.signedURL}${i}`) }),
        { data: o, error: null }
      );
    } catch (s) {
      if (n.shouldThrowOnError) throw s;
      if (he(s)) return { data: null, error: s };
      throw s;
    }
  }
  async createSignedUrls(e, t, r) {
    var n = this;
    try {
      const s = await Nt(
          n.fetch,
          `${n.url}/object/sign/${n.bucketId}`,
          { expiresIn: t, paths: e },
          { headers: n.headers },
        ),
        o =
          r != null && r.download
            ? `&download=${r.download === !0 ? "" : r.download}`
            : "";
      return {
        data: s.map((i) =>
          W(
            W({}, i),
            {},
            {
              signedUrl: i.signedURL
                ? encodeURI(`${n.url}${i.signedURL}${o}`)
                : null,
            },
          ),
        ),
        error: null,
      };
    } catch (s) {
      if (n.shouldThrowOnError) throw s;
      if (he(s)) return { data: null, error: s };
      throw s;
    }
  }
  download(e, t) {
    const r =
        typeof (t == null ? void 0 : t.transform) < "u"
          ? "render/image/authenticated"
          : "object",
      n = this.transformOptsToQueryString(
        (t == null ? void 0 : t.transform) || {},
      ),
      s = n ? `?${n}` : "",
      o = this._getFinalPath(e),
      i = () =>
        ri(this.fetch, `${this.url}/${r}/${o}${s}`, {
          headers: this.headers,
          noResolveJson: !0,
        });
    return new U2(i, this.shouldThrowOnError);
  }
  async info(e) {
    var t = this;
    const r = t._getFinalPath(e);
    try {
      return {
        data: Jc(
          await ri(t.fetch, `${t.url}/object/info/${r}`, {
            headers: t.headers,
          }),
        ),
        error: null,
      };
    } catch (n) {
      if (t.shouldThrowOnError) throw n;
      if (he(n)) return { data: null, error: n };
      throw n;
    }
  }
  async exists(e) {
    var t = this;
    const r = t._getFinalPath(e);
    try {
      return (
        await D2(t.fetch, `${t.url}/object/${r}`, { headers: t.headers }),
        { data: !0, error: null }
      );
    } catch (n) {
      if (t.shouldThrowOnError) throw n;
      if (he(n) && n instanceof Qc) {
        const s = n.originalError;
        if ([400, 404].includes(s == null ? void 0 : s.status))
          return { data: !1, error: n };
      }
      throw n;
    }
  }
  getPublicUrl(e, t) {
    const r = this._getFinalPath(e),
      n = [],
      s =
        t != null && t.download
          ? `download=${t.download === !0 ? "" : t.download}`
          : "";
    s !== "" && n.push(s);
    const o =
        typeof (t == null ? void 0 : t.transform) < "u"
          ? "render/image"
          : "object",
      i = this.transformOptsToQueryString(
        (t == null ? void 0 : t.transform) || {},
      );
    i !== "" && n.push(i);
    let a = n.join("&");
    return (
      a !== "" && (a = `?${a}`),
      { data: { publicUrl: encodeURI(`${this.url}/${o}/public/${r}${a}`) } }
    );
  }
  async remove(e) {
    var t = this;
    try {
      return {
        data: await _h(
          t.fetch,
          `${t.url}/object/${t.bucketId}`,
          { prefixes: e },
          { headers: t.headers },
        ),
        error: null,
      };
    } catch (r) {
      if (t.shouldThrowOnError) throw r;
      if (he(r)) return { data: null, error: r };
      throw r;
    }
  }
  async list(e, t, r) {
    var n = this;
    try {
      const s = W(W(W({}, B2), t), {}, { prefix: e || "" });
      return {
        data: await Nt(
          n.fetch,
          `${n.url}/object/list/${n.bucketId}`,
          s,
          { headers: n.headers },
          r,
        ),
        error: null,
      };
    } catch (s) {
      if (n.shouldThrowOnError) throw s;
      if (he(s)) return { data: null, error: s };
      throw s;
    }
  }
  async listV2(e, t) {
    var r = this;
    try {
      const n = W({}, e);
      return {
        data: await Nt(
          r.fetch,
          `${r.url}/object/list-v2/${r.bucketId}`,
          n,
          { headers: r.headers },
          t,
        ),
        error: null,
      };
    } catch (n) {
      if (r.shouldThrowOnError) throw n;
      if (he(n)) return { data: null, error: n };
      throw n;
    }
  }
  encodeMetadata(e) {
    return JSON.stringify(e);
  }
  toBase64(e) {
    return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e);
  }
  _getFinalPath(e) {
    return `${this.bucketId}/${e.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(e) {
    return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(e) {
    const t = [];
    return (
      e.width && t.push(`width=${e.width}`),
      e.height && t.push(`height=${e.height}`),
      e.resize && t.push(`resize=${e.resize}`),
      e.format && t.push(`format=${e.format}`),
      e.quality && t.push(`quality=${e.quality}`),
      t.join("&")
    );
  }
};
const Rv = "2.91.0",
  Nv = { "X-Client-Info": `storage-js/${Rv}` };
var V2 = class {
    constructor(e, t = {}, r, n) {
      this.shouldThrowOnError = !1;
      const s = new URL(e);
      (n != null &&
        n.useNewHostname &&
        /supabase\.(co|in|red)$/.test(s.hostname) &&
        !s.hostname.includes("storage.supabase.") &&
        (s.hostname = s.hostname.replace("supabase.", "storage.supabase.")),
        (this.url = s.href.replace(/\/$/, "")),
        (this.headers = W(W({}, Nv), t)),
        (this.fetch = bh(r)));
    }
    throwOnError() {
      return ((this.shouldThrowOnError = !0), this);
    }
    async listBuckets(e) {
      var t = this;
      try {
        const r = t.listBucketOptionsToQueryString(e);
        return {
          data: await ri(t.fetch, `${t.url}/bucket${r}`, {
            headers: t.headers,
          }),
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (he(r)) return { data: null, error: r };
        throw r;
      }
    }
    async getBucket(e) {
      var t = this;
      try {
        return {
          data: await ri(t.fetch, `${t.url}/bucket/${e}`, {
            headers: t.headers,
          }),
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (he(r)) return { data: null, error: r };
        throw r;
      }
    }
    async createBucket(e, t = { public: !1 }) {
      var r = this;
      try {
        return {
          data: await Nt(
            r.fetch,
            `${r.url}/bucket`,
            {
              id: e,
              name: e,
              type: t.type,
              public: t.public,
              file_size_limit: t.fileSizeLimit,
              allowed_mime_types: t.allowedMimeTypes,
            },
            { headers: r.headers },
          ),
          error: null,
        };
      } catch (n) {
        if (r.shouldThrowOnError) throw n;
        if (he(n)) return { data: null, error: n };
        throw n;
      }
    }
    async updateBucket(e, t) {
      var r = this;
      try {
        return {
          data: await Yc(
            r.fetch,
            `${r.url}/bucket/${e}`,
            {
              id: e,
              name: e,
              public: t.public,
              file_size_limit: t.fileSizeLimit,
              allowed_mime_types: t.allowedMimeTypes,
            },
            { headers: r.headers },
          ),
          error: null,
        };
      } catch (n) {
        if (r.shouldThrowOnError) throw n;
        if (he(n)) return { data: null, error: n };
        throw n;
      }
    }
    async emptyBucket(e) {
      var t = this;
      try {
        return {
          data: await Nt(
            t.fetch,
            `${t.url}/bucket/${e}/empty`,
            {},
            { headers: t.headers },
          ),
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (he(r)) return { data: null, error: r };
        throw r;
      }
    }
    async deleteBucket(e) {
      var t = this;
      try {
        return {
          data: await _h(
            t.fetch,
            `${t.url}/bucket/${e}`,
            {},
            { headers: t.headers },
          ),
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (he(r)) return { data: null, error: r };
        throw r;
      }
    }
    listBucketOptionsToQueryString(e) {
      const t = {};
      return (
        e &&
          ("limit" in e && (t.limit = String(e.limit)),
          "offset" in e && (t.offset = String(e.offset)),
          e.search && (t.search = e.search),
          e.sortColumn && (t.sortColumn = e.sortColumn),
          e.sortOrder && (t.sortOrder = e.sortOrder)),
        Object.keys(t).length > 0 ? "?" + new URLSearchParams(t).toString() : ""
      );
    }
  },
  W2 = class {
    constructor(e, t = {}, r) {
      ((this.shouldThrowOnError = !1),
        (this.url = e.replace(/\/$/, "")),
        (this.headers = W(W({}, Nv), t)),
        (this.fetch = bh(r)));
    }
    throwOnError() {
      return ((this.shouldThrowOnError = !0), this);
    }
    async createBucket(e) {
      var t = this;
      try {
        return {
          data: await Nt(
            t.fetch,
            `${t.url}/bucket`,
            { name: e },
            { headers: t.headers },
          ),
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (he(r)) return { data: null, error: r };
        throw r;
      }
    }
    async listBuckets(e) {
      var t = this;
      try {
        const r = new URLSearchParams();
        ((e == null ? void 0 : e.limit) !== void 0 &&
          r.set("limit", e.limit.toString()),
          (e == null ? void 0 : e.offset) !== void 0 &&
            r.set("offset", e.offset.toString()),
          e != null && e.sortColumn && r.set("sortColumn", e.sortColumn),
          e != null && e.sortOrder && r.set("sortOrder", e.sortOrder),
          e != null && e.search && r.set("search", e.search));
        const n = r.toString(),
          s = n ? `${t.url}/bucket?${n}` : `${t.url}/bucket`;
        return {
          data: await ri(t.fetch, s, { headers: t.headers }),
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (he(r)) return { data: null, error: r };
        throw r;
      }
    }
    async deleteBucket(e) {
      var t = this;
      try {
        return {
          data: await _h(
            t.fetch,
            `${t.url}/bucket/${e}`,
            {},
            { headers: t.headers },
          ),
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (he(r)) return { data: null, error: r };
        throw r;
      }
    }
    from(e) {
      var t = this;
      if (!A2(e))
        throw new Rl(
          "Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.",
        );
      const r = new P2({
          baseUrl: this.url,
          catalogName: e,
          auth: { type: "custom", getHeaders: async () => t.headers },
          fetch: this.fetch,
        }),
        n = this.shouldThrowOnError;
      return new Proxy(r, {
        get(s, o) {
          const i = s[o];
          return typeof i != "function"
            ? i
            : async (...a) => {
                try {
                  return { data: await i.apply(s, a), error: null };
                } catch (l) {
                  if (n) throw l;
                  return { data: null, error: l };
                }
              };
        },
      });
    }
  };
const Eh = {
  "X-Client-Info": `storage-js/${Rv}`,
  "Content-Type": "application/json",
};
var jv = class extends Error {
  constructor(e) {
    (super(e),
      (this.__isStorageVectorsError = !0),
      (this.name = "StorageVectorsError"));
  }
};
function ot(e) {
  return typeof e == "object" && e !== null && "__isStorageVectorsError" in e;
}
var Eu = class extends jv {
    constructor(e, t, r) {
      (super(e),
        (this.name = "StorageVectorsApiError"),
        (this.status = t),
        (this.statusCode = r));
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        statusCode: this.statusCode,
      };
    }
  },
  H2 = class extends jv {
    constructor(e, t) {
      (super(e),
        (this.name = "StorageVectorsUnknownError"),
        (this.originalError = t));
    }
  };
const Sh = (e) => (e ? (...t) => e(...t) : (...t) => fetch(...t)),
  q2 = (e) => {
    if (typeof e != "object" || e === null) return !1;
    const t = Object.getPrototypeOf(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Mp = (e) =>
    e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
  K2 = async (e, t, r) => {
    if (
      e &&
      typeof e == "object" &&
      "status" in e &&
      "ok" in e &&
      typeof e.status == "number" &&
      !(r != null && r.noResolveJson)
    ) {
      const n = e.status || 500,
        s = e;
      if (typeof s.json == "function")
        s.json()
          .then((o) => {
            const i =
              (o == null ? void 0 : o.statusCode) ||
              (o == null ? void 0 : o.code) ||
              n + "";
            t(new Eu(Mp(o), n, i));
          })
          .catch(() => {
            const o = n + "";
            t(new Eu(s.statusText || `HTTP ${n} error`, n, o));
          });
      else {
        const o = n + "";
        t(new Eu(s.statusText || `HTTP ${n} error`, n, o));
      }
    } else t(new H2(Mp(e), e));
  },
  G2 = (e, t, r, n) => {
    const s = { method: e, headers: (t == null ? void 0 : t.headers) || {} };
    return n
      ? (q2(n)
          ? ((s.headers = W(
              { "Content-Type": "application/json" },
              t == null ? void 0 : t.headers,
            )),
            (s.body = JSON.stringify(n)))
          : (s.body = n),
        W(W({}, s), r))
      : s;
  };
async function Q2(e, t, r, n, s, o) {
  return new Promise((i, a) => {
    e(r, G2(t, n, s, o))
      .then((l) => {
        if (!l.ok) throw l;
        if (n != null && n.noResolveJson) return l;
        const u = l.headers.get("content-type");
        return !u || !u.includes("application/json") ? {} : l.json();
      })
      .then((l) => i(l))
      .catch((l) => K2(l, a, n));
  });
}
async function it(e, t, r, n, s) {
  return Q2(e, "POST", t, n, s, r);
}
var J2 = class {
    constructor(e, t = {}, r) {
      ((this.shouldThrowOnError = !1),
        (this.url = e.replace(/\/$/, "")),
        (this.headers = W(W({}, Eh), t)),
        (this.fetch = Sh(r)));
    }
    throwOnError() {
      return ((this.shouldThrowOnError = !0), this);
    }
    async createIndex(e) {
      var t = this;
      try {
        return {
          data:
            (await it(t.fetch, `${t.url}/CreateIndex`, e, {
              headers: t.headers,
            })) || {},
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (ot(r)) return { data: null, error: r };
        throw r;
      }
    }
    async getIndex(e, t) {
      var r = this;
      try {
        return {
          data: await it(
            r.fetch,
            `${r.url}/GetIndex`,
            { vectorBucketName: e, indexName: t },
            { headers: r.headers },
          ),
          error: null,
        };
      } catch (n) {
        if (r.shouldThrowOnError) throw n;
        if (ot(n)) return { data: null, error: n };
        throw n;
      }
    }
    async listIndexes(e) {
      var t = this;
      try {
        return {
          data: await it(t.fetch, `${t.url}/ListIndexes`, e, {
            headers: t.headers,
          }),
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (ot(r)) return { data: null, error: r };
        throw r;
      }
    }
    async deleteIndex(e, t) {
      var r = this;
      try {
        return {
          data:
            (await it(
              r.fetch,
              `${r.url}/DeleteIndex`,
              { vectorBucketName: e, indexName: t },
              { headers: r.headers },
            )) || {},
          error: null,
        };
      } catch (n) {
        if (r.shouldThrowOnError) throw n;
        if (ot(n)) return { data: null, error: n };
        throw n;
      }
    }
  },
  Y2 = class {
    constructor(e, t = {}, r) {
      ((this.shouldThrowOnError = !1),
        (this.url = e.replace(/\/$/, "")),
        (this.headers = W(W({}, Eh), t)),
        (this.fetch = Sh(r)));
    }
    throwOnError() {
      return ((this.shouldThrowOnError = !0), this);
    }
    async putVectors(e) {
      var t = this;
      try {
        if (e.vectors.length < 1 || e.vectors.length > 500)
          throw new Error("Vector batch size must be between 1 and 500 items");
        return {
          data:
            (await it(t.fetch, `${t.url}/PutVectors`, e, {
              headers: t.headers,
            })) || {},
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (ot(r)) return { data: null, error: r };
        throw r;
      }
    }
    async getVectors(e) {
      var t = this;
      try {
        return {
          data: await it(t.fetch, `${t.url}/GetVectors`, e, {
            headers: t.headers,
          }),
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (ot(r)) return { data: null, error: r };
        throw r;
      }
    }
    async listVectors(e) {
      var t = this;
      try {
        if (e.segmentCount !== void 0) {
          if (e.segmentCount < 1 || e.segmentCount > 16)
            throw new Error("segmentCount must be between 1 and 16");
          if (
            e.segmentIndex !== void 0 &&
            (e.segmentIndex < 0 || e.segmentIndex >= e.segmentCount)
          )
            throw new Error(
              `segmentIndex must be between 0 and ${e.segmentCount - 1}`,
            );
        }
        return {
          data: await it(t.fetch, `${t.url}/ListVectors`, e, {
            headers: t.headers,
          }),
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (ot(r)) return { data: null, error: r };
        throw r;
      }
    }
    async queryVectors(e) {
      var t = this;
      try {
        return {
          data: await it(t.fetch, `${t.url}/QueryVectors`, e, {
            headers: t.headers,
          }),
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (ot(r)) return { data: null, error: r };
        throw r;
      }
    }
    async deleteVectors(e) {
      var t = this;
      try {
        if (e.keys.length < 1 || e.keys.length > 500)
          throw new Error("Keys batch size must be between 1 and 500 items");
        return {
          data:
            (await it(t.fetch, `${t.url}/DeleteVectors`, e, {
              headers: t.headers,
            })) || {},
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (ot(r)) return { data: null, error: r };
        throw r;
      }
    }
  },
  X2 = class {
    constructor(e, t = {}, r) {
      ((this.shouldThrowOnError = !1),
        (this.url = e.replace(/\/$/, "")),
        (this.headers = W(W({}, Eh), t)),
        (this.fetch = Sh(r)));
    }
    throwOnError() {
      return ((this.shouldThrowOnError = !0), this);
    }
    async createBucket(e) {
      var t = this;
      try {
        return {
          data:
            (await it(
              t.fetch,
              `${t.url}/CreateVectorBucket`,
              { vectorBucketName: e },
              { headers: t.headers },
            )) || {},
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (ot(r)) return { data: null, error: r };
        throw r;
      }
    }
    async getBucket(e) {
      var t = this;
      try {
        return {
          data: await it(
            t.fetch,
            `${t.url}/GetVectorBucket`,
            { vectorBucketName: e },
            { headers: t.headers },
          ),
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (ot(r)) return { data: null, error: r };
        throw r;
      }
    }
    async listBuckets(e = {}) {
      var t = this;
      try {
        return {
          data: await it(t.fetch, `${t.url}/ListVectorBuckets`, e, {
            headers: t.headers,
          }),
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (ot(r)) return { data: null, error: r };
        throw r;
      }
    }
    async deleteBucket(e) {
      var t = this;
      try {
        return {
          data:
            (await it(
              t.fetch,
              `${t.url}/DeleteVectorBucket`,
              { vectorBucketName: e },
              { headers: t.headers },
            )) || {},
          error: null,
        };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (ot(r)) return { data: null, error: r };
        throw r;
      }
    }
  },
  Z2 = class extends X2 {
    constructor(e, t = {}) {
      super(e, t.headers || {}, t.fetch);
    }
    from(e) {
      return new eT(this.url, this.headers, e, this.fetch);
    }
    async createBucket(e) {
      var t = () => super.createBucket,
        r = this;
      return t().call(r, e);
    }
    async getBucket(e) {
      var t = () => super.getBucket,
        r = this;
      return t().call(r, e);
    }
    async listBuckets(e = {}) {
      var t = () => super.listBuckets,
        r = this;
      return t().call(r, e);
    }
    async deleteBucket(e) {
      var t = () => super.deleteBucket,
        r = this;
      return t().call(r, e);
    }
  },
  eT = class extends J2 {
    constructor(e, t, r, n) {
      (super(e, t, n), (this.vectorBucketName = r));
    }
    async createIndex(e) {
      var t = () => super.createIndex,
        r = this;
      return t().call(
        r,
        W(W({}, e), {}, { vectorBucketName: r.vectorBucketName }),
      );
    }
    async listIndexes(e = {}) {
      var t = () => super.listIndexes,
        r = this;
      return t().call(
        r,
        W(W({}, e), {}, { vectorBucketName: r.vectorBucketName }),
      );
    }
    async getIndex(e) {
      var t = () => super.getIndex,
        r = this;
      return t().call(r, r.vectorBucketName, e);
    }
    async deleteIndex(e) {
      var t = () => super.deleteIndex,
        r = this;
      return t().call(r, r.vectorBucketName, e);
    }
    index(e) {
      return new tT(
        this.url,
        this.headers,
        this.vectorBucketName,
        e,
        this.fetch,
      );
    }
  },
  tT = class extends Y2 {
    constructor(e, t, r, n, s) {
      (super(e, t, s), (this.vectorBucketName = r), (this.indexName = n));
    }
    async putVectors(e) {
      var t = () => super.putVectors,
        r = this;
      return t().call(
        r,
        W(
          W({}, e),
          {},
          { vectorBucketName: r.vectorBucketName, indexName: r.indexName },
        ),
      );
    }
    async getVectors(e) {
      var t = () => super.getVectors,
        r = this;
      return t().call(
        r,
        W(
          W({}, e),
          {},
          { vectorBucketName: r.vectorBucketName, indexName: r.indexName },
        ),
      );
    }
    async listVectors(e = {}) {
      var t = () => super.listVectors,
        r = this;
      return t().call(
        r,
        W(
          W({}, e),
          {},
          { vectorBucketName: r.vectorBucketName, indexName: r.indexName },
        ),
      );
    }
    async queryVectors(e) {
      var t = () => super.queryVectors,
        r = this;
      return t().call(
        r,
        W(
          W({}, e),
          {},
          { vectorBucketName: r.vectorBucketName, indexName: r.indexName },
        ),
      );
    }
    async deleteVectors(e) {
      var t = () => super.deleteVectors,
        r = this;
      return t().call(
        r,
        W(
          W({}, e),
          {},
          { vectorBucketName: r.vectorBucketName, indexName: r.indexName },
        ),
      );
    }
  },
  rT = class extends V2 {
    constructor(e, t = {}, r, n) {
      super(e, t, r, n);
    }
    from(e) {
      return new z2(this.url, this.headers, e, this.fetch);
    }
    get vectors() {
      return new Z2(this.url + "/vector", {
        headers: this.headers,
        fetch: this.fetch,
      });
    }
    get analytics() {
      return new W2(this.url + "/iceberg", this.headers, this.fetch);
    }
  };
const Av = "2.91.0",
  es = 30 * 1e3,
  Xc = 3,
  Su = Xc * es,
  nT = "http://localhost:9999",
  sT = "supabase.auth.token",
  oT = { "X-Client-Info": `gotrue-js/${Av}` },
  Zc = "X-Supabase-Api-Version",
  Ov = {
    "2024-01-01": {
      timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
      name: "2024-01-01",
    },
  },
  iT = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,
  aT = 10 * 60 * 1e3;
class ni extends Error {
  constructor(t, r, n) {
    (super(t),
      (this.__isAuthError = !0),
      (this.name = "AuthError"),
      (this.status = r),
      (this.code = n));
  }
}
function U(e) {
  return typeof e == "object" && e !== null && "__isAuthError" in e;
}
class lT extends ni {
  constructor(t, r, n) {
    (super(t, r, n),
      (this.name = "AuthApiError"),
      (this.status = r),
      (this.code = n));
  }
}
function uT(e) {
  return U(e) && e.name === "AuthApiError";
}
class yn extends ni {
  constructor(t, r) {
    (super(t), (this.name = "AuthUnknownError"), (this.originalError = r));
  }
}
class yr extends ni {
  constructor(t, r, n, s) {
    (super(t, n, s), (this.name = r), (this.status = n));
  }
}
class rt extends yr {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function cT(e) {
  return U(e) && e.name === "AuthSessionMissingError";
}
class Kn extends yr {
  constructor() {
    super(
      "Auth session or user missing",
      "AuthInvalidTokenResponseError",
      500,
      void 0,
    );
  }
}
class Ji extends yr {
  constructor(t) {
    super(t, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class Yi extends yr {
  constructor(t, r = null) {
    (super(t, "AuthImplicitGrantRedirectError", 500, void 0),
      (this.details = null),
      (this.details = r));
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
function dT(e) {
  return U(e) && e.name === "AuthImplicitGrantRedirectError";
}
class Dp extends yr {
  constructor(t, r = null) {
    (super(t, "AuthPKCEGrantCodeExchangeError", 500, void 0),
      (this.details = null),
      (this.details = r));
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
class hT extends yr {
  constructor() {
    super(
      "PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.",
      "AuthPKCECodeVerifierMissingError",
      400,
      "pkce_code_verifier_not_found",
    );
  }
}
class ed extends yr {
  constructor(t, r) {
    super(t, "AuthRetryableFetchError", r, void 0);
  }
}
function ku(e) {
  return U(e) && e.name === "AuthRetryableFetchError";
}
class Fp extends yr {
  constructor(t, r, n) {
    (super(t, "AuthWeakPasswordError", r, "weak_password"), (this.reasons = n));
  }
}
class td extends yr {
  constructor(t) {
    super(t, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const qa =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(
      "",
    ),
  Up = `    
\r=`.split(""),
  fT = (() => {
    const e = new Array(128);
    for (let t = 0; t < e.length; t += 1) e[t] = -1;
    for (let t = 0; t < Up.length; t += 1) e[Up[t].charCodeAt(0)] = -2;
    for (let t = 0; t < qa.length; t += 1) e[qa[t].charCodeAt(0)] = t;
    return e;
  })();
function Bp(e, t, r) {
  if (e !== null)
    for (t.queue = (t.queue << 8) | e, t.queuedBits += 8; t.queuedBits >= 6; ) {
      const n = (t.queue >> (t.queuedBits - 6)) & 63;
      (r(qa[n]), (t.queuedBits -= 6));
    }
  else if (t.queuedBits > 0)
    for (
      t.queue = t.queue << (6 - t.queuedBits), t.queuedBits = 6;
      t.queuedBits >= 6;
    ) {
      const n = (t.queue >> (t.queuedBits - 6)) & 63;
      (r(qa[n]), (t.queuedBits -= 6));
    }
}
function Iv(e, t, r) {
  const n = fT[e];
  if (n > -1)
    for (t.queue = (t.queue << 6) | n, t.queuedBits += 6; t.queuedBits >= 8; )
      (r((t.queue >> (t.queuedBits - 8)) & 255), (t.queuedBits -= 8));
  else {
    if (n === -2) return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`);
  }
}
function zp(e) {
  const t = [],
    r = (i) => {
      t.push(String.fromCodePoint(i));
    },
    n = { utf8seq: 0, codepoint: 0 },
    s = { queue: 0, queuedBits: 0 },
    o = (i) => {
      gT(i, n, r);
    };
  for (let i = 0; i < e.length; i += 1) Iv(e.charCodeAt(i), s, o);
  return t.join("");
}
function pT(e, t) {
  if (e <= 127) {
    t(e);
    return;
  } else if (e <= 2047) {
    (t(192 | (e >> 6)), t(128 | (e & 63)));
    return;
  } else if (e <= 65535) {
    (t(224 | (e >> 12)), t(128 | ((e >> 6) & 63)), t(128 | (e & 63)));
    return;
  } else if (e <= 1114111) {
    (t(240 | (e >> 18)),
      t(128 | ((e >> 12) & 63)),
      t(128 | ((e >> 6) & 63)),
      t(128 | (e & 63)));
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`);
}
function mT(e, t) {
  for (let r = 0; r < e.length; r += 1) {
    let n = e.charCodeAt(r);
    if (n > 55295 && n <= 56319) {
      const s = ((n - 55296) * 1024) & 65535;
      ((n = (((e.charCodeAt(r + 1) - 56320) & 65535) | s) + 65536), (r += 1));
    }
    pT(n, t);
  }
}
function gT(e, t, r) {
  if (t.utf8seq === 0) {
    if (e <= 127) {
      r(e);
      return;
    }
    for (let n = 1; n < 6; n += 1)
      if (!((e >> (7 - n)) & 1)) {
        t.utf8seq = n;
        break;
      }
    if (t.utf8seq === 2) t.codepoint = e & 31;
    else if (t.utf8seq === 3) t.codepoint = e & 15;
    else if (t.utf8seq === 4) t.codepoint = e & 7;
    else throw new Error("Invalid UTF-8 sequence");
    t.utf8seq -= 1;
  } else if (t.utf8seq > 0) {
    if (e <= 127) throw new Error("Invalid UTF-8 sequence");
    ((t.codepoint = (t.codepoint << 6) | (e & 63)),
      (t.utf8seq -= 1),
      t.utf8seq === 0 && r(t.codepoint));
  }
}
function Ss(e) {
  const t = [],
    r = { queue: 0, queuedBits: 0 },
    n = (s) => {
      t.push(s);
    };
  for (let s = 0; s < e.length; s += 1) Iv(e.charCodeAt(s), r, n);
  return new Uint8Array(t);
}
function yT(e) {
  const t = [];
  return (mT(e, (r) => t.push(r)), new Uint8Array(t));
}
function bn(e) {
  const t = [],
    r = { queue: 0, queuedBits: 0 },
    n = (s) => {
      t.push(s);
    };
  return (e.forEach((s) => Bp(s, r, n)), Bp(null, r, n), t.join(""));
}
function vT(e) {
  return Math.round(Date.now() / 1e3) + e;
}
function wT() {
  return Symbol("auth-callback");
}
const je = () => typeof window < "u" && typeof document < "u",
  dn = { tested: !1, writable: !1 },
  Lv = () => {
    if (!je()) return !1;
    try {
      if (typeof globalThis.localStorage != "object") return !1;
    } catch {
      return !1;
    }
    if (dn.tested) return dn.writable;
    const e = `lswt-${Math.random()}${Math.random()}`;
    try {
      (globalThis.localStorage.setItem(e, e),
        globalThis.localStorage.removeItem(e),
        (dn.tested = !0),
        (dn.writable = !0));
    } catch {
      ((dn.tested = !0), (dn.writable = !1));
    }
    return dn.writable;
  };
function xT(e) {
  const t = {},
    r = new URL(e);
  if (r.hash && r.hash[0] === "#")
    try {
      new URLSearchParams(r.hash.substring(1)).forEach((s, o) => {
        t[o] = s;
      });
    } catch {}
  return (
    r.searchParams.forEach((n, s) => {
      t[s] = n;
    }),
    t
  );
}
const $v = (e) => (e ? (...t) => e(...t) : (...t) => fetch(...t)),
  bT = (e) =>
    typeof e == "object" &&
    e !== null &&
    "status" in e &&
    "ok" in e &&
    "json" in e &&
    typeof e.json == "function",
  ts = async (e, t, r) => {
    await e.setItem(t, JSON.stringify(r));
  },
  hn = async (e, t) => {
    const r = await e.getItem(t);
    if (!r) return null;
    try {
      return JSON.parse(r);
    } catch {
      return r;
    }
  },
  Ne = async (e, t) => {
    await e.removeItem(t);
  };
class Nl {
  constructor() {
    this.promise = new Nl.promiseConstructor((t, r) => {
      ((this.resolve = t), (this.reject = r));
    });
  }
}
Nl.promiseConstructor = Promise;
function Cu(e) {
  const t = e.split(".");
  if (t.length !== 3) throw new td("Invalid JWT structure");
  for (let n = 0; n < t.length; n++)
    if (!iT.test(t[n])) throw new td("JWT not in base64url format");
  return {
    header: JSON.parse(zp(t[0])),
    payload: JSON.parse(zp(t[1])),
    signature: Ss(t[2]),
    raw: { header: t[0], payload: t[1] },
  };
}
async function _T(e) {
  return await new Promise((t) => {
    setTimeout(() => t(null), e);
  });
}
function ET(e, t) {
  return new Promise((n, s) => {
    (async () => {
      for (let o = 0; o < 1 / 0; o++)
        try {
          const i = await e(o);
          if (!t(o, null, i)) {
            n(i);
            return;
          }
        } catch (i) {
          if (!t(o, i)) {
            s(i);
            return;
          }
        }
    })();
  });
}
function ST(e) {
  return ("0" + e.toString(16)).substr(-2);
}
function kT() {
  const t = new Uint32Array(56);
  if (typeof crypto > "u") {
    const r =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
      n = r.length;
    let s = "";
    for (let o = 0; o < 56; o++) s += r.charAt(Math.floor(Math.random() * n));
    return s;
  }
  return (crypto.getRandomValues(t), Array.from(t, ST).join(""));
}
async function CT(e) {
  const r = new TextEncoder().encode(e),
    n = await crypto.subtle.digest("SHA-256", r),
    s = new Uint8Array(n);
  return Array.from(s)
    .map((o) => String.fromCharCode(o))
    .join("");
}
async function TT(e) {
  if (
    !(
      typeof crypto < "u" &&
      typeof crypto.subtle < "u" &&
      typeof TextEncoder < "u"
    )
  )
    return (
      console.warn(
        "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.",
      ),
      e
    );
  const r = await CT(e);
  return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function Gn(e, t, r = !1) {
  const n = kT();
  let s = n;
  (r && (s += "/PASSWORD_RECOVERY"), await ts(e, `${t}-code-verifier`, s));
  const o = await TT(n);
  return [o, n === o ? "plain" : "s256"];
}
const PT = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function RT(e) {
  const t = e.headers.get(Zc);
  if (!t || !t.match(PT)) return null;
  try {
    return new Date(`${t}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function NT(e) {
  if (!e) throw new Error("Missing exp claim");
  const t = Math.floor(Date.now() / 1e3);
  if (e <= t) throw new Error("JWT has expired");
}
function jT(e) {
  switch (e) {
    case "RS256":
      return { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } };
    case "ES256":
      return { name: "ECDSA", namedCurve: "P-256", hash: { name: "SHA-256" } };
    default:
      throw new Error("Invalid alg claim");
  }
}
const AT = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function Qn(e) {
  if (!AT.test(e))
    throw new Error(
      "@supabase/auth-js: Expected parameter to be UUID but is not",
    );
}
function Tu() {
  const e = {};
  return new Proxy(e, {
    get: (t, r) => {
      if (r === "__isUserNotAvailableProxy") return !0;
      if (typeof r == "symbol") {
        const n = r.toString();
        if (
          n === "Symbol(Symbol.toPrimitive)" ||
          n === "Symbol(Symbol.toStringTag)" ||
          n === "Symbol(util.inspect.custom)"
        )
          return;
      }
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`,
      );
    },
    set: (t, r) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`,
      );
    },
    deleteProperty: (t, r) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`,
      );
    },
  });
}
function OT(e, t) {
  return new Proxy(e, {
    get: (r, n, s) => {
      if (n === "__isInsecureUserWarningProxy") return !0;
      if (typeof n == "symbol") {
        const o = n.toString();
        if (
          o === "Symbol(Symbol.toPrimitive)" ||
          o === "Symbol(Symbol.toStringTag)" ||
          o === "Symbol(util.inspect.custom)" ||
          o === "Symbol(nodejs.util.inspect.custom)"
        )
          return Reflect.get(r, n, s);
      }
      return (
        !t.value &&
          typeof n == "string" &&
          (console.warn(
            "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.",
          ),
          (t.value = !0)),
        Reflect.get(r, n, s)
      );
    },
  });
}
function Vp(e) {
  return JSON.parse(JSON.stringify(e));
}
const mn = (e) =>
    e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
  IT = [502, 503, 504];
async function Wp(e) {
  var t;
  if (!bT(e)) throw new ed(mn(e), 0);
  if (IT.includes(e.status)) throw new ed(mn(e), e.status);
  let r;
  try {
    r = await e.json();
  } catch (o) {
    throw new yn(mn(o), o);
  }
  let n;
  const s = RT(e);
  if (
    (s &&
    s.getTime() >= Ov["2024-01-01"].timestamp &&
    typeof r == "object" &&
    r &&
    typeof r.code == "string"
      ? (n = r.code)
      : typeof r == "object" &&
        r &&
        typeof r.error_code == "string" &&
        (n = r.error_code),
    n)
  ) {
    if (n === "weak_password")
      throw new Fp(
        mn(r),
        e.status,
        ((t = r.weak_password) === null || t === void 0 ? void 0 : t.reasons) ||
          [],
      );
    if (n === "session_not_found") throw new rt();
  } else if (
    typeof r == "object" &&
    r &&
    typeof r.weak_password == "object" &&
    r.weak_password &&
    Array.isArray(r.weak_password.reasons) &&
    r.weak_password.reasons.length &&
    r.weak_password.reasons.reduce((o, i) => o && typeof i == "string", !0)
  )
    throw new Fp(mn(r), e.status, r.weak_password.reasons);
  throw new lT(mn(r), e.status || 500, n);
}
const LT = (e, t, r, n) => {
  const s = { method: e, headers: (t == null ? void 0 : t.headers) || {} };
  return e === "GET"
    ? s
    : ((s.headers = Object.assign(
        { "Content-Type": "application/json;charset=UTF-8" },
        t == null ? void 0 : t.headers,
      )),
      (s.body = JSON.stringify(n)),
      Object.assign(Object.assign({}, s), r));
};
async function V(e, t, r, n) {
  var s;
  const o = Object.assign({}, n == null ? void 0 : n.headers);
  (o[Zc] || (o[Zc] = Ov["2024-01-01"].name),
    n != null && n.jwt && (o.Authorization = `Bearer ${n.jwt}`));
  const i =
    (s = n == null ? void 0 : n.query) !== null && s !== void 0 ? s : {};
  n != null && n.redirectTo && (i.redirect_to = n.redirectTo);
  const a = Object.keys(i).length
      ? "?" + new URLSearchParams(i).toString()
      : "",
    l = await $T(
      e,
      t,
      r + a,
      { headers: o, noResolveJson: n == null ? void 0 : n.noResolveJson },
      {},
      n == null ? void 0 : n.body,
    );
  return n != null && n.xform
    ? n == null
      ? void 0
      : n.xform(l)
    : { data: Object.assign({}, l), error: null };
}
async function $T(e, t, r, n, s, o) {
  const i = LT(t, n, s, o);
  let a;
  try {
    a = await e(r, Object.assign({}, i));
  } catch (l) {
    throw (console.error(l), new ed(mn(l), 0));
  }
  if ((a.ok || (await Wp(a)), n != null && n.noResolveJson)) return a;
  try {
    return await a.json();
  } catch (l) {
    await Wp(l);
  }
}
function Tt(e) {
  var t;
  let r = null;
  FT(e) &&
    ((r = Object.assign({}, e)),
    e.expires_at || (r.expires_at = vT(e.expires_in)));
  const n = (t = e.user) !== null && t !== void 0 ? t : e;
  return { data: { session: r, user: n }, error: null };
}
function Hp(e) {
  const t = Tt(e);
  return (
    !t.error &&
      e.weak_password &&
      typeof e.weak_password == "object" &&
      Array.isArray(e.weak_password.reasons) &&
      e.weak_password.reasons.length &&
      e.weak_password.message &&
      typeof e.weak_password.message == "string" &&
      e.weak_password.reasons.reduce((r, n) => r && typeof n == "string", !0) &&
      (t.data.weak_password = e.weak_password),
    t
  );
}
function Or(e) {
  var t;
  return {
    data: { user: (t = e.user) !== null && t !== void 0 ? t : e },
    error: null,
  };
}
function MT(e) {
  return { data: e, error: null };
}
function DT(e) {
  const {
      action_link: t,
      email_otp: r,
      hashed_token: n,
      redirect_to: s,
      verification_type: o,
    } = e,
    i = Pl(e, [
      "action_link",
      "email_otp",
      "hashed_token",
      "redirect_to",
      "verification_type",
    ]),
    a = {
      action_link: t,
      email_otp: r,
      hashed_token: n,
      redirect_to: s,
      verification_type: o,
    },
    l = Object.assign({}, i);
  return { data: { properties: a, user: l }, error: null };
}
function qp(e) {
  return e;
}
function FT(e) {
  return e.access_token && e.refresh_token && e.expires_in;
}
const Pu = ["global", "local", "others"];
class UT {
  constructor({ url: t = "", headers: r = {}, fetch: n }) {
    ((this.url = t),
      (this.headers = r),
      (this.fetch = $v(n)),
      (this.mfa = {
        listFactors: this._listFactors.bind(this),
        deleteFactor: this._deleteFactor.bind(this),
      }),
      (this.oauth = {
        listClients: this._listOAuthClients.bind(this),
        createClient: this._createOAuthClient.bind(this),
        getClient: this._getOAuthClient.bind(this),
        updateClient: this._updateOAuthClient.bind(this),
        deleteClient: this._deleteOAuthClient.bind(this),
        regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this),
      }));
  }
  async signOut(t, r = Pu[0]) {
    if (Pu.indexOf(r) < 0)
      throw new Error(
        `@supabase/auth-js: Parameter scope must be one of ${Pu.join(", ")}`,
      );
    try {
      return (
        await V(this.fetch, "POST", `${this.url}/logout?scope=${r}`, {
          headers: this.headers,
          jwt: t,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (n) {
      if (U(n)) return { data: null, error: n };
      throw n;
    }
  }
  async inviteUserByEmail(t, r = {}) {
    try {
      return await V(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: t, data: r.data },
        headers: this.headers,
        redirectTo: r.redirectTo,
        xform: Or,
      });
    } catch (n) {
      if (U(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async generateLink(t) {
    try {
      const { options: r } = t,
        n = Pl(t, ["options"]),
        s = Object.assign(Object.assign({}, n), r);
      return (
        "newEmail" in n &&
          ((s.new_email = n == null ? void 0 : n.newEmail), delete s.newEmail),
        await V(this.fetch, "POST", `${this.url}/admin/generate_link`, {
          body: s,
          headers: this.headers,
          xform: DT,
          redirectTo: r == null ? void 0 : r.redirectTo,
        })
      );
    } catch (r) {
      if (U(r)) return { data: { properties: null, user: null }, error: r };
      throw r;
    }
  }
  async createUser(t) {
    try {
      return await V(this.fetch, "POST", `${this.url}/admin/users`, {
        body: t,
        headers: this.headers,
        xform: Or,
      });
    } catch (r) {
      if (U(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async listUsers(t) {
    var r, n, s, o, i, a, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 },
        c = await V(this.fetch, "GET", `${this.url}/admin/users`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (n =
                (r = t == null ? void 0 : t.page) === null || r === void 0
                  ? void 0
                  : r.toString()) !== null && n !== void 0
                ? n
                : "",
            per_page:
              (o =
                (s = t == null ? void 0 : t.perPage) === null || s === void 0
                  ? void 0
                  : s.toString()) !== null && o !== void 0
                ? o
                : "",
          },
          xform: qp,
        });
      if (c.error) throw c.error;
      const p = await c.json(),
        f =
          (i = c.headers.get("x-total-count")) !== null && i !== void 0 ? i : 0,
        d =
          (l =
            (a = c.headers.get("link")) === null || a === void 0
              ? void 0
              : a.split(",")) !== null && l !== void 0
            ? l
            : [];
      return (
        d.length > 0 &&
          (d.forEach((w) => {
            const y = parseInt(w.split(";")[0].split("=")[1].substring(0, 1)),
              x = JSON.parse(w.split(";")[1].split("=")[1]);
            u[`${x}Page`] = y;
          }),
          (u.total = parseInt(f))),
        { data: Object.assign(Object.assign({}, p), u), error: null }
      );
    } catch (u) {
      if (U(u)) return { data: { users: [] }, error: u };
      throw u;
    }
  }
  async getUserById(t) {
    Qn(t);
    try {
      return await V(this.fetch, "GET", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        xform: Or,
      });
    } catch (r) {
      if (U(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async updateUserById(t, r) {
    Qn(t);
    try {
      return await V(this.fetch, "PUT", `${this.url}/admin/users/${t}`, {
        body: r,
        headers: this.headers,
        xform: Or,
      });
    } catch (n) {
      if (U(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async deleteUser(t, r = !1) {
    Qn(t);
    try {
      return await V(this.fetch, "DELETE", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        body: { should_soft_delete: r },
        xform: Or,
      });
    } catch (n) {
      if (U(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async _listFactors(t) {
    Qn(t.userId);
    try {
      const { data: r, error: n } = await V(
        this.fetch,
        "GET",
        `${this.url}/admin/users/${t.userId}/factors`,
        {
          headers: this.headers,
          xform: (s) => ({ data: { factors: s }, error: null }),
        },
      );
      return { data: r, error: n };
    } catch (r) {
      if (U(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _deleteFactor(t) {
    (Qn(t.userId), Qn(t.id));
    try {
      return {
        data: await V(
          this.fetch,
          "DELETE",
          `${this.url}/admin/users/${t.userId}/factors/${t.id}`,
          { headers: this.headers },
        ),
        error: null,
      };
    } catch (r) {
      if (U(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _listOAuthClients(t) {
    var r, n, s, o, i, a, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 },
        c = await V(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (n =
                (r = t == null ? void 0 : t.page) === null || r === void 0
                  ? void 0
                  : r.toString()) !== null && n !== void 0
                ? n
                : "",
            per_page:
              (o =
                (s = t == null ? void 0 : t.perPage) === null || s === void 0
                  ? void 0
                  : s.toString()) !== null && o !== void 0
                ? o
                : "",
          },
          xform: qp,
        });
      if (c.error) throw c.error;
      const p = await c.json(),
        f =
          (i = c.headers.get("x-total-count")) !== null && i !== void 0 ? i : 0,
        d =
          (l =
            (a = c.headers.get("link")) === null || a === void 0
              ? void 0
              : a.split(",")) !== null && l !== void 0
            ? l
            : [];
      return (
        d.length > 0 &&
          (d.forEach((w) => {
            const y = parseInt(w.split(";")[0].split("=")[1].substring(0, 1)),
              x = JSON.parse(w.split(";")[1].split("=")[1]);
            u[`${x}Page`] = y;
          }),
          (u.total = parseInt(f))),
        { data: Object.assign(Object.assign({}, p), u), error: null }
      );
    } catch (u) {
      if (U(u)) return { data: { clients: [] }, error: u };
      throw u;
    }
  }
  async _createOAuthClient(t) {
    try {
      return await V(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: t,
        headers: this.headers,
        xform: (r) => ({ data: r, error: null }),
      });
    } catch (r) {
      if (U(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _getOAuthClient(t) {
    try {
      return await V(
        this.fetch,
        "GET",
        `${this.url}/admin/oauth/clients/${t}`,
        { headers: this.headers, xform: (r) => ({ data: r, error: null }) },
      );
    } catch (r) {
      if (U(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _updateOAuthClient(t, r) {
    try {
      return await V(
        this.fetch,
        "PUT",
        `${this.url}/admin/oauth/clients/${t}`,
        {
          body: r,
          headers: this.headers,
          xform: (n) => ({ data: n, error: null }),
        },
      );
    } catch (n) {
      if (U(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _deleteOAuthClient(t) {
    try {
      return (
        await V(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${t}`, {
          headers: this.headers,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (r) {
      if (U(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _regenerateOAuthClientSecret(t) {
    try {
      return await V(
        this.fetch,
        "POST",
        `${this.url}/admin/oauth/clients/${t}/regenerate_secret`,
        { headers: this.headers, xform: (r) => ({ data: r, error: null }) },
      );
    } catch (r) {
      if (U(r)) return { data: null, error: r };
      throw r;
    }
  }
}
function Kp(e = {}) {
  return {
    getItem: (t) => e[t] || null,
    setItem: (t, r) => {
      e[t] = r;
    },
    removeItem: (t) => {
      delete e[t];
    },
  };
}
const Jn = {
  debug: !!(
    globalThis &&
    Lv() &&
    globalThis.localStorage &&
    globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true"
  ),
};
class Mv extends Error {
  constructor(t) {
    (super(t), (this.isAcquireTimeout = !0));
  }
}
class BT extends Mv {}
async function zT(e, t, r) {
  Jn.debug &&
    console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
  const n = new globalThis.AbortController();
  return (
    t > 0 &&
      setTimeout(() => {
        (n.abort(),
          Jn.debug &&
            console.log(
              "@supabase/gotrue-js: navigatorLock acquire timed out",
              e,
            ));
      }, t),
    await Promise.resolve().then(() =>
      globalThis.navigator.locks.request(
        e,
        t === 0
          ? { mode: "exclusive", ifAvailable: !0 }
          : { mode: "exclusive", signal: n.signal },
        async (s) => {
          if (s) {
            Jn.debug &&
              console.log(
                "@supabase/gotrue-js: navigatorLock: acquired",
                e,
                s.name,
              );
            try {
              return await r();
            } finally {
              Jn.debug &&
                console.log(
                  "@supabase/gotrue-js: navigatorLock: released",
                  e,
                  s.name,
                );
            }
          } else {
            if (t === 0)
              throw (
                Jn.debug &&
                  console.log(
                    "@supabase/gotrue-js: navigatorLock: not immediately available",
                    e,
                  ),
                new BT(
                  `Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`,
                )
              );
            if (Jn.debug)
              try {
                const o = await globalThis.navigator.locks.query();
                console.log(
                  "@supabase/gotrue-js: Navigator LockManager state",
                  JSON.stringify(o, null, "  "),
                );
              } catch (o) {
                console.warn(
                  "@supabase/gotrue-js: Error when querying Navigator LockManager state",
                  o,
                );
              }
            return (
              console.warn(
                "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request",
              ),
              await r()
            );
          }
        },
      ),
    )
  );
}
function VT() {
  if (typeof globalThis != "object")
    try {
      (Object.defineProperty(Object.prototype, "__magic__", {
        get: function () {
          return this;
        },
        configurable: !0,
      }),
        (__magic__.globalThis = __magic__),
        delete Object.prototype.__magic__);
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
function Dv(e) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(e))
    throw new Error(`@supabase/auth-js: Address "${e}" is invalid.`);
  return e.toLowerCase();
}
function WT(e) {
  return parseInt(e, 16);
}
function HT(e) {
  const t = new TextEncoder().encode(e);
  return "0x" + Array.from(t, (n) => n.toString(16).padStart(2, "0")).join("");
}
function qT(e) {
  var t;
  const {
    chainId: r,
    domain: n,
    expirationTime: s,
    issuedAt: o = new Date(),
    nonce: i,
    notBefore: a,
    requestId: l,
    resources: u,
    scheme: c,
    uri: p,
    version: f,
  } = e;
  {
    if (!Number.isInteger(r))
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`,
      );
    if (!n)
      throw new Error(
        '@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.',
      );
    if (i && i.length < 8)
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${i}`,
      );
    if (!p)
      throw new Error(
        '@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.',
      );
    if (f !== "1")
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${f}`,
      );
    if (
      !((t = e.statement) === null || t === void 0) &&
      t.includes(`
`)
    )
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`,
      );
  }
  const d = Dv(e.address),
    w = c ? `${c}://${n}` : n,
    y = e.statement
      ? `${e.statement}
`
      : "",
    x = `${w} wants you to sign in with your Ethereum account:
${d}

${y}`;
  let g = `URI: ${p}
Version: ${f}
Chain ID: ${r}${
    i
      ? `
Nonce: ${i}`
      : ""
  }
Issued At: ${o.toISOString()}`;
  if (
    (s &&
      (g += `
Expiration Time: ${s.toISOString()}`),
    a &&
      (g += `
Not Before: ${a.toISOString()}`),
    l &&
      (g += `
Request ID: ${l}`),
    u)
  ) {
    let m = `
Resources:`;
    for (const v of u) {
      if (!v || typeof v != "string")
        throw new Error(
          `@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${v}`,
        );
      m += `
- ${v}`;
    }
    g += m;
  }
  return `${x}
${g}`;
}
class _e extends Error {
  constructor({ message: t, code: r, cause: n, name: s }) {
    var o;
    (super(t, { cause: n }),
      (this.__isWebAuthnError = !0),
      (this.name =
        (o = s ?? (n instanceof Error ? n.name : void 0)) !== null &&
        o !== void 0
          ? o
          : "Unknown Error"),
      (this.code = r));
  }
}
class Ka extends _e {
  constructor(t, r) {
    (super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: r,
      message: t,
    }),
      (this.name = "WebAuthnUnknownError"),
      (this.originalError = r));
  }
}
function KT({ error: e, options: t }) {
  var r, n, s;
  const { publicKey: o } = t;
  if (!o) throw Error("options was missing required publicKey property");
  if (e.name === "AbortError") {
    if (t.signal instanceof AbortSignal)
      return new _e({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: e,
      });
  } else if (e.name === "ConstraintError") {
    if (
      ((r = o.authenticatorSelection) === null || r === void 0
        ? void 0
        : r.requireResidentKey) === !0
    )
      return new _e({
        message:
          "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: e,
      });
    if (
      t.mediation === "conditional" &&
      ((n = o.authenticatorSelection) === null || n === void 0
        ? void 0
        : n.userVerification) === "required"
    )
      return new _e({
        message:
          "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: e,
      });
    if (
      ((s = o.authenticatorSelection) === null || s === void 0
        ? void 0
        : s.userVerification) === "required"
    )
      return new _e({
        message:
          "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: e,
      });
  } else {
    if (e.name === "InvalidStateError")
      return new _e({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: e,
      });
    if (e.name === "NotAllowedError")
      return new _e({
        message: e.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: e,
      });
    if (e.name === "NotSupportedError")
      return o.pubKeyCredParams.filter((a) => a.type === "public-key")
        .length === 0
        ? new _e({
            message: 'No entry in pubKeyCredParams was of type "public-key"',
            code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
            cause: e,
          })
        : new _e({
            message:
              "No available authenticator supported any of the specified pubKeyCredParams algorithms",
            code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
            cause: e,
          });
    if (e.name === "SecurityError") {
      const i = window.location.hostname;
      if (Fv(i)) {
        if (o.rp.id !== i)
          return new _e({
            message: `The RP ID "${o.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: e,
          });
      } else
        return new _e({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: e,
        });
    } else if (e.name === "TypeError") {
      if (o.user.id.byteLength < 1 || o.user.id.byteLength > 64)
        return new _e({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: e,
        });
    } else if (e.name === "UnknownError")
      return new _e({
        message:
          "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: e,
      });
  }
  return new _e({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: e,
  });
}
function GT({ error: e, options: t }) {
  const { publicKey: r } = t;
  if (!r) throw Error("options was missing required publicKey property");
  if (e.name === "AbortError") {
    if (t.signal instanceof AbortSignal)
      return new _e({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: e,
      });
  } else {
    if (e.name === "NotAllowedError")
      return new _e({
        message: e.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: e,
      });
    if (e.name === "SecurityError") {
      const n = window.location.hostname;
      if (Fv(n)) {
        if (r.rpId !== n)
          return new _e({
            message: `The RP ID "${r.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: e,
          });
      } else
        return new _e({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: e,
        });
    } else if (e.name === "UnknownError")
      return new _e({
        message:
          "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: e,
      });
  }
  return new _e({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: e,
  });
}
class QT {
  createNewAbortSignal() {
    if (this.controller) {
      const r = new Error("Cancelling existing WebAuthn API call for new one");
      ((r.name = "AbortError"), this.controller.abort(r));
    }
    const t = new AbortController();
    return ((this.controller = t), t.signal);
  }
  cancelCeremony() {
    if (this.controller) {
      const t = new Error("Manually cancelling existing WebAuthn API call");
      ((t.name = "AbortError"),
        this.controller.abort(t),
        (this.controller = void 0));
    }
  }
}
const JT = new QT();
function YT(e) {
  if (!e) throw new Error("Credential creation options are required");
  if (
    typeof PublicKeyCredential < "u" &&
    "parseCreationOptionsFromJSON" in PublicKeyCredential &&
    typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function"
  )
    return PublicKeyCredential.parseCreationOptionsFromJSON(e);
  const { challenge: t, user: r, excludeCredentials: n } = e,
    s = Pl(e, ["challenge", "user", "excludeCredentials"]),
    o = Ss(t).buffer,
    i = Object.assign(Object.assign({}, r), { id: Ss(r.id).buffer }),
    a = Object.assign(Object.assign({}, s), { challenge: o, user: i });
  if (n && n.length > 0) {
    a.excludeCredentials = new Array(n.length);
    for (let l = 0; l < n.length; l++) {
      const u = n[l];
      a.excludeCredentials[l] = Object.assign(Object.assign({}, u), {
        id: Ss(u.id).buffer,
        type: u.type || "public-key",
        transports: u.transports,
      });
    }
  }
  return a;
}
function XT(e) {
  if (!e) throw new Error("Credential request options are required");
  if (
    typeof PublicKeyCredential < "u" &&
    "parseRequestOptionsFromJSON" in PublicKeyCredential &&
    typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function"
  )
    return PublicKeyCredential.parseRequestOptionsFromJSON(e);
  const { challenge: t, allowCredentials: r } = e,
    n = Pl(e, ["challenge", "allowCredentials"]),
    s = Ss(t).buffer,
    o = Object.assign(Object.assign({}, n), { challenge: s });
  if (r && r.length > 0) {
    o.allowCredentials = new Array(r.length);
    for (let i = 0; i < r.length; i++) {
      const a = r[i];
      o.allowCredentials[i] = Object.assign(Object.assign({}, a), {
        id: Ss(a.id).buffer,
        type: a.type || "public-key",
        transports: a.transports,
      });
    }
  }
  return o;
}
function ZT(e) {
  var t;
  if ("toJSON" in e && typeof e.toJSON == "function") return e.toJSON();
  const r = e;
  return {
    id: e.id,
    rawId: e.id,
    response: {
      attestationObject: bn(new Uint8Array(e.response.attestationObject)),
      clientDataJSON: bn(new Uint8Array(e.response.clientDataJSON)),
    },
    type: "public-key",
    clientExtensionResults: e.getClientExtensionResults(),
    authenticatorAttachment:
      (t = r.authenticatorAttachment) !== null && t !== void 0 ? t : void 0,
  };
}
function eP(e) {
  var t;
  if ("toJSON" in e && typeof e.toJSON == "function") return e.toJSON();
  const r = e,
    n = e.getClientExtensionResults(),
    s = e.response;
  return {
    id: e.id,
    rawId: e.id,
    response: {
      authenticatorData: bn(new Uint8Array(s.authenticatorData)),
      clientDataJSON: bn(new Uint8Array(s.clientDataJSON)),
      signature: bn(new Uint8Array(s.signature)),
      userHandle: s.userHandle ? bn(new Uint8Array(s.userHandle)) : void 0,
    },
    type: "public-key",
    clientExtensionResults: n,
    authenticatorAttachment:
      (t = r.authenticatorAttachment) !== null && t !== void 0 ? t : void 0,
  };
}
function Fv(e) {
  return e === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e);
}
function Gp() {
  var e, t;
  return !!(
    je() &&
    "PublicKeyCredential" in window &&
    window.PublicKeyCredential &&
    "credentials" in navigator &&
    typeof ((e = navigator == null ? void 0 : navigator.credentials) === null ||
    e === void 0
      ? void 0
      : e.create) == "function" &&
    typeof ((t = navigator == null ? void 0 : navigator.credentials) === null ||
    t === void 0
      ? void 0
      : t.get) == "function"
  );
}
async function tP(e) {
  try {
    const t = await navigator.credentials.create(e);
    return t
      ? t instanceof PublicKeyCredential
        ? { data: t, error: null }
        : {
            data: null,
            error: new Ka("Browser returned unexpected credential type", t),
          }
      : { data: null, error: new Ka("Empty credential response", t) };
  } catch (t) {
    return { data: null, error: KT({ error: t, options: e }) };
  }
}
async function rP(e) {
  try {
    const t = await navigator.credentials.get(e);
    return t
      ? t instanceof PublicKeyCredential
        ? { data: t, error: null }
        : {
            data: null,
            error: new Ka("Browser returned unexpected credential type", t),
          }
      : { data: null, error: new Ka("Empty credential response", t) };
  } catch (t) {
    return { data: null, error: GT({ error: t, options: e }) };
  }
}
const nP = {
    hints: ["security-key"],
    authenticatorSelection: {
      authenticatorAttachment: "cross-platform",
      requireResidentKey: !1,
      userVerification: "preferred",
      residentKey: "discouraged",
    },
    attestation: "direct",
  },
  sP = {
    userVerification: "preferred",
    hints: ["security-key"],
    attestation: "direct",
  };
function Ga(...e) {
  const t = (s) => s !== null && typeof s == "object" && !Array.isArray(s),
    r = (s) => s instanceof ArrayBuffer || ArrayBuffer.isView(s),
    n = {};
  for (const s of e)
    if (s)
      for (const o in s) {
        const i = s[o];
        if (i !== void 0)
          if (Array.isArray(i)) n[o] = i;
          else if (r(i)) n[o] = i;
          else if (t(i)) {
            const a = n[o];
            t(a) ? (n[o] = Ga(a, i)) : (n[o] = Ga(i));
          } else n[o] = i;
      }
  return n;
}
function oP(e, t) {
  return Ga(nP, e, t || {});
}
function iP(e, t) {
  return Ga(sP, e, t || {});
}
class aP {
  constructor(t) {
    ((this.client = t),
      (this.enroll = this._enroll.bind(this)),
      (this.challenge = this._challenge.bind(this)),
      (this.verify = this._verify.bind(this)),
      (this.authenticate = this._authenticate.bind(this)),
      (this.register = this._register.bind(this)));
  }
  async _enroll(t) {
    return this.client.mfa.enroll(
      Object.assign(Object.assign({}, t), { factorType: "webauthn" }),
    );
  }
  async _challenge(
    { factorId: t, webauthn: r, friendlyName: n, signal: s },
    o,
  ) {
    try {
      const { data: i, error: a } = await this.client.mfa.challenge({
        factorId: t,
        webauthn: r,
      });
      if (!i) return { data: null, error: a };
      const l = s ?? JT.createNewAbortSignal();
      if (i.webauthn.type === "create") {
        const { user: u } = i.webauthn.credential_options.publicKey;
        (u.name || (u.name = `${u.id}:${n}`),
          u.displayName || (u.displayName = u.name));
      }
      switch (i.webauthn.type) {
        case "create": {
          const u = oP(
              i.webauthn.credential_options.publicKey,
              o == null ? void 0 : o.create,
            ),
            { data: c, error: p } = await tP({ publicKey: u, signal: l });
          return c
            ? {
                data: {
                  factorId: t,
                  challengeId: i.id,
                  webauthn: { type: i.webauthn.type, credential_response: c },
                },
                error: null,
              }
            : { data: null, error: p };
        }
        case "request": {
          const u = iP(
              i.webauthn.credential_options.publicKey,
              o == null ? void 0 : o.request,
            ),
            { data: c, error: p } = await rP(
              Object.assign(Object.assign({}, i.webauthn.credential_options), {
                publicKey: u,
                signal: l,
              }),
            );
          return c
            ? {
                data: {
                  factorId: t,
                  challengeId: i.id,
                  webauthn: { type: i.webauthn.type, credential_response: c },
                },
                error: null,
              }
            : { data: null, error: p };
        }
      }
    } catch (i) {
      return U(i)
        ? { data: null, error: i }
        : { data: null, error: new yn("Unexpected error in challenge", i) };
    }
  }
  async _verify({ challengeId: t, factorId: r, webauthn: n }) {
    return this.client.mfa.verify({ factorId: r, challengeId: t, webauthn: n });
  }
  async _authenticate(
    {
      factorId: t,
      webauthn: {
        rpId: r = typeof window < "u" ? window.location.hostname : void 0,
        rpOrigins: n = typeof window < "u" ? [window.location.origin] : void 0,
        signal: s,
      } = {},
    },
    o,
  ) {
    if (!r)
      return {
        data: null,
        error: new ni("rpId is required for WebAuthn authentication"),
      };
    try {
      if (!Gp())
        return {
          data: null,
          error: new yn("Browser does not support WebAuthn", null),
        };
      const { data: i, error: a } = await this.challenge(
        { factorId: t, webauthn: { rpId: r, rpOrigins: n }, signal: s },
        { request: o },
      );
      if (!i) return { data: null, error: a };
      const { webauthn: l } = i;
      return this._verify({
        factorId: t,
        challengeId: i.challengeId,
        webauthn: {
          type: l.type,
          rpId: r,
          rpOrigins: n,
          credential_response: l.credential_response,
        },
      });
    } catch (i) {
      return U(i)
        ? { data: null, error: i }
        : { data: null, error: new yn("Unexpected error in authenticate", i) };
    }
  }
  async _register(
    {
      friendlyName: t,
      webauthn: {
        rpId: r = typeof window < "u" ? window.location.hostname : void 0,
        rpOrigins: n = typeof window < "u" ? [window.location.origin] : void 0,
        signal: s,
      } = {},
    },
    o,
  ) {
    if (!r)
      return {
        data: null,
        error: new ni("rpId is required for WebAuthn registration"),
      };
    try {
      if (!Gp())
        return {
          data: null,
          error: new yn("Browser does not support WebAuthn", null),
        };
      const { data: i, error: a } = await this._enroll({ friendlyName: t });
      if (!i)
        return (
          await this.client.mfa
            .listFactors()
            .then((c) => {
              var p;
              return (p = c.data) === null || p === void 0
                ? void 0
                : p.all.find(
                    (f) =>
                      f.factor_type === "webauthn" &&
                      f.friendly_name === t &&
                      f.status !== "unverified",
                  );
            })
            .then((c) =>
              c
                ? this.client.mfa.unenroll({
                    factorId: c == null ? void 0 : c.id,
                  })
                : void 0,
            ),
          { data: null, error: a }
        );
      const { data: l, error: u } = await this._challenge(
        {
          factorId: i.id,
          friendlyName: i.friendly_name,
          webauthn: { rpId: r, rpOrigins: n },
          signal: s,
        },
        { create: o },
      );
      return l
        ? this._verify({
            factorId: i.id,
            challengeId: l.challengeId,
            webauthn: {
              rpId: r,
              rpOrigins: n,
              type: l.webauthn.type,
              credential_response: l.webauthn.credential_response,
            },
          })
        : { data: null, error: u };
    } catch (i) {
      return U(i)
        ? { data: null, error: i }
        : { data: null, error: new yn("Unexpected error in register", i) };
    }
  }
}
VT();
const lP = {
  url: nT,
  storageKey: sT,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: oT,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1,
  throwOnError: !1,
  lockAcquireTimeout: 1e4,
};
async function Qp(e, t, r) {
  return await r();
}
const Yn = {};
class si {
  get jwks() {
    var t, r;
    return (r =
      (t = Yn[this.storageKey]) === null || t === void 0 ? void 0 : t.jwks) !==
      null && r !== void 0
      ? r
      : { keys: [] };
  }
  set jwks(t) {
    Yn[this.storageKey] = Object.assign(
      Object.assign({}, Yn[this.storageKey]),
      { jwks: t },
    );
  }
  get jwks_cached_at() {
    var t, r;
    return (r =
      (t = Yn[this.storageKey]) === null || t === void 0
        ? void 0
        : t.cachedAt) !== null && r !== void 0
      ? r
      : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(t) {
    Yn[this.storageKey] = Object.assign(
      Object.assign({}, Yn[this.storageKey]),
      { cachedAt: t },
    );
  }
  constructor(t) {
    var r, n, s;
    ((this.userStorage = null),
      (this.memoryStorage = null),
      (this.stateChangeEmitters = new Map()),
      (this.autoRefreshTicker = null),
      (this.autoRefreshTickTimeout = null),
      (this.visibilityChangedCallback = null),
      (this.refreshingDeferred = null),
      (this.initializePromise = null),
      (this.detectSessionInUrl = !0),
      (this.hasCustomAuthorizationHeader = !1),
      (this.suppressGetSessionWarning = !1),
      (this.lockAcquired = !1),
      (this.pendingInLock = []),
      (this.broadcastChannel = null),
      (this.logger = console.log));
    const o = Object.assign(Object.assign({}, lP), t);
    if (
      ((this.storageKey = o.storageKey),
      (this.instanceID =
        (r = si.nextInstanceID[this.storageKey]) !== null && r !== void 0
          ? r
          : 0),
      (si.nextInstanceID[this.storageKey] = this.instanceID + 1),
      (this.logDebugMessages = !!o.debug),
      typeof o.debug == "function" && (this.logger = o.debug),
      this.instanceID > 0 && je())
    ) {
      const i = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      (console.warn(i), this.logDebugMessages && console.trace(i));
    }
    if (
      ((this.persistSession = o.persistSession),
      (this.autoRefreshToken = o.autoRefreshToken),
      (this.admin = new UT({ url: o.url, headers: o.headers, fetch: o.fetch })),
      (this.url = o.url),
      (this.headers = o.headers),
      (this.fetch = $v(o.fetch)),
      (this.lock = o.lock || Qp),
      (this.detectSessionInUrl = o.detectSessionInUrl),
      (this.flowType = o.flowType),
      (this.hasCustomAuthorizationHeader = o.hasCustomAuthorizationHeader),
      (this.throwOnError = o.throwOnError),
      (this.lockAcquireTimeout = o.lockAcquireTimeout),
      o.lock
        ? (this.lock = o.lock)
        : this.persistSession &&
            je() &&
            !(
              (n = globalThis == null ? void 0 : globalThis.navigator) ===
                null || n === void 0
            ) &&
            n.locks
          ? (this.lock = zT)
          : (this.lock = Qp),
      this.jwks ||
        ((this.jwks = { keys: [] }),
        (this.jwks_cached_at = Number.MIN_SAFE_INTEGER)),
      (this.mfa = {
        verify: this._verify.bind(this),
        enroll: this._enroll.bind(this),
        unenroll: this._unenroll.bind(this),
        challenge: this._challenge.bind(this),
        listFactors: this._listFactors.bind(this),
        challengeAndVerify: this._challengeAndVerify.bind(this),
        getAuthenticatorAssuranceLevel:
          this._getAuthenticatorAssuranceLevel.bind(this),
        webauthn: new aP(this),
      }),
      (this.oauth = {
        getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
        approveAuthorization: this._approveAuthorization.bind(this),
        denyAuthorization: this._denyAuthorization.bind(this),
        listGrants: this._listOAuthGrants.bind(this),
        revokeGrant: this._revokeOAuthGrant.bind(this),
      }),
      this.persistSession
        ? (o.storage
            ? (this.storage = o.storage)
            : Lv()
              ? (this.storage = globalThis.localStorage)
              : ((this.memoryStorage = {}),
                (this.storage = Kp(this.memoryStorage))),
          o.userStorage && (this.userStorage = o.userStorage))
        : ((this.memoryStorage = {}), (this.storage = Kp(this.memoryStorage))),
      je() &&
        globalThis.BroadcastChannel &&
        this.persistSession &&
        this.storageKey)
    ) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(
          this.storageKey,
        );
      } catch (i) {
        console.error(
          "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
          i,
        );
      }
      (s = this.broadcastChannel) === null ||
        s === void 0 ||
        s.addEventListener("message", async (i) => {
          (this._debug(
            "received broadcast notification from other tab or client",
            i,
          ),
            await this._notifyAllSubscribers(i.data.event, i.data.session, !1));
        });
    }
    this.initialize();
  }
  isThrowOnErrorEnabled() {
    return this.throwOnError;
  }
  _returnResult(t) {
    if (this.throwOnError && t && t.error) throw t.error;
    return t;
  }
  _logPrefix() {
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${Av}) ${new Date().toISOString()}`;
  }
  _debug(...t) {
    return (
      this.logDebugMessages && this.logger(this._logPrefix(), ...t),
      this
    );
  }
  async initialize() {
    return this.initializePromise
      ? await this.initializePromise
      : ((this.initializePromise = (async () =>
          await this._acquireLock(
            this.lockAcquireTimeout,
            async () => await this._initialize(),
          ))()),
        await this.initializePromise);
  }
  async _initialize() {
    var t;
    try {
      let r = {},
        n = "none";
      if (
        (je() &&
          ((r = xT(window.location.href)),
          this._isImplicitGrantCallback(r)
            ? (n = "implicit")
            : (await this._isPKCECallback(r)) && (n = "pkce")),
        je() && this.detectSessionInUrl && n !== "none")
      ) {
        const { data: s, error: o } = await this._getSessionFromURL(r, n);
        if (o) {
          if (
            (this._debug(
              "#_initialize()",
              "error detecting session from URL",
              o,
            ),
            dT(o))
          ) {
            const l =
              (t = o.details) === null || t === void 0 ? void 0 : t.code;
            if (
              l === "identity_already_exists" ||
              l === "identity_not_found" ||
              l === "single_identity_not_deletable"
            )
              return { error: o };
          }
          return { error: o };
        }
        const { session: i, redirectType: a } = s;
        return (
          this._debug(
            "#_initialize()",
            "detected session in URL",
            i,
            "redirect type",
            a,
          ),
          await this._saveSession(i),
          setTimeout(async () => {
            a === "recovery"
              ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", i)
              : await this._notifyAllSubscribers("SIGNED_IN", i);
          }, 0),
          { error: null }
        );
      }
      return (await this._recoverAndRefresh(), { error: null });
    } catch (r) {
      return U(r)
        ? this._returnResult({ error: r })
        : this._returnResult({
            error: new yn("Unexpected error during initialization", r),
          });
    } finally {
      (await this._handleVisibilityChange(),
        this._debug("#_initialize()", "end"));
    }
  }
  async signInAnonymously(t) {
    var r, n, s;
    try {
      const o = await V(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            data:
              (n =
                (r = t == null ? void 0 : t.options) === null || r === void 0
                  ? void 0
                  : r.data) !== null && n !== void 0
                ? n
                : {},
            gotrue_meta_security: {
              captcha_token:
                (s = t == null ? void 0 : t.options) === null || s === void 0
                  ? void 0
                  : s.captchaToken,
            },
          },
          xform: Tt,
        }),
        { data: i, error: a } = o;
      if (a || !i)
        return this._returnResult({
          data: { user: null, session: null },
          error: a,
        });
      const l = i.session,
        u = i.user;
      return (
        i.session &&
          (await this._saveSession(i.session),
          await this._notifyAllSubscribers("SIGNED_IN", l)),
        this._returnResult({ data: { user: u, session: l }, error: null })
      );
    } catch (o) {
      if (U(o))
        return this._returnResult({
          data: { user: null, session: null },
          error: o,
        });
      throw o;
    }
  }
  async signUp(t) {
    var r, n, s;
    try {
      let o;
      if ("email" in t) {
        const { email: c, password: p, options: f } = t;
        let d = null,
          w = null;
        (this.flowType === "pkce" &&
          ([d, w] = await Gn(this.storage, this.storageKey)),
          (o = await V(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            redirectTo: f == null ? void 0 : f.emailRedirectTo,
            body: {
              email: c,
              password: p,
              data:
                (r = f == null ? void 0 : f.data) !== null && r !== void 0
                  ? r
                  : {},
              gotrue_meta_security: {
                captcha_token: f == null ? void 0 : f.captchaToken,
              },
              code_challenge: d,
              code_challenge_method: w,
            },
            xform: Tt,
          })));
      } else if ("phone" in t) {
        const { phone: c, password: p, options: f } = t;
        o = await V(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: c,
            password: p,
            data:
              (n = f == null ? void 0 : f.data) !== null && n !== void 0
                ? n
                : {},
            channel:
              (s = f == null ? void 0 : f.channel) !== null && s !== void 0
                ? s
                : "sms",
            gotrue_meta_security: {
              captcha_token: f == null ? void 0 : f.captchaToken,
            },
          },
          xform: Tt,
        });
      } else
        throw new Ji(
          "You must provide either an email or phone number and a password",
        );
      const { data: i, error: a } = o;
      if (a || !i)
        return (
          await Ne(this.storage, `${this.storageKey}-code-verifier`),
          this._returnResult({ data: { user: null, session: null }, error: a })
        );
      const l = i.session,
        u = i.user;
      return (
        i.session &&
          (await this._saveSession(i.session),
          await this._notifyAllSubscribers("SIGNED_IN", l)),
        this._returnResult({ data: { user: u, session: l }, error: null })
      );
    } catch (o) {
      if ((await Ne(this.storage, `${this.storageKey}-code-verifier`), U(o)))
        return this._returnResult({
          data: { user: null, session: null },
          error: o,
        });
      throw o;
    }
  }
  async signInWithPassword(t) {
    try {
      let r;
      if ("email" in t) {
        const { email: o, password: i, options: a } = t;
        r = await V(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              email: o,
              password: i,
              gotrue_meta_security: {
                captcha_token: a == null ? void 0 : a.captchaToken,
              },
            },
            xform: Hp,
          },
        );
      } else if ("phone" in t) {
        const { phone: o, password: i, options: a } = t;
        r = await V(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              phone: o,
              password: i,
              gotrue_meta_security: {
                captcha_token: a == null ? void 0 : a.captchaToken,
              },
            },
            xform: Hp,
          },
        );
      } else
        throw new Ji(
          "You must provide either an email or phone number and a password",
        );
      const { data: n, error: s } = r;
      if (s)
        return this._returnResult({
          data: { user: null, session: null },
          error: s,
        });
      if (!n || !n.session || !n.user) {
        const o = new Kn();
        return this._returnResult({
          data: { user: null, session: null },
          error: o,
        });
      }
      return (
        n.session &&
          (await this._saveSession(n.session),
          await this._notifyAllSubscribers("SIGNED_IN", n.session)),
        this._returnResult({
          data: Object.assign(
            { user: n.user, session: n.session },
            n.weak_password ? { weakPassword: n.weak_password } : null,
          ),
          error: s,
        })
      );
    } catch (r) {
      if (U(r))
        return this._returnResult({
          data: { user: null, session: null },
          error: r,
        });
      throw r;
    }
  }
  async signInWithOAuth(t) {
    var r, n, s, o;
    return await this._handleProviderSignIn(t.provider, {
      redirectTo:
        (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo,
      scopes: (n = t.options) === null || n === void 0 ? void 0 : n.scopes,
      queryParams:
        (s = t.options) === null || s === void 0 ? void 0 : s.queryParams,
      skipBrowserRedirect:
        (o = t.options) === null || o === void 0
          ? void 0
          : o.skipBrowserRedirect,
    });
  }
  async exchangeCodeForSession(t) {
    return (
      await this.initializePromise,
      this._acquireLock(this.lockAcquireTimeout, async () =>
        this._exchangeCodeForSession(t),
      )
    );
  }
  async signInWithWeb3(t) {
    const { chain: r } = t;
    switch (r) {
      case "ethereum":
        return await this.signInWithEthereum(t);
      case "solana":
        return await this.signInWithSolana(t);
      default:
        throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`);
    }
  }
  async signInWithEthereum(t) {
    var r, n, s, o, i, a, l, u, c, p, f;
    let d, w;
    if ("message" in t) ((d = t.message), (w = t.signature));
    else {
      const { chain: y, wallet: x, statement: g, options: m } = t;
      let v;
      if (je())
        if (typeof x == "object") v = x;
        else {
          const j = window;
          if (
            "ethereum" in j &&
            typeof j.ethereum == "object" &&
            "request" in j.ethereum &&
            typeof j.ethereum.request == "function"
          )
            v = j.ethereum;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.",
            );
        }
      else {
        if (typeof x != "object" || !(m != null && m.url))
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments.",
          );
        v = x;
      }
      const b = new URL(
          (r = m == null ? void 0 : m.url) !== null && r !== void 0
            ? r
            : window.location.href,
        ),
        E = await v
          .request({ method: "eth_requestAccounts" })
          .then((j) => j)
          .catch(() => {
            throw new Error(
              "@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid",
            );
          });
      if (!E || E.length === 0)
        throw new Error(
          "@supabase/auth-js: No accounts available. Please ensure the wallet is connected.",
        );
      const S = Dv(E[0]);
      let k =
        (n = m == null ? void 0 : m.signInWithEthereum) === null || n === void 0
          ? void 0
          : n.chainId;
      if (!k) {
        const j = await v.request({ method: "eth_chainId" });
        k = WT(j);
      }
      const T = {
        domain: b.host,
        address: S,
        statement: g,
        uri: b.href,
        version: "1",
        chainId: k,
        nonce:
          (s = m == null ? void 0 : m.signInWithEthereum) === null ||
          s === void 0
            ? void 0
            : s.nonce,
        issuedAt:
          (i =
            (o = m == null ? void 0 : m.signInWithEthereum) === null ||
            o === void 0
              ? void 0
              : o.issuedAt) !== null && i !== void 0
            ? i
            : new Date(),
        expirationTime:
          (a = m == null ? void 0 : m.signInWithEthereum) === null ||
          a === void 0
            ? void 0
            : a.expirationTime,
        notBefore:
          (l = m == null ? void 0 : m.signInWithEthereum) === null ||
          l === void 0
            ? void 0
            : l.notBefore,
        requestId:
          (u = m == null ? void 0 : m.signInWithEthereum) === null ||
          u === void 0
            ? void 0
            : u.requestId,
        resources:
          (c = m == null ? void 0 : m.signInWithEthereum) === null ||
          c === void 0
            ? void 0
            : c.resources,
      };
      ((d = qT(T)),
        (w = await v.request({ method: "personal_sign", params: [HT(d), S] })));
    }
    try {
      const { data: y, error: x } = await V(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "ethereum", message: d, signature: w },
            !((p = t.options) === null || p === void 0) && p.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token:
                      (f = t.options) === null || f === void 0
                        ? void 0
                        : f.captchaToken,
                  },
                }
              : null,
          ),
          xform: Tt,
        },
      );
      if (x) throw x;
      if (!y || !y.session || !y.user) {
        const g = new Kn();
        return this._returnResult({
          data: { user: null, session: null },
          error: g,
        });
      }
      return (
        y.session &&
          (await this._saveSession(y.session),
          await this._notifyAllSubscribers("SIGNED_IN", y.session)),
        this._returnResult({ data: Object.assign({}, y), error: x })
      );
    } catch (y) {
      if (U(y))
        return this._returnResult({
          data: { user: null, session: null },
          error: y,
        });
      throw y;
    }
  }
  async signInWithSolana(t) {
    var r, n, s, o, i, a, l, u, c, p, f, d;
    let w, y;
    if ("message" in t) ((w = t.message), (y = t.signature));
    else {
      const { chain: x, wallet: g, statement: m, options: v } = t;
      let b;
      if (je())
        if (typeof g == "object") b = g;
        else {
          const S = window;
          if (
            "solana" in S &&
            typeof S.solana == "object" &&
            (("signIn" in S.solana && typeof S.solana.signIn == "function") ||
              ("signMessage" in S.solana &&
                typeof S.solana.signMessage == "function"))
          )
            b = S.solana;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.",
            );
        }
      else {
        if (typeof g != "object" || !(v != null && v.url))
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments.",
          );
        b = g;
      }
      const E = new URL(
        (r = v == null ? void 0 : v.url) !== null && r !== void 0
          ? r
          : window.location.href,
      );
      if ("signIn" in b && b.signIn) {
        const S = await b.signIn(
          Object.assign(
            Object.assign(
              Object.assign(
                { issuedAt: new Date().toISOString() },
                v == null ? void 0 : v.signInWithSolana,
              ),
              { version: "1", domain: E.host, uri: E.href },
            ),
            m ? { statement: m } : null,
          ),
        );
        let k;
        if (Array.isArray(S) && S[0] && typeof S[0] == "object") k = S[0];
        else if (
          S &&
          typeof S == "object" &&
          "signedMessage" in S &&
          "signature" in S
        )
          k = S;
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() returned unrecognized value",
          );
        if (
          "signedMessage" in k &&
          "signature" in k &&
          (typeof k.signedMessage == "string" ||
            k.signedMessage instanceof Uint8Array) &&
          k.signature instanceof Uint8Array
        )
          ((w =
            typeof k.signedMessage == "string"
              ? k.signedMessage
              : new TextDecoder().decode(k.signedMessage)),
            (y = k.signature));
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields",
          );
      } else {
        if (
          !("signMessage" in b) ||
          typeof b.signMessage != "function" ||
          !("publicKey" in b) ||
          typeof b != "object" ||
          !b.publicKey ||
          !("toBase58" in b.publicKey) ||
          typeof b.publicKey.toBase58 != "function"
        )
          throw new Error(
            "@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API",
          );
        w = [
          `${E.host} wants you to sign in with your Solana account:`,
          b.publicKey.toBase58(),
          ...(m ? ["", m, ""] : [""]),
          "Version: 1",
          `URI: ${E.href}`,
          `Issued At: ${(s = (n = v == null ? void 0 : v.signInWithSolana) === null || n === void 0 ? void 0 : n.issuedAt) !== null && s !== void 0 ? s : new Date().toISOString()}`,
          ...(!(
            (o = v == null ? void 0 : v.signInWithSolana) === null ||
            o === void 0
          ) && o.notBefore
            ? [`Not Before: ${v.signInWithSolana.notBefore}`]
            : []),
          ...(!(
            (i = v == null ? void 0 : v.signInWithSolana) === null ||
            i === void 0
          ) && i.expirationTime
            ? [`Expiration Time: ${v.signInWithSolana.expirationTime}`]
            : []),
          ...(!(
            (a = v == null ? void 0 : v.signInWithSolana) === null ||
            a === void 0
          ) && a.chainId
            ? [`Chain ID: ${v.signInWithSolana.chainId}`]
            : []),
          ...(!(
            (l = v == null ? void 0 : v.signInWithSolana) === null ||
            l === void 0
          ) && l.nonce
            ? [`Nonce: ${v.signInWithSolana.nonce}`]
            : []),
          ...(!(
            (u = v == null ? void 0 : v.signInWithSolana) === null ||
            u === void 0
          ) && u.requestId
            ? [`Request ID: ${v.signInWithSolana.requestId}`]
            : []),
          ...(!(
            (p =
              (c = v == null ? void 0 : v.signInWithSolana) === null ||
              c === void 0
                ? void 0
                : c.resources) === null || p === void 0
          ) && p.length
            ? [
                "Resources",
                ...v.signInWithSolana.resources.map((k) => `- ${k}`),
              ]
            : []),
        ].join(`
`);
        const S = await b.signMessage(new TextEncoder().encode(w), "utf8");
        if (!S || !(S instanceof Uint8Array))
          throw new Error(
            "@supabase/auth-js: Wallet signMessage() API returned an recognized value",
          );
        y = S;
      }
    }
    try {
      const { data: x, error: g } = await V(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "solana", message: w, signature: bn(y) },
            !((f = t.options) === null || f === void 0) && f.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token:
                      (d = t.options) === null || d === void 0
                        ? void 0
                        : d.captchaToken,
                  },
                }
              : null,
          ),
          xform: Tt,
        },
      );
      if (g) throw g;
      if (!x || !x.session || !x.user) {
        const m = new Kn();
        return this._returnResult({
          data: { user: null, session: null },
          error: m,
        });
      }
      return (
        x.session &&
          (await this._saveSession(x.session),
          await this._notifyAllSubscribers("SIGNED_IN", x.session)),
        this._returnResult({ data: Object.assign({}, x), error: g })
      );
    } catch (x) {
      if (U(x))
        return this._returnResult({
          data: { user: null, session: null },
          error: x,
        });
      throw x;
    }
  }
  async _exchangeCodeForSession(t) {
    const r = await hn(this.storage, `${this.storageKey}-code-verifier`),
      [n, s] = (r ?? "").split("/");
    try {
      if (!n && this.flowType === "pkce") throw new hT();
      const { data: o, error: i } = await V(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=pkce`,
        {
          headers: this.headers,
          body: { auth_code: t, code_verifier: n },
          xform: Tt,
        },
      );
      if ((await Ne(this.storage, `${this.storageKey}-code-verifier`), i))
        throw i;
      if (!o || !o.session || !o.user) {
        const a = new Kn();
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: a,
        });
      }
      return (
        o.session &&
          (await this._saveSession(o.session),
          setTimeout(async () => {
            await this._notifyAllSubscribers("SIGNED_IN", o.session);
          }, 0)),
        this._returnResult({
          data: Object.assign(Object.assign({}, o), {
            redirectType: s ?? null,
          }),
          error: i,
        })
      );
    } catch (o) {
      if ((await Ne(this.storage, `${this.storageKey}-code-verifier`), U(o)))
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: o,
        });
      throw o;
    }
  }
  async signInWithIdToken(t) {
    try {
      const {
          options: r,
          provider: n,
          token: s,
          access_token: o,
          nonce: i,
        } = t,
        a = await V(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=id_token`,
          {
            headers: this.headers,
            body: {
              provider: n,
              id_token: s,
              access_token: o,
              nonce: i,
              gotrue_meta_security: {
                captcha_token: r == null ? void 0 : r.captchaToken,
              },
            },
            xform: Tt,
          },
        ),
        { data: l, error: u } = a;
      if (u)
        return this._returnResult({
          data: { user: null, session: null },
          error: u,
        });
      if (!l || !l.session || !l.user) {
        const c = new Kn();
        return this._returnResult({
          data: { user: null, session: null },
          error: c,
        });
      }
      return (
        l.session &&
          (await this._saveSession(l.session),
          await this._notifyAllSubscribers("SIGNED_IN", l.session)),
        this._returnResult({ data: l, error: u })
      );
    } catch (r) {
      if (U(r))
        return this._returnResult({
          data: { user: null, session: null },
          error: r,
        });
      throw r;
    }
  }
  async signInWithOtp(t) {
    var r, n, s, o, i;
    try {
      if ("email" in t) {
        const { email: a, options: l } = t;
        let u = null,
          c = null;
        this.flowType === "pkce" &&
          ([u, c] = await Gn(this.storage, this.storageKey));
        const { error: p } = await V(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: a,
            data:
              (r = l == null ? void 0 : l.data) !== null && r !== void 0
                ? r
                : {},
            create_user:
              (n = l == null ? void 0 : l.shouldCreateUser) !== null &&
              n !== void 0
                ? n
                : !0,
            gotrue_meta_security: {
              captcha_token: l == null ? void 0 : l.captchaToken,
            },
            code_challenge: u,
            code_challenge_method: c,
          },
          redirectTo: l == null ? void 0 : l.emailRedirectTo,
        });
        return this._returnResult({
          data: { user: null, session: null },
          error: p,
        });
      }
      if ("phone" in t) {
        const { phone: a, options: l } = t,
          { data: u, error: c } = await V(
            this.fetch,
            "POST",
            `${this.url}/otp`,
            {
              headers: this.headers,
              body: {
                phone: a,
                data:
                  (s = l == null ? void 0 : l.data) !== null && s !== void 0
                    ? s
                    : {},
                create_user:
                  (o = l == null ? void 0 : l.shouldCreateUser) !== null &&
                  o !== void 0
                    ? o
                    : !0,
                gotrue_meta_security: {
                  captcha_token: l == null ? void 0 : l.captchaToken,
                },
                channel:
                  (i = l == null ? void 0 : l.channel) !== null && i !== void 0
                    ? i
                    : "sms",
              },
            },
          );
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: u == null ? void 0 : u.message_id,
          },
          error: c,
        });
      }
      throw new Ji("You must provide either an email or phone number.");
    } catch (a) {
      if ((await Ne(this.storage, `${this.storageKey}-code-verifier`), U(a)))
        return this._returnResult({
          data: { user: null, session: null },
          error: a,
        });
      throw a;
    }
  }
  async verifyOtp(t) {
    var r, n;
    try {
      let s, o;
      "options" in t &&
        ((s = (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo),
        (o =
          (n = t.options) === null || n === void 0 ? void 0 : n.captchaToken));
      const { data: i, error: a } = await V(
        this.fetch,
        "POST",
        `${this.url}/verify`,
        {
          headers: this.headers,
          body: Object.assign(Object.assign({}, t), {
            gotrue_meta_security: { captcha_token: o },
          }),
          redirectTo: s,
          xform: Tt,
        },
      );
      if (a) throw a;
      if (!i) throw new Error("An error occurred on token verification.");
      const l = i.session,
        u = i.user;
      return (
        l != null &&
          l.access_token &&
          (await this._saveSession(l),
          await this._notifyAllSubscribers(
            t.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN",
            l,
          )),
        this._returnResult({ data: { user: u, session: l }, error: null })
      );
    } catch (s) {
      if (U(s))
        return this._returnResult({
          data: { user: null, session: null },
          error: s,
        });
      throw s;
    }
  }
  async signInWithSSO(t) {
    var r, n, s, o, i;
    try {
      let a = null,
        l = null;
      this.flowType === "pkce" &&
        ([a, l] = await Gn(this.storage, this.storageKey));
      const u = await V(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  {},
                  "providerId" in t ? { provider_id: t.providerId } : null,
                ),
                "domain" in t ? { domain: t.domain } : null,
              ),
              {
                redirect_to:
                  (n =
                    (r = t.options) === null || r === void 0
                      ? void 0
                      : r.redirectTo) !== null && n !== void 0
                    ? n
                    : void 0,
              },
            ),
            !((s = t == null ? void 0 : t.options) === null || s === void 0) &&
              s.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token: t.options.captchaToken,
                  },
                }
              : null,
          ),
          {
            skip_http_redirect: !0,
            code_challenge: a,
            code_challenge_method: l,
          },
        ),
        headers: this.headers,
        xform: MT,
      });
      return (
        !((o = u.data) === null || o === void 0) &&
          o.url &&
          je() &&
          !(
            !((i = t.options) === null || i === void 0) && i.skipBrowserRedirect
          ) &&
          window.location.assign(u.data.url),
        this._returnResult(u)
      );
    } catch (a) {
      if ((await Ne(this.storage, `${this.storageKey}-code-verifier`), U(a)))
        return this._returnResult({ data: null, error: a });
      throw a;
    }
  }
  async reauthenticate() {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._reauthenticate(),
      )
    );
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (t) => {
        const {
          data: { session: r },
          error: n,
        } = t;
        if (n) throw n;
        if (!r) throw new rt();
        const { error: s } = await V(
          this.fetch,
          "GET",
          `${this.url}/reauthenticate`,
          { headers: this.headers, jwt: r.access_token },
        );
        return this._returnResult({
          data: { user: null, session: null },
          error: s,
        });
      });
    } catch (t) {
      if (U(t))
        return this._returnResult({
          data: { user: null, session: null },
          error: t,
        });
      throw t;
    }
  }
  async resend(t) {
    try {
      const r = `${this.url}/resend`;
      if ("email" in t) {
        const { email: n, type: s, options: o } = t,
          { error: i } = await V(this.fetch, "POST", r, {
            headers: this.headers,
            body: {
              email: n,
              type: s,
              gotrue_meta_security: {
                captcha_token: o == null ? void 0 : o.captchaToken,
              },
            },
            redirectTo: o == null ? void 0 : o.emailRedirectTo,
          });
        return this._returnResult({
          data: { user: null, session: null },
          error: i,
        });
      } else if ("phone" in t) {
        const { phone: n, type: s, options: o } = t,
          { data: i, error: a } = await V(this.fetch, "POST", r, {
            headers: this.headers,
            body: {
              phone: n,
              type: s,
              gotrue_meta_security: {
                captcha_token: o == null ? void 0 : o.captchaToken,
              },
            },
          });
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: i == null ? void 0 : i.message_id,
          },
          error: a,
        });
      }
      throw new Ji(
        "You must provide either an email or phone number and a type",
      );
    } catch (r) {
      if (U(r))
        return this._returnResult({
          data: { user: null, session: null },
          error: r,
        });
      throw r;
    }
  }
  async getSession() {
    return (
      await this.initializePromise,
      await this._acquireLock(this.lockAcquireTimeout, async () =>
        this._useSession(async (r) => r),
      )
    );
  }
  async _acquireLock(t, r) {
    this._debug("#_acquireLock", "begin", t);
    try {
      if (this.lockAcquired) {
        const n = this.pendingInLock.length
            ? this.pendingInLock[this.pendingInLock.length - 1]
            : Promise.resolve(),
          s = (async () => (await n, await r()))();
        return (
          this.pendingInLock.push(
            (async () => {
              try {
                await s;
              } catch {}
            })(),
          ),
          s
        );
      }
      return await this.lock(`lock:${this.storageKey}`, t, async () => {
        this._debug(
          "#_acquireLock",
          "lock acquired for storage key",
          this.storageKey,
        );
        try {
          this.lockAcquired = !0;
          const n = r();
          for (
            this.pendingInLock.push(
              (async () => {
                try {
                  await n;
                } catch {}
              })(),
            ),
              await n;
            this.pendingInLock.length;
          ) {
            const s = [...this.pendingInLock];
            (await Promise.all(s), this.pendingInLock.splice(0, s.length));
          }
          return await n;
        } finally {
          (this._debug(
            "#_acquireLock",
            "lock released for storage key",
            this.storageKey,
          ),
            (this.lockAcquired = !1));
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  async _useSession(t) {
    this._debug("#_useSession", "begin");
    try {
      const r = await this.__loadSession();
      return await t(r);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  async __loadSession() {
    (this._debug("#__loadSession()", "begin"),
      this.lockAcquired ||
        this._debug(
          "#__loadSession()",
          "used outside of an acquired lock!",
          new Error().stack,
        ));
    try {
      let t = null;
      const r = await hn(this.storage, this.storageKey);
      if (
        (this._debug("#getSession()", "session from storage", r),
        r !== null &&
          (this._isValidSession(r)
            ? (t = r)
            : (this._debug(
                "#getSession()",
                "session from storage is not valid",
              ),
              await this._removeSession())),
        !t)
      )
        return { data: { session: null }, error: null };
      const n = t.expires_at ? t.expires_at * 1e3 - Date.now() < Su : !1;
      if (
        (this._debug(
          "#__loadSession()",
          `session has${n ? "" : " not"} expired`,
          "expires_at",
          t.expires_at,
        ),
        !n)
      ) {
        if (this.userStorage) {
          const i = await hn(this.userStorage, this.storageKey + "-user");
          i != null && i.user ? (t.user = i.user) : (t.user = Tu());
        }
        if (
          this.storage.isServer &&
          t.user &&
          !t.user.__isUserNotAvailableProxy
        ) {
          const i = { value: this.suppressGetSessionWarning };
          ((t.user = OT(t.user, i)),
            i.value && (this.suppressGetSessionWarning = !0));
        }
        return { data: { session: t }, error: null };
      }
      const { data: s, error: o } = await this._callRefreshToken(
        t.refresh_token,
      );
      return o
        ? this._returnResult({ data: { session: null }, error: o })
        : this._returnResult({ data: { session: s }, error: null });
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  async getUser(t) {
    if (t) return await this._getUser(t);
    await this.initializePromise;
    const r = await this._acquireLock(
      this.lockAcquireTimeout,
      async () => await this._getUser(),
    );
    return (r.data.user && (this.suppressGetSessionWarning = !0), r);
  }
  async _getUser(t) {
    try {
      return t
        ? await V(this.fetch, "GET", `${this.url}/user`, {
            headers: this.headers,
            jwt: t,
            xform: Or,
          })
        : await this._useSession(async (r) => {
            var n, s, o;
            const { data: i, error: a } = r;
            if (a) throw a;
            return !(
              !((n = i.session) === null || n === void 0) && n.access_token
            ) && !this.hasCustomAuthorizationHeader
              ? { data: { user: null }, error: new rt() }
              : await V(this.fetch, "GET", `${this.url}/user`, {
                  headers: this.headers,
                  jwt:
                    (o =
                      (s = i.session) === null || s === void 0
                        ? void 0
                        : s.access_token) !== null && o !== void 0
                      ? o
                      : void 0,
                  xform: Or,
                });
          });
    } catch (r) {
      if (U(r))
        return (
          cT(r) &&
            (await this._removeSession(),
            await Ne(this.storage, `${this.storageKey}-code-verifier`)),
          this._returnResult({ data: { user: null }, error: r })
        );
      throw r;
    }
  }
  async updateUser(t, r = {}) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._updateUser(t, r),
      )
    );
  }
  async _updateUser(t, r = {}) {
    try {
      return await this._useSession(async (n) => {
        const { data: s, error: o } = n;
        if (o) throw o;
        if (!s.session) throw new rt();
        const i = s.session;
        let a = null,
          l = null;
        this.flowType === "pkce" &&
          t.email != null &&
          ([a, l] = await Gn(this.storage, this.storageKey));
        const { data: u, error: c } = await V(
          this.fetch,
          "PUT",
          `${this.url}/user`,
          {
            headers: this.headers,
            redirectTo: r == null ? void 0 : r.emailRedirectTo,
            body: Object.assign(Object.assign({}, t), {
              code_challenge: a,
              code_challenge_method: l,
            }),
            jwt: i.access_token,
            xform: Or,
          },
        );
        if (c) throw c;
        return (
          (i.user = u.user),
          await this._saveSession(i),
          await this._notifyAllSubscribers("USER_UPDATED", i),
          this._returnResult({ data: { user: i.user }, error: null })
        );
      });
    } catch (n) {
      if ((await Ne(this.storage, `${this.storageKey}-code-verifier`), U(n)))
        return this._returnResult({ data: { user: null }, error: n });
      throw n;
    }
  }
  async setSession(t) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._setSession(t),
      )
    );
  }
  async _setSession(t) {
    try {
      if (!t.access_token || !t.refresh_token) throw new rt();
      const r = Date.now() / 1e3;
      let n = r,
        s = !0,
        o = null;
      const { payload: i } = Cu(t.access_token);
      if ((i.exp && ((n = i.exp), (s = n <= r)), s)) {
        const { data: a, error: l } = await this._callRefreshToken(
          t.refresh_token,
        );
        if (l)
          return this._returnResult({
            data: { user: null, session: null },
            error: l,
          });
        if (!a) return { data: { user: null, session: null }, error: null };
        o = a;
      } else {
        const { data: a, error: l } = await this._getUser(t.access_token);
        if (l) throw l;
        ((o = {
          access_token: t.access_token,
          refresh_token: t.refresh_token,
          user: a.user,
          token_type: "bearer",
          expires_in: n - r,
          expires_at: n,
        }),
          await this._saveSession(o),
          await this._notifyAllSubscribers("SIGNED_IN", o));
      }
      return this._returnResult({
        data: { user: o.user, session: o },
        error: null,
      });
    } catch (r) {
      if (U(r))
        return this._returnResult({
          data: { session: null, user: null },
          error: r,
        });
      throw r;
    }
  }
  async refreshSession(t) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._refreshSession(t),
      )
    );
  }
  async _refreshSession(t) {
    try {
      return await this._useSession(async (r) => {
        var n;
        if (!t) {
          const { data: i, error: a } = r;
          if (a) throw a;
          t = (n = i.session) !== null && n !== void 0 ? n : void 0;
        }
        if (!(t != null && t.refresh_token)) throw new rt();
        const { data: s, error: o } = await this._callRefreshToken(
          t.refresh_token,
        );
        return o
          ? this._returnResult({
              data: { user: null, session: null },
              error: o,
            })
          : s
            ? this._returnResult({
                data: { user: s.user, session: s },
                error: null,
              })
            : this._returnResult({
                data: { user: null, session: null },
                error: null,
              });
      });
    } catch (r) {
      if (U(r))
        return this._returnResult({
          data: { user: null, session: null },
          error: r,
        });
      throw r;
    }
  }
  async _getSessionFromURL(t, r) {
    try {
      if (!je()) throw new Yi("No browser detected.");
      if (t.error || t.error_description || t.error_code)
        throw new Yi(
          t.error_description ||
            "Error in URL with unspecified error_description",
          {
            error: t.error || "unspecified_error",
            code: t.error_code || "unspecified_code",
          },
        );
      switch (r) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new Dp("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new Yi("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (r === "pkce") {
        if (
          (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !t.code)
        )
          throw new Dp("No code detected.");
        const { data: m, error: v } = await this._exchangeCodeForSession(
          t.code,
        );
        if (v) throw v;
        const b = new URL(window.location.href);
        return (
          b.searchParams.delete("code"),
          window.history.replaceState(window.history.state, "", b.toString()),
          { data: { session: m.session, redirectType: null }, error: null }
        );
      }
      const {
        provider_token: n,
        provider_refresh_token: s,
        access_token: o,
        refresh_token: i,
        expires_in: a,
        expires_at: l,
        token_type: u,
      } = t;
      if (!o || !a || !i || !u) throw new Yi("No session defined in URL");
      const c = Math.round(Date.now() / 1e3),
        p = parseInt(a);
      let f = c + p;
      l && (f = parseInt(l));
      const d = f - c;
      d * 1e3 <= es &&
        console.warn(
          `@supabase/gotrue-js: Session as retrieved from URL expires in ${d}s, should have been closer to ${p}s`,
        );
      const w = f - p;
      c - w >= 120
        ? console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
            w,
            f,
            c,
          )
        : c - w < 0 &&
          console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",
            w,
            f,
            c,
          );
      const { data: y, error: x } = await this._getUser(o);
      if (x) throw x;
      const g = {
        provider_token: n,
        provider_refresh_token: s,
        access_token: o,
        expires_in: p,
        expires_at: f,
        refresh_token: i,
        token_type: u,
        user: y.user,
      };
      return (
        (window.location.hash = ""),
        this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
        this._returnResult({
          data: { session: g, redirectType: t.type },
          error: null,
        })
      );
    } catch (n) {
      if (U(n))
        return this._returnResult({
          data: { session: null, redirectType: null },
          error: n,
        });
      throw n;
    }
  }
  _isImplicitGrantCallback(t) {
    return typeof this.detectSessionInUrl == "function"
      ? this.detectSessionInUrl(new URL(window.location.href), t)
      : !!(t.access_token || t.error_description);
  }
  async _isPKCECallback(t) {
    const r = await hn(this.storage, `${this.storageKey}-code-verifier`);
    return !!(t.code && r);
  }
  async signOut(t = { scope: "global" }) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._signOut(t),
      )
    );
  }
  async _signOut({ scope: t } = { scope: "global" }) {
    return await this._useSession(async (r) => {
      var n;
      const { data: s, error: o } = r;
      if (o) return this._returnResult({ error: o });
      const i =
        (n = s.session) === null || n === void 0 ? void 0 : n.access_token;
      if (i) {
        const { error: a } = await this.admin.signOut(i, t);
        if (
          a &&
          !(uT(a) && (a.status === 404 || a.status === 401 || a.status === 403))
        )
          return this._returnResult({ error: a });
      }
      return (
        t !== "others" &&
          (await this._removeSession(),
          await Ne(this.storage, `${this.storageKey}-code-verifier`)),
        this._returnResult({ error: null })
      );
    });
  }
  onAuthStateChange(t) {
    const r = wT(),
      n = {
        id: r,
        callback: t,
        unsubscribe: () => {
          (this._debug(
            "#unsubscribe()",
            "state change callback with id removed",
            r,
          ),
            this.stateChangeEmitters.delete(r));
        },
      };
    return (
      this._debug("#onAuthStateChange()", "registered callback with id", r),
      this.stateChangeEmitters.set(r, n),
      (async () => (
        await this.initializePromise,
        await this._acquireLock(this.lockAcquireTimeout, async () => {
          this._emitInitialSession(r);
        })
      ))(),
      { data: { subscription: n } }
    );
  }
  async _emitInitialSession(t) {
    return await this._useSession(async (r) => {
      var n, s;
      try {
        const {
          data: { session: o },
          error: i,
        } = r;
        if (i) throw i;
        (await ((n = this.stateChangeEmitters.get(t)) === null || n === void 0
          ? void 0
          : n.callback("INITIAL_SESSION", o)),
          this._debug("INITIAL_SESSION", "callback id", t, "session", o));
      } catch (o) {
        (await ((s = this.stateChangeEmitters.get(t)) === null || s === void 0
          ? void 0
          : s.callback("INITIAL_SESSION", null)),
          this._debug("INITIAL_SESSION", "callback id", t, "error", o),
          console.error(o));
      }
    });
  }
  async resetPasswordForEmail(t, r = {}) {
    let n = null,
      s = null;
    this.flowType === "pkce" &&
      ([n, s] = await Gn(this.storage, this.storageKey, !0));
    try {
      return await V(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: t,
          code_challenge: n,
          code_challenge_method: s,
          gotrue_meta_security: { captcha_token: r.captchaToken },
        },
        headers: this.headers,
        redirectTo: r.redirectTo,
      });
    } catch (o) {
      if ((await Ne(this.storage, `${this.storageKey}-code-verifier`), U(o)))
        return this._returnResult({ data: null, error: o });
      throw o;
    }
  }
  async getUserIdentities() {
    var t;
    try {
      const { data: r, error: n } = await this.getUser();
      if (n) throw n;
      return this._returnResult({
        data: {
          identities: (t = r.user.identities) !== null && t !== void 0 ? t : [],
        },
        error: null,
      });
    } catch (r) {
      if (U(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async linkIdentity(t) {
    return "token" in t
      ? this.linkIdentityIdToken(t)
      : this.linkIdentityOAuth(t);
  }
  async linkIdentityOAuth(t) {
    var r;
    try {
      const { data: n, error: s } = await this._useSession(async (o) => {
        var i, a, l, u, c;
        const { data: p, error: f } = o;
        if (f) throw f;
        const d = await this._getUrlForProvider(
          `${this.url}/user/identities/authorize`,
          t.provider,
          {
            redirectTo:
              (i = t.options) === null || i === void 0 ? void 0 : i.redirectTo,
            scopes:
              (a = t.options) === null || a === void 0 ? void 0 : a.scopes,
            queryParams:
              (l = t.options) === null || l === void 0 ? void 0 : l.queryParams,
            skipBrowserRedirect: !0,
          },
        );
        return await V(this.fetch, "GET", d, {
          headers: this.headers,
          jwt:
            (c =
              (u = p.session) === null || u === void 0
                ? void 0
                : u.access_token) !== null && c !== void 0
              ? c
              : void 0,
        });
      });
      if (s) throw s;
      return (
        je() &&
          !(
            !((r = t.options) === null || r === void 0) && r.skipBrowserRedirect
          ) &&
          window.location.assign(n == null ? void 0 : n.url),
        this._returnResult({
          data: { provider: t.provider, url: n == null ? void 0 : n.url },
          error: null,
        })
      );
    } catch (n) {
      if (U(n))
        return this._returnResult({
          data: { provider: t.provider, url: null },
          error: n,
        });
      throw n;
    }
  }
  async linkIdentityIdToken(t) {
    return await this._useSession(async (r) => {
      var n;
      try {
        const {
          error: s,
          data: { session: o },
        } = r;
        if (s) throw s;
        const {
            options: i,
            provider: a,
            token: l,
            access_token: u,
            nonce: c,
          } = t,
          p = await V(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=id_token`,
            {
              headers: this.headers,
              jwt:
                (n = o == null ? void 0 : o.access_token) !== null &&
                n !== void 0
                  ? n
                  : void 0,
              body: {
                provider: a,
                id_token: l,
                access_token: u,
                nonce: c,
                link_identity: !0,
                gotrue_meta_security: {
                  captcha_token: i == null ? void 0 : i.captchaToken,
                },
              },
              xform: Tt,
            },
          ),
          { data: f, error: d } = p;
        return d
          ? this._returnResult({
              data: { user: null, session: null },
              error: d,
            })
          : !f || !f.session || !f.user
            ? this._returnResult({
                data: { user: null, session: null },
                error: new Kn(),
              })
            : (f.session &&
                (await this._saveSession(f.session),
                await this._notifyAllSubscribers("USER_UPDATED", f.session)),
              this._returnResult({ data: f, error: d }));
      } catch (s) {
        if ((await Ne(this.storage, `${this.storageKey}-code-verifier`), U(s)))
          return this._returnResult({
            data: { user: null, session: null },
            error: s,
          });
        throw s;
      }
    });
  }
  async unlinkIdentity(t) {
    try {
      return await this._useSession(async (r) => {
        var n, s;
        const { data: o, error: i } = r;
        if (i) throw i;
        return await V(
          this.fetch,
          "DELETE",
          `${this.url}/user/identities/${t.identity_id}`,
          {
            headers: this.headers,
            jwt:
              (s =
                (n = o.session) === null || n === void 0
                  ? void 0
                  : n.access_token) !== null && s !== void 0
                ? s
                : void 0,
          },
        );
      });
    } catch (r) {
      if (U(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _refreshAccessToken(t) {
    const r = `#_refreshAccessToken(${t.substring(0, 5)}...)`;
    this._debug(r, "begin");
    try {
      const n = Date.now();
      return await ET(
        async (s) => (
          s > 0 && (await _T(200 * Math.pow(2, s - 1))),
          this._debug(r, "refreshing attempt", s),
          await V(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=refresh_token`,
            { body: { refresh_token: t }, headers: this.headers, xform: Tt },
          )
        ),
        (s, o) => {
          const i = 200 * Math.pow(2, s);
          return o && ku(o) && Date.now() + i - n < es;
        },
      );
    } catch (n) {
      if ((this._debug(r, "error", n), U(n)))
        return this._returnResult({
          data: { session: null, user: null },
          error: n,
        });
      throw n;
    } finally {
      this._debug(r, "end");
    }
  }
  _isValidSession(t) {
    return (
      typeof t == "object" &&
      t !== null &&
      "access_token" in t &&
      "refresh_token" in t &&
      "expires_at" in t
    );
  }
  async _handleProviderSignIn(t, r) {
    const n = await this._getUrlForProvider(`${this.url}/authorize`, t, {
      redirectTo: r.redirectTo,
      scopes: r.scopes,
      queryParams: r.queryParams,
    });
    return (
      this._debug(
        "#_handleProviderSignIn()",
        "provider",
        t,
        "options",
        r,
        "url",
        n,
      ),
      je() && !r.skipBrowserRedirect && window.location.assign(n),
      { data: { provider: t, url: n }, error: null }
    );
  }
  async _recoverAndRefresh() {
    var t, r;
    const n = "#_recoverAndRefresh()";
    this._debug(n, "begin");
    try {
      const s = await hn(this.storage, this.storageKey);
      if (s && this.userStorage) {
        let i = await hn(this.userStorage, this.storageKey + "-user");
        (!this.storage.isServer &&
          Object.is(this.storage, this.userStorage) &&
          !i &&
          ((i = { user: s.user }),
          await ts(this.userStorage, this.storageKey + "-user", i)),
          (s.user =
            (t = i == null ? void 0 : i.user) !== null && t !== void 0
              ? t
              : Tu()));
      } else if (s && !s.user && !s.user) {
        const i = await hn(this.storage, this.storageKey + "-user");
        i && i != null && i.user
          ? ((s.user = i.user),
            await Ne(this.storage, this.storageKey + "-user"),
            await ts(this.storage, this.storageKey, s))
          : (s.user = Tu());
      }
      if (
        (this._debug(n, "session from storage", s), !this._isValidSession(s))
      ) {
        (this._debug(n, "session is not valid"),
          s !== null && (await this._removeSession()));
        return;
      }
      const o =
        ((r = s.expires_at) !== null && r !== void 0 ? r : 1 / 0) * 1e3 -
          Date.now() <
        Su;
      if (
        (this._debug(
          n,
          `session has${o ? "" : " not"} expired with margin of ${Su}s`,
        ),
        o)
      ) {
        if (this.autoRefreshToken && s.refresh_token) {
          const { error: i } = await this._callRefreshToken(s.refresh_token);
          i &&
            (console.error(i),
            ku(i) ||
              (this._debug(
                n,
                "refresh failed with a non-retryable error, removing the session",
                i,
              ),
              await this._removeSession()));
        }
      } else if (s.user && s.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: i, error: a } = await this._getUser(s.access_token);
          !a && i != null && i.user
            ? ((s.user = i.user),
              await this._saveSession(s),
              await this._notifyAllSubscribers("SIGNED_IN", s))
            : this._debug(
                n,
                "could not get user data, skipping SIGNED_IN notification",
              );
        } catch (i) {
          (console.error("Error getting user data:", i),
            this._debug(
              n,
              "error getting user data, skipping SIGNED_IN notification",
              i,
            ));
        }
      else await this._notifyAllSubscribers("SIGNED_IN", s);
    } catch (s) {
      (this._debug(n, "error", s), console.error(s));
      return;
    } finally {
      this._debug(n, "end");
    }
  }
  async _callRefreshToken(t) {
    var r, n;
    if (!t) throw new rt();
    if (this.refreshingDeferred) return this.refreshingDeferred.promise;
    const s = `#_callRefreshToken(${t.substring(0, 5)}...)`;
    this._debug(s, "begin");
    try {
      this.refreshingDeferred = new Nl();
      const { data: o, error: i } = await this._refreshAccessToken(t);
      if (i) throw i;
      if (!o.session) throw new rt();
      (await this._saveSession(o.session),
        await this._notifyAllSubscribers("TOKEN_REFRESHED", o.session));
      const a = { data: o.session, error: null };
      return (this.refreshingDeferred.resolve(a), a);
    } catch (o) {
      if ((this._debug(s, "error", o), U(o))) {
        const i = { data: null, error: o };
        return (
          ku(o) || (await this._removeSession()),
          (r = this.refreshingDeferred) === null ||
            r === void 0 ||
            r.resolve(i),
          i
        );
      }
      throw (
        (n = this.refreshingDeferred) === null || n === void 0 || n.reject(o),
        o
      );
    } finally {
      ((this.refreshingDeferred = null), this._debug(s, "end"));
    }
  }
  async _notifyAllSubscribers(t, r, n = !0) {
    const s = `#_notifyAllSubscribers(${t})`;
    this._debug(s, "begin", r, `broadcast = ${n}`);
    try {
      this.broadcastChannel &&
        n &&
        this.broadcastChannel.postMessage({ event: t, session: r });
      const o = [],
        i = Array.from(this.stateChangeEmitters.values()).map(async (a) => {
          try {
            await a.callback(t, r);
          } catch (l) {
            o.push(l);
          }
        });
      if ((await Promise.all(i), o.length > 0)) {
        for (let a = 0; a < o.length; a += 1) console.error(o[a]);
        throw o[0];
      }
    } finally {
      this._debug(s, "end");
    }
  }
  async _saveSession(t) {
    (this._debug("#_saveSession()", t),
      (this.suppressGetSessionWarning = !0),
      await Ne(this.storage, `${this.storageKey}-code-verifier`));
    const r = Object.assign({}, t),
      n = r.user && r.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !n &&
        r.user &&
        (await ts(this.userStorage, this.storageKey + "-user", {
          user: r.user,
        }));
      const s = Object.assign({}, r);
      delete s.user;
      const o = Vp(s);
      await ts(this.storage, this.storageKey, o);
    } else {
      const s = Vp(r);
      await ts(this.storage, this.storageKey, s);
    }
  }
  async _removeSession() {
    (this._debug("#_removeSession()"),
      (this.suppressGetSessionWarning = !1),
      await Ne(this.storage, this.storageKey),
      await Ne(this.storage, this.storageKey + "-code-verifier"),
      await Ne(this.storage, this.storageKey + "-user"),
      this.userStorage &&
        (await Ne(this.userStorage, this.storageKey + "-user")),
      await this._notifyAllSubscribers("SIGNED_OUT", null));
  }
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const t = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      t &&
        je() &&
        window != null &&
        window.removeEventListener &&
        window.removeEventListener("visibilitychange", t);
    } catch (r) {
      console.error("removing visibilitychange callback failed", r);
    }
  }
  async _startAutoRefresh() {
    (await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()"));
    const t = setInterval(() => this._autoRefreshTokenTick(), es);
    ((this.autoRefreshTicker = t),
      t && typeof t == "object" && typeof t.unref == "function"
        ? t.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(t));
    const r = setTimeout(async () => {
      (await this.initializePromise, await this._autoRefreshTokenTick());
    }, 0);
    ((this.autoRefreshTickTimeout = r),
      r && typeof r == "object" && typeof r.unref == "function"
        ? r.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(r));
  }
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const t = this.autoRefreshTicker;
    ((this.autoRefreshTicker = null), t && clearInterval(t));
    const r = this.autoRefreshTickTimeout;
    ((this.autoRefreshTickTimeout = null), r && clearTimeout(r));
  }
  async startAutoRefresh() {
    (this._removeVisibilityChangedCallback(), await this._startAutoRefresh());
  }
  async stopAutoRefresh() {
    (this._removeVisibilityChangedCallback(), await this._stopAutoRefresh());
  }
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const t = Date.now();
          try {
            return await this._useSession(async (r) => {
              const {
                data: { session: n },
              } = r;
              if (!n || !n.refresh_token || !n.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const s = Math.floor((n.expires_at * 1e3 - t) / es);
              (this._debug(
                "#_autoRefreshTokenTick()",
                `access token expires in ${s} ticks, a tick lasts ${es}ms, refresh threshold is ${Xc} ticks`,
              ),
                s <= Xc && (await this._callRefreshToken(n.refresh_token)));
            });
          } catch (r) {
            console.error(
              "Auto refresh tick failed with error. This is likely a transient error.",
              r,
            );
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (t) {
      if (t.isAcquireTimeout || t instanceof Mv)
        this._debug("auto refresh token tick lock not available");
      else throw t;
    }
  }
  async _handleVisibilityChange() {
    if (
      (this._debug("#_handleVisibilityChange()"),
      !je() || !(window != null && window.addEventListener))
    )
      return (this.autoRefreshToken && this.startAutoRefresh(), !1);
    try {
      ((this.visibilityChangedCallback = async () =>
        await this._onVisibilityChanged(!1)),
        window == null ||
          window.addEventListener(
            "visibilitychange",
            this.visibilityChangedCallback,
          ),
        await this._onVisibilityChanged(!0));
    } catch (t) {
      console.error("_handleVisibilityChange", t);
    }
  }
  async _onVisibilityChanged(t) {
    const r = `#_onVisibilityChanged(${t})`;
    (this._debug(r, "visibilityState", document.visibilityState),
      document.visibilityState === "visible"
        ? (this.autoRefreshToken && this._startAutoRefresh(),
          t ||
            (await this.initializePromise,
            await this._acquireLock(this.lockAcquireTimeout, async () => {
              if (document.visibilityState !== "visible") {
                this._debug(
                  r,
                  "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting",
                );
                return;
              }
              await this._recoverAndRefresh();
            })))
        : document.visibilityState === "hidden" &&
          this.autoRefreshToken &&
          this._stopAutoRefresh());
  }
  async _getUrlForProvider(t, r, n) {
    const s = [`provider=${encodeURIComponent(r)}`];
    if (
      (n != null &&
        n.redirectTo &&
        s.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),
      n != null && n.scopes && s.push(`scopes=${encodeURIComponent(n.scopes)}`),
      this.flowType === "pkce")
    ) {
      const [o, i] = await Gn(this.storage, this.storageKey),
        a = new URLSearchParams({
          code_challenge: `${encodeURIComponent(o)}`,
          code_challenge_method: `${encodeURIComponent(i)}`,
        });
      s.push(a.toString());
    }
    if (n != null && n.queryParams) {
      const o = new URLSearchParams(n.queryParams);
      s.push(o.toString());
    }
    return (
      n != null &&
        n.skipBrowserRedirect &&
        s.push(`skip_http_redirect=${n.skipBrowserRedirect}`),
      `${t}?${s.join("&")}`
    );
  }
  async _unenroll(t) {
    try {
      return await this._useSession(async (r) => {
        var n;
        const { data: s, error: o } = r;
        return o
          ? this._returnResult({ data: null, error: o })
          : await V(this.fetch, "DELETE", `${this.url}/factors/${t.factorId}`, {
              headers: this.headers,
              jwt:
                (n = s == null ? void 0 : s.session) === null || n === void 0
                  ? void 0
                  : n.access_token,
            });
      });
    } catch (r) {
      if (U(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _enroll(t) {
    try {
      return await this._useSession(async (r) => {
        var n, s;
        const { data: o, error: i } = r;
        if (i) return this._returnResult({ data: null, error: i });
        const a = Object.assign(
            { friendly_name: t.friendlyName, factor_type: t.factorType },
            t.factorType === "phone"
              ? { phone: t.phone }
              : t.factorType === "totp"
                ? { issuer: t.issuer }
                : {},
          ),
          { data: l, error: u } = await V(
            this.fetch,
            "POST",
            `${this.url}/factors`,
            {
              body: a,
              headers: this.headers,
              jwt:
                (n = o == null ? void 0 : o.session) === null || n === void 0
                  ? void 0
                  : n.access_token,
            },
          );
        return u
          ? this._returnResult({ data: null, error: u })
          : (t.factorType === "totp" &&
              l.type === "totp" &&
              !((s = l == null ? void 0 : l.totp) === null || s === void 0) &&
              s.qr_code &&
              (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`),
            this._returnResult({ data: l, error: null }));
      });
    } catch (r) {
      if (U(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _verify(t) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (r) => {
          var n;
          const { data: s, error: o } = r;
          if (o) return this._returnResult({ data: null, error: o });
          const i = Object.assign(
              { challenge_id: t.challengeId },
              "webauthn" in t
                ? {
                    webauthn: Object.assign(Object.assign({}, t.webauthn), {
                      credential_response:
                        t.webauthn.type === "create"
                          ? ZT(t.webauthn.credential_response)
                          : eP(t.webauthn.credential_response),
                    }),
                  }
                : { code: t.code },
            ),
            { data: a, error: l } = await V(
              this.fetch,
              "POST",
              `${this.url}/factors/${t.factorId}/verify`,
              {
                body: i,
                headers: this.headers,
                jwt:
                  (n = s == null ? void 0 : s.session) === null || n === void 0
                    ? void 0
                    : n.access_token,
              },
            );
          return l
            ? this._returnResult({ data: null, error: l })
            : (await this._saveSession(
                Object.assign(
                  { expires_at: Math.round(Date.now() / 1e3) + a.expires_in },
                  a,
                ),
              ),
              await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a),
              this._returnResult({ data: a, error: l }));
        });
      } catch (r) {
        if (U(r)) return this._returnResult({ data: null, error: r });
        throw r;
      }
    });
  }
  async _challenge(t) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (r) => {
          var n;
          const { data: s, error: o } = r;
          if (o) return this._returnResult({ data: null, error: o });
          const i = await V(
            this.fetch,
            "POST",
            `${this.url}/factors/${t.factorId}/challenge`,
            {
              body: t,
              headers: this.headers,
              jwt:
                (n = s == null ? void 0 : s.session) === null || n === void 0
                  ? void 0
                  : n.access_token,
            },
          );
          if (i.error) return i;
          const { data: a } = i;
          if (a.type !== "webauthn") return { data: a, error: null };
          switch (a.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, a), {
                  webauthn: Object.assign(Object.assign({}, a.webauthn), {
                    credential_options: Object.assign(
                      Object.assign({}, a.webauthn.credential_options),
                      {
                        publicKey: YT(a.webauthn.credential_options.publicKey),
                      },
                    ),
                  }),
                }),
                error: null,
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, a), {
                  webauthn: Object.assign(Object.assign({}, a.webauthn), {
                    credential_options: Object.assign(
                      Object.assign({}, a.webauthn.credential_options),
                      {
                        publicKey: XT(a.webauthn.credential_options.publicKey),
                      },
                    ),
                  }),
                }),
                error: null,
              };
          }
        });
      } catch (r) {
        if (U(r)) return this._returnResult({ data: null, error: r });
        throw r;
      }
    });
  }
  async _challengeAndVerify(t) {
    const { data: r, error: n } = await this._challenge({
      factorId: t.factorId,
    });
    return n
      ? this._returnResult({ data: null, error: n })
      : await this._verify({
          factorId: t.factorId,
          challengeId: r.id,
          code: t.code,
        });
  }
  async _listFactors() {
    var t;
    const {
      data: { user: r },
      error: n,
    } = await this.getUser();
    if (n) return { data: null, error: n };
    const s = { all: [], phone: [], totp: [], webauthn: [] };
    for (const o of (t = r == null ? void 0 : r.factors) !== null &&
    t !== void 0
      ? t
      : [])
      (s.all.push(o), o.status === "verified" && s[o.factor_type].push(o));
    return { data: s, error: null };
  }
  async _getAuthenticatorAssuranceLevel() {
    var t, r;
    const {
      data: { session: n },
      error: s,
    } = await this.getSession();
    if (s) return this._returnResult({ data: null, error: s });
    if (!n)
      return {
        data: {
          currentLevel: null,
          nextLevel: null,
          currentAuthenticationMethods: [],
        },
        error: null,
      };
    const { payload: o } = Cu(n.access_token);
    let i = null;
    o.aal && (i = o.aal);
    let a = i;
    ((r =
      (t = n.user.factors) === null || t === void 0
        ? void 0
        : t.filter((c) => c.status === "verified")) !== null && r !== void 0
      ? r
      : []
    ).length > 0 && (a = "aal2");
    const u = o.amr || [];
    return {
      data: { currentLevel: i, nextLevel: a, currentAuthenticationMethods: u },
      error: null,
    };
  }
  async _getAuthorizationDetails(t) {
    try {
      return await this._useSession(async (r) => {
        const {
          data: { session: n },
          error: s,
        } = r;
        return s
          ? this._returnResult({ data: null, error: s })
          : n
            ? await V(
                this.fetch,
                "GET",
                `${this.url}/oauth/authorizations/${t}`,
                {
                  headers: this.headers,
                  jwt: n.access_token,
                  xform: (o) => ({ data: o, error: null }),
                },
              )
            : this._returnResult({ data: null, error: new rt() });
      });
    } catch (r) {
      if (U(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _approveAuthorization(t, r) {
    try {
      return await this._useSession(async (n) => {
        const {
          data: { session: s },
          error: o,
        } = n;
        if (o) return this._returnResult({ data: null, error: o });
        if (!s) return this._returnResult({ data: null, error: new rt() });
        const i = await V(
          this.fetch,
          "POST",
          `${this.url}/oauth/authorizations/${t}/consent`,
          {
            headers: this.headers,
            jwt: s.access_token,
            body: { action: "approve" },
            xform: (a) => ({ data: a, error: null }),
          },
        );
        return (
          i.data &&
            i.data.redirect_url &&
            je() &&
            !(r != null && r.skipBrowserRedirect) &&
            window.location.assign(i.data.redirect_url),
          i
        );
      });
    } catch (n) {
      if (U(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _denyAuthorization(t, r) {
    try {
      return await this._useSession(async (n) => {
        const {
          data: { session: s },
          error: o,
        } = n;
        if (o) return this._returnResult({ data: null, error: o });
        if (!s) return this._returnResult({ data: null, error: new rt() });
        const i = await V(
          this.fetch,
          "POST",
          `${this.url}/oauth/authorizations/${t}/consent`,
          {
            headers: this.headers,
            jwt: s.access_token,
            body: { action: "deny" },
            xform: (a) => ({ data: a, error: null }),
          },
        );
        return (
          i.data &&
            i.data.redirect_url &&
            je() &&
            !(r != null && r.skipBrowserRedirect) &&
            window.location.assign(i.data.redirect_url),
          i
        );
      });
    } catch (n) {
      if (U(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _listOAuthGrants() {
    try {
      return await this._useSession(async (t) => {
        const {
          data: { session: r },
          error: n,
        } = t;
        return n
          ? this._returnResult({ data: null, error: n })
          : r
            ? await V(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
                headers: this.headers,
                jwt: r.access_token,
                xform: (s) => ({ data: s, error: null }),
              })
            : this._returnResult({ data: null, error: new rt() });
      });
    } catch (t) {
      if (U(t)) return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  async _revokeOAuthGrant(t) {
    try {
      return await this._useSession(async (r) => {
        const {
          data: { session: n },
          error: s,
        } = r;
        return s
          ? this._returnResult({ data: null, error: s })
          : n
            ? (await V(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
                headers: this.headers,
                jwt: n.access_token,
                query: { client_id: t.clientId },
                noResolveJson: !0,
              }),
              { data: {}, error: null })
            : this._returnResult({ data: null, error: new rt() });
      });
    } catch (r) {
      if (U(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async fetchJwk(t, r = { keys: [] }) {
    let n = r.keys.find((a) => a.kid === t);
    if (n) return n;
    const s = Date.now();
    if (
      ((n = this.jwks.keys.find((a) => a.kid === t)),
      n && this.jwks_cached_at + aT > s)
    )
      return n;
    const { data: o, error: i } = await V(
      this.fetch,
      "GET",
      `${this.url}/.well-known/jwks.json`,
      { headers: this.headers },
    );
    if (i) throw i;
    return !o.keys ||
      o.keys.length === 0 ||
      ((this.jwks = o),
      (this.jwks_cached_at = s),
      (n = o.keys.find((a) => a.kid === t)),
      !n)
      ? null
      : n;
  }
  async getClaims(t, r = {}) {
    try {
      let n = t;
      if (!n) {
        const { data: d, error: w } = await this.getSession();
        if (w || !d.session)
          return this._returnResult({ data: null, error: w });
        n = d.session.access_token;
      }
      const {
        header: s,
        payload: o,
        signature: i,
        raw: { header: a, payload: l },
      } = Cu(n);
      (r != null && r.allowExpired) || NT(o.exp);
      const u =
        !s.alg ||
        s.alg.startsWith("HS") ||
        !s.kid ||
        !("crypto" in globalThis && "subtle" in globalThis.crypto)
          ? null
          : await this.fetchJwk(
              s.kid,
              r != null && r.keys
                ? { keys: r.keys }
                : r == null
                  ? void 0
                  : r.jwks,
            );
      if (!u) {
        const { error: d } = await this.getUser(n);
        if (d) throw d;
        return { data: { claims: o, header: s, signature: i }, error: null };
      }
      const c = jT(s.alg),
        p = await crypto.subtle.importKey("jwk", u, c, !0, ["verify"]);
      if (!(await crypto.subtle.verify(c, p, i, yT(`${a}.${l}`))))
        throw new td("Invalid JWT signature");
      return { data: { claims: o, header: s, signature: i }, error: null };
    } catch (n) {
      if (U(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
}
si.nextInstanceID = {};
const uP = si,
  cP = "2.91.0";
let go = "";
typeof Deno < "u"
  ? (go = "deno")
  : typeof document < "u"
    ? (go = "web")
    : typeof navigator < "u" && navigator.product === "ReactNative"
      ? (go = "react-native")
      : (go = "node");
const dP = { "X-Client-Info": `supabase-js-${go}/${cP}` },
  hP = { headers: dP },
  fP = { schema: "public" },
  pP = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit",
  },
  mP = {};
function oi(e) {
  "@babel/helpers - typeof";
  return (
    (oi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    oi(e)
  );
}
function gP(e, t) {
  if (oi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (oi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function yP(e) {
  var t = gP(e, "string");
  return oi(t) == "symbol" ? t : t + "";
}
function vP(e, t, r) {
  return (
    (t = yP(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Jp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (s) {
        return Object.getOwnPropertyDescriptor(e, s).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ye(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Jp(Object(r), !0).forEach(function (n) {
          vP(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Jp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
const wP = (e) => (e ? (...t) => e(...t) : (...t) => fetch(...t)),
  xP = () => Headers,
  bP = (e, t, r) => {
    const n = wP(r),
      s = xP();
    return async (o, i) => {
      var a;
      const l = (a = await t()) !== null && a !== void 0 ? a : e;
      let u = new s(i == null ? void 0 : i.headers);
      return (
        u.has("apikey") || u.set("apikey", e),
        u.has("Authorization") || u.set("Authorization", `Bearer ${l}`),
        n(o, ye(ye({}, i), {}, { headers: u }))
      );
    };
  };
function _P(e) {
  return e.endsWith("/") ? e : e + "/";
}
function EP(e, t) {
  var r, n;
  const { db: s, auth: o, realtime: i, global: a } = e,
    { db: l, auth: u, realtime: c, global: p } = t,
    f = {
      db: ye(ye({}, l), s),
      auth: ye(ye({}, u), o),
      realtime: ye(ye({}, c), i),
      storage: {},
      global: ye(
        ye(ye({}, p), a),
        {},
        {
          headers: ye(
            ye(
              {},
              (r = p == null ? void 0 : p.headers) !== null && r !== void 0
                ? r
                : {},
            ),
            (n = a == null ? void 0 : a.headers) !== null && n !== void 0
              ? n
              : {},
          ),
        },
      ),
      accessToken: async () => "",
    };
  return (
    e.accessToken ? (f.accessToken = e.accessToken) : delete f.accessToken,
    f
  );
}
function SP(e) {
  const t = e == null ? void 0 : e.trim();
  if (!t) throw new Error("supabaseUrl is required.");
  if (!t.match(/^https?:\/\//i))
    throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(_P(t));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
var kP = class extends uP {
    constructor(e) {
      super(e);
    }
  },
  CP = class {
    constructor(e, t, r) {
      var n, s;
      ((this.supabaseUrl = e), (this.supabaseKey = t));
      const o = SP(e);
      if (!t) throw new Error("supabaseKey is required.");
      ((this.realtimeUrl = new URL("realtime/v1", o)),
        (this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace(
          "http",
          "ws",
        )),
        (this.authUrl = new URL("auth/v1", o)),
        (this.storageUrl = new URL("storage/v1", o)),
        (this.functionsUrl = new URL("functions/v1", o)));
      const i = `sb-${o.hostname.split(".")[0]}-auth-token`,
        a = {
          db: fP,
          realtime: mP,
          auth: ye(ye({}, pP), {}, { storageKey: i }),
          global: hP,
        },
        l = EP(r ?? {}, a);
      if (
        ((this.storageKey =
          (n = l.auth.storageKey) !== null && n !== void 0 ? n : ""),
        (this.headers =
          (s = l.global.headers) !== null && s !== void 0 ? s : {}),
        l.accessToken)
      )
        ((this.accessToken = l.accessToken),
          (this.auth = new Proxy(
            {},
            {
              get: (c, p) => {
                throw new Error(
                  `@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(p)} is not possible`,
                );
              },
            },
          )));
      else {
        var u;
        this.auth = this._initSupabaseAuthClient(
          (u = l.auth) !== null && u !== void 0 ? u : {},
          this.headers,
          l.global.fetch,
        );
      }
      ((this.fetch = bP(t, this._getAccessToken.bind(this), l.global.fetch)),
        (this.realtime = this._initRealtimeClient(
          ye(
            {
              headers: this.headers,
              accessToken: this._getAccessToken.bind(this),
            },
            l.realtime,
          ),
        )),
        this.accessToken &&
          Promise.resolve(this.accessToken())
            .then((c) => this.realtime.setAuth(c))
            .catch((c) =>
              console.warn("Failed to set initial Realtime auth token:", c),
            ),
        (this.rest = new o2(new URL("rest/v1", o).href, {
          headers: this.headers,
          schema: l.db.schema,
          fetch: this.fetch,
        })),
        (this.storage = new rT(
          this.storageUrl.href,
          this.headers,
          this.fetch,
          r == null ? void 0 : r.storage,
        )),
        l.accessToken || this._listenForAuthEvents());
    }
    get functions() {
      return new e2(this.functionsUrl.href, {
        headers: this.headers,
        customFetch: this.fetch,
      });
    }
    from(e) {
      return this.rest.from(e);
    }
    schema(e) {
      return this.rest.schema(e);
    }
    rpc(e, t = {}, r = { head: !1, get: !1, count: void 0 }) {
      return this.rest.rpc(e, t, r);
    }
    channel(e, t = { config: {} }) {
      return this.realtime.channel(e, t);
    }
    getChannels() {
      return this.realtime.getChannels();
    }
    removeChannel(e) {
      return this.realtime.removeChannel(e);
    }
    removeAllChannels() {
      return this.realtime.removeAllChannels();
    }
    async _getAccessToken() {
      var e = this,
        t,
        r;
      if (e.accessToken) return await e.accessToken();
      const { data: n } = await e.auth.getSession();
      return (t =
        (r = n.session) === null || r === void 0 ? void 0 : r.access_token) !==
        null && t !== void 0
        ? t
        : e.supabaseKey;
    }
    _initSupabaseAuthClient(
      {
        autoRefreshToken: e,
        persistSession: t,
        detectSessionInUrl: r,
        storage: n,
        userStorage: s,
        storageKey: o,
        flowType: i,
        lock: a,
        debug: l,
        throwOnError: u,
      },
      c,
      p,
    ) {
      const f = {
        Authorization: `Bearer ${this.supabaseKey}`,
        apikey: `${this.supabaseKey}`,
      };
      return new kP({
        url: this.authUrl.href,
        headers: ye(ye({}, f), c),
        storageKey: o,
        autoRefreshToken: e,
        persistSession: t,
        detectSessionInUrl: r,
        storage: n,
        userStorage: s,
        flowType: i,
        lock: a,
        debug: l,
        throwOnError: u,
        fetch: p,
        hasCustomAuthorizationHeader: Object.keys(this.headers).some(
          (d) => d.toLowerCase() === "authorization",
        ),
      });
    }
    _initRealtimeClient(e) {
      return new _2(
        this.realtimeUrl.href,
        ye(
          ye({}, e),
          {},
          {
            params: ye(
              ye({}, { apikey: this.supabaseKey }),
              e == null ? void 0 : e.params,
            ),
          },
        ),
      );
    }
    _listenForAuthEvents() {
      return this.auth.onAuthStateChange((e, t) => {
        this._handleTokenChanged(
          e,
          "CLIENT",
          t == null ? void 0 : t.access_token,
        );
      });
    }
    _handleTokenChanged(e, t, r) {
      (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") &&
      this.changedAccessToken !== r
        ? ((this.changedAccessToken = r), this.realtime.setAuth(r))
        : e === "SIGNED_OUT" &&
          (this.realtime.setAuth(),
          t == "STORAGE" && this.auth.signOut(),
          (this.changedAccessToken = void 0));
    }
  };
const TP = (e, t, r) => new CP(e, t, r);
function PP() {
  if (typeof window < "u") return !1;
  const e = globalThis.process;
  if (!e) return !1;
  const t = e.version;
  if (t == null) return !1;
  const r = t.match(/^v(\d+)\./);
  return r ? parseInt(r[1], 10) <= 18 : !1;
}
PP() &&
  console.warn(
    "⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217",
  );
const RP = "https://wffwxzbdmdgvxunwrqzt.supabase.co",
  NP =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmZnd4emJkbWRndnh1bndycXp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwMjczOTUsImV4cCI6MjA4NDYwMzM5NX0.lQnBMmRUVCXY8SEDDAFOjfAgU716kvlhOobUUARD-hI",
  Uv = TP(RP, NP, {
    auth: { storage: localStorage, persistSession: !0, autoRefreshToken: !0 },
  }),
  Ru = "https://pay.ttkpay1.site/68fa5b2800efe3912a2a6b38",
  jP = 3e3,
  AP = ({
    isOpen: e,
    onClose: t,
    amount: r,
    pixData: n,
    isLoading: s,
    error: o,
  }) => {
    const [i, a] = _.useState(!1),
      [l, u] = _.useState(15 * 60),
      [c, p] = _.useState(null),
      [f, d] = _.useState(!1),
      [w, y] = _.useState("pending"),
      x = _.useRef(),
      g = _.useRef();
    _.useEffect(
      () => (
        e &&
          (d(!1),
          (document.body.style.overflow = "hidden"),
          (document.body.style.position = "fixed"),
          (document.body.style.width = "100%"),
          (document.body.style.top = `-${window.scrollY}px`)),
        () => {
          if (e) {
            const P = document.body.style.top;
            ((document.body.style.overflow = ""),
              (document.body.style.position = ""),
              (document.body.style.width = ""),
              (document.body.style.top = ""),
              window.scrollTo(0, parseInt(P || "0") * -1));
          }
        }
      ),
      [e],
    );
    const m = _.useCallback(async () => {
      var P;
      if (n != null && n.transaction_id)
        try {
          y("checking");
          const { data: M, error: $ } = await Uv.functions.invoke(
            "check-payment-status",
            { body: { transaction_id: n.transaction_id } },
          );
          if ($) {
            (console.error("Error checking payment:", $), y("pending"));
            return;
          }
          M != null &&
          M.success &&
          (P = M == null ? void 0 : M.data) != null &&
          P.is_paid
            ? (y("approved"),
              g.current && clearInterval(g.current),
              x.current && clearInterval(x.current),
              setTimeout(() => {
                const B = window.location.search,
                  I = Ru.includes("?") ? "&" : "?",
                  Q = B ? `${Ru}${I}${B.slice(1)}` : Ru;
                window.location.href = Q;
              }, 2e3))
            : y("pending");
        } catch (M) {
          (console.error("Payment check error:", M), y("pending"));
        }
    }, [n == null ? void 0 : n.transaction_id]);
    (_.useEffect(() => {
      if (e && n != null && n.transaction_id && w !== "approved") {
        const P = setTimeout(() => {
          (m(), (g.current = setInterval(m, jP)));
        }, 5e3);
        return () => {
          (clearTimeout(P), g.current && clearInterval(g.current));
        };
      }
    }, [e, n == null ? void 0 : n.transaction_id, m, w]),
      _.useEffect(
        () => (
          e &&
            n &&
            (x.current = setInterval(() => {
              u((P) => (P <= 0 ? (clearInterval(x.current), 0) : P - 1));
            }, 1e3)),
          () => {
            x.current && clearInterval(x.current);
          }
        ),
        [e, n],
      ),
      _.useEffect(() => {
        (async () => {
          if (n != null && n.pix_copy_paste)
            try {
              const M = await mi.toDataURL(n.pix_copy_paste, {
                width: 140,
                margin: 1,
                color: { dark: "#000000", light: "#ffffff" },
              });
              p(M);
            } catch (M) {
              console.error("Failed to generate QR code:", M);
            }
        })();
      }, [n == null ? void 0 : n.pix_copy_paste]));
    const v = (P) => {
        const M = Math.floor(P / 60),
          $ = P % 60;
        return `${M.toString().padStart(2, "0")}:${$.toString().padStart(2, "0")}`;
      },
      b = (P) =>
        P.toFixed(2)
          .replace(".", ",")
          .replace(/\B(?=(\d{3})+(?!\d))/g, "."),
      E = () => {
        (d(!0),
          setTimeout(() => {
            t();
          }, 200));
      },
      S = async () => {
        const P = n == null ? void 0 : n.pix_copy_paste;
        if (P)
          try {
            (await navigator.clipboard.writeText(P),
              a(!0),
              setTimeout(() => a(!1), 3e3));
          } catch (M) {
            console.error("Failed to copy:", M);
          }
      },
      k = (P) =>
        P
          ? P.length <= 35
            ? P
            : `${P.slice(0, 35)}...`
          : "Código não disponível";
    if (!e) return null;
    const T = (n == null ? void 0 : n.pix_copy_paste) || "",
      j =
        c ||
        (n == null ? void 0 : n.qr_code_base64) ||
        (n == null ? void 0 : n.qr_code);
    return h.jsxs("div", {
      className: `fixed inset-0 z-[9999] flex items-center justify-center p-4 will-change-transform ${f ? "animate-backdrop-out" : "animate-backdrop-in"}`,
      onClick: E,
      children: [
        h.jsx("style", {
          children: `
        @keyframes popupSlideUp {
          0% { opacity: 0; transform: translate3d(0, 20px, 0) scale3d(0.95, 0.95, 1); }
          100% { opacity: 1; transform: translate3d(0, 0, 0) scale3d(1, 1, 1); }
        }
        @keyframes popupSlideDown {
          0% { opacity: 1; transform: translate3d(0, 0, 0) scale3d(1, 1, 1); }
          100% { opacity: 0; transform: translate3d(0, 16px, 0) scale3d(0.95, 0.95, 1); }
        }
        @keyframes backdropIn {
          0% { background-color: rgba(0,0,0,0); }
          100% { background-color: rgba(0,0,0,0.5); }
        }
        @keyframes backdropOut {
          0% { background-color: rgba(0,0,0,0.5); }
          100% { background-color: rgba(0,0,0,0); }
        }
        @keyframes tiktokSpinner {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-backdrop-in { animation: backdropIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-backdrop-out { animation: backdropOut 0.15s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-popup-in { animation: popupSlideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-popup-out { animation: popupSlideDown 0.15s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `,
        }),
        h.jsx("div", {
          className: `bg-white w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden will-change-transform ${f ? "animate-popup-out" : "animate-popup-in"}`,
          onClick: (P) => P.stopPropagation(),
          children:
            w === "approved"
              ? h.jsxs("div", {
                  className: "flex flex-col items-center py-12 px-5",
                  children: [
                    h.jsx("div", {
                      className:
                        "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 animate-bounce",
                      children: h.jsx(th, {
                        size: 36,
                        className: "text-green-500",
                      }),
                    }),
                    h.jsx("p", {
                      className: "text-gray-900 font-bold text-lg mb-1",
                      children: "Pagamento Aprovado!",
                    }),
                    h.jsx("p", {
                      className: "text-gray-500 text-sm text-center",
                      children: "Redirecionando...",
                    }),
                    h.jsx("div", {
                      className:
                        "w-6 h-6 mt-4 rounded-full border-2 border-gray-200 border-t-green-500",
                      style: {
                        animation: "tiktokSpinner 0.8s linear infinite",
                      },
                    }),
                  ],
                })
              : s
                ? h.jsxs("div", {
                    className: "flex flex-col items-center py-12 px-5",
                    children: [
                      h.jsx("div", {
                        className:
                          "w-10 h-10 rounded-full border-[3px] border-gray-200 border-t-[#FE2C55]",
                        style: {
                          animation: "tiktokSpinner 0.8s linear infinite",
                        },
                      }),
                      h.jsx("p", {
                        className: "mt-4 text-gray-700 text-sm font-medium",
                        children: "Gerando pagamento...",
                      }),
                    ],
                  })
                : o
                  ? h.jsxs("div", {
                      className: "flex flex-col items-center py-8 px-5",
                      children: [
                        h.jsx("div", {
                          className:
                            "w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-4",
                          children: h.jsx(Pc, {
                            size: 26,
                            className: "text-[#FE2C55]",
                          }),
                        }),
                        h.jsx("p", {
                          className: "text-gray-900 font-semibold text-sm mb-1",
                          children: "Erro",
                        }),
                        h.jsx("p", {
                          className: "text-gray-500 text-xs text-center mb-5",
                          children: o,
                        }),
                        h.jsx("button", {
                          onClick: E,
                          className:
                            "w-full py-3 bg-[#FE2C55] text-white rounded-xl text-sm font-semibold active:scale-[0.98] transition-transform",
                          children: "Tentar novamente",
                        }),
                      ],
                    })
                  : n
                    ? h.jsxs(h.Fragment, {
                        children: [
                          h.jsxs("div", {
                            className:
                              "relative px-4 py-3 border-b border-gray-100",
                            children: [
                              h.jsx("button", {
                                onClick: E,
                                className:
                                  "absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 active:scale-90 transition-all",
                                children: h.jsx(Pc, { size: 20 }),
                              }),
                              h.jsx("div", {
                                className: "text-center",
                                children: h.jsxs("p", {
                                  className: "text-gray-900 font-semibold",
                                  children: ["R$ ", "21,67"],
                                }),
                              }),
                              h.jsxs("div", {
                                className:
                                  "absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-gray-400",
                                children: [
                                  h.jsx(Tc, { size: 12 }),
                                  h.jsx("span", {
                                    className: "text-xs font-mono",
                                    children: v(l),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          h.jsxs("div", {
                            className: "p-5",
                            children: [
                              h.jsx("div", {
                                className: "flex justify-center mb-4",
                                children: h.jsx("div", {
                                  className:
                                    "bg-gray-50 p-2 rounded-xl border border-gray-100",
                                  children: j
                                    ? h.jsx("img", {
                                        src:
                                          c ||
                                          (n.qr_code_base64
                                            ? `data:image/png;base64,${n.qr_code_base64}`
                                            : n.qr_code),
                                        alt: "QR Code PIX",
                                        className: "w-36 h-36",
                                      })
                                    : h.jsx("div", {
                                        className:
                                          "w-36 h-36 bg-gray-100 rounded-lg flex items-center justify-center",
                                        children: h.jsx("img", {
                                          src: Xo,
                                          alt: "PIX",
                                          className: "w-12 h-12 opacity-30",
                                        }),
                                      }),
                                }),
                              }),
                              h.jsx("div", {
                                onClick: S,
                                className:
                                  "bg-gray-50 rounded-lg p-3 mb-4 cursor-pointer active:bg-gray-100 transition-colors border border-gray-100",
                                children: h.jsx("p", {
                                  className:
                                    "text-[10px] font-mono text-gray-400 text-center truncate",
                                  children: k(T),
                                }),
                              }),
                              h.jsx("button", {
                                onClick: S,
                                disabled: !T,
                                className: `w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 text-sm transition-all active:scale-[0.98] ${i ? "bg-[#00D4AA] text-white" : "bg-[#FE2C55] text-white"}`,
                                children: i
                                  ? h.jsxs(h.Fragment, {
                                      children: [
                                        h.jsx(kb, { size: 18, strokeWidth: 3 }),
                                        h.jsx("span", { children: "Copiado!" }),
                                      ],
                                    })
                                  : h.jsxs(h.Fragment, {
                                      children: [
                                        h.jsx(Pb, { size: 18 }),
                                        h.jsx("span", {
                                          children: "Copiar código",
                                        }),
                                      ],
                                    }),
                              }),
                              h.jsxs("div", {
                                className:
                                  "flex items-center justify-between mt-5 px-2",
                                children: [
                                  h.jsxs("div", {
                                    className:
                                      "flex flex-col items-center gap-1.5 flex-1",
                                    children: [
                                      h.jsx("div", {
                                        className:
                                          "w-8 h-8 rounded-full bg-[#FE2C55]/10 flex items-center justify-center",
                                        children: h.jsx(ty, {
                                          size: 16,
                                          className: "text-[#FE2C55]",
                                        }),
                                      }),
                                      h.jsxs("span", {
                                        className:
                                          "text-[10px] text-gray-500 text-center leading-tight",
                                        children: [
                                          "Abra seu",
                                          h.jsx("br", {}),
                                          "banco",
                                        ],
                                      }),
                                    ],
                                  }),
                                  h.jsx("div", {
                                    className: "h-[1px] w-6 bg-gray-200 -mt-4",
                                  }),
                                  h.jsxs("div", {
                                    className:
                                      "flex flex-col items-center gap-1.5 flex-1",
                                    children: [
                                      h.jsx("div", {
                                        className:
                                          "w-8 h-8 rounded-full bg-[#FE2C55]/10 flex items-center justify-center",
                                        children: h.jsx(Ib, {
                                          size: 16,
                                          className: "text-[#FE2C55]",
                                        }),
                                      }),
                                      h.jsxs("span", {
                                        className:
                                          "text-[10px] text-gray-500 text-center leading-tight",
                                        children: [
                                          "Pix Copia",
                                          h.jsx("br", {}),
                                          "e Cola",
                                        ],
                                      }),
                                    ],
                                  }),
                                  h.jsx("div", {
                                    className: "h-[1px] w-6 bg-gray-200 -mt-4",
                                  }),
                                  h.jsxs("div", {
                                    className:
                                      "flex flex-col items-center gap-1.5 flex-1",
                                    children: [
                                      h.jsx("div", {
                                        className:
                                          "w-8 h-8 rounded-full bg-[#FE2C55]/10 flex items-center justify-center",
                                        children: h.jsx(Lb, {
                                          size: 16,
                                          className: "text-[#FE2C55]",
                                        }),
                                      }),
                                      h.jsxs("span", {
                                        className:
                                          "text-[10px] text-gray-500 text-center leading-tight",
                                        children: [
                                          "Cole e",
                                          h.jsx("br", {}),
                                          "pague",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              h.jsxs("div", {
                                className:
                                  "flex items-center justify-center gap-1 mt-4",
                                children: [
                                  h.jsx(ey, {
                                    size: 10,
                                    className: "text-gray-300",
                                  }),
                                  h.jsx("p", {
                                    className: "text-[9px] text-gray-400",
                                    children: "Pagamento seguro",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      })
                    : null,
        }),
      ],
    });
  },
  Yp = [
    "Maria",
    "Ana",
    "João",
    "Pedro",
    "Lucas",
    "Juliana",
    "Fernanda",
    "Carlos",
    "Patricia",
    "Roberto",
    "Camila",
    "Bruno",
    "Larissa",
    "Rafael",
    "Amanda",
    "Marcos",
    "Gabriela",
    "Diego",
    "Vanessa",
    "Felipe",
    "Beatriz",
    "Thiago",
  ],
  Xp = ["S", "M", "O", "L", "R", "C", "F", "P", "A", "G", "B", "T", "N", "D"],
  OP = () =>
    (Math.floor(Math.random() * 4e3) + 2e3)
      .toFixed(2)
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, "."),
  IP = () => {
    const e = Yp[Math.floor(Math.random() * Yp.length)],
      t = Xp[Math.floor(Math.random() * Xp.length)];
    return { id: Date.now() + Math.random(), name: `${e} ${t}.`, value: OP() };
  },
  LP = () => {
    const [e, t] = _.useState(null);
    return (
      _.useEffect(() => {
        const r = () => {
            (t(IP()),
              setTimeout(() => {
                t(null);
              }, 3e3));
          },
          n = setTimeout(r, 8e3),
          s = setInterval(() => {
            const o = Math.random() * 2e4 + 2e4;
            setTimeout(r, o);
          }, 3e4);
        return () => {
          (clearTimeout(n), clearInterval(s));
        };
      }, []),
      e
        ? h.jsx("div", {
            className:
              "fixed bottom-4 left-4 right-4 z-50 flex justify-center pointer-events-none",
            children: h.jsxs("div", {
              className:
                "bg-[#1F1F1F] rounded-lg px-3 py-2 shadow-lg animate-slide-in-right flex items-center gap-2 max-w-[280px] pointer-events-auto",
              style: { animation: "slideInFromBottom 0.3s ease-out" },
              children: [
                h.jsx("div", {
                  className:
                    "w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0",
                  children: h.jsx(th, { className: "w-3.5 h-3.5 text-white" }),
                }),
                h.jsx("div", {
                  className: "flex-1 min-w-0",
                  children: h.jsxs("p", {
                    className: "text-[13px] text-white truncate",
                    children: [
                      h.jsx("span", {
                        className: "font-medium",
                        children: e.name,
                      }),
                      h.jsx("span", {
                        className: "text-white/70",
                        children: " validou e recebeu ",
                      }),
                      h.jsxs("span", {
                        className: "text-[#25D366] font-semibold",
                        children: ["R$ ", e.value],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          })
        : null
    );
  },
  $P = () => {
    const e = new URLSearchParams(window.location.search),
      t = {};
    return (
      e.forEach((r, n) => {
        t[n] = r;
      }),
      t
    );
  },
  MP = ({ userData: e, balance: t, fee: r, confirmUrl: n }) => {
    const [s, o] = _.useState(19),
      [i, a] = _.useState(!1),
      [l, u] = _.useState(null),
      [c, p] = _.useState(!1),
      [f, d] = _.useState(null),
      [w, y] = _.useState(10 * 60),
      [x, g] = _.useState(!1),
      [m] = _.useState(() => Math.floor(Math.random() * 500) + 2500),
      [v, b] = _.useState(() => Math.floor(Math.random() * 30) + 10),
      [E, S] = _.useState(null);
    (_.useEffect(() => {
      if (w <= 0) {
        g(!0);
        return;
      }
      const D = setInterval(() => {
        y((C) => (C <= 1 ? (g(!0), 0) : C - 1));
      }, 1e3);
      return () => clearInterval(D);
    }, [w]),
      _.useEffect(() => {
        const D = setInterval(() => {
          b((C) =>
            C >= 60 || Math.random() < 0.1
              ? Math.floor(Math.random() * 15) + 5
              : C + 1,
          );
        }, 1e3);
        return () => clearInterval(D);
      }, []),
      _.useEffect(() => {
        const D = () => {
          const C = Math.random() * 7e3 + 3e3;
          setTimeout(() => {
            o((R) => (R > 1 ? (D(), R - 1) : R));
          }, C);
        };
        D();
      }, []));
    const k = (D) =>
        D.toFixed(2)
          .replace(".", ",")
          .replace(/\B(?=(\d{3})+(?!\d))/g, "."),
      T = (D) => {
        const C = Math.floor(D / 60),
          R = D % 60;
        return `${String(C).padStart(2, "0")}:${String(R).padStart(2, "0")}`;
      },
      j = () => {
        const D = new Date(),
          C = String(D.getDate()).padStart(2, "0"),
          R = String(D.getMonth() + 1).padStart(2, "0"),
          L = D.getFullYear();
        return `${C}/${R}/${L}`;
      };
    _.useCallback(async () => {
      (p(!0), d(null), a(!0));
      const D = (e.nome || "").trim(),
        C = D.replace(/[^\p{L}]/gu, "").length;
      if (D.length < 2 || C < 2) {
        (d("Digite um nome válido para gerar o PIX."), p(!1));
        return;
      }
      const R = $P();
      try {
        const { data: L, error: q } = await Uv.functions.invoke(
          "generate-pix",
          { body: { amount: r, customer_name: D, url_params: R } },
        );
        if (q) {
          (console.error("Supabase function error:", q),
            d(q.message || "Erro ao conectar com o servidor"));
          return;
        }
        if (!L.success) {
          d(L.error || "Erro ao gerar PIX");
          return;
        }
        u(L.data);
      } catch (L) {
        (console.error("Error generating PIX:", L),
          d("Erro ao gerar código PIX. Tente novamente."));
      } finally {
        p(!1);
      }
    }, [r, e.nome]);
    const P = (D) => {
        if ((D.preventDefault(), x)) return;
        const C = window.location.search,
          R = n.includes("?") ? "&" : "?",
          L = C ? `${n}${R}${C.slice(1)}` : n;
        window.location.href = L;
      },
      M = () => {
        (a(!1), u(null), d(null));
      },
      $ = (D) => {
        S(E === D ? null : D);
      },
      B = [
        {
          question: "Por que preciso fazer este depósito?",
          answer:
            "É uma medida de segurança exigida pelo Banco Central para confirmar que você é uma pessoa real e evitar fraudes. O valor é devolvido automaticamente após a validação.",
        },
        {
          question: "E se algo der errado?",
          answer:
            "O sistema cancela automaticamente e o depósito é estornado em até 1 minuto para a mesma chave PIX informada.",
        },
        {
          question: "Por que não desconta do meu saldo?",
          answer:
            "Por normas do Banco Central, validações de identidade não podem utilizar saldos promocionais. Esta é uma exigência regulatória.",
        },
      ],
      I = w < 180,
      Q = w < 60,
      H = () =>
        Q
          ? `🔴 URGENTE: Seu saldo será perdido em ${T(w)}`
          : I
            ? "⚠️ Complete sua validação agora"
            : "Reembolso automático em 1 minuto";
    return h.jsxs("div", {
      className: "min-h-screen bg-background animate-fade-in relative",
      children: [
        h.jsx(LP, {}),
        h.jsx("div", {
          className:
            "sticky top-0 bg-card z-10 px-4 py-3 border-b border-border",
          children: h.jsx("h1", {
            className: "text-center font-semibold text-foreground",
            children: "Validação de Identidade",
          }),
        }),
        h.jsxs("div", {
          className: "p-4 max-w-md mx-auto",
          children: [
            h.jsxs("div", {
              className: `rounded-xl p-3 mb-3 transition-colors duration-300 animate-fade-in ${x || I ? "bg-destructive/10 border border-destructive/30" : "bg-muted border border-border"}`,
              style: { animationDelay: "50ms" },
              children: [
                x
                  ? h.jsxs("div", {
                      className: "flex items-center gap-2 text-destructive",
                      children: [
                        h.jsx($b, { className: "w-4 h-4" }),
                        h.jsx("span", {
                          className: "text-sm font-medium",
                          children: "Processo expirado. Reinicie a validação.",
                        }),
                      ],
                    })
                  : h.jsx("div", {
                      className: "flex items-center justify-between",
                      children: h.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          h.jsx(Tc, {
                            className: `w-4 h-4 ${I ? "text-destructive" : "text-muted-foreground"}`,
                          }),
                          h.jsxs("span", {
                            className: `text-sm font-medium ${I ? "text-destructive" : "text-foreground"}`,
                            children: [
                              "Sua validação expira em: ",
                              h.jsx("span", {
                                className: "font-bold",
                                children: T(w),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                !x &&
                  h.jsx("p", {
                    className: "text-xs text-muted-foreground mt-1",
                    children:
                      "Após este tempo, o saldo será redistribuído para outro usuário",
                  }),
              ],
            }),
            h.jsxs("div", {
              className:
                "flex items-center justify-center gap-2 py-2 mb-3 animate-fade-in",
              style: { animationDelay: "75ms" },
              children: [
                h.jsx("div", {
                  className: "w-2 h-2 bg-green-500 rounded-full animate-pulse",
                }),
                h.jsxs("span", {
                  className: "text-xs text-muted-foreground",
                  children: [
                    m.toLocaleString("pt-BR"),
                    " validações concluídas hoje • Última há ",
                    v,
                    "s",
                  ],
                }),
              ],
            }),
            h.jsx("div", {
              className:
                "bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-4 mb-4 border border-primary/20 animate-fade-in",
              style: { animationDelay: "100ms" },
              children: h.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  h.jsx("div", {
                    className:
                      "w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center",
                    children: h.jsx(Mb, { className: "w-6 h-6 text-primary" }),
                  }),
                  h.jsxs("div", {
                    children: [
                      h.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: "Saldo disponível para saque",
                      }),
                      h.jsxs("p", {
                        className: "text-2xl font-bold text-foreground",
                        children: ["R$ ", k(t)],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            h.jsxs("div", {
              className:
                "relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-4 mb-4 overflow-hidden animate-fade-in",
              style: { animationDelay: "150ms" },
              children: [
                h.jsx("div", {
                  className: "absolute inset-0 overflow-hidden",
                  children: h.jsx("div", {
                    className:
                      "absolute -top-[70%] -left-[70%] w-[240%] h-[240%] bg-[radial-gradient(circle,rgba(255,0,80,0.07)_0%,transparent_70%)] animate-wave-move",
                  }),
                }),
                h.jsxs("div", {
                  className:
                    "relative z-10 flex items-center justify-between gap-3",
                  children: [
                    h.jsxs("p", {
                      className: "text-white text-sm font-semibold flex-1",
                      children: [
                        "Apenas ",
                        h.jsx("span", {
                          className: "text-primary",
                          children: s,
                        }),
                        " vagas restantes",
                      ],
                    }),
                    h.jsxs("div", {
                      className:
                        "flex items-center gap-1.5 bg-primary/15 px-2.5 py-1 rounded-full",
                      children: [
                        h.jsx("div", {
                          className:
                            "w-1.5 h-1.5 bg-primary rounded-full animate-pulse-dot",
                        }),
                        h.jsx("span", {
                          className:
                            "text-primary text-[11px] font-bold whitespace-nowrap",
                          children: "AO VIVO",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            h.jsxs("div", {
              className:
                "bg-card rounded-xl p-5 mb-4 shadow-sm animate-fade-in relative overflow-hidden",
              style: { animationDelay: "200ms" },
              children: [
                h.jsx("div", {
                  className: "absolute top-0 left-0 w-full h-[2px]",
                  style: {
                    background:
                      "linear-gradient(90deg, hsl(var(--primary)), hsl(43,100%,69%), hsl(142,76%,36%), hsl(270,60%,55%))",
                  },
                }),
                h.jsx("h2", {
                  className:
                    "text-xs font-bold text-muted-foreground tracking-wider mb-3",
                  children: "VALIDAÇÃO DE IDENTIDADE",
                }),
                h.jsxs("div", {
                  className: "flex items-center justify-between gap-3 mb-2",
                  children: [
                    h.jsxs("span", {
                      className:
                        "text-3xl font-bold text-foreground whitespace-nowrap",
                      children: ["R$ ", "21,67"],
                    }),
                    h.jsxs("span", {
                      className:
                        "bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1 leading-tight text-center shrink-0",
                      children: [
                        h.jsx(To, { className: "w-3 h-3 shrink-0" }),
                        h.jsxs("span", {
                          className: "flex flex-col",
                          children: [
                            h.jsx("span", { children: "DEPÓSITO" }),
                            h.jsx("span", { children: "REEMBOLSÁVEL" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                h.jsxs("p", {
                  className: "text-muted-foreground text-sm leading-relaxed",
                  children: [
                    "Depósito de segurança temporário para confirmar que você é o titular da conta. Exigido pelo Banco Central para prevenir fraudes. ",
                    h.jsx("span", {
                      className: "font-semibold text-foreground",
                      children: "Valor 100% reembolsável em até 1 minuto.",
                    }),
                  ],
                }),
              ],
            }),
            h.jsxs("div", {
              className:
                "bg-card rounded-xl p-5 mb-4 shadow-sm animate-fade-in relative overflow-hidden",
              style: { animationDelay: "250ms" },
              children: [
                h.jsx("div", {
                  className: "absolute top-0 left-0 w-full h-[2px]",
                  style: {
                    background:
                      "linear-gradient(90deg, hsl(270,60%,55%), hsl(var(--primary)), hsl(43,100%,69%), hsl(142,76%,36%))",
                  },
                }),
                h.jsx("h2", {
                  className:
                    "text-xs font-bold text-muted-foreground tracking-wider mb-3",
                  children: "DADOS PARA REEMBOLSO",
                }),
                h.jsxs("div", {
                  className: "grid grid-cols-2 gap-3",
                  children: [
                    h.jsxs("div", {
                      children: [
                        h.jsx("span", {
                          className: "text-xs text-muted-foreground",
                          children: "Nome",
                        }),
                        h.jsx("p", {
                          className: "text-sm font-medium text-foreground",
                          children: e.nome,
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      children: [
                        h.jsx("span", {
                          className: "text-xs text-muted-foreground",
                          children: "Data",
                        }),
                        h.jsx("p", {
                          className: "text-sm font-medium text-foreground",
                          children: j(),
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      children: [
                        h.jsx("span", {
                          className: "text-xs text-muted-foreground",
                          children: "Chave PIX",
                        }),
                        h.jsx("p", {
                          className: "text-sm font-medium text-foreground",
                          children: e.tipoChave,
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      children: [
                        h.jsx("span", {
                          className: "text-xs text-muted-foreground",
                          children: "Valor a receber",
                        }),
                        h.jsxs("p", {
                          className: "text-sm font-bold text-primary",
                          children: ["R$ ", k(t)],
                        }),
                      ],
                    }),
                  ],
                }),
                h.jsx("div", {
                  className: "mt-3 pt-3 border-t border-border",
                  children: h.jsx("p", {
                    className: "text-sm text-foreground font-mono",
                    children: e.chavePix,
                  }),
                }),
              ],
            }),
            h.jsxs("div", {
              className:
                "bg-card rounded-xl p-5 mb-4 shadow-sm animate-fade-in relative overflow-hidden",
              style: { animationDelay: "300ms" },
              children: [
                h.jsx("div", {
                  className: "absolute top-0 left-0 w-full h-[2px]",
                  style: {
                    background:
                      "linear-gradient(90deg, hsl(142,76%,36%), hsl(270,60%,55%), hsl(var(--primary)), hsl(43,100%,69%))",
                  },
                }),
                h.jsx("h2", {
                  className:
                    "text-xs font-bold text-muted-foreground tracking-wider mb-3",
                  children: "PROCESSO DE VALIDAÇÃO",
                }),
                h.jsxs("div", {
                  className: "space-y-3",
                  children: [
                    h.jsxs("div", {
                      className: "flex items-start gap-3",
                      children: [
                        h.jsx("div", {
                          className:
                            "w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0",
                          children: "1",
                        }),
                        h.jsxs("div", {
                          children: [
                            h.jsx("p", {
                              className: "text-sm font-medium text-foreground",
                              children: "Realizar depósito de validação",
                            }),
                            h.jsxs("p", {
                              className: "text-xs text-muted-foreground",
                              children: ["R$ ", "21,67", " para verificação"],
                            }),
                          ],
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      className: "flex items-start gap-3",
                      children: [
                        h.jsx("div", {
                          className:
                            "w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0",
                          children: h.jsx(th, { className: "w-4 h-4" }),
                        }),
                        h.jsxs("div", {
                          children: [
                            h.jsx("p", {
                              className: "text-sm font-medium text-green-600",
                              children: "Identidade confirmada automaticamente",
                            }),
                            h.jsx("p", {
                              className: "text-xs text-muted-foreground",
                              children: "Depósito devolvido em 1 minuto",
                            }),
                          ],
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      className: "flex items-start gap-3",
                      children: [
                        h.jsx("div", {
                          className:
                            "w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0",
                          children: "3",
                        }),
                        h.jsxs("div", {
                          children: [
                            h.jsx("p", {
                              className: "text-sm font-medium text-foreground",
                              children: "Saldo liberado para saque",
                            }),
                            h.jsxs("p", {
                              className: "text-xs text-muted-foreground",
                              children: ["R$ ", k(t), " disponível"],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            h.jsxs("button", {
              onClick: P,
              disabled: x,
              className: `w-full h-14 flex items-center justify-between px-6 rounded-2xl font-bold shadow-lg transition-all duration-200 animate-fade-in mb-3 ${x ? "bg-muted text-muted-foreground cursor-not-allowed" : I ? "bg-primary text-primary-foreground shadow-primary/30 hover:brightness-105 active:scale-[0.98] animate-pulse-cta" : "bg-primary text-primary-foreground shadow-primary/30 hover:brightness-105 active:scale-[0.98]"}`,
              style: { animationDelay: "325ms" },
              children: [
                h.jsxs("span", {
                  className: "text-base flex items-center gap-2",
                  children: [
                    h.jsx(To, { className: "w-4 h-4" }),
                    "Validar e Liberar R$ ",
                    k(t),
                  ],
                }),
                h.jsx("div", {
                  className: `w-9 h-9 rounded-full flex items-center justify-center ${x ? "bg-muted-foreground/20" : "bg-white/20"}`,
                  children: h.jsx(Sb, { className: "w-5 h-5" }),
                }),
              ],
            }),
            h.jsxs("div", {
              className: `flex items-center justify-center gap-2 mb-3 text-sm animate-fade-in ${Q ? "text-destructive font-bold" : I ? "text-amber-600 font-medium" : "text-muted-foreground"}`,
              style: { animationDelay: "350ms" },
              children: [
                h.jsx(Tc, { className: "w-4 h-4" }),
                h.jsx("span", { children: H() }),
              ],
            }),
            h.jsxs("div", {
              className:
                "bg-card rounded-xl p-5 mb-4 shadow-sm animate-fade-in",
              style: { animationDelay: "375ms" },
              children: [
                h.jsx("h2", {
                  className:
                    "text-xs font-bold text-muted-foreground tracking-wider mb-3",
                  children: "DÚVIDAS FREQUENTES",
                }),
                h.jsx("div", {
                  className: "space-y-2",
                  children: B.map((D, C) =>
                    h.jsxs(
                      "div",
                      {
                        className:
                          "border-b border-border last:border-0 pb-2 last:pb-0",
                        children: [
                          h.jsxs("button", {
                            onClick: () => $(C),
                            className:
                              "w-full flex items-center justify-between py-2 text-left",
                            children: [
                              h.jsx("span", {
                                className:
                                  "text-sm font-medium text-foreground",
                                children: D.question,
                              }),
                              E === C
                                ? h.jsx(Tb, {
                                    className:
                                      "w-4 h-4 text-muted-foreground flex-shrink-0",
                                  })
                                : h.jsx(Cb, {
                                    className:
                                      "w-4 h-4 text-muted-foreground flex-shrink-0",
                                  }),
                            ],
                          }),
                          E === C &&
                            h.jsx("p", {
                              className:
                                "text-xs text-muted-foreground pb-2 animate-fade-in",
                              children: D.answer,
                            }),
                        ],
                      },
                      C,
                    ),
                  ),
                }),
              ],
            }),
            h.jsxs("div", {
              className:
                "bg-card rounded-xl p-4 mb-4 shadow-sm border border-border animate-fade-in",
              style: { animationDelay: "400ms" },
              children: [
                h.jsxs("div", {
                  className: "flex items-center justify-center gap-2 mb-3",
                  children: [
                    h.jsx(To, { className: "w-4 h-4 text-muted-foreground" }),
                    h.jsx("span", {
                      className:
                        "text-xs font-bold text-muted-foreground tracking-wider",
                      children: "REGULAMENTADO POR",
                    }),
                  ],
                }),
                h.jsxs("div", {
                  className: "flex justify-center items-center gap-8",
                  children: [
                    h.jsx("img", {
                      src: lC,
                      alt: "Banco Central",
                      className: "h-10 object-contain",
                    }),
                    h.jsx("img", {
                      src: uC,
                      alt: "Receita Federal",
                      className: "h-10 object-contain",
                    }),
                  ],
                }),
                h.jsx("p", {
                  className: "text-center text-xs text-muted-foreground mt-3",
                  children: "Transação segura e verificada",
                }),
              ],
            }),
            h.jsxs("button", {
              onClick: P,
              disabled: x,
              className:
                "w-full flex items-center justify-center gap-2 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors animate-fade-in",
              style: { animationDelay: "450ms" },
              children: [
                h.jsx(jb, { className: "w-4 h-4" }),
                h.jsx("span", {
                  className: "underline",
                  children:
                    "Ainda com dúvidas? Clique aqui para falar com suporte →",
                }),
              ],
            }),
            h.jsxs("div", {
              className:
                "flex items-center justify-center gap-2 mt-2 pb-8 animate-fade-in",
              style: { animationDelay: "475ms" },
              children: [
                h.jsx(ey, { className: "w-4 h-4 text-muted-foreground" }),
                h.jsx("p", {
                  className: "text-xs text-muted-foreground",
                  children: "Processo 100% seguro",
                }),
              ],
            }),
          ],
        }),
        h.jsx(AP, {
          isOpen: i,
          onClose: M,
          amount: r,
          pixData: l,
          isLoading: c,
          error: f,
        }),
      ],
    });
  },
  DP = ({
    balance: e,
    onWithdraw: t,
    balanceCardRef: r,
    onHeightChange: n,
  }) => {
    const [s, o] = _.useState(!0),
      i = _.useRef(null),
      a = (l) =>
        l
          .toFixed(2)
          .replace(".", ",")
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return (
      _.useEffect(() => {
        const l = r == null ? void 0 : r.current;
        if (!l) {
          o(!0);
          return;
        }
        const u = () => {
          const f = l.getBoundingClientRect();
          o(f.bottom <= 60);
        };
        u();
        const c = globalThis;
        if (!("IntersectionObserver" in c))
          return (
            c.addEventListener("scroll", u, { passive: !0 }),
            c.addEventListener("resize", u),
            () => {
              (c.removeEventListener("scroll", u),
                c.removeEventListener("resize", u));
            }
          );
        const p = new IntersectionObserver(
          ([f]) => {
            o(!f.isIntersecting);
          },
          { root: null, threshold: 0, rootMargin: "-60px 0px 0px 0px" },
        );
        return (p.observe(l), () => p.disconnect());
      }, [r]),
      _.useEffect(() => {
        if (!n) return;
        const l = i.current;
        if (!l) return;
        const u = () => {
          const p = s ? Math.ceil(l.getBoundingClientRect().height) : 0;
          n(p);
        };
        u();
        const c = new ResizeObserver(() => u());
        return (
          c.observe(l),
          window.addEventListener("resize", u),
          () => {
            (c.disconnect(), window.removeEventListener("resize", u));
          }
        );
      }, [n, s]),
      typeof document > "u"
        ? null
        : Qs.createPortal(
            h.jsx("div", {
              ref: i,
              className: `fixed bottom-0 left-0 right-0 z-[9999] bg-card shadow-[0_-4px_20px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out ${s ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"}`,
              style: { paddingBottom: "env(safe-area-inset-bottom)" },
              children: h.jsx("div", {
                className: "max-w-md mx-auto p-4",
                children: h.jsxs("div", {
                  className: "flex items-center justify-between gap-4",
                  children: [
                    h.jsxs("div", {
                      className: "flex flex-col gap-0.5 min-w-0",
                      children: [
                        h.jsxs("div", {
                          className:
                            "flex items-center gap-1 text-muted-foreground text-xs font-medium",
                          children: [
                            h.jsx("span", { children: "Seu saldo" }),
                            h.jsx("img", {
                              src: ov,
                              alt: "",
                              className: "w-3 h-3",
                            }),
                          ],
                        }),
                        h.jsx("div", {
                          className: "flex items-baseline",
                          children: h.jsxs("span", {
                            className: "text-foreground font-bold text-xl",
                            children: ["R$ ", a(e)],
                          }),
                        }),
                      ],
                    }),
                    h.jsxs("button", {
                      type: "button",
                      onClick: t,
                      className:
                        "h-10 px-6 inline-flex justify-center items-center gap-2 rounded-full bg-primary relative transition-all hover:brightness-110 active:scale-[0.98]",
                      children: [
                        h.jsx("span", {
                          className:
                            "text-primary-foreground text-sm font-semibold",
                          children: "Sacar",
                        }),
                        h.jsx("span", {
                          className: "absolute -top-2 -right-1",
                          children: h.jsx("img", {
                            src: iv,
                            alt: "",
                            className:
                              "w-8 h-3 p-0.5 px-1 rounded-md rounded-bl-none bg-muted",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            document.body,
          )
    );
  },
  Zp = [
    "#FF1493",
    "#FFD700",
    "#00FF7F",
    "#FF4500",
    "#1E90FF",
    "#FF69B4",
    "#7B68EE",
    "#00CED1",
    "#FF6347",
    "#32CD32",
    "#FF00FF",
    "#FFA500",
    "#ADFF2F",
    "#DC143C",
    "#00BFFF",
  ],
  FP = ({ playSound: e = !1 }) => {
    _.useState([]);
    const [t, r] = _.useState(!0),
      n = _.useRef(null),
      s = _.useRef(null),
      o = _.useRef();
    return (
      _.useEffect(() => {
        e &&
          n.current &&
          ((n.current.currentTime = 0), n.current.play().catch(() => {}));
      }, [e]),
      _.useEffect(() => {
        const i = s.current;
        if (!i) return;
        const a = i.getContext("2d");
        if (!a) return;
        const l = window.devicePixelRatio || 1;
        ((i.width = window.innerWidth * l),
          (i.height = window.innerHeight * l),
          (i.style.width = `${window.innerWidth}px`),
          (i.style.height = `${window.innerHeight}px`),
          a.scale(l, l));
        const u = window.innerWidth,
          c = window.innerHeight,
          p = [];
        for (let y = 0; y < 120; y++) {
          const x = Math.random() < 0.15 ? 2 : Math.random() < 0.4 ? 1 : 0;
          p.push({
            x: Math.random() * u,
            y: -20 - Math.random() * c * 0.5,
            w: x === 2 ? 3 + Math.random() * 2 : 6 + Math.random() * 8,
            h: x === 2 ? 30 + Math.random() * 40 : 4 + Math.random() * 6,
            color: Zp[Math.floor(Math.random() * Zp.length)],
            rotation: Math.random() * Math.PI * 2,
            rotSpeed: (Math.random() - 0.5) * 0.15,
            velX: (Math.random() - 0.5) * 3,
            velY: 1.5 + Math.random() * 3,
            gravity: 0.03 + Math.random() * 0.02,
            wobblePhase: Math.random() * Math.PI * 2,
            wobbleSpeed: 0.02 + Math.random() * 0.04,
            wobbleAmp: 1 + Math.random() * 2.5,
            opacity: 0.85 + Math.random() * 0.15,
            shape: x,
            tilt: Math.random() * Math.PI * 2,
            tiltSpeed: 0.02 + Math.random() * 0.06,
            flipPhase: Math.random() * Math.PI * 2,
            flipSpeed: 0.04 + Math.random() * 0.08,
          });
        }
        const f = performance.now(),
          d = 4e3,
          w = (y) => {
            const x = y - f,
              g = x > d - 800 ? Math.max(0, 1 - (x - (d - 800)) / 800) : 1;
            if (x > d) {
              r(!1);
              return;
            }
            a.clearRect(0, 0, u, c);
            for (const m of p) {
              if (
                ((m.velY += m.gravity),
                (m.wobblePhase += m.wobbleSpeed),
                (m.x += m.velX + Math.sin(m.wobblePhase) * m.wobbleAmp),
                (m.y += m.velY),
                (m.rotation += m.rotSpeed),
                (m.tilt += m.tiltSpeed),
                (m.flipPhase += m.flipSpeed),
                (m.velX *= 0.999),
                (m.velY = Math.min(m.velY, 6)),
                m.y > c + 50)
              )
                continue;
              (a.save(), a.translate(m.x, m.y), a.rotate(m.rotation));
              const v = Math.cos(m.flipPhase);
              if (
                (a.scale(v, 1), (a.globalAlpha = m.opacity * g), m.shape === 2)
              ) {
                (a.beginPath(),
                  (a.strokeStyle = m.color),
                  (a.lineWidth = m.w),
                  (a.lineCap = "round"));
                for (let b = 0; b < m.h; b += 2) {
                  const E = Math.sin((b / m.h) * Math.PI * 3 + m.tilt) * 6;
                  b === 0 ? a.moveTo(E, b) : a.lineTo(E, b);
                }
                a.stroke();
              } else
                m.shape === 1
                  ? (a.beginPath(),
                    (a.fillStyle = m.color),
                    a.ellipse(0, 0, m.w / 2, m.h / 2, 0, 0, Math.PI * 2),
                    a.fill())
                  : ((a.fillStyle = m.color),
                    a.beginPath(),
                    a.roundRect(-m.w / 2, -m.h / 2, m.w, m.h, 1),
                    a.fill(),
                    (a.fillStyle = "rgba(255,255,255,0.25)"),
                    a.fillRect(-m.w / 2, -m.h / 2, m.w * 0.4, m.h));
              a.restore();
            }
            o.current = requestAnimationFrame(w);
          };
        return (
          (o.current = requestAnimationFrame(w)),
          () => {
            o.current && cancelAnimationFrame(o.current);
          }
        );
      }, []),
      t
        ? h.jsxs("div", {
            className:
              "fixed inset-0 pointer-events-none z-[10000] overflow-hidden",
            children: [
              h.jsx("audio", {
                ref: n,
                src: "/sounds/coin-sound.mp3",
                preload: "auto",
                style: { display: "none" },
              }),
              h.jsx("canvas", {
                ref: s,
                className: "absolute inset-0 w-full h-full",
              }),
            ],
          })
        : null
    );
  },
  UP = () => {
    const e = _.useRef(null);
    return {
      playSound: _.useCallback(() => {
        (e.current ||
          ((e.current = new Audio("/sounds/coin-sound.mp3")),
          (e.current.volume = 1),
          (e.current.playbackRate = 0.88)),
          (e.current.currentTime = 0),
          e.current.play().catch(() => {}));
      }, []),
    };
  },
  Xn = 5361.52,
  BP = 37.43,
  zP = "https://pay.ttkpay1.site/68fa5b2800efe3912a2a6b38",
  VP = "/",
  WP = () => {
    const [e, t] = _.useState("home"),
      [r, n] = _.useState(!0),
      [s, o] = _.useState({
        nome: "",
        tipoChave: "",
        chavePix: "",
        valorSaque: Xn,
      }),
      [i, a] = _.useState(!1),
      l = _.useRef(null),
      [u, c] = _.useState(0),
      { playSound: p } = UP();
    _.useEffect(() => {
      window.history.pushState(null, "", window.location.href);
      const k = () => {
        window.location.href = VP;
      };
      return (
        window.addEventListener("popstate", k),
        () => {
          window.removeEventListener("popstate", k);
        }
      );
    }, []);
    const f = _.useCallback((k) => {
        (a(!0),
          setTimeout(() => {
            (t(k), a(!1));
          }, 150));
      }, []),
      d = _.useCallback(() => {
        (p(), f("amount"));
      }, [f, p]),
      w = _.useCallback(() => {
        (n(!1), t("home"));
      }, []),
      y = _.useCallback(
        (k) => {
          (o((T) => ({ ...T, valorSaque: k })), f("form"));
        },
        [f],
      ),
      x = _.useCallback(
        (k) => {
          (o((T) => ({ ...T, ...k })), f("loading"));
        },
        [f],
      ),
      g = _.useCallback(() => {
        f("confirmation");
      }, [f]),
      m = _.useCallback(() => {
        f("amount");
      }, [f]),
      v = _.useCallback(() => {
        f("home");
      }, [f]),
      b = i ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100",
      E = 120,
      S =
        u > 0
          ? `calc(${u + E}px + env(safe-area-inset-bottom))`
          : `calc(${E}px + env(safe-area-inset-bottom))`;
    return e === "loading"
      ? h.jsx("div", {
          className: `transition-all duration-200 ease-out ${b}`,
          children: h.jsx(aC, { onComplete: g }),
        })
      : e === "confirmation"
        ? h.jsx("div", {
            className: `transition-all duration-200 ease-out ${b}`,
            children: h.jsx(MP, {
              userData: s,
              balance: s.valorSaque,
              fee: BP,
              confirmUrl: zP,
            }),
          })
        : e === "amount"
          ? h.jsx("div", {
              className: `transition-all duration-200 ease-out ${b}`,
              children: h.jsx(oC, { balance: Xn, onContinue: y, onBack: v }),
            })
          : e === "form"
            ? h.jsx("div", {
                className: `transition-all duration-200 ease-out ${b}`,
                children: h.jsx(iC, {
                  onSubmit: x,
                  valorSaque: s.valorSaque,
                  onBack: m,
                }),
              })
            : h.jsxs("div", {
                className: `min-h-screen bg-background px-3 transition-all duration-200 ease-out ${b}`,
                style: { paddingBottom: S },
                children: [
                  h.jsx(FP, {}),
                  h.jsxs("div", {
                    className: "max-w-md mx-auto",
                    children: [
                      h.jsxs("div", {
                        className:
                          "mt-2 mb-3 rounded-xl overflow-hidden relative",
                        style: {
                          background:
                            "linear-gradient(135deg, #2D0A3E 0%, #1A0A2E 50%, #2D0A3E 100%)",
                        },
                        children: [
                          h.jsx("div", {
                            className: "absolute inset-0 opacity-20",
                            style: {
                              background:
                                "radial-gradient(circle at 80% 50%, #FFC107, transparent 60%), radial-gradient(circle at 20% 50%, #FE2B54, transparent 60%)",
                            },
                          }),
                          h.jsxs("div", {
                            className:
                              "relative flex items-center gap-3 px-4 py-3",
                            children: [
                              h.jsx("img", {
                                src: sv,
                                alt: "",
                                className:
                                  "w-14 h-14 object-contain flex-shrink-0 scale-[1.8]",
                                style: {
                                  filter:
                                    "drop-shadow(0 2px 8px rgba(255,193,7,0.4))",
                                },
                              }),
                              h.jsxs("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                  h.jsx("p", {
                                    className:
                                      "text-white text-sm font-bold leading-tight",
                                    children: "🎭 Carnaval de Prêmios",
                                  }),
                                  h.jsx("p", {
                                    className:
                                      "text-white/70 text-[11px] mt-0.5",
                                    children:
                                      "Promoção especial por tempo limitado",
                                  }),
                                ],
                              }),
                              h.jsx("div", {
                                className:
                                  "flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-full px-2.5 py-1",
                                children: h.jsx("span", {
                                  className:
                                    "text-[10px] font-bold text-white/90",
                                  children: "AO VIVO",
                                }),
                              }),
                            ],
                          }),
                          h.jsx("div", {
                            className: "h-[2px]",
                            style: {
                              background:
                                "linear-gradient(90deg, #FE2B54, #FFC107, #4CAF50, #9C27B0, #FE2B54)",
                            },
                          }),
                        ],
                      }),
                      h.jsx("div", {
                        className: "h-[51px] flex items-center justify-center",
                        children: h.jsx("h1", {
                          className: "text-foreground text-base font-semibold",
                          children: "Resgate de Pontos",
                        }),
                      }),
                      h.jsx("div", {
                        ref: l,
                        children: h.jsx(Qk, {
                          balance: Xn,
                          onWithdraw: d,
                          disabled: r,
                        }),
                      }),
                      h.jsxs("div", {
                        className:
                          "bg-card rounded-xl p-5 mt-5 shadow-sm relative overflow-hidden",
                        children: [
                          h.jsx("div", {
                            className: "absolute top-0 left-0 w-full h-[2px]",
                            style: {
                              background:
                                "linear-gradient(90deg, #FE2B54, #FFC107, #4CAF50, #9C27B0)",
                            },
                          }),
                          h.jsx(Yk, { balance: Xn }),
                          h.jsx("div", {
                            className:
                              "w-full h-px border-b border-dashed border-border my-5",
                          }),
                          h.jsx(Wi, {
                            title: "Entre por 14 dias para ganhar",
                            highlight: "8.414 pontos",
                            subtitle: "• 12 de nov - 25 de nov",
                            showDivider: !1,
                          }),
                          h.jsx("div", {
                            className: "bg-muted rounded-md px-3 py-1.5 mt-3",
                            children: h.jsx("span", {
                              className:
                                "text-muted-foreground text-[11px] font-medium",
                              children:
                                "Você concluiu todos os dias de check-in.",
                            }),
                          }),
                          h.jsx(tC, {}),
                          h.jsx(Wi, {
                            title:
                              "Vê anúncios direcionados diariamente para ganhares até",
                            highlight: "2.730 pontos",
                            subtitle: "• 30/30 anúncios assistidos",
                          }),
                          h.jsx(Wi, {
                            title: "Assistir vídeos",
                            highlight: "500 pontos",
                          }),
                          h.jsx(nC, {
                            steps: [
                              { points: "50 pontos" },
                              { points: "100 pontos" },
                              { points: "150 pontos" },
                              { points: "225 pontos" },
                            ],
                            label: "Assista por 10 min",
                          }),
                          h.jsx(Wi, {
                            title: "Resgate suas recompensas e ganhe",
                            highlight: "640 pontos",
                            subtitle: "• 8/8 resgatados",
                          }),
                        ],
                      }),
                    ],
                  }),
                  h.jsx(DP, {
                    balance: Xn,
                    onWithdraw: d,
                    balanceCardRef: l,
                    onHeightChange: c,
                  }),
                  r && h.jsx(sC, { balance: Xn, onContinue: w }),
                ],
              });
  },
  HP = () => {
    const e = nv();
    return (
      _.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname,
        );
      }, [e.pathname]),
      h.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: h.jsxs("div", {
          className: "text-center",
          children: [
            h.jsx("h1", {
              className: "mb-4 text-4xl font-bold",
              children: "404",
            }),
            h.jsx("p", {
              className: "mb-4 text-xl text-muted-foreground",
              children: "Oops! Page not found",
            }),
            h.jsx("a", {
              href: "/",
              className: "text-primary underline hover:text-primary/90",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  qP = new ik(),
  KP = () =>
    h.jsx(lk, {
      client: qP,
      children: h.jsxs($S, {
        children: [
          h.jsx(w_, {}),
          h.jsx(Y_, {}),
          h.jsx(Gk, {}),
          h.jsx(Kk, {
            children: h.jsxs(Wk, {
              children: [
                h.jsx(Fc, { path: "/", element: h.jsx(WP, {}) }),
                h.jsx(Fc, { path: "*", element: h.jsx(HP, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
E0(document.getElementById("root")).render(h.jsx(KP, {}));
