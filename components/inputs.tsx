type InputProps = {
  type?: string;
  placeholder: string;
  onChange: (e: any) => void;
};

export const InputBox = ({
  type = "text",
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <input
      onChange={onChange}
      className="form-input"
      type={type}
      placeholder={placeholder}
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
