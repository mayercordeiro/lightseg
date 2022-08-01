import styles from "./SelectField.module.css";
/*
> LABEL <
htmlFor = idName
Label Content = labelName
> INPUT <
id = idName
name = idName
placeholder = placeHolder
*/

const SelectField = (props) => {
  return (
    <div className={styles.selectField}>
      <label htmlFor={props.idName}>{props.labelName}</label>
      <select id={props.idName} name={props.idName} placeholder={props.placeHolder}>
        <option value="" selected disabled hidden>Selecione</option>
        {props.itens.map(item => <option key={item + props.idName}>{item}</option>)}
      </select>
    </div>
  );
};

export default SelectField;
