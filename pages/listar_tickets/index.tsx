import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import styles from "./styles.module.scss";

const ListarTickets = () => {
  return (
    <Container className={styles.container}>
      <h1>Todos os tickets</h1>
      <section>
        Filtrando por:
        <div></div>
        Filtrar:
        <div>
          <Button className={styles.statusButton} variant="light" size="sm">
            <span
              style={{ backgroundColor: "#f20505" }}
              className={styles.circle}
            ></span>{" "}
            Urgente
          </Button>
          <Button className={styles.statusButton} variant="light" size="sm">
            <span
              style={{ backgroundColor: "#618fb0" }}
              className={styles.circle}
            ></span>{" "}
            Aberto
          </Button>
        </div>
      </section>
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
          {Array.from({ length: 12 }).map((_, i) => (
            <tr key={i + 1}>
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
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListarTickets;
