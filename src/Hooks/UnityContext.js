import { useUnityContext } from "react-unity-webgl";

export const useCustomUnityContext = () => {
  const { unityProvider, isLoaded, loadingProgression, unload } = useUnityContext({
    loaderUrl: "./unityBuild/Playable_Portfolio.loader.js",
    dataUrl: "./unityBuild/Playable_Portfolio.data",
    frameworkUrl: "./unityBuild/Playable_Portfolio.framework.js",
    codeUrl: "./unityBuild/Playable_Portfolio.wasm",
  });
  return { unityProvider, isLoaded, loadingProgression, unload }
}