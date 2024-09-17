import { useState } from 'react';
import PropTypes from 'prop-types'; // Si usas JavaScript, asegúrate de instalar prop-types
import styles from './Dropdown.module.css';
import { RiArrowDropDownLine } from "react-icons/ri";

function Dropdown({ initialState, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(initialState);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown} onClick={toggleDropdown} role="button" aria-haspopup="true" aria-expanded={isOpen}>
        
      <button className={styles.dropdownButton} aria-haspopup="true">
        {selectedItem}
        <RiArrowDropDownLine />      
      </button>

      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleItemClick(option)} role="option">
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  initialState: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Dropdown.defaultProps = {
  initialState: 'Select an option',
};

export default Dropdown;
