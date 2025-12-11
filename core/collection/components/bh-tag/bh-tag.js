import { h } from "@stencil/core";
export class BhTag {
    /** Tag variant */
    variant = 'text-only';
    /** Tag size */
    size = 'md';
    /** Tag label text */
    label = 'Label';
    /** Whether the tag is dismissible */
    dismissible = false;
    /** Whether the tag is disabled */
    disabled = false;
    /** Maximum width for the label (in pixels) */
    maxWidth = 120;
    /** Avatar image source (for avatar variant) */
    avatarSrc = '';
    /** Internal dismissing state */
    isDismissing = false;
    /** Emitted when dismiss button is clicked */
    bhDismiss;
    handleDismiss = (event) => {
        event.stopPropagation();
        if (this.dismissible && !this.disabled && !this.isDismissing) {
            this.isDismissing = true;
            // Simulate animation duration
            setTimeout(() => {
                this.bhDismiss.emit();
                this.isDismissing = false;
            }, 200);
        }
    };
    render() {
        const classes = {
            'tag': true,
            [`tag-${this.size}`]: true,
            [`tag-${this.variant}`]: true,
            'tag-dismissible': this.dismissible,
            'tag-disabled': this.disabled,
            'animate-dismiss': this.isDismissing,
        };
        const labelStyle = {
            maxWidth: `${this.maxWidth}px`,
        };
        return (h("span", { key: '1ca1b5c6087d2ab438975c186b35bba2e6efa577', class: classes }, h("div", { key: '154d89498369ad08173f16fd04a29dd58b65aba0', class: "tag-content" }, this.variant === 'avatar' && (h("bh-avatar", { key: '85475fb7ed5ec15a68951c1048ce050c43044671', size: "xxs", type: this.avatarSrc ? 'image' : 'placeholder', imageSrc: this.avatarSrc })), h("span", { key: '5acc3f84536abd3b2603fe2f9c015fcb676375e7', class: "tag-label-wrapper" }, h("span", { key: '6314f8db254195d2f412467f349e2a372c9c379f', class: "tag-label", style: labelStyle }, this.label))), this.dismissible && (h("button", { key: '77377b1400258cf418da5391b54229d9e76c715f', class: "tag-dismiss", onClick: this.handleDismiss, disabled: this.disabled, type: "button", "aria-label": "Dismiss" }, h("span", { key: 'd6d6f39c326413da4f155974359960bd121dcbdb', class: "material-symbols-outlined tag-dismiss-icon" }, "close")))));
    }
    static get is() { return "bh-tag"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-tag.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-tag.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TagVariant",
                    "resolved": "\"avatar\" | \"text-only\"",
                    "references": {
                        "TagVariant": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-tag/bh-tag.tsx",
                            "id": "src/components/bh-tag/bh-tag.tsx::TagVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Tag variant"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "variant",
                "defaultValue": "'text-only'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TagSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "TagSize": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-tag/bh-tag.tsx",
                            "id": "src/components/bh-tag/bh-tag.tsx::TagSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Tag size"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'md'"
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
                    "text": "Tag label text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
                "defaultValue": "'Label'"
            },
            "dismissible": {
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
                    "text": "Whether the tag is dismissible"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dismissible",
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
                    "text": "Whether the tag is disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "maxWidth": {
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
                    "text": "Maximum width for the label (in pixels)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-width",
                "defaultValue": "120"
            },
            "avatarSrc": {
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
                    "text": "Avatar image source (for avatar variant)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "avatar-src",
                "defaultValue": "''"
            }
        };
    }
    static get states() {
        return {
            "isDismissing": {}
        };
    }
    static get events() {
        return [{
                "method": "bhDismiss",
                "name": "bhDismiss",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when dismiss button is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=bh-tag.js.map
