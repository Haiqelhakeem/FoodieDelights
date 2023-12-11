/* eslint-disable react/prop-types */
const InputField = (props) => {
  const { type, placeholder, name } = props;
  return (
    <div>
      <input
        name = {name}
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs mb-4 bg-white text-black"
      />
    </div>
  );
};

export default InputField;
