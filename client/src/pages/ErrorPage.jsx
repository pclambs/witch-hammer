import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <div className="container">
        <h1>Ope!</h1>
        <p>An unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
    </div>
  )
}

export default ErrorPage