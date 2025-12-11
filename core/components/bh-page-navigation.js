import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-9a7sQzad.js';
import { d as defineCustomElement$6 } from './p-DTgHvmlL.js';
import { d as defineCustomElement$5 } from './p-Bbo_Dwmk.js';
import { d as defineCustomElement$4 } from './p-B4TBDBoW.js';
import { d as defineCustomElement$3 } from './p-DNhCX5eS.js';
import { d as defineCustomElement$2 } from './p-CQBqn1IO.js';

const bhPageNavigationCss = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'); @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap'); :root{--color-white:hsl(0, 0%, 100%);--color-black:hsl(0, 0%, 0%);--color-transparent:hsla(0, 0%, 100%, 0);--color-neutral-25:hsl(240, 20%, 99%);--color-neutral-50:hsl(240, 20%, 98%);--color-neutral-100:hsl(240, 17%, 95%);--color-neutral-200:hsl(227, 25%, 89%);--color-neutral-300:hsl(224, 24%, 78%);--color-neutral-400:hsl(226, 24%, 59%);--color-neutral-500:hsl(226, 24%, 48%);--color-neutral-600:hsl(226, 24%, 38%);--color-neutral-700:hsl(226, 24%, 25%);--color-neutral-800:hsl(233, 33%, 10%);--color-neutral-900:hsl(231, 32%, 8%);--color-neutral-950:hsl(231, 32%, 8%);--color-brand-25:hsl(220, 82%, 98%);--color-brand-50:hsl(222, 87%, 97%);--color-brand-100:hsl(221, 94%, 94%);--color-brand-200:hsl(221, 92%, 86%);--color-brand-300:hsl(224, 95%, 77%);--color-brand-400:hsl(224, 94%, 72%);--color-brand-500:hsl(230, 67%, 58%);--color-brand-600:hsl(230, 69%, 48%);--color-brand-700:hsl(230, 75%, 34%);--color-brand-800:hsl(243, 86%, 44%);--color-brand-900:hsl(237, 69%, 24%);--color-brand-950:hsl(237, 61%, 20%);--color-error-25:hsl(12, 100%, 99%);--color-error-50:hsl(5, 86%, 97%);--color-error-100:hsl(4, 93%, 94%);--color-error-200:hsl(3, 96%, 89%);--color-error-300:hsl(4, 96%, 80%);--color-error-400:hsl(4, 92%, 69%);--color-error-500:hsl(4, 86%, 58%);--color-error-600:hsl(4, 74%, 49%);--color-error-700:hsl(4, 76%, 40%);--color-error-800:hsl(4, 72%, 33%);--color-error-900:hsl(8, 65%, 29%);--color-error-950:hsl(8, 75%, 19%);--color-warning-25:hsl(42, 100%, 98%);--color-warning-50:hsl(45, 100%, 96%);--color-warning-100:hsl(45, 96%, 89%);--color-warning-200:hsl(44, 98%, 77%);--color-warning-300:hsl(42, 99%, 65%);--color-warning-400:hsl(39, 98%, 56%);--color-warning-500:hsl(34, 94%, 50%);--color-warning-600:hsl(28, 97%, 44%);--color-warning-700:hsl(22, 92%, 37%);--color-warning-800:hsl(19, 84%, 31%);--color-warning-900:hsl(18, 79%, 27%);--color-warning-950:hsl(17, 79%, 17%);--color-success-25:hsl(142, 80%, 98%);--color-success-50:hsl(145, 81%, 96%);--color-success-100:hsl(140, 80%, 90%);--color-success-200:hsl(144, 78%, 80%);--color-success-300:hsl(148, 63%, 67%);--color-success-400:hsl(150, 57%, 54%);--color-success-500:hsl(152, 77%, 39%);--color-success-600:hsl(153, 91%, 30%);--color-success-700:hsl(155, 90%, 24%);--color-success-800:hsl(155, 84%, 20%);--color-success-900:hsl(156, 83%, 16%);--color-success-950:hsl(157, 82%, 11%);--font-inter:'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI',\n    Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n    'Liberation Mono', 'Courier New', monospace;--weight-regular:400;--weight-medium:500;--weight-semibold:600;--weight-bold:700;--text-xl-size:1.25rem;--text-lg-size:1.125rem;--text-md-size:1rem;--text-sm-size:0.875rem;--text-xs-size:0.75rem;--text-xl-line:1.875rem;--text-lg-line:1.75rem;--text-md-line:1.5rem;--text-sm-line:1.25rem;--text-xs-line:1.125rem;--spacing-none:0rem;--spacing-xxs:0.125rem;--spacing-xs:0.25rem;--spacing-sm:0.375rem;--spacing-md:0.5rem;--spacing-lg:0.75rem;--spacing-xl:1rem;--spacing-2xl:1.25rem;--spacing-3xl:1.5rem;--spacing-4xl:2rem;--spacing-5xl:2.5rem;--spacing-6xl:3rem;--radius-none:0rem;--radius-xxs:0.125rem;--radius-xs:0.25rem;--radius-sm:0.375rem;--radius-md:0.5rem;--radius-lg:0.625rem;--radius-xl:0.75rem;--radius-2xl:1rem;--radius-3xl:1.25rem;--radius-4xl:1.5rem;--radius-full:9999px;--shadow-xs:0px 1px 2px rgba(16, 24, 40, 0.05);--shadow-sm:0px 1px 3px rgba(16, 24, 40, 0.1),\n    0px 1px 2px rgba(16, 24, 40, 0.06);--shadow-md:0px 4px 8px -2px rgba(16, 24, 40, 0.1),\n    0px 2px 4px -2px rgba(16, 24, 40, 0.06);--shadow-lg:0px 12px 16px -4px rgba(16, 24, 40, 0.08),\n    0px 4px 6px -2px rgba(16, 24, 40, 0.03);--shadow-xl:0px 20px 24px -4px rgba(16, 24, 40, 0.08),\n    0px 8px 8px -4px rgba(16, 24, 40, 0.03);--icon-compensation-xs-btn:calc(var(--spacing-lg) - var(--spacing-xs));--icon-compensation-sm-btn:calc(var(--spacing-xl) - var(--spacing-xs));--icon-compensation-md-btn:calc(var(--spacing-xl) - var(--spacing-xs));--icon-compensation-lg-btn:calc(var(--spacing-xl) - var(--spacing-xs))}*,*::before,*::after{box-sizing:border-box}.material-symbols-outlined{font-family:'Material Symbols Outlined';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:'liga';-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased}:host{display:block}.page-navigation{width:320px;min-width:280px;background-color:var(--color-white);padding:var(--spacing-xl) var(--spacing-md);font-family:var(--font-inter);height:100vh;overflow-y:auto;border-right:1px solid var(--color-neutral-200);box-sizing:border-box;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.page-navigation-header{margin-bottom:var(--spacing-3xl)}.page-navigation-title{font-size:var(--text-xl-size);font-weight:var(--weight-semibold);line-height:var(--text-xl-line);color:var(--color-neutral-900);padding:var(--spacing-none) var(--spacing-xl);margin:0}.page-navigation-list{display:flex;flex-direction:column;gap:var(--spacing-sm)}@media (max-width: 768px){.page-navigation{width:280px;min-width:280px}}";

const BhPageNavigation$1 = /*@__PURE__*/ proxyCustomElement(class BhPageNavigation extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.bhItemClick = createEvent(this, "bhItemClick");
    }
    /**
     * Title displayed at the top of the navigation
     */
    navTitle = 'Navigation';
    /**
     * Array of navigation items
     */
    navigationItems = [];
    /**
     * Internal state to track navigation items
     */
    items = [];
    /**
     * Event emitted when a navigation item is clicked
     */
    bhItemClick;
    handleNavigationItemsChange(newValue) {
        this.items = [...newValue];
    }
    componentWillLoad() {
        this.items = [...this.navigationItems];
    }
    clearAllSelections() {
        this.items = this.items.map(item => ({
            ...item,
            isActive: false,
            children: item.children?.map(child => ({ ...child, isActive: false })),
        }));
    }
    handleSingleLevelClick = (itemId) => {
        this.clearAllSelections();
        this.items = this.items.map(item => item.id === itemId ? { ...item, isActive: true } : item);
        this.bhItemClick.emit({ itemId });
    };
    handleMultiLevelToggle = (itemId) => {
        this.items = this.items.map(item => item.id === itemId ? { ...item, isExpanded: !item.isExpanded } : item);
    };
    handleMultiLevelChildClick = (itemId, childIndex) => {
        this.clearAllSelections();
        this.items = this.items.map(item => item.id === itemId && item.children
            ? {
                ...item,
                children: item.children.map((child, index) => ({
                    ...child,
                    isActive: index === childIndex,
                })),
            }
            : item);
        this.bhItemClick.emit({ itemId, childIndex });
    };
    render() {
        return (h(Host, { key: 'd55ac36c9c2b0363613add845ea76ace4fac3f2d' }, h("div", { key: 'cbd7fdd5a4e1319a20b741698541d88e6b5a2c10', class: "page-navigation" }, h("div", { key: '01e66276c629dd06abf13c416a2c48f1e6ebdabb', class: "page-navigation-header" }, h("h2", { key: '726a13dd5d418763934523d4ad76838ed5961e09', class: "page-navigation-title" }, this.navTitle)), h("nav", { key: '6bc70d426691b4f979aa5eb4b190cf146142b918', class: "page-navigation-list" }, this.items.map(item => item.type === 'single' ? (h("bh-page-navigation-single-level", { key: item.id, label: item.label, icon: item.icon, isActive: item.isActive || false, onBhItemClick: () => this.handleSingleLevelClick(item.id) })) : (h("bh-page-navigation-multi-level", { key: item.id, label: item.label, icon: item.icon, childItems: item.children || [], isExpanded: item.isExpanded || false, onBhToggle: () => this.handleMultiLevelToggle(item.id), onBhChildClick: (e) => this.handleMultiLevelChildClick(item.id, e.detail) })))))));
    }
    static get watchers() { return {
        "navigationItems": ["handleNavigationItemsChange"]
    }; }
    static get style() { return bhPageNavigationCss; }
}, [769, "bh-page-navigation", {
        "navTitle": [1, "nav-title"],
        "navigationItems": [16],
        "items": [32]
    }, undefined, {
        "navigationItems": ["handleNavigationItemsChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-page-navigation", "bh-button", "bh-loader-spinner", "bh-page-navigation-child", "bh-page-navigation-multi-level", "bh-page-navigation-single-level"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-page-navigation":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhPageNavigation$1);
            }
            break;
        case "bh-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "bh-loader-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "bh-page-navigation-child":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "bh-page-navigation-multi-level":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bh-page-navigation-single-level":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const BhPageNavigation = BhPageNavigation$1;
const defineCustomElement = defineCustomElement$1;

export { BhPageNavigation, defineCustomElement };
//# sourceMappingURL=bh-page-navigation.js.map

//# sourceMappingURL=bh-page-navigation.js.map