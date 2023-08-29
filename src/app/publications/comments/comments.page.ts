import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicationsService } from 'src/app/services/publications.service';
import { CommentsService } from 'src/app/services/comments.service';
import { UsersService } from 'src/app/services/users.service';
import { Publication } from '../../models/publication.model';
import { Comment } from '../../models/comment.model';
import { User } from '../../models/user.model';
import { FormControl } from '@angular/forms';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {
  name = new FormControl('');
  publication!: Publication
  users: User[] = []
  comments : Comment[] = []
  publisher!: User

  constructor(private activatedRoute: ActivatedRoute, private publicacionsService: PublicationsService, private commentsService: CommentsService, private usersService: UsersService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      if(!params) {
        console.log("Publicación no encontrada")
      } else {
        const publicationId = params.get('publicationId')
        this.publication = this.publicacionsService.getPublication(publicationId as string)
        this.publisher = this.usersService.getUser(this.publication.userId)
        this.comments = this.commentsService.getComments(publicationId as string)
        this.comments.forEach(comment => {
          this.users.push(this.usersService.getUser(comment.userId))
        })
      }
    })
  }

  sendComment(comment: IonInput) {
    if ((comment.value as string).length > 0) {
      this.commentsService.addComment(comment.value as string, this.publication.id, '6')
      comment.value = ''
    }
  }
}
