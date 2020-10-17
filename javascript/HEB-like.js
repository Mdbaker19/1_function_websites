(function (){
    // Items to buy
    let addRice = document.getElementById("add1");
    let riceCost = document.getElementById("cost1").innerHTML;
    let addBread = document.getElementById("add2");
    let breadCost = document.getElementById("cost2").innerHTML;
    let addChicken = document.getElementById("add3");
    let chickenCost = document.getElementById("cost3").innerHTML;
    let addWater = document.getElementById("add4");
    let waterCost = document.getElementById("cost4").innerHTML;
    let addChocolate = document.getElementById("add5");
    let chocolateCost = document.getElementById("cost5").innerHTML;
    //Cart and shopping items
    let cartItemCount = 0;
    let cartItemShow = document.getElementById("allItems");
    let showCart = document.getElementById("showCart");
    let total = document.getElementById("yourTotal");
    let displayCart = document.getElementById("cartTotal");
    //Search bar
    let searchInput = document.getElementById("search");
    let displaySearch = document.getElementById("whatYouSearched");
    let search = document.getElementById("performSearch");
    search.addEventListener("click", function (){
        let searchResult = searchInput.value;
        displaySearch.innerText = "Displaying results for " + searchResult;
    });
    displayCart.addEventListener("click", function(){

    });
    let cart = [{}];
    let rice = {
        cost: Number(riceCost)
    }
    let bread = {
        cost: Number(breadCost)
    }
    let chicken = {
        cost: Number(chickenCost)
    }
    let water = {
        cost: Number(waterCost)
    }
    let chocolate = {
        cost: Number(chocolateCost)
    }
    showCart.addEventListener("click", function (){
        cartItemShow.innerHTML = "Your cart has " + cartItemCount + " items in it.";
    });

    // adding items to the cart
    function addToTotal(object){
        let cartTotal = total.innerText;
        cart.push(object);
        cartItemCount++;
        total.innerText = (parseFloat(cartTotal) + object.cost).toFixed(2);
    }
    // items
    addChicken.addEventListener("click", function (){
        addToTotal(chicken);
    });
    addWater.addEventListener("click", function (){
        addToTotal(water);
    });
    addChocolate.addEventListener("click", function(){
        addToTotal(chocolate);
    });
    addRice.addEventListener("click", function(){
        addToTotal(rice);
    });
    addBread.addEventListener("click", function (){
        addToTotal(bread);
    });


    // log in button
    let logIn = document.getElementById("logIn");
    let haveLoggedIn = false;
    let displayLogIn = document.getElementById("loggedIn");

    logIn.addEventListener("click", function(){
       haveLoggedIn = true;
        logInToSite();
    });
    // have this do more later
    function logInToSite(){
        if(haveLoggedIn){
            displayLogIn.innerHTML = "Logged In!";
        }
    }
    // register button
    let registered = document.getElementById("register");
    let haveRegistered = false;
    let displayRegStatus = document.getElementById("registered");
    registered.addEventListener("click", function(){
        haveRegistered = true;
        if(haveRegistered){
            displayRegStatus.innerHTML = "You have successfully registered";
        }
    });
    // lists button
    let lists = document.getElementById("lists");
    let clickedLists = false;
    let displayLists = document.getElementById("clickedList");
    lists.addEventListener("click", function (){
        clickedLists = true;
        if(clickedLists){
            displayLists.innerHTML = "Showing the List";
        }
    });
    // help button
    let help = document.getElementById("help");
    let clickedHelp = false;
    let displayHelpStatus = document.getElementById("askHelp");
    help.addEventListener("click", function (){
        clickedHelp = true;
        if(clickedHelp){
            displayHelpStatus.innerHTML = "Looks like you need help";
        }
    });

})();