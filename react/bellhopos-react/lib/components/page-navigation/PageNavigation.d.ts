import * as React from 'react';
import '../../../../../bellhopos-styles/src/components/page-navigation.css';
export interface ChildItem {
    label: string;
    badge?: string | number;
    showBadge?: boolean;
    isActive?: boolean;
}
export interface NavigationItem {
    id: string;
    label: string;
    icon?: string;
    type: 'single' | 'expandable';
    isActive?: boolean;
    isExpanded?: boolean;
    badge?: string | number;
    children?: ChildItem[];
}
export interface PageNavigationProps {
    title?: string;
    navigationItems: NavigationItem[];
    onItemClick?: (itemId: string, childIndex?: number) => void;
    className?: string;
}
export declare const PageNavigation: React.FC<PageNavigationProps>;
//# sourceMappingURL=PageNavigation.d.ts.map