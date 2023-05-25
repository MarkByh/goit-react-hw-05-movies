import style from './header.module.css';
import { StyledLink } from './Layout.styled';
export const Header = () => {
  return (
    <div className={style.header}>
      <StyledLink className={style.link} to="/">
        Home
      </StyledLink>
      <StyledLink className={style.link} to="/movies">
        Movies
      </StyledLink>
    </div>
  );
};
