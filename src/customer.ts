import { Rental } from "./rental";

export class Customer {
  private name: string;
  private rentals: Rental[] = [];

  public constructor(name: string) {
    this.name = name;
  }

  public addRental(arg: Rental) {
    this.rentals.push(arg);
  }

  public getName(): string {
    return this.name;
  }

  public statement(): string {
    let totalPrice: number = 0 
    let frequentRenterPoints: number = 0;

    // header
    let rentalStatement = `<h1>Rental Record for <em>${this.getName()}</em></h1>\n`;

    // body
    rentalStatement += "<table>\n";

    for (const movie of this.rentals) {
      let thisAmount = movie.getPrice()

      frequentRenterPoints += movie.getFrequentRenterPoints()

      rentalStatement += `\t <tr><td>${movie
        .getMovie()
        .getTitle()}</td><td>${thisAmount.toFixed(1)}</td></tr>\n`;
      totalPrice += movie.getPrice();
    }

    rentalStatement += "</table>\n";

    // footer
    rentalStatement += `<p>Amount owed is <em>${totalPrice.toFixed(1)}</em></p>\n`;
    rentalStatement += `<p>You earned <em>${frequentRenterPoints}</em> frequent renter points</p>`;

    return rentalStatement;
  }
}