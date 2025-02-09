import React from 'react';
import './campoTexto.css';

// Componente funcional CampoTexto que recebe as props cidade e setCidade
function CampoTexto({ cidade, setCidade }) {
    return (
      <input
        type="text" // Define o tipo do input como texto
        placeholder="Digite a cidade" // Define o texto de placeholder do input
        value={cidade} // Define o valor do input com a variável cidade
        onChange={(e) => setCidade(e.target.value)} // Atualiza o estado da cidade quando o usuário digita
        className="form-control" // Aplica a classe CSS para estilização
      />
    );
  }

  
  export default CampoTexto; // Exporta o componente para ser utilizado em outros arquivos