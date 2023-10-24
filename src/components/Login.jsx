import { Container, Grid } from "@material-ui/core"
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { useContext } from "react"
import { Context } from ".."
export const Login = () => {
	const { auth } = useContext(Context)
	console.log(auth)
	return (
		<Container>
			<Grid container style={{ height: window.innerHeight - 50 }}
				alignItems={'center'}
				justify={'center'}
			>
				<Grid style={{ width: 200, background: "lightgray" }}
					container
					alignItems={'center'}>
					<Box p={5}>
						<Button variant={'outlined'}>Login google</Button>
					</Box>
				</Grid>

			</Grid>
		</Container>
	)
}