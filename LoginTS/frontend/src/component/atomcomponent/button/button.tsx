
export interface Props {
type:any;
className:any;
title:String;
iconSrc?: string; 
}

const Button = (props : Props) =>{
    const {type,className,title,iconSrc} = props ;
    return(
      <>
       <button
            type={type}
            className={className}
            >
            {iconSrc && <img src={iconSrc} alt={`${title} Icon`} className=" flex flex-col" />}     
            {title}
       </button>
      </>
    );
};

export default Button;