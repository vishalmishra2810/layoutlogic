import { useRef, useState } from "react";
import useClickOutSide from "../../../utils/hooks/useClickoutSide";
import styles from "./CustomSelect.module.scss";

function CustomSelect({
  options,
  selectedOption,
  onOptionSelected,
  defaultValue,
  name,
}: any) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleOptionClick = (option: any) => {
    onOptionSelected(option);
    setIsOpen(false);
  };

  useClickOutSide(ref, () => setIsOpen(false));

  return (
    <div className={styles["custom-select-wrapper"]} ref={ref}>
      <div
        className={`${styles["custom-select"]} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles["selected-option"]}>
          {selectedOption
            ? selectedOption.name
            : defaultValue || "Select Language"}
        </div>
        <div className={styles.arrow}>
          <span className={`${isOpen ? styles.up : styles.down}`} />
        </div>
      </div>
      {isOpen && (
        <ul className={styles.options}>
          {options?.map((option: any) => (
            <li
              key={option.value}
              className={`${styles.option} ${
                option === selectedOption ? styles.selected : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomSelect;
