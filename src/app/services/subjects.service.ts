import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Store } from '@ngrx/store';
import { subjectAction } from '../store/subjects/subjects.action';

@Injectable({
    providedIn: "root"
  })
export class SubjectsService{
    private BASE_URI = environment.APIEndpoint;
    constructor(private http: HttpClient,
    private store: Store<{subjects}>){ }
    
    getSubjects(classNumber?: string) { 
        return this.http.get(`${this.BASE_URI}subjects`)
        .subscribe(response => {
          //@ts-ignore
          this.store.dispatch(subjectAction({ data: response.data }));
        });

    }
    addSubject(data) {
      return this.http.post(`${this.BASE_URI}subjects`, data,{observe: 'response'}).subscribe((response) => {
        console.log(response.status === 200);
        if (response.status === 200) {
          this.getSubjects();
        } 
      });
    }

    editSubject(subjectId, data) {
      return this.http.put(`${this.BASE_URI}subjects/${subjectId}`,
      data, { headers: new HttpHeaders({
        'Content-Type': 'application/json'}),
      observe: 'response'}).subscribe((response) => {
        if (response.status === 200) {
          this.getSubjects();
        } 
      });
    }
  }


