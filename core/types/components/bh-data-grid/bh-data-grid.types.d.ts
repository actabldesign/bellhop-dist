export type DataGridColumnType = 'text' | 'number' | 'date' | 'boolean' | 'custom';
export type DataGridColumnAlign = 'left' | 'center' | 'right';
export interface DataGridColumnMeta {
    /** Column data type for formatting and filtering */
    type?: DataGridColumnType;
    /** Text alignment */
    align?: DataGridColumnAlign;
    /** Enable sorting for this column */
    sortable?: boolean;
    /** Enable filtering for this column */
    filterable?: boolean;
    /** Enable editing for this column */
    editable?: boolean;
    /** Custom number formatter */
    numberFormat?: Intl.NumberFormatOptions;
    /** Custom date formatter */
    dateFormat?: Intl.DateTimeFormatOptions;
    /** Validation function for editing */
    validate?: (value: unknown, row: unknown) => string | null;
}
export type DataGridSize = 'compact' | 'default' | 'relaxed';
export type DataGridSelectionMode = 'none' | 'single-click' | 'single-radio' | 'multiple-click' | 'multiple-checkbox';
export type DataGridEditMode = 'none' | 'cell' | 'row';
export type DataGridLoadingType = 'none' | 'spinner' | 'skeleton';
export type DataGridCaptionPosition = 'top' | 'bottom';
export interface DataGridSortChangeEvent {
    sorting: unknown[];
}
export interface DataGridFilterChangeEvent {
    columnFilters: unknown[];
    globalFilter: string;
}
export interface DataGridSelectionChangeEvent<TData = unknown> {
    selectedRowIds: string[];
    selectedRows: TData[];
}
export interface DataGridPageChangeEvent {
    page: number;
    pageSize: number;
}
export interface DataGridRowClickEvent<TData = unknown> {
    row: TData;
    rowId: string;
    rowIndex: number;
}
export interface DataGridCellClickEvent<TData = unknown> {
    row: TData;
    rowId: string;
    rowIndex: number;
    columnId: string;
    value: unknown;
}
export interface DataGridExpandChangeEvent {
    rowId: string;
    expanded: boolean;
}
export interface DataGridGroupToggleEvent {
    groupId: string;
    expanded: boolean;
}
export interface DataGridEditStartEvent<TData = unknown> {
    rowId: string;
    row: TData;
    columnId?: string;
}
export interface DataGridEditCancelEvent<TData = unknown> {
    rowId: string;
    row: TData;
}
export interface DataGridEditSaveEvent<TData = unknown> {
    rowId: string;
    rowIndex: number;
    originalRow: TData;
    changes: Record<string, unknown>;
    newRow: TData;
}
export interface DataGridCellChangeEvent {
    rowId: string;
    columnId: string;
    oldValue: unknown;
    newValue: unknown;
}
export interface DataGridValidationErrorEvent {
    rowId: string;
    columnId: string;
    value: unknown;
    error: string;
}
export type RowData = Record<string, unknown>;
export type GetRowIdFn<TData> = (row: TData, index: number) => string;
export type GetSubRowsFn<TData> = (row: TData) => TData[] | undefined;
export type CellRenderer<TData = unknown> = (value: unknown, row: TData, rowIndex: number) => string | HTMLElement;
export type HeaderRenderer = (columnId: string) => string | HTMLElement;
