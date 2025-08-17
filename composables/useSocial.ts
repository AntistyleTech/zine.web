export function useSocial() {

  function getAvailable() {
    return useApi('/social/available');
  }

  function getAccounts() {
    return useApi('/social')
  }

  return {getAvailable, getAccounts}
}
