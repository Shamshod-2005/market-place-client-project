import { isEmpty } from "lodash";
import { MdDeleteOutline } from "react-icons/md";
import { useCartProduct } from "../hooks/useCartProduct";
import img from "../../../assets/products/product1.png";
import "./shopcart.scss";
import { useState } from "react";

const CartProduct = ({ cartItem }) => {
  const {
    cartProducts,
    isLoading,
    error,
    removeToCart,
    addToCart,
    updateToCart,
  } = useCartProduct();

  if (isLoading) return <p>Loading cart...</p>;
  // if (error) return <p>Error loading cart</p>;

  //Order part

  return (
    <div>
      <h1>My Cart</h1>

      {isEmpty(cartProducts) ? (
        <p>Your cart is empty</p>
      ) : (
        <table className="table cart-table align-middle">
          <thead>
            <tr>
              <th>Products</th>
              <th>Price</th>
              <th className="text-center">Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {cartProducts.map((item) => {
              const price = item.product.price;
              const quantity = item.quantity;
              const total = price * quantity;

              return (
                <tr key={item._id}>
                  {/* Product */}
                  <td className="d-flex align-items-center gap-3">
                    <img
                      src={img}
                      alt={item.product.name}
                      className="cart-img"
                      width={55}
                      height={55}
                    />
                    <div>
                      <h6 className="mb-1">{item.product.name}</h6>
                      <small className="text-muted">
                        SKU: {item.product.sku}
                      </small>
                    </div>
                  </td>

                  {/* Price */}
                  <td>${price}</td>

                  {/* Quantity */}
                  <td className="text-center">
                    <div className="quantity-control">
                      <button
                        className="qty-btn btn btn-success"
                        onClick={() =>
                          updateToCart({
                            productId: item.product.id || item.product._id,
                            quantity: item.quantity - 1,
                          })
                        }
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>

                      <span className="p-2">{item.quantity}</span>

                      <button
                        className="qty-btn btn btn-success"
                        onClick={() =>
                          updateToCart({
                            productId: item.product.id || item.product._id,
                            quantity: item.quantity + 1,
                          })
                        }
                      >
                        +
                      </button>
                    </div>
                  </td>

                  {/* Total */}

                  <td className="text-success fw-semibold">
                    ${quantity * price}
                  </td>

                  {/* Delete */}
                  <td>
                    <button
                      className="delete-btn btn"
                      onClick={() =>
                        removeToCart({ productId: item.product.id })
                      }
                    >
                      <MdDeleteOutline size={25} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      <div className="cart-order">
        <div>
          <h2>Cart Totals</h2>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
