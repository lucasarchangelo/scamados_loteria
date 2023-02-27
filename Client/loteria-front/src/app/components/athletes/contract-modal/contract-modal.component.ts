import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Athlete } from 'src/app/models/athlete';

@Component({
  selector: 'app-contract-modal',
  templateUrl: './contract-modal.component.html',
  styleUrls: ['./contract-modal.component.css']
})
export class ContractModalComponent {

  @Input() public athlete: Athlete = new Athlete();

  constructor(public modal: NgbActiveModal) { }

  public getRenewValue(contractValue: number): number {
    return Math.floor(contractValue * 0.1);
  }

  public btnRenew(): void {
    this.modal.close('renew');
  }

  public btnRelease(): void {
    this.modal.close('release');
  }
}
