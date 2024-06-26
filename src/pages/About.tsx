import { menuList} from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/menu.css";

function Menu() {
  return (
    <div className="menu">
    <h1 className="menuTitle"> Roster </h1>
    <div className="aboutRules">
      <p>
      Power Slap matches (each a “Match”) consist of two unarmed 
      combatants (each a “Participant”).
      </p>
      <p>The Promoter determines the 
      number of rounds per Match, but no Match may exceed ten (10) rounds.
      Participants must be at least 18 years of age.</p>
    </div>
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