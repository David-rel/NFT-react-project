import './App.css'
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Punklist from './components/Punklist';


function App() {

  const [punkListData, setPunkListData] = useState([])

  useEffect(() => {
    const getMyNFTs = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xA61c2EDB7D2938E03b393f6E822CbB5DB575c1A4&order_direction=asc')
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }

    return getMyNFTs()
  }, [])

  
  return (
    <div className='app'>
      <Header />
      <Punklist punkListData={punkListData} />
    </div>
  );
}

export default App;