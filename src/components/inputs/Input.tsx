import { useFormContext } from "react-hook-form";

import { InputInterface } from "src/types/components";

import "src/styles/components/input.css";

const Input = ({ label, helperText, name, ...props }: InputInterface) => {
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
