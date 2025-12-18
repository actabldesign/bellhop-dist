/**
 * Bellhop Table Primitives
 *
 * Composable table components for building static and dynamic tables.
 * These primitives can be used standalone or combined with TanStack Table
 * for advanced features like sorting, filtering, and pagination.
 * Uses existing Bellhop components for consistency.
 */
import React from 'react';
export type TableSize = 'compact' | 'default' | 'relaxed';
export type TableVariant = 'default' | 'bordered' | 'striped';
export type CellAlign = 'left' | 'center' | 'right';
export interface TableWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Maximum height for vertical scrolling */
    maxHeight?: string | number;
    /** Maximum width for horizontal scrolling */
    maxWidth?: string | number;
    /** Enable horizontal scrolling */
    scrollX?: boolean;
    /** Enable vertical scrolling */
    scrollY?: boolean;
}
export declare const TableWrapper: React.ForwardRefExoticComponent<TableWrapperProps & React.RefAttributes<HTMLDivElement>>;
export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
    /** Table size variant */
    size?: TableSize;
    /** Table style variant */
    variant?: TableVariant;
    /** Show rounded corners */
    rounded?: boolean;
    /** Enable row hover effect */
    hoverable?: boolean;
    /** Enable responsive stacking on mobile */
    responsive?: boolean;
    /** Loading state */
    loading?: boolean;
}
export declare const Table: React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLTableElement>>;
export interface TableCaptionProps extends React.HTMLAttributes<HTMLTableCaptionElement> {
    /** Position of caption */
    position?: 'top' | 'bottom';
    /** Screen reader only */
    srOnly?: boolean;
}
export declare const TableCaption: React.ForwardRefExoticComponent<TableCaptionProps & React.RefAttributes<HTMLTableCaptionElement>>;
export interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    /** Make header sticky */
    sticky?: boolean;
    /** Use subtle styling */
    subtle?: boolean;
}
export declare const TableHead: React.ForwardRefExoticComponent<TableHeadProps & React.RefAttributes<HTMLTableSectionElement>>;
export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
}
export declare const TableBody: React.ForwardRefExoticComponent<TableBodyProps & React.RefAttributes<HTMLTableSectionElement>>;
export interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {
}
export declare const TableFooter: React.ForwardRefExoticComponent<TableFooterProps & React.RefAttributes<HTMLTableSectionElement>>;
export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    /** Row is selected */
    selected?: boolean;
    /** Row is clickable */
    clickable?: boolean;
    /** Row is expandable */
    expandable?: boolean;
    /** Row is expanded */
    expanded?: boolean;
    /** Row is a filter row */
    filter?: boolean;
    /** Row is an expansion content row */
    expansion?: boolean;
}
export declare const TableRow: React.ForwardRefExoticComponent<TableRowProps & React.RefAttributes<HTMLTableRowElement>>;
export interface TableHeaderCellProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
    /** Text alignment */
    align?: CellAlign;
    /** Column is sortable */
    sortable?: boolean;
    /** Current sort direction */
    sortDirection?: 'asc' | 'desc' | null;
    /** Shrink column to content width */
    shrink?: boolean;
    /** Expand column to fill space */
    expand?: boolean;
    /** Checkbox column */
    checkbox?: boolean;
    /** Actions column */
    actions?: boolean;
    /** Pin column to left */
    pinnedLeft?: boolean;
    /** Pin column to right */
    pinnedRight?: boolean;
}
export declare const TableHeaderCell: React.ForwardRefExoticComponent<TableHeaderCellProps & React.RefAttributes<HTMLTableCellElement>>;
export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
    /** Text alignment */
    align?: CellAlign;
    /** Cell contains numeric data */
    numeric?: boolean;
    /** Truncate long text */
    truncate?: boolean;
    /** Allow text to wrap */
    wrap?: boolean;
    /** Shrink cell to content width */
    shrink?: boolean;
    /** Expand cell to fill space */
    expand?: boolean;
    /** Checkbox cell */
    checkbox?: boolean;
    /** Actions cell */
    actions?: boolean;
    /** Expand trigger cell */
    expandTrigger?: boolean;
    /** Filter cell */
    filter?: boolean;
    /** Expansion content cell */
    expansion?: boolean;
    /** Pin cell to left */
    pinnedLeft?: boolean;
    /** Pin cell to right */
    pinnedRight?: boolean;
    /** Data label for responsive mode */
    dataLabel?: string;
}
export declare const TableCell: React.ForwardRefExoticComponent<TableCellProps & React.RefAttributes<HTMLTableCellElement>>;
export interface TableEmptyProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Icon to display */
    icon?: React.ReactNode;
    /** Title text */
    title?: string;
    /** Description text */
    description?: string;
    /** Number of columns to span */
    colSpan?: number;
}
export declare const TableEmpty: React.ForwardRefExoticComponent<TableEmptyProps & React.RefAttributes<HTMLTableRowElement>>;
export interface TableActionBarProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Selection count to display */
    selectionCount?: number;
    /** Left side content */
    left?: React.ReactNode;
    /** Right side content */
    right?: React.ReactNode;
}
export declare const TableActionBar: React.ForwardRefExoticComponent<TableActionBarProps & React.RefAttributes<HTMLDivElement>>;
export interface TablePaginationProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Current page (1-indexed) */
    page: number;
    /** Total number of pages */
    totalPages: number;
    /** Total number of items */
    totalItems?: number;
    /** Items per page */
    pageSize: number;
    /** Available page sizes */
    pageSizeOptions?: number[];
    /** Callback when page changes */
    onPageChange: (page: number) => void;
    /** Callback when page size changes */
    onPageSizeChange?: (pageSize: number) => void;
}
export declare const TablePagination: React.ForwardRefExoticComponent<TablePaginationProps & React.RefAttributes<HTMLDivElement>>;
export interface ExpandIconProps extends React.HTMLAttributes<HTMLSpanElement> {
    expanded?: boolean;
}
export declare const ExpandIcon: React.ForwardRefExoticComponent<ExpandIconProps & React.RefAttributes<HTMLSpanElement>>;
export { Table as BhTable, TableWrapper as BhTableWrapper, TableCaption as BhTableCaption, TableHead as BhThead, TableBody as BhTbody, TableFooter as BhTfoot, TableRow as BhTr, TableHeaderCell as BhTh, TableCell as BhTd, TableEmpty as BhTableEmpty, TableActionBar as BhTableActionBar, TablePagination as BhTablePagination, ExpandIcon as BhExpandIcon, };
//# sourceMappingURL=index.d.ts.map