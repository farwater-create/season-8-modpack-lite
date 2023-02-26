// priority: 1
ServerEvents.recipes((event) => {
    event.recipes.createCrushing(
        ["2x croptopia:caramel"],
        "create_confectionery:bar_of_caramel"
    );
})
