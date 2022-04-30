import classNames from 'classnames';
import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import { gsap } from "gsap";

const TextTimeMessage = ({ textPosition, content, attachments, data }) => {
    const strDate = data;
    const boxRef = useRef();
    const [isOpenMessage, setIsOpenMessage] = useState(false)
    const removeNumberData = strDate.replace(/\d\d\d\d.\d\d.\d\d\s/gm, "");
    const removeNumberSeconde = removeNumberData.replace(/:\d\d$/gm, "");
    useEffect(() => {
        !isOpenMessage ? content.length >= 100 && gsap.to(boxRef.current, { height: "19px", whiteSpace: "nowrap", opacity: '0.5' }) : gsap.to(boxRef.current, { height: "auto", whiteSpace: "pre-wrap", opacity: '1' }, 1);
    }, [isOpenMessage]);
    return (
        <div className={styles.text_time_messages}>
            <p className={styles.text_time_messages__time}>{removeNumberSeconde}</p>
            <div className={styles.text_time_messages__posts_text_block}>
                {content && <p ref={boxRef} className={classNames(styles.text_time_messages__message, `text-${textPosition}`)}>{content}</p>}
                {!content && <p className={styles.text_time_messages__empty_message}>Пустое сообщение</p>}
                {content.length >= 100 && <button className={styles.text_time_messages__further} onClick={() => { setIsOpenMessage(!isOpenMessage) }}>{!isOpenMessage ? 'Далее' : 'Свернуть'}</button>}
                {attachments && attachments.map(item =>
                    <div className={styles.text_time_messages__media_block}>{item.type === "image" ? <img src={item.url} /> : <video controls preload ><source src={item.url} type="video/mp4" /></video>}</div>
                )}
            </div>
        </div >
    );
};

export default TextTimeMessage;