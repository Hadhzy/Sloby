import KeyboardArrowDownIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";
import { HeaderItemData } from "../Editor/utils/types";

export function HeaderMenuItem({ item_data }: { item_data: HeaderItemData }) {
  return (
    <div className="menu-item">
      <Link className="off-link-dec" to={`categories/${item_data.url}`}>
        <div className="header-menu-items">{item_data.title.toUpperCase()}</div>
      </Link>
      {item_data.items && <KeyboardArrowDownIcon />}

      <Popup item_data={item_data} />
    </div>
  );

  function Popup({ item_data }: { item_data: HeaderItemData }) {
    return (
      <>
        {item_data.items && (
          <div className="popup-menu">
            {item_data.items.map((i: string) => (
              <div key={i} className="popup-items">
                <Link
                  to={`/categories/${item_data.url}/${i.toLowerCase().replaceAll(" ", "-")}`}
                  className="popup-items off-link-dec"
                >
                  {i}
                </Link>
              </div>
            ))}
          </div>
        )}
      </>
    );
  }
}
