import { useEffect, useState } from "react"

export function useWindowSize() {
    const[windowSize, setWindowSize] = useState({width:window.innerWidth,height:window.innerHeight})
    // const [isDark] = useOutletContext();
    useEffect(() => {
      window.addEventListener('resize', ()=> {
        setWindowSize({width:window.innerWidth,height:window.innerHeight})
          // console.log("Yoreskuonegashimas!!!")
      })
    },[])

    return windowSize
}