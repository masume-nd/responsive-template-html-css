class Media{
    constructor(thumbnail,author,genre,productionYear){
        this.author = author
        this.genre = genre
        this.thumbnail = thumbnail
        this.productionYear = productionYear
    }
}
class Movie extends Media{
    constructor(superStar){
        super(thumbnail,author,genre,productionYear);
        this.superStar
    }
}
