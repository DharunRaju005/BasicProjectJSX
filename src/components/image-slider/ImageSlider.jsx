import { useState, useEffect } from "react";
import styled from "styled-components";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const respone = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await respone.json();

      if (data) {
        setImages(data);
        console.log(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>Loading Data!!</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured {errorMsg}</div>;
  }

  console.log(images);

  return (
    <ImageContainer>
      <BsArrowLeftCircleFill />
      {images && images.length && images.map((imageItem,index) =>( 
      <CurrentImage key={imageItem.id}
       alt={imageItem.download_url} 
       src={imageItem.download_url} />
      ))}
      <BsArrowRightCircleFill />
      <CircleIndicator>
        {images && images.length ? images.map((_, index) =>
         <CurrentIndicator key={index} ></CurrentIndicator>) : null}</CircleIndicator>
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 450px;

  img {
    border-radius: 0.5rem;
    box-shadow: 0px 0px 7px #666;
    width: 100%;
    height: 100%;
  }
`;

const CurrentImage = styled.div``;

const CurrentIndicator = styled.button``;

const CircleIndicator = styled.span``;
export default ImageSlider;
