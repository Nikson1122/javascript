// Immediately invoked Function Expressions (IIEE)

(function chiya (){
    // named iife
    console.log(`DB CONNECTED `);
}) ();

//() /*Definition*/ () /* Execution */

((name) => {
    console.log(` DB CONNECTED TWO ${name}`)
}

) ('Nikson')
