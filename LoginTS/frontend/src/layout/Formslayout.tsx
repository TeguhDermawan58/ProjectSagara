import Links from "../component/atomcomponent/Text/Links";
import sagaralogo from "../assets/images/sagara-logo.png"
import photosagara from "../assets/images/Rectangle 64.svg"
const AuthLayout = (props: { children: any; }) => {
 const {children} = props;
    return(
     <div>
       <div className="flex flex-col lg:flex-row md:flex-row p-0 m-0 h-screen w-full">
        <div className="flex flex-col justify-between lg:w-2/4 md:w-2/4 h-screen lg:h-screen">
          {/* logo */}
          <header className="flex justify-between p-2.5 items-center">
            <img
              src={sagaralogo}
              alt="Logo"
              className="w-18 h-12"
            />
            <Links 
              href="/" 
              text="Learn More"            
            />
          </header>
            {/* akhir logo */}
            {/* form */}
            {children}
            {/* akhir form */}
            <div className="w-3/5 flex p-3">
              <footer className=" items-center">
              < a href ="" 
              className='text-blue-700 hover:text-blue-900 '>
              English (United KIngdom) 
              </a>
              </footer>
            </div>
        </div>
        {/* image */}
        <div className='w-2/4 h-screen hidden md:flex'>
              <img 
                src={photosagara}
                alt='image'
                className='lg:h-full lg:w-screen object-cover '
                />
        </div>
        {/* ... */}
      </div>
     </div>
    );
};

export default AuthLayout;