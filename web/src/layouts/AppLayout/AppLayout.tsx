import { useAuth } from 'src/auth'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { currentUser, logOut } = useAuth()

  return (
    <div className="min-h-full bg-gray-900 text-white">
      <header className="bg-gray-800 p-4">
        <h1 className="text-2xl">Popular Movies</h1>
        {currentUser && <p>Welcome, {currentUser.email}</p>}
        <button
          onClick={() => (currentUser ? logOut() : '')}
          className="text-white"
        >
          {currentUser ? 'Logout' : 'Login'}
        </button>
      </header>
      {children}
    </div>
  )
}

export default AppLayout
