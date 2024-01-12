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
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  public ngOnInit() {
    this.loadAllDeclarations()
    this.initAddForm()
  }

  public loadAllDeclarations() {}

  public initAddForm() {
    this.addDeclarationForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required],
      matriculeFiscale: ['', Validators.required],
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

    // this.userService.registerUser(user)
    // 	.subscribe({
    // 		next: (data: User) => {
    // 			console.log(data);
    // 		},
    // 		error: (error) => {
    // 			console.log(error);
    // 		}
    // 	});
    // window.location.reload();
    this.loadAllDeclarations()
    this.ngOnInit()
  }

  public onUpdateUser(id: Number) {
    this.updatedId = id
    // this.userService.getUserById(id)
    // .subscribe({
    // 	next: (data: User[]) => {
    // 		this.user.setFirstName(data[0].firstname);
    // 		this.user.setLastName(data[0].lastname);
    // 		this.user.setAddress(data[0].address);

    // 		this.initUpdateForm(this.user);
    // 	},
    // 	error: (error) => {
    // 		console.log(error);
    // 	}
    // });
  }

  public onSubmitUpdate() {
    if (this.updateDeclarationForm) {
      this.updatedDeclaration.firstname = this.updateDeclarationForm.get('firstname')?.value
      this.updatedDeclaration.lastname = this.updateDeclarationForm.get('lastname')?.value
    }

    console.log(this.updateDeclarationForm)
    if (this.updatedId) {
      // this.userService.updateUser(this.updatedId, this.updatedDeclaration)
      // 	.subscribe({
      // 		next: (data: User) => {
      // 			console.log("Modification réussie" + data);
      // 		},
      // 		error: (error) => {
      // 			console.log(error);
      // 		}
      // 	});
    }
    window.location.reload()
  }

  public onDeleteUser(id: Number) {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      // this.userService.removeUser(id)
      // 	.subscribe(data => this.ngOnInit())
      // window.location.reload();
      this.loadAllDeclarations()
      this.ngOnInit()
    }
  }
}
