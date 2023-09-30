import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Doctor } from './curewell-interfaces/doctor';
@Injectable({
  providedIn: 'root'
})
export class UpdateDataService {
  url="https://localhost:44352/api/home/GetAllDoctors";

 constructor(private http:HttpClient){
 }
 users(){
  
  return this.http.get<Doctor[]>(this.url);
 }
 update(name:string,id : number) {
  var doctor: Doctor;
  doctor={DoctorId: id,DoctorName: name};
  return this.http.put('https://localhost:44352/api/home/update',doctor);
 }
 
  // constructor(private http:HttpClient) { }
  

  // getDoctor() : Observable<Doctor[]>{

  //   return this.http.get<Doctor[]>('https://localhost:44352/api/home/GetAllDoctors');

  // }
}
