import { IButton } from "../types/components";

import "../styles/components/button.css";

const Button = ({ text, ...props }: IButton) => {
  return (
    <button className="button" {...props}>
      {text}
    </button>
  );
};

export default Button;
