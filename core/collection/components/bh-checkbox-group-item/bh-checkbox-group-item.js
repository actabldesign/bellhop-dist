import { h, Host } from "@stencil/core";
export class BhCheckboxGroupItem {
    /**
     * The type of input control
     */
    type = 'checkbox';
    /**
     * The size variant
     */
    size = 'sm';
    /**
     * Unique value identifier for this item
     */
    value = '';
    /**
     * Whether the item is checked (for checkbox type)
     */
    checked = false;
    /**
     * Whether the item is selected (for radio type)
     */
    selected = false;
    /**
     * Whether the item is disabled
     */
    disabled = false;
    /**
     * Material Symbol icon name (for icon-simple type)
     */
    icon = '';
    /**
     * Title text
     */
    itemTitle = '';
    /**
     * Subtitle text (inline with title)
     */
    subtitle = '';
    /**
     * Description text
     */
    description = '';
    /**
     * Radio group name (for radio type)
     */
    name = '';
    isHovered = false;
    isFocused = false;
    /**
     * Emitted when the item state changes
     */
    bhItemChange;
    handleClick = () => {
        if (this.disabled)
            return;
        if (this.type === 'radio' || this.type === 'icon-simple') {
            if (!this.selected) {
                this.selected = true;
                this.bhItemChange.emit({ value: this.value, checked: true });
            }
        }
        else {
            this.checked = !this.checked;
            this.bhItemChange.emit({ value: this.value, checked: this.checked });
        }
    };
    handleKeyDown = (event) => {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            this.handleClick();
        }
    };
    handleMouseEnter = () => {
        if (!this.disabled)
            this.isHovered = true;
    };
    handleMouseLeave = () => {
        this.isHovered = false;
    };
    handleFocus = () => {
        if (!this.disabled)
            this.isFocused = true;
    };
    handleBlur = () => {
        this.isFocused = false;
    };
    handleCheckboxChange = (event) => {
        event.stopPropagation();
        this.checked = event.detail;
        this.bhItemChange.emit({ value: this.value, checked: this.checked });
    };
    handleRadioChange = (event) => {
        event.stopPropagation();
        this.selected = true;
        this.bhItemChange.emit({ value: this.value, checked: true });
    };
    render() {
        const isActive = (this.type === 'radio' || this.type === 'icon-simple') ? this.selected : this.checked;
        const containerClasses = {
            'checkbox-group-item': true,
            [`checkbox-group-item-${this.size}`]: true,
            [`checkbox-group-item-${this.type}`]: true,
            'checkbox-group-item-active': isActive,
            'checkbox-group-item-disabled': this.disabled,
            'checkbox-group-item-hovered': this.isHovered,
            'checkbox-group-item-focused': this.isFocused,
        };
        const renderInput = () => {
            if (this.type === 'radio') {
                return (h("bh-radio-button", { size: this.size, selected: this.selected, disabled: this.disabled, value: this.value, name: this.name, onBhChange: this.handleRadioChange }));
            }
            // For icon-simple, use `selected` state; for checkbox, use `checked` state
            const isChecked = this.type === 'icon-simple' ? this.selected : this.checked;
            return (h("bh-checkbox", { size: this.size, checked: isChecked, disabled: this.disabled, onBhChange: this.handleCheckboxChange }));
        };
        const renderIcon = () => {
            if (this.type === 'icon-simple' && this.icon) {
                return (h("bh-featured-icon", { size: "sm", icon: this.icon, color: "gray", iconStyle: "outlined" }));
            }
            return null;
        };
        const renderContent = () => (h("div", { class: "item-content" }, h("div", { class: "item-text-row" }, this.itemTitle && h("span", { class: "item-title" }, this.itemTitle), this.subtitle && h("span", { class: "item-subtitle" }, this.subtitle)), this.description && h("p", { class: "item-description" }, this.description)));
        return (h(Host, null, h("div", { class: containerClasses, onClick: this.handleClick, onKeyDown: this.handleKeyDown, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave, onFocus: this.handleFocus, onBlur: this.handleBlur, tabIndex: this.disabled ? -1 : 0, role: this.type === 'radio' ? 'radio' : 'checkbox', "aria-checked": String(isActive), "aria-disabled": this.disabled ? 'true' : null }, this.type === 'icon-simple' ? (
        // Icon Simple: icon + content | input
        [renderIcon(), renderContent(), renderInput()]) : (
        // Checkbox/Radio: input | content
        [renderInput(), renderContent()]))));
    }
    static get is() { return "bh-checkbox-group-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-checkbox-group-item.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-checkbox-group-item.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "CheckboxGroupItemType",
                    "resolved": "\"checkbox\" | \"icon-simple\" | \"radio\"",
                    "references": {
                        "CheckboxGroupItemType": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-checkbox-group-item/bh-checkbox-group-item.tsx",
                            "id": "src/components/bh-checkbox-group-item/bh-checkbox-group-item.tsx::CheckboxGroupItemType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The type of input control"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type",
                "defaultValue": "'checkbox'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "CheckboxGroupItemSize",
                    "resolved": "\"md\" | \"sm\"",
                    "references": {
                        "CheckboxGroupItemSize": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-checkbox-group-item/bh-checkbox-group-item.tsx",
                            "id": "src/components/bh-checkbox-group-item/bh-checkbox-group-item.tsx::CheckboxGroupItemSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size variant"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'sm'"
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
                    "text": "Unique value identifier for this item"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value",
                "defaultValue": "''"
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
                    "text": "Whether the item is checked (for checkbox type)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "checked",
                "defaultValue": "false"
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
                    "text": "Whether the item is selected (for radio type)"
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
                    "text": "Whether the item is disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "icon": {
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
                    "text": "Material Symbol icon name (for icon-simple type)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon",
                "defaultValue": "''"
            },
            "itemTitle": {
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
                    "text": "Title text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "item-title",
                "defaultValue": "''"
            },
            "subtitle": {
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
                    "text": "Subtitle text (inline with title)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "subtitle",
                "defaultValue": "''"
            },
            "description": {
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
                    "text": "Description text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "description",
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
                    "text": "Radio group name (for radio type)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "name",
                "defaultValue": "''"
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
                "method": "bhItemChange",
                "name": "bhItemChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the item state changes"
                },
                "complexType": {
                    "original": "{ value: string; checked: boolean }",
                    "resolved": "{ value: string; checked: boolean; }",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=bh-checkbox-group-item.js.map
