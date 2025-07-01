// importo css module
import stylos from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={stylos.pie}>
      <p>&copy; - React Social Network -</p>
    </footer>
  );
};

export default Footer;