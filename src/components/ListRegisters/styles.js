import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;

  h4{
    color: var(--text-title);
  }

  table{
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      font-weight: 400;
      color: var(--text-body);
      border-radius: 0.25rem;
      
      &:first-child{
        color: var(--text-title);
      }
      
      &.deposit {
        /* TO DO - Implementar cor para entrada conforme variaveis de cores do css */
        
      }
      
      &.withdraw {
        /* TO DO - Implementar cor para saida conforme variaveis de cores do css */

      }

    }
  }


`;

export const ContentNoData = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;

  p{
    text-align: center;
    font-size: 18px;
    color: var(--text-body);
  }


`;

