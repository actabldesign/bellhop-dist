export declare const colors: {
    readonly primary: {
        readonly 50: "#f0f9ff";
        readonly 100: "#e0f2fe";
        readonly 200: "#bae6fd";
        readonly 300: "#7dd3fc";
        readonly 400: "#38bdf8";
        readonly 500: "#0ea5e9";
        readonly 600: "#0284c7";
        readonly 700: "#0369a1";
        readonly 800: "#075985";
        readonly 900: "#0c4a6e";
    };
    readonly secondary: {
        readonly 50: "#f8fafc";
        readonly 100: "#f1f5f9";
        readonly 200: "#e2e8f0";
        readonly 300: "#cbd5e1";
        readonly 400: "#94a3b8";
        readonly 500: "#64748b";
        readonly 600: "#475569";
        readonly 700: "#334155";
        readonly 800: "#1e293b";
        readonly 900: "#0f172a";
    };
    readonly success: {
        readonly 50: "#f0fdf4";
        readonly 100: "#dcfce7";
        readonly 200: "#bbf7d0";
        readonly 300: "#86efac";
        readonly 400: "#4ade80";
        readonly 500: "#22c55e";
        readonly 600: "#16a34a";
        readonly 700: "#15803d";
        readonly 800: "#166534";
        readonly 900: "#14532d";
    };
    readonly warning: {
        readonly 50: "#fffbeb";
        readonly 100: "#fef3c7";
        readonly 200: "#fde68a";
        readonly 300: "#fcd34d";
        readonly 400: "#fbbf24";
        readonly 500: "#f59e0b";
        readonly 600: "#d97706";
        readonly 700: "#b45309";
        readonly 800: "#92400e";
        readonly 900: "#78350f";
    };
    readonly error: {
        readonly 50: "#fef2f2";
        readonly 100: "#fee2e2";
        readonly 200: "#fecaca";
        readonly 300: "#fca5a5";
        readonly 400: "#f87171";
        readonly 500: "#ef4444";
        readonly 600: "#dc2626";
        readonly 700: "#b91c1c";
        readonly 800: "#991b1b";
        readonly 900: "#7f1d1d";
    };
    readonly neutral: {
        readonly 50: "#fafafa";
        readonly 100: "#f4f4f5";
        readonly 200: "#e4e4e7";
        readonly 300: "#d4d4d8";
        readonly 400: "#a1a1aa";
        readonly 500: "#71717a";
        readonly 600: "#52525b";
        readonly 700: "#3f3f46";
        readonly 800: "#27272a";
        readonly 900: "#18181b";
    };
};
export declare const spacing: {
    readonly px: "1px";
    readonly 0: "0";
    readonly 0.5: "0.125rem";
    readonly 1: "0.25rem";
    readonly 1.5: "0.375rem";
    readonly 2: "0.5rem";
    readonly 2.5: "0.625rem";
    readonly 3: "0.75rem";
    readonly 3.5: "0.875rem";
    readonly 4: "1rem";
    readonly 5: "1.25rem";
    readonly 6: "1.5rem";
    readonly 7: "1.75rem";
    readonly 8: "2rem";
    readonly 9: "2.25rem";
    readonly 10: "2.5rem";
    readonly 11: "2.75rem";
    readonly 12: "3rem";
    readonly 14: "3.5rem";
    readonly 16: "4rem";
    readonly 20: "5rem";
    readonly 24: "6rem";
    readonly 28: "7rem";
    readonly 32: "8rem";
};
export declare const typography: {
    readonly fontFamily: {
        readonly sans: readonly ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"];
        readonly mono: readonly ["SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "monospace"];
    };
    readonly fontSize: {
        readonly xs: readonly ["0.75rem", {
            readonly lineHeight: "1rem";
        }];
        readonly sm: readonly ["0.875rem", {
            readonly lineHeight: "1.25rem";
        }];
        readonly base: readonly ["1rem", {
            readonly lineHeight: "1.5rem";
        }];
        readonly lg: readonly ["1.125rem", {
            readonly lineHeight: "1.75rem";
        }];
        readonly xl: readonly ["1.25rem", {
            readonly lineHeight: "1.75rem";
        }];
        readonly '2xl': readonly ["1.5rem", {
            readonly lineHeight: "2rem";
        }];
        readonly '3xl': readonly ["1.875rem", {
            readonly lineHeight: "2.25rem";
        }];
        readonly '4xl': readonly ["2.25rem", {
            readonly lineHeight: "2.5rem";
        }];
        readonly '5xl': readonly ["3rem", {
            readonly lineHeight: "1";
        }];
        readonly '6xl': readonly ["3.75rem", {
            readonly lineHeight: "1";
        }];
    };
    readonly fontWeight: {
        readonly thin: "100";
        readonly extralight: "200";
        readonly light: "300";
        readonly normal: "400";
        readonly medium: "500";
        readonly semibold: "600";
        readonly bold: "700";
        readonly extrabold: "800";
        readonly black: "900";
    };
};
export declare const borderRadius: {
    readonly none: "0";
    readonly sm: "0.125rem";
    readonly base: "0.25rem";
    readonly md: "0.375rem";
    readonly lg: "0.5rem";
    readonly xl: "0.75rem";
    readonly '2xl': "1rem";
    readonly '3xl': "1.5rem";
    readonly full: "9999px";
};
export declare const shadows: {
    readonly sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)";
    readonly base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)";
    readonly md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
    readonly lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
    readonly xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)";
    readonly '2xl': "0 25px 50px -12px rgb(0 0 0 / 0.25)";
    readonly inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)";
    readonly none: "none";
};
export declare const zIndex: {
    readonly auto: "auto";
    readonly 0: "0";
    readonly 10: "10";
    readonly 20: "20";
    readonly 30: "30";
    readonly 40: "40";
    readonly 50: "50";
    readonly dropdown: "1000";
    readonly sticky: "1020";
    readonly fixed: "1030";
    readonly modal: "1040";
    readonly popover: "1050";
    readonly tooltip: "1060";
    readonly toast: "1070";
};
export declare const components: {
    readonly button: {
        readonly height: {
            readonly sm: "2rem";
            readonly md: "2.5rem";
            readonly lg: "3rem";
        };
        readonly padding: {
            readonly sm: "0.5rem 0.75rem";
            readonly md: "0.625rem 1rem";
            readonly lg: "0.75rem 1.5rem";
        };
        readonly borderRadius: "0.375rem";
        readonly fontSize: {
            readonly sm: "0.875rem";
            readonly md: "1rem";
            readonly lg: "1.125rem";
        };
    };
    readonly input: {
        readonly height: {
            readonly sm: "2rem";
            readonly md: "2.5rem";
            readonly lg: "3rem";
        };
        readonly padding: "0.5rem 0.75rem";
        readonly borderRadius: "0.375rem";
        readonly fontSize: "1rem";
        readonly borderWidth: "1px";
    };
};
export declare const tokens: {
    readonly colors: {
        readonly primary: {
            readonly 50: "#f0f9ff";
            readonly 100: "#e0f2fe";
            readonly 200: "#bae6fd";
            readonly 300: "#7dd3fc";
            readonly 400: "#38bdf8";
            readonly 500: "#0ea5e9";
            readonly 600: "#0284c7";
            readonly 700: "#0369a1";
            readonly 800: "#075985";
            readonly 900: "#0c4a6e";
        };
        readonly secondary: {
            readonly 50: "#f8fafc";
            readonly 100: "#f1f5f9";
            readonly 200: "#e2e8f0";
            readonly 300: "#cbd5e1";
            readonly 400: "#94a3b8";
            readonly 500: "#64748b";
            readonly 600: "#475569";
            readonly 700: "#334155";
            readonly 800: "#1e293b";
            readonly 900: "#0f172a";
        };
        readonly success: {
            readonly 50: "#f0fdf4";
            readonly 100: "#dcfce7";
            readonly 200: "#bbf7d0";
            readonly 300: "#86efac";
            readonly 400: "#4ade80";
            readonly 500: "#22c55e";
            readonly 600: "#16a34a";
            readonly 700: "#15803d";
            readonly 800: "#166534";
            readonly 900: "#14532d";
        };
        readonly warning: {
            readonly 50: "#fffbeb";
            readonly 100: "#fef3c7";
            readonly 200: "#fde68a";
            readonly 300: "#fcd34d";
            readonly 400: "#fbbf24";
            readonly 500: "#f59e0b";
            readonly 600: "#d97706";
            readonly 700: "#b45309";
            readonly 800: "#92400e";
            readonly 900: "#78350f";
        };
        readonly error: {
            readonly 50: "#fef2f2";
            readonly 100: "#fee2e2";
            readonly 200: "#fecaca";
            readonly 300: "#fca5a5";
            readonly 400: "#f87171";
            readonly 500: "#ef4444";
            readonly 600: "#dc2626";
            readonly 700: "#b91c1c";
            readonly 800: "#991b1b";
            readonly 900: "#7f1d1d";
        };
        readonly neutral: {
            readonly 50: "#fafafa";
            readonly 100: "#f4f4f5";
            readonly 200: "#e4e4e7";
            readonly 300: "#d4d4d8";
            readonly 400: "#a1a1aa";
            readonly 500: "#71717a";
            readonly 600: "#52525b";
            readonly 700: "#3f3f46";
            readonly 800: "#27272a";
            readonly 900: "#18181b";
        };
    };
    readonly spacing: {
        readonly px: "1px";
        readonly 0: "0";
        readonly 0.5: "0.125rem";
        readonly 1: "0.25rem";
        readonly 1.5: "0.375rem";
        readonly 2: "0.5rem";
        readonly 2.5: "0.625rem";
        readonly 3: "0.75rem";
        readonly 3.5: "0.875rem";
        readonly 4: "1rem";
        readonly 5: "1.25rem";
        readonly 6: "1.5rem";
        readonly 7: "1.75rem";
        readonly 8: "2rem";
        readonly 9: "2.25rem";
        readonly 10: "2.5rem";
        readonly 11: "2.75rem";
        readonly 12: "3rem";
        readonly 14: "3.5rem";
        readonly 16: "4rem";
        readonly 20: "5rem";
        readonly 24: "6rem";
        readonly 28: "7rem";
        readonly 32: "8rem";
    };
    readonly typography: {
        readonly fontFamily: {
            readonly sans: readonly ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"];
            readonly mono: readonly ["SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "monospace"];
        };
        readonly fontSize: {
            readonly xs: readonly ["0.75rem", {
                readonly lineHeight: "1rem";
            }];
            readonly sm: readonly ["0.875rem", {
                readonly lineHeight: "1.25rem";
            }];
            readonly base: readonly ["1rem", {
                readonly lineHeight: "1.5rem";
            }];
            readonly lg: readonly ["1.125rem", {
                readonly lineHeight: "1.75rem";
            }];
            readonly xl: readonly ["1.25rem", {
                readonly lineHeight: "1.75rem";
            }];
            readonly '2xl': readonly ["1.5rem", {
                readonly lineHeight: "2rem";
            }];
            readonly '3xl': readonly ["1.875rem", {
                readonly lineHeight: "2.25rem";
            }];
            readonly '4xl': readonly ["2.25rem", {
                readonly lineHeight: "2.5rem";
            }];
            readonly '5xl': readonly ["3rem", {
                readonly lineHeight: "1";
            }];
            readonly '6xl': readonly ["3.75rem", {
                readonly lineHeight: "1";
            }];
        };
        readonly fontWeight: {
            readonly thin: "100";
            readonly extralight: "200";
            readonly light: "300";
            readonly normal: "400";
            readonly medium: "500";
            readonly semibold: "600";
            readonly bold: "700";
            readonly extrabold: "800";
            readonly black: "900";
        };
    };
    readonly borderRadius: {
        readonly none: "0";
        readonly sm: "0.125rem";
        readonly base: "0.25rem";
        readonly md: "0.375rem";
        readonly lg: "0.5rem";
        readonly xl: "0.75rem";
        readonly '2xl': "1rem";
        readonly '3xl': "1.5rem";
        readonly full: "9999px";
    };
    readonly shadows: {
        readonly sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)";
        readonly base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)";
        readonly md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
        readonly lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
        readonly xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)";
        readonly '2xl': "0 25px 50px -12px rgb(0 0 0 / 0.25)";
        readonly inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)";
        readonly none: "none";
    };
    readonly zIndex: {
        readonly auto: "auto";
        readonly 0: "0";
        readonly 10: "10";
        readonly 20: "20";
        readonly 30: "30";
        readonly 40: "40";
        readonly 50: "50";
        readonly dropdown: "1000";
        readonly sticky: "1020";
        readonly fixed: "1030";
        readonly modal: "1040";
        readonly popover: "1050";
        readonly tooltip: "1060";
        readonly toast: "1070";
    };
    readonly components: {
        readonly button: {
            readonly height: {
                readonly sm: "2rem";
                readonly md: "2.5rem";
                readonly lg: "3rem";
            };
            readonly padding: {
                readonly sm: "0.5rem 0.75rem";
                readonly md: "0.625rem 1rem";
                readonly lg: "0.75rem 1.5rem";
            };
            readonly borderRadius: "0.375rem";
            readonly fontSize: {
                readonly sm: "0.875rem";
                readonly md: "1rem";
                readonly lg: "1.125rem";
            };
        };
        readonly input: {
            readonly height: {
                readonly sm: "2rem";
                readonly md: "2.5rem";
                readonly lg: "3rem";
            };
            readonly padding: "0.5rem 0.75rem";
            readonly borderRadius: "0.375rem";
            readonly fontSize: "1rem";
            readonly borderWidth: "1px";
        };
    };
};
export type BellhopTokens = typeof tokens;
