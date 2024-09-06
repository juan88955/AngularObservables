import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-pokemon-dialog',
    standalone: true,
    imports: [MatDialogModule, MatButtonModule, CommonModule],
    styleUrls: ['./pokemon-dialog.component.css'],
    template: `
    <h2 mat-dialog-title><strong>{{data.name | titlecase}}</strong></h2>
    <mat-dialog-content>
      <img [src]="data.sprites.front_default" [alt]="data.name">
      <p><strong>Tipo:</strong> {{data.types[0].type.name | titlecase}}</p>
      <p><strong>Altura:</strong> {{data.height / 10 | number:'1.1-2'}} m</p>
      <p><strong>Peso:</strong> {{data.weight / 10 | number:'1.1-2'}} kg</p>
      <p><strong>Habilidad:</strong> {{data.abilities[0].ability.name | titlecase}}</p>
      <p><strong>Experiencia base:</strong> {{data.base_experience}}</p>
      <p><strong>{{data.stats[0].stat.name | titlecase}}:</strong> {{data.stats[0].base_stat}}</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="closeDialog()">Cerrar</button>
      <button mat-button (click)="playSound()">Sonido</button>
    </mat-dialog-actions>
  `
})
export class PokemonDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<PokemonDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    closeDialog(): void {
        this.dialogRef.close();
    }

    playSound(): void {
        if (this.data.cries && this.data.cries.latest) {
            const audio = new Audio(this.data.cries.latest);
            audio.play();
        } else {
            console.error('No sound available for this Pokémon');
        }
    }
}