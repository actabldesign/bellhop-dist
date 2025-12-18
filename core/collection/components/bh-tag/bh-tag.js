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
        return (h("span", { key: 'ee636fd94895063d5e59160a7d54f9ceb7125d3a', class: classes }, h("div", { key: 'fcc9614abd483f5c0ecdf53b6fe7f2a3f72bdf39', class: "tag-content" }, this.variant === 'avatar' && (h("bh-avatar", { key: 'cdd5f20519b9a89753aa9f1a7cd3c3f776030997', size: "xxs", type: this.avatarSrc ? 'image' : 'placeholder', imageSrc: this.avatarSrc })), h("span", { key: '5b07fd4263d63bec8023257dacb1a417c4cfe973', class: "tag-label-wrapper" }, h("span", { key: 'dd2f1578fcaceb6a229fbf5b10253ae966baebab', class: "tag-label", style: labelStyle }, this.label))), this.dismissible && (h("button", { key: '593d8758e41957cfedc0c62bddb91d77c283996b', class: "tag-dismiss", onClick: this.handleDismiss, disabled: this.disabled, type: "button", "aria-label": "Dismiss" }, h("span", { key: '74916c4bebdf31dbf2d7a1eff6d943b8a801496f', class: "material-symbols-outlined tag-dismiss-icon" }, "close")))));
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
