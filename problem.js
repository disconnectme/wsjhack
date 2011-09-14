/*
  You have five golden tickets to issue -- first come, first served. Each lucky
  recipient has one minute to claim their ticket. Unclaimed tickets revert back
  to the original pool.

  Complete the "requestTicket" and "claimTicket" implementations. No more than a
  few lines of code are required. Use JavaScript, as your answer will be
  automatically tested.
*/

/* The golden tickets. */
var tickets = [1, 2, 3, 4, 5];

/* Returns a ticket number and timeout identifier or timestamp, if any. */
function requestTicket() {
  // TODO: Enter your code here.
  return {ticket: ticket, timeout: timeout};
}

/* Returns "true" if the ticket was successfully claimed, "false" otherwise. */
function claimTicket(ticket, timeout) {
  // TODO: Enter your code here.
  return claimed;
}
