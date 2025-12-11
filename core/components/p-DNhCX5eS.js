import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-9a7sQzad.js';
import { d as defineCustomElement$3 } from './p-DTgHvmlL.js';
import { d as defineCustomElement$2 } from './p-Bbo_Dwmk.js';
import { d as defineCustomElement$1 } from './p-B4TBDBoW.js';

const bhPageNavigationMultiLevelCss = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'); @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap'); :root{--color-white:hsl(0, 0%, 100%);--color-black:hsl(0, 0%, 0%);--color-transparent:hsla(0, 0%, 100%, 0);--color-neutral-25:hsl(240, 20%, 99%);--color-neutral-50:hsl(240, 20%, 98%);--color-neutral-100:hsl(240, 17%, 95%);--color-neutral-200:hsl(227, 25%, 89%);--color-neutral-300:hsl(224, 24%, 78%);--color-neutral-400:hsl(226, 24%, 59%);--color-neutral-500:hsl(226, 24%, 48%);--color-neutral-600:hsl(226, 24%, 38%);--color-neutral-700:hsl(226, 24%, 25%);--color-neutral-800:hsl(233, 33%, 10%);--color-neutral-900:hsl(231, 32%, 8%);--color-neutral-950:hsl(231, 32%, 8%);--color-brand-25:hsl(220, 82%, 98%);--color-brand-50:hsl(222, 87%, 97%);--color-brand-100:hsl(221, 94%, 94%);--color-brand-200:hsl(221, 92%, 86%);--color-brand-300:hsl(224, 95%, 77%);--color-brand-400:hsl(224, 94%, 72%);--color-brand-500:hsl(230, 67%, 58%);--color-brand-600:hsl(230, 69%, 48%);--color-brand-700:hsl(230, 75%, 34%);--color-brand-800:hsl(243, 86%, 44%);--color-brand-900:hsl(237, 69%, 24%);--color-brand-950:hsl(237, 61%, 20%);--color-error-25:hsl(12, 100%, 99%);--color-error-50:hsl(5, 86%, 97%);--color-error-100:hsl(4, 93%, 94%);--color-error-200:hsl(3, 96%, 89%);--color-error-300:hsl(4, 96%, 80%);--color-error-400:hsl(4, 92%, 69%);--color-error-500:hsl(4, 86%, 58%);--color-error-600:hsl(4, 74%, 49%);--color-error-700:hsl(4, 76%, 40%);--color-error-800:hsl(4, 72%, 33%);--color-error-900:hsl(8, 65%, 29%);--color-error-950:hsl(8, 75%, 19%);--color-warning-25:hsl(42, 100%, 98%);--color-warning-50:hsl(45, 100%, 96%);--color-warning-100:hsl(45, 96%, 89%);--color-warning-200:hsl(44, 98%, 77%);--color-warning-300:hsl(42, 99%, 65%);--color-warning-400:hsl(39, 98%, 56%);--color-warning-500:hsl(34, 94%, 50%);--color-warning-600:hsl(28, 97%, 44%);--color-warning-700:hsl(22, 92%, 37%);--color-warning-800:hsl(19, 84%, 31%);--color-warning-900:hsl(18, 79%, 27%);--color-warning-950:hsl(17, 79%, 17%);--color-success-25:hsl(142, 80%, 98%);--color-success-50:hsl(145, 81%, 96%);--color-success-100:hsl(140, 80%, 90%);--color-success-200:hsl(144, 78%, 80%);--color-success-300:hsl(148, 63%, 67%);--color-success-400:hsl(150, 57%, 54%);--color-success-500:hsl(152, 77%, 39%);--color-success-600:hsl(153, 91%, 30%);--color-success-700:hsl(155, 90%, 24%);--color-success-800:hsl(155, 84%, 20%);--color-success-900:hsl(156, 83%, 16%);--color-success-950:hsl(157, 82%, 11%);--font-inter:'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI',\n    Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n    'Liberation Mono', 'Courier New', monospace;--weight-regular:400;--weight-medium:500;--weight-semibold:600;--weight-bold:700;--text-xl-size:1.25rem;--text-lg-size:1.125rem;--text-md-size:1rem;--text-sm-size:0.875rem;--text-xs-size:0.75rem;--text-xl-line:1.875rem;--text-lg-line:1.75rem;--text-md-line:1.5rem;--text-sm-line:1.25rem;--text-xs-line:1.125rem;--spacing-none:0rem;--spacing-xxs:0.125rem;--spacing-xs:0.25rem;--spacing-sm:0.375rem;--spacing-md:0.5rem;--spacing-lg:0.75rem;--spacing-xl:1rem;--spacing-2xl:1.25rem;--spacing-3xl:1.5rem;--spacing-4xl:2rem;--spacing-5xl:2.5rem;--spacing-6xl:3rem;--radius-none:0rem;--radius-xxs:0.125rem;--radius-xs:0.25rem;--radius-sm:0.375rem;--radius-md:0.5rem;--radius-lg:0.625rem;--radius-xl:0.75rem;--radius-2xl:1rem;--radius-3xl:1.25rem;--radius-4xl:1.5rem;--radius-full:9999px;--shadow-xs:0px 1px 2px rgba(16, 24, 40, 0.05);--shadow-sm:0px 1px 3px rgba(16, 24, 40, 0.1),\n    0px 1px 2px rgba(16, 24, 40, 0.06);--shadow-md:0px 4px 8px -2px rgba(16, 24, 40, 0.1),\n    0px 2px 4px -2px rgba(16, 24, 40, 0.06);--shadow-lg:0px 12px 16px -4px rgba(16, 24, 40, 0.08),\n    0px 4px 6px -2px rgba(16, 24, 40, 0.03);--shadow-xl:0px 20px 24px -4px rgba(16, 24, 40, 0.08),\n    0px 8px 8px -4px rgba(16, 24, 40, 0.03);--icon-compensation-xs-btn:calc(var(--spacing-lg) - var(--spacing-xs));--icon-compensation-sm-btn:calc(var(--spacing-xl) - var(--spacing-xs));--icon-compensation-md-btn:calc(var(--spacing-xl) - var(--spacing-xs));--icon-compensation-lg-btn:calc(var(--spacing-xl) - var(--spacing-xs))}*,*::before,*::after{box-sizing:border-box}.material-symbols-outlined{font-family:'Material Symbols Outlined';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:'liga';-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased}:host{display:block}.page-navigation-multi-level{margin:var(--spacing-none) var(--spacing-xs)}.page-navigation-multi-level-parent{display:flex;align-items:center;padding:var(--spacing-lg);cursor:pointer;gap:var(--spacing-md);position:relative;transition:all 0.15s ease;min-height:40px;max-height:44px;box-sizing:border-box;border-radius:var(--radius-sm);background-color:transparent;border:1px solid transparent}.page-navigation-multi-level.has-active-child .page-navigation-multi-level-parent{background-color:transparent;border:1px solid transparent}.page-navigation-multi-level-parent:hover{background-color:var(--color-neutral-50) !important}.page-navigation-children{margin-top:var(--spacing-xs);margin-bottom:var(--spacing-xs);position:relative;margin-left:var(--spacing-xl);display:flex;flex-direction:column;gap:var(--spacing-xs);max-height:1000px;opacity:1;transition:max-height 0.4s cubic-bezier(0.08, 0.52, 0.52, 1),\n    opacity 0.4s cubic-bezier(0.08, 0.52, 0.52, 1),\n    margin 0.4s cubic-bezier(0.08, 0.52, 0.52, 1)}.page-navigation-children.collapsed{max-height:0;opacity:0;margin-top:0;margin-bottom:0}.page-navigation-children::before{content:'';position:absolute;left:0;top:-2px;height:calc(100% + 4px);width:2px;background-color:var(--color-neutral-200);margin-left:var(--spacing-sm);z-index:2}.page-navigation-children.animate-slide-down-enter{animation:slideDownEnter 0.15s ease-out forwards}.page-navigation-children.animate-slide-down-exit{animation:slideDownExit 0.15s ease-out forwards}@keyframes slideDownEnter{from{opacity:0;max-height:0;transform:translateY(-10px)}to{opacity:1;max-height:1000px;transform:translateY(0)}}@keyframes slideDownExit{from{opacity:1;max-height:1000px;transform:translateY(0)}to{opacity:0;max-height:0;transform:translateY(-10px)}}.page-navigation-item-content{display:flex;align-items:center;gap:var(--spacing-md);width:100%}.page-navigation-item-icon{flex-shrink:0;color:var(--color-neutral-600);font-size:20px;width:20px;height:20px;transition:color 0.15s ease}.page-navigation-animate-smooth{transform-origin:top center;transition:all var(--animation-duration-normal, 0.2s) var(--animation-ease-enter, ease)}.page-navigation-chevron-icon{flex-shrink:0;color:var(--color-neutral-600);font-size:20px;width:20px;height:20px;transition:color 0.15s ease, transform var(--animation-duration-fast, 0.1s) var(--animation-ease-smooth, ease)}.page-navigation-chevron-icon.expanded{transform:rotate(180deg)}.page-navigation-multi-level.has-active-child .page-navigation-item-icon{color:var(--color-neutral-900)}.page-navigation-item-label{font-family:var(--font-inter);font-size:14px;font-weight:500;line-height:20px;color:var(--color-neutral-600);flex:1;transition:all 0.15s ease}.page-navigation-multi-level.has-active-child .page-navigation-item-label{color:var(--color-neutral-900);font-weight:600}";

