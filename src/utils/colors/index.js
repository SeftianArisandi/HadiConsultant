const mainColors = {
    blue1: '#1A73E8',
    white1: '#FFFFFF',
    grey1: '#F5F7FA',
    grey2: '#7D8997',
    grey3: '#DCDFE3',
    grey4: '#ADB4BD',
    black1: '#2F353B',
    yellow1: '#F6931E',
    red1: '#FF2A2A',
    red2: '#FFF3F3'
}

export const colors = {
    primary: '#1A73E8',
    primaryFaded: 'rgba(26, 115, 232, 0.19)',
    componentDefault: '#F5F7FA',
    blue: '#1C215D',
    gray: '#666666',
    white: 'white',
    black: 'black',
    text: {
        primary: mainColors.black1,
        secondary: mainColors.grey2,
        error: mainColors.red1
    },
    button: {
        primary: {
            background: mainColors.blue1,
            text: 'white'
        },
        secondary: {
            background: mainColors.grey1,
            text: mainColors.black1
        }
    },
    input: {
        background: mainColors.grey1,
        text: mainColors.grey2
    },
    errorInput: {
        background: mainColors.red2,
        border: mainColors.red1
    },
    bottomNavigation: {
        active: mainColors.blue1,
        inactive: mainColors.grey4
    },
    border: mainColors.grey1,
}