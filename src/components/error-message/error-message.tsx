import {useAppSelector} from '../../hooks';
import './error-message.style.scss';

function ErrorMessage(){
  const error = useAppSelector((state) => state.authorization.error);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;
}

export default ErrorMessage;
