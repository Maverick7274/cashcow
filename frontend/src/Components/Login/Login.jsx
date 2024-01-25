import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Utilities/Input";
import { UserContext } from "../../context/UserContext";
import axios from "axios";

function Login() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [toastMessage, setToastMessage] = useState("");

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/login", input);

      if (data.success == true) {
        setToastMessage(`${data.user.name} logged in successfully`);
        if (user === null) {
          setUser(data.user);
          navigate("/dashboard");
        }
      } else {
        setToastMessage(data.message);
      }
    } catch (err) {
      setToastMessage(err);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      {/* <div className="flex flex-col gap-5 text-center">
        <h1 className="text-4xl font-bold">Login</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      </div>
      <div className="flex justify-center items-center">
        { (toastMessage !== "") ?
        <div className="flex w-[50%] m-auto">
          <h2 className="text-[red] font-semibold text-[20px]">{toastMessage}</h2>
          <button onClick={() => { setToastMessage(""); }}>remove</button>
        </div>
        : null}
        <form onSubmit={submitHandler} className="sm:w-[30rem] lg:w-[50rem] flex flex-col gap-5">
          <Input label="Name" type="text" placeholder="Enter your Name Here" name="username" value={input.username} handleChange={handleChange} />
          <Input
            label="Email"
            type="email"
            placeholder="Enter your Email Here"
            name="email"
            value={input.email}
            handleChange={handleChange}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your Password Here"
            name="password"
            value={input.password}
            handleChange={handleChange}
          />

          <div className="flex flex-col gap-5 justify-center items-center">
            <div className="flex justify-center items-center w-full">
              <div className="w-full">
                <a className="link">Forgot Password?</a>
              </div>
            </div>

            <button className="btn btn-info w-full">Login</button>
          </div>
          <div className="divider">OR</div>
          <div className="flex justify-center items-center">
            <p>
              New Here? To create a new account :{" "}
              <Link to="/register" className="link">
                click here
              </Link>
            </p>
          </div>
        </form>
      </div> */}

      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8">
          <div className="md:pe-8 md:w-1/2 xl:pe-0 xl:w-5/12">
            <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight dark:text-gray-200">
              Log <span className="text-blue-600 dark:text-blue-500">In</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 my-4">
              Built on standard web technology, teams use Preline to build
              beautiful cross-platform hybrid apps in a fraction of the time.
            </p>

            <form onSubmit={submitHandler}>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium dark:text-white"
                >
                  <span className="sr-only">Email address</span>
                </label>
                <Input
                  type="email"
                  placeholder="Enter your Email Here"
                  name="email"
                  value={input.email}
                  handleChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium dark:text-white"
                >
                  <span className="sr-only">Password</span>
                </label>
                <Input
                  type="password"
                  placeholder="Enter your Password Here"
                  name="password"
                  value={input.password}
                  handleChange={handleChange}
                />
              </div>

              <div className="grid">
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="hidden md:block md:absolute md:top-0 md:start-1/2 md:end-0 h-full bg-[url('https://source.unsplash.com/random')] bg-no-repeat bg-center bg-cover"></div>
      </div>
    </div>
  );
}

export default Login;