import { h } from "@stencil/core";
export class BhEmptyState {
    /**
     * Title text
     */
    emptyTitle = 'No items found';
    /**
     * Description text
     */
    description = 'There are no items to display at the moment.';
    /**
     * Size of the illustration
     */
    illustrationSize = 'md';
    /**
     * Path to the illustration SVG
     */
    illustrationPath = '';
    /**
     * Primary action button text
     */
    primaryActionText = '';
    /**
     * Primary action icon name
     */
    primaryActionIcon = '';
    /**
     * Secondary action button text
     */
    secondaryActionText = '';
    /**
     * Secondary action icon name
     */
    secondaryActionIcon = '';
    /**
     * Max width of the component
     */
    maxWidth = '512px';
    /**
     * Emitted when primary action is clicked
     */
    bhPrimaryAction;
    /**
     * Emitted when secondary action is clicked
     */
    bhSecondaryAction;
    handlePrimaryAction = () => {
        this.bhPrimaryAction.emit();
    };
    handleSecondaryAction = () => {
        this.bhSecondaryAction.emit();
    };
    getIllustrationDimensions() {
        switch (this.illustrationSize) {
            case 'sm':
                return { width: '120px', height: '120px' };
            case 'md':
                return { width: '200px', height: '200px' };
            case 'lg':
                return { width: '280px', height: '280px' };
            default:
                return { width: '200px', height: '200px' };
        }
    }
    render() {
        const dimensions = this.getIllustrationDimensions();
        const hasActions = this.primaryActionText || this.secondaryActionText;
        return (h("div", { key: 'd25e80c0d5a44b64857738218974a5ed2de4c666', class: "empty-state", style: { maxWidth: this.maxWidth }, part: "container" }, h("div", { key: 'ca13b3b4b7f3945a73bd32b0d17c6356642a2be6', class: "empty-state-content" }, this.illustrationPath && (h("div", { key: 'f193ab78011e2623904510e39bbd56a61cf89af3', class: "empty-state-illustration" }, h("img", { key: 'f8ed7362c0dc30d2e0c0f893915ffa35cee14f53', src: this.illustrationPath, alt: "Empty state illustration", style: { width: dimensions.width, height: dimensions.height } }))), h("div", { key: '771789a873d3ae8453cc53747c935995ffb02b88', class: "empty-state-text" }, h("h3", { key: 'c55280f9bbb70da172ccfe6f701359416cc56c16', class: "empty-state-title" }, this.emptyTitle), h("p", { key: '795a71c84acd99ab74c77ef08ed960ba675f224a', class: "empty-state-description" }, this.description))), hasActions && (h("div", { key: '8526717a12dbab631d874f2155411ebaf7908a29', class: "empty-state-actions" }, this.secondaryActionText && (h("bh-button", { key: 'b3aca034c568c021735bf1dd10543972352c316f', hierarchy: "secondary", size: "md", label: this.secondaryActionText, icon: this.secondaryActionIcon ? 'leading' : 'none', iconName: this.secondaryActionIcon, onBhClick: this.handleSecondaryAction })), this.primaryActionText && (h("bh-button", { key: '95bb81b7bf7669668d12427eedf1564f07266d72', hierarchy: "primary", size: "md", label: this.primaryActionText, icon: this.primaryActionIcon ? 'leading' : 'none', iconName: this.primaryActionIcon, onBhClick: this.handlePrimaryAction }))))));
    }
    static get is() { return "bh-empty-state"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-empty-state.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-empty-state.css"]
        };
    }
    static get properties() {
        return {
            "emptyTitle": {
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
                    "text": "Title text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "empty-title",
                "defaultValue": "'No items found'"
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
                    "text": "Description text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "description",
                "defaultValue": "'There are no items to display at the moment.'"
            },
            "illustrationSize": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "EmptyStateIllustrationSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "EmptyStateIllustrationSize": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-empty-state/bh-empty-state.tsx",
                            "id": "src/components/bh-empty-state/bh-empty-state.tsx::EmptyStateIllustrationSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of the illustration"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "illustration-size",
                "defaultValue": "'md'"
            },
            "illustrationPath": {
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
                    "text": "Path to the illustration SVG"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "illustration-path",
                "defaultValue": "''"
            },
            "primaryActionText": {
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
                    "text": "Primary action button text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "primary-action-text",
                "defaultValue": "''"
            },
            "primaryActionIcon": {
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
                    "text": "Primary action icon name"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "primary-action-icon",
                "defaultValue": "''"
            },
            "secondaryActionText": {
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
                    "text": "Secondary action button text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "secondary-action-text",
                "defaultValue": "''"
            },
            "secondaryActionIcon": {
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
                    "text": "Secondary action icon name"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "secondary-action-icon",
                "defaultValue": "''"
            },
            "maxWidth": {
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
                    "text": "Max width of the component"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-width",
                "defaultValue": "'512px'"
            }
        };
    }
    static get events() {
        return [{
                "method": "bhPrimaryAction",
                "name": "bhPrimaryAction",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when primary action is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "bhSecondaryAction",
                "name": "bhSecondaryAction",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when secondary action is clicked"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=bh-empty-state.js.map
