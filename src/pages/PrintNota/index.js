import React, { Component } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, NotaList, NotaData, NotaServico, Nota } from './styles';

export default class PrintNota extends Component {
    state = {
        notas_selected: [],
        valor_total:0
      }

    componentDidMount () {
        const { notas_selected } = this.props.location.state

        const valor_total = notas_selected.reduce( (valor,nota) => {
            return valor + nota.subtotal
        },0);

        this.setState({
            notas_selected:notas_selected,
            valor_total:valor_total
        })
    }
    render() {
        const {notas_selected, valor_total}  = this.state;
        return (
            <Container>
                Cliente
                <NotaList>
                    { notas_selected.map( (nota,index) => (
                        <Nota key={index}>
                            <NotaData>
                            <h1>Nota: {nota.numero}</h1>
                            <span>{
                            format(
                                parseISO(nota.created_at),
                                "'Nota criada em ' dd 'de' MMMM', às' H:mm'h'",
                                { locale: pt }
                            )
                            }</span>
                            </NotaData>
                            <NotaServico>
                                <ul>
                                    { nota.servico.map( servico => (

                                        <li key={servico.id}>
                                            <strong>{servico.nome}</strong>
                                            <p>{servico.quantidade} chapas {servico.chapa.nome}</p>

                                        </li>

                                    ))}

                                </ul>
                                Valor Total:{ nota.subtotal }
                            </NotaServico>
                        </Nota>
                    )) }
                </NotaList>
                                    <p>Valor total: { valor_total}</p>
            </Container>
        );
    }
}
