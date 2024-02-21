import styled from "styled-components";
import { useEffect, useState, useRef } from "react";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const isInitialRender = useRef(true);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScrollPercentage = () => {
    // console.log(document.body.scrollTop, document.documentElement.scrollTop, document.documentElement.scrollHeight, document.documentElement.clientHeight);

    const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  };

  const fetchData = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      //console.log(data);

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setError(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (loading) {
    return <div>Please Wait!!</div>; // Added return statement
  }

  if (error) {
    return <div>Error ! {error}</div>; // Added return statement
  }

  console.log(scrollPercentage);

  return (
    <>
      <TopContainer>
        <h1>Custom Scroll Indicator</h1>
        <ScrollProgressContainer>
          <CurrentProgressBar style={{ width: `${scrollPercentage}%` }} />
        </ScrollProgressContainer>
      </TopContainer>

      <DataContainer>{data && data.length > 0 ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>) : null}</DataContainer>
    </>
  );
};

const DataContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TopContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  text-align: center;
  background-color: #000;
  color: #fff;
`;

const ScrollProgressContainer = styled.div`
  width: 100%;
  height: 10px;
  background: #aaf900;
`;

const CurrentProgressBar = styled.div`
  height: 10px;
  background: #721221;
  width: 0%;
`;

export default ScrollIndicator;
