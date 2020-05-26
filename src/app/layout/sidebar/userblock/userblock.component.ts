import { Component, OnInit } from '@angular/core';

import { UserblockService } from './userblock.service';
import { Uris } from '../../../services/Uris';


@Component({
    selector: 'app-userblock',
    templateUrl: './userblock.component.html',
    styleUrls: ['./userblock.component.scss']
})
export class UserblockComponent implements OnInit {
    user: any;
    name: any;
    Url = Uris.API_IMAGE
    constructor(public userblockService: UserblockService) {

        this.user = {
            picture: 'assets/img/profile.png'
        };
    }

    ngOnInit() {
        let user = JSON.parse(localStorage.getItem("USER"))
        console.log(user);

        this.name = user.admin.name
        
    }

    userBlockIsVisible() {
        return this.userblockService.getVisibility();
    }

}
