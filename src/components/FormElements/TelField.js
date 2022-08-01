import styles from "./TelField.module.css";
/*
> LABEL <
htmlFor = idName
Label Content = labelName
> INPUT <
id = idName
name = idName
placeholder = placeHolder
*/

const TelField = (props) => {
  return (
    <div className={styles.telField}>
      <label htmlFor={props.idName}>{props.labelName}</label>
      <input
        id={props.idName}
        name={props.idName}
        placeholder={props.placeHolder}
        type="tel"
      />
    </div>
  );
};

export default TelField;
