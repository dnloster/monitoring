<template>
    <div class="sidebar">
        <ul class="cd-accordion cd-accordion--animated margin-top-lg margin-bottom-lg">
            <li class="cd-accordion__item cd-accordion__item--has-children">
                <input id="group-1" class="cd-accordion__input" type="checkbox" checked name="group-1" />
                <label class="cd-accordion__label cd-accordion__label--icon-folder" for="group-1">
                    <span>{{ name }}</span>
                </label>

                <ul class="cd-accordion__sub cd-accordion__sub--l1">
                    <li v-for="group in groups" :key="group.id" class="cd-accordion__item cd-accordion__item--has-children">
                        <input :id="group.id" class="cd-accordion__input" type="checkbox" :name="group.id" />
                        <label class="cd-accordion__label cd-accordion__label--icon-folder" :for="group.id">
                            <font-awesome-icon icon="list" class="text-info mx-2" />
                            <span>{{ group.name }}</span>
                        </label>

                        <ul class="cd-accordion__sub cd-accordion__sub--l2">
                            <li v-for="item in group.children" :key="item.id" class="cd-accordion__item cd-accordion__item--has-children">
                                <input :id="item.id" class="cd-accordion__input" type="checkbox" :name="item.id" />
                                <label class="cd-accordion__label cd-accordion__label--icon-folder" :for="item.id" :class="item.children.length === 0 && 'no_arrow'">
                                    <font-awesome-icon icon="list" class="text-info mx-2" />
                                    <span>{{ item.name }}</span>
                                </label>

                                <ul class="cd-accordion__sub cd-accordion__sub--l3">
                                    <li v-for="subItem in item.children" :key="subItem.id" class="cd-accordion__item">
                                        <input :id="subItem.id" class="cd-accordion__input" type="checkbox" :name="subItem.id" />
                                        <label class="cd-accordion__label cd-accordion__label--icon-folder" :for="subItem.id" :class="subItem.children.length === 0 && 'no_arrow'">
                                            <font-awesome-icon icon="list" class="text-info mx-2" />
                                            <span>{{ subItem.name }}</span>
                                        </label>

                                        <ul class="cd-accordion__sub cd-accordion__sub--l4">
                                            <li v-for="subItem1 in subItem.children" :key="subItem1.id" class="cd-accordion__item">
                                                <input :id="subItem1.id" class="cd-accordion__input" type="checkbox" :name="subItem1.id" />
                                                <label class="cd-accordion__label cd-accordion__label--icon-folder" :for="subItem1.id" :class="subItem1.children.length === 0 && 'no_arrow'">
                                                    <font-awesome-icon icon="list" class="text-info mx-2" />
                                                    <span>{{ subItem1.name }}</span>
                                                </label>

                                                <ul class="cd-accordion__sub cd-accordion__sub--l5">
                                                    <li v-for="subItem2 in subItem1.children" :key="subItem2.id" class="cd-accordion__item">
                                                        <input :id="subItem2.id" class="cd-accordion__input" type="checkbox" :name="subItem2.id" />
                                                        <label class="cd-accordion__label cd-accordion__label--icon-folder" :for="subItem2.id" :class="subItem2.children.length === 0 && 'no_arrow'">
                                                            <font-awesome-icon icon="list" class="text-info mx-2" />
                                                            <span>{{ subItem2.name }}</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Sidebar",
    props: {
        data: Array,
    },
    setup(props) {
        // eslint-disable-next-line vue/no-setup-props-destructure
        const { data } = props;
        return data;
    },
    data() {
        return {
            id: this.data.id,
            name: this.data.name,
            groups: this.data.children
        };
    },
    computed: {
    },
    methods: {
        hasClass(el, className) {
            if (el.classList) {
                return el.classList.contains(className);
            } else {
                return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
            }
        },
        addClass(el, className) {
            let classList = className.split(" ");
            if (el.classList) {
                el.classList.add(classList[0]);
            } else if (!this.hasClass(el, classList[0])) {
                el.className += " " + classList[0];
            }
            if (classList.length > 1) {
                this.addClass(el, classList.slice(1).join(" "));
            }
        },
        removeClass(el, className) {
            let classList = className.split(" ");
            if (el.classList) {
                el.classList.remove(classList[0]);
            } else if (this.hasClass(el, classList[0])) {
                let reg = new RegExp("(\\s|^)" + classList[0] + "(\\s|$)");
                el.className = el.className.replace(reg, " ");
            }
            if (classList.length > 1) {
                this.removeClass(el, classList.slice(1).join(" "));
            }
        },
        setAttribute(el, attrs) {
            for (let key in attrs) {
                el.setAttribute(key, attrs[ key ]);
            }
        },
        setHeight(start, to, element, duration, cb) {
            let change = to - start;
            let currentTime = null;

            let animateHeight = function (timestamp) {
                if (!currentTime) {
                    currentTime = timestamp;
                }
                let progress = timestamp - currentTime;
                let val = parseInt((progress / duration) * change + start);
                element.setAttribute("style", "height:" + val + "px;");
                if (progress < duration) {
                    window.requestAnimationFrame(animateHeight);
                } else {
                    cb();
                }
            };

            //set the height of the element before starting animation -> fix bug on Safari
            element.setAttribute("style", "height:" + start + "px;");
            window.requestAnimationFrame(animateHeight);
        },
        animateAccordion(input) {
            const bool = input.checked;
            const dropdown = input.parentNode.getElementsByClassName("cd-accordion__sub")[0];

            this.addClass(dropdown, "cd-accordion__sub--is-visible"); // make sure subnav is visible while animating height

            const initHeight = !bool ? dropdown.offsetHeight : 0;
            const finalHeight = !bool ? 0 : dropdown.offsetHeight;

            this.setHeight(initHeight, finalHeight, dropdown, 200, () => {
                this.removeClass(dropdown, "cd-accordion__sub--is-visible");
                dropdown.removeAttribute("style");
            });
        }
    },
    // eslint-disable-next-line vue/order-in-components
    mounted() {
        const accordionsMenu = document.getElementsByClassName("cd-accordion--animated");
        if (accordionsMenu.length > 0 && window.requestAnimationFrame) {
            for (let i = 0; i < accordionsMenu.length; i++) {
                accordionsMenu[i].addEventListener("change", (event) => {
                    this.animateAccordion(event.target);
                });
            }
        }
    }
};
</script>

