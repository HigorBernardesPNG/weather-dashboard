import React from 'react'; // Importa a biblioteca React
import { ceuLimpo, nublado, chuva, Chuvisco, Tempestade, Neve, Nevoa, Neblina, Nevoeiro, Fumaca, Poeira, Areia, Cinzas, RajadasDeVento, Tornado } from '../svgClimas/index';
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

        {dadosClima.weather[0].main === "Clear" && ceuLimpo()}

        {dadosClima.weather[0].main === "Clouds" && nublado()}
    
        {dadosClima.weather[0].main === "Rain" && chuva()}

        {dadosClima.weather[0].main === "Drizzle " && Chuvisco()}

        {dadosClima.weather[0].main === "Thunderstorm" && Tempestade()}

        {dadosClima.weather[0].main === "Snow" && Neve()}

        {dadosClima.weather[0].main === "Mist" && Nevoa()}

        {dadosClima.weather[0].main === "Haze" && Neblina()}

        {dadosClima.weather[0].main === "Fog" && Nevoeiro()}

        {dadosClima.weather[0].main === "Smoke" && Fumaca()}

        {dadosClima.weather[0].main === "Dust" && Poeira()}

        {dadosClima.weather[0].main === "Sand" && Areia()}

        {dadosClima.weather[0].main === "Ash" && Cinzas()}

        {dadosClima.weather[0].main === "Squall" && RajadasDeVento()}

        {dadosClima.weather[0].main === "Tornado" && Tornado()}

      </div>
    </div>
  );
  
}

export default DetalhesClima; // Exporta o componente para ser usado em outros arquivos