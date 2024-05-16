import { gql, useQuery } from '@apollo/client'

export const GET_USER = gql`
  query GetUser($uid: Uuid!) {
    user(uid: $uid) {
      uid
      first_name
      last_name
    }
  }
`

export const useUser = (uid) => {
  const variables = { uid }
  const { data, loading } = useQuery(GET_USER, {
    variables,
    skip: !uid,
  })

  return {
    user: data?.user || {},
    loading,
  }
}
