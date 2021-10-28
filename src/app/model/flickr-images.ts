export type Image = {
    url: string;
    title: string;
}

export interface Photo { // TODO MAKE TYPE AND NOT INTERFACE
    id: string;
    owner: string;
    secret: string;
    server: string;
    title: string;
    url: string;
}

export interface PhotoSearch {
    photos: {
        photo: Photo[];
    };
}
