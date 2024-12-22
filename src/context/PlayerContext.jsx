import { createContext, useEffect, useRef , useState} from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider =(props)=>{

    const audioRef = useRef();
    const seekBg = useRef();
    const seelBar = useRef();

    const [track, settrack] = useState(songsData[0])
    const [playStatus, setplayStatus] = useState(false)
    const [time, settime] = useState({
        currentTime:{
            second : 0,
            minute : 0
        },
        totalTime:{
            second : 0,
            minute : 0
        }
    })

    const play=()=>{
        audioRef.current.play();
        setplayStatus(true)
    }

    const pause =()=>{
        audioRef.current.pause();
        setplayStatus(false);
    }

    useEffect(()=>{
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                settime({
                    currentTime:{
                        second : Math.floor(audioRef.current.currentTime % 60),
                        minute : Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime:{
                        second : Math.floor(audioRef.current.duration % 60),
                        minute : Math.floor(audioRef.current. duration / 60)
                    }
                })
            }
        }, 1000);
    },[audioRef])

    const contextValue ={
        audioRef,seekBg,seelBar,track,settrack,playStatus,setplayStatus,time,settime,play,pause
    }

    return(
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider