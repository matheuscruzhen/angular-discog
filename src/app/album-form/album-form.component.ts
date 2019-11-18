import { AlbumService } from './../album.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Album } from '../../album'

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.css']
})
export class AlbumFormComponent implements OnInit {
  update: boolean = false;
  album: Album = null;

  constructor(private AlbumService: AlbumService) { }

  albumForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    band: new FormControl(''),
    genre: new FormControl(''),
    released: new FormControl('')
  })

  
  onSubmit() {
    // this.AlbumService.onSubmit(this.albumForm.value);
    console.warn("ADDED: ", this.albumForm.value);
    this.AlbumService.submit(this.albumForm.value);
    this.albumForm.reset();
  }

  onUpdate() {
    // this.update = true;
    this.albumForm.patchValue({
      title: this.album.title,
      band: this.album.band,
      genre: this.album.genre,
      released: this.album.released,
    })
  }
  
  ngOnInit() {}
}
