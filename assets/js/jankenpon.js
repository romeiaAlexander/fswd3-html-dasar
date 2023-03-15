function playGame() {
    // Pilihan yang bisa user gunakan
    var userChoice = prompt("Choose rock, paper, or scissors:");
  
    // Generate a random choice for the computer
    var choices = ["rock", "paper", "scissors"];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    // Penentuan menang kalah atu seri
    var result;
    if (userChoice === computerChoice) {
      result = "Tie!";
    } else if (
      (userChoice == "rock" && computerChoice == "scissors") ||
      (userChoice == "paper" && computerChoice == "rock") ||
      (userChoice == "scissors" && computerChoice == "paper")
    ) {
      result = "You win!";
    } else {
      result = "Computer wins!";
    }
  
    alert("You chose " + userChoice + "The computer chose " + computerChoice + result);
  }
  