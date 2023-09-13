import Input from "../../atomcomponent/input/input";
import ErrMsg from "../../atomcomponent/input/errormessage";

export interface Props {
  type: String;
  id: String;
  placeholder: String;
  name: String;
}

const InputForm = (props: Props) => {
  const {type,id,placeholder,name} = props;
  return (
    <>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
      />
      <ErrMsg 
        name={name}
      />
    </>
  );
};

export default InputForm;
