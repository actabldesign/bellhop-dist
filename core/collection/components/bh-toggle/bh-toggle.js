import { h } from "@stencil/core";
import { syncCheckableFormValue, validateRequired } from "../../utils/form";
export class BhToggle {
    internals;
    /**
     * The size of the toggle
     */
    size = 'md';
    /**
     * Whether to show the label and supporting text
     */
    showText = false;
    /**
     * The label text
     */
    label = '';
    /**
     * Supporting text below the label
     */
    supportingText = '';
    /**
     * Whether the toggle is disabled
     */
    disabled = false;
    /**
     * Whether the toggle is checked (controlled mode)
     */
    checked = false;
    /**
     * Name attribute for form submission
     */
    name = '';
    /**
     * Value when checked (default: 'on')
     */
    value = 'on';
    /**
     * Whether the toggle is required
     */
    required = false;
    /**
     * Default checked state for form reset
     */
    defaultChecked = false;
    /**
     * Internal focus state
     */
    isFocused = false;
    /**
     * Internal hover state
     */
    isHovered = false;
    /**
     * Emitted when the toggle state changes
     */
    bhChange;
    componentDidLoad() {
        syncCheckableFormValue(this.internals, this.name, this.checked, this.value);
        validateRequired(this.internals, this.required, this.checked);
    }
    formResetCallback() {
        this.checked = this.defaultChecked;
        syncCheckableFormValue(this.internals, this.name, this.checked, this.value);
        validateRequired(this.internals, this.required, this.checked);
    }
    handleToggle = () => {
        if (this.disabled)
            return;
        this.checked = !this.checked;
        syncCheckableFormValue(this.internals, this.name, this.checked, this.value);
        validateRequired(this.internals, this.required, this.checked);
        this.bhChange.emit(this.checked);
    };
    handleKeyDown = (event) => {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            this.handleToggle();
        }
    };
    handleMouseEnter = () => {
        this.isHovered = true;
    };
    handleMouseLeave = () => {
        this.isHovered = false;
    };
    handleFocus = () => {
        this.isFocused = true;
    };
    handleBlur = () => {
        this.isFocused = false;
    };
    render() {
        const wrapperClasses = {
            'toggle-wrapper': true,
            'toggle-with-text': this.showText,
            [`toggle-size-${this.size}`]: true,
        };
        const switchClasses = {
            'toggle-switch': true,
            'toggle-pressed': this.checked,
            'toggle-unpressed': !this.checked,
            [`toggle-${this.size}`]: true,
            'toggle-disabled': this.disabled,
            'toggle-focus': this.isFocused && !this.disabled,
            'toggle-hover': this.isHovered && !this.disabled,
        };
        const buttonClasses = {
            'toggle-button': true,
            'toggle-button-pressed': this.checked,
            'toggle-button-unpressed': !this.checked,
            [`toggle-button-${this.size}`]: true,
            'toggle-button-disabled': this.disabled,
        };
        const labelClasses = {
            'toggle-label': true,
            [`toggle-label-${this.size}`]: true,
        };
        return (h("div", { key: 'd07f9c9302c21ab8ecd3e515fe3f1794c2d689b5', class: wrapperClasses, part: "wrapper" }, h("div", { key: 'cfb224564cd11c8dacbf9c2426329acc96b703bd', class: switchClasses, onClick: this.handleToggle, onKeyDown: this.handleKeyDown, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave, onFocus: this.handleFocus, onBlur: this.handleBlur, tabIndex: this.disabled ? -1 : 0, role: "switch", "aria-checked": this.checked ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false', "aria-label": this.label || undefined, part: "switch" }, h("div", { key: '3e120ce6b54cca6bf06b49ad78784b8f44c5221a', class: buttonClasses, part: "button" })), this.showText && (this.label || this.supportingText) && (h("div", { key: 'a4feeb01f7188d35f7871e27cebfb65e72ce580d', class: "toggle-text" }, this.label && (h("span", { key: 'dfa097818d779cc768cde6972c0618c26fca10fa', class: labelClasses }, this.label)), this.supportingText && (h("div", { key: '332221a6cee6770d1b4026076a35bb6ff53054b1', class: "toggle-supporting-text" }, this.supportingText))))));
    }
    static get is() { return "bh-toggle"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-toggle.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-toggle.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ToggleSize",
                    "resolved": "\"md\" | \"sm\"",
                    "references": {
                        "ToggleSize": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-toggle/bh-toggle.tsx",
                            "id": "src/components/bh-toggle/bh-toggle.tsx::ToggleSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the toggle"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'md'"
            },
            "showText": {
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
                    "text": "Whether to show the label and supporting text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-text",
                "defaultValue": "false"
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
                    "text": "The label text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
                "defaultValue": "''"
            },
            "supportingText": {
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
                    "text": "Supporting text below the label"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "supporting-text",
                "defaultValue": "''"
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
                    "text": "Whether the toggle is disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "checked": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether the toggle is checked (controlled mode)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "checked",
                "defaultValue": "false"
            },
            "name": {
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
                    "text": "Name attribute for form submission"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "name",
                "defaultValue": "''"
            },
            "value": {
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
                    "text": "Value when checked (default: 'on')"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value",
                "defaultValue": "'on'"
            },
            "required": {
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
                    "text": "Whether the toggle is required"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required",
                "defaultValue": "false"
            },
            "defaultChecked": {
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
                    "text": "Default checked state for form reset"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "default-checked",
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isFocused": {},
            "isHovered": {}
        };
    }
    static get events() {
        return [{
                "method": "bhChange",
                "name": "bhChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the toggle state changes"
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=bh-toggle.js.map
