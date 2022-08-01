import styles from "./TextField.module.css";
/*
> LABEL <
htmlFor = idName
Label Content = labelName
> INPUT <
id = idName
name = idName
placeholder = placeHolder
*/

const TextField = (props) => {
  return (
    <div className={styles.textField}>
      <label htmlFor={props.idName}>{props.labelName}</label>
      <input
        id={props.idName}
        name={props.idName}
        placeholder={props.placeHolder}
        type="text"
      />
    </div>
  );
};

export default TextField;
