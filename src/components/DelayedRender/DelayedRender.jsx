import React,{useState,useEffect} from 'react'

const DelayedRender = ({timeDelay}) => {

    const [delayed, setDelayed] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => setDelayed(false), timeDelay);
        return () => clearTimeout(timeout);
    }, []);

    return fn => !delayed && fn();
}

export default DelayedRender
