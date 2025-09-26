import * as React from 'react';
import { ChildItem } from './PageNavigation';
export interface PageNavigationMultiLevelProps {
    label: string;
    icon?: string;
    children: ChildItem[];
    isExpanded?: boolean;
    onItemClick: (childIndex?: number) => void;
    className?: string;
}
export declare const PageNavigationMultiLevel: React.FC<PageNavigationMultiLevelProps>;
//# sourceMappingURL=PageNavigationMultiLevel.d.ts.map