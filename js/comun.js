// Utilidades compartidas: fecha de España, desbloqueo, progreso.
(function () {
  const CLAVE = "universo-lucia-v1";
  const leer = () => { try { return JSON.parse(localStorage.getItem(CLAVE)) || {}; } catch (e) { return {}; } };
  const escribir = (o) => { try { localStorage.setItem(CLAVE, JSON.stringify(o)); } catch (e) {} };

  // Modo prueba para Alberto: abrir cualquier página con #llave-alberto desbloquea todo en ese navegador.
  if (location.hash === "#llave-alberto") { const s = leer(); s.llave = true; escribir(s); }
  if (location.hash === "#sin-llave") { const s = leer(); delete s.llave; escribir(s); }

  function hoyMadrid() {
    const p = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Madrid", year: "numeric", month: "2-digit", day: "2-digit" })
      .formatToParts(new Date()).reduce((a, x) => (a[x.type] = x.value, a), {});
    return { y: +p.year, m: +p.month, d: +p.day };
  }
  function desbloqueado(dia, anio) {
    if (leer().llave) return true;
    const h = hoyMadrid(); anio = anio || (window.CALENDARIO && CALENDARIO.anio) || 2026;
    if (h.y > anio) return true;
    if (h.y < anio) return false;
    return h.m === 12 && h.d >= dia;
  }
  // Milisegundos hasta la medianoche (Madrid) del día indicado de diciembre
  function msHasta(dia, anio) {
    anio = anio || 2026;
    const ahora = new Date();
    const madrid = new Date(ahora.toLocaleString("en-US", { timeZone: "Europe/Madrid" }));
    const objetivo = new Date(anio, 11, dia, 0, 0, 0);
    return objetivo - madrid;
  }
  const U = window.Universo = {
    estado: leer,
    guardar(fn) { const s = leer(); fn(s); escribir(s); },
    hoyMadrid, desbloqueado, msHasta,
    completado: (d) => !!(leer().hechos || {})[d],
    completar(d) { U.guardar((s) => { (s.hechos ||= {})[d] = Date.now(); }); },
    // Protege una página de día: si aún no toca, vuelve al universo.
    proteger(d) {
      if (!desbloqueado(d)) { location.replace("../index.html?bloqueado=" + d); return false; }
      return true;
    },
    diasJuntos() {
      const ini = new Date((window.RECUERDOS && RECUERDOS.inicio || "2024-02-09") + "T00:00:00");
      return Math.floor((Date.now() - ini) / 864e5);
    }
  };
})();
