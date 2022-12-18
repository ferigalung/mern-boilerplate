import { useState, useEffect } from "react"
import { FaUser } from "react-icons/fa"
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Register() {
  
  // formData is a value we set for a state variable
  // setFormData is function to manipulate state variable
  // in useState fn, we can pass default value of state variable we want
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const {name, email, password, confirmPassword} = formData
  
  //navigate is redirect function
  const navigate = useNavigate()

  // dispatch is to throw function to manipulate state in store
  const dispatch = useDispatch()

  // useSelector is a hook from the react-redux library that allows a functional React component to get the current state from the Redux store 
  // and subscribe to updates.
  // It is used to retrieve values from the store and make them available to the component.
  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

  // useEffect is a hook in React that allows you to perform side effects in functional components. 
  // It is a way to handle lifecycle events and perform other logic that needs to be done when a component is rendered or updated.
  // if useEffect given a second argument like in this case, they only executed when the 1 of array state value is changed, rather than exec every re-render
  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    if(isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()

    if(password !== confirmPassword) {
      return toast.error('Password did not match!');
    }

    const userData = {
      name, email, password
    }

    dispatch(register(userData))
  }

  if(isLoading) {
    return <Spinner />
  }

  return (
    <>
    <section className="heading">
      <h1>
      <FaUser /> Register
      </h1>
      <p>Please create an account</p>
    </section>

    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input type="text" className="form-control" id="name" name="name" value={name} placeholder="Enter your name" onChange={onChange} />
        </div>
        <div className="form-group">
          <input type="email" className="form-control" id="email" name="email" value={email} placeholder="Enter your email" onChange={onChange} />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="password" name="password" value={password} placeholder="Enter your password" onChange={onChange} />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={confirmPassword} placeholder="Confirm your password" onChange={onChange} />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">Submit</button>
        </div>
      </form>
    </section>
    </>
  )
}

export default Register