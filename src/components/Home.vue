<template>
    <main class="py-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-sm-8 col-md-4 form-group">
                    <label for="genre-filter" class="w-100 text-center">Filter by genre</label>
                    <select v-model="genreFilter"
                            @change="handleGenreFilter()"
                            name="genreFilter"
                            id="genre-filter"
                            class="form-control">
                        <option selected :value="null">All</option>
                        <option v-for="genre in lists.genres"
                                :key="genre.id"
                                :value="genre.id">
                            {{genre.name}}
                        </option>
                    </select>
                </div>
            </div>
            <div class="row justify-content-center">
                <div    v-for="book in booksCopy"
                        :key="book.title"
                        class="col-md-6 col-lg-5 text-center mb-5">
                    <h3> {{book.title}} </h3>
                    <img :src="book.image" :alt="book.title" class="mb-2 d-none d-sm-inline">
                    <h4 class="mb-2"> By {{book.author}} </h4>
                    <h4 class="mb-2"> {{book.genre.name}} </h4>
                    <h4 class="mb-2">{{book.price}}€</h4>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            genreFilter: null,
            booksCopy: [],
        };
    },
    computed: {
        ...mapGetters(['lists']),
    },
    watch: {
        'lists.books': {
            handler() {
                this.booksCopy = this.lists.books.slice();
                this.genreFilter = null;
            },
            deep: true,
            immediate: true,
        },
    },
    methods: {
        handleGenreFilter() {
            if (this.genreFilter === null) {
                this.booksCopy = this.lists.books.slice();
                return;
            }
            this.booksCopy = this.lists.books.filter(book => book.genre.id === this.genreFilter);
        },
    },
};
</script>
