import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import stayBG from '../images/site-images/hotel.jpeg';
import flightBG from '../images/site-images/flight.jpg';
import carRentalBG from '../images/site-images/car-rental.jpg';
import safariBG from '../images/site-images/safari.jpeg';

const Nav = ({ onSearchClick }) => {
  const [activeSection, setActiveSection] = useState('stays');
  const [searchInput, setSearchInput] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('./images/site images/hotel.jpeg');

  useEffect(() => {
    // Update the background image based on the active section
    const backgroundImages = {
      stays: stayBG,
      flights: flightBG,
      carRentals: carRentalBG,
      safariTours: safariBG,
    };
    setBackgroundImage(backgroundImages[activeSection]);
  }, [activeSection]);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(searchInput);
    onSearchClick();
  };
  
  const handleSectionChange = (section) => {
    setActiveSection(section);
    setCategory(section); // Update category in context
  };
  const navigate= useNavigate();
  const gotoLogin=()=>{
    navigate('/login')
  }
  const goHome=()=>{
    navigate('/?')
  }
  const renderForm = () => {
    switch (activeSection) {
      case 'stays':
        return <Stay />;
      case 'flights':
        return <Flight />;
      case 'carRentals':
        return <CarRental />;
      case 'safariTours':
        return <SafariTour />;
      default:
        return null;
    }
  };

  const stilo = {
    body: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: 'rgb(19, 20, 21)',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      height: '600px',
      width: '100%',
      top: '7%',
      right: '0',
      padding: '0px',
      position: 'absolute',
      borderBottom: 'solid 4px rgb(11, 14, 17)',
    },
  };

  return (
    <div>
      {/* Top Navigation Bar */}
      <div style={styles.topNav}>
        <div style={styles.logo}>no-name.com</div>
        <div style={styles.topNavRight}>
          <span style={styles.currency}>USD</span>
          <span style={styles.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
              alt="US Flag"
              style={styles.flag}
            />
          </span>
          <span style={styles.help}>?</span>
          <button style={styles.navButton} onClick={goHome}>home</button>
          <button style={styles.navButton}>List your property</button>
          <button style={styles.navButton} onClick={gotoLogin}>sign in</button>
        </div>
      </div>

      {/* Navigation Links */}
      <div style={stilo.body}>
        <div style={styles.nav}>
          <ul style={styles.navUl}>
            <li
              onClick={() => handleSectionChange('stays')}
              style={
                activeSection === 'stays'
                  ? { ...styles.navLi, ...styles.activeNavLi }
                  : styles.navLi
              }
            >
              Stays
            </li>
            <li
              onClick={() => handleSectionChange('flights')}
              style={
                activeSection === 'flights'
                  ? { ...styles.navLi, ...styles.activeNavLi }
                  : styles.navLi
              }
            >
              Flights
            </li>
            <li
              onClick={() => handleSectionChange('carRentals')}
              style={
                activeSection === 'carRentals'
                  ? { ...styles.navLi, ...styles.activeNavLi }
                  : styles.navLi
              }
            >
              Car Rentals
            </li>
            <li
              onClick={() => handleSectionChange('safariTours')}
              style={
                activeSection === 'safariTours'
                  ? { ...styles.navLi, ...styles.activeNavLi }
                  : styles.navLi
              }
            >
              Safari Tours
            </li>
          </ul>
        </div>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="where are you going?.."
            value={searchInput}
            onChange={handleSearchChange}
            style={styles.search}
          />
          <button type="submit" style={styles.searchbtn}>
            Search
          </button>
        </form>
        <div>{renderForm()}</div>
      </div>
    </div>
  );
};

export default Nav;

