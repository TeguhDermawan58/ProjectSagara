import { Link } from "react-router-dom"; 

export interface Props{
  href:any;
  text:String;
}

const Links = (props : Props) => {
    const {href,text} = props;
    return(
     <>
       <Link
        to={href}
        className='text-blue-600'>
        {text}
       </Link>
     </>
    )
}

export default Links;