import { Application } from '@splinetool/runtime';

(() => {
    // make sure you have a canvas in the body
    const canvas = document.querySelector(
        '[data-spline-canvas]',
    ) as HTMLCanvasElement;

    if (!canvas) {
        return;
    }

    // start the application and load the scene
    const spline = new Application(canvas);
    spline.load('https://prod.spline.design/TPnnDfQVG2ZGXn3B/scene.splinecode');
})();
