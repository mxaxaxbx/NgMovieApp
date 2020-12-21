export interface MovieResponseI {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: null;
    budget: number;
    genres: GenreI[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompanyI[];
    production_countries: ProductionCountryI[];
    release_date: Date;
    revenue: number;
    runtime: number;
    spoken_language: SpokenLanguageI[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface GenreI {
    id: number;
    name: string;
}

export interface ProductionCompanyI {
    id: number;
    logo_path: null | string;
    name: string;
    original_country: string;
}

export interface ProductionCountryI {
    iso_3166_1: string;
    name: string;
}

export interface SpokenLanguageI {
    iso_639_1: string;
    name: string;
}