import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { GatewayService } from 'src/app/services/gateway.service';
import { SearchableUser } from 'src/types/user';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
    users: SearchableUser[] = [];
    searchText = '';
    searchResults: SearchableUser[] = [];

    constructor(private _gatewayService: GatewayService, private _router: Router) {}

    ngOnInit(): void {
        this._gatewayService.getAllUsers().subscribe((users) => {
            this.users = users;
            this.searchResults = users;
        });
    }

    onTyping(): void {
        this.searchResults = this.users.filter((user) =>
            user.username.toLowerCase().includes(this.searchText.toLowerCase()),
        );
    }

    onSearch(term: string): void {
        const user = this.users.find((user) => user.username === term);
        if (user) {
            console.log(`UserId: ${user.id}`);
            // Implement when user details is done
            // this._router.navigate(['/user', user.id]);
        }
    }
}
