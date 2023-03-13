import { Route, Routes } from "react-router-dom";
import Listings from "../../pages/Listings";
import Listing from "../../pages/Listing";
import NewListing from "../../pages/NewListing";

export function ListingRoutes() {
  return (
    <Routes>
      <Route index element={<Listings filter="" />} />
      <Route path="/market" element={<Listings filter="market" />} />
      <Route path="/services" element={<Listings filter="services" />} />
      <Route path="/exchange" element={<Listings filter="exchange" />} />
      <Route path=":id" element={<Listing />} />
      <Route path="new" element={<NewListing />} />
    </Routes>
  );
}