import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import RequestHistory from "./RequestHistory";

const MainBody = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      setValidated(true);
    };
  return (
    <div className="pb-4" style={{ background: "#eef2fe" }}>
      <Container>
        <h1 className="pt-5 mb-3 fw-bold basic_color">Request testnet LINK</h1>
        <p className="mb-0" style={{ color: "#6d7380" }}>
          Get testnet LINK for an account on one of the supported blockchain
          testnets so you can
        </p>
        <p className="mb-0 pb-5" style={{ color: "#6d7380" }}>
          create and test your own oracle and Chainlinked smart contract
        </p>

        <div className="">
          <Container className="bg-white p-4">
            <div className="p-2" style={{ background: "#eef2fe" }}>
              <i
                className="fa-solid fa-triangle-exclamation me-2"
                style={{ color: "#9b1fe9" }}
              ></i>
              <span className="mb-0 me-3 normal_fontSize">
                Your wallet is connected to{" "}
                <span className="fw-bold">Ethereum Kovan</span>, so you are
                requesting <span className="fw-bold">Ethereum Kovan</span>{" "}
                Link/ETH.
              </span>
            </div>

            <Form
              className="mt-2"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label className="form_fontSize fw-bold custom_input">
                    Wallet Address
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Your Wallet Address..."
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group
                  className="form_fontSize fw-bold"
                  as={Col}
                  md="3"
                  sm="3"
                  xs="6"
                  controlId="validationCustom03"
                >
                  <Form.Label className="text-nowrap">Request Type</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="20 Test Link"
                    style={{ background: "#fafafa" }}
                    required
                    disabled
                    className="w-100"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a wallet number.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="form_fontSize fw-bold"
                  as={Col}
                  md="3"
                  sm="3"
                  xs="6"
                  controlId="validationCustom03"
                  // className="w-100"
                >
                  <Form.Label>
                    <p></p>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    style={{ background: "#fafafa" }}
                    placeholder="0.5 ETH"
                    required
                    disabled
                    className="w-100"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Button type="submit" className="form_btn">
                Send Request
              </Button>
            </Form>

            <RequestHistory />
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default MainBody;
