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
        return (h("div", { key: '726baf337a04c6f733957320b6efeb4a62cff3e8', class: "empty-state", style: { maxWidth: this.maxWidth }, part: "container" }, h("div", { key: '353101a9835cc3d88f5a97cca24585603f6b541f', class: "empty-state-content" }, this.illustrationPath && (h("div", { key: '2a1c5d14866012705df5f25d6096ba8c72cedf45', class: "empty-state-illustration" }, h("img", { key: 'aff2cf53fe902ab41a1708f7d56a8b2de75fd9dd', src: this.illustrationPath, alt: "Empty state illustration", style: { width: dimensions.width, height: dimensions.height } }))), h("div", { key: 'a9ffc2cf98530396089a3f97e74a936c454dca2d', class: "empty-state-text" }, h("h3", { key: 'dc547b53a660a139bd37c730b540ae199e64d17d', class: "empty-state-title" }, this.emptyTitle), h("p", { key: '55cdffdb165ac37592d479f13e2f31fe6bf41e1e', class: "empty-state-description" }, this.description))), hasActions && (h("div", { key: '57b26d57995e7f3c0f9086989f29b0fee4045d6a', class: "empty-state-actions" }, this.secondaryActionText && (h("bh-button", { key: 'f4bf465a1b45dfbf3fd0e86eb2adc44840891df7', hierarchy: "secondary", size: "md", label: this.secondaryActionText, icon: this.secondaryActionIcon ? 'leading' : 'none', iconName: this.secondaryActionIcon, onBhClick: this.handleSecondaryAction })), this.primaryActionText && (h("bh-button", { key: '3b2e7ec45aad23a60efe35c5fbe3fd572616e577', hierarchy: "primary", size: "md", label: this.primaryActionText, icon: this.primaryActionIcon ? 'leading' : 'none', iconName: this.primaryActionIcon, onBhClick: this.handlePrimaryAction }))))));
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
