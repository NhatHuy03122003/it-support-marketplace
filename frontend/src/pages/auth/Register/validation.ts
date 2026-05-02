import { object, ref, string } from "yup";

const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

export const validationSchema = object().shape({
  fullname: string().required("Họ tên không được bỏ trống").trim(),
  email: string()
    .required("Email không được để trống")
    .trim()
    .matches(emailRegex, "Email không đúng định dạng"),
  password: string().trim().required("Mật khẩu không được bỏ trống"),
  confirmPassword: string()
    .trim()
    .required("Xác nhận mật khẩu không thể bỏ trống")
    .oneOf([ref("password")], "Phải trùng khớp với mật khẩu đã nhập"),
});
