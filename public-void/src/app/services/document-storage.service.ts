import { Injectable } from '@angular/core';
declare const PouchDB: any;

@Injectable({
  providedIn: 'root'
})
export class DocumentStorageService {
  private db: any;
  private changesControl = null;

  private _onChange(change): void {
    console.log('DocumentStorageService.change', change);
  }
  private _onComplete(info): void {
    console.log('DocumentStorageService.complete', info);
  }
  private _onError(error): void {
    console.error('DocumentStorageService.error', error);
  }

  public get(id: string): Promise<any> {
    return this.db.get(id);
  }

  public put(obj: { _id: string }): Promise<any> {
    return this.db.put(obj);
  }

  public fetchAll(): Promise<any> {
    return this.db.allDocs({include_docs: true});
  }

  constructor() {
    this.db = new PouchDB('documents');
    this.changesControl = this.db.changes({
      since: 'now',
      live: true,
      include_docs: true
    })
      .on('change', (change) => { this._onChange(change); })
      .on('complete', (info) => { this._onComplete(info); })
      .on('error', (error) => { this._onError(error); });
  }
}
