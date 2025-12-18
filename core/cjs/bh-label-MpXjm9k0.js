'use strict';

var index = require('./index-DQwSUT6k.js');

const bhLabelCss = ":host{display:block;font-family:var(--font-inter, 'Inter', sans-serif)}.label-container{display:flex;flex-direction:column;gap:var(--spacing-xs, 6px)}.label-container.layout-block{flex-direction:column}.label-container.layout-inline{flex-direction:row;align-items:flex-start;gap:var(--spacing-sm, 8px)}.label-container.layout-inline .label-wrapper{flex-shrink:0}.label-container.layout-inline-start{flex-direction:row;align-items:flex-start;gap:var(--spacing-sm, 8px)}.label-container.layout-inline-start .label-content{flex-shrink:0;width:auto}.label-container.layout-inline-start .label-text-group{display:flex;flex-direction:column;gap:2px}.label-container.layout-inline-start .label-wrapper{gap:var(--spacing-xxs, 4px)}.label-container.layout-inline-start .label-text{font-size:var(--text-md-size, 16px);color:var(--color-neutral-900, #101828);cursor:pointer}.label-container.layout-inline-start .supporting-text{font-size:var(--text-sm-size, 14px);color:var(--color-neutral-500, #667085)}.label-container.layout-inline-space-between{flex-direction:row;align-items:flex-start;justify-content:space-between;gap:var(--spacing-sm, 8px)}.label-container.layout-inline-space-between .label-wrapper{flex-shrink:0}.label-container.layout-inline-space-between .label-content{flex-grow:1;display:flex;justify-content:flex-end}.label-wrapper{display:flex;align-items:center;gap:var(--spacing-xxs, 4px)}.label-text{font-family:inherit;font-weight:500;font-size:var(--text-sm-size, 14px);line-height:1.43;color:var(--color-neutral-700, #344054);margin:0;cursor:default}.label-text.disabled{color:var(--color-neutral-400, #98a2b3)}.asterisk{font-family:inherit;font-weight:400;font-size:var(--text-sm-size, 14px);line-height:1.43;color:var(--color-error-600, #dc2626)}.supporting-text{font-family:inherit;font-weight:400;font-size:var(--text-sm-size, 14px);line-height:1.43;color:var(--color-neutral-500, #667085);margin:0}.supporting-text.disabled{color:var(--color-neutral-400, #98a2b3)}.label-content{width:100%}.icon-with-tooltip{position:relative;display:flex;align-items:center;flex-shrink:0;margin-left:auto}.help-icon{font-size:var(--text-xl-size, 20px);color:var(--color-neutral-400, #98a2b3);cursor:pointer;user-select:none;transition:color 0.2s ease-in-out}.help-icon:hover{color:var(--color-neutral-500, #667085)}.disabled .help-icon{color:var(--color-neutral-300, #d0d5dd);cursor:not-allowed}";

const BhLabel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bhHelpClick = index.createEvent(this, "bhHelpClick");
    }
    get el() { return index.getElement(this); }
    tooltipTimerRef;
    /**
     * The label text to display
     */
    label = '';
    /**
     * Layout style for the label container
     * - block: Label above content (default for form fields)
     * - inline: Label next to content (label first)
     * - inline-start: Content next to label (content first, for checkboxes/radios)
     * - inline-space-between: Label and content on opposite ends
     */
    layout = 'block';
    /**
     * The id of the form element the label is bound to.
     * Use when the labeled element is not a child of this component.
     */
    for = '';
    /**
     * Supporting text displayed below the label (second line)
     * for instructions or additional description
     */
    supportingText = '';
    /**
     * Whether to show the required asterisk
     */
    required = false;
    /**
     * Whether to show the help icon
     */
    showHelpIcon = false;
    /**
     * Tooltip text for the help icon
     */
    helpIconTooltip = 'Help';
    /**
     * Whether the label is disabled
     */
    disabled = false;
    showHelpTooltip = false;
    /**
     * Emitted when the help icon is clicked
     */
    bhHelpClick;
    disconnectedCallback() {
        if (this.tooltipTimerRef) {
            clearTimeout(this.tooltipTimerRef);
        }
    }
    handleHelpIconMouseEnter = () => {
        if (this.tooltipTimerRef) {
            clearTimeout(this.tooltipTimerRef);
        }
        this.tooltipTimerRef = setTimeout(() => {
            this.showHelpTooltip = true;
        }, 300);
    };
    handleHelpIconMouseLeave = () => {
        if (this.tooltipTimerRef) {
            clearTimeout(this.tooltipTimerRef);
            this.tooltipTimerRef = undefined;
        }
        this.showHelpTooltip = false;
    };
    handleHelpIconClick = () => {
        this.bhHelpClick.emit();
    };
    render() {
        const wrapperClasses = {
            'label-container': true,
            [`layout-${this.layout}`]: true,
            'disabled': this.disabled,
        };
        const labelClasses = {
            'label-text': true,
            'disabled': this.disabled,
        };
        const supportingClasses = {
            'supporting-text': true,
            'disabled': this.disabled,
        };
        const labelWrapper = (index.h("div", { class: "label-wrapper" }, this.label && (index.h("label", { class: labelClasses, htmlFor: this.for || undefined }, this.label)), this.required && index.h("span", { class: "asterisk" }, "*"), this.showHelpIcon && (index.h("div", { class: "icon-with-tooltip" }, index.h("span", { class: "help-icon material-symbols-outlined", onClick: this.handleHelpIconClick, onMouseEnter: this.handleHelpIconMouseEnter, onMouseLeave: this.handleHelpIconMouseLeave }, "help"), index.h("bh-tooltip", { text: this.helpIconTooltip, position: "top", visible: this.showHelpTooltip })))));
        const supportingTextEl = this.supportingText && (index.h("p", { class: supportingClasses }, this.supportingText));
        const contentSlot = (index.h("div", { class: "label-content" }, index.h("slot", null)));
        // For inline-start layout, content comes first (used for checkbox/radio)
        if (this.layout === 'inline-start') {
            return (index.h("div", { class: wrapperClasses }, contentSlot, index.h("div", { class: "label-text-group" }, labelWrapper, supportingTextEl)));
        }
        // Default layout: label wrapper first, then content
        return (index.h("div", { class: wrapperClasses }, labelWrapper, supportingTextEl, contentSlot));
    }
};
BhLabel.style = bhLabelCss;

exports.BhLabel = BhLabel;
//# sourceMappingURL=bh-label-MpXjm9k0.js.map

//# sourceMappingURL=bh-label-MpXjm9k0.js.map