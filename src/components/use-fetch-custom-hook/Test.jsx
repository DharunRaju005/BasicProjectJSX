import styled from "styled-components";
import UseFetch from "./UseFetch";

const Test = () => {
  const { data, error, pending } = UseFetch("https://dummyjson.com/products?limit=100", {});
  console.log(data, error, pending);
  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {pending ? <h2>Please Wait</h2> : null}
      {data && data.products && data.products.length && data.products.map((item) => <p key={item.id}>{item.title}</p>)}
    </div>
  );
};

export default Test;
