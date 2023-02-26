// priority: 1

ServerEvents.recipes((event) => {
    const blacklist = [
        "ae2:spatial_anchor",
        "ae2:matter_cannon",
        "ae2:tiny_tnt",
    ];

    event.recipes.createCrushing(
        "#forge:ores/certus_quartz",
        "1x ae2:certus_quartz_dust"
    );
    blacklist.forEach((item) => {
        event.remove({ output: item });
    })
});