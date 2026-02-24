import useLoginForm from "../../hooks/useLoginForm";
import "./login.scss";

const LoginForm = ({ onSuccess }) => {
  const { form, mutation } = useLoginForm(onSuccess);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="login">
      <div className="login-form">
        <form onSubmit={handleSubmit(onSubmit)} className="login-form-elements">
          <div className="form-inputs">
            <input type="email" placeholder="Email" {...register("email")} />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="form-inputs">
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div className="login-btn">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
