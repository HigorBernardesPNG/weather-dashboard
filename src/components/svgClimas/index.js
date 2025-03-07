const widthAndHeight = 80;
const strokeColor = "#032838";
const strokeWidth = "0.5";
const corPathSol = "#FFC711";
const corPatchNuvem = "#29B6F6";
const corPatchChuvaNeve = "#1E7BA5";

export function ceuLimpo() {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            stroke={strokeColor}
            stroke-width={strokeWidth} 
            width={widthAndHeight} 
            height={widthAndHeight}  
            className="bi bi-brightness-high-fill" 
            viewBox="0 0 16 16">
            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"
            fill={corPathSol}/>
        </svg>
    );
}
  
export function nublado() {
return (
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        stroke={strokeColor}
        stroke-width={strokeWidth} 
        width={widthAndHeight} 
        height={widthAndHeight}  
        className="bi bi-cloud-sun-fill" 
        viewBox="0 0 16 16">
        <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z" fill={corPatchNuvem}/>
        <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708zm1.734 3.374a2 2 0 1 1 3.296 2.198q.3.423.516.898a3 3 0 1 0-4.84-3.225q.529.017 1.028.129m4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377M14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" fill={corPathSol}/>
    </svg>
);
}

export function chuva() {
return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        stroke={strokeColor}
        stroke-width={strokeWidth} 
        width={widthAndHeight} 
        height={widthAndHeight} 
        className="bi bi-cloud-rain-fill" 
        viewBox="0 0 16 16">
        <path d="M4.5 14a.5.5 0 0 1-.374-.832l1.5-1.5a.5.5 0 1 1 .748.664L5 13h1.5a.5.5 0 0 1 0 1h-2zm4 0a.5.5 0 0 1-.374-.832l1.5-1.5a.5.5 0 1 1 .748.664L9 13h1.5a.5.5 0 0 1 0 1h-2zm4 0a.5.5 0 0 1-.374-.832l1.5-1.5a.5.5 0 1 1 .748.664L13 13h1.5a.5.5 0 0 1 0 1h-2z" fill={corPatchNuvem}/>
        <path d="M11.473 9a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-.027-5" fill={corPatchChuvaNeve}/>
    </svg>
);
}

export function Chuvisco() {
return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        stroke={strokeColor}
        stroke-width={strokeWidth} 
        width={widthAndHeight} 
        height={widthAndHeight} 
        className="bi bi-cloud-drizzle-fill" 
        viewBox="0 0 16 16">
        <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973" fill={corPathSol}/>
    </svg>
);
}

export function Tempestade() {
return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        stroke={strokeColor}
        stroke-width={strokeWidth} 
        width={widthAndHeight} 
        height={widthAndHeight}  
        className="bi bi-cloud-lightning-rain-fill" 
        viewBox="0 0 16 16">
        <path d="M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316m9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316m-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316m9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316m-7.105-1.25A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724zm6.352-7.249a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973" fill={corPathSol}/>
    </svg>
);
}

export function Neve() {
return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        stroke={strokeColor}
        stroke-width={strokeWidth} 
        width={widthAndHeight} 
        height={widthAndHeight} 
        className="bi bi-cloud-snow-fill" 
        viewBox="0 0 16 16">
        <path d="M2.625 11.5a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25m2.75 2a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25m5.5 0a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 0 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25m-2.75-2a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25m5.5 0a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 0 1-.5 0v-.57l-.501.287a.25.25 0 1 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25m-.22-7.223a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10.25H13a3 3 0 0 0 .405-5.973" fill={corPatchNuvem}/>
    </svg>
);
}

export function Nevoa() {
return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        stroke={strokeColor}
        stroke-width={strokeWidth} 
        width={widthAndHeight} 
        height={widthAndHeight} 
        className="bi bi-cloud-fog2-fill" 
        viewBox="0 0 16 16">
        <path d="M8.5 3a5 5 0 0 1 4.905 4.027A3 3 0 0 1 13 13h-1.5a.5.5 0 0 0 0-1H1.05a3.5 3.5 0 0 1-.713-1H9.5a.5.5 0 0 0 0-1H.035a3.5 3.5 0 0 1 0-1H7.5a.5.5 0 0 0 0-1H.337a3.5 3.5 0 0 1 3.57-1.977A5 5 0 0 1 8.5 3" fill={corPatchNuvem}/>
    </svg>
);
}

export function Neblina() {
return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        stroke={strokeColor}
        stroke-width={strokeWidth} 
        width={widthAndHeight} 
        height={widthAndHeight}  
        className="bi bi-cloud-haze-fill" 
        viewBox="0 0 16 16">
        <path d="M4 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m2 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M13.405 4.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973" fill={corPatchNuvem}/>
    </svg>
);
}

export function Nevoeiro() {
return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        stroke={strokeColor}
        stroke-width={strokeWidth} 
        width={widthAndHeight} 
        height={widthAndHeight}  
        className="bi bi-cloud-fog2-fill" 
        viewBox="0 0 16 16">
        <path d="M8.5 3a5 5 0 0 1 4.905 4.027A3 3 0 0 1 13 13h-1.5a.5.5 0 0 0 0-1H1.05a3.5 3.5 0 0 1-.713-1H9.5a.5.5 0 0 0 0-1H.035a3.5 3.5 0 0 1 0-1H7.5a.5.5 0 0 0 0-1H.337a3.5 3.5 0 0 1 3.57-1.977A5 5 0 0 1 8.5 3" fill={corPatchNuvem}/>
    </svg>
);
}

