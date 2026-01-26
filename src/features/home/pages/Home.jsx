import ShopButton from "../../../shared/ui/atoms/buttons/ShopButton";
import "./home.scss";
import homeImg from "../../../assets/main-img.png";
import { useQuery } from "@tanstack/react-query";
import { products } from "../../../data/products";
import ProductCard from "../../../components/ProductCard";
import { FaArrowRightLong } from "react-icons/fa6";
import promoImg1 from "../../../assets/promo-img1.png";
import promoImg2 from "../../../assets/promo-img2.png";
import blog1 from "../../../assets/01.png";
import blog2 from "../../../assets/02.png";
import blog3 from "../../../assets/03.png";
import blog4 from "../../../assets/04.png";

const Home = () => {
  const fetchCategories = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/category`,
    );
    return data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const categories = data?.categories || data || [];
  return (
    <div className="home">
      <div className="home-header">
        <div className="home-title">
          <span>WELCOME TO GREENSHOP</span>
          <h1>
            LET'S MAKE A <br /> BETTER <span>PLANET</span>
          </h1>
          <p>
            We are an online plant shop offering a wide range of cheap and
            trently plants. Use our plants to create an unique Urban Jungle.
            Prder your favorite plantrs!
          </p>

          <ShopButton text="SHOP NOW" />
        </div>
        <div className="home-img">
          <img src={homeImg} alt="Main Image" />
        </div>
      </div>
      <div className="shop-products">
        <h1>Products</h1>

        {/* <div className="shop-categories">
          <div className="categories">
            <h5>Categories</h5>

            <ul>
              {!isLoading &&
                !isError &&
                categories.map((category) => (
                  <li>
                    <a key={category.id} href="">
                      {category.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div> */}

        <div className="products">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>

      <div className="promo-section">
        <div className="promo-card">
          <div className="promo-img">
            <img src={promoImg1} alt="Promo Image 1" />
          </div>
          <div className="promo-content">
            <h5>
              SUMMER CACTUS <br /> & SUCCULENTS
            </h5>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trendy plants
            </p>
            <ShopButton text="Find More  " icon={<FaArrowRightLong />} />
          </div>
        </div>
        <div className="promo-card">
          <div className="promo-img">
            <img src={promoImg2} alt="Promo Image 1" />
          </div>
          <div className="promo-content">
            <h5>
              SUMMER CACTUS <br /> & SUCCULENTS
            </h5>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trendy plants
            </p>
            <ShopButton text="Find More  " icon={<FaArrowRightLong />} />
          </div>
        </div>
      </div>

      <div className="blog-posts">
        {/* <h3>Our Blog Posts</h3>
        <p>We are an online offering a wide range of cheap and trendy plants</p> */}
        <div className="blogpost-card">
          <img src={blog1} alt="Blog Post 1" />
          <div className="card-content">
            <span>September 12 I Read in 6 minutes</span>
            <h4>Cactus & Succulent Care Tips</h4>
            <p>Cacti are succulents are easy plants for any home or patio</p>
            <a href="">
              Read More <FaArrowRightLong />
            </a>
          </div>
        </div>
        <div className="blogpost-card">
          <img src={blog2} alt="Blog Post 1" />
          <div className="card-content">
            <span>September 12 I Read in 6 minutes</span>
            <h4>Cactus & Succulent Care Tips</h4>
            <p>Cacti are succulents are easy plants for any home or patio</p>
            <a href="">
              Read More <FaArrowRightLong />
            </a>
          </div>
        </div>
        <div className="blogpost-card">
          <img src={blog3} alt="Blog Post 1" />
          <div className="card-content">
            <span>September 12 I Read in 6 minutes</span>
            <h4>Cactus & Succulent Care Tips</h4>
            <p>Cacti are succulents are easy plants for any home or patio</p>
            <a href="">
              Read More <FaArrowRightLong />
            </a>
          </div>
        </div>
        <div className="blogpost-card">
          <img src={blog4} alt="Blog Post 1" />
          <div className="card-content">
            <span>September 12 I Read in 6 minutes</span>
            <h4>Cactus & Succulent Care Tips</h4>
            <p>Cacti are succulents are easy plants for any home or patio</p>
            <a href="">
              Read More <FaArrowRightLong />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
