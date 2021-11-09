import { Injectable, Injector } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { User } from "../models/user.model";
import { AuthService } from "./auth.service";
import { take } from 'rxjs/operators'



@Injectable({
    providedIn: 'root'
})

export class UserService {


    constructor(private fireStore: AngularFirestore, private injector: Injector) { }

    saveUser(user: User) {

        this.fireStore.doc<User>(`/user/${user.id}`).set(user)

        let authService = this.injector.get(AuthService)

        // authService.getToken.pipe(take(1)).subscribe(token => {

        //     console.log(token);
        // })

    }


    getUser(userId) {
        return this.fireStore.doc<User>(`/user/${userId}`).valueChanges()
    }


    updateUser(userId, userData){
        return this.fireStore.doc<User>(`/user/${userId}`).update(userData)
    }
}