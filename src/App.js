import React, { useState, useEffect } from 'react';
import CampoTexto from './components/CampoTexto';
import DetalhesClima from './components/detalhesClima';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "@fontsource/quicksand";
import '@fontsource/montserrat';

function App() {
  const [cidade, setCidade] = useState('Três Lagoas');
  const [dadosClima, setDadosClima] = useState(null);
  const [hora, setHora] = useState(null);
  const [data, setData] = useState(null);
  const [erroHora, setErroHora] = useState(null);

  const apiKeyTimeZoneDB = '6OUT4MDDADB7'; // Chave TimeZoneDB
  const apiKeyOpenWeatherMap = '5cee0c0dd400748160ca5e81a102c334'; // Chave OpenWeather



  // Buscar Clima e Localização (Lat/Lon)
  const buscarClima = async () => {
    try {
      const resposta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKeyOpenWeatherMap}&units=metric&lang=pt_br`
      );

      if (!resposta.ok) throw new Error("Cidade não encontrada.");

      const dados = await resposta.json();
      setDadosClima(dados);

      // Após buscar o clima, busca a hora baseada na latitude e longitude
      buscarHora(dados.coord.lat, dados.coord.lon);
      
      setCidade(''); // Limpa a input de pesquisa
    } catch (erro) {
      alert(erro.message);
      setDadosClima(null);
    }
  };

  // Buscar Hora com Latitude e Longitude
  const buscarHora = async (latitude, longitude) => {
    try {
      const resposta = await fetch(
        `https://api.timezonedb.com/v2.1/get-time-zone?key=${apiKeyTimeZoneDB}&format=json&by=position&lat=${latitude}&lng=${longitude}`
      );

      if (!resposta.ok) throw new Error("Erro ao buscar a hora.");

      const dados = await resposta.json();
      console.log("Dados de Hora:", dados); // Log para depuração

      if (dados.status === 'OK') {
        const horaLocal = new Date(dados.formatted);
        setHora(horaLocal.toLocaleTimeString());
        setData(horaLocal.toLocaleDateString());
        setErroHora(null);
      }
    } catch (erro) {
      setErroHora(erro.message);
    }
  };

  useEffect(() => {
    buscarClima(); // Chama automaticamente ao iniciar
  }, []);

  return (
    <section className="container">
      <div className='container-TituloCampo'>
        <div className='container-titulo'>
          <h1>Dashboard de Clima</h1>
          <DotLottieReact
            src="https://lottie.host/eb9a5913-8b0e-4cd4-ad9d-bc1782b0894f/hA7jSF8JRf.lottie"
            loop
            autoplay
            className="lottie-animation"
          />
        </div>
        <div className='container-campoEButton'>
          <CampoTexto cidade={cidade} setCidade={setCidade} />
          <button onClick={buscarClima} className="btn btn-primary">Buscar</button>
        </div>
        <div className="container-time">
          {/* <h2>Hora e Data</h2> */}
          {erroHora ? (
            <p>{erroHora}</p>
          ) : (
            <>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                </svg>
                {hora}
              </p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-calendar2-week" viewBox="0 0 16 16">
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
                  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
                </svg>
                {data}
              </p>
            </>
          )}
        </div>  
      </div>
      <div className='container-detalhesClima'>
        <DetalhesClima dadosClima={dadosClima} />
      </div>
    </section>
  );
}

export default App;
