export default function formatDate(d: string): string {
  let edit = d.split("-");
  let month = edit[1];
  let day = edit[2];
  let th = "";
  let year = edit[0];

  if (month === "1") {
    month = "January";
  } else if (month === "2") {
    month = "Febuary";
  } else if (month === "3") {
    month = "March";
  } else if (month === "4") {
    month = "April";
  } else if (month === "5") {
    month = "May";
  } else if (month === "6") {
    month = "June";
  } else if (month === "7") {
    month = "July";
  } else if (month === "8") {
    month = "August";
  } else if (month === "9") {
    month = "September";
  } else if (month === "10") {
    month = "October";
  } else if (month === "11") {
    month = "November";
  } else {
    month = "December";
  }

  switch (day) {
    case "1":
    case "21":
    case "31":
      th = "st";
      break;
    case "2":
    case "22":
      th = "nd";
      break;
    case "3":
    case "23":
      th = "rd";
      break;
    default:
      th = "th";
  }

  return `${month} ${day}${th} ${year}`;
}
