import { h, Host } from "@stencil/core";
export class BhCard {
    el;
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
        return (h(Host, { key: '5bbe75e2d4ace932edc5a8d32fb450e27e67cdbe' }, h("div", { key: 'ddb19c134e32a35bc2b8a4b57ed9862faf47a53b', class: "card" }, this.showHeader && (h("div", { key: '315478a2c488b5e933c49966bccaccf8313e58b5', class: "card-header-slot" }, h("slot", { key: 'f3de383b3818feb9883c25ff150c52f0e347de86', name: "header" }))), h("div", { key: '4c6b62db9ffa61f2e0133c2af7a29a090d9c54a5', class: "card-content", style: contentStyle }, h("slot", { key: '969443dcc57fe724cbb3f1d6e1c35c8cc0312794' }), !this.hasContent && (h("div", { key: '0c5e02cf39bec9c7c1ce2ef223b1b4b0df74a372', class: "card-content-placeholder" }, h("span", { key: '0a89b768f29453dc251c3c3402ea8029bd13aaeb', class: "card-placeholder-text" }, this.placeholderText)))), this.showFooter && (h("div", { key: 'f4a2bb6df865bd1abb8f5da2d686906bddcc4c08', class: "card-footer-slot" }, h("slot", { key: '8e643371cbbbf56fb3fb87ccda3b5897f8f914bd', name: "footer" }))))));
    }
    static get is() { return "bh-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-card.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-card.css"]
        };
    }
    static get properties() {
        return {
            "showHeader": {
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
                    "text": "Whether to show the header section"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-header",
                "defaultValue": "true"
            },
            "showFooter": {
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
                    "text": "Whether to show the footer section"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-footer",
                "defaultValue": "true"
            },
            "contentMinHeight": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Minimum height of the content area in pixels"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "content-min-height",
                "defaultValue": "200"
            },
            "placeholderText": {
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
                    "text": "Placeholder text shown when no content is provided"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder-text",
                "defaultValue": "'Card content slot'"
            }
        };
    }
    static get states() {
        return {
            "hasContent": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=bh-card.js.map
