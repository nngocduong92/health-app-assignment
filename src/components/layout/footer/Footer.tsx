import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer__container">
          <ul className="footer__container__list">
            <li className="footer__container__list__item">会員登録</li>
            <li className="footer__container__list__item">運営会社</li>
            <li className="footer__container__list__item">利用規約</li>
            <li className="footer__container__list__item">個人情報の取扱について</li>
            <li className="footer__container__list__item">特定商取引法に基づく表記</li>
            <li className="footer__container__list__item">お問い合わせ</li>
          </ul>
        </div>
      </footer>
    );
  };
  

export default Footer;