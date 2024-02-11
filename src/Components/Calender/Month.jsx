import React from "react";

function MonthDisplay({ date }) {
  if (!date) {
    return <span></span>;
  }

  // Assuming date is passed as a prop
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = date.getMonth(); // Get the month value (0-11)
  const monthName = monthNames[month]; // Get the month name from the array

  return <span>{monthName}</span>;
}

export default MonthDisplay;
