// CSS
import styles from "./FirstTab.module.css";

const SecondTab = () => {
  return (
    <div className={styles.segurosTexts} data-aos="fade-right" data-aos-once="true">
      <h2 id={styles.lineh1}>O que é o</h2>
      <h2 className={styles.h1gradiente}>Seguro RCF-DC</h2>
      <p>
        É um tipo de Seguro de Carga que protege a mercadoria contra perda total
        ou parcial em situações de: furto, estelionato, extorsão (simples ou
        sequestros) e apropriação indevida. tem o objetivo de proteger a própria
        transportadora para que ela não tenha que arcar financeiramente com
        danos ou perdas de mercadorias de terceiros em uma ocorrência como as
        mencionadas acima.
      </p>
    </div>
  );
};

export default SecondTab;
