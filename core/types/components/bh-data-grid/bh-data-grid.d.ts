import { EventEmitter } from '../../stencil-public-runtime';
import { type ColumnDef, type SortingState, type ColumnFiltersState } from '@tanstack/table-core';
import type { DataGridSize, DataGridSelectionMode, DataGridEditMode, DataGridLoadingType, DataGridCaptionPosition, DataGridSortChangeEvent, DataGridFilterChangeEvent, DataGridSelectionChangeEvent, DataGridPageChangeEvent, DataGridRowClickEvent, DataGridCellClickEvent, DataGridExpandChangeEvent, DataGridGroupToggleEvent, DataGridEditStartEvent, DataGridEditCancelEvent, DataGridEditSaveEvent, DataGridCellChangeEvent, DataGridValidationErrorEvent, RowData, GetRowIdFn, GetSubRowsFn, DataGridColumnMeta } from './bh-data-grid.types';
declare module '@tanstack/table-core' {
    interface ColumnMeta<TData, TValue> extends DataGridColumnMeta {
    }
}
export declare class BhDataGrid<TData extends RowData = RowData> {
    el: HTMLElement;
    /** Array of data objects to display */
    data: TData[];
    /** Column definitions (TanStack ColumnDef format) */
    columns: ColumnDef<TData, unknown>[];
    /** Function to get unique row ID */
    getRowId?: GetRowIdFn<TData>;
    /** Function to get sub-rows for expansion */
    getSubRows?: GetSubRowsFn<TData>;
    /** Size variant */
    size: DataGridSize;
    /** Show striped rows */
    striped: boolean;
    /** Show borders */
    bordered: boolean;
    /** Sticky header */
    stickyHeader: boolean;
    /** Max height for scrollable container (enables sticky header) */
    maxHeight?: string;
    /** Caption text */
    caption?: string;
    /** Caption position */
    captionPosition: DataGridCaptionPosition;
    /** Empty state title */
    emptyTitle: string;
    /** Empty state description */
    emptyDescription: string;
    /** Loading state */
    loading: boolean;
    /** Loading type */
    loadingType: DataGridLoadingType;
    /** Number of skeleton rows to show */
    skeletonRowCount: number;
    /** Enable sorting */
    enableSorting: boolean;
    /** Enable multi-column sorting */
    enableMultiSort: boolean;
    /** Initial/controlled sort state */
    sortState: SortingState;
    /** Enable column filtering */
    enableFiltering: boolean;
    /** Enable global filter (search) */
    enableGlobalFilter: boolean;
    /** Show filter row below header */
    showFilterRow: boolean;
    /** Global filter placeholder text */
    globalFilterPlaceholder: string;
    /** Initial/controlled filter state */
    filterState: ColumnFiltersState;
    /** Initial/controlled global filter */
    globalFilter: string;
    /** Selection mode */
    selectionMode: DataGridSelectionMode;
    /** Initial/controlled selected row IDs */
    selectedRowIds: string[];
    /** Enable pagination */
    enablePagination: boolean;
    /** Current page (1-indexed) */
    page: number;
    /** Page size */
    pageSize: number;
    /** Page size options */
    pageSizeOptions: number[];
    /** Enable row expansion */
    enableExpansion: boolean;
    /** Initial/controlled expanded row IDs */
    expandedRowIds: string[];
    /** Enable grouping */
    enableGrouping: boolean;
    /** Column IDs to group by */
    groupBy: string[];
    /** Enable editing */
    enableEditing: boolean;
    /** Edit mode */
    editMode: DataGridEditMode;
    /** Show edit action buttons */
    showEditActions: boolean;
    private tableState;
    private editingRowId;
    private editingColumnId;
    private editingValues;
    private validationErrors;
    private hoveredRowId;
    private table;
    bhSortChange: EventEmitter<DataGridSortChangeEvent>;
    bhFilterChange: EventEmitter<DataGridFilterChangeEvent>;
    bhSelectionChange: EventEmitter<DataGridSelectionChangeEvent>;
    bhPageChange: EventEmitter<DataGridPageChangeEvent>;
    bhRowClick: EventEmitter<DataGridRowClickEvent>;
    bhCellClick: EventEmitter<DataGridCellClickEvent>;
    bhExpandChange: EventEmitter<DataGridExpandChangeEvent>;
    bhGroupToggle: EventEmitter<DataGridGroupToggleEvent>;
    bhEditStart: EventEmitter<DataGridEditStartEvent>;
    bhEditCancel: EventEmitter<DataGridEditCancelEvent>;
    bhEditSave: EventEmitter<DataGridEditSaveEvent>;
    bhCellChange: EventEmitter<DataGridCellChangeEvent>;
    bhValidationError: EventEmitter<DataGridValidationErrorEvent>;
    handleDataChange(): void;
    handleSortStateChange(newValue: SortingState): void;
    handleFilterStateChange(newValue: ColumnFiltersState): void;
    handleSelectedRowIdsChange(newValue: string[]): void;
    handlePaginationPropChange(): void;
    handleExpandedRowIdsChange(newValue: string[]): void;
    handleGroupByChange(newValue: string[]): void;
    componentWillLoad(): void;
    private initializeTable;
    private handleStateChange;
    private buildRowSelection;
    private buildExpanded;
    private buildColumnVisibility;
    private handleRowClick;
    private handleCellClick;
    private handleHeaderClick;
    private handleRowExpand;
    private handleGroupToggle;
    private handleGlobalFilterChange;
    private handleColumnFilterChange;
    private handlePaginationChange;
    private startEditing;
    private cancelEditing;
    private saveEditing;
    private handleEditValueChange;
    private handleEditKeyDown;
    private moveToNextEditableCell;
    private isEditing;
    private handleCellDoubleClick;
    private flexRender;
    private formatCellValue;
    private renderCaption;
    private renderGlobalFilter;
    private renderHeader;
    private renderSelectionHeader;
    private renderHeaderCell;
    private renderFilterRow;
    private renderBody;
    private renderDataRow;
    private renderSelectionCell;
    private renderCell;
    private renderCellContent;
    private renderEditInput;
    private renderGroupRow;
    private renderEmptyState;
    private renderSkeleton;
    private renderLoadingOverlay;
    private renderPagination;
    render(): any;
}
