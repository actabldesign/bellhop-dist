import { h } from "@stencil/core";
export class BhAvatarAdd {
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
        return (h("div", { key: 'e906187ea6a036fa259715d89e798e884e595c85', class: "avatar-add-container" }, h("button", { key: '777975b9886ba59bb18461354b01a9a628f92fb7', type: "button", class: buttonClasses, disabled: this.disabled, onClick: this.handleClick, onKeyDown: this.handleKeyDown, onMouseEnter: () => {
                if (!this.disabled)
                    this.isHovered = true;
            }, onMouseLeave: () => {
                this.isHovered = false;
            }, onFocus: () => {
                if (!this.disabled)
                    this.isFocused = true;
            }, onBlur: () => {
                this.isFocused = false;
            }, "aria-label": this.tooltipText, part: "button" }, h("span", { key: '6ed6ab00fca8e55d2954baa2dca372d07798f22b', class: "avatar-add-content" }, h("span", { key: '06ec0f650d23a82716bd38bedf8e4bebda532a17', class: "material-symbols-outlined avatar-add-icon" }, "add"))), this.showTooltip && (h("bh-tooltip", { key: '365183808234299da29de605122b3b13826172ed', text: this.tooltipText, visible: this.isHovered && !this.disabled, position: "bottom" }))));
    }
    static get is() { return "bh-avatar-add"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-avatar-add.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-avatar-add.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AvatarAddSize",
                    "resolved": "\"2xl\" | \"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\"",
                    "references": {
                        "AvatarAddSize": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-avatar-add/bh-avatar-add.tsx",
                            "id": "src/components/bh-avatar-add/bh-avatar-add.tsx::AvatarAddSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of the avatar add button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'md'"
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
                    "text": "Whether the button is disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "showTooltip": {
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
                    "text": "Whether to show tooltip on hover"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-tooltip",
                "defaultValue": "false"
            },
            "tooltipText": {
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
                    "text": "Tooltip text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "tooltip-text",
                "defaultValue": "'Add user'"
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
                "method": "bhClick",
                "name": "bhClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the button is clicked"
                },
                "complexType": {
                    "original": "MouseEvent",
                    "resolved": "MouseEvent",
                    "references": {
                        "MouseEvent": {
                            "location": "global",
                            "id": "global::MouseEvent"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=bh-avatar-add.js.map
