import React, { Component } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import ApiService from '../../../services/api';
import sortJsonArray from 'sort-json-array';

import { FaSearch, FaSpinner } from 'react-icons/fa';
import {
    Container,
    Form,
    SubmitButton,
    NotaList,
    NotaData,
    NotaServico,
    Nota,
} from './styles';
import { formatPrice } from '../../../util/format';

class Main extends Component {
    state = {
        cliente_select: 0,
        cliente_atual: '',
        clientes: [],
        loading: 'false',
        notas: [],
        notas_selected: [],
    };

    a = parseInt('');
    b = 4;

    constructor() {
        super();
        this.service = new ApiService();
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        this.service
            .get('/cliente/?tipo_serializer=lista', config)
            .then((response) => {
                const data = {
                    clientes: sortJsonArray(response.data, 'nome'),
                };
                this.setState({ clientes: data.clientes });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleSelectCliente = (e) => {
        this.setState({ cliente_select: e.target.value });
    };

    handleCheckNota = (nota, index) => {
        const { notas, notas_selected } = this.state;

        const notaExist = notas.find((n) => n.id === nota.id);
        if (notaExist.selected === true) {
            const notas = [...this.state.notas];
            const nota = { ...notas[index] };
            nota.selected = false;
            notas[index] = nota;
            this.setState({
                notas: notas,
                notas_selected: this.state.notas_selected.filter(function (
                    nota_selected
                ) {
                    return nota_selected.id !== nota.id;
                }),
            });
        } else {
            const notas = [...this.state.notas];
            const nota = { ...notas[index] };
            nota.selected = true;
            notas[index] = nota;
            this.setState({
                notas: notas,
                notas_selected: [...notas_selected, nota],
            });
        }
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };

        this.setState({ loading: 'true' });

        const { cliente_select } = this.state;

        this.service
            .get(`/cliente/${cliente_select}`, config)
            .then((response) => {
                const new_notas = response.data.nota.map((nota) => ({
                    ...nota,
                    selected: false,
                    subtotalf: nota.servico.reduce((subtotal, servico) => {
                        return (
                            subtotal +
                            servico.chapa['valor'] * servico['quantidade']
                        );
                    }, 0),
                    subtotal: formatPrice(
                        nota.servico.reduce((subtotal, servico) => {
                            return (
                                subtotal +
                                servico.chapa['valor'] * servico['quantidade']
                            );
                        }, 0)
                    ),
                }));
                this.setState({
                    notas: new_notas,
                    loading: 'false',
                    cliente_atual: response.data.nome,
                });
            })
            .catch(() => {
                this.setState({ loading: 'false' });
            });

        // const cliente = await api.get(`/cliente/${cliente_select}`);

        // const new_notas = cliente.data.nota.map((nota) => ({
        //     ...nota,
        //     selected: false,
        //     subtotalf: nota.servico.reduce((subtotal, servico) => {
        //         return (
        //             subtotal +
        //             servico.chapa['valor'] * servico['quantidade']
        //         );
        //     }, 0),
        //     subtotal: formatPrice(
        //         nota.servico.reduce((subtotal, servico) => {
        //             return (
        //                 subtotal +
        //                 servico.chapa['valor'] * servico['quantidade']
        //             );
        //         }, 0)
        //     ),
        // }));
        // this.setState({
        //     notas: new_notas,
        //     loading: 'false',
        //     cliente_atual: cliente.data.nome,
        // });
        // } catch (error) {
        //     this.setState({ loading: 'false' });
        // }
    };

    printNotas = () => {
        this.props.history.push({
            pathname: '/print-nota',
            state: {
                notas_selected: this.state.notas_selected,
                cliente: this.state.cliente_atual,
            },
        });
    };

    render() {
        const { clientes, loading, cliente_select, notas } = this.state;

        return (
            <Container>
                <h1>Listar notas</h1>
                <button onClick={this.printNotas}>
                    Imprimir notas selecinadas
                </button>
                {/* <Link
                    to={{
                        pathname: '#/print-nota',
                        state: {
                            notas_selected: notas_selected,
                            cliente: cliente_atual,
                        },
                    }}
                >
                    Imprimir notas selecinadas
                </Link> */}

                <Form onSubmit={this.handleSubmit}>
                    <select
                        name="select"
                        onChange={this.handleSelectCliente}
                        value={cliente_select}
                    >
                        <option key="todos" value="todos">
                            Todos
                        </option>
                        {clientes.map((cliente) => (
                            <option key={cliente.id} value={cliente.id}>
                                {cliente.nome}
                            </option>
                        ))}
                    </select>

                    <SubmitButton loading={loading}>
                        {loading === 'true' ? (
                            <FaSpinner color="#FFF" size={14} />
                        ) : (
                            <FaSearch color="#fff" size={14} />
                        )}
                    </SubmitButton>
                </Form>

                <NotaList>
                    {notas.map((nota, index) => (
                        <Nota
                            onClick={() => this.handleCheckNota(nota, index)}
                            key={String(nota.id)}
                            status={nota.status}
                            selected={nota.selected}
                        >
                            <NotaData>
                                <h1>Nota: {nota.numero}</h1>
                                <span>
                                    {format(
                                        parseISO(nota.created_at),
                                        "'Emissão em ' dd 'de' MMMM', às' H:mm'h'",
                                        { locale: pt }
                                    )}
                                </span>
                            </NotaData>
                            <NotaServico>
                                <ul>
                                    {nota.servico.map((servico) => (
                                        <li key={servico.id}>
                                            <strong>{servico.nome}</strong>
                                            <p>
                                                {servico.quantidade} chapas{' '}
                                                {servico.chapa.nome}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                                <strong>Valor Total:{nota.subtotal}</strong>
                            </NotaServico>
                        </Nota>
                    ))}
                </NotaList>
            </Container>
        );
    }
}

export default withRouter(Main);

Main.propTypes = {
    history: PropTypes.object,
};
