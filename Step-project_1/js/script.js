
const chengeTabs = () => {
    const tabBtn = document.querySelectorAll(".button-item");
    const contentBtn = document.querySelectorAll(".tabs-item");

    tabBtn.forEach( item => {
        item.addEventListener("click", (event) => {
            let currenBtn = item;
            let btnId = currenBtn.getAttribute("data-tab");
            let currenTab = document.querySelector(btnId);

            tabBtn.forEach(item => {
                item.classList.remove("active")
            });
            contentBtn.forEach(item => {
                item.classList.remove("active")
            });

            currenBtn.classList.add("active");
            currenTab.classList.add("active");
        })
    })
}
chengeTabs();


const images = [
    [{
        data: 'web_design',
        src: './image/21ac8fda78c8f445f9b4c5ae5322a485.jpg'
        }, {
        data: 'landing_pages',
        src: './image/12671-dikaya_mestnost-otpusk-priroda-gory_pejzazh-pejzazhi_gor-550x310.jpg'
    },{
        data: 'landing_pages',
        src: './image/80493541_1281644acb_o 1.png'
    },{
        data: 'web_design',
        src: './image/111811_437_alt2_professiya-web-dizainer-min.jpg'
    },{
        data: 'worldpress',
        src: './image/1623337164_1-oir_mobi-p-puteshestvie-v-gori-priroda-krasivo-foto-1.jpg'
    },{
        data: 'worldpress',
        src: './image/1623337169_28-oir_mobi-p-puteshestvie-v-gori-priroda-krasivo-foto-33.jpg'
    },{
        data: 'landing_pages',
        src: './image/1623337178_6-oir_mobi-p-puteshestvie-v-gori-priroda-krasivo-foto-6 (1).jpg'
    },{
        data: 'web_design',
        src: './image/1649119482_3-vsegda-pomnim-com-p-puteshestviya-priroda-foto-5.jpg'
    },{
        data: 'worldpress',
        src: './image/camera-girl-mountains-tree.jpg'
    },{
        data: 'graphic_design',
        src: './image/images.jpg'
    },{
        data: 'graphic_design',
        src: './image/tmb_198883_6281.jpg'
    },{
        data: 'web_design',
        src: './image/в-пути.jpg'
    }],
    [{
        data: 'web_design',
        src: './image/96df420c83cf9c13a6fe94d7e08a6eb8.jpg'
    },{
        data: 'web_design',
        src: './image/1621477138_18-p-krasivii-dom-s-sadom-21.jpg'
    },{
        data: 'landing_pages',
        src: './image/20538-10874920.jpg'
    },{
        data: 'web_design',
        src: './image/shutterstock_605105897-e1534228891646.jpg'
    },{
        data: 'worldpress',
            src: './image/734ff7704bb7f905e7f9b5e927e592d6.jpg'
    },{
        data: 'worldpress',
        src: './image/2481516.jpg'
    },{
        data: 'landing_pages',
        src: './image/large_1698057.jpg'
    },{
        data: 'landing_pages',
        src: './image/tmb_177596_7091.jpg'
    },{
        data: 'worldpress',
        src: './image/klassicheskaja-shveicarija-66.jpg'
    },{
        data: 'graphic_design',
        src: './image/krasivye-kartinki-na-avu-1.jpg'
    },{
        data: 'graphic_design',
        src: './image/africa-2.jpg'
    },{
        data: 'worldpress',
        src: './image/1646166156_43-krot-info-p-smeshnie-korovi-smeshnie-foto-47.jpg'
}]
]

const galleryAddFilter = () => {
    let count = 0;
    const menuWorkingGlobal = document.querySelector(".section-working")

    const imgWrapper = document.querySelector(".section-grid")
    const buttons = document.querySelector(".buttons")
    const menuWrap = menuWorkingGlobal.querySelector(".menu-item")

    menuWrap.addEventListener("click", (event) => {
        let dataMenu = null;
        const listItem = menuWorkingGlobal.querySelectorAll(".grid-image")

        if (event.target.nodeName === "BUTTON"){
           dataMenu = event.target.getAttribute( 'data-menu');

        }
        let menuItems = document.querySelectorAll( '.list-item' );

        menuItems.forEach(item => {
            if (item.classList.contains("active")){
                item.classList.remove("active")
            }
        });

        if (!event.target.classList.contains("active")){
            event.target.classList.add("active")
        }

        listItem.forEach(item => {
            if (dataMenu !== item.getAttribute( 'data-gallery' ) && dataMenu !== 'all'){
                item.style.display = 'none'
            } else {
                item.style.display = 'block'
            }
        })
    })

    let scrollBy = () => {
        window.scrollBy({
            top:500,
            behavior: "smooth"
        })
    }
    buttons.addEventListener("click", () => {

        buttons.classList.add('loader');

        setTimeout(() => {
            buttons.classList.remove('loader');

            images[count].forEach(item => {
                imgWrapper.insertAdjacentHTML("beforeend", `
                 <div class="grid-image" data-gallery="${item.data}">
                     <img src="${item.src}" width="285px" height="206px" alt="photo">
                     <div class="item-description">
                          <img class="img-desc" src="./image/icon.png" alt="">
                          <h4 class="title-desc">creative design</h4>
                          <p class="text-desc">Web Design</p>
                     </div>
                 </div>
            `)
            })
            scrollBy()
            count++

            if ( count === images.length ){
                buttons.remove()
            }
        },2000)

    })
}
galleryAddFilter()



const Slider = () => {
    const swiper = new Swiper(".thumbs-slider", {
        // loop: true,
        spaceBetween: 38,
        slidesPerView: "auto",
        freeMode: true,
        watchSlidesProgress: true,
    });

    const swiperMain = new Swiper(".slider", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next ",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}
Slider()



const imageGallery = [
    {
        src: './image/1490Screenshot-2016-03-24-06.04.47.png'
    }, {
        src: './image/1240553015_snowboard_04.jpg'
    },{
        src: './image/1506645053_001.jpg'
    },{
        src: './image/1617052134_40-p-oboi-krasivie-vidi-prirodi-41.jpg'
    },{
        src: './image/1617236369_39-p-oboi-vershina-everesta-39.jpg'
    },{
        src: './image/1649122738_1-vsegda-pomnim-com-p-dzhungli-foto-prirodi-samie-krasivie-2.jpg'
    },{
        src: './image/5935035882c74.jpg'
    },{
        src: './image/foto-snezhki_1.jpg'
    },{
        src: './image/HD-wallpaper-mountain-cabin-usa-furniture-table-armchair-room-chimney.jpg'
    },{
        src: './image/snow-lights-gif-Favim.com-6594227.gif'
    },{
        src: './image/sunset-lake-reflection-sweden-sky-coast-boat-small.jpg'
    },{
        src: './image/дом-из-дерева-и-стекла.png'
    }
]

const gallaryImagesAdd = () => {
    let sectionGallery = document.querySelector(".section-gallery")
    let button = sectionGallery.querySelector(".button-footer")
    let mainGallery = sectionGallery.querySelector('.main-gallery')

    const addingPictures = () => {
        setTimeout(() => {
            imageGallery.forEach(item => {
                mainGallery.insertAdjacentHTML("beforeend",`
                <div class="section-gallery-add">
                     <img src="${item.src}" alt="image">
                   </div>
                `)
            })
            button.remove()
        },2000)
    }
    button.addEventListener("click", () => {
        addingPictures()
        button.classList.add('loader');

    })
}
gallaryImagesAdd()
