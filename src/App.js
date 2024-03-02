import StarRating from "./components/StarRating";
import GitHubProfileFider from "./components/github-profile-finder/GitHubProfileFider";
import ImageSlider from "./components/image-slider/ImageSlider";
import LightDark from "./components/light-dark-mode/LightDak";
import LoadMore from "./components/load-more/LoadMore";
import ModelTest from "./components/model-mockup/ModelTest";
import QrGenerator from "./components/qr-generator/QrGenerator";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";
import TabTest from "./components/tabs/TabTest";
import Tabs from "./components/tabs/Tabs";
import TreeView from "./components/tree-view/TreeView";
import menus from "./components/tree-view/data";

import SearchAutoComplete from "./components/search-autocomplete/SearchAutoComplete";
import Test from "./components/use-fetch-custom-hook/Test";
import TicTacToe from "./components/tic-tac-toe/TicTacToe";
import FeatureFlagGlobalState from "./components/feature-flag/context/FeatureFlagGlobalState";
import FeatureFlags from "./components/feature-flag/FeatureFlags";
import OutsideClickTest from "./components/use-outside-click/OutsideClickTest";

function App() {
  return (
    <div className="App">
      {/* <StarRating noOfStars={10} /> */}

      {/* <ImageSlider url={'https://picsum.photos/v2/list'} pages={"1"} limit={"10"} /> */}

      {/* <LoadMore/> */}

      {/* <TreeView menus={menus}/> */}

      {/* <QrGenerator/> */}

      {/* <LightDark/> */}

      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}

      {/* <TabTest /> */}

      {/* <ModelTest/> */}

      {/* <GitHubProfileFider/> */}

      {/* <SearchAutoComplete/> */}

      {/* <Test /> */}

      {/* <TicTacToe /> */}

      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      <OutsideClickTest />
    </div>
  );
}

export default App;
