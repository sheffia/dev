/** pour declarer une classe comme composant de notre application
 * on importe component via @angular/core
 */


import { Component } from '@angular/core';
class Contact {
  id: number;
  name: string;
  username: string;
  email?: string;
  address?: object;
  phone?: number;
  website?: string;
}



//  @component est un decorateur il permet de definir trois parametres essentiels
//   a notre application
@Component({
  /** le selector determine la maniere dont le composant sera affiche dans votre html <app-root></app-root>
   vous devez avoir obligatoirement avoir la balise d ouverture et de fermeture */

  selector: 'app-root',
  /** template URL ou template est la partie visible du composant.C est ce qui s affiche a l ecran lorsque
*  le composant est utilisé
* */
    templateUrl: './app.component.html',
  /**  declaration des styles avec styleUrl  ou style*/
  styleUrls: ['./app.component.css']
  /** template : */
})
/** la classe contient les donnees du composant mais aussi son comportement dans notre contexte mvvm
* notre classe correspond au view model */
export class AppComponent {
  // declaration d une variable type
  title = 'Gestion de mes Contacts';
  // -- Contact choisi par mon utilisateur
  contactActif: Contact;
  // -- declaration d un objet contact


  unContact: Contact = {
    id: 1,
    name: 'Cheffia BENALLAL',
    username: 'cheffiabenallal',
    email: 'cheffia.benallal@gmail.com'
  };

  // -- declaration tableau de contacts
  mesContacts: Contact[] = [
    {
      id        :   1,
      name      : 'Hugo LIEGEARD',
      username  : 'hugoliegeard',
      email     : 'wf3@hl-media.fr'
    },
    {
      id        :   2,
      name      : 'Greg D\'HAEM',
      username  : 'gregdhaem',
      email     : 'greg.d@hl-media.fr'
    },
    {
      id        :   3,
      name      : 'Salim SOUMARE',
      username  : 'salimsoumare',
      email     : 'salim.s@hl-media.fr'
    },
    {
      id        :   4,
      name      : 'Cheffia BENALLAL',
      username  : 'cheffiabennallal',
      email     : 'cheffia.b@hl-media.fr'
    }
  ];
  choisirContact(contactCliqueParMonUtilisateur) {
    this.contactActif = contactCliqueParMonUtilisateur;
    console.log(this.contactActif);
  }


}
