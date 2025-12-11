import { h } from "@stencil/core";
export class BhTooltip {
    /**
     * The tooltip text content
     */
    text = '';
    /**
     * Position of the tooltip relative to its target
     */
    position = 'top';
    /**
     * Variant of the tooltip (default or icon)
     */
    variant = 'default';
    /**
     * Whether the tooltip is visible
     */
    visible = false;
    /**
     * Maximum width in pixels (enables multiline if > 240)
     */
    maxWidth;
    render() {
        const tooltipClasses = {
            'tooltip': true,
            [`tooltip-${this.position}`]: true,
            [`tooltip-${this.variant}`]: true,
            'tooltip-visible': this.visible,
            'multiline': this.maxWidth !== undefined && this.maxWidth > 240,
        };
        const tooltipStyles = this.maxWidth ? { maxWidth: `${this.maxWidth}px` } : {};
        return (h("div", { key: '1306877d710884c4fee82aec1abb4ff8b8cddc9b', class: tooltipClasses, style: tooltipStyles, role: "tooltip", part: "tooltip" }, h("div", { key: 'e0163acbd31726d37b1c3fa249640a9f3af447ca', class: "tooltip-content" }, this.text)));
    }
    static get is() { return "bh-tooltip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-tooltip.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-tooltip.css"]
        };
    }
    static get properties() {
        return {
            "text": {
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
                    "text": "The tooltip text content"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "text",
                "defaultValue": "''"
            },
            "position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TooltipPosition",
                    "resolved": "\"bottom\" | \"left\" | \"right\" | \"top\"",
                    "references": {
                        "TooltipPosition": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-tooltip/bh-tooltip.tsx",
                            "id": "src/components/bh-tooltip/bh-tooltip.tsx::TooltipPosition"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Position of the tooltip relative to its target"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "position",
                "defaultValue": "'top'"
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TooltipVariant",
                    "resolved": "\"default\" | \"icon\"",
                    "references": {
                        "TooltipVariant": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-tooltip/bh-tooltip.tsx",
                            "id": "src/components/bh-tooltip/bh-tooltip.tsx::TooltipVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Variant of the tooltip (default or icon)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "variant",
                "defaultValue": "'default'"
            },
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
            "maxWidth": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Maximum width in pixels (enables multiline if > 240)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-width"
            }
        };
    }
}
//# sourceMappingURL=bh-tooltip.js.map
