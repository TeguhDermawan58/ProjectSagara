export interface Props{
    text:String;
}

const Headerstxt = (props : Props) =>{
    const {text} = props ;
    return(
      <>
         <h1 
            className="font-bold text-4xl text-red-700">
            {text}
        </h1>
      </>
    )
}

export default Headerstxt;