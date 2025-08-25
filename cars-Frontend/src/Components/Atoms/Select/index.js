import { FormControl, Label, SelectContainer } from './styles';

function Select({ text, name, handleOnChange, value, options }) {
  return (
    <FormControl>
      <Label htmlFor={name}>{text}</Label>
      <SelectContainer name={name} id={name} value={value || ""} onChange={handleOnChange}>
        <option value="">Selecione uma opção</option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </SelectContainer>
    </FormControl>
  );
}

export default Select;
