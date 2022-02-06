import { Injectable } from '@angular/core';
import { Firestore, addDoc, deleteDoc, collection, doc, updateDoc, setDoc, docData, collectionData } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IModule } from './IModule.interface';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private moduleSource = new BehaviorSubject<IModule[]>([]);
  currentModule = this.moduleSource.asObservable();

  constructor(private _db: Firestore) { }

  readonly path = 'modules';

  add(data: IModule) {
    const ref = collection(this._db, this.path);
    return addDoc(ref, data)
  }

  delete(id: string) {
    const bookDocRef = doc(this._db, `${this.path}/${id}`);
    return deleteDoc(bookDocRef);
  }

  update(module: IModule) {
    const bookDocRef = doc(this._db, `${this.path}/${module.id}`);
    return setDoc(bookDocRef, module);
  }

  getByID(id: string) {
    const bookRef = doc(this._db, `${this.path}/${id}`);
    return docData(bookRef, { idField: 'id' }) as Observable<IModule>;
  }

  getAll(): Observable<IModule[]> {
    const booksRef = collection(this._db, this.path);
    return collectionData(booksRef, { idField: 'id' }) as Observable<IModule[]>;
  }

  getAndShare(){
    this.getAll().subscribe(res => this.moduleSource.next(res));
  }
}
