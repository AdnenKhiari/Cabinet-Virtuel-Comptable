import { Component, OnInit } from '@angular/core'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'

interface Client {
  id: number
  name: string
  email: string
  phoneNumber: string
}
@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.css']
})
export class ListeClientsComponent implements OnInit {
  clients: Client[] = []
  selectedClient: Client | null = null
  closeResult = ''
  errorMessage: string | null = null

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    const storedClients = localStorage.getItem('clients')
    this.clients = storedClients ? JSON.parse(storedClients) : this.getDummyData()
  }

  getDummyData(): Client[] {
    return [
      { id: 1, name: 'Client 1', email: 'client1@example.com', phoneNumber: '123-456-7890' },
      { id: 2, name: 'Client 2', email: 'client2@example.com', phoneNumber: '987-654-3210' }
    ]
  }

  saveToLocalStorage() {
    localStorage.setItem('clients', JSON.stringify(this.clients))
  }

  open(content: any, client: Client | null = null) {
    this.selectedClient = client ? { ...client } : { id: 0, name: '', email: '', phoneNumber: '' }
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      result => {
        this.closeResult = `Closed with: ${result}`
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
      }
    )
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC'
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop'
    } else {
      return `with: ${reason}`
    }
  }

  addOrUpdateClient() {
    if (this.selectedClient && this.selectedClient.name.trim() !== '') {
      if (this.selectedClient.id === 0) {
        this.selectedClient.id = this.clients.length + 1
        this.clients.push({ ...this.selectedClient })
      } else {
        const index = this.clients.findIndex(c => c.id === this.selectedClient!.id)
        if (index !== -1) {
          this.clients[index] = { ...this.selectedClient }
        }
      }

      this.saveToLocalStorage()

      this.modalService.dismissAll()
      this.errorMessage = null
    } else {
      this.errorMessage = 'Veuillez remplir le nom du client'
    }
  }

  deleteClient(client: Client) {
    const index = this.clients.findIndex(c => c.id === client.id)
    if (index !== -1) {
      this.clients.splice(index, 1)
      this.saveToLocalStorage()
    }
  }
}
