(() => { "use strict";
const t = [[1, 0, 2],
        [1, 2, 0],
        [3, 2, 1],
        [5, 2, 3],
        [0, 2, 5],
        [1, 3, 4]],
    e = ["Top", "Front", "Right", "Back", "Left", "Bottom"],
    n = 768;
let a, o, c;
const s = ([t, e, c]) => {
    const s = new Uint8ClampedArray(2359296);
    for (let a = 0; a < s.length; a += 4) {
        const [o, d, r, i] = [a, a + 1, a + 2, a + 3], 
        m = a / 4, u = m % n, g = Math.floor(m / n),
        l = [0, u, g, 255, 255 - g, 255 - u];
        s[o] = l[t], 
        s[d] = l[e], 
        s[r] = l[c], 
        s[i] = 130
    }
    const d = new ImageData(s, n, n);
    o.putImageData(d, 0, 0);
    const r = new Image(n, n);
    return r.src = a.toDataURL("image/png"), 
    r};
    document.addEventListener("DOMContentLoaded", () => {
        (a = document.createElement("canvas")).setAttribute("width", "256"), a.setAttribute("height", "256"), o = a.getContext("2d"), c = document.getElementById("cube"), t.map(s).forEach((function(t, n) {
            t.classList.add("face-" + n), t.setAttribute("alt", "Cube Face " + e[n]), c.appendChild(t)
        }))
    }, !1)
})()