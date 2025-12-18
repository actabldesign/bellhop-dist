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
        return (h(Host, { key: '3de29d491a6ca150687d9ee0aaaac249d60cc966' }, h("div", { key: '03fe38b304e4f6f33018e29e3049ba32adc0dc5d', class: `illustration illustration-${this.size}` }, h("div", { key: '49ccf2fd59aee6ed12ae6a341732b98dbc39f60e', class: "illustration-wrapper" }, h("div", { key: '0f16a287aa62f2c0f44b08b92434c4495d140c56', class: "illustration-svg-container", style: {
                width: `${dimensions.width}px`,
                height: `${dimensions.height}px`,
            } }, h("img", { key: '1452a2a5215e1392bea453a1e06590e66c070370', src: this.svgPath, alt: this.alt, style: {
                width: `${dimensions.width}px`,
                height: `${dimensions.height}px`,
            }, class: "illustration-image" })), (this.illustrationTitle || this.description) && (h("div", { key: '5d57a72b5fa2537061212a20182a4b8802435ca9', class: "illustration-content" }, this.illustrationTitle && (h("h3", { key: '32e360bc3e5f033004a02e72f588066324a50781', class: "illustration-title" }, this.illustrationTitle)), this.description && (h("p", { key: '32b2d8ea6272362145e5de4ea6077f5ca6fb2373', class: "illustration-description" }, this.description))))))));
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
