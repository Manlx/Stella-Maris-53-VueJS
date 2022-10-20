export interface ImageData {
    ImagePath: string;
    Description: string;
    Tags: string[];
    Location: string[];
}

export interface RootObject {
    ImageData: ImageData[];
    tariffs: Tariff[];
    linkedPDF:LinkedPDF[];
}

export interface Tariff {
    from: string;
    to: string;
    perNight: number;
}

export interface LinkedPDF {
    name: string;
    link: string;
}