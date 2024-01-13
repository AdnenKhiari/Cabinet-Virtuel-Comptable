import { Component } from '@angular/core'
import { DecFiscale } from '../modeles/decfiscales.modeles'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { HttpErrorResponse } from '@angular/common/http'
import { AuthService } from '../authentification/auth.service'

@Component({
  selector: 'app-liste-declarations-fiscales',
  templateUrl: './liste-declarations-fiscales.component.html',
  styleUrls: ['./liste-declarations-fiscales.component.css']
})
export class ListeDeclarationsFiscalesComponent {
  listDeclarations: any = []
  declaration: DecFiscale = new DecFiscale()
  updatedId?: Number
  updatedDeclaration: DecFiscale = new DecFiscale()
  addDeclarationForm!: FormGroup
  updateDeclarationForm!: FormGroup
  firstname: String = ''
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
    private fichierService: FichierService,
    private authService: AuthService

  ) {}

  public ngOnInit() {
    this.loadAllDeclarations()
    this.initAddForm()
  }

  public loadAllDeclarations(

  ) {
    const currentUser = this.authService.getCurrentUser();

    this.fichierService.GetFichierByCode(currentUser.clientcode).subscribe(
      (fichier: any) => {
        this.listDeclarations = fichier
      },
      (error: HttpErrorResponse) => { 
        console.error(error);
      }
    );
  }

  public initAddForm() {
    this.addDeclarationForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required]
    })
  }

  public initUpdateForm(user: DecFiscale) {
    this.updateDeclarationForm = this.formBuilder.group({
      firstname: [user.getFirstName()],
      lastname: [user.getLastName()]
    })
  }

  public onSubmitAdd() {
    let firstName = this.addDeclarationForm.get('firstname')?.value
    let lastName = this.addDeclarationForm.get('lastname')?.value
    let address = this.addDeclarationForm.get('address')?.value

    let user = new DecFiscale(firstName, lastName, address)

    this.loadAllDeclarations()
    this.ngOnInit()
  }

  public onUpdateUser(id: Number) {
    this.updatedId = id
  }

  public onSubmitUpdate() {
    if (this.updateDeclarationForm) {
      this.updatedDeclaration.firstname = this.updateDeclarationForm.get('firstname')?.value
      this.updatedDeclaration.lastname = this.updateDeclarationForm.get('lastname')?.value
    }

    console.log(this.updateDeclarationForm)
    if (this.updatedId) {
    }
    window.location.reload()
  }

  public onDeleteUser(id: Number) {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette declaration ?')) {
      this.loadAllDeclarations()
      this.ngOnInit()
    }
  }
}
