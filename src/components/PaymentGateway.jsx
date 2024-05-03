import QRCode from 'qrcode.react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const PaymentGateway = () => {
    const [selectedNetwork, setSelectedNetwork] = useState('network');
    const [selectedToken, setSelectedToken] = useState('token');
    const [amount, setAmount] = useState(10);
    const [walletAddress, setWalletAddress] = useState('0xc1C2e49D603F67da3272EF637520BBFF804cC97E');
const handleNetworkChange = (event) => {
    if(event.target.value === 'network') {
        return;
    }
    setSelectedNetwork(event.target.value);
    console.log("Selected Network: ", event.target.value);
}

const handleTokenChange = (event) => {
    if(event.target.value === 'token') {
        return;
    }
    setSelectedToken(event.target.value);
    console.log("Selected Network: ", event.target.value);
}
    const [token,setToken]=useState();
    useEffect(()=>{
        // axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
        // .then((res)=>{
        //     console.log(res.data.bitcoin.usd)
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })
    },[])
  return (
    <div className='font-mont flex justify-center mt-10 '>
    <div className=' shadow-md w-auto h-auto border rounded-3xl p-32 text-center py-5'>
        <div className='flex justify-center items-center mb-2 '>
            <img className='animate-spin-slow w-8' src='/src/assets/logo.png' alt="logo" />
        <h1 className='px-2 font-bold text-2xl'>NUCHAIN</h1></div>
        <div className='mb-4'><h1 className='text-2xl font-bold'>Payment Gateway</h1></div>
        <div className='mb-4 font-bold text-lg'>USD:${amount}</div>
        <div>
        <select 
            className='py-2 pr-36 rounded-md border border-gray-300 bg-white shadow-md hover:border-gray-400 focus:outline-none focus:ring focus:ring-blue-200'
            value={selectedNetwork}
            onChange={handleNetworkChange}
        >
    <option value="network">Network</option>
    <option value="nuchain">Nuchain</option>
    <option value="solana">Solana</option>
    <option value="polygon">Polygon</option>
</select>
        </div>
        <div>
            <select 
                className='py-2 pr-36  rounded-md border border-gray-300 bg-white shadow-md hover:border-gray-400 focus:outline-none focus:ring focus:ring-blue-200 mt-4'
                value={selectedToken}
                onChange={handleTokenChange}
            >
                <option value="token">Token</option>
                <option value="nucredit">NuCredit</option>
                <option value="btc">BTC</option>
                <option value="eth">ETH</option>
            </select>
        </div>
        <div className='mt-4 text-lg'>
            <p>Token:0000.1</p>
        </div>
        <div className=' mt-4 mb-4 flex justify-center'>
        <QRCode  value={'0xc1C2e49D603F67da3272EF637520BBFF804cC97E'} size={150} alt="QR Code" />
        </div>
        <div className='pb-10'>Wallet Address: {walletAddress.slice(0,5)}.....{walletAddress.slice(walletAddress.length-5)} </div>
    </div>
</div>

  )
}

export default PaymentGateway