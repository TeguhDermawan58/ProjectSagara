import Links from "./Links";
export interface Props{
 text:String;
 href:any;
 LinkTxt:String;

}


const Paragraph = (props : Props) => {
    const {text,href,LinkTxt} = props;
    return(
     <>
       <p 
         className="text-gray-500 text-sm top-52">
         {text}
         <Links 
           href={href} 
           text={LinkTxt}
         />
       </p>
     </>
    );
};

export default Paragraph;