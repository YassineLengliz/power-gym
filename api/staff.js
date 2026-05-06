const staff = [
  {
    name: 'Mouhamed Mokhtar',
    phone: '22825401',
    whatsapp: 'https://wa.me/21622825401',
    role: 'Coach de plateau'
  },
  {
    name: 'Mohamed Znaidy',
    phone: '53464695',
    whatsapp: 'https://wa.me/21653464695',
    role: 'Coach de plateau'
  }
];

export default function handler(_request, response) {
  response.setHeader('Cache-Control', 'no-store');
  response.status(200).json({ staff });
}
