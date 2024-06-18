import { createTheme } from "@mui/material";
import { red } from '@mui/material/colors';

const color = red[500];


declare module "@mui/material/styles" {
    interface TypographyVariants {
        lg_p: React.CSSProperties;
        md_p: React.CSSProperties;
        sm_p: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        lg_p: React.CSSProperties;
        md_p: React.CSSProperties;
        sm_p?: React.CSSProperties;
    }

    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        fhd: true;
        uw: true;
    }
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        lg_p: true;
        md_p: true;
        sm_p: true;
    }
}

declare module '@mui/material/styles' {
    interface Theme {
        status: {
                pink: {
                  main: string;
                  light: string;
                  dark: string;
                };
        };
    }
    interface ThemeOptions {
        status?: {
            pink?: {
                main: string;
                light: string;
                dark: string;
              };
        };
    }       
}


export const theme = createTheme({
    typography: {
        fontFamily: "Poppins",
        button: { textTransform: "none" },
        h1: {
            fontSize: "1.5rem",
        },
        h2: {
            fontSize: "1.25rem",
        },
        h3: {
            fontSize: "1rem",
        },
        lg_p: {
            fontSize: "1rem",
        },
        md_p: {
            fontSize: "0.875rem",
        },
        sm_p: {
            fontSize: "0.75rem",
        },
    },
    components: {
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: "#000",
                    fontSize: "0.875rem",
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    color: "#9f9f9f",
                },
            },
        },
        MuiRadio: {
            defaultProps: {
                color: "primary",
            },
        },
    },
    spacing: (factor: number) => `${factor}rem`,
    palette: {
        primary: {
            main: "#8AF93A",
            dark: "#539624",
            contrastText: "#ffffff"


        },
        secondary: {
            dark: "#69279D",
            main: "#7D33D8",
            light: "#9030DD",
            contrastText: "#ffffff"
        },
        error: {
            light: "#F88A8A4D",
            main: "#EB5757",
            dark: "#CB4E4E",
            contrastText: "#ffffff"
        },
        success: {
            light: "#6FCF974D",
            main: "#2ECD70",
            contrastText: "#ffffff"
        },
        warning: {
            light: "#F3DA8B4D",
            main: "#F1C40E",
            dark: "#F2C94C",
            contrastText: "#ffffff"
        },
        info: {
            main: "#2D9CDB",
            light: "#83C8EF4d",
            dark: "#A623AB",
            contrastText: "#83C8EF",

        },
        grey: {
            "100": "#F5F5F5",
            "200": "#D9D9D9",
            "400": "#C6C6C6",
            "500": "#707070",
            "700": "#3A3A3A",
            "900": "#1E1E1E"
        },

        contrastThreshold: 3,
        tonalOffset: 0.2,

    },

    status: {
        pink: {
          main: "#96256C", 
          light: "#DD359E", 
          dark: "#96256C", 
        },
      },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            fhd: 1920,
            uw: 2560,
        },
    },
});