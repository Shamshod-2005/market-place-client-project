import BlogPosts from "../components/blog-posts/BlogPosts";
import HomeHeader from "../components/home-header/HomeHeader";
import PromoSection from "../components/promo-section/PromoSection";
import ShopProducts from "../components/shop-products/ShopProducts";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <HomeHeader />

      <ShopProducts />

      <PromoSection />

      <BlogPosts />
    </div>
  );
};

export default Home;
