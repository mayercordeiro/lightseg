// CSS
import styles from "./FormGeral.module.css";
// Components
import CheckBoxField from "../FormElements/CheckBoxField";
import EmailField from "../FormElements/EmailField copy";
import NumberField from "../FormElements/NumberField";
import SelectField from "../FormElements/SelectField";
import TelField from "../FormElements/TelField";
import TextField from "../FormElements/TextField";

const FormGeral = () => {
    const url =
    "https://lightseg.com.br/lsapi/wp-json/contact-form-7/v1/contact-forms/56/feedback/";

  const [yourname, setYourname] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  let formData = new FormData();
  formData.append("yourname", yourname);
  formData.append("surname", surname);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("message", message);

  const config = {
    method: "POST",
    headers: { "content-type": "multipart/form-data" },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(url, formData, config)
      .then((response) => {
        alert("Obrigado, Sua mensagem foi enviada com sucesso!");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    
  )
}

export default FormGeral