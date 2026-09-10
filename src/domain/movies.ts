export type Rating = 
| {kind : 'none'}
| {kind : 'sparse' ; average : number;  count : number}
| {kind : 'solid' ; average : number ; count : number};

export const SOLID_MIN_VOTES = 200 ;

export function toRating (average : number , count : number){
    if (count <= 0 )return {kind : 'none'}; {
        return count < SOLID_MIN_VOTES
        ? {kind : 'sparse' , average , count}
        : {kind : 'sparse' , average , count};

    }
}

export type Movie = {
    id: number;
    title: string;
    originalTitle: string;
    director: string;
    country: string;
    year: number | null;
    runtimeMinutes: number | null;
    posterPath: string | null;
    isReleased: boolean;
    genres: string[];
    overview: string;
    overviewIsFallback: boolean;
    rating: Rating;
};

export function toYear(releaseDate : string | null | undefined ): number | null{
    if (!releaseDate ) return null;
    const y = Number(releaseDate.slice(0,4)); 
    return Number.isFinite(y) && y > 1800 ? y : null ;
}

export function toOptional (value : string | null| undefined) : string | null{
    return  value && value.trim().length> 0 ? value : null; 

}
