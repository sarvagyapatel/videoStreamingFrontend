import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import Logo from "../logo/Logo";
import { login } from "../../service/auth";
import { useDispatch } from "react-redux";

function LogIn() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    setError("");
    try {
      dispatch(login(data));
      navigate('/')
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="w-fit max-w-md mx-auto p-5 rounded-lg shadow-lg bg-white text-gray-800 mt-10">
      <div className="flex justify-center mb-6">
        <Logo className="w-13 h-10 rounded-lg" />
      </div>
      <h2 className="text-2xl font-bold text-center text-gray-600">
        Sign in to your account
      </h2>
      <p className="mt-2 text-center text-base text-neutral-400">
        Don&apos;t have an account?&nbsp;
        <Link
          to="/signup"
          className="font-medium text-blue-700 hover:underline transition-all duration-200"
        >
          Sign Up
        </Link>
      </p>
      {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
        <Input
          placeholder="Enter your email"
          type="email"
          className="w-full px-4 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          {...register("email", {
            required: true,
            validate: {
              matchPattern: (value) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be valid",
            },
          })}
        />
        <Input
          placeholder="Enter your password"
          type="password"
          className="w-full px-4 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          {...register("password", { required: true })}
        />
        <Button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 font-semibold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Log In
        </Button>
      </form>
    </div>
  );
}

export default LogIn;
