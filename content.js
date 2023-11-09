// content.js

function convertToUTC(dateTimeString) {
  // Create a date object from the string
  const date = new Date(dateTimeString);

  // Convert the date to UTC by converting it to the time value
  // The time value is the number of milliseconds since Jan 1, 1970 UTC
  const timeValue = date.getTime();

  // Create a new Date object from that time value
  // This new Date object is in the local time zone of the browser, but it represents the same moment in time
  const utcDate = new Date(timeValue);

  // Format to your desired string
  return utcDate.toISOString().split('.')[0] + 'Z';
}

function updateDateTimeElements() {
  // Query all time elements with data-cy-class attribute set to "datetime"
  const timeElements = document.querySelectorAll('time[data-cy-class="datetime"]');

  // Loop through each time element to convert the datetime
  timeElements.forEach(element => {
    // Get the original datetime attribute
    const originalDateTime = element.getAttribute('datetime');

    // Convert to UTC and update the displayed text
    const convertedDateTime = convertToUTC(originalDateTime);
    element.textContent = convertedDateTime;
  });
}

// Run the function initially
updateDateTimeElements();

// Optionally, run the function periodically to catch dynamic changes
setInterval(updateDateTimeElements, 1000);
