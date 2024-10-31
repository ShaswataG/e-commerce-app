import RegisterForm from '../components/User/RegisterForm'
import PageTitle from '../components/shared/PageTitle'

export default function Register() {
  return (
    <div className="container mx-auto p-4">
      <PageTitle title="Register" />
      <RegisterForm />
    </div>
  )
}
