import { h, Host } from "@stencil/core";
export class BhInputAutocomplete {
    el;
    // Base input props
    /**
     * Input state
     */
    state;
    /**
     * Whether input has error
     */
    error = false;
    /**
     * Whether input is required
     */
    required = false;
    /**
     * Whether input is disabled
     */
    disabled = false;
    /**
     * Whether to show help icon
     */
    showHelpIcon = false;
    /**
     * Whether to show leading icon
     */
    showLeadingIcon = true;
    /**
     * Whether to show label
     */
    showLabel = true;
    /**
     * Whether to show hint text
     */
    showHintText = true;
    /**
     * Label text
     */
    label = 'Search';
    /**
     * Placeholder text
     */
    placeholder = 'Search...';
    /**
     * Hint text
     */
    hintText = 'This is a hint text to help user.';
    /**
     * Leading icon name
     */
    leadingIcon = 'search';
    /**
     * Help icon tooltip
     */
    helpIconTooltip = 'Help';
    /**
     * Current value
     */
    value = '';
    /**
     * Width of the component
     */
    width = '450px';
    // Autocomplete-specific props
    /**
     * Available options
     */
    options = [];
    /**
     * Maximum number of options to show
     */
    maxOptions = 10;
    /**
     * Enable multi-select mode
     */
    multiSelect = false;
    /**
     * Minimum search length to show options
     */
    minSearchLength = 3;
    /**
     * Selected items (for multi-select)
     */
    selectedItems = [];
    showDropdown = false;
    focusedOptionIndex = -1;
    isFocused = false;
    isHovered = false;
    isTagClickOpen = false;
    /**
     * Event emitted when value changes
     */
    bhChange;
    /**
     * Event emitted when selected items change
     */
    bhSelectedItemsChange;
    /**
     * Event emitted when input is focused
     */
    bhFocus;
    /**
     * Event emitted when input is blurred
     */
    bhBlur;
    /**
     * Event emitted when help icon is clicked
     */
    bhHelpClick;
    /**
     * Event emitted when an option is selected
     */
    bhOptionSelect;
    handleValueChange(newValue) {
        if (newValue && newValue.length >= this.minSearchLength) {
            this.showDropdown = true;
        }
    }
    get filteredOptions() {
        let baseOptions = [];
        if (this.isTagClickOpen && this.multiSelect) {
            baseOptions = this.selectedItems;
        }
        else if (this.showDropdown && (!this.value || this.value.length === 0)) {
            baseOptions = this.options.slice(0, this.maxOptions);
        }
        else if (this.value && this.value.length >= this.minSearchLength) {
            const searchLower = this.value.toLowerCase();
            const filtered = this.options.filter(option => option.label.toLowerCase().includes(searchLower));
            baseOptions = filtered.slice(0, this.maxOptions);
        }
        return baseOptions.map(option => ({
            ...option,
            selected: this.multiSelect && this.selectedItems.some(item => item.id === option.id),
        }));
    }
    get shouldShowClearButton() {
        return !this.disabled && ((this.multiSelect && this.selectedItems.length > 0) ||
            (!this.multiSelect && Boolean(this.value && this.value.length > 0)));
    }
    get visibleTags() {
        if (!this.multiSelect || this.selectedItems.length === 0) {
            return { tags: [], remaining: 0 };
        }
        const containerWidth = parseFloat(this.width.replace('px', '')) || 450;
        const searchIconWidth = this.showLeadingIcon ? 40 : 0;
        const clearButtonWidth = this.shouldShowClearButton ? 32 : 0;
        const inputFieldMinWidth = 60;
        const padding = 24;
        const reservedWidth = searchIconWidth + clearButtonWidth + inputFieldMinWidth + padding;
        const availableWidth = Math.max(containerWidth - reservedWidth, 80);
        let currentWidth = 0;
        const visibleTagsList = [];
        const tagSpacing = 8;
        const counterWidth = 40;
        const reversedItems = [...this.selectedItems].reverse();
        for (let i = 0; i < reversedItems.length; i++) {
            const tag = reversedItems[i];
            const baseTagWidth = Math.min(tag.label.length * 8 + 36, 150);
            const remainingAfterThis = reversedItems.length - (i + 1);
            const needsCounter = remainingAfterThis > 0;
            const totalRequiredWidth = currentWidth + baseTagWidth + (needsCounter ? counterWidth : 0);
            if (totalRequiredWidth <= availableWidth) {
                visibleTagsList.push(tag);
                currentWidth += baseTagWidth + tagSpacing;
            }
            else {
                break;
            }
        }
        const finalVisibleTags = visibleTagsList.reverse();
        return {
            tags: finalVisibleTags,
            remaining: this.selectedItems.length - finalVisibleTags.length,
        };
    }
    handleInputChange = (e) => {
        const target = e.target;
        this.value = target.value;
        this.bhChange.emit(this.value);
        this.isTagClickOpen = false;
        if (this.value.length >= this.minSearchLength) {
            this.focusedOptionIndex = -1;
        }
        else {
            this.showDropdown = false;
        }
    };
    handleInputFocus = () => {
        this.isFocused = true;
        this.bhFocus.emit();
        if (this.value && this.value.length >= this.minSearchLength && this.filteredOptions.length > 0) {
            this.showDropdown = true;
        }
    };
    getInputTextState() {
        if (this.state === 'placeholder') {
            return 'default';
        }
        if (this.state === 'focused') {
            return 'focus';
        }
        return this.state;
    }
    handleInputBlur = () => {
        setTimeout(() => {
            this.isFocused = false;
            this.showDropdown = false;
            this.focusedOptionIndex = -1;
            this.isTagClickOpen = false;
            this.bhBlur.emit();
        }, 200);
    };
    handleOptionSelect = (event) => {
        const option = event.detail;
        if (option.disabled)
            return;
        this.bhOptionSelect.emit(option);
        if (this.multiSelect) {
            const isSelected = this.selectedItems.some(item => item.id === option.id);
            const newItems = isSelected
                ? this.selectedItems.filter(item => item.id !== option.id)
                : [...this.selectedItems, option];
            this.selectedItems = newItems;
            this.bhSelectedItemsChange.emit(newItems);
            this.value = '';
            this.bhChange.emit('');
            this.isTagClickOpen = false;
            this.showDropdown = false;
        }
        else {
            this.value = option.label;
            this.bhChange.emit(option.label);
            this.showDropdown = false;
        }
    };
    handleTagRemove = (tag) => {
        const newItems = this.selectedItems.filter(item => item.id !== tag.id);
        this.selectedItems = newItems;
        this.bhSelectedItemsChange.emit(newItems);
    };
    handleTagClick = (e) => {
        if (e.target.closest('.tag-dismiss')) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (!this.disabled) {
            this.isTagClickOpen = true;
            this.showDropdown = true;
            this.isFocused = true;
        }
    };
    handleClearAll = () => {
        if (this.multiSelect) {
            this.selectedItems = [];
            this.bhSelectedItemsChange.emit([]);
        }
        this.value = '';
        this.bhChange.emit('');
    };
    handleKeyDown = (e) => {
        if (!this.showDropdown || this.filteredOptions.length === 0)
            return;
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                this.focusedOptionIndex = this.focusedOptionIndex < this.filteredOptions.length - 1
                    ? this.focusedOptionIndex + 1
                    : 0;
                break;
            case 'ArrowUp':
                e.preventDefault();
                this.focusedOptionIndex = this.focusedOptionIndex > 0
                    ? this.focusedOptionIndex - 1
                    : this.filteredOptions.length - 1;
                break;
            case 'Enter':
                e.preventDefault();
                if (this.focusedOptionIndex >= 0 && this.focusedOptionIndex < this.filteredOptions.length) {
                    const option = this.filteredOptions[this.focusedOptionIndex];
                    this.handleOptionSelect({ detail: option });
                }
                break;
            case 'Escape':
                e.preventDefault();
                this.showDropdown = false;
                this.focusedOptionIndex = -1;
                break;
        }
    };
    handleItemHover = (event) => {
        this.focusedOptionIndex = event.detail;
    };
    render() {
        const { tags, remaining } = this.visibleTags;
        return (h(Host, { key: '05045fca42459813e1d147d76378d9a5ab1a12a9' }, h("div", { key: '88d4f3afbececb7ddb3b53f122bd4e650405f377', class: "input-autocomplete-wrapper", style: { width: this.width }, onKeyDown: this.handleKeyDown }, this.multiSelect ? (
        // Multi-select input with flowing tags
        h("div", { class: "input-wrapper" }, h("bh-label", { label: this.showLabel ? this.label : '', required: this.required, showHelpIcon: this.showHelpIcon, helpIconTooltip: this.helpIconTooltip, disabled: this.disabled, onBhHelpClick: () => this.bhHelpClick.emit() }, h("div", { class: {
                'input-field': true,
                'autocomplete-multi-input': true,
                'input-error': this.error,
                'input-disabled': this.disabled,
                'input-focused': this.isFocused,
                'input-hover': this.isHovered,
            }, onMouseEnter: () => !this.isFocused && (this.isHovered = true), onMouseLeave: () => (this.isHovered = false) }, h("div", { class: "input-content-flow" }, this.showLeadingIcon && (h("span", { class: "leading-icon material-symbols-outlined" }, this.leadingIcon)), tags.map(tag => (h("div", { key: tag.id, onClick: this.handleTagClick, onMouseDown: e => e.preventDefault(), style: { cursor: 'pointer' } }, h("bh-tag", { variant: "text-only", size: "sm", label: tag.label, dismissible: !this.disabled, disabled: this.disabled, maxWidth: 150, onBhDismiss: () => this.handleTagRemove(tag) })))), remaining > 0 && (h("div", { onClick: this.handleTagClick, onMouseDown: e => e.preventDefault(), style: { cursor: 'pointer' } }, h("bh-tag", { variant: "text-only", size: "sm", label: `+${remaining}`, dismissible: false, disabled: this.disabled }))), h("input", { type: "text", value: this.value, placeholder: tags.length === 0 ? this.placeholder : '', disabled: this.disabled, class: "inline-input", onInput: this.handleInputChange, onFocus: this.handleInputFocus, onBlur: this.handleInputBlur }), this.shouldShowClearButton && (h("bh-button-icon", { hierarchy: "tertiary", size: "xs", iconName: "close", onBhClick: this.handleClearAll, disabled: this.disabled }))))), this.showHintText && this.hintText && (h("div", { class: { 'hint-text': true, 'hint-error': this.error }, style: { opacity: this.showDropdown ? '0' : '1' } }, this.hintText)))) : (
        // Standard single-select using bh-input-text
        h("bh-input-text", { state: this.getInputTextState(), error: this.error, required: this.required, disabled: this.disabled, showHelpIcon: this.showHelpIcon, showLeadingIcon: this.showLeadingIcon, showLabel: this.showLabel, showHintText: this.showHintText, label: this.label, placeholder: this.placeholder, hintText: this.hintText, leadingIcon: this.leadingIcon, helpIconTooltip: this.helpIconTooltip, value: this.value, width: "100%", onBhInput: (e) => {
                this.value = e.detail;
                this.bhChange.emit(this.value);
                this.isTagClickOpen = false;
                if (this.value.length >= this.minSearchLength) {
                    this.showDropdown = true;
                }
                else {
                    this.showDropdown = false;
                }
            }, onBhFocus: this.handleInputFocus, onBhBlur: this.handleInputBlur, onBhHelpClick: () => this.bhHelpClick.emit() })), h("bh-autocomplete-menu", { key: 'a172ea13dcff3f03895384d83270333a1325870b', visible: this.showDropdown, menuItems: this.filteredOptions, selectedIndex: this.focusedOptionIndex, multiSelect: this.multiSelect, searchQuery: this.value, onBhItemClick: this.handleOptionSelect, onBhItemHover: this.handleItemHover }))));
    }
    static get is() { return "bh-input-autocomplete"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-input-autocomplete.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-input-autocomplete.css"]
        };
    }
    static get properties() {
        return {
            "state": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "InputAutocompleteState",
                    "resolved": "\"filled\" | \"focused\" | \"hover\" | \"placeholder\" | undefined",
                    "references": {
                        "InputAutocompleteState": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-input-autocomplete/bh-input-autocomplete.tsx",
                            "id": "src/components/bh-input-autocomplete/bh-input-autocomplete.tsx::InputAutocompleteState"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Input state"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "state"
            },
            "error": {
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
                    "text": "Whether input has error"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "error",
                "defaultValue": "false"
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
                    "text": "Whether input is required"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required",
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
                    "text": "Whether input is disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "showHelpIcon": {
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
                    "text": "Whether to show help icon"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-help-icon",
                "defaultValue": "false"
            },
            "showLeadingIcon": {
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
                    "text": "Whether to show leading icon"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-leading-icon",
                "defaultValue": "true"
            },
            "showLabel": {
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
                    "text": "Whether to show label"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-label",
                "defaultValue": "true"
            },
            "showHintText": {
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
                    "text": "Whether to show hint text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-hint-text",
                "defaultValue": "true"
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
                    "text": "Label text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
                "defaultValue": "'Search'"
            },
            "placeholder": {
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
                    "text": "Placeholder text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder",
                "defaultValue": "'Search...'"
            },
            "hintText": {
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
                    "text": "Hint text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hint-text",
                "defaultValue": "'This is a hint text to help user.'"
            },
            "leadingIcon": {
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
                    "text": "Leading icon name"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "leading-icon",
                "defaultValue": "'search'"
            },
            "helpIconTooltip": {
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
                    "text": "Help icon tooltip"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "help-icon-tooltip",
                "defaultValue": "'Help'"
            },
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Current value"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value",
                "defaultValue": "''"
            },
            "width": {
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
                    "text": "Width of the component"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "width",
                "defaultValue": "'450px'"
            },
            "options": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AutocompleteMenuItem[]",
                    "resolved": "AutocompleteMenuItem[]",
                    "references": {
                        "AutocompleteMenuItem": {
                            "location": "import",
                            "path": "../bh-autocomplete-menu/bh-autocomplete-menu",
                            "id": "src/components/bh-autocomplete-menu/bh-autocomplete-menu.tsx::AutocompleteMenuItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Available options"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "maxOptions": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Maximum number of options to show"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-options",
                "defaultValue": "10"
            },
            "multiSelect": {
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
                    "text": "Enable multi-select mode"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "multi-select",
                "defaultValue": "false"
            },
            "minSearchLength": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Minimum search length to show options"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "min-search-length",
                "defaultValue": "3"
            },
            "selectedItems": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "AutocompleteMenuItem[]",
                    "resolved": "AutocompleteMenuItem[]",
                    "references": {
                        "AutocompleteMenuItem": {
                            "location": "import",
                            "path": "../bh-autocomplete-menu/bh-autocomplete-menu",
                            "id": "src/components/bh-autocomplete-menu/bh-autocomplete-menu.tsx::AutocompleteMenuItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Selected items (for multi-select)"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "showDropdown": {},
            "focusedOptionIndex": {},
            "isFocused": {},
            "isHovered": {},
            "isTagClickOpen": {}
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
                    "text": "Event emitted when value changes"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "bhSelectedItemsChange",
                "name": "bhSelectedItemsChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when selected items change"
                },
                "complexType": {
                    "original": "AutocompleteMenuItem[]",
                    "resolved": "AutocompleteMenuItem[]",
                    "references": {
                        "AutocompleteMenuItem": {
                            "location": "import",
                            "path": "../bh-autocomplete-menu/bh-autocomplete-menu",
                            "id": "src/components/bh-autocomplete-menu/bh-autocomplete-menu.tsx::AutocompleteMenuItem"
                        }
                    }
                }
            }, {
                "method": "bhFocus",
                "name": "bhFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when input is focused"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "bhBlur",
                "name": "bhBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when input is blurred"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "bhHelpClick",
                "name": "bhHelpClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when help icon is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "bhOptionSelect",
                "name": "bhOptionSelect",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when an option is selected"
                },
                "complexType": {
                    "original": "AutocompleteMenuItem",
                    "resolved": "AutocompleteMenuItem",
                    "references": {
                        "AutocompleteMenuItem": {
                            "location": "import",
                            "path": "../bh-autocomplete-menu/bh-autocomplete-menu",
                            "id": "src/components/bh-autocomplete-menu/bh-autocomplete-menu.tsx::AutocompleteMenuItem"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "handleValueChange"
            }];
    }
}
//# sourceMappingURL=bh-input-autocomplete.js.map
