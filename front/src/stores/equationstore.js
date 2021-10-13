import { writable } from "svelte/store";

export const equation = writable([]);
const fetchEquation = async () => {
    // const url = `https://storage.googleapis.com/tfds-data/visualization/fig/mnist-3.0.1.png`;
    // const res = await fetch(url)
    // const res = 'mnist_list.gif'
    // const loadedEquation = {
    //         image: res
    //     };
    // const loadedEquation = [
    //     {src: "/0.png"},
    //     {src: "/1.png"},
    //     {src: "/2.png"},
    //     {src: "/3.png"},
    //     {src: "/4.png"},
    // ];
    const loadedEquation = []
    for (let i = 0; i < 4; i++) {
        console.log("/" + i + ".png")
        loadedEquation.push({src: "/" + i + ".png"});
    }
    equation.set(loadedEquation)
}
fetchEquation();
