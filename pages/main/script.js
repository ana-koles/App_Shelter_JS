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

    const petsCardsArray = [
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

          /* Checking window size */

    function viewForm(){
        if (window.innerWidth > 1279) {
          return "desktop";
        } else if (window.innerWidth > 768 )  {
          return "netbook";
        } else if (window.innerWidth <= 768) {
            return "phone";
        }
      };

      //window.addEventListener('resize', viewForm);



/*       let petsCardsRandomArray = new Array();
      for (let i = 0; i <= petsCardsArray.length; i++) {
        petsCardsRandomArray[i] = petsCardsArray[Math.floor(Math.random() * petsCardsArray.length)].id;
      } */

    console.log(viewForm());

    let petsCardsRandomArray = new Array();

        if (viewForm() === "desktop") {
            for (let i = 0; i <= petsCardsArray.length; i++) {
            petsCardsRandomArray[i] = petsCardsArray[Math.floor(Math.random() * petsCardsArray.length)].id;
            }
      } else if(viewForm() === "netbook"){
            for (let i = 0; i < 6; i++) {
          petsCardsRandomArray[i] = petsCardsArray[Math.floor(Math.random() * petsCardsArray.length)].id;
        }
      } else if (viewForm() === "phone") {
            for (let i = 0; i < 3; i++) {
                petsCardsRandomArray[i] = petsCardsArray[Math.floor(Math.random() * petsCardsArray.length)].id;
                }
      }


    function createPetsCard (id){
        return `
            <div class="card-pet" id=${id}>
            <img src=${petsCardsArray[id].img} alt=${petsCardsArray[id].name}>
            <p class="card-name">${petsCardsArray[id].name}</p>
            <button type="button" class="card-button" onclick='location.href="#our-pets"'>Learn more</button>
            </div>`
    }


    const cardPetCarousel = document.querySelector('.carousel');
    const leftPetCardsWrapper = document.querySelector('.carousel_left-items');
    const activePetCardsWrapper = document.querySelector('.carousel_active-items');
    const rightPetCardsWrapper = document.querySelector('.carousel_right-items');



     /* checking dublicates in each group of cards */

    function deleteDuplicates(array) {
        for (let i = 0; i < array.length; i++) {
            for (let j = (i+1); j < array.length; j++) {
                if (array[i] === array[j]) {
                    let randomId = Math.floor(Math.random() * petsCardsArray.length);
                    array[j] = petsCardsArray[randomId].id;
                    i = -1;
                    break;
                }
            }
        }
    }


    let leftPetsCardsRandomArray;
    let activePetsCardsRandomArray;
    let rightPetCardsRandomArray;


    viewForm();
    window.addEventListener('resize', viewForm);

       if (viewForm() === "desktop") {
        leftPetsCardsRandomArray = petsCardsRandomArray.slice(0, 3);
        deleteDuplicates(leftPetsCardsRandomArray);

        activePetsCardsRandomArray = petsCardsRandomArray.slice(3, 6);
        deleteDuplicates(activePetsCardsRandomArray);

        rightPetCardsRandomArray = petsCardsRandomArray.slice(6);
        deleteDuplicates(rightPetCardsRandomArray);

    } else if(viewForm() === "netbook"){
        leftPetsCardsRandomArray = petsCardsRandomArray.slice(0, 2);
        deleteDuplicates(leftPetsCardsRandomArray);

        activePetsCardsRandomArray = petsCardsRandomArray.slice(2, 4);
        deleteDuplicates(activePetsCardsRandomArray);

        rightPetCardsRandomArray = petsCardsRandomArray.slice(4);
        deleteDuplicates(rightPetCardsRandomArray);
    } else if (viewForm() === "phone") {
        leftPetsCardsRandomArray = petsCardsRandomArray.slice(0, 1);
        deleteDuplicates(leftPetsCardsRandomArray);

        activePetsCardsRandomArray = petsCardsRandomArray.slice(1, 2);
        deleteDuplicates(activePetsCardsRandomArray);

        rightPetCardsRandomArray = petsCardsRandomArray.slice(2, 3);
        deleteDuplicates(rightPetCardsRandomArray);
    }




    // checking dublicates between the group of cards

    findDublicates(leftPetsCardsRandomArray, activePetsCardsRandomArray);
    findDublicates(rightPetCardsRandomArray, activePetsCardsRandomArray);

    function findInArrayByID(array, id) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === id) {
                return true;
            }
        }
        return false;
    }

    function findDublicates(sideArray, activeArray) {
        let randomId = 0;
        for (let i = 0; i < sideArray.length; i++) {
            if (findInArrayByID(activeArray,sideArray[i]) === true) {
                randomId = 0;
                while (true) {
                    randomId = Math.floor(Math.random() * petsCardsArray.length);
                    if (findInArrayByID(sideArray,randomId) === false &&
                        findInArrayByID(activeArray,randomId) === false) {
                        break;
                    }
                }
                sideArray[i] = petsCardsArray[randomId].id;
            }
        }

    }


    const petCardsLeft = leftPetsCardsRandomArray.map(card => {
        return createPetsCard(card);
    }).join("");
    leftPetCardsWrapper.innerHTML = petCardsLeft;

    const petCardsActive = activePetsCardsRandomArray.map(card => {
        return createPetsCard(card);
    }).join("");
    activePetCardsWrapper.innerHTML = petCardsActive;


    const petCardsRight = rightPetCardsRandomArray.map(card => {
        return createPetsCard(card);
    }).join("");
    rightPetCardsWrapper.innerHTML = petCardsRight;



    /* carousel */

    const leftArrow = document.querySelector('.slider-left');
    const rightArrow = document.querySelector('.slider-right');

    leftArrow.addEventListener('click', moveCarouselLeft);

    function moveCarouselLeft(event) {
        cardPetCarousel.classList.add('transition-left');
        leftArrow.removeEventListener('click', moveCarouselLeft);
        rightArrow.removeEventListener('click', moveCarouselRight);
    };

    rightArrow.addEventListener('click', moveCarouselRight);

    function moveCarouselRight(event) {
        cardPetCarousel.classList.add('transition-right');
        rightArrow.removeEventListener('click', moveCarouselRight);
        leftArrow.removeEventListener('click', moveCarouselLeft);
    };

    cardPetCarousel.addEventListener("animationend", (event) => {
        if (event.animationName === 'move-left') {
            cardPetCarousel.classList.remove('transition-left');

            let activePetCardsArray = activePetCardsWrapper.querySelectorAll('.card-pet');
            activePetCardsArray.forEach(card => {
                card.removeEventListener('click', openPopup);
            });

            activePetCardsWrapper.innerHTML = leftPetCardsWrapper.innerHTML;
            activePetsCardsRandomArray.length = 0;
            activePetsCardsRandomArray.push.apply(activePetsCardsRandomArray, leftPetsCardsRandomArray);
            let petCardsChanged = createPetCardsArrayRandomSmall(leftPetsCardsRandomArray);
            leftPetCardsWrapper.innerHTML = '';
            leftPetCardsWrapper.innerHTML = petCardsChanged;

            activePetCardsArray = activePetCardsWrapper.querySelectorAll('.card-pet');
            activePetCardsArray.forEach(card => {
                card.addEventListener('click', openPopup);
            });


        } else {

            cardPetCarousel.classList.remove('transition-right');

            let activePetCardsArray = activePetCardsWrapper.querySelectorAll('.card-pet');
            activePetCardsArray.forEach(card => {
                card.removeEventListener('click', openPopup);
            });

            activePetCardsWrapper.innerHTML = rightPetCardsWrapper.innerHTML;
            activePetsCardsRandomArray.length = 0;
            activePetsCardsRandomArray.push.apply(activePetsCardsRandomArray, rightPetCardsRandomArray);
            let petCardsChanged = createPetCardsArrayRandomSmall(rightPetCardsRandomArray);
            rightPetCardsWrapper.innerHTML = '';
            rightPetCardsWrapper.innerHTML = petCardsChanged;

            activePetCardsArray = activePetCardsWrapper.querySelectorAll('.card-pet');
            activePetCardsArray.forEach(card => {
                card.addEventListener('click', openPopup);
            });

        }

        rightArrow.addEventListener('click', moveCarouselRight);
        leftArrow.addEventListener('click', moveCarouselLeft);
    });

    // creat random array for the left and right sides

    function createPetCardsArrayRandomSmall(sideArray) {
        let petsCardsRandomSmallArray = new Array();
        if (viewForm() === "desktop") {
            for (let i = 0; i < 3; i++) {
                petsCardsRandomSmallArray.push(petsCardsArray[Math.floor(Math.random() * petsCardsArray.length)].id);
            }
        } else if(viewForm() === "netbook"){
            for (let i = 0; i < 2; i++) {
                petsCardsRandomSmallArray.push(petsCardsArray[Math.floor(Math.random() * petsCardsArray.length)].id);
            }
        } else if(viewForm() === "phone"){
            for (let i = 0; i < 1; i++) {
                petsCardsRandomSmallArray.push(petsCardsArray[Math.floor(Math.random() * petsCardsArray.length)].id);
            }
        }

        deleteDuplicates(petsCardsRandomSmallArray);
        findDublicates(petsCardsRandomSmallArray, activePetsCardsRandomArray);

        let petCardsChanged = petsCardsRandomSmallArray.map(card => {
            return createPetsCard(card);
        }).join("");

        sideArray.length = 0;
        sideArray.push.apply(sideArray, petsCardsRandomSmallArray);
         return petCardsChanged;

}



 /*        let petsCardsRandomSmallArray = new Array();


        for (let i = 0; i < 3; i++) {
            petsCardsRandomSmallArray.push(petsCardsArray[Math.floor(Math.random() * petsCardsArray.length)].id);
        }

        deleteDuplicates(petsCardsRandomSmallArray);
        findDublicates(petsCardsRandomSmallArray, activePetsCardsRandomArray);

        let petCardsChanged = petsCardsRandomSmallArray.map(card => {
            return createPetsCard(card);
        }).join("");

        sideArray.length = 0;
        sideArray.push.apply(sideArray, petsCardsRandomSmallArray);
         return petCardsChanged;
         }*/



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


    let activePetCardsArray = activePetCardsWrapper.querySelectorAll('.card-pet');
    activePetCardsArray.forEach(card => {
        card.addEventListener('click', openPopup);
    });




    function openPopup(even) {
        let card = event.target;
        let cardParent = card.parentElement;
        let cardParentdId = cardParent.getAttribute('id');
        let oCard = getCardObject(cardParentdId);

        popupHeader.innerHTML = oCard.name;
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

        let popupImg = document.createElement('img');
        popupImg.src = oCard.img;
        popupImgWrapper.appendChild(popupImg);

        popupContainter.classList.add('active');
        popupBackground.classList.add('active');
        body.classList.add("body-noscroll");

        placeCloseButton(popupContentWrapper, closePopupBtn);

    }

    function getCardObject(cardId) {
        for (let i = 0; i < petsCardsArray.length; i++) {
            if (cardId == petsCardsArray[i].id) {
                return petsCardsArray[i];
            }
        }
    }

    function placeCloseButton(text, button) {
        let textCoords = text.getBoundingClientRect();
        button.style.left = text.offsetWidth + "px";
        button.style.top = -button.clientHeight + "px";
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

});