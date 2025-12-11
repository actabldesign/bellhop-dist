import { EventEmitter } from '../../stencil-public-runtime';
export type DataGridColumnType = 'text' | 'number' | 'date' | 'boolean' | 'custom';
export type DataGridSortDirection = 'asc' | 'desc' | null;
export type DataGridSelectionMode = 'none' | 'single' | 'multiple';
export type DataGridEditMode = 'none' | 'cell' | 'row' | 'popup';
export type DataGridFilterOperator = 'contains' | 'equals' | 'startsWith' | 'endsWith' | 'greaterThan' | 'lessThan' | 'greaterThanOrEqual' | 'lessThanOrEqual' | 'between' | 'isEmpty' | 'isNotEmpty';
export interface DataGridColumn<T = unknown> {
    /** Unique identifier for the column */
    id: string;
    /** Header text to display */
    header: string;
    /** Property key to access data (supports dot notation: 'user.name') */
    accessor: keyof T | string;
    /** Column data type for filtering and formatting */
    type?: DataGridColumnType;
    /** Column width (px, %, or 'auto') */
    width?: string | number;
    /** Minimum column width */
    minWidth?: number;
    /** Enable sorting for this column */
    sortable?: boolean;
    /** Enable filtering for this column */
    filterable?: boolean;
    /** Enable editing for this column */
    editable?: boolean;
    /** Text alignment */
    align?: 'left' | 'center' | 'right';
    /** Custom cell render function (returns HTML string or VNode) */
    cellRenderer?: (value: unknown, row: T, rowIndex: number) => unknown;
    /** Custom header render function */
    headerRenderer?: (column: DataGridColumn<T>) => unknown;
    /** Custom edit cell render function */
    editCellRenderer?: (value: unknown, row: T, rowIndex: number, onChange: (newValue: unknown) => void) => unknown;
    /** Whether column is visible */
    visible?: boolean;
    /** Pin column to left or right */
    pinned?: 'left' | 'right' | null;
}
export interface DataGridSortState {
    columnId: string;
    direction: DataGridSortDirection;
}
export interface DataGridFilterState {
    columnId: string;
    operator: DataGridFilterOperator;
    value: unknown;
    valueTo?: unknown;
}
export interface DataGridGroupState {
    columnId: string;
    expanded: Set<string>;
}
export interface DataGridRowSelection {
    selectedRows: Set<string | number>;
    isAllSelected: boolean;
    isIndeterminate: boolean;
}
export interface DataGridGroup {
    key: string;
    value: unknown;
    displayValue: string;
    rows: unknown[];
    depth: number;
    columnId: string;
}
export interface DataGridEditState {
    rowKey: string | number;
    columnId: string | null;
    originalValue: unknown;
    currentValue: unknown;
}
export interface DataGridRowChanges {
    rowKey: string | number;
    rowIndex: number;
    originalRow: unknown;
    changes: Record<string, unknown>;
}
export declare class BhDataGrid {
    el: HTMLElement;
    /** Array of data objects to display */
    data: unknown[];
    /** Column definitions */
    columns: DataGridColumn[];
    /** Unique identifier property for each row (for selection tracking) */
    rowKey: string;
    /** Enable row selection */
    enableSelection: boolean;
    /** Selection mode */
    selectionMode: DataGridSelectionMode;
    /** Currently selected row keys (controlled) */
    selectedKeys: (string | number)[];
    /** Enable sorting */
    enableSorting: boolean;
    /** Allow multi-column sorting */
    multiSort: boolean;
    /** Current sort state (controlled) */
    sortState: DataGridSortState[];
    /** Enable filtering */
    enableFiltering: boolean;
    /** Show filter row below header */
    showFilterRow: boolean;
    /** Current filter state (controlled) */
    filterState: DataGridFilterState[];
    /** Enable row grouping */
    enableGrouping: boolean;
    /** Columns to group by */
    groupBy: string[];
    /** Enable editing */
    enableEditing: boolean;
    /** Edit mode: cell (individual cells), row (entire row), popup (modal form) */
    editMode: DataGridEditMode;
    /** Whether to show edit/save/cancel buttons in row actions */
    showEditActions: boolean;
    /** Show header row */
    showHeader: boolean;
    /** Show row borders */
    showRowBorders: boolean;
    /** Striped rows */
    striped: boolean;
    /** Compact row height */
    compact: boolean;
    /** Empty state message */
    emptyMessage: string;
    /** Loading state */
    loading: boolean;
    internalSelectedKeys: Set<string | number>;
    internalSortState: DataGridSortState[];
    internalFilterState: DataGridFilterState[];
    expandedGroups: string[];
    hoveredRowIndex: number | null;
    filterInputValues: Record<string, string>;
    editingRowKey: string | number | null;
    editingColumnId: string | null;
    editingValues: Record<string, unknown>;
    showEditPopup: boolean;
    activeFilterColumn: string | null;
    /** Emitted when row selection changes */
    bhSelectionChange: EventEmitter<{
        selectedKeys: (string | number)[];
        selectedRows: unknown[];
    }>;
    /** Emitted when sort state changes */
    bhSortChange: EventEmitter<DataGridSortState[]>;
    /** Emitted when filter state changes */
    bhFilterChange: EventEmitter<DataGridFilterState[]>;
    /** Emitted when a row is clicked */
    bhRowClick: EventEmitter<{
        row: unknown;
        rowIndex: number;
        rowKey: string | number;
    }>;
    /** Emitted when a cell is clicked */
    bhCellClick: EventEmitter<{
        row: unknown;
        column: DataGridColumn;
        value: unknown;
        rowIndex: number;
        columnIndex: number;
    }>;
    /** Emitted when group expand/collapse changes */
    bhGroupToggle: EventEmitter<{
        groupKey: string;
        expanded: boolean;
    }>;
    /** Emitted when editing starts */
    bhEditStart: EventEmitter<{
        rowKey: string | number;
        row: unknown;
        columnId?: string;
    }>;
    /** Emitted when editing is cancelled */
    bhEditCancel: EventEmitter<{
        rowKey: string | number;
        row: unknown;
    }>;
    /** Emitted when changes are saved */
    bhEditSave: EventEmitter<DataGridRowChanges>;
    /** Emitted when a cell value changes during editing (before save) */
    bhCellChange: EventEmitter<{
        rowKey: string | number;
        columnId: string;
        oldValue: unknown;
        newValue: unknown;
    }>;
    handleSelectedKeysChange(newValue: (string | number)[]): void;
    handleSortStateChange(newValue: DataGridSortState[]): void;
    handleFilterStateChange(newValue: DataGridFilterState[]): void;
    componentWillLoad(): void;
    private getRowKey;
    private getCellValue;
    private getVisibleColumns;
    private getProcessedData;
    private applyFilters;
    private matchesFilter;
    private applySorting;
    private getGroupedData;
    private groupByColumn;
    private handleGroupToggle;
    private handleSelectAll;
    private handleRowSelect;
    private emitSelectionChange;
    private getSelectionState;
    private handleSort;
    private getSortDirection;
    private handleFilterInput;
    private toggleFilterPopover;
    private handleRowClick;
    private handleCellClick;
    private renderHeader;
    private renderHeaderCell;
    private renderFilterRow;
    private renderFilterCell;
    private renderBody;
    private renderGroupSectionWithState;
    private renderGroupRow;
    private isGroupAllSelected;
    private isGroupIndeterminate;
    private handleGroupSelect;
    private startEditing;
    private cancelEditing;
    private saveEditing;
    private handleEditValueChange;
    private isEditing;
    private handleCellDoubleClick;
    private handleEditKeyDown;
    private moveToNextEditableCell;
    private renderRow;
    private renderRowActions;
    private renderCell;
    private renderEditInput;
    private formatCellValue;
    private renderEmptyState;
    private renderLoading;
    render(): any;
}
