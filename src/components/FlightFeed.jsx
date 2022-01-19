import React from 'react';
import FlightCard from './FlightCard';
import { Link } from 'react-router-dom';

const FlightFeed = ({ flights }) => {
  return (
    <div>
      <h3>Available Departing Flights</h3>
      {flights.map((flightInfo, index) => (
        <FlightCard key={index} flightInfo={flightInfo} />
      ))}

      {flights.length === 0 && <p> No flights available. Click <Link to={'/home'}>here</Link> to return to the home page and search again.</p>}

    </div>
  );
};

export default FlightFeed;

