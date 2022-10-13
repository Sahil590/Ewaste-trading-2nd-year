import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ListingCard from "./ListingCard";
import convertListingDate from "../utils/functions";

function Listings({ userid }) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios
      .get(userid ? `/users/${userid}/listings/` : "/listing")
      .then((res) => {
        setListings(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <Row>
      {listings.map((listing) => (
        <ListingCard
          listings = {listing}
        />
      ))}
    </Row>
  );
}

export default Listings;