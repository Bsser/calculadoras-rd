"""Genera el sitio estático en docs/ a partir de contenido/*.md.

Cada .md empieza con cabecera:
    titulo: ...
    descripcion: ...
    fecha: 2026-11-24
    ---
Uso: python build.py
"""
import datetime, html, pathlib, shutil
import markdown

SITIO = "https://bsser.github.io/calculadoras-rd"
TIENDA = "https://jontastic64.gumroad.com/l/nomina-rd-2026"
PRECIO = "US$9"

RAIZ = pathlib.Path(__file__).parent
SALIDA = RAIZ / "docs"

PLANTILLA = """<!doctype html>
<html lang="es"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{titulo}</title>
<meta name="description" content="{descripcion}">
<link rel="canonical" href="{url}">
<meta name="google-site-verification" content="4F6GvPItG1MgDsxIkhHlMnWlIL_Nr4-tKKIEYM5F8QM">
<link rel="stylesheet" href="{base}estilo.css">
<script src="{base}calc.js" defer></script>
</head><body>
<header><a class="marca" href="{base}">Calculadoras RD</a><span>Calculadoras laborales gratis para República Dominicana</span></header>
<main>{cuerpo}</main>
<footer>Resultados orientativos, no sustituyen asesoría legal ni contable. Sitio independiente, no afiliado al Ministerio de Trabajo, la TSS ni la DGII; confirma en mt.gob.do, tss.gob.do y dgii.gov.do.</footer>
</body></html>"""

CTA = f"""<aside class="cta">
<h3>¿Llevas la nómina de tu negocio o de tu casa?</h3>
<p>La <b>Plantilla Excel Nómina RD 2026</b> calcula sola AFP, SFS, ISR, salario neto, regalía pascual y prestaciones de hasta 30 empleados. Solo escribes el salario. Funciona en Excel y Google Sheets.</p>
<a class="boton" href="{TIENDA}">Descargar la plantilla · {PRECIO}</a>
<p class="gratis">Más plantillas Excel: <a href="https://jontastic64.gumroad.com/l/inventario-ventas-rd">inventario y ventas con ITBIS (US$9)</a> · <a href="https://jontastic64.gumroad.com/l/presupuesto-familiar-rd">presupuesto familiar y deudas (US$5)</a> · <a href="https://jontastic64.gumroad.com/l/control-alquileres-rd">control de alquileres (US$9)</a> · <a href="https://jontastic64.gumroad.com/l/cotizaciones-cobros-rd">cotizaciones y cuentas por cobrar (US$9)</a> · <a href="https://jontastic64.gumroad.com/l/calculadora-prestamos-rd">calculadora de préstamos (US$5)</a> · <a href="https://bsser.github.io/plantillas-excel-rd/">ver todas las plantillas</a> · <a href="https://jontastic64.gumroad.com/l/cuotas-condominio-rd">cuotas de condominio (US$9)</a></p>
<p class="gratis">¿Compras o vendes un terreno? <a href="https://bsser.github.io/terreno-seguro-rd/">Terreno Seguro RD</a> · ¿Vives fuera? <a href="https://bsser.github.io/tramites-rd-exterior/">Trámites RD Exterior</a></p>
</aside>"""


def leer(md_path):
    cabecera, cuerpo = md_path.read_text(encoding="utf-8").split("\n---\n", 1)
    meta = dict(l.split(":", 1) for l in cabecera.strip().splitlines())
    meta = {k.strip(): v.strip() for k, v in meta.items()}
    meta["slug"] = md_path.stem
    meta["html"] = markdown.markdown(cuerpo, extensions=["tables"])
    return meta


def pagina(ruta, base, **campos):
    campos = {k: html.escape(v) if k in ("titulo", "descripcion") else v for k, v in campos.items()}
    ruta.parent.mkdir(parents=True, exist_ok=True)
    ruta.write_text(PLANTILLA.format(base=base, **campos), encoding="utf-8")


def construir():
    if SALIDA.exists():
        shutil.rmtree(SALIDA)
    SALIDA.mkdir()
    for f in (RAIZ / "estaticos").iterdir():
        shutil.copy(f, SALIDA / f.name)

    hoy = datetime.date.today().isoformat()
    # ponytail: artículos con fecha futura se omiten -> permite dejar programados en cola
    arts = [a for a in map(leer, (RAIZ / "contenido").glob("*.md")) if a["fecha"] <= hoy]
    arts.sort(key=lambda a: a["fecha"], reverse=True)

    for a in arts:
        cuerpo = f"<article><h1>{html.escape(a['titulo'])}</h1><p class='fecha'>{a['fecha']}</p>{a['html']}</article>" + CTA.replace("{base}", "../")
        pagina(SALIDA / a["slug"] / "index.html", "../", titulo=a["titulo"] + " | Calculadoras RD",
               descripcion=a["descripcion"], url=f"{SITIO}/{a['slug']}/", cuerpo=cuerpo)

    lista = "".join(f"<li><a href='{a['slug']}/'>{html.escape(a['titulo'])}</a><p>{html.escape(a['descripcion'])}</p></li>" for a in arts)
    portada = ("<section class='hero'><h1>Calculadoras laborales de República Dominicana</h1>"
               "<p>Calcula gratis tu regalía pascual, tu salario neto (AFP, SFS e ISR 2026) y tus prestaciones laborales.</p></section>"
               f"<ul class='lista'>{lista}</ul>" + CTA.replace("{base}", ""))
    pagina(SALIDA / "index.html", "", titulo="Calculadoras RD — Regalía pascual, salario neto y prestaciones laborales 2026",
           descripcion="Calculadoras gratis para República Dominicana: regalía pascual 2026, salario neto con AFP, SFS e ISR, y prestaciones laborales (preaviso, cesantía y vacaciones).",
           url=f"{SITIO}/", cuerpo=portada)

    urls = [f"{SITIO}/"] + [f"{SITIO}/{a['slug']}/" for a in arts]
    (SALIDA / "sitemap.xml").write_text(
        '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
        + "".join(f"<url><loc>{u}</loc></url>" for u in urls) + "</urlset>", encoding="utf-8")
    (SALIDA / "robots.txt").write_text(f"User-agent: *\nAllow: /\nSitemap: {SITIO}/sitemap.xml\n", encoding="utf-8")
    (SALIDA / ".nojekyll").write_text("")
    return arts


if __name__ == "__main__":
    arts = construir()
    # autocomprobación: cada artículo publicado tiene la llamada a la tienda y aparece en el sitemap
    mapa = (SALIDA / "sitemap.xml").read_text(encoding="utf-8")
    for a in arts:
        assert TIENDA in (SALIDA / a["slug"] / "index.html").read_text(encoding="utf-8"), a["slug"]
        assert f"/{a['slug']}/" in mapa, a["slug"]
    print(f"OK: {len(arts)} artículos publicados en docs/")
