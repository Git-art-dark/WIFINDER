import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";

import styles from "./LoginPage.module.css"

function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (login === "vova" && password === "vova") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userLogin", login);
      navigate("/main");
    } else {
      setError("Неверный логин или пароль");
      // Можно перенаправить на 404
      // navigate("/404");
    }
  };

  return (
    <>
      
      <NavBar childs="На главную" otherstyle={{padding: "10px"}} to="/"></NavBar>
      <div className={styles.container} >
        <h2>Вход в систему</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Логин"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              style={{ padding: "10px", margin: "10px", width: "200px" }}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: "10px", margin: "10px", width: "200px" }}
            />
          </div>
          <button type="submit" style={{ padding: "10px 20px" }}>
            Войти
          </button>
          <Link to={"/"}>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                margin: "10px",
                backgroundColor: "red",
              }}
            >
              На главную
            </button>
          </Link>
          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        </form>
      </div>
    </>
  );
}

export default LoginPage;
