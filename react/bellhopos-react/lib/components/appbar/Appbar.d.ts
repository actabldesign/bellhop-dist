import React from 'react';
import '../../../../../bellhopos-styles/src/components/appbar.css';
import { PropertyOption } from '../property-switcher/PropertySwitcher';
import { BreadcrumbItem } from '../breadcrumbs/Breadcrumbs';
export interface AppbarProps {
    isMenuOpen?: boolean;
    onMenuToggle?: () => void;
    selectedProperty?: string;
    properties?: PropertyOption[];
    onPropertyChange?: (propertyName: string) => void;
    breadcrumbItems?: BreadcrumbItem[];
    onBreadcrumbClick?: (item: BreadcrumbItem) => void;
    notificationCount?: number;
    onNotificationClick?: () => void;
    onCalendarClick?: () => void;
    onSettingsClick?: () => void;
    logoSrc?: string;
    logoAlt?: string;
    className?: string;
}
export declare const Appbar: React.FC<AppbarProps>;
export default Appbar;
//# sourceMappingURL=Appbar.d.ts.map