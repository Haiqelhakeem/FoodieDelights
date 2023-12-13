import Button from "../components/Button";
import InputField from "../components/InputField";
import { Link } from "react-router-dom";

const LoginPage = () => {
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
        <h2 className="text-white text-4xl font-bold mb-3">Welcome Back!</h2>
        <p className="text-white text-sm mb-3">
          Please fill your credentials to use our website
        </p>
        <InputField name="email" type="email" placeholder="Email" required={true} />
        <InputField name="password" type="password" placeholder="Password" />
        <Button value="Login" link="/home" />
        <p className="text-white text-sm mt-3">Don&apos;t have an account?</p>
        <Link
          to="/register"
          className="text-yellow-300 text-sm font-bold hover:underline"
        >
          Sign Up here
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
