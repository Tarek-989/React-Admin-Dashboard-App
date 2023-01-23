import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { SideBar, TopBar } from "./pages/global";
import { Route, Routes } from "react-router-dom";
import { DashboardContainer } from "./pages/dashboard/DashboardContainer";
import { TeamContainer } from "./pages/team/TeamContainer";
import { ContactsContainer } from "./pages/contacts/ContactsContainer";
import { InvoicesContainer } from "./pages/invoices/InvoicesContainer";
import { FormContainer } from "./pages/form/FormContainer";
import { CalendarContainer } from "./pages/calendar/CalendarContainer";
import { FaqContainer } from "./pages/faq/FaqContainer";
import { BarContainer } from "./pages/bar/BarContainer";
import { PieContainer } from "./pages/pie/PieContainer";

export const App: React.FC = () => {
	const [theme, colorMode] = useMode();
	return (
		<ColorModeContext.Provider value={colorMode as { toggleColorMode: () => void; }}>
			<ThemeProvider theme={theme as Theme}>
				<CssBaseline />
				<Box className="app">
					<SideBar />
					<Box className="content">
						<TopBar />
						<Routes>
							<Route path="/" element={<DashboardContainer />} />
							<Route path="/team" element={<TeamContainer />} />
							<Route path="/contacts" element={<ContactsContainer />} />
							<Route path="/invoices" element={<InvoicesContainer />} />
							<Route path="/form" element={<FormContainer />} />
							<Route path="/calendar" element={<CalendarContainer />} />
							<Route path="/faq" element={<FaqContainer />} />
							<Route path="/bar" element={<BarContainer />} />
							<Route path="/pie" element={<PieContainer />} />
							{/* <Route path="/line" element={<LineContainer />} /> */}
							{/* <Route path="/geography" element={<GeographyContainer />} /> */}
						</Routes>
					</Box>
				</Box>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

