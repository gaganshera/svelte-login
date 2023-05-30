var Pe = Object.defineProperty;
var qe = (t, e, n) => e in t ? Pe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Q = (t, e, n) => (qe(t, typeof e != "symbol" ? e + "" : e, n), n);
function R() {
}
function b(t, e, n, o, l) {
  t.__svelte_meta = {
    loc: { file: e, line: n, column: o, char: l }
  };
}
function ue(t) {
  return t();
}
function ve() {
  return /* @__PURE__ */ Object.create(null);
}
function L(t) {
  t.forEach(ue);
}
function le(t) {
  return typeof t == "function";
}
function fe(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Te(t) {
  return Object.keys(t).length === 0;
}
const Fe = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
"WeakMap" in Fe;
function He(t, e) {
  t.appendChild(e);
}
function We(t, e, n) {
  t.insertBefore(e, n || null);
}
function Me(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Re(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function v(t) {
  return document.createElement(t);
}
function W(t) {
  return document.createTextNode(t);
}
function x() {
  return W(" ");
}
function Ve(t, e, n, o) {
  return t.addEventListener(e, n, o), () => t.removeEventListener(e, n, o);
}
function we(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function Ye(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function ze(t) {
  return Array.from(t.childNodes);
}
function ke(t, e) {
  t.value = e ?? "";
}
function Ge(t, e, n, o) {
  n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, o ? "important" : "");
}
function U(t, e, n) {
  for (let o = 0; o < t.options.length; o += 1) {
    const l = t.options[o];
    if (l.__value === e) {
      l.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function Ee(t) {
  const e = t.querySelector(":checked");
  return e && e.__value;
}
function Je(t, e, { bubbles: n = !1, cancelable: o = !1 } = {}) {
  const l = document.createEvent("CustomEvent");
  return l.initCustomEvent(t, n, o, e), l;
}
function ae(t) {
  const e = {};
  for (const n of t)
    e[n.name] = n.value;
  return e;
}
let de;
function G(t) {
  de = t;
}
const q = [], Se = [];
let H = [];
const Ce = [], Ke = /* @__PURE__ */ Promise.resolve();
let re = !1;
function Qe() {
  re || (re = !0, Ke.then(V));
}
function J(t) {
  H.push(t);
}
const ie = /* @__PURE__ */ new Set();
let P = 0;
function V() {
  if (P !== 0)
    return;
  const t = de;
  do {
    try {
      for (; P < q.length; ) {
        const e = q[P];
        P++, G(e), Ue(e.$$);
      }
    } catch (e) {
      throw q.length = 0, P = 0, e;
    }
    for (G(null), q.length = 0, P = 0; Se.length; )
      Se.pop()();
    for (let e = 0; e < H.length; e += 1) {
      const n = H[e];
      ie.has(n) || (ie.add(n), n());
    }
    H.length = 0;
  } while (q.length);
  for (; Ce.length; )
    Ce.pop()();
  re = !1, ie.clear(), G(t);
}
function Ue(t) {
  if (t.fragment !== null) {
    t.update(), L(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(J);
  }
}
function Xe(t) {
  const e = [], n = [];
  H.forEach((o) => t.indexOf(o) === -1 ? e.push(o) : n.push(o)), n.forEach((o) => o()), H = e;
}
const X = /* @__PURE__ */ new Set();
let A;
function $e() {
  A = {
    r: 0,
    c: [],
    p: A
    // parent group
  };
}
function De() {
  A.r || L(A.c), A = A.p;
}
function M(t, e) {
  t && t.i && (X.delete(t), t.i(e));
}
function B(t, e, n, o) {
  if (t && t.o) {
    if (X.has(t))
      return;
    X.add(t), A.c.push(() => {
      X.delete(t), o && (n && t.d(1), o());
    }), t.o(e);
  } else
    o && o();
}
const Ze = [
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
];
[...Ze];
function he(t) {
  t && t.c();
}
function ee(t, e, n, o) {
  const { fragment: l, after_update: s } = t.$$;
  l && l.m(e, n), o || J(() => {
    const u = t.$$.on_mount.map(ue).filter(le);
    t.$$.on_destroy ? t.$$.on_destroy.push(...u) : L(u), t.$$.on_mount = [];
  }), s.forEach(J);
}
function te(t, e) {
  const n = t.$$;
  n.fragment !== null && (Xe(n.after_update), L(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function et(t, e) {
  t.$$.dirty[0] === -1 && (q.push(t), Qe(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function _e(t, e, n, o, l, s, u, i = [-1]) {
  const a = de;
  G(t);
  const r = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: R,
    not_equal: l,
    bound: ve(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: ve(),
    dirty: i,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  u && u(r.root);
  let c = !1;
  if (r.ctx = n ? n(t, e.props || {}, (d, h, ...m) => {
    const g = m.length ? m[0] : h;
    return r.ctx && l(r.ctx[d], r.ctx[d] = g) && (!r.skip_bound && r.bound[d] && r.bound[d](g), c && et(t, d)), h;
  }) : [], r.update(), c = !0, L(r.before_update), r.fragment = o ? o(r.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = ze(e.target);
      r.fragment && r.fragment.l(d), d.forEach(Me);
    } else
      r.fragment && r.fragment.c();
    e.intro && M(t.$$.fragment), ee(t, e.target, e.anchor, e.customElement), V();
  }
  G(a);
}
let ne;
typeof HTMLElement == "function" && (ne = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(ue).filter(le);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, n) {
    this[t] = n;
  }
  disconnectedCallback() {
    L(this.$$.on_disconnect);
  }
  $destroy() {
    te(this, 1), this.$destroy = R;
  }
  $on(t, e) {
    if (!le(e))
      return R;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const o = n.indexOf(e);
      o !== -1 && n.splice(o, 1);
    };
  }
  $set(t) {
    this.$$set && !Te(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
function y(t, e) {
  document.dispatchEvent(Je(t, Object.assign({ version: "3.59.1" }, e), { bubbles: !0 }));
}
function p(t, e) {
  y("SvelteDOMInsert", { target: t, node: e }), He(t, e);
}
function j(t, e, n) {
  y("SvelteDOMInsert", { target: t, node: e, anchor: n }), We(t, e, n);
}
function $(t) {
  y("SvelteDOMRemove", { node: t }), Me(t);
}
function z(t, e, n, o, l, s, u) {
  const i = o === !0 ? ["capture"] : o ? Array.from(Object.keys(o)) : [];
  l && i.push("preventDefault"), s && i.push("stopPropagation"), u && i.push("stopImmediatePropagation"), y("SvelteDOMAddEventListener", { node: t, event: e, handler: n, modifiers: i });
  const a = Ve(t, e, n, o);
  return () => {
    y("SvelteDOMRemoveEventListener", { node: t, event: e, handler: n, modifiers: i }), a();
  };
}
function T(t, e, n) {
  Ye(t, e, n), n == null ? y("SvelteDOMRemoveAttribute", { node: t, attribute: e }) : y("SvelteDOMSetAttribute", { node: t, attribute: e, value: n });
}
function tt(t, e, n) {
  t[e] = n, y("SvelteDOMSetProperty", { node: t, property: e, value: n });
}
function me(t, e) {
  e = "" + e, t.data !== e && (y("SvelteDOMSetData", { node: t, data: e }), t.data = e);
}
function Z(t) {
  if (typeof t != "string" && !(t && typeof t == "object" && "length" in t)) {
    let e = "{#each} only iterates over array-like objects.";
    throw typeof Symbol == "function" && t && Symbol.iterator in t && (e += " You can use a spread to convert this iterable into an array."), new Error(e);
  }
}
function pe(t, e, n) {
  for (const o of Object.keys(e))
    ~n.indexOf(o) || console.warn(`<${t}> received an unexpected slot "${o}".`);
}
const nt = "src/lib/File.svelte";
function Ne(t) {
  let e, n, o;
  const l = {
    c: function() {
      e = v("span"), n = W("File: "), o = W(
        /*name*/
        t[0]
      ), this.c = R, T(e, "style", ""), b(e, nt, 4, 0, 79);
    },
    l: function(u) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function(u, i) {
      j(u, e, i), p(e, n), p(e, o);
    },
    p: function(u, [i]) {
      i & /*name*/
      1 && me(
        o,
        /*name*/
        u[0]
      );
    },
    i: R,
    o: R,
    d: function(u) {
      u && $(e);
    }
  };
  return y("SvelteRegisterBlock", {
    block: l,
    id: Ne.name,
    type: "component",
    source: "",
    ctx: t
  }), l;
}
function ot(t, e, n) {
  let { $$slots: o = {}, $$scope: l } = e;
  pe("my-file", o, []);
  let { name: s } = e;
  t.$$.on_mount.push(function() {
    s === void 0 && !("name" in e || t.$$.bound[t.$$.props.name]) && console.warn("<my-file> was created without expected prop 'name'");
  });
  const u = ["name"];
  return Object.keys(e).forEach((i) => {
    !~u.indexOf(i) && i.slice(0, 2) !== "$$" && i !== "slot" && console.warn(`<my-file> was created with unknown prop '${i}'`);
  }), t.$$set = (i) => {
    "name" in i && n(0, s = i.name);
  }, t.$capture_state = () => ({ name: s }), t.$inject_state = (i) => {
    "name" in i && n(0, s = i.name);
  }, e && "$$inject" in e && t.$inject_state(e.$$inject), [s];
}
class ge extends ne {
  constructor(e) {
    super(), _e(
      this,
      {
        target: this.shadowRoot,
        props: ae(this.attributes),
        customElement: !0
      },
      ot,
      Ne,
      fe,
      { name: 0 },
      null
    ), e && (e.target && j(e.target, this, e.anchor), e.props && (this.$set(e.props), V()));
  }
  static get observedAttributes() {
    return ["name"];
  }
  get name() {
    return this.$$.ctx[0];
  }
  set name(e) {
    this.$$set({ name: e }), V();
  }
}
customElements.define("my-file", ge);
const ye = "src/lib/FolderListing.svelte";
function je(t, e, n) {
  const o = t.slice();
  return o[1] = e[n], o;
}
function xe(t) {
  let e, n;
  e = new ge({
    props: { name: (
      /*file_or_folder*/
      t[1].name
    ) },
    $$inline: !0
  });
  const o = {
    c: function() {
      he(e.$$.fragment);
    },
    m: function(s, u) {
      ee(e, s, u), n = !0;
    },
    p: function(s, u) {
      const i = {};
      u & /*directory*/
      1 && (i.name = /*file_or_folder*/
      s[1].name), e.$set(i);
    },
    i: function(s) {
      n || (M(e.$$.fragment, s), n = !0);
    },
    o: function(s) {
      B(e.$$.fragment, s), n = !1;
    },
    d: function(s) {
      te(e, s);
    }
  };
  return y("SvelteRegisterBlock", {
    block: o,
    id: xe.name,
    type: "else",
    source: "(12:6) {:else}",
    ctx: t
  }), o;
}
function Ae(t) {
  let e, n, o = (
    /*file_or_folder*/
    t[1].name + ""
  ), l, s, u, i;
  u = new oe({
    props: {
      directory: (
        /*file_or_folder*/
        t[1].children
      )
    },
    $$inline: !0
  });
  const a = {
    c: function() {
      e = v("span"), n = W("Folder: "), l = W(o), s = x(), he(u.$$.fragment), T(e, "style", ""), b(e, ye, 9, 8, 255);
    },
    m: function(c, d) {
      j(c, e, d), p(e, n), p(e, l), j(c, s, d), ee(u, c, d), i = !0;
    },
    p: function(c, d) {
      (!i || d & /*directory*/
      1) && o !== (o = /*file_or_folder*/
      c[1].name + "") && me(l, o);
      const h = {};
      d & /*directory*/
      1 && (h.directory = /*file_or_folder*/
      c[1].children), u.$set(h);
    },
    i: function(c) {
      i || (M(u.$$.fragment, c), i = !0);
    },
    o: function(c) {
      B(u.$$.fragment, c), i = !1;
    },
    d: function(c) {
      c && $(e), c && $(s), te(u, c);
    }
  };
  return y("SvelteRegisterBlock", {
    block: a,
    id: Ae.name,
    type: "if",
    source: "(9:6) {#if file_or_folder.children}",
    ctx: t
  }), a;
}
function ce(t) {
  let e, n, o, l, s;
  const u = [Ae, xe], i = [];
  function a(c, d) {
    return (
      /*file_or_folder*/
      c[1].children ? 0 : 1
    );
  }
  n = a(t), o = i[n] = u[n](t);
  const r = {
    c: function() {
      e = v("li"), o.c(), l = x(), b(e, ye, 7, 4, 206);
    },
    m: function(d, h) {
      j(d, e, h), i[n].m(e, null), p(e, l), s = !0;
    },
    p: function(d, h) {
      let m = n;
      n = a(d), n === m ? i[n].p(d, h) : ($e(), B(i[m], 1, 1, () => {
        i[m] = null;
      }), De(), o = i[n], o ? o.p(d, h) : (o = i[n] = u[n](d), o.c()), M(o, 1), o.m(e, l));
    },
    i: function(d) {
      s || (M(o), s = !0);
    },
    o: function(d) {
      B(o), s = !1;
    },
    d: function(d) {
      d && $(e), i[n].d();
    }
  };
  return y("SvelteRegisterBlock", {
    block: r,
    id: ce.name,
    type: "each",
    source: "(7:2) {#each directory as file_or_folder}",
    ctx: t
  }), r;
}
function Be(t) {
  let e, n, o = (
    /*directory*/
    t[0]
  );
  Z(o);
  let l = [];
  for (let i = 0; i < o.length; i += 1)
    l[i] = ce(je(t, o, i));
  const s = (i) => B(l[i], 1, 1, () => {
    l[i] = null;
  }), u = {
    c: function() {
      e = v("ul");
      for (let a = 0; a < l.length; a += 1)
        l[a].c();
      this.c = R, Ge(e, "text-align", "left"), b(e, ye, 5, 0, 133);
    },
    l: function(a) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function(a, r) {
      j(a, e, r);
      for (let c = 0; c < l.length; c += 1)
        l[c] && l[c].m(e, null);
      n = !0;
    },
    p: function(a, [r]) {
      if (r & /*directory*/
      1) {
        o = /*directory*/
        a[0], Z(o);
        let c;
        for (c = 0; c < o.length; c += 1) {
          const d = je(a, o, c);
          l[c] ? (l[c].p(d, r), M(l[c], 1)) : (l[c] = ce(d), l[c].c(), M(l[c], 1), l[c].m(e, null));
        }
        for ($e(), c = o.length; c < l.length; c += 1)
          s(c);
        De();
      }
    },
    i: function(a) {
      if (!n) {
        for (let r = 0; r < o.length; r += 1)
          M(l[r]);
        n = !0;
      }
    },
    o: function(a) {
      l = l.filter(Boolean);
      for (let r = 0; r < l.length; r += 1)
        B(l[r]);
      n = !1;
    },
    d: function(a) {
      a && $(e), Re(l, a);
    }
  };
  return y("SvelteRegisterBlock", {
    block: u,
    id: Be.name,
    type: "component",
    source: "",
    ctx: t
  }), u;
}
function it(t, e, n) {
  let { $$slots: o = {}, $$scope: l } = e;
  pe("my-folder-listing", o, []);
  let { directory: s = [] } = e;
  const u = ["directory"];
  return Object.keys(e).forEach((i) => {
    !~u.indexOf(i) && i.slice(0, 2) !== "$$" && i !== "slot" && console.warn(`<my-folder-listing> was created with unknown prop '${i}'`);
  }), t.$$set = (i) => {
    "directory" in i && n(0, s = i.directory);
  }, t.$capture_state = () => ({ File: ge, directory: s }), t.$inject_state = (i) => {
    "directory" in i && n(0, s = i.directory);
  }, e && "$$inject" in e && t.$inject_state(e.$$inject), [s];
}
class oe extends ne {
  constructor(e) {
    super();
    const n = document.createElement("style");
    n.textContent = "ul{text-align:right}", this.shadowRoot.appendChild(n), _e(
      this,
      {
        target: this.shadowRoot,
        props: ae(this.attributes),
        customElement: !0
      },
      it,
      Be,
      fe,
      { directory: 0 },
      null
    ), e && (e.target && j(e.target, this, e.anchor), e.props && (this.$set(e.props), V()));
  }
  static get observedAttributes() {
    return ["directory"];
  }
  get directory() {
    return this.$$.ctx[0];
  }
  set directory(e) {
    this.$$set({ directory: e }), V();
  }
}
customElements.define("my-folder-listing", oe);
const { console: lt } = Fe, C = "src/lib/SelectionForm.svelte";
function Oe(t, e, n) {
  const o = t.slice();
  return o[15] = e[n], o;
}
function se(t) {
  let e, n = (
    /*folder_name*/
    t[15] + ""
  ), o, l;
  const s = {
    c: function() {
      e = v("option"), o = W(n), e.__value = l = /*folder_name*/
      t[15], e.value = e.__value, b(e, C, 91, 6, 2484);
    },
    m: function(i, a) {
      j(i, e, a), p(e, o);
    },
    p: function(i, a) {
      a & /*allFoldersNames*/
      4 && n !== (n = /*folder_name*/
      i[15] + "") && me(o, n), a & /*allFoldersNames*/
      4 && l !== (l = /*folder_name*/
      i[15]) && (tt(e, "__value", l), e.value = e.__value);
    },
    d: function(i) {
      i && $(e);
    }
  };
  return y("SvelteRegisterBlock", {
    block: s,
    id: se.name,
    type: "each",
    source: "(91:4) {#each allFoldersNames as folder_name}",
    ctx: t
  }), s;
}
function Le(t) {
  let e, n, o, l, s, u, i, a, r, c, d, h, m, g, I, O, D, Y, K, F = (
    /*allFoldersNames*/
    t[2]
  );
  Z(F);
  let f = [];
  for (let k = 0; k < F.length; k += 1)
    f[k] = se(Oe(t, F, k));
  O = new oe({
    props: { directory: (
      /*directory*/
      t[1]
    ) },
    $$inline: !0
  });
  const w = {
    c: function() {
      e = v("form"), n = v("input"), o = x(), l = v("select"), s = v("option"), s.textContent = "Select File or Folder", u = v("option"), u.textContent = "File", i = v("option"), i.textContent = "Folder", a = x(), r = v("select"), c = v("option"), c.textContent = "Folder name (Empty = root)";
      for (let _ = 0; _ < f.length; _ += 1)
        f[_].c();
      d = x(), h = v("button"), h.textContent = "Save", m = x(), g = v("button"), g.textContent = "Cancel", I = x(), he(O.$$.fragment), this.c = R, n.required = !0, T(n, "placeholder", "Name"), b(n, C, 80, 2, 2053), s.__value = "", s.value = s.__value, b(s, C, 83, 4, 2170), u.__value = "file", u.value = u.__value, b(u, C, 84, 4, 2222), i.__value = "folder", i.value = i.__value, b(i, C, 85, 4, 2261), l.required = !0, /*folders_or_files*/
      t[0] === void 0 && J(() => (
        /*select0_change_handler*/
        t[9].call(l)
      )), b(l, C, 82, 2, 2118), c.__value = "", c.value = c.__value, b(c, C, 89, 4, 2382), T(
        r,
        "class",
        /*show_folder*/
        t[5]
      ), r.required = !0, /*save_folder*/
      t[4] === void 0 && J(() => (
        /*select1_change_handler*/
        t[10].call(r)
      )), b(r, C, 88, 2, 2315), T(h, "type", "submit"), b(h, C, 95, 2, 2562), b(g, C, 99, 2, 2651), b(e, C, 79, 0, 2044);
    },
    l: function(_) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function(_, S) {
      j(_, e, S), p(e, n), ke(
        n,
        /*input_name*/
        t[3]
      ), p(e, o), p(e, l), p(l, s), p(l, u), p(l, i), U(
        l,
        /*folders_or_files*/
        t[0],
        !0
      ), p(e, a), p(e, r), p(r, c);
      for (let N = 0; N < f.length; N += 1)
        f[N] && f[N].m(r, null);
      U(
        r,
        /*save_folder*/
        t[4],
        !0
      ), p(e, d), p(e, h), p(e, m), p(e, g), j(_, I, S), ee(O, _, S), D = !0, Y || (K = [
        z(
          n,
          "input",
          /*input_input_handler*/
          t[8]
        ),
        z(
          l,
          "change",
          /*select0_change_handler*/
          t[9]
        ),
        z(
          r,
          "change",
          /*select1_change_handler*/
          t[10]
        ),
        z(h, "click", we(
          /*handleSaveClick*/
          t[6]
        ), !1, !0, !1, !1),
        z(g, "click", we(Ie), !1, !0, !1, !1)
      ], Y = !0);
    },
    p: function(_, [S]) {
      if (S & /*input_name*/
      8 && n.value !== /*input_name*/
      _[3] && ke(
        n,
        /*input_name*/
        _[3]
      ), S & /*folders_or_files*/
      1 && U(
        l,
        /*folders_or_files*/
        _[0]
      ), S & /*allFoldersNames*/
      4) {
        F = /*allFoldersNames*/
        _[2], Z(F);
        let E;
        for (E = 0; E < F.length; E += 1) {
          const be = Oe(_, F, E);
          f[E] ? f[E].p(be, S) : (f[E] = se(be), f[E].c(), f[E].m(r, null));
        }
        for (; E < f.length; E += 1)
          f[E].d(1);
        f.length = F.length;
      }
      (!D || S & /*show_folder*/
      32) && T(
        r,
        "class",
        /*show_folder*/
        _[5]
      ), S & /*save_folder, allFoldersNames*/
      20 && U(
        r,
        /*save_folder*/
        _[4]
      );
      const N = {};
      S & /*directory*/
      2 && (N.directory = /*directory*/
      _[1]), O.$set(N);
    },
    i: function(_) {
      D || (M(O.$$.fragment, _), D = !0);
    },
    o: function(_) {
      B(O.$$.fragment, _), D = !1;
    },
    d: function(_) {
      _ && $(e), Re(f, _), _ && $(I), te(O, _), Y = !1, L(K);
    }
  };
  return y("SvelteRegisterBlock", {
    block: w,
    id: Le.name,
    type: "component",
    source: "",
    ctx: t
  }), w;
}
function Ie() {
}
function rt(t, e, n) {
  let { $$slots: o = {}, $$scope: l } = e;
  pe("my-selection-form", o, []);
  class s {
    constructor() {
      Q(this, "name");
    }
  }
  class u {
    constructor() {
      Q(this, "name");
      Q(this, "children");
    }
  }
  var i = /* @__PURE__ */ ((f) => (f.file = "file", f.folder = "folder", f))(i || {});
  let a = "", r = "", c = "", d = "hide", h = [], m = [], g = [];
  function I(f) {
    console.log(f, r), f !== "" ? n(5, d = "show") : n(5, d = "hide");
  }
  function O() {
    if (!r || !a) {
      alert("Input missing");
      return;
    }
    let f;
    if (a === "file") {
      if (g.includes(r)) {
        alert("Cannot have duplicate file name");
        return;
      }
      let w = new s();
      w.name = r, f = w, n(7, g[g.length] = w.name, g);
    } else {
      if (m.includes(r)) {
        alert("Cannot have duplicate folder name");
        return;
      }
      let w = new u();
      w.name = r, w.children = [], f = w;
    }
    if (c) {
      const w = h.findIndex((k) => k instanceof u && k.name === c);
      w === -1 ? alert("Parent folder not found") : n(1, h[w].children[h[w].children.length] = f, h);
    } else
      n(1, h[h.length] = f, h), f instanceof u && n(2, m[m.length] = f.name, m);
  }
  const D = [];
  Object.keys(e).forEach((f) => {
    !~D.indexOf(f) && f.slice(0, 2) !== "$$" && f !== "slot" && lt.warn(`<my-selection-form> was created with unknown prop '${f}'`);
  });
  function Y() {
    r = this.value, n(3, r);
  }
  function K() {
    a = Ee(this), n(0, a);
  }
  function F() {
    c = Ee(this), n(4, c), n(2, m);
  }
  return t.$capture_state = () => ({
    FolderListing: oe,
    File: s,
    Folder: u,
    files_folders_enum: i,
    folders_or_files: a,
    input_name: r,
    save_folder: c,
    show_folder: d,
    directory: h,
    allFoldersNames: m,
    allFilesNames: g,
    handleSelectChange: I,
    handleSaveClick: O,
    handleCancelClick: Ie
  }), t.$inject_state = (f) => {
    "files_folders_enum" in f && (i = f.files_folders_enum), "folders_or_files" in f && n(0, a = f.folders_or_files), "input_name" in f && n(3, r = f.input_name), "save_folder" in f && n(4, c = f.save_folder), "show_folder" in f && n(5, d = f.show_folder), "directory" in f && n(1, h = f.directory), "allFoldersNames" in f && n(2, m = f.allFoldersNames), "allFilesNames" in f && n(7, g = f.allFilesNames);
  }, e && "$$inject" in e && t.$inject_state(e.$$inject), t.$$.update = () => {
    t.$$.dirty & /*folders_or_files*/
    1 && a && I(a), t.$$.dirty & /*directory, allFilesNames, allFoldersNames*/
    134 && console.log(h, g, m);
  }, [
    a,
    h,
    m,
    r,
    c,
    d,
    O,
    g,
    Y,
    K,
    F
  ];
}
class ct extends ne {
  constructor(e) {
    super();
    const n = document.createElement("style");
    n.textContent = ".hide{display:none}", this.shadowRoot.appendChild(n), _e(
      this,
      {
        target: this.shadowRoot,
        props: ae(this.attributes),
        customElement: !0
      },
      rt,
      Le,
      fe,
      {},
      null
    ), e && e.target && j(e.target, this, e.anchor);
  }
}
customElements.define("my-selection-form", ct);
