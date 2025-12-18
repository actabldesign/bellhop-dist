import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * BhDataTable - Dynamic Table with TanStack Table
 *
 * A composable data table component that combines Bellhop table primitives
 * with TanStack Table for sorting, filtering, pagination, selection,
 * expansion, grouping, and editing.
 * Uses existing Bellhop components where possible.
 */
import React, { useState, useMemo, useRef, useEffect, useCallback, } from 'react';
import { useReactTable, getCoreRowModel, getSortedRowModel, getFilteredRowModel, getPaginationRowModel, getExpandedRowModel, getGroupedRowModel, flexRender, } from '@tanstack/react-table';
import { Table, TableWrapper, TableHead, TableBody, TableRow, TableHeaderCell, TableCell, TableEmpty, TableActionBar, TablePagination, } from './index';
// Import existing Bellhop components
import { BhButtonIcon, BhInputText } from '../stencil-generated';
function TableCheckbox({ checked, indeterminate = false, disabled = false, onChange, 'aria-label': ariaLabel, }) {
    const inputRef = useRef(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);
    return (_jsxs("label", { className: "bh-table-checkbox", children: [_jsx("input", { ref: inputRef, type: "checkbox", checked: checked, disabled: disabled, onChange: onChange, "aria-label": ariaLabel, className: "bh-table-checkbox__input" }), _jsxs("span", { className: `bh-table-checkbox__box ${checked || indeterminate ? 'bh-table-checkbox__box--checked' : ''} ${disabled ? 'bh-table-checkbox__box--disabled' : ''}`, children: [checked && !indeterminate && (_jsx("span", { className: "material-symbols-outlined bh-table-checkbox__icon", children: "check" })), indeterminate && (_jsx("span", { className: "material-symbols-outlined bh-table-checkbox__icon", children: "remove" }))] })] }));
}
// =============================================================================
// Checkbox Column Helper
// =============================================================================
export function createSelectColumn() {
    return {
        id: 'select',
        header: ({ table }) => (_jsx(TableCheckbox, { checked: table.getIsAllPageRowsSelected(), indeterminate: table.getIsSomePageRowsSelected(), onChange: () => table.toggleAllPageRowsSelected(), "aria-label": "Select all rows" })),
        cell: ({ row }) => (_jsx(TableCheckbox, { checked: row.getIsSelected(), disabled: !row.getCanSelect(), onChange: () => row.toggleSelected(), "aria-label": "Select row" })),
        size: 40,
        enableSorting: false,
        enableColumnFilter: false,
        enableGrouping: false,
    };
}
// =============================================================================
// Expand Column Helper
// =============================================================================
export function createExpandColumn() {
    return {
        id: 'expand',
        header: () => null,
        cell: ({ row }) => row.getCanExpand() ? (_jsx(BhButtonIcon, { iconName: row.getIsExpanded() ? 'expand_more' : 'chevron_right', size: "sm", hierarchy: "quaternary", onBhClick: () => row.toggleExpanded(), "aria-label": row.getIsExpanded() ? 'Collapse row' : 'Expand row' })) : null,
        size: 32,
        enableSorting: false,
        enableColumnFilter: false,
        enableGrouping: false,
    };
}
// =============================================================================
// Edit Actions Column Helper
// =============================================================================
export function createEditActionsColumn(onEdit, onSave, onCancel, isEditing) {
    return {
        id: 'edit-actions',
        header: () => null,
        cell: ({ row }) => {
            const rowId = row.id;
            const editing = isEditing(rowId);
            if (editing) {
                return (_jsxs("div", { className: "bh-td--edit-actions", children: [_jsx(BhButtonIcon, { iconName: "check", size: "sm", hierarchy: "quaternary", onBhClick: () => onSave(), "aria-label": "Save changes" }), _jsx(BhButtonIcon, { iconName: "close", size: "sm", hierarchy: "quaternary", onBhClick: () => onCancel(), "aria-label": "Cancel editing" })] }));
            }
            return (_jsx(BhButtonIcon, { iconName: "edit", size: "sm", hierarchy: "quaternary", onBhClick: () => onEdit(rowId), "aria-label": "Edit row" }));
        },
        size: 80,
        enableSorting: false,
        enableColumnFilter: false,
        enableGrouping: false,
        meta: {
            editable: false,
        },
    };
}
// =============================================================================
// DataTable Component
// =============================================================================
export function DataTable({ data, columns, size = 'default', variant = 'default', enableRowSelection = false, enableMultiRowSelection = true, enableSorting = true, enableFiltering = false, enablePagination = true, enableExpanding = false, pageSize = 10, pageSizeOptions = [10, 25, 50, 100], stickyHeader = false, rounded = false, hoverable = true, loading = false, emptyTitle = 'No data', emptyDescription = 'There are no records to display.', getRowId, getSubRows, renderExpandedRow, onSelectionChange, onSortingChange, onRowClick, actionBarLeft, actionBarRight, bulkActions, maxHeight, className, 
// Grouping props
enableGrouping = false, groupBy = [], onGroupingChange, 
// Editing props
enableEditing = false, editMode = 'cell', showEditActions = true, onEditSave, onEditCancel, onCellChange, }) {
    // ==========================================================================
    // State
    // ==========================================================================
    const [sorting, setSorting] = useState([]);
    const [columnFilters, setColumnFilters] = useState([]);
    const [rowSelection, setRowSelection] = useState({});
    const [expanded, setExpanded] = useState({});
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize,
    });
    const [globalFilter, setGlobalFilter] = useState('');
    // Grouping state
    const [grouping, setGrouping] = useState(groupBy);
    // Editing state
    const [editState, setEditState] = useState({
        rowId: null,
        columnId: null,
    });
    const [editingValues, setEditingValues] = useState({});
    // Sync groupBy prop with internal state
    useEffect(() => {
        setGrouping(groupBy);
    }, [groupBy]);
    // Track previous rowSelection to detect changes for onSelectionChange callback
    const prevRowSelectionRef = useRef(rowSelection);
    // Compute column visibility to hide grouping columns when grouping is enabled
    const columnVisibility = useMemo(() => {
        if (!enableGrouping || grouping.length === 0) {
            return {};
        }
        // Hide all columns that are being used for grouping
        const visibility = {};
        grouping.forEach((columnId) => {
            visibility[columnId] = false;
        });
        return visibility;
    }, [enableGrouping, grouping]);
    // ==========================================================================
    // Editing Handlers
    // ==========================================================================
    const isEditing = useCallback((rowId, columnId) => {
        if (editState.rowId !== rowId)
            return false;
        if (editMode === 'cell') {
            return columnId ? editState.columnId === columnId : false;
        }
        return true; // Row mode - entire row is editing
    }, [editState, editMode]);
    const isRowEditing = useCallback((rowId) => {
        return editState.rowId === rowId;
    }, [editState.rowId]);
    const startEditing = useCallback((rowId, columnId) => {
        // Initialize editing values from current row
        const initialValues = {};
        columns.forEach((col) => {
            const colId = 'accessorKey' in col
                ? String(col.accessorKey)
                : 'id' in col
                    ? col.id
                    : '';
            if (colId && col.meta?.editable !== false) {
                // Find row data
                const rowIndex = data.findIndex((_, i) => (getRowId ? getRowId(data[i], i) : String(i)) === rowId);
                if (rowIndex !== -1) {
                    const row = data[rowIndex];
                    initialValues[colId] = row[colId];
                }
            }
        });
        setEditingValues(initialValues);
        setEditState({
            rowId,
            columnId: editMode === 'cell' ? columnId || null : null,
        });
    }, [columns, data, editMode, getRowId]);
    const cancelEditing = useCallback(() => {
        if (!editState.rowId)
            return;
        const rowIndex = data.findIndex((_, i) => (getRowId ? getRowId(data[i], i) : String(i)) === editState.rowId);
        if (rowIndex !== -1) {
            onEditCancel?.(editState.rowId, data[rowIndex]);
        }
        setEditState({ rowId: null, columnId: null });
        setEditingValues({});
    }, [editState.rowId, data, getRowId, onEditCancel]);
    const saveEditing = useCallback(() => {
        if (!editState.rowId)
            return;
        const rowIndex = data.findIndex((_, i) => (getRowId ? getRowId(data[i], i) : String(i)) === editState.rowId);
        if (rowIndex === -1)
            return;
        const originalRow = data[rowIndex];
        const changes = {};
        // Determine what changed
        Object.entries(editingValues).forEach(([columnId, newValue]) => {
            const originalValue = originalRow[columnId];
            if (originalValue !== newValue) {
                changes[columnId] = newValue;
            }
        });
        if (Object.keys(changes).length > 0) {
            onEditSave?.({
                rowId: editState.rowId,
                rowIndex,
                originalRow,
                changes,
            });
        }
        setEditState({ rowId: null, columnId: null });
        setEditingValues({});
    }, [editState.rowId, editingValues, data, getRowId, onEditSave]);
    const handleEditValueChange = useCallback((columnId, newValue) => {
        const oldValue = editingValues[columnId];
        setEditingValues((prev) => ({
            ...prev,
            [columnId]: newValue,
        }));
        if (editState.rowId) {
            onCellChange?.(editState.rowId, columnId, oldValue, newValue);
        }
    }, [editingValues, editState.rowId, onCellChange]);
    const handleEditKeyDown = useCallback((e, columnId) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            saveEditing();
        }
        else if (e.key === 'Escape') {
            e.preventDefault();
            cancelEditing();
        }
        else if (e.key === 'Tab' && editMode === 'cell') {
            e.preventDefault();
            // Move to next editable cell
            const editableColumns = columns.filter((col) => col.meta?.editable !== false);
            const currentIndex = editableColumns.findIndex((c) => {
                const colId = 'accessorKey' in c
                    ? String(c.accessorKey)
                    : 'id' in c
                        ? c.id
                        : '';
                return colId === columnId;
            });
            if (currentIndex !== -1) {
                const nextIndex = e.shiftKey ? currentIndex - 1 : currentIndex + 1;
                if (nextIndex >= 0 && nextIndex < editableColumns.length) {
                    const nextCol = editableColumns[nextIndex];
                    const nextColId = 'accessorKey' in nextCol
                        ? String(nextCol.accessorKey)
                        : 'id' in nextCol
                            ? nextCol.id
                            : '';
                    setEditState((prev) => ({
                        ...prev,
                        columnId: nextColId || null,
                    }));
                }
                else {
                    saveEditing();
                }
            }
        }
    }, [editMode, columns, saveEditing, cancelEditing]);
    // ==========================================================================
    // Build columns with selection/expansion/editing if enabled
    // ==========================================================================
    const tableColumns = useMemo(() => {
        const cols = [];
        if (enableExpanding && !enableGrouping) {
            cols.push(createExpandColumn());
        }
        if (enableRowSelection) {
            cols.push(createSelectColumn());
        }
        cols.push(...columns);
        if (enableEditing && editMode === 'row' && showEditActions) {
            cols.push(createEditActionsColumn(startEditing, saveEditing, cancelEditing, isRowEditing));
        }
        return cols;
    }, [
        columns,
        enableRowSelection,
        enableExpanding,
        enableGrouping,
        enableEditing,
        editMode,
        showEditActions,
        startEditing,
        saveEditing,
        cancelEditing,
        isRowEditing,
    ]);
    // ==========================================================================
    // Create table instance
    // ==========================================================================
    const table = useReactTable({
        data,
        columns: tableColumns,
        state: {
            sorting,
            columnFilters,
            rowSelection,
            expanded,
            pagination,
            globalFilter,
            grouping,
            columnVisibility,
        },
        getRowId,
        getSubRows,
        getRowCanExpand: enableExpanding && renderExpandedRow ? () => true : undefined,
        enableRowSelection: enableRowSelection
            ? enableMultiRowSelection
                ? true
                : (row) => !Object.keys(rowSelection).length || rowSelection[row.id]
            : false,
        enableMultiRowSelection,
        enableSorting,
        enableFilters: enableFiltering,
        enableExpanding: enableExpanding || enableGrouping,
        enableGrouping,
        // Prevent TanStack Table from auto-resetting expanded state when data/columns change
        // This fixes the issue where grouped rows collapse when selecting items
        autoResetExpanded: false,
        onSortingChange: (updater) => {
            const newSorting = typeof updater === 'function' ? updater(sorting) : updater;
            setSorting(newSorting);
            onSortingChange?.(newSorting);
        },
        onColumnFiltersChange: setColumnFilters,
        onRowSelectionChange: (updater) => {
            const newSelection = typeof updater === 'function' ? updater(rowSelection) : updater;
            setRowSelection(newSelection);
        },
        onExpandedChange: setExpanded,
        onPaginationChange: setPagination,
        onGlobalFilterChange: setGlobalFilter,
        onGroupingChange: (updater) => {
            const newGrouping = typeof updater === 'function' ? updater(grouping) : updater;
            setGrouping(newGrouping);
            onGroupingChange?.(newGrouping);
        },
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
        getFilteredRowModel: enableFiltering ? getFilteredRowModel() : undefined,
        // Disable pagination when grouping is enabled
        getPaginationRowModel: enablePagination && !enableGrouping ? getPaginationRowModel() : undefined,
        getExpandedRowModel: enableExpanding || enableGrouping ? getExpandedRowModel() : undefined,
        getGroupedRowModel: enableGrouping ? getGroupedRowModel() : undefined,
    });
    // Handle selection change callback after table is stable (via useEffect)
    // This prevents issues with grouped rows collapsing when selecting items
    // IMPORTANT: We use a ref for the table to avoid the effect re-running when table changes
    // because table is recreated on every render, which would cause cascading state updates
    const tableRef = useRef(table);
    tableRef.current = table;
    useEffect(() => {
        if (!onSelectionChange)
            return;
        if (prevRowSelectionRef.current === rowSelection)
            return;
        prevRowSelectionRef.current = rowSelection;
        // Use tableRef.current to get the latest table without adding it as a dependency
        const currentTable = tableRef.current;
        const selectedRows = Object.keys(rowSelection)
            .filter((key) => rowSelection[key])
            .map((key) => {
            const row = currentTable.getRow(key);
            return row?.original;
        })
            .filter(Boolean);
        onSelectionChange(selectedRows);
    }, [rowSelection, onSelectionChange]);
    // ==========================================================================
    // Render Helpers
    // ==========================================================================
    const renderEditInput = (column, cell) => {
        const columnId = 'accessorKey' in column.columnDef
            ? String(column.columnDef.accessorKey)
            : column.id;
        const currentValue = editingValues[columnId] ?? cell.getValue();
        const editType = column.columnDef.meta?.editType || 'text';
        const editOptions = column.columnDef.meta?.editOptions;
        // Select type
        if (editType === 'select' && editOptions) {
            return (_jsx("select", { className: "bh-edit-select", value: String(currentValue ?? ''), onChange: (e) => handleEditValueChange(columnId, e.target.value), onKeyDown: (e) => handleEditKeyDown(e, columnId), autoFocus: true, children: editOptions.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value))) }));
        }
        // Text/Number/Date input
        return (_jsx("input", { type: editType === 'number' ? 'number' : editType === 'date' ? 'date' : 'text', className: "bh-edit-input", value: currentValue != null ? String(currentValue) : '', onChange: (e) => {
                const newValue = editType === 'number' ? Number(e.target.value) : e.target.value;
                handleEditValueChange(columnId, newValue);
            }, onKeyDown: (e) => handleEditKeyDown(e, columnId), autoFocus: true }));
    };
    const renderGroupRow = (row) => {
        const groupingColumnId = row.groupingColumnId;
        const groupValue = row.groupingValue;
        const isExpanded = row.getIsExpanded();
        const leafRows = row.getLeafRows();
        const depth = row.depth;
        return (_jsx(TableRow, { className: "bh-tr--group", onClick: () => row.toggleExpanded(), children: _jsx(TableCell, { colSpan: tableColumns.length, className: "bh-td--group-label", children: _jsxs("div", { className: "bh-group-content", style: { paddingLeft: `${depth * 24}px` }, children: [_jsx(BhButtonIcon, { iconName: isExpanded ? 'expand_more' : 'chevron_right', size: "sm", hierarchy: "quaternary", "aria-label": isExpanded ? 'Collapse group' : 'Expand group' }), _jsxs("span", { className: "bh-group-label__text", children: [_jsxs("span", { className: "bh-group-label__column", children: [groupingColumnId, ": "] }), _jsx("span", { className: "bh-group-label__value", children: String(groupValue) })] }), _jsxs("span", { className: "bh-group-label__count", children: ["(", leafRows.length, " ", leafRows.length === 1 ? 'item' : 'items', ")"] })] }) }) }, row.id));
    };
    const renderDataRow = (row) => {
        const rowId = row.id;
        const rowIsEditing = isRowEditing(rowId);
        return (_jsxs(React.Fragment, { children: [_jsx(TableRow, { selected: row.getIsSelected(), clickable: !!onRowClick && !rowIsEditing, expandable: row.getCanExpand(), expanded: row.getIsExpanded(), className: rowIsEditing ? 'bh-tr--editing' : undefined, onClick: onRowClick && !rowIsEditing
                        ? () => onRowClick(row.original)
                        : undefined, children: row.getVisibleCells().map((cell) => {
                        const column = cell.column;
                        const isCheckbox = column.id === 'select';
                        const isExpand = column.id === 'expand';
                        const isEditActions = column.id === 'edit-actions';
                        const columnId = 'accessorKey' in column.columnDef
                            ? String(column.columnDef.accessorKey)
                            : column.id;
                        const canEdit = enableEditing && column.columnDef.meta?.editable !== false;
                        const isCellEditing = isEditing(rowId, columnId);
                        // For grouped cells, skip rendering aggregated/placeholder cells
                        if (cell.getIsGrouped()) {
                            return null;
                        }
                        if (cell.getIsAggregated()) {
                            return (_jsx(TableCell, { children: flexRender(column.columnDef.aggregatedCell ?? column.columnDef.cell, cell.getContext()) }, cell.id));
                        }
                        if (cell.getIsPlaceholder()) {
                            return _jsx(TableCell, {}, cell.id);
                        }
                        return (_jsx(TableCell, { checkbox: isCheckbox, expandTrigger: isExpand, shrink: isCheckbox || isExpand || isEditActions, className: canEdit && !isCellEditing && !isCheckbox && !isExpand && !isEditActions
                                ? 'bh-td--editable'
                                : isCellEditing
                                    ? 'bh-td--editing'
                                    : undefined, onClick: isCheckbox || isExpand || isEditActions
                                ? (e) => e.stopPropagation()
                                : undefined, onDoubleClick: canEdit &&
                                editMode === 'cell' &&
                                !isCellEditing &&
                                !isCheckbox &&
                                !isExpand &&
                                !isEditActions
                                ? () => startEditing(rowId, columnId)
                                : undefined, style: {
                                width: cell.column.getSize() !== 150
                                    ? cell.column.getSize()
                                    : undefined,
                            }, children: isCellEditing || (rowIsEditing && canEdit && editMode === 'row') ? (renderEditInput(column, cell)) : (flexRender(column.columnDef.cell, cell.getContext())) }, cell.id));
                    }) }), row.getIsExpanded() && renderExpandedRow && !row.getIsGrouped() && (_jsx(TableRow, { expansion: true, children: _jsx(TableCell, { expansion: true, colSpan: tableColumns.length, children: renderExpandedRow(row) }) }))] }, row.id));
    };
    // ==========================================================================
    // Render
    // ==========================================================================
    const selectedCount = Object.keys(rowSelection).filter((key) => rowSelection[key]).length;
    const showActionBar = actionBarLeft || actionBarRight || (selectedCount > 0 && bulkActions);
    return (_jsxs("div", { className: className, children: [showActionBar && (_jsx(TableActionBar, { selectionCount: selectedCount, left: selectedCount > 0 ? bulkActions : actionBarLeft, right: actionBarRight })), _jsx(TableWrapper, { maxHeight: maxHeight, scrollY: !!maxHeight, children: _jsxs(Table, { size: size, variant: variant, rounded: rounded, hoverable: hoverable, loading: loading, children: [_jsxs(TableHead, { sticky: stickyHeader, children: [table.getHeaderGroups().map((headerGroup) => (_jsx(TableRow, { children: headerGroup.headers.map((header) => {
                                        const isSortable = header.column.getCanSort();
                                        const sortDirection = header.column.getIsSorted();
                                        const isCheckbox = header.id === 'select';
                                        const isExpand = header.id === 'expand';
                                        const isEditActions = header.id === 'edit-actions';
                                        return (_jsx(TableHeaderCell, { sortable: isSortable, sortDirection: sortDirection || null, onClick: isSortable
                                                ? header.column.getToggleSortingHandler()
                                                : undefined, checkbox: isCheckbox, shrink: isCheckbox || isExpand || isEditActions, style: {
                                                width: header.getSize() !== 150
                                                    ? header.getSize()
                                                    : undefined,
                                            }, children: header.isPlaceholder
                                                ? null
                                                : flexRender(header.column.columnDef.header, header.getContext()) }, header.id));
                                    }) }, headerGroup.id))), enableFiltering && (_jsx(TableRow, { filter: true, children: table.getHeaderGroups()[0]?.headers.map((header) => {
                                        const column = header.column;
                                        const canFilter = column.getCanFilter();
                                        const isCheckbox = header.id === 'select';
                                        const isExpand = header.id === 'expand';
                                        const isEditActions = header.id === 'edit-actions';
                                        if (!canFilter || isCheckbox || isExpand || isEditActions) {
                                            return _jsx(TableCell, { filter: true }, header.id);
                                        }
                                        return (_jsx(TableCell, { filter: true, children: _jsx(BhInputText, { placeholder: "", label: "", value: column.getFilterValue() ?? '', onBhInput: (e) => column.setFilterValue(e.detail) }) }, header.id));
                                    }) }))] }), _jsx(TableBody, { children: table.getRowModel().rows.length === 0 ? (_jsx(TableEmpty, { title: emptyTitle, description: emptyDescription, colSpan: tableColumns.length, icon: _jsx("span", { className: "material-symbols-outlined", children: "inbox" }) })) : (table.getRowModel().rows.map((row) => {
                                // Check if this is a group row
                                if (row.getIsGrouped()) {
                                    return renderGroupRow(row);
                                }
                                // Regular data row
                                return renderDataRow(row);
                            })) })] }) }), enablePagination && !enableGrouping && data.length > 0 && (_jsx(TablePagination, { page: table.getState().pagination.pageIndex + 1, totalPages: table.getPageCount(), totalItems: data.length, pageSize: table.getState().pagination.pageSize, pageSizeOptions: pageSizeOptions, onPageChange: (page) => table.setPageIndex(page - 1), onPageSizeChange: (newSize) => table.setPageSize(newSize) }))] }));
}
export function useDataTable({ data, columns, enableSorting = true, enableFiltering = false, enablePagination = true, enableRowSelection = false, enableExpanding = false, enableGrouping = false, groupBy = [], pageSize = 10, getRowId, getSubRows, }) {
    const [sorting, setSorting] = useState([]);
    const [columnFilters, setColumnFilters] = useState([]);
    const [rowSelection, setRowSelection] = useState({});
    const [expanded, setExpanded] = useState({});
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize,
    });
    const [grouping, setGrouping] = useState(groupBy);
    return useReactTable({
        data,
        columns,
        state: {
            sorting,
            columnFilters,
            rowSelection,
            expanded,
            pagination,
            grouping,
        },
        getRowId,
        getSubRows,
        enableRowSelection,
        enableSorting,
        enableFilters: enableFiltering,
        enableExpanding: enableExpanding || enableGrouping,
        enableGrouping,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onRowSelectionChange: setRowSelection,
        onExpandedChange: setExpanded,
        onPaginationChange: setPagination,
        onGroupingChange: setGrouping,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
        getFilteredRowModel: enableFiltering ? getFilteredRowModel() : undefined,
        getPaginationRowModel: enablePagination && !enableGrouping ? getPaginationRowModel() : undefined,
        getExpandedRowModel: enableExpanding || enableGrouping ? getExpandedRowModel() : undefined,
        getGroupedRowModel: enableGrouping ? getGroupedRowModel() : undefined,
    });
}
// =============================================================================
// Exports
// =============================================================================
export { DataTable as BhDataTable };
