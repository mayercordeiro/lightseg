import styles from "./NumberField.module.css";
/*
> LABEL <
htmlFor = idName
Label Content = labelName
> INPUT <
id = idName
name = idName
placeholder = placeHolder
*/

const NumberField = (props) => {
  return (
    <div className={styles.numberField}>
      <label htmlFor={props.idName}>{props.labelName}</label>
      <input
        id={props.idName}
        name={props.idName}
        placeholder={props.placeHolder}
        type="number"
      />
    </div>
  );
};

export default NumberField;
