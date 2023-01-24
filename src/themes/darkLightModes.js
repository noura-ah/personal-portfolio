import { colors } from '@mui/material'
const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    light: colors.deepPurple[200],
                    main: colors.deepPurple[300],
                },
                secondary: {
                    light: colors.teal[200],
                    main: colors.teal[300],
                },
                lime: {
                    light: colors.lime[200],
                    main: colors.lime[400],
                },
                red: {
                    light: colors.red[200],
                    main: colors.red[800],
                },
                text: {
                    grey: colors.grey[700],
                },
                background: {
                    default: colors.grey[50]
                }

            }
            : {
                primary: {
                    light: colors.deepPurple[200],
                    main: colors.deepPurple[300],
                },
                secondary: {
                    light: colors.teal[200],
                    main: colors.teal[300],
                },
                lime: {
                    light: colors.lime[200],
                    main: colors.lime[400],
                },
                red: {
                    light: colors.red[200],
                    main: colors.red[900],
                },
                background: {
                    default: '#1e1e1e',
                },
                text: {
                    grey: colors.grey[200]
                },
            }),
    },
});

export default getDesignTokens