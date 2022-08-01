import styles from "./TransporteForm.module.css";
// Components
import CheckBoxField from "../FormElements/CheckBoxField";
import EmailField from "../FormElements/EmailField copy";
import NumberField from "../FormElements/NumberField";
import SelectField from "../FormElements/SelectField";
import TelField from "../FormElements/TelField";
import TextField from "../FormElements/TextField";

const TransporteForm = () => {
  // Lista de Estados
  const estados = [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins",
  ];

  return (
    <form className={styles.formulario}>
      <h2 className={styles.title}>Cotação - Seguro de Transporte</h2>
      <div className={styles.dataClients}>
        <TextField
          labelName="Nome"
          idName="nome"
          placeHolder="Digite seu nome"
        />
        <EmailField
          labelName="Email"
          idName="email"
          placeHolder="Digite seu email"
        />
        <TelField
          labelName="Telefone"
          idName="tel"
          placeHolder="Digite seu telefone"
        />
        <TextField
          labelName="Nome da Empresa"
          idName="empresa"
          placeHolder="Qual o nome da sua empresa?"
        />
        <TextField
          labelName="Endereço da Empresa"
          idName="enderecoEmpresa"
          placeHolder="Qual o endereço da sua empresa com o número?"
        />
        <TextField
          labelName="Bairro"
          idName="bairro"
          placeHolder="Qual o bairro da empresa?"
        />
        <TextField
          labelName="Cidade"
          idName="cidade"
          placeHolder="Qual a cidade da sua empresa?"
        />
        <SelectField labelName="Estado" idName="estado" itens={estados} />
        <NumberField
          labelName="CEP"
          idName="cep"
          placeHolder="Qual o CEP da sua empresa?"
        />
        <NumberField
          labelName="CNPJ"
          idName="cnpj"
          placeHolder="Qual o CNPJ da sua empresa?"
        />
        <TextField
          labelName="Corretor"
          idName="corretor"
          placeHolder="Qual o nome do corretor?"
        />
        <NumberField
          labelName="Capital Social"
          idName="csocial"
          placeHolder="Qual o Capital Social?"
        />
      </div>
      <h2 className={styles.title}>Seguro Solicitado</h2>
      <CheckBoxField labelName="Transporte Nacional" idName="transnacional" />
      <CheckBoxField
        labelName="Transporte Internacional"
        idName="transinternacional"
      />
      <CheckBoxField
        labelName="RCTR-C - (Exclusivamente para Transportadores em Território Nacional)"
        idName="rctrc"
      />
      <CheckBoxField
        labelName="RCF-DC - (Exclusivamente para Transportadores em Território Nacional)"
        idName="rcfdc"
      />
      <CheckBoxField
        labelName="RCTR-C – VI - (Exclusivamente para Transportadores em Viagens Realizadas No Mercosul)"
        idName="rctrcvi"
      />
      <h2 className={styles.title2}>Informações Adicionais</h2>
      <p className={styles.titleWithDescription}>
        Principais Percursos: (Mencionar o percentual de cada um deles)
      </p>
      <div className={styles.add}>
        <label htmlFor="">Origem</label>
        <label htmlFor="">Destino</label>
        <label htmlFor="">Qtde Média Mensal</label>
        <label htmlFor="">Percentual</label>
        <SelectField idName="origem" itens={estados} />
        <SelectField idName="destino" itens={estados} />
        <NumberField idName="qtdemediamensal" />
        <NumberField idName="percentual" />
      </div>
      <NumberField labelName="Valor Mínimo Embarcado" idName="minembarcado" />
      <NumberField labelName="Valor Médio Embarcado" idName="medioembarcado" />
      <NumberField labelName="Valor Máximo Embarcado" idName="maxembarcado" />
      <NumberField
        labelName="Limite de Responsabilidade por Evento (Veículo/Viagem)"
        idName="limiteresp"
      />
      <NumberField
        labelName="Qtde média de viagens/mês"
        idName="mediaviagensmes"
      />
      <h2 className={styles.title2}>Veículos</h2>
      <div className={styles.veiculos}>
        <h2>Veículos utilizados no transporte</h2>
        <h2>Tipo/Marca/Modelo/Idade</h2>
        <h2>Porcentagem</h2>
        <h2>Próprios</h2>
        <TextField idName="propriostipo" />
        <NumberField idName="propriosporcentagem" />
        <h2>Terceiros</h2>
        <TextField idName="terceirostipo" />
        <NumberField idName="terceirosporcentagem" />
      </div>
      <h2 className={styles.title2}>Mercadorias</h2>
      <div className={styles.veiculos}>
        <h2>Tipos de Mercadorias Transportadas</h2>
        <h2>Percentual</h2>
        <h2>Tipos de Embalagens</h2>
        <TextField idName="propriostipo" />
        <NumberField idName="propriosporcentagem" />
        <TextField idName="terceirostipo" />
      </div>
      <h2 className={styles.title2}>Quanto ao Gerenciamento de Riscos</h2>
      <p className={styles.titleWithDescription}>
        O Segurado utiliza algum tipo de gerenciamento de risco, conforme abaixo
        citados:
      </p>
      <div className={styles.riscos}>
        <h2>Tipo</h2>
        <h2>Empresa prestadora do serviço</h2>
          <CheckBoxField
            labelName="Consulta ao Cadastro de Motoristas ou Autônomos"
            idName="cadastromotoristas"
          />
            <TextField idName="cadastromotoristastext" />
          <CheckBoxField
            labelName="Rastreamento por satélite"
            idName="satelite"
          />
          <TextField idName="satelitetext" />
          <CheckBoxField labelName="Escolta armada" idName="armada" />
          <TextField idName="armadatext" />
          <CheckBoxField labelName="Outros tipos" idName="outrostipos" />
          <TextField idName="outrostipostext" />
      </div>
    </form>
  );
};

export default TransporteForm;
