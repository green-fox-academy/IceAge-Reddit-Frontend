import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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

    constructor(private _gatewayService: GatewayService) {}

    ngOnInit(): void {
        this._gatewayService.getAllUsers().subscribe((users) => (this.users = users));
    }

    onSearching(): void {
        if (!this.searchText.length) {
            this.searchResults = [];
            return;
        }

        this.searchResults = this.users.filter((user) =>
            user.username.toLowerCase().includes(this.searchText.toLowerCase()),
        );
    }
}
