let age = prompt("what's your age ?")
let travelingDistance = prompt("how many km are you traveling ?")
const pricePerKm = 0.21 

let travelPrice = 0.21 * travelingDistance

if(age > 18 && age < 65){
  travelPrice = alert(` Ticket price will be : ${0.21 * travelingDistance}£`) 
}

if(age < 18){
    let discountPrice = alert(`Normal ticet price would be ${travelPrice}£  but you are getting 20% of ${0.21 * travelingDistance * 0.20}£`)
}

if(age >= 65){
    discountPrice = alert(`Normal ticet price would be ${travelPrice}£  but you are getting 20% of ${0.21 * travelingDistance * 0.40}£`)
}