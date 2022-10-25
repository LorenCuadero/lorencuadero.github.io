


var app = (function () {
          "use strict";
          function t() { }
          function n(t, n) {
                    for (const e in n) t[e] = n[e];
                    return t;
          }
          function e(t) {
                    return t();
          }
          function o() {
                    return Object.create(null);
          }
          function r(t) {
                    t.forEach(e);
          }
          function c(t) {
                    return "function" == typeof t;
          }
          function s(t, n) {
                    return t != t
                              ? n == n
                              : t !== n || (t && "object" == typeof t) || "function" == typeof t;
          }
          function l(n, e, o) {
                    n.$$.on_destroy.push(
                              (function (n, ...e) {
                                        if (null == n) return t;
                                        const o = n.subscribe(...e);
                                        return o.unsubscribe ? () => o.unsubscribe() : o;
                              })(e, o)
                    );
          }
          function i(t, n) {
                    t.appendChild(n);
          }
          function u(t, n, e) {
                    t.insertBefore(n, e || null);
          }
          function a(t) {
                    t.parentNode.removeChild(t);
          }
          function f(t) {
                    return document.createElement(t);
          }
          function d(t) {
                    return document.createTextNode(t);
          }
          function p() {
                    return d(" ");
          }
          function h(t, n, e, o) {
                    return t.addEventListener(n, e, o), () => t.removeEventListener(n, e, o);
          }
          function m(t) {
                    return function (n) {
                              return n.preventDefault(), t.call(this, n);
                    };
          }
          function g(t) {
                    return function (n) {
                              n.isTrusted && t.call(this, n);
                    };
          }
          function $(t, n, e) {
                    null == e
                              ? t.removeAttribute(n)
                              : t.getAttribute(n) !== e && t.setAttribute(n, e);
          }
          function b(t, n) {
                    (n = "" + n), t.wholeText !== n && (t.data = n);
          }
          function x(t, n) {
                    t.value = null == n ? "" : n;
          }
          function k(t, n, e) {
                    t.classList[e ? "add" : "remove"](n);
          }
          let w;
          function v(t) {
                    w = t;
          }
          function y() {
                    const t = (function () {
                              if (!w)
                                        throw new Error("Function called outside component initialization");
                              return w;
                    })();
                    return (n, e) => {
                              const o = t.$$.callbacks[n];
                              if (o) {
                                        const r = (function (t, n, e = !1) {
                                                  const o = document.createEvent("CustomEvent");
                                                  return o.initCustomEvent(t, e, !1, n), o;
                                        })(n, e);
                                        o.slice().forEach((n) => {
                                                  n.call(t, r);
                                        });
                              }
                    };
          }
          function _(t, n) {
                    const e = t.$$.callbacks[n.type];
                    e && e.slice().forEach((t) => t.call(this, n));
          }
          const E = [],
                    M = [],
                    C = [],
                    L = [],
                    T = Promise.resolve();
          let H = !1;
          function j(t) {
                    C.push(t);
          }
          let S = !1;
          const A = new Set();
          function B() {
                    if (!S) {
                              S = !0;
                              do {
                                        for (let t = 0; t < E.length; t += 1) {
                                                  const n = E[t];
                                                  v(n), N(n.$$);
                                        }
                                        for (v(null), E.length = 0; M.length;) M.pop()();
                                        for (let t = 0; t < C.length; t += 1) {
                                                  const n = C[t];
                                                  A.has(n) || (A.add(n), n());
                                        }
                                        C.length = 0;
                              } while (E.length);
                              for (; L.length;) L.pop()();
                              (H = !1), (S = !1), A.clear();
                    }
          }
          function N(t) {
                    if (null !== t.fragment) {
                              t.update(), r(t.before_update);
                              const n = t.dirty;
                              (t.dirty = [-1]),
                                        t.fragment && t.fragment.p(t.ctx, n),
                                        t.after_update.forEach(j);
                    }
          }
          const O = new Set();
          let z;
          function I(t, n) {
                    t && t.i && (O.delete(t), t.i(n));
          }
          function P(t, n, e, o) {
                    if (t && t.o) {
                              if (O.has(t)) return;
                              O.add(t),
                                        z.c.push(() => {
                                                  O.delete(t), o && (e && t.d(1), o());
                                        }),
                                        t.o(n);
                    }
          }
          function D(t, n, o, s) {
                    const { fragment: l, on_mount: i, on_destroy: u, after_update: a } = t.$$;
                    l && l.m(n, o),
                              s ||
                              j(() => {
                                        const n = i.map(e).filter(c);
                                        u ? u.push(...n) : r(n), (t.$$.on_mount = []);
                              }),
                              a.forEach(j);
          }
          function J(t, n) {
                    const e = t.$$;
                    null !== e.fragment &&
                              (r(e.on_destroy),
                                        e.fragment && e.fragment.d(n),
                                        (e.on_destroy = e.fragment = null),
                                        (e.ctx = []));
          }
          function R(t, n) {
                    -1 === t.$$.dirty[0] &&
                              (E.push(t), H || ((H = !0), T.then(B)), t.$$.dirty.fill(0)),
                              (t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
          }
          function Y(n, e, c, s, l, i, u, f = [-1]) {
                    const d = w;
                    v(n);
                    const p = (n.$$ = {
                              fragment: null,
                              ctx: null,
                              props: i,
                              update: t,
                              not_equal: l,
                              bound: o(),
                              on_mount: [],
                              on_destroy: [],
                              on_disconnect: [],
                              before_update: [],
                              after_update: [],
                              context: new Map(d ? d.$$.context : e.context || []),
                              callbacks: o(),
                              dirty: f,
                              skip_bound: !1,
                              root: e.target || d.$$.root,
                    });
                    u && u(p.root);
                    let h = !1;
                    if (
                              ((p.ctx = c
                                        ? c(n, e.props || {}, (t, e, ...o) => {
                                                  const r = o.length ? o[0] : e;
                                                  return (
                                                            p.ctx &&
                                                            l(p.ctx[t], (p.ctx[t] = r)) &&
                                                            (!p.skip_bound && p.bound[t] && p.bound[t](r), h && R(n, t)),
                                                            e
                                                  );
                                        })
                                        : []),
                                        p.update(),
                                        (h = !0),
                                        r(p.before_update),
                                        (p.fragment = !!s && s(p.ctx)),
                                        e.target)
                    ) {
                              if (e.hydrate) {
                                        const t = (function (t) {
                                                  return Array.from(t.childNodes);
                                        })(e.target);
                                        p.fragment && p.fragment.l(t), t.forEach(a);
                              } else p.fragment && p.fragment.c();
                              e.intro && I(n.$$.fragment),
                                        D(n, e.target, e.anchor, e.customElement),
                                        B();
                    }
                    v(d);
          }
          class q {
                    $destroy() {
                              J(this, 1), (this.$destroy = t);
                    }
                    $on(t, n) {
                              const e = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
                              return (
                                        e.push(n),
                                        () => {
                                                  const t = e.indexOf(n);
                                                  -1 !== t && e.splice(t, 1);
                                        }
                              );
                    }
                    $set(t) {
                              var n;
                              this.$$set &&
                                        ((n = t), 0 !== Object.keys(n).length) &&
                                        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
                    }
          }
          const F = [];
          const V = (function (n, e = t) {
                    let o;
                    const r = new Set();
                    function c(t) {
                              if (s(n, t) && ((n = t), o)) {
                                        const t = !F.length;
                                        for (const t of r) t[1](), F.push(t, n);
                                        if (t) {
                                                  for (let t = 0; t < F.length; t += 2) F[t][0](F[t + 1]);
                                                  F.length = 0;
                                        }
                              }
                    }
                    return {
                              set: c,
                              update: function (t) {
                                        c(t(n));
                              },
                              subscribe: function (s, l = t) {
                                        const i = [s, l];
                                        return (
                                                  r.add(i),
                                                  1 === r.size && (o = e(c) || t),
                                                  s(n),
                                                  () => {
                                                            r.delete(i), 0 === r.size && (o(), (o = null));
                                                  }
                                        );
                              },
                    };
          })(JSON.parse(localStorage.getItem("tasks")) || []);
          function G(n) {
                    let e, o, c, s, l, m, g, x, w;
                    return {
                              c() {
                                        (e = f("div")),
                                                  (o = f("span")),
                                                  (o.innerHTML =
                                                            '<svg xmlns="http://www.w3.org/2000/svg" class="button h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'),
                                                  (c = p()),
                                                  (s = f("span")),
                                                  (s.innerHTML =
                                                            '<svg xmlns="http://www.w3.org/2000/svg" class="button h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>'),
                                                  (l = p()),
                                                  (m = f("span")),
                                                  (g = d(n[0])),
                                                  $(o, "class", "button"),
                                                  $(s, "class", "button"),
                                                  $(m, "class", "w-max"),
                                                  k(m, "line-through", n[1]),
                                                  $(
                                                            e,
                                                            "class",
                                                            "flex items-center space-x-3 border-2 border-gray-500 rounded-xl py-2 pl-4 my-2 cursor-pointer"
                                                  ),
                                                  k(e, "border-yellow-500", n[1]);
                              },
                              m(t, r) {
                                        u(t, e, r),
                                                  i(e, o),
                                                  i(e, c),
                                                  i(e, s),
                                                  i(e, l),
                                                  i(e, m),
                                                  i(m, g),
                                                  x ||
                                                  ((w = [
                                                            h(o, "click", n[3]),
                                                            h(s, "click", n[4]),
                                                            h(e, "click", n[5]),
                                                  ]),
                                                            (x = !0));
                              },
                              p(t, [n]) {
                                        1 & n && b(g, t[0]),
                                                  2 & n && k(m, "line-through", t[1]),
                                                  2 & n && k(e, "border-yellow-500", t[1]);
                              },
                              i: t,
                              o: t,
                              d(t) {
                                        t && a(e), (x = !1), r(w);
                              },
                    };
          }
          function K(t, n, e) {
                    const o = y();
                    let { description: r } = n,
                              { done: c } = n;
                    return (
                              (t.$$set = (t) => {
                                        "description" in t && e(0, (r = t.description)),
                                                  "done" in t && e(1, (c = t.done));
                              }),
                              [r, c, o, () => o("toggle"), () => o("remove"), () => o("toggle")]
                    );
          }
          V.subscribe((t) => localStorage.setItem("tasks", JSON.stringify(t)));
          class Q extends q {
                    constructor(t) {
                              super(), Y(this, t, K, G, s, { description: 0, done: 1 });
                    }
          }
          function U(t, n, e) {
                    const o = t.slice();
                    return (o[14] = n[e]), (o[15] = n), (o[16] = e), o;
          }
          function W(n) {
                    let e;
                    return {
                              c() {
                                        (e = f("p")),
                                                  (e.innerHTML =
                                                            "Don&#39;t know what to work on next?<br/>\n        Let me choose it for you...         "),
                                                  $(e, "class", "italic");
                                                  
                                                  let url = "https://jsonplaceholder.typicode.com/todos";
                                                  let randomNumber = Math.floor(Math.random()*100);
                                                  url = url + randomNumber;
                                                  $.get(url, (data) => {
                                                      $("p").text(data.title);
                                                  })

                              },
                              m(t, n) {
                                        u(t, e, n);
                              },
                              p: t,
                              d(t) {
                                        t && a(e);
                              },
                    };
          }
          function X(t) {
                    let n,
                              e,
                              o,
                              r,
                              c = t[0].description + "";
                    return {
                              c() {
                                        (n = f("p")),
                                                  (n.textContent = "Your next task is..."),
                                                  (e = p()),
                                                  (o = f("p")),
                                                  (r = d(c)),
                                                  $(n, "class", "italic");
                              },
                              m(t, c) {
                                        u(t, n, c), u(t, e, c), u(t, o, c), i(o, r);
                              },
                              p(t, n) {
                                        1 & n && c !== (c = t[0].description + "") && b(r, c);
                              },
                              d(t) {
                                        t && a(n), t && a(e), t && a(o);
                              },
                    };
          }
          function Z(t) {
                    let n, e, o, r;
                    return {
                              c() {
                                        (n = f("p")),
                                                  (n.textContent = "Hmm..."),
                                                  (e = p()),
                                                  (o = f("p")),
                                                  (r = d(t[2])),
                                                  $(n, "class", "italic"),
                                                  $(o, "class", "italic");
                              },
                              m(t, c) {
                                        u(t, n, c), u(t, e, c), u(t, o, c), i(o, r);
                              },
                              p(t, n) {
                                        4 & n && b(r, t[2]);
                              },
                              d(t) {
                                        t && a(n), t && a(e), t && a(o);
                              },
                    };
          }
          function tt(t) {
                    let e, o;
                    const r = [t[14]];
                    let c = {};
                    for (let t = 0; t < r.length; t += 1) c = n(c, r[t]);
                    return (
                              (e = new Q({ props: c })),
                              e.$on("toggle", function () {
                                        return t[12](t[14], t[15], t[16]);
                              }),
                              e.$on("remove", function () {
                                        return t[13](t[16]);
                              }),
                              {
                                        c() {
                                                  var t;
                                                  (t = e.$$.fragment) && t.c();
                                        },
                                        m(t, n) {
                                                  D(e, t, n), (o = !0);
                                        },
                                        p(n, o) {
                                                  t = n;
                                                  const c =
                                                            8 & o
                                                                      ? (function (t, n) {
                                                                                const e = {},
                                                                                          o = {},
                                                                                          r = { $$scope: 1 };
                                                                                let c = t.length;
                                                                                for (; c--;) {
                                                                                          const s = t[c],
                                                                                                    l = n[c];
                                                                                          if (l) {
                                                                                                    for (const t in s) t in l || (o[t] = 1);
                                                                                                    for (const t in l) r[t] || ((e[t] = l[t]), (r[t] = 1));
                                                                                                    t[c] = l;
                                                                                          } else for (const t in s) r[t] = 1;
                                                                                }
                                                                                for (const t in o) t in e || (e[t] = void 0);
                                                                                return e;
                                                                      })(r, [
                                                                                ((s = t[14]), "object" == typeof s && null !== s ? s : {}),
                                                                      ])
                                                                      : {};
                                                  var s;
                                                  e.$set(c);
                                        },
                                        i(t) {
                                                  o || (I(e.$$.fragment, t), (o = !0));
                                        },
                                        o(t) {
                                                  P(e.$$.fragment, t), (o = !1);
                                        },
                                        d(t) {
                                                  J(e, t);
                                        },
                              }
                    );
          }
          function nt(t) {
                    let n, e, o, c, s, l, d, b, k, w, v, y, _, E, M, C, L, T, H, j;
                    function S(t, n) {
                              return t[2] ? Z : t[0] ? X : W;
                    }
                    let A = S(t),
                              B = A(t),
                              N = t[3],
                              O = [];
                    for (let n = 0; n < N.length; n += 1) O[n] = tt(U(t, N, n));
                    const D = (t) =>
                              P(O[t], 1, 1, () => {
                                        O[t] = null;
                              });
                    return {
                              c() {
                                        (n = f("main")),
                                                  (e = f("h1")),
                                                  (e.innerHTML = "Random<br/>\n    Task Picker"),
                                                  (o = p()),
                                                  (c = f("span")),
                                                  B.c(),
                                                  (s = p()),
                                                  (l = f("div")),
                                                  (d = f("span")),
                                                  (b = f("input")),
                                                  (k = p()),
                                                  (w = f("span")),
                                                  (w.innerHTML =
                                                            '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'),
                                                  (v = p()),
                                                  (y = f("span")),
                                                  (_ = f("button")),
                                                  (_.textContent = "Pick a task!"),
                                                  (E = p()),
                                                  (M = f("button")),
                                                  (M.textContent = "Reset"),
                                                  (C = p()),
                                                  (L = f("span"));
                                        for (let t = 0; t < O.length; t += 1) O[t].c();
                                        $(e, "class", "font-mono text-4xl text-center tracking-wider "),
                                                  $(c, "class", "block my-10 text-center items-center"),
                                                  $(b, "class", "rounded-full px-4 p-1 border-2 xl:w-80 text-black"),
                                                  $(b, "type", "text"),
                                                  $(b, "placeholder", "Add a task"),
                                                  $(w, "class", "button"),
                                                  $(d, "class", "flex flex-row items-center p-2"),
                                                  $(
                                                            _,
                                                            "class",
                                                            "button rounded-full py-2 px-3 uppercase text-xs font-bold tracking-wider border-2"
                                                  ),
                                                  $(
                                                            M,
                                                            "class",
                                                            "button rounded-full py-2 px-3 uppercase text-xs font-bold tracking-wider border-2"
                                                  ),
                                                  $(y, "class", "p-2"),
                                                  $(l, "class", "flex flex-col items-center"),
                                                  $(L, "class", "p-2 flex flex-col"),
                                                  $(n, "class", "max-w-md m-auto mt-10 p-10 rounded-xl text-gray-50 ");
                              },
                              m(r, a) {
                                        u(r, n, a),
                                                  i(n, e),
                                                  i(n, o),
                                                  i(n, c),
                                                  B.m(c, null),
                                                  i(n, s),
                                                  i(n, l),
                                                  i(l, d),
                                                  i(d, b),
                                                  x(b, t[1]),
                                                  i(d, k),
                                                  i(d, w),
                                                  i(l, v),
                                                  i(l, y),
                                                  i(y, _),
                                                  i(y, E),
                                                  i(y, M),
                                                  i(n, C),
                                                  i(n, L);
                                        for (let t = 0; t < O.length; t += 1) O[t].m(L, null);
                                        (T = !0),
                                                  H ||
                                                  ((j = [
                                                            h(b, "input", t[11]),
                                                            h(b, "keypress", t[8]),
                                                            h(w, "click", t[4]),
                                                            h(_, "keydown", g(m(t[10]))),
                                                            h(_, "click", t[7]),
                                                            h(M, "keydown", g(m(t[9]))),
                                                            h(M, "click", t[6]),
                                                  ]),
                                                            (H = !0));
                              },
                              p(t, [n]) {
                                        if (
                                                  (A === (A = S(t)) && B
                                                            ? B.p(t, n)
                                                            : (B.d(1), (B = A(t)), B && (B.c(), B.m(c, null))),
                                                            2 & n && b.value !== t[1] && x(b, t[1]),
                                                            40 & n)
                                        ) {
                                                  let e;
                                                  for (N = t[3], e = 0; e < N.length; e += 1) {
                                                            const o = U(t, N, e);
                                                            O[e]
                                                                      ? (O[e].p(o, n), I(O[e], 1))
                                                                      : ((O[e] = tt(o)), O[e].c(), I(O[e], 1), O[e].m(L, null));
                                                  }
                                                  for (z = { r: 0, c: [], p: z }, e = N.length; e < O.length; e += 1)
                                                            D(e);
                                                  z.r || r(z.c), (z = z.p);
                                        }
                              },
                              i(t) {
                                        if (!T) {
                                                  for (let t = 0; t < N.length; t += 1) I(O[t]);
                                                  T = !0;
                                        }
                              },
                              o(t) {
                                        O = O.filter(Boolean);
                                        for (let t = 0; t < O.length; t += 1) P(O[t]);
                                        T = !1;
                              },
                              d(t) {
                                        t && a(n),
                                                  B.d(),
                                                  (function (t, n) {
                                                            for (let e = 0; e < t.length; e += 1) t[e] && t[e].d(n);
                                                  })(O, t),
                                                  (H = !1),
                                                  r(j);
                              },
                    };
          }
          function et(t, n, e) {
                    let o, r, c, s;
                    function i() {
                              if (c) {
                                        let t = { description: c, done: !1 };
                                        e(1, (c = "")), e(2, (s = "")), V.update((n) => [...n, t]);
                              } else e(2, (s = "Empty tasks are too easy, c'mon!"));
                    }
                    function u(t) {
                              let n = o;
                              n.splice(t, 1), V.set(n);
                    }
                    l(t, V, (t) => e(3, (o = t)));
                    return [
                              r,
                              c,
                              s,
                              o,
                              i,
                              u,
                              function () {
                                        e(0, (r = null)), e(2, (s = "")), V.set([]);
                              },
                              function () {
                                        let t = o;
                                        if (!t.length)
                                                  return void e(2, (s = "You gotta add a few tasks first, you know?"));
                                        let n = [];
                                        for (let e of t) !1 === e.done && (n = [...n, e]);
                                        n.length
                                                  ? (!(function (t) {
                                                            for (let n = t.length - 1; n > 0; n--) {
                                                                      let e = Math.floor(Math.random() * (n + 1));
                                                                      [t[n], t[e]] = [t[e], t[n]];
                                                            }
                                                  })(n),
                                                            e(0, (r = n[0])),
                                                            (t.find(
                                                                      (t) => t.description === r.description && !1 === t.done
                                                            ).done = !0),
                                                            V.set(t))
                                                  : e(2, (s = "It seems like you completed 'em all!"));
                              },
                              function (t) {
                                        "Enter" === t.key && i();
                              },
                              function (n) {
                                        _.call(this, t, n);
                              },
                              function (n) {
                                        _.call(this, t, n);
                              },
                              function () {
                                        (c = this.value), e(1, c);
                              },
                              (t, n, e) => {
                                        return (r = V), (c = n[e].done = !t.done), (s = o), r.set(s), c;
                                        var r, c, s;
                              },
                              (t) => u(t),
                    ];
          }
          return new (class extends q {
                    constructor(t) {
                              super(), Y(this, t, et, nt, s, {});
                    }
          })({ target: document.body });
})();

