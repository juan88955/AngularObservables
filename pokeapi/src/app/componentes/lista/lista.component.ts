// import { HttpClientModule } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { PokeapiService } from '../../servicios/pokeapi.service';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';
// import { MatDialogModule, MatDialog } from '@angular/material/dialog';
// import { PokemonDialogComponent } from './pokemon-dialog.component';


// @Component({
//   selector: 'app-lista',
//   standalone: true,
//   imports: [HttpClientModule, MatCardModule, MatButtonModule, MatDialogModule],
//   providers: [PokeapiService],
//   templateUrl: './lista.component.html',
//   styleUrl: './lista.component.css'
// })
// export class ListaComponent implements OnInit {
//   listaPokemones: any;
//   pokemonesCompleto: any[] = [];
// pokemon: any;
// data: any;

//   constructor(private pokeApi: PokeapiService, private dialog: MatDialog) {}

//   ngOnInit(): void {
//     this.obtenerPokemones();
//   }

//   obtenerPokemones(): void {
//     this.pokeApi.obtenerListadoPokemones().subscribe({
//       next: (data: any) => {
//         this.listaPokemones = data;
//         this.obtenerDetallesPokemones();
//       },
//       error: (err: any) => { console.log(err) }
//     });
//   }

//   obtenerDetallesPokemones(): void {
//     this.listaPokemones.results.forEach((element: any) => {
//       this.pokeApi.obtenerUnPokemon(element.url).subscribe({
//         next: (data: any) => {
//           this.pokemonesCompleto.push(data);
//         },
//       });
//     });
//   }

//   nextPage(nextUrl: string): void {
//   }

//   playSound(soundSource: string) {
//     const audio = new Audio();
//     audio.src = soundSource;
//     audio.load();
//     audio.play();
//   }

//   openDialog(pokemon: any): void {
//     this.dialog.open(PokemonDialogComponent, {
//       data: pokemon,
//       width: '300px'
//     });
//   }
// }


import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../servicios/pokeapi.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { PokemonDialogComponent } from './pokemon-dialog.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [
    HttpClientModule, 
    MatCardModule, 
    MatButtonModule, 
    MatDialogModule, 
    CommonModule
  ],
  providers: [PokeapiService],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
[x: string]: any;
  listaPokemones: any;
  pokemonesCompleto: any[] = [];

  constructor(private pokeApi: PokeapiService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.obtenerPokemones();
  }

  obtenerPokemones(): void {
    this.pokeApi.obtenerListadoPokemones().subscribe({
      next: (data: any) => {
        this.listaPokemones = data;
        this.obtenerDetallesPokemones();
      },
      error: (err: any) => { console.log(err) }
    });
  }

  obtenerDetallesPokemones(): void {
    this.listaPokemones.results.forEach((element: any) => {
      this.pokeApi.obtenerUnPokemon(element.url).subscribe({
        next: (data: any) => {
          this.pokemonesCompleto.push(data);
        },
      });
    });
  }

  nextPage(nextUrl: string): void {
    // Implementación pendiente
  }

  playSound(soundSource: string) {
    const audio = new Audio();
    audio.src = soundSource;
    audio.load();
    audio.play();
  }

  openDialog(pokemon: any): void {
    this.dialog.open(PokemonDialogComponent, {
      data: pokemon,
      width: '300px'
    });
  }
}