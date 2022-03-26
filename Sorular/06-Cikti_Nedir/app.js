const bird = {
    size: "small"
};

const mouse = {
    name:"Mickey",
    small: true
};

console.log(mouse[bird.size]);
console.log(mouse[bird["size"]]);
console.log(mouse.bird.size);

