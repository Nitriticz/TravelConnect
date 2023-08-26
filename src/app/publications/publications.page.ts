import { Component, OnInit } from '@angular/core';
import { PublicationsService } from '../services/publications.service'
import { Publication } from './publications.model';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.page.html',
  styleUrls: ['./publications.page.scss'],
})
export class PublicationsPage implements OnInit {

  publications: Publication[] = []

  constructor(private publicacionsService: PublicationsService) { }

  ngOnInit() {
    this.publications = this.publicacionsService.getPublications()
  }

}
