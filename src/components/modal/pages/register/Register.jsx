import useLoginForm from "../../hooks/useLoginForm";
import "./register.scss";

const Register = ({ onSuccess }) => {
  const { registerForm, mutationRegister } = useLoginForm(onSuccess);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = registerForm;

  const onSubmit = (data) => {
    const { confirmPassword, ...cleanData } = data;
    mutationRegister.mutate(cleanData);
  };

  return (
    <div className="register">
      <div className="register-form">
        <form
          action=""
          className="register-form-elements"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-inputs">
            <input type="text" placeholder="Username" {...register("name")} />
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}
          </div>
          <div className="form-inputs">
            <input
              type="email"
              placeholder="Enter your email address"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
          </div>
          <div className="form-inputs">
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </div>
          <div className="form-inputs">
            <input
              type="text"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-danger">{errors.confirmPassword.message}</p>
            )}
          </div>

          <div className="register-btn">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
