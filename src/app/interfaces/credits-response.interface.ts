export interface CreditsResponseI {
    id: number;
    cast: CastI[];
    crew: CrewI[];
}

export interface CastI {
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    name: string;
    order: number;
    profile_path: null | string;
}

export interface CrewI {
    credit_id: string;
    department: DepartmentE;
    gender: number;
    id: number;
    job: string;
    name: string;
    profile_path: null | string;
}

export enum DepartmentE {
    Art = "Art",
    Camera = "Camera",
    CostumeMakeUp = "Costume & Make-Up",
    Crew = "Crew",
    Directing = "Directing",
    Editing = "Editing",
    Lighting = "Lighting",
    Production = "Production",
    Sound = "Sound",
    VisualEffects = "Visual Effects",
    Writing = "Writing",
}