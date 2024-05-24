function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
loco();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  fondo_mycard/1.jpeg
  fondo_mycard/2.jpeg
  fondo_mycard/3.jpeg
  fondo_mycard/4.jpeg
  fondo_mycard/5.jpeg
  fondo_mycard/6.jpeg
  fondo_mycard/7.jpeg
  fondo_mycard/8.jpeg
  fondo_mycard/9.jpeg
  fondo_mycard/10.jpeg
  fondo_mycard/11.jpeg
  fondo_mycard/12.jpeg
  fondo_mycard/13.jpeg
  fondo_mycard/14.jpeg
  fondo_mycard/15.jpeg
  fondo_mycard/16.jpeg
  fondo_mycard/17.jpeg
  fondo_mycard/18.jpeg
  fondo_mycard/19.jpeg
  fondo_mycard/20.jpeg
  fondo_mycard/21.jpeg
  fondo_mycard/22.jpeg
  fondo_mycard/23.jpeg
  fondo_mycard/24.jpeg
  fondo_mycard/25.jpeg
  fondo_mycard/26.jpeg
  fondo_mycard/27.jpeg
  fondo_mycard/28.jpeg
  fondo_mycard/29.jpeg
  fondo_mycard/30.jpeg
  fondo_mycard/31.jpeg
  fondo_mycard/32.jpeg
  fondo_mycard/33.jpeg
  fondo_mycard/34.jpeg
  fondo_mycard/35.jpeg
  fondo_mycard/36.jpeg
  fondo_mycard/37.jpeg
  fondo_mycard/38.jpeg
  fondo_mycard/39.jpeg
  fondo_mycard/40.jpeg
  fondo_mycard/41.jpeg
  fondo_mycard/42.jpeg
  fondo_mycard/43.jpeg
  fondo_mycard/44.jpeg
  fondo_mycard/45.jpeg
  fondo_mycard/46.jpeg
  fondo_mycard/47.jpeg
  fondo_mycard/48.jpeg
  fondo_mycard/49.jpeg
  fondo_mycard/50.jpeg
  fondo_mycard/51.jpeg
  fondo_mycard/52.jpeg
  fondo_mycard/53.jpeg
  fondo_mycard/54.jpeg
  fondo_mycard/55.jpeg
  fondo_mycard/56.jpeg
  fondo_mycard/57.jpeg
  fondo_mycard/58.jpeg
  fondo_mycard/59.jpeg
  fondo_mycard/60.jpeg
  fondo_mycard/61.jpeg
  fondo_mycard/62.jpeg
  fondo_mycard/63.jpeg
  fondo_mycard/64.jpeg
  fondo_mycard/65.jpeg
  fondo_mycard/66.jpeg
  fondo_mycard/67.jpeg
  fondo_mycard/68.jpeg
  fondo_mycard/69.jpeg
  fondo_mycard/70.jpeg
  fondo_mycard/71.jpeg
  fondo_mycard/72.jpeg
  fondo_mycard/73.jpeg
  fondo_mycard/74.jpeg
  fondo_mycard/75.jpeg
  fondo_mycard/76.jpeg
  fondo_mycard/77.jpeg
  fondo_mycard/78.jpeg
  fondo_mycard/79.jpeg
  fondo_mycard/80.jpeg
  fondo_mycard/81.jpeg
  fondo_mycard/82.jpeg
  fondo_mycard/83.jpeg
  fondo_mycard/84.jpeg
  fondo_mycard/85.jpeg
  fondo_mycard/86.jpeg
  fondo_mycard/87.jpeg
  fondo_mycard/88.jpeg
  fondo_mycard/89.jpeg
  fondo_mycard/90.jpeg
  fondo_mycard/91.jpeg
  fondo_mycard/92.jpeg
  fondo_mycard/93.jpeg
  fondo_mycard/94.jpeg
  fondo_mycard/95.jpeg
  fondo_mycard/96.jpeg
  fondo_mycard/97.jpeg
  fondo_mycard/98.jpeg
  fondo_mycard/99.jpeg
  fondo_mycard/100.jpeg
  fondo_mycard/101.jpeg
  fondo_mycard/102.jpeg
  fondo_mycard/103.jpeg
  fondo_mycard/104.jpeg
  fondo_mycard/105.jpeg
  fondo_mycard/106.jpeg
  fondo_mycard/107.jpeg
  fondo_mycard/108.jpeg
  fondo_mycard/109.jpeg
  fondo_mycard/110.jpeg
  fondo_mycard/111.jpeg
  fondo_mycard/112.jpeg
  fondo_mycard/113.jpeg
  fondo_mycard/114.jpeg
  fondo_mycard/115.jpeg
  fondo_mycard/116.jpeg
  fondo_mycard/117.jpeg
  fondo_mycard/118.jpeg
  
 `;
  return data.split("\n")[index];
}

const frameCount = 118;


const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `300% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `300% top`,
});