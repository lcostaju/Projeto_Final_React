import HeroSection from "./HeroSection/HeroSection";
import MenuNav from "./HeroSection/Menu/MenuNav";

function Header(){
    return(
        <header>
            <MenuNav/>
            <HeroSection/>
        </header>
    )
}

export default Header;