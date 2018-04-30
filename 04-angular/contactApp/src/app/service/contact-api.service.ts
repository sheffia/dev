import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Contact} from '../models/contact';

@Injectable()
export class ContactApiService {

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('https://jsonplaceholder.typicode.com/users');
  }

}

APP COMPONENT ========================================================

/**
 * La méthode ngOnInit est appelée
 * automatiquement par Angular juste après
 * le constructeur à l'initialisation de notre composant.
 */
ngOnInit(): void {
  this.contactApiService.getContacts().subscribe(
  contacts  => {
    console.log(contacts);
    this.mesContacts = contacts;
  }
);
}
