export function useAuth() {

  const sanctumCookie = () => {
    return useApi('/auth/sanctum/csrf-cookie')
  }

  async function updateSanctumCookie() {
    await sanctumCookie()
  }

  async function register(name: string, email: string, password: string) {
    await updateSanctumCookie()
    return useApi('/auth/register', {
      method: 'POST',
      body: {name, email, password}
    })
  }

  async function login(login: string, password: string) {
    await updateSanctumCookie()
    return useApi('/auth/login', {
      method: 'POST',
      body: {login, password}
    })
  }

  const logout = () => {
    return useApi('/auth/logout', {method: 'POST'})
  }

  const me = () => {
    return useApi('/auth/me')
  }

  return {sanctumCookie, login, register, logout, me}
}
