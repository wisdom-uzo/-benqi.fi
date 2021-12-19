import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import {ArticleIcon} from '@mui/icons-material';


export default function Home() {
   const [coin, setCoin] = useState(false)
   const [section, setSection] = useState(false)
   const [wal, setWal] = useState(false)

  const openExtention = () => {
    setCoin(true)
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {coin ? 
      (<div className={styles.coin}>
        <div className={styles.walletlink}>
          <div className={styles.close} onClick={() => setCoin(!coin)}>
          <div className={styles.close__wrapper }>
            <div className={styles.close__icon}>
                <div className={styles.close__line1}></div>
                <div className={styles.close__line2}></div>
              </div>
            </div>
          </div>
        <div className={styles.install_region}>
          <h2>Try Coinbase Wallet extension</h2>
          <a href='https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad' className={styles.install_btn}>Install</a>
        </div>

           <div className={styles.box_left}>

              <div className={styles.description}>
                  <div className={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
</svg></div>
                  <p className={styles.dis}>Connect to crypto apps with one click</p>
              </div>
              <div className={styles.description}>
                  <div className={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
</svg></div>
                  <p className={styles.dis}>Private keys remain secure on mobile app</p>
              </div>
              <div className={styles.description}>
                  <div className={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg></div>
                  <p className={styles.dis}>Compatible with all crypto apps</p>
              </div>
             
           </div>

           
        </div>
        <div className={styles. box_bottom}>
             <div className={styles.scan_description}>
               <h2>Or scan to connect</h2>
               <p>Open <a href="https://www.coinbase.com/wallet">Coinbase Wallet</a>  on your mobile phone and scan</p>
             </div>
             <div className={styles.scan}>
               <img src="/scan.svg" alt="" />
             </div>
           </div>
      </div>): ''}


     {wal ? 
      (<div className={styles.walletconnect_wrapper}>
        <div className={styles.rcode__base} >

        

          <div className={styles.modal__base}>

          <div className={styles.modal__header}>
          <div className={styles.logo_sec}>
            <img src="/logo.svg" alt="" />
            <p>WalletConnect</p>
          </div>

            <div className={styles.close__wrapper } onClick={() => setWal(false)}>
            <div className={styles.close__icon}>
                <div className={styles.close__line1}></div>
                <div className={styles.close__line2}></div>
              </div>
            </div>
        </div>

          <div className={styles.mobile__toggle}>
            {section===false ? ( <button className={styles.btn_bg} onClick={()=>setSection(false)}>QR Code</button>):( <button  onClick={()=>setSection(false)}>QR Code</button>)}
            {section ? ( <button  className={styles.btn_bg} onClick={()=>setSection(true)}>Desktop</button>):( <button onClick={()=>setSection(true)}>Desktop</button>)}
           </div>
          
          {section ?  (<div>
            <p  className={styles.qrcode__text}>Choose your preferred wallet</p>
             <div className="walletconnect-connect__buttons__wrapper">
                <a className={styles.base__row} href="ledgerlive://wc?uri=wc%3Afe245567-6e10-461a-8e52-676e68937d34%401%3Fbridge%3Dhttps%253A%252F%252Fy.bridge.walletconnect.org%26key%3Dc314eb173d1b38ceff0643b6d22289eebf019755f502e36b3c74be824044ce5b" rel="noopener noreferrer" target="_blank">
                    <h3 className="walletconnect-modal__base__row__h3">Ledger Live</h3>
                    <div className={styles.base__row__right}>
                       <img className={styles.right__app_icon} src="https://registry.walletconnect.org/logo/sm/4ab2542c2799c825a8465ba5ab8aa7def52b7904f38b74484af917ed9c0fc4e5.jpeg" alt="" />
                        <img src="data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E" className="walletconnect-modal__base__row__right__caret"/>
                    </div>
                 </a>

                 <a className={styles.base__row} href="https://tokenary.io/wc?uri=wc%3Afe245567-6e10-461a-8e52-676e68937d34%401%3Fbridge%3Dhttps%253A%252F%252Fy.bridge.walletconnect.org%26key%3Dc314eb173d1b38ceff0643b6d22289eebf019755f502e36b3c74be824044ce5b" rel="noopener noreferrer" target="_blank">
                    <h3 className="walletconnect-modal__base__row__h3">Tokenary</h3>
                    <div className={styles.base__row__right}>
                       <img className={styles.right__app_icon} src="https://registry.walletconnect.org/logo/sm/c889f5add667a8c69d147d613c7f18a4bd97c2e47c946cabfdd13ec1d596e4a0.jpeg" alt="" />
                        <img src="data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E" className="walletconnect-modal__base__row__right__caret"/>
                    </div>
                 </a>

                 <a className={styles.base__row} href="https://infinitywallet.io//wc?uri=wc%3Afe245567-6e10-461a-8e52-676e68937d34%401%3Fbridge%3Dhttps%253A%252F%252Fy.bridge.walletconnect.org%26key%3Dc314eb173d1b38ceff0643b6d22289eebf019755f502e36b3c74be824044ce5b" rel="noopener noreferrer" target="_blank">
                    <h3 className="walletconnect-modal__base__row__h3">Infinity Wallet</h3>
                    <div className={styles.base__row__right}>
                       <img className={styles.right__app_icon} src="https://registry.walletconnect.org/logo/sm/802a2041afdaf4c7e41a2903e98df333c8835897532699ad370f829390c6900f.jpeg" alt="" />
                        <img src="data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E" className="walletconnect-modal__base__row__right__caret"/>
                    </div>
                 </a>

                 <a className={styles.base__row} href="wallet3://wc?uri=wc%3Afe245567-6e10-461a-8e52-676e68937d34%401%3Fbridge%3Dhttps%253A%252F%252Fy.bridge.walletconnect.org%26key%3Dc314eb173d1b38ceff0643b6d22289eebf019755f502e36b3c74be824044ce5b" rel="noopener noreferrer" target="_blank">
                    <h3 className="walletconnect-modal__base__row__h3">Wallet 3</h3>
                    <div className={styles.base__row__right}>
                       <img className={styles.right__app_icon} src="https://registry.walletconnect.org/logo/sm/addb6cfece8fe6d2e7039baf5b2ba3249da48957b08bcc877a2e32eaffa6e7aa.jpeg" alt="" />
                        <img src="data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E" className="walletconnect-modal__base__row__right__caret"/>
                    </div>
                 </a>

                 <a className={styles.base__row} href="https://wallet.ambire.com/wc?uri=wc%3Afe245567-6e10-461a-8e52-676e68937d34%401%3Fbridge%3Dhttps%253A%252F%252Fy.bridge.walletconnect.org%26key%3Dc314eb173d1b38ceff0643b6d22289eebf019755f502e36b3c74be824044ce5b" rel="noopener noreferrer" target="_blank">
                    <h3 className="walletconnect-modal__base__row__h3">Ambire Wallet</h3>
                    <div className={styles.base__row__right}>
                       <img className={styles.right__app_icon} src="https://registry.walletconnect.org/logo/sm/2c81da3add65899baeac53758a07e652eea46dbb5195b8074772c62a77bbf568.jpeg" alt="" />
                        <img src="data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E" className="walletconnect-modal__base__row__right__caret"/>
                    </div>
                 </a>
             </div>
             


             
             

          </div>) : (<div>
            <p  className={styles.qrcode__text}>Scan QR code with a WalletConnect-compatible wallet</p>
            <div className={styles.qrcode}>
            <svg className={styles.qrcode__img} 
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 53" 
                shape-rendering="crispEdges">
                <path fill="#ffffff" d="M0 0h53v53H0z"></path>
                <path stroke="#000000" d="M0 0.5h7m3 0h1m5 0h2m1 0h1m1 0h1m1 0h1m1 0h2m1 0h1m1 0h1m1 0h2m5 0h2m1 0h1m3 0h7M0 1.5h1m5 0h1m2 0h1m2 0h1m5 0h1m1 0h3m3 0h2m3 0h1m2 0h3m2 0h1m2 0h2m2 0h1m5 0h1M0 2.5h1m1 0h3m1 0h1m1 0h3m1 0h5m3 0h2m1 0h1m1 0h2m3 0h3m3 0h2m2 0h1m2 0h1m2 0h1m1 0h3m1 0h1M0 3.5h1m1 0h3m1 0h1m1 0h2m2 0h8m1 0h1m1 0h1m5 0h1m5 0h1m1 0h1m1 0h1m2 0h1m1 0h1m1 0h1m1 0h3m1 0h1M0 4.5h1m1 0h3m1 0h1m1 0h1m1 0h1m3 0h4m4 0h1m1 0h5m1 0h2m1 0h1m5 0h4m3 0h1m1 0h3m1 0h1M0 5.5h1m5 0h1m1 0h1m1 0h2m7 0h2m3 0h1m3 0h2m1 0h1m2 0h2m1 0h3m1 0h2m3 0h1m5 0h1M0 6.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M8 7.5h1m1 0h1m1 0h4m1 0h2m1 0h2m1 0h2m3 0h4m1 0h2m3 0h6M0 8.5h1m1 0h5m3 0h2m1 0h2m8 0h7m4 0h3m2 0h1m1 0h2m1 0h1m1 0h5M1 9.5h2m2 0h1m1 0h3m1 0h1m1 0h3m1 0h1m1 0h4m1 0h2m2 0h1m1 0h2m3 0h3m1 0h1m2 0h2m1 0h1m1 0h3m1 0h2M1 10.5h1m4 0h1m1 0h2m1 0h1m1 0h1m3 0h5m1 0h1m1 0h3m1 0h1m3 0h6m2 0h1m1 0h2m1 0h3M0 11.5h1m1 0h3m4 0h2m1 0h3m2 0h1m2 0h1m3 0h1m2 0h3m1 0h3m3 0h4m4 0h1m1 0h1m4 0h1M0 12.5h3m1 0h1m1 0h2m1 0h1m1 0h4m2 0h4m3 0h4m5 0h4m1 0h1m2 0h2m1 0h1m3 0h3M0 13.5h4m1 0h1m1 0h1m1 0h1m2 0h2m1 0h4m2 0h9m1 0h1m5 0h1m3 0h3m1 0h1m2 0h2m2 0h1M2 14.5h1m3 0h2m1 0h1m1 0h1m1 0h1m1 0h4m1 0h1m5 0h2m2 0h1m1 0h5m1 0h1m1 0h1m2 0h2m1 0h1m2 0h3M0 15.5h1m4 0h1m2 0h2m5 0h1m1 0h2m1 0h6m3 0h5m5 0h3m1 0h2m2 0h1m1 0h1m2 0h1M0 16.5h2m1 0h1m2 0h4m2 0h3m1 0h1m1 0h1m1 0h1m2 0h2m1 0h5m5 0h1m1 0h1m5 0h1m3 0h1m1 0h1M0 17.5h1m1 0h1m6 0h1m6 0h1m1 0h5m5 0h1m1 0h4m1 0h1m3 0h5m7 0h2M1 18.5h1m3 0h2m1 0h2m2 0h1m1 0h3m3 0h2m1 0h1m1 0h1m1 0h1m1 0h1m6 0h3m5 0h1m1 0h5M1 19.5h1m1 0h2m2 0h3m1 0h1m3 0h2m7 0h1m2 0h4m2 0h1m1 0h1m1 0h4m1 0h1m2 0h1m3 0h1m1 0h1M0 20.5h3m2 0h2m2 0h1m2 0h2m1 0h2m1 0h1m2 0h1m3 0h2m2 0h3m4 0h1m1 0h1m4 0h3m1 0h2m1 0h3M0 21.5h3m2 0h1m1 0h2m1 0h1m1 0h1m3 0h1m6 0h2m5 0h1m1 0h1m3 0h3m3 0h1m2 0h1m2 0h2m2 0h1M0 22.5h4m1 0h2m1 0h4m1 0h4m4 0h4m2 0h1m1 0h1m3 0h4m4 0h1m1 0h1m2 0h2M0 23.5h3m1 0h2m4 0h2m1 0h2m3 0h2m4 0h1m5 0h1m1 0h2m1 0h2m3 0h4m1 0h1m1 0h1m1 0h1m1 0h2M1 24.5h9m3 0h4m1 0h1m2 0h1m1 0h9m2 0h1m1 0h2m1 0h1m2 0h7m1 0h1m1 0h1M1 25.5h1m1 0h2m3 0h3m1 0h1m1 0h1m2 0h2m3 0h1m1 0h1m3 0h1m1 0h1m4 0h2m2 0h6m3 0h1m2 0h2M1 26.5h1m2 0h1m1 0h1m1 0h1m1 0h1m1 0h2m2 0h4m4 0h1m1 0h1m1 0h2m2 0h2m2 0h4m4 0h1m1 0h1m1 0h3M0 27.5h2m1 0h2m3 0h6m1 0h2m2 0h2m1 0h1m1 0h1m3 0h3m6 0h1m2 0h3m1 0h1m3 0h1m3 0h1M2 28.5h7m1 0h3m1 0h1m4 0h2m2 0h10m2 0h2m7 0h7M0 29.5h1m1 0h1m1 0h2m2 0h1m2 0h5m1 0h1m2 0h8m2 0h1m1 0h1m2 0h3m2 0h1m1 0h1m2 0h2m1 0h1m3 0h1M2 30.5h2m2 0h1m2 0h1m2 0h1m1 0h2m1 0h1m2 0h2m6 0h2m1 0h2m1 0h6m1 0h1m2 0h2m2 0h3M1 31.5h1m1 0h2m2 0h1m2 0h2m2 0h3m1 0h2m1 0h2m2 0h1m1 0h1m2 0h3m4 0h2m1 0h4m2 0h1m1 0h1m2 0h2M0 32.5h1m2 0h1m1 0h3m3 0h4m1 0h2m1 0h1m1 0h1m2 0h1m2 0h4m2 0h2m1 0h4m2 0h1m2 0h1m3 0h2m1 0h1M5 33.5h1m1 0h2m5 0h2m3 0h2m1 0h2m1 0h1m4 0h2m1 0h1m1 0h1m1 0h1m3 0h2m1 0h5m3 0h1M0 34.5h2m1 0h4m2 0h1m3 0h3m1 0h1m1 0h3m3 0h1m1 0h4m3 0h5m6 0h1m3 0h1m1 0h1M1 35.5h2m1 0h1m3 0h1m1 0h5m4 0h6m1 0h1m3 0h1m1 0h1m1 0h2m2 0h1m1 0h2m1 0h2m1 0h4m2 0h1M0 36.5h3m1 0h1m1 0h1m1 0h1m1 0h1m5 0h1m4 0h1m2 0h2m5 0h1m1 0h4m2 0h1m4 0h1m1 0h2m2 0h2M1 37.5h1m1 0h1m3 0h1m1 0h1m1 0h2m4 0h1m1 0h2m1 0h2m2 0h1m3 0h2m2 0h1m1 0h1m4 0h3m2 0h1m1 0h2m2 0h1M1 38.5h2m2 0h3m3 0h1m2 0h1m3 0h1m1 0h1m1 0h1m1 0h1m3 0h1m2 0h3m2 0h3m1 0h1m3 0h1m2 0h3m1 0h1M0 39.5h1m3 0h1m2 0h2m1 0h3m3 0h3m1 0h5m1 0h1m3 0h4m1 0h1m4 0h10m2 0h1M5 40.5h2m1 0h2m1 0h1m5 0h1m1 0h2m1 0h1m2 0h1m1 0h2m7 0h2m1 0h1m10 0h2M0 41.5h1m6 0h1m1 0h2m1 0h2m1 0h1m2 0h2m1 0h1m1 0h4m2 0h3m1 0h1m1 0h2m4 0h3m1 0h1m1 0h2m2 0h2M0 42.5h2m1 0h7m1 0h1m2 0h1m4 0h3m3 0h1m2 0h1m1 0h2m1 0h3m1 0h1m6 0h1m5 0h2M1 43.5h2m4 0h1m1 0h1m1 0h1m3 0h1m3 0h2m1 0h1m2 0h3m1 0h5m2 0h1m3 0h1m1 0h2m1 0h5M3 44.5h1m2 0h1m3 0h1m2 0h1m2 0h2m1 0h2m3 0h5m1 0h1m4 0h1m3 0h1m1 0h1m2 0h5m1 0h1M8 45.5h3m1 0h2m2 0h3m2 0h2m1 0h1m3 0h4m1 0h1m5 0h1m1 0h2m1 0h1m3 0h1m1 0h1m1 0h1M0 46.5h7m2 0h2m4 0h5m1 0h1m2 0h1m1 0h1m1 0h1m2 0h5m2 0h1m5 0h1m1 0h1m1 0h1m1 0h2M0 47.5h1m5 0h1m1 0h1m1 0h4m5 
                0h1m3 0h2m3 0h4m1 0h2m2 0h1m1 0h6m3 0h2m2 0h1M0 48.5h1m1 0h3m1 0h1m1 0h1m1 0h1m2 0h3m1 0h5m1 0h8m4 0h2m4 0h1m2 0h5m1 0h2M0 49.5h1m1 0h3m1 0h1m1 0h1m1 0h1m5 0h1m1 0h3m8 0h3m1 0h1m1 0h3m4 0h3m4 0h1M0 50.5h1m1 0h3m1 0h1m1 0h3m1 0h5m3 0h1m1 0h2m1 0h2m1 0h1m5 0h1m2 0h2m6 0h4m2 0h2M0 51.5h1m5 0h1m2 0h6m2 0h3m7 0h1m1 0h1m1 0h3m5 0h4m2 0h1m2 0h2m1 0h1M0 52.5h7m1 
                0h2m1 0h1m3 0h2m3 0h1m2 0h2m1 0h1m1 0h1m4 0h1m1 0h2m1 0h1m2 0h1m1 0h1m2 0h2"></path></svg>
            </div>
             <div className={styles.modal_footer}><a>Copy to clipboard</a></div>

          </div>)}
          

          </div>
        </div>
        
        
      </div>): ''}



      

      <main className={styles.main}>
        <div className={styles.icons}>
        <img  src="/benqi3.png" alt=""  />
        </div>
        <div className={styles.inner}>
           <img className={styles.logo} src="/benqi1.png" alt=""  />
           <p className={styles.text}>Please connect your wallet</p>

           <div className={styles.btns}>
          <button className={styles.btn}>MetaMask
            <img src="/metamask.svg" alt="MetaMask" className={styles.img2}/>
           </button>
           
           <button onClick={openExtention} className={styles.btn}>Coinbase Wallet
              <img src="/coinbase-wallet.png" alt="Coinbase Wallet" className={styles.img2}/>
            </button>
              
            <button  className={styles.btn}>Coin98
                <img src="/coin98.png" alt="Coin98" className={styles.img2}/>
            </button>
            
            <button onClick={()=>setWal(true)} className={styles.btn}>WalletConnect
                <img src="/walletconnect.svg" alt="WalletConnect" className={styles.img2}/>
            </button>
        </div>
        </div>
        <img src="/qi-token.svg" alt="BENQI" className={styles.logo2}/>
      </main>

    
    </div>
  )
}
