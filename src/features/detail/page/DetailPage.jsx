import { useParams } from "react-router-dom";
import image from "../../../assets/shop/image.png";
import img1 from "../../../assets/shop/img1.png";
import img2 from "../../../assets/shop/img2.png";
import img3 from "../../../assets/shop/img3.png";
import img4 from "../../../assets/shop/img4.png";
import { useDetail } from "../hooks/useDetail";
import "./detail.scss";
import ShopButton from "../../../shared/ui/atoms/buttons/ShopButton";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { Tabs } from "react-bootstrap";
import { Tab } from "bootstrap";

const DetailPage = () => {
  const { id } = useParams();
  const { data: product, isLoading, error } = useDetail(id);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading product</p>;

  return (
    <div className="shop-page">
      <div className="shop-header">
        <div className="shop-page-img">
          <div className="column-images">
            <div>
              <img src={img2} alt="" />
            </div>
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <img src={img3} alt="" />
            </div>
            <div>
              <img src={img4} alt="" />
            </div>
          </div>
          <div className="">
            <img src={image} alt="" />
          </div>
        </div>

        <div className="product-details">
          <div className="">
            <h3>{product?.name}</h3>
            <p>${product?.price}</p>
          </div>

          <div className="line"></div>

          <div className="">
            <h6>Short Description:</h6>
            <span>{product?.description}</span>
          </div>

          <div className="">
            <ShopButton text={"ADD TO CART"} />
          </div>

          <p className="category">Categories: {product?.category?.name}</p>

          <div className="share-product">
            <h6>Share this Products: </h6>
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <MdOutlineMail />
          </div>
        </div>
      </div>

      <div className="shop-tab-section">
        <Tabs
          defaultActiveKey="description"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="description" title="Product Description">
            <p>{product?.description}</p>
          </Tab>
          <Tab eventKey="reviews" title={`Review (${product?.reviews?.length})`}>
            {product?.reviews?.length > 0 ? (
              product.reviews.map((review) => (
                <div key={review.id} className="review">
                  <p>
                    <h6>Comment:</h6> {review.comment}
                  </p>
                  <p>Rating: {review.rating}</p>
                  <hr />
                </div>
              ))
            ) : (
              <p>No reviews yet</p>
            )}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default DetailPage;
