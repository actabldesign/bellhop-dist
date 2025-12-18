import { h, Host } from "@stencil/core";
export class BhModalActions {
    /**
     * Layout type for the actions:
     * - 'fill': Buttons take full width
     * - 'right-aligned': Buttons aligned to the right with optional left content slot
     */
    type = 'fill';
    /**
     * Whether to show destructive styling on primary button
     */
    destructive = false;
    /**
     * Primary/destructive action button label
     */
    primaryLabel = 'Confirm';
    /**
     * Secondary action button label
     */
    secondaryLabel = 'Cancel';
    /**
     * Whether to show the divider line above actions
     */
    divider = false;
    /**
     * Emitted when the primary/destructive action button is clicked
     */
    bhPrimaryAction;
    /**
     * Emitted when the secondary action button is clicked
     */
    bhSecondaryAction;
    handlePrimaryAction = () => {
        this.bhPrimaryAction.emit();
    };
    handleSecondaryAction = () => {
        this.bhSecondaryAction.emit();
    };
    renderButtons() {
        const isRightAligned = this.type === 'right-aligned';
        const primaryButton = this.destructive ? (h("button", { class: "btn-destructive", onClick: this.handlePrimaryAction, type: "button" }, this.primaryLabel)) : (h("bh-button", { hierarchy: "primary", icon: "none", size: "md", label: this.primaryLabel, onBhClick: this.handlePrimaryAction }));
        const secondaryButton = (h("bh-button", { hierarchy: "secondary", icon: "none", size: "md", label: this.secondaryLabel, onBhClick: this.handleSecondaryAction }));
        if (isRightAligned) {
            return (h("div", { class: "modal-actions-content modal-actions-content--right" }, h("div", { class: "actions-left" }, h("slot", { name: "left-content" })), h("div", { class: "actions-right" }, secondaryButton, primaryButton)));
        }
        // Full width buttons (stacks vertically on mobile via CSS)
        return (h("div", { class: "modal-actions-content modal-actions-content--fill" }, secondaryButton, primaryButton));
    }
    render() {
        return (h(Host, { key: 'fa07c24fee15053743650dfe99ee671eecdbf8e3' }, h("div", { key: 'e3d48c9e12aad9b55c745b23b641a6e96db662c4', class: "modal-actions" }, this.divider && h("div", { key: '89997127609e3a888b25be6a39654b264db8d785', class: "divider" }), this.renderButtons())));
    }
    static get is() { return "bh-modal-actions"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-modal-actions.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-modal-actions.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ModalActionsType",
                    "resolved": "\"fill\" | \"right-aligned\"",
                    "references": {
                        "ModalActionsType": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-modal-actions/bh-modal-actions.tsx",
                            "id": "src/components/bh-modal-actions/bh-modal-actions.tsx::ModalActionsType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Layout type for the actions:\n- 'fill': Buttons take full width\n- 'right-aligned': Buttons aligned to the right with optional left content slot"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type",
                "defaultValue": "'fill'"
            },
            "destructive": {
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
                    "text": "Whether to show destructive styling on primary button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "destructive",
                "defaultValue": "false"
            },
            "primaryLabel": {
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
                    "text": "Primary/destructive action button label"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "primary-label",
                "defaultValue": "'Confirm'"
            },
            "secondaryLabel": {
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
                    "text": "Secondary action button label"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "secondary-label",
                "defaultValue": "'Cancel'"
            },
            "divider": {
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
                    "text": "Whether to show the divider line above actions"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "divider",
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "bhPrimaryAction",
                "name": "bhPrimaryAction",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the primary/destructive action button is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "bhSecondaryAction",
                "name": "bhSecondaryAction",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the secondary action button is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=bh-modal-actions.js.map
