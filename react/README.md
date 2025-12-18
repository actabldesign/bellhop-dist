# @actabldesign/bellhop-react

React component library for the Bellhop design system. Provides React wrappers for Stencil web components and native React table primitives with TanStack Table integration.

## Installation

```bash
npm install @actabldesign/bellhop-react
```

### Peer Dependencies

```bash
npm install react react-dom
```

For table components with TanStack Table features:

```bash
npm install @tanstack/react-table
```

## Usage

### Stencil Component Wrappers

All Bellhop web components are available as React components with full TypeScript support and proper event handling.

```tsx
import { BhButton, BhInputText, BhCard } from '@actabldesign/bellhop-react';

function MyComponent() {
  return (
    <BhCard>
      <BhInputText
        label="Email"
        placeholder="Enter your email"
        onBhInput={(e) => console.log(e.detail)}
      />
      <BhButton hierarchy="primary" onBhClick={() => console.log('Clicked!')}>
        Submit
      </BhButton>
    </BhCard>
  );
}
```

### Available Stencil Components

- **Layout**: `BhCard`, `BhContainer`, `BhModal`, `BhSidebar`, `BhAppbar`
- **Forms**: `BhInputText`, `BhInputPassword`, `BhInputNumber`, `BhTextarea`, `BhCheckbox`, `BhRadioButton`, `BhToggle`, `BhDropdown`
- **Buttons**: `BhButton`, `BhButtonIcon`
- **Data Display**: `BhDataGrid`, `BhBadge`, `BhTag`, `BhAvatar`, `BhTooltip`
- **Navigation**: `BhTabs`, `BhBreadcrumbs`, `BhPagination`, `BhPageNavigation`
- **Feedback**: `BhNotification`, `BhLoaderSpinner`, `BhEmptyState`, `BhSkeletonLoader`
- **Date/Time**: `BhDatePicker`, `BhDateRangePicker`, `BhMonthPicker`
- **Charts**: `BhBarChart`, `BhPieChart`, `BhTrendChart`

## Table Components

### Table Primitives

Composable table components for building static and dynamic tables.

```tsx
import {
  Table,
  TableWrapper,
  TableHead,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
  TablePagination,
} from '@actabldesign/bellhop-react';

function BasicTable() {
  return (
    <TableWrapper>
      <Table size="default" variant="default" hoverable>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell align="right">Actions</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
```

#### Table Primitive Components

| Component | Description |
|-----------|-------------|
| `Table` | Main table element with size, variant, and styling options |
| `TableWrapper` | Scrollable container for tables |
| `TableCaption` | Accessible table caption |
| `TableHead` | Table header section (`<thead>`) |
| `TableBody` | Table body section (`<tbody>`) |
| `TableFooter` | Table footer section (`<tfoot>`) |
| `TableRow` | Table row with selection and expansion states |
| `TableHeaderCell` | Header cell with sorting support |
| `TableCell` | Data cell with alignment and truncation options |
| `TableEmpty` | Empty state display for tables |
| `TableActionBar` | Toolbar for bulk actions and filters |
| `TablePagination` | Pagination controls |

### DataTable (TanStack Table Integration)

A feature-rich data table component with built-in sorting, filtering, pagination, selection, expansion, grouping, and inline editing.

```tsx
import { DataTable, ColumnDef } from '@actabldesign/bellhop-react';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

const columns: ColumnDef<User>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'role', header: 'Role' },
];

function UsersTable({ users }: { users: User[] }) {
  return (
    <DataTable
      data={users}
      columns={columns}
      enableSorting
      enablePagination
      enableRowSelection
      pageSize={10}
      onSelectionChange={(selected) => console.log(selected)}
    />
  );
}
```

#### DataTable Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `TData[]` | required | Table data array |
| `columns` | `ColumnDef<TData>[]` | required | Column definitions |
| `size` | `'compact' \| 'default' \| 'relaxed'` | `'default'` | Row height |
| `variant` | `'default' \| 'bordered' \| 'striped'` | `'default'` | Visual style |
| `enableSorting` | `boolean` | `true` | Enable column sorting |
| `enableFiltering` | `boolean` | `false` | Enable column filters |
| `enablePagination` | `boolean` | `true` | Enable pagination |
| `enableRowSelection` | `boolean` | `false` | Enable row selection |
| `enableExpanding` | `boolean` | `false` | Enable row expansion |
| `enableGrouping` | `boolean` | `false` | Enable row grouping |
| `enableEditing` | `boolean` | `false` | Enable inline editing |
| `editMode` | `'cell' \| 'row'` | `'cell'` | Editing mode |
| `pageSize` | `number` | `10` | Initial page size |
| `stickyHeader` | `boolean` | `false` | Sticky table header |
| `hoverable` | `boolean` | `true` | Row hover effect |
| `loading` | `boolean` | `false` | Loading state |
| `getRowId` | `(row, index) => string` | - | Custom row ID accessor |
| `onSelectionChange` | `(rows) => void` | - | Selection change callback |
| `onSortingChange` | `(sorting) => void` | - | Sort change callback |
| `onRowClick` | `(row) => void` | - | Row click callback |
| `onEditSave` | `(changes) => void` | - | Edit save callback |

#### Column Helpers

```tsx
import {
  createSelectColumn,
  createExpandColumn,
  createEditActionsColumn,
} from '@actabldesign/bellhop-react';

// Add selection checkbox column
const selectColumn = createSelectColumn<User>();

// Add expand/collapse column
const expandColumn = createExpandColumn<User>();
```

### useDataTable Hook

For more control over the table instance:

```tsx
import { useDataTable } from '@actabldesign/bellhop-react';

function CustomTable({ data, columns }) {
  const table = useDataTable({
    data,
    columns,
    enableSorting: true,
    enablePagination: true,
    pageSize: 25,
  });

  // Access table state and methods
  const { getRowModel, getHeaderGroups } = table;

  // Build custom UI with table instance
}
```

## Type Exports

```tsx
import type {
  // Button types
  ButtonHierarchy,
  ButtonIconPosition,
  ButtonSize,
  // Table types
  TableProps,
  TableSize,
  TableVariant,
  CellAlign,
  // DataTable types
  DataTableProps,
  ColumnDef,
  SortingState,
  ColumnFiltersState,
  RowSelectionState,
  EditMode,
  EditState,
  RowChanges,
} from '@actabldesign/bellhop-react';
```

## Styling

Components use CSS classes from `@actabldesign/bellhop-styles`. Import the styles in your application:

```tsx
import '@actabldesign/bellhop-styles/dist/bellhop.css';
```

## Related Packages

- `@actabldesign/bellhop-core` - Web Components (StencilJS)
- `@actabldesign/bellhop-styles` - CSS styles and design tokens
- `@actabldesign/bellhop-assets` - SVG icons, illustrations, logos

## License

MIT
