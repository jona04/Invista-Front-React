import React, { Component } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, NotaList, NotaData, NotaServico, Nota } from './styles';

import {formatPrice} from '../../util/format';

export default class PrintNota extends Component {
    state = {
        notas_selected: [],
        valor_total:0
      }

    componentDidMount () {
        const { notas_selected, cliente } = this.props.location.state

        const valor_total = notas_selected.reduce( (valor,nota) => {
            return valor + nota.subtotalf
        },0);

        this.setState({
            notas_selected:notas_selected,
            valor_total:formatPrice(valor_total),
            cliente:cliente
        })
    }
    render() {
        const {notas_selected, valor_total,cliente }  = this.state;
        return (
            <Container>
                <h1>{cliente}</h1>
                <NotaList>
                    { notas_selected.map( (nota,index) => (
                        <Nota key={index}>
                            <NotaData>
                            <h1>Nota: {nota.numero}</h1>
                            <span>{
                            format(
                                parseISO(nota.created_at),
                                "'Emissão em ' dd 'de' MMMM', às' H:mm'h'",
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
                                <strong>Valor Total:{ nota.subtotal }</strong>
                            </NotaServico>
                        </Nota>
                    )) }
                </NotaList>
                <h1>Valor total: { valor_total}</h1>
            </Container>
        );
    }
}
