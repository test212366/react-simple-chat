import { Switch, Route, Redirect } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes'
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts'


export const AppRouter = () => {
	const user = false

	return user ? (
		<Switch>
			{privateRoutes.map(({ path, Component }) =>
				<Route key={Date.now()} path={path} component={Component} exact={true} />
			)}
			<Redirect to={CHAT_ROUTE} />
		</Switch>
	)
		:
		(
			<Switch>
				{publicRoutes.map(({ path, Component }) =>
					<Route key={Date.now()} path={path} component={Component} exact={true} />
				)}
				<Redirect to={LOGIN_ROUTE} />
			</Switch>
		)
}