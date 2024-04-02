// code your solution here
// Define the superbowlWin function
function superbowlWin(record) {
    // Loop through each game in record
    for (let game of record) {
        // Check if the game result is a win "W"
        if (game.result === "W") {
            // If win is found, return the year of the win
            return game.year;
        }
    }

    // If no win is found, return undefined
    return undefined;
}

// Sample data
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
   
];

// Using the superbowlWin function with the sample data
console.log(superbowlWin(record)); 
// Output will be the yr of win or undefined
