import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing/landing";
import VolunteersLayout from "./pages/volunteers/layout/layout";

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
          <Route path="/volunteers" element={<VolunteersLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
