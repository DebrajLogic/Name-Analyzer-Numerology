import React from "react";

function Footer() {
  const current_year = new Date().getFullYear();
  return (
    <p className="w-full text-center">
      Name Analyzer based on Numerology | Made with ❤️ by Devraj{" "}
      <span>&copy; {current_year}</span>
    </p>
  );
}

export default Footer;
