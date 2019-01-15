import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../current-user.service';

@Component({
  selector: 'app-one-user',
  templateUrl: './one-user.component.html',
  styleUrls: ['./one-user.component.scss']
})
export class OneUserComponent implements OnInit {
  public curUser;
  public zoom = 8;
  public lat: number;
  public lng: number;
  constructor(private currentUserService: CurrentUserService) { }

  ngOnInit() {
    this.curUser = this.currentUserService.currentUser;
    console.log(this.curUser.name.first);
    console.log(this.curUser.location.timezone.offset);
    this.lat = parseFloat(this.curUser.location.coordinates.latitude);
    this.lng = parseFloat(this.curUser.location.coordinates.longitude);
  }
}
