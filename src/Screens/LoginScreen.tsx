import { useNavigate } from "react-router-dom";
import type z from "zod";
import type { LoginSchema } from "../schemas/zodSchemas";
import { useForm, type SubmitHandler } from "react-hook-form";

type Login = z.infer<typeof LoginSchema>;

const LoginScreen = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Login>();

  const handleLogin: SubmitHandler<Login> = (data) => {
    console.log(data);
    // Handle login logic here
    navigate("/profile");
  };

  return (
    <div className="w-sm mx-4 my-10 flex flex-col gap-2 p-4">
      <h2 className="text-3xl mb-4">Signin to your ATS account</h2>
      <p className="text-sm text-gray-500 mb-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col gap-4"
      >
        <label className="floating-label">
          <input
            type="email"
            placeholder="Enter email address"
            className="input input-sm"
            {...register("email", { required: true })}
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
            {...register("password", { required: true })}
          />
          <span className="text-primary">
            Password <strong className="text-red-600">*</strong>
          </span>
        </label>
        <button className="btn btn-primary btn-sm">Login</button>
      </form>
    </div>
  );
};

export default LoginScreen;
