// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')
const colors = [
    "white",
    "orange",
    "magenta",
    "light_blue",
    "yellow",
    "lime",
    "pink",
    "gray",
    "light_gray",
    "cyan",
    "blue",
    "purple",
    "green",
    "brown",
    "red",
    "black"
];

const blacklist = [
    "kibe:entangled_chest",
    "kibe:entangled_bag",
    "kibe:slime_sling",
    "kibe:entangled_tank",
    "kibe:entangled_bucket",
    "kibe:chunk_loader"
];

REIEvents.hide(event => {
    blacklist.forEach(item => {
        event.hide(item);
    });
    colors.forEach(color => {
        event.hide(`${color}_rune`);
    });
})