import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Component.css";
import { useNavigate } from 'react-router-dom'
import Logo from "/vps_logo.png";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
	const navigate = useNavigate();

	return (
		<header>
			<img src={Logo} alt="demo" height={"80px"}/>
			<nav className="navText" ref={navRef}>
				<a className="navText" onClick={()=>{navigate('/')}}>Home</a>
				<a className="navText" onClick={()=>{navigate('/admission')}}>Admission </a>
                <a className="navText" onClick={()=>{navigate('/department')}}>Department</a>
				<a className="navText" onClick={()=>{navigate('/gellary')}}>Gallery </a>

				{/* <a className="navText" onClick={()=>{navigate('/about')}}>About Us</a> */}
                <a className="navText" onClick={()=>{navigate('/contact')}}>Enquiry</a>

				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar