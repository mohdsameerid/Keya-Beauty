import { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;

    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      {JSON?.stringify(loginData)}
      <h1>Login</h1>
      <div>
        <input
          type="name"
          placeholder="Enter name"
          name="name"
          onClick={handleInput}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          onClick={handleInput}
        />
      </div>
    </>
  );
};
export default Login;
