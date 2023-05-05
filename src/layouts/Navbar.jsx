import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
  return (
    <nav className="w-full h-20 sticky top-0 z-50 bg-port-blue font-sans backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-port-blue">
      <div className="flex justify-between max-w-7xl h-full mx-auto py-1 px-4 items-center">
        <AnchorLink href="#home" className="font-bold text-neon text-lg mr-4">
          Test
        </AnchorLink>
        <div className="flex justify-end items-center">
          <AnchorLink
            href="#projects"
            className="text-slate-300 text-lg mr-6 hover:text-neon"
          >
            Projects
          </AnchorLink>
          <AnchorLink
            href="#experience"
            className="text-slate-300 text-lg mr-6 hover:text-neon"
          >
            Experience
          </AnchorLink>
          <AnchorLink
            href="#contact"
            className="text-slate-300 text-lg mr-6 hover:text-neon"
          >
            Contact
          </AnchorLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
