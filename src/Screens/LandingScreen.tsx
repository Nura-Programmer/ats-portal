const LandingScreen = () => {
  return (
    <div className="w-sm mx-4 my-10 flex flex-col justify-end gap-2 p-4">
      <h1 className="text-lg font-bold">Welcome to ATS</h1>
      <p className="text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
      <button className="btn btn-sm btn-block btn-primary border-none">
        Create Account
      </button>
      <button className="btn btn-sm bg-gray-400 text-gray-900 border-none mb-8 my-2">
        Already Registered? Login
      </button>
    </div>
  );
};

export default LandingScreen;
