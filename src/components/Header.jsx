import profileImage from "../images/profile.png";

const Header = () => {
  return (
    <header className="container mx-auto">
      <nav className="flex items-center justify-between my-8">
        <h2 className="text-3xl font-bold text-[#111111]">Knowledge Cafe</h2>
        <img src={profileImage} alt="" />
      </nav>
    </header>
  );
};

export default Header;
