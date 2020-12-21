export interface CarteleraI {
    results: MovieI[];
    page: number;
    total_results: number;
    dates: DatesI;
    total_pages: number;
}

export interface DatesI {
    maximum: Date;
    minimun: Date;
}

export interface MovieI {
    popularity: number;
    vote_count: number;
    video: boolean;
    poster_path: string;
    id: number;
    adult: boolean;
    backdrop_path: string;
    original_language: OriginalLanguageI;
    original_title: string;
    genre_ids: number[];
    title: string;
    vote_average: number;
    overview: string;
    release_date: Date;
}

export enum OriginalLanguageI {
    En = "en",
    Es = "es",
    Ko = "ko",
}