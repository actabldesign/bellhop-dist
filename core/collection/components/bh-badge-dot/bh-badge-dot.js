import { h } from "@stencil/core";
export class BhBadgeDot {
    /**
     * The size of the badge dot
     */
    size = 'md';
    /**
     * The color of the badge dot
     */
    color = 'error';
    /**
     * Whether to show an outline ring around the dot
     */
    outline = false;
    render() {
        const dotClasses = {
            'badge-dot': true,
            [`badge-dot-${this.size}`]: true,
            [`badge-dot-${this.color}`]: true,
            'badge-dot-outline': this.outline,
        };
        return h("div", { key: 'c5ce0849442e1b1551185936a328987877a888f5', class: dotClasses, part: "dot" });
    }
    static get is() { return "bh-badge-dot"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-badge-dot.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-badge-dot.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "BadgeDotSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "BadgeDotSize": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-badge-dot/bh-badge-dot.tsx",
                            "id": "src/components/bh-badge-dot/bh-badge-dot.tsx::BadgeDotSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the badge dot"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'md'"
            },
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "BadgeDotColor",
                    "resolved": "\"blue\" | \"error\" | \"success\" | \"warning\"",
                    "references": {
                        "BadgeDotColor": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-badge-dot/bh-badge-dot.tsx",
                            "id": "src/components/bh-badge-dot/bh-badge-dot.tsx::BadgeDotColor"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The color of the badge dot"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "color",
                "defaultValue": "'error'"
            },
            "outline": {
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
                    "text": "Whether to show an outline ring around the dot"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "outline",
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=bh-badge-dot.js.map
