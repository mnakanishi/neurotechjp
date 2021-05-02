import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <header className="header">
        <div className="header--logo">
          <Link href="/">NeurotechJP </Link>
        </div>
        <div className="header--index">
          <div className="header--index-blog">
            <Link href="/">Blog</Link>
          </div>
          <div className="header--index-about">
            <Link href="/about">About NeurotechJP</Link>
          </div>
        </div>
        <div className="header--lang">
          <div className="header--lang-en">EN/</div>
          {/* TODO: Change to English */}
          <div className="header--lang-JP">JP</div>
          {/* TODO: Change to Japanese */}
        </div>
      </header>
      <img src="/brain_wave.png" className="header-container--brain-wave" />
    </div>
  );
};

export default Header;
