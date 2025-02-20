{
    class Cache<K extends string | number, V extends { id: number }> {
        private data: Map<K, V>;

        constructor() {
            this.data = new Map<K, V>();
        }

        set(key: K, value: V): void {
            this.data.set(key, value);
        }

        get(key: K): V | undefined {
            return this.data.get(key);
        }

        has(key: K): boolean {
            return this.data.has(key);
        }

        delete(key: K): boolean {
            return this.data.delete(key);
        }

        clear(): void {
            this.data.clear();
        }

    }

    interface IUser {
        id: number,
        name?: string
    }
    class User implements IUser {

        id: number;
        name?: string;

        constructor(id: number, name?: string) {
            this.id = id;
            if(name) this.name = name;
        }
    };

    const user1: User = new User(1, 'Kent');

    const usersCache: Cache<number, IUser> = new Cache<number, IUser>();
    usersCache.set(1, user1);

}