import { CircularProgress } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import PostCards from './component/PostCards/PostCards';
import Button from '@mui/material/Button';
import { gsap } from "gsap";

const FORM_DATA = new FormData();

const REQUEST_OPTION = {
  method: 'POST',
  body: FORM_DATA,
  redirect: 'follow'
};

const App = () => {
  const [dataValue, setDataValue] = useState(null)
  const [isMessage, setIsMessage] = useState('allMessage')

  const settingRequest = {
    actionName: "MessagesLoad",
    newMessage: "2698",
    allMessage: "0",
    oldMessage: 'true'
  }
  const requestFetch = () => {
    FORM_DATA.append("actionName", settingRequest.actionName);
    if (isMessage === 'allMessage') {
      FORM_DATA.append("messageId", settingRequest.allMessage);
    } else if (isMessage === 'newMessage') {
      FORM_DATA.append("messageId", settingRequest.newMessage);
    } else if (isMessage === 'oldMessage') {
      FORM_DATA.append("messageId", settingRequest.oldMessage);
    }
    fetch('http://f0665380.xsph.ru/', REQUEST_OPTION)
      .then(data => data.json())
      .then(data => data === "no message" ? setDataValue(null) : setDataValue(data))
  }

  useEffect(() => {
    const intervalId = setInterval(requestFetch, 5000)
    return () => clearInterval(intervalId);
  })
  return (
    <>
      <div className='message-btn-container'>
        <Button variant={isMessage === 'oldMessage' ? "contained" : "outlined"} onClick={() => {
          setIsMessage('oldMessage');
          setDataValue(null)
        }}>
          Старые
        </Button>
        <Button variant={isMessage === 'newMessage' ? "contained" : "outlined"} onClick={() => {
          setIsMessage('newMessage');
          setDataValue(null)
        }}>
          Новые
        </Button>
        <Button variant={isMessage === 'allMessage' ? "contained" : "outlined"} onClick={() => {
          setIsMessage('allMessage');
          setDataValue(null)
        }}>
          Все
        </Button>
      </div>
      <div className='row-revision'>
        {dataValue === null ?
          <div className='spinner-loading-block'><CircularProgress color="inherit" /></div>
          :
          dataValue.Messages.map((item, index) => (
            <div key={index}><PostCards item={item} /></div>
          ))
        }
      </div>
    </>
  );
};

export default App;