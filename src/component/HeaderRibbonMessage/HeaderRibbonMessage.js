import React from 'react';
import styles from './styles.module.scss';
import UserAvatarGroup from '../UserAvatarGroup/UserAvatarGroup';
import TextAlignment from '../TextAlignment/TextAlignment';
import MessageManagement from '../MessageManagement/MessageManagement';

const HeaderRibbonMessage = ({ idPosts, setTextPosition, author, postIsFavorites, setPostIsFavorites, channel, favoritesSetLocalStorage }) => {
    return (
        <div className={styles.header_ribbon_message}>
            <UserAvatarGroup author={author} channel={channel} />
            <div className={styles.header_ribbon_message__message_options}>
                <div className={styles.header_ribbon_message__button_block}>
                    <TextAlignment setTextPosition={setTextPosition} />
                    <MessageManagement idPosts={idPosts} postIsFavorites={postIsFavorites} setPostIsFavorites={setPostIsFavorites} favoritesSetLocalStorage={favoritesSetLocalStorage} />
                </div>
            </div>
        </div>
    );
};

export default HeaderRibbonMessage;