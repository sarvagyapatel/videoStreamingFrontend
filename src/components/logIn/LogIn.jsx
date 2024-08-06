import { Link, useNavigate } from "react-router-dom";
import Button from "../button/Button";
import Input from "../input/Input";
import { useForm } from "react-hook-form";
import Logo from "../logo/Logo";
import { login as loginHook } from "../../service/auth";
import { useState } from "react";

function LogIn() {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("")

  const login = async (data) => {
    setError("");
    try {
       const response = await loginHook(data);
       console.log(response);
       navigate("/")
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center p-5 rounded-lg shadow-lg border-2 border-white gap-2">
      <div className="mb-2 flex justify-center">
        <span className="inline-block w-full max-w-[100px]">
          <Logo className="w-13 h-10 rounded-lg" />
        </span>
      </div>
      <h2 className="text-center text-gray-600 text-2xl font-bold leading-tight">
        Sign in to your account
      </h2>
      <p className="mt-2 text-center text-base text-black/60">
        Don&apos;t have any account?&nbsp;
        <Link
          to="/signup"
          className="font-medium text-primary transition-all duration-200 text-blue-700 hover:underline"
        >
          Sign Up
        </Link>
      </p>
      {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

      <form onSubmit={handleSubmit(login)}>
        <div className="space-y-5">
          <Input
            placeholder="Enter your email"
            type="email"
            className="px-3 py-2 shadow-lg rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
            {
              // ref will be triggered here to give referece of the vlaues of the feild
              ...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })
            }
          />
          <Input
            placeholder="Enter your password"
            type="password"
            className="px-3 py-2 shadow-lg rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
            {
              // ref will be triggered here to give referece of the vlaues of the feild
              ...register("password", {
                required: true,
              })
            }
          />
          <Button
            type="submit"
            className="w-full text-center border-2 text-white shadow-lg font-semibold p-1 border-blue-700 bg-blue-700 hover:bg-blue-800 rounded-lg"
          />
        </div>
      </form>
    </div>
  );
}

export default LogIn;
