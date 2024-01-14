import { Component, OnInit } from '@angular/core'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'

interface BankAccount {
  id: number
  accountNumber: string
  balance: number
  date: Date
  statements: BankStatement[]
}

interface BankStatement {
  date: string
  description: string
  amount: number
  type: 'debit' | 'credit'
}

@Component({
  selector: 'app-releves-bancaires',
  templateUrl: './releves-bancaires.component.html',
  styleUrls: ['./releves-bancaires.component.css']
})
export class RelevesBancairesComponent {
  bankAccounts: BankAccount[] = []
  selectedBankAccount: BankAccount | null = null
  closeResult = ''
  errorMessage: string | null = null

  addStatementDescription = ''
  addStatementAmount: number | null = null
  addStatementDate = ''
  addStatementType: 'debit' | 'credit' = 'debit'

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    const storedBankAccounts = localStorage.getItem('bankAccounts')
    this.bankAccounts = storedBankAccounts ? JSON.parse(storedBankAccounts) : this.getDummyData()
  }

  getDummyData(): BankAccount[] {
    return [
      {
        id: 1,
        accountNumber: '123456789',
        balance: 1000,
        date: new Date(),
        statements: [
          { date: '2024-01-13', description: 'Achat', amount: -50, type: 'credit' },
          { date: '2024-01-14', description: 'Depot', amount: 100, type: 'debit' }
        ]
      }
      // ... other bank accounts
    ]
  }

  saveToLocalStorage() {
    localStorage.setItem('bankAccounts', JSON.stringify(this.bankAccounts))
  }

  open(content: any, bankAccount: BankAccount | null = null) {
    this.selectedBankAccount = bankAccount
      ? { ...bankAccount }
      : { id: 0, accountNumber: '', balance: 0, statements: [], date: new Date() }
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

  addOrUpdateBankAccount() {
    if (this.selectedBankAccount && this.selectedBankAccount.accountNumber.trim() !== '') {
      if (this.selectedBankAccount.id === 0) {
        this.selectedBankAccount.id = this.bankAccounts.length + 1
        this.bankAccounts.push({ ...this.selectedBankAccount })
      } else {
        const index = this.bankAccounts.findIndex(b => b.id === this.selectedBankAccount!.id)
        if (index !== -1) {
          this.bankAccounts[index] = { ...this.selectedBankAccount }
        }
      }

      this.saveToLocalStorage()

      this.modalService.dismissAll()
      this.errorMessage = null
    } else {
      this.errorMessage = 'Veuillez remplir le numéro de compte'
    }
  }

  deleteBankAccount(bankAccount: BankAccount) {
    const index = this.bankAccounts.findIndex(b => b.id === bankAccount.id)
    if (index !== -1) {
      this.bankAccounts.splice(index, 1)
      this.saveToLocalStorage()
    }
  }

  addStatement() {
    if (this.addStatementDescription && this.addStatementAmount !== null && this.addStatementDate) {
      const newStatement: BankStatement = {
        date: this.addStatementDate,
        description: this.addStatementDescription,
        amount: this.addStatementAmount,
        type: this.addStatementType
      }

      if (this.selectedBankAccount) {
        this.selectedBankAccount.statements.push(newStatement)
        this.saveToLocalStorage()
      }

      // Clear input fields
      this.addStatementDescription = ''
      this.addStatementAmount = null
      this.addStatementDate = ''
      this.addStatementType = 'debit'
    }
  }
}
