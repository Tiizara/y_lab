import { useState } from "react";
import { authenticateUser } from "../mockServer";
import styles from "./login.module.sass";

interface LoginProps {
  onLogin: (email: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setemail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    setLoading(true);
    const isAuthenticated = await authenticateUser(email, password);
    setLoading(false);
    if (isAuthenticated) {
      onLogin(email);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>Login to your Account</h2>
      <div>
        <label className={styles.label}>
          email:
          <input
            className={styles.input}
            type='text'
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label className={styles.label}>
          password:
          <input
            className={styles.input}
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button
        className={styles.buttonLoad}
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
