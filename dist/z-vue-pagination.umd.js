(function(e,C){typeof exports=="object"&&typeof module<"u"?module.exports=C(require("vue")):typeof define=="function"&&define.amd?define(["vue"],C):(e=typeof globalThis<"u"?globalThis:e||self,e.ZVuePagination=C(e.Vue))})(this,function(e){"use strict";const C={key:5},w={key:6};return((t,d)=>{const n=t.__vccOpts||t;for(const[a,P]of d)n[a]=P;return n})(e.defineComponent({__name:"pagination",props:{totalItems:{type:Number,required:!0},itemsPerPage:{type:Number,default:10,validator:t=>{if(t<=0){const d="itemsPerPage attribute must be greater than 0.";throw console.error(d),new TypeError(d)}return!0}},currentPage:{type:Number,default:1,validator:t=>{const d="currentPage attribute must be greater than 0.";if(t<=0)throw console.error(d),new TypeError(d);return!0}},modelValue:{type:Number,default:1,required:!0,validator:t=>{const d="v-model is required and must be greater than 0.";if(t<=0)throw console.error(d),new TypeError(d);return!0}},maxPagesShown:{type:Number,default:5,validator:t=>{const d="maxPagesShown attribute must be greater than 0.";if(t<=0)throw console.error(d),new TypeError(d);return!0}},dir:{type:String,default:"ltr",validator:t=>{const d='dir attribute must be either "ltr" or "rtl".';if(t!=="ltr"&&t!=="rtl")throw console.error(d),new TypeError(d);return!0}},type:{type:String,default:"button",validator:t=>{const d=["link","button"],n="type attribute must be one of the following: "+d.join(", ");if(d.indexOf(t)===-1)throw console.error(n),new TypeError(n);return!0}},onClick:{type:Function,default:()=>{}},locale:{type:String,default:"en",validator:t=>{const d=["en","ar","ir"],n="locale attribute must be one of the following: "+d.join(", ");if(d.indexOf(t)===-1)throw console.error(n),new TypeError(n);return!0}},hidePrevNext:{type:Boolean,default:!1},showBreakpointButtons:{type:Boolean,default:!0},disableBreakpointButtons:{type:Boolean,default:!1},showJumpButtons:{type:Boolean,default:!1},showDisabled:{type:Boolean,default:!1},linkUrl:{type:String,default:"#"},disablePagination:{type:Boolean,default:!1},showEndingButtons:{type:Boolean,default:!1},firstPageContent:{type:String,default:"First"},lastPageContent:{type:String,default:"Last"},backwardJumpButtonContent:{type:String,default:"<<"},forwardJumpButtonContent:{type:String,default:">>"},startingBreakpointContent:{type:String,default:"..."},endingBreakpointButtonContent:{type:String,default:"..."},prevButtonContent:{type:String,default:"Prev"},nextButtonContent:{type:String,default:"Next"},backButtonClass:{type:String,default:"back-button"},nextButtonClass:{type:String,default:"next-button"},firstButtonClass:{type:String,default:"first-button"},numberButtonsClass:{type:String,default:"number-buttons"},startingBreakpointButtonClass:{type:String,default:"starting-breakpoint-button"},endingBreakPointButtonClass:{type:String,default:"ending-breakpoint-button"},firstPageButtonClass:{type:String,default:"first-page-button"},lastPageButtonClass:{type:String,default:"last-page-button"},firstPageItemClass:{type:String,default:"first-page-item"},backwardJumpItemClass:{type:String,default:"backward-page-jump"},backItemClass:{type:String,default:"previous"},paginateItemsClass:{type:String,default:"paginate_button page-item"},disabledPaginateItemsClass:{type:String,default:"disabled"},nextItemClass:{type:String,default:"next"},forwardJumpItemClass:{type:String,default:"forward_jump_item"},lastPageItemClass:{type:String,default:"last_page_item"},paginateButtonsClass:{type:String,default:"page-link"},disabledPaginateButtonsClass:{type:String,default:"disabled"},activeItemClass:{type:String,default:"active"},activePageClass:{type:String,default:"active-page"},paginationContainerClass:{type:String,default:"pagination"},disabledBreakPointButtonClass:{type:String,default:"disabled-breakpoint-button"},backwardJumpButtonClass:{type:String,default:"backward-jump-button"},forwardJumpButtonClass:{type:String,default:"forward-jump-button"},disabledBackwardJumpButtonClass:{type:String,default:"disabled-backward-jump-button"},disabledBackButtonClass:{type:String,default:"disabled-back-button"},disabledLastButtonClass:{type:String,default:"disabled-last-button"},disabledNextButtonClass:{type:String,default:"disabled-next-button"},disabledForwardJumpButtonClass:{type:String,default:"disabled-forward-jump-button"}},emits:["update:modelValue","click"],setup(t,{emit:d}){const n=t;if(n.currentPage&&!n.modelValue)throw new Error("currentPage/current-page is now deprecated, use v-model instead to set the current page.");if(!n.modelValue)throw new TypeError("v-model is required for the paginate component.");const a=e.toRef(n,"modelValue"),P=d,g=i=>{i!==a.value&&(i>o.value||i<1||n.disablePagination||(P("update:modelValue",i),P("click",i)))},B=i=>{switch(n.locale){case"en":return i;case"ar":return i.toLocaleString("ar-SA");case"ir":return i.toLocaleString("fa-IR");default:return i}},c=i=>n.type!=="link"?"":n.linkUrl.replace("[page]",i.toString()),o=e.computed(()=>Math.ceil(n.totalItems/n.itemsPerPage)),r=e.computed(()=>{let i,s;if(o.value<=n.maxPagesShown)i=1,s=o.value;else{let f=Math.floor(n.maxPagesShown/2),h=Math.ceil(n.maxPagesShown/2)-1;a.value<=f?(i=1,s=n.maxPagesShown):a.value+h>=o.value?(i=o.value-n.maxPagesShown+1,s=o.value):(i=a.value-f,s=a.value+h)}let u=Array.from(Array(s+1-i).keys()).map(f=>i+f);return n.dir==="rtl"&&(u=u.reverse()),{totalItems:n.totalItems,currentPage:a.value,itemsPerPage:n.itemsPerPage,totalPages:o,startPage:i,endPage:s,pages:u}}),l=e.computed(()=>n.dir==="rtl"),S=e.computed(()=>n.showDisabled==!0?!0:l.value?a.value!==o.value:a.value!==1),x=e.computed(()=>n.showDisabled==!0?!0:l.value?a.value!==1:a.value!==o.value),I=e.computed(()=>l.value?r.value.pages[0]<o.value-1:r.value.pages[0]>=3),k=e.computed(()=>n.showDisabled==!0?!0:l.value?r.value.pages[0]<o.value:r.value.pages[0]>=2),y=e.computed(()=>n.showDisabled==!0?!0:l.value?r.value.pages[r.value.pages.length-1]>=2:r.value.pages[r.value.pages.length-1]<o.value),v=e.computed(()=>l.value?r.value.pages[r.value.pages.length-1]>=3:r.value.pages[r.value.pages.length-1]<o.value-1),N=e.computed(()=>l.value?r.value.pages[0]<o.value:r.value.pages[0]>=2),V=e.computed(()=>l.value?r.value.pages[r.value.pages.length-1]>=2:r.value.pages[r.value.pages.length-1]<o.value),m=e.computed(()=>a.value!==1),b=e.computed(()=>a.value!==o.value);if(n.type==="link"&&n.linkUrl==="#")throw console.error("linkUrl attribute is required if type attribute is 'link'"),new TypeError("linkUrl attribute is required if type attribute is 'link'");if(n.type==="link"&&!n.linkUrl.includes("[page]"))throw console.error("linkUrl attribute must contain '[page]' substring"),new TypeError("linkUrl attribute must contain '[page]' substring");return(i,s)=>(e.openBlock(),e.createElementBlock("ul",{class:e.normalizeClass(t.paginationContainerClass)},[t.showEndingButtons&&k.value?(e.openBlock(),e.createElementBlock("li",{key:0,class:e.normalizeClass([t.firstPageItemClass,t.paginateItemsClass,t.disablePagination?t.disabledPaginateItemsClass:"",m.value?"":t.disabledPaginateItemsClass])},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.type==="button"?"button":"a"),{href:c(l.value?o.value:1),onClick:s[0]||(s[0]=e.withModifiers(u=>g(l.value?o.value:1),["prevent"])),class:e.normalizeClass([t.firstPageButtonClass,t.paginateButtonsClass,t.disablePagination?t.disabledPaginateButtonsClass:""]),disabled:m.value===!1?!0:t.disablePagination},{default:e.withCtx(()=>[e.renderSlot(i.$slots,"first-page-button",{},()=>[e.createTextVNode(e.toDisplayString(t.firstPageContent),1)],!0)]),_:3},8,["href","class","disabled"]))],2)):e.createCommentVNode("",!0),t.showJumpButtons&&k.value?(e.openBlock(),e.createElementBlock("li",{key:1,class:e.normalizeClass([t.backwardJumpItemClass,t.paginateItemsClass,t.disablePagination?t.disabledPaginateItemsClass:"",m.value?"":t.disabledPaginateItemsClass])},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.type==="button"?"button":"a"),{href:c(l.value?a.value+Math.ceil(t.maxPagesShown/2):a.value-Math.ceil(t.maxPagesShown/2)),onClick:s[1]||(s[1]=e.withModifiers(u=>g(l.value?a.value+Math.ceil(t.maxPagesShown/2):a.value-Math.ceil(t.maxPagesShown/2)),["prevent"])),class:e.normalizeClass([t.backwardJumpButtonClass,t.paginateButtonsClass,t.disablePagination?t.disabledPaginateButtonsClass:"",t.disablePagination?t.disabledBackwardJumpButtonClass:"",m.value===!1?t.disabledPaginateButtonsClass+" "+t.disabledBackwardJumpButtonClass:""]),disabled:m.value===!1?!0:t.disablePagination},{default:e.withCtx(()=>[e.renderSlot(i.$slots,"backward-jump-button",{},()=>[e.createTextVNode(e.toDisplayString(t.backwardJumpButtonContent),1)],!0)]),_:3},8,["href","class","disabled"]))],2)):e.createCommentVNode("",!0),!t.hidePrevNext&&S.value?(e.openBlock(),e.createElementBlock("li",{key:2,class:e.normalizeClass([t.backItemClass,t.paginateItemsClass,t.disablePagination?t.disabledPaginateItemsClass:"",m.value?"":t.disabledPaginateItemsClass])},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.type==="button"?"button":"a"),{href:c(l.value?a.value+1:a.value-1),onClick:s[2]||(s[2]=e.withModifiers(u=>g(l.value?a.value+1:a.value-1),["prevent"])),class:e.normalizeClass([t.backButtonClass,t.paginateButtonsClass,t.disablePagination?t.disabledPaginateButtonsClass:"",t.disablePagination?t.disabledBackButtonClass:"",m.value===!1?t.disabledPaginateButtonsClass+" "+t.disabledBackButtonClass:""]),disabled:m.value===!1?!0:t.disablePagination},{default:e.withCtx(()=>[e.renderSlot(i.$slots,"prev-button",{},()=>[e.createTextVNode(e.toDisplayString(t.prevButtonContent),1)],!0)]),_:3},8,["href","class","disabled"]))],2)):e.createCommentVNode("",!0),t.showBreakpointButtons&&N.value?(e.openBlock(),e.createElementBlock("li",{key:3,class:e.normalizeClass([t.paginateItemsClass,t.disablePagination?t.disabledPaginateItemsClass:"",m.value?"":t.disabledPaginateItemsClass])},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.type==="button"?"button":"a"),{href:c(l.value?o.value:1),onClick:s[3]||(s[3]=e.withModifiers(u=>g(l.value?o.value:1),["prevent"])),class:e.normalizeClass([t.paginateButtonsClass,t.disablePagination?t.disabledPaginateButtonsClass:"",t.disablePagination?t.disabledPaginateButtonsClass:"",m.value===!1?t.disabledPaginateButtonsClass+" "+t.disabledPaginateButtonsClass:""]),disabled:t.disablePagination},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(l.value?B(o.value):B(1)),1)]),_:1},8,["href","class","disabled"]))],2)):e.createCommentVNode("",!0),t.showBreakpointButtons&&I.value?(e.openBlock(),e.createElementBlock("li",{key:4,class:e.normalizeClass([t.paginateItemsClass,t.disablePagination?t.disabledPaginateItemsClass:"",m.value?"":t.disabledPaginateItemsClass])},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.type==="button"?"button":"a"),{href:c(t.disableBreakpointButtons?a.value:l.value?a.value+Math.ceil(t.maxPagesShown/2):a.value-Math.ceil(t.maxPagesShown/2)),onClick:s[4]||(s[4]=e.withModifiers(u=>g(t.disableBreakpointButtons?a.value:l.value?a.value+Math.ceil(t.maxPagesShown/2):a.value-Math.ceil(t.maxPagesShown/2)),["prevent"])),disabled:t.disableBreakpointButtons||t.disablePagination,class:e.normalizeClass([t.startingBreakpointButtonClass,t.paginateButtonsClass,t.disableBreakpointButtons||t.disablePagination?`${t.disabledPaginateButtonsClass} ${t.disabledBreakPointButtonClass}`:""])},{default:e.withCtx(()=>[e.renderSlot(i.$slots,"starting-breakpoint-button",{},()=>[e.createTextVNode(e.toDisplayString(t.startingBreakpointContent),1)],!0)]),_:3},8,["href","disabled","class"]))],2)):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(r.value.pages,(u,f)=>(e.openBlock(),e.createElementBlock("li",{key:f,class:e.normalizeClass([t.paginateItemsClass,t.disablePagination?t.disabledPaginateItemsClass:"",u===a.value?t.activeItemClass:""])},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.type==="button"?"button":"a"),{href:c(u),onClick:e.withModifiers(()=>g(u),["prevent"]),class:e.normalizeClass([t.paginateButtonsClass,t.numberButtonsClass,u===a.value?t.activePageClass:"",t.disablePagination?t.disabledPaginateButtonsClass:""]),disabled:t.disablePagination},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(B(u)),1)]),_:2},1032,["href","onClick","class","disabled"]))],2))),128)),t.showBreakpointButtons&&v.value?(e.openBlock(),e.createElementBlock("li",C,[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.type==="button"?"button":"a"),{href:c(t.disableBreakpointButtons?a.value:l.value?a.value-Math.ceil(t.maxPagesShown/2):a.value+Math.ceil(t.maxPagesShown/2)),onClick:s[5]||(s[5]=e.withModifiers(u=>g(t.disableBreakpointButtons?a.value:l.value?a.value-Math.ceil(t.maxPagesShown/2):a.value+Math.ceil(t.maxPagesShown/2)),["prevent"])),disabled:t.disableBreakpointButtons||t.disablePagination,class:e.normalizeClass([t.endingBreakPointButtonClass,t.paginateButtonsClass,t.disableBreakpointButtons||t.disablePagination?`${t.disabledPaginateButtonsClass} ${t.disabledBreakPointButtonClass}`:""])},{default:e.withCtx(()=>[e.renderSlot(i.$slots,"ending-breakpoint-button",{},()=>[e.createTextVNode(e.toDisplayString(t.endingBreakpointButtonContent),1)],!0)]),_:3},8,["href","disabled","class"]))])):e.createCommentVNode("",!0),t.showBreakpointButtons&&V.value?(e.openBlock(),e.createElementBlock("li",w,[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.type==="button"?"button":"a"),{href:c(l.value?1:o.value),onClick:s[6]||(s[6]=e.withModifiers(u=>g(l.value?1:o.value),["prevent"])),class:e.normalizeClass([t.paginateButtonsClass,t.disablePagination?t.disabledPaginateButtonsClass:"",t.disablePagination?t.disabledLastButtonClass:""]),disabled:t.disablePagination},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(l.value?B(1):B(o.value)),1)]),_:1},8,["href","class","disabled"]))])):e.createCommentVNode("",!0),!t.hidePrevNext&&x.value?(e.openBlock(),e.createElementBlock("li",{key:7,class:e.normalizeClass([t.nextItemClass,t.paginateItemsClass,t.disablePagination?t.disabledPaginateItemsClass:"",b.value?"":t.disabledPaginateItemsClass])},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.type==="button"?"button":"a"),{href:c(l.value?a.value-1:a.value+1),onClick:s[7]||(s[7]=e.withModifiers(u=>g(l.value?a.value-1:a.value+1),["prevent"])),class:e.normalizeClass([t.paginateButtonsClass,t.nextButtonClass,t.disablePagination?t.disabledPaginateButtonsClass:"",t.disablePagination?t.disabledNextButtonClass:"",b.value===!1?t.disabledPaginateButtonsClass+" "+t.disabledNextButtonClass:""]),disabled:b.value===!1?!0:t.disablePagination},{default:e.withCtx(()=>[e.renderSlot(i.$slots,"next-button",{},()=>[e.createTextVNode(e.toDisplayString(t.nextButtonContent),1)],!0)]),_:3},8,["href","class","disabled"]))],2)):e.createCommentVNode("",!0),t.showJumpButtons&&y.value?(e.openBlock(),e.createElementBlock("li",{key:8,class:e.normalizeClass([t.forwardJumpItemClass,t.paginateItemsClass,t.disablePagination?t.disabledPaginateItemsClass:"",b.value?"":t.disabledPaginateItemsClass])},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.type==="button"?"button":"a"),{href:c(l.value?a.value-Math.ceil(t.maxPagesShown/2):a.value+Math.ceil(t.maxPagesShown/2)),onClick:s[8]||(s[8]=e.withModifiers(u=>g(l.value?a.value-Math.ceil(t.maxPagesShown/2):a.value+Math.ceil(t.maxPagesShown/2)),["prevent"])),class:e.normalizeClass([t.forwardJumpButtonClass,t.paginateButtonsClass,t.disablePagination?t.disabledPaginateButtonsClass:"",t.disablePagination?t.disabledForwardJumpButtonClass:"",b.value===!1?t.disabledPaginateButtonsClass+" "+t.disabledForwardJumpButtonClass:""]),disabled:b.value===!1?!0:t.disablePagination},{default:e.withCtx(()=>[e.renderSlot(i.$slots,"forward-jump-button",{},()=>[e.createTextVNode(e.toDisplayString(t.forwardJumpButtonContent),1)],!0)]),_:3},8,["href","class","disabled"]))],2)):e.createCommentVNode("",!0),t.showEndingButtons&&y.value?(e.openBlock(),e.createElementBlock("li",{key:9,class:e.normalizeClass([t.lastPageItemClass,t.paginateItemsClass,t.disablePagination?t.disabledPaginateItemsClass:"",b.value?"":t.disabledPaginateItemsClass])},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.type==="button"?"button":"a"),{href:c(l.value?1:o.value),onClick:s[9]||(s[9]=e.withModifiers(u=>g(l.value?1:o.value),["prevent"])),class:e.normalizeClass([t.lastPageButtonClass,t.paginateButtonsClass,t.disablePagination?t.disabledPaginateButtonsClass:"",b.value===!1?t.disabledPaginateButtonsClass+" "+t.disabledLastButtonClass:""]),disabled:b.value===!1?!0:t.disablePagination},{default:e.withCtx(()=>[e.renderSlot(i.$slots,"last-page-button",{},()=>[e.createTextVNode(e.toDisplayString(t.lastPageContent),1)],!0)]),_:3},8,["href","class","disabled"]))],2)):e.createCommentVNode("",!0)],2))}}),[["__scopeId","data-v-03817d3f"]])});
