'use strict';

var index = require('./index-DQwSUT6k.js');

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
        return (index.h(index.Host, { key: '2f01aa3ee4b9cdeb1d5f0f16a961af880e11d0fb' }, index.h("div", { key: '4f4542a1f24dc9db216fef1e361efff54cb5f538', class: "card" }, this.showHeader && (index.h("div", { key: 'c290615fb8b36c965ac6a032963f2b4e78c22a29', class: "card-header-slot" }, index.h("slot", { key: '35d78f934a0a8486a62ff17897537cc0afd355a7', name: "header" }))), index.h("div", { key: 'bfd8a8827ea13baad0862ed5d962853ceed4be4e', class: "card-content", style: contentStyle }, index.h("slot", { key: 'b43aad6dfb675e4fd32f9614ba83f67aac264aa0' }), !this.hasContent && (index.h("div", { key: 'a9cf30bb2b1a9a0ab4baf6fa9d8514181f1e79c5', class: "card-content-placeholder" }, index.h("span", { key: '7d46bf5c2246cd8d9bd2d73695d9b55a1ba6112c', class: "card-placeholder-text" }, this.placeholderText)))), this.showFooter && (index.h("div", { key: '5588ba1dcc017c899909917f31961414dc4ffd9e', class: "card-footer-slot" }, index.h("slot", { key: 'ff28528d0090a67061fc7cd63f7df68662d908a8', name: "footer" }))))));
    }
};
BhCard.style = bhCardCss;

exports.bh_card = BhCard;
//# sourceMappingURL=bh-card.entry.cjs.js.map
