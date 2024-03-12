import "./Header.css";
import "./Nav.css";
import logo from "../../assets/img/netflix-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <>
      {/* <div className="header-outer-container container-fluid">
        <div className="header-container">
          <div className="header-left">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="" width="100px" className="logo" />
            </a>
            <ul>
              <li>Home</li>
              <li>TvShow</li>
              <li>Movies</li>
              <li>Latest </li>
              <li>My Lists</li>
              <li>Browse</li>
            </ul>
          </div>
          <div className="header-right">
            <ul>
              <li>
                <SearchIcon />
              </li>
              <li>
                <NotificationsNoneIcon />
              </li>
              <li>
                <AccountBoxIcon />
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      {/* <nav className="navbar navbar-expand-md navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" width="100px" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav lists">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  TvShow
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Latest
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Lists
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Browse
                </a>
              </li>
              <li className="nav-item ms-auto ">
                <a className="nav-link " href="#">
                  <SearchIcon />

                  <NotificationsNoneIcon />

                  <AccountBoxIcon />

                  <ArrowDropDownIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <nav className="navbar navbar-expand-md navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" width="100px" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-auto" id="navbarNav">
            <ul className="navbar-nav lists">
              <li className="nav-item">
                <a className="nav-link me-auto" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  TvShow
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Latest
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Lists
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Browse
                </a>
              </li>
              {/* <li className="nav-item nav-right">
                 <a className="nav-link icons" href="#">
                  <SearchIcon />
                  <NotificationsNoneIcon />
                  <AccountBoxIcon />
                  <ArrowDropDownIcon />
                </a> 
                 
              </li> */}
              <li className="nav-item nav-right">
                <a className="nav-link icons" href="#">
                  <SearchIcon style={{ marginRight: "10px" }} />
                  <NotificationsNoneIcon style={{ marginRight: "10px" }} />
                  <AccountBoxIcon style={{ marginRight: "10px" }} />
                  <ArrowDropDownIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
