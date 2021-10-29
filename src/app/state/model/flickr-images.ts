export type Image = {
    url: string;
    title: string;
}

export type Photo = {
    id: string;
    title: string;
    url: string;
    owner: string;
    ownerUrl: string;
    secret?: string;
    server?: string;
}

export type PhotoSearch = {
    photos: {
        photo: Photo[];
    };
}
