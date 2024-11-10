import { Component } from '@angular/core';
import { Stage } from '../stage';
import { StageService } from '../services/stage.service';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css']
})
export class StagesComponent {

  stages: Stage[] = [];
  filteredStages: Stage[] = [];
  searchTerm: string = '';

  constructor(private ss: StageService) {
    this.ss.getStage().subscribe({
      next: (data) => {
        this.stages = data;
        this.filteredStages = data;  // Initialize filteredStages with all stages
      },
      error: (e: any) => console.log(e)  
    });
  }

  interesse(s: Stage) {
    s.nbrInteresse++;
    this.ss.updateStage(s.id, s).subscribe({
      next: () => {
        let index = this.stages.findIndex(e => e.id === s.id);  
        if (index !== -1) {
          this.stages[index] = s;
          this.filteredStages = this.stages;  // Update filteredStages
        }
      },
      error: (e: any) => console.log('Update failed:', e)
    });
  }

  delete(id: number) {
    console.log(`Deleting stage with id: ${id}`);  // Add logging for debugging
    this.ss.delete(id).subscribe({
      next: () => {
        this.stages = this.stages.filter((cat) => cat.id !== id);  
        this.filteredStages = this.stages;  // Update filteredStages
      },
      error: (e: any) => alert(e)
    });
  }

  search() {
    this.filteredStages = this.stages.filter(stage => 
      stage.titre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      stage.Description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}