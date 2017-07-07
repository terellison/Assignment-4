//Terry Ellison SPC ID:2335229

function Book(title, callNum, authors) {
    this.title = title;
    this.isAvailable = false;
    this.published = new Date() - Math.floor(Math.random() * 100000000000000);
    this.callNum = callNum;
    this.authors = authors;
}

Book.prototype.checkOut = function () {
    this.isAvailable = false;
    this.checkoutDate = new Date() - Math.floor(Math.random() * 100000000);
}

function Author(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

function Patron(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.libraryCardNumber = Math.floor(Math.random() * 10000);
    this.booksOut = [];
    this.fine = 0.00;
}
