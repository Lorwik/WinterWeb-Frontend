export interface Noticias {
    data: Noticia[];
}

export interface Noticia {
    id:        number;
    titulo:    string;
    cuerpo:    string;
    cuentaid:  null;
    createdAt: Date;
    updatedAt: Date;
}

