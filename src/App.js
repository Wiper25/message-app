import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PostCards from './component/PostCards/PostCards';

const FORM_DATA = new FormData();
const REQUEST_OPTION = {
  method: 'POST',
  body: FORM_DATA,
  redirect: 'follow'
};
const App = () => {
  const [dataValue, setDataValue] = useState(null)
  useEffect(() => {
    const intervalId = setInterval(() => {
      FORM_DATA.append("actionName", "MessagesLoad");
      fetch('http://f0665380.xsph.ru/?oldMessage=true', REQUEST_OPTION)
        .then(data => data.json())
        .then(data => setDataValue(data))
    }, 5000)
    return () => clearInterval(intervalId);
  }, [])
  return (
    <div className='row-revision'>
      {dataValue === null ? <div className='spinner-loading-block'><CircularProgress color="inherit" /></div>
        : dataValue.Messages.map((item) => (
          <PostCards key={item.id} item={item} />
        ))}
    </div>
  );
};

export default App;