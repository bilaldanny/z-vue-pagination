import { defineComponent as D, toRef as q, computed as f, openBlock as d, createElementBlock as b, normalizeClass as o, createBlock as B, resolveDynamicComponent as P, withModifiers as c, withCtx as k, renderSlot as I, createTextVNode as y, toDisplayString as h, createCommentVNode as w, Fragment as F, renderList as A } from "vue";
const R = { key: 5 }, H = { key: 6 }, O = /* @__PURE__ */ D({
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
      validator: (t) => {
        if (t <= 0) {
          const s = "itemsPerPage attribute must be greater than 0.";
          throw console.error(s), new TypeError(s);
        }
        return !0;
      }
    },
    currentPage: {
      type: Number,
      default: 1,
      validator: (t) => {
        const s = "currentPage attribute must be greater than 0.";
        if (t <= 0)
          throw console.error(s), new TypeError(s);
        return !0;
      }
    },
    modelValue: {
      type: Number,
      required: !0,
      validator: (t) => {
        const s = "v-model is required and must be greater than 0.";
        if (t <= 0)
          throw console.error(s), new TypeError(s);
        return !0;
      }
    },
    maxPagesShown: {
      type: Number,
      default: 5,
      validator: (t) => {
        const s = "maxPagesShown attribute must be greater than 0.";
        if (t <= 0)
          throw console.error(s), new TypeError(s);
        return !0;
      }
    },
    dir: {
      type: String,
      default: "ltr",
      validator: (t) => {
        const s = 'dir attribute must be either "ltr" or "rtl".';
        if (t !== "ltr" && t !== "rtl")
          throw console.error(s), new TypeError(s);
        return !0;
      }
    },
    type: {
      type: String,
      default: "button",
      validator: (t) => {
        const s = ["link", "button"], a = "type attribute must be one of the following: " + s.join(", ");
        if (s.indexOf(t) === -1)
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
      validator: (t) => {
        const s = ["en", "ar", "ir"], a = "locale attribute must be one of the following: " + s.join(", ");
        if (s.indexOf(t) === -1)
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
    lastButtonClass: {
      type: String,
      default: "last-button"
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
  setup(t, { emit: s }) {
    const a = t;
    if (a.currentPage && !a.modelValue)
      throw new Error(
        "currentPage/current-page is now deprecated, use v-model instead to set the current page."
      );
    if (!a.modelValue)
      throw new TypeError("v-model is required for the paginate component.");
    const e = q(a, "modelValue"), J = s, v = (n) => {
      n !== e.value && (n > u.value || n < 1 || a.disablePagination || (J("update:modelValue", n), J("click", n)));
    }, $ = (n) => {
      switch (a.locale) {
        case "en":
          return n;
        case "ar":
          return n.toLocaleString("ar-SA");
        case "ir":
          return n.toLocaleString("fa-IR");
        default:
          return n;
      }
    }, C = (n) => a.type !== "link" ? "" : a.linkUrl.replace("[page]", n.toString()), u = f(
      () => Math.ceil(a.totalItems / a.itemsPerPage)
    ), g = f(() => {
      let n, i;
      if (u.value <= a.maxPagesShown)
        n = 1, i = u.value;
      else {
        let x = Math.floor(a.maxPagesShown / 2), E = Math.ceil(a.maxPagesShown / 2) - 1;
        e.value <= x ? (n = 1, i = a.maxPagesShown) : e.value + E >= u.value ? (n = u.value - a.maxPagesShown + 1, i = u.value) : (n = e.value - x, i = e.value + E);
      }
      let r = Array.from(Array(i + 1 - n).keys()).map(
        (x) => n + x
      );
      return a.dir === "rtl" && (r = r.reverse()), {
        totalItems: a.totalItems,
        currentPage: e.value,
        itemsPerPage: a.itemsPerPage,
        totalPages: u,
        startPage: n,
        endPage: i,
        pages: r
      };
    }), l = f(() => a.dir === "rtl"), N = f(() => a.showDisabled == !0 ? !0 : l.value ? e.value !== u.value : e.value !== 1), T = f(() => a.showDisabled == !0 ? !0 : l.value ? e.value !== 1 : e.value !== u.value), j = f(() => l.value ? g.value.pages[0] < u.value - 1 : g.value.pages[0] >= 3), M = f(() => a.showDisabled == !0), L = f(() => l.value ? g.value.pages[g.value.pages.length - 1] >= 3 : g.value.pages[g.value.pages.length - 1] < u.value - 1), V = f(() => l.value ? g.value.pages[0] < u.value : g.value.pages[0] >= 2), U = f(() => l.value ? g.value.pages[g.value.pages.length - 1] >= 2 : g.value.pages[g.value.pages.length - 1] < u.value), m = f(() => e.value !== 1), S = f(() => e.value !== u.value);
    if (a.type === "link" && a.linkUrl === "#")
      throw console.error("linkUrl attribute is required if type attribute is 'link'"), new TypeError(
        "linkUrl attribute is required if type attribute is 'link'"
      );
    if (a.type === "link" && !a.linkUrl.includes("[page]"))
      throw console.error("linkUrl attribute must contain '[page]' substring"), new TypeError("linkUrl attribute must contain '[page]' substring");
    return (n, i) => (d(), b("ul", {
      class: o(t.paginationContainerClass)
    }, [
      t.showEndingButtons && M.value ? (d(), b("li", {
        key: 0,
        class: o([
          t.firstPageItemClass,
          t.paginateItemsClass,
          t.disablePagination ? t.disabledPaginateItemsClass : "",
          m.value ? "" : t.disabledPaginateItemsClass
        ])
      }, [
        (d(), B(P(t.type === "button" ? "button" : "a"), {
          href: C(l.value ? u.value : 1),
          onClick: i[0] || (i[0] = c((r) => v(l.value ? u.value : 1), ["prevent"])),
          class: o([
            t.firstPageButtonClass,
            t.paginateButtonsClass,
            t.disablePagination ? t.disabledPaginateButtonsClass : ""
          ]),
          disabled: m.value === !1 ? !0 : t.disablePagination
        }, {
          default: k(() => [
            I(n.$slots, "first-page-button", {}, () => [
              y(h(t.firstPageContent), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["href", "class", "disabled"]))
      ], 2)) : w("", !0),
      t.showJumpButtons && M.value ? (d(), b("li", {
        key: 1,
        class: o([
          t.backwardJumpItemClass,
          t.paginateItemsClass,
          t.disablePagination ? t.disabledPaginateItemsClass : "",
          m.value ? "" : t.disabledPaginateItemsClass
        ])
      }, [
        (d(), B(P(t.type === "button" ? "button" : "a"), {
          href: C(
            l.value ? e.value + Math.ceil(t.maxPagesShown / 2) : e.value - Math.ceil(t.maxPagesShown / 2)
          ),
          onClick: i[1] || (i[1] = c((r) => v(
            l.value ? e.value + Math.ceil(t.maxPagesShown / 2) : e.value - Math.ceil(t.maxPagesShown / 2)
          ), ["prevent"])),
          class: o([
            t.backwardJumpButtonClass,
            t.paginateButtonsClass,
            t.disablePagination ? t.disabledPaginateButtonsClass : "",
            t.disablePagination ? t.disabledBackwardJumpButtonClass : "",
            m.value === !1 ? t.disabledPaginateButtonsClass + " " + t.disabledBackwardJumpButtonClass : ""
          ]),
          disabled: m.value === !1 ? !0 : t.disablePagination
        }, {
          default: k(() => [
            I(n.$slots, "backward-jump-button", {}, () => [
              y(h(t.backwardJumpButtonContent), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["href", "class", "disabled"]))
      ], 2)) : w("", !0),
      !t.hidePrevNext && N.value ? (d(), b("li", {
        key: 2,
        class: o([
          t.backItemClass,
          t.paginateItemsClass,
          t.disablePagination ? t.disabledPaginateItemsClass : "",
          m.value ? "" : t.disabledPaginateItemsClass
        ])
      }, [
        (d(), B(P(t.type === "button" ? "button" : "a"), {
          href: C(l.value ? e.value + 1 : e.value - 1),
          onClick: i[2] || (i[2] = c((r) => v(l.value ? e.value + 1 : e.value - 1), ["prevent"])),
          class: o([
            t.backButtonClass,
            t.paginateButtonsClass,
            t.disablePagination ? t.disabledPaginateButtonsClass : "",
            t.disablePagination ? t.disabledBackButtonClass : "",
            m.value === !1 ? t.disabledPaginateButtonsClass + " " + t.disabledBackButtonClass : ""
          ]),
          disabled: m.value === !1 ? !0 : t.disablePagination
        }, {
          default: k(() => [
            I(n.$slots, "prev-button", {}, () => [
              y(h(t.prevButtonContent), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["href", "class", "disabled"]))
      ], 2)) : w("", !0),
      t.showBreakpointButtons && V.value ? (d(), b("li", {
        key: 3,
        class: o([
          t.paginateItemsClass,
          t.disablePagination ? t.disabledPaginateItemsClass : "",
          m.value ? "" : t.disabledPaginateItemsClass
        ])
      }, [
        (d(), B(P(t.type === "button" ? "button" : "a"), {
          href: C(l.value ? u.value : 1),
          onClick: i[3] || (i[3] = c((r) => v(l.value ? u.value : 1), ["prevent"])),
          class: o([
            t.paginateButtonsClass,
            t.disablePagination ? t.disabledPaginateButtonsClass : "",
            t.disablePagination ? t.disabledPaginateButtonsClass : "",
            m.value === !1 ? t.disabledPaginateButtonsClass + " " + t.disabledPaginateButtonsClass : ""
          ]),
          disabled: t.disablePagination
        }, {
          default: k(() => [
            y(h(l.value ? $(u.value) : $(1)), 1)
          ]),
          _: 1
        }, 8, ["href", "class", "disabled"]))
      ], 2)) : w("", !0),
      t.showBreakpointButtons && j.value ? (d(), b("li", {
        key: 4,
        class: o([
          t.paginateItemsClass,
          t.disablePagination ? t.disabledPaginateItemsClass : "",
          m.value ? "" : t.disabledPaginateItemsClass
        ])
      }, [
        (d(), B(P(t.type === "button" ? "button" : "a"), {
          href: C(
            t.disableBreakpointButtons ? e.value : l.value ? e.value + Math.ceil(t.maxPagesShown / 2) : e.value - Math.ceil(t.maxPagesShown / 2)
          ),
          onClick: i[4] || (i[4] = c((r) => v(
            t.disableBreakpointButtons ? e.value : l.value ? e.value + Math.ceil(t.maxPagesShown / 2) : e.value - Math.ceil(t.maxPagesShown / 2)
          ), ["prevent"])),
          disabled: t.disableBreakpointButtons || t.disablePagination,
          class: o([
            t.startingBreakpointButtonClass,
            t.paginateButtonsClass,
            t.disableBreakpointButtons || t.disablePagination ? `${t.disabledPaginateButtonsClass} ${t.disabledBreakPointButtonClass}` : ""
          ])
        }, {
          default: k(() => [
            I(n.$slots, "starting-breakpoint-button", {}, () => [
              y(h(t.startingBreakpointContent), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["href", "disabled", "class"]))
      ], 2)) : w("", !0),
      (d(!0), b(F, null, A(g.value.pages, (r, x) => (d(), b("li", {
        key: x,
        class: o([
          t.paginateItemsClass,
          t.disablePagination ? t.disabledPaginateItemsClass : "",
          r === e.value ? t.activeItemClass : ""
        ])
      }, [
        (d(), B(P(t.type === "button" ? "button" : "a"), {
          href: C(r),
          onClick: c(() => v(r), ["prevent"]),
          class: o([
            t.paginateButtonsClass,
            t.numberButtonsClass,
            r === e.value ? t.activePageClass : "",
            t.disablePagination ? t.disabledPaginateButtonsClass : ""
          ]),
          disabled: t.disablePagination
        }, {
          default: k(() => [
            y(h($(r)), 1)
          ]),
          _: 2
        }, 1032, ["href", "onClick", "class", "disabled"]))
      ], 2))), 128)),
      t.showBreakpointButtons && L.value ? (d(), b("li", R, [
        (d(), B(P(t.type === "button" ? "button" : "a"), {
          href: C(
            t.disableBreakpointButtons ? e.value : l.value ? e.value - Math.ceil(t.maxPagesShown / 2) : e.value + Math.ceil(t.maxPagesShown / 2)
          ),
          onClick: i[5] || (i[5] = c((r) => v(
            t.disableBreakpointButtons ? e.value : l.value ? e.value - Math.ceil(t.maxPagesShown / 2) : e.value + Math.ceil(t.maxPagesShown / 2)
          ), ["prevent"])),
          disabled: t.disableBreakpointButtons || t.disablePagination,
          class: o([
            t.endingBreakPointButtonClass,
            t.paginateButtonsClass,
            t.disableBreakpointButtons || t.disablePagination ? `${t.disabledPaginateButtonsClass} ${t.disabledBreakPointButtonClass}` : ""
          ])
        }, {
          default: k(() => [
            I(n.$slots, "ending-breakpoint-button", {}, () => [
              y(h(t.endingBreakpointButtonContent), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["href", "disabled", "class"]))
      ])) : w("", !0),
      t.showBreakpointButtons && U.value ? (d(), b("li", H, [
        (d(), B(P(t.type === "button" ? "button" : "a"), {
          href: C(l.value ? 1 : u.value),
          onClick: i[6] || (i[6] = c((r) => v(l.value ? 1 : u.value), ["prevent"])),
          class: o([
            t.lastButtonClass,
            t.paginateButtonsClass,
            t.disablePagination ? t.disabledPaginateButtonsClass : "",
            t.disablePagination ? t.disabledLastButtonClass : ""
          ]),
          disabled: t.disablePagination
        }, {
          default: k(() => [
            y(h(l.value ? $(1) : $(u.value)), 1)
          ]),
          _: 1
        }, 8, ["href", "class", "disabled"]))
      ])) : w("", !0),
      !t.hidePrevNext && T.value ? (d(), b("li", {
        key: 7,
        class: o([
          t.nextItemClass,
          t.paginateItemsClass,
          t.disablePagination ? t.disabledPaginateItemsClass : "",
          S.value ? "" : t.disabledPaginateItemsClass
        ])
      }, [
        (d(), B(P(t.type === "button" ? "button" : "a"), {
          href: C(l.value ? e.value - 1 : e.value + 1),
          onClick: i[7] || (i[7] = c((r) => v(l.value ? e.value - 1 : e.value + 1), ["prevent"])),
          class: o([
            t.paginateButtonsClass,
            t.nextButtonClass,
            t.disablePagination ? t.disabledPaginateButtonsClass : "",
            t.disablePagination ? t.disabledNextButtonClass : "",
            S.value === !1 ? t.disabledPaginateButtonsClass + " " + t.disabledNextButtonClass : ""
          ]),
          disabled: S.value === !1 ? !0 : t.disablePagination
        }, {
          default: k(() => [
            I(n.$slots, "next-button", {}, () => [
              y(h(t.nextButtonContent), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["href", "class", "disabled"]))
      ], 2)) : w("", !0),
      t.showJumpButtons && M.value ? (d(), b("li", {
        key: 8,
        class: o([
          t.forwardJumpItemClass,
          t.paginateItemsClass,
          t.disablePagination ? t.disabledPaginateItemsClass : "",
          S.value ? "" : t.disabledPaginateItemsClass
        ])
      }, [
        (d(), B(P(t.type === "button" ? "button" : "a"), {
          href: C(
            l.value ? e.value - Math.ceil(t.maxPagesShown / 2) : e.value + Math.ceil(t.maxPagesShown / 2)
          ),
          onClick: i[8] || (i[8] = c((r) => v(
            l.value ? e.value - Math.ceil(t.maxPagesShown / 2) : e.value + Math.ceil(t.maxPagesShown / 2)
          ), ["prevent"])),
          class: o([
            t.forwardJumpButtonClass,
            t.paginateButtonsClass,
            t.disablePagination ? t.disabledPaginateButtonsClass : "",
            t.disablePagination ? t.disabledForwardJumpButtonClass : "",
            S.value === !1 ? t.disabledPaginateButtonsClass + " " + t.disabledForwardJumpButtonClass : ""
          ]),
          disabled: S.value === !1 ? !0 : t.disablePagination
        }, {
          default: k(() => [
            I(n.$slots, "forward-jump-button", {}, () => [
              y(h(t.forwardJumpButtonContent), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["href", "class", "disabled"]))
      ], 2)) : w("", !0),
      t.showEndingButtons && M.value ? (d(), b("li", {
        key: 9,
        class: o([
          t.lastPageItemClass,
          t.paginateItemsClass,
          t.disablePagination ? t.disabledPaginateItemsClass : "",
          S.value ? "" : t.disabledPaginateItemsClass
        ])
      }, [
        (d(), B(P(t.type === "button" ? "button" : "a"), {
          href: C(l.value ? 1 : u.value),
          onClick: i[9] || (i[9] = c((r) => v(l.value ? 1 : u.value), ["prevent"])),
          class: o([
            t.lastPageButtonClass,
            t.paginateButtonsClass,
            t.disablePagination ? t.disabledPaginateButtonsClass : "",
            S.value === !1 ? t.disabledPaginateButtonsClass + " " + t.disabledLastButtonClass : ""
          ]),
          disabled: S.value === !1 ? !0 : t.disablePagination
        }, {
          default: k(() => [
            I(n.$slots, "last-page-button", {}, () => [
              y(h(t.lastPageContent), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["href", "class", "disabled"]))
      ], 2)) : w("", !0)
    ], 2));
  }
}), z = (t, s) => {
  const a = t.__vccOpts || t;
  for (const [e, J] of s)
    a[e] = J;
  return a;
}, G = /* @__PURE__ */ z(O, [["__scopeId", "data-v-b5627d82"]]);
export {
  G as default
};
