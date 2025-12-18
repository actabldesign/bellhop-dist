import { h } from "@stencil/core";
export class BhAvatarStacked {
    /**
     * The size of the avatars in the stack
     */
    size = 'md';
    /**
     * JSON array of avatar data
     */
    avatars = '[]';
    /**
     * Maximum number of visible avatars before showing count
     */
    maxVisible = 10;
    /**
     * Whether to show the add button
     */
    showAddButton = true;
    /**
     * Tooltip text for the add button
     */
    addTooltipText = 'Add member';
    /**
     * Track hovered avatar index for tooltips
     */
    hoveredIndex = -1;
    /**
     * Track add button hover state
     */
    addButtonHovered = false;
    getParsedAvatars() {
        try {
            return JSON.parse(this.avatars);
        }
        catch {
            return [];
        }
    }
    getAvatarSize() {
        const sizeMap = {
            xs: 24,
            sm: 32,
            md: 40,
            lg: 48,
            xl: 56,
            '2xl': 64,
        };
        return sizeMap[this.size] || 40;
    }
    getOffset() {
        const avatarSize = this.getAvatarSize();
        return Math.floor(avatarSize * 0.3);
    }
    mapAvatarType(type) {
        if (type === 'icon') {
            return 'placeholder';
        }
        return type;
    }
    render() {
        const parsedAvatars = this.getParsedAvatars();
        const visibleAvatars = parsedAvatars.slice(0, this.maxVisible - 1);
        const remainingCount = parsedAvatars.length - (this.maxVisible - 1);
        const showCountAvatar = remainingCount > 0;
        const offset = this.getOffset();
        return (h("div", { key: 'ec073586cb5f8bc0f0b8a19c1fd38fb3103c22d9', class: `avatar-stacked avatar-stacked-${this.size}`, part: "container" }, visibleAvatars.map((avatar, index) => (h("div", { class: "avatar-item", style: { marginLeft: index > 0 ? `-${offset}px` : '0' }, onMouseEnter: () => {
                this.hoveredIndex = index;
            }, onMouseLeave: () => {
                this.hoveredIndex = -1;
            } }, h("bh-avatar", { type: this.mapAvatarType(avatar.type), size: this.size, imageSrc: avatar.imageSrc, text: avatar.text || '?', alt: avatar.text || 'Avatar' }), avatar.tooltipText && (h("bh-tooltip", { text: avatar.tooltipText, visible: this.hoveredIndex === index, position: "bottom" }))))), showCountAvatar && (h("div", { key: 'c1421d02eb8cc02c9294a654e3d735a8e0513d8a', class: "avatar-item", style: {
                marginLeft: visibleAvatars.length > 0 ? `-${offset}px` : '0',
            } }, h("bh-avatar", { key: '7ea83fff361629de7f68bd7a830531657d454566', type: "text", size: this.size, text: `+${remainingCount}`, alt: `${remainingCount} more` }))), this.showAddButton && (h("div", { key: 'd14845e1ea91c131af6e2ae2c658f7c267cb2281', class: "avatar-item", style: {
                marginLeft: visibleAvatars.length > 0 || showCountAvatar
                    ? `-${offset}px`
                    : '0',
            }, onMouseEnter: () => {
                this.addButtonHovered = true;
            }, onMouseLeave: () => {
                this.addButtonHovered = false;
            } }, h("bh-avatar-add", { key: '719740919ab99129f93963775976fb5a2f0c4523', size: this.size, showTooltip: true, tooltipText: this.addTooltipText })))));
    }
    static get is() { return "bh-avatar-stacked"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-avatar-stacked.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-avatar-stacked.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AvatarStackedSize",
                    "resolved": "\"2xl\" | \"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\"",
                    "references": {
                        "AvatarStackedSize": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-avatar-stacked/bh-avatar-stacked.tsx",
                            "id": "src/components/bh-avatar-stacked/bh-avatar-stacked.tsx::AvatarStackedSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the avatars in the stack"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'md'"
            },
            "avatars": {
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
                    "text": "JSON array of avatar data"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "avatars",
                "defaultValue": "'[]'"
            },
            "maxVisible": {
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
                    "text": "Maximum number of visible avatars before showing count"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-visible",
                "defaultValue": "10"
            },
            "showAddButton": {
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
                    "text": "Whether to show the add button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-add-button",
                "defaultValue": "true"
            },
            "addTooltipText": {
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
                    "text": "Tooltip text for the add button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "add-tooltip-text",
                "defaultValue": "'Add member'"
            }
        };
    }
    static get states() {
        return {
            "hoveredIndex": {},
            "addButtonHovered": {}
        };
    }
}
//# sourceMappingURL=bh-avatar-stacked.js.map
