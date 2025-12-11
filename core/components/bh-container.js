import { p as proxyCustomElement, H, h } from './p-9a7sQzad.js';

const bhContainerCss = ":host{display:block}.container{display:flex;flex-direction:column;gap:var(--spacing-2xl);padding:var(--spacing-2xl);background:var(--color-white);border:1px solid var(--color-neutral-200);border-radius:var(--radius-xl);width:fit-content;font-family:var(--font-inter)}.container-with-footer{border-bottom:none;border-radius:var(--radius-xl) var(--radius-xl) var(--radius-none) var(--radius-none)}";

const BhContainer$1 = /*@__PURE__*/ proxyCustomElement(class BhContainer extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    /**
     * Whether the container has a footer attached (removes bottom border radius and border)
     */
    withFooter = false;
    render() {
        const containerClasses = {
            'container': true,
            'container-with-footer': this.withFooter,
        };
        return (h("div", { key: '5db48ed0eb53a7152f5a4b85bef751aaad74c822', class: containerClasses }, h("slot", { key: '49dee6c4825466b602f2adf88304f8aeb17d9bbe' })));
    }
    static get style() { return bhContainerCss; }
}, [769, "bh-container", {
        "withFooter": [4, "with-footer"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-container"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-container":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhContainer$1);
            }
            break;
    } });
}
defineCustomElement$1();

const BhContainer = BhContainer$1;
const defineCustomElement = defineCustomElement$1;

export { BhContainer, defineCustomElement };
//# sourceMappingURL=bh-container.js.map

//# sourceMappingURL=bh-container.js.map