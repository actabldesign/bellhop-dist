import * as React from 'react';
import '../../../../../bellhopos-styles/src/components/textarea.css';
export type TextareaType = 'default' | 'tags';
export type TextareaState = 'default' | 'focused' | 'hover' | 'placeholder' | 'disabled';
export interface TagData {
    id: string;
    label: string;
}
export interface TextareaProps {
    type?: TextareaType;
    state?: TextareaState;
    label?: string;
    placeholder?: string;
    hintText?: string;
    showLabel?: boolean;
    showHintText?: boolean;
    showHelpIcon?: boolean;
    error?: boolean;
    disabled?: boolean;
    required?: boolean;
    helpIconTooltip?: string;
    value?: string;
    rows?: number;
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
    maxLength?: number;
    width?: string;
    className?: string;
    tags?: TagData[];
    allowTagCreation?: boolean;
    availableTags?: TagData[];
    enableAutocomplete?: boolean;
    onChange?: (value: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onHelpClick?: () => void;
    onTagsChange?: (tags: TagData[]) => void;
    onTagCreated?: (tag: TagData) => void;
    onTagRemoved?: (tag: TagData) => void;
}
export declare const Textarea: React.FC<TextareaProps>;
//# sourceMappingURL=Textarea.d.ts.map