// 1. **Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.

class Story {
    constructor(length, moralLessons, ageGroup) {
      this.length = length;
      this.moralLessons = moralLessons;
      this.ageGroup = ageGroup;
    }
  
    read() {
      console.log("Reading the story"); 
    }
  
    translate(language) {
      console.log(`Translating the story into ${language}`); 
    }
  }
  
  class StoryTeller {
    constructor(name, style) {
      this.name = name;
      this.style = style;
    }
  
    tellStory(story) {
      console.log(`${this.name} is telling a story`); 
    }
  }
  
  class Translator {
    constructor(languages) {
      this.languages = languages;
    }
  
    translateStory(story, language) {
      console.log(`Translating the story into ${language}`);
    }
  }
  
  
  const story = new Story("Medium", ["Unity", "Respect"], "Children");
  const storyteller = new StoryTeller("Susan", "Engaging");
  const translator = new Translator(["English", "French", "Swahili"]);
  
  story.read();
  story.translate("Swahili");
  storyteller.tellStory(story);
  const translatedStory = translator.translateStory(story, "Swahili");



// 2. **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.

  class Recipe {
    constructor(name, ingredients, preparationTime, cookingMethod, nutritionalInfo) {
      this.name = name;
      this.ingredients = ingredients;
      this.preparationTime = preparationTime;
      this.cookingMethod = cookingMethod;
      this.nutritionalInfo = nutritionalInfo;
    }
  
    displayRecipe() {
      console.log(`Recipe: ${this.name}`);
      console.log("Ingredients:");
      this.ingredients.forEach((ingredient) => {
        console.log(`- ${ingredient}`);
      });
      console.log(`Preparation Time: ${this.preparationTime} minutes`);
      console.log(`Cooking Method: ${this.cookingMethod}`);
      console.log("Nutritional Information:");
      Object.entries(this.nutritionalInfo).forEach(([key, value]) => {
        console.log(`- ${key}: ${value}`);
      });
    }
  }
  
  class MoroccanRecipe extends Recipe {
    constructor(name, ingredients, preparationTime, cookingMethod, nutritionalInfo, spiceLevel) {
      super(name, ingredients, preparationTime, cookingMethod, nutritionalInfo);
      this.spiceLevel = spiceLevel;
    }
  
    displayRecipe() {
      super.displayRecipe();
      console.log(`Spice Level: ${this.spiceLevel}`);
    }
  }
  
  class EthiopianRecipe extends Recipe {
    constructor(name, ingredients, preparationTime, cookingMethod, nutritionalInfo, injeraRequired) {
      super(name, ingredients, preparationTime, cookingMethod, nutritionalInfo);
      this.injeraRequired = injeraRequired;
    }
  
    displayRecipe() {
      super.displayRecipe();
      console.log(`Injera Required: ${this.injeraRequired}`);
    }
  }
  
  class NigerianRecipe extends Recipe {
    constructor(name, ingredients, preparationTime, cookingMethod, nutritionalInfo, jollofRiceLevel) {
      super(name, ingredients, preparationTime, cookingMethod, nutritionalInfo);
      this.jollofRiceLevel = jollofRiceLevel;
    }
  
    displayRecipe() {
      super.displayRecipe();
      console.log(`Jollof Rice Level: ${this.jollofRiceLevel}`);
    }
  }
  
 
  const recipe1 = new MoroccanRecipe(
    "Moroccan Tajine",
    ["Chicken", "Onions", "Tomatoes", "Spices"],
    30,
    "Slow cooking",
    { Calories: 350, Protein: 25 },
    "Medium"
  );
  
  const recipe2 = new EthiopianRecipe(
    "Ethiopian Doro Wat",
    ["Chicken", "Onions", "Berbere Spice Mix", "Injera"],
    45,
    "Stewing",
    { Calories: 400, Protein: 30 },
    true
  );
  
  const recipe3 = new NigerianRecipe(
    "Nigerian Jollof Rice",
    ["Rice", "Tomatoes", "Pepper", "Onions"],
    40,
    "One-pot cooking",
    { Calories: 300, Protein: 20 },
    "Very Spicy"
  );
  
 
  recipe1.displayRecipe();

  recipe2.displayRecipe();
 
  recipe3.displayRecipe();


//   3. **Wildlife Preservation:** You're a wildlife conservationist working on a
//   program to track different species in a national park. Each species has its own
//   characteristics and behaviors, such as its diet, typical lifespan, migration
//   patterns, etc. Some species might be predators, others prey. You'll need to
  
//   create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
//   these classes might relate to each other through inheritance.

class Species {
    constructor(name, diet, lifespan) {
      this.name = name;
      this.diet = diet;
      this.lifespan = lifespan;
    }
  
