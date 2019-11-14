import { ALBUMS } from './../mock-album';
import { Album } from './../album';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  
  albums: Album[] = ALBUMS;
  newAlbum: Album;

  constructor() { }

  submit(values) {
    this.newAlbum = values;
    this.albums.push(this.newAlbum); 
    console.log(this.albums);
  }

  update(values) {
    
  }

  delete() {

  }
}
