import { Injectable, EventEmitter } from '@angular/core';

@Injectable() //to inject service inside the service
export class AccountService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];
    constructor() { } //Injecting service

    //creates an event
    statusUpdated = new EventEmitter<string>();


    addAccount(name: string, status: string) {
        this.accounts.push({ name, status });

    }

    changeStatus(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;

    }

}