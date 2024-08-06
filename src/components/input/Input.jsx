import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  // eslint-disable-next-line react/prop-types
  { label, type = "text", className = "", placeholder = "Input..", ...props },ref) {
    const id = useId();
  return (
    <div className="w-fit h-fit">
      {
        label && (<label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>)
      }
      <input type={type} className={`${className}`} placeholder={placeholder}  ref={ref} {...props} id={id} />
    </div>
  );
});

export default Input;
