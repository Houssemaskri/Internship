import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stage } from '../stage';

@Injectable({
  providedIn: 'root'
})
export class StageService {

  constructor(private Http:HttpClient) { }
  


  addStage(stage:Stage) {
    return this.Http.post('http://localhost:3000/stage/', stage);
  }
  getStage(){
    return this.Http.get<Stage[]>('http://localhost:3000/stage/');
  } 
  updateStage(id:number, stage:Stage){
    return this.Http.put('http://localhost:3000/stage/'+id , stage)
  }

  getStageById(id:number)
  {
    return this.Http.get<Stage>('http://localhost:3000/stage/'+id);
  }
  delete(id: number){
    return this.Http.delete('http://localhost:3000/stage/'+ id);
  }
}
