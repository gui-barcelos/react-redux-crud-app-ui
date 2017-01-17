import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-collapse" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">App</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li>
                            <IndexLink to="/" >Home</IndexLink>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;