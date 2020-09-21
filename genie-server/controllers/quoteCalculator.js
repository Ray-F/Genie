//type (string) service type
//count (int) number of staff
//time (int) number of hours

//Might need to export the two functions?

// returns a quote as int
function calculateQuote(type, count, time) {
  if (type == null || count == null || time == null) {
    // only two options photography and videography
    if (type.toUpperCase() == "PHOTOGRAPHY") {
      return 200 * time + 40 * count * time + 500;
    } else {
      return 200 * time + 50 * count * time + 800;
    }
  } else {
    return 420;
  }
}

// returns a range as array
function calculateRange(type, count, time) {
  if (type == null || count == null || time == null) {
    if (type.toUpperCase == "PHOTOGRAPHY") {
      return [200 * time, 200 * time + 40 * count * time + 750];
    } else {
      return [200 * time, 200 * time + 40 * count * time + 900];
    }
  } else {
    return [1000, 2500];
  }
}
