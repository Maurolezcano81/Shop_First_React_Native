// styles.js

export const COLORS = {
    violet: '#6b21a8',
    gray0: '#52525b',
    gray06: "rgba(82, 82, 91, .6)",
    gray1: '#27272a',
    background: '#ede9fe',
    bgWhite: '#fafafa',
    whiteText: '#f4f4f5',
    orange: "#FB923C",
    red: "red"
};

export const FONT_SIZES = {
    small: 12,
    medium: 16,
    large: 20,
};

export const PADDING = {
    small: 8,
    medium: 16,
    large: 24,
};


export const BUTTONS = {
    pressedViolet: {
        borderWidth: 1,
        borderColor: COLORS.violet,
        backgroundColor: COLORS.bgWhite,
    },

    pressedTextViolet: {
        color: COLORS.violet,
        textAlign: "center",
        fontSize: FONT_SIZES.medium,
        fontWeight: 600
    }
}

export const SHADOWS = {
    shadowBox1: {
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,

        elevation: 5,
    },

    shadowBox2: {
        borderRadius: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 1,

        elevation: 2,
    },

}

export const BORDERS = {
    border1: {
        borderWidth: 1,
        borderColor: "black",
    },

    borderBottom: {
        borderBottomWidth: 1,       
        borderColor: COLORS.gray0,
    }
}
