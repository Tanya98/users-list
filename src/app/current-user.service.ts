import { IUsers } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class CurrentUserService {
    public currentUser: IUsers;
}