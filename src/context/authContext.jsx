import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import axiosInstance from '../utils/axiosInstance'

export const AuthContext = createContext()

function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const sessionUser = sessionStorage.getItem('user')
    if (sessionUser) {
      setUser(JSON.parse(sessionUser))
    }
  }, [])

  const onLogin = useCallback(async (data, setError) => {
    try {
      const { confirmPassword, ...rest } = data
      const res = await axiosInstance.post('login', rest)
      sessionStorage.setItem('user', JSON.stringify(res))
      setUser(res)
    } catch (error) {
      setError('serverError', { message: error.message })
    }
  }, [])

  const onRegister = useCallback(async (data, setError) => {
    try {
      const { confirmPassword, ...rest } = data
      const res = await axiosInstance.post('register', rest)
      sessionStorage.setItem('user', JSON.stringify(res))
      setUser(res)
    } catch (error) {
      setError('serverError', { message: error.message })
    }
  }, [])

  const value = useMemo(() => ({ user, onLogin, onRegister }), [user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
