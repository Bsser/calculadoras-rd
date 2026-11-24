// node test_calc.js — comprueba las calculadoras contra casos conocidos.
const assert = require("assert");
const c = require("./estaticos/calc.js");
const cerca = (a, b) => assert.ok(Math.abs(a - b) < 1, `${a} != ${b}`);

// Salario de RD$50,000: AFP 1,435, SFS 1,520, ISR ≈ 1,854.00
const r = c.salarioNeto(50000);
cerca(r.afp, 1435); cerca(r.sfs, 1520); cerca(r.isr, 1854); cerca(r.neto, 50000 - 1435 - 1520 - 1854);
assert.strictEqual(c.salarioNeto(30000).isr, 0);                 // por debajo del tramo exento
cerca(c.isrAnual(700000), 31216 + (700000 - 624329) * 0.20);
cerca(c.salarioNeto(500000).sfs, 232230 * 0.0304);              // tope SFS

cerca(c.regalia(30000, 12, 0).monto, 30000);
cerca(c.regalia(30000, 6, 0).monto, 15000);
assert.ok(c.regalia(200000, 12, 20000).topado);                  // tope 5 salarios mínimos

assert.strictEqual(c.preaviso(2), 0); assert.strictEqual(c.preaviso(4), 7);
assert.strictEqual(c.preaviso(8), 14); assert.strictEqual(c.preaviso(30), 28);
assert.strictEqual(c.cesantia(4), 6); assert.strictEqual(c.cesantia(8), 13);
assert.strictEqual(c.cesantia(24), 42); assert.strictEqual(c.cesantia(28), 48);   // 2 años + 4 meses
assert.strictEqual(c.cesantia(72), 138);                                            // 6 años × 23
assert.strictEqual(c.vacaciones(30, 12), 14); assert.strictEqual(c.vacaciones(72, 12), 18);
assert.strictEqual(c.vacaciones(30, 7), 8);

const p = c.prestaciones(23830, 24, 12, 12, "desahucio");     // salario diario 1,000
cerca(p.diario, 1000); cerca(p.preaviso, 28000); cerca(p.cesantia, 42000); cerca(p.vacaciones, 14000); cerca(p.regalia, 23830);
assert.strictEqual(c.prestaciones(23830, 24, 12, 12, "renuncia").cesantia, 0);

const he = c.horasExtra(23830, 50);                             // hora normal 125
cerca(he.hora, 125); assert.strictEqual(he.h35, 6); cerca(he.total, 6 * 125 * 1.35);
const he2 = c.horasExtra(23830, 72);                            // 24 h al 35% + 4 h al 100%
assert.strictEqual(he2.h35, 24); assert.strictEqual(he2.h100, 4); cerca(he2.total, 4050 + 1000);
assert.strictEqual(c.horasExtra(23830, 40).total, 0);
console.log("OK: calculadoras");
