import { Component } from '@angular/core';
import { StageService } from '../services/stage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstage',
  templateUrl: './addstage.component.html',
  styleUrls: ['./addstage.component.css']
})
export class AddstageComponent {
  
  stage: FormGroup;

  constructor(private ss: StageService, private router: Router) {
    this.stage = new FormGroup({
      titre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Description: new FormControl('', [Validators.required]),
      Entreprise: new FormControl('', [Validators.required, Validators.pattern('^[A-Z][A-Za-z0-9 -é]*')]),
      
    });
  }

  add() {
    this.stage.value.nbrInteresse = 0;
    this.stage.value.Disponible = true;
    this.ss.addStage(this.stage.value).subscribe({
      next: () => {
        this.router.navigate(['/stages']);
      }
    });
  }
}