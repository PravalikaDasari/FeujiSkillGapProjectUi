import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeUiBean } from '../../models/EmployeeSkill.model';
import { SkillCompetency } from '../../models/SkillCompetency.model';
import { EmployeeSkillGet } from '../../models/EmployeeSkillGet.model';
import { SkillNamesDto } from '../../models/SkillNamesDto.model';
import { environment } from '../../environments/environment';
import { Paths } from '../../environments/Api\'s/employee-api-enums';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSkillService 
{
  getSkillNames(skillIds: number[]) {
    return this.http.get<SkillNamesDto[]>(`${environment.SkillService}${Paths.FetchSkillNames}${skillIds}`)
  }

  constructor(private http:HttpClient) { }

  getRoles(selectedTechnicalCate: number):Observable<SkillCompetency[]> {

   return this.http.get<SkillCompetency[]>(`${environment.SkillService}${Paths.FetchRoles}${selectedTechnicalCate}`)
  }
  
  getEmployeSkillsBySkillId(selectedSkillId: number[] ,page:number, size:number):Observable<any>
  {
    return this.http.get<any>(`${environment.SkillService}${Paths.FetchEmployeeSkills}${selectedSkillId}/${page}/${size}`)
  }

  public getAllEmployeeSkills(empMail:string):Observable<any[]>
  {
    return this.http.get<any[]>(`${environment.EmployeeSkillUrl}${Paths.FetchAll}${empMail}`)
  } 

   public getSkillCategories(skillCategoryInput:string):Observable<any[]>
  {
    return this.http.get<any[]>(`${environment.ReferenceServiceUrl}${Paths.Getreference}${skillCategoryInput}`)
  }

  getTechnicalCategory(selectedSkillCategory:any):Observable<any[]>{
    return this.http.get<any[]>(`${environment.ReferenceServiceUrl}${Paths.Getreference}${selectedSkillCategory}`); 
  
   }
   getSkills(selectedTechnicalCategory:any):Observable<any[]>{
   
    return this.http.get<any[]>(`${environment.SkillService}${Paths.GetAllSkills}${selectedTechnicalCategory}`); 
  
   }

   getSkilltype(skillTypeInput:any):Observable<any[]>{
    return this.http.get<any[]>(`${environment.ReferenceServiceUrl}${Paths.Getreference}${skillTypeInput}`); 
   }


   getSkillCompetency(skillCompetencyInput:any):Observable<any[]>{
    return this.http.get<any[]>(`${environment.ReferenceServiceUrl}${Paths.Getreference}${skillCompetencyInput}`); 
  
   }
 
  postEmployeeSkills(employeeSkill:EmployeeUiBean[]): Observable<EmployeeUiBean[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<EmployeeUiBean[]>(`${environment.EmployeeSkillUrl}${Paths.Save}`,employeeSkill,{headers});
 }

  editEmployeeSkill(editedRow:EmployeeSkillGet,employeeSkillId:any): Observable<any> {
   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   return this.http.put<EmployeeSkillGet>(`${environment.EmployeeSkillUrl}${Paths.Update}${employeeSkillId}`,editedRow);
  
 }

 deleteRow(employeeSkillId:any){
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.put<EmployeeSkillGet>(`${environment.EmployeeSkillUrl}${Paths.Delete}${employeeSkillId}`,{headers});
 
 }
 getSkillsByEmployeeId(email: string): Observable<any> {
  return this.http.get<any>(`${environment.SkillSetUrl}${Paths.Fetch}${email}`);
}

getSkillsOfEmployee(email: string, skillcategoryid:number): Observable<any> {
  return this.http.get<any>(`${environment.SkillSetUrl}${Paths.Fetch}${email}/${skillcategoryid}`);
  }
  
}
