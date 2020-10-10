(function (){
    const books = [{
        bookNum: 1,
        title: "Elon Musk",
        author: {
            firstName: "Ashley",
            lastName: "Vance"
        },
    }, {
        bookNum: 2,
        title: "Steal like an artist",
        author: {
            firstName: "Austin",
            lastName: "Kleon"
        },
    }, {
        bookNum: 3,
        title: "How to win friends and influence people",
        author: {
            firstName: "Dale",
            lastName: "Carnigie"
        },
    }, {
        bookNum: 4,
        title: "Think and grow rich",
        author: {
            firstName: "Napoleon",
            lastName: "Hill"
        },
    }, {
        bookNum: 5,
        title: "Power trip",
        author: {
            firstName: "I do not",
            lastName: "remember"
        }
    }]

    const bookData = document.getElementById("keyword");
    let output = document.getElementById("result");
    let checkStock = document.getElementById("searchBooks");

    checkStock.addEventListener("click", function search(){
        books.forEach((book) => {
            if(bookData.value === book.title){
                output.innerText = book.author.firstName
            }
            else{
                output.innerText = "sorry, we do not have that book";
            }
        });
    });





})();