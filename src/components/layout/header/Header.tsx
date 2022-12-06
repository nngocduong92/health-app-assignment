import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import logoImg from "../../../assets/images/logo.png";
import memoIcon from "../../../assets/images/svg/icon_memo.svg";
import challengeIcon from "../../../assets/images/svg/icon_challenge.svg";
import infoIcon from "../../../assets/images/svg/icon_info.svg";
import MenuToggle from "../menu-toggle/Menu-Toggle";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__nav-main">
        <Link to="/" className="header__nav-main__logo">
          <img src={logoImg} alt="logo" />
        </Link>

        <div className="header__nav-main__nav-right">
          <ul className="header__nav-main__nav-right__list">
            <li className="header__nav-main__nav-right__list__item">
              <Link to="my-record">
                <span>
                  <img src={memoIcon} alt="memo" />
                </span>
                <span className="header__nav-main__nav-right__list__itemn__nav-right-title">自分の記録</span>
              </Link>
            </li>

            <li className="header__nav-main__nav-right__list__item">
              <Link to="#">
                <span>
                  <img src={challengeIcon} alt="challenge" />
                </span>
                <span className="header__nav-main__nav-right__list__item__title">チャレンジ</span>
              </Link>
            </li>
            <li className="header__nav-main__nav-right__list__item">
              <Link to="#">
                <span>
                  <img src={infoIcon} alt="info" />
                  <span className="header__nav-main__nav-right__list__item__badge">1</span>
                </span>
                <span className="header__nav-main__nav-right__list__item__title">お知らせ</span>
              </Link>
            </li>
          </ul>
          <MenuToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
