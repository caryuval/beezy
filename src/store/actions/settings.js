export default {
    settingsDelete({ commit, state, dispatch }, { name, id }) {
        dispatch('immitateAPI', {
            type: 'deleteListItem',
            name,
            id,
            showSuccessMsg: true,
            method: 'delete',
            msgName: 'settings item',
        });
    },
    settingsAdd({ commit, state, dispatch }, { name, data }) {
        dispatch('immitateAPI', {
            type: 'addListItem',
            name,
            data,
            showSuccessMsg: true,
            method: 'post',
            msgName: 'settings item',
        });
    },
    settingsEdit({ commit, state, dispatch }, { name, id, data }) {
        dispatch('immitateAPI', {
            type: 'editListItem',
            name,
            id,
            data,
            showSuccessMsg: true,
            method: 'put',
            msgName: 'settings item',
        });
    },
};
