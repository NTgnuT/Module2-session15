import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Pagination } from "antd";
import Header from "../../../../component/user/header/Header";

export default function ListProduct() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  // Phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);

  // Tính toán chỉ mục sản phẩm bắt đầu và chỉ mục sản phẩm kết thúc
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedProducts = products.slice(startIndex, endIndex);

  // Xử lý sự kiện khi thay đổi trang
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  //goi API lay ra danh sach tat ca category
  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error));
  }, []);

  //lay ra id cua category
  const getCategoryId = (id) => {
    setCategoryId(id);
  };

  // Gọi API lấy thông tin tất cả sản phẩm
  const loadDataProduct = () => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        // Nếu không có category
        if (categoryId === 0) {
          setProducts(response.data);
        } else {
          const listProduct = response.data.filter(
            (product) => product.category_id === categoryId
          );
          // console.log(listProduct);
          setProducts(listProduct);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadDataProduct();
  }, [categoryId]);

  return (
    <>
      <Header />
      <div className="p-4 flex gap-8">
        <div className="w-1/5 border rounded shadow-md h-screen">
          <ul>
            <li
              style={
                categoryId === 0
                  ? { backgroundColor: "#EA580C", color: "#fff" }
                  : {}
              }
              onClick={() => setCategoryId(0)}
              className="p-3 hover:bg-slate-100 cursor-pointer"
            >
              Xem tất cả sản phẩm
            </li>
            {categories.map((cat) => (
              <li
                key={cat.category_id}
                onClick={() => getCategoryId(cat.category_id)}
                style={
                  categoryId === cat.category_id
                    ? { backgroundColor: "#EA580C", color: "#fff" }
                    : {}
                }
                className="p-3 hover:bg-slate-100 cursor-pointer"
              >
                {cat.category_name}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-4/5 flex flex-wrap gap-6 justify-center bg-orange-600 py-4">
          {displayedProducts.map((p) => (
            <div key={p.id} className="w-1/5 border p-3 rounded bg-white">
              <img src={p.image} alt="" />
              <h3 className="text-center py-3">{p.product_name}</h3>
              <div className="text-center">
                <span>{p.price}</span>
              </div>
              <div className="text-center">
                <Button type="primary" className="t-btn-primary mt-3">
                  Thêm vào giỏ hàng
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={products.length}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
}
