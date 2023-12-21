import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://foodie-delights-api.vercel.app/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful");
      } else {
        alert(`Registration failed: ${data.error}`);
      }
    } catch (error) {
      console.error("Registration error:", error.message);
      alert("Registration failed");
    }
  };

  return (
    <div
      className="hero min-h-screen flex items-center justify-center bg-white"
      style={{
        backgroundImage:
          "url(https://source.unsplash.com/1920x1080?restaurant)",
      }}
    >
      <div className="rounded-3xl backdrop-blur-lg p-10 flex flex-col my-20 mx-10 w-full md:w-1/3">
        <h1 className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent text-4xl font-bold -mt-16 mb-3">
          Foodie Delights
        </h1>
        <h2 className="text-white text-4xl font-bold mb-3">
          Sign Up Your Account!
        </h2>
        <p className="text-white text-sm mb-3">
          Please fill your credentials to use our website
        </p>
        <form action="">
          <InputField
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button value="Login" link="/home" onClick={handleSubmit} />
        </form>
        <p className="text-white text-sm mt-3">Already have an account?</p>
        <Link
          to="/"
          className="text-yellow-300 text-sm font-bold hover:underline"
        >
          Sign in here
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
