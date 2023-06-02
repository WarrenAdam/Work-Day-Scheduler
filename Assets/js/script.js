// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const localeSettings = {};
dayjs.locale(localeSettings);

$(function () {
  // Get the current hour of the day using the dayjs library.
  const currentHour = dayjs().format("H");
  // The function below changes the color of each time block based on whether it's in the "past, present, or future" relative to the current hour.
  function hourlyColor() {
    $(".time-block").each(function () {
      const hourBlock = parseInt(this.id);
      $(this).toggleClass("past", hourBlock < currentHour);
      $(this).toggleClass("present", hourBlock === currentHour);
      $(this).toggleClass("future", hourBlock > currentHour);
    });
  }
  // The  function below will save the user's input in a textarea to localStorage - only when the corresponding save button has been clicked.
  function textEntry() {
    $('.saveBtn').on('click', function () {
      const key = $(this).parent().attr('id');
      const value = $(this).siblings('.description').val();
      localStorage.setItem(key, value);
    });
  }
  // The function below will refresh the color of each time block based on whether it's in the past(grey), present(red), or future(green) relative to the current time. 
  function refreshColor() {
    $('.time-block').each(function () {
      const hourBlock = parseInt(this.id);
      if (hourBlock == currentHour) {
        $(this).removeClass('past future').addClass('present');
      } else if (hourBlock < currentHour) {
        $(this).removeClass('future present').addClass('past');
      } else {
        $(this).removeClass('past present').addClass('future');
      }
    });
  }


















  // Get the current hour of the day using the dayjs library.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
