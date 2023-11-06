import { useState } from "react";
import axios from "axios";
import "./Login.css";
function Login() {
  const [phone, setPhone] = useState("");
  const [ism, setIsm] = useState("");
  function sendData(e) {
    e.preventDefault();
    axios.post("api url", {
      tel: phone,
      name: ism,
    }).then();
    alert(`Tel number ${phone} ismi ${ism}`);
    setIsm("");
    setPhone("");
  }
  return (
    <div className="login">
      <form action="">
        <h3>Ruyhatdan o'tish</h3>
        <label htmlFor="">Phone</label>
        <br />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <label htmlFor="">Ism</label>
        <br />
        <input
          type="text"
          value={ism}
          onChange={(e) => setIsm(e.target.value)}
        />
        <br />
        <br />
        <button onClick={sendData}>Submit</button>
      </form>
    </div>
  );
}

export default Login;
