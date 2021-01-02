import { tap } from 'rxjs/operators';
import { ExperienceService } from './../experience.service';
import { IExperience } from './../../../interfaces/experience';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsibilities',
  templateUrl: './responsibilities.component.html',
  styleUrls: ['./responsibilities.component.scss']
})
export class ResponsibilitiesComponent implements OnInit {

  experience: IExperience | null;
  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.experienceService.changeSelectedExperienceAction$
    .subscribe(
      selectedExperience => {
        return this.experience = selectedExperience;
      }
    );
  }

}
