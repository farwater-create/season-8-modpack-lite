// priority: 1
ServerEvents.recipes(event => {
    event.recipes
    .createMixing(
      "2x create:crimsite",
      ["minecraft:blackstone", "create:crimsite"]
    )
    .heated();

    event.recipes
        .createMixing(
        ["2x create:veridium"],
        ["minecraft:mossy_cobblestone", "create:veridium"]
        )
    .heated();

    event.recipes
    .createMixing(
      "create:ochrum",
      ["#forge:sandstone", "create:ochrum"]
    )
    .heated();

    event.recipes
    .createMixing(
      "create:asurine",
      ["minecraft:cobbled_deepslate", "create:asurine"]
    )
    .heated();

    event.recipes
    .createMixing(
      "2x minecraft:blackstone",
      ["minecraft:cobblestone", "minecraft:blackstone"]
    )
    .heated();

    event.shapeless("architects_palette:charcoal_block", [
      "9x minecraft:charcoal",
    ]);
  
    event.shapeless("9x minecraft:charcoal", [
      "architects_palette:charcoal_block",
    ]);
  
    event.shapeless("create:andesite_casing", [
      "#minecraft:logs",
      "create:andesite_alloy",
    ]);
  
    event.shapeless("create:brass_casing", [
      "#minecraft:logs",
      "#forge:plates/brass",
    ]);
  
    event.shapeless("create:copper_casing", [
      "#forge:stone",
      "#forge:plates/copper",
    ]);
  
    event.shapeless("create:refined_radiance_casing", [
      "#forge:glass/colorless",
      "create:refined_radiance",
    ]);
})