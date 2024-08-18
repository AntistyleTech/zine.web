export function useAuth() {

  const { $api } = useNuxtApp()

  const sanctumCookie = () => {
    return $api('/auth/sanctum/csrf-cookie')
  }

  async function updateSanctumCookie() {
    await sanctumCookie()
  }

  async function register(name: string, email: string, password: string) {
    await updateSanctumCookie()
    return $api('/auth/register', {
      method: 'POST',
      body: {name, email, password}
    })
  }

  async function login(login: string, password: string) {
    await updateSanctumCookie()
    return $api('/auth/login', {
      method: 'POST',
      body: {login, password}
    })
  }

  async function logout() {
    await updateSanctumCookie()
    return $api('/auth/logout', {method: 'POST'})
  }

  const me = () => {
    return $api('/auth/me')
  }

  return {sanctumCookie, login, register, logout, me}
}
