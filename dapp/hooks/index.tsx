import { useEffect, useRef, useState } from "react";
import Web3 from "web3";
import { MINT_NFT_ABI, MINT_NFT_CONTRACT } from "../web3.config";

export const useObserve = () => {
  const [isObserved, setIsObserved] = useState<boolean>(false);

  const dom = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const observe = () => {
    if (dom.current) {
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) setIsObserved(true);
        else setIsObserved(false);
      });
      observer.current.observe(dom.current);

      return () => observer.current && observer.current.disconnect;
    }
  };

  useEffect(() => {
    observe();
  }, [dom]);

  return { isObserved, dom };
};

export const useWallet = () => {
  const [account, setAccount] = useState<string>("");

  const getAccount = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        setAccount(accounts[0]);
      } else {
        alert("Install MetaMask!!!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { account, getAccount };
};

export const useWeb3 = () => {
  const [web3, setWeb3] = useState<any>();
  const [mintContract, setMintContract] = useState<any>();

  useEffect(() => {
    if (!window.ethereum) return;

    setWeb3(new Web3(window.ethereum));
  }, []);
  useEffect(() => {
    if (!web3) return;

    setMintContract(new web3.eth.Contract(MINT_NFT_ABI, MINT_NFT_CONTRACT));
  }, [web3]);

  return { web3, mintContract };
};
