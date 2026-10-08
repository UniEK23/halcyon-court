const T = window.THREE,
  S = {};
let act = "home";
const $ = (s) => document.querySelector(s);
const M = (c, e) =>
  new T.MeshStandardMaterial({
    color: c,
    roughness: 0.7,
    metalness: 0.05,
    emissive: e || 0,
  });
const bx = (g, w, h, d, c, x, y, z, e) => {
  const m = new T.Mesh(new T.BoxGeometry(w, h, d), M(c, e));
  m.position.set(x, y, z);
  g.add(m);
  return m;
};
const cy = (g, r, h, c, x, y, z, e) => {
  const m = new T.Mesh(new T.CylinderGeometry(r, r, h, 20), M(c, e));
  m.position.set(x, y, z);
  g.add(m);
  return m;
};
const lt = (s, c, i, d, x, y, z) => {
  const l = new T.PointLight(c, i, d);
  l.position.set(x, y, z);
  s.add(l);
  return l;
};
const hots = [];
function hs(g, x, y, z, t) {
  const m = new T.Mesh(
    new T.SphereGeometry(0.11, 16, 12),
    new T.MeshBasicMaterial({ color: 0xd9993a }),
  );
  m.position.set(x, y, z);
  m.userData.i = t;
  g.add(m);
  hots.push(m);
}
function pl(g, x, z, k) {
  cy(g, 0.18 * k, 0.3 * k, 0xb5532f, x, 0.15 * k, z);
  for (let i = 0; i < 6; i++) {
    const a = i * 1.05,
      l = new T.Mesh(new T.ConeGeometry(0.08 * k, 0.9 * k, 6), M(0x2f6b3a));
    l.position.set(
      x + Math.cos(a) * 0.12 * k,
      0.7 * k,
      z + Math.sin(a) * 0.12 * k,
    );
    l.rotation.set(Math.sin(a) * 0.5, 0, -Math.cos(a) * 0.5);
    g.add(l);
  }
}

