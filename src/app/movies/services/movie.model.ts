export class Movie {
    constructor(public id: string,
        public poster_path: string,
        public backdrop_path: string,
        public release_date: string,
        public title: string,
        public overview: string,
        public vote_average: number
    ) { }
}
