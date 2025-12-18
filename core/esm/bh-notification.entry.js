import { r as registerInstance, c as createEvent, h } from './index-nAAobRRQ.js';

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
        return (h("div", { key: 'fcb47a9bab423243efac149251f6afbc313568c3', class: notificationClasses, role: "alert", part: "container" }, h("div", { key: 'f6119ec2b3ab549dde69e1817c39bb521c638c5e', class: "notification-content" }, h("div", { key: '9bcf5d938af89f34497e1a7d4bf80430dd79f5f3', class: "notification-icon-wrapper" }, h("bh-featured-icon", { key: 'ddfd7940aa41cce00a2e3cfc6aec3b85ca8628da', icon: this.getIconName(), color: this.getIconColor(), size: "sm", iconStyle: this.getIconStyle() })), h("div", { key: '4d77b106b4aeb8f550400baeed83efdf24c363e5', class: "notification-text" }, h("div", { key: '1933de95730dbb964e2bf17d065eb1848f3edb74', class: "notification-text-wrapper" }, this.notificationTitle && (h("h3", { key: '6925b30a9fb845344bd8fcb517d2f31b2b5c755e', class: "notification-title" }, this.notificationTitle)), this.description && (h("p", { key: '2d38a7733397cd7e596b7794e0c387ff97002ae2', class: "notification-description" }, this.description))), (this.actionText || this.dismissText) && (h("div", { key: 'da9933044826eb1e46fbe308ef6bb3feff7d3f40', class: "notification-actions" }, this.dismissText && (h("bh-button", { key: '12c2caeb3cba2d40fbd1c095dcc652b3c7bf94cf', hierarchy: "quaternary", size: "sm", label: this.dismissText, icon: "none", onBhClick: this.handleDismiss })), this.actionText && (h("bh-button", { key: 'eb72fa328044931470e557f027812ec283b8db24', hierarchy: "quaternary", size: "sm", label: this.actionText, icon: "none", onBhClick: this.handleAction })))))), this.dismissible && (h("button", { key: '7bd46d3fec9ea41a24cd2fc975b3b526c38a3934', class: "notification-close", onClick: this.handleClose, "aria-label": "Close notification" }, h("span", { key: '6c680f4500026ac18dc3cf7587042ba9edf72ec2', class: "material-symbols-outlined close-icon" }, "close")))));
    }
};
BhNotification.style = bhNotificationCss;

export { BhNotification as bh_notification };
//# sourceMappingURL=bh-notification.entry.js.map
