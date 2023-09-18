import React from "react";
import { Button, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./../../../../firebase/firebaseConfig";

export default function Login() {
  const navigate = useNavigate();
  // Đăng nhập với API có sẵn

  // Đăng nhập với google
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((response) => {
        const userLocal = {
          user: response.user.email,
          userName: response.user.displayName,
          image: response.user.photoURL,
          userId: response.user.uid,
        };
        // Lưu thông tin lên local
        localStorage.setItem("userLocal", JSON.stringify(userLocal));

        // Chuyển hướng về trang home
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <form className="p-6 border rounded w-1/4">
          <h3 className="text-center">Đăng nhập</h3>

          <div className="mb-4">
            <label htmlFor="email">Email:</label>
            <Input
              status="error"
              id="email"
              className="mt-2"
              placeholder="Nhập địa chỉ email"
            />
            <div className="mt-1 text-red-400">Email không được để trống.</div>
          </div>

          <div className="mb-4">
            <label htmlFor="password">Mật khẩu:</label>
            <Input
              status="error"
              id="password"
              className="mt-2"
              placeholder="Nhập mật khẩu"
            />
            <div className="mt-1 text-red-400">
              Mật khẩu không được để trống.
            </div>
          </div>

          <div>
            <Button type="primary" className="w-full t-btn-primary">
              Đăng nhập
            </Button>
          </div>

          <div className="flex justify-between items-center mt-3 ">
            <Link to={"/"}>Quay lại</Link>
            <Link>Quên mật khẩu</Link>
          </div>

          <div className="text-center my-3">Hoặc</div>

          <div>
            <Button
              onClick={signInWithGoogle}
              className="w-full flex items-center justify-center gap-2 "
            >
              <img
                width={20}
                height={20}
                src="data:image/png;base64,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"
                alt=""
              />
              Đăng nhập với Google
            </Button>
          </div>

          <div className="text-center mt-2">
            Bạn chưa có tài khoản? <Link to={"/register"}>Đăng ký</Link>
          </div>
        </form>
      </div>
    </>
  );
}
