import React from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  React.useEffect(() => {
    const fetchPizza = async () => {
      try {
        const { data } = await axios(`https://641fd25482bea25f6df5717d.mockapi.io/items/${id}`);
        setPizza(data);
      } catch (error) {
        navigate('/');
        console.log(error);
      }
    };

    fetchPizza();
  }, []);

  if (!pizza) {
    return <div className="container"> Loading...</div>;
  }
  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="img" />
      <div className="pizza-block">
        <h4 className="pizza-block__title">{pizza.title}</h4>
        <p className="pizza-block__price">{pizza.price} ₽</p>
      </div>
      <Link className="button button--black" to="/">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default FullPizza;
