import { h } from "@stencil/core";
import { syncCheckableFormValue, validateRequired } from "../../utils/form";
export class BhCheckbox {
    el;
    internals;
    inputRef;
    uniqueId = `bh-checkbox-${Math.random().toString(36).substring(2, 9)}`;
    /** Checkbox size */
    size = 'md';
    /** Checked state */
    checked = false;
    /** Indeterminate state */
    indeterminate = false;
    /** Disabled state */
    disabled = false;
    /** Name attribute for form submission */
    name = '';
    /** Value attribute for form submission */
    value = 'on';
    /** Optional label text - when provided, renders checkbox with label */
    label = '';
    /** Optional supporting text below the label */
    supportingText = '';
    /** Whether the checkbox is required */
    required = false;
    /** Default checked state for form reset */
    defaultChecked = false;
    /** Internal hover state */
    isHovered = false;
    /** Internal focus state */
    isFocused = false;
    /** Emitted when checkbox state changes via user interaction */
    bhChange;
    handleCheckedChange(newValue) {
        if (this.inputRef) {
            this.inputRef.checked = newValue;
        }
    }
    handleIndeterminateChange(newValue) {
        if (this.inputRef) {
            this.inputRef.indeterminate = newValue;
        }
    }
    componentDidLoad() {
        if (this.inputRef) {
            this.inputRef.indeterminate = this.indeterminate;
        }
        syncCheckableFormValue(this.internals, this.name, this.checked, this.value);
        validateRequired(this.internals, this.required, this.checked);
    }
    formResetCallback() {
        this.checked = this.defaultChecked;
        this.indeterminate = false;
        if (this.inputRef) {
            this.inputRef.checked = this.defaultChecked;
            this.inputRef.indeterminate = false;
        }
        syncCheckableFormValue(this.internals, this.name, this.checked, this.value);
        validateRequired(this.internals, this.required, this.checked);
    }
    handleChange = (event) => {
        event.stopPropagation();
        if (this.disabled)
            return;
        const input = event.target;
        if (this.indeterminate) {
            this.indeterminate = false;
            this.checked = false;
            if (this.inputRef) {
                this.inputRef.indeterminate = false;
                this.inputRef.checked = false;
            }
        }
        else {
            this.checked = input.checked;
        }
        syncCheckableFormValue(this.internals, this.name, this.checked, this.value);
        validateRequired(this.internals, this.required, this.checked);
        this.bhChange.emit(this.checked);
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
    handleControlClick = () => {
        if (this.disabled)
            return;
        this.inputRef?.click();
    };
    renderCheckboxControl() {
        const isCheckedState = this.checked || this.indeterminate;
        const checkboxClasses = {
            'checkbox': true,
            [`checkbox-${this.size}`]: true,
            'checkbox-checked': isCheckedState,
            'checkbox-disabled': this.disabled,
            'checkbox-focused': this.isFocused && !this.disabled,
            'checkbox-hover': this.isHovered && !this.disabled,
        };
        return (h("div", { class: "checkbox-control", onClick: this.handleControlClick, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, h("input", { ref: (el) => (this.inputRef = el), type: "checkbox", id: this.uniqueId, name: this.name, value: this.value, checked: this.checked, disabled: this.disabled, class: "checkbox-input", onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, "aria-describedby": this.supportingText ? `${this.uniqueId}-description` : undefined }), h("div", { class: checkboxClasses, part: "checkbox", "aria-hidden": "true" }, this.checked && !this.indeterminate && (h("span", { class: "material-symbols-outlined checkbox-icon check-icon" }, "check")), this.indeterminate && (h("span", { class: "material-symbols-outlined checkbox-icon minus-icon" }, "remove")))));
    }
    render() {
        const hasLabel = this.label || this.supportingText;
        const wrapperClasses = {
            'checkbox-wrapper': true,
            'checkbox-wrapper-with-label': !!hasLabel,
            'checkbox-wrapper-disabled': this.disabled,
        };
        // Render with bh-label when label/supportingText is provided
        if (hasLabel) {
            return (h("div", { class: wrapperClasses, part: "wrapper" }, h("bh-label", { layout: "inline-start", label: this.label, supportingText: this.supportingText, disabled: this.disabled, for: this.uniqueId }, this.renderCheckboxControl())));
        }
        // Standalone checkbox without label
        return (h("div", { class: wrapperClasses, part: "wrapper" }, this.renderCheckboxControl()));
    }
    static get is() { return "bh-checkbox"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-checkbox.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-checkbox.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "CheckboxSize",
                    "resolved": "\"md\" | \"sm\"",
                    "references": {
                        "CheckboxSize": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-checkbox/bh-checkbox.tsx",
                            "id": "src/components/bh-checkbox/bh-checkbox.tsx::CheckboxSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Checkbox size"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'md'"
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
                    "text": "Checked state"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "checked",
                "defaultValue": "false"
            },
            "indeterminate": {
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
                    "text": "Indeterminate state"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "indeterminate",
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
                    "text": "Disabled state"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
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
                    "text": "Value attribute for form submission"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value",
                "defaultValue": "'on'"
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
                    "text": "Optional label text - when provided, renders checkbox with label"
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
                    "text": "Optional supporting text below the label"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "supporting-text",
                "defaultValue": "''"
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
                    "text": "Whether the checkbox is required"
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
            "isHovered": {},
            "isFocused": {}
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
                    "text": "Emitted when checkbox state changes via user interaction"
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "checked",
                "methodName": "handleCheckedChange"
            }, {
                "propName": "indeterminate",
                "methodName": "handleIndeterminateChange"
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=bh-checkbox.js.map
