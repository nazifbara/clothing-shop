const size = {
  sm: '20rem',
  md: '48rem',
  lg: '62.5rem',
};

const device = {
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
};

const breakpoints = { size, device };

export default breakpoints;
