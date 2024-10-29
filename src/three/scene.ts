import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Object3D,
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
} from "three";

import { useCursor } from "../utils/calcCursor";

const { calcXAxis, leftOrRight } = useCursor();

export class Logic {
  scene: Scene;
  renderer: WebGLRenderer;
  camera: PerspectiveCamera;
  mesh: Object3D;
  midHeight: number;
  midWidth: number;
  xPos: number;

  constructor(ref: HTMLElement) {
    this.xPos = 0;
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight
    );
    this.camera.position.set(0, 0.5, 10);

    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.setClearColor(0, 0);
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new BoxGeometry(5, 0.5, 7);
    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new Mesh(geometry, material);
    this.mesh = cube;
    this.mesh.rotateX(0.3);

    this.scene.add(this.mesh);

    window.addEventListener("mousemove", (e) => {
      this.xPos = e.clientX;
      calcXAxis(this.xPos);
      this.move();
    });

    ref.appendChild(this.renderer.domElement);

    this.midHeight = window.innerHeight / 2;
    this.midWidth = window.innerWidth / 2;

    this.tick();
  }

  tick() {
    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(() => {
      this.tick();
    });
  }

  move() {
    if (leftOrRight.value === 'd') {
      this.mesh.rotateY(0.01);
    } else if (leftOrRight.value === 'g') {
      this.mesh.rotateY(-0.01);
    }
  }

  moveOnClick() {
    this.mesh.rotateY(Math.PI / 2);
  }
}
