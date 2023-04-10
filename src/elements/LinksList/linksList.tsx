import React, { FunctionComponent as FC, useState, useEffect, MouseEventHandler, ChangeEvent } from 'react';
import s from './styles.module.scss';

import * as Icons from '../../assets/index';
import EditBtn = Icons.EditBtn;
import DeleteBtn = Icons.DeleteBtn;
import ApproveBtn = Icons.ApproveBtn;

import * as Elements from '../../elements/index';
// import ToolTip = Elements.ToolTip;

interface LinksInterface {
    link: string,
    approved: Boolean,
    isFullFn: () => void
}


export const LinksList: FC<LinksInterface> = (props) => {

    const { link, approved, isFullFn } = props;

    const [links, setLinks] = useState<string[]>([]);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    // const [editField, setEditField] = useState<string>('');

    const validateLink = (l: string) => {
        return /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(l) ? 'link' : 'text'
    }

    const shortenLink = (l: string) => {
        return (l && l.length > 13) ? l.slice(0, 12) + l.replace(l.slice(13, l.length), '...') : l
    }

    // const handleLinkHover = (e: )

    // const handleEditFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setEditField(e.target.value);
    // }

    // const handleSaveEdit = () => {
    //     setLinks(state => ([
    //         ...state, state[editField] = editField
    //     ]))
    // }

    //works correctly
    const deleteLink = (index: number) => {
        setLinks(state => ([
            ...state.filter(link => link !== links[index])
        ]))
    }

    useEffect(() => {
        if (link !== '' && approved) {
            setLinks(state => ([...state, link])) 
            isFullFn()
        }
        // eslint-disable-next-line
    }, [link, approved])

    return (
        <div 
            id={'linksContainer'} 
            className={approved ? s.linksList : s.linksList + ' ' + s.linksListEmpty}
        >
            <div>
            {
                (links && links.length !== 0) ?
                    links.map((link, ind) => {
                        return (
                            <div key={`link_${ind}`} className={s.linksList__item}>
                                {
                                    validateLink(link) === 'link' ? 
                                        <a href={`${link}`}>{ shortenLink(link) }</a> :
                                            <span>{ shortenLink(link) }</span>
                                }
                                <div className={s.linksList__item_btnWrap}>
                                    {/* <span 
                                        className={s.linksList__item_btnWrapEdit}
                                        onClick={() => editLink(ind)}
                                    >
                                        <EditBtn width={20} height={20} />
                                    </span> */}
                                    <span 
                                        className={s.linksList__item_btnWrapDelete}
                                        onClick={() => deleteLink(ind)}
                                    >
                                        <DeleteBtn width={20} height={20} />
                                    </span>
                                </div>

                                {/* <ToolTip text={link} /> */}
                            </div>
                        )
                    }) : ( isEdit ? 
                            <div>
                                {/* <input 
                                    type={'text'} 
                                    value={editField} 
                                    onChange={handleEditFieldChange} 
                                />
                                <span 
                                    className={s.linksList__item_btnWrapDelete}
                                    onClick={}
                                >
                                    <ApproveBtn width={20} height={20} />
                                </span> */}
                            </div> :
                                <p className={s.linksListEmpty__text}>Saved links</p>
                        )
            }
            </div>
        </div>
    )
}