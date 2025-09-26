import * as React from 'react';
import '../../../../../bellhopos-styles/src/components/breadcrumbs.css';
export interface BreadcrumbItem {
    label: string;
    path?: string;
    isActive?: boolean;
    icon?: string;
}
export interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    separator?: string;
    showHome?: boolean;
    maxVisibleItems?: number;
    onItemClick?: (item: BreadcrumbItem) => void;
    onNavigate?: (path: string) => void;
    className?: string;
}
export declare const Breadcrumbs: React.FC<BreadcrumbsProps>;
//# sourceMappingURL=Breadcrumbs.d.ts.map