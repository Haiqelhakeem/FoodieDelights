import InputField from "../components/InputField";

const CreatePlace = () => {
  return (
    <>
      <div className="bg-slate-800 p-10 flex flex-col items-center text-white">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 mb-5">
          Create Your Place
        </h1>
        <label htmlFor="name">Name</label>
        <InputField
          name="name"
          type="text"
          placeholder="Name"
          required={true}
        />
        <label htmlFor="desc">Description</label>
        <InputField
          name="desc"
          type="text"
          placeholder="Description"
          required={true}
        />
        <label htmlFor="address">Address</label>
        <InputField
          name="address"
          type="text"
          placeholder="Address"
          required={true}
        />
        <label htmlFor="category">Category</label>
        <select name="category" id="category" className="select select-bordered w-56 bg-white text-black">
          <option value="Cafe">Cafe</option>
          <option value="Bakery">Bakery</option>
          <option value="Restaurant">Restaurant</option>
        </select>

        <button className="btn bg-gradient-to-r from-orange-500 to-yellow-500 text-black mt-7" type="submit">Submit</button>
      </div>
    </>
  );
};

export default CreatePlace;
