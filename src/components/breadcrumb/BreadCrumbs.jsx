import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="breadcrumb">
      <Link to="/">Home</Link>

      {paths.map((item, index) => {
        const to = "/" + paths.slice(0, index + 1).join("/");

        return (
          <span key={to}>
            {" / "}
            <Link to={to}>{item.replace("-", " ")}</Link>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
