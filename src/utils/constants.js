const BRANDS = ['SUZUKI', 'DODGE', 'TOYOTA', 'BMW', 'HONDA']
const COLORS = ['RED', 'BLUE', 'GREEN', 'BLACK', 'WHITE']
const VEHICLE_TYPE = [
    {
        type: 'Sedan',
        motor: ['1.4cc', '1.6cc','2.0cc'],
    },
    {
        type: 'Camioneta',
        motor: ['2.4cc', '3.0cc','4.0cc'],
        cabins: [1, 2],
    },
    {
        type: 'SUV',
        motor: ['1.8cc', '2.2cc','2.8cc'],
        sunRoof: [true,false]
    }
]

const priceFormatter = new Intl.NumberFormat('es-CL', {
    currency: 'CLP',
    style: 'currency',
})

module.exports = {
    BRANDS,
    COLORS,
    VEHICLE_TYPE,
    priceFormatter
}