type InputProps = {
  name?: string;
  type?: string;
  placeholder: string;
  onChange: (e: any) => void;
  className?: string;
  readonly?: boolean;
  required?: boolean;
};

export const InputBox = ({
  type = "text",
  name,
  placeholder,
  onChange,
  className,
  readonly,
  required,
}: InputProps) => {
  return (
    <input
      onChange={onChange}
      className={`form-input ${className}`}
      type={type}
      name={name}
      placeholder={placeholder}
      readOnly={readonly}
      required={required}
    />
  );
};

type SelectProps = {
  onChange: (e: any) => void;
};

export const SelectBox = ({ onChange }: SelectProps) => {
  return (
    <select defaultValue="male" onChange={onChange} className="form-input">
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  );
};

type CheckBoxProps = {
  onChange: (e: any) => void;
  className?: String;
};

export const CheckBox = ({ onChange }: CheckBoxProps) => {
  return (
    <input
      onChange={onChange}
      type="checkbox"
      className="border-primaryLight text-primaryLight focus:ring-primaryLight"
    />
  );
};

type RoundedCheckBoxProps = {
  onChange?: (e: any) => void;
  value?: string;
};

export const RoundedCheckBox = (props: RoundedCheckBoxProps) => {
  return (
    <input
      type="checkbox"
      className="border-primaryLight border-2 p-2 cursor-pointer text-primaryLight focus:ring-primaryLight rounded-full"
      onChange={props.onChange}
      value={props.value}
    />
  );
};
