import React from "react";
import { useContext } from "react";
//import { FeatureFlagsContext } from "./context";
import TicTacToe from "../tic-tac-toe/TicTacToe";
import GitHubProfileFider from "../github-profile-finder/GitHubProfileFider";
import LightDark from "../light-dark-mode/LightDak";
import TreeView from "../tree-view/TreeView";
import menus from "../tree-view/data";
import { FeatureFlagsContext } from "./context/FeatureFlagGlobalState";

const FeatureFlags = () => {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    { 
      key: "showTicTacToe", 
      component: <TicTacToe />,
    },

    {
      key: "showGitHubProfileFider",
      component: <GitHubProfileFider />,
    },

    {
      key: "showLightAndDarkMode",
      component: <LightDark />,
    },

    {
      key: "showTreeView",
      component: <TreeView menu={menus} />,
    },
  ];

  const checkEnabledFlags = (getCurrentKey) => {
    return enabledFlags[getCurrentKey];
  };

  if (loading) {
    return <h1>Loading , Please Wait!!</h1>;
  }

  return (
    <div>
      <h1>Feature Flag</h1>
      {componentsToRender.map((componentItem) => (checkEnabledFlags(componentItem.key) ? componentItem.component : null))}
    </div>
  );
};

export default FeatureFlags;
