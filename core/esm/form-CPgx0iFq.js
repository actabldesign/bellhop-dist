/**
 * Form utilities for form-associated custom elements
 *
 * These utilities help Stencil components participate in native HTML forms
 * using the ElementInternals API (formAssociated: true).
 */
/**
 * Sync a text/number value to the form
 * Call this in handleInput and componentDidLoad
 */
function syncFormValue(component) {
    if (!component.internals?.setFormValue || !component.name)
        return;
    const value = component.value;
    if (value === null || value === undefined || value === '') {
        component.internals.setFormValue(null);
    }
    else {
        component.internals.setFormValue(String(value));
    }
}
/**
 * Sync a checkable component's value to the form
 * For checkbox, toggle, radio - value is only submitted when checked
 */
function syncCheckableFormValue(internals, name, checked, value = 'on') {
    if (!internals?.setFormValue || !name)
        return;
    internals.setFormValue(checked ? value : null);
}
/**
 * Update validity state based on a native input element
 * This delegates to the browser's built-in validation
 */
function updateValidity(internals, inputEl, customMessage) {
    if (!internals?.setValidity)
        return;
    if (inputEl) {
        internals.setValidity(inputEl.validity, customMessage || inputEl.validationMessage, inputEl);
    }
}
/**
 * Validate required state for checkable components (checkbox, toggle)
 */
function validateRequired(internals, required, checked, message = 'Please check this box if you want to proceed.') {
    if (!internals?.setValidity)
        return;
    if (required && !checked) {
        internals.setValidity({ valueMissing: true }, message);
    }
    else {
        internals.setValidity({});
    }
}

export { syncCheckableFormValue as a, syncFormValue as s, updateValidity as u, validateRequired as v };
//# sourceMappingURL=form-CPgx0iFq.js.map

//# sourceMappingURL=form-CPgx0iFq.js.map