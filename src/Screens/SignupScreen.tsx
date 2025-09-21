import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SignupSchema } from "../schemas/zodSchemas";
import type z from "zod";
import DisplayError from "../utils/DisplayError";

type SignUp = z.infer<typeof SignupSchema>;

const SignupScreen = () => {
  const navigate = useNavigate();
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<SignUp>();

  const handleSignUp: SubmitHandler<SignUp> = (data) => {
    console.log(data);
    // Handle form submission logic here
    navigate("/profile");
  };

  return (
    <div className="w-sm mx-4 my-10 flex flex-col gap-2 p-4">
      <h2 className="text-3xl mb-4">Create your ATS account</h2>
      <form
        action="/profile"
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(handleSignUp)}
      >
        <label className="floating-label">
          <input
            type="text"
            placeholder="Enter full name"
            className="input input-sm"
            {...register("fullName", {
              required: "Full Name is required",
            })}
          />
          <span className="text-primary">
            Full Name <strong className="text-red-600">*</strong>
          </span>
          <DisplayError errors={errors} fieldName="fullName" />
        </label>
        <label className="floating-label">
          <input
            type="tel"
            placeholder="Enter phone number"
            className="input input-sm"
            {...register("phoneNumber", {
              required: "Phone number is required",
            })}
          />
          <span className="text-primary">
            Phone Number <strong className="text-red-600">*</strong>
          </span>
          <DisplayError errors={errors} fieldName="phoneNumber" />
        </label>
        <label className="floating-label">
          <input
            type="email"
            placeholder="Enter email address"
            className="input input-sm"
            {...register("email", { required: "Email is required." })}
          />
          <span className="text-primary">
            Email Address
            <strong className="text-red-600">*</strong>
          </span>
          <DisplayError errors={errors} fieldName="email" />
        </label>
        <label className="floating-label">
          <input
            type="password"
            placeholder="Enter password"
            className="input input-sm"
            {...register("password", { required: "Password is required." })}
          />
          <span className="text-primary">
            Password <strong className="text-red-600">*</strong>
          </span>
          <DisplayError errors={errors} fieldName="password" />
        </label>
        <label className="floating-label">
          <input
            type="text"
            placeholder="Enter company name"
            className="input input-sm"
            {...register("companyName")}
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
              value="yes"
              className="radio radio-primary radio-sm"
              defaultChecked
              {...register("isAgency", { required: true })}
            />
            <span>Yes</span>
          </label>
          <label className="label">
            <input
              type="radio"
              value="no"
              className="radio radio-primary radio-sm"
              {...register("isAgency", { required: true })}
            />
            <span>No</span>
            <DisplayError errors={errors} fieldName="isAgency" />
          </label>
        </fieldset>
        <button className="btn btn-primary btn-sm mt-16">Create Account</button>
      </form>
    </div>
  );
};

export default SignupScreen;
