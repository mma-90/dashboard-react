import { Link } from "react-router-dom";
import Table from "../../components/Table";
import "../../styles/page/product/products.scss";
import { productRows } from "../../dummyDate";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts, deleteProduct } from "../../redux/apiCalls";

const Products = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleDelete = (_, id) => {
    deleteProduct(dispatch, { id });
    console.log(products);
  };

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  return (
    <div className="products">
      <div className="container box">
        <div className="products__titleContainer">
          <h2 className="box__title">Products</h2>

          <div style={{ display: "flex", gap: "2rem" }}>
            <Link to="/product/new" className="link">
              <button className="btn btn-primary">create</button>
            </Link>
            {/* <button className="btn btn-danger">delete</button> */}
          </div>
        </div>

        <Table type="product" rows={products} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Products;
