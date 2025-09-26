// MATI WORK
// DAVID WORK
// IVAN WORK
// ALEX WORK
function runSimulation() {
  let tickets = 10;
  let users = [
    "Alex",
    "Matias",
    "Diego",
    "Ivan",
    "Franco",
    "Juan",
    "David",
    "Doyel",
    "Piero",
    "Nacho",
    "Korzu",
    "Carolina",
  ];
  function buyTicket() {
    users.forEach((user) => {
      setTimeout(() => {
        console.log(user);
      }, Math.random() * 5000);
      if (tickets <= 0) {
        console.log("There are not more tickets");
      } else {
        console.log(`There are ${AcaVaAlgo}, you have bought`);
      }
      if (user) {
        function tryToBuyATicket() {
          `${user} has bought a ticket ${(tickets = tickets - 1)}`;
          tickets < 10;
        }
        tryToBuyATicket();
      }
    });
  }
  buyTicket();
}
// DIEGO WORK
