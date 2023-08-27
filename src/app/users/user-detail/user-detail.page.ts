import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service'
import { User } from '../../models/user.model'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {

  user!: User

  constructor(private activatedRoute: ActivatedRoute ,private usersService: UsersService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      if(!params) {
        console.log("Publicación no encontrada")
      } else {
        const userId= params.get('userId')
        this.user = this.usersService.getUser(userId as string)
      }
    })
  }
}
