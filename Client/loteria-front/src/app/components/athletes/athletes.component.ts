import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Athlete } from 'src/app/models/athlete';
import { ContractModalComponent } from './contract-modal/contract-modal.component';
import { DiscoverModalComponent } from './discover-modal/discover-modal.component';
import { PlayModalComponent } from './play-modal/play-modal.component';

@Component({
  selector: 'app-athletes',
  templateUrl: './athletes.component.html',
  styleUrls: ['./athletes.component.css']
})
export class AthletesComponent implements OnInit {

  public listAthletes: Array<Athlete> = [];

  constructor(private ngbModal: NgbModal) { }

  public ngOnInit(): void {
    for (let i = 0; i < 7; i++) {
      this.generateNewAthlete();
    }
    this.listAthletes[3].energy = 0;
    this.listAthletes[3].contractPlays = 45;
    this.listAthletes[6].energy = 0;
    this.listAthletes[6].contractPlays = 45;
  }

  public btnNewAthleteModal(): void {
    const newAthleteModal = this.ngbModal.open(DiscoverModalComponent);

    newAthleteModal.closed.subscribe((result) => {
      if (result) {
        this.generateNewAthlete();
      }
    });
  }

  private generateNewAthlete(): void {
    const newAthlete = new Athlete();
    newAthlete.generateAthlete();
    this.listAthletes.push(newAthlete);
  }

  public btnPlay(element: Athlete): void {
    const modal = this.ngbModal.open(PlayModalComponent, {
      size: 'xl'
    });
    modal.componentInstance.athlete = element;
  }

  public btnContract(element: Athlete): void {
    const modal = this.ngbModal.open(ContractModalComponent, {
      size: 'lg',
    });
    modal.componentInstance.athlete = element;
    modal.closed.subscribe((result) => {
      if (result === 'renew') {
        element.energy = 0;
        element.contractPlays = 0;
      } else if (result === 'release') {
        this.listAthletes = this.listAthletes.filter((item) => {
          return item.id !== element.id;
        });
      }
    });
  }

  public getContractButtonClass(element: Athlete): string {
    if (element.contractPlays < element.maxContractPlays) {
      return 'btn-success';
    } else {
      return 'btn-warning';
    }
  }
}
