import { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

function Accordion({ children, heading, open = false }) {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div className="accordion">
      <button className="accordion__button" onClick={() => setIsOpen(!isOpen)}>
        {heading} {isOpen ? <FiMinus /> : <FiPlus />}
      </button>
      {isOpen ? <div className="accordion__panel">{children}</div> : null}
    </div>
  );
}

export default Accordion;
