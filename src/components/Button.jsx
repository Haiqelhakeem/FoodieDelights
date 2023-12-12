/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Button = (props) => {
  const { value, link,} = props;
  return (
    <Link to ={link}>
      <button className={`btn hover:bg-orange-500 text-orange-500 hover:text-black w-full bg-black border-none font-bold`} type="submit">
        {value}
      </button>
    </Link>
  );
};

export default Button;
