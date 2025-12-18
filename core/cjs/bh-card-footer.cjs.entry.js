'use strict';

var index = require('./index-DQwSUT6k.js');

const bhCardFooterCss = ":host{display:block}.card-footer{display:flex;flex-direction:column;gap:var(--spacing-xs);background:var(--color-white)}.card-footer-divider{height:1px;background:var(--color-neutral-200)}.card-footer-content{display:flex;align-items:center;gap:var(--spacing-md);padding:var(--spacing-lg) var(--spacing-xl)}.card-footer-align-left{justify-content:flex-start}.card-footer-align-right{justify-content:flex-end}.card-footer-align-space-between{justify-content:space-between}.card-footer-primary-actions{display:flex;flex:1 0 0;align-items:center;gap:var(--spacing-none);min-width:0}.card-footer-secondary-actions{display:flex;align-items:center;gap:var(--spacing-md)}.card-footer-primary-actions:empty,.card-footer-secondary-actions:empty{display:none}";

const BhCardFooter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Whether to show the divider above the footer
     */
    showDivider = true;
    /**
     * Alignment of the footer content
     */
    alignment = 'space-between';
    render() {
        const footerContentClasses = {
            'card-footer-content': true,
            [`card-footer-align-${this.alignment}`]: true,
        };
        return (index.h(index.Host, { key: '27230a36e6bafcbb61bdac3bc0bcebbd550e70c8' }, index.h("div", { key: '1f0088fbe2a962080e5db856eb534029ed94d8e2', class: "card-footer" }, this.showDivider && index.h("div", { key: 'f320e028a9c4675b151547f6e368f67910e87d85', class: "card-footer-divider" }), index.h("div", { key: '9f35426a461e248e09de3c5e9eca23e7d63d9f08', class: footerContentClasses }, index.h("div", { key: 'd1d17256b3aa704bb898f711519c96405a7927af', class: "card-footer-primary-actions" }, index.h("slot", { key: '5f18da8ec38e3a2e2237a3bd4d1269686514047d', name: "primary-actions" })), index.h("div", { key: '0754da91faf75928a1070a01960f41395f0387dc', class: "card-footer-secondary-actions" }, index.h("slot", { key: '2ffc5290e3499d62e72fd1398b44811d0f0970ba', name: "secondary-actions" }))))));
    }
};
BhCardFooter.style = bhCardFooterCss;

exports.bh_card_footer = BhCardFooter;
//# sourceMappingURL=bh-card-footer.entry.cjs.js.map
