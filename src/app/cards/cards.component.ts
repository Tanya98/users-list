import { Component, OnInit } from '@angular/core';
import { DataService, IUsers } from '../data.service';
import { CurrentUserService } from '../current-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  public title = 'Users-List';
  public users$;
  public text;
  constructor(
    private dataService: DataService,
    private currentUserService: CurrentUserService,
    private route: Router) { }

  ngOnInit() {
    this.users$ = this.dataService.getUsers();
  }

  searchByFirstName(event) {
    this.text = event.target.value;
  }
  selectedUser(user: IUsers) {
    this.currentUserService.currentUser = user;
    this.route.navigate(['users/' + user.name.first]);
  }
}
