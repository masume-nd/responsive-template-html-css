class Media{
    constructor(thumbnail,author,genre,productionYear){
        this.author = author
        this.genre = genre
        this.thumbnail = thumbnail
        this.productionYear = productionYear
    }
}
class Movie extends Media{
    constructor(director,superStar){
        super(thumbnail,author,genre,productionYear);
        this.superStar = superStar
        this.director = director
        this.MovieInfo = function(){
            console.log(`thumbnail: ${this.thumbnail},author:${this.author},genre:${this.genre}, productionYear:${this.productionYear}, superStar: ${this.superStar}, director:${this.director}`)
        }
    }
}
class Book extends Media{
    constructor(circulation , pages){
        super(thumbnail,author,genre,productionYear)
        this.circulation = circulation
        this.pages = pages
    }
}

const interStellar = new Movie("interStellar","Jonathan Nolan","sci-fi",2014,"Matthew McConaughey", "Christopher Nolan")
interStellar.MovieInfo()

