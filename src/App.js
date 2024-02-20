import StarRating from "./components/StarRating";
import ImageSlider from "./components/image-slider/ImageSlider"
import LightDark from "./components/light-dark-mode/LightDak";
import LoadMore from "./components/load-more/LoadMore"
import QrGenerator from "./components/qr-generator/QrGenerator";

import TreeView from "./components/tree-view/TreeView"
import menus from "./components/tree-view/data";

function App() {
  return (
    <div className="App">

      
      {/* <StarRating noOfStars={10} /> */}

      
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} pages={"1"} limit={"10"} /> */}

      

      {/* <LoadMore/> */}

      {/* <TreeView menus={menus}/> */}

      {/* <QrGenerator/> */}

      
      <LightDark/>

    </div>
  );
}

export default App;
