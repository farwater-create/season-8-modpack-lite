// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

const blacklist = [
    "ae2:spatial_anchor",
    "ae2:matter_cannon",
    "ae2:tiny_tnt",
];

REIEvents.hide(event => {
    blacklist.forEach(item => {
        event.hide(item);
    });
})