export declare class BhCard {
    el: HTMLElement;
    /**
     * Whether to show the header section
     */
    showHeader: boolean;
    /**
     * Whether to show the footer section
     */
    showFooter: boolean;
    /**
     * Minimum height of the content area in pixels
     */
    contentMinHeight: number;
    /**
     * Placeholder text shown when no content is provided
     */
    placeholderText: string;
    hasContent: boolean;
    componentWillLoad(): void;
    private checkForContent;
    render(): any;
}
