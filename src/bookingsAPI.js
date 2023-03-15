const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export function fetchAPI(date) {
  let result = [];
  let dt = new Date(date);
  let seed = dt.getDate();

  let random = seededRandom(seed);
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  const dateString = date.toISOString().split("T")[0];

  const timings =
    localStorage.getItem(dateString) &&
    JSON.parse(localStorage.getItem(dateString));
  if (timings) {
    const filteredResult = result.filter((i) => timings.indexOf(i) < 0);
    return filteredResult;
  }
  return result;
}

export function submitAPI(formData) {
  const dateString = formData.date;
  if (dateString) {
    const takenTimes = localStorage.getItem(dateString);
    if (takenTimes) {
      const timings = JSON.parse(takenTimes);
      timings.push(formData.finalTime);
      localStorage.setItem(dateString, JSON.stringify(timings));
    } else {
      localStorage.setItem(dateString, JSON.stringify([formData.finalTime]));
    }
  }
  return true;
}
