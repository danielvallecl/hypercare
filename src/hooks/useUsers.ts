import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { User } from '../interface/User.interface';

// Fetch user data with React Query
const fetchUsers = async (): Promise<User[]> => {
  const { data } = await axios.get('https://9e06da9a-97cf-4701-adfc-9b9a5713bbb9.mock.pstmn.io/users')
  return data.data.users
}

// useUsers Custom Hook 
export const useUsers = () => {
  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })
}
