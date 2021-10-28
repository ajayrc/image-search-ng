export type Image = {
    url: string;
    title: string;
}

export type Photo = {
    id: string;
    owner: string;
    secret: string;
    server: string;
    title: string;
    url: string;
}

export type PhotoSearch = {
    photos: {
        photo: Photo[];
    };
}
