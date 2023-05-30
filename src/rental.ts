import {Movie} from "./movie";

export class Rental {

    private movie: Movie;
    private daysRented: number;

    public constructor(movie: Movie, daysRented: number) {
        this.movie = movie;
        this.daysRented = daysRented;
    }

    public getDaysRented(): number {
        return this.daysRented;
    }

    public getFrequentRenterPoints(): number {

        return this.movie.getPriceCode() === Movie.NEW_RELEASE && this.daysRented > 1 ? 2 : 1;
    }

    public getMovie(): Movie {
        return this.movie;
    }

    public getPrice(): number {
        let rentalPrice: number = 0;

        switch (this.movie.getPriceCode()) {
            case Movie.REGULAR:
              rentalPrice += 2;
              if (this.getDaysRented() > 2) {
                rentalPrice += (this.getDaysRented() - 2) * 1.5;
              }
              break;
            case Movie.NEW_RELEASE:
              rentalPrice += this.getDaysRented() * 3;
              break;
            case Movie.CHILDRENS:
              rentalPrice += 1.5;
              if (this.getDaysRented() > 3) {
                rentalPrice += (this.getDaysRented() - 3) * 1.5;
              }
              break;
    }

    return rentalPrice
    }
}