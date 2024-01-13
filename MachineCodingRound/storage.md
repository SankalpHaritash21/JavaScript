LocalStorage
In this mechanism, data is stored locally in the browser cache, and it will not be deleted even when the browser is closed and reopened. It can store the maximum amount of data and be cleared only through Javascript or from the browser cache itself.
Data is stored in the form of key/value pairs or name/value pairs in the storage, and to retrieve the value stored, we can use the key to access it.
Note: The key/values are stored in the string format. Hence to use them anywhere else, we shouldn’t forget to convert them accordingly.
Let’s look at an example to understand the concept of Local Storage.
Let’s consider a simple case: we have a button on which we can click as many times as we want in one session, and after closing it, the count will start from where we left.

Look at the following Code:

<!DOCTYPE html>
<html>
   <head>
       <title>WEB STORAGE API EXAMPLE</title>
   <script>
       // function to increment the Counter
       function incrementCounter(){
           // check  if the web storage is supported by the browser
           if(typeof(Storage) !== "undefined"){
               // if the click count is not 0
               // increment it
               if(localStorage.clickcount){
                   localStorage.clickcount = Number(localStorage.clickcount)+1;
               }else{
               // otherwise set it to 1
               localStorage.clickcount = 1;
               }
               document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
           }else{
               document.getElementById("result").innerHTML = "Bad Luck! Your browser does not support Web storage API"
           }
       }
   </script>
   </head>
   <body>
       <!-- Creating a button object that increments the counter-->
       <p><button onclick="incrementCounter()" type="button">Click</button></p>
       <!-- seperate div block to display the count-->
       <div id = "result"></div>
       <p>Click the button few times and keep track
           of the number of times you have clicked<br> Now close the browser and start it again</p>
       <p> Start clicking the button. The counter would increase from the count where you left it.</p>   
   </body>
</html>
The output of the code looks like this:

After clicking 4 times

After reloading the page and clicking the button

SessionStorage
In this mechanism, data is stored inside the web cache or wherever the storage is but the only difference from the localStorage is that data will not be stored once the browser is closed.

Continuing with the same example discussed in localStorage, if you click the button, you will see that count gets incremented when you start clicking on it during a particular session, but once the browser is closed and reopened, the counter starts from 1 again.

Sample Code for the same is as follows:

<!DOCTYPE html>
<html>
   <head>
       <title>WEB STORAGE API EXAMPLE</title>
   <script>
       // function to increment the Counter
       function incrementCounter(){
           // check  if the web storage is supported by the browser
           if(typeof(Storage) !== "undefined"){
               // if the click count is not 0
               // increment it
               if(sessionStorage.clickcount){
                   sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
               }else{
               // otherwise set it to 1
               sessionStorage.clickcount = 1;
               }
               document.getElementById("result").innerHTML = "You have clicked the button " + sessionStorage.clickcount + " time(s).";
           }else{
               document.getElementById("result").innerHTML = "Bad Luck! Your browser does not support Web storage API"
           }
       }
   </script>
   </head>
   <body>
       <!-- Creating a button object that increments the counter-->
       <p><button onclick="incrementCounter()" type="button">Click</button></p>
       <!-- seperate div block to display the count-->
       <div id = "result"></div>
       <p>Click the button few times and keep track
           of the number of times you have clicked<br> Now close the browser and start it again</p>
       <p> Start clicking the button. The counter would increase from the count where you left it.</p>   
   </body>
</html>

There 3 main interfaces present inside the Web Storage API in HTML:

Storage Interface
Window Interface
StorageEvent Interface

1. When to use session storage and local storage?
   Ans: Session storage - It is used when there are frequent changes.
   Local storage - It is used when there are no long-term changes.
