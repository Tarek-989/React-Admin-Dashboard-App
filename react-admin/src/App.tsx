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
							{/* <Route path="/contacts" element={<ContactsContainer />} /> */}
							{/* <Route path="/invoices" element={<InvoicesContainer />} /> */}
							{/* <Route path="/form" element={<FormContainer />} /> */}
							{/* <Route path="/bar" element={<BarContainer />} /> */}
							{/* <Route path="/pie" element={<PieContainer />} /> */}
							{/* <Route path="/line" element={<LineContainer />} /> */}
							{/* <Route path="/faq" element={<FaqContainer />} /> */}
							{/* <Route path="/geography" element={<GeographyContainer />} /> */}
							{/* <Route path="/calender" element={<CalenderContainer />} /> */}
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

