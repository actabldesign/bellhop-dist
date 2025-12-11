import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-9a7sQzad.js';

const bhCheckboxGroupCss = ":host{display:block}.checkbox-group{display:flex;flex-direction:column;gap:var(--spacing-lg);width:100%}";

const BhCheckboxGroup = /*@__PURE__*/ proxyCustomElement(class BhCheckboxGroup extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.bhChange = createEvent(this, "bhChange");
    }
    get el() { return this; }
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
    static get style() { return bhCheckboxGroupCss; }
}, [769, "bh-checkbox-group", {
        "type": [1],
        "name": [1],
        "value": [1025],
        "disabled": [4]
    }, [[0, "bhItemChange", "handleItemChange"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bh-checkbox-group"];
    components.forEach(tagName => { switch (tagName) {
        case "bh-checkbox-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BhCheckboxGroup);
            }
            break;
    } });
}
defineCustomElement();

export { BhCheckboxGroup as B, defineCustomElement as d };
//# sourceMappingURL=p-CuVsQ9St.js.map

//# sourceMappingURL=p-CuVsQ9St.js.map