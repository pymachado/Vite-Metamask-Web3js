import { useState } from 'react'
import './App.css'
import injectProvider from './injectProvider';

function App() {

  const [web3, setWeb3] = useState(undefined);
  const [accounts, setAccounts] = useState(["address connected"]);
  
  async function askToConnect() {
    const web3 = await injectProvider();
    const accounts = await web3.eth.getAccounts();

    setAccounts(accounts);
    setWeb3(web3)
  }

  
  return  (
      <div class="position-absolute top-50 start-50 translate-middle">
      <div class="input-group mb-3">
        <button class="btn btn-outline-secondary" type="button" id="button-addon1" onClick={askToConnect}>Connect</button>
        <input type="text" class="form-control" placeholder={accounts[0]}  aria-describedby="button-addon1" readOnly></input>
      </div>
    </div>
  )
}

export default App
