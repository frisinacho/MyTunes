import {ISong} from './isong';

export interface IAlbum {
    id     : number;
    name   : string;
    artist : string;
    url    : string,
    images? : Array<string>;
    songs? :Array<ISong>;

    getImage(size:AlbumImageSize);
}

export enum AlbumImageSize {
    LARGE = <any>"large",
    MEDIUM = <any>"medium",
    SMALL = <any>"small"
}
