import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing/landing";
import VolunteersDashboard from "./pages/volunteers/dashboard/dashboard";
import VolunteersLayout from "./pages/volunteers/layout/layout";
import VolunteersReports from "./pages/volunteers/reports/reports";
import VolunteersResources from "./pages/volunteers/resources/resources";
import VolunteersSettings from "./pages/volunteers/settings/settings";
import VolunteersTasks from "./pages/volunteers/tasks/tasks";

function App() {
  let theme = createTheme({
    palette: {
      primary: {
        main: "#E01B24",
      },
      secondary: {
        main: "#ffffff",
      },
    },
    typography: {
      fontFamily: "Inria Sans",
    },
  });
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/volunteers" element={<VolunteersLayout />}>
            <Route index element={<VolunteersDashboard />} />
            <Route path="/volunteers/tasks" element={<VolunteersTasks />} />
            <Route
              path="/volunteers/resources"
              element={<VolunteersResources />}
            />
            <Route path="/volunteers/reports" element={<VolunteersReports />} />
            <Route
              path="/volunteers/settings"
              element={<VolunteersSettings />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
