import ShopButton from "../../../shared/ui/atoms/buttons/ShopButton";
import "./home.scss";
import homeImg from "../../../assets/main-img.png";
import { useQuery } from "@tanstack/react-query";

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
        <div className="shop-categories">
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
        </div>
        <div className="products"></div>
      </div>
    </div>
  );
};

export default Home;
