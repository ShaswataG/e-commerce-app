import PageTitle from '../components/shared/PageTitle'
import LoginForm from '../components/User/LoginForm'

export default function Login() {
  return (
    <div className="container mx-auto p-4">
      <PageTitle title="Sign in" />
      <LoginForm />
    </div>
  )
}