const BhPageNavigationMultiLevel = /*@__PURE__*/ proxyCustomElement(class BhPageNavigationMultiLevel extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.bhToggle = createEvent(this, "bhToggle");
        this.bhChildClick = createEvent(this, "bhChildClick");
        this.bhAddClick = createEvent(this, "bhAddClick");
    }
    /**
     * Label text for the navigation item
     */
    label;
    /**
     * Material icon name
     */
    icon = 'radio_button_unchecked';
    /**
     * Optional badge text/number to display
     */
    badge;
    /**
     * Child navigation items
     */
    childItems = [];
    /**
     * Whether the item is expanded to show children
     */
    isExpanded = false;
    /**
     * Internal state for hover
     */
    isHovered = false;
    /**
     * Internal state for animation
     */
    isAnimating = false;
    /**
     * Animation class
     */
    animationClass = '';
    /**
     * Event emitted when the parent item is clicked (to toggle expansion)
     */
    bhToggle;
    /**
     * Event emitted when a child item is clicked
     */
    bhChildClick;
    /**
     * Event emitted when add button is clicked
     */
    bhAddClick;
    handleExpandedChange(newValue) {
        if (newValue) {
            this.isAnimating = true;
            this.animationClass = 'animate-slide-down-enter';
        }
        else if (this.isAnimating) {
            this.animationClass = 'animate-slide-down-exit';
            setTimeout(() => {
                this.isAnimating = false;
                this.animationClass = '';
            }, 150);
        }
    }
    get hasActiveChild() {
        return this.childItems.some(child => child.isActive);
    }
    handleParentClick = () => {
        this.bhToggle.emit();
    };
    handleChildClick = (index) => {
        this.bhChildClick.emit(index);
    };
    handleAddClick = (e) => {
        e.stopPropagation();
        this.bhAddClick.emit();
    };
    getItemClasses() {
        return {
            'page-navigation-multi-level': true,
            'page-navigation-animate-smooth': true,
            'has-active-child': this.hasActiveChild,
            'expanded': this.isExpanded,
        };
    }
    render() {
        return (h(Host, { key: '15c1b2bbe0ddf13eb25d424ce7c60b281547175e' }, h("div", { key: '6a2ab39d69b4dc007c52cc0af63f39b4f8bf4ee8', class: this.getItemClasses() }, h("div", { key: '3796f0b3fad7ef3f0fd29bc8b8e90738b5165bbf', class: "page-navigation-multi-level-parent", onClick: this.handleParentClick, onMouseEnter: () => (this.isHovered = true), onMouseLeave: () => (this.isHovered = false) }, h("div", { key: '5ae04be6a630fcf8f1f25245ee8e8f5bfde6e27e', class: "page-navigation-item-content" }, !this.isHovered && (h("span", { key: 'e3893980a51628c19f2667d4cbd76958d1b67cff', class: "page-navigation-item-icon material-symbols-outlined" }, this.icon)), this.isHovered && (h("span", { key: '4429219610bf3dbeb1de38ef6f4b3734b3f521da', class: {
                'page-navigation-chevron-icon': true,
                'material-symbols-outlined': true,
                'expanded': this.isExpanded,
            } }, "expand_more")), h("span", { key: '4a81f12b1b2e0ec1e0784858f99845ad4dc3aa62', class: "page-navigation-item-label" }, this.label), h("bh-button", { key: 'bcadba2dff591857aafaaa434d06e97b0727b635', hierarchy: "tertiary", icon: "only", size: "xs", iconName: "add", onClick: this.handleAddClick }))), (this.isExpanded || this.isAnimating) && (h("div", { key: 'd99ed38a4fe97757f660c281b6e34c36f6837d87', class: `page-navigation-children ${this.animationClass}` }, this.childItems.map((child, index) => (h("bh-page-navigation-child", { key: index, label: child.label, badge: child.badge, showBadge: child.showBadge, isActive: child.isActive, onBhItemClick: () => this.handleChildClick(index) }))))))));
    }
    static get watchers() { return {
        "isExpanded": ["handleExpandedChange"]
    }; }
    static get style() { return bhPageNavigationMultiLevelCss; }
}, [769, "bh-page-navigation-multi-level", {
        "label": [1],
        "icon": [1],
        "badge": [8],
        "childItems": [16],
        "isExpanded": [1028, "is-expanded"],
        "isHovered": [32],
        "isAnimating": [32],
        "animationClass": [32]
    }, undefined, {
        "isExpanded": ["handleExpandedChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-page-navigation-multi-level", "bh-button", "bh-loader-spinner", "bh-page-navigation-child"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-page-navigation-multi-level":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhPageNavigationMultiLevel);
            }
            break;
        case "bh-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bh-loader-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "bh-page-navigation-child":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}
defineCustomElement();

export { BhPageNavigationMultiLevel as B, defineCustomElement as d };
//# sourceMappingURL=p-DNhCX5eS.js.map

//# sourceMappingURL=p-DNhCX5eS.js.map