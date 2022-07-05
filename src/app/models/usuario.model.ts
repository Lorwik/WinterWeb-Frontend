export class Usuario {

    constructor(
        public id: number,
        public username: string,
        public email: string,
        public vip: Date,
        public role: string,
        public updatedAt: Date,
        public createdAt: Date,
    ) { }

    getRole(): string {
        return this.role;
    }
    
    getVip(): Date {
        return this.vip;
    }

    getCreatedAt(): Date {
        return this.createdAt;
    }

    getUpdatedAt(): Date {
        return this.updatedAt;
    }

    getUsername(): string {
        return this.username;
    }

    getEmail(): string {
        return this.email;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number) {
        this.id = id;
    }

}