export type LoaderSize = 'sm' | 'md' | 'lg' | 'xl';
export type LoaderVariant = 'default' | 'white';
export declare class BhLoaderSpinner {
    /** Loader size */
    size: LoaderSize;
    /** Loader color variant - use 'white' for dark surfaces like buttons */
    variant: LoaderVariant;
    /** Whether to show as overlay */
    overlay: boolean;
    /** Message to show in overlay mode */
    overlayMessage: string;
    /** Whether to show message */
    showMessage: boolean;
    /** Message text */
    message: string;
    private renderSpinner;
    private renderMessage;
    render(): any;
}
