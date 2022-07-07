export interface Usuarios {
    data: User[];
}

export interface User {
    id:              number;
    username:        string;
    email:           string;
    password:        string;
    salt:            string;
    id_recuperacion: null;
    last_ip:         null | string;
    gemas:           number | null;
    status:          number | null;
    id_confirmacion: null;
    macaddress:      null | string;
    serialhd:        null | string;
    vip:             Date | null;
    role:            string;
    createdAt:       Date;
    updatedAt:       Date;
}
