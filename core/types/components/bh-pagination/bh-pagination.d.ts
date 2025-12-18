import { EventEmitter } from '../../stencil-public-runtime';
export type PaginationSize = 'sm' | 'md' | 'lg';
export interface PaginationChangeEvent {
    page: number;
    pageSize: number;
}
export declare class BhPagination {
    /**
     * Current page (1-indexed)
     */
    page: number;
    /**
     * Total number of items
     */
    totalItems: number;
    /**
     * Number of items per page
     */
    pageSize: number;
    /**
     * Available page size options
     */
    pageSizeOptions: number[];
    /**
     * Show page size selector
     */
    showPageSizeSelector: boolean;
    /**
     * Show item count info (e.g., "Showing 1 to 10 of 100 results")
     */
    showItemCount: boolean;
    /**
     * Show first/last page buttons
     */
    showFirstLastButtons: boolean;
    /**
     * Size variant of the pagination
     */
    size: PaginationSize;
    /**
     * Whether the pagination is disabled
     */
    disabled: boolean;
    /**
     * Label for "Rows per page" text (for i18n)
     */
    rowsPerPageLabel: string;
    /**
     * Label template for showing results (use {start}, {end}, {total} placeholders)
     */
    showingResultsLabel: string;
    /**
     * Label template for page info when total items unknown (use {page}, {totalPages} placeholders)
     */
    pageInfoLabel: string;
    internalPage: number;
    internalPageSize: number;
    /**
     * Emitted when the page changes
     */
    bhPageChange: EventEmitter<PaginationChangeEvent>;
    /**
     * Emitted when page size changes
     */
    bhPageSizeChange: EventEmitter<PaginationChangeEvent>;
    componentWillLoad(): void;
    private get totalPages();
    private get startItem();
    private get endItem();
    private get canGoPrevious();
    private get canGoNext();
    private goToPage;
    private handlePageSizeChange;
    private goToFirst;
    private goToPrevious;
    private goToNext;
    private goToLast;
    private getInfoText;
    render(): any;
}
