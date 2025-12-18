import { r as registerInstance, c as createEvent, h } from './index-nAAobRRQ.js';

const bhAvatarCss = ":host{display:inline-block}.avatar{position:relative;display:inline-flex;align-items:center;justify-content:center;border-radius:50%;background-color:var(--color-neutral-100);flex-shrink:0}.avatar-xxs{width:16px;height:16px}.avatar-xs{width:24px;height:24px}.avatar-sm{width:32px;height:32px}.avatar-md{width:40px;height:40px}.avatar-lg{width:48px;height:48px}.avatar-xl{width:56px;height:56px}.avatar-2xl{width:64px;height:64px}.avatar-border{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:50%;pointer-events:none;z-index:1}.avatar-xs .avatar-border,.avatar-sm .avatar-border{border:0.5px solid var(--color-neutral-400)}.avatar-md .avatar-border,.avatar-lg .avatar-border,.avatar-xl .avatar-border,.avatar-2xl .avatar-border{border:0.75px solid var(--color-neutral-400)}.avatar-content{position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;border-radius:50%;overflow:hidden;z-index:0}.avatar-image{width:100%;height:100%;object-fit:cover;border-radius:50%;aspect-ratio:1 / 1}.avatar-placeholder-icon{color:var(--color-neutral-500);line-height:1;display:flex;align-items:center;justify-content:center}.avatar-text{color:var(--color-neutral-500);font-family:var(--font-inter);font-weight:var(--weight-semibold);text-align:center;line-height:1}.text-xxs{font-size:10px;line-height:1.6em}.text-xs{font-size:12px;line-height:1.5em}.text-sm{font-size:var(--text-sm-size);line-height:var(--text-sm-line)}.text-md{font-size:var(--text-md-size);line-height:var(--text-md-line)}.text-lg{font-size:18px;line-height:1.56em}.text-xl{font-size:20px;line-height:1.5em}.text-2xl{font-size:24px;line-height:1.33em}.icon-sm{font-size:16px}.icon-md{font-size:20px}.icon-lg{font-size:24px}.icon-xl{font-size:28px}.icon-2xl{font-size:32px}.icon-3xl{font-size:36px}.icon-4xl{font-size:40px}.avatar-status{position:absolute;border-radius:50%;background-color:var(--color-success-500);border:1.5px solid var(--color-white);z-index:2}.avatar-status-online{background-color:var(--color-success-500)}.avatar-status-offline{background-color:var(--color-neutral-400)}.avatar-status-xxs{width:4px;height:4px;bottom:0;right:0}.avatar-status-xs{width:6px;height:6px;bottom:0;right:0}.avatar-status-sm{width:8px;height:8px;bottom:0;right:0}.avatar-status-md{width:10px;height:10px;bottom:0;right:0}.avatar-status-lg{width:12px;height:12px;bottom:0;right:0}.avatar-status-xl{width:14px;height:14px;bottom:0;right:0}.avatar-status-2xl{width:16px;height:16px;bottom:0;right:0}";

const BhAvatar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bhMouseEnter = createEvent(this, "bhMouseEnter");
        this.bhMouseLeave = createEvent(this, "bhMouseLeave");
    }
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
};
BhAvatar.style = bhAvatarCss;

export { BhAvatar as bh_avatar };
//# sourceMappingURL=bh-avatar.entry.js.map
