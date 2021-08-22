import React from "react";
import { Container, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import styles from "./styles.module.scss";

const ListarTickets = () => {
  return (
    <Container className={styles.container}>
      <h1>Todos os tickets</h1>
      <div>
        Status:
        <div>
          <Form.Check
            inline
            label="Urgente"
            name="urgente"
            type="checkbox"
            id="urgente"
          />
          <Form.Check
            inline
            label="Aberto"
            name="urgente"
            type="checkbox"
            id="urgente"
          />
        </div>
      </div>
      <Table variant="dark" className={styles.table}>
        <thead>
          <tr>
            <td>ID</td>
            <td>Status</td>
            <td>Ticket</td>
            <td>Solicitante</td>
            <td>Atendente</td>
            <td>transferido</td>
            <td>Abertura</td>
            <td>Anexo</td>
            <td>Lido</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1234</td>
            <td>Em testes</td>
            <td>CADASTRO CLIENTE - PUXANDO DADOS DE UM CAMPO PARA O OUTRO</td>
            <td>SONHO LEVE</td>
            <td>At6</td>
            <td>Não</td>
            <td>28/08/2021 ás 14:53</td>
            <td>📎</td>
            <td>👀</td>
            <td>
              <button>➡</button>
            </td>
          </tr>
          <tr>
            <td>1234</td>
            <td>Em testes</td>
            <td>CADASTRO CLIENTE - PUXANDO DADOS DE UM CAMPO PARA O OUTRO</td>
            <td>SONHO LEVE</td>
            <td>At6</td>
            <td>Não</td>
            <td>28/08/2021 ás 14:53</td>
            <td>📎</td>
            <td>👀</td>
            <td>
              <button>➡</button>
            </td>
          </tr>
          <tr>
            <td>1234</td>
            <td>Em testes</td>
            <td>CADASTRO CLIENTE - PUXANDO DADOS DE UM CAMPO PARA O OUTRO</td>
            <td>SONHO LEVE</td>
            <td>At6</td>
            <td>Não</td>
            <td>28/08/2021 ás 14:53</td>
            <td>📎</td>
            <td>👀</td>
            <td>
              <button>➡</button>
            </td>
          </tr>
          <tr>
            <td>1234</td>
            <td>Em testes</td>
            <td>CADASTRO CLIENTE - PUXANDO DADOS DE UM CAMPO PARA O OUTRO</td>
            <td>SONHO LEVE</td>
            <td>At6</td>
            <td>Não</td>
            <td>28/08/2021 ás 14:53</td>
            <td>📎</td>
            <td>👀</td>
            <td>
              <button>➡</button>
            </td>
          </tr>
          <tr>
            <td>1234</td>
            <td>Em testes</td>
            <td>CADASTRO CLIENTE - PUXANDO DADOS DE UM CAMPO PARA O OUTRO</td>
            <td>SONHO LEVE</td>
            <td>At6</td>
            <td>Não</td>
            <td>28/08/2021 ás 14:53</td>
            <td>📎</td>
            <td>👀</td>
            <td>
              <button>➡</button>
            </td>
          </tr>
          <tr>
            <td>1234</td>
            <td>Em testes</td>
            <td>CADASTRO CLIENTE - PUXANDO DADOS DE UM CAMPO PARA O OUTRO</td>
            <td>SONHO LEVE</td>
            <td>At6</td>
            <td>Não</td>
            <td>28/08/2021 ás 14:53</td>
            <td>📎</td>
            <td>👀</td>
            <td>
              <button>➡</button>
            </td>
          </tr>
          <tr>
            <td>1234</td>
            <td>Em testes</td>
            <td>CADASTRO CLIENTE - PUXANDO DADOS DE UM CAMPO PARA O OUTRO</td>
            <td>SONHO LEVE</td>
            <td>At6</td>
            <td>Não</td>
            <td>28/08/2021 ás 14:53</td>
            <td>📎</td>
            <td>👀</td>
            <td>
              <button>➡</button>
            </td>
          </tr>
          <tr>
            <td>1234</td>
            <td>Em testes</td>
            <td>CADASTRO CLIENTE - PUXANDO DADOS DE UM CAMPO PARA O OUTRO</td>
            <td>SONHO LEVE</td>
            <td>At6</td>
            <td>Não</td>
            <td>28/08/2021 ás 14:53</td>
            <td>📎</td>
            <td>👀</td>
            <td>
              <button>➡</button>
            </td>
          </tr>
          <tr>
            <td>1234</td>
            <td>Em testes</td>
            <td>CADASTRO CLIENTE - PUXANDO DADOS DE UM CAMPO PARA O OUTRO</td>
            <td>SONHO LEVE</td>
            <td>At6</td>
            <td>Não</td>
            <td>28/08/2021 ás 14:53</td>
            <td>📎</td>
            <td>👀</td>
            <td>
              <button>➡</button>
            </td>
          </tr>
          <tr>
            <td>1234</td>
            <td>Em testes</td>
            <td>CADASTRO CLIENTE - PUXANDO DADOS DE UM CAMPO PARA O OUTRO</td>
            <td>SONHO LEVE</td>
            <td>At6</td>
            <td>Não</td>
            <td>28/08/2021 ás 14:53</td>
            <td>📎</td>
            <td>👀</td>
            <td>
              <button>➡</button>
            </td>
          </tr>
          <tr>
            <td>1234</td>
            <td>Em testes</td>
            <td>CADASTRO CLIENTE - PUXANDO DADOS DE UM CAMPO PARA O OUTRO</td>
            <td>SONHO LEVE</td>
            <td>At6</td>
            <td>Não</td>
            <td>28/08/2021 ás 14:53</td>
            <td>📎</td>
            <td>👀</td>
            <td>
              <button>➡</button>
            </td>
          </tr>
          <tr>
            <td>1234</td>
            <td>Em testes</td>
            <td>CADASTRO CLIENTE - PUXANDO DADOS DE UM CAMPO PARA O OUTRO</td>
            <td>SONHO LEVE</td>
            <td>At6</td>
            <td>Não</td>
            <td>28/08/2021 ás 14:53</td>
            <td>📎</td>
            <td>👀</td>
            <td>
              <button>➡</button>
            </td>
          </tr>
          <tr>
            <td>1234</td>
            <td>Em testes</td>
            <td>CADASTRO CLIENTE - PUXANDO DADOS DE UM CAMPO PARA O OUTRO</td>
            <td>SONHO LEVE</td>
            <td>At6</td>
            <td>Não</td>
            <td>28/08/2021 ás 14:53</td>
            <td>📎</td>
            <td>👀</td>
            <td>
              <button>➡</button>
            </td>
          </tr>
          <tr>
            <td>1234</td>
            <td>Em testes</td>
            <td>CADASTRO CLIENTE - PUXANDO DADOS DE UM CAMPO PARA O OUTRO</td>
            <td>SONHO LEVE</td>
            <td>At6</td>
            <td>Não</td>
            <td>28/08/2021 ás 14:53</td>
            <td>📎</td>
            <td>👀</td>
            <td>
              <button>➡</button>
            </td>
          </tr>
          <tr>
            <td>1234</td>
            <td>Em testes</td>
            <td>CADASTRO CLIENTE - PUXANDO DADOS DE UM CAMPO PARA O OUTRO</td>
            <td>SONHO LEVE</td>
            <td>At6</td>
            <td>Não</td>
            <td>28/08/2021 ás 14:53</td>
            <td>📎</td>
            <td>👀</td>
            <td>
              <button>➡</button>
            </td>
          </tr>
          <tr>
            <td>1234</td>
            <td>Em testes</td>
            <td>CADASTRO CLIENTE - PUXANDO DADOS DE UM CAMPO PARA O OUTRO</td>
            <td>SONHO LEVE</td>
            <td>At6</td>
            <td>Não</td>
            <td>28/08/2021 ás 14:53</td>
            <td>📎</td>
            <td>👀</td>
            <td>
              <button>➡</button>
            </td>
          </tr>
          <tr>
            <td>1234</td>
            <td>Em testes</td>
            <td>CADASTRO CLIENTE - PUXANDO DADOS DE UM CAMPO PARA O OUTRO</td>
            <td>SONHO LEVE</td>
            <td>At6</td>
            <td>Não</td>
            <td>28/08/2021 ás 14:53</td>
            <td>📎</td>
            <td>👀</td>
            <td>
              <button>➡</button>
            </td>
          </tr>
          <tr>
            <td>1234</td>
            <td>Em testes</td>
            <td>CADASTRO CLIENTE - PUXANDO DADOS DE UM CAMPO PARA O OUTRO</td>
            <td>SONHO LEVE</td>
            <td>At6</td>
            <td>Não</td>
            <td>28/08/2021 ás 14:53</td>
            <td>📎</td>
            <td>👀</td>
            <td>
              <button>➡</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default ListarTickets;
