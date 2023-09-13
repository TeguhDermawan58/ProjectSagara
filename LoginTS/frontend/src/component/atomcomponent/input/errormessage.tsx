import {ErrorMessage } from "formik";

export interface Props{
  name:String;
}

const ErrMsg = (props : Props) => {
    const {name} = props ;
    return(
        <ErrorMessage
        name={name}
        component="div"
        className="text-red-500"
        />
    );
};

export default ErrMsg;