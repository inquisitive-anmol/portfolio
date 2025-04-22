import React from "react";
import { Link } from "react-router-dom";
import TextReveal from "../../ui/TextReveal";

const MenuLinks = ({ handleClickOnLink }) => {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "about" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
    { name: "Blog", link: "blog" },
  ];
  return (
    <div className="flex flex-col items-start justify-start space-y-2 pt-14 md:px-12  px-10 rounded-lg  w-full h-full text-2xl md:text-4xl md:space-y-5 font-medium">
      {navLinks.map((link, index) =>
        index === 4 ? (
          <Link
            key={index}
            to={link.link}
            onClick={handleClickOnLink}
            className="text-black font-medium"
          >
            <TextReveal text={link.name} />
          </Link>
        ) : (
          <a
            key={index}
            href={index === 0 ? "/" : `#${link.link}`}
            className="text-black font-medium"
            onClick={handleClickOnLink}
          >
            <TextReveal text={link.name} />
          </a>
        )
      )}
    </div>
  );
};

export default MenuLinks;
