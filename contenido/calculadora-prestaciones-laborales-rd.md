titulo: Calculadora de prestaciones laborales en RD (preaviso, cesantía y vacaciones)
descripcion: Calcula tus prestaciones laborales en República Dominicana según el Código de Trabajo: preaviso, cesantía, vacaciones y regalía proporcional, por desahucio o renuncia.
fecha: 2026-11-24
---
Si te despidieron sin causa (desahucio) o renunciaste, esta calculadora estima lo que te corresponde según el **Código de Trabajo de la República Dominicana**.

<form class="calc" id="f-prest">
<label>Salario mensual (RD$)<input id="pr-salario" inputmode="decimal" placeholder="25000" required></label>
<label>Años trabajados<input id="pr-anos" inputmode="numeric" value="0"></label>
<label>Meses adicionales<input id="pr-meses" inputmode="numeric" value="0"></label>
<label>Meses desde tus últimas vacaciones (12 si no las tomaste este año)<input id="pr-vac" inputmode="numeric" value="12"></label>
<label>Meses trabajados en el año de la salida (para la regalía)<input id="pr-ano" inputmode="numeric" value="11"></label>
<label>Cómo terminó el contrato<select id="pr-motivo"><option value="desahucio">Me despidieron sin causa (desahucio)</option><option value="renuncia">Renuncié (dimisión simple)</option></select></label>
<button>Calcular prestaciones</button>
<div class="resultado" id="r-prest" aria-live="polite"></div>
</form>

## Qué incluye cada partida

**Salario diario.** Todo se calcula por días. El salario diario es el salario mensual dividido entre **23.83**, el promedio de días laborables al mes que se usa en la práctica.

**Preaviso (art. 76).** Es el aviso previo que el empleador debe dar o pagar si termina el contrato sin causa:

| Tiempo trabajado | Días de preaviso |
|---|---|
| De 3 a 6 meses | 7 días |
| De 6 meses a 1 año | 14 días |
| Más de 1 año | 28 días |

**Cesantía (art. 80).** Es una compensación por los años de servicio:

| Tiempo trabajado | Días de cesantía |
|---|---|
| De 3 a 6 meses | 6 días |
| De 6 meses a 1 año | 13 días |
| De 1 a 5 años | 21 días por año |
| Más de 5 años | 23 días por año |

Si después de los años completos queda una fracción de 3 a 6 meses, se suman 6 días. Si la fracción es de más de 6 meses, se suman 13 días.

**Vacaciones (arts. 177 y 180).** Si no tomaste tus vacaciones, se pagan **14 días** al año, o **18 días** desde los 5 años de servicio. Si no completaste el año, recibes la parte proporcional del artículo 180: 6 días a los 5 meses, 7 a los 6 meses, y así hasta 12 días a los 11 meses.

**Regalía proporcional.** Es la doceava parte de lo devengado en el año de la salida. Ver la [calculadora de regalía pascual](../calculadora-regalia-pascual-2026/).

## Desahucio, despido y renuncia: no es lo mismo

- **Desahucio:** el empleador termina el contrato sin alegar causa. Te toca preaviso, cesantía, vacaciones y regalía.
- **Renuncia (dimisión simple):** recibes las vacaciones no disfrutadas y la regalía proporcional, pero no preaviso ni cesantía.
- **Despido justificado:** el empleador alega una falta grave. Si demuestra la causa, no paga preaviso ni cesantía; si no la demuestra, un tribunal puede condenarlo a pagarlas y más.
- **Dimisión justificada:** renuncias por una falta grave del empleador. Si la demuestras, se trata como si te hubieran desahuciado.

En los despidos y dimisiones con causa, el resultado depende de lo que se pruebe. Consulta a un abogado laboral.

## Plazo para pagar

El empleador debe pagar el preaviso y la cesantía en un plazo de **10 días** desde la terminación del contrato. Si se retrasa, el artículo 86 lo obliga a pagar **un día de salario adicional por cada día de retraso**.

## Dónde reclamar

En el **Ministerio de Trabajo** (mt.gob.do) puedes pedir gratis el cálculo oficial de tus prestaciones y orientación. Ten a mano tu carta de despido o de renuncia, tus volantes de pago y tu fecha de entrada.

*Resultado orientativo. No incluye salarios pendientes, horas extra, participación en los beneficios de la empresa ni la indemnización del artículo 86. Confirma con el Ministerio de Trabajo o con un abogado laboral.*
