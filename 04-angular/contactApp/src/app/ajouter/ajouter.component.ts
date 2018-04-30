import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from '../models/contact';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  @Output() unContactEstCree = new EventEmitter();
  nouveauContact: Contact = new Contact();

  active = true ;

  constructor() { }

  ngOnInit() {
  }
  /** fonction appellé apres le submit du formulaire */

  submitContact() {

    /** lorsque mon formulaire est soumis j emet un evenement qui sera écouté par mon application et qui
     * recuperera les données du nouveau contact */
    this.unContactEstCree.emit( {leContact: this.nouveauContact});

  }

}
/** -- reinitialiser le nouveau contact  -- */
this.nouveauContact = new Contact();

/** -- reinitialisation du formulaire   */
this.active = false;
setTimeout( () => this.active = true, 0);

/** -- je passe mon formulaire a false puis a true ce qui a pour consequence de le
 *

detruire dans le Dom puis de le recreer */
