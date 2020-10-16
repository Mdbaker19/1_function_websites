(function (){
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
    let cartItemCount = 0;
    let cartItemShow = document.getElementById("allItems");
    let showCart = document.getElementById("showCart");
    let total = document.getElementById("yourTotal");
    let cart = [{

    }];
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
        cartItemShow.innerHTML = cartItemCount;
    });
    addChicken.addEventListener("click", function (){
        let cartTotal = total.innerText;
        console.log(cartTotal);
        cart.push(chicken);
        cartItemCount++;
        total.innerText = (parseFloat(cartTotal) + chicken.cost).toFixed(2);
        //addToTotal();
    });
    addWater.addEventListener("click", function (){
        let cartTotal = total.innerText;
        cart.push(water);
        cartItemCount++;
        console.log(water.cost);
        console.log("your cart has: " + cart);
        total.innerText = (parseFloat(cartTotal) + water.cost).toFixed(2);
    });
    addChocolate.addEventListener("click", function(){
        let cartTotal = total.innerText;
        cart.push(chocolate);
        cartItemCount++;
        console.log(chocolate.cost);
        console.log("your cart has: " + cart);
        total.innerText = (parseFloat(cartTotal) + chocolate.cost).toFixed(2);
    });
    addRice.addEventListener("click", function(){
        let cartTotal = total.innerText;
       cart.push(rice);
       cartItemCount++;
       console.log(rice.cost);
       console.log("your cart has: " + cart);
        total.innerText = (parseFloat(cartTotal) + rice.cost).toFixed(2);
    });
    addBread.addEventListener("click", function (){
        let cartTotal = total.innerText;
        cart.push(bread);
        cartItemCount++;
        console.log(bread.cost)
        console.log("your cart has: " + cart);
        total.innerText = (parseFloat(cartTotal) + bread.cost).toFixed(2);
    })


    let logIn = document.getElementById("logIn");
    let haveLoggedIn = false;
    let displayLogIn = document.getElementById("loggedIn")
    logIn.addEventListener("click", function(){
       haveLoggedIn = true;
        if(haveLoggedIn){
            displayLogIn.innerHTML = "Logged In!";
        }
    });
    let registered = document.getElementById("register");
    let haveRegistered = false;
    let displayRegStatus = document.getElementById("registered");
    registered.addEventListener("click", function(){
        haveRegistered = true;
        if(haveRegistered){
            displayRegStatus.innerHTML = "You have successfully registered";
        }
    });
    let lists = document.getElementById("lists");
    let clickedLists = false;
    let displayLists = document.getElementById("clickedList");
    lists.addEventListener("click", function (){
        clickedLists = true;
        if(clickedLists){
            displayLists.innerHTML = "Showing the List";
        }
    });
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