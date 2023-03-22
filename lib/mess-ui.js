import { openBlock as y, createElementBlock as M, renderSlot as I, defineComponent as k, ref as S, onMounted as R, onUnmounted as D } from "vue";
const F = {
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
const w = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of n)
    o[s] = a;
  return o;
};
function H(e, n, o, s, a, t) {
  return y(), M("div", {
    class: "btn",
    onClick: n[0] || (n[0] = (...l) => t.handleClick && t.handleClick(...l)),
    onFocus: n[1] || (n[1] = (...l) => t.handleFocus && t.handleFocus(...l)),
    onBlur: n[2] || (n[2] = (...l) => t.handleBlur && t.handleBlur(...l)),
    onMousedown: n[3] || (n[3] = (...l) => t.handleMouseDown && t.handleMouseDown(...l)),
    onMouseup: n[4] || (n[4] = (...l) => t.handleMouseUp && t.handleMouseUp(...l))
  }, [
    I(e.$slots, "default", {}, void 0, !0)
  ], 32);
}
const i = /* @__PURE__ */ w(F, [["render", H], ["__scopeId", "data-v-4edba1f1"]]);
i.install = function(e) {
  return e.component(i.name, i), e;
};
function T(e, n) {
  var o = parseInt(e.slice(1, 3), 16), s = parseInt(e.slice(3, 5), 16), a = parseInt(e.slice(5, 7), 16);
  return "rgba(" + o + ", " + s + ", " + a + ", " + n + ")";
}
function U(e, n) {
  var o = document.createElement("div");
  o.style.color = e, o.style.display = "none", document.body.appendChild(o);
  var s = window.getComputedStyle(o), a = s.getPropertyValue("color");
  document.body.removeChild(o);
  var t = a.replace(/[rgba\(\)]/g, "").split(","), l = parseInt(t[0]), c = parseInt(t[1]), r = parseInt(t[2]);
  return "rgba(" + l + ", " + c + ", " + r + ", " + n + ")";
}
const W = {
  name: "MessCodeDropBg"
}, A = /* @__PURE__ */ k({
  ...W,
  props: {
    dropChars: null,
    bgColor: null,
    fontSize: null,
    fontColor: null
  },
  setup(e) {
    const {
      dropChars: n = "李明正 JavaScript HTML CSS Vue React",
      fontColor: o = "green",
      fontSize: s = 12,
      bgColor: a = "#000000"
    } = e, t = S(null);
    let l = a.startsWith("#") ? T(a, 0.05) : U(a, 0.05), c;
    return R(() => {
      var g, C;
      const r = t.value, d = r.getContext("2d"), p = ((g = r == null ? void 0 : r.parentNode) == null ? void 0 : g.offsetWidth) || window.innerWidth, _ = ((C = r == null ? void 0 : r.parentNode) == null ? void 0 : C.offsetHeight) || window.innerHeight;
      r.width = p, r.height = _;
      const h = Math.floor(p / s), m = Array(h).fill(0), x = n.length;
      d.font = "700 " + s + "px";
      function v() {
        d.fillStyle = l, d.fillRect(0, 0, p, _), d.fillStyle = o;
        for (let u = 0; u < h; u++) {
          let B = u * s, b = m[u] * s;
          d.fillText(n[Math.floor(Math.random() * x)], B, b), b >= r.height && Math.random() > 0.99 && (m[u] = 0), m[u]++;
        }
      }
      v(), c = setInterval(v, 40);
    }), D(() => {
      clearInterval(c);
    }), (r, d) => (y(), M("canvas", {
      ref_key: "canvasRef",
      ref: t
    }, null, 512));
  }
});
const f = /* @__PURE__ */ w(A, [["__scopeId", "data-v-6b6214f6"]]);
f.install = function(e) {
  return e.component(f.name, f), e;
};
const E = [i, f], N = function(e) {
  E.forEach((n) => {
    e.use(n);
  });
}, G = { install: N };
export {
  i as Button,
  f as CodeDropBg,
  G as default
};
