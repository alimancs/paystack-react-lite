import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PaystackButton } from "paystack-react-lite";


function App() {

  const onSuccess = (reference:any) => {
    console.log("Transaction success");
    console.log(reference);
  }

  const onClose = () => {
    console.log("Closed");
  }

  const config = {
  reference: new Date().getTime().toString(),
  email: 'user@example.com',
  amount: 2000,
  publicKey: 'pk_test_a137d402b5975716e89952a898aad2832c961d69',
  firstname: 'cool',
  lastname: 'story',
  onClose,
  onSuccess,
  /*split: { //if you want to use transaction split
        "type": "percentage",
        "bearer_type": "all",
        "subaccounts": [
            {
                "subaccount": "ACCT_mtl3xzwjfhcldkw",
                "share": 30
            },
            {
                "subaccount": "ACCT_y19ht107y44o294",
                "share": 20
            }
        ]
    }*/
};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <h1>Paystack react lite example</h1>
        <PaystackButton 
          { 
            ...config
          }
        >
          Paystack test button
        </PaystackButton>
      </div>
    </div>
  );
}

export default App;
