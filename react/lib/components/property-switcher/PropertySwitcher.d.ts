import * as React from 'react';
import '../../../../../bellhopos-styles/src/components/property-switcher.css';
export interface PropertyOption {
    id: string;
    name: string;
    type: 'portfolio' | 'region' | 'property';
}
export interface PropertySwitcherProps {
    selectedProperty?: string;
    properties?: PropertyOption[];
    onPropertyChange?: (propertyName: string) => void;
    className?: string;
}
export declare const PropertySwitcher: React.FC<PropertySwitcherProps>;
//# sourceMappingURL=PropertySwitcher.d.ts.map