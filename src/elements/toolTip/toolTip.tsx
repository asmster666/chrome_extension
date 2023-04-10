import React, { FunctionComponent as FC } from 'react';
import s from './styles.module.scss';

interface ToolTipInterface {
    text: string
}

export const ToolTip: FC<ToolTipInterface> = (props) => {

    const { text } = props;

    return (
        <div className={s.toolTip}>
            { text }
        </div>
    )

}