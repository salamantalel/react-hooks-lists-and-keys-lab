// src/components/NavBar.js
function NavBar() {
  const links = ["home", "about", "projects"];

  const linkElements = links.map((link) => (
    <a key={link} href={`#${link}`}>
      {link}
    </a>
  ));

  return <nav>{linkElements}</nav>;
}

export default NavBar;
