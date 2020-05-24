import React from 'react';

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = AuthContext.Provider;

class ProvedorAutenticacao extends React.Component {
    state = {
        usuarioAutenticado: null,
        isAutenticado: false,
    };

    iniciarSessao = (token, usuario) => {
        localStorage.setItem('token', token);
        localStorage.setItem('usuario', usuario);
        this.setState({ isAutenticado: true, usuarioAutenticado: usuario });
    };

    encerrarSessao = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        this.setState({ isAutenticado: false, usuarioAutenticado: null });
    };

    render() {
        const contexto = {
            usuarioAutenticado: this.state.usuarioAutenticado,
            isAutenticado: this.state.isAutenticado,
            iniciarSessao: this.iniciarSessao,
            encerrarSessao: this.encerrarSessao,
        };
        return (
            <AuthProvider value={contexto}>{this.props.children}</AuthProvider>
        );
    }
}

export default ProvedorAutenticacao;
