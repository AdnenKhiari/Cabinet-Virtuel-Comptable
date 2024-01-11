/* eslint-disable @typescript-eslint/ban-types */
export class DecFiscale {
  public firstname: String = ''
  public lastname: String = ''
  public nature: String = ''
  public origine: String = ''
  public mois: String = ''
  public annee: String = ''
  public matriculefiscale: String = ''
  public raisonsociale: String = ''
  public adress: String = ''
  public codepostal: String = ''
  public activite: String = ''
  public regimefiscalimpot: String = ''
  public sousactivite: String = ''
  public source: String = ''
  public statutadmin: String = ''
  public statutparam: String = ''
  public created: String = ''

  constructor(
    public $_firstname?: String,
    public $_lastname?: String,
    public $_nature?: String,
    public $_mois?: String,
    public $_annee?: String,
    public $_matriculefiscale?: String,
    public $_created?: String,
    public $_decFisc?: DecFiscale
  ) {
    if ($_firstname) this.firstname = $_firstname
    if ($_lastname) this.lastname = $_lastname
    if ($_nature) this.nature = $_nature
    if ($_mois) this.mois = $_mois
    if ($_annee) this.annee = $_annee
    if ($_matriculefiscale) this.matriculefiscale = $_matriculefiscale
    if ($_created) this.created = $_created
    if ($_decFisc) {
      this.firstname = $_decFisc.firstname
      this.lastname = $_decFisc.lastname
      this.nature = $_decFisc.nature
      this.mois = $_decFisc.mois
      this.matriculefiscale = $_decFisc.matriculefiscale
      this.created = $_decFisc.created
    }
  }

  public getFirstName(): String {
    return this.firstname
  }

  public getLastName(): String {
    return this.lastname
  }

  public setFirstName($_firstname: String): void {
    this.firstname = $_firstname
  }

  public setLastName($_lastname: String): void {
    this.lastname = $_lastname
  }
}
