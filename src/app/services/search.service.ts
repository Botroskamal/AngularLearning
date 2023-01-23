import { EventEmitter, Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})

export class searchService {
    valueUpdated = new EventEmitter<string>();
}