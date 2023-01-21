import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { TopBar } from "./pages/global";

export const App: React.FC = () => {
	const [theme, colorMode] = useMode();
	return (
		<ColorModeContext.Provider value={colorMode as { toggleColorMode: () => void; }}>
			<ThemeProvider theme={theme as Theme}>
				<CssBaseline />
				<div className="app">
					<main className="content">
						<TopBar />
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

