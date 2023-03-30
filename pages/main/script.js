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


      let petsCardsArrayRandom = new Array();
      for (let i = 0; i <= petsCardsArray.length; i++) {
        petsCardsArrayRandom[i] = petsCardsArray[Math.floor(Math.random() * petsCardsArray.length)];
/*         petsCardsArrayRandom.push(petsCardsArrayRandom[i]); */
      }

    function createPetsCard (img, name){
        return `
            <div class="card-pet">
            <img src=${img} alt=${name}>
            <p class="card-name">${name}</p>
            <button type="button" class="card-button" onclick='location.href="#our-pets"'>Learn more</button>
            </div>`
    }

    const cardPetCarousel = document.querySelector('.carousel');
    const cardPetCarouselLeft = document.querySelector('.carousel_left-items');
    const cardPetCarouselActive = document.querySelector('.carousel_active-items');
    const cardPetCarouselRight = document.querySelector('.carousel_right-items');

    const petsCardsArrayRandomLeft = petsCardsArrayRandom.slice(0, 3);
    const petsCardsArrayRandomActive = petsCardsArrayRandom.slice(3, 6);
    const petsCardsArrayRandomRight = petsCardsArrayRandom.slice(6);

    const petCardsLeft = petsCardsArrayRandomLeft.map(card => {
        return createPetsCard(card.img, card.name);
    }).join("");
    cardPetCarouselLeft.innerHTML = petCardsLeft;

    const petCardsActive = petsCardsArrayRandomActive.map(card => {
        return createPetsCard(card.img, card.name);
    }).join("");
    cardPetCarouselActive.innerHTML = petCardsActive;


    const petCardsRight = petsCardsArrayRandomRight.map(card => {
        return createPetsCard(card.img, card.name);
    }).join("");
    cardPetCarouselRight.innerHTML = petCardsRight;



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
            cardPetCarouselActive.innerHTML = cardPetCarouselLeft.innerHTML;

            /* let petCardsLeftNewArray = createPetCardsArrayRandomSmall(); */

/*             let petCardsLeftNew = petCardsLeftNewArray.map(card => {
                return createPetsCard(card.img, card.name);
            }).join(""); */

            /* cardPetCarouselLeft.innerHTML = '';
            cardPetCarouselLeft.innerHTML = petCardsLeftNew; */

            let petCardsChanged = createPetCardsArrayRandomSmall();
            cardPetCarouselLeft.innerHTML = '';
            cardPetCarouselLeft.innerHTML = petCardsChanged;


        } else {

            cardPetCarousel.classList.remove('transition-right');
            cardPetCarouselActive.innerHTML = cardPetCarouselRight.innerHTML;

/*             let petCardsRightNewArray = createPetCardsArrayRandomSmall();
            let petCardsRightNew = petCardsRightNewArray.map(card => {
                return createPetsCard(card.img, card.name);
            }).join(""); */

            let petCardsChanged = createPetCardsArrayRandomSmall();

            cardPetCarouselRight.innerHTML = '';
            cardPetCarouselRight.innerHTML = petCardsChanged;

        }

        rightArrow.addEventListener('click', moveCarouselRight);
        leftArrow.addEventListener('click', moveCarouselLeft);
    });

    function createPetCardsArrayRandomSmall() {
        let petsCardsArrayRandomSmall = new Array();
        for (let i = 0; i < 3; i++) {
        petsCardsArrayRandomSmall.push(petsCardsArray[Math.floor(Math.random() * petsCardsArray.length)]);
        }
        /* return petsCardsArrayRandomSmall; */

        let petCardsChanged = petsCardsArrayRandomSmall.map(card => {
            return createPetsCard(card.img, card.name);
        }).join("");

         return petCardsChanged;

    }





});