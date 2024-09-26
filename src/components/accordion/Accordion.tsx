import { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import styles from './accordion.module.scss';
import AccordionProps from '../../interfaces/Accordion'

function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionItem}>
      <button className={styles.accordionButton} onClick={toggleAccordion}>
        {question} <RiArrowDropDownLine className={isOpen ? styles.rotateIcon : ''} />
      </button>
      {isOpen && (
        <div className={styles.accordionContent}>
          {answer}
        </div>
      )}
    </div>
  );
}

export default Accordion;
