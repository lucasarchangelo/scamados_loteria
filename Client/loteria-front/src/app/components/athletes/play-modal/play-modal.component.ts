import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-play-modal',
  templateUrl: './play-modal.component.html',
  styleUrls: ['./play-modal.component.css']
})
export class PlayModalComponent {

  constructor(public modal: NgbActiveModal) { }

  public btnPlay(): void {

  }
}
