import React, { Component } from 'react';
import { FaSearch, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import { Container, Form, SubmitButton, NotaList } from './styles';

export default class Main extends Component {
    state={
        cliente_atual: 0,
        clientes: [],
        loading: false,
        notas: []
    };

    componentDidMount(){
        this.handleGetClientes();

        const clientes = localStorage.getItem('clientes');

        if (clientes){
            this.setState({ clientes: JSON.parse(clientes) });
        }
    }

    componentDidUpdate(_, prevState){
        const {clientes} = this.state;

        if (prevState.clientes !== clientes){
            localStorage.setItem('clientes', JSON.stringify(clientes));
        }
    }

    handleGetClientes =  async e =>{
        const response = await api.get(`/cliente`);

        const data = {
            clientes: response.data
        };

        this.setState({
            clientes: [...data.clientes]
        })
    }

    handleSelectCliente = e => {

        this.setState({ cliente_atual: e.target.value });

    }


    handleSubmit = async e =>{
        e.preventDefault();

        this.setState({ loading: true });

        const { cliente_atual } = this.state;

        const [cliente, notas] = await Promise.all([
            api.get(`/cliente/${cliente_atual}`),
            api.get(`/nota`)
        ])

        this.setState({ notas: [...notas] })

        this.setState({ loading: false });

        console.log(cliente);
        console.log(notas);
    }

    render() {

        const { clientes, loading, cliente_atual, notas } = this.state;

        return (
            <Container>
                <h1>Listar notas</h1>

                <Form onSubmit={this.handleSubmit}>
                    <select name="select" onChange={this.handleSelectCliente} value={cliente_atual}>
                        { clientes.map( cliente => (
                            <option key={cliente.id} value={cliente.id}>{cliente.nome}</option>
                        ) ) }

                    </select>

                    <SubmitButton loading={loading}>
                        { loading ? ( <FaSpinner color='#FFF' size={14} /> )
                        :
                        ( <FaSearch color="#fff" size={14} /> ) }

                    </SubmitButton>
                </Form>

                <NotaList>
                            { notas.map( nota => (
                                <li key={String(nota.id)}>
                                    nota.numero
                                </li>
                            )) }
                </NotaList>
            </Container>
        );
    }
}
