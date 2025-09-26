import React from 'react';
export interface PageNavigationChildProps {
    label: string;
    badge?: string | number;
    showBadge?: boolean;
    isActive?: boolean;
    onItemClick: () => void;
    className?: string;
}
export declare const PageNavigationChild: React.FC<PageNavigationChildProps>;
//# sourceMappingURL=PageNavigationChild.d.ts.map