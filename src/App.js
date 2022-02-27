
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card/card.component';
import Test from './components/Test/Test';

function App() {
  const [BTCUSDT, setDataBTC]= useState();
  const [ETHUSDT, setDataETH]= useState();
  useEffect(()=>{

    const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@bookTicker/ethusdt@bookTicker');

    ws.onmessage=(event)=>{
      const json=JSON.parse(event.data);
      if(json.s === 'BTCUSDT'){
        setDataBTC(json);
      } else if (json.s === 'ETHUSDT') {
        setDataETH(json);
      }
    }

  },[])
  
  return (
  <>
  <Card BTCUSDT={BTCUSDT} ETHUSDT={ETHUSDT}/>
  <Test BTCUSDT={BTCUSDT} ETHUSDT={ETHUSDT}/>
  </>
    )
}

export default App;
