export const __localStorage__ = {
    set<T>(key: string, value: T) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get<T>(key: string): T | null {
        return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : null;
    },
    remove(key: string): void {
        return localStorage.removeItem(key);
    },
};
