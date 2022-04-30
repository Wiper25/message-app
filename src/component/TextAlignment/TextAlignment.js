import React from 'react';
import styles from './styles.module.scss';
import Button from '@mui/material/Button';

const TextAlignment = ({ setTextPosition }) => {
    return (
        <div className={styles.text_alignment}>
            <Button variant="outlined" className={styles.text_alignment__btn} onClick={() => setTextPosition('start')}><span>Левый</span></Button>
            <Button variant="outlined" className={styles.text_alignment__btn} onClick={() => setTextPosition('center')}><span>Центр</span></Button>
            <Button variant="outlined" className={styles.text_alignment__btn} onClick={() => setTextPosition('end')}><span>Правый</span></Button>
        </div>
    );
};

export default TextAlignment;