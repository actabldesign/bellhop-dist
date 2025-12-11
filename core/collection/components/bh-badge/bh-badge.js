import { h } from "@stencil/core";
export class BhBadge {
    /**
     * The color variant of the badge
     */
    variant = 'gray';
    /**
     * The size of the badge
     */
    size = 'md';
    /**
     * The emphasis level (affects background/border styling)
     */
    emphasis = 'high';
    /**
     * The text label to display
     */
    label = 'Label';
    /**
     * Material Symbols icon name, or 'dot' for a dot indicator
     */
    icon;
    /**
     * Whether the badge can be dismissed
     */
    dismissible = false;
    /**
     * Whether the badge is disabled
     */
    disabled = false;
    /**
     * Emitted when the dismiss button is clicked
     */
    bhDismiss;
    handleDismiss = (e) => {
        e.stopPropagation();
        if (this.dismissible && !this.disabled) {
            this.bhDismiss.emit();
        }
    };
    render() {
        const badgeClasses = {
            'badge': true,
            [`badge-${this.variant}`]: true,
            [`badge-${this.size}`]: true,
            [`badge-${this.emphasis}`]: true,
            'badge-disabled': this.disabled,
        };
        const iconColorClass = `badge-icon-${this.variant}-${this.emphasis}`;
        const isDot = this.icon === 'dot';
        return (h("span", { key: '240872b520f525ebf20a8d96fd00bd920ef5db39', class: badgeClasses, part: "badge" }, this.icon && (h("span", { key: '0da3d63155c7bed85f4ce51165a0e98e5070f55c', class: {
                'material-symbols-outlined': true,
                [iconColorClass]: true,
                'badge-icon-dot': isDot,
                'badge-icon-custom': !isDot,
            } }, isDot ? 'fiber_manual_record' : this.icon)), h("span", { key: 'e4556215b4af0bf56dd5058697d2aac9ecb62d75', class: "badge-label" }, this.label), this.dismissible && (h("button", { key: 'bd455d4b8b2dca8cc7596ed2dddcbe69ff11b9cf', class: "badge-dismiss", onClick: this.handleDismiss, disabled: this.disabled, type: "button", "aria-label": "Dismiss", part: "dismiss-button" }, h("span", { key: 'b4f8e3be6334840ff909cd3c60ec1d7725f09a77', class: `material-symbols-outlined badge-dismiss-icon ${iconColorClass}` }, "close")))));
    }
    static get is() { return "bh-badge"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-badge.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-badge.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "BadgeVariant",
                    "resolved": "\"blue\" | \"gray\" | \"green\" | \"orange\" | \"pink\" | \"purple\" | \"red\" | \"yellow\"",
                    "references": {
                        "BadgeVariant": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-badge/bh-badge.tsx",
                            "id": "src/components/bh-badge/bh-badge.tsx::BadgeVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The color variant of the badge"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "variant",
                "defaultValue": "'gray'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "BadgeSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "BadgeSize": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-badge/bh-badge.tsx",
                            "id": "src/components/bh-badge/bh-badge.tsx::BadgeSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the badge"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'md'"
            },
            "emphasis": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "BadgeEmphasis",
                    "resolved": "\"high\" | \"low\" | \"medium\"",
                    "references": {
                        "BadgeEmphasis": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-badge/bh-badge.tsx",
                            "id": "src/components/bh-badge/bh-badge.tsx::BadgeEmphasis"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The emphasis level (affects background/border styling)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "emphasis",
                "defaultValue": "'high'"
            },
            "label": {
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
                    "text": "The text label to display"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
                "defaultValue": "'Label'"
            },
            "icon": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Material Symbols icon name, or 'dot' for a dot indicator"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon"
            },
            "dismissible": {
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
                    "text": "Whether the badge can be dismissed"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dismissible",
                "defaultValue": "false"
            },
            "disabled": {
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
                    "text": "Whether the badge is disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "bhDismiss",
                "name": "bhDismiss",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the dismiss button is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=bh-badge.js.map
