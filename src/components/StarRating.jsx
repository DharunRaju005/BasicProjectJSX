import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    console.log(getCurrentIndex);
    setRating(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex) => {
    console.log(getCurrentIndex);
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <Star>
      {[...Array(noOfStars)].map((_, index) => {
        // usually maps use callback function with 2 arguments one is the current element and the other is the current index xince the the current element is not used inside the fn it is denoted as _ by convention.
        index += 1;
        return <StarIcon key={index} active={index <= (hover || rating)} onClick={() => handleClick(index)} onMouseMove={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave} />;
      })}
    </Star>
  );
};

const Star = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StarIcon = styled(FaStar)`
  font-size: 40px;
  cursor: pointer;
  color: ${(props) => (props.active ? "#ffc107" : "#e4e5e9")};
`;

export default StarRating;
