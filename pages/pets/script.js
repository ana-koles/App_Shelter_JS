window.addEventListener('DOMContentLoaded', () => {

    /* Burger */

     const body = document.body;
     const burger = document.querySelector('.burger');
     const burgerBackground = document.querySelector('.burger_background');
     const navMenu = document.querySelector('.nav-menu');
     const navMenuList = document.querySelector('.nav-menu_list');

     burger.addEventListener('click', () => {
         burger.classList.toggle('burger_active');
         navMenu.classList.toggle('nav-menu_active');
         burgerBackground.classList.toggle('burger_background_active');
         body.classList.toggle('body-noscroll');
     });

     const navMenuItemArray = document.querySelectorAll('.nav-menu_item');
     navMenuItemArray.forEach(item => {
         item.addEventListener('click', closeMenu);
         });


     function closeMenu(event) {
         navMenu.classList.remove('nav-menu_active');
         burgerBackground.classList.remove('burger_background_active');
         body.classList.remove('body-noscroll');
         burger.classList.remove('burger_active');
     }

     burgerBackground.addEventListener('click', closeMenu);
     navMenuList.addEventListener('click', closeMenu);

      /* Creating pet cards */

    const petsCardsContentArray = [
        {
          id: 0,
          name: "Jennifer",
          img: "../../assets/images/jennifer.png",
          type: "Dog",
          breed: "Labrador",
          description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
          age: "2 months",
          inoculations: ["none"],
          diseases: ["none"],
          parasites: ["none"]
        },
        {
            id: 1,
          name: "Sophia",
          img: "../../assets/images/sophia.png",
          type: "Dog",
          breed: "Shih tzu",
          description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
          age: "1 month",
          inoculations: ["parvovirus"],
          diseases: ["none"],
          parasites: ["none"]
        },
        {
            id: 2,
          name: "Woody",
          img: "../../assets/images/woody.png",
          type: "Dog",
          breed: "Golden Retriever",
          description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
          age: "3 years 6 months",
          inoculations: ["adenovirus", "distemper"],
          diseases: ["right back leg mobility reduced"],
          parasites: ["none"]
        },
        {
            id: 3,
          name: "Scarlett",
          img: "../../assets/images/scarlett.png",
          type: "Dog",
          breed: "Jack Russell Terrier",
          description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
          age: "3 months",
          inoculations: ["parainfluenza"],
          diseases: ["none"],
          parasites: ["none"]
        },
        {
            id: 4,
          name: "Katrine",
          img: "../../assets/images/katrine.png",
          type: "Cat",
          breed: "British Shorthair",
          description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
          age: "6 months",
          inoculations: ["panleukopenia"],
          diseases: ["none"],
          parasites: ["none"]
        },
        {
            id: 5,
          name: "Timmy",
          img: "../../assets/images/timmy.png",
          type: "Cat",
          breed: "British Shorthair",
          description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
          age: "2 years 3 months",
          inoculations: ["calicivirus", "viral rhinotracheitis"],
          diseases: ["kidney stones"],
          parasites: ["none"]
        },
        {
            id: 6,
          name: "Freddie",
          img: "../../assets/images/freddie.png",
          type: "Cat",
          breed: "British Shorthair",
          description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
          age: "2 months",
          inoculations: ["rabies"],
          diseases: ["none"],
          parasites: ["none"]
        },
        {
          id: 7,
          name: "Charly",
          img: "../../assets/images/charly.png",
          type: "Dog",
          breed: "Jack Russell Terrier",
          description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
          age: "8 years",
          inoculations: ["bordetella bronchiseptica", "leptospirosis"],
          diseases: ["deafness", "blindness"],
          parasites: ["lice", "fleas"]
        }
      ];

    function createPetsCard(id) {
        return `
            <div class="card-pet" id=${id}>
                        <img src=${petsCardsContentArray[id].img} alt=${petsCardsContentArray[id].name}>
                        <p>${petsCardsContentArray[id].name}</p>
                        <button type="button" class="card-button">Learn more</button>
            </div>
        `
    }

    let generalCardArray = new Array();

    function creatCardArray () {
        let array = new Array();

        if (viewForm() === "desktop") {
            for (let i = 1; i <= 6; i++) {
                array = new Array();
                for (let j = 0; j < petsCardsContentArray.length; j++) {
                     array.push(petsCardsContentArray[Math.floor(Math.random() * petsCardsContentArray.length)].id);
                }
                deleteDuplicates(array);
                generalCardArray.push(array);
            }

        } else if (viewForm() === "netbook") {
           let num;
            for (let i = 1; i <= 8; i++) {
                array = new Array();
                for (let j = 0; j < 6; j++) {
                    while (true) {
                        num = petsCardsContentArray[Math.floor(Math.random() * petsCardsContentArray.length)].id;
                        if ((findDublicate(num, array) === false) && (isCountElementExceeded(num) === false)) {
                            if ((j < 2) && findDublicate(num, generalCardArray[i -1]) === false) {
                                array.push(num);
                                break;
                            } else if (j >= 2) {
                                array.push(num);
                                break;
                            }
                        }
                    }
                    repeatArray[num] = repeatArray[num] + 1;
                }
                generalCardArray.push(array);
            }
            return generalCardArray;
        }
    }

    function deleteDuplicates(array) {
        for (let i = 0; i < array.length; i++) {
            for (let j = (i+1); j < array.length; j++) {
                if (array[i] === array[j]) {
                    let randomId = Math.floor(Math.random() * petsCardsContentArray.length);
                    array[j] = petsCardsContentArray[randomId].id;
                    i = -1;
                    break;
                }
            }
        }
    }

    function findDublicate(num, array) {
        if (!array) {
            return false;
        }
        for (let i = 0; i < array.length; i++) {
            if (num === array[i]) {
                return true;
            }
        } return false;
    }


    let repeatArray = new Array(8).fill(0); // массив, где хранится кол-во раз повторений

    function isCountElementExceeded(num) {
        if (repeatArray[num] > 6) {
            return true;
        } return false;
    }


   creatCardArray();

    const petCardsWrapper = document.querySelector('.main-section_cards');

    let  petsCardsContent;
    for (let i = 0; i < generalCardArray.length; i++) {
        petsCardsContent = generalCardArray[i].map(card => {
                return createPetsCard(card);
            }).join('');
        let petCardPageContent = document.createElement('div');
        petCardPageContent.setAttribute('id', [i + 10]);
        petCardPageContent.innerHTML = petsCardsContent;
        petCardsWrapper.appendChild(petCardPageContent);

    }


    let petCardsWrapperChildren = Array.from(petCardsWrapper.children);

    petCardsWrapperChildren.forEach(wrapper => {
        wrapper.classList.add('one-page-cards_wrapper');
    });

    let wrapperCardsArray = document.querySelectorAll('one-page-cards_wrapper');

    petCardsWrapperChildren[0].classList.add('page-active');


     /* Checking window size */

    function viewForm(){
        if (window.innerWidth > 1279) {
          return "desktop";
        } else if (window.innerWidth >= 768 )  {
          return "netbook";
        } else if (window.innerWidth < 768) {
            return "phone";
        }
      };

      console.log(viewForm());


     /* Popup */

    const popupHeader = document.querySelector('.popup-header');
    const popupHeaderText = document.querySelector('.popup-header_text');
    const popupTextContentOne = document.querySelector('.popup-text_content_one');
    const popupTextContentTwo = document.querySelector('.list_age');
    const popupTextContentThree = document.querySelector('.list_incoulations');
    const popupTextContentFour = document.querySelector('.list_deseases');
    const popupTextContentFive = document.querySelector('.list_parasite');
    const popupContainter = document.querySelector('.popup-content_container');
    const popupBackground = document.querySelector('.popup_background');
    const popupImgWrapper = document.querySelector('.popup-img_wrapper');
    const popupContentWrapper = document.querySelector('.popup-content_wrapper');
    const closePopupBtn = document.querySelector('.close-popup_btn');
    const popupContentTextList = document.querySelector('.popup-text_content_list');


    let petCardsArray = document.querySelectorAll('.card-pet');
    petCardsArray.forEach(card => {
        card.addEventListener('click', openPopup);
    });


    function openPopup(even) {
        let card = event.target;
        let cardParent = card.parentElement;
        let cardParentdId = cardParent.getAttribute('id');
        let oCard = getCardObject(cardParentdId);

        popupHeader.textContent = oCard.name;
        popupHeaderText.innerHTML = oCard.type + " - " + oCard.breed;
        popupTextContentOne.innerHTML = oCard.description;

        let AgeTextNode = document.createTextNode(oCard.age);
        popupTextContentTwo.appendChild(AgeTextNode);

        let InoculationsTextNode = document.createTextNode(oCard.inoculations);
        popupTextContentThree.appendChild(InoculationsTextNode);

        let diseasesTextNode = document.createTextNode(oCard.diseases);
        popupTextContentFour.appendChild(diseasesTextNode);

        let parasitesTextNode = document.createTextNode(oCard.parasites);
        popupTextContentFive.appendChild(parasitesTextNode);


        if (viewForm() === "desktop" || viewForm() === "netbook") {
            document.querySelector(".popup-left_wrapper").classList.remove('hide');
            let popupImg = document.createElement('img');
            popupImg.src = oCard.img;
            popupImgWrapper.appendChild(popupImg);
        }  else if(viewForm() === "phone"){
            document.querySelector(".popup-left_wrapper").classList.add('hide');
        }

        popupContainter.classList.add('active');
        popupBackground.classList.add('active');
        body.classList.add("body-noscroll");

        placeCloseButton(popupContentWrapper, closePopupBtn);

    }

    function getCardObject(cardId) {
        for (let i = 0; i < petsCardsContentArray.length; i++) {
            if (cardId == petsCardsContentArray[i].id) {
                return petsCardsContentArray[i];
            }
        }
    }

    function placeCloseButton(text, button) {

        if (viewForm() === "phone"){
            let textCoords = text.getBoundingClientRect();
            button.style.left = text.offsetWidth - 20 + "px";
            button.style.top = -button.clientHeight -  2 + "px";
        } else {

        let textCoords = text.getBoundingClientRect();
        button.style.left = text.offsetWidth + "px";
        button.style.top = -button.clientHeight + "px";
        }
    }

    /* close popup */

    closePopupBtn.addEventListener('click', closePopup);
    popupBackground.addEventListener('click', closePopup);


    function closePopup() {
        popupContainter.classList.remove('active');
        popupBackground.classList.remove('active');
        popupImgWrapper.innerHTML = '';

        const textList = document.querySelectorAll('.list_text');
        textList.forEach(list => {
            list.innerHTML = '';
        });


        body.classList.remove("body-noscroll");
    }


    /* Pagination */

    const nextPageButton = document.querySelector('.link_next-page');
    const petCardsWrapperArrays = document.querySelectorAll('.one-page-cards_wrapper');
    const previousPageButton = document.querySelector('.link_previous-page');
    const firstPageButton = document.querySelector('.link_first-page');
    const lastPageButton = document.querySelector('.link_last-page');


    previousPageButton.classList.add('disabled');
    firstPageButton.classList.add('disabled');

    let offset = 0;

     /* Next page pagination */

    nextPageButton.addEventListener('click', moveNextPage);

    function moveNextPage(event) {
        let currentPage = petCardsWrapper.querySelector('.page-active');
        let currentPageId = +currentPage.id;


        if (viewForm() === "desktop") {
                offset += 1200;
                if (offset > 6000) {
                    offset = 6000;
                }
            }

        if (viewForm() === "netbook") {
                offset += 720;
                if (offset > 5040) {
                    offset = 5040;
                }
            }

            petCardsWrapper.style.left = -offset + 'px';

            let nextPageId = currentPageId + 1;
            let nextPage = petCardsWrapper.querySelector(`[id = "${nextPageId}"]`);

            if ((currentPageId - 10 + 2) === petCardsWrapperArrays.length) {
                currentPage.classList.remove('page-active');
                nextPage.classList.add('page-active');
                nextPageButton.classList.add('disabled');
                lastPageButton.classList.add('disabled');
                drawCurrentPageButton (nextPageId);

            } else {
                nextPageButton.classList.remove('disabled');
                currentPage.classList.remove('page-active');
                nextPage.classList.add('page-active');
                previousPageButton.classList.remove('disabled');
                firstPageButton.classList.remove('disabled');
                drawCurrentPageButton (nextPageId);
            }
         }



    /* Previous page pagination  */

    previousPageButton.addEventListener('click', movePreviousPage);

    function movePreviousPage(event) {
        let currentPage = petCardsWrapper.querySelector('.page-active');
        let currentPageId = +currentPage.id;
        lastPageButton.classList.remove('disabled');
        nextPageButton.classList.remove('disabled');

        if (viewForm() === "desktop") {
            offset -= 1200;
            if (offset < 0) {
                offset = 0;
            }
        }

        if (viewForm() === "netbook") {
            offset -= 720;
            if (offset < 0) {
                offset = 0;
            }
        }


            petCardsWrapper.style.left = -offset + 'px';

            let previousPageId = currentPageId - 1;
            let previousPage = petCardsWrapper.querySelector(`[id = "${previousPageId}"]`);

            if ((currentPageId - 10) === 1) {
                currentPage.classList.remove('page-active');
                previousPage.classList.add('page-active');


                previousPageButton.classList.add('disabled');
                firstPageButton.classList.add('disabled');
                drawCurrentPageButton (previousPageId);

            } else {
                previousPageButton.classList.remove('disabled');
                currentPage.classList.remove('page-active');
                previousPage.classList.add('page-active');
                drawCurrentPageButton (previousPageId);
            }
    };

    /* First page pagination */

    const firstPageId = petCardsWrapperArrays[0].id;

    firstPageButton.addEventListener('click', moveFirstPage);

    function moveFirstPage(event) {
        offset = 0;
        petCardsWrapper.style.left = offset + 'px';
        firstPageButton.classList.add('disabled');
        previousPageButton.classList.add('disabled');

        drawCurrentPageButton (firstPageId);

        let activePage = document.querySelector('.page-active');
        activePage.classList.remove('page-active');
        let firstPage = petCardsWrapperArrays[0];
        firstPage.classList.add('page-active');
        lastPageButton.classList.remove('disabled');
        nextPageButton.classList.remove('disabled');

    }

       /* Last page pagination */

    const lastPageId = petCardsWrapperArrays[petCardsWrapperArrays.length - 1].id;

    lastPageButton.addEventListener('click', moveLastPage);

    function moveLastPage (event) {
        if (viewForm() === "desktop") {
            offset = 6000;
        }

        if (viewForm() === "netbook") {
            offset = 5760;
        }

            petCardsWrapper.style.left = -offset + 'px';
            lastPageButton.classList.add('disabled');
            nextPageButton.classList.add('disabled');
            drawCurrentPageButton (lastPageId);

            let activePage = document.querySelector('.page-active');
            activePage.classList.remove('page-active');
            let lastPage = petCardsWrapperArrays[petCardsWrapperArrays.length - 1];
            lastPage.classList.add('page-active');
            firstPageButton.classList.remove('disabled');
            previousPageButton.classList.remove('disabled');
    }


    function drawCurrentPageButton (activePageId) {
        document.querySelector('.link_current-page').innerHTML = activePageId - 9;
    }


});