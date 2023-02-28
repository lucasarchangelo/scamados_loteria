import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Lottery } from 'src/app/models/lottery';

@Component({
  selector: 'app-contract-modal',
  templateUrl: './contract-modal.component.html',
  styleUrls: ['./contract-modal.component.css']
})
export class ContractModalComponent {

  @Input() public lottery: Lottery = new Lottery();

  constructor(public modal: NgbActiveModal) { }

  public btnBuy(): void {
    this.modal.close('buy');
  }

  public btnClose(): void {
    this.modal.close('close');
  }
}
