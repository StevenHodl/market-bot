import React, { Component, useEffect } from "react";
import Categories from "./pages/Categories";
import MyListings from "./pages/MyListings";
import { ListingRoutes } from "./components/commons/ListingRoutes";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import { Routes, Route } from "react-router-dom";

const tele = window.Telegram.WebApp;
function App() {
  useEffect(() => {
    tele.ready();
    tele.expand();
  });
  return (
    <Routes>
      <Route path="/*" element={<ListingRoutes />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/listings/*" element={<ListingRoutes />} />
      <Route path="/my_listings/*" element={<MyListings />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}


export default App;
