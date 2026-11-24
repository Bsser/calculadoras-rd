// Calculadoras laborales RD. Funciones puras arriba; enlace con la página abajo.
// Valores 2026: confirmar cada año (TSS y DGII publican cambios). La Ley 30-26 cambia la escala de ISR desde 2027.
const R = {
  afp: 0.0287, sfs: 0.0304,            // aporte del trabajador
  topeAFP: 464460, topeSFS: 232230,     // 20 y 10 salarios mínimos cotizables (desde feb. 2026)
  // Escala anual ISR asalariados 2026 (DGII): [desde, cuota fija, tasa]
  isr: [[867123, 79776, 0.25], [624329, 31216, 0.20], [416220, 0, 0.15]],
  divisorDiario: 23.83,
  jornada: 44, topeExtra35: 68,       // art. 147 (44 h semanales) y art. 203 (35% hasta 68 h, 100% después)
};

function isrAnual(renta) {
  for (const [desde, fija, tasa] of R.isr) if (renta > desde) return fija + (renta - desde) * tasa;
  return 0;
}

function salarioNeto(bruto) {
  const afp = Math.min(bruto, R.topeAFP) * R.afp;
  const sfs = Math.min(bruto, R.topeSFS) * R.sfs;
  const isr = isrAnual((bruto - afp - sfs) * 12) / 12;
  return { afp, sfs, isr, neto: bruto - afp - sfs - isr };
}

// Salario de Navidad (art. 219 CT): 1/12 del salario ordinario devengado en el año, tope 5 salarios mínimos.
function regalia(salarioMensual, meses, salarioMinimo) {
  const monto = salarioMensual * meses / 12;
  const tope = salarioMinimo > 0 ? salarioMinimo * 5 : Infinity;
  return { monto: Math.min(monto, tope), topado: monto > tope };
}

// Prestaciones (arts. 76, 80, 177, 180 y 219 CT). meses = tiempo total trabajado.
function preaviso(meses) { return meses >= 12 ? 28 : meses >= 6 ? 14 : meses >= 3 ? 7 : 0; }
function cesantia(meses) {
  if (meses < 12) return meses >= 6 ? 13 : meses >= 3 ? 6 : 0;
  const anos = Math.floor(meses / 12), resto = meses % 12;
  const porAno = anos >= 5 ? 23 : 21;
  return anos * porAno + (resto >= 6 ? 13 : resto >= 3 ? 6 : 0);
}
function vacaciones(meses, mesesDesdeUltimas) {
  // Vacaciones no disfrutadas: año completo (14 días; 18 desde 5 años) o proporción del art. 180 si pasó menos de un año.
  if (mesesDesdeUltimas >= 12) return meses >= 60 ? 18 : 14;
  return [0, 0, 0, 0, 0, 6, 7, 8, 9, 10, 11, 12][Math.floor(mesesDesdeUltimas)] || 0;
}
function prestaciones(salarioMensual, meses, mesesDesdeVacaciones, mesesEsteAno, motivo) {
  const diario = salarioMensual / R.divisorDiario;
  const despido = motivo === "desahucio";
  const d = {
    preaviso: despido ? preaviso(meses) : 0,
    cesantia: despido ? cesantia(meses) : 0,
    vacaciones: vacaciones(meses, mesesDesdeVacaciones),
  };
  const r = {
    diario,
    preaviso: d.preaviso * diario, cesantia: d.cesantia * diario, vacaciones: d.vacaciones * diario,
    regalia: salarioMensual * mesesEsteAno / 12, dias: d,
  };
  r.total = r.preaviso + r.cesantia + r.vacaciones + r.regalia;
  return r;
}

// Horas extra (art. 203 CT): hora normal = salario ÷ 23.83 ÷ 8; +35% hasta 68 h semanales, +100% desde ahí.
function horasExtra(salarioMensual, horasSemana, jornada = R.jornada) {
  const hora = salarioMensual / R.divisorDiario / 8;
  const extras = Math.max(0, horasSemana - jornada);
  const h35 = Math.min(extras, Math.max(0, R.topeExtra35 - jornada));
  const h100 = extras - h35;
  const p35 = h35 * hora * 1.35, p100 = h100 * hora * 2;
  return { hora, h35, h100, p35, p100, total: p35 + p100 };
}

if (typeof module !== "undefined") module.exports = { isrAnual, salarioNeto, regalia, preaviso, cesantia, vacaciones, prestaciones, horasExtra };

// ---------- página ----------
if (typeof document !== "undefined") {
  const $ = (id) => document.getElementById(id);
  const n = (id) => parseFloat(($(id)?.value || "").replace(/,/g, "")) || 0;
  const rd = (x) => "RD$" + x.toLocaleString("es-DO", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const fila = (a, b, fuerte) => `<tr${fuerte ? ' class="total"' : ""}><td>${a}</td><td>${b}</td></tr>`;
  const pinta = (id, filas) => { $(id).innerHTML = `<table>${filas.join("")}</table>`; };

  const calcs = {
    "f-neto": () => {
      const r = salarioNeto(n("neto-bruto"));
      pinta("r-neto", [fila("AFP (2.87%)", rd(r.afp)), fila("SFS (3.04%)", rd(r.sfs)), fila("ISR (escala 2026)", rd(r.isr)), fila("Salario neto mensual", rd(r.neto), 1)]);
    },
    "f-regalia": () => {
      const r = regalia(n("reg-salario"), Math.min(12, n("reg-meses")), n("reg-minimo"));
      pinta("r-regalia", [fila("Regalía pascual estimada", rd(r.monto), 1)].concat(r.topado ? [fila("Nota", "Se aplicó el tope de 5 salarios mínimos")] : []));
    },
    "f-prest": () => {
      const r = prestaciones(n("pr-salario"), n("pr-anos") * 12 + n("pr-meses"), n("pr-vac"), Math.min(12, n("pr-ano")), $("pr-motivo").value);
      pinta("r-prest", [
        fila("Salario diario (÷ 23.83)", rd(r.diario)),
        fila(`Preaviso (${r.dias.preaviso} días)`, rd(r.preaviso)),
        fila(`Cesantía (${r.dias.cesantia} días)`, rd(r.cesantia)),
        fila(`Vacaciones (${r.dias.vacaciones} días)`, rd(r.vacaciones)),
        fila("Regalía proporcional", rd(r.regalia)),
        fila("Total estimado", rd(r.total), 1),
      ]);
    },
    "f-extra": () => {
      const r = horasExtra(n("he-salario"), n("he-horas"), n("he-jornada") || R.jornada);
      pinta("r-extra", [
        fila("Valor de tu hora normal", rd(r.hora)),
        fila(`${r.h35} h extra al 135%`, rd(r.p35)),
        fila(`${r.h100} h extra al 200%`, rd(r.p100)),
        fila("Pago por horas extra en la semana", rd(r.total), 1),
      ]);
    },
  };
  for (const [form, fn] of Object.entries(calcs)) {
    const f = $(form);
    if (f) { f.addEventListener("submit", (e) => { e.preventDefault(); fn(); }); }
  }
}
