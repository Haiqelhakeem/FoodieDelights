import Button from "../components/Button";
import InputField from "../components/InputField";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="hero min-h-screen flex items-center justify-center bg-white" style={{ backgroundImage: ""}}>
      <div className="border border-white rounded-3xl bg-orange-500 p-10 flex flex-col my-20 mx-auto w-full md:w-1/3">
        <h1 className="text-white text-3xl font-bold mb-3">Welcome Back!</h1>
        <p className="text-white text-sm">Please fill your credentials to use our website</p>
        <InputField name="name" type="email" placeholder="Email" />
        <InputField type="password" placeholder="Password" />
        <Button value="Login" />
        <p className="text-white text-sm mt-3">Don&apos;t have an account?</p>
        <Link className="text-yellow-300 text-sm font-bold text-decoration-underline" to="/Hero">Sign Up here</Link>
      </div>
    </div>
  );
};

export default LoginPage;
