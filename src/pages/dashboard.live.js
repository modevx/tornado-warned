/** @jsxImportSource theme-ui */
import React from "react";
import { Page } from "components";
import { Container, Box, Grid, useThemeUI, useColorMode } from "theme-ui";

const Dashboard = () => {
	const context = useThemeUI();
	const { theme, colorMode } = context;

	React.useEffect(() => {
		console.log("THEME >>\n", theme);
		console.log("COLOR MODE >>\n", colorMode);
	}, [theme, colorMode]);

	return (
		<Page>
			<Container>
				<Grid
					sx={{
						height: "500px",
						border: "2px solid limegreen",
					}}
					columns={["1fr", "1fr 1fr", "1fr 2fr 1fr"]}
					gap={2}
				>
					<StyledBox sx={{ bg: "grey" }} />
					<Grid>
						<StyledBox sx={{ bg: "blue" }} />
						<Grid>
							<StyledBox sx={{ bg: "red" }} />
							<StyledBox sx={{ bg: "yellow" }} />
						</Grid>
					</Grid>
					<StyledBox sx={{ bg: "white" }} />
				</Grid>
			</Container>
		</Page>
	);
};

export default Dashboard;

const StyledBox = (props) => {
	return (
		<Box
			px={1}
			sx={{
				color: "text",
			}}
			{...props}
		/>
	);
};
