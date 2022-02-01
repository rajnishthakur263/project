/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faChevronDown,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Model from "../components/model";

const handleCenterDiv = (key) => {
  switch (key) {
    case 0:
      return { background: "#efefef", color: "black" };
    case 1:
      return { background: "#efefef", color: "black" };
    case 2:
      return { background: "#efefef", color: "black" };
    case 3:
      return { background: "#efefef", color: "black" };

    default:
      return {};
  }
};

export default function Home() {
  const [centerDiv, setCenterDiv] = useState(0);
  const [isModelOpen, setIsModelOpen] = useState(true);
  return (
    <div className={styles.container}>
      <div className={styles.Navbar}>
        <div className={styles.logo}>
          <img src='./logo.jpeg' alt='logo' />
        </div>
        <ul className={styles.centerNav}>
          <li
            onClick={() => setCenterDiv(0)}
            style={centerDiv === 0 ? handleCenterDiv(centerDiv) : null}
          >
            Swap
          </li>
          <li
            onClick={() => setCenterDiv(1)}
            style={centerDiv === 1 ? handleCenterDiv(centerDiv) : null}
          >
            Pool
          </li>
          <li
            onClick={() => setCenterDiv(2)}
            style={centerDiv === 2 ? handleCenterDiv(centerDiv) : null}
          >
            Vote
          </li>
          <li
            onClick={() => setCenterDiv(3)}
            style={centerDiv === 3 ? handleCenterDiv(centerDiv) : null}
          >
            Charts
          </li>
        </ul>
        <div className={styles.dropdownContainer}>
          <div className={styles.dropdownContainer_Child}>
            <div className={styles.drodown}>
              <p>dropdown </p>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ fontSize: "12px" }}
                size={"sm"}
              />
            </div>
            <div
              className={styles.connectBtn}
              onClick={() => setIsModelOpen(true)}
            >
              <p>Connect Wallet</p>
            </div>
            <div className={styles.dotContainer}>
              <FontAwesomeIcon
                icon={faEllipsisH}
                style={{ fontSize: "20px" }}
                size={"sm"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.parent_Center_div_container}>
        <div className={styles.center_div_container}>
          <div className={styles.center_div_top_container}>
            <p>Swap</p>
            <FontAwesomeIcon
              icon={faCog}
              style={{ fontSize: "20px", cursor: "pointer" }}
              size={"sm"}
            />
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputContainer_input1}>
              <input placeholder='0.0' />
            </div>
            <div className={styles.inputContainer_input2}>
              <input placeholder='0.0' />
            </div>
          </div>
          <div className={styles.connect_btn_container}>
            <button className={styles.Connect_btn}>Connect Wallet</button>
          </div>
        </div>
      </div>
      <div
        className={styles.model_container}
        style={!isModelOpen ? { visibility: "hidden" } : null}
      >
        <Model setModel={setIsModelOpen} />
      </div>
    </div>
  );
}
