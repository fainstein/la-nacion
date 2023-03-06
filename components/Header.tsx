import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="header --scrollUp">
        <div className="lay">
          <div className="row">
            <div className="col-4 header__left">
              <div className="com-hamburger">
                <span className="com-hamburger__bar"></span>
                <span className="com-hamburger__bar"></span>
                <span className="com-hamburger__bar"></span>
              </div>
              <form className="com-search ">
                <input
                  type="text"
                  className="com-search__input"
                  placeholder="Buscar"
                />
                <i className="icon-search"></i>
                <input
                  type="submit"
                  value="Buscar"
                  className="--btn --primary com-search__submit"
                />
              </form>
            </div>
            <div className="col-4  header__middle">
              <Link href="/" className="header__middle__logo">
                <i className="logo-la-nacion"></i>
              </Link>
            </div>
            <div className="col-4 header__right">
              <div className="com-usuario">
                <button className="--btn --highlight hlp-marginRight-35">
                  Suscribite
                </button>
                <button className="--btn --secondary">Ingresar</button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header>
        <header className="header-mobile">
          <div className="lay">
            <div className="row">
              <div className="col-6">
                <Link href="/" className="header-mobile__logo">
                  <i className="logo-la-nacion"></i>
                </Link>
              </div>
              <div className="col-6 hlp-text-right">
                <Link href="">Suscribite</Link>
              </div>
            </div>
          </div>
        </header>
      </header>
      <nav className="com-nav-mobile --scrollUp">
        <div className="row">
          <Link href="" className="col-2 item-foo">
            <i className="icon-home"></i>
            <p>Home</p>
          </Link>
          <Link href="" className="col-4 item-foo">
            <i className="icon-club"></i>
            <p>Club LA NACION</p>
          </Link>
          <Link href="" className="col-3 item-foo">
            <i className="icon-comment"></i>
            <p>Mi cuenta</p>
          </Link>
          <button className="col-2 item-foo">
            <i className="icon-menu"></i>
            <p>Menú</p>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
