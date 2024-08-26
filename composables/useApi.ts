export function useApi(
  path: string,
  options: object = {}
) {
  // TODO: provide baseURL by .env
  const apiBaseUrl = process.client
    ? 'http://localhost/api'
    : 'http://host.docker.internal/api';

  let defaultOptions: any = {
    baseURL: apiBaseUrl,
    credentials: "include",
    watch: false,
    headers: {
      Accept: 'application/json'
    }
  }

  const token = useCookie('XSRF-TOKEN')
  if (token.value) {
    defaultOptions.headers['X-XSRF-TOKEN'] = token.value as string
  }

  console.log({url: apiBaseUrl, path: path})
  return $fetch(path, {
    ...defaultOptions,
    ...options
  })
}
