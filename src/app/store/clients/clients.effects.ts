// clients/clients.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as clientsActions from './clients.actions';
import { ClientsService } from './clients.service';

@Injectable()
export class ClientsEffects {
  loadClients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clientsActions.loadClients),
      mergeMap(() =>
        this.clientsService.getClients().pipe(
          map((clients) => clientsActions.clientsLoaded({ clients })),
          catchError((error) => of(clientsActions.clientsError({ errorMessage: error.message })))
        )
      )
    )
  );

  // Other effects can be added as needed

  constructor(private actions$: Actions, private clientsService: ClientsService) {}
}
