import { useState, useRef, useEffect } from 'react'

const usePosterSize = () => {
  const posterRef = useRef(null);
  const [posterWidth, setPosterWidth] = useState(0);
  const [posterHeight, setPosterHeight] = useState(0);

  useEffect(() => {
    setPosterWidth(posterWidth.current.clientWidth);
    setPosterHeight(posterWidth.current.clientHeight)
  }, [posterRef.current]);

  return { posterHeight, posterWidth, posterRef };
}

export default usePosterSize;
