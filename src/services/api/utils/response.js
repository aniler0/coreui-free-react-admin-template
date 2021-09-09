//we get a data from axios requests in here.
//everything is the same like a classic axios requests which doesn't have architectural improvements.
export function handleResponse(res) {
  //axios response
  if (res.results) {
    return res.results
  }

  if (res.data) {
    return res.data
  }

  return res
}

export function handleError(err) {
  //axios error
  if (err.data) {
    return err.data
  }
  return err
}
