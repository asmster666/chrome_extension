import React, { FunctionComponent as FC, useState , useEffect } from 'react';
import s from './styles.module.scss';


export const Clock:FC = () => {

    const [currentDate, setCurrentDate] = useState<Date>(new Date());

    const refreshTime = () => {
        setCurrentDate(new Date());
    }

    const formattedDate = () => {
        let date: Date = new Date();
        let day: string = '', month: string = '';

        // add extra 0 for days and months before 10
        date.getDate() < 10 ? day = '0' + date.getDate() : day = date.getDate().toString()
        date.getMonth() + 1 < 10 ? month = '0' + (date.getMonth() + 1) : month = (date.getMonth() + 1).toString()

        return (date && day !== '' && month !== '') && day + "." + month + "." + date.getFullYear()
    }

    useEffect(() => {
        const timer = setInterval(refreshTime, 1000);

        return function cleanup() {
            clearInterval(timer);
        };
    }, [])

    return (
        <div className={s.clock}>
            <p className={s.clockTime}>{ currentDate.toLocaleTimeString() }</p>
            <p className={s.clockDate}>{ formattedDate() }</p>
        </div>
    )
};