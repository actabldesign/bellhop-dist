'use strict';

var index = require('./index-DQwSUT6k.js');

const bhAvatarAddCss = ":host{display:inline-block;font-family:var(\n    --font-inter,\n    'Inter',\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif\n  )}.avatar-add-container{position:relative;display:inline-flex}.avatar-add{position:relative;display:inline-flex;align-items:center;justify-content:center;background-color:var(--color-white, #ffffff);border:1px dashed var(--color-neutral-300, #d0d5dd);border-radius:50%;cursor:pointer;transition:all 0.2s ease-in-out;padding:0;outline:none}.avatar-add-xs{width:24px;height:24px}.avatar-add-xs .avatar-add-icon{font-size:14px}.avatar-add-sm{width:32px;height:32px}.avatar-add-sm .avatar-add-icon{font-size:16px}.avatar-add-md{width:40px;height:40px}.avatar-add-md .avatar-add-icon{font-size:20px}.avatar-add-lg{width:48px;height:48px}.avatar-add-lg .avatar-add-icon{font-size:24px}.avatar-add-xl{width:56px;height:56px}.avatar-add-xl .avatar-add-icon{font-size:28px}.avatar-add-2xl{width:64px;height:64px}.avatar-add-2xl .avatar-add-icon{font-size:32px}.avatar-add-hover{background-color:var(--color-neutral-50, #f9fafb);border-color:var(--color-brand-500, #7f56d9)}.avatar-add-hover .avatar-add-icon{color:var(--color-brand-500, #7f56d9)}.avatar-add-focus{background-color:var(--color-white, #ffffff);box-shadow:0 0 0 2px var(--color-white, #ffffff),\n    0 0 0 4px var(--color-brand-500, #7f56d9)}.avatar-add-disabled{background-color:var(--color-neutral-50, #f9fafb);cursor:not-allowed;pointer-events:none}.avatar-add-disabled .avatar-add-icon{color:var(--color-neutral-300, #d0d5dd)}.avatar-add-content{display:flex;align-items:center;justify-content:center}.avatar-add-icon{color:var(--color-neutral-500, #667085);line-height:1;transition:color 0.2s ease-in-out}.material-symbols-outlined{font-family:'Material Symbols Outlined';font-weight:normal;font-style:normal;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:'liga';-webkit-font-smoothing:antialiased;font-variation-settings:'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24}";

const BhAvatarAdd = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bhClick = index.createEvent(this, "bhClick");
    }
    /**
     * Size of the avatar add button
     */
    size = 'md';
    /**
     * Whether the button is disabled
     */
    disabled = false;
    /**
     * Whether to show tooltip on hover
     */
    showTooltip = false;
    /**
     * Tooltip text
     */
    tooltipText = 'Add user';
    /**
     * Track hover state
     */
    isHovered = false;
    /**
     * Track focus state
     */
    isFocused = false;
    /**
     * Emitted when the button is clicked
     */
    bhClick;
    handleClick = (event) => {
        if (!this.disabled) {
            this.bhClick.emit(event);
        }
    };
    handleKeyDown = (event) => {
        if ((event.key === 'Enter' || event.key === ' ') && !this.disabled) {
            event.preventDefault();
            this.bhClick.emit(event);
        }
    };
    render() {
        const buttonClasses = {
            'avatar-add': true,
            [`avatar-add-${this.size}`]: true,
            'avatar-add-hover': this.isHovered && !this.disabled,
            'avatar-add-focus': this.isFocused && !this.disabled,
            'avatar-add-disabled': this.disabled,
        };
        return (index.h("div", { key: 'e906187ea6a036fa259715d89e798e884e595c85', class: "avatar-add-container" }, index.h("button", { key: '777975b9886ba59bb18461354b01a9a628f92fb7', type: "button", class: buttonClasses, disabled: this.disabled, onClick: this.handleClick, onKeyDown: this.handleKeyDown, onMouseEnter: () => {
                if (!this.disabled)
                    this.isHovered = true;
            }, onMouseLeave: () => {
                this.isHovered = false;
            }, onFocus: () => {
                if (!this.disabled)
                    this.isFocused = true;
            }, onBlur: () => {
                this.isFocused = false;
            }, "aria-label": this.tooltipText, part: "button" }, index.h("span", { key: '6ed6ab00fca8e55d2954baa2dca372d07798f22b', class: "avatar-add-content" }, index.h("span", { key: '06ec0f650d23a82716bd38bedf8e4bebda532a17', class: "material-symbols-outlined avatar-add-icon" }, "add"))), this.showTooltip && (index.h("bh-tooltip", { key: '365183808234299da29de605122b3b13826172ed', text: this.tooltipText, visible: this.isHovered && !this.disabled, position: "bottom" }))));
    }
};
BhAvatarAdd.style = bhAvatarAddCss;

exports.bh_avatar_add = BhAvatarAdd;
//# sourceMappingURL=bh-avatar-add.entry.cjs.js.map
