export function toTime (sec) {
  sec = parseInt(sec, 10)
  var hours = Math.floor(sec / 3600)
  var minutes = Math.floor((sec - hours * 3600) / 60)
  var seconds = sec - hours * 3600 - minutes * 60
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }
  return hours + ':' + minutes
}

export function batteryStats (battery) {
  const percentage = parseFloat((battery.level * 100).toFixed(2)) + '%'
  let fully
  let remaining
  let charging = battery.charging

  if (charging && battery.chargingTime === Infinity) {
    fully = 'Calculating...'
  } else if (battery.chargingTime !== Infinity) {
    fully = toTime(battery.chargingTime)
  } else {
    fully = '---'
  }

  if (!battery.charging && battery.dischargingTime === Infinity) {
    remaining = 'Calculating...'
  } else if (battery.dischargingTime !== Infinity) {
    remaining = toTime(battery.dischargingTime)
  } else {
    remaining = '---'
  }

  return { percentage, fully, remaining, charging }
}
