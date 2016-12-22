/*Will display 5 a bunch of times. This is for various reasons
  1. JS only has function Scopes
  2. setTimeout() is scoping to the outside scope of the loop
  3. since we are outside the for loop there is only one i value
  4. So, the code can be interpreted as 5 setTimeout stacked with the value i
*/
for (var i=1; i<=5; i++) {
    setTimeout( function timer(){
        console.log( i );
    }, i*1000 );
}
