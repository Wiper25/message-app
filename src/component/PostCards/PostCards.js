import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.scss'
import HeaderRibbonMessage from '../HeaderRibbonMessage/HeaderRibbonMessage';
import TextTimeMessage from '../TextTimeMessage/TextTimeMessage';
import { gsap } from "gsap";
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';


const PostCards = ({ item }) => {
    const blockCardPosts = useRef()
    const [textPosition, setTextPosition] = useState('start')
    const [postIsFavorites, setPostIsFavorites] = useState(false)
    const favoritesSetLocalStorage = (obj) => {
        localStorage.setItem(obj, true);
    }
    useEffect(() => {
        gsap.to(blockCardPosts.current, { opacity: "1", delay: '1' })
    }, [item])
    return (
        <section ref={blockCardPosts} className={'posts'}>
            <HeaderRibbonMessage idPosts={item.id} favoritesSetLocalStorage={favoritesSetLocalStorage} setTextPosition={setTextPosition} author={item.author} channel={item.channel} postIsFavorites={postIsFavorites} setPostIsFavorites={setPostIsFavorites} />
            <TextTimeMessage textPosition={textPosition} content={item.content} attachments={item.attachments} data={item.date} />
            <div className={styles.bread_crumbs}>
                <Breadcrumbs separator="" aria-label="breadcrumb">
                    <Link underline="hover" color="#0088EE" fontSize="12px" href="/">
                        #Новое
                    </Link>
                    <Typography fontSize="12px" color="#CDCDCD">#Эксперт</Typography>
                </Breadcrumbs>
            </div>
        </section>
    );
};

export default PostCards;