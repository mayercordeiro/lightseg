// CSS
import "./TextSegurosStyles.css";

const Vida = () => {
  return (
    <section className="text_seguros">
      <h2 className="central">Seguro Ambiental</h2>
      <p>
        O Seguro Ambiental oferece proteção a incidentes com{" "}
        <span className="negrito">meio ambiente e a terceiros</span>,
        decorrentes das atividades de transporte, prestação de serviço,
        operações comerciais e operações industriais.
      </p>
      <p>
        Este produto abrange basicamente, desde os custos com a limpeza, até
        investigações e monitoramento do local afetado.
      </p>
      <p className="negrito">Confira algumas coberturas:</p>
      <ul>
        <li>Cobertura ambiental para transporte;</li>
        <li>Custos e despesas com limpeza;</li>
        <li>Poluição durante prestação de serviço;</li>
        <li>Reclamação de terceiros (materiais / corporais);</li>
        <li>Danos a recursos naturais;</li>
        <li>Custo de defesa.</li>
      </ul>
    </section>
  );
};

export default Vida;
