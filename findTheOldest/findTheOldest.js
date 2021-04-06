let findTheOldest = function(arr) {

 arr.forEach(p => {
    if(p.yearOfDeath) {
        let yearOld = p.yearOfDeath - p.yearOfBirth
       return p.age = yearOld
    }
    let today = new Date().getFullYear()
    return p.age = today - p.yearOfBirth
})

arr.sort((a,b) => (a.age < b.age) ? 1 : -1)
return arr[0]

} 
        

module.exports = findTheOldest
