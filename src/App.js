import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { Header } from "./components/header";
import Main from "./pages/main";
import Generate from "./pages/main/generate";
import Listings from "./pages/main/listings";
import Dashboard from "./pages/dashboard";
import Index from "./pages";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function App() {
  return (
    <Box>
      <Header />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/main" element={<Main />}>
            <Route path="generate" element={<Generate />} />
            <Route path="listings" element={<Listings />} />
          </Route>
          <Route path="/dashboard/:id" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Box>
  );
}

export default App;
