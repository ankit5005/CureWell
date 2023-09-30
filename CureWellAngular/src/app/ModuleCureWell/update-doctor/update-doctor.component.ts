import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms' 
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Doctor } from 'src/app/services/curewell-interfaces/doctor';
import { UpdateDataService } from 'src/app/services/update-data.service';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.scss']
})

export default class UpdateDoctorComponent implements OnInit {
  id: number=0;
  name: string="";

  constructor(private dataService:UpdateDataService, private route: ActivatedRoute , private router: Router){}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['DoctorId'];
    this.name=this.route.snapshot.params['DoctorName'];
  }
  UpdateForm=new FormGroup({
  DoctorId:new FormControl('',[Validators.required]),
    DoctorName:new FormControl('',[Validators.required])
  }) 
 
  onSubmit() {
   { 
      console.warn(this.UpdateForm.value);
    }
  
  }
  get DoctorId (){
      return this.UpdateForm.get('id')
  }
  get DoctorName(){
    return this.UpdateForm.get('password')
  }



  updateData(DoctorName: string,DoctorId: number) {
    this.dataService.update(DoctorName,DoctorId).subscribe(
      (value) => {
        if (value) {
          alert("Updated Successfully :)");
          this.router.navigate(['/view-doctor']);
        } else {
          alert("Sorry, Could Not Update :(");
          this.router.navigate(['/view-doctor']);
        }
      }
    );
  }
}