function home(s, o) {
  o.d = 15;
  o.sw = 0.5;
  o.th = 0.45;
  o.ph = 1.2;
  o.look = 1.4;
  s.fog = new T.Fog(0x14171a, 16, 38);
  s.add(new T.AmbientLight(0x6f7fa0, 0.55));
  const dl = new T.DirectionalLight(0x9fb4ff, 0.5);
  dl.position.set(-5, 8, 6);
  s.add(dl);
  const g = new T.Group();
  s.add(g);
  bx(g, 60, 0.1, 60, 0x1a1d21, 0, -0.05, 0);
  bx(g, 14, 0.02, 8, 0x2a2f35, 0, 0.01, 5);
  bx(g, 7, 2.4, 3.6, 0x3a4048, 0, 1.2, 0);
  const rf = new T.Mesh(
    new T.ConeGeometry(4.6, 1.1, 4).rotateY(Math.PI / 4),
    M(0x191b1e),
  );
  rf.scale.set(1.15, 1, 0.62);
  rf.position.y = 2.95;
  g.add(rf);
  bx(g, 2.8, 0.3, 1.7, 0x8d7a68, 1.4, 0.15, 2.6);
  bx(g, 2.8, 0.15, 0.6, 0x8d7a68, 1.4, 0.08, 3.7);
  bx(g, 2.2, 1.9, 0.05, 0xfff0d0, 1.4, 1.25, 1.79, 0xffd9a0);
  bx(g, 0.9, 1.6, 0.06, 0x15171a, 1.4, 1.0, 1.83);
  [0.2, 2.6].forEach((x) => {
    bx(g, 0.5, 0.8, 0.5, 0x8a5a36, x, 0.7, 3.2);
    bx(g, 0.34, 1.5, 0.34, 0xf0eee9, x, 1.65, 3.2);
  });
  bx(g, 3.2, 0.4, 1.7, 0x1b1d20, 1.4, 2.55, 2.6);
  bx(g, 1, 0.9, 0.06, 0xffc477, -2.5, 1.3, 1.82, 0xffb454);
  bx(g, 1, 0.9, 0.06, 0xffc477, -0.9, 1.3, 1.82, 0xffb454);
  bx(g, 7, 0.06, 0.06, 0xffe2a8, 0, 2.36, 1.83, 0xffd48a);
  bx(g, 7, 1.8, 0.3, 0x2f343a, -6, 0.9, 5.2);
  [-5.2, 5].forEach((x) => {
    cy(g, 0.04, 4, 0x222222, x, 2, 4);
    bx(g, 0.6, 0.1, 0.3, 0xffffff, x, 4, 4, 0xffffff);
    lt(s, 0xdfe8ff, 0.7, 9, x, 3.8, 4);
  });
  pl(g, -0.3, 3.4, 1.3);
  pl(g, 3.7, 3.6, 1.4);
  pl(g, -3.4, 2.6, 1.2);
  lt(s, 0xffc477, 1.7, 9, 1.4, 1.8, 3.5);
  lt(s, 0xffb454, 1, 8, -1.7, 1.5, 3);
  const p = new Float32Array(900);
  for (let i = 0; i < 300; i++) {
    const a = Math.random() * 6.28,
      r = 25,
      h = 6 + Math.random() * 18;
    p.set([Math.cos(a) * r, h, Math.sin(a) * r - 8], i * 3);
  }
  const st = new T.BufferGeometry();
  st.setAttribute("position", new T.BufferAttribute(p, 3));
  const sp = new T.PointsMaterial({
    color: 0xffffff,
    size: 0.12,
    transparent: true,
  });
  s.add(new T.Points(st, sp));
  const em = [],
    pls = [];
  s.traverse((m) => {
    if (m.isMesh && m.material.emissive && m.material.emissive.getHex())
      em.push(m);
    if (m.isPointLight) pls.push([m, m.intensity]);
  });
  const amb = s.children.find((c) => c.isAmbientLight),
    sun = s.children.find((c) => c.isDirectionalLight),
    nt = new T.Color(0x151a21),
    dy = new T.Color(0x7fa3c7),
    a1 = new T.Color(0x6f7fa0),
    a2 = new T.Color(0xffffff),
    s1 = new T.Color(0x9fb4ff),
    s2 = new T.Color(0xfff4de);
  o.tod = (v) => {
    const k = v / 100;
    s.background = nt.clone().lerp(dy, k);
    s.fog.color.copy(s.background);
    amb.intensity = 0.55 + 0.6 * k;
    amb.color.copy(a1).lerp(a2, k);
    sun.intensity = 0.5 + 0.8 * k;
    sun.color.copy(s1).lerp(s2, k);
    sp.opacity = 1 - k;
    em.forEach((m) => (m.material.emissiveIntensity = 1 - 0.85 * k));
    pls.forEach(([l, b]) => (l.intensity = b * (1 - 0.8 * k)));
  };
  o.tod(0);
}
function room(s, o) {
  o.d = 9;
  o.sw = 0.55;
  o.th = 0.5;
  o.ph = 1.15;
  o.look = 1.1;
  o.lo = -0.3;
  o.hi = 1.3;
  const amb = new T.AmbientLight(0xfff1dc, 0.75);
  s.add(amb);
  const dl = new T.DirectionalLight(0xffffff, 0.5);
  dl.position.set(3, 6, 5);
  s.add(dl);
  const pl2 = lt(s, 0xffc477, 1.2, 12, 0, 2.5, 0);
  o.hots = hots;
  const g = new T.Group();
  s.add(g);
  bx(g, 7, 0.1, 6, 0x8b8378, 0, -0.05, 0);
  bx(g, 7, 2.8, 0.1, 0xf1ece4, 0, 1.4, -3);
  bx(g, 0.1, 2.8, 6, 0xf1ece4, -3.5, 1.4, 0);
  bx(g, 7, 0.08, 0.08, 0xffe2a8, 0, 2.75, -2.93, 0xffd48a);
  bx(g, 0.12, 2.6, 2.4, 0x6f665e, -3.4, 1.3, 0.2);
  const L = new T.Group(),
    B = new T.Group();
  g.add(L, B);
  B.visible = false;
  o.G = { L, B };
  bx(L, 3.4, 0.02, 2.4, 0xd9c9ad, 0, 0.02, 0.7);
  bx(L, 3.2, 0.25, 0.45, 0xc9a77a, 0, 1, -2.7);
  const tv = bx(L, 2.2, 1.25, 0.06, 0x0b0c0e, 0, 1.9, -2.9, 0x0a1424);
  o.light = (n) => {
    const P = {
      warm: [0.75, 1.2, 0xffc477, 0x0a1424],
      cinema: [0.1, 0.25, 0x7a96ff, 0x2a4a80],
      focus: [1.1, 1, 0xffffff, 0x0a1424],
    }[n];
    amb.intensity = P[0];
    pl2.intensity = P[1];
    pl2.color.set(P[2]);
    tv.material.emissive.set(P[3]);
  };
  bx(L, 2.7, 0.5, 1, 0x8c6e58, 0, 0.3, 1.9);
  bx(L, 2.7, 0.65, 0.25, 0x8c6e58, 0, 0.8, 2.3);
  bx(L, 0.25, 0.75, 1, 0x8c6e58, -1.45, 0.45, 1.9);
  bx(L, 0.25, 0.75, 1, 0x8c6e58, 1.45, 0.45, 1.9);
  bx(L, 0.55, 0.4, 0.14, 0xd9993a, -0.8, 0.7, 2.1).rotation.z = 0.2;
  bx(L, 0.55, 0.4, 0.14, 0xe8dcc5, 0.8, 0.7, 2.1).rotation.z = -0.2;
  cy(L, 0.6, 0.06, 0xf5f2ec, 0, 0.52, 0.7);
  cy(L, 0.42, 0.06, 0xf5f2ec, 0, 0.36, 0.7);
  cy(L, 0.03, 0.5, 0xc9a24a, 0, 0.25, 0.7);
  pl(L, 2.8, -2.4, 1.8);
  hs(
    L,
    0,
    2.7,
    -2.8,
    "55-inch smart TV with Netflix and DStv. Cast straight from your phone.",
  );
  hs(
    L,
    0,
    1.35,
    2.1,
    "Three-seat sofa in performance fabric. Easy to clean, comfortable for long evenings.",
  );
  hs(L, 0, 0.95, 0.7, "Nesting marble-top tables with gold-finish legs.");
  const X = 1.8;
  bx(B, 2.4, 0.45, 2.7, 0x1c1c1e, X, 0.25, -1.1);
  bx(B, 2.3, 0.28, 1.9, 0x8f8a86, X, 0.6, -0.8);
  bx(B, 0.8, 0.2, 0.4, 0xf3f1ee, X - 0.55, 0.78, -2.0);
  bx(B, 0.8, 0.2, 0.4, 0xf3f1ee, X + 0.55, 0.78, -2.0);
  bx(B, 2.7, 1.3, 0.12, 0x6f665e, X, 1.05, -2.45);
  bx(B, 3.2, 2.6, 0.7, 0xc9a77a, -1.8, 1.3, -2.6);
  [-2.9, -1.8, -0.7].forEach((x) =>
    bx(B, 0.02, 2.6, 0.02, 0x8a6a44, x, 1.3, -2.24),
  );
  bx(B, 0.9, 0.45, 0.9, 0xb59a82, -1.2, 0.3, 0.6);
  bx(B, 0.9, 0.7, 0.15, 0xb59a82, -1.2, 0.75, 0.15);
  bx(B, 0.6, 0.5, 0.6, 0xc9a77a, X + 1.6, 0.3, -1.9);
  bx(B, 0.3, 0.3, 0.3, 0xffe2a8, X + 1.6, 0.7, -1.9, 0xffd48a);
  hs(
    B,
    X,
    1.15,
    -0.8,
    "Queen bed, orthopaedic mattress, hotel-grade linen and blackout curtains.",
  );
  hs(
    B,
    -1.8,
    2.85,
    -2.2,
    "Full-height fitted wardrobe with an in-room safe and ironing board.",
  );
  hs(B, -1.2, 1.3, 0.5, "Reading chair by the window. Good light for work.");
}
function mk(id, build) {
  const c = document.getElementById(id),
    r = new T.WebGLRenderer({ canvas: c, antialias: true, alpha: true });
  r.setPixelRatio(
    Math.min(
      devicePixelRatio,
      matchMedia("(pointer:coarse)").matches ? 1.5 : 2,
    ),
  );
  c.tabIndex = 0;
  const s = new T.Scene(),
    k = new T.PerspectiveCamera(45, 1, 0.1, 100),
    o = { r, s, k, c, auto: true, lo: -9, hi: 9 };
  build(s, o);
  c.addEventListener("pointerdown", (e) => {
    o.dr = [e.clientX, e.clientY];
    o.moved = 0;
    o.tour = null;
    o.auto = false;
    c.setPointerCapture(e.pointerId);
    c.style.cursor = "grabbing";
  });
  c.addEventListener("pointermove", (e) => {
    if (!o.dr) return;
    o.moved += Math.abs(e.clientX - o.dr[0]) + Math.abs(e.clientY - o.dr[1]);
    o.th = Math.max(o.lo, Math.min(o.hi, o.th - (e.clientX - o.dr[0]) * 0.008));
    o.ph = Math.max(0.6, Math.min(1.5, o.ph - (e.clientY - o.dr[1]) * 0.006));
    o.dr = [e.clientX, e.clientY];
  });
  c.addEventListener("click", (e) => {
    if (!o.hots || o.moved > 5) return;
    const b = c.getBoundingClientRect(),
      v = new T.Vector2(
        ((e.clientX - b.left) / b.width) * 2 - 1,
        (-(e.clientY - b.top) / b.height) * 2 + 1,
      ),
      rc = new T.Raycaster();
    rc.setFromCamera(v, o.k);
    const i = rc.intersectObjects(o.hots.filter((x) => x.parent.visible))[0];
    if (i) $("#tip").textContent = i.object.userData.i;
  });
  const up = () => {
    o.dr = null;
    c.style.cursor = "grab";
  };
  c.addEventListener("pointerup", up);
  c.addEventListener("pointercancel", up);
  return o;
}
const WP = [
  [0.45, 1.2, 15, 1.4],
  [0.1, 1.38, 8, 1.3],
  [-0.6, 1.3, 9, 1.4],
  [0.45, 1.2, 15, 1.4],
];
function tick(t) {
  requestAnimationFrame(tick);
  const o = S[act];
  if (!o || document.hidden) return;
  const w = o.c.clientWidth,
    h = o.c.clientHeight;
  if (!w || !h) return;
  if (o.w !== w || o.h !== h) {
    o.w = w;
    o.h = h;
    o.r.setSize(w, h, false);
    o.k.aspect = w / h;
    o.k.updateProjectionMatrix();
  }
  if (o.tour) {
    const u = (t - o.tour.t0) / 4200,
      i = Math.floor(u);
    if (i >= WP.length - 1) {
      o.tour = null;
      o.auto = true;
      [o.th, o.ph, o.d, o.look] = WP[0];
    } else {
      const f = u - i,
        e = f * f * (3 - 2 * f),
        a = WP[i],
        b = WP[i + 1];
      [o.th, o.ph, o.d, o.look] = a.map((x, j) => x + (b[j] - x) * e);
    }
  }
  if (o.hots)
    o.hots.forEach((m, i) =>
      m.scale.setScalar(1 + 0.25 * Math.sin(t / 400 + i)),
    );
  const th =
      o.th +
      (o.auto && !matchMedia("(prefers-reduced-motion:reduce)").matches
        ? Math.sin(t / 3500) * o.sw
        : 0),
    R = o.d * Math.max(1, 1.15 / (w / h));
  o.k.position.set(
    Math.sin(th) * Math.sin(o.ph) * R,
    Math.cos(o.ph) * R,
    Math.cos(th) * Math.sin(o.ph) * R,
  );
  o.k.lookAt(0, o.look, 0);
  o.r.render(o.s, o.k);
}
function route() {
  const h = location.hash.slice(2) || "home",
    p = ["home", "suites", "book"].includes(h) ? h : "home";
  act = p;
  document
    .querySelectorAll(".pg")
    .forEach((e) => (e.hidden = e.id !== "pg-" + p));
  document
    .querySelectorAll("nav a")
    .forEach((a) => a.classList.toggle("on", a.dataset.p === p));
  scrollTo(0, 0);
  try {
    if (T) {
      if (p === "home" && !S.home) S.home = mk("c-home", home);
      if (p === "suites" && !S.suites) S.suites = mk("c-room", room);
    }
  } catch (e) {
    console.error(e);
  }
}
document.querySelectorAll(".tabs button").forEach(
  (b) =>
    (b.onclick = () => {
      const k = b.dataset.v ? "v" : "l",
        o = S.suites;
      document
        .querySelectorAll(".tabs [data-" + k + "]")
        .forEach((x) => x.setAttribute("aria-pressed", x === b));
      if (!o) return;
      if (k === "v") {
        o.G.L.visible = b.dataset.v === "L";
        o.G.B.visible = b.dataset.v === "B";
      } else o.light(b.dataset.l);
    }),
);
$("#tod").oninput = (e) => S.home && S.home.tod(+e.target.value);
$("#tour").onclick = () => {
  const o = S.home;
  if (o) {
    o.auto = false;
    o.tour = { t0: performance.now() };
  }
};
addEventListener("keydown", (e) => {
  const o = S[act];
  if (!o || document.activeElement !== o.c) return;
  const k = {
    ArrowLeft: [-0.1, 0],
    ArrowRight: [0.1, 0],
    ArrowUp: [0, -0.08],
    ArrowDown: [0, 0.08],
  }[e.key];
  if (!k) return;
  e.preventDefault();
  o.auto = false;
  o.tour = null;
  o.th = Math.max(o.lo, Math.min(o.hi, o.th + k[0]));
  o.ph = Math.max(0.6, Math.min(1.5, o.ph + k[1]));
});
const RATE = { Studio: 55000, "One-bed": 85000, "Two-bed": 120000 };
function est() {
  const f = new FormData($("#bf")),
    n = Math.round((new Date(f.get("b")) - new Date(f.get("a"))) / 864e5),
    r = RATE[f.get("s")],
    el = $("#est");
  el.textContent = !r
    ? "Long stays are priced monthly. Send your dates and we will quote you."
    : n > 0
      ? n +
        " night" +
        (n > 1 ? "s" : "") +
        " at ₦" +
        r.toLocaleString("en-NG") +
        " is about ₦" +
        (n * r).toLocaleString("en-NG") +
        ". The final price is confirmed on WhatsApp."
      : "Choose your dates to see an estimate.";
  return el.textContent;
}
$("#bf").oninput = est;
const td = new Date().toISOString().slice(0, 10);
document.querySelectorAll("#bf [type=date]").forEach((i) => (i.min = td));
$("#bf").onsubmit = (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const m = `Hello Halcyon Court, I'd like to book the ${f.get("s")} from ${f.get("a")} to ${f.get("b")} for ${f.get("g")} guest(s). Name: ${f.get("n")}. ${est()}`;
  window.open(
    "https://wa.me/2340000000000?text=" + encodeURIComponent(m),
    "_blank",
  );
};
if (matchMedia("(pointer:coarse)").matches)
  $("#tip").textContent =
    "Tap the amber points to inspect the room. Drag to look around.";
addEventListener("hashchange", route);
route();
requestAnimationFrame(tick);
