import { Outlet } from "react-router-dom";
import ProductDetailPage from "./product-detail";

export default function ProductPage() {
  const toMyChild = 123123;

  return (
    <div className="product-container">
      <h1>Product Layout Page, Hello </h1>

      <hr />

      <ProductDetailPage momMessage={toMyChild} />

      {/* <Outlet /> */}
    </div>
  );
}
