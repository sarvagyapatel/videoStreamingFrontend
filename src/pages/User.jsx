import { useEffect, useState } from "react";
import { currentUser as user } from "../service/auth";
import Logo from "../components/logo/Logo";

function User() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    try {
      user().then((response) => {
        setUserData(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="w-full h-full flex flex-wrap items-center justify-center">
      <div className="w-full h-full flex justify-center items-center">
        <div className="relative w-full h-64 flex  items-center">
          <div className="absolute w-11/12 h-full left-24 flex justify-center">
            <Logo
              image={userData.coverImage}
              className="w-11/12 h-64 rounded-3xl"
            />
          </div>
          <div className="relative top-1/4 left-48 w-96 h-64 ">
            <Logo
              image={userData.avatar}
              className="rounded-full shadow-2xl w-48 h-48"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
