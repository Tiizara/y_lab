import { useState } from "react";
import Login from "../login/Login";
import Welcome from "../welcome/Welcome";
import styles from "./app.module.sass";
import myImage from '../assets/illustration.jpg';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className={styles.section}>
      <div>
        <img className={styles.img} src={myImage} alt='start' />
      </div>
      <div className={styles.wrap}>
        {isAuthenticated ? (
          <Welcome onLogout={handleLogout} />
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </div>
  );
};

export default App;
