import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const NavBar = (props)=>{

    return (
        <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>
            </ul>
            <div className="custom-control custom-switch">
              <input type="checkbox" className="custom-control-input" id="customSwitch1" />
              <label className="custom-control-label" for="customSwitch1">Dark Mode</label>
            </div>
          </div> 
        </div>
      </nav>
    </div>
    );
}

export default NavBar;

NavBar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}

NavBar.defaultProps = {
    title: "Title",
    aboutText: "About"
}