export function Fumaca() {
return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        stroke={strokeColor}
        stroke-width={strokeWidth} 
        width={widthAndHeight} 
        height={widthAndHeight}  
        className="bi bi-cloud-haze-fill" 
        viewBox="0 0 16 16">
        <path d="M4 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m2 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M13.405 4.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973" fill={corPatchNuvem}/>
    </svg>
);
}

export function Poeira() {
return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        stroke={strokeColor}
        stroke-width={strokeWidth} 
        width={widthAndHeight} 
        height={widthAndHeight}  
        className="bi bi-wind" 
        viewBox="0 0 16 16">
        <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5" fill={corPatchNuvem}/>
    </svg>
);
}

export function Areia() {
return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        stroke={strokeColor}
        stroke-width={strokeWidth} 
        width={widthAndHeight} 
        height={widthAndHeight} 
        className="bi bi-wind" 
        viewBox="0 0 16 16">
        <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5" fill={corPatchNuvem}/>
    </svg>
);
}

export function Cinzas() {
return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        stroke={strokeColor}
        stroke-width={strokeWidth} 
        width={widthAndHeight} 
        height={widthAndHeight}  
        className="bi bi-wind" 
        viewBox="0 0 16 16">
        <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5" fill={corPatchNuvem}/>
    </svg>
);
}

export function RajadasDeVento() {
return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        stroke={strokeColor}
        stroke-width={strokeWidth} 
        width={widthAndHeight} 
        height={widthAndHeight}  
        className="bi bi-wind" 
        viewBox="0 0 16 16">
        <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5" fill={corPatchNuvem}/>
    </svg>
);
}

export function Tornado() {
return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        stroke={strokeColor}
        stroke-width={strokeWidth} 
        width={widthAndHeight} 
        height={widthAndHeight}  
        className="bi bi-tornado" 
        viewBox="0 0 16 16">
        <path d="M1.125 2.45A.9.9 0 0 1 1 2c0-.26.116-.474.258-.634a1.9 1.9 0 0 1 .513-.389c.387-.21.913-.385 1.52-.525C4.514.17 6.18 0 8 0c1.821 0 3.486.17 4.709.452.607.14 1.133.314 1.52.525.193.106.374.233.513.389.141.16.258.374.258.634 0 1.011-.35 1.612-.634 2.102l-.116.203a2.6 2.6 0 0 0-.313.809 3 3 0 0 0-.011.891.5.5 0 0 1 .428.849q-.091.09-.215.195c.204 1.116.088 1.99-.3 2.711-.453.84-1.231 1.383-2.02 1.856q-.307.183-.62.364c-1.444.832-2.928 1.689-3.735 3.706a.5.5 0 0 1-.748.226l-.001-.001-.002-.001-.004-.003-.01-.008a2 2 0 0 1-.147-.115 4.1 4.1 0 0 1-1.179-1.656 3.8 3.8 0 0 1-.247-1.296A.5.5 0 0 1 5 12.5v-.018l.008-.079a.73.73 0 0 1 .188-.386c.09-.489.272-1.014.573-1.574a.5.5 0 0 1 .073-.918 3.3 3.3 0 0 1 .617-.144l.15-.193c.285-.356.404-.639.437-.861a.95.95 0 0 0-.122-.619c-.249-.455-.815-.903-1.613-1.43q-.291-.19-.609-.394l-.119-.076a12 12 0 0 1-1.241-.334.5.5 0 0 1-.285-.707l-.23-.18C2.117 4.01 1.463 3.32 1.125 2.45m1.973 1.051q.17.156.358.308c.472.381.99.722 1.515 1.06 1.54.317 3.632.5 5.43.14a.5.5 0 0 1 .197.981c-1.216.244-2.537.26-3.759.157.399.326.744.682.963 1.081.203.373.302.79.233 1.247q-.077.494-.39.985l.22.053.006.002c.481.12.863.213 1.47.01a.5.5 0 1 1 .317.95c-.888.295-1.505.141-2.023.012l-.006-.002a4 4 0 0 0-.644-.123c-.37.55-.598 1.05-.726 1.497q.212.068.465.194a.5.5 0 1 1-.448.894 3 3 0 0 0-.148-.07c.012.345.084.643.18.895.14.369.342.666.528.886.992-1.903 2.583-2.814 3.885-3.56q.305-.173.584-.34c.775-.464 1.34-.89 1.653-1.472.212-.393.33-.9.26-1.617A6.74 6.74 0 0 1 10 8.5a.5.5 0 0 1 0-1 5.76 5.76 0 0 0 3.017-.872l-.007-.03c-.135-.673-.14-1.207-.056-1.665.084-.46.253-.81.421-1.113l.131-.23q.098-.167.182-.327c-.29.107-.62.202-.98.285C11.487 3.83 9.822 4 8 4c-1.821 0-3.486-.17-4.709-.452q-.098-.022-.193-.047M13.964 2a1 1 0 0 0-.214-.145c-.272-.148-.697-.297-1.266-.428C11.354 1.166 9.769 1 8 1s-3.354.166-4.484.427c-.569.13-.994.28-1.266.428A1 1 0 0 0 2.036 2q.058.058.214.145c.272.148.697.297 1.266.428C4.646 2.834 6.231 3 8 3s3.354-.166 4.484-.427c.569-.13.994-.28 1.266-.428A1 1 0 0 0 13.964 2" fill={corPatchNuvem}/>
    </svg>
);
}
  
  