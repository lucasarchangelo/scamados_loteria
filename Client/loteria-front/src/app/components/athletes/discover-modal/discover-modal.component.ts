import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Athlete } from 'src/app/models/athlete';

@Component({
  selector: 'app-discover-modal',
  templateUrl: './discover-modal.component.html',
  styleUrls: ['./discover-modal.component.css']
})
export class DiscoverModalComponent {

  @Input() public athlete: Athlete = new Athlete();

  constructor(public modal: NgbActiveModal) { }

  public btnSignNewContract(): void {
    this.modal.close(true);
  }
}
