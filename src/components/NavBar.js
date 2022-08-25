import { Navbar,Container, Nav } from "react-bootstrap"
import { useState, useEffect } from "react"
import logo from "../assets/img/logo.svg"
import navicon1 from "../assets/img/nav-icon1.svg"
import navicon2 from "../assets/img/nav-icon2.svg"
import navicon3 from "../assets/img/nav-icon3.svg"

export const NavBar = () => {
    const[activeLink,setActiveLink] = useState("home");
    const [scrolled,setScrolled] = useState(false);

    useEffect(() => {
        const onscroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);}
                else{
                    setScrolled(false);
                }
            }
            window.addEventListener("scroll",onscroll);

            return () => {
                window.removeEventListener("scroll",onscroll);
            }
},[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
        <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.facebook.com/shinjiro0811"><img src={navicon1} alt="" /></a>
                    <a href="https://www.instagram.com/joshua_saitou/"><img src={navicon2} alt="" /></a>
                    <a href="https://discord.com/"><img src={navicon3} alt="" /></a>
                </div>
                <button className="lcnt" onClick={() => console.log('connect')}>
                    <span>Let's connect</span>
                </button>
            </span>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}