import { h } from "@stencil/core";
// ============================================================================
// Component
// ============================================================================
export class BhDataGrid {
    el;
    // -------------------------------------------------------------------------
    // Props - Data
    // -------------------------------------------------------------------------
    /** Array of data objects to display */
    data = [];
    /** Column definitions */
    columns = [];
    /** Unique identifier property for each row (for selection tracking) */
    rowKey = 'id';
    // -------------------------------------------------------------------------
    // Props - Selection
    // -------------------------------------------------------------------------
    /** Enable row selection */
    enableSelection = false;
    /** Selection mode */
    selectionMode = 'multiple';
    /** Currently selected row keys (controlled) */
    selectedKeys = [];
    // -------------------------------------------------------------------------
    // Props - Sorting
    // -------------------------------------------------------------------------
    /** Enable sorting */
    enableSorting = true;
    /** Allow multi-column sorting */
    multiSort = false;
    /** Current sort state (controlled) */
    sortState = [];
    // -------------------------------------------------------------------------
    // Props - Filtering
    // -------------------------------------------------------------------------
    /** Enable filtering */
    enableFiltering = false;
    /** Show filter row below header */
    showFilterRow = false;
    /** Current filter state (controlled) */
    filterState = [];
    // -------------------------------------------------------------------------
    // Props - Grouping
    // -------------------------------------------------------------------------
    /** Enable row grouping */
    enableGrouping = false;
    /** Columns to group by */
    groupBy = [];
    // -------------------------------------------------------------------------
    // Props - Editing
    // -------------------------------------------------------------------------
    /** Enable editing */
    enableEditing = false;
    /** Edit mode: cell (individual cells), row (entire row), popup (modal form) */
    editMode = 'cell';
    /** Whether to show edit/save/cancel buttons in row actions */
    showEditActions = true;
    // -------------------------------------------------------------------------
    // Props - Display
    // -------------------------------------------------------------------------
    /** Show header row */
    showHeader = true;
    /** Show row borders */
    showRowBorders = true;
    /** Striped rows */
    striped = false;
    /** Compact row height */
    compact = false;
    /** Empty state message */
    emptyMessage = 'No data available';
    /** Loading state */
    loading = false;
    // -------------------------------------------------------------------------
    // State
    // -------------------------------------------------------------------------
    internalSelectedKeys = new Set();
    internalSortState = [];
    internalFilterState = [];
    expandedGroups = [];
    hoveredRowIndex = null;
    filterInputValues = {};
    // Editing state
    editingRowKey = null;
    editingColumnId = null;
    editingValues = {};
    showEditPopup = false;
    // Filter popover state
    activeFilterColumn = null;
    // -------------------------------------------------------------------------
    // Events
    // -------------------------------------------------------------------------
    /** Emitted when row selection changes */
    bhSelectionChange;
    /** Emitted when sort state changes */
    bhSortChange;
    /** Emitted when filter state changes */
    bhFilterChange;
    /** Emitted when a row is clicked */
    bhRowClick;
    /** Emitted when a cell is clicked */
    bhCellClick;
    /** Emitted when group expand/collapse changes */
    bhGroupToggle;
    /** Emitted when editing starts */
    bhEditStart;
    /** Emitted when editing is cancelled */
    bhEditCancel;
    /** Emitted when changes are saved */
    bhEditSave;
    /** Emitted when a cell value changes during editing (before save) */
    bhCellChange;
    // -------------------------------------------------------------------------
    // Watchers
    // -------------------------------------------------------------------------
    handleSelectedKeysChange(newValue) {
        this.internalSelectedKeys = new Set(newValue);
    }
    handleSortStateChange(newValue) {
        this.internalSortState = [...newValue];
    }
    handleFilterStateChange(newValue) {
        this.internalFilterState = [...newValue];
    }
    // -------------------------------------------------------------------------
    // Lifecycle
    // -------------------------------------------------------------------------
    componentWillLoad() {
        this.internalSelectedKeys = new Set(this.selectedKeys);
        this.internalSortState = [...this.sortState];
        this.internalFilterState = [...this.filterState];
    }
    // -------------------------------------------------------------------------
    // Helpers
    // -------------------------------------------------------------------------
    getRowKey(row, index) {
        if (typeof row === 'object' && row !== null && this.rowKey in row) {
            return row[this.rowKey];
        }
        return index;
    }
    getCellValue(row, accessor) {
        if (typeof row !== 'object' || row === null)
            return undefined;
        // Support dot notation for nested properties
        const keys = accessor.split('.');
        let value = row;
        for (const key of keys) {
            if (typeof value === 'object' && value !== null && key in value) {
                value = value[key];
            }
            else {
                return undefined;
            }
        }
        return value;
    }
    getVisibleColumns() {
        return this.columns.filter(col => col.visible !== false);
    }
    // -------------------------------------------------------------------------
    // Data Processing
    // -------------------------------------------------------------------------
    getProcessedData() {
        let processedData = [...this.data];
        // Apply filtering
        if (this.enableFiltering && this.internalFilterState.length > 0) {
            processedData = this.applyFilters(processedData);
        }
        // Apply sorting
        if (this.enableSorting && this.internalSortState.length > 0) {
            processedData = this.applySorting(processedData);
        }
        return processedData;
    }
    applyFilters(data) {
        return data.filter(row => {
            return this.internalFilterState.every(filter => {
                const column = this.columns.find(c => c.id === filter.columnId);
                if (!column)
                    return true;
                const value = this.getCellValue(row, column.accessor);
                return this.matchesFilter(value, filter, column.type);
            });
        });
    }
    matchesFilter(value, filter, type) {
        if (filter.operator === 'isEmpty') {
            return value === null || value === undefined || value === '';
        }
        if (filter.operator === 'isNotEmpty') {
            return value !== null && value !== undefined && value !== '';
        }
        const filterValue = filter.value;
        if (type === 'number') {
            const numValue = Number(value);
            const numFilter = Number(filterValue);
            switch (filter.operator) {
                case 'equals': return numValue === numFilter;
                case 'greaterThan': return numValue > numFilter;
                case 'lessThan': return numValue < numFilter;
                case 'greaterThanOrEqual': return numValue >= numFilter;
                case 'lessThanOrEqual': return numValue <= numFilter;
                case 'between': return numValue >= numFilter && numValue <= Number(filter.valueTo);
                default: return true;
            }
        }
        if (type === 'date') {
            const dateValue = new Date(value).getTime();
            const dateFilter = new Date(filterValue).getTime();
            switch (filter.operator) {
                case 'equals': return dateValue === dateFilter;
                case 'greaterThan': return dateValue > dateFilter;
                case 'lessThan': return dateValue < dateFilter;
                case 'between': {
                    const dateTo = new Date(filter.valueTo).getTime();
                    return dateValue >= dateFilter && dateValue <= dateTo;
                }
                default: return true;
            }
        }
        // Text filtering
        const strValue = String(value ?? '').toLowerCase();
        const strFilter = String(filterValue ?? '').toLowerCase();
        switch (filter.operator) {
            case 'contains': return strValue.includes(strFilter);
            case 'equals': return strValue === strFilter;
            case 'startsWith': return strValue.startsWith(strFilter);
            case 'endsWith': return strValue.endsWith(strFilter);
            default: return true;
        }
    }
    applySorting(data) {
        if (this.internalSortState.length === 0)
            return data;
        return [...data].sort((a, b) => {
            for (const sort of this.internalSortState) {
                const column = this.columns.find(c => c.id === sort.columnId);
                if (!column || !sort.direction)
                    continue;
                const aValue = this.getCellValue(a, column.accessor);
                const bValue = this.getCellValue(b, column.accessor);
                let comparison = 0;
                if (column.type === 'number') {
                    comparison = (Number(aValue) || 0) - (Number(bValue) || 0);
                }
                else if (column.type === 'date') {
                    comparison = new Date(aValue).getTime() - new Date(bValue).getTime();
                }
                else {
                    comparison = String(aValue ?? '').localeCompare(String(bValue ?? ''));
                }
                if (comparison !== 0) {
                    return sort.direction === 'desc' ? -comparison : comparison;
                }
            }
            return 0;
        });
    }
    // -------------------------------------------------------------------------
    // Grouping Logic
    // -------------------------------------------------------------------------
    getGroupedData(data) {
        if (!this.enableGrouping || this.groupBy.length === 0) {
            return [];
        }
        return this.groupByColumn(data, this.groupBy[0], 0);
    }
    groupByColumn(data, columnId, depth) {
        const column = this.columns.find(c => c.id === columnId);
        if (!column)
            return [];
        const groups = new Map();
        for (const row of data) {
            const value = this.getCellValue(row, column.accessor);
            const key = String(value ?? '(Empty)');
            if (!groups.has(key)) {
                groups.set(key, []);
            }
            groups.get(key).push(row);
        }
        const result = [];
        for (const [key, rows] of groups) {
            const groupKey = `${columnId}:${key}`;
            result.push({
                key: groupKey,
                value: key,
                displayValue: key,
                rows,
                depth,
                columnId,
            });
        }
        // Sort groups alphabetically
        result.sort((a, b) => String(a.displayValue).localeCompare(String(b.displayValue)));
        return result;
    }
    handleGroupToggle = (groupKey) => {
        const isCurrentlyExpanded = this.expandedGroups.includes(groupKey);
        if (isCurrentlyExpanded) {
            this.expandedGroups = this.expandedGroups.filter(key => key !== groupKey);
        }
        else {
            this.expandedGroups = [...this.expandedGroups, groupKey];
        }
        this.bhGroupToggle.emit({ groupKey, expanded: !isCurrentlyExpanded });
    };
    // -------------------------------------------------------------------------
    // Selection Handlers
    // -------------------------------------------------------------------------
    handleSelectAll = () => {
        const processedData = this.getProcessedData();
        const allKeys = processedData.map((row, i) => this.getRowKey(row, i));
        const isAllSelected = allKeys.every(key => this.internalSelectedKeys.has(key));
        if (isAllSelected) {
            this.internalSelectedKeys = new Set();
        }
        else {
            this.internalSelectedKeys = new Set(allKeys);
        }
        this.emitSelectionChange();
    };
    handleRowSelect = (row, rowIndex) => {
        const key = this.getRowKey(row, rowIndex);
        if (this.selectionMode === 'single') {
            if (this.internalSelectedKeys.has(key)) {
                this.internalSelectedKeys = new Set();
            }
            else {
                this.internalSelectedKeys = new Set([key]);
            }
        }
        else {
            const newSet = new Set(this.internalSelectedKeys);
            if (newSet.has(key)) {
                newSet.delete(key);
            }
            else {
                newSet.add(key);
            }
            this.internalSelectedKeys = newSet;
        }
        this.emitSelectionChange();
    };
    emitSelectionChange() {
        const selectedKeys = Array.from(this.internalSelectedKeys);
        const selectedRows = this.data.filter((row, i) => this.internalSelectedKeys.has(this.getRowKey(row, i)));
        this.selectedKeys = selectedKeys;
        this.bhSelectionChange.emit({ selectedKeys, selectedRows });
    }
    getSelectionState() {
        const processedData = this.getProcessedData();
        const allKeys = processedData.map((row, i) => this.getRowKey(row, i));
        const selectedCount = allKeys.filter(key => this.internalSelectedKeys.has(key)).length;
        return {
            selectedRows: this.internalSelectedKeys,
            isAllSelected: selectedCount === allKeys.length && allKeys.length > 0,
            isIndeterminate: selectedCount > 0 && selectedCount < allKeys.length,
        };
    }
    // -------------------------------------------------------------------------
    // Sort Handlers
    // -------------------------------------------------------------------------
    handleSort = (column) => {
        if (!this.enableSorting || column.sortable === false)
            return;
        const existingSort = this.internalSortState.find(s => s.columnId === column.id);
        let newDirection = 'asc';
        if (existingSort) {
            if (existingSort.direction === 'asc') {
                newDirection = 'desc';
            }
            else if (existingSort.direction === 'desc') {
                newDirection = null;
            }
        }
        let newSortState;
        if (this.multiSort) {
            newSortState = this.internalSortState.filter(s => s.columnId !== column.id);
            if (newDirection) {
                newSortState.push({ columnId: column.id, direction: newDirection });
            }
        }
        else {
            newSortState = newDirection ? [{ columnId: column.id, direction: newDirection }] : [];
        }
        this.internalSortState = newSortState;
        this.sortState = newSortState;
        this.bhSortChange.emit(newSortState);
    };
    getSortDirection(columnId) {
        const sort = this.internalSortState.find(s => s.columnId === columnId);
        return sort?.direction ?? null;
    }
    // -------------------------------------------------------------------------
    // Filter Handlers
    // -------------------------------------------------------------------------
    handleFilterInput = (column, value) => {
        this.filterInputValues = { ...this.filterInputValues, [column.id]: value };
        // Debounced filter application
        const newFilterState = this.internalFilterState.filter(f => f.columnId !== column.id);
        if (value.trim()) {
            newFilterState.push({
                columnId: column.id,
                operator: column.type === 'number' ? 'equals' : column.type === 'date' ? 'equals' : 'contains',
                value: value.trim(),
            });
        }
        this.internalFilterState = newFilterState;
        this.filterState = newFilterState;
        this.bhFilterChange.emit(newFilterState);
    };
    toggleFilterPopover = (columnId) => {
        if (this.activeFilterColumn === columnId) {
            this.activeFilterColumn = null;
        }
        else {
            this.activeFilterColumn = columnId;
        }
    };
    // -------------------------------------------------------------------------
    // Row/Cell Handlers
    // -------------------------------------------------------------------------
    handleRowClick = (row, rowIndex) => {
        const rowKey = this.getRowKey(row, rowIndex);
        this.bhRowClick.emit({ row, rowIndex, rowKey });
    };
    handleCellClick = (row, column, rowIndex, columnIndex) => {
        const value = this.getCellValue(row, column.accessor);
        this.bhCellClick.emit({ row, column, value, rowIndex, columnIndex });
    };
    // -------------------------------------------------------------------------
    // Render Methods
    // -------------------------------------------------------------------------
    renderHeader() {
        if (!this.showHeader)
            return null;
        const visibleColumns = this.getVisibleColumns();
        const selectionState = this.getSelectionState();
        return (h("div", { class: "data-grid-header-row", role: "row" }, this.enableSelection && (h("div", { class: "data-grid-header-cell data-grid-cell-checkbox", role: "columnheader" }, h("bh-checkbox", { size: "sm", checked: selectionState.isAllSelected, indeterminate: selectionState.isIndeterminate, onBhChange: () => this.handleSelectAll() }))), visibleColumns.map((column) => this.renderHeaderCell(column))));
    }
    renderHeaderCell(column) {
        const sortDirection = this.getSortDirection(column.id);
        const isSortable = this.enableSorting && column.sortable !== false;
        const cellClasses = {
            'data-grid-header-cell': true,
            'data-grid-header-cell-sortable': isSortable,
            'data-grid-header-cell-sorted': sortDirection !== null,
            [`data-grid-cell-align-${column.align || 'left'}`]: true,
        };
        const cellStyle = column.width
            ? { width: typeof column.width === 'number' ? `${column.width}px` : column.width }
            : {};
        return (h("div", { class: cellClasses, style: cellStyle, role: "columnheader", "aria-sort": sortDirection === 'asc' ? 'ascending' : sortDirection === 'desc' ? 'descending' : 'none', onClick: () => isSortable && this.handleSort(column) }, h("span", { class: "data-grid-header-text" }, column.headerRenderer ? column.headerRenderer(column) : column.header), isSortable && sortDirection && (h("span", { class: "data-grid-sort-icon material-symbols-outlined" }, sortDirection === 'asc' ? 'arrow_upward' : 'arrow_downward'))));
    }
    renderFilterRow() {
        if (!this.enableFiltering || !this.showFilterRow)
            return null;
        const visibleColumns = this.getVisibleColumns();
        return (h("div", { class: "data-grid-filter-row", role: "row" }, this.enableSelection && (h("div", { class: "data-grid-filter-cell data-grid-cell-checkbox", role: "cell" })), visibleColumns.map((column) => this.renderFilterCell(column))));
    }
    renderFilterCell(column) {
        if (column.filterable === false) {
            return h("div", { class: "data-grid-filter-cell", role: "cell" });
        }
        const cellStyle = column.width
            ? { width: typeof column.width === 'number' ? `${column.width}px` : column.width }
            : {};
        const inputValue = this.filterInputValues[column.id] || '';
        const hasFilter = inputValue.trim() !== '';
        // For date columns, use date picker
        if (column.type === 'date') {
            return (h("div", { class: "data-grid-filter-cell", style: cellStyle, role: "cell" }, h("div", { class: { 'data-grid-filter-icon-wrapper': true, 'data-grid-filter-active': hasFilter } }, h("bh-date-picker", { variant: "dropdown-ghost", placeholder: "", showLabel: false, showFooter: false, onBhChange: (e) => {
                    const date = e.detail;
                    if (date) {
                        const dateStr = `${date.year}-${String(date.month + 1).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`;
                        this.handleFilterInput(column, dateStr);
                    }
                    else {
                        this.handleFilterInput(column, '');
                    }
                } }))));
        }
        // For text/number columns, use search icon with popover input
        return (h("div", { class: "data-grid-filter-cell", style: cellStyle, role: "cell" }, h("div", { class: { 'data-grid-filter-icon-wrapper': true, 'data-grid-filter-active': hasFilter } }, h("span", { class: "data-grid-filter-icon material-symbols-outlined", onClick: () => this.toggleFilterPopover(column.id) }, "search"), this.activeFilterColumn === column.id && (h("div", { class: "data-grid-filter-popover" }, h("input", { type: column.type === 'number' ? 'number' : 'text', class: "data-grid-filter-popover-input", placeholder: `Filter ${column.header}...`, value: inputValue, onInput: (e) => this.handleFilterInput(column, e.target.value), onKeyDown: (e) => {
                if (e.key === 'Enter' || e.key === 'Escape') {
                    this.activeFilterColumn = null;
                }
            }, ref: (el) => el && requestAnimationFrame(() => el.focus()) }))))));
    }
    renderBody() {
        const processedData = this.getProcessedData();
        const visibleColumns = this.getVisibleColumns();
        if (processedData.length === 0) {
            return this.renderEmptyState();
        }
        // Check if grouping is enabled
        if (this.enableGrouping && this.groupBy.length > 0) {
            const groups = this.getGroupedData(processedData);
            // Use expandedGroups directly in map for proper Stencil reactivity
            const expandedKeys = this.expandedGroups;
            return (h("div", { class: "data-grid-body", role: "rowgroup" }, groups.map((group) => {
                const isExpanded = expandedKeys.includes(group.key);
                return this.renderGroupSectionWithState(group, visibleColumns, isExpanded);
            })));
        }
        return (h("div", { class: "data-grid-body", role: "rowgroup" }, processedData.map((row, rowIndex) => this.renderRow(row, rowIndex, visibleColumns))));
    }
    renderGroupSectionWithState(group, visibleColumns, isExpanded) {
        const column = this.columns.find(c => c.id === group.columnId);
        const columnHeader = column?.header || group.columnId;
        const sectionClasses = {
            'data-grid-group-section': true,
            'data-grid-group-section-expanded': isExpanded,
        };
        return (h("div", { class: sectionClasses, key: group.key }, this.renderGroupRow(group, columnHeader, isExpanded), h("div", { class: "data-grid-group-rows", style: { display: isExpanded ? 'contents' : 'none' } }, group.rows.map((row, rowIndex) => {
            const rowKey = this.getRowKey(row, rowIndex);
            return (h("div", { key: `${group.key}-row-${rowKey}` }, this.renderRow(row, rowIndex, visibleColumns, group.depth + 1)));
        }))));
    }
    renderGroupRow(group, columnHeader, isExpanded) {
        const groupClasses = {
            'data-grid-group-row': true,
            'data-grid-group-row-expanded': isExpanded,
        };
        const indentStyle = group.depth > 0 ? { paddingLeft: `${(group.depth * 24) + 8}px` } : {};
        return (h("div", { class: groupClasses, style: indentStyle, role: "row", "aria-expanded": isExpanded ? 'true' : 'false', onClick: () => this.handleGroupToggle(group.key) }, this.enableSelection && (h("div", { class: "data-grid-cell data-grid-cell-checkbox", role: "cell" }, h("bh-checkbox", { size: "sm", checked: this.isGroupAllSelected(group), indeterminate: this.isGroupIndeterminate(group), onBhChange: (e) => {
                e.stopPropagation();
                this.handleGroupSelect(group);
            }, onClick: (e) => e.stopPropagation() }))), h("div", { class: "data-grid-group-toggle" }, h("span", { class: "material-symbols-outlined" }, "chevron_right")), h("span", { class: "data-grid-group-label" }, h("span", { class: "data-grid-group-column-name" }, columnHeader, ": "), h("span", { class: "data-grid-group-value" }, group.displayValue)), h("span", { class: "data-grid-group-count" }, "(", group.rows.length, " ", group.rows.length === 1 ? 'item' : 'items', ")")));
    }
    isGroupAllSelected(group) {
        if (group.rows.length === 0)
            return false;
        return group.rows.every((row, i) => this.internalSelectedKeys.has(this.getRowKey(row, i)));
    }
    isGroupIndeterminate(group) {
        const selectedCount = group.rows.filter((row, i) => this.internalSelectedKeys.has(this.getRowKey(row, i))).length;
        return selectedCount > 0 && selectedCount < group.rows.length;
    }
    handleGroupSelect = (group) => {
        const groupKeys = group.rows.map((row, i) => this.getRowKey(row, i));
        const isAllSelected = this.isGroupAllSelected(group);
        const newSet = new Set(this.internalSelectedKeys);
        if (isAllSelected) {
            // Deselect all in group
            for (const key of groupKeys) {
                newSet.delete(key);
            }
        }
        else {
            // Select all in group
            for (const key of groupKeys) {
                newSet.add(key);
            }
        }
        this.internalSelectedKeys = newSet;
        this.emitSelectionChange();
    };
    // -------------------------------------------------------------------------
    // Editing Handlers
    // -------------------------------------------------------------------------
    startEditing = (row, rowIndex, columnId) => {
        if (!this.enableEditing)
            return;
        const rowKey = this.getRowKey(row, rowIndex);
        // Initialize editing values from current row
        const initialValues = {};
        for (const col of this.columns) {
            if (col.editable !== false) {
                initialValues[col.id] = this.getCellValue(row, col.accessor);
            }
        }
        this.editingRowKey = rowKey;
        this.editingColumnId = this.editMode === 'cell' ? (columnId || null) : null;
        this.editingValues = initialValues;
        if (this.editMode === 'popup') {
            this.showEditPopup = true;
        }
        this.bhEditStart.emit({ rowKey, row, columnId });
    };
    cancelEditing = () => {
        if (this.editingRowKey === null)
            return;
        const row = this.data.find((r, i) => this.getRowKey(r, i) === this.editingRowKey);
        this.bhEditCancel.emit({ rowKey: this.editingRowKey, row });
        this.editingRowKey = null;
        this.editingColumnId = null;
        this.editingValues = {};
        this.showEditPopup = false;
    };
    saveEditing = () => {
        if (this.editingRowKey === null)
            return;
        const rowIndex = this.data.findIndex((r, i) => this.getRowKey(r, i) === this.editingRowKey);
        if (rowIndex === -1)
            return;
        const originalRow = this.data[rowIndex];
        const changes = {};
        // Determine what changed
        for (const [columnId, newValue] of Object.entries(this.editingValues)) {
            const column = this.columns.find(c => c.id === columnId);
            if (column) {
                const originalValue = this.getCellValue(originalRow, column.accessor);
                if (originalValue !== newValue) {
                    changes[columnId] = newValue;
                }
            }
        }
        this.bhEditSave.emit({
            rowKey: this.editingRowKey,
            rowIndex,
            originalRow,
            changes,
        });
        this.editingRowKey = null;
        this.editingColumnId = null;
        this.editingValues = {};
        this.showEditPopup = false;
    };
    handleEditValueChange = (columnId, newValue) => {
        const oldValue = this.editingValues[columnId];
        this.editingValues = {
            ...this.editingValues,
            [columnId]: newValue,
        };
        if (this.editingRowKey !== null) {
            this.bhCellChange.emit({
                rowKey: this.editingRowKey,
                columnId,
                oldValue,
                newValue,
            });
        }
    };
    isEditing(rowKey, columnId) {
        if (this.editingRowKey !== rowKey)
            return false;
        if (this.editMode === 'cell') {
            return columnId ? this.editingColumnId === columnId : false;
        }
        // Row or popup mode - entire row is in edit mode
        return true;
    }
    handleCellDoubleClick = (row, column, rowIndex) => {
        if (!this.enableEditing || column.editable === false)
            return;
        if (this.editMode === 'cell') {
            this.startEditing(row, rowIndex, column.id);
        }
    };
    handleEditKeyDown = (event, column) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (this.editMode === 'cell') {
                this.saveEditing();
            }
        }
        else if (event.key === 'Escape') {
            event.preventDefault();
            this.cancelEditing();
        }
        else if (event.key === 'Tab' && this.editMode === 'cell') {
            // Move to next editable cell
            event.preventDefault();
            this.moveToNextEditableCell(column, event.shiftKey);
        }
    };
    moveToNextEditableCell = (currentColumn, reverse) => {
        const editableColumns = this.columns.filter(c => c.editable !== false && c.visible !== false);
        const currentIndex = editableColumns.findIndex(c => c.id === currentColumn.id);
        if (currentIndex === -1)
            return;
        const nextIndex = reverse ? currentIndex - 1 : currentIndex + 1;
        if (nextIndex >= 0 && nextIndex < editableColumns.length) {
            // Same row, different column
            this.editingColumnId = editableColumns[nextIndex].id;
        }
        else {
            // Save and potentially move to next/prev row
            this.saveEditing();
        }
    };
    // -------------------------------------------------------------------------
    // Render Methods
    // -------------------------------------------------------------------------
    renderRow(row, rowIndex, visibleColumns, depth = 0) {
        const rowKey = this.getRowKey(row, rowIndex);
        const isSelected = this.internalSelectedKeys.has(rowKey);
        const isHovered = this.hoveredRowIndex === rowIndex;
        const isRowEditing = this.editingRowKey === rowKey;
        const rowClasses = {
            'data-grid-row': true,
            'data-grid-row-selected': isSelected,
            'data-grid-row-hover': isHovered,
            'data-grid-row-striped': this.striped && rowIndex % 2 === 1,
            'data-grid-row-grouped': depth > 0,
            'data-grid-row-editing': isRowEditing,
        };
        return (h("div", { class: rowClasses, role: "row", "aria-selected": isSelected ? 'true' : 'false', onMouseEnter: () => { this.hoveredRowIndex = rowIndex; }, onMouseLeave: () => { this.hoveredRowIndex = null; }, onClick: () => this.handleRowClick(row, rowIndex) }, this.enableSelection && (h("div", { class: "data-grid-cell data-grid-cell-checkbox", role: "cell", onClick: (e) => { e.stopPropagation(); } }, h("bh-checkbox", { size: "sm", checked: isSelected, onBhChange: () => this.handleRowSelect(row, rowIndex), onClick: (e) => e.stopPropagation() }))), depth > 0 && (h("div", { class: "data-grid-row-indent", style: { width: `${depth * 24}px` } })), visibleColumns.map((column, columnIndex) => this.renderCell(row, column, rowIndex, columnIndex)), this.enableEditing && this.showEditActions && this.renderRowActions(row, rowIndex, isRowEditing)));
    }
    renderRowActions(row, rowIndex, isEditing) {
        return (h("div", { class: "data-grid-cell data-grid-cell-actions", role: "cell", onClick: (e) => e.stopPropagation() }, isEditing ? (h("div", { class: "data-grid-edit-actions" }, h("button", { class: "data-grid-action-btn data-grid-action-save", onClick: () => this.saveEditing(), title: "Save" }, h("span", { class: "material-symbols-outlined" }, "check")), h("button", { class: "data-grid-action-btn data-grid-action-cancel", onClick: () => this.cancelEditing(), title: "Cancel" }, h("span", { class: "material-symbols-outlined" }, "close")))) : (h("button", { class: "data-grid-action-btn data-grid-action-edit", onClick: () => this.startEditing(row, rowIndex), title: "Edit" }, h("span", { class: "material-symbols-outlined" }, "edit")))));
    }
    renderCell(row, column, rowIndex, columnIndex) {
        const rowKey = this.getRowKey(row, rowIndex);
        const value = this.getCellValue(row, column.accessor);
        const isEditingCell = this.isEditing(rowKey, column.id);
        const canEdit = this.enableEditing && column.editable !== false;
        const cellClasses = {
            'data-grid-cell': true,
            [`data-grid-cell-align-${column.align || 'left'}`]: true,
            [`data-grid-cell-type-${column.type || 'text'}`]: true,
            'data-grid-cell-editing': isEditingCell,
            'data-grid-cell-editable': canEdit && !isEditingCell,
        };
        const cellStyle = column.width
            ? { width: typeof column.width === 'number' ? `${column.width}px` : column.width }
            : {};
        return (h("div", { class: cellClasses, style: cellStyle, role: "cell", onClick: (e) => {
                e.stopPropagation();
                this.handleCellClick(row, column, rowIndex, columnIndex);
            }, onDblClick: (e) => {
                e.stopPropagation();
                this.handleCellDoubleClick(row, column, rowIndex);
            } }, isEditingCell
            ? this.renderEditInput(column, value)
            : column.cellRenderer
                ? column.cellRenderer(value, row, rowIndex)
                : this.formatCellValue(value, column.type)));
    }
    renderEditInput(column, originalValue) {
        const currentValue = this.editingValues[column.id] ?? originalValue;
        // Custom edit renderer takes precedence
        if (column.editCellRenderer) {
            return column.editCellRenderer(currentValue, {}, // row not needed for most custom renderers
            0, (newValue) => this.handleEditValueChange(column.id, newValue));
        }
        const inputType = column.type === 'number' ? 'number' :
            column.type === 'date' ? 'date' :
                column.type === 'boolean' ? 'checkbox' : 'text';
        if (column.type === 'boolean') {
            return (h("bh-checkbox", { size: "sm", checked: Boolean(currentValue), onBhChange: (e) => this.handleEditValueChange(column.id, e.detail.checked) }));
        }
        return (h("input", { type: inputType, class: "data-grid-edit-input", value: currentValue != null ? String(currentValue) : '', onInput: (e) => {
                const input = e.target;
                const newValue = column.type === 'number' ? Number(input.value) : input.value;
                this.handleEditValueChange(column.id, newValue);
            }, onKeyDown: (e) => this.handleEditKeyDown(e, column), ref: (el) => {
                if (el) {
                    // Auto-focus on the first editable input
                    requestAnimationFrame(() => el.focus());
                }
            } }));
    }
    formatCellValue(value, type) {
        if (value === null || value === undefined)
            return '';
        switch (type) {
            case 'date':
                return new Date(value).toLocaleDateString();
            case 'number':
                return typeof value === 'number' ? value.toLocaleString() : String(value);
            case 'boolean':
                return value ? 'Yes' : 'No';
            default:
                return String(value);
        }
    }
    renderEmptyState() {
        return (h("div", { class: "data-grid-empty-state" }, h("bh-empty-state", { emptyTitle: "No data", description: this.emptyMessage })));
    }
    renderLoading() {
        return (h("div", { class: "data-grid-loading-overlay" }, h("bh-loader-spinner", { size: "lg" })));
    }
    // -------------------------------------------------------------------------
    // Main Render
    // -------------------------------------------------------------------------
    render() {
        const gridClasses = {
            'data-grid': true,
            'data-grid-compact': this.compact,
            'data-grid-bordered': this.showRowBorders,
            'data-grid-loading': this.loading,
        };
        return (h("div", { key: '84558de55b37276d9a68eaa64072dbf738782c36', class: gridClasses, role: "grid", "aria-busy": this.loading ? 'true' : 'false' }, h("div", { key: 'a94fd614b010dec14fb2ecf40c26c7056fd0421c', class: "data-grid-table" }, this.renderHeader(), this.renderFilterRow(), this.renderBody()), this.loading && this.renderLoading()));
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
                    "original": "unknown[]",
                    "resolved": "unknown[]",
                    "references": {}
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
                    "original": "DataGridColumn[]",
                    "resolved": "DataGridColumn<unknown>[]",
                    "references": {
                        "DataGridColumn": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-data-grid/bh-data-grid.tsx",
                            "id": "src/components/bh-data-grid/bh-data-grid.tsx::DataGridColumn"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Column definitions"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "rowKey": {
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
                    "text": "Unique identifier property for each row (for selection tracking)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "row-key",
                "defaultValue": "'id'"
            },
            "enableSelection": {
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
                    "text": "Enable row selection"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "enable-selection",
                "defaultValue": "false"
            },
            "selectionMode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "DataGridSelectionMode",
                    "resolved": "\"multiple\" | \"none\" | \"single\"",
                    "references": {
                        "DataGridSelectionMode": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-data-grid/bh-data-grid.tsx",
                            "id": "src/components/bh-data-grid/bh-data-grid.tsx::DataGridSelectionMode"
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
                "defaultValue": "'multiple'"
            },
            "selectedKeys": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "(string | number)[]",
                    "resolved": "(string | number)[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Currently selected row keys (controlled)"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
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
            "multiSort": {
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
                    "text": "Allow multi-column sorting"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "multi-sort",
                "defaultValue": "false"
            },
            "sortState": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "DataGridSortState[]",
                    "resolved": "DataGridSortState[]",
                    "references": {
                        "DataGridSortState": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-data-grid/bh-data-grid.tsx",
                            "id": "src/components/bh-data-grid/bh-data-grid.tsx::DataGridSortState"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Current sort state (controlled)"
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
                    "text": "Enable filtering"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "enable-filtering",
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
            "filterState": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "DataGridFilterState[]",
                    "resolved": "DataGridFilterState[]",
                    "references": {
                        "DataGridFilterState": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-data-grid/bh-data-grid.tsx",
                            "id": "src/components/bh-data-grid/bh-data-grid.tsx::DataGridFilterState"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Current filter state (controlled)"
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
                    "text": "Enable row grouping"
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
                    "text": "Columns to group by"
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
                    "resolved": "\"cell\" | \"none\" | \"popup\" | \"row\"",
                    "references": {
                        "DataGridEditMode": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-data-grid/bh-data-grid.tsx",
                            "id": "src/components/bh-data-grid/bh-data-grid.tsx::DataGridEditMode"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Edit mode: cell (individual cells), row (entire row), popup (modal form)"
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
                    "text": "Whether to show edit/save/cancel buttons in row actions"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-edit-actions",
                "defaultValue": "true"
            },
            "showHeader": {
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
                    "text": "Show header row"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-header",
                "defaultValue": "true"
            },
            "showRowBorders": {
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
                    "text": "Show row borders"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-row-borders",
                "defaultValue": "true"
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
                    "text": "Striped rows"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "striped",
                "defaultValue": "false"
            },
            "compact": {
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
                    "text": "Compact row height"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "compact",
                "defaultValue": "false"
            },
            "emptyMessage": {
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
                    "text": "Empty state message"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "empty-message",
                "defaultValue": "'No data available'"
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
            }
        };
    }
    static get states() {
        return {
            "internalSelectedKeys": {},
            "internalSortState": {},
            "internalFilterState": {},
            "expandedGroups": {},
            "hoveredRowIndex": {},
            "filterInputValues": {},
            "editingRowKey": {},
            "editingColumnId": {},
            "editingValues": {},
            "showEditPopup": {},
            "activeFilterColumn": {}
        };
    }
    static get events() {
        return [{
                "method": "bhSelectionChange",
                "name": "bhSelectionChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when row selection changes"
                },
                "complexType": {
                    "original": "{ selectedKeys: (string | number)[]; selectedRows: unknown[] }",
                    "resolved": "{ selectedKeys: (string | number)[]; selectedRows: unknown[]; }",
                    "references": {}
                }
            }, {
                "method": "bhSortChange",
                "name": "bhSortChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when sort state changes"
                },
                "complexType": {
                    "original": "DataGridSortState[]",
                    "resolved": "DataGridSortState[]",
                    "references": {
                        "DataGridSortState": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-data-grid/bh-data-grid.tsx",
                            "id": "src/components/bh-data-grid/bh-data-grid.tsx::DataGridSortState"
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
                    "text": "Emitted when filter state changes"
                },
                "complexType": {
                    "original": "DataGridFilterState[]",
                    "resolved": "DataGridFilterState[]",
                    "references": {
                        "DataGridFilterState": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-data-grid/bh-data-grid.tsx",
                            "id": "src/components/bh-data-grid/bh-data-grid.tsx::DataGridFilterState"
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
                    "text": "Emitted when a row is clicked"
                },
                "complexType": {
                    "original": "{ row: unknown; rowIndex: number; rowKey: string | number }",
                    "resolved": "{ row: unknown; rowIndex: number; rowKey: string | number; }",
                    "references": {}
                }
            }, {
                "method": "bhCellClick",
                "name": "bhCellClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when a cell is clicked"
                },
                "complexType": {
                    "original": "{ row: unknown; column: DataGridColumn; value: unknown; rowIndex: number; columnIndex: number }",
                    "resolved": "{ row: unknown; column: DataGridColumn<unknown>; value: unknown; rowIndex: number; columnIndex: number; }",
                    "references": {
                        "DataGridColumn": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-data-grid/bh-data-grid.tsx",
                            "id": "src/components/bh-data-grid/bh-data-grid.tsx::DataGridColumn"
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
                    "text": "Emitted when group expand/collapse changes"
                },
                "complexType": {
                    "original": "{ groupKey: string; expanded: boolean }",
                    "resolved": "{ groupKey: string; expanded: boolean; }",
                    "references": {}
                }
            }, {
                "method": "bhEditStart",
                "name": "bhEditStart",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when editing starts"
                },
                "complexType": {
                    "original": "{ rowKey: string | number; row: unknown; columnId?: string }",
                    "resolved": "{ rowKey: string | number; row: unknown; columnId?: string | undefined; }",
                    "references": {}
                }
            }, {
                "method": "bhEditCancel",
                "name": "bhEditCancel",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when editing is cancelled"
                },
                "complexType": {
                    "original": "{ rowKey: string | number; row: unknown }",
                    "resolved": "{ rowKey: string | number; row: unknown; }",
                    "references": {}
                }
            }, {
                "method": "bhEditSave",
                "name": "bhEditSave",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when changes are saved"
                },
                "complexType": {
                    "original": "DataGridRowChanges",
                    "resolved": "DataGridRowChanges",
                    "references": {
                        "DataGridRowChanges": {
                            "location": "local",
                            "path": "/home/runner/work/bellhopos/bellhopos/packages/bellhop-core/src/components/bh-data-grid/bh-data-grid.tsx",
                            "id": "src/components/bh-data-grid/bh-data-grid.tsx::DataGridRowChanges"
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
                    "text": "Emitted when a cell value changes during editing (before save)"
                },
                "complexType": {
                    "original": "{ rowKey: string | number; columnId: string; oldValue: unknown; newValue: unknown }",
                    "resolved": "{ rowKey: string | number; columnId: string; oldValue: unknown; newValue: unknown; }",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "selectedKeys",
                "methodName": "handleSelectedKeysChange"
            }, {
                "propName": "sortState",
                "methodName": "handleSortStateChange"
            }, {
                "propName": "filterState",
                "methodName": "handleFilterStateChange"
            }];
    }
}
//# sourceMappingURL=bh-data-grid.js.map
