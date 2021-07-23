function Button({ type = 'primary', children, ...other }) {
  return (
    <button className={`btn ${type}`} {...other}>
      {children}
    </button>
  );
}

export default Button;
