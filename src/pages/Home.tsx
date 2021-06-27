import { useHistory } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIcon from '../assets/images/google-icon.svg';


import{ Button } from '../components/Button';
import { useAuth } from '../hooks/UseAuth';

import { database } from '../services/firebase';

import '../styles/auth.scss';
import { FormEvent, useState } from 'react';

export function Home() {
    const history = useHistory(); // é um hook e deve ficar sempre dentro do contexto de execução do componente em questão
    const { signInWithGoogle, user } = useAuth();
    const [roomCode, setRoomCode] = useState('');

    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle();
        }
        history.push('/rooms/new');
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();

        if (roomCode.trim() === '') {
            return;
        }
        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if (!roomRef.exists()) {
            alert('Room does not exists.');
            
            return;
        }
        history.push(`/rooms/${roomCode}`);
    }   

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Imagem simbolizando perguntas e respostas" />
                    <strong>Crie salas de Q&amp;A ao-vivo</strong>
                    <p>Tire as dúvidas da galera em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={ logoImg } alt="Imagem simbolizando uma logo da aplicação Letmeask" />
                    <button onClick={handleCreateRoom}
                        className="create-room">
                        <img src={ googleIcon } alt="Logo do google" />
                        Crie sua sala com Google
                    </button>
                    <div className="separator">
                        ou entre em uma sala
                    </div>
                    <form onSubmit={handleJoinRoom}>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
                        />
                        <Button
                            type="submit"
                        >
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}