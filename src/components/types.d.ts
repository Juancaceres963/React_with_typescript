//Tipo de archivo .d.ts donde pueden ir solo definiciones (interfaces)
// no puden haber funciones, no van a servir
export interface Sub {
    nick: string
    avatar: string
    subMonths: number
    description?: string
}