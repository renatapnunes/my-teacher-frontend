import { HeaderContainer, Logo } from "./Header.style";

export const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <Logo src="/images/myteacher.png" />
      </div>
      <span>Encontre o professor perfeito!</span>
    </HeaderContainer>
  );
};
