import { Link } from "react-router-dom";

/**
 * This is Header component
 *
 * It contains logo and other useful informations
 *
 * Data will be passed to close game, to change game, or to reset current game
 *
 * @returns
 */
const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="row">
					<div className="header__nav col-12">
						<nav>
							<Link to="/">Home</Link>
						</nav>
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<h1>
							Geta <br />
							Darts
						</h1>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
