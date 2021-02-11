import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  token: string;
  logged = false;

  constructor() { }
}
