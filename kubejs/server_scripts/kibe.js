// priority: 1

ServerEvents.recipes(event => {
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
    
    blacklist.forEach(item => {
        event.remove({ output: item });
    })
    colors.forEach(color => {
        event.remove({ output: `kibe:${color}_rune` });
    })

    event.shapeless("3x kibe:cursed_droplets", [
        "minecraft:ghast_tear",
        "3x minecraft:wither_rose"
    ]);
})