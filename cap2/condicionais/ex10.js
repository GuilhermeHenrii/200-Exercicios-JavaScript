function calculaMedia(av1, av2){
    const media = (av1 + av2) / 2;
    console.log(`Sua média nesse semestre é: ${media}`);

    media >= 7 ? aprovado(media) : reprovado(media);
};

function aprovado(media){
    console.log('Você foi aprovado. Nota:' + media);
}

function reprovado(media){
    console.log('Você foi reprovado. Nota:' + media);
}

calculaMedia(6.9, 5);
