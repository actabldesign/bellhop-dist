import { h } from "@stencil/core";
export class BhAvatar {
    /**
     * The size of the avatar
     */
    size = 'md';
    /**
     * The type of avatar content
     */
    type = 'image';
    /**
     * The status indicator (online, offline, or none)
     */
    status = 'none';
    /**
     * Text to display for text-type avatars (initials)
     */
    text = 'RD';
    /**
     * Image source URL for image-type avatars
     */
    imageSrc;
    /**
     * Alt text for the avatar image
     */
    alt = 'Avatar';
    /**
     * Emitted when the avatar is hovered
     */
    bhMouseEnter;
    /**
     * Emitted when the mouse leaves the avatar
     */
    bhMouseLeave;
    handleMouseEnter = () => {
        this.bhMouseEnter.emit();
    };
    handleMouseLeave = () => {
        this.bhMouseLeave.emit();
    };
    getTextSizeClass() {
        const sizeMap = {
            'xxs': 'text-xxs',
            'xs': 'text-xs',
            'sm': 'text-sm',
            'md': 'text-md',
            'lg': 'text-lg',
            'xl': 'text-xl',
            '2xl': 'text-2xl',
        };
        return sizeMap[this.size] || 'text-md';
    }
    getIconSizeClass() {
        const sizeMap = {
            'xxs': 'icon-sm',
            'xs': 'icon-md',
            'sm': 'icon-lg',
            'md': 'icon-xl',
            'lg': 'icon-2xl',
            'xl': 'icon-3xl',
            '2xl': 'icon-4xl',
        };
        return sizeMap[this.size] || 'icon-xl';
    }
    render() {
        const avatarClasses = {
            'avatar': true,
            [`avatar-${this.size}`]: true,
            'avatar-with-status': this.status !== 'none',
        };
        const statusClasses = {
            'avatar-status': true,
            [`avatar-status-${this.size}`]: true,
            'avatar-status-online': this.status === 'online',
            'avatar-status-offline': this.status === 'offline',
        };
        return (h("div", { key: '914106f6936e5c7ce0e174e0b909b1500b5c2ed4', class: avatarClasses, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave, part: "avatar" }, h("div", { key: 'b243bdaf78378f12268f9c016ff01278dd160f87', class: "avatar-border" }), h("div", { key: '6945f4a099f930d192f183a9fb7d2eeb3dc90eed', class: "avatar-content" }, this.type === 'image' && (h("img", { key: '97972f391c8f16e2ccdcabbc722bb93b292b8750', src: this.imageSrc, alt: this.alt, class: "avatar-image" })), this.type === 'placeholder' && (h("span", { key: 'acc758d9bb1bb39b4e767b502babb4abd9d8108e', class: `material-symbols-outlined avatar-placeholder-icon ${this.getIconSizeClass()}` }, "person")), this.type === 'text' && (h("span", { key: 'd7cd84351467868b6cb7506ba32a7e42da5090e2', class: `avatar-text ${this.getTextSizeClass()}` }, this.text))), this.status !== 'none' && (h("div", { key: 'f87333ba06a55bfa5345d1ad245453d2a756ad72', class: statusClasses }))));
    }
    static get is() { return "bh-avatar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-avatar.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-avatar.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AvatarSize",
                    "resolved": "\"2xl\" | \"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\" | \"xxs\"",
                    "references": {
                        "AvatarSize": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-avatar/bh-avatar.tsx",
                            "id": "src/components/bh-avatar/bh-avatar.tsx::AvatarSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the avatar"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'md'"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AvatarType",
                    "resolved": "\"image\" | \"placeholder\" | \"text\"",
                    "references": {
                        "AvatarType": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-avatar/bh-avatar.tsx",
                            "id": "src/components/bh-avatar/bh-avatar.tsx::AvatarType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The type of avatar content"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type",
                "defaultValue": "'image'"
            },
            "status": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AvatarStatus",
                    "resolved": "\"none\" | \"offline\" | \"online\"",
                    "references": {
                        "AvatarStatus": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-avatar/bh-avatar.tsx",
                            "id": "src/components/bh-avatar/bh-avatar.tsx::AvatarStatus"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The status indicator (online, offline, or none)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "status",
                "defaultValue": "'none'"
            },
            "text": {
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
                    "text": "Text to display for text-type avatars (initials)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "text",
                "defaultValue": "'RD'"
            },
            "imageSrc": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Image source URL for image-type avatars"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "image-src"
            },
            "alt": {
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
                    "text": "Alt text for the avatar image"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "alt",
                "defaultValue": "'Avatar'"
            }
        };
    }
    static get events() {
        return [{
                "method": "bhMouseEnter",
                "name": "bhMouseEnter",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the avatar is hovered"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "bhMouseLeave",
                "name": "bhMouseLeave",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the mouse leaves the avatar"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=bh-avatar.js.map
