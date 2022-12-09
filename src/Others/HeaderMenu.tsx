import axios from "axios";
import { useEffect, useState } from "react";
import { HeaderItemData } from "../Editor/utils/types";
import { HeaderMenuItem } from "./HeaderMenuItem";

export function HeaderMenu() {
  const [menu_list, set_menu_list] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}categories/`,
    }).then((res) => set_menu_list(res.data));
  }, []);

  return (
    <div className="menu">
      {menu_list.map((item_data: HeaderItemData) => {
        return <HeaderMenuItem key={item_data.id} item_data={item_data} />;
      })}
    </div>
  );
}
