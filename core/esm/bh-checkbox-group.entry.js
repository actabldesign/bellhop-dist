import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-nAAobRRQ.js';

const bhCheckboxGroupCss = ":host{display:block}.checkbox-group{display:flex;flex-direction:column;gap:var(--spacing-lg);width:100%}";

const BhCheckboxGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bhChange = createEvent(this, "bhChange");
    }
    get el() { return getElement(this); }
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
};
BhCheckboxGroup.style = bhCheckboxGroupCss;

export { BhCheckboxGroup as bh_checkbox_group };
//# sourceMappingURL=bh-checkbox-group.entry.js.map
