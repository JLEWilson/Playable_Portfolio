import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import { useMediaQuery } from '../Hooks/MediaQuery';

const unityContext = new UnityContext({
  loaderUrl: "../unityBuild/PlayablePortfolio.loader.js",
  dataUrl: "../unityBuild/PlayablePortfolio.data",
  frameworkUrl: "../unityBuild/PlayablePortfolio.framework.js",
  codeUrl: "../unityBuild/PlayablePortfolio.wasm",
});

function UnityGame() {
  const isMDScreen = useMediaQuery('(min-width: 800px) and (max-width: 1199px)');
  const isLGScreen = useMediaQuery('(min-width: 1200px) and (max-width: 1599px)');
  const isXLScreen = useMediaQuery('(min-width: 1600px)');
  
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
		})
    
  }

  return <Unity 
          style={style.game(isMDScreen, isLGScreen, isXLScreen)} 
          unityContext={unityContext} />
  
}

export default UnityGame;

/* aspect ratios
320 x 180, small
640 x 360, medium
960 x 540, large
1280 x 720, largest
*/
