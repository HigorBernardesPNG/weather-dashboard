import React from 'react'; // Importa a biblioteca React
import './detalhesClima.css'; // Importa o arquivo de estilo

// Componente funcional DetalhesClima que recebe os dados climáticos como prop
function DetalhesClima({ dadosClima }) {
  if (!dadosClima) return <div className="detalhes-clima"><h2 className='detalhes-clima_Cidade'>Cidade</h2> <p>🌡 Temperatura: °C</p> <p>☁️ Clima: </p> <p>💨 Vento:  m/s</p> <p>💧 Umidade: %</p> </div>; // Se não houver dados, não exibe nada

  return (
    <div className="detalhes-clima"> {/* Container dos detalhes do clima */}
      <h2 className='detalhes-clima_Cidade'>{dadosClima.name}, {dadosClima.sys.country}</h2> {/* Exibe o nome da cidade e país */}
      <p className='detalhes-clima_Temperatura'>🌡 Temperatura: {dadosClima.main.temp}°C</p> {/* Exibe a temperatura */}
      <p className='detalhes-clima_Clima'>☁️ Clima: {dadosClima.weather[0].description}</p> {/* Exibe a descrição do clima */}
      <p className='detalhes-clima_Vento'>💨 Vento: {dadosClima.wind.speed} m/s</p> {/* Exibe a velocidade do vento */}
      <p className='detalhes-clima_Umidade'>💧 Umidade: {dadosClima.main.humidity}%</p> {/* Exibe a umidade */}
  
      <div className='container__iconNuvem'>
        {dadosClima.weather[0].main === "Rain" && (
          <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" fill="currentColor" className="bi bi-cloud-rain-fill" viewBox="0 0 16 16">
            <path d="M4.5 14a.5.5 0 0 1-.374-.832l1.5-1.5a.5.5 0 1 1 .748.664L5 13h1.5a.5.5 0 0 1 0 1h-2zm4 0a.5.5 0 0 1-.374-.832l1.5-1.5a.5.5 0 1 1 .748.664L9 13h1.5a.5.5 0 0 1 0 1h-2zm4 0a.5.5 0 0 1-.374-.832l1.5-1.5a.5.5 0 1 1 .748.664L13 13h1.5a.5.5 0 0 1 0 1h-2z"/>
            <path d="M11.473 9a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-.027-5"/>
          </svg>
        )}
  
        {dadosClima.weather[0].main === "Clouds" && (
          <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" fill="currentColor" className="bi bi-clouds-fill" viewBox="0 0 16 16">
            <path d="M11.473 9a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-.027-5"/>
            <path d="M14.544 9.772a3.5 3.5 0 0 0-2.225-1.676 5.5 5.5 0 0 0-6.337-4.002 4.002 4.002 0 0 1 7.392.91 2.5 2.5 0 0 1 1.17 4.769z"/>
          </svg>
        )}
  
        {dadosClima.weather[0].main === "Clear" && (
          <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" fill="currentColor" className="bi bi-brightness-high-fill" viewBox="0 0 16 16">
            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
            <path d="M8.5 0h-1v3h1V0zM8.5 13h-1v3h1v-3zM3.636 3.636l-.707.707 2.121 2.122.707-.707-2.121-2.122zm9.192 9.192l-.707.707-2.122-2.121.707-.707 2.122 2.121zM0 8.5v-1h3v1H0zm13 0v-1h3v1h-3zM3.636 12.364l.707.707 2.121-2.121-.707-.707-2.121 2.121zm9.192-9.192l.707-.707-2.121-2.122-.707.707 2.121 2.122z"/>
          </svg>
        )}
      </div>
    </div>
  );
  
}

export default DetalhesClima; // Exporta o componente para ser usado em outros arquivos