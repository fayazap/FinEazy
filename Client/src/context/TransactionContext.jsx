import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants.js";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.web3Provide(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  console.log({
    provider,
    signer,
    transactionContract,
  });
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState();

  const checkIfWalletIsConnected = async () => {

    try {
        if (!ethereum) return alert("Please Install Metamask");

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if(accounts.length) {
        setCurrentAccount(accounts[0]);

        //getAllTransactions();
    }
    else{
        console.log("no accounts found");
    }
        
    } catch (error) {
        console.log(error);

      throw new Error("No ethereum Object");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please Install Metamask");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum Object");
    }
  };

  const sendTransaction = aync () => {
    try {
      if (!ethereum) return alert("Please Install Metamask");

      
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum Object");
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount }}>
      {children}
    </TransactionContext.Provider>
  );
};
