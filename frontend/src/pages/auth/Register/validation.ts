import { z } from "zod";

export const registerSchema = z.object({
  fullname: z.string().min(1, "Họ tên bắt buộc phải có "),
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
  phone: z
    .string()
    .transform((val) => val.replace(/\s+/g, ""))
    .refine((val) => /^[0-9]+$/.test(val), {
      message: "Số điện thoại chỉ được chứa số",
    })
    .refine((val) => val.length >= 9 && val.length <= 11, {
      message: "Số điện thoại không hợp lệ",
    }),
  terms: z.boolean().refine((val) => val === true, {
    message: "Bạn phải đồng ý với điều khoản sử dụng",
  }),
});
export type SignUpFormValues = z.infer<typeof registerSchema>;
