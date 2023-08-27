import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users : User[] = []

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }

}
