export class Serie {

    constructor(public poster_path: string,
        public vote_average: number,
        public id: number,
        public backdrop_path: string,
        public overview: string,
        public name: string,
        public number_of_episodes: number
    ) { }

}

export class SerieResult {
    constructor(public total_pages: number, public page: number, public results: Serie[]) { }
}
