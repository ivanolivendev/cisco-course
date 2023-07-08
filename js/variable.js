let flowers = ["Rose", "Lility", "Tulip"];
let priceFlowers = [8, 10, 2];
let quantFlowers = [70, 50, 120];
let total;

for (x = 0; x < flowers.length; x++) {
    console.log(flowers[x] + " - unit price: " + priceFlowers[x] +
        " quantaty: " + quantFlowers[x] + ", value: " + priceFlowers[x] * quantFlowers[x]);
}