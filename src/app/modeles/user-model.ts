export interface User {
  _id: {
    $oid: string
  }
  email: string
  password: string
  confirmpassword: string
  firstname: string
  lastname: string
  fonction: string | null
  secteur: string | null
  civilite: string
  usertype: string
  mobile: string
  raisonsociale: string | null
  nomsociete: string | null
  clientcode: string
  role: string
  created: {
    $date: string
  }
}
