import { DropdownInterface } from "src/types/components";

import "src/styles/components/dropdown.css";

const options = [
  { name: "End of list", value: 0 },
  {
    name: "Start of list",
    value: 1,
  },
];

const Dropdown = ({
  label,
  selectedOption = options[0].value,
  setSelectedOption,
}: DropdownInterface) => {
  return (
    <div>
      <p className="dropdown-label">{label}</p>
      <select
        className="dropdown-main"
        value={selectedOption}
        onChange={(e) => setSelectedOption(parseInt(e.target.value))}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
