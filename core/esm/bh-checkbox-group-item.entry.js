import { r as registerInstance, c as createEvent, h, H as Host } from './index-nAAobRRQ.js';

const bhCheckboxGroupItemCss = ":host{display:block}.checkbox-group-item{display:flex;align-items:flex-start;background:var(--color-white);border:1px solid var(--color-neutral-200);border-radius:var(--radius-xl);cursor:pointer;transition:all 0.2s ease;box-sizing:border-box;font-family:var(--font-inter);outline:none}.checkbox-group-item-sm{padding:var(--spacing-xl);gap:var(--spacing-md)}.checkbox-group-item-md{padding:var(--spacing-xl) var(--spacing-2xl);gap:var(--spacing-lg)}.checkbox-group-item-icon-simple{gap:var(--spacing-lg)}.checkbox-group-item-active{border-color:var(--color-brand-600);box-shadow:inset 0 0 0 1px var(--color-brand-600);background:var(--color-brand-50)}.checkbox-group-item-hovered:not(.checkbox-group-item-disabled):not(.checkbox-group-item-active){background:var(--color-neutral-50);border-color:var(--color-neutral-300)}.checkbox-group-item-focused:not(.checkbox-group-item-disabled):not(.checkbox-group-item-active){box-shadow:0px 0px 0px 4px var(--color-brand-100)}.checkbox-group-item-focused.checkbox-group-item-active:not(.checkbox-group-item-disabled){box-shadow:inset 0 0 0 1px var(--color-brand-600),\n    0px 0px 0px 4px var(--color-brand-100)}.checkbox-group-item-disabled{background:var(--color-neutral-100);border-color:var(--color-neutral-200);cursor:not-allowed;opacity:0.6}.item-content{display:flex;flex-direction:column;flex:1;gap:var(--spacing-xs);min-width:0}.item-text-row{display:flex;align-items:center;gap:var(--spacing-sm);flex-wrap:wrap}.item-title{font-size:var(--text-sm-size);font-weight:var(--weight-semibold);line-height:var(--text-sm-line);color:var(--color-neutral-900)}.item-subtitle{font-size:var(--text-sm-size);font-weight:var(--weight-regular);line-height:var(--text-sm-line);color:var(--color-neutral-600)}.item-description{font-size:var(--text-sm-size);font-weight:var(--weight-regular);line-height:var(--text-sm-line);color:var(--color-neutral-600);margin:0}.checkbox-group-item-disabled .item-title,.checkbox-group-item-disabled .item-subtitle,.checkbox-group-item-disabled .item-description{color:var(--color-neutral-400)}.checkbox-group-item bh-checkbox,.checkbox-group-item bh-radio-button{pointer-events:none}";

const BhCheckboxGroupItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bhItemChange = createEvent(this, "bhItemChange");
    }
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
};
BhCheckboxGroupItem.style = bhCheckboxGroupItemCss;

export { BhCheckboxGroupItem as bh_checkbox_group_item };
//# sourceMappingURL=bh-checkbox-group-item.entry.js.map
