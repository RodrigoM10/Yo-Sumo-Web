import React from "react";
import { Col, NavLink } from "react-bootstrap";
import { FaArrowCircleUp } from "react-icons/fa";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import "./footer.css";
import { PUBLIC_PATHS_FOOT } from "../../../routes/config";
import { Link } from "react-router-dom";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="mt-auto footer-style">
      <Col className="mb-3">
        <Link to="" className="footer-link ">
          {/* <Image className="image-logo" src={logo} alt="Img Logo" /> */}
          Yo Sumo
        </Link>
      </Col>
      <Col className="d-flex justify-content-center align-items-center pt-2 ">
        {PUBLIC_PATHS_FOOT.map((path, index) => (
          <Link className="mx-2 footer-link col-3 col-lg-2" key={index} to={path.ROUTE}>
            {path.PLACEHOLDER}
          </Link>
        ))}
      </Col>
      <hr className="mx-5" />
      <Col
        xs={12}
        className="d-lg-flex justify-content-around py-2 "
      >
        <div className="d-none d-lg-inline ms-5">
          <span>© Copyright FrogDevs 2022 </span>
        </div>
        <Col className="d-lg-flex justify-content-center justify-content-lg-end aling-items-center my-2 my-lg-0 mx-0 mx-lg-5">
            <div className="d-flex justify-content-center aling-items-center mb-4 mb-lg-0 me-lg-5">
                <NavLink href="" target="_blank" className="p-0 mx-2">
                <BsFacebook className="social-icon" />
                </NavLink>
                <NavLink href="" target="_blank" className="p-0 mx-2">
                <BsTwitter className="social-icon" />
                </NavLink>
                <NavLink href="" target="_blank" className="p-0 mx-2">
                <BsInstagram className="social-icon" />
                </NavLink>
                <NavLink href="" target="_blank" className="p-0 mx-2">
                <BsYoutube className="social-icon" />
                </NavLink>
            </div>
            <div>
                <button
                onClick={scrollToTop}
                className="d-none d-sm-inline to-top-btn"
                >
                <FaArrowCircleUp className="mb-2" />
                </button>
            </div>
        </Col>
        <div className="d-lg-none">
          <span>© Copyright FrogDevs 2022 </span>
        </div>
      </Col>
    </div>
  );
};

// import { Link } from "react-router-dom";
// import './footer.css'
// import instagram from "../../../assets/instagram_internet_media_network_social_icon_123258.png"
// import facebook from "../../../assets/facebook_internet_media_network_social_icon_123257.png"
// import youtube from "../../../assets/YOUTUBE_icon-icons.com_65487.png"
// import twit from "../../../assets/twit.png"

// const Footer2 = () => {

//     return (

//         <div className='footer-container '>
//       {/* <section className=' col md-4 footer-subscription'>
//         <p className='footer-subscription-heading'>
//           Dejanos tu consulta aqui. Te responderemos lo mas rapido posible
//         </p>

//         <div className='input-areas'>
//           <FormContact />
//         </div>
//       </section> */}
//   <div class=' col md-4 footer-links'>
//     <div className='footer-link-wrapper'>
//       <div class='footer-link-items'>
//         <h2>Nosotros</h2>
// <Link to='/sign-up'>Quienes somos</Link>
// <Link to='/'>Testimonios</Link>
// <Link to='/'>Carrera</Link>

//       </div>
//           <div class='footer-link-items'>
//             <h2>Contactanos</h2>
//             <Link to='/'>Contact</Link>
//             <Link to='/'>Sponsors</Link>
//           </div>
//         </div>
//         <div className='footer-link-wrapper'>
//           <div class='footer-link-items'>
//           <h2>Redes Sociales</h2>
//             <div>
//             <Link to='/'>
//             <img className="iconos" src={instagram} alt="" /></Link>
//             <Link to='/'><img className="iconos" src={facebook} alt="" /></Link>
//             <Link to='/'><img className="iconos" src={youtube} alt="" /></Link>
//             <Link to='/'><img className="iconos" src={twit} alt="" /></Link>
//             </div>

//           </div>
//         </div>

//       </div>
//       <h4 class='website-rights '>POLIS XXI – Asociación Civil ©2020</h4>

//     </div>

//     )
// }

// export default Footer2;
