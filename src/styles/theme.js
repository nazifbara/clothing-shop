const palette = {
  primary: {
    main: '#4B4965',
    dark: '#343346',
    contrast: '#fff',
  },
  secondary: {
    main: '#E7AA93',
    dark: '#C3907D',
    contrast: '#000',
  },
  error: {
    dark: '#d32f2f',
    main: '#f44336',
    light: '#e57373',
  },
};

const theme = {
  table: {
    border: '#fff',
  },
  button: {
    border: '#fff',
    background: palette.secondary.main,
    hoverBackground: palette.secondary.dark,
    contrast: palette.secondary.contrast,
    error: palette.error.main,
    errorContrast: '#fff',
    errorHoverBackground: palette.error.dark,
  },
  productImage: {
    background: 'transparent',
  },
  productCard: {
    background: palette.primary.dark,
  },
  cartBadge: {
    background: palette.error.main,
    border: palette.primary.main,
    contrast: '#fff',
  },
  appBar: {
    background: 'transparent',
  },
  body: {
    background: palette.primary.main,
    contrast: palette.primary.contrast,
  },
};

export default theme;
