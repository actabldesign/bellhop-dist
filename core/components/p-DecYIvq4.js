import { p as proxyCustomElement, H, c as createEvent, h } from './p-9a7sQzad.js';
import { d as defineCustomElement$2 } from './p-DTgHvmlL.js';
import { d as defineCustomElement$1 } from './p-Bbo_Dwmk.js';

const bhEmptyStateCss = ":host{display:block;font-family:var(\n    --font-inter,\n    'Inter',\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif\n  )}.empty-state{display:flex;flex-direction:column;align-items:center;gap:32px;padding:48px 24px;text-align:center}.empty-state-content{display:flex;flex-direction:column;align-items:center;gap:24px}.empty-state-illustration{display:flex;align-items:center;justify-content:center}.empty-state-illustration img{object-fit:contain}.empty-state-text{display:flex;flex-direction:column;align-items:center;gap:8px}.empty-state-title{font-size:var(--text-lg-size, 18px);font-weight:600;color:var(--color-neutral-900, #101828);margin:0;line-height:1.33}.empty-state-description{font-size:var(--text-sm-size, 14px);font-weight:400;color:var(--color-neutral-600, #475467);margin:0;line-height:1.43;max-width:400px}.empty-state-actions{display:flex;gap:12px;flex-wrap:wrap;justify-content:center}.material-symbols-outlined{font-family:'Material Symbols Outlined';font-weight:normal;font-style:normal;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:'liga';-webkit-font-smoothing:antialiased;font-variation-settings:'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24}";

const BhEmptyState = /*@__PURE__*/ proxyCustomElement(class BhEmptyState extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.bhPrimaryAction = createEvent(this, "bhPrimaryAction");
        this.bhSecondaryAction = createEvent(this, "bhSecondaryAction");
    }
    /**
     * Title text
     */
    emptyTitle = 'No items found';
    /**
     * Description text
     */
    description = 'There are no items to display at the moment.';
    /**
     * Size of the illustration
     */
    illustrationSize = 'md';
    /**
     * Path to the illustration SVG
     */
    illustrationPath = '';
    /**
     * Primary action button text
     */
    primaryActionText = '';
    /**
     * Primary action icon name
     */
    primaryActionIcon = '';
    /**
     * Secondary action button text
     */
    secondaryActionText = '';
    /**
     * Secondary action icon name
     */
    secondaryActionIcon = '';
    /**
     * Max width of the component
     */
    maxWidth = '512px';
    /**
     * Emitted when primary action is clicked
     */
    bhPrimaryAction;
    /**
     * Emitted when secondary action is clicked
     */
    bhSecondaryAction;
    handlePrimaryAction = () => {
        this.bhPrimaryAction.emit();
    };
    handleSecondaryAction = () => {
        this.bhSecondaryAction.emit();
    };
    getIllustrationDimensions() {
        switch (this.illustrationSize) {
            case 'sm':
                return { width: '120px', height: '120px' };
            case 'md':
                return { width: '200px', height: '200px' };
            case 'lg':
                return { width: '280px', height: '280px' };
            default:
                return { width: '200px', height: '200px' };
        }
    }
    render() {
        const dimensions = this.getIllustrationDimensions();
        const hasActions = this.primaryActionText || this.secondaryActionText;
        return (h("div", { key: 'd25e80c0d5a44b64857738218974a5ed2de4c666', class: "empty-state", style: { maxWidth: this.maxWidth }, part: "container" }, h("div", { key: 'ca13b3b4b7f3945a73bd32b0d17c6356642a2be6', class: "empty-state-content" }, this.illustrationPath && (h("div", { key: 'f193ab78011e2623904510e39bbd56a61cf89af3', class: "empty-state-illustration" }, h("img", { key: 'f8ed7362c0dc30d2e0c0f893915ffa35cee14f53', src: this.illustrationPath, alt: "Empty state illustration", style: { width: dimensions.width, height: dimensions.height } }))), h("div", { key: '771789a873d3ae8453cc53747c935995ffb02b88', class: "empty-state-text" }, h("h3", { key: 'c55280f9bbb70da172ccfe6f701359416cc56c16', class: "empty-state-title" }, this.emptyTitle), h("p", { key: '795a71c84acd99ab74c77ef08ed960ba675f224a', class: "empty-state-description" }, this.description))), hasActions && (h("div", { key: '8526717a12dbab631d874f2155411ebaf7908a29', class: "empty-state-actions" }, this.secondaryActionText && (h("bh-button", { key: 'b3aca034c568c021735bf1dd10543972352c316f', hierarchy: "secondary", size: "md", label: this.secondaryActionText, icon: this.secondaryActionIcon ? 'leading' : 'none', iconName: this.secondaryActionIcon, onBhClick: this.handleSecondaryAction })), this.primaryActionText && (h("bh-button", { key: '95bb81b7bf7669668d12427eedf1564f07266d72', hierarchy: "primary", size: "md", label: this.primaryActionText, icon: this.primaryActionIcon ? 'leading' : 'none', iconName: this.primaryActionIcon, onBhClick: this.handlePrimaryAction }))))));
    }
    static get style() { return bhEmptyStateCss; }
}, [769, "bh-empty-state", {
        "emptyTitle": [1, "empty-title"],
        "description": [1],
        "illustrationSize": [1, "illustration-size"],
        "illustrationPath": [1, "illustration-path"],
        "primaryActionText": [1, "primary-action-text"],
        "primaryActionIcon": [1, "primary-action-icon"],
        "secondaryActionText": [1, "secondary-action-text"],
        "secondaryActionIcon": [1, "secondary-action-icon"],
        "maxWidth": [1, "max-width"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-empty-state", "bh-button", "bh-loader-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-empty-state":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhEmptyState);
            }
            break;
        case "bh-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "bh-loader-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}
defineCustomElement();

export { BhEmptyState as B, defineCustomElement as d };
//# sourceMappingURL=p-DecYIvq4.js.map

//# sourceMappingURL=p-DecYIvq4.js.map