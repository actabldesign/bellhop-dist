/**
 * BhDataTable - Dynamic Table with TanStack Table
 *
 * A composable data table component that combines Bellhop table primitives
 * with TanStack Table for sorting, filtering, pagination, selection,
 * expansion, grouping, and editing.
 * Uses existing Bellhop components where possible.
 */
import React from 'react';
import { ColumnDef, SortingState, ColumnFiltersState, RowSelectionState, GroupingState, Row, Table as TanStackTable } from '@tanstack/react-table';
import { TableSize, TableVariant } from './index';
export type EditMode = 'cell' | 'row';
export interface EditState {
    rowId: string | null;
    columnId: string | null;
}
export interface EditingValues {
    [columnId: string]: unknown;
}
export interface RowChanges<TData> {
    rowId: string;
    rowIndex: number;
    originalRow: TData;
    changes: Record<string, unknown>;
}
export interface DataTableColumnMeta {
    editable?: boolean;
    editType?: 'text' | 'number' | 'date' | 'select';
    editOptions?: {
        value: string;
        label: string;
    }[];
}
declare module '@tanstack/react-table' {
    interface ColumnMeta<TData, TValue> extends DataTableColumnMeta {
    }
}
export interface DataTableProps<TData> {
    /** Table data */
    data: TData[];
    /** Column definitions */
    columns: ColumnDef<TData, unknown>[];
    /** Table size variant */
    size?: TableSize;
    /** Table style variant */
    variant?: TableVariant;
    /** Enable row selection */
    enableRowSelection?: boolean;
    /** Enable multi-row selection */
    enableMultiRowSelection?: boolean;
    /** Enable sorting */
    enableSorting?: boolean;
    /** Enable column filters */
    enableFiltering?: boolean;
    /** Enable pagination */
    enablePagination?: boolean;
    /** Enable row expansion */
    enableExpanding?: boolean;
    /** Initial page size */
    pageSize?: number;
    /** Page size options */
    pageSizeOptions?: number[];
    /** Sticky header */
    stickyHeader?: boolean;
    /** Show rounded corners */
    rounded?: boolean;
    /** Enable row hover effect */
    hoverable?: boolean;
    /** Loading state */
    loading?: boolean;
    /** Empty state title */
    emptyTitle?: string;
    /** Empty state description */
    emptyDescription?: string;
    /** Row key accessor */
    getRowId?: (row: TData, index: number) => string;
    /** Sub-rows accessor for expansion */
    getSubRows?: (row: TData) => TData[] | undefined;
    /** Render expanded row content */
    renderExpandedRow?: (row: Row<TData>) => React.ReactNode;
    /** Callback when selection changes */
    onSelectionChange?: (selectedRows: TData[]) => void;
    /** Callback when sorting changes */
    onSortingChange?: (sorting: SortingState) => void;
    /** Callback when row is clicked */
    onRowClick?: (row: TData) => void;
    /** Action bar left content */
    actionBarLeft?: React.ReactNode;
    /** Action bar right content */
    actionBarRight?: React.ReactNode;
    /** Bulk actions when rows are selected */
    bulkActions?: React.ReactNode;
    /** Maximum height for scrolling */
    maxHeight?: string | number;
    /** Class name for the wrapper */
    className?: string;
    /** Enable row grouping */
    enableGrouping?: boolean;
    /** Column IDs to group by */
    groupBy?: string[];
    /** Callback when grouping changes */
    onGroupingChange?: (grouping: string[]) => void;
    /** Enable cell/row editing */
    enableEditing?: boolean;
    /** Edit mode: 'cell' for single cell, 'row' for entire row */
    editMode?: EditMode;
    /** Show edit action buttons in row (for row edit mode) */
    showEditActions?: boolean;
    /** Callback when edit is saved */
    onEditSave?: (changes: RowChanges<TData>) => void;
    /** Callback when edit is cancelled */
    onEditCancel?: (rowId: string, row: TData) => void;
    /** Callback when cell value changes during editing (before save) */
    onCellChange?: (rowId: string, columnId: string, oldValue: unknown, newValue: unknown) => void;
}
export declare function createSelectColumn<TData>(): ColumnDef<TData, unknown>;
export declare function createExpandColumn<TData>(): ColumnDef<TData, unknown>;
export declare function createEditActionsColumn<TData>(onEdit: (rowId: string) => void, onSave: () => void, onCancel: () => void, isEditing: (rowId: string) => boolean): ColumnDef<TData, unknown>;
export declare function DataTable<TData>({ data, columns, size, variant, enableRowSelection, enableMultiRowSelection, enableSorting, enableFiltering, enablePagination, enableExpanding, pageSize, pageSizeOptions, stickyHeader, rounded, hoverable, loading, emptyTitle, emptyDescription, getRowId, getSubRows, renderExpandedRow, onSelectionChange, onSortingChange, onRowClick, actionBarLeft, actionBarRight, bulkActions, maxHeight, className, enableGrouping, groupBy, onGroupingChange, enableEditing, editMode, showEditActions, onEditSave, onEditCancel, onCellChange, }: DataTableProps<TData>): import("react/jsx-runtime").JSX.Element;
export interface UseDataTableOptions<TData> {
    data: TData[];
    columns: ColumnDef<TData, unknown>[];
    enableSorting?: boolean;
    enableFiltering?: boolean;
    enablePagination?: boolean;
    enableRowSelection?: boolean;
    enableExpanding?: boolean;
    enableGrouping?: boolean;
    groupBy?: string[];
    pageSize?: number;
    getRowId?: (row: TData, index: number) => string;
    getSubRows?: (row: TData) => TData[] | undefined;
}
export declare function useDataTable<TData>({ data, columns, enableSorting, enableFiltering, enablePagination, enableRowSelection, enableExpanding, enableGrouping, groupBy, pageSize, getRowId, getSubRows, }: UseDataTableOptions<TData>): TanStackTable<TData>;
export { DataTable as BhDataTable };
export type { ColumnDef, SortingState, ColumnFiltersState, RowSelectionState, GroupingState, };
//# sourceMappingURL=DataTable.d.ts.map