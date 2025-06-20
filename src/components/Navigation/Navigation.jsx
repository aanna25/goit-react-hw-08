import CustomNavLink from "../CustomNavLink/CustomNavLink";

export default function Navigation() {
  return (
    <nav>
      <CustomNavLink to="/">Home</CustomNavLink>
      <CustomNavLink to="/contacts">Contacts</CustomNavLink>
    </nav>
  );
}
