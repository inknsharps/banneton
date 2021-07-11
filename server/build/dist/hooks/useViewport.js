import {useState, useEffect} from "../../_snowpack/pkg/react.js";
const useViewport = (viewportCutoff) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > viewportCutoff);
  const updateMedia = () => {
    setDesktop(window.innerWidth > viewportCutoff);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return [isDesktop, setDesktop];
};
export default useViewport;
