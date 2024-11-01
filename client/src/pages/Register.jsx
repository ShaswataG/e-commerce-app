import PageTitle from '../components/shared/PageTitle'
import RegisterForm from '../components/User/RegisterForm'

export default function Register() {
  return (
    <div className="container mx-auto p-4">
      <PageTitle title="Register" />
      <RegisterForm />
    </div>
  )
}
