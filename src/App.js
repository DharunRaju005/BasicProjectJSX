import StarRating from "./components/StarRating";
import ImageSlider from "./components/image-slider/ImageSlider"

function App() {
  return (
    <div className="App">
      {/* <StarRating noOfStars={10} /> */}
      <ImageSlider url={'https://picsum.photos/v2/list'} pages={"1"} limit={"10"} />
    </div>
  );
}

export default App;
