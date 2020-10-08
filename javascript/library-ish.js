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

    const search = document.getElementById("keyword");
    let output = document.getElementById("result");

    function searchBooks(input){
        books.forEach((book) => {
            if(input === book.title){
                console.log(book);
                output.innerText = book.title;
            }
            else {console.log("do not have that book")}
        })
    }

    searchBooks(search);



})();