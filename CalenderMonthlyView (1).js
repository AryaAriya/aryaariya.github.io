document.addEventListener('DOMContentLoaded', function() {
  var currentDate = new Date();
  var currentMonth = currentDate.getMonth();
  var currentYear = currentDate.getFullYear();

 function updateCalendar(month, year) {
  var firstDay = new Date(year, month, 1);
  var lastDay = new Date(year, month + 1, 0);

  document.querySelector('.month li:nth-child(3)').innerHTML = 
    `${monthNames[month]}<br><span style="font-size:18px">${year}</span>`;

  var days = document.querySelectorAll('.days li');
  for (var i = 0; i < days.length; i++) {
    days[i].innerHTML = ''; // Clear the previous entries
  }

  for (var d = firstDay.getDay(), i = 1; i <= lastDay.getDate(); d++, i++) {
    days[d].innerHTML = i; // Fill in the correct dates
  }
}

  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  document.querySelector('.prev').addEventListener('click', function() {
    if (currentMonth === 0) {
      currentMonth = 11;
      currentYear -= 1;
    } else {
      currentMonth -= 1;
    }
    updateCalendar(currentMonth, currentYear);
  });

  document.querySelector('.next').addEventListener('click', function() {
    if (currentMonth === 11) {
      currentMonth = 0;
      currentYear += 1;
    } else {
      currentMonth += 1;
    }
    updateCalendar(currentMonth, currentYear);
});

  updateCalendar(currentMonth, currentYear);
});
}
