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

  const handlePrev=()=>{
    setCurrentSlide(currentSlide===0 ? images.length-1:currentSlide-1);
  }

  const handleNext=()=>{
    setCurrentSlide(currentSlide===images.length-1 ? 0:currentSlide+1);

  }

  return (
    <ImageContainer>

      <ArrowLeft onClick={handlePrev}/>

      {images && images.length && images.map((imageItem,index) =>( 
      <CurrentImage 
        key={imageItem.id}
        alt={imageItem.download_url} 
        src={imageItem.download_url}
        active={currentSlide===index} />
      ))}

      <ArrowRight onClick={handleNext}/>

      <CircleIndicator>
        {
          images && images.length && images.map((_, index) =>
            <CurrentIndicator 
            key={index}
            active={currentSlide===index}
            onClick={()=>setCurrentSlide(index)} />)
        }
      </CircleIndicator>

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


`;

const CurrentImage = styled.img`
    border-radius: 0.5rem;
    box-shadow: 0px 0px 7px #666;
    width: 100%;
    height: 100%;
    margin-left:10px;
    display:${(prop)=>(prop.active)? 'block' : 'none'};
  //background-color: ${(props) => (props.active ? "#ffc107" : "#e4e5e9")};


`;

const ArrowLeft=styled(BsArrowLeftCircleFill)`
  position:absolute;
  width:2rem;
  height:2rem;
  color:#fff;
  filter:drop-shadow(0px 0px 5px #555);
  left:1rem


`

const ArrowRight=styled(BsArrowRightCircleFill)`
  position:absolute;
  position:absolute;
  width:2rem;
  height:2rem;
  color:#fff;
  filter:drop-shadow(0px 0px 5px #555);
  right:1rem;

`

const CurrentIndicator = styled.button`
  background-color:white;
  height:15px;
  width:15px;
  border-radius:50%;
  border:none;
  margin:0 0.2rem;
  cursor:pointer;
  background-color: ${(props) => (props.active ? "#ffc107" : "#e4e5e9")};


`;

const CircleIndicator = styled.span`
display:flex;
position:absolute;
bottom:1rem;
`;
export default ImageSlider;
