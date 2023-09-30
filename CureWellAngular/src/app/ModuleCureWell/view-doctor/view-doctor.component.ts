import { Component, OnInit } from '@angular/core';
import { UpdateDataService } from 'src/app/services/update-data.service';
import { Doctor } from 'src/app/services/curewell-interfaces/doctor';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.scss']
})
export class ViewDoctorComponent implements OnInit{
  users: Doctor[] = [];
  constructor(private userData:UpdateDataService , private route : Router){}
  
  
  ngOnInit(): void {
   this.getDoctor();
  }
  
  getDoctor() {
    this.userData.users().subscribe((data)=>{
      console.warn("data",data);
      this.users=data;
    });
  }
  UpdateDoctor(d: Doctor){
  
    this.route.navigate(['/update-doctor',d]);
  }
}

// export class ViewDoctorComponent implements OnInit {
//   doctorList: Doctor[]=[];
  
//   constructor (private _curewellService:UpdateDataService,private router:Router){}
       
  
//   ngOnInit():void {
//             this.getDoctor();
//           }
  
//           getDoctor() {

//       this._curewellService.getDoctor().subscribe(
  
//         (        value: Doctor[]) => {
  
//           this.doctorList = value;//putting the value in the doctor list array
  
//           console.log(this.doctorList);
  
//         },
  
//         (        error: any) => {
  
//           this.doctorList = [];
  
//           console.log(error);
  
//         },
  
//         () => console.log("Success")
  
//       )
  
//     };
//   }
