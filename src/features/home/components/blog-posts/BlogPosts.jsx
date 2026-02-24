import React from "react";
import "./blog-posts.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import blog1 from "../../../../assets/01.png";
import blog2 from "../../../../assets/02.png";
import blog3 from "../../../../assets/03.png";
import blog4 from "../../../../assets/04.png";


const BlogPosts = () => {
  return (
    <div>
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

export default BlogPosts;
