import React from 'react';
import styles from './styles.module.scss';
import { RiDownloadLine } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";
import { VscWindow } from "react-icons/vsc";
import { BsFillStarFill } from "react-icons/bs";
import IconButton from '@mui/material/IconButton';

const MessageManagement = ({ postIsFavorites, setPostIsFavorites, favoritesSetLocalStorage, idPosts }) => {
    const statusLocalStorage = localStorage.getItem(idPosts)
    return (
        <div className={styles.message_management}>
            <IconButton className={styles.message_management__send_message_btn}><RiDownloadLine color='rgba(128, 128, 128, 0.4)' /></IconButton>
            <IconButton><VscWindow color='rgba(128, 128, 128, 0.4)' /></IconButton>
            <IconButton><AiOutlineSetting color='rgba(128, 128, 128, 0.4)' /></IconButton>
            <IconButton onClick={() => {
                setPostIsFavorites(true)
                favoritesSetLocalStorage(idPosts)
            }}>
                <BsFillStarFill color={postIsFavorites || statusLocalStorage ? "#0088EE" : "#808080"} />
            </IconButton>
        </div >
    );
};

export default MessageManagement;