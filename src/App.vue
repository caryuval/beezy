<template>
    <div>
        <Loading :active="showLoader"
                :is-full-page="true"
                color="#f05638">
        </Loading>
        <SiteHeader></SiteHeader>
        <router-view/>
    </div>
</template>

<script>
import SiteHeader from '@/components/layout/SiteHeader.vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { mapState, mapActions } from 'vuex';

export default {
    components: {
        SiteHeader,
        Loading,
    },
    created() {
        this.loadEssentialAppData();
    },
    computed: {
        ...mapState(['showLoader']),
    },
    methods: {
        ...mapActions(['loadEssentialAppData']),
    },
};
</script>
