# Calculadoras RD: plan de trabajo

Meta: ingresos pasivos con una plantilla Excel de nómina (US$9). Calculadoras gratis atraen visitas desde Google. Inversión: $0. Negocios hermanos: Terreno Seguro RD y Trámites RD Exterior (enlazados en el CTA).

## Estado
- [x] Calculadoras (`estaticos/calc.js`, prueba: `node test_calc.js`): regalía, salario neto, prestaciones
- [x] Producto: `Nomina-RD-2026.xlsx` en el repo privado `Bsser/calculadoras-rd-privado` (se genera con `producto/plantilla.py`)
- [x] Blog: `python build.py` genera `docs/`
- [x] Publicado en GitHub Pages: https://bsser.github.io/calculadoras-rd
- [x] Gumroad: https://jontastic64.gumroad.com/l/nomina-rd-2026 (publicado 2026-11-24, US$9)
- [x] Google Search Console: verificado (etiqueta meta en build.py, no quitarla) y sitemap enviado
- [x] Tarea diaria programada (10:00 a. m., tarea calculadoras-rd-diario)

## Rutina diaria (la tarea programada)
1. Tomar el primer tema de la cola. Si es una calculadora nueva, agregar la función pura a `estaticos/calc.js`, su caso en `test_calc.js` y el formulario en el .md (patrón: `<form class="calc" id="f-x">` + entrada en `calcs`). Investigar con fuentes oficiales (mt.gob.do, tss.gob.do, dgii.gov.do, Código de Trabajo, Comité Nacional de Salarios) y escribir `contenido/<slug>.md` (700–1200 palabras; sin inventar cifras).
2. `node test_calc.js` y `python build.py` (los dos deben imprimir OK) → commit → push.
3. Marcar el tema como hecho aquí y anotar la fecha en el registro.
4. Lunes: 3 publicaciones para grupos de emprendedores, RR. HH. y trabajadores dominicanos en `ventas/posts-semana.md` del repo privado (las publica el dueño).
5. Día 1 del mes: revisar si cambió alguna tasa (TSS, DGII, salario mínimo). Si cambió, actualizar `calc.js`, `plantilla.py` y regenerar el Excel en el repo privado, y anotar en `ventas/propuesta-actualizacion.md` que hay que subir la versión nueva a Gumroad.

## Cola de temas (SEO)
- [x] Calculadora de horas extra en RD (art. 203: 35% y 100%)
- [ ] Salario mínimo 2026 en RD por tamaño de empresa y sector (tabla)
- [ ] Calculadora de vacaciones (días que te tocan y cuánto cobras)
- [ ] Calculadora de ITBIS (18%): sumar y quitar el impuesto
- [ ] Cuánto le cuesta un empleado al empleador en RD (TSS + INFOTEP)
- [ ] Calculadora de préstamo: cuota mensual (sistema francés)
- [ ] Calculadora de pensión AFP: cuánto llevas acumulado (orientativo)
- [ ] Derechos y regalía de la trabajadora doméstica (confirmar la norma vigente en mt.gob.do antes de escribir)
- [ ] Bonificación (participación en beneficios, art. 223): cómo se calcula
- [ ] Calculadora de dólar a peso dominicano (explicar tasa del Banco Central, sin datos en vivo)
- [ ] Calculadora de ISR para independientes (IR-1, explicativo)
- [ ] Licencia de maternidad y paternidad en RD: días y pago
- [ ] Calculadora de intereses de tarjeta de crédito
- [ ] Cómo leer tu volante de pago dominicano
- [ ] Recargo por pago tardío de prestaciones (art. 86): calculadora
- [ ] Calculadora de días feriados trabajados (pago doble)
- [ ] Desahucio vs. despido vs. dimisión: diferencias y qué cobras
- [ ] Calculadora de propinas de ley (10%)
- [ ] Calculadora de tareas a metros cuadrados (enlazar Terreno Seguro RD)
- [ ] Cálculo del salario diario: por qué 23.83

## Registro
- 2026-11-24: calculadoras, plantilla Excel y sitio con 3 páginas creados.
- 2026-11-24: calculadora-horas-extra-rd (calculadora de horas extra, art. 203).
