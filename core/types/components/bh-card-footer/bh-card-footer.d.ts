export type CardFooterAlignment = 'left' | 'right' | 'space-between';
export declare class BhCardFooter {
    /**
     * Whether to show the divider above the footer
     */
    showDivider: boolean;
    /**
     * Alignment of the footer content
     */
    alignment: CardFooterAlignment;
    render(): any;
}
