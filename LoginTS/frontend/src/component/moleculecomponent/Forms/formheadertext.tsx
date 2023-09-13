// import Links from "./Linktext";
import Paragraph from "../../atomcomponent/Text/paragraph";
import Headerstxt from "../../atomcomponent/Text/Headerstext";

export interface Props{
    title:String;
    Paragraphtext:String;
    Linkhref:any;
    Linktext:String;
}
const Texts = (props : Props) => {
    const {title,Linkhref,Linktext,Paragraphtext} = props ;
    return(
     <>
      <Headerstxt
       text={title}
      />
      <Paragraph
        text={Paragraphtext}
        href={Linkhref}
        LinkTxt={Linktext}
      />

      {/* <Links
        text={Linktext}
        href={Linkhref}
      />  */}
      
     </>
    );
};

export default Texts;