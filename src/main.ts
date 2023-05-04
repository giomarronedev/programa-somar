import { createApp } from "vue";
import App from "./App.vue";
import router from './routes'

import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faAnglesDown, faArrowLeft, faEnvelope, faLocationDot, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faTwitter, faInstagram, faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(faUser, faArrowLeft, faLocationDot, faAnglesDown, faEnvelope, faPhone, faLinkedinIn, faTwitter, faInstagram, faFacebookF, faYoutube);

createApp(App)
.use(router)
.component("font-awesome-icon", FontAwesomeIcon)
.mount("#app");
