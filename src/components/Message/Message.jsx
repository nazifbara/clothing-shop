import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi';

const typeToIconMap = {
  danger: <FiAlertCircle />,
  success: <FiCheckCircle />,
};

function Message({ type, children }) {
  return (
    <div className={`message ${type}`}>
      {typeToIconMap[type]} <span>{children}</span>
    </div>
  );
}

export default Message;
