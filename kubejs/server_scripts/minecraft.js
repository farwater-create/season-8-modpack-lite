// priority: 1
ServerEvents.recipes(event => {
    event.recipes.createCrushing("minecraft:blackstone", "minecraft:basalt");

    event.recipes.createCrushing(
        [
          "2x minecraft:cobblestone",
          "minecraft:redstone",
          Item.of("minecraft:redstone").withChance(0.5),
        ],
        "minecraft:redstone_ore"
      );

    event.recipes.createMixing("2x minecraft:coarse_dirt", [
    "minecraft:gravel",
    "minecraft:dirt",
    ]);

    event.recipes.createMixing(
        ["minecraft:dirt", Item.of("minecraft:flint").withChance(0.1)],
        "minecraft:coarse_dirt"
    );

    event.recipes
    .createMixing(
      "2x minecraft:moss_block",
      [Fluid.of("minecraft:water", 25), "minecraft:moss_block"],
    );

    event.recipes.createSplashing(
        ["minecraft:mossy_cobblestone"],
        ["minecraft:cobblestone"]
    );

    event.recipes.createCompacting("minecraft:cobbled_deepslate", [
        "9x minecraft:cobblestone",
        Fluid.of("minecraft:lava", 100),
      ]);
});
