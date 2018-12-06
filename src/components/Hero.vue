<template>
    <div>
        <div class="hero-wrap">
            <div class="d-none d-lg-block text-right">
                <ul class="social">
                    <li>
                        <img    src="@/assets/images/ic-mail.png"
                                srcset="@/assets/images/ic-mail.png 1x,
                                @/assets/images/ic-mail@2x.png 2x,
                                @/assets/images/ic-mail@3x.png 3x">
                    </li>
                    <li>
                        <img    src="@/assets/images/ic-twitter.png"
                                srcset="@/assets/images/ic-twitter.png 1x,
                                @/assets/images/ic-twitter@2x.png 2x,
                                @/assets/images/ic-twitter@3x.png 3x">
                    </li>
                </ul>
            </div>
            <div class="container">
                <div class="row">
                    <div class="d-none d-lg-inline offset-lg-1 col-lg-4">
                        <img    src="@/assets/images/desktop/iphones-final.png"
                                srcset="@/assets/images/desktop/iphones-final.png 1x,
                                @/assets/images/desktop/iphones-final@2x.png 2x,
                                @/assets/images/desktop/iphones-final@3x.png 3x">
                    </div>
                    <div class="hero-content
                        offset-sm-1 col-sm-10
                        offset-lg-1 col-lg-6
                        text-center text-lg-left">
                        <div class="w-100 mb-5 mb-sm-4">
                            <img class="logo" src="@/assets/images/contoso.svg">
                        </div>
                        <div class="w-100 d-block d-lg-none mb-4">
                            <img    src="@/assets/images/mobile/phones-mobile.png"
                                    srcset="@/assets/images/mobile/phones-mobile.png 1x,
                                    @/assets/images/mobile/phones-mobile@2x.png 2x,
                                    @/assets/images/mobile/phones-mobile@3x.png 3x">
                        </div>
                        <h3 class="white-two">
                            The best of Slack & WhatsApp combined and built in Office 365
                        </h3>
                        <h4 class="white-87 mb-4 mb-sm-5">
                            Get early access to Contoso,
                            the new enterprise messaging app for modern team communication
                        </h4>
                        <input type="email"
                                name="email"
                                id="email"
                                placeholder="Your O365 email"
                                class="input-with-button">
                        <button class="input-with-button">SEND</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
};
</script>
