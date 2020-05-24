import React from 'react';
import ListGroup from '../../../components/list-group';
import ListGroupItem from '../../../components/list-group-item';
import api from '../../../services/api';
import { formatPrice } from '../../../util/format';

export default class SaidasListar extends React.Component {
    state = {
        lista_saidas: [],
    };

    componentDidMount() {
        const token = localStorage.getItem('token');

        api.defaults.headers.Authorization = `Bearer ${token}`;
        api.get('/api/saidas/')
            .then((response) => {
                const new_lista = response.data.map((saida) => ({
                    id: saida.id,
                    descricao: saida.descricao,
                    valor: formatPrice(saida.valor),
                    origem: saida.origem,
                }));
                this.setState({ lista_saidas: new_lista });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { lista_saidas } = this.state;
        return (
            <>
                <h2 className="text-center mt-4 mb-4">
                    Invista - Saidas - Listar
                </h2>

                <div className="d-flex flex-row bd-highlight mb-3">
                    <div className="col-3">
                        <ListGroup title="Entradas">
                            <ListGroupItem
                                href="#/saidas/listar"
                                label="Listar"
                            ></ListGroupItem>
                            <ListGroupItem
                                href="#/saidas/cadastrar"
                                label="Cadastrar"
                            ></ListGroupItem>
                        </ListGroup>
                    </div>
                    <div className="col-9">
                        <ul>
                            {lista_saidas.map((saida) => (
                                <li
                                    key={saida}
                                    value={saida.descricao.toString()}
                                >
                                    {saida.descricao.toString()} |
                                    {saida.valor.toString()} |
                                    {saida.origem === 0
                                        ? 'INVISTA'
                                        : 'THE BRINDES'}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}
