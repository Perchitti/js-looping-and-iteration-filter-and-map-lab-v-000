// Code your solution here:
function driversWithRevenueOver(driver, revenue){
  return driver.filter(i => i.revenue > revenue)
  }

function driverNamesWithRevenueOver(driver, name){
  let myArray = driversWithRevenueOver(driver, name)
  return myArray.map(i => i.name)
}

function exactMatch(driver, revenue){
  return driver.filter(i => i.revenue === revenue)
}
