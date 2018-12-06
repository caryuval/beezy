import books from '@/assets/books.json';
import genres from '@/assets/genres.json';

export default {
    state: {
        lists: {
            books: [],
            genres: [],
        },
    },
    getters: {
        lists: state => state.lists,
    },
    mutations: {
        setList(state, { name, data }) {
            state.lists[name] = data;
        },
        deleteListItem(state, { name, id }) {
            const itemIndex = state.lists[name].findIndex(item => item.id === id);
            state.lists[name].splice(itemIndex, 1);
        },
        addListItem(state, { name, data }) {
            if (name === 'books') {
                data.genre = state.lists.genres.find(genre => genre.id === data.genre);
            }
            state.lists[name].push(data);
        },
        editListItem(state, { name, data, id }) {
            const itemIndex = state.lists[name].findIndex(item => item.id === id);
            if (name === 'books') {
                data.genre = state.lists.genres.find(genre => genre.id === data.genre);
            }
            state.lists[name].splice(itemIndex, 1, data);
        },
    },
    actions: {
        getBooks({ commit, dispatch, state }) {
            dispatch('immitateAPI', { type: 'setList', name: 'books', data: books });
        },
        getGenres({ commit, dispatch, state }) {
            dispatch('immitateAPI', { type: 'setList', name: 'genres', data: genres });
        },
    },
};
