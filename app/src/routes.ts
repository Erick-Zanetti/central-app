export enum Applications {
    FINANCIAL_MANAGEMENT = 'FINANCIAL_MANAGEMENT',
    HOME = 'HOME',
    TODO_LIST = 'TODO_LIST',
    PORTFOLIO = 'PORTFOLIO',
    TYPING = 'TYPING',
}

export const routes: Routes = {
    FINANCIAL_MANAGEMENT: {
        startWith: ['/financial-management'],
    },
    HOME: {
        startWith: ['/home'],
        equals: ["/", ""]
    },
    TODO_LIST: {
        startWith: ['/to-do-list'],
    },
    PORTFOLIO: {
        startWith: ['/portfolio'],
    },
    TYPING: {
        startWith: ['/typing'],
    }
}

export function activeWhen(location: Location, rule: RouterRuleActive): boolean {
    if (rule.equals) {
        const has = rule.equals.some(v => location.pathname === v);
        if (has) {
            return true;
        }
    }
    if (rule.startWith) {
        const has = rule.startWith.some(v => location.pathname.startsWith(v));
        if (has) {
            return true;
        }
    }
    return false;
}

interface RouterRuleActive {
    startWith?: string[];
    equals?: string[];
}

type Routes = {
    [key in Applications]: RouterRuleActive
}