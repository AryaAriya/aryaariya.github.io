import React from 'react';

function SetStartTime () {
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

.start-time {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.8em;
    color: #555;
}

#set-start-of-day {
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
            <span id="month-prev" class="change-month"><</span>
            <h1 id="month">September 2024</h1>
            <span id="month-next" class="change-month">></span>
        </div>
        <div id="calendar-body">
        </div>
    </div>
    <a href="#" id="set-start-of-day">Set Start of Day</a>

<script>
document.getElementById('set-start-of-day').addEventListener('click', function() {
    const userInput = prompt("Enter your start of day time (e.g., 9:00 AM):", startOfDayTime || "9:00 AM");
    if (userInput) {
        startOfDayTime = userInput;
        populateCalendar(); // Re-populate the calendar with the updated time
    }
});

const calendarBody = document.getElementById('calendar-body');

let startOfDayTime = "";

function populateCalendar() {
    calendarBody.innerHTML = ''; // Clear the calendar

    const daysInMonth = 30;

    // Iterate through the days and create calendar cells
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.innerHTML = day;

        // Add the start time
        if (startOfDayTime) {
            const startTimeDiv = document.createElement('div');
            startTimeDiv.classList.add('start-time');
            startTimeDiv.innerHTML = `Start: ${startOfDayTime}`;
            dayDiv.appendChild(startTimeDiv);
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
export default SetStartTime;
