import React, {useEffect, useState} from "react";
import styles from './Timer.module.scss'
import {toast} from "react-toastify";

const Timer = ({setSendAgain, marginTop, runFunction}) => {

    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(59);

    useEffect(() => {
        let sec = 59
        let min = 1;
        const myInterval = setInterval(() => {
            if (sec > 0) {
                sec--;
                setSeconds(sec)
            }
            if (sec === 0) {
                if (min === 0) {
                    clearInterval(myInterval)
                    toast.error('کد ارسال شده منقضی شد.')
                    runFunction()
                    setSendAgain(true)
                } else {
                    min--
                    setMinutes(min)
                    sec = 59
                    setSeconds(sec)
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    }, [])

    return (
        <p className={styles.showTimer} style={{marginTop}}>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
    )
}
export default Timer
