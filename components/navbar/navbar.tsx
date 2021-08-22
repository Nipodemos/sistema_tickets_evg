import Image from "next/image";
import styles from "./styles.module.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import EVGLogo from "../../public/evg_logo.jpg";
import { Container } from "react-bootstrap";
import Link from "next/link";

export default function MyNavbar() {
  return (
    <div className={styles.container}>
      <Navbar fixed="top" bg="secondary" className={styles.navbar}>
        <Navbar.Brand>
          <Link href="/">
            <a>
              <Image width="100" height="50" src={EVGLogo} alt="site logo" />
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/listar_tickets">
              <a>Listar Tickets</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
