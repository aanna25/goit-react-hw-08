import CustomNavLink from "../CustomNavLink/CustomNavLink";

export default function Navigation({ isLoggedIn }) {
  return (
    <nav>
      <CustomNavLink to="/">Home</CustomNavLink>
      {isLoggedIn && <CustomNavLink to="/contacts">Contacts</CustomNavLink>}
    </nav>
  );
}
