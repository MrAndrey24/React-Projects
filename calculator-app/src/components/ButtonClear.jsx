import '../styles/ButtonClear.css'

const ButtonClear = (props) => (
    <div className='boton-clear' onClick={props.handlerClear}>
      {props.children}
    </div>
  );

export default ButtonClear