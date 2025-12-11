import { h } from "@stencil/core";
export class BhNotification {
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
    static get is() { return "bh-notification"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-notification.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-notification.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NotificationType",
                    "resolved": "\"default\" | \"error\" | \"feature\" | \"primary\" | \"success\" | \"warning\"",
                    "references": {
                        "NotificationType": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-notification/bh-notification.tsx",
                            "id": "src/components/bh-notification/bh-notification.tsx::NotificationType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Type of notification (determines color and icon)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type",
                "defaultValue": "'default'"
            },
            "notificationTitle": {
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
                    "text": "Notification title"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "notification-title",
                "defaultValue": "''"
            },
            "description": {
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
                    "text": "Notification description"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "description",
                "defaultValue": "''"
            },
            "actionText": {
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
                    "text": "Text for the action button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "action-text",
                "defaultValue": "''"
            },
            "dismissText": {
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
                    "text": "Text for the dismiss button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dismiss-text",
                "defaultValue": "''"
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
                    "text": "Whether to show the close button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dismissible",
                "defaultValue": "true"
            },
            "icon": {
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
                    "text": "Custom icon name (overrides type-based icon)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon",
                "defaultValue": "''"
            }
        };
    }
    static get events() {
        return [{
                "method": "bhAction",
                "name": "bhAction",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when action button is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
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
            }, {
                "method": "bhClose",
                "name": "bhClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when close button is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=bh-notification.js.map
