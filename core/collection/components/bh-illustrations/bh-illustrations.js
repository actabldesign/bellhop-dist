import { h, Host } from "@stencil/core";
export class BhIllustrations {
    /**
     * Size of the illustration
     */
    size = 'lg';
    /**
     * Title text to display below the illustration
     */
    illustrationTitle;
    /**
     * Description text to display below the title
     */
    description;
    /**
     * Path to the SVG illustration
     */
    svgPath = '/illustrations/Search-not-found.svg';
    /**
     * Alt text for the illustration image
     */
    alt = 'Illustration';
    getSvgDimensions() {
        switch (this.size) {
            case 'sm':
                return { width: 120, height: 120 };
            case 'md':
                return { width: 160, height: 160 };
            case 'lg':
                return { width: 200, height: 200 };
            case 'xl':
                return { width: 280, height: 280 };
            case '2xl':
                return { width: 360, height: 360 };
            case '3xl':
                return { width: 480, height: 480 };
            case '4xl':
                return { width: 600, height: 600 };
            default:
                return { width: 200, height: 200 };
        }
    }
    render() {
        const dimensions = this.getSvgDimensions();
        return (h(Host, { key: '673e24fb8f562656d47c1261fc3a2161086984af' }, h("div", { key: 'f2e405ef5a09b1e23e64fe1c4469a796b138902e', class: `illustration illustration-${this.size}` }, h("div", { key: '6b158db312cb292112fb8ff3c5b083d9dade7d3f', class: "illustration-wrapper" }, h("div", { key: '87f0d6895d021d1ee947b8f67cc306b6c6109330', class: "illustration-svg-container", style: {
                width: `${dimensions.width}px`,
                height: `${dimensions.height}px`,
            } }, h("img", { key: '4b9552d1b82a0487248c57efaceb4c86258dc25e', src: this.svgPath, alt: this.alt, style: {
                width: `${dimensions.width}px`,
                height: `${dimensions.height}px`,
            }, class: "illustration-image" })), (this.illustrationTitle || this.description) && (h("div", { key: 'f65786a700b2683beeb7f1e28fd64ef0edb6702b', class: "illustration-content" }, this.illustrationTitle && (h("h3", { key: '7095e9fd459a45141fe3ae83c2ee69be996eac0f', class: "illustration-title" }, this.illustrationTitle)), this.description && (h("p", { key: 'd10751d18943f0cca55cf2bc1f04514f94beceb9', class: "illustration-description" }, this.description))))))));
    }
    static get is() { return "bh-illustrations"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-illustrations.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-illustrations.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "IllustrationSize",
                    "resolved": "\"2xl\" | \"3xl\" | \"4xl\" | \"lg\" | \"md\" | \"sm\" | \"xl\"",
                    "references": {
                        "IllustrationSize": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-illustrations/bh-illustrations.tsx",
                            "id": "src/components/bh-illustrations/bh-illustrations.tsx::IllustrationSize"
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
                "attribute": "size",
                "defaultValue": "'lg'"
            },
            "illustrationTitle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Title text to display below the illustration"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "illustration-title"
            },
            "description": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Description text to display below the title"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "description"
            },
            "svgPath": {
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
                    "text": "Path to the SVG illustration"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "svg-path",
                "defaultValue": "'/illustrations/Search-not-found.svg'"
            },
            "alt": {
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
                    "text": "Alt text for the illustration image"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "alt",
                "defaultValue": "'Illustration'"
            }
        };
    }
}
//# sourceMappingURL=bh-illustrations.js.map
