// priority: 1

ServerEvents.recipes(event => {
    const blacklist = [
        "techreborn:chunk_loader",
        "techreborn:nuke"
    ];
    blacklist.forEach((item) => {
        event.remove({ output: item });
    })
})