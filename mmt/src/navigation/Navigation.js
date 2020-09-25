import { Navigation } from 'react-native-navigation'
import { RNNDrawer } from 'react-native-navigation-drawer-extension';

export const authStack = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'App',
            children: [
                {
                    component: {
                        name: 'Login',
                    }
                },
                {
                    component: {
                        name: 'Signup',
                    }
                },
            ],
        }
    }
})

export const phoneAuth = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'App',
            children: [
                {
                    component: {
                        name: 'Login',
                    }
                },
                {
                    component: {
                        name: 'PhoneAuth',
                        options: {
                            topBar: {
                                title: {
                                    text: 'OTP',
                                    color: 'red',
                                }
                            }
                        }
                    }
                },
            ],
        }
    }
})
export const language = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'Language',
            children: [
                {
                    component: {
                        name: 'Language',
                        options: {
                            topBar: {
                                title: {
                                    text: 'Language',
                                    color: 'red',
                                }
                            }
                        }
                    }
                },
            ],
        }
    }
})
export const updateProfile = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'UpdateId',
            children: [
                {
                    component: {
                        name: 'UpdateProfile',
                    }
                },
            ],
        }
    }
})
export const logout = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'LogoutId',
            children: [
                {
                    component: {
                        name: 'Login',
                    }
                },
            ],
        }
    }
})
export const Drawer = () => {
    RNNDrawer.showDrawer({
        component: {
            name: 'Drawer',
            passProps: {
                animationOpenTime: 300,
                animationCloseTime: 300,
                direction: 'left',
                dismissWhenTouchOutside: true,
                fadeOpacity: .6,
                drawerScreenWidth: '70%',
                drawerScreenHeight: '100%',
                style: {
                    backgroundColor: 'skyblue',
                },
            }
        }
    })
}

const iconColor = "red";
const selectedIconColor = "#0089da";

export const tabNavigation = (icons) => {
    Navigation.setRoot({
        root: {
            bottomTabs: {
                id: "bottomTabs",
                children: [
                    {
                        component: {
                            name: "Home",
                            options: {
                                bottomTab: {
                                    fontSize: 15,
                                    text: "Home",
                                    icon: require('../assets/home.png'),
                                    iconColor,
                                    selectedIconColor
                                }
                            },
                        }
                    },
                    {
                        component: {
                            name: "Mytrip",
                            options: {
                                bottomTab: {
                                    fontSize: 15,
                                    text: "My Trips",
                                    icon: require('../assets/download.png'),
                                    iconColor,
                                    selectedIconColor
                                }
                            }
                        }
                    },
                    {
                        component: {
                            name: "Offers",
                            options: {
                                bottomTab: {
                                    fontSize: 15,
                                    text: "Offers",
                                    icon: require('../assets/percentage.png'),
                                    iconColor,
                                    selectedIconColor
                                }
                            }
                        }
                    },
                    {
                        component: {
                            name: "Tripideas",
                            options: {
                                bottomTab: {
                                    fontSize: 15,
                                    text: "Trip Ideas",
                                    icon: require('../assets/rocket.png'),
                                    iconColor,
                                    selectedIconColor
                                }
                            }
                        }
                    },
                    {
                        component: {
                            name: "Wallet",
                            options: {
                                bottomTab: {
                                    fontSize: 15,
                                    text: "Wallet",
                                    icon: require('../assets/wallet.png'),
                                    iconColor,
                                    selectedIconColor
                                }
                            }
                        }
                    },
                ]
            }
        }
    });
};
