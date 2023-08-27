import { Component, OnInit } from '@angular/core';
import { PublicationsService } from '../services/publications.service'
import { UsersService } from '../services/users.service'
import { Publication } from '../models/publication.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.page.html',
  styleUrls: ['./publications.page.scss'],
})
export class PublicationsPage implements OnInit {

  publications: Publication[] = []
  users: User[] = []

  constructor(private publicacionsService: PublicationsService, private usersService: UsersService) { }

  ngOnInit() {
    this.publications = this.publicacionsService.getPublications()
    this.publications.forEach(publication => {
      this.users.push(this.usersService.getUser(publication.userId))
    })
  }

}
