import React, { FunctionComponent as FC, useState, ChangeEvent, useEffect } from 'react';
import s from './styles.module.scss';

import * as Elements from '../../elements/index';
import LinksList = Elements.LinksList;

import * as Icons from '../../assets/index';
import ApproveBtn = Icons.ApproveBtn;

export const PocketBlock:FC = () => { 

    const [inputLink, setInputLink] = useState<string>('');
    const [isApproved, setIsApproved] = useState<Boolean>(false);
    const [listFull, setListFull] = useState<Boolean>(false);

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInputLink(e.target.value)
    }

    const handleAddLink = () => {
        setIsApproved(true);
    }

    const handleListFull = () => {
        setListFull(true)
    }

    // pushing first link item to list
    // useEffect(() => {
    //     if(listFull) { 
    //         setInputLink(''); 
    //         setIsApproved(false) 
    //     }
    //     // eslint-disable-next-line
    // }, [listFull])

    // after pushing link to list refresh state vars
    useEffect(() => {
        if(isApproved) { setInputLink(''); setIsApproved(false) }
    }, [isApproved])

    return (
        <div className={s.pocketBlock}>
            <p className={s.pocketBlock__title}><b>Save useful links here</b></p>
            <div className={s.pocketBlock__inputWrap}>
                <input 
                    className={s.pocketBlock__inputWrap_input} 
                    type={'text'} 
                    placeholder={'Paste your link'}
                    value={inputLink}
                    onChange={handleChangeInput} 
                />
                <span className={s.pocketBlock__inputWrap_approveBtn}
                    onClick={handleAddLink}
                >
                    <ApproveBtn width={30} height={30} />
                </span>
            </div>
            <LinksList 
                link={inputLink} 
                approved={isApproved} 
                isFullFn={handleListFull} 
            />
        </div>
    )
}