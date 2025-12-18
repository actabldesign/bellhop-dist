import { h } from "@stencil/core";
export class BhPagination {
    /**
     * Current page (1-indexed)
     */
    page = 1;
    /**
     * Total number of items
     */
    totalItems = 0;
    /**
     * Number of items per page
     */
    pageSize = 10;
    /**
     * Available page size options
     */
    pageSizeOptions = [10, 25, 50, 100];
    /**
     * Show page size selector
     */
    showPageSizeSelector = true;
    /**
     * Show item count info (e.g., "Showing 1 to 10 of 100 results")
     */
    showItemCount = true;
    /**
     * Show first/last page buttons
     */
    showFirstLastButtons = true;
    /**
     * Size variant of the pagination
     */
    size = 'md';
    /**
     * Whether the pagination is disabled
     */
    disabled = false;
    /**
     * Label for "Rows per page" text (for i18n)
     */
    rowsPerPageLabel = 'Rows per page:';
    /**
     * Label template for showing results (use {start}, {end}, {total} placeholders)
     */
    showingResultsLabel = 'Showing {start} to {end} of {total} results';
    /**
     * Label template for page info when total items unknown (use {page}, {totalPages} placeholders)
     */
    pageInfoLabel = 'Page {page} of {totalPages}';
    internalPage = 1;
    internalPageSize = 10;
    /**
     * Emitted when the page changes
     */
    bhPageChange;
    /**
     * Emitted when page size changes
     */
    bhPageSizeChange;
    componentWillLoad() {
        this.internalPage = this.page;
        this.internalPageSize = this.pageSize;
    }
    get totalPages() {
        return Math.max(1, Math.ceil(this.totalItems / this.internalPageSize));
    }
    get startItem() {
        if (this.totalItems === 0)
            return 0;
        return (this.internalPage - 1) * this.internalPageSize + 1;
    }
    get endItem() {
        return Math.min(this.internalPage * this.internalPageSize, this.totalItems);
    }
    get canGoPrevious() {
        return this.internalPage > 1 && !this.disabled;
    }
    get canGoNext() {
        return this.internalPage < this.totalPages && !this.disabled;
    }
    goToPage(newPage) {
        if (this.disabled)
            return;
        const page = Math.max(1, Math.min(newPage, this.totalPages));
        if (page !== this.internalPage) {
            this.internalPage = page;
            this.page = page;
            this.bhPageChange.emit({ page, pageSize: this.internalPageSize });
        }
    }
    handlePageSizeChange(event) {
        if (this.disabled)
            return;
        const select = event.target;
        const newPageSize = parseInt(select.value, 10);
        if (newPageSize !== this.internalPageSize) {
            this.internalPageSize = newPageSize;
            this.pageSize = newPageSize;
            // Reset to page 1 when page size changes, or adjust if current page is now out of bounds
            const newTotalPages = Math.max(1, Math.ceil(this.totalItems / newPageSize));
            const newPage = Math.min(this.internalPage, newTotalPages);
            if (newPage !== this.internalPage) {
                this.internalPage = newPage;
                this.page = newPage;
            }
            this.bhPageSizeChange.emit({ page: this.internalPage, pageSize: newPageSize });
        }
    }
    goToFirst = () => this.goToPage(1);
    goToPrevious = () => this.goToPage(this.internalPage - 1);
    goToNext = () => this.goToPage(this.internalPage + 1);
    goToLast = () => this.goToPage(this.totalPages);
    getInfoText() {
        if (this.totalItems === 0) {
            return 'No results';
        }
        if (this.showItemCount && this.totalItems > 0) {
            return this.showingResultsLabel
                .replace('{start}', String(this.startItem))
                .replace('{end}', String(this.endItem))
                .replace('{total}', String(this.totalItems));
        }
        return this.pageInfoLabel
            .replace('{page}', String(this.internalPage))
            .replace('{totalPages}', String(this.totalPages));
    }
    render() {
        const paginationClasses = {
            'pagination': true,
            [`pagination-${this.size}`]: true,
            'pagination-disabled': this.disabled,
        };
        return (h("div", { key: '9e9cbcde6a010fdbbbd809a3f576b40fe7f905cc', class: paginationClasses, role: "navigation", "aria-label": "Pagination" }, h("div", { key: '212d0b1627b0897ceecd0298e8928a4ec11441d7', class: "pagination-info" }, h("span", { key: 'ab37b52387fd66f583b67fd96ce396b6649d31d0', class: "pagination-info-text" }, this.getInfoText())), h("div", { key: '46793889c3efa38e28171759ea3fb2b22ddcb03c', class: "pagination-controls" }, this.showPageSizeSelector && (h("div", { key: '87eccc7848ef35ad61605d2b9539cf40add8a79c', class: "pagination-page-size" }, h("span", { key: 'b3ff61dceff7cc57240c724150fee5b199a17ed8', class: "pagination-page-size-label" }, this.rowsPerPageLabel), h("select", { key: 'ab2ddd0f5f2b3501ff06d5717f2ed543a3446651', class: "pagination-select", onChange: (e) => this.handlePageSizeChange(e), disabled: this.disabled, "aria-label": "Select page size" }, this.pageSizeOptions.map((size) => (h("option", { key: size, value: String(size), selected: size === this.internalPageSize }, size)))))), h("div", { key: 'fddb9153daa2703afbd384f972332040c76efa25', class: "pagination-nav" }, this.showFirstLastButtons && (h("button", { key: '5637468db69936eb008bf96d8e77ca8c860fa9e2', type: "button", class: "pagination-btn", onClick: this.goToFirst, disabled: !this.canGoPrevious, "aria-label": "Go to first page" }, h("span", { key: '37699a8026bdecf7858d3c5a0aa313f99acd6d28', class: "material-symbols-outlined" }, "first_page"))), h("button", { key: '590190edfc67218a19f647eb562b233d598cbbea', type: "button", class: "pagination-btn", onClick: this.goToPrevious, disabled: !this.canGoPrevious, "aria-label": "Go to previous page" }, h("span", { key: '45881aefbbc5e51adaa451ba3454a73a684613cb', class: "material-symbols-outlined" }, "chevron_left")), h("button", { key: '5d0592a32bba88bbe60f41318d3cd1d03a103f5d', type: "button", class: "pagination-btn", onClick: this.goToNext, disabled: !this.canGoNext, "aria-label": "Go to next page" }, h("span", { key: 'ae875c91c0d56757df0a78dcd645958e08e3ebde', class: "material-symbols-outlined" }, "chevron_right")), this.showFirstLastButtons && (h("button", { key: 'd97749c9c057100f145546b8a163681eb29b7358', type: "button", class: "pagination-btn", onClick: this.goToLast, disabled: !this.canGoNext, "aria-label": "Go to last page" }, h("span", { key: '58adc8bcac84c4af6bc67650e2fef83dfbeaa1e7', class: "material-symbols-outlined" }, "last_page")))))));
    }
    static get is() { return "bh-pagination"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-pagination.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-pagination.css"]
        };
    }
    static get properties() {
        return {
            "page": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Current page (1-indexed)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "page",
                "defaultValue": "1"
            },
            "totalItems": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Total number of items"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "total-items",
                "defaultValue": "0"
            },
            "pageSize": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Number of items per page"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "page-size",
                "defaultValue": "10"
            },
            "pageSizeOptions": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "number[]",
                    "resolved": "number[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Available page size options"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[10, 25, 50, 100]"
            },
            "showPageSizeSelector": {
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
                    "text": "Show page size selector"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-page-size-selector",
                "defaultValue": "true"
            },
            "showItemCount": {
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
                    "text": "Show item count info (e.g., \"Showing 1 to 10 of 100 results\")"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-item-count",
                "defaultValue": "true"
            },
            "showFirstLastButtons": {
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
                    "text": "Show first/last page buttons"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-first-last-buttons",
                "defaultValue": "true"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "PaginationSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "PaginationSize": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-pagination/bh-pagination.tsx",
                            "id": "src/components/bh-pagination/bh-pagination.tsx::PaginationSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size variant of the pagination"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'md'"
            },
            "disabled": {
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
                    "text": "Whether the pagination is disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "rowsPerPageLabel": {
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
                    "text": "Label for \"Rows per page\" text (for i18n)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "rows-per-page-label",
                "defaultValue": "'Rows per page:'"
            },
            "showingResultsLabel": {
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
                    "text": "Label template for showing results (use {start}, {end}, {total} placeholders)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "showing-results-label",
                "defaultValue": "'Showing {start} to {end} of {total} results'"
            },
            "pageInfoLabel": {
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
                    "text": "Label template for page info when total items unknown (use {page}, {totalPages} placeholders)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "page-info-label",
                "defaultValue": "'Page {page} of {totalPages}'"
            }
        };
    }
    static get states() {
        return {
            "internalPage": {},
            "internalPageSize": {}
        };
    }
    static get events() {
        return [{
                "method": "bhPageChange",
                "name": "bhPageChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the page changes"
                },
                "complexType": {
                    "original": "PaginationChangeEvent",
                    "resolved": "PaginationChangeEvent",
                    "references": {
                        "PaginationChangeEvent": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-pagination/bh-pagination.tsx",
                            "id": "src/components/bh-pagination/bh-pagination.tsx::PaginationChangeEvent"
                        }
                    }
                }
            }, {
                "method": "bhPageSizeChange",
                "name": "bhPageSizeChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when page size changes"
                },
                "complexType": {
                    "original": "PaginationChangeEvent",
                    "resolved": "PaginationChangeEvent",
                    "references": {
                        "PaginationChangeEvent": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-pagination/bh-pagination.tsx",
                            "id": "src/components/bh-pagination/bh-pagination.tsx::PaginationChangeEvent"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=bh-pagination.js.map
