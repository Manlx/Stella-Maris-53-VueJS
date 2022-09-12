declare module DataJsonInterfaces {

    export interface ImageData {
        ImagePath: string;
        Description: string;
        Tags: string[];
        Location: string[];
    }

    export interface RootObject {
        ImageData: ImageData[];
    }

}

