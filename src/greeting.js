/** 
 * Greets the user with a friendly message.
 */

function displayGreeting() {
    const name = document.getElementById("name").value;
    const greeting = `Hej ${name}! Trevligt att träffas!🫡`;
    const fact = "Visste du att flodhästar inte kan simma?🦛";
    document.getElementById("greeting").textContent = `${greeting}`;
    document.getElementById("fact").textContent = `${fact}`;
}