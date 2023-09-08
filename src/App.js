import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import { Header } from "./components/header";
import Main from "./pages/main";
import Generate from "./pages/main/generate";
import Listings from "./pages/main/listings";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Box>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main />}>
            <Route path="generate" element={<Generate />} />
            <Route path="listings" element={<Listings />} />
          </Route>
          <Route path="/dashboard/:id" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
