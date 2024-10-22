import { useFormContext } from "react-hook-form";

import "../../styles/components/input.css";
import { IInput } from "../../types/components";

const Input = ({ label, helperText, name, ...props }: IInput) => {
  const { register } = useFormContext();
  return (
    <div>
      <p className="input-label">{label}</p>
      <input className="input" {...register(name)} {...props} />
      {helperText && <p className="form-error">{helperText}</p>}
    </div>
  );
};

export default Input;
