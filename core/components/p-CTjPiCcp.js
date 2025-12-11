import { p as proxyCustomElement, H, h, d as Host } from './p-9a7sQzad.js';

const bhCardFooterCss = ":host{display:block}.card-footer{display:flex;flex-direction:column;gap:var(--spacing-xs);background:var(--color-white)}.card-footer-divider{height:1px;background:var(--color-neutral-200)}.card-footer-content{display:flex;align-items:center;gap:var(--spacing-md);padding:var(--spacing-lg) var(--spacing-xl)}.card-footer-align-left{justify-content:flex-start}.card-footer-align-right{justify-content:flex-end}.card-footer-align-space-between{justify-content:space-between}.card-footer-primary-actions{display:flex;flex:1 0 0;align-items:center;gap:var(--spacing-none);min-width:0}.card-footer-secondary-actions{display:flex;align-items:center;gap:var(--spacing-md)}.card-footer-primary-actions:empty,.card-footer-secondary-actions:empty{display:none}";

const BhCardFooter = /*@__PURE__*/ proxyCustomElement(class BhCardFooter extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
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
        return (h(Host, { key: '27230a36e6bafcbb61bdac3bc0bcebbd550e70c8' }, h("div", { key: '1f0088fbe2a962080e5db856eb534029ed94d8e2', class: "card-footer" }, this.showDivider && h("div", { key: 'f320e028a9c4675b151547f6e368f67910e87d85', class: "card-footer-divider" }), h("div", { key: '9f35426a461e248e09de3c5e9eca23e7d63d9f08', class: footerContentClasses }, h("div", { key: 'd1d17256b3aa704bb898f711519c96405a7927af', class: "card-footer-primary-actions" }, h("slot", { key: '5f18da8ec38e3a2e2237a3bd4d1269686514047d', name: "primary-actions" })), h("div", { key: '0754da91faf75928a1070a01960f41395f0387dc', class: "card-footer-secondary-actions" }, h("slot", { key: '2ffc5290e3499d62e72fd1398b44811d0f0970ba', name: "secondary-actions" }))))));
    }
    static get style() { return bhCardFooterCss; }
}, [769, "bh-card-footer", {
        "showDivider": [4, "show-divider"],
        "alignment": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-card-footer"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-card-footer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhCardFooter);
            }
            break;
    } });
}
defineCustomElement();

export { BhCardFooter as B, defineCustomElement as d };
//# sourceMappingURL=p-CTjPiCcp.js.map

//# sourceMappingURL=p-CTjPiCcp.js.map