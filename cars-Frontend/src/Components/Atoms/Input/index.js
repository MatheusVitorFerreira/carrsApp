import { FormControl, Label, InputField } from "./styles";

function Input({ type, text, name, placeholder, handleOnChange, value, ...rest }) {
  return (
    <FormControl>
      {text && <Label htmlFor={name}>{text}</Label>}
      <InputField
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        {...rest}
      />
    </FormControl>
  );
}

export default Input;