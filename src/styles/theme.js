const palette = {
  primary: {
    dark: '#b2b2b2',
    main: '#fff',
    contrast: '#000',
  },
  background: {
    main: '#000',
    light: '#111',
    contrast: '#fff',
  },
};

const theme = {
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