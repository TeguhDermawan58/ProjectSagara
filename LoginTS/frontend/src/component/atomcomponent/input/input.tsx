import { Field} from "formik";

export interface Props{
  type:String;
  id:String;
  placeholder:String;
  name:String;
  
}

const Input = (props : Props) => {
  const {type,id,placeholder,name} = props;
  return (
    <>
      <Field
        type={type} 
        id={id}
        placeholder={placeholder}
        name={name}
        className="border-b-2 rounded-md p-2"
      />
    </>
  );
};

export default Input;