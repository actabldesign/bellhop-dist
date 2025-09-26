import * as React from 'react';
import { AutocompleteMenuItem } from '../autocomplete-menu/AutocompleteMenu';
import '../../../../../bellhopos-styles/src/components/input-autocomplete.css';
export type InputAutocompleteState = 'placeholder' | 'filled' | 'hover' | 'focused';
export interface InputAutocompleteProps {
    state?: InputAutocompleteState;
    error?: boolean;
    required?: boolean;
    disabled?: boolean;
    showHelpIcon?: boolean;
    showLeadingIcon?: boolean;
    showLabel?: boolean;
    showHintText?: boolean;
    label?: string;
    placeholder?: string;
    hintText?: string;
    leadingIcon?: string;
    helpIconTooltip?: string;
    value?: string;
    width?: string;
    className?: string;
    options?: AutocompleteMenuItem[];
    maxOptions?: number;
    multiSelect?: boolean;
    minSearchLength?: number;
    selectedItems?: AutocompleteMenuItem[];
    onChange?: (value: string) => void;
    onSelectedItemsChange?: (items: AutocompleteMenuItem[]) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onHelpClick?: () => void;
    onOptionSelect?: (option: AutocompleteMenuItem) => void;
}
export declare const InputAutocomplete: React.FC<InputAutocompleteProps>;
export default InputAutocomplete;
//# sourceMappingURL=InputAutocomplete.d.ts.map