import { IExperience } from './../../interfaces/experience';
import { ExperienceService } from './experience.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences: IExperience[];
  selectedExperience: IExperience;


  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.experienceService.changeSelectedExperienceAction$.subscribe(
      selectedExperience => {
        this.selectedExperience = selectedExperience;
      }
    );

    this.experienceService.getExperience().subscribe(
      (experiences: IExperience[]) => {
        this.experiences = experiences;
        if(this.experiences.length > 0){
          this.onSelectedExperience(this.experiences[0]);
        }
      },
      (error: any) => console.log(error as any)
    );

  }

  onSelectedExperience(experience: IExperience | null): void{
    if(experience){
      this.experienceService.changeSelectedExperience(experience);
    }
  }
}
