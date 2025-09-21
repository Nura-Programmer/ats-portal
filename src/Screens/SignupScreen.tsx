const SignupScreen = () => {
  return (
    <div className="w-sm mx-4 my-10 flex flex-col gap-2 p-4">
      <h2 className="text-3xl mb-4">Create your ATS account</h2>
      <form action="/profile" className="flex flex-col gap-4">
        <label className="floating-label">
          <input
            type="text"
            placeholder="Enter full name"
            className="input input-sm"
          />
          <span className="text-primary">
            Full Name <strong className="text-red-600">*</strong>
          </span>
        </label>
        <label className="floating-label">
          <input
            type="tel"
            placeholder="Enter phone number"
            className="input input-sm"
          />
          <span className="text-primary">
            Phone Number <strong className="text-red-600">*</strong>
          </span>
        </label>
        <label className="floating-label">
          <input
            type="email"
            placeholder="Enter email address"
            className="input input-sm"
          />
          <span className="text-primary">
            Email Address
            <strong className="text-red-600">*</strong>
          </span>
        </label>
        <label className="floating-label">
          <input
            type="password"
            placeholder="Enter password"
            className="input input-sm"
          />
          <span className="text-primary">
            Password <strong className="text-red-600">*</strong>
          </span>
        </label>
        <label className="floating-label">
          <input
            type="text"
            placeholder="Enter company name"
            className="input input-sm"
          />
          <span className="text-primary">Company Name</span>
        </label>

        <fieldset className="fieldset flex gap-4">
          <legend className="fieldset-legend">
            Are you an Agency?<strong className="text-red-600">*</strong>
          </legend>
          <label className="label">
            <input
              type="radio"
              name="isAgency"
              className="radio radio-primary radio-sm"
              defaultChecked
            />
            <span>Yes</span>
          </label>
          <label className="label">
            <input
              type="radio"
              name="isAgency"
              className="radio radio-primary radio-sm"
            />
            <span>No</span>
          </label>
        </fieldset>
        <button className="btn btn-primary btn-sm mt-16">Create Account</button>
      </form>
    </div>
  );
};

export default SignupScreen;
