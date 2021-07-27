import faker from "faker";

faker.seed(123);

export const data = [...Array(50)].map((item) => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  image: faker.random.arrayElement([
    "https://i.picsum.photos/id/506/200/300.webp?hmac=RXhjX7aE7NTK_Fg4krbdu-X946hyQoh9fzilqPz-IkQ",
    "https://i.picsum.photos/id/860/200/300.webp?hmac=tH6eyBl7Py2sUsIrOCkm13nm8FVMU4t8kNoano8nkeo",
    "https://i.picsum.photos/id/210/200/300.webp?hmac=gOH4U_2EXXVglVELON2cbzXtZX79I83N0mtD_LBthA8",
    "https://i.picsum.photos/id/239/200/300.webp?hmac=-a6oDOqKjVEl_Uturi1rOyotDvPN24SVK1x2wIvHyQk",
    "https://i.picsum.photos/id/18/200/300.webp?hmac=co0ptjkDMD4sXxpR1XUTE0muH_OKpwWiWO5XhVC1j_o",
    "https://i.picsum.photos/id/744/200/300.webp?hmac=uiiGrsKMxjdoOuIBmD_vsz--uboGDRO0ciK1-MJVrYQ",
    "https://i.picsum.photos/id/428/200/300.webp?hmac=kZ1eh2o8F803wLxrChBpTHSeI-OB9zovARaMDlOUIfc",
    "https://i.picsum.photos/id/494/200/300.webp?hmac=5rXJj_csCE5nqO63TKMTA6vGdppUThXNlfY2odYi0cI",
    "https://i.picsum.photos/id/448/200/300.webp?hmac=RZWL1G_wFwwlmygs6puYc_FBs_RQPm3RTuKnXQ2PrWM",
    "https://i.picsum.photos/id/1035/200/300.webp?hmac=62yd9vUbysHVrQrIDziV_6DWBK4brMD6cwXdgkZsGqg",
  ]),
  price: faker.commerce.price(),
  inStock: faker.datatype.boolean(),
  fastDelivery: faker.datatype.boolean(),
  description: faker.random.words(2),
  discount: faker.random.arrayElement([10, 20, 30, 40, 50, 60, 70]),
  brand: faker.random.arrayElement(["Adidas", "Nike"]),
  category: faker.random.arrayElement([
    "Case Cover",
    "Football",
    "Goalie Gloves",
    "Jersey",
    "Shin Guards",
    "Shoes",
  ]),
}));
