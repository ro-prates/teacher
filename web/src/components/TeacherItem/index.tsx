import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://diariodopoder.com.br/wp-content/uploads/2019/08/Ford-Mustang_Shelby_GT500-2020-1600-02-1140x570.jpg" alt="Mustang" />
                <div>
                    <h1>Mustang Shelby</h1>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Texto da desrição, coloca qualquer coisa...
                        </p>
            <footer>
                <p>
                    Preço/hora
                                <h1>R$80,00</h1>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                                Entrar em contato
                            </button>
            </footer>
        </article>
    );
}

export default TeacherItem;