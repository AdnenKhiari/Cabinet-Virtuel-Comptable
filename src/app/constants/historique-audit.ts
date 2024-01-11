import { Audit, Historique } from '../models/historique-audit.model'

const historiqueFakeData: Historique[] = [
  {
    id: 1,
    date: new Date(),
    action: 'ajout',
    description: 'Velit ea consectetur do anim quis fugiat.',
    user: 'user 1'
  },
  {
    id: 2,
    date: new Date(),
    action: 'ajout',
    description:
      'Officia commodo voluptate dolor qui minim qui nostrud pariatur veniam dolor quis sint labore velit.',
    user: 'user 2'
  },
  {
    id: 3,
    date: new Date(),
    action: 'ajout',
    description: 'Officia anim adipisicing est ea qui consectetur ad.',
    user: 'user 3'
  }
]

const auditFakeData: Audit[] = [
  {
    id: 1,
    action: 'ajout',
    description: 'Consequat do qui est in commodo adipisicing velit commodo.',
    date: new Date(),
    earned: 100,
    user: 'user 1'
  },
  {
    id: 2,
    action: 'ajout',
    description: 'Veniam duis esse magna quis.',
    date: new Date(),
    earned: 100,
    user: 'user 2'
  }
]

export { historiqueFakeData, auditFakeData }
