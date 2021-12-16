const palette = {
  primary: {
    dark: '#b2b2b2',
    main: '#fff',
    contrast: '#000',
  },
  error: {
    dark: '#d32f2f',
    main: '#f44336',
    light: '#e57373',
  },
  background: {
    main: '#000',
    light: '#1e1e1e',
    contrast: '#fff',
  },
};

const theme = {
  table: {
    border: palette.primary.main,
  },
  button: {
    border: palette.primary.main,
    background: palette.primary.main,
    hoverBackground: palette.primary.dark,
    error: palette.error.main,
    errorContrast: palette.primary.main,
    errorHoverBackground: palette.error.dark,
    contrast: palette.background.main,
  },
  productImage: {
    background: '#006466',
  },
  productCard: {
    background: palette.background.light,
  },
  cartBadge: {
    background: palette.primary.main,
    border: palette.background.main,
    contrast: palette.background.main,
  },
  appName: {
    color: palette.primary.main,
  },
  appBar: {
    background: palette.background.main,
  },
  body: {
    background: palette.background.main,
    contrast: palette.background.contrast,
  },
};

export default theme;
