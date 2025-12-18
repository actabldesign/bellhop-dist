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
        return (h(Host, { key: '2f01aa3ee4b9cdeb1d5f0f16a961af880e11d0fb' }, h("div", { key: '4f4542a1f24dc9db216fef1e361efff54cb5f538', class: "card" }, this.showHeader && (h("div", { key: 'c290615fb8b36c965ac6a032963f2b4e78c22a29', class: "card-header-slot" }, h("slot", { key: '35d78f934a0a8486a62ff17897537cc0afd355a7', name: "header" }))), h("div", { key: 'bfd8a8827ea13baad0862ed5d962853ceed4be4e', class: "card-content", style: contentStyle }, h("slot", { key: 'b43aad6dfb675e4fd32f9614ba83f67aac264aa0' }), !this.hasContent && (h("div", { key: 'a9cf30bb2b1a9a0ab4baf6fa9d8514181f1e79c5', class: "card-content-placeholder" }, h("span", { key: '7d46bf5c2246cd8d9bd2d73695d9b55a1ba6112c', class: "card-placeholder-text" }, this.placeholderText)))), this.showFooter && (h("div", { key: '5588ba1dcc017c899909917f31961414dc4ffd9e', class: "card-footer-slot" }, h("slot", { key: 'ff28528d0090a67061fc7cd63f7df68662d908a8', name: "footer" }))))));
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
