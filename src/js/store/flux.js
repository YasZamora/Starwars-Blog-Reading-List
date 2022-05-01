const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favoritos: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {

				//el (uid) es un parámetro		
			handlerFavoritos: (uid) => {
				//setStore guarda en la tienda//
				//se coloca [...store.favoritos, uid] porque se esta concatenando al atributo favoritos del store, el uid.
				const store = getStore();
				setStore({favoritos:[...store.favoritos,uid]})
			},
			deleteFavoritos: (index) => {
				const store = getStore();
				//splice elimina un elemento de un array, retornando el valor eliminado, 
				// en este caso arrayCopy es una copia del array favoritos
				const arrayCopy = [...store.favoritos]
				// a arrayCopy s ele aplica splice entregandole index, que es la posición del elemento que se debe elminar y el 1 significa que elimina sólo 1 elemento
				arrayCopy.splice(index,1)
				//luego con el set Store se le está diciendo que guarde en favoritos del store, el arrayCopy, que es favoritos menos el elemento eliminado.
				setStore({favoritos: arrayCopy})
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
