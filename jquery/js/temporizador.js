(function ($) {
  $.fn.temporizador = function (opcoes) {
    const opcoesFinais = $.extend(
      {
        mensagem: "em breve!",
        horario: "23:59:59",
      },
      opcoes
    );
    const horaDezena = $('<span class="digito">').html("0");
    const horaUnidade = $('<span class="digito">').html("0");
    const minutoDezena = $('<span class="digito">').html("0");
    const minutoUnidade = $('<span class="digito">').html("0");
    const segundoDezena = $('<span class="digito">').html("0");
    const segundoUnidade = $('<span class="digito">').html("0");

    const separadorHora = $('<span class="separador">').html(":");
    const separadorMinuto = $('<span class="separador">').html(":");
    const mensagem = $('<span class="mensagem">').html(opcoesFinais.mensagem);

    $(this).addClass("temporizador");
    $(this).append(
      horaDezena,
      horaUnidade,
      separadorHora,
      minutoDezena,
      minutoUnidade,
      separadorMinuto,
      segundoDezena,
      segundoUnidade,
      mensagem
    );

    const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/);
    const horarioAlvo = regex.exec(opcoesFinais.horario);
    // console.log(horarioAlvo);

    let temporizador = setInterval(() => {
      const agora = new Date();
      const alvo = new Date();
      alvo.setHours(horarioAlvo[1]);
      alvo.setMinutes(horarioAlvo[2]);
      alvo.setSeconds(horarioAlvo[3]);

      const diferencaEmMili = alvo.getTime() - agora.getTime();
      if (diferencaEmMili >= 0) {
        const diferena = regex.exec(new Date(diferencaEmMili).toISOString());
      }
    }, 1000);

    return this;
  };
})(jQuery);
