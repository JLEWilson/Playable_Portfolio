import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useMediaQuery } from '../Hooks/MediaQuery';

const UnityGame = () => {
  const isMDScreen = useMediaQuery('(min-width: 800px) and (max-width: 1199px)');
  const isLGScreen = useMediaQuery('(min-width: 1200px) and (max-width: 1599px)');
  const isXLScreen = useMediaQuery('(min-width: 1600px)');
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "./unityBuild/Playable_Portfolio.loader.js",
    dataUrl: "./unityBuild/Playable_Portfolio.data",
    frameworkUrl: "./unityBuild/Playable_Portfolio.framework.js",
    codeUrl: "./unityBuild/Playable_Portfolio.wasm",
  });
  const loadingPercentage = Math.round(loadingProgression * 100);
  const style = {
    game: (isMd, isLg, isXl) => ({
      width:  isXl ? "1280px" :
              isLg ? "960px" :
              isMd ? "640px" : "320px",
      height: isXl ? "720px" :
              isLg ? "540px" :
              isMd ? "360px" :"180px",
      margin: "1em auto",
      display: "block"
		}),
    loading: {
      position: "absolute",
      marginLeft: "auto",
      marginRight: "auto",
      left: "0",
      right: "0",
      top: "2.75em",
      textAlign: "center",
      color: "rgba(235, 250, 215, .80)",
      fontWeight: "700",
      fontSize: "5em",
    }
  }

  return (
    <div >
      {isLoaded === false && (
      // We'll conditionally render the loading overlay if the Unity
      // Application is not loaded.
      <div style={style.loading}>
        <p>Loading... ({loadingPercentage}%)</p>
      </div>
      )}
      <Unity style={style.game(isMDScreen, isLGScreen, isXLScreen)}
             unityProvider={unityProvider} />
    </div>
  )
}

export default UnityGame;

/* aspect ratios
320 x 180, small
640 x 360, medium
960 x 540, large
1280 x 720, largest
*/
