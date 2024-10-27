// services/cmsService.js

/**
 * Datos Navbar.
 */
export async function getNavbarData() {
  return {
    logoUrl: "https://i.postimg.cc/DznMTQSV/6066b025360d7867b0b6bea116b9d7ef.png",
    phoneNumber: "+591 69440643",
  };
}

/**
 * Imagen Hero.
 */
export async function getHeroImage() {
  return {
    heroImageUrl: "https://i.postimg.cc/qq7bCmpy/hero-1.png",
  };
}

/**
 * Imágenes de la Sección 1.
 */
export async function getImagesSection1() {
  return [
    "https://i.postimg.cc/sfnPfk2D/i1.jpg",
    "https://i.postimg.cc/3RbCZFBm/b7422e9e8bb1cd04e145a51993365b5f.png",
    "https://i.postimg.cc/3JVgm2ps/i3.png",
    "https://i.postimg.cc/4Nm6YWKv/i4.jpg",
  ];
}

/**
 * Imágenes de la Sección 2.
 */
export async function getImagesSection2() {
  return [
    "https://i.postimg.cc/sx2kV5w2/c.png",
    "https://i.postimg.cc/LXvdKxk7/d.jpg",
    "https://i.postimg.cc/sX3FNkW7/b.jpg",
    "https://i.postimg.cc/brFKddB9/a.jpg",
  ];
}

/**
 * Características con descripción.
 */
export function getFeatures() {
  return [
    { title: "Característica 1", description: "Descripción de la característica 1" },
    { title: "Característica 2", description: "Descripción de la característica 2" },
    { title: "Característica 3", description: "Descripción de la característica 3" },
    { title: "Característica 4", description: "Descripción de la característica 4" },
  ];
}
