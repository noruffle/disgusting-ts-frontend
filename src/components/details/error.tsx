import { ErrorMessageProps } from "../../interfaces/props/errorMessage.props";

export function ErrorMessage({error}: ErrorMessageProps) {
  return (
    <p className='text-center text-red-600'>{ error }</p>
  )
}