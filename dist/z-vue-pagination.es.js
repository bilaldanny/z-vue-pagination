import { defineComponent as F, toRef as q, computed as b, openBlock as d, createElementBlock as v, normalizeClass as o, createBlock as B, resolveDynamicComponent as P, withModifiers as c, withCtx as k, renderSlot as I, createTextVNode as y, toDisplayString as h, createCommentVNode as w, Fragment as A, renderList as H } from "vue";
const R = { key: 5 }, O = { key: 6 }, z = /* @__PURE__ */ F({
  __name: "pagination",
  props: {
    // Configuration props
    totalItems: {
      type: Number,
      required: !0
    },
    itemsPerPage: {
      type: Number,
      default: 10,
      validator: (e) => {
        if (e <= 0) {
          const u = "itemsPerPage attribute must be greater than 0.";
          throw console.error(u), new TypeError(u);
        }
        return !0;
      }
    },
    currentPage: {
      type: Number,
      default: 1,
      validator: (e) => {
        const u = "currentPage attribute must be greater than 0.";
        if (e <= 0)
          throw console.error(u), new TypeError(u);
        return !0;
      }
    },
    modelValue: {
      type: Number,
      default: 1,
      required: !0,
      validator: (e) => {
        const u = "v-model is required and must be greater than 0.";
        if (e <= 0)
          throw console.error(u), new TypeError(u);
        return !0;
      }
    },
    maxPagesShown: {
      type: Number,
      default: 5,
      validator: (e) => {
        const u = "maxPagesShown attribute must be greater than 0.";
        if (e <= 0)
          throw console.error(u), new TypeError(u);
        return !0;
      }
    },
    dir: {
      type: String,
      default: "ltr",
      validator: (e) => {
        const u = 'dir attribute must be either "ltr" or "rtl".';
        if (e !== "ltr" && e !== "rtl")
          throw console.error(u), new TypeError(u);
        return !0;
      }
    },
    type: {
      type: String,
      default: "button",
      validator: (e) => {
        const u = ["link", "button"], a = "type attribute must be one of the following: " + u.join(", ");
        if (u.indexOf(e) === -1)
          throw console.error(a), new TypeError(a);
        return !0;
      }
    },
    onClick: {
      type: Function,
      default: () => {
      }
    },
    locale: {
      type: String,
      default: "en",
      validator: (e) => {
        const u = ["en", "ar", "ir"], a = "locale attribute must be one of the following: " + u.join(", ");
        if (u.indexOf(e) === -1)
          throw console.error(a), new TypeError(a);
        return !0;
      }
    },
    hidePrevNext: {
      type: Boolean,
      default: !1
    },
    showBreakpointButtons: {
      type: Boolean,
      default: !0
    },
    disableBreakpointButtons: {
      type: Boolean,
      default: !1
    },
    showJumpButtons: {
      type: Boolean,
      default: !1
    },
    showDisabled: {
      type: Boolean,
      default: !1
    },
    linkUrl: {
      type: String,
      default: "#"
    },
    disablePagination: {
      type: Boolean,
      default: !1
    },
    showEndingButtons: {
      type: Boolean,
      default: !1
    },
    firstPageContent: {
      type: String,
      default: "First"
    },
    lastPageContent: {
      type: String,
      default: "Last"
    },
    backwardJumpButtonContent: {
      type: String,
      default: "<<"
    },
    forwardJumpButtonContent: {
      type: String,
      default: ">>"
    },
    startingBreakpointContent: {
      type: String,
      default: "..."
    },
    endingBreakpointButtonContent: {
      type: String,
      default: "..."
    },
    prevButtonContent: {
      type: String,
      default: "Prev"
    },
    nextButtonContent: {
      type: String,
      default: "Next"
    },
    // Class props
    backButtonClass: {
      type: String,
      default: "back-button"
    },
    nextButtonClass: {
      type: String,
      default: "next-button"
    },
    firstButtonClass: {
      type: String,
      default: "first-button"
    },
    numberButtonsClass: {
      type: String,
      default: "number-buttons"
    },
    startingBreakpointButtonClass: {
      type: String,
      default: "starting-breakpoint-button"
    },
    endingBreakPointButtonClass: {
      type: String,
      default: "ending-breakpoint-button"
    },
    firstPageButtonClass: {
      type: String,
      default: "first-page-button"
    },
    lastPageButtonClass: {
      type: String,
      default: "last-page-button"
    },
    firstPageItemClass: {
      type: String,
      default: "first-page-item"
    },
    backwardJumpItemClass: {
      type: String,
      default: "backward-page-jump"
    },
    backItemClass: {
      type: String,
      default: "previous"
    },
    paginateItemsClass: {
      type: String,
      default: "paginate_button page-item"
    },
    disabledPaginateItemsClass: {
      type: String,
      default: "disabled"
    },
    nextItemClass: {
      type: String,
      default: "next"
    },
    forwardJumpItemClass: {
      type: String,
      default: "forward_jump_item"
    },
    lastPageItemClass: {
      type: String,
      default: "last_page_item"
    },
    // use this selector above all the other selectors because of css specificity
    paginateButtonsClass: {
      type: String,
      default: "page-link"
    },
    disabledPaginateButtonsClass: {
      type: String,
      default: "disabled"
    },
    activeItemClass: {
      type: String,
      default: "active"
    },
    activePageClass: {
      type: String,
      default: "active-page"
    },
    paginationContainerClass: {
      type: String,
      default: "pagination"
    },
    disabledBreakPointButtonClass: {
      type: String,
      default: "disabled-breakpoint-button"
    },
    backwardJumpButtonClass: {
      type: String,
      default: "backward-jump-button"
    },
    forwardJumpButtonClass: {
      type: String,
      default: "forward-jump-button"
    },
    disabledBackwardJumpButtonClass: {
      type: String,
      default: "disabled-backward-jump-button"
    },
    disabledBackButtonClass: {
      type: String,
      default: "disabled-back-button"
    },
    disabledLastButtonClass: {
      type: String,
      default: "disabled-last-button"
    },
    disabledNextButtonClass: {
      type: String,
      default: "disabled-next-button"
    },
    disabledForwardJumpButtonClass: {
      type: String,
      default: "disabled-forward-jump-button"
    }
  },
  emits: ["update:modelValue", "click"],
  setup(e, { emit: u }) {
    const a = e;
    if (a.currentPage && !a.modelValue)
      throw new Error(
        "currentPage/current-page is now deprecated, use v-model instead to set the current page."
      );
    if (!a.modelValue)
      throw new TypeError("v-model is required for the paginate component.");
    const t = q(a, "modelValue"), J = u, f = (l) => {
      l !== t.value && (l > s.value || l < 1 || a.disablePagination || (J("update:modelValue", l), J("click", l)));
    }, $ = (l) => {
      switch (a.locale) {
        case "en":
          return l;
        case "ar":
          return l.toLocaleString("ar-SA");
        case "ir":
          return l.toLocaleString("fa-IR");
        default:
          return l;
      }
    }, C = (l) => a.type !== "link" ? "" : a.linkUrl.replace("[page]", l.toString()), s = b(
      () => Math.ceil(a.totalItems / a.itemsPerPage)
    ), r = b(() => {
      let l, i;
      if (s.value <= a.maxPagesShown)
        l = 1, i = s.value;
      else {
        let x = Math.floor(a.maxPagesShown / 2), N = Math.ceil(a.maxPagesShown / 2) - 1;
        t.value <= x ? (l = 1, i = a.maxPagesShown) : t.value + N >= s.value ? (l = s.value - a.maxPagesShown + 1, i = s.value) : (l = t.value - x, i = t.value + N);
      }
      let g = Array.from(Array(i + 1 - l).keys()).map(
        (x) => l + x
      );
      return a.dir === "rtl" && (g = g.reverse()), {
        totalItems: a.totalItems,
        currentPage: t.value,
        itemsPerPage: a.itemsPerPage,
        totalPages: s,
        startPage: l,
        endPage: i,
        pages: g
      };
    }), n = b(() => a.dir === "rtl"), T = b(() => a.showDisabled == !0 ? !0 : n.value ? t.value !== s.value : t.value !== 1), j = b(() => a.showDisabled == !0 ? !0 : n.value ? t.value !== 1 : t.value !== s.value), L = b(() => n.value ? r.value.pages[0] < s.value - 1 : r.value.pages[0] >= 3), M = b(() => a.showDisabled == !0 ? !0 : n.value ? r.value.pages[0] < s.value : r.value.pages[0] >= 2), E = b(() => a.showDisabled == !0 ? !0 : n.value ? r.value.pages[r.value.pages.length - 1] >= 2 : r.value.pages[r.value.pages.length - 1] < s.value), D = b(() => n.value ? r.value.pages[r.value.pages.length - 1] >= 3 : r.value.pages[r.value.pages.length - 1] < s.value - 1), V = b(() => n.value ? r.value.pages[0] < s.value : r.value.pages[0] >= 2), U = b(() => n.value ? r.value.pages[r.value.pages.length - 1] >= 2 : r.value.pages[r.value.pages.length - 1] < s.value), m = b(() => t.value !== 1), S = b(() => t.value !== s.value);
    if (a.type === "link" && a.linkUrl === "#")
      throw console.error("linkUrl attribute is required if type attribute is 'link'"), new TypeError(
        "linkUrl attribute is required if type attribute is 'link'"
      );
    if (a.type === "link" && !a.linkUrl.includes("[page]"))
      throw console.error("linkUrl attribute must contain '[page]' substring"), new TypeError("linkUrl attribute must contain '[page]' substring");
    return (l, i) => (d(), v("ul", {
      class: o(e.paginationContainerClass)
    }, [
      e.showEndingButtons && M.value ? (d(), v("li", {
        key: 0,
        class: o([
          e.firstPageItemClass,
          e.paginateItemsClass,
          e.disablePagination ? e.disabledPaginateItemsClass : "",
          m.value ? "" : e.disabledPaginateItemsClass
        ])
      }, [
        (d(), B(P(e.type === "button" ? "button" : "a"), {
          href: C(n.value ? s.value : 1),
          onClick: i[0] || (i[0] = c((g) => f(n.value ? s.value : 1), ["prevent"])),
          class: o([
            e.firstPageButtonClass,
            e.paginateButtonsClass,
            e.disablePagination ? e.disabledPaginateButtonsClass : ""
          ]),
          disabled: m.value === !1 ? !0 : e.disablePagination
        }, {
          default: k(() => [
            I(l.$slots, "first-page-button", {}, () => [
              y(h(e.firstPageContent), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["href", "class", "disabled"]))
      ], 2)) : w("", !0),
      e.showJumpButtons && M.value ? (d(), v("li", {
        key: 1,
        class: o([
          e.backwardJumpItemClass,
          e.paginateItemsClass,
          e.disablePagination ? e.disabledPaginateItemsClass : "",
          m.value ? "" : e.disabledPaginateItemsClass
        ])
      }, [
        (d(), B(P(e.type === "button" ? "button" : "a"), {
          href: C(
            n.value ? t.value + Math.ceil(e.maxPagesShown / 2) : t.value - Math.ceil(e.maxPagesShown / 2)
          ),
          onClick: i[1] || (i[1] = c((g) => f(
            n.value ? t.value + Math.ceil(e.maxPagesShown / 2) : t.value - Math.ceil(e.maxPagesShown / 2)
          ), ["prevent"])),
          class: o([
            e.backwardJumpButtonClass,
            e.paginateButtonsClass,
            e.disablePagination ? e.disabledPaginateButtonsClass : "",
            e.disablePagination ? e.disabledBackwardJumpButtonClass : "",
            m.value === !1 ? e.disabledPaginateButtonsClass + " " + e.disabledBackwardJumpButtonClass : ""
          ]),
          disabled: m.value === !1 ? !0 : e.disablePagination
        }, {
          default: k(() => [
            I(l.$slots, "backward-jump-button", {}, () => [
              y(h(e.backwardJumpButtonContent), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["href", "class", "disabled"]))
      ], 2)) : w("", !0),
      !e.hidePrevNext && T.value ? (d(), v("li", {
        key: 2,
        class: o([
          e.backItemClass,
          e.paginateItemsClass,
          e.disablePagination ? e.disabledPaginateItemsClass : "",
          m.value ? "" : e.disabledPaginateItemsClass
        ])
      }, [
        (d(), B(P(e.type === "button" ? "button" : "a"), {
          href: C(n.value ? t.value + 1 : t.value - 1),
          onClick: i[2] || (i[2] = c((g) => f(n.value ? t.value + 1 : t.value - 1), ["prevent"])),
          class: o([
            e.backButtonClass,
            e.paginateButtonsClass,
            e.disablePagination ? e.disabledPaginateButtonsClass : "",
            e.disablePagination ? e.disabledBackButtonClass : "",
            m.value === !1 ? e.disabledPaginateButtonsClass + " " + e.disabledBackButtonClass : ""
          ]),
          disabled: m.value === !1 ? !0 : e.disablePagination
        }, {
          default: k(() => [
            I(l.$slots, "prev-button", {}, () => [
              y(h(e.prevButtonContent), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["href", "class", "disabled"]))
      ], 2)) : w("", !0),
      e.showBreakpointButtons && V.value ? (d(), v("li", {
        key: 3,
        class: o([
          e.paginateItemsClass,
          e.disablePagination ? e.disabledPaginateItemsClass : "",
          m.value ? "" : e.disabledPaginateItemsClass
        ])
      }, [
        (d(), B(P(e.type === "button" ? "button" : "a"), {
          href: C(n.value ? s.value : 1),
          onClick: i[3] || (i[3] = c((g) => f(n.value ? s.value : 1), ["prevent"])),
          class: o([
            e.paginateButtonsClass,
            e.disablePagination ? e.disabledPaginateButtonsClass : "",
            e.disablePagination ? e.disabledPaginateButtonsClass : "",
            m.value === !1 ? e.disabledPaginateButtonsClass + " " + e.disabledPaginateButtonsClass : ""
          ]),
          disabled: e.disablePagination
        }, {
          default: k(() => [
            y(h(n.value ? $(s.value) : $(1)), 1)
          ]),
          _: 1
        }, 8, ["href", "class", "disabled"]))
      ], 2)) : w("", !0),
      e.showBreakpointButtons && L.value ? (d(), v("li", {
        key: 4,
        class: o([
          e.paginateItemsClass,
          e.disablePagination ? e.disabledPaginateItemsClass : "",
          m.value ? "" : e.disabledPaginateItemsClass
        ])
      }, [
        (d(), B(P(e.type === "button" ? "button" : "a"), {
          href: C(
            e.disableBreakpointButtons ? t.value : n.value ? t.value + Math.ceil(e.maxPagesShown / 2) : t.value - Math.ceil(e.maxPagesShown / 2)
          ),
          onClick: i[4] || (i[4] = c((g) => f(
            e.disableBreakpointButtons ? t.value : n.value ? t.value + Math.ceil(e.maxPagesShown / 2) : t.value - Math.ceil(e.maxPagesShown / 2)
          ), ["prevent"])),
          disabled: e.disableBreakpointButtons || e.disablePagination,
          class: o([
            e.startingBreakpointButtonClass,
            e.paginateButtonsClass,
            e.disableBreakpointButtons || e.disablePagination ? `${e.disabledPaginateButtonsClass} ${e.disabledBreakPointButtonClass}` : ""
          ])
        }, {
          default: k(() => [
            I(l.$slots, "starting-breakpoint-button", {}, () => [
              y(h(e.startingBreakpointContent), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["href", "disabled", "class"]))
      ], 2)) : w("", !0),
      (d(!0), v(A, null, H(r.value.pages, (g, x) => (d(), v("li", {
        key: x,
        class: o([
          e.paginateItemsClass,
          e.disablePagination ? e.disabledPaginateItemsClass : "",
          g === t.value ? e.activeItemClass : ""
        ])
      }, [
        (d(), B(P(e.type === "button" ? "button" : "a"), {
          href: C(g),
          onClick: c(() => f(g), ["prevent"]),
          class: o([
            e.paginateButtonsClass,
            e.numberButtonsClass,
            g === t.value ? e.activePageClass : "",
            e.disablePagination ? e.disabledPaginateButtonsClass : ""
          ]),
          disabled: e.disablePagination
        }, {
          default: k(() => [
            y(h($(g)), 1)
          ]),
          _: 2
        }, 1032, ["href", "onClick", "class", "disabled"]))
      ], 2))), 128)),
      e.showBreakpointButtons && D.value ? (d(), v("li", R, [
        (d(), B(P(e.type === "button" ? "button" : "a"), {
          href: C(
            e.disableBreakpointButtons ? t.value : n.value ? t.value - Math.ceil(e.maxPagesShown / 2) : t.value + Math.ceil(e.maxPagesShown / 2)
          ),
          onClick: i[5] || (i[5] = c((g) => f(
            e.disableBreakpointButtons ? t.value : n.value ? t.value - Math.ceil(e.maxPagesShown / 2) : t.value + Math.ceil(e.maxPagesShown / 2)
          ), ["prevent"])),
          disabled: e.disableBreakpointButtons || e.disablePagination,
          class: o([
            e.endingBreakPointButtonClass,
            e.paginateButtonsClass,
            e.disableBreakpointButtons || e.disablePagination ? `${e.disabledPaginateButtonsClass} ${e.disabledBreakPointButtonClass}` : ""
          ])
        }, {
          default: k(() => [
            I(l.$slots, "ending-breakpoint-button", {}, () => [
              y(h(e.endingBreakpointButtonContent), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["href", "disabled", "class"]))
      ])) : w("", !0),
      e.showBreakpointButtons && U.value ? (d(), v("li", O, [
        (d(), B(P(e.type === "button" ? "button" : "a"), {
          href: C(n.value ? 1 : s.value),
          onClick: i[6] || (i[6] = c((g) => f(n.value ? 1 : s.value), ["prevent"])),
          class: o([
            e.paginateButtonsClass,
            e.disablePagination ? e.disabledPaginateButtonsClass : "",
            e.disablePagination ? e.disabledLastButtonClass : ""
          ]),
          disabled: e.disablePagination
        }, {
          default: k(() => [
            y(h(n.value ? $(1) : $(s.value)), 1)
          ]),
          _: 1
        }, 8, ["href", "class", "disabled"]))
      ])) : w("", !0),
      !e.hidePrevNext && j.value ? (d(), v("li", {
        key: 7,
        class: o([
          e.nextItemClass,
          e.paginateItemsClass,
          e.disablePagination ? e.disabledPaginateItemsClass : "",
          S.value ? "" : e.disabledPaginateItemsClass
        ])
      }, [
        (d(), B(P(e.type === "button" ? "button" : "a"), {
          href: C(n.value ? t.value - 1 : t.value + 1),
          onClick: i[7] || (i[7] = c((g) => f(n.value ? t.value - 1 : t.value + 1), ["prevent"])),
          class: o([
            e.paginateButtonsClass,
            e.nextButtonClass,
            e.disablePagination ? e.disabledPaginateButtonsClass : "",
            e.disablePagination ? e.disabledNextButtonClass : "",
            S.value === !1 ? e.disabledPaginateButtonsClass + " " + e.disabledNextButtonClass : ""
          ]),
          disabled: S.value === !1 ? !0 : e.disablePagination
        }, {
          default: k(() => [
            I(l.$slots, "next-button", {}, () => [
              y(h(e.nextButtonContent), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["href", "class", "disabled"]))
      ], 2)) : w("", !0),
      e.showJumpButtons && E.value ? (d(), v("li", {
        key: 8,
        class: o([
          e.forwardJumpItemClass,
          e.paginateItemsClass,
          e.disablePagination ? e.disabledPaginateItemsClass : "",
          S.value ? "" : e.disabledPaginateItemsClass
        ])
      }, [
        (d(), B(P(e.type === "button" ? "button" : "a"), {
          href: C(
            n.value ? t.value - Math.ceil(e.maxPagesShown / 2) : t.value + Math.ceil(e.maxPagesShown / 2)
          ),
          onClick: i[8] || (i[8] = c((g) => f(
            n.value ? t.value - Math.ceil(e.maxPagesShown / 2) : t.value + Math.ceil(e.maxPagesShown / 2)
          ), ["prevent"])),
          class: o([
            e.forwardJumpButtonClass,
            e.paginateButtonsClass,
            e.disablePagination ? e.disabledPaginateButtonsClass : "",
            e.disablePagination ? e.disabledForwardJumpButtonClass : "",
            S.value === !1 ? e.disabledPaginateButtonsClass + " " + e.disabledForwardJumpButtonClass : ""
          ]),
          disabled: S.value === !1 ? !0 : e.disablePagination
        }, {
          default: k(() => [
            I(l.$slots, "forward-jump-button", {}, () => [
              y(h(e.forwardJumpButtonContent), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["href", "class", "disabled"]))
      ], 2)) : w("", !0),
      e.showEndingButtons && E.value ? (d(), v("li", {
        key: 9,
        class: o([
          e.lastPageItemClass,
          e.paginateItemsClass,
          e.disablePagination ? e.disabledPaginateItemsClass : "",
          S.value ? "" : e.disabledPaginateItemsClass
        ])
      }, [
        (d(), B(P(e.type === "button" ? "button" : "a"), {
          href: C(n.value ? 1 : s.value),
          onClick: i[9] || (i[9] = c((g) => f(n.value ? 1 : s.value), ["prevent"])),
          class: o([
            e.lastPageButtonClass,
            e.paginateButtonsClass,
            e.disablePagination ? e.disabledPaginateButtonsClass : "",
            S.value === !1 ? e.disabledPaginateButtonsClass + " " + e.disabledLastButtonClass : ""
          ]),
          disabled: S.value === !1 ? !0 : e.disablePagination
        }, {
          default: k(() => [
            I(l.$slots, "last-page-button", {}, () => [
              y(h(e.lastPageContent), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["href", "class", "disabled"]))
      ], 2)) : w("", !0)
    ], 2));
  }
}), Z = (e, u) => {
  const a = e.__vccOpts || e;
  for (const [t, J] of u)
    a[t] = J;
  return a;
}, K = /* @__PURE__ */ Z(z, [["__scopeId", "data-v-03817d3f"]]);
export {
  K as default
};
