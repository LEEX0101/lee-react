import { menuList} from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/menu.css";

function Menu() {
  return (
    <div className="menu">
    <h1 className="menuTitle"> Roster </h1>
      <div className="menuList">
        {menuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
