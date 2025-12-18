'use strict';

var index = require('./index-DQwSUT6k.js');

const bhCardHeaderCss = ":host{display:block}.card-header{display:flex;flex-direction:column;gap:var(--spacing-lg);background:var(--color-white)}.card-header-content{display:flex;gap:var(--spacing-md);align-items:flex-start;padding:var(--spacing-lg) var(--spacing-xl) 0 var(--spacing-xl)}.card-header-text-container{display:flex;flex-direction:column;flex:1 0 0;gap:var(--spacing-xxs);min-width:0}.card-header-title-row{display:flex;align-items:center;gap:var(--spacing-lg)}.card-header-title{font-family:var(--font-inter);font-size:var(--text-md-size);font-weight:var(--weight-semibold);line-height:var(--text-md-line);color:var(--color-neutral-900)}.card-header-supporting-row{display:flex;align-items:center;gap:var(--spacing-lg);width:100%}.card-header-spacer{width:32px;flex-shrink:0}.card-header-supporting-text{flex:1 0 0;font-family:var(--font-inter);font-size:var(--text-sm-size);font-weight:var(--weight-regular);line-height:var(--text-sm-line);color:var(--color-neutral-500);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.card-header-divider{height:1px;background:var(--color-neutral-200)}";

const BhCardHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bhDropdownClick = index.createEvent(this, "bhDropdownClick");
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
        return (index.h(index.Host, { key: '58db2d5c1ca47600da5c07ea2750ecb1c2f2a4a7' }, index.h("div", { key: '70cbc0d9779b1f5e75a774f40715001c904f2670', class: "card-header" }, index.h("div", { key: 'fb602ff3a92aa06d51df870ea4e5b3a6f11e9309', class: "card-header-content" }, index.h("div", { key: '00a315a07bc10dc72c36cbc79e0d24c9570dcdc7', class: "card-header-text-container" }, index.h("div", { key: '42d15bc872bf00216be3fcff6bee772bcab7b14e', class: "card-header-title-row" }, this.showFeaturedIcon && (index.h("bh-featured-icon", { key: 'd9294c5035425329806b0b575cf4799defed83f9', size: "sm", icon: this.featuredIcon, iconStyle: this.featuredIconStyle, color: this.featuredIconColor })), this.showTitle && (index.h("span", { key: '96399bb209d70a9694fab80e0e0c4ece3025ade5', class: "card-header-title" }, this.headerTitle)), this.showBadge && this.badgeText && (index.h("bh-badge", { key: 'e030d01179a3e0cc3dbbc972a7251dd49a661533', variant: "blue", size: "sm", emphasis: "medium", label: this.badgeText }))), this.showSupportingText && (index.h("div", { key: 'e4a1253d649a77d9d6a5f12313f279e18b509304', class: "card-header-supporting-row" }, this.showFeaturedIcon && index.h("div", { key: 'bf5f6482b25ad7c35f6f42f18001064f1a5f8be9', class: "card-header-spacer" }), index.h("span", { key: '256fa43537b957a80190ce8683484cbaef0ade56', class: "card-header-supporting-text" }, this.supportingText)))), this.showDropdown && (index.h("bh-button-icon", { key: 'ab3df5c4b4fd8dbeb56c1860d2b38334ed6fa29e', hierarchy: "quaternary", size: "sm", iconName: "more_vert", ariaLabel: "More options", onBhClick: this.handleDropdownClick }))), index.h("slot", { key: '836d525ba14a3f7020fecdcf3660e2e50353a9de', name: "tabs" }), this.showDivider && index.h("div", { key: '9b96114d09fb987fe710de8a6438141c380c07e3', class: "card-header-divider" }))));
    }
};
BhCardHeader.style = bhCardHeaderCss;

exports.bh_card_header = BhCardHeader;
//# sourceMappingURL=bh-card-header.entry.cjs.js.map
