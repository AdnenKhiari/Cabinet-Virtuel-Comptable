export interface AuthStateInterface {
  isAuthenticated: boolean
  user: any // When user model is ready, change any to User
  error: string | null
}
