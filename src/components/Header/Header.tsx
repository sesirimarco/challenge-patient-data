import "./Header.scss";

import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="Header">
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/notes">Notes</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
