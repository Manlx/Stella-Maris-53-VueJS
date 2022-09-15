export interface ImageData {
    ImagePath: string;
    Description: string;
    Tags: string[];
    Location: string[];
}

export interface RootObject {
    ImageData: ImageData[];
    tariffs: Tariff[];
}

export interface Tariff {
    from: string;
    to: string;
    perNight: number;
}