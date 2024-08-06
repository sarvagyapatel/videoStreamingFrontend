/* eslint-disable react/prop-types */
import React, { useId } from "react";

const Button = React.forwardRef(function Button(
  { buttonText = "Submit", className = "", type = "Submit", ...props },
  ref
)
{
  const id = useId(); 
  return (
    <div className=" w-full flex justify-center items-center h-fit">
      <button className={`${className}`} type={type} ref={ref} id={id} {...props}>
        {buttonText}
      </button>
    </div>
  );
});

export default Button;