    displayInfo() {
      console.log(`Species: ${this.name}`);
      console.log(`Diet: ${this.diet}`);
      console.log(`Lifespan: ${this.lifespan} years`);
    }
  }
  
  class Predator extends Species {
    constructor(name, diet, lifespan, huntingMethod) {
      super(name, diet, lifespan);
      this.huntingMethod = huntingMethod;
    }
  
    displayInfo() {
      super.displayInfo();
      console.log(`Hunting Method: ${this.huntingMethod}`);
    }
  }
  
  class Prey extends Species {
    constructor(name, diet, lifespan, migrationPattern) {
      super(name, diet, lifespan);
      this.migrationPattern = migrationPattern;
    }
  
    displayInfo() {
      super.displayInfo();
      console.log(`Migration Pattern: ${this.migrationPattern}`);
    }
  }
  
  
  const species1 = new Predator("Lion", "Carnivore", 15, "Ambush hunting");
  const species2 = new Prey("Wildebeest", "Herbivore", 20, "Seasonal migration");
  
  species1.displayInfo();
  
  species2.displayInfo();
  
//   4. **African Music Festival:** You're in charge of organizing a Pan-African music
//   festival. Many artists from different countries, each with their own musical style
//   and instruments, are scheduled to perform. You need to write a program to
//   manage the festival lineup, schedule, and stage arrangements. Think about how
//   you might model the `Artist`, `Performance`, and `Stage` classes, and consider
//   how you might use inheritance if there are different types of performances or
//   stages.

class Artist {
    constructor(name, country, musicalStyle) {
      this.name = name;
      this.country = country;
      this.musicalStyle = musicalStyle;
    }
  
    displayInfo() {
      console.log(`Artist: ${this.name}`);
      console.log(`Country: ${this.country}`);
      console.log(`Musical Style: ${this.musicalStyle}`);
    }
  }
  
  class Performance {
    constructor(artist, startTime, endTime) {
      this.artist = artist;
      this.startTime = startTime;
      this.endTime = endTime;
    }
  
    displayInfo() {
      console.log("Performance Details:");
      this.artist.displayInfo();
      console.log(`Start Time: ${this.startTime}`);
      console.log(`End Time: ${this.endTime}`);
    }
  }
  
  class Stage {
    constructor(name, capacity) {
      this.name = name;
      this.capacity = capacity;
      this.performances = [];
    }
  
    addPerformance(performance) {
      this.performances.push(performance);
    }
  
    displaySchedule() {
      console.log(`Stage: ${this.name}`);
      console.log(`Capacity: ${this.capacity}`);
      console.log("Scheduled Performances:");
      this.performances.forEach((performance) => {
        performance.displayInfo();
        console.log();
      });
    }
  }
  

  const artist1 = new Artist("Femi Kuti", "Nigeria", "Afrobeat");
  const artist2 = new Artist("Salif Keita", "Mali", "Mande music");
  
 
  const performance1 = new Performance(artist1, "18:00", "20:00");
  const performance2 = new Performance(artist2, "20:30", "22:30");
  
  
  const stage = new Stage("Main Stage", 5000);
  
  
  stage.addPerformance(performance1);
  stage.addPerformance(performance2);
  
  
  stage.display


// 5. Create a class called Product with attributes for name, price, and quantity.
// Implement a method to calculate the total value of the product (price * quantity).
// Create multiple objects of the Product class and calculate their total values.
class Product {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    calculateTotalValue() {
      return this.price * this.quantity;
    }
  }
  
  
  const product1 = new Product("Item 1", 10.99, 5);
  const product2 = new Product("Item 2", 5.99, 10);
  const product3 = new Product("Item 3", 8.50, 2);
  
 
  const totalValue1 = product1.calculateTotalValue();
  const totalValue2 = product2.calculateTotalValue();
  const totalValue3 = product3.calculateTotalValue();
  
  
  console.log(`Total value of ${product1.name}: ${totalValue1}`);
  console.log(`Total value of ${product2.name}: ${totalValue2}`);
  console.log(`Total value of ${product3.name}: ${totalValue3}`);
  
// 6. Implement a class called Student with attributes for name, age, and grades (a
// list of integers). Include methods to calculate the average grade, display the
// student information, and determine if the student has passed (average grade >=
// 60). Create objects for the Student class and demonstrate the usage of these
// methods. 

class Student {
    constructor(name, age, grades) {
      this.name = name;
      this.age = age;
      this.grades = grades;
    }
  
    calculateAverageGrade() {
      const totalGrades = this.grades.reduce((sum, grade) => sum + grade, 0);
      const averageGrade = totalGrades / this.grades.length;
      return averageGrade;
    }
  
