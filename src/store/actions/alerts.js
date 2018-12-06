import swal from 'sweetalert2';

export default {
    handleHttpSuccess({ commit, state, dispatch }, { method, name, customTitle }) {
        if (customTitle) {
            dispatch('alert', { type: 'success', title: customTitle });
            return;
        }
        let title = '';
        switch (method) {
        case 'post':
            title = `The ${name} has been created correctly.`;
            break;
        case 'put':
            title = `The ${name} has been updated correctly.`;
            break;
        case 'delete':
            title = `The ${name} has been deleted correctly.`;
            break;
        default:
            console.error(`In handleHttpSuccess method, no such case ${method}`);
        }
        dispatch('alert', { type: 'success', title });
    },
    handleHttpError({ commit, state, dispatch }, { method, name, error }) {
        let text = '';
        switch (method) {
        case 'get':
            text = `Failed to retrieve the ${name}.`;
            break;
        case 'post':
            text = `Failed to create the ${name}.`;
            break;
        case 'put':
            text = `Failed to update the ${name}.`;
            break;
        case 'delete':
            text = `Failed to delete the ${name}.`;
            break;
        default:
            console.error(`In handleHttpError method, no such case ${method}`);
        }
        if (error.response.data.message) {
            text += ` Details: ${error.response.data.message}`;
        }
        dispatch('alert', { text });
    },
    alert({ commit, state, dispatch }, {
        type = 'error',
        title,
        text = '',
        confirmButtonText = 'Ok',
        cancelButtonText = 'Cancel',
    }) {
        title = title || 'There seems to be an error, please contact the IT team';
        const swalDefault = swal.mixin({
            title,
            text,
            buttonsStyling: true,
            confirmButtonText,
            cancelButtonText,
            backdrop: true,
        });
        switch (type) {
        case 'warning':
            swalDefault({
                type,
            });
            break;
        case 'error':
            swalDefault({
                type,
            });
            break;
        case 'success':
            swalDefault({
                type,
                showConfirmButton: false,
                timer: 2000,
                position: 'bottom-end',
            });
            break;
        case 'successConfirm':
            return swalDefault({
                type: 'success',
            });

        case 'confirm':
            return swalDefault({
                type: 'question',
                title: `Are you sure you want to ${title}`,
                showCancelButton: true,
            });
        case 'info':
            swalDefault({
                type,
            });
            break;
        default:
            console.error(`In alert method, no such case ${type}`);
        }
    },
};
