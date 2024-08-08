/* import { useRouteError } from "react-router-dom";
 */
/**
 * Retorna la vista de error
 */
export function ErrorPage() {
  /* const error: Error | unknown = useRouteError();
  console.error(error); */

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{/* {error?.statusText || error?.message} */} ERROR!</i>
      </p>
    </div>
  );
}
