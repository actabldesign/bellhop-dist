'use strict';

var index = require('./index-DQwSUT6k.js');

const bhFeaturedIconCss = ":host{display:inline-block}.featured-icon{display:inline-flex;align-items:center;justify-content:center;transition:all 0.2s ease}.featured-icon-sm{width:32px;height:32px;border-radius:6px}.featured-icon-md{width:40px;height:40px;border-radius:8px}.featured-icon-lg{width:48px;height:48px;border-radius:10px}.featured-icon-xl{width:56px;height:56px;border-radius:12px}.icon-sm{font-size:var(--icon-size-xs);width:var(--icon-size-xs);height:var(--icon-size-xs);line-height:1}.icon-md{font-size:var(--icon-size-md);width:var(--icon-size-md);height:var(--icon-size-md);line-height:1}.icon-lg{font-size:var(--icon-size-lg);width:var(--icon-size-lg);height:var(--icon-size-lg);line-height:1}.icon-xl{font-size:var(--icon-size-2xl);width:var(--icon-size-2xl);height:var(--icon-size-2xl);line-height:1}.featured-icon-brand.featured-icon-outlined{background-color:transparent;border:1px solid var(--color-neutral-200)}.featured-icon-brand.featured-icon-outlined .material-symbols-outlined{color:var(--color-brand-600)}.featured-icon-gray.featured-icon-outlined{border:1px solid var(--color-neutral-200)}.featured-icon-gray.featured-icon-outlined .material-symbols-outlined{color:var(--color-neutral-600)}.featured-icon-error.featured-icon-outlined{border:1px solid var(--color-neutral-200)}.featured-icon-error.featured-icon-outlined .material-symbols-outlined{color:var(--color-error-600)}.featured-icon-warning.featured-icon-outlined{border:1px solid var(--color-neutral-200)}.featured-icon-warning.featured-icon-outlined .material-symbols-outlined{color:var(--color-warning-600)}.featured-icon-success.featured-icon-outlined{border:1px solid var(--color-neutral-200)}.featured-icon-success.featured-icon-outlined .material-symbols-outlined{color:var(--color-success-600)}.featured-icon-highlight.featured-icon-outlined{border:1px solid var(--color-neutral-200)}.featured-icon-highlight.featured-icon-outlined .material-symbols-outlined{color:var(--color-purple-600)}.featured-icon-brand.featured-icon-filled{background-color:var(--color-brand-100);border:none}.featured-icon-brand.featured-icon-filled .material-symbols-outlined{color:var(--color-brand-600)}.featured-icon-gray.featured-icon-filled{background-color:var(--color-neutral-100);border:none}.featured-icon-gray.featured-icon-filled .material-symbols-outlined{color:var(--color-neutral-600)}.featured-icon-error.featured-icon-filled{background-color:var(--color-error-100);border:none}.featured-icon-error.featured-icon-filled .material-symbols-outlined{color:var(--color-error-600)}.featured-icon-warning.featured-icon-filled{background-color:var(--color-warning-200);border:none}.featured-icon-warning.featured-icon-filled .material-symbols-outlined{color:var(--color-warning-600)}.featured-icon-success.featured-icon-filled{background-color:var(--color-success-100);border:none}.featured-icon-success.featured-icon-filled .material-symbols-outlined{color:var(--color-success-600)}.featured-icon-highlight.featured-icon-filled{background-color:var(--color-purple-200);border:none}.featured-icon-highlight.featured-icon-filled .material-symbols-outlined{color:var(--color-purple-600)}.material-symbols-outlined{font-family:'Material Symbols Outlined';font-variation-settings:'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;user-select:none}";

const BhFeaturedIcon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * The size of the featured icon
     */
    size = 'md';
    /**
     * The color theme of the featured icon
     */
    color = 'gray';
    /**
     * The style variant (outlined or filled)
     */
    iconStyle = 'outlined';
    /**
     * The Material Symbol icon name
     */
    icon = 'star';
    render() {
        const containerClasses = {
            'featured-icon': true,
            [`featured-icon-${this.size}`]: true,
            [`featured-icon-${this.color}`]: true,
            [`featured-icon-${this.iconStyle}`]: true,
        };
        const iconClasses = `material-symbols-outlined icon-${this.size}`;
        return (index.h("div", { key: '93ed57fa603fa36d0eb2ddcfa83895f3b5969083', class: containerClasses, part: "container" }, index.h("span", { key: '5dd3699dba085ab2e9b8a2d76318edae8e1b8cba', class: iconClasses }, this.icon)));
    }
};
BhFeaturedIcon.style = bhFeaturedIconCss;

exports.bh_featured_icon = BhFeaturedIcon;
//# sourceMappingURL=bh-featured-icon.entry.cjs.js.map
