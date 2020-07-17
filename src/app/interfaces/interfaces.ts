export interface producto {
    nombre:      string;
    descripcion: string;
    colores:     string[];
    img:         string;
    precio:      number;
    categoria:   string;
}

export interface porden{
    id: string;
    nombre: string;
    cantidad: number;
    precio: number;
}

export interface orden{
    productos: porden[];
    subtotal: number;
    totalprod: number;
    comentarios: string;
}

export interface tienda{
    nombre :  string;
    instagram :  string;
    facebook :  string;
    twitter : string;
    mail :  string;
    wa :  string;
    tlf :   number;
    direccion :  string;
    msj :  number;
}
