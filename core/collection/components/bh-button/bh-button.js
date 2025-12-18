import { h } from "@stencil/core";
export class BhButton {
    /**
     * The visual hierarchy of the button
     */
    hierarchy = 'primary';
    /**
     * The kind/semantic meaning of the button
     */
    kind = 'default';
    /**
     * Icon position relative to the label
     */
    icon = 'none';
    /**
     * The size of the button
     */
    size = 'md';
    /**
     * Fallback text label (used only if no slot content is provided)
     */
    label;
    /**
     * Material Symbols icon name (e.g., 'add', 'edit', 'delete')
     */
    iconName;
    /**
     * Whether the button is disabled
     */
    disabled = false;
    /**
     * Whether the button is in a loading state
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
     * Emitted when the button is clicked
     */
    bhClick;
    handleClick = (event) => {
        if (!this.disabled && !this.loading) {
            this.bhClick.emit(event);
        }
    };
    getIconSizeClass() {
        switch (this.size) {
            case 'sm':
            case 'md':
                return 'icon-md';
            case 'lg':
                return 'icon-lg';
            default:
                return 'icon-md';
        }
    }
    getTextSizeClass() {
        switch (this.size) {
            case 'sm':
            case 'md':
                return 'text-sm';
            case 'lg':
                return 'text-md';
            default:
                return 'text-sm';
        }
    }
    getLoaderSize() {
        switch (this.size) {
            case 'xs':
            case 'sm':
                return 'sm';
            default:
                return 'sm';
        }
    }
    getLoaderVariant() {
        // Primary buttons (all kinds) have dark background, so use white spinner
        return this.hierarchy === 'primary' ? 'white' : 'default';
    }
    render() {
        const showLabel = this.icon !== 'only';
        const showLeadingIcon = this.icon === 'leading' && (this.iconName || this.loading);
        const showTrailingIcon = this.icon === 'trailing' && this.iconName && !this.loading;
        const showOnlyIcon = this.icon === 'only' && (this.iconName || this.loading);
        const buttonClasses = {
            btn: true,
            [`btn-${this.hierarchy}`]: true,
            [`btn-${this.kind}`]: true,
            [`btn-${this.size}`]: true,
            [`btn-icon-${this.icon}`]: true,
            'btn-disabled': this.disabled,
            'btn-loading': this.loading,
        };
        return (h("button", { key: 'f2f54633cb42a7fea15c38aa8bc24be085320dc9', type: this.type, class: buttonClasses, disabled: this.disabled, onClick: this.handleClick, part: "button" }, showLeadingIcon && (h("span", { key: '682a4704e4f874b4f3d051aab4738829cbd47778', class: `btn-icon ${this.getIconSizeClass()}` }, this.loading ? (h("bh-loader-spinner", { size: this.getLoaderSize(), variant: this.getLoaderVariant() })) : (h("span", { class: "btn-icon-material material-symbols-outlined" }, this.iconName)))), showOnlyIcon && (h("span", { key: '767e0ee41843e2ef8b3a45ec82f15602848ad751', class: `btn-icon ${this.getIconSizeClass()}` }, this.loading ? (h("bh-loader-spinner", { size: this.getLoaderSize(), variant: this.getLoaderVariant() })) : (h("span", { class: "btn-icon-material material-symbols-outlined" }, this.iconName)))), showLabel && (h("span", { key: 'bb2ddbcf7eb35dd5af688a6fc6d61d07f67d90ba', class: `btn-label ${this.getTextSizeClass()}` }, h("slot", { key: '010690eeab4cea1205d2ebca5cc2e1bfc95048c7' }, this.label))), showTrailingIcon && (h("span", { key: '9de8df1ab10e9035affbd766fea95896762e2bca', class: `btn-icon ${this.getIconSizeClass()}` }, h("span", { key: 'b50370274c0513a7885eae4bf40235c3e7e245aa', class: "btn-icon-material material-symbols-outlined" }, this.iconName)))));
    }
    static get is() { return "bh-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-button.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-button.css"]
        };
    }
    static get properties() {
        return {
            "hierarchy": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ButtonHierarchy",
                    "resolved": "\"primary\" | \"quaternary\" | \"secondary\" | \"tertiary\"",
                    "references": {
                        "ButtonHierarchy": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-button/bh-button.tsx",
                            "id": "src/components/bh-button/bh-button.tsx::ButtonHierarchy"
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
            "kind": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ButtonKind",
                    "resolved": "\"default\" | \"destructive\" | \"success\"",
                    "references": {
                        "ButtonKind": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-button/bh-button.tsx",
                            "id": "src/components/bh-button/bh-button.tsx::ButtonKind"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The kind/semantic meaning of the button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "kind",
                "defaultValue": "'default'"
            },
            "icon": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ButtonIconPosition",
                    "resolved": "\"leading\" | \"none\" | \"only\" | \"trailing\"",
                    "references": {
                        "ButtonIconPosition": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-button/bh-button.tsx",
                            "id": "src/components/bh-button/bh-button.tsx::ButtonIconPosition"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Icon position relative to the label"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon",
                "defaultValue": "'none'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ButtonSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xs\"",
                    "references": {
                        "ButtonSize": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-button/bh-button.tsx",
                            "id": "src/components/bh-button/bh-button.tsx::ButtonSize"
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
            "label": {
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
                    "text": "Fallback text label (used only if no slot content is provided)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "iconName": {
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
                    "text": "Material Symbols icon name (e.g., 'add', 'edit', 'delete')"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon-name"
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
                    "text": "Whether the button is in a loading state"
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
                    "original": "ButtonType",
                    "resolved": "\"button\" | \"reset\" | \"submit\"",
                    "references": {
                        "ButtonType": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-button/bh-button.tsx",
                            "id": "src/components/bh-button/bh-button.tsx::ButtonType"
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
//# sourceMappingURL=bh-button.js.map
