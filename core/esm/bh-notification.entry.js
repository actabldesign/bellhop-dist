import { r as registerInstance, c as createEvent, h } from './index-DtVghh5W.js';

const bhNotificationCss = ":host{display:block;font-family:var(\n    --font-inter,\n    'Inter',\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif\n  )}.notification{display:flex;align-items:flex-start;gap:16px;padding:16px;background:var(--color-white, #ffffff);border:1px solid var(--color-neutral-200, #eaecf0);border-radius:12px;box-shadow:0 1px 3px rgba(16, 24, 40, 0.1), 0 1px 2px rgba(16, 24, 40, 0.06);position:relative}.notification-content{display:flex;gap:12px;flex:1;min-width:0}.notification-icon-wrapper{flex-shrink:0}.notification-text{display:flex;flex-direction:column;gap:12px;flex:1;min-width:0}.notification-text-wrapper{display:flex;flex-direction:column;gap:4px}.notification-title{font-size:var(--text-sm-size, 14px);font-weight:600;color:var(--color-neutral-900, #101828);margin:0;line-height:1.43}.notification-description{font-size:var(--text-sm-size, 14px);font-weight:400;color:var(--color-neutral-600, #475467);margin:0;line-height:1.43}.notification-actions{display:flex;gap:12px}.notification-close{position:absolute;top:8px;right:8px;display:flex;align-items:center;justify-content:center;width:20px;height:20px;padding:0;border:none;background:transparent;cursor:pointer;border-radius:4px;transition:background 0.2s ease-in-out}.notification-close:hover{background:var(--color-neutral-100, #f2f4f7)}.close-icon{font-size:16px;color:var(--color-neutral-400, #98a2b3)}.material-symbols-outlined{font-family:'Material Symbols Outlined';font-weight:normal;font-style:normal;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:'liga';-webkit-font-smoothing:antialiased;font-variation-settings:'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24}";

const BhNotification = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bhAction = createEvent(this, "bhAction");
        this.bhDismiss = createEvent(this, "bhDismiss");
        this.bhClose = createEvent(this, "bhClose");
    }
    /**
     * Type of notification (determines color and icon)
     */
    type = 'default';
    /**
     * Notification title
     */
    notificationTitle = '';
    /**
     * Notification description
     */
    description = '';
    /**
     * Text for the action button
     */
    actionText = '';
    /**
     * Text for the dismiss button
     */
    dismissText = '';
    /**
     * Whether to show the close button
     */
    dismissible = true;
    /**
     * Custom icon name (overrides type-based icon)
     */
    icon = '';
    /**
     * Emitted when action button is clicked
     */
    bhAction;
    /**
     * Emitted when dismiss button is clicked
     */
    bhDismiss;
    /**
     * Emitted when close button is clicked
     */
    bhClose;
    getIconName() {
        if (this.icon)
            return this.icon;
        switch (this.type) {
            case 'primary':
                return 'new_releases';
            case 'success':
                return 'check_circle';
            case 'error':
                return 'error';
            case 'warning':
                return 'warning';
            case 'feature':
                return 'rocket_launch';
            case 'default':
                return 'info';
            default:
                return 'info';
        }
    }
    getIconColor() {
        switch (this.type) {
            case 'primary':
                return 'brand';
            case 'success':
                return 'success';
            case 'error':
                return 'error';
            case 'warning':
                return 'warning';
            case 'feature':
                return 'highlight';
            case 'default':
            default:
                return 'gray';
        }
    }
    getIconStyle() {
        switch (this.type) {
            case 'primary':
                return 'outlined';
            case 'success':
                return 'filled';
            case 'error':
                return 'filled';
            case 'warning':
                return 'filled';
            case 'feature':
                return 'outlined';
            case 'default':
            default:
                return 'outlined';
        }
    }
    handleAction = () => {
        this.bhAction.emit();
    };
    handleDismiss = () => {
        this.bhDismiss.emit();
    };
    handleClose = () => {
        this.bhClose.emit();
    };
    render() {
        const notificationClasses = {
            notification: true,
            [`notification-${this.type}`]: true,
        };
        return (h("div", { key: '515c579b7f77846984dcb59b12c51714cd522c90', class: notificationClasses, role: "alert", part: "container" }, h("div", { key: '6fa7a5ff931a4a5c798364e20c3cc295fd974617', class: "notification-content" }, h("div", { key: '3720231fd305c2c93e8b4baef2fc93403fed8748', class: "notification-icon-wrapper" }, h("bh-featured-icon", { key: 'eafe7f9f29cc2dfaca9cfc116a033e1a62583af0', icon: this.getIconName(), color: this.getIconColor(), size: "sm", iconStyle: this.getIconStyle() })), h("div", { key: 'fc7ae04d183ba374eabd77b103351da1eb2bb0f0', class: "notification-text" }, h("div", { key: 'e3377410aa9c6463e468195c18311b3498a6cb7c', class: "notification-text-wrapper" }, this.notificationTitle && (h("h3", { key: 'f277e1461742af2a03484a7e1f326f1616c5e341', class: "notification-title" }, this.notificationTitle)), this.description && (h("p", { key: '76bbc3b8ae19325a3304abf2fec2a43459b75e4d', class: "notification-description" }, this.description))), (this.actionText || this.dismissText) && (h("div", { key: 'ea940be7065dc17a70c9783e65383b0b820f1064', class: "notification-actions" }, this.dismissText && (h("bh-button", { key: 'b5ec730be6f688456c5105475240b695d7805e4f', hierarchy: "quaternary", size: "sm", label: this.dismissText, icon: "none", onBhClick: this.handleDismiss })), this.actionText && (h("bh-button", { key: '22f5a5ffb96d978c884678047ec73252baca3338', hierarchy: "quaternary", size: "sm", label: this.actionText, icon: "none", onBhClick: this.handleAction })))))), this.dismissible && (h("button", { key: '65bf8f837739ce1216375d42d2cf00166f524135', class: "notification-close", onClick: this.handleClose, "aria-label": "Close notification" }, h("span", { key: '4e4040982feb853b3e2c20af1c948edd49e8c6fe', class: "material-symbols-outlined close-icon" }, "close")))));
    }
};
BhNotification.style = bhNotificationCss;

export { BhNotification as bh_notification };
//# sourceMappingURL=bh-notification.entry.js.map
