import { AlbumFormComponent } from './../album-form/album-form.component';
import { FormGroup } from '@angular/forms';
import { AlbumService } from './../album.service';
import { Component, OnInit } from '@angular/core';
import { ALBUMS } from 'src/mock-album';
import { Album } from 'src/album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albums: Album[] = ALBUMS; 
  albumForm: FormGroup;
  
  constructor(private AlbumService: AlbumService) { }

  onDelete() {
    this.AlbumService.delete();
  }
  
  onUpdate() {
    
  }
  
  ngOnInit() {
  }

}
