import React, { useState } from "react";
import Button from "../button/Button";
import menuIcon from "../../../assets/images/svg/icon_menu.svg";
import closeIcon from "../../../assets/images/svg/icon_close.svg";
import "./Menu-Toggle.scss";

const MenuToggle = () => {
  const [toggle, setToggle] = useState(false);
  const menus = [
    "自分の記録",
    "体重グラフ",
    "目標",
    "選択中のコース",
    "コラム一覧",
    "設定",
  ];
  return (
    <div className="menu-toggle">
      <Button
        onClick={() => setToggle(!toggle)}
        value={
          <img
            src={!toggle ? menuIcon : closeIcon}
            alt={!toggle ? "menu" : "close"}
          />
        }
        className="menu-toggle__btn-toggle"
      ></Button>
      {toggle && (
        <div className="menu-toggle__menu">
          <ul className="menu-toggle__menu__list">
            {menus.map((x, index) => (
              <li className="menu-toggle__menu__list__item" key={index}>
                {x}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default MenuToggle;
