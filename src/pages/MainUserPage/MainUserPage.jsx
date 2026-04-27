// pages/MainUserPage/MainUserPage.jsx
import { useNavigate } from "react-router-dom";

function MainUserPage() {
  const navigate = useNavigate();
  const userLogin = localStorage.getItem("userLogin");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userLogin");
    navigate("/");
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Добро пожаловать, {userLogin}!</h1>
      <p>Это защищённая страница</p>
      <button onClick={handleLogout} style={{ padding: "10px 20px" }}>
        Выйти
      </button>
    </div>
  );
}

export default MainUserPage;