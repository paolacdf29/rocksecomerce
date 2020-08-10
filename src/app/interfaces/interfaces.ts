export interface producto {
    nombre:      string;
    descripcion: string;
    colores:     string[];
    img:         string;
    precio:      number;
    categoria:   string;
    activo:      boolean;
    imgref:      string;
}

export interface porden{
    nombre: string;
    cantidad: number;
    precio: number;
}

export interface comprador{
    nombre: string;
    direccion: string;
    email: string;
    telefono: number;
}

export interface orden{
    productos: porden[];
    subtotal: number;
    totalprod: number;
    comentarios: string;
    comprador: comprador;
    estado: number;
    fecha: string;
    pago: string;
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
    pago: string;
}
