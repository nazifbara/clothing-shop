function Message({ type, children }) {
  return <span className={`message ${type}`}>{children}</span>;
}

export default Message;
