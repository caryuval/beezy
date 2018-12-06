<template>
    <div>
        <header>
            <nav class="navbar navbar-dark bg-primary navbar-expand-lg">
                <router-link to="/" class="navbar-brand">
                    <img class="logo" src="@/assets/images/contoso.svg">
                </router-link>
                <button @click="showMobileMenu = !showMobileMenu"
                        class="navbar-toggler"
                        aria-controls="navbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                    <div :class="{'collapse' : !showMobileMenu}" class="navbar-collapse navbar-nav px-3 px-lg-0">
                        <ul class="navbar-nav pl-3 text-center">
                            <li class="nav-item">
                                <router-link to="/settings" class="nav-link">Settings</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/hero" class="nav-link">Hero</router-link>
                            </li>
                        </ul>
                    </div>
                </nav>
        </header>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showMobileMenu: false,
        };
    },
};
</script>
