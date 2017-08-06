var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
            <ul className="menu">
                <li className="menu-text">React Time App</li>
                <li>
                  <IndexLink to="/" activeClassName="active" activeStyle={{borderBottom: '2px solid white'}}>Timer</IndexLink>
                </li>
                <li>
                  <Link to="/countdown" activeClassName="active" activeStyle={{borderBottom: '2px solid white'}}>Countdown</Link>
                </li>
            </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Built by <a href="https://github.com/adamsenese" target="_blank">Adam Senese</a></li>
          </ul>
        </div>
      </div>
    );
  }

module.exports = Nav;
