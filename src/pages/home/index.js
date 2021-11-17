import React from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../../components/Header';
import { ListRegisters } from '../../components/ListRegisters';
// import { Container } from './styles';

import { NewTransactionModal } from "../../components/NewTransactionModal/index";

function Home() {
    const history = useHistory();

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = React.useState(false);

    function handleOpenNewTransactionmodal() {
        // TO DO - Implementar a alteracao do state para mostrar modal
    }
    
    function handleCloseNewTransactionmodal() {
        // TO DO - Implementar a alteracao do state para ocultar modal
    }


    return (
        <>
            <Header onOpenNewTransactionModal={handleOpenNewTransactionmodal} />

            <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionmodal} />

            <ListRegisters />
        </>
    );
}

export default Home;