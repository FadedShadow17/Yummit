import { createContext, useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext';

export const BookingContext = createContext(null);

export const BookingProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [favourites, setFavourites] = useState([]);
  const [bookingHistory, setBookingHistory] = useState([]);

  // Load from localStorage on mount or when user changes
  useEffect(() => {
    if (user) {
      const storedFavs = localStorage.getItem(`yummit_favs_${user.email}`);
      const storedHistory = localStorage.getItem(`yummit_bookings_${user.email}`);
      setFavourites(storedFavs ? JSON.parse(storedFavs) : []);
      setBookingHistory(storedHistory ? JSON.parse(storedHistory) : []);
    } else {
      setFavourites([]);
      setBookingHistory([]);
    }
  }, [user]);

  const toggleFavourite = (restaurant) => {
    if (!user) return;
    setFavourites(prev => {
      const exists = prev.find(r => r.id === restaurant.id);
      const updated = exists
        ? prev.filter(r => r.id !== restaurant.id)
        : [...prev, restaurant];
      localStorage.setItem(`yummit_favs_${user.email}`, JSON.stringify(updated));
      return updated;
    });
  };

  const isFavourite = (restaurantId) => {
    return favourites.some(r => r.id === restaurantId);
  };

  const addBooking = (booking) => {
    if (!user) return;
    setBookingHistory(prev => {
      const updated = [{ ...booking, bookedAt: new Date().toISOString() }, ...prev];
      localStorage.setItem(`yummit_bookings_${user.email}`, JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <BookingContext.Provider value={{ favourites, bookingHistory, toggleFavourite, isFavourite, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
};
