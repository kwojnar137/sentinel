export function fillHeatBars(temp) {
  if (temp <= 0) {
    return ["none", "none", "none", "none", "none", "#fff"];
  }
  if (temp >= 0 && temp < 20) {
    return ["#fff", "none", "none", "none", "none", "#fff"];
  }
  if (temp >= 20 && temp < 40) {
    return ["#fff", "#fff", "none", "none", "none", "#fff"];
  }
  if (temp >= 40 && temp < 60) {
    return ["#fff", "#fff", "#fff", "none", "none", "#fff"];
  }
  if (temp >= 60 && temp < 80) {
    return ["#fff", "#fff", "#fff", "none", "none", "#fff"];
  }
  if (temp >= 80 && temp < 100) {
    return ["#fff", "#fff", "#fff", "#fff", "none", "#fff"];
  }
  if (temp >= 100) {
    return ["#fff", "#fff", "#fff", "#fff", "#fff", "red"];
  }
  return ["none", "none", "none", "none", "none"];
}

export function fillFuelStatusBars(fuel) {
  if (fuel >= 0 && fuel < 12.5) {
    return ["none", "none", "none", "none", "none", "none", "none", "red"];
  }
  if (fuel >= 12.5 && fuel < 25) {
    return ["#fff", "none", "none", "none", "none", "none", "none", "#fff"];
  }
  if (fuel >= 25 && fuel < 37.5) {
    return ["#fff", "#fff", "none", "none", "none", "none", "none", "#fff"];
  }
  if (fuel >= 37.5 && fuel < 50) {
    return ["#fff", "#fff", "#fff", "none", "none", "none", "none", "#fff"];
  }
  if (fuel >= 50 && fuel < 62.5) {
    return ["#fff", "#fff", "#fff", "#fff", "none", "none", "none", "#fff"];
  }
  if (fuel >= 62.5 && fuel < 75) {
    return ["#fff", "#fff", "#fff", "#fff", "#fff", "none", "none", "#fff"];
  }
  if (fuel >= 75 && fuel < 87.5) {
    return ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "none", "#fff"];
  }
  if (fuel >= 87.5 && fuel <= 100) {
    return ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"];
  }
  return [
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
  ];
}
