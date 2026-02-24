import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email("Email noto‘g‘ri").required("Email majburiy"),

  password: yup
    .string()
    .min(6, "Kamida 6 ta belgi bo‘lishi kerak")
    .required("Parol majburiy"),
});

export const registerSchema = yup.object({
  name: yup
    .string()
    .min(3, "Username kamida 3 ta belgidan iborat bo‘lishi kerak")
    .required("Username majburiy"),

  email: yup
    .string()
    .email("Email noto‘g‘ri formatda")
    .required("Email majburiy"),

  password: yup
    .string()
    .min(7, "Password kamida 7 ta belgidan iborat bo‘lishi kerak")
    .required("Password majburiy"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwordlar bir xil emas")
    .required("Passwordni tasdiqlang"),
});