    displayStudentInfo() {
      console.log("Student Information:");
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Grades: ${this.grades}`);
    }
  
    hasPassed() {
      const averageGrade = this.calculateAverageGrade();
      return averageGrade >= 60;
    }
  }
  
 
  const student = new Student("John Doe", 18, [80, 75, 90, 65, 70]);
  
  
  student.displayStudentInfo();
  
 
  const averageGrade = student.calculateAverageGrade();
  console.log(`Average Grade: ${averageGrade}`);
  
  
  if (student.hasPassed()) {
    console.log("Status: Passed");
  } else {
    console.log("Status: Failed");
  }

// 7. Create a FlightBooking class that represents a flight booking system. Implement
// methods to search for available flights based on destination and date, reserve
// seats for customers, manage passenger information, and generate booking
// confirmations.

class FlightBooking {
    constructor() {
      this.flights = [];
    }
  
    addFlight(flight) {
      this.flights.push(flight);
    }
  
    searchFlights(destination, date) {
      const availableFlights = this.flights.filter(
        (flight) =>
          flight.destination === destination &&
          flight.date === date &&
          flight.isAvailable()
      );
      return availableFlights;
    }
  
    reserveSeat(flight, passenger) {
      if (flight.isAvailable() && flight.hasAvailableSeats()) {
        flight.reserveSeat(passenger);
        return true;
      }
      return false;
    }
  
    generateBookingConfirmation(flight, passenger) {
      if (flight.isPassengerReserved(passenger)) {
        const confirmation = `Booking Confirmation:\nFlight: ${flight}\nPassenger: ${passenger}`;
        return confirmation;
      }
      return null;
    }
  }
  
  class Flight {
    constructor(flightNumber, destination, date, seats) {
      this.flightNumber = flightNumber;
      this.destination = destination;
      this.date = date;
      this.seats = seats;
      this.passengerList = [];
    }
  
    isAvailable() {
      return this.passengerList.length < this.seats;
    }
  
    hasAvailableSeats() {
      return this.passengerList.length < this.seats;
    }
  
    reserveSeat(passenger) {
      this.passengerList.push(passenger);
    }
  
    isPassengerReserved(passenger) {
      return this.passengerList.includes(passenger);
    }
  }
  
  
  const bookingSystem = new FlightBooking();
  
  const flight1 = new Flight("F001", "New York", "2023-07-15", 100);
  const flight2 = new Flight("F002", "London", "2023-07-20", 150);
  const flight3 = new Flight("F003", "Paris", "2023-07-25", 200);
  
 
  bookingSystem.addFlight(flight1);
  bookingSystem.addFlight(flight2);
  bookingSystem.addFlight(flight3);
  
 
  const availableFlights = bookingSystem.searchFlights("London", "2023-07-20");
  console.log("Available Flights:");
  availableFlights.forEach((flight) => {
    console.log(flight.flightNumber, flight.destination, flight.date);
  });
  
  
  const passenger1 = "John Doe";
  const reserved = bookingSystem.reserveSeat(flight2, passenger1);
  if (reserved) {
    console.log(`Seat reserved for ${passenger1} on Flight ${flight2.flightNumber}`);
  }
  
 
  const confirmation = bookingSystem.generateBookingConfirmation(flight2, passenger1);
  if (confirmation) {
    console.log(confirmation);
  }

//8. Create a LibraryCatalog class that handles the cataloging and management of
//books in a library. Implement methods to add new books, search for books by
//title or author, keep track of available copies, and display book details.

class Book {
    constructor(title, author, numCopies) {
        this.title = title;
        this.author = author;
        this.numCopies = numCopies;
    }

    toString() {
        return `${this.title} by ${this.author}`;
    }
}

class LibraryCatalog {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    searchByTitle(title) {
        return this.books.filter(book => book.title.toLowerCase() === title.toLowerCase());
    }

    searchByAuthor(author) {
        return this.books.filter(book => book.author.toLowerCase() === author.toLowerCase());
    }

    displayBookDetails(book) {
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author}`);
        console.log(`Available Copies: ${book.numCopies}`);
    }

    borrowBook(book) {
        if (book.numCopies > 0) {
            book.numCopies--;
            return true;
        }
        return false;
    }

    returnBook(book) {
        book.numCopies++;
    }
}


const catalog = new LibraryCatalog();


const book1 = new Book("Python Crash Course", "Eric Matthes", 3);
const book2 = new Book("Clean Code", "Robert C. Martin", 5);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 2);
catalog.addBook(book1);
catalog.addBook(book2);
catalog.addBook(book3);


const titleSearchResults = catalog.searchByTitle("python crash course");
const authorSearchResults = catalog.searchByAuthor("Robert C. Martin");

console.log("Search Results by Title:");
titleSearchResults.forEach(book => {
    catalog.displayBookDetails(book);
});

console.log("\nSearch Results by Author:");
authorSearchResults.forEach(book => {
    catalog.displayBookDetails(book);
});


const borrowed = catalog.borrowBook(book1);
if (borrowed) {
    console.log(`\nBook ${book1.title} borrowed successfully.`);
}


catalog.returnBook(book1);
console.log(`\nBook ${book1.title} returned.`);


console.log("\nUpdated Book Details:");
catalog.displayBookDetails(book1);

  
  


  
  