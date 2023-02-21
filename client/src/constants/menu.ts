const main = [
    {
        text: "Home",
        url: "/",
        icon: "home"
    }, {
        text: "News",
        url: "/news",
        icon: "loud-speaker"
    }, {
        text: "Sportsbook",
        url: "/sportsbook",
        icon: "soccer"
    }, {
        text: "Live Casino",
        url: "/livecasino",
        icon: "poker-card"
    }, {
        text: "Promotions",
        url: "/promotions",
        icon: "promotion"
    }, {
        text: "VIP",
        url: "/vip",
        icon: "vip"
    }
] as const

const subMenu = [
    {
        text: "About Us",
        url: "/about",
        icon: "about"
    },
    {
        text: "Rewards",
        url: "/rewards",
        icon: "coin-purse"
    },
    {
        text: "Profile",
        url: "/profile",
        icon: "profile"
    },
    {
        text: "History",
        url: "/history",
        icon: "file"
    },
    {
        text: "Refer Friend",
        url: "/refer-friend",
        icon: "friend"
    },
    {
        text: "Affiliates",
        url: "/affiliates",
        icon: "affiliate"
    },
] as const

const helpMenu = [
    {
        text: "Help Center",
        url: "/help-center"
    },
    {
        text: "Contact Us",
        url: "/contact-us"
    },
    {
        text: "Live Chat",
        url: "/livechat"
    }
]

const menu = {
    main, subMenu, helpMenu
}

export default menu