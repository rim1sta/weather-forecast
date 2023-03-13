import { FC } from "react";
import S from "./Header.module.scss";

export const Header: FC = () => {
  return (
    <div className={S.header}>
      <p className={S.header__title}>Погода для ЮMoney</p>
    </div>
  );
};