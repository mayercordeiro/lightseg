import React, { useState } from "react";
// CSS
import "./TextSegurosStyles.css";

const TransporteDeCargas = () => {
  const [activeTab, setActiveTab] = useState("item1");
  const handleItem1 = () => {
    setActiveTab("item1");
  };
  const handleItem2 = () => {
    setActiveTab("item2");
  };
  const handleItem3 = () => {
    setActiveTab("item3");
  };
  const handleItem4 = () => {
    setActiveTab("item4");
  };

  return (
    <section className="text_seguros">
      <h2 className="central">Seguro Transporte de Cargas</h2>
      <ol className="indice">
        <li
          className={activeTab === "item1" ? "active-text" : ""}
          onClick={handleItem1}
        >
          RCTRC
        </li>
        <li
          className={activeTab === "item2" ? "active-text" : ""}
          onClick={handleItem2}
        >
          RCF-DC
        </li>
        <li
          className={activeTab === "item3" ? "active-text" : ""}
          onClick={handleItem3}
        >
          RCTRC–VI
        </li>
        <li
          className={activeTab === "item4" ? "active-text" : ""}
          onClick={handleItem4}
        >
          EMBARCADORES
        </li>
      </ol>

      <div className="content_seguros_texts">
        {activeTab === "item1" && (
          <div className="content">
            <h3>O que é o seguro RCTRC?</h3>
            <h4>
              Responsabilidade Civil do Transportador Rodoviário de Carga.
            </h4>
            <p>
              Conhecido como a coberturas básicas, oferece as mercadorias
              transportadas, cobertura em caso de capotamento, abalroamento,
              tombamento, colisão, explosão e incêndio do veículo transportador.
            </p>
            <p>
              Esse seguro é voltado a todas as transportadoras rodoviárias de
              carga. Cobre basicamente as mercadorias transportadas em caso de
              acidentes de trânsito que envolva o veículo. Também podendo ser
              contratado, coberturas adicionais que minimizam possíveis gastos
              com a solução do acidente. Exemplos: Danos a container, limpeza de
              pistas, gasto com contenção de produtos poluentes, impostos e
              outros.
            </p>

            <h3>
              <span className="red">Cuidado!</span> Transportadora sem seguro
              RCTR-C:
            </h3>
            <p>
              A{" "}
              <a
                href="https://www.legisweb.com.br/legislacao/?id=287658"
                target="_blank"
              >
                Resolução ANTT n. 4.799, de 27/07 de 2015
              </a>
              , define as penalidades para transportadoras que não apresentarem
              o RCTR-C.
            </p>
            <p>
              Multa no valor de R$500,00 caso não seja apresentado o número da
              apólice de seguro, além da transportadora ser obrigada a apontar o
              nome da seguradora;
            </p>
            <p>
              Multa de R$1.500,00 em caso de não contratação do seguro ou por
              trafegar com ele em situação irregular.
            </p>
            <p>
              Não contratar o seguro, além da multa, toda a operação da
              transportadora ficara comprometida, tanto no cumprimento da
              responsabilidade do serviço prestado, como até mesmo, em perda na
              prospecção de novos clientes.
            </p>
          </div>
        )}

        {activeTab === "item2" && (
          <div className="content">
            <h3>O que é o seguro RCF-DC?</h3>
            <h4>
              Responsabilidade Civil do Transportador Rodoviário por
              Desaparecimento de Carga
            </h4>
            <p>
              Estão cobertos as perdas e/ou os danos materiais sofridos pelos
              bens ou mercadorias pertencentes a terceiros, causados
              exclusivamente por:
            </p>
            <p>
              Desaparecimento total da carga, concomitantemente com o do
              veículo, durante o transporte, em decorrência de: Apropriação
              indébita e/ou estelionato; Furto simples ou qualificado; Extorsão
              simples ou mediante sequestro;
            </p>
            <p>
              Roubo durante o trânsito, entendendo-se como tal, para a
              caracterização da cobertura, o desaparecimento total ou parcial da
              carga, desde que o autor do delito tenha assumido o controle do
              veículo transportador, mediante grave ameaça ou emprego de
              violência contra o motorista.
            </p>
            <p>
              Roubo de bens ou mercadorias carregados nos veículos
              transportadores, enquanto estacionados no interior de depósitos ou
              da área do terreno onde estiverem localizados os depósitos do
              Segurado, ou sob seu controle e/ou administração, desde que tais
              depósitos tenham sido, previamente, relacionados na apólice e que
              sejam observadas, cumulativamente, as seguintes condições: Os bens
              ou mercadorias carregados estejam acompanhados do respectivo
              conhecimento de transporte rodoviário de carga e/ou de outro
              documento hábil; Os referidos bens ou mercadorias não tenham
              permanecido, no depósito, por mais de 15 (quinze) dias corridos.
            </p>
            <p>
              Roubo praticado durante viagem fluvial complementar à viagem
              rodoviária, exclusivamente na Região Amazônica, desde que haja
              abertura de inquérito policial, e que ocorra o desaparecimento
              total ou parcial da carga, concomitantemente ou não com o do
              veículo embarcado.
            </p>
          </div>
        )}
        {activeTab === "item3" && (
          <div className="content">
            <h3>O que é o seguro RCTRC-VI?</h3>
            <h4>
              Responsabilidade Civil do Transportador em Viagem Internacional.
            </h4>
            <p>
              O presente contrato de seguro tem por objeto, nos termos das
              presentes condições e do convênio sobre Transporte Internacional
              Terrestre, reembolsar ao Segurado (até o limite do valor segurado)
              as quantias pelas quais, por disposição das Leis comerciais e
              civis, for ele responsável, em virtude das perdas ou danos
              sofridos pelos bens ou mercadorias pertencentes a terceiros e que
              lhe tenham sido entregues para transporte, por rodovia para viagem
              internacional, contra conhecimento de transporte rodoviário de
              carga, ou ainda, outro documento hábil, desde que aquelas perdas
              ou danos ocorram durante o transporte e sejam causados diretamente
              por:
            </p>
            <ol>
              <li>
                Colisão e/ou capotagem e/ou abalroamento e/ou tombamento do
                veículo transportador, compreendido na cobertura, conforme
                indicado em condição particular.
              </li>
              <li>
                Incêndio ou explosão no veículo transportador, compreendido na
                cobertura, conforme indicado em condição particular.
              </li>
              <li>
                Observado o critério de aferição da responsabilidade
                estabelecida nesta Cláusula, acha-se, ainda, coberta a
                responsabilidade do Segurado pelas perdas ou danos sofridos
                pelos bens ou mercadorias, consequentes dos riscos de incêndio
                ou explosão nos depósitos, armazéns ou pátios usados pelo
                Segurado, em localidades fora do território do País que emitiu a
                apólice, ainda que os ditos bens ou mercadorias se encontrem
                fora dos veículos transportadores. para os efeitos da presente
                cobertura, os depósitos, armazéns ou pátios usados pelo Segurado
                deverão ser cobertos e fechados. Na falta de lugares cobertos e
                fechados, será requisito para a manutenção da cobertura que as
                mercadorias ou bens se encontrem em lugares adequados e sob
                vigilância permanente.
              </li>
            </ol>
            <p>
              As disposições deste contrato de seguro aplicam-se{" "}
              <span className="negrito">
                exclusivamente as ocorrências fora do território do País em que
                tenha sido emitida a apólice
              </span>
              , podendo ser adotadas internamente, a critério de cada signatário
              do Convênio e por disposição especial e expressa em cláusula
              particular.
            </p>
          </div>
        )}
        {activeTab === "item4" && (
          <div className="content">
            <h3>Seguro de Transporte para Embarcadores</h3>
            <h4>* Transporte da própria mercadoria</h4>
            <p>
              Este seguro é contratado pelo dono da mercadoria, se destina a
              cobrir danos a ela, quando estiver sendo transportada. O seguro
              para embarcadores está dividido em duas modalidades de seguro. O
              seguro Nacional e o Internacional.
            </p>
            <h3 className="negrito">Transporte Nacional</h3>
            <p>
              Oferece cobertura a carga, quando em transporte, em operações
              exclusivamente dentro do país.
            </p>
            <p className="negrito">Principais coberturas:</p>
            <ul>
              <li>
                <span className="negrito">Cobertura ampla:</span> Basicamente
                cobre todos os riscos a mercadoria por causas externas, roubo e
                avarias.
              </li>
              <li>
                <span className="negrito">Cobertura restrita C:</span> Cobre os
                riscos em decorrência de acidente com o veículo transportador.
              </li>
            </ul>
            <h3 className="negrito">Transporte Internacional</h3>
            <p>
              O seguro de transporte internacional se destina a todas as
              empresas que exportam e ou importam mercadorias para outros
              países. Essas empresas por sua vez, devem ter uma atenção especial
              com esse seguro, pois, a responsabilidade e o risco, variam
              conforme a incoterm utilizada na negociação e que devem ser
              seguidas conforme o tratado em vigor.
            </p>
            <p className="negrito">Algumas coberturas:</p>
            <ul>
              <li>
                <span className="negrito">Cobertura Ampla:</span> Danos a
                mercadoria decorrente a causas externas, avarias, avaria grossa,
                roubo e furto.
              </li>
              <li>
                <span className="negrito">Cobertura restrita B:</span> Garantia
                decorrente ao acidente com o veículo transportador, podendo ser
                incluída a cobertura adicional de roubo.
              </li>
              <li>
                <span className="negrito">Cobertura restrita C:</span> Danos
                decorrentes apenas por acidente do veículo transportador.
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default TransporteDeCargas;
