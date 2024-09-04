import React from "react";
import styles from "./welcome.module.sass";

interface WelcomeProps {
  onLogout: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onLogout }) => {
  return (
    <div className={styles.welcome}>
      <h2 className={styles.title}>Welcome!</h2>
      <button className={styles.buttonLogout} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default Welcome;
