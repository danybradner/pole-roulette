/* I want to be able to create a game that will pick random moves,
the goal is help students create combos in their own style,
it's also to help freestyling.
Things  I need to consider: 
1. Level of student in pole.
2. Add a challenge in emotion
3. add a movement. Example: add a "twizzle if possible,""use arms", "use head" 
4. create a modified variation of easy, medium, hard, expert mode */
let name = 'Dany';
console.log (`Hello ${name}`);
//Enter a name

let techlevel = 2;
//enter a level. It will determine the suggested move combo. 


const randomNumber = 
Math.floor(Math.random()*32);
let beginner='';
switch (randomNumber){
    case 0: 
   beginner = '90 floor turn';
      break;
    case 1:
    beginner = 'Pole Walk';
       break;
    case 2:
    beginner = 'Sit on the Pole';
       break;
    case 3:
    beginner= 'Back arch';
       break;
    case 4: 
    beginner = 'Back Hook Spin';
       break;
    case 5: 
    beginner = 'Backslide (one leg extended)';
       break;
    case 6: 
    beginner = 'Backwards Pole Switch';
       break;
    case 7: 
    beginner = 'Ballet Hook';
      break;
   case 8:
   beginner = 'Basic Fireman'
      break;
   case 9:
   beginner = 'Body Wave'
      break;
   case 10:
   beginner = 'Bounce to Sidestep'
      break;
   case 11:
   beginner = 'Cat Crawl'
      break;
   case 12:
   beginner = 'Hello Boys'
      break;
   case 13:
   beginner = 'Dip to Wrap Around'
      break;
   case 14:
   beginner = 'Eternal Pole Walks'
      break;
   case 15:
   beginner = 'Figure of Eight'
      break;
   case 16:
   beginner = 'Do a box step'
      break;
   case 17:
   beginner = 'Trucker'
      break;
   case 18:
   beginner = 'Floor Fan'
      break;
   case 19:
   beginner = 'Floor inversion'
      break;
   case 20:
   beginner = 'Floor star'
      break;
   case 21:
   beginner = 'Forwards Body Slide'
      break;
   case 22:
   beginner = 'Leg waves'
      break;
   case 23:
   beginner = 'Spinning climb'
      break;
   case 24:
   beginner = 'High Hand Piroutte (once handed)'
      break;
   case 25:
   beginner = 'High Hand Piroutte (two handed)'
      break;
   case 26:
   beginner = 'Hip circles'
      break;
   case 27:
   beginner = 'Knee Circles'
      break;
   case 28:
   beginner = 'climb to stand'
      break;
   case 29:
   beginner = 'Log Roll'
      break;
   case 30:
   beginner = 'Backwards Knee Hook'
      break;
  };

  const level1Number = 
  Math.floor(Math.random()*4);
  let tech1='';
  switch (level1Number){
      case 0: 
      tech1 = 'Layout';
        break;
      case 1:
      tech1 = 'Cross leg hangback';
         break;
      case 2:
      tech1  = 'Ankle Grab';
      break;
      case 3:
      tech1  = 'Bat';
      break;
      
    };
 
const level2Number = 
Math.floor(Math.random()*4);
let tech2='';
switch (level2Number){
   case 0: 
    tech2 = 'Straddle Right Side';
       break;
   case 1:
    tech2 = 'Straddle Left Side';
       break;
    case 2:
    tech2  = 'Outside Leg Hang';
      break;
   case 3:
   tech2  = 'Caterpillar';
      break;
        
      }; 
      
    
const moreRandom = 
Math.floor(Math.random()*6);
let bonus='';
switch (moreRandom){
    case 0: 
    bonus = 'add spirit fingers';
      break;
    case 1:
    bonus = 'make it fabolous';
       break;
    case 2:
    bonus = 'add an twizzle';
       break;
    case 3:
    bonus = 'use your opposite side';
       break;
    case 4: 
    bonus = 'make it happy';
       break;
    case 5: 
    bonus = 'make it sad';
       break;
  };


if (techlevel == 0 ) {
  console.log (`Hey, try to do ${beginner}, ${beginner}, and then try to ${bonus}`);
} 
else if(techlevel == 1) {
  console.log (`Hey, try to do ${beginner}, ${tech1}, and then try to ${bonus}`);
} 
else if(techlevel == 1.5) {
  console.log (`Hey, try to do ${tech1}, ${tech1}, and then try to ${bonus}`);
}
else if(techlevel == 2) {
   console.log (`Hey, try to do ${tech2}, ${tech1}, and then try to ${bonus}`);
} 
else {
console.log(`Make it all up!`);  
}