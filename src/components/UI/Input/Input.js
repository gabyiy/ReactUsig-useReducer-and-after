import React from "react";
import classes from "./Input.module.css";
import { useRef, useImperativeHandle } from "react";
//cu imperative handler puterm  sa folosim functia activate

//cu ajutorul la forword ref sp unem ca acest component poati avea un baound de un ref
const Input = React.forwardRef((props, ref) => {
  //asa cu ajutoru la ref introdus in use estate  cand dam clic pe butonu de login ne duce automat la introducerea emailului sau pass
  const inputRef = useRef();

  //acum din login putem accesa focus
  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.lablel}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});
export default Input;
