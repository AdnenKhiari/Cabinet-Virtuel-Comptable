import { Component } from '@angular/core'
import { DecFiscale } from '../modeles/decfiscales.modeles'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

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
  
  //constructor with dependency injection
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  //intialization of the component
  public ngOnInit() {
    this.loadAllDeclarations()
    this.initAddForm()
  }

  public loadAllDeclarations() { }
  //load all declarations

  public initAddForm() {
    this.addDeclarationForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required]
    })
    //add decalaration form
  }

  public initUpdateForm(user: DecFiscale) {
    this.updateDeclarationForm = this.formBuilder.group({
      firstname: [user.getFirstName()],
      lastname: [user.getLastName()]
      //update declaration from user input
    })
  }

  public onSubmitAdd() { //submission of the add declaration form
    let firstName = this.addDeclarationForm.get('firstname')?.value
    let lastName = this.addDeclarationForm.get('lastname')?.value
    let address = this.addDeclarationForm.get('address')?.value
    //adding the declaration form

    let user = new DecFiscale(firstName, lastName, address)

    this.loadAllDeclarations() //refresh the list of declarations after submission
    this.ngOnInit()
    
  }

  public onUpdateUser(id: Number) {
    this.updatedId = id //update the user id 
  }

  public onSubmitUpdate() { //submission of the update declaration form
    if (this.updateDeclarationForm) {
      this.updatedDeclaration.firstname = this.updateDeclarationForm.get('firstname')?.value
      this.updatedDeclaration.lastname = this.updateDeclarationForm.get('lastname')?.value
      //updating the declaration form
    }

    console.log(this.updateDeclarationForm)
    if (this.updatedId) { // updating the declaration based on user id
    }
    //refresh the declaration list
    window.location.reload()
  }

  public onDeleteUser(id: Number) { //deletion of a declaration
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette declaration ?')) {
      //refresh of the declarations list after deletion
      this.loadAllDeclarations()
      this.ngOnInit()
    }
  }
}
