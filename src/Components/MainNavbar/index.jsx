
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import NavDropdown from "react-bootstrap/NavDropdown";

const MainNavbar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <div>
        <Navbar expand="lg" className="bg-body-transparent">
          <Container className="pt-2 pb-2">
            <Navbar.Brand href="#" className="fw-bold">
              <p className="basic_color mt-0 mb-0 fs-4">Faucets</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto"
                style={{ maxHeight: "250px" }}
                navbarScroll
              >
                <Dropdown className="me-2">
                  <Dropdown.Toggle
                    variant="white"
                    id="dropdown-basic"
                    className="d-flex justify-content-center align-items-center pb-2 pt-2"
                  >
                    <div className="">
                      <img
                        src="https://faucets1.netlify.app/static/media/PAHYDMBoGPPsaT72wwVbhQlfCzcA8OssSK9id0YNSsA.315698e0099ec59e9bbf.webp"
                        alt="main dropdown logo"
                        width="15"
                        height="15"
                        className="pt-0 mb-0 me-2"
                      ></img>
                      <span className="normal_fontSize">Ethereum Kovan</span>
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="normal_borderRadius">
                    <Dropdown.Item href="#/action-1">
                      <div className="">
                        <img
                          src="https://faucets1.netlify.app/static/media/logo.abae01ba680d97dacc23a0fb5caa4863.svg"
                          alt="main dropdown logo"
                          width="15"
                          height="15"
                          className="pt-0 mb-0 me-2"
                        ></img>
                        <span className="normal_fontSize">Ethereum Kovan</span>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <div className="">
                        <img
                          src="data:image/png;base64,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"
                          alt="main dropdown logo"
                          width="15"
                          height="15"
                          className="pt-0 mb-0 me-2"
                        ></img>
                        <span className="normal_fontSize">Ethereum Kovan</span>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <div className="">
                        <img
                          src="data:image/png;base64,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"
                          alt="main dropdown logo"
                          width="15"
                          height="15"
                          className="pt-0 mb-0 me-2"
                        ></img>
                        <span className="normal_fontSize">Ethereum Kovan</span>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <div className="">
                        <img
                          src="data:image/png;base64,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"
                          alt="main dropdown logo"
                          width="15"
                          height="15"
                          className="pt-0 mb-0 me-2"
                        ></img>
                        <span className="normal_fontSize">Ethereum Kovan</span>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <div className="">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEXoQUL////oPD3oP0DsbW7oPT7nMDHnNjfnNzjnMTLmKCnnMzTnOTrnLC3nKyz86+v+9vbqVFX4z8/74ODrX2D1urr++fn3x8f98PDpRUb0sbHpS0z75eXzqKjxmZn509PteHnugIHyoKHqWFnwj5D63d3rYmP2wsLxmpvrYGHuenrsamv0rKzvh4fwi4vpSkt6PTzKAAAOFElEQVR4nNVdZ3fqOhC0LdwLJXQIPSE3Ccn//3fXmA6y2o6BzJd7zjsv2GNbWu3uaGTZlaNRn66Hi9W81l42RwNrMGou27XNajFcT+uN6i9vVfnj/elw9T7wMy/2g8RxWQ7Lsrb/uE4S+LGX+b/vq+G0X+VNVMWw3/v4inNqiVuwKkPONciJxl+TXr2iO6mCYb8zH3lh4IioXRF1gtD73ayreJloht3WpBnFiTq5M5pJGDV/el3wHUEZdtefsRe4BuwOcBPPn2NJAhn2ZmFo9PKuX6Xnf/Zwt4Vi+PbjexoDT0rSmYxBd4Zh2GmmgLd3QTJI/3Ug9wZg2F/EIWXslcEN4wVgciUzHG9CH/v6TmB+uCF/rESG41kE/jyvOCbRjMiRxPBlliYV0tshST9JHAkM67PIqZxfwTGaEZZ0xgy7kzu8vyPHdGK8CjBlOEwqm194YL4zvCvDt6Z3T34FR6/5dj+Gq6yK+CeDm63uxLDF/Afw28JnrXsw3KT3/kBPYNmmcoZvv496gTv4A93RqMlw8ZAReA43W1TIsNEOH8xvi7CtVaHTYThN7rOGkcFJptUwXESPm2IuwaLXKhjWvEcTO4NXgzPsN4NHs7pA0FQdjIoMXzBDkAVhGGMGs5O8IBn2UkiQCJJJrzf8wiwZ3FRtgaPEcIiZYw7rypaF+SAipXRDheEwQtyQlR5vqDHCfKlKFBUYvmaQ2/HOZvgGqLSaKUQNOcNFCrkZ5+v8R1uYp2al8iWclCGIIEsvy0kzUAlETlHG8BtD0PKvstc6qkiQftMYDkFfEwuuK0krVBaWSYr/YoYdzCya5wM3s14XVsmKxBSFDKeotbY7uv3xb1QmxiJhqiFiOIYV1LjLjwGsGReKiuIChg2GyucdbiawBk1i+SfCBMtwAcMlLN+N+M+4DauIOEsThjVYuhSU1DmnoIl6e4nyfLGU4Sss4WV+2TdUw3U+vNL1WxnDFipO5JGiNCbXgaXXqCyXKmHYD2DXZoMygsCwv11TlHTESxjiZhkrFSlHYtxLLJtt+Aw/YtyFv7hX2GMILG+FH+oMp7BIVRopDmgCa+gZd23DZWjhLhv8CAnCEsUtXO6I5zGc4wqHLJYV/WrAOnowV2PYAz7WWFpmGCObdbxZjcMQJk8TR4oDgBHDYq4KQ+QVhZFijy4u9N6WEngM34DfqPNPTjCPGMiWXXrTQL1hOEJO32qFd2TEuM21rxkiQ3AyVyIIjRiWd10vuWLYRU4zqWp7CBkxmHNV87piOAFOM7Fyw32MfIn+RMQQmc6oRIoDoBEjvZT5XTL8BIrx0rU6wwZSpJp8ljN8waW9lisondwCGjGiiyn8guEMOOJvA5MQyCB1Wdo7Z/gCTJquPhUpoBHj4umeMwS+QpbpquyREePiJZ4xRI5Cn59vCzAGXv0i7T5jOMdNpIzpEswjBlDOcj5GTgz7IW7G9gy2u4yRiiTvFBNPDBe4qKsXKQ6AZvunhc2JIfAVpjrKuiM6uAJfvrC5ZdjBxdxkZkLQ7iPnmvA4To4Ml7CQe70wVAY0TzwOlANDYGp/vbhXxga5RSU7RP0DQ9xczQJDgvYrUkJ+bOkdGOJ2wNwk2cpYI5ffzL9k2IMFI7dpStDuQVXkXu+CIW5JWtrHk2MKVSE7s3OGXVgw5IsSHsGQhd0zhrARcC1f0wL2K7XC9RnDT9RHWiZKUAJyUWMdl98FQ5gCi/kUO4QJViy/v5mCYQs1AG7lazpALr238FpHhqiHR4gUWwCb+gV2CUbBELUgVFTPlwDZWy+we+BbhnXQop4SKWxskr9D1N8zRM1hlEhhQzuze8SdPUNQgUYmSpAAmKAeUDS/tgx/IQ+PBTTjLqGflOEt/e4Y1jGxoly+poQFNtzvsC1IWajFkvtLIlgHlolOCHsFQ0w0VBElCIDsep2wjYg5w3dENBTL16SYIqtQJ7jvBUOIXl0iX5MBVwe7APO2DMeIpUSg7wRwjk5VO3DTes4QMdGUC52V0K3MpyhffFuQCpdcviYEUh9xCf81ZwhY0eiIEjhA6iOukK9qLMQg1xElcIDOC8/gLnOG9M05zjuJYAudNZ0h/7qsBn2iiczMfw5AtituEDYserBQla+VALaHjYt0bLWoF2AeyfqvgZSX3iJsWeT0V12+xsVPtW4Uccf6JsYiRvMlhEowOPC/rQ/iMzQRJZzhq2LLm+DDWtECvpko4YhehZGiQLKy5rSHyN+nogyralMfZ259kaIRMVK8VlG6uIBbs9qkpxiRIkUfXeW+BWtbS8pF9OVrFwDqzMrAllaTwJC5JOdtqf6DJXHs09Z0rGmNCAyJkaItmeSCZNVZv7ZJuRUbWQPzvya2mmT78dOf3RfScyjTPYGfqXztCEmROzv2Ivs0SyJzjobytQMkWkjvrITeJzRtBoRxGJFOpOiLh9eVJZHx6jUfh8ZzqbF8bQexyRDzLh+fcVzJ51LTeEgTJcgavtePT/LGBbe5NF7TmMvXCohLF7d7QU1bU/maxnBdSowUkiJ3ehtoDduL7pdpbpGRRAmSTYC8vaeGhf88tzDLD6miBHGk4BbvzOq6eX5oluPTRAkS8Qe/zWPmZpPn+EZ1GpJ8TVbkLnMpMIoY/rdRrY2lpEgh2cUVlrR5jLT8cceoXkoUJYh34vGcz3b4MPjcwpZJzbv8HpQgKXKXCwK6rn7ESMcmfQuaKKEhLl2IZmmDiBE2DHpPRFGCuMgtFhlrN3G2vSf9OJMqWhTz8SKeZsTreW35YtE/1J2EiaIEcZGbxeK/1rU9LXrAmn18FpJECZIit6zyo9sQL/r4mloMoihBPOrdtuzvNSNG2NPW0xBFCZIit7ybrGnckc9blm1rvXhapJAksio9Aq2IsdNE2f80JlOiKEE8q6l1k3Xm/r2uTUebmJFECZIit9oQ18kx9tpEjS1BxFaT+PGrDnGNiLHdGLTVCCtPNSwmtZo64gupDnENo+x0pxFWX7fRRAldcTtUfTGoLIMrvgodrT5zKARloSxTLxuoClSOWn3VJJgmX6tnwvvSKRuoRozjfgvFPTPyBYcQkiJ3rFM2UMwxir5DoYZR613Q5GsSJbdegVlNFr7L1AuGPyoDUddT5wrix65bYFaKGMnqyFBl/+F1r0QTEqc7sXH8LZQixtn+Q5U9pDRRgkTJnWgXmBX8z873kCrEC55vJuyGDL4PBfH7fgG2Yyg3HKCJEiQ2rCatSLn/2d5yYL8fX/aZEltNktKF0UpCFjEODc69dlK27YgmXyOWLviQ+Z8dsgQ1XwyiKEFS5DZcSUgk/le+GLZ44GakSPEqHjKmKwmxYyZL7EuGwm3GHHdeDXTppQs+hPd89MI6MBQ9EJaQWk0bcZE7NM45hRHjmKocVdqCA0NoTgkSN0ZKdVIQMU6DW8Hri7j/VazPo/34b+lr4Xh9lXs20JwSJPo8WnWydEMRC4//j9xzjyhKEJdIiNXJ0ojB9dwr802MSK0midKH1scq9+tMeb6JJctv2ivsi7Mc4vdhl73E8wh0xpC/fcUjDRTJaUAhbYu7XZbalviXcg2/aDt8h5JSbEQzmrBLNoaVedByIxcpqZAV4InlyQK8FKPUR5j3El3CZPcmKzUwmqijAMcvodwLmjczEd7hVNq2Ozr/EcB5hwI/b06aaD4Ohwp9SaJnj83ddiPyZOe1yX2zdWNjptLvIerjbN46Reyrz2l6MM/kOX/7ar0Qj7Qi3E6Ot69EeDYCr03OAt2g1fi2VLdsMY/UC2ndxgrZ+Ra8yi1Laz3lwdh9GdYyDQs/ln6tDUd6t1XjDHXZGSX8+OKE3uirpoD3UZDqng6v/OOX+FoGHudKt3P/7VlB/BmCOSpwzfTmaj9+cy3eTymcFQQ9L+TuUDnvybYNVJzPArUzu6rfX10dFM9dQ56dd1+onp0HPf/wnnD5ZHj/Ee6zeR9onGFpf1TqqFIRdM4hhZ4ley/onSWLPA/4TmCJ3nnAyDOd7wPdM52R53LfBfrnctv27C9FxaC8hStwCPpDs03ZLCNh2HD+SuB3HUGKKXJ5eoH4flYPcaFF6GP1RyZU8ZEaYqeuzl+gGInFKhIvsiHy0L5qkEl68DK3tddnp5jK6rlSP7nFc1NMpeJ6uWPe4plTKTlBBYb29/NON5HClmsV18NO9JxxkUlmUXWGT0qRRUodATXnyqn3fAs4N1RThCp6c45JfltVwHEUe2Kq7qON5nMlU0FTtZ+j7q9ae6aU2FMX4mg4yC6eZr5hkcYmOh2P3FbwHIPRCXQ6x1ouwP3lM9RRw6WW5lbT5/gje3TYcDPNbZ66Ts7TwWPbi/5Ad1+Evlf1prqTDKRgmb4ph4Ebd8t61Gv0LQNxipHf+CR9xGh0UyOnRjNH9Zfm3ctwzGua6YlNPeM7Lu4EYRV+vmO6ec7YFb87Sat3cj4gSSfGm1oIvv/1WXSfNY4TzQj7rkgnG7zU0uo5OmmNJOinnd1gv9Wiys5q2oIlUY12xguVYf4e515l/WIWeHPihgwAw3w8Trywivjoht6EtO8RxjBH518K/lhZkP6jOb4fgGGYD8hNHMKOSmWJl0zIEvA9UAxzrGsegiRLwviTvJfmBCBD226sZ74XUMakm3j+vEfasnoNKEN7K02eNKPYaFDmLy9q/mDp2XiGW9Q7818vDDS+WOYEoTfYdEg2VCWoguEW/d7He5x5fiLR4zI38b0sfv/oAQIDF1UxLFBvfW+WgzD1Yj9ItiLwQga+/cd1ksCPvTQcLDffrarIFaiU4Q6N8XQ9XKw2tfayORpYg1Fz2a7NV4vhejom786T4z8gGd/UMe6XXAAAAABJRU5ErkJggg=="
                          alt="main dropdown logo"
                          width="15"
                          height="15"
                          className="pt-0 mb-0 me-2"
                        ></img>
                        <span className="normal_fontSize">Ethereum Kovan</span>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <div className="">
                        <img
                          src="data:image/png;base64,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"
                          alt="main dropdown logo"
                          width="15"
                          height="15"
                          className="pt-0 mb-0 me-2"
                        ></img>
                        <span className="normal_fontSize">Ethereum Kovan</span>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <div className="">
                        <img
                          src="data:image/png;base64,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"
                          alt="main dropdown logo"
                          width="15"
                          height="15"
                          className="pt-0 mb-0 me-2"
                        ></img>
                        <span className="normal_fontSize">Ethereum Kovan</span>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <div className="">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEXoQUL////oPD3oP0DsbW7oPT7nMDHnNjfnNzjnMTLmKCnnMzTnOTrnLC3nKyz86+v+9vbqVFX4z8/74ODrX2D1urr++fn3x8f98PDpRUb0sbHpS0z75eXzqKjxmZn509PteHnugIHyoKHqWFnwj5D63d3rYmP2wsLxmpvrYGHuenrsamv0rKzvh4fwi4vpSkt6PTzKAAAOFElEQVR4nNVdZ3fqOhC0LdwLJXQIPSE3Ccn//3fXmA6y2o6BzJd7zjsv2GNbWu3uaGTZlaNRn66Hi9W81l42RwNrMGou27XNajFcT+uN6i9vVfnj/elw9T7wMy/2g8RxWQ7Lsrb/uE4S+LGX+b/vq+G0X+VNVMWw3/v4inNqiVuwKkPONciJxl+TXr2iO6mCYb8zH3lh4IioXRF1gtD73ayreJloht3WpBnFiTq5M5pJGDV/el3wHUEZdtefsRe4BuwOcBPPn2NJAhn2ZmFo9PKuX6Xnf/Zwt4Vi+PbjexoDT0rSmYxBd4Zh2GmmgLd3QTJI/3Ug9wZg2F/EIWXslcEN4wVgciUzHG9CH/v6TmB+uCF/rESG41kE/jyvOCbRjMiRxPBlliYV0tshST9JHAkM67PIqZxfwTGaEZZ0xgy7kzu8vyPHdGK8CjBlOEwqm194YL4zvCvDt6Z3T34FR6/5dj+Gq6yK+CeDm63uxLDF/Afw28JnrXsw3KT3/kBPYNmmcoZvv496gTv4A93RqMlw8ZAReA43W1TIsNEOH8xvi7CtVaHTYThN7rOGkcFJptUwXESPm2IuwaLXKhjWvEcTO4NXgzPsN4NHs7pA0FQdjIoMXzBDkAVhGGMGs5O8IBn2UkiQCJJJrzf8wiwZ3FRtgaPEcIiZYw7rypaF+SAipXRDheEwQtyQlR5vqDHCfKlKFBUYvmaQ2/HOZvgGqLSaKUQNOcNFCrkZ5+v8R1uYp2al8iWclCGIIEsvy0kzUAlETlHG8BtD0PKvstc6qkiQftMYDkFfEwuuK0krVBaWSYr/YoYdzCya5wM3s14XVsmKxBSFDKeotbY7uv3xb1QmxiJhqiFiOIYV1LjLjwGsGReKiuIChg2GyucdbiawBk1i+SfCBMtwAcMlLN+N+M+4DauIOEsThjVYuhSU1DmnoIl6e4nyfLGU4Sss4WV+2TdUw3U+vNL1WxnDFipO5JGiNCbXgaXXqCyXKmHYD2DXZoMygsCwv11TlHTESxjiZhkrFSlHYtxLLJtt+Aw/YtyFv7hX2GMILG+FH+oMp7BIVRopDmgCa+gZd23DZWjhLhv8CAnCEsUtXO6I5zGc4wqHLJYV/WrAOnowV2PYAz7WWFpmGCObdbxZjcMQJk8TR4oDgBHDYq4KQ+QVhZFijy4u9N6WEngM34DfqPNPTjCPGMiWXXrTQL1hOEJO32qFd2TEuM21rxkiQ3AyVyIIjRiWd10vuWLYRU4zqWp7CBkxmHNV87piOAFOM7Fyw32MfIn+RMQQmc6oRIoDoBEjvZT5XTL8BIrx0rU6wwZSpJp8ljN8waW9lisondwCGjGiiyn8guEMOOJvA5MQyCB1Wdo7Z/gCTJquPhUpoBHj4umeMwS+QpbpquyREePiJZ4xRI5Cn59vCzAGXv0i7T5jOMdNpIzpEswjBlDOcj5GTgz7IW7G9gy2u4yRiiTvFBNPDBe4qKsXKQ6AZvunhc2JIfAVpjrKuiM6uAJfvrC5ZdjBxdxkZkLQ7iPnmvA4To4Ml7CQe70wVAY0TzwOlANDYGp/vbhXxga5RSU7RP0DQ9xczQJDgvYrUkJ+bOkdGOJ2wNwk2cpYI5ffzL9k2IMFI7dpStDuQVXkXu+CIW5JWtrHk2MKVSE7s3OGXVgw5IsSHsGQhd0zhrARcC1f0wL2K7XC9RnDT9RHWiZKUAJyUWMdl98FQ5gCi/kUO4QJViy/v5mCYQs1AG7lazpALr238FpHhqiHR4gUWwCb+gV2CUbBELUgVFTPlwDZWy+we+BbhnXQop4SKWxskr9D1N8zRM1hlEhhQzuze8SdPUNQgUYmSpAAmKAeUDS/tgx/IQ+PBTTjLqGflOEt/e4Y1jGxoly+poQFNtzvsC1IWajFkvtLIlgHlolOCHsFQ0w0VBElCIDsep2wjYg5w3dENBTL16SYIqtQJ7jvBUOIXl0iX5MBVwe7APO2DMeIpUSg7wRwjk5VO3DTes4QMdGUC52V0K3MpyhffFuQCpdcviYEUh9xCf81ZwhY0eiIEjhA6iOukK9qLMQg1xElcIDOC8/gLnOG9M05zjuJYAudNZ0h/7qsBn2iiczMfw5AtituEDYserBQla+VALaHjYt0bLWoF2AeyfqvgZSX3iJsWeT0V12+xsVPtW4Uccf6JsYiRvMlhEowOPC/rQ/iMzQRJZzhq2LLm+DDWtECvpko4YhehZGiQLKy5rSHyN+nogyralMfZ259kaIRMVK8VlG6uIBbs9qkpxiRIkUfXeW+BWtbS8pF9OVrFwDqzMrAllaTwJC5JOdtqf6DJXHs09Z0rGmNCAyJkaItmeSCZNVZv7ZJuRUbWQPzvya2mmT78dOf3RfScyjTPYGfqXztCEmROzv2Ivs0SyJzjobytQMkWkjvrITeJzRtBoRxGJFOpOiLh9eVJZHx6jUfh8ZzqbF8bQexyRDzLh+fcVzJ51LTeEgTJcgavtePT/LGBbe5NF7TmMvXCohLF7d7QU1bU/maxnBdSowUkiJ3ehtoDduL7pdpbpGRRAmSTYC8vaeGhf88tzDLD6miBHGk4BbvzOq6eX5oluPTRAkS8Qe/zWPmZpPn+EZ1GpJ8TVbkLnMpMIoY/rdRrY2lpEgh2cUVlrR5jLT8cceoXkoUJYh34vGcz3b4MPjcwpZJzbv8HpQgKXKXCwK6rn7ESMcmfQuaKKEhLl2IZmmDiBE2DHpPRFGCuMgtFhlrN3G2vSf9OJMqWhTz8SKeZsTreW35YtE/1J2EiaIEcZGbxeK/1rU9LXrAmn18FpJECZIit6zyo9sQL/r4mloMoihBPOrdtuzvNSNG2NPW0xBFCZIit7ybrGnckc9blm1rvXhapJAksio9Aq2IsdNE2f80JlOiKEE8q6l1k3Xm/r2uTUebmJFECZIit9oQ18kx9tpEjS1BxFaT+PGrDnGNiLHdGLTVCCtPNSwmtZo64gupDnENo+x0pxFWX7fRRAldcTtUfTGoLIMrvgodrT5zKARloSxTLxuoClSOWn3VJJgmX6tnwvvSKRuoRozjfgvFPTPyBYcQkiJ3rFM2UMwxir5DoYZR613Q5GsSJbdegVlNFr7L1AuGPyoDUddT5wrix65bYFaKGMnqyFBl/+F1r0QTEqc7sXH8LZQixtn+Q5U9pDRRgkTJnWgXmBX8z873kCrEC55vJuyGDL4PBfH7fgG2Yyg3HKCJEiQ2rCatSLn/2d5yYL8fX/aZEltNktKF0UpCFjEODc69dlK27YgmXyOWLviQ+Z8dsgQ1XwyiKEFS5DZcSUgk/le+GLZ44GakSPEqHjKmKwmxYyZL7EuGwm3GHHdeDXTppQs+hPd89MI6MBQ9EJaQWk0bcZE7NM45hRHjmKocVdqCA0NoTgkSN0ZKdVIQMU6DW8Hri7j/VazPo/34b+lr4Xh9lXs20JwSJPo8WnWydEMRC4//j9xzjyhKEJdIiNXJ0ojB9dwr802MSK0midKH1scq9+tMeb6JJctv2ivsi7Mc4vdhl73E8wh0xpC/fcUjDRTJaUAhbYu7XZbalviXcg2/aDt8h5JSbEQzmrBLNoaVedByIxcpqZAV4InlyQK8FKPUR5j3El3CZPcmKzUwmqijAMcvodwLmjczEd7hVNq2Ozr/EcB5hwI/b06aaD4Ohwp9SaJnj83ddiPyZOe1yX2zdWNjptLvIerjbN46Reyrz2l6MM/kOX/7ar0Qj7Qi3E6Ot69EeDYCr03OAt2g1fi2VLdsMY/UC2ndxgrZ+Ra8yi1Laz3lwdh9GdYyDQs/ln6tDUd6t1XjDHXZGSX8+OKE3uirpoD3UZDqng6v/OOX+FoGHudKt3P/7VlB/BmCOSpwzfTmaj9+cy3eTymcFQQ9L+TuUDnvybYNVJzPArUzu6rfX10dFM9dQ56dd1+onp0HPf/wnnD5ZHj/Ee6zeR9onGFpf1TqqFIRdM4hhZ4ley/onSWLPA/4TmCJ3nnAyDOd7wPdM52R53LfBfrnctv27C9FxaC8hStwCPpDs03ZLCNh2HD+SuB3HUGKKXJ5eoH4flYPcaFF6GP1RyZU8ZEaYqeuzl+gGInFKhIvsiHy0L5qkEl68DK3tddnp5jK6rlSP7nFc1NMpeJ6uWPe4plTKTlBBYb29/NON5HClmsV18NO9JxxkUlmUXWGT0qRRUodATXnyqn3fAs4N1RThCp6c45JfltVwHEUe2Kq7qON5nMlU0FTtZ+j7q9ae6aU2FMX4mg4yC6eZr5hkcYmOh2P3FbwHIPRCXQ6x1ouwP3lM9RRw6WW5lbT5/gje3TYcDPNbZ66Ts7TwWPbi/5Ad1+Evlf1prqTDKRgmb4ph4Ebd8t61Gv0LQNxipHf+CR9xGh0UyOnRjNH9Zfm3ctwzGua6YlNPeM7Lu4EYRV+vmO6ec7YFb87Sat3cj4gSSfGm1oIvv/1WXSfNY4TzQj7rkgnG7zU0uo5OmmNJOinnd1gv9Wiys5q2oIlUY12xguVYf4e515l/WIWeHPihgwAw3w8Trywivjoht6EtO8RxjBH518K/lhZkP6jOb4fgGGYD8hNHMKOSmWJl0zIEvA9UAxzrGsegiRLwviTvJfmBCBD226sZ74XUMakm3j+vEfasnoNKEN7K02eNKPYaFDmLy9q/mDp2XiGW9Q7818vDDS+WOYEoTfYdEg2VCWoguEW/d7He5x5fiLR4zI38b0sfv/oAQIDF1UxLFBvfW+WgzD1Yj9ItiLwQga+/cd1ksCPvTQcLDffrarIFaiU4Q6N8XQ9XKw2tfayORpYg1Fz2a7NV4vhejom786T4z8gGd/UMe6XXAAAAABJRU5ErkJggg=="
                          alt="main dropdown logo"
                          width="15"
                          height="15"
                          className="pt-0 mb-0 me-2"
                        ></img>
                        <span className="normal_fontSize">Ethereum Kovan</span>
                      </div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Button
                  variant="outline-transparent"
                  className="wallet_btn me-3"
                  onClick={handleShow}
                  style={{ height: "42px" }}
                  size="sm"
                >
                  <div className="m-0 p-0">
                    <svg
                      stroke="#9b1fe9"
                      fill="#9b1fe9"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      // height="1em"
                      width="1em"
                      className="me-2 p-0"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M95.5 104h320a87.73 87.73 0 0111.18.71 66 66 0 00-77.51-55.56L86 94.08h-.3a66 66 0 00-41.07 26.13A87.57 87.57 0 0195.5 104zm320 24h-320a64.07 64.07 0 00-64 64v192a64.07 64.07 0 0064 64h320a64.07 64.07 0 0064-64V192a64.07 64.07 0 00-64-64zM368 320a32 32 0 1132-32 32 32 0 01-32 32z"></path>
                      <path d="M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16-18.5 24.5 0 24.5 0 23.5 0 23.5L85.5 236z"></path>
                    </svg>
                    <span className="m-0 p-0 fw-bold basic_color form_fontSize">
                      Connect Wallet
                    </span>
                  </div>
                </Button>{" "}
                <Modal show={show} onHide={handleClose} centered>
                  <Modal.Header closeButton>
                    <Modal.Title className="fw-bold basic_color">
                      <span>Connect your wallet</span>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div>
                      <Row>
                        <Col
                          xs={12}
                          sm={6}
                          md={6}
                          lg={6}
                          style={{ cursor: "pointer" }}
                          className="mb-3"
                        >
                          <div
                            className="d-flex justify-content-center align-items-center flex-column"
                            style={{ backgroundColor: "#f5f7fd" }}
                          >
                            <img
                              src="https://faucets1.netlify.app/static/media/MetaMask_Fox.svg.d9c41a5680a1daaae624.png"
                              alt="maskLogo"
                              width="100px"
                              height="100px"
                              className="mt-3"
                            ></img>
                            <p className="fs-5 fw-bold basic_color">MetaMask</p>
                          </div>
                        </Col>
                        <Col
                          xs={12}
                          sm={6}
                          md={6}
                          lg={6}
                          style={{ cursor: "pointer" }}
                          className="mb-3"
                        >
                          <div
                            className="d-flex justify-content-center align-items-center flex-column"
                            style={{ backgroundColor: "#f5f7fd" }}
                          >
                            <img
                              src="https://faucets.netlify.app/static/media/WalletConnect.d0b10794.svg"
                              alt="maskLogo"
                              width="100px"
                              height="100px"
                              className="mt-3"
                            ></img>
                            <p className="fs-5 fw-bold basic_color">
                              WalletConnect
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Modal.Body>
                </Modal>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="transparent"
                    style={{ background: "#eeeeee", height: "42px" }}
                    className="border-0"
                    id="dropdown-basic2"
                  >
                    <div className="rounded-circle pb-1 pt-1">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 496 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          fontSize: "25px",
                          color: "rgb(109, 115, 128)",
                        }}
                        // style="font-size: 25px; color: rgb(109, 115, 128);"
                      >
                        <path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"></path>
                      </svg>
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="normal_borderRadius">
                    <Dropdown.Item href="#/action-1">
                      <span className="normal_fontSize">Login</span>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <span className="normal_fontSize">Sign Up</span>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      <span className="normal_fontSize">FAQ</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default MainNavbar;
