'use strict';

var index = require('./index-DQwSUT6k.js');

const bhAvatarStackedCss = ":host{display:inline-block;font-family:var(\n    --font-inter,\n    'Inter',\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif\n  )}.avatar-stacked{display:flex;align-items:center}.avatar-item{position:relative;display:inline-flex}.avatar-item bh-avatar,.avatar-item bh-avatar-add{box-shadow:0 0 0 2px var(--color-white, #ffffff);border-radius:50%}";

const BhAvatarStacked = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
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
        return (index.h("div", { key: 'ec073586cb5f8bc0f0b8a19c1fd38fb3103c22d9', class: `avatar-stacked avatar-stacked-${this.size}`, part: "container" }, visibleAvatars.map((avatar, index$1) => (index.h("div", { class: "avatar-item", style: { marginLeft: index$1 > 0 ? `-${offset}px` : '0' }, onMouseEnter: () => {
                this.hoveredIndex = index$1;
            }, onMouseLeave: () => {
                this.hoveredIndex = -1;
            } }, index.h("bh-avatar", { type: this.mapAvatarType(avatar.type), size: this.size, imageSrc: avatar.imageSrc, text: avatar.text || '?', alt: avatar.text || 'Avatar' }), avatar.tooltipText && (index.h("bh-tooltip", { text: avatar.tooltipText, visible: this.hoveredIndex === index$1, position: "bottom" }))))), showCountAvatar && (index.h("div", { key: 'c1421d02eb8cc02c9294a654e3d735a8e0513d8a', class: "avatar-item", style: {
                marginLeft: visibleAvatars.length > 0 ? `-${offset}px` : '0',
            } }, index.h("bh-avatar", { key: '7ea83fff361629de7f68bd7a830531657d454566', type: "text", size: this.size, text: `+${remainingCount}`, alt: `${remainingCount} more` }))), this.showAddButton && (index.h("div", { key: 'd14845e1ea91c131af6e2ae2c658f7c267cb2281', class: "avatar-item", style: {
                marginLeft: visibleAvatars.length > 0 || showCountAvatar
                    ? `-${offset}px`
                    : '0',
            }, onMouseEnter: () => {
                this.addButtonHovered = true;
            }, onMouseLeave: () => {
                this.addButtonHovered = false;
            } }, index.h("bh-avatar-add", { key: '719740919ab99129f93963775976fb5a2f0c4523', size: this.size, showTooltip: true, tooltipText: this.addTooltipText })))));
    }
};
BhAvatarStacked.style = bhAvatarStackedCss;

exports.bh_avatar_stacked = BhAvatarStacked;
//# sourceMappingURL=bh-avatar-stacked.entry.cjs.js.map