function Stay() {
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState('');
  const navigate = useNavigate();

  const handleStaySubmit = (e) => {
    e.preventDefault();
    const stayDetails = {
      destination,
      checkInDate,
      checkOutDate,
      guests,
    };
    navigate('/hotel', { state: stayDetails });
  };

  return (
    <>
      <h2 style={styles.formMessege}> Where to? Let us help you find a spot.</h2>
      <form onSubmit={handleStaySubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Destination (e.g., Lusaka, Livingstone)"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          style={styles.input}
        />
        <input
          type="date"
          placeholder="Check-in date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          style={styles.input}
        />
        <input
          type="date"
          placeholder="Check-out date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Number of guests"
          min="1"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          style={styles.input}
        />
        <input type="submit" value="Search" style={styles.submit} />
      </form>
    </>
  );
}


function SafariTour() {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const navigate = useNavigate();

  const handleSafariSubmit = (e) => {
    e.preventDefault();
    const safariDetails = {
      location,
      date,
      groupSize,
      specialRequests,
    };
    navigate('/safari', { state: safariDetails });
  };

  return (
    <>
      <h2 style={styles.formMessege}> Explore the wild! Let us plan your safari.</h2>
      <form onSubmit={handleSafariSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Safari location (e.g., South Luangwa National Park)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={styles.input}
        />
        <input
          type="date"
          placeholder="Safari date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Group size"
          min="1"
          value={groupSize}
          onChange={(e) => setGroupSize(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Special requests or details"
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
          style={{ ...styles.input, height: '80px' }}
        ></textarea>
        <input type="submit" value="Book Safari" style={styles.submit} />
      </form>
    </>
  );
}


function CarRental() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const [carType, setCarType] = useState('');
  const navigate = useNavigate();

  const handleCarRentalSubmit = (e) => {
    e.preventDefault();
    const carRentalDetails = {
      pickupLocation,
      dropoffLocation,
      pickupDate,
      dropoffDate,
      carType,
    };
    navigate('/cars', { state: carRentalDetails });
  };

  return (
    <>
      <h2 style={styles.formMessege}> Need a ride? Find the perfect car rental for you.</h2>
      <form onSubmit={handleCarRentalSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Pick-up location"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Drop-off location"
          value={dropoffLocation}
          onChange={(e) => setDropoffLocation(e.target.value)}
          style={styles.input}
        />
        <input
          type="date"
          placeholder="Pick-up date"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
          style={styles.input}
        />
        <input
          type="date"
          placeholder="Drop-off date"
          value={dropoffDate}
          onChange={(e) => setDropoffDate(e.target.value)}
          style={styles.input}
        />
        <select
          value={carType}
          onChange={(e) => setCarType(e.target.value)}
          style={styles.input}
        >
          <option value="">Select car type</option>
          <option value="SUV">SUV</option>
          <option value="Sedan">Sedan</option>
          <option value="Compact">Compact</option>
          <option value="Luxury">Luxury</option>
        </select>
        <input type="submit" value="Find Cars" style={styles.submit} />
      </form>
    </>
  );
}

function Flight() {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travelers, setTravelers] = useState('');
  const navigate = useNavigate();

  const handleFlightSubmit = (e) => {
    e.preventDefault();
    // Create the flight object
    const flightDetails = {
      departure,
      destination,
      departureDate,
      returnDate,
      travelers,
    };
    // Navigate to "/dammy file" and pass the object as state
    navigate('/flight', { state: flightDetails });
  };

  return (
    <>
      <h2 style={styles.formMessege}>Where to? Let us help you get there ASAP.</h2>
      <form onSubmit={handleFlightSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Departure location (e.g., Lusaka)"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Destination (e.g., Ndola)"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          style={styles.input}
        />
        <input
          type="date"
          placeholder="Departure date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          style={styles.input}
        />
        <input
          type="date"
          placeholder="Return date (optional)"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Number of travelers"
          min="1"
          value={travelers}
          onChange={(e) => setTravelers(e.target.value)}
          style={styles.input}
        />
        <input type="submit" value="Search Flights" style={styles.submit} />
      </form>
    </>
  );
}



const styles = {
  topNav: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(11, 14, 17)',
    borderBottom: 'solid 4px #055dbb',
    color: 'white',
    padding: '10px 20px',
    zIndex: 1000,
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  topNavRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginRight: '40px',
  },
  currency: {
    fontSize: '16px',
    marginRight: '15px',
  },
  language: {
    display: 'flex',
    alignItems: 'center',
  },
  flag: {
    width: '20px',
    height: '15px',
    marginLeft: '5px',
  },
  help: {
    fontSize: '18px',
    backgroundColor: 'white',
    color: '#003580',
    width: '20px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    fontWeight: 'bold',
    marginLeft: '15px',
  },
  navButton: {
    padding: '8px 12px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '14px',
    color: '#003580',
    cursor: 'pointer',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
  },
  navUl: {
    listStyle: 'none',
    padding: '3px',
    display: 'flex',
    gap: '10px',
    backgroundColor: "#000002cf",
    borderRadius: '8px'
  },
  navLi: {
    padding: '10px 60px',
    cursor: 'pointer',
    borderRadius: '8px',
  },
  activeNavLi: {
    backgroundColor: '#055dbb',
    color: 'white',
    borderColor: '#007bff',
  },

  form: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: '40px',
    paddingTop: '10px',
    paddingLeft: '10px',
    backgroundColor: '#000002cf',
    borderRadius: '8px',
    height: '130px',
  },

  search:{
    margin: '5px',
    marginLeft: '100px',
    marginTop: '100px',
    marginBottom: '200px',
    padding: '15px',
    width: '420px',
    borderRadius: '15px',
    border: '1px solid #ccc',
  },

  searchbtn:{
    padding: '14px 40px',
    backgroundColor: '#055dbb',
    color: '#fff',
    border: 'none',
    borderRadius: '15px',
    fontSize: '14px',
    cursor: 'pointer',
    marginLeft: '5px',

  },
  input: {
    margin: '5px',
    padding: '15px',
    width: '420px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  submit: {
    padding: '17px 40px',
    backgroundColor: '#055dbb',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '5px',
  },
  formMessege: {
    padding: '25px',
    marginTop: '-10%',

  }
}