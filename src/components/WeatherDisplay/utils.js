export const getDegreesF = (degreesKelvin) => Math.round((9/5) * (degreesKelvin - 273) + 32);
export const getDegreesC = degreesKelvin => Math.round(degreesKelvin - 273.15);
