/**
 * Form utilities for form-associated custom elements
 *
 * These utilities help Stencil components participate in native HTML forms
 * using the ElementInternals API (formAssociated: true).
 */
/**
 * Interface for text-based form components (input, textarea)
 */
export interface FormComponent {
    internals: ElementInternals;
    name: string;
    value: string | number | null;
    disabled: boolean;
    required?: boolean;
}
/**
 * Sync a text/number value to the form
 * Call this in handleInput and componentDidLoad
 */
export declare function syncFormValue(component: FormComponent): void;
/**
 * Sync a checkable component's value to the form
 * For checkbox, toggle, radio - value is only submitted when checked
 */
export declare function syncCheckableFormValue(internals: ElementInternals | undefined, name: string, checked: boolean, value?: string): void;
/**
 * Update validity state based on a native input element
 * This delegates to the browser's built-in validation
 */
export declare function updateValidity(internals: ElementInternals | undefined, inputEl: HTMLInputElement | HTMLTextAreaElement | null | undefined, customMessage?: string): void;
/**
 * Set custom validity for components without native inputs
 */
export declare function setCustomValidity(internals: ElementInternals | undefined, isValid: boolean, message?: string): void;
/**
 * Validate required state for checkable components (checkbox, toggle)
 */
export declare function validateRequired(internals: ElementInternals | undefined, required: boolean, checked: boolean, message?: string): void;
