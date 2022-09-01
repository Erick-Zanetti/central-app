const date = new Date();

const getTimeOfDay = () => {
    const hours = date.getHours();

    if (hours < 12) {
        return "Bom dia";
    } else if (hours < 18) {
        return "Boa tarde";
    } else {
        return "Boa noite";
    }
};

const getCurrentDay = () => date.getUTCDate();

const getCurrentWeekDay = () => {
    switch (date.getDay()) {
        case 0:
            return "Domingo";
        case 1:
            return "Segunda";
        case 2:
            return "Terça";
        case 3:
            return "Quarta";
        case 4:
            return "Quinta";
        case 5:
            return "Sexta";
        case 6:
            return "Sabado";
        default:
            return "";
    }
};

const getCurrentMonth = () => {
    switch (date.getMonth()) {
        case 0:
            return "Jan";
        case 1:
            return "Fev";
        case 2:
            return "Mar";
        case 3:
            return "Abr";
        case 4:
            return "Mai";
        case 5:
            return "Jun";
        case 6:
            return "Jul";
        case 7:
            return "Ago";
        case 8:
            return "Set";
        case 9:
            return "Out";
        case 10:
            return "Nov";
        case 11:
            return "Dez";
        default:
            return "";
    }
};

const currentDay = date.toString().split(" ")[2];

export { getTimeOfDay, getCurrentDay, getCurrentWeekDay, getCurrentMonth };