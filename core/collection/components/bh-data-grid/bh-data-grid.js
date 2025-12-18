import { h, forceUpdate } from "@stencil/core";
import { createTable, getCoreRowModel, getSortedRowModel, getFilteredRowModel, getPaginationRowModel, getExpandedRowModel, getGroupedRowModel, } from "@tanstack/table-core";
export class BhDataGrid {
    el;
    // ===========================================================================
    // Props - Data
    // ===========================================================================
    /** Array of data objects to display */
    data = [];
    /** Column definitions (TanStack ColumnDef format) */
    columns = [];
    /** Function to get unique row ID */
    getRowId;
    /** Function to get sub-rows for expansion */
    getSubRows;
    // ===========================================================================
    // Props - Display
    // ===========================================================================
    /** Size variant */
    size = 'default';
    /** Show striped rows */
    striped = false;
    /** Show borders */
    bordered = false;
    /** Sticky header */
    stickyHeader = false;
    /** Max height for scrollable container (enables sticky header) */
    maxHeight;
    /** Caption text */
    caption;
    /** Caption position */
    captionPosition = 'top';
    /** Empty state title */
    emptyTitle = 'No data';
    /** Empty state description */
    emptyDescription = 'There are no records to display.';
    // ===========================================================================
    // Props - Loading
    // ===========================================================================
    /** Loading state */
    loading = false;
    /** Loading type */
    loadingType = 'spinner';
    /** Number of skeleton rows to show */
    skeletonRowCount = 5;
    // ===========================================================================
    // Props - Sorting
    // ===========================================================================
    /** Enable sorting */
    enableSorting = true;
    /** Enable multi-column sorting */
    enableMultiSort = false;
    /** Initial/controlled sort state */
    sortState = [];
    // ===========================================================================
    // Props - Filtering
    // ===========================================================================
    /** Enable column filtering */
    enableFiltering = false;
    /** Enable global filter (search) */
    enableGlobalFilter = false;
    /** Show filter row below header */
    showFilterRow = false;
    /** Global filter placeholder text */
    globalFilterPlaceholder = 'Search...';
    /** Initial/controlled filter state */
    filterState = [];
    /** Initial/controlled global filter */
    globalFilter = '';
    // ===========================================================================
    // Props - Selection
    // ===========================================================================
    /** Selection mode */
    selectionMode = 'none';
    /** Initial/controlled selected row IDs */
    selectedRowIds = [];
    // ===========================================================================
    // Props - Pagination
    // ===========================================================================
    /** Enable pagination */
    enablePagination = false;
    /** Current page (1-indexed) */
    page = 1;
    /** Page size */
    pageSize = 10;
    /** Page size options */
    pageSizeOptions = [10, 25, 50, 100];
    // ===========================================================================
    // Props - Expansion
    // ===========================================================================
    /** Enable row expansion */
    enableExpansion = false;
    /** Initial/controlled expanded row IDs */
    expandedRowIds = [];
    // ===========================================================================
    // Props - Grouping
    // ===========================================================================
    /** Enable grouping */
    enableGrouping = false;
    /** Column IDs to group by */
    groupBy = [];
    // ===========================================================================
    // Props - Editing
    // ===========================================================================
    /** Enable editing */
    enableEditing = false;
    /** Edit mode */
    editMode = 'cell';
    /** Show edit action buttons */
    showEditActions = true;
    // ===========================================================================
    // Internal State
    // ===========================================================================
    tableState = {};
    editingRowId = null;
    editingColumnId = null;
    editingValues = {};
    validationErrors = {};
    hoveredRowId = null;
    table = null;
    // ===========================================================================
    // Events
    // ===========================================================================
    bhSortChange;
    bhFilterChange;
    bhSelectionChange;
    bhPageChange;
    bhRowClick;
    bhCellClick;
    bhExpandChange;
    bhGroupToggle;
    bhEditStart;
    bhEditCancel;
    bhEditSave;
    bhCellChange;
    bhValidationError;
    // ===========================================================================
    // Watchers
    // ===========================================================================
    handleDataChange() {
        this.initializeTable();
    }
    handleSortStateChange(newValue) {
        if (this.table) {
            this.table.setSorting(newValue);
        }
    }
    handleFilterStateChange(newValue) {
        if (this.table) {
            this.table.setColumnFilters(newValue);
        }
    }
    handleSelectedRowIdsChange(newValue) {
        if (this.table) {
            const selection = {};
            newValue.forEach(id => { selection[id] = true; });
            this.table.setRowSelection(selection);
        }
    }
    handlePaginationPropChange() {
        if (this.table) {
            this.table.setPagination({
                pageIndex: this.page - 1,
                pageSize: this.pageSize,
            });
        }
    }
    handleExpandedRowIdsChange(newValue) {
        if (this.table) {
            const expanded = {};
            newValue.forEach(id => { expanded[id] = true; });
            this.table.setExpanded(expanded);
        }
    }
    handleGroupByChange(newValue) {
        if (this.table) {
            this.table.setGrouping(newValue);
        }
    }
    // ===========================================================================
    // Lifecycle
    // ===========================================================================
    componentWillLoad() {
        this.initializeTable();
    }
    // ===========================================================================
    // Table Initialization
    // ===========================================================================
    initializeTable() {
        // Build initial state
        const initialState = {
            sorting: this.sortState,
            columnFilters: this.filterState,
            globalFilter: this.globalFilter,
            rowSelection: this.buildRowSelection(),
            expanded: this.buildExpanded(),
            pagination: {
                pageIndex: this.page - 1,
                pageSize: this.pageSize,
            },
            grouping: this.groupBy,
            columnVisibility: this.buildColumnVisibility(),
            columnPinning: { left: [], right: [] },
            columnSizing: {},
        };
        this.tableState = initialState;
        // Create table instance
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.table = createTable({
            data: this.data,
            columns: this.columns,
            state: this.tableState,
            onStateChange: (updater) => {
                const newState = typeof updater === 'function'
                    ? updater(this.tableState)
                    : updater;
                this.handleStateChange(newState);
            },
            getCoreRowModel: getCoreRowModel(),
            getSortedRowModel: this.enableSorting ? getSortedRowModel() : undefined,
            getFilteredRowModel: this.enableFiltering || this.enableGlobalFilter ? getFilteredRowModel() : undefined,
            getPaginationRowModel: this.enablePagination ? getPaginationRowModel() : undefined,
            getExpandedRowModel: this.enableExpansion || this.enableGrouping ? getExpandedRowModel() : undefined,
            getGroupedRowModel: this.enableGrouping ? getGroupedRowModel() : undefined,
            getRowId: this.getRowId || ((row, index) => String(row.id ?? index)),
            getSubRows: this.getSubRows,
            enableRowSelection: this.selectionMode !== 'none',
            enableMultiRowSelection: this.selectionMode === 'multiple-click' || this.selectionMode === 'multiple-checkbox',
            enableSorting: this.enableSorting,
            enableFilters: this.enableFiltering || this.enableGlobalFilter,
            enableExpanding: this.enableExpansion || this.enableGrouping,
            enableGrouping: this.enableGrouping,
            manualPagination: false,
            autoResetExpanded: false,
            renderFallbackValue: null,
        });
        // Force update after table creation
        forceUpdate(this.el);
    }
    handleStateChange(newState) {
        const oldState = this.tableState;
        this.tableState = newState;
        // Update table options with new state
        if (this.table) {
            this.table.setOptions(prev => ({
                ...prev,
                state: newState,
            }));
        }
        // Emit events for state changes
        if (JSON.stringify(oldState.sorting) !== JSON.stringify(newState.sorting)) {
            this.sortState = newState.sorting;
            this.bhSortChange.emit({ sorting: newState.sorting });
        }
        if (JSON.stringify(oldState.columnFilters) !== JSON.stringify(newState.columnFilters) ||
            oldState.globalFilter !== newState.globalFilter) {
            this.filterState = newState.columnFilters;
            this.globalFilter = newState.globalFilter;
            this.bhFilterChange.emit({
                columnFilters: newState.columnFilters,
                globalFilter: newState.globalFilter,
            });
        }
        if (JSON.stringify(oldState.rowSelection) !== JSON.stringify(newState.rowSelection)) {
            const selectedIds = Object.keys(newState.rowSelection).filter(id => newState.rowSelection[id]);
            this.selectedRowIds = selectedIds;
            const selectedRows = this.table?.getSelectedRowModel().rows.map(r => r.original) ?? [];
            this.bhSelectionChange.emit({
                selectedRowIds: selectedIds,
                selectedRows,
            });
        }
        if (oldState.pagination?.pageIndex !== newState.pagination?.pageIndex ||
            oldState.pagination?.pageSize !== newState.pagination?.pageSize) {
            this.page = newState.pagination.pageIndex + 1;
            this.pageSize = newState.pagination.pageSize;
            this.bhPageChange.emit({
                page: this.page,
                pageSize: this.pageSize,
            });
        }
        // Force re-render
        forceUpdate(this.el);
    }
    buildRowSelection() {
        const selection = {};
        this.selectedRowIds.forEach(id => { selection[id] = true; });
        return selection;
    }
    buildExpanded() {
        const expanded = {};
        this.expandedRowIds.forEach(id => { expanded[id] = true; });
        return expanded;
    }
    buildColumnVisibility() {
        // Hide grouped columns
        const visibility = {};
        if (this.enableGrouping) {
            this.groupBy.forEach(colId => { visibility[colId] = false; });
        }
        return visibility;
    }
    // ===========================================================================
    // Event Handlers
    // ===========================================================================
    handleRowClick = (row) => {
        const rowId = row.id;
        // Handle click-based selection
        if (this.selectionMode === 'single-click') {
            const isSelected = row.getIsSelected();
            this.table?.resetRowSelection();
            if (!isSelected) {
                row.toggleSelected(true);
            }
        }
        else if (this.selectionMode === 'multiple-click') {
            row.toggleSelected();
        }
        this.bhRowClick.emit({
            row: row.original,
            rowId,
            rowIndex: row.index,
        });
    };
    handleCellClick = (row, cell) => {
        this.bhCellClick.emit({
            row: row.original,
            rowId: row.id,
            rowIndex: row.index,
            columnId: cell.column.id,
            value: cell.getValue(),
        });
    };
    handleHeaderClick = (header) => {
        if (this.enableSorting && header.column.getCanSort()) {
            header.column.toggleSorting(undefined, this.enableMultiSort);
        }
    };
    handleRowExpand = (row) => {
        const wasExpanded = row.getIsExpanded();
        row.toggleExpanded();
        this.bhExpandChange.emit({
            rowId: row.id,
            expanded: !wasExpanded,
        });
    };
    handleGroupToggle = (row) => {
        const wasExpanded = row.getIsExpanded();
        row.toggleExpanded();
        this.bhGroupToggle.emit({
            groupId: row.id,
            expanded: !wasExpanded,
        });
    };
    handleGlobalFilterChange = (event) => {
        const input = event.target;
        this.table?.setGlobalFilter(input.value);
    };
    handleColumnFilterChange = (columnId, value) => {
        const column = this.table?.getColumn(columnId);
        if (column) {
            column.setFilterValue(value || undefined);
        }
    };
    handlePaginationChange = (event) => {
        const { page, pageSize } = event.detail;
        this.table?.setPagination({
            pageIndex: page - 1,
            pageSize,
        });
    };
    // ===========================================================================
    // Editing Handlers
    // ===========================================================================
    startEditing = (row, columnId) => {
        if (!this.enableEditing)
            return;
        this.editingRowId = row.id;
        this.editingColumnId = this.editMode === 'cell' ? (columnId || null) : null;
        // Initialize editing values from current row
        const values = {};
        this.columns.forEach(col => {
            const colId = col.accessorKey || col.id;
            if (colId) {
                values[colId] = row.original[colId];
            }
        });
        this.editingValues = values;
        this.validationErrors = {};
        this.bhEditStart.emit({
            rowId: row.id,
            row: row.original,
            columnId,
        });
    };
    cancelEditing = () => {
        if (!this.editingRowId)
            return;
        const row = this.table?.getRow(this.editingRowId);
        if (row) {
            this.bhEditCancel.emit({
                rowId: this.editingRowId,
                row: row.original,
            });
        }
        this.editingRowId = null;
        this.editingColumnId = null;
        this.editingValues = {};
        this.validationErrors = {};
    };
    saveEditing = () => {
        if (!this.editingRowId || !this.table)
            return;
        const row = this.table.getRow(this.editingRowId);
        if (!row)
            return;
        // Validate all edited values
        const errors = {};
        for (const [columnId, value] of Object.entries(this.editingValues)) {
            const column = this.table.getColumn(columnId);
            const validate = column?.columnDef.meta?.validate;
            if (validate) {
                const error = validate(value, row.original);
                if (error) {
                    errors[columnId] = error;
                    this.bhValidationError.emit({
                        rowId: this.editingRowId,
                        columnId,
                        value,
                        error,
                    });
                }
            }
        }
        if (Object.keys(errors).length > 0) {
            this.validationErrors = errors;
            return;
        }
        // Determine changes
        const changes = {};
        for (const [columnId, newValue] of Object.entries(this.editingValues)) {
            const originalValue = row.original[columnId];
            if (originalValue !== newValue) {
                changes[columnId] = newValue;
            }
        }
        // Build new row
        const newRow = { ...row.original, ...changes };
        this.bhEditSave.emit({
            rowId: this.editingRowId,
            rowIndex: row.index,
            originalRow: row.original,
            changes,
            newRow,
        });
        this.editingRowId = null;
        this.editingColumnId = null;
        this.editingValues = {};
        this.validationErrors = {};
    };
    handleEditValueChange = (columnId, newValue) => {
        const oldValue = this.editingValues[columnId];
        this.editingValues = { ...this.editingValues, [columnId]: newValue };
        // Clear validation error for this column
        if (this.validationErrors[columnId]) {
            const { [columnId]: _, ...rest } = this.validationErrors;
            this.validationErrors = rest;
        }
        if (this.editingRowId) {
            this.bhCellChange.emit({
                rowId: this.editingRowId,
                columnId,
                oldValue,
                newValue,
            });
        }
    };
    handleEditKeyDown = (event, columnId) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.saveEditing();
        }
        else if (event.key === 'Escape') {
            event.preventDefault();
            this.cancelEditing();
        }
        else if (event.key === 'Tab' && this.editMode === 'cell') {
            event.preventDefault();
            this.moveToNextEditableCell(columnId, event.shiftKey);
        }
    };
    moveToNextEditableCell = (currentColumnId, reverse) => {
        const editableColumns = this.columns.filter(col => col.meta?.editable !== false);
        const currentIndex = editableColumns.findIndex(col => {
            const colId = col.accessorKey || col.id;
            return colId === currentColumnId;
        });
        if (currentIndex === -1)
            return;
        const nextIndex = reverse ? currentIndex - 1 : currentIndex + 1;
        if (nextIndex >= 0 && nextIndex < editableColumns.length) {
            const nextCol = editableColumns[nextIndex];
            const nextColId = nextCol.accessorKey || nextCol.id;
            this.editingColumnId = nextColId || null;
        }
        else {
            this.saveEditing();
        }
    };
    isEditing(rowId, columnId) {
        if (this.editingRowId !== rowId)
            return false;
        if (this.editMode === 'cell') {
            return columnId ? this.editingColumnId === columnId : false;
        }
        return true;
    }
    handleCellDoubleClick = (row, cell) => {
        if (!this.enableEditing || cell.column.columnDef.meta?.editable === false)
            return;
        if (this.editMode === 'cell') {
            this.startEditing(row, cell.column.id);
        }
    };
    // ===========================================================================
    // Render Helpers
    // ===========================================================================
    flexRender(renderer, context) {
        if (typeof renderer === 'function') {
            return renderer(context);
        }
        return renderer;
    }
    formatCellValue(value, meta) {
        if (value === null || value === undefined)
            return '';
        switch (meta?.type) {
            case 'number':
                return typeof value === 'number'
                    ? value.toLocaleString(undefined, meta.numberFormat)
                    : String(value);
            case 'date':
                return value instanceof Date
                    ? value.toLocaleDateString(undefined, meta.dateFormat)
                    : new Date(value).toLocaleDateString(undefined, meta.dateFormat);
            case 'boolean':
                return value ? 'Yes' : 'No';
            default:
                return String(value);
        }
    }
    // ===========================================================================
    // Render Methods
    // ===========================================================================
    renderCaption() {
        if (!this.caption)
            return null;
        const captionClasses = {
            'data-grid-caption': true,
            [`data-grid-caption-${this.captionPosition}`]: true,
        };
        return (h("div", { class: captionClasses }, h("slot", { name: "caption" }, this.caption)));
    }
    renderGlobalFilter() {
        if (!this.enableGlobalFilter)
            return null;
        return (h("div", { class: "data-grid-global-filter" }, h("span", { class: "data-grid-search-icon material-symbols-outlined" }, "search"), h("input", { type: "text", class: "data-grid-global-filter-input", placeholder: this.globalFilterPlaceholder, value: this.globalFilter, onInput: this.handleGlobalFilterChange })));
    }
    renderHeader() {
        if (!this.table)
            return null;
        const headerGroups = this.table.getHeaderGroups();
        return (h("div", { class: { 'data-grid-header': true, 'data-grid-header-sticky': this.stickyHeader } }, headerGroups.map(headerGroup => (h("div", { class: "data-grid-header-row", role: "row", key: headerGroup.id }, this.renderSelectionHeader(), this.enableExpansion && !this.enableGrouping && (h("div", { class: "data-grid-header-cell data-grid-cell-expand", role: "columnheader" })), headerGroup.headers.map(header => this.renderHeaderCell(header)), this.enableEditing && this.showEditActions && this.editMode === 'row' && (h("div", { class: "data-grid-header-cell data-grid-cell-actions", role: "columnheader" }))))), this.showFilterRow && this.renderFilterRow()));
    }
    renderSelectionHeader() {
        if (this.selectionMode === 'none' || this.selectionMode === 'single-click' || this.selectionMode === 'multiple-click') {
            return null;
        }
        if (this.selectionMode === 'single-radio') {
            return h("div", { class: "data-grid-header-cell data-grid-cell-select", role: "columnheader" });
        }
        // Multiple checkbox - show select all
        const isAllSelected = this.table?.getIsAllRowsSelected();
        const isSomeSelected = this.table?.getIsSomeRowsSelected();
        return (h("div", { class: "data-grid-header-cell data-grid-cell-select", role: "columnheader" }, h("bh-checkbox", { size: "sm", checked: isAllSelected, indeterminate: isSomeSelected && !isAllSelected, onBhChange: () => this.table?.toggleAllRowsSelected() })));
    }
    renderHeaderCell(header) {
        if (header.isPlaceholder) {
            return h("div", { class: "data-grid-header-cell", role: "columnheader", key: header.id });
        }
        const canSort = header.column.getCanSort();
        const sortDirection = header.column.getIsSorted();
        const meta = header.column.columnDef.meta;
        const cellClasses = {
            'data-grid-header-cell': true,
            'data-grid-header-cell-sortable': canSort,
            'data-grid-header-cell-sorted': !!sortDirection,
            [`data-grid-cell-align-${meta?.align || 'left'}`]: true,
        };
        const style = header.column.getSize()
            ? { width: `${header.column.getSize()}px` }
            : {};
        return (h("div", { class: cellClasses, style: style, role: "columnheader", "aria-sort": sortDirection === 'asc' ? 'ascending' : sortDirection === 'desc' ? 'descending' : 'none', onClick: () => canSort && this.handleHeaderClick(header), key: header.id }, h("span", { class: "data-grid-header-text" }, this.flexRender(header.column.columnDef.header, header.getContext())), canSort && sortDirection && (h("span", { class: "data-grid-sort-icon material-symbols-outlined" }, sortDirection === 'asc' ? 'arrow_upward' : 'arrow_downward'))));
    }
    renderFilterRow() {
        if (!this.table)
            return null;
        const headers = this.table.getHeaderGroups()[0]?.headers || [];
        return (h("div", { class: "data-grid-filter-row", role: "row" }, (this.selectionMode === 'single-radio' || this.selectionMode === 'multiple-checkbox') && (h("div", { class: "data-grid-filter-cell data-grid-cell-select", role: "cell" })), this.enableExpansion && !this.enableGrouping && (h("div", { class: "data-grid-filter-cell data-grid-cell-expand", role: "cell" })), headers.map(header => {
            const canFilter = header.column.getCanFilter();
            const meta = header.column.columnDef.meta;
            if (!canFilter || meta?.filterable === false) {
                return h("div", { class: "data-grid-filter-cell", role: "cell", key: header.id });
            }
            const filterValue = header.column.getFilterValue() ?? '';
            return (h("div", { class: "data-grid-filter-cell", role: "cell", key: header.id }, h("input", { type: meta?.type === 'number' ? 'number' : meta?.type === 'date' ? 'date' : 'text', class: "data-grid-filter-input", placeholder: `Filter...`, value: filterValue, onInput: (e) => this.handleColumnFilterChange(header.column.id, e.target.value) })));
        }), this.enableEditing && this.showEditActions && this.editMode === 'row' && (h("div", { class: "data-grid-filter-cell data-grid-cell-actions", role: "cell" }))));
    }
    renderBody() {
        if (!this.table)
            return null;
        // Loading skeleton
        if (this.loading && this.loadingType === 'skeleton') {
            return this.renderSkeleton();
        }
        const rows = this.table.getRowModel().rows;
        // Empty state
        if (rows.length === 0) {
            return this.renderEmptyState();
        }
        return (h("div", { class: "data-grid-body", role: "rowgroup" }, rows.map(row => {
            if (row.getIsGrouped()) {
                return this.renderGroupRow(row);
            }
            return this.renderDataRow(row);
        })));
    }
    renderDataRow(row) {
        const isSelected = row.getIsSelected();
        const isExpanded = row.getIsExpanded();
        const isRowEditing = this.editingRowId === row.id;
        const rowClasses = {
            'data-grid-row': true,
            'data-grid-row-selected': isSelected,
            'data-grid-row-expanded': isExpanded,
            'data-grid-row-editing': isRowEditing,
            'data-grid-row-hover': this.hoveredRowId === row.id,
            'data-grid-row-striped': this.striped && row.index % 2 === 1,
            'data-grid-row-clickable': this.selectionMode === 'single-click' || this.selectionMode === 'multiple-click',
        };
        return [
            h("div", { class: rowClasses, role: "row", "aria-selected": isSelected ? 'true' : 'false', key: row.id, onClick: () => this.handleRowClick(row), onMouseEnter: () => { this.hoveredRowId = row.id; }, onMouseLeave: () => { this.hoveredRowId = null; } }, this.renderSelectionCell(row), this.enableExpansion && !this.enableGrouping && (h("div", { class: "data-grid-cell data-grid-cell-expand", role: "cell", onClick: (e) => { e.stopPropagation(); } }, row.getCanExpand() && (h("button", { class: "data-grid-expand-btn", onClick: () => this.handleRowExpand(row), "aria-label": isExpanded ? 'Collapse row' : 'Expand row' }, h("span", { class: "material-symbols-outlined" }, isExpanded ? 'expand_more' : 'chevron_right'))))), row.getVisibleCells().map(cell => this.renderCell(row, cell)), this.enableEditing && this.showEditActions && this.editMode === 'row' && (h("div", { class: "data-grid-cell data-grid-cell-actions", role: "cell", onClick: (e) => e.stopPropagation() }, isRowEditing ? (h("div", { class: "data-grid-edit-actions" }, h("button", { class: "data-grid-action-btn", onClick: () => this.saveEditing(), title: "Save" }, h("span", { class: "material-symbols-outlined" }, "check")), h("button", { class: "data-grid-action-btn", onClick: () => this.cancelEditing(), title: "Cancel" }, h("span", { class: "material-symbols-outlined" }, "close")))) : (h("button", { class: "data-grid-action-btn", onClick: () => this.startEditing(row), title: "Edit" }, h("span", { class: "material-symbols-outlined" }, "edit")))))),
            // Expanded content
            isExpanded && this.enableExpansion && !this.enableGrouping && (h("div", { class: "data-grid-row-expansion", key: `${row.id}-expansion` }, h("slot", { name: "expanded-row" }))),
        ];
    }
    renderSelectionCell(row) {
        if (this.selectionMode === 'none' || this.selectionMode === 'single-click' || this.selectionMode === 'multiple-click') {
            return null;
        }
        const isSelected = row.getIsSelected();
        if (this.selectionMode === 'single-radio') {
            return (h("div", { class: "data-grid-cell data-grid-cell-select", role: "cell", onClick: (e) => e.stopPropagation() }, h("bh-radio-button", { selected: isSelected, onBhChange: () => {
                    this.table?.resetRowSelection();
                    row.toggleSelected(true);
                } })));
        }
        // Multiple checkbox
        return (h("div", { class: "data-grid-cell data-grid-cell-select", role: "cell", onClick: (e) => e.stopPropagation() }, h("bh-checkbox", { size: "sm", checked: isSelected, onBhChange: () => row.toggleSelected() })));
    }
    renderCell(row, cell) {
        const meta = cell.column.columnDef.meta;
        const columnId = cell.column.id;
        const isCellEditing = this.isEditing(row.id, columnId);
        const canEdit = this.enableEditing && meta?.editable !== false;
        const hasError = !!this.validationErrors[columnId];
        const cellClasses = {
            'data-grid-cell': true,
            [`data-grid-cell-align-${meta?.align || (meta?.type === 'number' ? 'right' : 'left')}`]: true,
            [`data-grid-cell-type-${meta?.type || 'text'}`]: true,
            'data-grid-cell-editing': isCellEditing,
            'data-grid-cell-editable': canEdit && !isCellEditing,
            'data-grid-cell-error': hasError,
        };
        const style = cell.column.getSize()
            ? { width: `${cell.column.getSize()}px` }
            : {};
        return (h("div", { class: cellClasses, style: style, role: "cell", key: cell.id, onClick: (e) => {
                e.stopPropagation();
                this.handleCellClick(row, cell);
            }, onDblClick: (e) => {
                e.stopPropagation();
                this.handleCellDoubleClick(row, cell);
            } }, isCellEditing ? this.renderEditInput(cell) : this.renderCellContent(cell), hasError && (h("span", { class: "data-grid-cell-error-text" }, this.validationErrors[columnId]))));
    }
    renderCellContent(cell) {
        const rendered = this.flexRender(cell.column.columnDef.cell, cell.getContext());
        // If custom cell renderer returns something, use it
        if (rendered !== undefined && rendered !== null && rendered !== cell.getValue()) {
            return rendered;
        }
        // Default formatting
        return this.formatCellValue(cell.getValue(), cell.column.columnDef.meta);
    }
    renderEditInput(cell) {
        const columnId = cell.column.id;
        const meta = cell.column.columnDef.meta;
        const currentValue = this.editingValues[columnId] ?? cell.getValue();
        const inputType = meta?.type === 'number' ? 'number'
            : meta?.type === 'date' ? 'date'
                : meta?.type === 'boolean' ? 'checkbox'
                    : 'text';
        if (meta?.type === 'boolean') {
            return (h("bh-checkbox", { size: "sm", checked: Boolean(currentValue), onBhChange: (e) => this.handleEditValueChange(columnId, e.detail.checked) }));
        }
        return (h("input", { type: inputType, class: "data-grid-edit-input", value: currentValue != null ? String(currentValue) : '', onInput: (e) => {
                const input = e.target;
                const newValue = meta?.type === 'number' ? Number(input.value) : input.value;
                this.handleEditValueChange(columnId, newValue);
            }, onKeyDown: (e) => this.handleEditKeyDown(e, columnId), ref: (el) => el && requestAnimationFrame(() => el.focus()) }));
    }
    renderGroupRow(row) {
        const isExpanded = row.getIsExpanded();
        const groupingColumnId = row.groupingColumnId;
        const groupValue = row.groupingValue;
        const leafRows = row.getLeafRows();
        // Check if all leaf rows are selected for group selection
        const allSelected = leafRows.every(r => r.getIsSelected());
        const someSelected = leafRows.some(r => r.getIsSelected());
        const rowClasses = {
            'data-grid-row': true,
            'data-grid-row-group': true,
            'data-grid-row-group-expanded': isExpanded,
        };
        return [
            h("div", { class: rowClasses, role: "row", "aria-expanded": isExpanded ? 'true' : 'false', key: row.id, onClick: () => this.handleGroupToggle(row) }, this.selectionMode === 'multiple-checkbox' && (h("div", { class: "data-grid-cell data-grid-cell-select", role: "cell", onClick: (e) => e.stopPropagation() }, h("bh-checkbox", { size: "sm", checked: allSelected, indeterminate: someSelected && !allSelected, onBhChange: () => {
                    leafRows.forEach(r => r.toggleSelected(!allSelected));
                } }))), h("div", { class: "data-grid-cell data-grid-cell-group-label", role: "cell" }, h("button", { class: "data-grid-group-toggle", "aria-label": isExpanded ? 'Collapse group' : 'Expand group' }, h("span", { class: "material-symbols-outlined" }, isExpanded ? 'expand_more' : 'chevron_right')), h("span", { class: "data-grid-group-label" }, h("span", { class: "data-grid-group-column" }, groupingColumnId, ": "), h("span", { class: "data-grid-group-value" }, String(groupValue))), h("span", { class: "data-grid-group-count" }, "(", leafRows.length, " ", leafRows.length === 1 ? 'item' : 'items', ")"))),
            // Render child rows if expanded
            isExpanded && row.subRows.map(subRow => {
                if (subRow.getIsGrouped()) {
                    return this.renderGroupRow(subRow);
                }
                return this.renderDataRow(subRow);
            }),
        ];
    }
    renderEmptyState() {
        return (h("div", { class: "data-grid-empty" }, h("bh-empty-state", { emptyTitle: this.emptyTitle, description: this.emptyDescription })));
    }
    renderSkeleton() {
        const skeletonRows = Array.from({ length: this.skeletonRowCount }, (_, i) => i);
        const columnCount = this.columns.length +
            (this.selectionMode === 'single-radio' || this.selectionMode === 'multiple-checkbox' ? 1 : 0) +
            (this.enableExpansion && !this.enableGrouping ? 1 : 0) +
            (this.enableEditing && this.showEditActions && this.editMode === 'row' ? 1 : 0);
        return (h("div", { class: "data-grid-body data-grid-skeleton", role: "rowgroup" }, skeletonRows.map(i => (h("div", { class: "data-grid-row data-grid-row-skeleton", role: "row", key: i }, Array.from({ length: columnCount }, (_, j) => (h("div", { class: "data-grid-cell", role: "cell", key: j }, h("bh-skeleton-loader", { width: "80%", height: "16px" })))))))));
    }
    renderLoadingOverlay() {
        if (!this.loading || this.loadingType !== 'spinner')
            return null;
        return (h("div", { class: "data-grid-loading-overlay" }, h("bh-loader-spinner", { size: "lg" })));
    }
    renderPagination() {
        if (!this.enablePagination || !this.table)
            return null;
        const rowCount = this.table.getFilteredRowModel().rows.length;
        return (h("bh-pagination", { page: this.page, totalItems: rowCount, pageSize: this.pageSize, pageSizeOptions: this.pageSizeOptions, onBhPageChange: this.handlePaginationChange, onBhPageSizeChange: this.handlePaginationChange }));
    }
    // ===========================================================================
    // Main Render
    // ===========================================================================
    render() {
        const gridClasses = {
            'data-grid': true,
            [`data-grid-${this.size}`]: true,
            'data-grid-bordered': this.bordered,
            'data-grid-striped': this.striped,
            'data-grid-loading': this.loading,
        };
        const containerStyle = this.maxHeight
            ? { maxHeight: this.maxHeight, overflowY: 'auto' }
            : {};
        return (h("div", { key: 'aa7f1e09699fb99be7625f90b3b94fa9e6927498', class: gridClasses, role: "grid", "aria-busy": this.loading ? 'true' : 'false' }, this.captionPosition === 'top' && this.renderCaption(), this.renderGlobalFilter(), h("div", { key: '2929257ae04c88f8d225edac899fe7ec5f195fb2', class: "data-grid-container", style: containerStyle }, h("div", { key: '66bfba27da2199fbb1735229ea07e522b0f83dd1', class: "data-grid-table" }, this.renderHeader(), this.renderBody()), this.renderLoadingOverlay()), this.captionPosition === 'bottom' && this.renderCaption(), this.renderPagination()));
    }
    static get is() { return "bh-data-grid"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["bh-data-grid.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["bh-data-grid.css"]
        };
    }
    static get properties() {
        return {
            "data": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TData[]",
                    "resolved": "TData[]",
                    "references": {
                        "TData": {
                            "location": "global",
                            "id": "global::TData"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Array of data objects to display"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "columns": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ColumnDef<TData, unknown>[]",
                    "resolved": "ColumnDef<TData, unknown>[]",
                    "references": {
                        "ColumnDef": {
                            "location": "import",
                            "path": "@tanstack/table-core",
                            "id": "../../node_modules/@tanstack/table-core/build/lib/index.d.ts::ColumnDef"
                        },
                        "TData": {
                            "location": "global",
                            "id": "global::TData"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Column definitions (TanStack ColumnDef format)"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "getRowId": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "GetRowIdFn<TData>",
                    "resolved": "((row: TData, index: number) => string) | undefined",
                    "references": {
                        "GetRowIdFn": {
                            "location": "import",
                            "path": "./bh-data-grid.types",
                            "id": "src/components/bh-data-grid/bh-data-grid.types.ts::GetRowIdFn"
                        },
                        "TData": {
                            "location": "global",
                            "id": "global::TData"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Function to get unique row ID"
                },
                "getter": false,
                "setter": false
            },
            "getSubRows": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "GetSubRowsFn<TData>",
                    "resolved": "((row: TData) => TData[] | undefined) | undefined",
                    "references": {
                        "GetSubRowsFn": {
                            "location": "import",
                            "path": "./bh-data-grid.types",
                            "id": "src/components/bh-data-grid/bh-data-grid.types.ts::GetSubRowsFn"
                        },
                        "TData": {
                            "location": "global",
                            "id": "global::TData"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Function to get sub-rows for expansion"
                },
                "getter": false,
                "setter": false
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "DataGridSize",
                    "resolved": "\"compact\" | \"default\" | \"relaxed\"",
                    "references": {
                        "DataGridSize": {
                            "location": "import",
                            "path": "./bh-data-grid.types",
                            "id": "src/components/bh-data-grid/bh-data-grid.types.ts::DataGridSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size variant"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'default'"
            },
            "striped": {
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
                    "text": "Show striped rows"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "striped",
                "defaultValue": "false"
            },
            "bordered": {
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
                    "text": "Show borders"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "bordered",
                "defaultValue": "false"
            },
            "stickyHeader": {
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
                    "text": "Sticky header"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "sticky-header",
                "defaultValue": "false"
            },
            "maxHeight": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Max height for scrollable container (enables sticky header)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-height"
            },
            "caption": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Caption text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "caption"
            },
            "captionPosition": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "DataGridCaptionPosition",
                    "resolved": "\"bottom\" | \"top\"",
                    "references": {
                        "DataGridCaptionPosition": {
                            "location": "import",
                            "path": "./bh-data-grid.types",
                            "id": "src/components/bh-data-grid/bh-data-grid.types.ts::DataGridCaptionPosition"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Caption position"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "caption-position",
                "defaultValue": "'top'"
            },
            "emptyTitle": {
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
                    "text": "Empty state title"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "empty-title",
                "defaultValue": "'No data'"
            },
            "emptyDescription": {
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
                    "text": "Empty state description"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "empty-description",
                "defaultValue": "'There are no records to display.'"
            },
            "loading": {
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
                    "text": "Loading state"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "loading",
                "defaultValue": "false"
            },
            "loadingType": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "DataGridLoadingType",
                    "resolved": "\"none\" | \"skeleton\" | \"spinner\"",
                    "references": {
                        "DataGridLoadingType": {
                            "location": "import",
                            "path": "./bh-data-grid.types",
                            "id": "src/components/bh-data-grid/bh-data-grid.types.ts::DataGridLoadingType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Loading type"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "loading-type",
                "defaultValue": "'spinner'"
            },
            "skeletonRowCount": {
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
                    "text": "Number of skeleton rows to show"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "skeleton-row-count",
                "defaultValue": "5"
            },
            "enableSorting": {
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
                    "text": "Enable sorting"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "enable-sorting",
                "defaultValue": "true"
            },
            "enableMultiSort": {
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
                    "text": "Enable multi-column sorting"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "enable-multi-sort",
                "defaultValue": "false"
            },
            "sortState": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "SortingState",
                    "resolved": "ColumnSort[]",
                    "references": {
                        "SortingState": {
                            "location": "import",
                            "path": "@tanstack/table-core",
                            "id": "../../node_modules/@tanstack/table-core/build/lib/index.d.ts::SortingState"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Initial/controlled sort state"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "enableFiltering": {
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
                    "text": "Enable column filtering"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "enable-filtering",
                "defaultValue": "false"
            },
            "enableGlobalFilter": {
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
                    "text": "Enable global filter (search)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "enable-global-filter",
                "defaultValue": "false"
            },
            "showFilterRow": {
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
                    "text": "Show filter row below header"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-filter-row",
                "defaultValue": "false"
            },
            "globalFilterPlaceholder": {
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
                    "text": "Global filter placeholder text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "global-filter-placeholder",
                "defaultValue": "'Search...'"
            },
            "filterState": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "ColumnFiltersState",
                    "resolved": "ColumnFilter[]",
                    "references": {
                        "ColumnFiltersState": {
                            "location": "import",
                            "path": "@tanstack/table-core",
                            "id": "../../node_modules/@tanstack/table-core/build/lib/index.d.ts::ColumnFiltersState"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Initial/controlled filter state"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "globalFilter": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Initial/controlled global filter"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "global-filter",
                "defaultValue": "''"
            },
            "selectionMode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "DataGridSelectionMode",
                    "resolved": "\"multiple-checkbox\" | \"multiple-click\" | \"none\" | \"single-click\" | \"single-radio\"",
                    "references": {
                        "DataGridSelectionMode": {
                            "location": "import",
                            "path": "./bh-data-grid.types",
                            "id": "src/components/bh-data-grid/bh-data-grid.types.ts::DataGridSelectionMode"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Selection mode"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "selection-mode",
                "defaultValue": "'none'"
            },
            "selectedRowIds": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Initial/controlled selected row IDs"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "enablePagination": {
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
                    "text": "Enable pagination"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "enable-pagination",
                "defaultValue": "false"
            },
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
                    "text": "Page size"
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
                    "text": "Page size options"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[10, 25, 50, 100]"
            },
            "enableExpansion": {
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
                    "text": "Enable row expansion"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "enable-expansion",
                "defaultValue": "false"
            },
            "expandedRowIds": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Initial/controlled expanded row IDs"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "enableGrouping": {
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
                    "text": "Enable grouping"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "enable-grouping",
                "defaultValue": "false"
            },
            "groupBy": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Column IDs to group by"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "enableEditing": {
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
                    "text": "Enable editing"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "enable-editing",
                "defaultValue": "false"
            },
            "editMode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "DataGridEditMode",
                    "resolved": "\"cell\" | \"none\" | \"row\"",
                    "references": {
                        "DataGridEditMode": {
                            "location": "import",
                            "path": "./bh-data-grid.types",
                            "id": "src/components/bh-data-grid/bh-data-grid.types.ts::DataGridEditMode"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Edit mode"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "edit-mode",
                "defaultValue": "'cell'"
            },
            "showEditActions": {
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
                    "text": "Show edit action buttons"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-edit-actions",
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "tableState": {},
            "editingRowId": {},
            "editingColumnId": {},
            "editingValues": {},
            "validationErrors": {},
            "hoveredRowId": {}
        };
    }
    static get events() {
        return [{
                "method": "bhSortChange",
                "name": "bhSortChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "DataGridSortChangeEvent",
                    "resolved": "DataGridSortChangeEvent",
                    "references": {
                        "DataGridSortChangeEvent": {
                            "location": "import",
                            "path": "./bh-data-grid.types",
                            "id": "src/components/bh-data-grid/bh-data-grid.types.ts::DataGridSortChangeEvent"
                        }
                    }
                }
            }, {
                "method": "bhFilterChange",
                "name": "bhFilterChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "DataGridFilterChangeEvent",
                    "resolved": "DataGridFilterChangeEvent",
                    "references": {
                        "DataGridFilterChangeEvent": {
                            "location": "import",
                            "path": "./bh-data-grid.types",
                            "id": "src/components/bh-data-grid/bh-data-grid.types.ts::DataGridFilterChangeEvent"
                        }
                    }
                }
            }, {
                "method": "bhSelectionChange",
                "name": "bhSelectionChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "DataGridSelectionChangeEvent",
                    "resolved": "DataGridSelectionChangeEvent<unknown>",
                    "references": {
                        "DataGridSelectionChangeEvent": {
                            "location": "import",
                            "path": "./bh-data-grid.types",
                            "id": "src/components/bh-data-grid/bh-data-grid.types.ts::DataGridSelectionChangeEvent"
                        }
                    }
                }
            }, {
                "method": "bhPageChange",
                "name": "bhPageChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "DataGridPageChangeEvent",
                    "resolved": "DataGridPageChangeEvent",
                    "references": {
                        "DataGridPageChangeEvent": {
                            "location": "import",
                            "path": "./bh-data-grid.types",
                            "id": "src/components/bh-data-grid/bh-data-grid.types.ts::DataGridPageChangeEvent"
                        }
                    }
                }
            }, {
                "method": "bhRowClick",
                "name": "bhRowClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "DataGridRowClickEvent",
                    "resolved": "DataGridRowClickEvent<unknown>",
                    "references": {
                        "DataGridRowClickEvent": {
                            "location": "import",
                            "path": "./bh-data-grid.types",
                            "id": "src/components/bh-data-grid/bh-data-grid.types.ts::DataGridRowClickEvent"
                        }
                    }
                }
            }, {
                "method": "bhCellClick",
                "name": "bhCellClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "DataGridCellClickEvent",
                    "resolved": "DataGridCellClickEvent<unknown>",
                    "references": {
                        "DataGridCellClickEvent": {
                            "location": "import",
                            "path": "./bh-data-grid.types",
                            "id": "src/components/bh-data-grid/bh-data-grid.types.ts::DataGridCellClickEvent"
                        }
                    }
                }
            }, {
                "method": "bhExpandChange",
                "name": "bhExpandChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "DataGridExpandChangeEvent",
                    "resolved": "DataGridExpandChangeEvent",
                    "references": {
                        "DataGridExpandChangeEvent": {
                            "location": "import",
                            "path": "./bh-data-grid.types",
                            "id": "src/components/bh-data-grid/bh-data-grid.types.ts::DataGridExpandChangeEvent"
                        }
                    }
                }
            }, {
                "method": "bhGroupToggle",
                "name": "bhGroupToggle",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "DataGridGroupToggleEvent",
                    "resolved": "DataGridGroupToggleEvent",
                    "references": {
                        "DataGridGroupToggleEvent": {
                            "location": "import",
                            "path": "./bh-data-grid.types",
                            "id": "src/components/bh-data-grid/bh-data-grid.types.ts::DataGridGroupToggleEvent"
                        }
                    }
                }
            }, {
                "method": "bhEditStart",
                "name": "bhEditStart",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "DataGridEditStartEvent",
                    "resolved": "DataGridEditStartEvent<unknown>",
                    "references": {
                        "DataGridEditStartEvent": {
                            "location": "import",
                            "path": "./bh-data-grid.types",
                            "id": "src/components/bh-data-grid/bh-data-grid.types.ts::DataGridEditStartEvent"
                        }
                    }
                }
            }, {
                "method": "bhEditCancel",
                "name": "bhEditCancel",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "DataGridEditCancelEvent",
                    "resolved": "DataGridEditCancelEvent<unknown>",
                    "references": {
                        "DataGridEditCancelEvent": {
                            "location": "import",
                            "path": "./bh-data-grid.types",
                            "id": "src/components/bh-data-grid/bh-data-grid.types.ts::DataGridEditCancelEvent"
                        }
                    }
                }
            }, {
                "method": "bhEditSave",
                "name": "bhEditSave",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "DataGridEditSaveEvent",
                    "resolved": "DataGridEditSaveEvent<unknown>",
                    "references": {
                        "DataGridEditSaveEvent": {
                            "location": "import",
                            "path": "./bh-data-grid.types",
                            "id": "src/components/bh-data-grid/bh-data-grid.types.ts::DataGridEditSaveEvent"
                        }
                    }
                }
            }, {
                "method": "bhCellChange",
                "name": "bhCellChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "DataGridCellChangeEvent",
                    "resolved": "DataGridCellChangeEvent",
                    "references": {
                        "DataGridCellChangeEvent": {
                            "location": "import",
                            "path": "./bh-data-grid.types",
                            "id": "src/components/bh-data-grid/bh-data-grid.types.ts::DataGridCellChangeEvent"
                        }
                    }
                }
            }, {
                "method": "bhValidationError",
                "name": "bhValidationError",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "DataGridValidationErrorEvent",
                    "resolved": "DataGridValidationErrorEvent",
                    "references": {
                        "DataGridValidationErrorEvent": {
                            "location": "import",
                            "path": "./bh-data-grid.types",
                            "id": "src/components/bh-data-grid/bh-data-grid.types.ts::DataGridValidationErrorEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "data",
                "methodName": "handleDataChange"
            }, {
                "propName": "columns",
                "methodName": "handleDataChange"
            }, {
                "propName": "sortState",
                "methodName": "handleSortStateChange"
            }, {
                "propName": "filterState",
                "methodName": "handleFilterStateChange"
            }, {
                "propName": "selectedRowIds",
                "methodName": "handleSelectedRowIdsChange"
            }, {
                "propName": "page",
                "methodName": "handlePaginationPropChange"
            }, {
                "propName": "pageSize",
                "methodName": "handlePaginationPropChange"
            }, {
                "propName": "expandedRowIds",
                "methodName": "handleExpandedRowIdsChange"
            }, {
                "propName": "groupBy",
                "methodName": "handleGroupByChange"
            }];
    }
}
//# sourceMappingURL=bh-data-grid.js.map
