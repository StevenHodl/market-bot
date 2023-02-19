import { NavLink } from "react-router-dom";

export function ListingLayout() {
  return (
    <>
      <NavLink to={`/listing/${id}`}></NavLink>
      <NavLink to="/listing/new"></NavLink>
    </>
  );
}

export default ListingLayout;
