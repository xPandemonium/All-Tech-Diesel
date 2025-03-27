import NavButton from "./navButton"

export default function NavLinks() {

    return (
        <ul className="sm:flex justify-between items-center gap-4 h-full">
            <NavButton location="" name="HOME"></NavButton>
            <NavButton location="Services" name="SERVICES"></NavButton>
            <NavButton location="About" name="ABOUT"></NavButton>
            <NavButton location="Contact" name="CONTACT"></NavButton>
        </ul>
    )
}