const activities = [
  'Musculation',
  'LesMills BodyPump',
  'Striking',
  'Spinning',
  'Kickboxing Kids',
  'Fight Team',
  'Judo & Jiu-jitsu Kids',
  'Pilates Flow',
  'Abdo'
];

export default function handler(_request, response) {
  response.setHeader('Cache-Control', 'no-store');
  response.status(200).json({ activities });
}
