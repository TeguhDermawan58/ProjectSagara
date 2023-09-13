
import { useNavigate } from 'react-router-dom';
import { checkToken } from '../../helpers/Api';
import { useEffect } from 'react';

function Product() {
  let navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token == null) {
      navigate('/');
    } else {
      // Token check
      checkToken(token)
        .then((data) => {
          console.log(token);
          if (!data) {
            navigate('/');
          }
        })
        .catch((err) => console.log(err));
    }
  }, []);

  // Rest of your Product component code
}

export default Product;
