'use strict';

var index = require('./index-tZqSQc8E.js');

const bhCardCss = ":host{display:block}.card{display:flex;flex-direction:column;background:var(--color-white);border:1px solid var(--color-neutral-200);border-radius:var(--radius-xl);overflow:hidden;font-family:var(--font-inter)}.card-header-slot{display:contents}.card-content{display:flex;flex-direction:column;flex:1 0 auto;padding:var(--spacing-lg) var(--spacing-xl);gap:var(--spacing-none)}.card-footer-slot{display:contents}.card-content-placeholder{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;gap:var(--spacing-md);padding:var(--spacing-xl);background:var(--color-purple-50, #f5f3ff);border:1px dashed var(--color-purple-500, #7c3aed);border-radius:var(--radius-xl);min-height:100%}.card-placeholder-icon{font-size:32px;color:var(--color-purple-500, #7c3aed)}.card-placeholder-text{font-size:var(--font-size-sm);font-weight:var(--font-weight-medium);color:var(--color-purple-700, #6d28d9);text-decoration:underline;text-align:center}";

const BhCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    /**
     * Whether to show the header section
     */
    showHeader = true;
    /**
     * Whether to show the footer section
     */
    showFooter = true;
    /**
     * Minimum height of the content area in pixels
     */
    contentMinHeight = 200;
    /**
     * Placeholder text shown when no content is provided
     */
    placeholderText = 'Card content slot';
    hasContent = false;
    componentWillLoad() {
        this.checkForContent();
    }
    checkForContent() {
        const children = Array.from(this.el.childNodes).filter((node) => (node.nodeType === Node.ELEMENT_NODE &&
            !node.hasAttribute('slot')) ||
            (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()));
        this.hasContent = children.length > 0;
    }
    render() {
        const contentStyle = {
            minHeight: `${this.contentMinHeight}px`,
        };
        return (index.h(index.Host, { key: '5bbe75e2d4ace932edc5a8d32fb450e27e67cdbe' }, index.h("div", { key: 'ddb19c134e32a35bc2b8a4b57ed9862faf47a53b', class: "card" }, this.showHeader && (index.h("div", { key: '315478a2c488b5e933c49966bccaccf8313e58b5', class: "card-header-slot" }, index.h("slot", { key: 'f3de383b3818feb9883c25ff150c52f0e347de86', name: "header" }))), index.h("div", { key: '4c6b62db9ffa61f2e0133c2af7a29a090d9c54a5', class: "card-content", style: contentStyle }, index.h("slot", { key: '969443dcc57fe724cbb3f1d6e1c35c8cc0312794' }), !this.hasContent && (index.h("div", { key: '0c5e02cf39bec9c7c1ce2ef223b1b4b0df74a372', class: "card-content-placeholder" }, index.h("span", { key: '0a89b768f29453dc251c3c3402ea8029bd13aaeb', class: "card-placeholder-text" }, this.placeholderText)))), this.showFooter && (index.h("div", { key: 'f4a2bb6df865bd1abb8f5da2d686906bddcc4c08', class: "card-footer-slot" }, index.h("slot", { key: '8e643371cbbbf56fb3fb87ccda3b5897f8f914bd', name: "footer" }))))));
    }
};
BhCard.style = bhCardCss;

exports.bh_card = BhCard;
//# sourceMappingURL=bh-card.entry.cjs.js.map
