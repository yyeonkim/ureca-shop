import styles from "@/styles/Dropdown.module.css";

function Dropdown({ label, options, selectedOption, onOptionSelect, isOpen, toggle }) {
  return (
    <>
      {/* overlay */}
      {isOpen && <div className={styles.overlay} onClick={toggle} />}

      <div className={styles.dropdown}>
        <button type="button" aria-expanded={isOpen} onClick={toggle}>
          <p>
            {label} <b>{selectedOption}</b>
          </p>
          <i className="bi bi-chevron-down" />
        </button>
        <ul className={isOpen ? styles.open : ""}>
          {options.map((option, index) => (
            <li key={option} tabIndex={index} onClick={() => onOptionSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Dropdown;
