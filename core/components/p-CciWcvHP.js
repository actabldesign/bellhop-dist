import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-9a7sQzad.js';
import { d as defineCustomElement$3 } from './p-NXL0pYS_.js';
import { d as defineCustomElement$2 } from './p-D3OkBDd3.js';
import { d as defineCustomElement$1 } from './p-D6cM-mvE.js';

const bhCardHeaderCss = ":host{display:block}.card-header{display:flex;flex-direction:column;gap:var(--spacing-lg);background:var(--color-white)}.card-header-content{display:flex;gap:var(--spacing-md);align-items:flex-start;padding:var(--spacing-lg) var(--spacing-xl) 0 var(--spacing-xl)}.card-header-text-container{display:flex;flex-direction:column;flex:1 0 0;gap:var(--spacing-xxs);min-width:0}.card-header-title-row{display:flex;align-items:center;gap:var(--spacing-lg)}.card-header-title{font-family:var(--font-inter);font-size:var(--text-md-size);font-weight:var(--weight-semibold);line-height:var(--text-md-line);color:var(--color-neutral-900)}.card-header-supporting-row{display:flex;align-items:center;gap:var(--spacing-lg);width:100%}.card-header-spacer{width:32px;flex-shrink:0}.card-header-supporting-text{flex:1 0 0;font-family:var(--font-inter);font-size:var(--text-sm-size);font-weight:var(--weight-regular);line-height:var(--text-sm-line);color:var(--color-neutral-500);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.card-header-divider{height:1px;background:var(--color-neutral-200)}";

const BhCardHeader = /*@__PURE__*/ proxyCustomElement(class BhCardHeader extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.bhDropdownClick = createEvent(this, "bhDropdownClick");
    }
    /**
     * Whether to show the featured icon
     */
    showFeaturedIcon = true;
    /**
     * The Material Symbol icon name for the featured icon
     */
    featuredIcon = 'star';
    /**
     * The style of the featured icon
     */
    featuredIconStyle = 'outlined';
    /**
     * The color of the featured icon
     */
    featuredIconColor = 'gray';
    /**
     * Whether to show the title
     */
    showTitle = true;
    /**
     * The title text
     */
    headerTitle = 'Card title';
    /**
     * Whether to show the badge
     */
    showBadge = false;
    /**
     * The badge text
     */
    badgeText = '';
    /**
     * Whether to show the supporting text
     */
    showSupportingText = true;
    /**
     * The supporting text (description)
     */
    supportingText = 'Card description';
    /**
     * Whether to show the dropdown menu button
     */
    showDropdown = true;
    /**
     * Whether to show the divider
     */
    showDivider = true;
    /**
     * Emitted when the dropdown button is clicked
     */
    bhDropdownClick;
    handleDropdownClick = () => {
        this.bhDropdownClick.emit();
    };
    render() {
        return (h(Host, { key: '58db2d5c1ca47600da5c07ea2750ecb1c2f2a4a7' }, h("div", { key: '70cbc0d9779b1f5e75a774f40715001c904f2670', class: "card-header" }, h("div", { key: 'fb602ff3a92aa06d51df870ea4e5b3a6f11e9309', class: "card-header-content" }, h("div", { key: '00a315a07bc10dc72c36cbc79e0d24c9570dcdc7', class: "card-header-text-container" }, h("div", { key: '42d15bc872bf00216be3fcff6bee772bcab7b14e', class: "card-header-title-row" }, this.showFeaturedIcon && (h("bh-featured-icon", { key: 'd9294c5035425329806b0b575cf4799defed83f9', size: "sm", icon: this.featuredIcon, iconStyle: this.featuredIconStyle, color: this.featuredIconColor })), this.showTitle && (h("span", { key: '96399bb209d70a9694fab80e0e0c4ece3025ade5', class: "card-header-title" }, this.headerTitle)), this.showBadge && this.badgeText && (h("bh-badge", { key: 'e030d01179a3e0cc3dbbc972a7251dd49a661533', variant: "blue", size: "sm", emphasis: "medium", label: this.badgeText }))), this.showSupportingText && (h("div", { key: 'e4a1253d649a77d9d6a5f12313f279e18b509304', class: "card-header-supporting-row" }, this.showFeaturedIcon && h("div", { key: 'bf5f6482b25ad7c35f6f42f18001064f1a5f8be9', class: "card-header-spacer" }), h("span", { key: '256fa43537b957a80190ce8683484cbaef0ade56', class: "card-header-supporting-text" }, this.supportingText)))), this.showDropdown && (h("bh-button-icon", { key: 'ab3df5c4b4fd8dbeb56c1860d2b38334ed6fa29e', hierarchy: "quaternary", size: "sm", iconName: "more_vert", ariaLabel: "More options", onBhClick: this.handleDropdownClick }))), h("slot", { key: '836d525ba14a3f7020fecdcf3660e2e50353a9de', name: "tabs" }), this.showDivider && h("div", { key: '9b96114d09fb987fe710de8a6438141c380c07e3', class: "card-header-divider" }))));
    }
    static get style() { return bhCardHeaderCss; }
}, [769, "bh-card-header", {
        "showFeaturedIcon": [4, "show-featured-icon"],
        "featuredIcon": [1, "featured-icon"],
        "featuredIconStyle": [1, "featured-icon-style"],
        "featuredIconColor": [1, "featured-icon-color"],
        "showTitle": [4, "show-title"],
        "headerTitle": [1, "header-title"],
        "showBadge": [4, "show-badge"],
        "badgeText": [1, "badge-text"],
        "showSupportingText": [4, "show-supporting-text"],
        "supportingText": [1, "supporting-text"],
        "showDropdown": [4, "show-dropdown"],
        "showDivider": [4, "show-divider"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-card-header", "bh-badge", "bh-button-icon", "bh-featured-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-card-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhCardHeader);
            }
            break;
        case "bh-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bh-button-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "bh-featured-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}
defineCustomElement();

export { BhCardHeader as B, defineCustomElement as d };
//# sourceMappingURL=p-CciWcvHP.js.map

//# sourceMappingURL=p-CciWcvHP.js.map