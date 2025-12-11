export type IllustrationSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export declare class BhIllustrations {
    /**
     * Size of the illustration
     */
    size: IllustrationSize;
    /**
     * Title text to display below the illustration
     */
    illustrationTitle?: string;
    /**
     * Description text to display below the title
     */
    description?: string;
    /**
     * Path to the SVG illustration
     */
    svgPath: string;
    /**
     * Alt text for the illustration image
     */
    alt: string;
    private getSvgDimensions;
    render(): any;
}
