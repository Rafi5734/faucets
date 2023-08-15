import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";
const RequestHistory = () => {
  return (
    <div className="mt-4">
      <p className="fw-bold">Request History</p>

      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col>
            <Nav variant="pills" className="flex-row">
              <Nav.Item className="me-3 mb-2">
                <Nav.Link eventKey="first" size="sm">
                  ETH Transaction History
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" size="sm">
                  TestLink Transaction History
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          {/* <Col sm={9}>
            
          </Col> */}
          <Row className="mt-3">
            <Col md={5}>
              <Tab.Content className="w-100">
                <Tab.Pane eventKey="first">
                  <Table
                    striped
                    responsive
                    bordered
                    hover
                    className="table_request w-100"
                  >
                    <thead>
                      <tr>
                        <th>Sr</th>
                        <th>Time</th>
                        <th>Amount</th>
                        <th>Hash</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>08:30 AM </td>
                        <td>748</td>
                        <td>7s7effkeurusue4</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>10:23 AM </td>
                        <td>974</td>
                        <td>sfe7r7sr4fer</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>11:10 AM </td>
                        <td>874</td>
                        <td>s4e7s8er</td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Table
                    striped
                    bordered
                    hover
                    responsive
                    className="table_request w-100"
                  >
                    <thead>
                      <tr>
                        <th>Sr</th>
                        <th>Time</th>
                        <th>Amount</th>
                        <th>Hash</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>08:30 AM </td>
                        <td>748</td>
                        <td>4s8er5s5fe57rjmxnfuewrurks</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>10:23 AM </td>
                        <td>974</td>
                        <td>sf7s7ers4e7r7wser</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>11:10 AM </td>
                        <td>874</td>
                        <td>se4s7er7</td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default RequestHistory;
