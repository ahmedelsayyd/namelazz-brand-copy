import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { DashboardService } from '../../dashboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-attribute',
  templateUrl: './add-attribute.component.html',
  styleUrls: ['./add-attribute.component.scss']
})
export class AddAttributeComponent implements OnInit , OnDestroy {
  tableData=[]
  attrForm: FormGroup
  validateForm!: FormGroup;
  listOfControl: Array<{ id: number; controlInstance: string }> = [];
  attrsSubscription:Subscription

  constructor(private dashBoardService:DashboardService, private fb: FormBuilder, private fs:AngularFirestore) {

  }

  ngOnInit(): void {
    this.attrForm = this.fb.group({
      attrName: [''],
      variables: this.fb.group({})
    });

    this.addField();

    this.attrsSubscription= this.dashBoardService.getAttributes().subscribe(res=>{
      this.tableData = res;
      
    })
    

  }

  onSubmit(attrForm:any) {

    const attrValues ={
      attrName:attrForm.attrName,
       variables: attrForm.variables}

    this.dashBoardService.addAttirbute(attrValues)

  }



  addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id = this.listOfControl.length > 0 ? this.listOfControl[this.listOfControl.length - 1].id + 1 : 0;

    const control = {
      id,
      controlInstance: `passenger${id}`
    };
    const index = this.listOfControl.push(control);
    (this.attrForm.get('variables') as FormGroup).addControl(this.listOfControl[index - 1].controlInstance, new FormControl(null, Validators.required));
  }

  removeField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfControl.length > 1) {
      const index = this.listOfControl.indexOf(i);
      this.listOfControl.splice(index, 1);
      this.attrForm.removeControl(i.controlInstance);
    }
  }


  deleteVar(index){
    console.log(index);
    
    this.fs.doc(`product-attributes/${index}`).delete()
  }

  ngOnDestroy(){
    if(this.attrsSubscription) this.attrsSubscription.unsubscribe()
  }
}
