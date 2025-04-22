import styles from "@/styles/Dropdown.module.css";

function Dropdown({ label, options, selectedOption, onOptionSelect, isOpen, toggle, className }) {
  return (
    <>
      {/* overlay */}
      {isOpen && <div className={styles.overlay} onClick={toggle} />}

      <div className={`${className} ${styles.dropdown}`}>
        <button type="button" aria-expanded={isOpen} onClick={toggle}>
          <p>
            {label} <span>{selectedOption}</span>
          </p>
          <i className="bi bi-chevron-down" />
        </button>
        <ul className={isOpen ? styles.open : ""}>
          {options.map((option, index) => (
            <li tabindex={index} onClick={() => onOptionSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Dropdown;
