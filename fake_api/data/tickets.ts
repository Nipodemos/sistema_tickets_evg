interface Ticket {
  registro: number;
  id: number;
  titulo: string;
  description: string;
  status: string;
}

const listaDeTickets: Ticket[] = [];

export default listaDeTickets;
