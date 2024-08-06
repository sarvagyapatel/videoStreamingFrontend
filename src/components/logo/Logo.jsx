
import logo from './logo.png'

// eslint-disable-next-line react/prop-types
function Logo({image=logo, className="h-2 w-2 rounded-sm" }) {
  return (
    <div className={`${className}`}>
      <img
        className={`${className}`}
        src={image}
        alt="logo"
      />
    </div>
  );
}

export default Logo;
