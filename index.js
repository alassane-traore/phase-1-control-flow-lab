function scuberGreetingForFeet(feet){
if (feet <= 400) {
    return console.log('This one is on me!')
 } else if (feet > 2000 && feet <=2500) {
return console.log('I will gladly take your thirty bucks.')
   } else if (feet > 2500) {
     return console.log ('No can do.')
   }
  }
   function ternaryCheckCity(city){   
   return city === 'NYC'? 'Ok, sounds good.':'NO go.'
}

function  switchOnCharmFromTip(response){
 switch(response){
  case 'generous':
    return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
      default:
        return 'Bye.'
 }
}