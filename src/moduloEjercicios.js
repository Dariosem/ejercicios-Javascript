import basededatos from './basededatos.js';


/**
 * Devuelve el promedio de anios de estreno de todas las peliculas de la base de datos.
 */
export const promedioAnioEstreno = () => {
  // Ejemplo de como accedo a datos dentro de la base de datos
  // console.log(basededatos.peliculas);
  var suma = 0;
  const peliculas = basededatos.peliculas;
  peliculas.forEach(item => {
      suma += item.anio;
  });
  const promedio = suma / peliculas.length;

  return promedio;
};

/**
* Devuelve la lista de peliculas con promedio de critica mayor al numero que llega
* por parametro.
* @param {number} promedio
  */
export const pelicuasConCriticaPromedioMayorA = (promedio) => {
    const peliculas = basededatos.peliculas;
    const calificaciones = basededatos.calificaciones;
    const prom = promedio;

    var respuesta = [];
    peliculas.forEach(pelicula => {
        var total = 0;
        var promedio = 0
        var calificacionPorPeli = calificaciones.filter(item => item.pelicula == pelicula.id );
       
        var califPromedio = promedioCalificaciones(calificacionPorPeli);
      
        if(califPromedio > prom){
            respuesta.push(pelicula.nombre);
        }

    });


    return respuesta;
};

const promedioCalificaciones = (calificaciones) => {
    var total = 0;
    calificaciones.forEach(item => {
        return total += item.puntuacion;
    })
    return total / calificaciones.length
}
 
/**
* Devuelve la lista de peliculas de un director
* @param {string} nombreDirector
*/
export const peliculasDeUnDirector = (nombreDirector) => {
    const peliculas = basededatos.peliculas;
    const directores = basededatos.directores;
    const director = directores.filter(item => item.nombre == nombreDirector)[0];

    return peliculas.filter(item => item.directores.includes(director.id)).map(item => item.nombre);
};

/**
* Devuelve el promdedio de critica segun el id de la pelicula.
* @param {number} peliculaId
*/
export const promedioDeCriticaBypeliculaId = (peliculaId) => {
    const calificaciones = basededatos.calificaciones.filter(item => item.pelicula == peliculaId);
    return promedioCalificaciones(calificaciones);
};

/**
 * Obtiene la lista de peliculas con alguna critica con
 * puntuacion excelente (critica >= 9).
 * En caso de no existir el criticas que cumplan, devolver un array vacio [].
 * Ejemplo del formato del resultado: 
 *  [
        {
            id: 1,
            nombre: 'Back to the Future',
            anio: 1985,
            direccionSetFilmacion: {
                calle: 'Av. Siempre viva',
                numero: 2043,
                pais: 'Colombia',
            },
            directores: [1],
            generos: [1, 2, 6]
        },
        {
            id: 2,
            nombre: 'Matrix',
            anio: 1999,
            direccionSetFilmacion: {
                calle: 'Av. Roca',
                numero: 3023,
                pais: 'Argentina'
            },
            directores: [2, 3],
            generos: [1, 2]
        },
    ],
 */
export const obtenerPeliculasConPuntuacionExcelente = () => {
    // Ejemplo de como accedo a datos dentro de la base de datos
    // console.log(basededatos.peliculas);
    return [];
};

/**
 * Devuelve informacion ampliada sobre una pelicula.
 * Si no existe la pelicula con dicho nombre, devolvemos undefined.
 * Ademas de devolver el objeto pelicula,
 * agregar la lista de criticas recibidas, junto con los datos del critico y su pais.
 * Tambien agrega informacion de los directores y generos a los que pertenece.
 * Ejemplo de formato del resultado para 'Indiana Jones y los cazadores del arca perdida':
 * {
            id: 3,
            nombre: 'Indiana Jones y los cazadores del arca perdida',
            anio: 2012,
            direccionSetFilmacion: {
                calle: 'Av. Roca',
                numero: 3023,
                pais: 'Camboya'
            },
            directores: [
                { id: 5, nombre: 'Steven Spielberg' },
                { id: 6, nombre: 'George Lucas' },
            ],
            generos: [
                { id: 2, nombre: 'Accion' },
                { id: 6, nombre: 'Aventura' },
            ],
            criticas: [
                { critico: 
                    { 
                        id: 3, 
                        nombre: 'Suzana Mendez',
                        edad: 33,
                        pais: 'Argentina'
                    }, 
                    puntuacion: 5 
                },
                { critico: 
                    { 
                        id: 2, 
                        nombre: 'Alina Robles',
                        edad: 21,
                        pais: 'Argentina'
                    }, 
                    puntuacion: 7
                },
            ]
        },
 * @param {string} nombrePelicula
 */
export const expandirInformacionPelicula = (nombrePelicula) => {
    return {};
};
