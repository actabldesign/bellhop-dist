import { h } from "@stencil/core";
export class BhSkeletonLoader {
    /**
     * Width of the skeleton (CSS value)
     */
    width = '100%';
    /**
     * Height of the skeleton (CSS value)
     */
    height = '1em';
    /**
     * Whether the skeleton should be circular
     */
    circle = false;
    render() {
        const skeletonClasses = {
            'skeleton': true,
            'skeleton-circle': this.circle,
        };
        return (h("span", { key: 'db0a5cf09470b6bd54d8e8aa8f9a19e35bc0f949', class: skeletonClasses, style: { width: this.width, height: this.height }, role: "status", "aria-live": "polite", "aria-busy": "true", part: "skeleton" }, h("span", { key: '2e21ff7d34283aaef05044985e05a565df7f06d7', class: "visually-hidden" }, "Loading...")));
    }
    static get is() { return "bh-skeleton-loader"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-skeleton-loader.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-skeleton-loader.css"]
        };
    }
    static get properties() {
        return {
            "width": {
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
                    "text": "Width of the skeleton (CSS value)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "width",
                "defaultValue": "'100%'"
            },
            "height": {
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
                    "text": "Height of the skeleton (CSS value)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "height",
                "defaultValue": "'1em'"
            },
            "circle": {
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
                    "text": "Whether the skeleton should be circular"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "circle",
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=bh-skeleton-loader.js.map
