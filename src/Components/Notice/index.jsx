import { Container } from 'react-bootstrap';

const Notice = () => {
    return (
      <Container fluid className="ps-0 pe-0">
        <div style={{ background: "#9b1fe9" }}>
          <p className="text-center mb-0 pt-4 pb-4 text-white">Notice here</p>
        </div>
      </Container>
    );
};

export default Notice;
