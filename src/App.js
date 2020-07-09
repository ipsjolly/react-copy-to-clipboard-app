import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './App.css';

function App() {

  const [copied, setCopied] = useState(false);
  const couponValue = 'FREAKYDISCOUNT 50%';


  return (
    <div className="App">

      <h4>Today's Lucky Coupon</h4>

      <div className={copied ? 'lucky-coupon coupon-applied' : 'lucky-coupon'} >
        <div className="lucky-coupon-code">{couponValue}</div>
        {
          copied ? <div className="coupon-copied">Copied!</div>
            :
            <CopyToClipboard text={couponValue} onCopy={() => setCopied(true)}>
              <div className="copy-code">✂️</div>
            </CopyToClipboard>
        }

      </div>

    </div >
  );
}

export default App;
