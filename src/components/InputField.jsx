const InputField = (props) => {
  const { type, placeholder, name } = props;
  return (
    <div>
      <input
        name = {name}
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs my-4 bg-white"
      />
    </div>
  );
};

export default InputField;
