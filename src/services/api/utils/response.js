export function handleResponse(res) {
  if (res.results) {
    return res.results
  }

  if (res.data) {
    return res.data
  }

  return res
}

export function handleError(err) {
  if (err.data) {
    return err.data
  }
  return err
}
