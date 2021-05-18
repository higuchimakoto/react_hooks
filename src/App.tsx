import { UserCard } from './components/UserCard'
import { useAllUsers } from './hooks/useAllUsers'

export const App = () => {
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  const onClickFetchUser = () => getUsers();
  
  return (
    <div>
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p>データの取得に失敗しました。</p>
      ) : (
        loading ? (
          <p>Loading...</p>
        ) : (
          userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          )))
      )}
    </div>
  )
}
