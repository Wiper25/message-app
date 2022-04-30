import React from 'react';
import Avatar from '@mui/material/Avatar';
import styles from './styles.module.scss';

const UserAvatarGroup = ({ author, channel }) => {
    return (
        <div className={styles.user_avatar_group}>
            <Avatar stroke="red" src="/broken-image.jpg" />
            <div className={styles.user_avatar_group__name_user_block}>
                <h4 className={styles.user_avatar_group__name}>{author}</h4>
                <p className={styles.user_avatar_group__post_social}>{channel}</p>
            </div>
        </div>
    );
};

export default UserAvatarGroup;