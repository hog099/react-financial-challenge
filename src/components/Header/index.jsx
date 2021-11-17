import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';


export function Header({onOpenNewTransactionModal}) {


  return (
    <Container>
      <Content>       
        <img src={logoImg} alt="alt-title" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}