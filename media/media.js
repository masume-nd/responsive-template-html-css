class Media{
    constructor(thumbnail,author,genre,date){
        this.author = author
        this.genre = genre
        this.thumbnail = thumbnail
        this.date = date
    }
}
class Movie extends Media{
    constructor(thumbnail,author,genre,date,director,superStar){
        super(thumbnail,author,genre,date);
        this.superStar = superStar
        this.director = director
        this.MovieInfo = function(){
            console.log(`{thumbnail: ${this.thumbnail}, author:${this.author}, genre:${this.genre}, production year:${this.date}, superStar: ${this.superStar}, director:${this.director}}`)
        }
    }
}
class Book extends Media{
    constructor(thumbnail,author,genre,date,country, pages,language){
        super(thumbnail,author,genre,date)
        this.country = country
        this.language = language
        this.pages = pages
        this.BookInfo = function(){
            console.log(`{thumbnail: ${this.thumbnail}, author:${this.author}, genre:${this.genre}, Publication date:${this.date}, country: ${this.country}, pager:${this.pages} , language: ${this.language}}`)
        }
    }
}

const interStellar = new Movie("inter Stellar","Jonathan Nolan","sci-fi",2014,"Matthew McConaughey", "Christopher Nolan")
interStellar.MovieInfo()
const meBeforeYou = new Book("Me Before You" ,"Jojo Moyes","romance novel",2012,"United Kingdom",480,"English")
meBeforeYou.BookInfo()
