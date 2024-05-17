const products = [
  {
    id: "Basico001",
    name: "Linterna",
    description: "Linterna a pilas.",
    price: 30,
    stock: 50,
    category: "basicos",
    image: "/src/assets/flashlight.png",
  },
  {
    id: "Basico002",
    name: "Proyector D.O.T.S.",
    description: "Proyector D.O.T.S. de pared.",
    price: 65,
    stock: 50,
    category: "basicos",
    image: "/src/assets/dots.png",
  },
  {
    id: "Basico003",
    name: "Lector EMF",
    description: "Lector EMF K2",
    price: 45,
    stock: 50,
    category: "basicos",
    image: "/src/assets/emf.png",
  },
  {
    id: "Basico004",
    name: "Libro de escritura fantasma",
    description: "Libro de escritura fantasma, viene con lapicera de regalo.",
    price: 40,
    stock: 50,
    category: "basicos",
    image: "/src/assets/gw.png",
  },
  {
    id: "Basico005",
    name: "Spirit Box",
    description: "Spirit Box P-SB7T",
    price: 50,
    stock: 50,
    category: "basicos",
    image: "/src/assets/sb.png",
  },
  {
    id: "Basico006",
    name: "Termometro",
    description: "Termometro preciso.",
    price: 30,
    stock: 50,
    category: "basicos",
    image: "/src/assets/thermo.png",
  },
  {
    id: "Basico007",
    name: "Linterna Ultravioleta",
    description: "Linterna ultravioleta a pila",
    price: 35,
    stock: 50,
    category: "basicos",
    image: "/src/assets/uv.png",
  },
  {
    id: "Basico008",
    name: "Video Camara",
    description: "Video Camara 720p",
    price: 50,
    stock: 50,
    category: "basicos",
    image: "/src/assets/cam.png",
  },
  {
    id: "Extra001",
    name: "Crucifijo",
    description: "Crucifijo soporta dos usos",
    price: 30,
    stock: 50,
    category: "extras",
    image: "/src/assets/cruci.png",
  },
  {
    id: "Extra002",
    name: "Incienso",
    description: "Incienso",
    price: 15,
    stock: 50,
    category: "extras",
    image: "/src/assets/incense.png",
  },
  {
    id: "Extra003",
    name: "Sal",
    description: "Sal 1KG",
    price: 15,
    stock: 50,
    category: "extras",
    image: "/src/assets/salt.png",
  },
  {
    id: "Extra004",
    name: "Sensor de movimiento",
    description: "Sensor de movimiento, incluye gancho para pared.",
    price: 100,
    stock: 50,
    category: "extras",
    image: "/src/assets/motionsensor.png",
  },
];

//Obtener productos
const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
};

export default getProducts;
