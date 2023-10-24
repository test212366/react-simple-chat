import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/consts';

export const Navbar = (props) => {
	const user = false
	return (
		<div>
			<AppBar position="static">
				<Toolbar variant={'dense'}>
					<Grid container justify={'flex-end'}>
						{user ?
							<Button variant={'outlined'}>exit</Button>
							:
							<NavLink to={LOGIN_ROUTE}>
								<Button variant={'outlined'}>login</Button>
							</NavLink>
						}
					</Grid>
				</Toolbar>
			</AppBar>
		</div>
	);
}