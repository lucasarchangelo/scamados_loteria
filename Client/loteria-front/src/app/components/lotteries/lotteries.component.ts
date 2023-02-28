import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Lottery } from 'src/app/models/lottery';
import { ContractModalComponent } from './contract-modal/contract-modal.component';

@Component({
  selector: 'app-lotteries',
  templateUrl: './lotteries.component.html',
  styleUrls: ['./lotteries.component.css']
})
export class LotteriesComponent implements OnInit {

  public listLotteries: Array<Lottery> = [];

  constructor(private ngbModal: NgbModal) { }

  public ngOnInit(): void {
    for (let i = 0; i < 7; i++) {
      this.generateNewLottery();
    }
  }

  private generateNewLottery(): void {
    const newLottery = new Lottery();
    newLottery.generateLottery();
    this.listLotteries.push(newLottery);
  }

  public btnClaimPrize(element: Lottery): void {
    const modal = this.ngbModal.open(ContractModalComponent, {
      size: 'lg',
    });
    modal.componentInstance.lottery = element;
    modal.closed.subscribe((result) => {
      console.log(result);
    });
  }

  public btnBuyTicket(element: Lottery): void {
    const modal = this.ngbModal.open(ContractModalComponent, {
      size: 'lg',
    });
    modal.componentInstance.lottery = element;
    modal.closed.subscribe((result) => {
      console.log(result);
    });
  }
}
