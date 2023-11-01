import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <Card bg="dark" className="sticky" >
      <Card.Header>
        <Stack direction="horizontal" gap={5}>
          <h1 style={{ color: "white" }}>Watch</h1>
          <Nav
            variant="pills"
            defaultActiveKey="#first"
            style={{ textAlign: "center" }}
          >
            <Link className="link1" title="Clock" to="/">
              {" "}
              <i class="fa-solid fa-clock"></i>
            </Link>

            <Link className="link1" title="Stopwatch" to="/StopWatch">
              <i class="fa-solid fa-stopwatch"></i>
            </Link>
          </Nav>
        </Stack>
      </Card.Header>
    </Card>
  );
}

export default Layout;


