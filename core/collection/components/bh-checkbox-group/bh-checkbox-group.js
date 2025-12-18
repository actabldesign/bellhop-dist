import { h, Host } from "@stencil/core";
export class BhCheckboxGroup {
    el;
    /**
     * The type of input controls in the group
     */
    type = 'checkbox';
    /**
     * The name for radio group (required for radio type)
     */
    name = '';
    /**
     * Current selected value(s)
     * For checkbox: array of values
     * For radio: single value string
     */
    value = [];
    /**
     * Whether all items in the group are disabled
     */
    disabled = false;
    /**
     * Emitted when selection changes
     */
    bhChange;
    handleItemChange(event) {
        event.stopPropagation();
        const { value: itemValue, checked } = event.detail;
        if (this.type === 'radio' || this.type === 'icon-simple') {
            // Radio behavior: only one can be selected
            if (checked) {
                this.value = itemValue;
                this.updateChildItems();
                this.bhChange.emit(this.value);
            }
        }
        else {
            // Checkbox behavior: multiple can be selected
            const currentValues = Array.isArray(this.value) ? [...this.value] : [];
            if (checked) {
                if (!currentValues.includes(itemValue)) {
                    currentValues.push(itemValue);
                }
            }
            else {
                const index = currentValues.indexOf(itemValue);
                if (index > -1) {
                    currentValues.splice(index, 1);
                }
            }
            this.value = currentValues;
            this.bhChange.emit(this.value);
        }
    }
    componentDidLoad() {
        this.updateChildItems();
    }
    updateChildItems() {
        const items = this.el.querySelectorAll('bh-checkbox-group-item');
        items.forEach((item) => {
            // Set type from group
            item.type = this.type;
            // Set name for radio groups
            if (this.type === 'radio' || this.type === 'icon-simple') {
                item.name = this.name;
            }
            // Set disabled state
            if (this.disabled) {
                item.disabled = true;
            }
            // Update selection state
            if (this.type === 'radio' || this.type === 'icon-simple') {
                item.selected = item.value === this.value;
                item.checked = false;
            }
            else {
                const values = Array.isArray(this.value) ? this.value : [];
                item.checked = values.includes(item.value);
                item.selected = false;
            }
        });
    }
    render() {
        const role = this.type === 'radio' || this.type === 'icon-simple' ? 'radiogroup' : 'group';
        return (h(Host, { key: '14f895b1d0b5d6ba32a67ce3651c327d29d0770c' }, h("div", { key: '13b9e0179910941c223643945735fb66b699c6eb', class: "checkbox-group", role: role, "aria-disabled": this.disabled ? 'true' : null }, h("slot", { key: '6b28955878dca08ac7549e31130eb69a0880f2ae' }))));
    }
    static get is() { return "bh-checkbox-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-checkbox-group.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-checkbox-group.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "CheckboxGroupType",
                    "resolved": "\"checkbox\" | \"icon-simple\" | \"radio\"",
                    "references": {
                        "CheckboxGroupType": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-checkbox-group/bh-checkbox-group.tsx",
                            "id": "src/components/bh-checkbox-group/bh-checkbox-group.tsx::CheckboxGroupType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The type of input controls in the group"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type",
                "defaultValue": "'checkbox'"
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
                    "text": "The name for radio group (required for radio type)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "name",
                "defaultValue": "''"
            },
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string | string[]",
                    "resolved": "string | string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Current selected value(s)\nFor checkbox: array of values\nFor radio: single value string"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value",
                "defaultValue": "[]"
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
                    "text": "Whether all items in the group are disabled"
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
                "method": "bhChange",
                "name": "bhChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when selection changes"
                },
                "complexType": {
                    "original": "string | string[]",
                    "resolved": "string | string[]",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "bhItemChange",
                "method": "handleItemChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=bh-checkbox-group.js.map
