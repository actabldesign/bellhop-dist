import { p as proxyCustomElement, H, c as createEvent, h } from './p-9a7sQzad.js';
import { d as defineCustomElement$3 } from './p-DTgHvmlL.js';
import { d as defineCustomElement$2 } from './p-Bbo_Dwmk.js';

const bhContainerFooterCss = ".container-footer{background:var(--color-white);border:1px solid var(--color-neutral-200);border-top:1px solid var(--color-neutral-200);border-radius:var(--radius-none) var(--radius-none) var(--radius-xl)\n    var(--radius-xl);box-sizing:border-box;width:100%}.container-footer-content{display:flex;justify-content:flex-end;align-items:center;padding:var(--spacing-md) var(--spacing-2xl)}.container-footer-minimal .container-footer-content{padding:var(--spacing-sm) var(--spacing-2xl)}";

const BhContainerFooter$1 = /*@__PURE__*/ proxyCustomElement(class BhContainerFooter extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.bhButtonClick = createEvent(this, "bhButtonClick");
    }
    /**
     * Size variant of the footer
     */
    size = 'standard';
    /**
     * Label for the footer button
     */
    buttonLabel = 'View report';
    /**
     * Event emitted when the button is clicked
     */
    bhButtonClick;
    handleButtonClick = () => {
        this.bhButtonClick.emit();
    };
    render() {
        const footerClasses = {
            'container-footer': true,
            [`container-footer-${this.size}`]: true,
        };
        return (h("div", { key: '88f782bfc7a086e8facafa3450e19eb0b354e842', class: footerClasses }, h("div", { key: '02e63532e246742d155a5f74b4e8f777482711ca', class: "container-footer-content" }, h("bh-button", { key: '83aa00d05a1c0fa98fedca50724ce1fb3d293f8a', hierarchy: "quaternary", size: "sm", label: this.buttonLabel, onClick: this.handleButtonClick }))));
    }
    static get style() { return bhContainerFooterCss; }
}, [769, "bh-container-footer", {
        "size": [1],
        "buttonLabel": [1, "button-label"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-container-footer", "bh-button", "bh-loader-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-container-footer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhContainerFooter$1);
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
    } });
}
defineCustomElement$1();

const BhContainerFooter = BhContainerFooter$1;
const defineCustomElement = defineCustomElement$1;

export { BhContainerFooter, defineCustomElement };
//# sourceMappingURL=bh-container-footer.js.map

//# sourceMappingURL=bh-container-footer.js.map