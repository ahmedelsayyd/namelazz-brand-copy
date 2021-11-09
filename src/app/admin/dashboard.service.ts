import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Attribute } from '../shared/models/attribute.model';


@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  constructor( private fs:AngularFirestore) { }

  getAttributes(): Observable<Attribute[]>{
    
    return this.fs.collection<Attribute>(`product-attributes/`).snapshotChanges()
    .pipe(
      map((attrs:any)=>{        
        return attrs.map((attr)=>{
          
          return {
            id: attr.payload.doc.id,
            attrName:attr.payload.doc.data().attrName,
            variables: (Object.values(attr.payload.doc.data().variables) as [])
          }
        })
      })
    )
  }

  addAttirbute(attr){
    this.fs.collection(`product-attributes/`).add(attr)
  }

  deleteVariable(){
    
  }
}

