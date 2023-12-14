import { Audit, Historique } from '../models/historique-audit'

const historiqueFakeData: Historique[] = [
  {
    id: 1,
    date: new Date(),
    action: 'ajout',
    description: 'description',
    user: 'user 1'
  },
  {
    id: 2,
    date: new Date(),
    action: 'ajout',
    description: 'description',
    user: 'user 2'
  },
  {
    id: 3,
    date: new Date(),
    action: 'ajout',
    description: 'description',
    user: 'user 3'
  }
]

const auditFakeData: Audit[] = [
  {
    id: 1,
    action: 'ajout',
    description: 'description',
    date: new Date(),
    earned: 100,
    user: 'user 1'
  },
  {
    id: 2,
    action: 'ajout',
    description: 'description',
    date: new Date(),
    earned: 100,
    user: 'user 2'
  }
]

export { historiqueFakeData, auditFakeData }
