import StarRating from "./components/StarRating";
import ImageSlider from "./components/image-slider/ImageSlider"
import LoadMore from "./components/load-more/LoadMore"
import QrGenerator from "./components/qr-generator/QrGenerator";

function App() {
  return (
    <div className="App">

      
      {/* <StarRating noOfStars={10} /> */}

      
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} pages={"1"} limit={"10"} /> */}

      

      <LoadMore/>

      {/* <QrGenerator/> */}

    </div>
  );
}

export default App;
