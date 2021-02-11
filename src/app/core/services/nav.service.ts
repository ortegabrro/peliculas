import { Injectable } from '@angular/core';
import { Menu } from '../../shared/components/nav-aside/nav-aside.component';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  title: string;

  menu: Menu[] = [
    {
      section: 'Estrenos', items: [
        { title: 'Peliculas', icon: 'movie', route: 'peliculas' },
        { title: 'Series', icon: 'videocam', route: 'series' },
        { title: 'Documentales', icon: 'pan_tool', route: '/estrenos/hola1' },
        { title: 'Cortos', icon: 'group_work', route: '/estrenos/hola2' },
        { title: 'Teatro', icon: 'accessibility', route: '/estrenos/hola3' },
        { title: 'Cuenteros', icon: 'record_voice_over', route: '/estrenos/hola4' },
        { title: 'Eventos', icon: 'today', route: '/estrenos/hola5' }
      ]
    },
    {
      section: 'Perfil', items: [
        { title: 'Cerrar Sesión', icon: '', route: '/salir' }
      ]
    }
  ];

  constructor() { }
}
