import { h } from "@stencil/core";
import { syncCheckableFormValue } from "../../utils/form";
export class BhRadioButton {
    internals;
    /**
     * The size of the radio button
     */
    size = 'md';
    /**
     * Whether the radio button is selected
     */
    selected = false;
    /**
     * Whether the radio button is disabled
     */
    disabled = false;
    /**
     * The value associated with this radio button
     */
    value = '';
    /**
     * The name of the radio group
     */
    name = '';
    /**
     * Optional label text - when provided, renders radio with label
     */
    label = '';
    /**
     * Optional supporting text below the label
     */
    supportingText = '';
    /**
     * Track focus state internally
     */
    isFocused = false;
    /**
     * Track hover state internally
     */
    isHovered = false;
    /**
     * Emitted when the radio button selection changes
     */
    bhChange;
    componentDidLoad() {
        syncCheckableFormValue(this.internals, this.name, this.selected, this.value);
    }
    formResetCallback() {
        this.selected = false;
        syncCheckableFormValue(this.internals, this.name, this.selected, this.value);
    }
    handleClick = () => {
        if (this.disabled || this.selected)
            return;
        this.selected = true;
        syncCheckableFormValue(this.internals, this.name, this.selected, this.value);
        this.bhChange.emit(this.value);
    };
    handleKeyDown = (event) => {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            this.handleClick();
        }
    };
    handleFocus = () => {
        this.isFocused = true;
    };
    handleBlur = () => {
        this.isFocused = false;
    };
    handleMouseEnter = () => {
        this.isHovered = true;
    };
    handleMouseLeave = () => {
        this.isHovered = false;
    };
    uniqueId = `bh-radio-${Math.random().toString(36).substring(2, 9)}`;
    renderRadioControl() {
        const radioClasses = {
            'radio': true,
            [`radio-${this.size}`]: true,
            'radio-selected': this.selected,
            'radio-disabled': this.disabled,
            'radio-focused': this.isFocused && !this.disabled,
            'radio-hover': this.isHovered && !this.disabled,
        };
        return (h("div", { class: "radio-control", onClick: this.handleClick, onKeyDown: this.handleKeyDown, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave, onFocus: this.handleFocus, onBlur: this.handleBlur, tabIndex: this.disabled ? -1 : 0, role: "radio", "aria-checked": String(this.selected), "aria-disabled": String(this.disabled) }, h("div", { class: radioClasses, part: "radio" }, this.selected && h("div", { class: "radio-dot" }))));
    }
    render() {
        const hasLabel = this.label || this.supportingText;
        const wrapperClasses = {
            'radio-wrapper': true,
            'radio-wrapper-with-label': !!hasLabel,
            'radio-wrapper-disabled': this.disabled,
        };
        // Render with bh-label when label/supportingText is provided
        if (hasLabel) {
            return (h("div", { class: wrapperClasses, part: "wrapper" }, h("bh-label", { layout: "inline-start", label: this.label, supportingText: this.supportingText, disabled: this.disabled, for: this.uniqueId }, this.renderRadioControl())));
        }
        // Standalone radio button without label
        return (h("div", { class: wrapperClasses, part: "wrapper" }, this.renderRadioControl()));
    }
    static get is() { return "bh-radio-button"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-radio-button.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-radio-button.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "RadioButtonSize",
                    "resolved": "\"md\" | \"sm\"",
                    "references": {
                        "RadioButtonSize": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-radio-button/bh-radio-button.tsx",
                            "id": "src/components/bh-radio-button/bh-radio-button.tsx::RadioButtonSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the radio button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'md'"
            },
            "selected": {
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
                    "text": "Whether the radio button is selected"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "selected",
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
                    "text": "Whether the radio button is disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
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
                    "text": "The value associated with this radio button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value",
                "defaultValue": "''"
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
                    "text": "The name of the radio group"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "name",
                "defaultValue": "''"
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
                    "text": "Optional label text - when provided, renders radio with label"
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
                    "text": "Emitted when the radio button selection changes"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
//# sourceMappingURL=bh-radio-button.js.map
