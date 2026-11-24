titulo: Calculadora de préstamo en RD: cuota mensual, intereses y tabla
descripcion: Calcula gratis la cuota fija de tu préstamo (método francés) en pesos dominicanos: cuota mensual, total de intereses, tabla de amortización y cuánto ahorras con abonos a capital.
fecha: 2026-11-24
---
Antes de firmar un préstamo personal, de vehículo o hipotecario, lo primero que quieres saber es **cuánto vas a pagar cada mes** y **cuánto te va a costar en intereses**. Escribe el monto, la tasa anual que te ofrecen y el plazo en meses. Si piensas pagar algo extra cada mes, ponlo en "abono a capital" y verás cuántos meses y cuántos pesos te ahorras.

<form class="calc" id="f-prestamo">
<label>Monto del préstamo (RD$)<input id="pt-monto" inputmode="decimal" placeholder="500000" required></label>
<label>Tasa de interés anual (%)<input id="pt-tasa" inputmode="decimal" placeholder="14" required></label>
<label>Plazo (meses)<input id="pt-meses" inputmode="numeric" placeholder="60" required></label>
<label>Abono extra a capital cada mes (RD$, opcional)<input id="pt-abono" inputmode="decimal" placeholder="0"></label>
<button>Calcular préstamo</button>
<div class="resultado" id="r-prestamo" aria-live="polite"></div>
</form>

## Qué es la cuota fija o método francés

La mayoría de los préstamos de consumo, de vehículo e hipotecarios se pagan con **cuota fija**: pagas la misma cantidad todos los meses hasta terminar. A esa forma de calcular se le llama **método francés** o sistema de amortización francés.

Cada cuota tiene dos partes:

- **Interés:** lo que le pagas al banco por usar su dinero ese mes. Se calcula sobre lo que todavía debes (el saldo).
- **Capital:** la parte que de verdad baja tu deuda.

La cuota no cambia, pero la mezcla sí: al principio casi todo es interés y, mes a mes, la parte de capital va creciendo.

La fórmula es esta, donde *i* es la tasa mensual (tasa anual ÷ 12 ÷ 100) y *n* el número de meses:

**Cuota = monto × i ÷ (1 − (1 + i)<sup>−n</sup>)**

Si la tasa es 0%, la cuota es simplemente el monto dividido entre los meses.

## Ejemplo con números

Te ofrecen **RD$500,000** al **14% anual** a **60 meses** (5 años).

1. Tasa mensual: 14 ÷ 12 = 1.1667% al mes.
2. Cuota fija: **RD$11,634.13** al mes.
3. Total pagado en 60 cuotas: unos **RD$698,047**.
4. Total de intereses: unos **RD$198,047**, casi el 40% de lo que te prestaron.

Otro caso, un préstamo largo: **RD$1,000,000** al **12% anual** a **240 meses** (20 años). La cuota es de **RD$11,010.86**. Parece parecida a la del ejemplo anterior, pero al final pagas unos RD$2,642,607: más de **RD$1.6 millones solo en intereses**. Alargar el plazo baja la cuota, pero encarece mucho el préstamo.

Los centavos pueden variar un poco respecto a la tabla del banco, porque cada entidad redondea a su manera y a veces ajusta la última cuota.

## Por qué las primeras cuotas son casi todo interés

En el primer mes del préstamo de RD$500,000, el interés se calcula sobre la deuda completa: 500,000 × 1.1667% = **RD$5,833.33**. De tu cuota de RD$11,634.13, solo **RD$5,800.79** van a capital. Es decir, la mitad de lo que pagas ese mes se va en intereses.

En todo el primer año pagas unos RD$139,610 en cuotas, y de eso unos **RD$65,355 son intereses**. Después de 12 pagos todavía debes más del 80% del préstamo.

En el préstamo de 20 años es más marcado: el primer mes pagas **RD$10,000 de interés** y apenas RD$1,010.86 de capital. Por eso, si cancelas o refinancias un préstamo en los primeros años, te puede sorprender lo poco que ha bajado el saldo. La tabla de la calculadora te muestra los primeros 12 meses para que lo veas.

## Tasa nominal vs. costo real del préstamo

La tasa que te dicen en la oficina o en el anuncio suele ser la **tasa nominal anual**, y es la que usa esta calculadora. Pero el préstamo te puede costar más por otros cargos:

- **Comisiones** de apertura, de desembolso o de manejo.
- **Gastos de cierre**: tasación, abogado, notario, registro de la garantía (sobre todo en hipotecas y vehículos).
- **Seguros** que se cobran junto con la cuota: seguro de vida sobre el saldo, seguro del vehículo o de la vivienda.

Si te descuentan una comisión del monto, recibes menos dinero pero pagas intereses sobre el monto completo. Y si cada mes te suman seguros, tu pago real es más alto que la cuota que da la fórmula. Para comparar dos ofertas, no mires solo la tasa: suma todo lo que vas a pagar de verdad y compáralo con lo que vas a recibir en la mano.

## Qué hace un abono a capital

Un **abono a capital** (o abono extraordinario) es dinero que pagas por encima de la cuota y que va directo a bajar el saldo. Como el interés de cada mes se calcula sobre el saldo, todo lo que bajes hoy deja de generar intereses el resto del préstamo.

Con el mismo préstamo de RD$500,000 al 14% a 60 meses, si abonas **RD$2,000 extra cada mes**:

- Terminas en **49 meses** en vez de 60: casi **un año menos**.
- Pagas unos **RD$41,700 menos de intereses**.

Hay dos formas de aplicar un abono: **reducir el plazo** (sigues con la misma cuota y terminas antes, que es lo que calcula esta página) o **reducir la cuota** (sigues con el mismo plazo pero pagas menos cada mes). Reducir el plazo suele ahorrar más intereses. Pregunta al banco cuál de las dos aplica y pide que te lo confirme por escrito cada vez que abones.

## Preguntas que debes hacerle al banco antes de firmar

1. **¿La tasa es fija o variable?** Si es variable, ¿cada cuánto puede cambiar y con qué referencia?
2. **¿Hay penalidad por pago anticipado o por abonos a capital?** ¿Cuánto es y durante cuánto tiempo aplica?
3. **¿Qué comisiones, gastos de cierre y seguros voy a pagar?** Pide el monto en pesos, no solo el porcentaje.
4. **¿Cuánto voy a recibir en mi cuenta**, después de descuentos?
5. **¿Me pueden dar la tabla de amortización por escrito**, con la cuota, el interés, el capital y el saldo de cada mes?
6. **¿Qué pasa si me atraso?** Cargos por mora y desde qué día se cobran.

Con la tabla del banco en la mano, compárala con la de esta calculadora. Si la cuota del banco es bastante más alta, pregunta qué cargos explican la diferencia.

<aside class="cta">
<h3>¿Quieres comparar ofertas con el costo real?</h3>
<p>La <b>Plantilla Excel Calculadora de Préstamos RD</b> te da la tabla de amortización completa de hasta 360 meses, el costo real con comisión, gastos de cierre y seguro, el efecto de los abonos extraordinarios y una comparación lado a lado de 3 ofertas de préstamo.</p>
<a class="boton" href="https://jontastic64.gumroad.com/l/calculadora-prestamos-rd">Descargar la plantilla · US$5</a>
</aside>

*Resultados orientativos. La calculadora usa la tasa nominal anual dividida entre 12 y no incluye comisiones, seguros ni otros cargos. No es asesoría financiera: confirma siempre las condiciones y la tabla de amortización con tu banco o entidad financiera antes de firmar.*
