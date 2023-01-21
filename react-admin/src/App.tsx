import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { SideBar, TopBar } from "./pages/global";
import { Route, Routes } from "react-router-dom";
import { DashboardContainer } from "./pages/dashboard/DashboardContainer";

export const App: React.FC = () => {
	const [theme, colorMode] = useMode();
	return (
		<ColorModeContext.Provider value={colorMode as { toggleColorMode: () => void; }}>
			<ThemeProvider theme={theme as Theme}>
				<CssBaseline />
				<div className="app">
					<SideBar />
					<main className="content">
						<TopBar />
						<Routes>
							<Route path="/" element={<DashboardContainer />} />
							{/* <Route path="/team" element={<DashboardContainer />} /> */}
							{/* <Route path="/contacts" element={<DashboardContainer />} /> */}
							{/* <Route path="/invoices" element={<DashboardContainer />} /> */}
							{/* <Route path="/form" element={<DashboardContainer />} /> */}
							{/* <Route path="/bar" element={<DashboardContainer />} /> */}
							{/* <Route path="/pie" element={<DashboardContainer />} /> */}
							{/* <Route path="/line" element={<DashboardContainer />} /> */}
							{/* <Route path="/faq" element={<DashboardContainer />} /> */}
							{/* <Route path="/geography" element={<DashboardContainer />} /> */}
							{/* <Route path="/calender" element={<DashboardContainer />} /> */}
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

