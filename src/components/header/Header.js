import clsx from "clsx";
import { Col, Container, Image, Row } from "react-bootstrap";

import image from "~/static/assets/img/logo.jpg";
import styles from "./Header.module.scss"

function Header() {
    return (
        <Container>
            <Row className="d-flex align-items-center">
                <Col lg="1" className="offset-lg-4">
                    <Image src={image} width="80px" />
                </Col>
                <Col lg="3">
                  <h3 className={clsx(styles.title)}>Caro</h3>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;
