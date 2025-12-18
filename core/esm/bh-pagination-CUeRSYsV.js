import { r as registerInstance, c as createEvent, h } from './index-nAAobRRQ.js';

const bhPaginationCss = ":host{display:block;font-family:var(--font-family-body, 'Inter', sans-serif)}.pagination{display:flex;align-items:center;justify-content:space-between;gap:var(--sp-4, 1rem);padding:var(--sp-3, 0.75rem) var(--sp-4, 1rem);background-color:var(--color-white, #fff);border-top:1px solid var(--color-neutral-200, #e2e4eb)}.pagination-sm{padding:var(--sp-2, 0.5rem) var(--sp-3, 0.75rem);gap:var(--sp-3, 0.75rem)}.pagination-sm .pagination-info-text,.pagination-sm .pagination-page-size-label{font-size:0.75rem}.pagination-sm .pagination-btn{width:28px;height:28px}.pagination-sm .pagination-btn .material-symbols-outlined{font-size:18px}.pagination-sm .pagination-select{height:28px;font-size:0.75rem;padding:0 var(--sp-5, 1.25rem) 0 var(--sp-2, 0.5rem)}.pagination-md{}.pagination-lg{padding:var(--sp-4, 1rem) var(--sp-5, 1.25rem);gap:var(--sp-5, 1.25rem)}.pagination-lg .pagination-info-text,.pagination-lg .pagination-page-size-label{font-size:0.9375rem}.pagination-lg .pagination-btn{width:40px;height:40px}.pagination-lg .pagination-btn .material-symbols-outlined{font-size:24px}.pagination-lg .pagination-select{height:40px;font-size:0.9375rem}.pagination-disabled{opacity:0.5;pointer-events:none}.pagination-info{display:flex;align-items:center}.pagination-info-text{font-size:0.875rem;color:var(--color-neutral-600, #5c627a);white-space:nowrap}.pagination-controls{display:flex;align-items:center;gap:var(--sp-4, 1rem)}.pagination-page-size{display:flex;align-items:center;gap:var(--sp-2, 0.5rem)}.pagination-page-size-label{font-size:0.875rem;color:var(--color-neutral-600, #5c627a);white-space:nowrap}.pagination-select{appearance:none;-webkit-appearance:none;-moz-appearance:none;background-color:var(--color-white, #fff);border:1px solid var(--color-neutral-300, #c0c4d4);border-radius:var(--radius-md, 6px);padding:0 var(--sp-6, 1.5rem) 0 var(--sp-3, 0.75rem);height:32px;font-size:0.875rem;color:var(--color-neutral-900, #141624);cursor:pointer;transition:border-color 0.15s ease, box-shadow 0.15s ease;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='%235c627a'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right 4px center;background-size:16px}.pagination-select:hover:not(:disabled){border-color:var(--color-neutral-400, #939ab4)}.pagination-select:focus{outline:none;border-color:var(--color-brand-500, #6366f1);box-shadow:0 0 0 3px var(--color-brand-100, #e0e1fc)}.pagination-select:disabled{background-color:var(--color-neutral-100, #f0f1f5);cursor:not-allowed}.pagination-nav{display:flex;align-items:center;gap:var(--sp-1, 0.25rem)}.pagination-btn{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;padding:0;border:none;border-radius:var(--radius-md, 6px);background-color:transparent;color:var(--color-neutral-600, #5c627a);cursor:pointer;transition:background-color 0.15s ease, color 0.15s ease}.pagination-btn .material-symbols-outlined{font-size:20px;font-variation-settings:'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20}.pagination-btn:hover:not(:disabled){background-color:var(--color-neutral-100, #f0f1f5);color:var(--color-neutral-900, #141624)}.pagination-btn:focus{outline:none;box-shadow:0 0 0 2px var(--color-brand-100, #e0e1fc)}.pagination-btn:active:not(:disabled){background-color:var(--color-neutral-200, #e2e4eb)}.pagination-btn:disabled{opacity:0.4;cursor:not-allowed}@media (max-width: 640px){.pagination{flex-direction:column;align-items:stretch;gap:var(--sp-3, 0.75rem)}.pagination-info{justify-content:center}.pagination-controls{justify-content:center;flex-wrap:wrap}.pagination-page-size{width:100%;justify-content:center}.pagination-nav{justify-content:center}}";

const BhPagination = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bhPageChange = createEvent(this, "bhPageChange");
        this.bhPageSizeChange = createEvent(this, "bhPageSizeChange");
    }
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
};
BhPagination.style = bhPaginationCss;

export { BhPagination as B };
//# sourceMappingURL=bh-pagination-CUeRSYsV.js.map

//# sourceMappingURL=bh-pagination-CUeRSYsV.js.map