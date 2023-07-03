import './myApp.css';

function Header() {
    return (<>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid">
  <a class="navbar-brand" href="#">
      <img src="./img/logo.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top mylogo"/>
  </a>
  <a className="webName"><h5>FOOD-E-STHAAN</h5></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">MENU</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ABOUT US</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CONTACT US</a>
        </li>
      </ul>
    </div>
    <button className="btn mybtn">LOGIN</button>
    <button className="btn mybtn">SIGN UP</button>
  </div>
</nav>
    </>);
}

export default Header;