import { useUser } from './apollo/useUser'

const uid = '8cc4fc8e-283d-4765-ac26-6b7b0f9bac76'

export const Home = () => {
  const { user } = useUser(uid)
  console.log('in home')
  return 'Welcome to Home'
}