<style>
ul, li{
    list-style: none;
}
.cd-accordion {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 1rem;
    border-radius: 10px;
}
.cd-accordion--animated .cd-accordion__label::before {
    transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
    transition: transform 0.3s, -webkit-transform 0.3s;
}
.cd-accordion__sub {
    display: none;
    overflow: hidden;
}
.cd-accordion__sub--is-visible {
    display: block;
}
.cd-accordion__item {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.cd-accordion__input {
    position: absolute;
    opacity: 0;
}
.cd-accordion__label {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding: 0.5em 0;
    transition: all 0.5s
}
.cd-accordion__label span {
    -ms-flex-order: 3;
    order: 3;
}
.cd-accordion__label:hover {
    cursor: pointer;
    color: #0dcaf0;
}
.cd-accordion__label--icon-folder::before {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    background-image: url("../cd-icons.svg");
    background-repeat: no-repeat;
    margin-right: 0.25em;
}
.cd-accordion__label::after {
    -ms-flex-order: 2;
    order: 2;
}
.cd-accordion__label--icon-folder::before {
    background-position: 0 0;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
}
.cd-accordion__label--icon-folder::after {
    background-position: -16px 0;
}
.cd-accordion__label--icon-img::after {
    background-position: -48px 0;
}
.cd-accordion__input:checked + .cd-accordion__label::before {
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
}
.cd-accordion__input:checked + .cd-accordion__label::after {
    background-position: -32px 0;
}
.cd-accordion__input:checked ~ .cd-accordion__sub {
    display: block;
}
.no_arrow:after, .no_arrow:before{
    background-image: none !important;
}
</style>
