import styles from "./EmailField.module.css";
/*
> LABEL <
htmlFor = idName
Label Content = labelName
> INPUT <
id = idName
name = idName
placeholder = placeHolder
*/

const EmailField = (props) => {
  return (
    <div className={styles.emailField}>
      <label htmlFor={props.idName}>{props.labelName}</label>
      <input
        id={props.idName}
        name={props.idName}
        placeholder={props.placeHolder}
        type="email"
      />
    </div>
  );
};

export default EmailField;
