
const buton = document.getElementById("gizle");
buton.addEventListener("click", gizle);

function gizle() {
  const gmnoprint0 = document.querySelectorAll(".gmnoprint")[0];
  const gmnoprint1 = document.querySelectorAll(".gmnoprint")[1];
  const gmstylecc1 = document.querySelectorAll(".gm-style-cc")[1];
  const gmstylecc2 = document.querySelectorAll(".gmnoprint.gm-style-cc")[0];
  const gm_control_active = document.querySelector(".gm-control-active");
  const gm_style_cc = document.querySelector(".gm-style-cc");
  const gm_svpc = document.querySelector(".gm-svpc");

  if (gmnoprint1.style.display != "none") {
    gmnoprint1.style.display = "none";
  }

  if (gm_control_active.style.display != "none") {
    gm_control_active.style.display = "none";
  }

  if (gm_style_cc.style.display != "none") {
    gm_style_cc.style.display = "none";
  }

  if (gm_svpc.style.display != "none") {
    gm_svpc.style.display = "none";
  }

  if (gmnoprint0.style.display != "none") {
    gmnoprint0.style.display = "none";
  }

  if (gmstylecc1.style.display != "none") {
    gmstylecc1.style.display = "none";
  }

  if (gmstylecc2.style.display != "none") {
    gmstylecc2.style.display = "none";
  }
}

const buton2 = document.getElementById("göster");
buton2.addEventListener("click", göster);

function göster() {
  const gmnoprint0 = document.querySelectorAll(".gmnoprint")[0];
  const gmnoprint1 = document.querySelectorAll(".gmnoprint")[1];
  const gm_control_active = document.querySelector(".gm-control-active");
  const gm_style_cc = document.querySelector(".gm-style-cc");
  const gmstylecc2 = document.querySelectorAll(".gmnoprint.gm-style-cc")[0];
  const gm_svpc = document.querySelector(".gm-svpc");
  const gmstylecc = document.querySelectorAll(".gm-style-cc")[1];

  if (gmnoprint1.style.display == "none") {
    gmnoprint1.style.display = "block";
  }

  if (gm_control_active.style.display == "none") {
    gm_control_active.style.display = "block";
  }

  if (gm_style_cc.style.display == "none") {
    gm_style_cc.style.display = "block";
  }

  if (gm_svpc.style.display == "none") {
    gm_svpc.style.display = "block";
  }

  if (gmnoprint0.style.display == "none") {
    gmnoprint0.style.display = "block";
  }

  if (gmstylecc.style.display == "none") {
    gmstylecc.style.display = "block";
  }

  if (gmstylecc2.style.display == "none") {
    gmstylecc2.style.display = "block";
  }
}