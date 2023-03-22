import { openBlock as r, createElementBlock as a, renderSlot as c } from "vue";
const i = {
  name: "MessButton",
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
    handleFocus(e) {
      this.$emit("focus", e);
    },
    handleBlur(e) {
      this.$emit("blur", e);
    },
    handleMouseDown(e) {
      this.$emit("mousedown", e);
    },
    handleMouseUp(e) {
      this.$emit("mouseup", e);
    }
  }
};
const m = (e, n) => {
  const s = e.__vccOpts || e;
  for (const [u, d] of n)
    s[u] = d;
  return s;
};
function h(e, n, s, u, d, t) {
  return r(), a("div", {
    class: "btn",
    onClick: n[0] || (n[0] = (...o) => t.handleClick && t.handleClick(...o)),
    onFocus: n[1] || (n[1] = (...o) => t.handleFocus && t.handleFocus(...o)),
    onBlur: n[2] || (n[2] = (...o) => t.handleBlur && t.handleBlur(...o)),
    onMousedown: n[3] || (n[3] = (...o) => t.handleMouseDown && t.handleMouseDown(...o)),
    onMouseup: n[4] || (n[4] = (...o) => t.handleMouseUp && t.handleMouseUp(...o))
  }, [
    c(e.$slots, "default", {}, void 0, !0)
  ], 32);
}
const l = /* @__PURE__ */ m(i, [["render", h], ["__scopeId", "data-v-6142841e"]]);
l.install = function(e) {
  return e.component(l.name, l), e;
};
const f = [l], _ = function(e) {
  f.forEach((n) => {
    e.use(n);
  });
}, k = { install: _ };
export {
  l as Button,
  k as default
};
