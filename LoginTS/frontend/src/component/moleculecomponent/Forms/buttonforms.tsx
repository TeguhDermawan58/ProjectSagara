import Button from "../../atomcomponent/button/button";
export interface Props{
    type:any;
    className:any;
    title:String;
    iconSrc?: string;
}

const ButtonForm = (props : Props) => {
    const {type,className,title,iconSrc} = props ;
    return (
        <>
          <Button 
          type={type} 
          className={className} 
          title={title}
          {iconSrc && <img src={iconSrc} alt={`${title} Icon`} className=" " />} 
          /> 
          
        </>
    );
};

export default ButtonForm;