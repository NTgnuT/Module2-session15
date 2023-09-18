import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  KeyOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Modal } from "antd";
import "./header.css";

export default function Header() {
  const navigate = useNavigate();
  // Lấy thông tin user đã đăng nhập
  const userLogin = JSON.parse(localStorage.getItem("userLocal"));

  const handleLogout = () => {
    // Xóa dữ liệu khỏi local
    localStorage.removeItem("userLocal");
    // Chuyển hướng về trang chủ
    navigate("/");
  };

  // Hàm xử lý đăng xuất
  const handleConfirmLogout = () => {
    Modal.confirm({
      title: "Xác nhận",
      content: "Bạn có chắc chắn muốn đăng xuất ",
      onOk() {
        handleLogout();
      },
      cancelText: "Hủy",
      okText: "Đồng ý ",
    });
  };

  const items = [
    {
      key: "1",
      label: (
        <Link to={"/profile"}>
          <UserOutlined className="mr-1" />
          Thông tin cá nhân
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to={"/change-password"}>
          <KeyOutlined className="mr-1" />
          Đổi mật khẩu
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <a onClick={handleConfirmLogout}>
          <LogoutOutlined className="mr-1" />
          Đăng xuất
        </a>
      ),
    },
  ];
  return (
    <>
      <div className="w-full bg-orange-600 h-14 text-white flex items-center justify-between px-5">
        <div className="flex gap-4 items-center">
          <NavLink to="/">LOGO</NavLink>
          <NavLink to="/">Trang chủ</NavLink>
          <NavLink to="/list-product">Sản Phẩm</NavLink>
          <NavLink to="/cart">
            <ShoppingCartOutlined className="text-2xl relative" />
            <span className="bg-white px-2 rounded-xl text-black absolute">
              2
            </span>
          </NavLink>
        </div>
        <div className="flex gap-4 items-center">
          <NavLink to="/about">Giới thiệu</NavLink>
          <NavLink to="/contact">Liên hệ</NavLink>
          {userLogin !== null ? ( // khác null là có dữ liệu
            <>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomLeft"
                arrow
              >
                <Button className="border-none shadow-none text-white">
                  <div className="flex items-center gap-2">
                    <img
                      className="rounded-full"
                      src={userLogin.image}
                      alt="Ảnh"
                      width={26}
                      height={26}
                    />
                    {userLogin.userName}
                  </div>
                </Button>
              </Dropdown>
            </>
          ) : (
            <>
              <NavLink to="/register">Đăng ký</NavLink>
              <NavLink to="/login">Đăng nhập</NavLink>
            </>
          )}
        </div>
      </div>
    </>
  );
}
