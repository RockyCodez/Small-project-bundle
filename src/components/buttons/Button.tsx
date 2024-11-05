import { ButtonInterface } from "src/types/components";

import "src/styles/components/button.css";

const Button = ({ text, ...props }: ButtonInterface) => {
  return (
    <button className="button" {...props}>
      {text}
    </button>
  );
};

export default Button;
