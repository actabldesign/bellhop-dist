import { h } from "@stencil/core";
export class BhLoaderSpinner {
    /** Loader size */
    size = 'md';
    /** Loader color variant - use 'white' for dark surfaces like buttons */
    variant = 'default';
    /** Whether to show as overlay */
    overlay = false;
    /** Message to show in overlay mode */
    overlayMessage = '';
    /** Whether to show message */
    showMessage = false;
    /** Message text */
    message = 'Loading...';
    renderSpinner() {
        const gradientId = this.variant === 'white' ? 'bellhop-gradient-white' : 'bellhop-gradient';
        return (h("div", { class: `loader-spinner variant-${this.variant}` }, h("div", { class: "spinner-gradient" }, h("svg", { class: "gradient-svg", viewBox: "0 0 50 50" }, h("defs", null, this.variant === 'white' ? (h("linearGradient", { id: "bellhop-gradient-white", x1: "0%", y1: "0%", x2: "0%", y2: "100%" }, h("stop", { offset: "0%", style: { stopColor: 'rgba(255, 255, 255, 1)' } }), h("stop", { offset: "50%", style: { stopColor: 'rgba(255, 255, 255, 0.8)' } }), h("stop", { offset: "100%", style: { stopColor: 'rgba(255, 255, 255, 0.5)' } }))) : (h("linearGradient", { id: "bellhop-gradient", x1: "0%", y1: "0%", x2: "0%", y2: "100%" }, h("stop", { offset: "0%", style: { stopColor: 'var(--color-accent-300)' } }), h("stop", { offset: "51%", style: { stopColor: 'var(--color-brand-400)' } }), h("stop", { offset: "100%", style: { stopColor: 'var(--color-brand-600)' } })))), h("circle", { class: "gradient-path", cx: "25", cy: "25", r: "20", fill: "none", stroke: `url(#${gradientId})`, "stroke-width": "4", "stroke-linecap": "round" })))));
    }
    renderMessage(isOverlay) {
        const shouldShowMessage = isOverlay
            ? (this.showMessage || this.overlayMessage)
            : this.showMessage;
        if (!shouldShowMessage)
            return null;
        return (h("div", { class: "loader-message" }, isOverlay ? (this.overlayMessage || this.message) : this.message));
    }
    render() {
        if (this.overlay) {
            return (h("div", { class: "loader-overlay" }, h("div", { class: "loader-overlay-content" }, h("div", { class: `loader-container size-${this.size}` }, this.renderSpinner()), this.renderMessage(true))));
        }
        return (h("div", { class: `loader-container size-${this.size}` }, this.renderSpinner(), this.renderMessage(false)));
    }
    static get is() { return "bh-loader-spinner"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-loader-spinner.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-loader-spinner.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "LoaderSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xl\"",
                    "references": {
                        "LoaderSize": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-loader-spinner/bh-loader-spinner.tsx",
                            "id": "src/components/bh-loader-spinner/bh-loader-spinner.tsx::LoaderSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Loader size"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'md'"
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "LoaderVariant",
                    "resolved": "\"default\" | \"white\"",
                    "references": {
                        "LoaderVariant": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-loader-spinner/bh-loader-spinner.tsx",
                            "id": "src/components/bh-loader-spinner/bh-loader-spinner.tsx::LoaderVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Loader color variant - use 'white' for dark surfaces like buttons"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "variant",
                "defaultValue": "'default'"
            },
            "overlay": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether to show as overlay"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "overlay",
                "defaultValue": "false"
            },
            "overlayMessage": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Message to show in overlay mode"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "overlay-message",
                "defaultValue": "''"
            },
            "showMessage": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether to show message"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-message",
                "defaultValue": "false"
            },
            "message": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Message text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "message",
                "defaultValue": "'Loading...'"
            }
        };
    }
}
//# sourceMappingURL=bh-loader-spinner.js.map
