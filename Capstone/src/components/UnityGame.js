import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "/unityBuild/PlayablePortfolio.loader.js",
  dataUrl: "/unityBuild/PlayablePortfolio.data",
  frameworkUrl: "/unityBuild/PlayablePortfolio.framework.js",
  codeUrl: "/unityBuild/PlayablePortfolio.wasm",
});
const gameStyle = {
  width:"75vw",
  alignSelf: "center"
}
function UnityGame() {
  return <Unity style={gameStyle} unityContext={unityContext} />;
}

export default UnityGame;