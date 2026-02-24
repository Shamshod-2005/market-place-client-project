import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/AuthContext";
import { login, logout } from "../api/auth";
import { loginSchema, registerSchema } from "../schema/auth.schema";
import { register } from "../pages/register/api/register";

const useLoginForm = (onSuccess) => {
  const schema = loginSchema;

  const { isAuth, loginAuth, logoutAuth } = useContext(AuthContext);

  const form = useForm({
    resolver: yupResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: (data) => {
      return login(data);
    },
    onSuccess: (data) => {
      toast.success("Login successful");
      loginAuth(data.user);
      onSuccess();
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Login failed");
    },
  });

  //--------------------------------------------------------------------------------
  const logoutMutation = useMutation({
    mutationFn: () => {
      return logout();
    },
    onSuccess: (data) => {
      toast.success("Logout successful");
      logoutAuth();
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Logout failed");
    },
  });

  //---------------------------------------------------------------------------------

  const registerForm = useForm({
    resolver: yupResolver(registerSchema),
  });

  const mutationRegister = useMutation({
    mutationFn: (data) => {
      return register(data);
    },
    onSuccess: (data) => {
      toast.success("Register successful");
      onSuccess();
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Register failed");
    },
  });

  return {
    form,
    registerForm,
    mutation,
    mutationRegister,
    logoutMutation,
  };
};

export default useLoginForm;
