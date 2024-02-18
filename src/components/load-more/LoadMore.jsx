import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(1);
  const [disableButton, setDisableButton] = useState(false);

  const isInitialRender = useRef(true);

  async function fetchProducts  ()  {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${
        count === 0 ? 0 : (count-1) * 20
      }`);

      const result = await response.json();
      console.log(result);

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };


  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) 
    setDisableButton(true);
  }, [products]);




  if (loading) {
    return <div>Loading Data!!</div>;
  }

  return (
    <Container>
      <ProductContainer>
        {products &&
          products.length ?
          products.map((item,index) => (
            <Product key={item.id}>
              <Image src={item.thumbnail} alt={item.title} />
              <Title>{item.title}</Title>
            </Product>
          )):null}
      </ProductContainer>

      <ButtonContainer>
        <Button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </Button>
        {disableButton ? <Message>You have reached 100 products</Message> : null}
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  //justify-content:center;
  flex-direction: column;
  gap: 20px;
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const Product = styled.div`
  padding: 20px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
  }
`;

const Image = styled.img``;

const Title = styled.p``;

const Message=styled.p``;

const ButtonContainer = styled.div`

`;

const Button=styled.button``;

export default LoadMore;
