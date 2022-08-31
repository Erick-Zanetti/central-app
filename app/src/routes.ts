interface RouterRuleActive {
    startWith?: string[];
    equals?: string[];
}

interface Routes {
    [key: string]: RouterRuleActive
}

export const routes: Routes = {
    FINANCIAL_MANAGEMENT: {
        startWith: ['/financial-management'],
    },
    HOME: {
        startWith: ['/home'],
        equals: ["/", ""]
    },
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