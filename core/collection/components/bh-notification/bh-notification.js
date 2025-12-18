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
        return (h("div", { key: 'fcb47a9bab423243efac149251f6afbc313568c3', class: notificationClasses, role: "alert", part: "container" }, h("div", { key: 'f6119ec2b3ab549dde69e1817c39bb521c638c5e', class: "notification-content" }, h("div", { key: '9bcf5d938af89f34497e1a7d4bf80430dd79f5f3', class: "notification-icon-wrapper" }, h("bh-featured-icon", { key: 'ddfd7940aa41cce00a2e3cfc6aec3b85ca8628da', icon: this.getIconName(), color: this.getIconColor(), size: "sm", iconStyle: this.getIconStyle() })), h("div", { key: '4d77b106b4aeb8f550400baeed83efdf24c363e5', class: "notification-text" }, h("div", { key: '1933de95730dbb964e2bf17d065eb1848f3edb74', class: "notification-text-wrapper" }, this.notificationTitle && (h("h3", { key: '6925b30a9fb845344bd8fcb517d2f31b2b5c755e', class: "notification-title" }, this.notificationTitle)), this.description && (h("p", { key: '2d38a7733397cd7e596b7794e0c387ff97002ae2', class: "notification-description" }, this.description))), (this.actionText || this.dismissText) && (h("div", { key: 'da9933044826eb1e46fbe308ef6bb3feff7d3f40', class: "notification-actions" }, this.dismissText && (h("bh-button", { key: '12c2caeb3cba2d40fbd1c095dcc652b3c7bf94cf', hierarchy: "quaternary", size: "sm", label: this.dismissText, icon: "none", onBhClick: this.handleDismiss })), this.actionText && (h("bh-button", { key: 'eb72fa328044931470e557f027812ec283b8db24', hierarchy: "quaternary", size: "sm", label: this.actionText, icon: "none", onBhClick: this.handleAction })))))), this.dismissible && (h("button", { key: '7bd46d3fec9ea41a24cd2fc975b3b526c38a3934', class: "notification-close", onClick: this.handleClose, "aria-label": "Close notification" }, h("span", { key: '6c680f4500026ac18dc3cf7587042ba9edf72ec2', class: "material-symbols-outlined close-icon" }, "close")))));
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
