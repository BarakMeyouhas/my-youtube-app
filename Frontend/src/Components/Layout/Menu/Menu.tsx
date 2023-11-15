import { NavLink, useNavigate } from "react-router-dom";
import "./Menu.css";
import { useEffect, useState } from "react";
import { youtube } from "../../Redux/Store";
import { downloadCategoryAction } from "../../Redux/CategoriesReducer";

function Menu(): JSX.Element {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/v1/youtube/catList"
        );
        const data = await response.json();
        youtube.dispatch(downloadCategoryAction(data));
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="Menu">
      <h2>Main Menu</h2>
      <hr />
      <NavLink to="/">All Songs</NavLink>
      <br />
      <br />
      <NavLink to="/addSong">Add Song</NavLink>
      <br />
      <br />
      <NavLink to="/addCategory">Add Category</NavLink>
      <br />
      <br />
      <NavLink to="/search">Song Search</NavLink>
      <br />
      <br />
      <NavLink to="/favorites">Favorites</NavLink>
      <br />
      <br />
      <NavLink to="/about">About Us</NavLink>
      <hr />
      <div className="myCategories">
        <h3>Categories:</h3>
        <nav>
          <ul className="category-list">
            {youtube.getState().category.categories.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={`/category/${item.id}`}
                  onClick={() => navigate(`/category/${item.id}`)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
