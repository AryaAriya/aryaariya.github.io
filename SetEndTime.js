import React from 'react';

function SetEndTime () {
return (
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calendar</title>
<style>
body {
    font-family: Arial, sans-serif;
}

#calendar {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
}

#calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #333;
    color: #fff;
}

#calendar-body {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 5px;
    padding: 10px;
    background-color: #eee;
}

.change-month {
    cursor: pointer;
}

#calendar-body div {
    position: relative;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ddd;
    text-align: center;
}

.end-time {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.8em;
    color: #555;
}

#set-end-of-day {
    display: block;
    margin: 20px auto;
    text-align: center;
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}
</style>
  
</head>
<body>
    <div id="calendar">
        <div id="calendar-header">
            <span id="month-prev" className="change-month"><</span>
            <h1 id="month">September 2024</h1>
            <span id="month-next" className="change-month">></span>
        </div>
        <div id="calendar-body">
        </div>
    </div>
    <a href="#" id="set-end-of-day">Set End of Day</a>

<script>
document.getElementById('set-end-of-day').addEventListener('click', function() {
    const userInput = prompt("Enter your start of end time (e.g., 9:00 AM):", startOfEndTime || "9:00 AM");
    if (userInput) {
        startOfEndTime = userInput;
        populateCalendar(); // Re-populate the calendar with the updated time
    }
});

const calendarBody = document.getElementById('calendar-body');

let startOfEndTime = "";

function populateCalendar() {
    calendarBody.innerHTML = ''; // Clear the calendar

    const daysInMonth = 30;

    // Iterate through the days and create calendar cells
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.innerHTML = day;

        // Add the end time
        if (startOfEndTime) {
            const startTimeDiv = document.createElement('div');
            startTimeDiv.classList.add('s-time');
            startTimeDiv.innerHTML = `Start: ${startOfEndTime}`;
            dayDiv.appendChild(endTimeDiv);
        }

        calendarBody.appendChild(dayDiv);
    }
}

populateCalendar();
</script>
</body>
</html>
  );
}
export default SetEndTime;
