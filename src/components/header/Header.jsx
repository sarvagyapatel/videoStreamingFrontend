/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Button from "../button/Button";
import Input from "../input/Input";
import Logo from "../logo/Logo";
import singnInavatar from "./singnInavatar.png";
import { logOut } from "../../service/auth";
// eslint-disable-next-line no-unused-vars
function Header({ username, avatar }) {
  return (
    <div>
      <div className="flex flex-row justify-between mt-3">
        <div className="pl-2 -mt-2">
          <Logo className="h-14 w-14 " />
        </div>
        <div className="flex flex-row justify-between ">
          <div>
            <Input
              placeholder="Search"
              className=" w-96 h-10 px-4 shadow-lg rounded-l-full text-lg p-1 border-2 border-neutral-700 font-semibold"
            />
          </div>
          <div>
            <Button
              className=" w-12 h-10 font-semibold p-1 px-3 rounded-r-full text-white bg-neutral-700 text-lg"
              buttonText="Go"
            />
          </div>
        </div>
        <div className="w-fit flex flex-row justify-between gap-3">
          {username ? (
            <div className="w-full flex flex-row  justify-center items-center  rounded-full mr-2">
              <Link to="/user">
                <img
                  className="w-10 h-8 rounded-full ml-2"
                  src={avatar}
                  alt="avatar"
                />
              </Link>
              <Button
                className="w-fit h-10 p-1 px-3 text-blue-800 font-semibold"
                buttonText="SignOut"
                onClick={logOut}
              />
            </div>
          ) : (
            <div>
              <Link
                className="w-full flex flex-row  justify-center items-center  rounded-full mr-2"
                to="/login"
              >
                <img
                  className="w-10 h-8 rounded-full ml-2"
                  src={singnInavatar}
                  alt="avatar"
                />
                <Button
                  className="w-fit h-10 p-1 px-3 text-blue-800 font-semibold"
                  buttonText="SignIn"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
