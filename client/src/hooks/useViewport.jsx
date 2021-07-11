// React hook to conditionally render entire components based on viewport size
import { useState, useEffect } from "react";

const useViewport = viewportCutoff => {
    const [ isDesktop, setDesktop ] = useState(window.innerWidth > viewportCutoff);
    
    const updateMedia = () => {
        setDesktop(window.innerWidth > viewportCutoff);
    };
    
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });
    
    return [ isDesktop, setDesktop ];
};

export default useViewport;