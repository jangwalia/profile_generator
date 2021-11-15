//Devani loves listening to Ludovico 
//Einaudi while coding, devouring
// Yak Momos for brunch, 
//prefers Tennis over any other sport,
// and is amazing at dropping mad puns at inopportune times.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name..?? ', (username) => {
  rl.question('What do you like to do?? ', (activity) => {
    rl.question('What do you listen to while doing that ?? ', (music) => {
      rl.question('Which meal is your favourite ?? ', (meal) => {
        rl.question('Which food you like to eat in that meal ?? ', (food) => {
          rl.question('Which is your favourite sport ?? ', (sport) => {
            rl.question('Whats your superPower ??..In a few words, tell us what you are amazing at! ', (superpower) => {
                console.log(`
                ${username} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, Prefers ${sport} over any other sport, and is amazing at ${superpower}.
              `);
              rl.close();
            });
          });
        });
      });
    });
  });
});

