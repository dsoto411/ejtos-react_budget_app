import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const [currency, setCurrency] = useState('');
  const { dispatch } = useContext(AppContext);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const changeCurrency = () => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: currency,
    });
  };

  useEffect(() => {
    // Log the selected currency for debugging purposes
    console.log(currency);
    // Call your currency update logic here (e.g., update currency representations)
    // You can dispatch an action or directly update the UI as needed
    // For simplicity, I'm just logging the currency for now.
  }, [currency]);

  return (
    <div className="alert alert-secondary">Currency
      <select id="inputGroupSelect02" onChange={handleChange}>
        <option value="$" name="dollar">$ Dollar</option>
        <option value="£" name="pound">£ Pound</option>
        <option value="€" name="euro">€ Euro</option>
        <option value="₹" name="ruppee">₹ Ruppee</option>
      </select>
    </div>
  );
};

export default Currency;
