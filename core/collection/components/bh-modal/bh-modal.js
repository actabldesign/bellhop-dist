import { h, Host } from "@stencil/core";
const MODAL_WIDTHS = {
    sm: '400px',
    md: '480px',
    lg: '520px',
    xl: '640px',
    xxl: '688px',
};
export class BhModal {
    /**
     * Whether the modal is visible
     */
    visible = false;
    /**
     * Whether to show the backdrop overlay
     */
    overlay = true;
    /**
     * Preset width of the modal: sm (400px), md (480px), lg (520px), xl (640px), xxl (688px)
     */
    width = 'sm';
    /**
     * Emitted when the modal is closed (overlay click or close button)
     */
    bhClose;
    handleClose = () => {
        this.bhClose.emit();
    };
    handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            this.handleClose();
        }
    };
    render() {
        if (!this.visible)
            return null;
        const modalClasses = {
            'modal-wrapper': true,
            'modal-with-overlay': this.overlay,
        };
        return (h(Host, null, h("div", { class: modalClasses, onClick: this.handleOverlayClick }, this.overlay && h("div", { class: "modal-overlay" }), h("div", { class: "modal", style: { maxWidth: MODAL_WIDTHS[this.width] } }, h("slot", { name: "header" }), h("slot", null), h("slot", { name: "actions" })))));
    }
    static get is() { return "bh-modal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-modal.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-modal.css"]
        };
    }
    static get properties() {
        return {
            "visible": {
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
                    "text": "Whether the modal is visible"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "visible",
                "defaultValue": "false"
            },
            "overlay": {
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
                    "text": "Whether to show the backdrop overlay"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "overlay",
                "defaultValue": "true"
            },
            "width": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ModalWidth",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xl\" | \"xxl\"",
                    "references": {
                        "ModalWidth": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-modal/bh-modal.tsx",
                            "id": "src/components/bh-modal/bh-modal.tsx::ModalWidth"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Preset width of the modal: sm (400px), md (480px), lg (520px), xl (640px), xxl (688px)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "width",
                "defaultValue": "'sm'"
            }
        };
    }
    static get events() {
        return [{
                "method": "bhClose",
                "name": "bhClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the modal is closed (overlay click or close button)"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=bh-modal.js.map
