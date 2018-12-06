<template>
    <div class="alert alert-danger text-dark" role="alert">
        <i class="fas fa-exclamation-circle"></i>
        {{text}}
    </div>
</template>

<script>
export default {
    props: ['msg'],
    computed: {
        text() {
            switch (this.msg) {
            case 'text':
                return 'Fill in the field';
            case 'textarea':
                return 'Fill in the field';
            case 'at least one':
                return 'Fill in at least one field';
            case 'multiple':
                return 'Fill in all the fields';
            case 'number':
                return 'Fill in the field with a number';
            case 'option':
                return 'Choose an option';
            case 'email':
                return 'Fill in the field with a valid Email';
            case 'url':
                return 'Fill in the field with a valid URL';
            case 'date':
                return 'Fill in the field with a valid date';
            case 'picture file type':
                return 'Upload a valid image file, the following types are valid : JPEG, JPG, PNG, GIF, BMP & WEBP';
            default:
                return this.msg;
            }
        },
    },
};
</script>
