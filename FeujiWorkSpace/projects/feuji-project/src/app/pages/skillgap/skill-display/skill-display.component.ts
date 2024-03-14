import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeSkillService } from '../../../services/employee-skill.service';

@Component({
  selector: 'app-skill-display',
  templateUrl: './skill-display.component.html',
  styleUrl: './skill-display.component.css'
})
export class SkillDisplayComponent {

  isBorderBlue: boolean = false;
  isBorderBlue2: boolean = false;
  isBorderBlue3: boolean = false;
  selectedTechCat:number=0;
  allSkills:any[]=[];
  newRows: any[] = [];
  skillCatogoryInput:string='Skill Category'
  selectedSkillCate:String='';
  technicalCategories:any[]=[];
  editModes: boolean[] = [];
  changeBorderStyle() {
    this.isBorderBlue = true; 
  }
  changeBorderStyle2() {
    this.isBorderBlue2 = true; 
  }
  changeBorderStyle3() {
    this.isBorderBlue3 = true; 
  }
  skillCategories: any[] = [];

  constructor(private http: HttpClient,private empskillService:EmployeeSkillService) {}
  ngOnInit(): void {
    this.empskillService.getSkillCategories(this.skillCatogoryInput).subscribe(
      (resp: any[]) => {
        this.skillCategories = resp as any[];
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  
  
  onSelectskillCat(skillcat:any){
    this.selectedSkillCate=skillcat.target.value;
    this.empskillService.getTechnicalCategory(this.selectedSkillCate).subscribe(
      (resp) => {
        this.technicalCategories = resp as any[];
      },
      (error) => {
        console.error(error);
      }
    );
    
  }

  onSelectTechCat(techCat:any){
    this.selectedTechCat = techCat.target.value
    this.empskillService.getSkills(this.selectedTechCat).subscribe((resp)=>{
        this.allSkills = resp;
    },
    (error) => {
      console.error(error);
    }
    )
  }

  addNewRow() {
    this.newRows.push({
      skillName: '',
      description: ''})}
  isEditMode(index: number): boolean {
    
    return this.editModes[index];
  }
}
