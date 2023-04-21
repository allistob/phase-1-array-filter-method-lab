const drivers = ('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby')
function findMatching(drivers,name)
{
    return drivers.filter(driver => driver.toLowerCase()=== name.toLowerCase())
 
}

function fuzzyMatch(drivers,letter)
{
    return drivers.filter(drivers => drivers.startsWith(letter))
}
 
function matchName(drivers,name)
{
    return drivers.filter(driver => driver.name === name)
}
