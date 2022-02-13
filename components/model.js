/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext } from "react";
import { ModelContext } from "../utils/model";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faInfoCircle,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import styled from "./model.module.css";
import SemiModel from "./semiModel";

const list = [
  {
    id: 0,
    text: "Metamask",
    imageUrl: "./metamask.png",
  },
  {
    id: 1,
    text: "WalletConnect",
    imageUrl: "./walletConnect.jpeg",
  },
  {
    id: 3,
    text: "Coinbase Wallet",
    imageUrl: "./coinbase.png",
  },
  {
    id: 4,
    text: "ledger",
    imageUrl: "ledger.png",
  },
];

const Model = ({ setModel }) => {
  const [openSemiModel, setOpenSemiModel] = useState({
    shouldOpen: false,
    imageUrl: "",
    modelTitle: "",
  });
  const { Closestate, setCloseState } = useContext(ModelContext);

  const notify = () =>
    toast.warn("Please connect your wallet first!", {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const CloseModelHandler = () => {
    if (Closestate) {
      setModel(false);
      return;
    }
    return toast.warn("Please connect your wallet first!", {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className={styled.model}>
      <div className={styled.model_header}>
        <p>Connect to wallet</p>
        <FontAwesomeIcon
          icon={faTimes}
          style={{ fontSize: "20px", cursor: "pointer" }}
          onClick={CloseModelHandler}
          size={"sm"}
        />
      </div>
      <div className={styled.termAndCondition_container}>
        <p>
          By connecting a wallet, you agree to Uniswap Labs’{" "}
          <span style={{ color: "rgb(188, 0, 90)" }}>Terms of Service </span>
          and acknowledge that you have read and understand the Uniswap{" "}
          <span style={{ color: "rgb(188, 0, 90)" }}>Protocol Disclaimer.</span>
        </p>
      </div>
      <ul className={styled.listParent}>
        {list.map((item) => (
          <div
            key={item.id}
            className={styled.listItem}
            onClick={() =>
              setOpenSemiModel({
                shouldOpen: true,
                imageUrl: item.imageUrl,
                modelTitle: item.text,
              })
            }
          >
            <p>{item.text}</p>
            <img src={item.imageUrl} alt={item.text} />
          </div>
        ))}
      </ul>
      <div className={styled.model_footer}>
        <div className={styled.Icon_container_footer}>
          <FontAwesomeIcon
            icon={faInfoCircle}
            style={{ fontSize: "20px" }}
            onClick={() => setModel(false)}
            size={"sm"}
          />
          <p style={{ marginLeft: "6px" }}>How this app uses APIs</p>
        </div>
        <FontAwesomeIcon
          icon={faArrowRight}
          style={{ fontSize: "20px" }}
          // onClick={() => setModel(false)}
          size={"sm"}
        />
      </div>
      <SemiModel
        modelTitle={openSemiModel.modelTitle}
        setshow={setOpenSemiModel}
        show={openSemiModel.shouldOpen}
        imageUrl={openSemiModel.imageUrl}
      />
      <ToastContainer />
    </div>
  );
};

export default Model;
