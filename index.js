
let age = Number(prompt("what's your age ?"))

let travelingDistance = Number(prompt("how many km are you traveling ?"))
const pricePerKm = 0.21 

let travelPrice = 0.21 * travelingDistance

let discountPrice

if( typeof(age) !== "number" || typeof(travelingDistance) !== "number"){
    console.log("You are entering a wrong data type")
}

else if(age > 18 && age < 65){
  travelPrice = alert(` Ticket price will be : ${pricePerKm * travelingDistance}£`) 
} 

else if(age < 18){
    discountPrice = alert(`Normal ticet price would be ${travelPrice}£  but you are getting 20% of
    ${pricePerKm * travelingDistance * 0.20(2)}£ and the new price will be  ${travelPrice - pricePerKm * travelingDistance * 0.20}£`)
}

else if(age >= 65){
    discountPrice = alert(`Normal ticet price would be ${travelPrice}£  but you are getting 40% of
    ${pricePerKm * travelingDistance * 0.40}£ and the new price will be  ${travelPrice - pricePerKm * travelingDistance * 0.40}£`)
}