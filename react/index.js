/**
 * Bellhop React Components
 *
 * This package provides:
 * 1. React wrapper components for Bellhop Stencil web components (auto-generated)
 * 2. Native React table primitives with TanStack Table integration
 *
 * NOTE: For feature-rich data grids, use <BhDataGrid> from the Stencil components.
 * The table primitives below are for building custom table layouts.
 */
// Re-export all generated Stencil React components
export * from './components/stencil-generated';
// =============================================================================
// Table Primitives (for composable tables)
// =============================================================================
export { 
// Table primitives
Table, TableWrapper, TableCaption, TableHead, TableBody, TableFooter, TableRow, TableHeaderCell, TableCell, TableEmpty, TableActionBar, TablePagination, ExpandIcon, 
// Aliased exports (Bh prefix)
BhTable, BhTableWrapper, BhTableCaption, BhThead, BhTbody, BhTfoot, BhTr, BhTh, BhTd, BhTableEmpty, BhTableActionBar, BhTablePagination, BhExpandIcon, } from './components/table';
// =============================================================================
// DataTable (TanStack Table integration)
// =============================================================================
export { DataTable, BhDataTable, useDataTable, createSelectColumn, createExpandColumn, createEditActionsColumn, } from './components/table/DataTable';
