import { Link  } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
// import googleIcon from '../assets/images/google-icon.svg';
// import { useContext } from 'react';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/UseAuth';

import '../styles/auth.scss';

export function NewRoom() {
    const { user } = useAuth();
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Imagem simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da galera em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Imagem simbolizando uma logo da aplicação Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                        />
                        <Button
                            type="submit"
                        >
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Deseja entrar em uma sala existente?<br/>
                        <Link to="/">click aqui</Link> 
                    </p>
                </div>
            </main>
        </div>
    )
}