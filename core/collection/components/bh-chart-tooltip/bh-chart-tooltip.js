import { h, Host } from "@stencil/core";
export class BhChartTooltip {
    /**
     * Whether the tooltip is visible
     */
    visible = false;
    /**
     * X position of the tooltip (in pixels)
     */
    x = 0;
    /**
     * Y position of the tooltip (in pixels)
     */
    y = 0;
    /**
     * Header text for the tooltip
     */
    header = '';
    /**
     * Items to display in the tooltip
     */
    items = [];
    /**
     * Total value to display
     */
    total = '';
    /**
     * Whether to show the total
     */
    showTotal = false;
    /**
     * Whether in storybook mode (for static positioning)
     */
    storybookMode = false;
    render() {
        return (h(Host, { key: '57397b8dd557ccf795a68896c7f1913fb0bc9b9e' }, h("div", { key: 'ff10c37825a1b62a08b168248b7d05b49fca5a79', class: {
                'chart-tooltip': true,
                visible: this.visible,
                'storybook-mode': this.storybookMode,
            }, style: {
                left: `${this.x}px`,
                top: `${this.y}px`,
            } }, h("div", { key: '1eec265888955e2d073b85c4e2a5cde44b816233', class: "tooltip-content" }, this.header && h("div", { key: 'b287d571062079c274941e20863562898e1de7de', class: "tooltip-header" }, this.header), h("div", { key: 'f4db62e0a0bc52422546fff47e0fb11abffdf744', class: "tooltip-items" }, this.items.map((item, index) => (h("div", { key: index, class: "tooltip-item" }, item.color && (h("span", { class: "tooltip-dot", style: { backgroundColor: item.color } })), item.label && (h("span", { class: "tooltip-label" }, item.label, ":")), h("span", { class: "tooltip-value" }, item.value))))), this.showTotal && this.total && (h("div", { key: '46ade21e6d662ae224d6e2d019609b270b8e1989', class: "tooltip-total" }, h("span", { key: '8ad8d17c70c5b9a4a6fd98b54db5da98e9025875', class: "total-label" }, "Total:"), h("span", { key: '57e0ee054526971a7e4b8b8e43b2e0c1b685b9e4', class: "total-value" }, this.total)))))));
    }
    static get is() { return "bh-chart-tooltip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-chart-tooltip.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-chart-tooltip.css"]
        };
    }
    static get properties() {
        return {
            "visible": {
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
                    "text": "Whether the tooltip is visible"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "visible",
                "defaultValue": "false"
            },
            "x": {
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
                    "text": "X position of the tooltip (in pixels)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "x",
                "defaultValue": "0"
            },
            "y": {
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
                    "text": "Y position of the tooltip (in pixels)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "y",
                "defaultValue": "0"
            },
            "header": {
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
                    "text": "Header text for the tooltip"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "header",
                "defaultValue": "''"
            },
            "items": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TooltipItem[]",
                    "resolved": "TooltipItem[]",
                    "references": {
                        "TooltipItem": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-chart-tooltip/bh-chart-tooltip.tsx",
                            "id": "src/components/bh-chart-tooltip/bh-chart-tooltip.tsx::TooltipItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Items to display in the tooltip"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "total": {
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
                    "text": "Total value to display"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "total",
                "defaultValue": "''"
            },
            "showTotal": {
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
                    "text": "Whether to show the total"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-total",
                "defaultValue": "false"
            },
            "storybookMode": {
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
                    "text": "Whether in storybook mode (for static positioning)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "storybook-mode",
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=bh-chart-tooltip.js.map
