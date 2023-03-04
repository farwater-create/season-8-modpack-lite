// priority: 1

onEvent("recipes", (event) => {
  console.info("loading crushing recipes");
  event.recipes.createCrushing(
    [
      "2x minecraft:cobblestone",
      "minecraft:redstone",
      Item.of("minecraft:redstone").withChance(0.5),
    ],
    "minecraft:redstone_ore"
  );

  event.recipes.createCrushing("minecraft:blackstone", "minecraft:basalt");

  event.recipes.createCrushing(
    "#forge:ores/certus_quartz",
    "1x ae2:certus_quartz_dust"
  );

});
