import React, { FunctionComponent as FC, useEffect, useState } from 'react';
import s from './styles.module.scss';
import data from '../../json/quotes.json';

interface QuotesInt {
    "q": String,
    "a": String,
    "c": String,
    "h": String
}

export const QuotesBlock:FC = () => {

    const [generalQuotes, setGeneralQuotes] = useState<QuotesInt []>(data)
    const [randomQuote, setRandomQuote] = useState<any>();

    const getRandomQuote = (arr: Array<QuotesInt>) => {
        let quote = arr[Math.floor((Math.random()*arr.length))]
        setRandomQuote(quote)
    }

    useEffect(() => {
        getRandomQuote(generalQuotes)
    }, [])

    useEffect(() => {
        if(generalQuotes && generalQuotes.length !== 0) {
            const timer = setInterval(() => getRandomQuote(generalQuotes), 30000)

            return (() => {
                clearInterval(timer)
            })
        }
    }, [])

    return (
        <div className={s.quoteBlock}>
            <q className={s.quoteBlock__quote}>{ randomQuote && randomQuote.q }</q>
            <span className={s.quoteBlock__author}>{ randomQuote && randomQuote.a }</span>
        </div>
    )
};