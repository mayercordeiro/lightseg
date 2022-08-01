import styles from "./CheckBoxField.module.css";
/*
> LABEL <
htmlFor = idName
Label Content = labelName
> INPUT <
id = idName
name = idName
placeholder = placeHolder
*/

const CheckBoxField = (props) => {
  return (
    <div className={styles.CheckBoxField}>
      <input
        id={props.idName}
        name={props.idName}
        placeholder={props.placeHolder}
        type="checkbox"
      />
      <label htmlFor={props.idName}>{props.labelName}</label>
    </div>
  );
};

export default CheckBoxField;
