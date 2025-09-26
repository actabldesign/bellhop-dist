import * as React from 'react';
import '../../../../../bellhopos-styles/src/components/autocomplete-menu.css';
import '../../../../../bellhopos-styles/src/tokens/bellhop-animations.css';
export interface AutocompleteMenuItem {
    id: string;
    label: string;
    disabled?: boolean;
    selected?: boolean;
}
export interface AutocompleteMenuProps {
    menuItems?: AutocompleteMenuItem[];
    visible?: boolean;
    selectedIndex?: number;
    maxHeight?: number;
    multiSelect?: boolean;
    searchQuery?: string;
    onItemClick?: (item: AutocompleteMenuItem) => void;
    onItemHover?: (index: number) => void;
}
export declare const AutocompleteMenu: React.FC<AutocompleteMenuProps>;
//# sourceMappingURL=AutocompleteMenu.d.ts.map