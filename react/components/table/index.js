import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/**
 * Bellhop Table Primitives
 *
 * Composable table components for building static and dynamic tables.
 * These primitives can be used standalone or combined with TanStack Table
 * for advanced features like sorting, filtering, and pagination.
 * Uses existing Bellhop components for consistency.
 */
import { forwardRef, createContext, useContext } from 'react';
import { BhButtonIcon } from '../stencil-generated';
// =============================================================================
// Context
// =============================================================================
const TableContext = createContext({
    size: 'default',
    variant: 'default',
    hoverable: true,
});
const useTableContext = () => useContext(TableContext);
// =============================================================================
// Utility Functions
// =============================================================================
function clsx(...classes) {
    return classes.filter(Boolean).join(' ');
}
export const TableWrapper = forwardRef(({ className, children, maxHeight, maxWidth, scrollX, scrollY, style, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: clsx('bh-table-wrapper', scrollX && 'bh-table-wrapper--scroll-x', scrollY && 'bh-table-wrapper--scroll-y', className), style: {
            maxHeight: maxHeight,
            maxWidth: maxWidth,
            ...style,
        }, tabIndex: 0, ...props, children: children }));
});
TableWrapper.displayName = 'TableWrapper';
export const Table = forwardRef(({ className, children, size = 'default', variant = 'default', rounded = false, hoverable = true, responsive = false, loading = false, ...props }, ref) => {
    return (_jsx(TableContext.Provider, { value: { size, variant, hoverable }, children: _jsx("table", { ref: ref, className: clsx('bh-table', `bh-table--${size}`, variant === 'bordered' && 'bh-table--bordered', variant === 'striped' && 'bh-table--striped', rounded && 'bh-table--rounded', responsive && 'bh-table--responsive', loading && 'bh-table--loading', className), ...props, children: children }) }));
});
Table.displayName = 'Table';
export const TableCaption = forwardRef(({ className, children, position = 'top', srOnly = false, ...props }, ref) => {
    return (_jsx("caption", { ref: ref, className: clsx('bh-caption', position === 'bottom' && 'bh-caption--bottom', srOnly && 'bh-caption--sr-only', className), ...props, children: children }));
});
TableCaption.displayName = 'TableCaption';
export const TableHead = forwardRef(({ className, children, sticky = false, subtle = false, ...props }, ref) => {
    return (_jsx("thead", { ref: ref, className: clsx('bh-thead', sticky && 'bh-thead--sticky', subtle && 'bh-thead--subtle', className), ...props, children: children }));
});
TableHead.displayName = 'TableHead';
export const TableBody = forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("tbody", { ref: ref, className: clsx('bh-tbody', className), ...props, children: children }));
});
TableBody.displayName = 'TableBody';
export const TableFooter = forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("tfoot", { ref: ref, className: clsx('bh-tfoot', className), ...props, children: children }));
});
TableFooter.displayName = 'TableFooter';
export const TableRow = forwardRef(({ className, children, selected = false, clickable = false, expandable = false, expanded = false, filter = false, expansion = false, ...props }, ref) => {
    const { hoverable } = useTableContext();
    return (_jsx("tr", { ref: ref, className: clsx('bh-tr', hoverable && 'bh-tr--hoverable', selected && 'bh-tr--selected', clickable && 'bh-tr--clickable', expandable && 'bh-tr--expandable', expanded && 'bh-tr--expanded', filter && 'bh-tr--filter', expansion && 'bh-tr--expansion', className), ...props, children: children }));
});
TableRow.displayName = 'TableRow';
export const TableHeaderCell = forwardRef(({ className, children, align = 'left', sortable = false, sortDirection = null, shrink = false, expand = false, checkbox = false, actions = false, pinnedLeft = false, pinnedRight = false, onClick, ...props }, ref) => {
    const isSorted = sortDirection !== null;
    return (_jsx("th", { ref: ref, className: clsx('bh-th', `bh-th--${align}`, sortable && 'bh-th--sortable', isSorted && 'bh-th--sorted', shrink && 'bh-th--shrink', expand && 'bh-th--expand', checkbox && 'bh-th--checkbox', actions && 'bh-th--actions', pinnedLeft && 'bh-th--pinned-left', pinnedRight && 'bh-th--pinned-right', className), onClick: sortable ? onClick : undefined, "aria-sort": sortDirection === 'asc'
            ? 'ascending'
            : sortDirection === 'desc'
                ? 'descending'
                : undefined, ...props, children: _jsxs("span", { className: "bh-th__content", children: [children, sortable && isSorted && (_jsx("span", { className: "bh-th__sort-icon material-symbols-outlined", children: sortDirection === 'asc' ? 'arrow_upward' : 'arrow_downward' }))] }) }));
});
TableHeaderCell.displayName = 'TableHeaderCell';
export const TableCell = forwardRef(({ className, children, align = 'left', numeric = false, truncate = false, wrap = false, shrink = false, expand = false, checkbox = false, actions = false, expandTrigger = false, filter = false, expansion = false, pinnedLeft = false, pinnedRight = false, dataLabel, ...props }, ref) => {
    return (_jsx("td", { ref: ref, className: clsx('bh-td', `bh-td--${align}`, numeric && 'bh-td--numeric', truncate && 'bh-td--truncate', wrap && 'bh-td--wrap', shrink && 'bh-td--shrink', expand && 'bh-td--expand', checkbox && 'bh-td--checkbox', actions && 'bh-td--actions', expandTrigger && 'bh-td--expand-trigger', filter && 'bh-td--filter', expansion && 'bh-td--expansion', pinnedLeft && 'bh-td--pinned-left', pinnedRight && 'bh-td--pinned-right', className), "data-label": dataLabel, ...props, children: children }));
});
TableCell.displayName = 'TableCell';
export const TableEmpty = forwardRef(({ className, children, icon, title, description, colSpan = 1, ...props }, ref) => {
    return (_jsx("tr", { ref: ref, children: _jsx("td", { colSpan: colSpan, children: _jsxs("div", { className: clsx('bh-table-empty', className), ...props, children: [icon && _jsx("div", { className: "bh-table-empty__icon", children: icon }), title && _jsx("div", { className: "bh-table-empty__title", children: title }), description && (_jsx("div", { className: "bh-table-empty__description", children: description })), children] }) }) }));
});
TableEmpty.displayName = 'TableEmpty';
export const TableActionBar = forwardRef(({ className, children, selectionCount, left, right, ...props }, ref) => {
    const hasSelection = selectionCount !== undefined && selectionCount > 0;
    return (_jsxs("div", { ref: ref, className: clsx('bh-table-action-bar', hasSelection && 'bh-table-action-bar--selected', className), ...props, children: [_jsxs("div", { className: "bh-table-action-bar__left", children: [hasSelection && (_jsxs("span", { className: "bh-table-action-bar__selection-count", children: [selectionCount, " selected"] })), left] }), _jsx("div", { className: "bh-table-action-bar__right", children: right }), children] }));
});
TableActionBar.displayName = 'TableActionBar';
export const TablePagination = forwardRef(({ className, page, totalPages, totalItems, pageSize, pageSizeOptions = [10, 25, 50, 100], onPageChange, onPageSizeChange, ...props }, ref) => {
    const startItem = (page - 1) * pageSize + 1;
    const endItem = Math.min(page * pageSize, totalItems || page * pageSize);
    return (_jsxs("div", { ref: ref, className: clsx('bh-table-pagination', className), ...props, children: [_jsx("div", { className: "bh-table-pagination__info", children: totalItems !== undefined ? (_jsxs(_Fragment, { children: ["Showing ", startItem, " to ", endItem, " of ", totalItems, " results"] })) : (_jsxs(_Fragment, { children: ["Page ", page, " of ", totalPages] })) }), _jsxs("div", { className: "bh-table-pagination__controls", children: [onPageSizeChange && (_jsxs("div", { className: "bh-table-pagination__page-size", children: [_jsx("span", { children: "Rows per page:" }), _jsx("select", { value: pageSize, onChange: (e) => onPageSizeChange(Number(e.target.value)), className: "bh-table-pagination__select", children: pageSizeOptions.map((size) => (_jsx("option", { value: size, children: size }, size))) })] })), _jsx(BhButtonIcon, { iconName: "first_page", size: "sm", hierarchy: "quaternary", disabled: page <= 1, onBhClick: () => onPageChange(1), "aria-label": "First page" }), _jsx(BhButtonIcon, { iconName: "chevron_left", size: "sm", hierarchy: "quaternary", disabled: page <= 1, onBhClick: () => onPageChange(page - 1), "aria-label": "Previous page" }), _jsx(BhButtonIcon, { iconName: "chevron_right", size: "sm", hierarchy: "quaternary", disabled: page >= totalPages, onBhClick: () => onPageChange(page + 1), "aria-label": "Next page" }), _jsx(BhButtonIcon, { iconName: "last_page", size: "sm", hierarchy: "quaternary", disabled: page >= totalPages, onBhClick: () => onPageChange(totalPages), "aria-label": "Last page" })] })] }));
});
TablePagination.displayName = 'TablePagination';
export const ExpandIcon = forwardRef(({ className, expanded = false, ...props }, ref) => {
    return (_jsx("span", { ref: ref, className: clsx('bh-expand-icon', className), ...props, children: _jsx("span", { className: "material-symbols-outlined", children: "chevron_right" }) }));
});
ExpandIcon.displayName = 'ExpandIcon';
// =============================================================================
// Exports
// =============================================================================
export { Table as BhTable, TableWrapper as BhTableWrapper, TableCaption as BhTableCaption, TableHead as BhThead, TableBody as BhTbody, TableFooter as BhTfoot, TableRow as BhTr, TableHeaderCell as BhTh, TableCell as BhTd, TableEmpty as BhTableEmpty, TableActionBar as BhTableActionBar, TablePagination as BhTablePagination, ExpandIcon as BhExpandIcon, };
