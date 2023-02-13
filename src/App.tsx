import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

import PostsPage from "./pages/PostsPage";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<PostsPage />} />
      </Routes>
    </Container>
  );
}

export default App;
