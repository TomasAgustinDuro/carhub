import { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import styles from './Dropdown.module.css';

interface DropdownProps {
  initialState: string;
  options: string[];
}

function Dropdown({ initialState, options }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(initialState);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button
        className={styles.dropdownButton}
        onClick={toggleDropdown}
      >
        {selectedItem} <RiArrowDropDownLine />
      </button>

      {isOpen && (
        <ul
          className={styles.dropdownMenu}
          style={{
            position: selectedItem === 'Nosotros' ? 'absolute' : 'relative', 
            top: selectedItem === 'Nosotros' ? '100%' : 'auto',
            zIndex: selectedItem === 'Nosotros' ? 1000 : 'auto'  // Asegura que el dropdown se superponga correctamente
          }} 
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
