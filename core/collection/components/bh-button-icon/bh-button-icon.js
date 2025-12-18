import { h } from "@stencil/core";
export class BhButtonIcon {
    /**
     * The visual hierarchy of the button
     */
    hierarchy = 'primary';
    /**
     * The size of the button
     */
    size = 'md';
    /**
     * The icon name (Material Symbols)
     */
    iconName = 'add';
    /**
     * Whether the button is disabled
     */
    disabled = false;
    /**
     * Whether the button is in loading state
     */
    loading = false;
    /**
     * The type of button for form submission
     * - 'button': No form submission (default)
     * - 'submit': Submits the form
     * - 'reset': Resets the form
     */
    type = 'button';
    /**
     * Accessible label for the button
     */
    ariaLabel = null;
    /**
     * Emitted when the button is clicked
     */
    bhClick;
    handleClick = (event) => {
        if (!this.disabled && !this.loading) {
            this.bhClick.emit(event);
        }
    };
    handleKeyDown = (event) => {
        if ((event.key === 'Enter' || event.key === ' ') &&
            !this.disabled &&
            !this.loading) {
            event.preventDefault();
            this.bhClick.emit(event);
        }
    };
    render() {
        const buttonClasses = {
            'button-icon': true,
            [`button-icon-${this.hierarchy}`]: true,
            [`button-icon-${this.size}`]: true,
            'button-icon-disabled': this.disabled,
            'button-icon-loading': this.loading,
        };
        return (h("button", { key: '8c2a2097a2c7bbbb89a541d4fce7bba4c4eac970', type: this.type, class: buttonClasses, disabled: this.disabled, "aria-label": this.ariaLabel || this.iconName, "aria-disabled": this.disabled ? 'true' : undefined, onClick: this.handleClick, onKeyDown: this.handleKeyDown, part: "button" }, this.loading ? (h("span", { class: "loading-spinner", part: "spinner" })) : (h("span", { class: "material-symbols-outlined icon", part: "icon" }, this.iconName))));
    }
    static get is() { return "bh-button-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-button-icon.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-button-icon.css"]
        };
    }
    static get properties() {
        return {
            "hierarchy": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ButtonIconHierarchy",
                    "resolved": "\"primary\" | \"quaternary\" | \"secondary\" | \"tertiary\"",
                    "references": {
                        "ButtonIconHierarchy": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-button-icon/bh-button-icon.tsx",
                            "id": "src/components/bh-button-icon/bh-button-icon.tsx::ButtonIconHierarchy"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The visual hierarchy of the button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hierarchy",
                "defaultValue": "'primary'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ButtonIconSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xs\"",
                    "references": {
                        "ButtonIconSize": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-button-icon/bh-button-icon.tsx",
                            "id": "src/components/bh-button-icon/bh-button-icon.tsx::ButtonIconSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'md'"
            },
            "iconName": {
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
                    "text": "The icon name (Material Symbols)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon-name",
                "defaultValue": "'add'"
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
                    "text": "Whether the button is disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "loading": {
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
                    "text": "Whether the button is in loading state"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "loading",
                "defaultValue": "false"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ButtonIconType",
                    "resolved": "\"button\" | \"reset\" | \"submit\"",
                    "references": {
                        "ButtonIconType": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-button-icon/bh-button-icon.tsx",
                            "id": "src/components/bh-button-icon/bh-button-icon.tsx::ButtonIconType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The type of button for form submission\n- 'button': No form submission (default)\n- 'submit': Submits the form\n- 'reset': Resets the form"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type",
                "defaultValue": "'button'"
            },
            "ariaLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | null",
                    "resolved": "null | string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Accessible label for the button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "aria-label",
                "defaultValue": "null"
            }
        };
    }
    static get events() {
        return [{
                "method": "bhClick",
                "name": "bhClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the button is clicked"
                },
                "complexType": {
                    "original": "MouseEvent",
                    "resolved": "MouseEvent",
                    "references": {
                        "MouseEvent": {
                            "location": "global",
                            "id": "global::MouseEvent"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=bh-button-icon.js.map
